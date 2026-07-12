type ContactEnv = {
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_WEBHOOK_URL?: string;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type PagesContext = {
  request: Request;
  env: ContactEnv;
};

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
  page?: string;
  turnstileToken?: string;
};

const subjectLabels: Record<string, string> = {
  calculator: 'Calculator Question',
  idr: 'IDR Plan Help',
  pslf: 'PSLF Question',
  feedback: 'Feedback',
  other: 'Other',
};

const json = (body: Record<string, unknown>, init?: ResponseInit) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(init?.headers || {}),
    },
  });

const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

async function readPayload(request: Request): Promise<ContactPayload | null> {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return null;
    }
    return body as ContactPayload;
  } catch {
    return null;
  }
}

async function verifyTurnstile(token: string | undefined, env: ContactEnv, request: Request) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return true;
  }

  if (!token) {
    return false;
  }

  const formData = new FormData();
  formData.append('secret', env.TURNSTILE_SECRET_KEY);
  formData.append('response', token);

  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) {
    formData.append('remoteip', ip);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json() as { success?: boolean };
  return Boolean(result.success);
}

async function sendWithResend(payload: Required<Pick<ContactPayload, 'email' | 'message'>> & ContactPayload, env: ContactEnv) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return false;
  }

  const subject = subjectLabels[payload.subject || 'other'] || subjectLabels.other;
  const from = env.CONTACT_FROM_EMAIL || 'RepaymentGuide <onboarding@resend.dev>';
  const text = [
    `Name: ${payload.name || 'Not provided'}`,
    `Email: ${payload.email}`,
    `Topic: ${subject}`,
    `Page: ${payload.page || 'Not provided'}`,
    '',
    payload.message,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: `[RepaymentGuide] ${subject}`,
      text,
    }),
  });

  return response.ok;
}

async function sendToWebhook(payload: ContactPayload, env: ContactEnv) {
  if (!env.CONTACT_WEBHOOK_URL) {
    return false;
  }

  const response = await fetch(env.CONTACT_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source: 'repaymentguide-contact',
      submittedAt: new Date().toISOString(),
      ...payload,
    }),
  });

  return response.ok;
}

export async function onRequestPost(context: PagesContext) {
  const payload = await readPayload(context.request);

  if (!payload) {
    return json({ ok: false, error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (payload.website) {
    return json({ ok: true });
  }

  const email = String(payload.email || '').trim();
  const message = String(payload.message || '').trim();
  const name = String(payload.name || '').trim().slice(0, 120);
  const subject = String(payload.subject || 'other').trim();
  const page = String(payload.page || '').trim().slice(0, 300);

  if (!isEmail(email) || message.length < 10) {
    return json({ ok: false, error: 'Email and message are required.' }, { status: 400 });
  }

  if (message.length > 5000) {
    return json({ ok: false, error: 'Message is too long.' }, { status: 400 });
  }

  const turnstileOk = await verifyTurnstile(payload.turnstileToken, context.env, context.request);
  if (!turnstileOk) {
    return json({ ok: false, error: 'Verification failed.' }, { status: 400 });
  }

  const cleanPayload = {
    name,
    email,
    subject,
    message,
    page,
  };

  const sentWithResend = await sendWithResend(cleanPayload, context.env);
  const sentToWebhook = sentWithResend ? true : await sendToWebhook(cleanPayload, context.env);

  if (!sentWithResend && !sentToWebhook) {
    return json(
      {
        ok: false,
        error: 'Contact delivery is not configured.',
        fallback: 'mailto',
      },
      { status: 503 },
    );
  }

  return json({ ok: true });
}

export async function onRequestGet() {
  return json({ ok: false, error: 'Method not allowed.' }, { status: 405 });
}
