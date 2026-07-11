import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentCalculator from '@/components/PaymentCalculator';
import Link from 'next/link';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Student Loan Payment Calculator - Calculate Monthly Payments',
  description: 'Calculate your monthly student loan payments under different repayment plans. Compare standard, graduated, and extended repayment options with detailed examples.',
  keywords: ['student loan payment calculator', 'monthly payment', 'loan calculator', 'repayment plans'],
  alternates: {
    canonical: '/student-loan-payment-calculator/',
  },
  openGraph: {
    title: 'Student Loan Payment Calculator',
    description: 'Calculate your monthly student loan payments and compare repayment options',
    url: 'https://repaymentguide.com/student-loan-payment-calculator',
  },
};

const faqs = [
  {
    question: 'What interest rate should I use?',
    answer: 'Check your loan servicer account for your exact rates. For federal Direct Loans: Undergraduate loans are 5.50% (2023-24), graduate/professional loans are 7.05% - 8.05%, and PLUS loans are 8.05%. If you have multiple loans with different rates, use a weighted average or calculate each separately.'
  },
  {
    question: 'Can I change my repayment plan later?',
    answer: 'Yes! You can change your federal repayment plan at any time through StudentAid.gov or by contacting your loan servicer. There is no fee to switch, and you can change plans as often as needed. Note: Switching from graduated back to standard may reset your payment schedule.'
  },
  {
    question: 'Which plan saves the most money?',
    answer: 'The Standard 10-Year plan always saves the most money overall because you pay the least interest. On a $35,000 loan at 6.5%: Standard 10-Year costs $47,700 total, Standard 20-Year costs $62,600 total, Graduated costs ~$52,000 total, and Extended costs ~$73,000 total. However, if the standard payment is too high for your budget, an IDR plan might be better.'
  },
  {
    question: 'What if I can\'t afford any of these payments?',
    answer: 'If standard repayment plans don\'t fit your budget, consider income-driven repayment (IDR) plans, which base payments on your income. The SAVE plan uses 5-10% of discretionary income, PAYE/IBR use 10-15%, and payments can be as low as $0 if income is low. IDR plans also offer forgiveness after 20-25 years of payments.'
  },
  {
    question: 'Do these plans apply to private student loans?',
    answer: 'No. This calculator covers federal student loan repayment plans only. Private loans have different terms set by each lender. If you have both federal and private loans, you may want to focus on federal loans first (more flexible options) or consider refinancing private loans to potentially lower rates.'
  },
  {
    question: 'What happens if I miss a payment?',
    answer: 'Missing payments can lead to delinquency (after 90 days) and default (after 270 days). Default has serious consequences including loss of repayment plan options, wage and tax refund garnishment, seizure of tax refunds, and damage to credit score. If you\'re struggling, contact your servicer immediately or switch to an IDR plan before missing payments.'
  }
];

export default function PaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Loan Payment Calculator</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Calculate your monthly payments under standard federal repayment plans and understand which option fits your budget.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Calculator */}
          <PaymentCalculator />

          {/* Detailed Content Section */}
          <div className="mt-16 max-w-4xl mx-auto space-y-12">
            {/* How to Use */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use This Calculator</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white border rounded-lg p-6 text-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700 font-bold text-lg">1</div>
                  <h3 className="font-semibold mb-2">Enter Loan Balance</h3>
                  <p className="text-gray-600 text-sm">Input your total federal student loan amount</p>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700 font-bold text-lg">2</div>
                  <h3 className="font-semibold mb-2">Add Interest Rate</h3>
                  <p className="text-gray-600 text-sm">Your current interest rate (usually 5.50% - 7.50%)</p>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700 font-bold text-lg">3</div>
                  <h3 className="font-semibold mb-2">Compare Plans</h3>
                  <p className="text-gray-600 text-sm">View monthly payments for each repayment option</p>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700 font-bold text-lg">4</div>
                  <h3 className="font-semibold mb-2">Choose Best Plan</h3>
                  <p className="text-gray-600 text-sm">Select the plan that fits your budget and goals</p>
                </div>
              </div>
            </section>

            {/* Repayment Plans Explained */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Repayment Options</h2>

              <div className="space-y-6">
                {/* Standard 10-Year */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-primary-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Standard 10-Year Repayment</h3>
                    <p className="text-primary-700 font-medium">Default Plan • Fastest Payoff • Least Interest</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Borrowers who can afford higher payments</li>
                          <li>• Those wanting to pay loans off quickly</li>
                          <li>• People planning major purchases (home, car)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Fixed monthly payment for 10 years</li>
                          <li>• No income documentation required</li>
                          <li>• Eligible for all loan types</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> $35,000 loan at 6.5% interest = <span className="font-bold text-primary-700">$398/month</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Standard 20-Year */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-blue-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Standard 20-Year Repayment</h3>
                    <p className="text-blue-700 font-medium">Extended Term • Lower Payments • More Interest</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Loans over $30,000 (eligibility requirement)</li>
                          <li>• Borrowers needing lower monthly payments</li>
                          <li>• Those with other financial priorities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Fixed payment for 20 years (no acceleration)</li>
                          <li>• Payments never increase over time</li>
                          <li>• Must have outstanding balance over $30,000</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> $35,000 loan at 6.5% interest = <span className="font-bold text-blue-700">$261/month</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Graduated */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-green-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Graduated Repayment</h3>
                    <p className="text-green-700 font-medium">Starts Low • Increases Over Time • 10-Year Term</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Expecting income to increase steadily</li>
                          <li>• Recent graduates with entry-level salaries</li>
                          <li>• Those anticipating promotions/raises</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Payments increase every 2 years</li>
                          <li>• Starts at ~50% of standard payment</li>
                          <li>• Never exceeds standard 10-year payment</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> $35,000 loan at 6.5% interest = <span className="font-bold text-green-700">$198/month (Year 1) → $475/month (Year 10)</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extended */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-yellow-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Extended Repayment</h3>
                    <p className="text-yellow-700 font-medium">25-Year Term • Lowest Payments • Highest Total Interest</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Loans over $30,000 (eligibility requirement)</li>
                          <li>• Borrowers needing maximum payment relief</li>
                          <li>• Those with limited current income</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Fixed or graduated options available</li>
                          <li>• Payments spread over 25 years</li>
                          <li>• Results in 2.5x more total interest vs. 10-year</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> $35,000 loan at 6.5% interest = <span className="font-bold text-yellow-700">$237/month (fixed) or $145/month (graduated start)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Looking for more detailed information?</strong> Check out our comprehensive guides on <Link href="/blog/student-loan-refinancing-vs-consolidation" className="text-blue-700 hover:text-blue-800 underline">loan consolidation vs refinancing</Link> and <Link href="/blog/student-loan-forgiveness-programs" className="text-blue-700 hover:text-blue-800 underline">forgiveness programs</Link>.
                </p>
              </div>

              <div className="space-y-4">
                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What interest rate should I use?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-3">Check your loan servicer account for your exact rates. For federal Direct Loans:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Undergraduate loans: 5.50% (2023-24 academic year)</li>
                      <li>• Graduate/professional: 7.05% - 8.05%</li>
                      <li>• PLUS loans: 8.05%</li>
                    </ul>
                    <p className="mt-3 text-sm">If you have multiple loans with different rates, use a weighted average or calculate each separately.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Can I change my repayment plan later?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Yes! You can change your federal repayment plan at any time through StudentAid.gov or by contacting your loan servicer. There's no fee to switch, and you can change plans as often as needed.</p>
                    <p className="text-sm">Note: Switching from graduated back to standard may reset your payment schedule.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Which plan saves the most money?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">The Standard 10-Year plan always saves the most money overall because you pay the least interest. Here's a comparison on a $35,000 loan at 6.5%:</p>
                    <ul className="space-y-1 text-sm my-2">
                      <li>• <strong>Standard 10-Year:</strong> $398/month → $47,700 total</li>
                      <li>• <strong>Standard 20-Year:</strong> $261/month → $62,600 total</li>
                      <li>• <strong>Graduated:</strong> $198-$475/month → ~$52,000 total</li>
                      <li>• <strong>Extended:</strong> $145/month → ~$73,000 total</li>
                    </ul>
                    <p className="text-sm">However, if the standard payment is too high for your budget, an IDR plan might be better.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What if I can't afford any of these payments?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-3">If standard repayment plans don't fit your budget, consider <Link href="/income-driven-repayment-calculator" className="text-primary-600 hover:text-primary-700 font-medium">income-driven repayment (IDR) plans</Link>, which base payments on your income:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• SAVE plan: 5-10% of discretionary income</li>
                      <li>• PAYE/IBR: 10-15% of discretionary income</li>
                      <li>• Payments can be as low as $0 if income is low</li>
                    </ul>
                    <p className="text-sm mt-3">IDR plans also offer forgiveness after 20-25 years of payments.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Do these plans apply to private student loans?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">No. This calculator covers federal student loan repayment plans only. Private loans have different terms set by each lender.</p>
                    <p className="text-sm">If you have both federal and private loans, you may want to focus on federal loans first (more flexible options) or consider refinancing private loans to potentially lower rates.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What happens if I miss a payment?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Missing payments can lead to delinquency (after 90 days) and default (after 270 days). Default has serious consequences:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Loss of repayment plan options</li>
                      <li>• Wage and tax refund garnishment</li>
                      <li>• Seizure of tax refunds</li>
                      <li>• Damage to credit score</li>
                    </ul>
                    <p className="text-sm mt-3">If you're struggling, contact your servicer immediately or switch to an IDR plan before missing payments.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Need Lower Payments?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl">
                If standard repayment plans don't fit your budget, explore income-driven repayment options based on your income and family size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/income-driven-repayment-calculator" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                  Compare IDR Plans
                </Link>
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
