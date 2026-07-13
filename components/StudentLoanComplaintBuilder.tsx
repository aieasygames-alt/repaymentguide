'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const issueTypes = [
  'Repayment plan processing delay',
  'Incorrect payment amount',
  'PSLF qualifying payment issue',
  'SAVE transition or RAP question',
  'Parent PLUS or consolidation eligibility issue',
  'Default or collection issue',
  'Other servicer problem',
];

export default function StudentLoanComplaintBuilder() {
  const [servicer, setServicer] = useState('My student loan servicer');
  const [issueType, setIssueType] = useState(issueTypes[0]);
  const [firstContactDate, setFirstContactDate] = useState('');
  const [latestContactDate, setLatestContactDate] = useState('');
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [requestedFix, setRequestedFix] = useState('Confirm my correct repayment options, payment amount, deadline, and next required action in writing.');
  const [status, setStatus] = useState<string | null>(null);

  const packet = useMemo(() => {
    const timeline = [
      firstContactDate ? `First contact date: ${firstContactDate}` : 'First contact date: [add date]',
      latestContactDate ? `Most recent contact date: ${latestContactDate}` : 'Most recent contact date: [add date]',
      confirmationNumber ? `Confirmation or case number: ${confirmationNumber}` : 'Confirmation or case number: [add number if available]',
      amount ? `Payment amount or dollar impact: ${amount}` : 'Payment amount or dollar impact: [add amount if relevant]',
      deadline ? `Deadline or due date at risk: ${deadline}` : 'Deadline or due date at risk: [add deadline if relevant]',
    ];

    const complaintText = [
      `Company/servicer: ${servicer}`,
      `Issue type: ${issueType}`,
      '',
      'Summary of the problem:',
      `I am requesting help with a student loan servicing issue involving ${issueType.toLowerCase()}. I contacted the servicer, but I still need a clear written answer or correction before I can safely choose or maintain my repayment plan.`,
      '',
      'Timeline and facts:',
      ...timeline.map((line) => `- ${line}`),
      '',
      'What I need fixed:',
      requestedFix,
      '',
      'Documents I can attach:',
      '- Servicer notices, emails, or account messages',
      '- Screenshots of my account, payment estimate, or plan application',
      '- Call notes with dates, representative names, and confirmation numbers',
      '- StudentAid.gov loan list, PSLF counts, or IDR application confirmation if relevant',
    ].join('\n');

    return { complaintText, timeline };
  }, [servicer, issueType, firstContactDate, latestContactDate, confirmationNumber, amount, deadline, requestedFix]);

  const copyPacket = async () => {
    if (!navigator.clipboard) {
      setStatus('Clipboard is not available in this browser. You can manually select the text below.');
      return;
    }

    await navigator.clipboard.writeText(packet.complaintText);
    setStatus('Complaint packet copied to clipboard.');
    trackEvent('complaint_packet_copy', { issue_type: issueType });
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="space-y-4">
          <div>
            <label htmlFor="servicer" className="mb-2 block text-sm font-medium text-gray-700">Servicer or company name</label>
            <input id="servicer" value={servicer} onChange={(event) => setServicer(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="issueType" className="mb-2 block text-sm font-medium text-gray-700">Main issue</label>
            <select id="issueType" value={issueType} onChange={(event) => setIssueType(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              {issueTypes.map((issue) => <option key={issue} value={issue}>{issue}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="firstContactDate" className="mb-2 block text-sm font-medium text-gray-700">First contact date</label>
            <input id="firstContactDate" type="date" value={firstContactDate} onChange={(event) => setFirstContactDate(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="latestContactDate" className="mb-2 block text-sm font-medium text-gray-700">Most recent contact date</label>
            <input id="latestContactDate" type="date" value={latestContactDate} onChange={(event) => setLatestContactDate(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="confirmationNumber" className="mb-2 block text-sm font-medium text-gray-700">Confirmation or case number</label>
            <input id="confirmationNumber" value={confirmationNumber} onChange={(event) => setConfirmationNumber(event.target.value)} placeholder="Optional" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="amount" className="mb-2 block text-sm font-medium text-gray-700">Dollar amount affected</label>
            <input id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Example: $167/month" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="deadline" className="mb-2 block text-sm font-medium text-gray-700">Deadline at risk</label>
            <input id="deadline" type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="requestedFix" className="mb-2 block text-sm font-medium text-gray-700">What you want fixed</label>
            <textarea id="requestedFix" value={requestedFix} onChange={(event) => setRequestedFix(event.target.value)} rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>
        </form>

        <div className="space-y-6">
          <section className="rounded-2xl bg-primary-50 p-5">
            <h2 className="text-xl font-bold text-primary-950">Complaint packet draft</h2>
            <p className="mt-2 text-sm text-primary-900">Use this as a starting point for FSA Feedback Center, CFPB, or a written servicer follow-up.</p>
            <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-sm text-gray-700">{packet.complaintText}</pre>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={copyPacket} className="rounded-xl bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">Copy complaint packet</button>
              <button type="button" onClick={() => { trackEvent('complaint_packet_print', { issue_type: issueType }); window.print(); }} className="rounded-xl border px-5 py-3 font-semibold text-primary-800 hover:bg-primary-100">Print packet</button>
              <Link href="/servicer-contact-toolkit" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-800 hover:bg-primary-100">Prepare servicer call</Link>
            </div>
            {status && <p className="mt-3 text-sm text-primary-900" role="status">{status}</p>}
          </section>

          <section className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold text-gray-900">Before you submit</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>- Remove account numbers unless the complaint system specifically asks for them.</li>
              <li>- Attach proof, not every document you own. Keep it focused on dates, amounts, notices, and confirmations.</li>
              <li>- Ask for the exact correction you want, such as a payment recalculation, deadline confirmation, or written plan eligibility decision.</li>
              <li>- Save the submitted complaint confirmation and set a reminder to check the case status.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
