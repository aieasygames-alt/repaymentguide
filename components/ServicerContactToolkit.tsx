'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const planOptions = ['RAP', 'IBR', 'PAYE', 'ICR', 'Standard repayment', 'Not sure yet'];

export default function ServicerContactToolkit() {
  const [servicer, setServicer] = useState('My loan servicer');
  const [noticeDate, setNoticeDate] = useState('2026-07-01');
  const [deadline, setDeadline] = useState('');
  const [currentPlan, setCurrentPlan] = useState('SAVE');
  const [targetPlan, setTargetPlan] = useState('Not sure yet');
  const [pslf, setPslf] = useState('not-sure');
  const [parentPlus, setParentPlus] = useState('not-sure');
  const [status, setStatus] = useState<string | null>(null);

  const generated = useMemo(() => {
    const pslfLine = pslf === 'yes'
      ? 'I am pursuing PSLF, so please confirm whether any plan change will produce PSLF-qualifying monthly payments and whether I need to take any additional steps.'
      : pslf === 'no'
        ? 'I am not currently pursuing PSLF.'
        : 'I am not sure whether PSLF applies to me and would like to avoid choosing a plan that creates problems later.';

    const parentPlusLine = parentPlus === 'yes'
      ? 'My account may include Parent PLUS loans or consolidation loans involving Parent PLUS loans. Please confirm how that affects RAP, IBR, PAYE, ICR, and Standard repayment eligibility.'
      : parentPlus === 'no'
        ? 'I do not believe my account includes Parent PLUS loans.'
        : 'I am not sure whether any loans on my account include Parent PLUS history. Please confirm loan type and consolidation history.';

    const deadlineLine = deadline
      ? `The deadline shown on my notice or account is ${deadline}.`
      : `The notice date I have is ${noticeDate}. If there is a specific servicer deadline, please confirm it in writing.`;

    const email = [
      `Subject: Request to confirm repayment plan options after ${currentPlan}`,
      '',
      `Hello ${servicer},`,
      '',
      `I am reviewing my repayment options after ${currentPlan}. ${deadlineLine}`,
      '',
      `I am currently considering: ${targetPlan}. Before I submit a final choice, please confirm:`,
      '',
      '1. Which repayment plans are currently available for my loans.',
      '2. Whether RAP is available for my specific loan types and consolidation history.',
      '3. My estimated monthly payment under RAP, IBR, PAYE, ICR, and Standard repayment if available.',
      '4. Whether the plan I choose will affect PSLF qualifying payments, if PSLF applies.',
      '5. Whether I need to recertify income or submit any additional documentation.',
      '6. The date by which I need to submit my plan choice to avoid payment shock or processing delays.',
      '',
      pslfLine,
      parentPlusLine,
      '',
      'Please respond in writing or provide a confirmation number for this request.',
      '',
      'Thank you.',
    ].join('\n');

    const callScript = [
      `Call ${servicer} and say:`,
      '',
      `"I received or expect a notice about leaving ${currentPlan}. I need to confirm my repayment options and deadline before choosing a new plan."`,
      '',
      'Ask these questions:',
      '1. What is my official deadline to choose a new repayment plan?',
      '2. Which of my loans are Direct Loans, FFEL, Perkins, Parent PLUS, or consolidation loans?',
      '3. Am I eligible for RAP? If not, why not?',
      '4. What are my estimated payments under RAP, IBR, PAYE, ICR, and Standard repayment?',
      '5. If I am pursuing PSLF, will the selected plan produce qualifying payments?',
      '6. What documentation do you need from me?',
      '7. Can you give me a confirmation number for this call?',
      '',
      'Before hanging up, repeat back the deadline, plan choice, next step, and confirmation number.',
    ].join('\n');

    const documentChecklist = [
      'Servicer notice letter, email, or account message',
      'Notice sent date and any stated due date',
      'StudentAid.gov loan list and loan types',
      'Current servicer payment amount',
      'Most recent tax return or income documentation',
      'PSLF employer certification status, if applicable',
      'Parent PLUS or consolidation history, if applicable',
      'Screenshots of submitted forms and confirmation numbers',
    ];

    return { email, callScript, documentChecklist };
  }, [servicer, noticeDate, deadline, currentPlan, targetPlan, pslf, parentPlus]);

  const copyText = async (label: string, text: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setStatus(`${label} copied to clipboard.`);
      trackEvent('servicer_toolkit_copy', { template_type: label.toLowerCase().replaceAll(' ', '_') });
    }
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="space-y-4">
          <div>
            <label htmlFor="servicer" className="mb-2 block text-sm font-medium text-gray-700">Servicer name</label>
            <input id="servicer" value={servicer} onChange={(event) => setServicer(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="currentPlan" className="mb-2 block text-sm font-medium text-gray-700">Current or ending plan</label>
            <input id="currentPlan" value={currentPlan} onChange={(event) => setCurrentPlan(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="noticeDate" className="mb-2 block text-sm font-medium text-gray-700">Notice date</label>
            <input id="noticeDate" type="date" value={noticeDate} onChange={(event) => setNoticeDate(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="deadline" className="mb-2 block text-sm font-medium text-gray-700">Exact deadline if shown</label>
            <input id="deadline" type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="targetPlan" className="mb-2 block text-sm font-medium text-gray-700">Plan you are considering</label>
            <select id="targetPlan" value={targetPlan} onChange={(event) => setTargetPlan(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              {planOptions.map((plan) => <option key={plan} value={plan}>{plan}</option>)}
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
            <label htmlFor="parentPlus" className="mb-2 block text-sm font-medium text-gray-700">Parent PLUS involved?</label>
            <select id="parentPlus" value={parentPlus} onChange={(event) => setParentPlus(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </form>

        <div className="space-y-6">
          <section className="rounded-2xl bg-primary-50 p-5">
            <h2 className="text-xl font-bold text-primary-950">Email template</h2>
            <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-sm text-gray-700">{generated.email}</pre>
            <button type="button" onClick={() => copyText('Email template', generated.email)} className="mt-4 rounded-xl bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">Copy email template</button>
          </section>

          <section className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold text-gray-900">Phone call script</h2>
            <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm text-gray-700">{generated.callScript}</pre>
            <button type="button" onClick={() => copyText('Call script', generated.callScript)} className="mt-4 rounded-xl border px-5 py-3 font-semibold text-primary-800 hover:bg-primary-50">Copy call script</button>
          </section>

          <section className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold text-gray-900">Documents to gather</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {generated.documentChecklist.map((item) => <li key={item}>- {item}</li>)}
            </ul>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => { trackEvent('servicer_toolkit_print'); window.print(); }} className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">Print toolkit</button>
              <Link href="/save-90-day-deadline-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-800 hover:bg-primary-50">Calculate deadline</Link>
            </div>
          </section>

          {status && <p className="text-sm text-gray-600" role="status">{status}</p>}
        </div>
      </div>
    </div>
  );
}
