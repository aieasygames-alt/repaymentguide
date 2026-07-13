'use client';

import { useEffect, useState, FormEvent } from 'react';
import {
  PslfProgressChart,
  PslfTimelineChart,
  ForgivenessProjectionChart,
  MonthlyPaymentMilestoneChart,
  EmploymentEligibilityChart,
  PaymentAcceleratorChart
} from '@/components/PslfChart';
import { trackCalculatorAction } from '@/lib/analytics';

interface PslfResult {
  qualifyingPayments: number;
  remainingPayments: number;
  yearsUntilForgiveness: number;
  estimatedForgiveness: number;
  isEligible: boolean;
}

type EmploymentType = 'government' | 'nonprofit' | 'other';
type LoanType = 'direct' | 'ffel' | 'perkins' | 'other';

export default function PslfCalculator() {
  const [loanBalance, setLoanBalance] = useState('50000');
  const [qualifyingPayments, setQualifyingPayments] = useState('36');
  const [monthlyPayment, setMonthlyPayment] = useState('300');
  const [employmentType, setEmploymentType] = useState<EmploymentType>('government');
  const [loanType, setLoanType] = useState<LoanType>('direct');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return;

    window.requestAnimationFrame(() => {
      setLoanBalance(params.get('balance') || '50000');
      setQualifyingPayments(params.get('payments') || '36');
      setMonthlyPayment(params.get('monthly') || '300');
      setEmploymentType((params.get('employment') || 'government') as EmploymentType);
      setLoanType((params.get('loanType') || 'direct') as LoanType);
      setShowResults(params.get('showResults') === 'true');
    });
  }, []);

  const calculatePslf = (): PslfResult => {
    const payments = parseInt(qualifyingPayments) || 0;
    const balance = parseFloat(loanBalance) || 0;
    const monthly = parseFloat(monthlyPayment) || 0;

    const remainingPayments = Math.max(0, 120 - payments);
    const yearsUntilForgiveness = Math.ceil(remainingPayments / 12);
    const estimatedForgiveness = Math.max(0, balance - (monthly * remainingPayments));

    const isEligible =
      loanType === 'direct' &&
      (employmentType === 'government' || employmentType === 'nonprofit') &&
      payments < 120;

    return {
      qualifyingPayments: payments,
      remainingPayments,
      yearsUntilForgiveness,
      estimatedForgiveness,
      isEligible,
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    trackCalculatorAction('pslf', 'submit', { employment_type: employmentType, loan_type: loanType });
  };

  const shareResult = async () => {
    const params = new URLSearchParams({
      balance: loanBalance,
      payments: qualifyingPayments,
      monthly: monthlyPayment,
      employment: employmentType,
      loanType,
      showResults: 'true',
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
    trackCalculatorAction('pslf', 'share', { employment_type: employmentType, loan_type: loanType });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const result = showResults ? calculatePslf() : null;

  const progressPercentage = result
    ? Math.min(100, (result.qualifyingPayments / 120) * 100)
    : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 space-y-6 mb-6">
        <div>
          <label htmlFor="loanBalance" className="block text-sm font-medium text-gray-700 mb-2">
            Current Loan Balance
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              id="loanBalance"
              value={loanBalance}
              onChange={(e) => setLoanBalance(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="50000"
              min="0"
              step="1000"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="monthlyPayment" className="block text-sm font-medium text-gray-700 mb-2">
            Current Monthly Payment
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              id="monthlyPayment"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="300"
              min="0"
              step="10"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="qualifyingPayments" className="block text-sm font-medium text-gray-700 mb-2">
            Qualifying Payments Made
          </label>
          <input
            type="number"
            id="qualifyingPayments"
            value={qualifyingPayments}
            onChange={(e) => setQualifyingPayments(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            placeholder="36"
            min="0"
            max="120"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            You need 120 qualifying payments for forgiveness
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employment Type
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="employment"
                value="government"
                checked={employmentType === 'government'}
                onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                className="mr-2"
              />
              <span>Government (federal, state, local, tribal)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="employment"
                value="nonprofit"
                checked={employmentType === 'nonprofit'}
                onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                className="mr-2"
              />
              <span>501(c)(3) Nonprofit organization</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="employment"
                value="other"
                checked={employmentType === 'other'}
                onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                className="mr-2"
              />
              <span>Other employment</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Type
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="loanType"
                value="direct"
                checked={loanType === 'direct'}
                onChange={(e) => setLoanType(e.target.value as LoanType)}
                className="mr-2"
              />
              <span>Direct Loans (William D. Ford)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="loanType"
                value="ffel"
                checked={loanType === 'ffel'}
                onChange={(e) => setLoanType(e.target.value as LoanType)}
                className="mr-2"
              />
              <span>FFEL Loans (must consolidate to Direct Loans)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="loanType"
                value="perkins"
                checked={loanType === 'perkins'}
                onChange={(e) => setLoanType(e.target.value as LoanType)}
                className="mr-2"
              />
              <span>Perkins Loans (must consolidate to Direct Loans)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="loanType"
                value="other"
                checked={loanType === 'other'}
                onChange={(e) => setLoanType(e.target.value as LoanType)}
                className="mr-2"
              />
              <span>Other loans</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Calculate Forgiveness
        </button>
      </form>

      {result && (
        <>
          <div className={`mb-6 border rounded-lg p-6 ${
            result.isEligible ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
          }`}>
            <h3 className={`font-semibold mb-4 ${
              result.isEligible ? 'text-green-900' : 'text-yellow-900'
            }`}>
              {result.isEligible ? 'PSLF Eligibility' : 'Eligibility Issues'}
            </h3>
            <ul className={`space-y-1 text-sm ${
              result.isEligible ? 'text-green-800' : 'text-yellow-800'
            }`}>
              {loanType === 'direct' ? (
                <li>✓ Direct Loans - Eligible loan type</li>
              ) : (
                <li>⚠ Must consolidate to Direct Loans for PSLF</li>
              )}
              {(employmentType === 'government' || employmentType === 'nonprofit') ? (
                <li>✓ Qualifying employment type</li>
              ) : (
                <li>⚠ Employment type may not qualify</li>
              )}
              {result.qualifyingPayments < 120 ? (
                <li>✓ Working toward 120 qualifying payments</li>
              ) : (
                <li>✓ Already completed 120 qualifying payments!</li>
              )}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Payment Progress Visualization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4 text-center">
                    {result.qualifyingPayments} / 120 Payments ({progressPercentage.toFixed(0)}%)
                  </h4>
                  <PslfProgressChart currentPayments={result.qualifyingPayments} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Payment Milestones</h4>
                  <MonthlyPaymentMilestoneChart currentPayments={result.qualifyingPayments} />
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="font-semibold text-primary-900 mb-4">Forgiveness Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="text-primary-700">Qualifying Payments</span>
                  <span className="font-semibold text-primary-900">{result.qualifyingPayments}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="text-primary-700">Remaining Payments</span>
                  <span className="font-semibold text-primary-900">{result.remainingPayments}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="text-primary-700">Years Until Forgiveness</span>
                  <span className="font-semibold text-primary-900">
                    {result.yearsUntilForgiveness} {result.yearsUntilForgiveness === 1 ? 'year' : 'years'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-primary-700">Estimated Forgiveness</span>
                  <span className="text-2xl font-bold text-primary-900">
                    {formatCurrency(result.estimatedForgiveness)}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => { trackCalculatorAction('pslf', 'print', { employment_type: employmentType, loan_type: loanType }); window.print(); }} className="rounded-lg bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">
                  Print PSLF report
                </button>
                <button type="button" onClick={shareResult} className="rounded-lg border border-primary-200 bg-white px-5 py-3 font-semibold text-primary-800 hover:bg-primary-50">
                  Copy shareable link
                </button>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Financial Projection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Balance & Payments Over Time</h4>
                  <PslfTimelineChart
                    currentPayments={result.qualifyingPayments}
                    monthlyPayment={parseFloat(monthlyPayment) || 0}
                    loanBalance={parseFloat(loanBalance) || 0}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Projected Amounts</h4>
                  <ForgivenessProjectionChart
                    currentPayments={result.qualifyingPayments}
                    loanBalance={parseFloat(loanBalance) || 0}
                    monthlyPayment={parseFloat(monthlyPayment) || 0}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Payment Strategy Comparison</h3>
              <PaymentAcceleratorChart
                currentPayments={result.qualifyingPayments}
                monthlyPayment={parseFloat(monthlyPayment) || 0}
              />
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Employment Eligibility Guide</h3>
              <EmploymentEligibilityChart />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Next Steps</h3>
              <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                <li>Submit PSLF form to certify your employment</li>
                <li>Enroll in an income-driven repayment plan</li>
                <li>Submit employment certification annually</li>
                <li>Track payments on StudentAid.gov</li>
                <li>Apply for forgiveness after 120 payments</li>
              </ol>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 bg-gray-50 border rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Only payments made after Oct 1, 2007 qualify</li>
          <li>• Payments must be made in full and on time</li>
          <li>• Employment must be full-time (30+ hours/week)</li>
          <li>• FFEL and Perkins loans must be consolidated to Direct Loans</li>
        </ul>
      </div>
    </div>
  );
}
