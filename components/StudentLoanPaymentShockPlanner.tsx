'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(amount);

const planOptions = ['SAVE', 'RAP', 'IBR', 'PAYE', 'ICR', 'Standard repayment', 'Graduated repayment', 'Not sure'];
const issueOptions = [
  'SAVE transition or plan change',
  'Income recertification changed',
  'Family size changed',
  'Interest capitalization or balance changed',
  'PSLF payment count concern',
  'Servicer estimate looks wrong',
  'Not sure why it changed',
];

function getDaysUntil(dateValue: string) {
  if (!dateValue) return null;
  const today = new Date();
  const due = new Date(`${dateValue}T00:00:00`);
  today.setHours(0, 0, 0, 0);
  return Math.ceil((due.getTime() - today.getTime()) / 86400000);
}

export default function StudentLoanPaymentShockPlanner() {
  const [oldPayment, setOldPayment] = useState('0');
  const [newPayment, setNewPayment] = useState('167');
  const [dueDate, setDueDate] = useState('');
  const [currentPlan, setCurrentPlan] = useState('SAVE');
  const [issueType, setIssueType] = useState('SAVE transition or plan change');
  const [pslf, setPslf] = useState('not-sure');
  const [incomeChanged, setIncomeChanged] = useState('not-sure');
  const [servicerNotice, setServicerNotice] = useState('yes');
  const [status, setStatus] = useState<string | null>(null);

  const result = useMemo(() => {
    const oldAmount = Math.max(0, Number.parseFloat(oldPayment) || 0);
    const newAmount = Math.max(0, Number.parseFloat(newPayment) || 0);
    const monthlyIncrease = newAmount - oldAmount;
    const annualIncrease = monthlyIncrease * 12;
    const percentIncrease = oldAmount > 0 ? (monthlyIncrease / oldAmount) * 100 : null;
    const daysUntilDue = getDaysUntil(dueDate);

    const urgency = daysUntilDue === null
      ? 'Add the due date to set urgency.'
      : daysUntilDue < 0
        ? 'Past due: contact your servicer immediately and ask what options protect the account.'
        : daysUntilDue <= 7
          ? 'High urgency: call and send a written request today.'
          : daysUntilDue <= 30
            ? 'Moderate urgency: verify the amount and submit any required form this week.'
            : 'Lower urgency: compare plans now, then submit early enough for processing.';

    const nextActions = [
      'Check whether the new amount is an estimate, a bill, or a plan approval notice.',
      'Compare RAP, IBR, PAYE, ICR, and Standard repayment before assuming the new amount is final.',
      'Ask your servicer for the calculation inputs: AGI, family size, loan type, plan, deadline, and processing status.',
      'Save screenshots, notices, call notes, and confirmation numbers in case you need to escalate.',
    ];

    if (pslf === 'yes') {
      nextActions.unshift('Before choosing the lowest payment, verify whether the plan produces PSLF-qualifying monthly payments.');
    }

    if (incomeChanged === 'yes') {
      nextActions.push('If income changed materially, ask whether updated income documentation or IDR recertification can change the payment.');
    }

    if (servicerNotice === 'no') {
      nextActions.push('If there was no written notice, ask the servicer to explain the payment change in writing.');
    }

    const message = [
      `Subject: Request to verify student loan payment increase`,
      '',
      'Hello,',
      '',
      `My monthly student loan payment changed from ${formatCurrency(oldAmount)} to ${formatCurrency(newAmount)} under or after ${currentPlan}.`,
      `The issue I need help with is: ${issueType}.`,
      dueDate ? `The next due date shown on my account is ${dueDate}.` : 'Please confirm the next due date and whether this amount is final.',
      '',
      'Please confirm in writing:',
      '1. Whether this amount is an estimate, a bill, or an approved repayment plan amount.',
      '2. Which income, family size, loan type, and repayment plan inputs were used.',
      '3. Whether RAP, IBR, PAYE, ICR, or Standard repayment would produce a lower eligible payment.',
      '4. Whether I need to submit or update income documentation before the due date.',
      '5. Whether changing plans could affect PSLF qualifying payments, if PSLF applies.',
      '6. The confirmation number for this request.',
      '',
      'Thank you.',
    ].join('\n');

    return { oldAmount, newAmount, monthlyIncrease, annualIncrease, percentIncrease, daysUntilDue, urgency, nextActions, message };
  }, [oldPayment, newPayment, dueDate, currentPlan, issueType, pslf, incomeChanged, servicerNotice]);

  const copyMessage = async () => {
    if (!navigator.clipboard) {
      setStatus('Clipboard is not available in this browser. You can manually select the message.');
      return;
    }

    await navigator.clipboard.writeText(result.message);
    setStatus('Servicer verification message copied.');
    trackEvent('payment_shock_message_copy', { issue_type: issueType, plan: currentPlan });
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="space-y-4">
          <div>
            <label htmlFor="oldPayment" className="mb-2 block text-sm font-medium text-gray-700">Previous monthly payment</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input id="oldPayment" type="number" min="0" step="1" value={oldPayment} onChange={(event) => setOldPayment(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>

          <div>
            <label htmlFor="newPayment" className="mb-2 block text-sm font-medium text-gray-700">New monthly payment</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input id="newPayment" type="number" min="0" step="1" value={newPayment} onChange={(event) => setNewPayment(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>

          <div>
            <label htmlFor="dueDate" className="mb-2 block text-sm font-medium text-gray-700">Next due date</label>
            <input id="dueDate" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="currentPlan" className="mb-2 block text-sm font-medium text-gray-700">Current or prior plan</label>
            <select id="currentPlan" value={currentPlan} onChange={(event) => setCurrentPlan(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              {planOptions.map((plan) => <option key={plan} value={plan}>{plan}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="issueType" className="mb-2 block text-sm font-medium text-gray-700">Likely reason</label>
            <select id="issueType" value={issueType} onChange={(event) => setIssueType(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              {issueOptions.map((issue) => <option key={issue} value={issue}>{issue}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="pslf" className="mb-2 block text-sm font-medium text-gray-700">Pursuing PSLF?</label>
            <select id="pslf" value={pslf} onChange={(event) => setPslf(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="incomeChanged" className="mb-2 block text-sm font-medium text-gray-700">Income changed recently?</label>
            <select id="incomeChanged" value={incomeChanged} onChange={(event) => setIncomeChanged(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="servicerNotice" className="mb-2 block text-sm font-medium text-gray-700">Received written notice?</label>
            <select id="servicerNotice" value={servicerNotice} onChange={(event) => setServicerNotice(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </form>

        <div className="space-y-6">
          <section className="rounded-3xl bg-rose-50 p-6 text-rose-950">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">Payment change</p>
            <p className="mt-2 text-5xl font-bold">{formatCurrency(result.monthlyIncrease)}<span className="text-xl font-semibold">/mo</span></p>
            <p className="mt-3 text-rose-900">
              That is {formatCurrency(result.annualIncrease)} per year{result.percentIncrease === null ? ' from a previous $0 payment.' : `, or about ${Math.round(result.percentIncrease)}% above the prior payment.`}
            </p>
            <p className="mt-4 rounded-2xl bg-white p-4 font-semibold text-rose-950">{result.urgency}</p>
          </section>

          <section className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold text-gray-900">Next steps to verify the increase</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {result.nextActions.map((action) => <li key={action}>- {action}</li>)}
            </ul>
          </section>

          <section className="rounded-2xl border bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-gray-900">Servicer verification message</h2>
            <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-sm text-gray-700">{result.message}</pre>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={copyMessage} className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">Copy message</button>
              <button type="button" onClick={() => { trackEvent('payment_shock_print', { issue_type: issueType, plan: currentPlan }); window.print(); }} className="rounded-xl border px-5 py-3 font-semibold text-slate-900 hover:bg-white">Print plan</button>
              <Link href="/rap-vs-save-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-800 hover:bg-white">Compare RAP vs SAVE</Link>
            </div>
            {status && <p className="mt-3 text-sm text-gray-600" role="status">{status}</p>}
          </section>
        </div>
      </div>
    </div>
  );
}
