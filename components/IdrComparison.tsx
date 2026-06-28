'use client';

import { useState, FormEvent } from 'react';
import {
  idrPlans,
  type IdrPlan,
  calculateIdrPayment,
} from '@/lib/idr-plans';

export default function IdrComparison() {
  const [agi, setAgi] = useState('45000');
  const [householdSize, setHouseholdSize] = useState('1');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const agiNum = parseFloat(agi);
  const householdSizeNum = parseInt(householdSize);

  const planCalculations = idrPlans.map((plan) => ({
    plan,
    ...calculateIdrPayment(agiNum, householdSizeNum, plan.id as any),
  }));

  const sortedPlans = [...planCalculations].sort((a, b) => a.monthlyPayment - b.monthlyPayment);

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 space-y-6 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="agi" className="block text-sm font-medium text-gray-700 mb-2">
              Adjusted Gross Income (AGI)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="agi"
                value={agi}
                onChange={(e) => setAgi(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="45000"
                min="0"
                step="1000"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="householdSize" className="block text-sm font-medium text-gray-700 mb-2">
              Household Size
            </label>
            <input
              type="number"
              id="householdSize"
              value={householdSize}
              onChange={(e) => setHouseholdSize(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="1"
              min="1"
              max="20"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Compare Plans
        </button>
      </form>

      {showResults && (
        <>
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Your Discretionary Income</h3>
            <p className="text-blue-800">
              Based on your income and household size, your discretionary income ranges from{' '}
              <strong>{formatCurrency(sortedPlans[0].discretionaryIncome)}</strong> to{' '}
              <strong>{formatCurrency(sortedPlans[sortedPlans.length - 1].discretionaryIncome)}</strong>{' '}
              depending on the plan (SAVE uses a more generous calculation).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Plan Comparison (Lowest to Highest Payment)</h3>

            {sortedPlans.map((calc, index) => (
              <div
                key={calc.plan.id}
                className={`bg-white border rounded-lg p-6 ${
                  index === 0 ? 'border-green-500 border-2' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">{calc.plan.name} Plan</h4>
                    <p className="text-sm text-gray-600">{calc.plan.fullName}</p>
                  </div>
                  {index === 0 && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Lowest Payment
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Payment</p>
                    <p className="text-2xl font-bold">{formatCurrency(calc.monthlyPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Annual Payment</p>
                    <p className="text-lg font-semibold">{formatCurrency(calc.annualPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Forgiveness</p>
                    <p className="text-lg font-semibold">{calc.plan.forgivenessYears} years</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Payment Formula:</p>
                  <p className="text-sm text-gray-600">{calc.plan.monthlyPayment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Important Notes</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• SAVE plan is currently blocked by court orders as of 2024</li>
              <li>• These are estimates. Actual payments may vary based on your specific loans</li>
              <li>• Married borrowers can file separately to exclude spouse income (except ICR)</li>
              <li>• Interest capitalization and other factors affect total cost</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
