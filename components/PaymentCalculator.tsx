'use client';

import { useState, FormEvent } from 'react';
import {
  calculateStandardRepayment,
  calculateGraduatedRepayment,
  calculateExtendedRepayment,
  type RepaymentPlan,
  getReaymentPlanLabel,
} from '@/lib/calculators';

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState('35000');
  const [interestRate, setInterestRate] = useState('5.5');
  const [selectedPlan, setSelectedPlan] = useState<RepaymentPlan>('standard-10');
  const [results, setResults] = useState<{
    monthlyPayment?: number;
    initialPayment?: number;
    finalPayment?: number;
    totalPayment: number;
    totalInterest: number;
    planLabel: string;
    isGraduated?: boolean;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);

    if (isNaN(principal) || isNaN(rate) || principal <= 0) {
      return;
    }

    let planLabel: string;

    switch (selectedPlan) {
      case 'standard-10': {
        const calculation = calculateStandardRepayment(principal, rate, 10);
        planLabel = getReaymentPlanLabel('standard-10');
        setResults({
          monthlyPayment: calculation.monthlyPayment,
          totalPayment: calculation.totalPayment,
          totalInterest: calculation.totalInterest,
          planLabel,
        });
        break;
      }
      case 'standard-20': {
        const calculation = calculateStandardRepayment(principal, rate, 20);
        planLabel = getReaymentPlanLabel('standard-20');
        setResults({
          monthlyPayment: calculation.monthlyPayment,
          totalPayment: calculation.totalPayment,
          totalInterest: calculation.totalInterest,
          planLabel,
        });
        break;
      }
      case 'graduated': {
        const calculation = calculateGraduatedRepayment(principal, rate, 10);
        planLabel = getReaymentPlanLabel('graduated');
        setResults({
          initialPayment: calculation.initialPayment,
          finalPayment: calculation.finalPayment,
          totalPayment: calculation.totalPayment,
          totalInterest: calculation.totalInterest,
          planLabel,
          isGraduated: true,
        });
        break;
      }
      case 'extended': {
        const calculation = calculateExtendedRepayment(principal, rate);
        planLabel = getReaymentPlanLabel('extended');
        setResults({
          monthlyPayment: calculation.monthlyPayment,
          totalPayment: calculation.totalPayment,
          totalInterest: calculation.totalInterest,
          planLabel,
        });
        break;
      }
      default:
        return;
    }
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
        </div>
      )}

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-2">Note</h4>
        <p className="text-sm text-yellow-800">
          This calculator provides estimates for standard federal repayment plans. For income-driven
          repayment options, use our{' '}
          <a href="/income-driven-repayment-calculator" className="underline font-medium">
            IDR Calculator
          </a>
          .
        </p>
      </div>
    </div>
  );
}
