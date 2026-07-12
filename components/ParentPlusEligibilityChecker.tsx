'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function ParentPlusEligibilityChecker() {
  const [hasParentPlus, setHasParentPlus] = useState('yes');
  const [consolidated, setConsolidated] = useState('not-sure');
  const [includesParentPlus, setIncludesParentPlus] = useState('yes');
  const [parentEmployment, setParentEmployment] = useState('not-public');
  const [goal, setGoal] = useState('lower-payment');

  const result = useMemo(() => {
    if (hasParentPlus === 'no') {
      return {
        title: 'This checker is mainly for Parent PLUS borrowers',
        status: 'neutral',
        summary: 'If you do not have Parent PLUS loans, compare RAP, IBR, PAYE, ICR, and Standard repayment in the IDR calculator instead.',
        nextSteps: [
          'Use the IDR calculator for RAP, IBR, PAYE, and ICR estimates.',
          'Check PSLF rules separately if you work in public service.',
        ],
      };
    }

    const publicService = parentEmployment === 'public';
    const knownParentPlusConsolidation = consolidated === 'yes' && includesParentPlus === 'yes';

    if (knownParentPlusConsolidation) {
      return {
        title: 'RAP is probably not the first plan to rely on',
        status: 'caution',
        summary: 'Direct Consolidation loans that include Parent PLUS loans can be excluded from RAP eligibility. Parent PLUS borrowers usually need to evaluate ICR, Standard repayment, and PSLF strategy separately.',
        nextSteps: [
          'Confirm your consolidation history on StudentAid.gov.',
          'Compare ICR and Standard repayment before assuming RAP applies.',
          publicService ? 'If the parent borrower has qualifying public service employment, review PSLF with ICR after consolidation.' : 'If PSLF is not available, focus on affordability and total repayment cost.',
        ],
      };
    }

    if (consolidated === 'no') {
      return {
        title: 'Consolidation history is the first question',
        status: 'warning',
        summary: 'Parent PLUS loans generally need special handling before IDR options like ICR become relevant. Do not assume the same IDR rules as undergraduate Direct Loans.',
        nextSteps: [
          'Review whether consolidation is appropriate for your loans.',
          'Compare Standard repayment against any Parent PLUS-specific IDR route.',
          publicService ? 'Check whether the parent borrower, not the student, has PSLF-qualifying employment.' : 'Avoid refinancing federal loans unless you understand the loss of federal protections.',
        ],
      };
    }

    return {
      title: 'You need to verify loan type details before choosing a plan',
      status: 'neutral',
      summary: 'Parent PLUS eligibility depends on whether the loans were consolidated and whether the consolidation loan includes Parent PLUS loans. That detail can change which IDR plans are realistic.',
      nextSteps: [
        'Log in to StudentAid.gov and check loan type and consolidation history.',
        'Ask your servicer whether the consolidation loan includes Parent PLUS loans.',
        goal === 'pslf' ? 'Confirm that the parent borrower has qualifying employment for PSLF.' : 'Compare ICR, Standard repayment, and other federal options after verifying eligibility.',
      ],
    };
  }, [hasParentPlus, consolidated, includesParentPlus, parentEmployment, goal]);

  const colorClass = result.status === 'caution'
    ? 'bg-red-50 border-red-200 text-red-950'
    : result.status === 'warning'
      ? 'bg-amber-50 border-amber-200 text-amber-950'
      : 'bg-primary-50 border-primary-200 text-primary-950';

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="space-y-4">
          <div>
            <label htmlFor="hasParentPlus" className="mb-2 block text-sm font-medium text-gray-700">Do you have Parent PLUS loans?</label>
            <select id="hasParentPlus" value={hasParentPlus} onChange={(event) => setHasParentPlus(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="consolidated" className="mb-2 block text-sm font-medium text-gray-700">Have the Parent PLUS loans been consolidated?</label>
            <select id="consolidated" value={consolidated} onChange={(event) => setConsolidated(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="includesParentPlus" className="mb-2 block text-sm font-medium text-gray-700">Does the consolidation include Parent PLUS loans?</label>
            <select id="includesParentPlus" value={includesParentPlus} onChange={(event) => setIncludesParentPlus(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="parentEmployment" className="mb-2 block text-sm font-medium text-gray-700">Is the parent borrower in qualifying public service?</label>
            <select id="parentEmployment" value={parentEmployment} onChange={(event) => setParentEmployment(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="public">Yes</option>
              <option value="not-public">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="goal" className="mb-2 block text-sm font-medium text-gray-700">Main goal</label>
            <select id="goal" value={goal} onChange={(event) => setGoal(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="lower-payment">Lower monthly payment</option>
              <option value="pslf">PSLF</option>
              <option value="total-cost">Lower total cost</option>
            </select>
          </div>
        </form>

        <div className={`rounded-2xl border p-6 ${colorClass}`}>
          <p className="text-sm font-semibold uppercase tracking-wide">Checker result</p>
          <h2 className="mt-2 text-2xl font-bold">{result.title}</h2>
          <p className="mt-3 leading-7">{result.summary}</p>
          <div className="mt-6 rounded-xl bg-white/70 p-5">
            <h3 className="mb-3 font-bold">Recommended next steps</h3>
            <ol className="space-y-2">
              {result.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/blog/parent-plus-loan-repayment-options" className="rounded-lg bg-white px-5 py-3 text-center font-semibold text-gray-900 hover:bg-gray-50">
              Read Parent PLUS guide
            </Link>
            <Link href="/repayment-plan-recommendation" className="rounded-lg bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">
              Compare plan path
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
