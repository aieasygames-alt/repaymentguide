import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import Link from 'next/link';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, officialStudentLoanSources } from '@/components/TrustSignals';

export const metadata: Metadata = {
  title: 'Income-Driven Repayment Calculator - IDR, IBR, PAYE, ICR & RAP',
  description: 'Use this income-driven repayment calculator to estimate IDR payments under RAP, IBR, PAYE, and ICR after the 2026 SAVE transition.',
  keywords: ['income-driven repayment calculator', 'income driven repayment calculator', 'IDR calculator', 'income based repayment calculator', 'RAP', 'PAYE', 'IBR', 'ICR'],
  alternates: {
    canonical: '/income-driven-repayment-calculator/',
  },
  openGraph: {
    title: 'Income-Driven Repayment Calculator',
    description: 'Compare estimated monthly payments under IDR, IBR, PAYE, ICR, and RAP.',
    url: 'https://repaymentguide.com/income-driven-repayment-calculator',
  },
};

const faqs = [
  {
    question: 'What is discretionary income for IDR calculations?',
    answer: 'For legacy IDR plans, discretionary income is your adjusted gross income (AGI) minus a poverty-guideline allowance. RAP works differently: it uses AGI directly, then reduces the monthly payment by $50 for each dependent.'
  },
  {
    question: 'How often do I need to recertify my IDR plan?',
    answer: 'You must recertify your income and family size annually with your loan servicer. The deadline is typically one year from your last certification. If you miss the deadline, your payments will increase to the standard 10-year amount, and unpaid interest may capitalize.'
  },
  {
    question: 'Can I change my income calculation method?',
    answer: 'Yes. You can use your most recent tax return, current pay stubs, or alternative documentation of income. If your income has significantly decreased since your last tax return, using pay stubs or alternative documentation can result in lower monthly payments.'
  },
  {
    question: 'What happens if I get married or have a child?',
    answer: 'If you get married or have a child, your family size increases, which increases the poverty guideline deduction and potentially lowers your discretionary income. You must update this information during your annual recertification. If you file taxes separately, you can exclude your spouse\'s income from PAYE, IBR, and SAVE calculations.'
  },
  {
    question: 'Do IDR plans forgive loan balances?',
    answer: 'Yes. Legacy IDR plans generally use 20-25 year forgiveness timelines, while RAP uses 30 years. PSLF can forgive eligible Direct Loans after 120 qualifying payments for public service employees. Note that non-PSLF forgiven amounts may be taxable.'
  },
  {
    question: 'Should I choose IDR or standard repayment?',
    answer: 'Choose IDR if your debt-to-income ratio is high (over 1.5x your income), you expect to work in public service, or you need lower monthly payments. Choose standard repayment if you can afford higher payments and want to pay off loans faster with less total interest.'
  }
];

export default function IdrCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Income-Driven Repayment Calculator</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Calculate estimated monthly payments under IDR, IBR, PAYE, ICR, and RAP plans. Find which income-driven repayment option fits your 2026 strategy.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Calculator */}
          <IdrComparison />

          <div className="mt-8 max-w-4xl mx-auto">
            <CalculatorDisclosure
              assumptions={[
                'Legacy IDR estimates use AGI, family size, state, and poverty-guideline allowances where applicable.',
                'RAP estimates use AGI-based tiers and the dependent reduction described in current public guidance.',
                'The calculator does not make final eligibility decisions for PAYE, IBR, ICR, RAP, Parent PLUS loans, or PSLF.',
                'Actual bills can change after income recertification, consolidation, servicer processing, capitalization, or policy updates.',
              ]}
              sources={[
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
                officialStudentLoanSources.edRapFactSheet,
                officialStudentLoanSources.loanSimulator,
              ]}
            />
          </div>

          {/* Detailed Content */}
          <div className="mt-16 max-w-4xl mx-auto space-y-12">
            {/* How to Use */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use This Calculator</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Step 1: Enter Your Information</h3>
                  <p className="text-gray-600 text-sm">Input your adjusted gross income (AGI), family size, and state of residence.</p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Step 2: Enter Loan Details</h3>
                  <p className="text-gray-600 text-sm">Add your federal student loan balance and interest rate for accurate comparisons.</p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Step 3: Compare Plans</h3>
                  <p className="text-gray-600 text-sm">View monthly payments, total costs, and forgiveness timelines for each plan.</p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Step 4: Choose Your Plan</h3>
                  <p className="text-gray-600 text-sm">Select the plan that fits your budget and long-term financial goals.</p>
                </div>
              </div>
            </section>

            {/* Plan Selection Guide */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Which IDR Plan Should You Choose?</h2>

              <div className="space-y-6">
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-primary-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">RAP Plan</h3>
                    <p className="text-primary-700">New 2026 IDR Plan • AGI-Based • 30-Year Forgiveness</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Borrowers comparing 2026 SAVE transition options</li>
                          <li>• Borrowers with eligible Direct Loans</li>
                          <li>• PSLF borrowers whose RAP payment is lowest</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 1-10% of AGI based on income tier</li>
                          <li>• $50 dependent reduction, $10 minimum</li>
                          <li>• Interest subsidy and matching principal benefit after full, on-time payments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-blue-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">PAYE Plan</h3>
                    <p className="text-blue-700">Payment Cap • 20-Year Forgiveness • Newer Borrowers</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Loans after Oct 2007 AND Oct 2011</li>
                          <li>• High-income professionals</li>
                          <li>• Graduate students</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 10% of discretionary income</li>
                          <li>• Payment cap protects high earners</li>
                          <li>• 20-year forgiveness timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-green-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">IBR Plan</h3>
                    <p className="text-green-700">Available to All • Spouse Exclusion • Flexible</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Older loans (before Oct 2007)</li>
                          <li>• Married filing separately</li>
                          <li>• Those not eligible for PAYE</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 10-15% of discretionary income</li>
                          <li>• Spouse income exclusion</li>
                          <li>• 20-25 year forgiveness timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-orange-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">ICR Plan</h3>
                    <p className="text-orange-700">Only Option for Parent PLUS • 25-Year Forgiveness</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Parent PLUS loan borrowers</li>
                          <li>• After consolidating Parent PLUS</li>
                          <li>• FFEL Consolidation loans</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 20% of discretionary income</li>
                          <li>• Always counts spouse income</li>
                          <li>• 25-year forgiveness timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Examples */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Examples</h2>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <h3 className="font-bold text-gray-900 mb-4">Example: Single Borrower, $50,000 Income, $75,000 Loans</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary-600 text-white">
                        <th className="p-4 text-left">Plan</th>
                        <th className="p-4 text-right">Monthly Payment</th>
                        <th className="p-4 text-right">Estimated Term</th>
                        <th className="p-4 text-right">Forgiveness</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">RAP</td>
                        <td className="p-4 text-right">$167</td>
                        <td className="p-4 text-right">30 years</td>
                        <td className="p-4 text-right">Varies</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">PAYE</td>
                        <td className="p-4 text-right">$317</td>
                        <td className="p-4 text-right">20 years</td>
                        <td className="p-4 text-right">Depends on balance and interest</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">IBR</td>
                        <td className="p-4 text-right">$317</td>
                        <td className="p-4 text-right">20-25 years</td>
                        <td className="p-4 text-right">Depends on borrower history</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">ICR</td>
                        <td className="p-4 text-right">$633</td>
                        <td className="p-4 text-right">25 years</td>
                        <td className="p-4 text-right">Depends on balance and interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Looking for detailed IDR guidance?</strong> Check out our comprehensive guide on <Link href="/blog/idr-plan-comparison" className="text-blue-700 hover:text-blue-800 underline">IDR plan comparison</Link> and learn about <Link href="/blog/married-borrowers-repayment-strategy" className="text-blue-700 hover:text-blue-800 underline">repayment strategies for married borrowers</Link>.
                  {' '}If you searched for a narrower tool, use the <Link href="/income-based-repayment-calculator" className="text-blue-700 hover:text-blue-800 underline">Income-Based Repayment calculator</Link>, <Link href="/idr-payment-estimator" className="text-blue-700 hover:text-blue-800 underline">IDR payment estimator</Link>, or <Link href="/student-loan-idr-payment-calculator" className="text-blue-700 hover:text-blue-800 underline">student loan IDR payment calculator</Link>.
                </p>
              </div>

              <div className="space-y-4">
                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What is discretionary income for IDR calculations?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Legacy IDR plans use discretionary income, which subtracts a poverty-guideline allowance from your AGI before applying a payment percentage.</p>
                    <p className="text-sm">RAP works differently: it uses AGI directly, then subtracts $50 per dependent from the monthly payment, subject to a $10 minimum.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    How often do I need to recertify my IDR plan?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">You must recertify your income and family size annually with your loan servicer. The deadline is typically one year from your last certification.</p>
                    <p className="text-sm">If you miss the deadline, your payments will increase to the standard 10-year amount, and unpaid interest may capitalize.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Can I change my income calculation method?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Yes. You can use your most recent tax return, current pay stubs, or alternative documentation of income.</p>
                    <p className="text-sm">If your income has significantly decreased since your last tax return, using pay stubs or alternative documentation can result in lower monthly payments.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What happens if I get married or have a child?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">If you get married or have a child, your family size increases, which increases the poverty guideline deduction and potentially lowers your discretionary income.</p>
                    <p className="text-sm">You must update this information during your annual recertification. RAP reduces monthly payments by $50 per dependent claimed on your federal tax return.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Do IDR plans forgive loan balances?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Yes. After 20-25 years of qualifying payments (depending on the plan), any remaining loan balance is forgiven.</p>
                    <ul className="space-y-1 text-sm my-2">
                      <li>• RAP: 30 years</li>
                      <li>• PAYE: 20 years</li>
                      <li>• IBR: 20-25 years</li>
                      <li>• ICR: 25 years</li>
                    </ul>
                    <p className="text-sm">Note that non-PSLF forgiven amounts may be taxable depending on federal and state law.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Should I choose IDR or standard repayment?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2"><strong>Choose IDR if:</strong> Your debt-to-income ratio is high (over 1.5x your income), you expect to work in public service, or you need lower monthly payments.</p>
                    <p className="text-sm"><strong>Choose standard repayment if:</strong> You can afford higher payments and want to pay off loans faster with less total interest.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Apply for an IDR Plan?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl">
                Apply through StudentAid.gov in about 30 minutes. Have your tax return and income information ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://studentaid.gov/idr" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                  Apply at StudentAid.gov
                </a>
                <Link href="/pslf-calculator" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition text-center">
                  Check PSLF Eligibility
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
