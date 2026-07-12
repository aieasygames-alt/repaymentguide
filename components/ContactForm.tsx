'use client';

import Script from 'next/script';
import { FormEvent, useEffect, useState } from 'react';

const CONTACT_EMAIL = 'gachiawiki@gmail.com';
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

declare global {
  interface Window {
    onRepaymentGuideTurnstile?: (token: string) => void;
    turnstile?: {
      reset: () => void;
    };
  }
}

const subjectLabels: Record<string, string> = {
  calculator: 'Calculator Question',
  idr: 'IDR Plan Help',
  pslf: 'PSLF Question',
  feedback: 'Feedback',
  other: 'Other',
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'fallback' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitState>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    window.onRepaymentGuideTurnstile = (token: string) => {
      setTurnstileToken(token);
    };

    return () => {
      delete window.onRepaymentGuideTurnstile;
    };
  }, []);

  const openEmailDraft = ({
    name,
    email,
    subject,
    message,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const body = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      '',
      message,
    ].filter((line) => line !== null).join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[RepaymentGuide] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subjectValue = String(formData.get('subject') || 'other');
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || '').trim();
    const subject = subjectLabels[subjectValue] || subjectLabels.other;

    if (!email || !message) {
      setStatus('error');
      setStatusMessage('Please include your email and a message so we can respond.');
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setStatus('error');
      setStatusMessage('Please complete the verification before sending.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: subjectValue,
          message,
          website,
          page: window.location.href,
          turnstileToken,
        }),
      });

      if (response.ok) {
        event.currentTarget.reset();
        setTurnstileToken('');
        window.turnstile?.reset();
        setStatus('success');
        setStatusMessage('Thanks. Your message was sent successfully.');
        return;
      }

      openEmailDraft({ name, email, subject, message });
      setStatus('fallback');
      setStatusMessage('We opened an email draft because the contact endpoint is not fully configured yet.');
    } catch {
      openEmailDraft({ name, email, subject, message });
      setStatus('fallback');
      setStatusMessage('We opened an email draft because the contact endpoint could not be reached.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          defaultValue=""
          required
        >
          <option value="" disabled>Select a topic</option>
          <option value="calculator">Calculator Question</option>
          <option value="idr">IDR Plan Help</option>
          <option value="pslf">PSLF Question</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="How can we help you?"
          required
        />
      </div>

      {turnstileSiteKey && (
        <div
          className="cf-turnstile"
          data-sitekey={turnstileSiteKey}
          data-callback="onRepaymentGuideTurnstile"
        />
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {statusMessage && (
        <p
          className={`text-sm text-center ${
            status === 'success'
              ? 'text-green-700'
              : status === 'error'
                ? 'text-red-700'
                : 'text-gray-600'
          }`}
          role="status"
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
