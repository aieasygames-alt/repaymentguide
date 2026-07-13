'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { calculateIdrPayment } from '@/lib/idr-plans';
import { trackCalculatorAction } from '@/lib/analytics';

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(amount);

function getRapTier(agi: number) {
  if (agi <= 10000) return { label: '$10 minimum', rate: 0, annualPayment: 120 };
  if (agi <= 20000) return { label: '1% of AGI', rate: 0.01, annualPayment: agi * 0.01 };
  if (agi <= 30000) return { label: '2% of AGI', rate: 0.02, annualPayment: agi * 0.02 };
  if (agi <= 40000) return { label: '3% of AGI', rate: 0.03, annualPayment: agi * 0.03 };
  if (agi <= 50000) return { label: '4% of AGI', rate: 0.04, annualPayment: agi * 0.04 };
  if (agi <= 60000) return { label: '5% of AGI', rate: 0.05, annualPayment: agi * 0.05 };
  if (agi <= 70000) return { label: '6% of AGI', rate: 0.06, annualPayment: agi * 0.06 };
  if (agi <= 80000) return { label: '7% of AGI', rate: 0.07, annualPayment: agi * 0.07 };
  if (agi <= 90000) return { label: '8% of AGI', rate: 0.08, annualPayment: agi * 0.08 };
  if (agi <= 100000) return { label: '9% of AGI', rate: 0.09, annualPayment: agi * 0.09 };
  return { label: '10% of AGI', rate: 0.1, annualPayment: agi * 0.1 };
}

export default function RapPaymentCalculator() {
  const [agi, setAgi] = useState('45000');
  const [dependents, setDependents] = useState('0');
  const [loanBalance, setLoanBalance] = useState('35000');
  const [interestRate, setInterestRate] = useState('6.52');
  const [loanType, setLoanType] = useState('direct-student');
  const [pslf, setPslf] = useState('not-sure');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return;

    window.requestAnimationFrame(() => {
      setAgi(params.get('agi') || '45000');
      setDependents(params.get('dependents') || '0');
      setLoanBalance(params.get('balance') || '35000');
      setInterestRate(params.get('rate') || '6.52');
      setLoanType(params.get('loanType') || 'direct-student');
      setPslf(params.get('pslf') || 'not-sure');
    });
  }, []);

  const result = useMemo(() => {
    const income = Math.max(0, Number.parseFloat(agi) || 0);
    const dependentCount = Math.max(0, Number.parseInt(dependents, 10) || 0);
    const balance = Math.max(0, Number.parseFloat(loanBalance) || 0);
    const annualRate = Math.max(0, Number.parseFloat(interestRate) || 0) / 100;
    const tier = getRapTier(income);
    const payment = calculateIdrPayment(income, dependentCount + 1, 'rap').monthlyPayment;
    const dependentReduction = dependentCount * 50;
    const monthlyInterest = balance * annualRate / 12;
    const borrowerPrincipal = Math.max(0, payment - monthlyInterest);
    const unpaidInterestWaiver = Math.max(0, monthlyInterest - payment);
    const principalMatch = Math.max(0, Math.min(50, 50 - borrowerPrincipal));
    const estimatedBalanceProgress = borrowerPrincipal + principalMatch;
    const ineligibleWarning = loanType === 'parent-plus-consolidation';

    return {
      income,
      dependentCount,
      balance,
      tier,
      payment,
      dependentReduction,
      monthlyInterest,
      borrowerPrincipal,
      unpaidInterestWaiver,
      principalMatch,
      estimatedBalanceProgress,
      ineligibleWarning,
    };
  }, [agi, dependents, loanBalance, interestRate, loanType]);

  const shareResult = async () => {
    const params = new URLSearchParams({
      agi,
      dependents,
      balance: loanBalance,
      rate: interestRate,
      loanType,
      pslf,
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
    trackCalculatorAction('rap_payment', 'share', { loan_type: loanType, pslf });
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
        <form className="space-y-5">
          <div>
            <label htmlFor="rap-agi" className="mb-2 block text-sm font-medium text-gray-700">Adjusted gross income</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input id="rap-agi" type="number" min="0" step="1000" value={agi} onChange={(event) => setAgi(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>

          <div>
            <label htmlFor="rap-dependents" className="mb-2 block text-sm font-medium text-gray-700">Dependents claimed on tax return</label>
            <input id="rap-dependents" type="number" min="0" max="20" value={dependents} onChange={(event) => setDependents(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="rap-balance" className="mb-2 block text-sm font-medium text-gray-700">Current loan balance</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input id="rap-balance" type="number" min="0" step="1000" value={loanBalance} onChange={(event) => setLoanBalance(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>

          <div>
            <label htmlFor="rap-rate" className="mb-2 block text-sm font-medium text-gray-700">Interest rate</label>
            <div className="relative">
              <input id="rap-rate" type="number" min="0" step="0.01" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-8 focus:ring-2 focus:ring-primary-500" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
            </div>
          </div>

          <div>
            <label htmlFor="rap-loan-type" className="mb-2 block text-sm font-medium text-gray-700">Loan type</label>
            <select id="rap-loan-type" value={loanType} onChange={(event) => setLoanType(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="direct-student">Direct student loans</option>
              <option value="grad-plus">Graduate PLUS loans</option>
              <option value="parent-plus-consolidation">Consolidation loan with Parent PLUS</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="rap-pslf" className="mb-2 block text-sm font-medium text-gray-700">Pursuing PSLF?</label>
            <select id="rap-pslf" value={pslf} onChange={(event) => setPslf(event.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl bg-primary-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Estimated RAP payment</p>
            <p className="mt-2 text-5xl font-bold text-primary-950">{formatCurrency(result.payment)}<span className="text-xl font-semibold">/mo</span></p>
            <p className="mt-3 text-primary-900">
              Based on {result.tier.label}, minus {formatCurrency(result.dependentReduction)} per month for {result.dependentCount} dependent{result.dependentCount === 1 ? '' : 's'}, subject to the RAP minimum payment.
            </p>
          </div>

          {result.ineligibleWarning && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-950">
              <h2 className="font-bold">RAP may not be available for this loan type</h2>
              <p className="mt-2 text-sm leading-6">
                Direct Consolidation loans that include Parent PLUS loans can be excluded from RAP. Verify your consolidation history before using this estimate.
              </p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-600">Estimated monthly interest</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(result.monthlyInterest)}</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-600">Possible interest waiver</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(result.unpaidInterestWaiver)}</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-600">Possible principal match</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(result.principalMatch)}</p>
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-gray-900">What this means</h2>
            <p className="mt-3 text-gray-700">
              If you make a full, on-time payment, this estimate suggests about {formatCurrency(result.estimatedBalanceProgress)} could go toward reducing your balance after borrower principal and any RAP principal match. The exact servicer result can vary.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => { trackCalculatorAction('rap_payment', 'print', { loan_type: loanType, pslf }); window.print(); }} className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">
                Print result
              </button>
              <button type="button" onClick={shareResult} className="rounded-xl border px-5 py-3 font-semibold text-slate-900 hover:bg-white">
                Copy shareable link
              </button>
              <Link href="/repayment-plan-recommendation" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-700 hover:bg-white">
                Compare plans
              </Link>
            </div>
          </div>

          {pslf === 'yes' && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
              <h2 className="font-bold">PSLF note</h2>
              <p className="mt-2 text-sm leading-6">
                RAP may be worth comparing if it produces your lowest PSLF-qualifying payment, but employment certification and loan type still matter. Use the PSLF Help Tool before relying on a payment strategy.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
