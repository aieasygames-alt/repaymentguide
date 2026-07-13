'use client';

import { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
import { trackCalculatorAction } from '@/lib/analytics';
import {
  calculateStandardRepayment,
  calculateGraduatedRepayment,
  calculateExtendedRepayment,
  type RepaymentPlan,
  getReaymentPlanLabel,
} from '@/lib/calculators';
import {
  RepaymentComparisonChart,
  InterestAccumulationChart,
  MonthlyPaymentComparison,
  TotalCostComparison,
  PaymentTrendChart
} from '@/components/RepaymentChart';

type PaymentResults = {
  monthlyPayment?: number;
  initialPayment?: number;
  finalPayment?: number;
  totalPayment: number;
  totalInterest: number;
  planLabel: string;
  isGraduated?: boolean;
};

function calculatePlanResult(principal: number, rate: number, plan: RepaymentPlan): PaymentResults | null {
  if (Number.isNaN(principal) || Number.isNaN(rate) || principal <= 0) {
    return null;
  }

  switch (plan) {
    case 'standard-10': {
      const calculation = calculateStandardRepayment(principal, rate, 10);
      return {
        monthlyPayment: calculation.monthlyPayment,
        totalPayment: calculation.totalPayment,
        totalInterest: calculation.totalInterest,
        planLabel: getReaymentPlanLabel('standard-10'),
      };
    }
    case 'standard-20': {
      const calculation = calculateStandardRepayment(principal, rate, 20);
      return {
        monthlyPayment: calculation.monthlyPayment,
        totalPayment: calculation.totalPayment,
        totalInterest: calculation.totalInterest,
        planLabel: getReaymentPlanLabel('standard-20'),
      };
    }
    case 'graduated': {
      const calculation = calculateGraduatedRepayment(principal, rate, 10);
      return {
        initialPayment: calculation.initialPayment,
        finalPayment: calculation.finalPayment,
        totalPayment: calculation.totalPayment,
        totalInterest: calculation.totalInterest,
        planLabel: getReaymentPlanLabel('graduated'),
        isGraduated: true,
      };
    }
    case 'extended': {
      const calculation = calculateExtendedRepayment(principal, rate);
      return {
        monthlyPayment: calculation.monthlyPayment,
        totalPayment: calculation.totalPayment,
        totalInterest: calculation.totalInterest,
        planLabel: getReaymentPlanLabel('extended'),
      };
    }
    default:
      return null;
  }
}

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState('35000');
  const [interestRate, setInterestRate] = useState('5.5');
  const [selectedPlan, setSelectedPlan] = useState<RepaymentPlan>('standard-10');
  const [results, setResults] = useState<PaymentResults | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return;

    window.requestAnimationFrame(() => {
      const amount = params.get('amount') || '35000';
      const rate = params.get('rate') || '5.5';
      const plan = (params.get('plan') || 'standard-10') as RepaymentPlan;

      setLoanAmount(amount);
      setInterestRate(rate);
      setSelectedPlan(plan);
      setResults(calculatePlanResult(Number.parseFloat(amount), Number.parseFloat(rate), plan));
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    setResults(calculatePlanResult(principal, rate, selectedPlan));
    trackCalculatorAction('payment', 'submit', { plan: selectedPlan });
  };

  const shareResult = async () => {
    const params = new URLSearchParams({
      amount: loanAmount,
      rate: interestRate,
      plan: selectedPlan,
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
    trackCalculatorAction('payment', 'share', { plan: selectedPlan });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Total Loan Balance
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="35000"
              min="0"
              step="100"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="5.5"
            min="0"
            max="15"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Repayment Plan
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['standard-10', 'standard-20', 'graduated', 'extended'] as RepaymentPlan[]).map((plan) => (
              <label
                key={plan}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                  selectedPlan === plan
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan}
                  checked={selectedPlan === plan}
                  onChange={(e) => setSelectedPlan(e.target.value as RepaymentPlan)}
                  className="mr-2"
                />
                <span className="text-sm">{getReaymentPlanLabel(plan)}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Calculate Payment
        </button>
      </form>

      {results && (
        <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">
            {results.planLabel} Results
          </h3>
          <div className="space-y-3">
            {results.isGraduated ? (
              <>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="text-primary-700">Initial Payment</span>
                  <span className="text-2xl font-bold text-primary-900">
                    {formatCurrency(results.initialPayment || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="text-primary-700">Final Payment</span>
                  <span className="text-lg font-semibold text-primary-900">
                    {formatCurrency(results.finalPayment || 0)}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-center py-2 border-b border-primary-200">
                <span className="text-primary-700">Monthly Payment</span>
                <span className="text-2xl font-bold text-primary-900">
                  {formatCurrency(results.monthlyPayment || 0)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2 border-b border-primary-200">
              <span className="text-primary-700">Total Repayment</span>
              <span className="text-lg font-semibold text-primary-900">
                {formatCurrency(results.totalPayment)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-primary-700">Total Interest</span>
              <span className="text-lg font-semibold text-primary-900">
                {formatCurrency(results.totalInterest)}
              </span>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => { trackCalculatorAction('payment', 'print', { plan: selectedPlan }); window.print(); }} className="rounded-lg bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">
              Print result report
            </button>
            <button type="button" onClick={shareResult} className="rounded-lg border border-primary-200 bg-white px-5 py-3 font-semibold text-primary-800 hover:bg-primary-50">
              Copy shareable link
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-2">Note</h4>
        <p className="text-sm text-yellow-800">
          This calculator provides estimates for standard federal repayment plans. For income-driven
          repayment options, use our{' '}
          <Link href="/income-driven-repayment-calculator" className="underline font-medium">
            IDR Calculator
          </Link>
          .
        </p>
      </div>

      {results && (
        <div className="mt-8 bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Visual Comparison</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Total Cost Breakdown</h4>
              <RepaymentComparisonChart
                principal={parseFloat(loanAmount) || 0}
                rate={parseFloat(interestRate) || 0}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Monthly Payment Comparison</h4>
              <MonthlyPaymentComparison
                principal={parseFloat(loanAmount) || 0}
                rate={parseFloat(interestRate) || 0}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Interest Accumulation Over Time</h4>
              <InterestAccumulationChart
                principal={parseFloat(loanAmount) || 0}
                rate={parseFloat(interestRate) || 0}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Total Cost Distribution</h4>
              <TotalCostComparison
                principal={parseFloat(loanAmount) || 0}
                rate={parseFloat(interestRate) || 0}
              />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Payment Trend: Standard vs Graduated</h4>
            <PaymentTrendChart
              principal={parseFloat(loanAmount) || 0}
              rate={parseFloat(interestRate) || 0}
            />
          </div>
        </div>
      )}
    </div>
  );
}
