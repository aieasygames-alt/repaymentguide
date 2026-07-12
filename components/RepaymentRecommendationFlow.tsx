'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { calculateIdrPayment, type IdrPlanId } from '@/lib/idr-plans';

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(amount);

interface PlanResult {
  id: Exclude<IdrPlanId, 'save'> | 'standard';
  name: string;
  estimatedPayment: number | null;
  fitScore: number;
  reasons: string[];
  warnings: string[];
}

export default function RepaymentRecommendationFlow() {
  const [agi, setAgi] = useState('50000');
  const [householdSize, setHouseholdSize] = useState('1');
  const [loanBalance, setLoanBalance] = useState('60000');
  const [isPslf, setIsPslf] = useState('no');
  const [hasParentPlus, setHasParentPlus] = useState('no');
  const [isMarried, setIsMarried] = useState('no');
  const [incomeTrend, setIncomeTrend] = useState('stable');

  const results = useMemo(() => {
    const income = Number.parseFloat(agi) || 0;
    const familySize = Number.parseInt(householdSize, 10) || 1;
    const balance = Number.parseFloat(loanBalance) || 0;
    const pslf = isPslf === 'yes';
    const parentPlus = hasParentPlus === 'yes';
    const married = isMarried === 'yes';
    const risingIncome = incomeTrend === 'rising';

    const plans: PlanResult[] = [
      {
        id: 'rap',
        name: 'RAP',
        estimatedPayment: parentPlus ? null : calculateIdrPayment(income, familySize, 'rap').monthlyPayment,
        fitScore: 70 + (familySize > 1 ? 8 : 0) + (pslf ? 8 : 0) - (parentPlus ? 100 : 0) - (income < 25000 ? 8 : 0),
        reasons: [
          'New 2026 repayment option to compare after SAVE',
          familySize > 1 ? 'Dependent adjustment may reduce the monthly payment' : 'Simple AGI-based formula is easy to estimate',
          pslf ? 'May be worth comparing if it produces your lowest PSLF-qualifying payment' : 'Interest and principal benefits may matter if you make full, on-time payments',
        ],
        warnings: [
          'RAP does not use a poverty-line income exclusion like legacy IDR plans',
          'Non-PSLF forgiveness timeline is long',
          ...(parentPlus ? ['Parent PLUS consolidation loans are not eligible for RAP'] : []),
        ],
      },
      {
        id: 'ibr',
        name: 'IBR',
        estimatedPayment: calculateIdrPayment(income, familySize, 'ibr').monthlyPayment,
        fitScore: 68 + (income < 50000 ? 8 : 0) + (married ? 5 : 0) + (parentPlus ? -30 : 0),
        reasons: [
          'Broadly available compared with PAYE',
          'Uses discretionary income rather than full AGI',
          married ? 'May be relevant for married filing separately planning' : 'Worth comparing when PAYE eligibility is uncertain',
        ],
        warnings: [
          'Payment percentage and forgiveness timeline can vary by borrower history',
          parentPlus ? 'Parent PLUS borrowers usually need a Parent PLUS-specific strategy' : 'Confirm eligibility before relying on the estimate',
        ],
      },
      {
        id: 'paye',
        name: 'PAYE',
        estimatedPayment: calculateIdrPayment(income, familySize, 'paye').monthlyPayment,
        fitScore: 66 + (risingIncome ? 8 : 0) + (balance > income ? 6 : 0) - (parentPlus ? 100 : 0),
        reasons: [
          'Payment cap can help borrowers whose income may rise',
          '20-year non-PSLF forgiveness timeline can be attractive if eligible',
          balance > income ? 'High balance relative to income makes PAYE worth testing' : 'Useful comparison point against IBR and RAP',
        ],
        warnings: [
          'PAYE has narrower eligibility rules than IBR',
          ...(parentPlus ? ['Parent PLUS loans are not a PAYE fit'] : []),
        ],
      },
      {
        id: 'icr',
        name: 'ICR',
        estimatedPayment: calculateIdrPayment(income, familySize, 'icr').monthlyPayment,
        fitScore: 52 + (parentPlus ? 25 : 0) - (income < 40000 ? 8 : 0),
        reasons: [
          parentPlus ? 'Often the key IDR path for Parent PLUS after consolidation' : 'Useful fallback if other IDR plans do not fit',
          'No income requirement',
        ],
        warnings: [
          'ICR often produces a higher payment than other IDR plans',
          'Always confirm Parent PLUS consolidation details before applying',
        ],
      },
      {
        id: 'standard',
        name: 'Standard / Tiered Standard',
        estimatedPayment: null,
        fitScore: 45 + (!pslf && income > 80000 ? 10 : 0) - (pslf ? 15 : 0),
        reasons: [
          'Fixed payments can be simpler if you are not pursuing forgiveness',
          'May reduce total interest if you can afford the payment',
        ],
        warnings: [
          'Can create payment shock after SAVE',
          pslf ? 'May not be the safest default for PSLF strategy' : 'Does not adjust with income',
        ],
      },
    ];

    return plans
      .sort((a, b) => b.fitScore - a.fitScore)
      .map((plan, index) => ({ ...plan, rank: index + 1 }));
  }, [agi, householdSize, loanBalance, isPslf, hasParentPlus, isMarried, incomeTrend]);

  const topPlan = results[0];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="space-y-4">
          <div>
            <label htmlFor="agi" className="mb-2 block text-sm font-medium text-gray-700">Adjusted gross income</label>
            <input id="agi" type="number" value={agi} onChange={(event) => setAgi(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label htmlFor="householdSize" className="mb-2 block text-sm font-medium text-gray-700">Household size</label>
            <input id="householdSize" type="number" min="1" value={householdSize} onChange={(event) => setHouseholdSize(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label htmlFor="loanBalance" className="mb-2 block text-sm font-medium text-gray-700">Loan balance</label>
            <input id="loanBalance" type="number" value={loanBalance} onChange={(event) => setLoanBalance(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label htmlFor="pslf" className="mb-2 block text-sm font-medium text-gray-700">Are you pursuing PSLF?</label>
            <select id="pslf" value={isPslf} onChange={(event) => setIsPslf(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="no">No / not sure</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label htmlFor="parentPlus" className="mb-2 block text-sm font-medium text-gray-700">Do you have Parent PLUS loans?</label>
            <select id="parentPlus" value={hasParentPlus} onChange={(event) => setHasParentPlus(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label htmlFor="married" className="mb-2 block text-sm font-medium text-gray-700">Married borrower?</label>
            <select id="married" value={isMarried} onChange={(event) => setIsMarried(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label htmlFor="incomeTrend" className="mb-2 block text-sm font-medium text-gray-700">Income expectation</label>
            <select id="incomeTrend" value={incomeTrend} onChange={(event) => setIncomeTrend(event.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="stable">Stable / unsure</option>
              <option value="rising">Likely rising</option>
              <option value="lower">Likely lower</option>
            </select>
          </div>
        </form>

        <div>
          <div className="mb-5 rounded-2xl bg-primary-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Start here</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-950">Compare {topPlan.name} first</h2>
            <p className="mt-2 text-primary-900">
              This is a directional recommendation based on your answers. Confirm final eligibility with StudentAid.gov or your servicer.
            </p>
          </div>

          <div className="space-y-4">
            {results.map((plan) => (
              <div key={plan.id} className="rounded-xl border p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold text-gray-900">#{plan.rank} {plan.name}</h3>
                  {plan.estimatedPayment !== null && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800">
                      Est. {formatCurrency(plan.estimatedPayment)}/mo
                    </span>
                  )}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 font-semibold text-green-800">Why compare it</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {plan.reasons.map((reason) => <li key={reason}>• {reason}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-amber-800">Watch-outs</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {plan.warnings.map((warning) => <li key={warning}>• {warning}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/income-driven-repayment-calculator" className="rounded-lg bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">
              Run detailed IDR calculator
            </Link>
            <Link href="/save-90-day-deadline-calculator" className="rounded-lg border px-5 py-3 text-center font-semibold text-primary-700 hover:bg-primary-50">
              Calculate SAVE deadline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
