'use client';

import { FormEvent, useState } from 'react';

const CONTACT_EMAIL = 'gachiawiki@gmail.com';

const subjectLabels: Record<string, string> = {
  calculator: 'Calculator Question',
  idr: 'IDR Plan Help',
  pslf: 'PSLF Question',
  feedback: 'Feedback',
  other: 'Other',
};

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subjectValue = String(formData.get('subject') || 'other');
    const message = String(formData.get('message') || '').trim();
    const subject = subjectLabels[subjectValue] || subjectLabels.other;

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
    setStatus('Your email app should open with a draft message.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
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

      <button
        type="submit"
        className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
      >
        Open Email Draft
      </button>

      {status && (
        <p className="text-sm text-gray-600 text-center" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
