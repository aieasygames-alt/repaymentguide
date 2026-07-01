import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'SAVE Plan Alternatives 2026 - Compare RAP, IBR, PAYE & ICR',
  description: 'SAVE ended in 2026. Compare RAP, IBR, PAYE, ICR, and standard repayment options before your 90-day servicer deadline.',
  keywords: ['SAVE plan ending', 'RAP plan', 'IDR plans', 'PAYE', 'IBR', 'ICR', 'income driven repayment', 'student loan alternatives'],
  openGraph: {
    title: 'SAVE Plan Calculator & Alternatives',
    description: 'Compare SAVE with other IDR plans and find your best option',
    url: 'https://repaymentguide.com/save-plan-calculator',
  },
};

const faqs = [
  {
    question: 'Is SAVE still available?',
    answer: 'No. A court order ended the SAVE Plan on March 10, 2026. Servicers are notifying SAVE borrowers beginning July 1, 2026, and borrowers generally have 90 days from the notice date to choose a different repayment plan.'
  },
  {
    question: 'What is RAP?',
    answer: 'RAP is the Repayment Assistance Plan, a new income-driven repayment plan available beginning July 1, 2026. Payments are based on 1-10% of AGI, reduced by $50 per dependent, with a $10 minimum monthly payment.'
  },
  {
    question: 'What happens if I do not choose a new plan?',
    answer: 'If you miss your SAVE transition deadline, your servicer may place you into a standard-style plan. That can increase your monthly payment, so compare RAP, IBR, PAYE, ICR, and standard repayment before the 90-day window closes.'
  },
  {
    question: 'How do I apply for PAYE, IBR, or ICR?',
    answer: 'All IDR applications go through the same process: Log in to StudentAid.gov/idr, select "Apply for an IDR Plan", choose your preferred plan (you can select first choice and backup), submit income documentation (tax return or alternative), and wait for servicer processing (typically 4-6 weeks).'
  },
  {
    question: 'What if I\'m already in SAVE but want to switch?',
    answer: 'You can choose another available repayment plan through StudentAid.gov. Compare RAP, IBR, PAYE, ICR, and standard repayment based on your income, dependents, loan type, and PSLF strategy.'
  }
];

export default function SavePlanCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">SAVE Plan Alternatives for 2026</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              SAVE has ended. Compare RAP, IBR, PAYE, ICR, and standard repayment options before your 90-day servicer deadline.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Calculator */}
          <IdrComparison />

          {/* Detailed Content */}
          <div className="mt-16 max-w-4xl mx-auto space-y-12">
            {/* SAVE Plan Status */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SAVE Plan Current Status</h2>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">SAVE Ended by Court Order</h3>
                    <p className="text-red-800">
                      A March 10, 2026 court order ended the SAVE Plan. Servicers are notifying borrowers between
                      July 1 and August 15, 2026, and borrowers have 90 days from the notice date to select another plan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-2">What This Means for You</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>New applications:</strong> SAVE is no longer available as a repayment choice</li>
                  <li>• <strong>Existing SAVE borrowers:</strong> Watch for your servicer notice and 90-day deadline</li>
                  <li>• <strong>Need lower payments now:</strong> Compare RAP, IBR, PAYE, ICR, and standard repayment</li>
                  <li>• <strong>PSLF borrowers:</strong> RAP can count toward PSLF if all other PSLF rules are met</li>
                </ul>
              </div>
            </section>

            {/* IDR Plans Deep Dive */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IDR Plans Explained</h2>

              <div className="space-y-6">
                {/* RAP */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-blue-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">RAP (Repayment Assistance Plan)</h3>
                    <p className="text-blue-700">New 2026 IDR Plan • AGI-Based • Interest and Principal Benefits</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Payments are based on 1-10% of AGI</li>
                          <li>• $50 monthly reduction for each dependent</li>
                          <li>• Unpaid monthly interest can be subsidized after full, on-time payments</li>
                          <li>• Matching principal payment up to $50 when needed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Watch-outs:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• $10 minimum monthly payment</li>
                          <li>• No poverty-line income exclusion</li>
                          <li>• 30-year forgiveness timeline outside PSLF</li>
                          <li>• Parent PLUS consolidation loans are not eligible</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Best for:</strong> Borrowers whose RAP payment is lower than IBR/PAYE/ICR, and borrowers who value the interest subsidy and principal progress benefits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PAYE */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-purple-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">PAYE (Pay As You Earn)</h3>
                    <p className="text-purple-700">Best Alternative to SAVE • Payment Cap • Strict Eligibility</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 10% of discretionary income</li>
                          <li>• Payment cap protects high earners</li>
                          <li>• No interest capitalization if staying in plan</li>
                          <li>• 20-year forgiveness timeline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• First loan after Oct 2007 AND Oct 2011</li>
                          <li>• Must show partial financial need</li>
                          <li>• Direct Loans only (no Parent PLUS)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Best for:</strong> Recent graduates with high debt-to-income ratios who expect steady income growth but want protection if income spikes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IBR */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-green-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">IBR (Income-Based Repayment)</h3>
                    <p className="text-green-700">Available to Most Borrowers • Flexible • Married Options</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Available to all borrowers regardless of loan date</li>
                          <li>• Can exclude spouse income if filing separately</li>
                          <li>• 10-15% of discretionary income</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trade-offs:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Higher payments for newer borrowers (15%)</li>
                          <li>• Interest capitalizes if you leave the plan</li>
                          <li>• 20-25 year forgiveness (longer for older loans)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Best for:</strong> Borrowers with older loans who don't qualify for PAYE, or married borrowers who can benefit from filing taxes separately.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ICR */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-orange-50 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">ICR (Income-Contingent Repayment)</h3>
                    <p className="text-orange-700">Only Option for Parent PLUS • Highest Payments • Required for PSLF</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The ONLY Option For:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Parent PLUS loan borrowers</li>
                          <li>• FFEL Consolidation loans</li>
                          <li>• Those who consolidated Parent PLUS loans</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Plan Details:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 20% of discretionary income (highest!)</li>
                          <li>• Always counts spouse income</li>
                          <li>• 25-year forgiveness timeline</li>
                          <li>• Must consolidate Parent PLUS first</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> Parent PLUS borrowers MUST consolidate into Direct Loans and then enroll in ICR to qualify for PSLF. ICR is your only IDR option.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-center">SAVE</th>
                      <th className="p-4 text-center">PAYE</th>
                      <th className="p-4 text-center">IBR</th>
                      <th className="p-4 text-center">ICR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Payment %</td>
                      <td className="p-4 text-center">5-10%</td>
                      <td className="p-4 text-center">10%</td>
                      <td className="p-4 text-center">10-15%</td>
                      <td className="p-4 text-center">20%</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Payment Cap</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center">✓ Yes</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Forgiveness</td>
                      <td className="p-4 text-center">10-20 years</td>
                      <td className="p-4 text-center">20 years</td>
                      <td className="p-4 text-center">20-25 years</td>
                      <td className="p-4 text-center">25 years</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Spouse Income</td>
                      <td className="p-4 text-center">Separate</td>
                      <td className="p-4 text-center">Separate</td>
                      <td className="p-4 text-center">Separate</td>
                      <td className="p-4 text-center">Always</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Parent PLUS</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center">✓ Yes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold">Current Status</td>
                      <td className="p-4 text-center text-red-600">Blocked</td>
                      <td className="p-4 text-center text-green-600">Available</td>
                      <td className="p-4 text-center text-green-600">Available</td>
                      <td className="p-4 text-center text-green-600">Available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Decision Guide */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Plan Should You Choose?</h2>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Do you have Parent PLUS loans?</h3>
                      <p className="text-gray-700 mt-1">
                        → <strong>ICR is your only option</strong>. Consolidate Parent PLUS into Direct Loans, then apply for ICR.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Are your loans after Oct 2007 & Oct 2011?</h3>
                      <p className="text-gray-700 mt-1">
                        → <strong>PAYE is likely best</strong> (similar to SAVE, with payment cap).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Married filing separately?</h3>
                      <p className="text-gray-700 mt-1">
                        → <strong>IBR or PAYE</strong> allows excluding spouse income (lower payments).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Expecting rapid income growth?</h3>
                      <p className="text-gray-700 mt-1">
                        → <strong>PAYE</strong> has payment cap if your income spikes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Need more information?</strong> Read our complete guide on <Link href="/blog/save-plan-alternatives" className="text-blue-700 hover:text-blue-800 underline">understanding SAVE plan alternatives</Link> and compare all <Link href="/blog/idr-plan-comparison" className="text-blue-700 hover:text-blue-800 underline">IDR plan options</Link> in detail.
                </p>
              </div>

              <div className="space-y-4">
                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Is SAVE still available?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">No. A March 10, 2026 court order ended the SAVE Plan. Servicers are notifying borrowers beginning July 1, 2026.</p>
                    <p className="text-sm">Compare RAP, IBR, PAYE, ICR, and standard repayment before your 90-day deadline.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What is RAP?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p>RAP is the Repayment Assistance Plan, a new income-driven repayment option available beginning July 1, 2026. It uses 1-10% of AGI, subtracts $50 per dependent, and has a $10 minimum monthly payment.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What happens if I miss the SAVE transition deadline?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Your servicer may place you into a standard-style repayment plan, which can raise your monthly bill. Before the deadline, compare:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• RAP</li>
                      <li>• IBR, PAYE, or ICR if available for your loans</li>
                      <li>• Tiered Standard or other standard repayment options</li>
                    </ul>
                    <p className="text-sm mt-3">Apply through StudentAid.gov or your servicer once you choose a plan.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    How do I apply for PAYE, IBR, or ICR?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">All IDR applications go through the same process:</p>
                    <ol className="space-y-1 text-sm list-decimal ml-4">
                      <li>Log in to <a href="https://studentaid.gov/idr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">StudentAid.gov/idr</a></li>
                      <li>Select "Apply for an IDR Plan"</li>
                      <li>Choose your preferred plan (you can select first choice and backup)</li>
                      <li>Submit income documentation (tax return or alternative)</li>
                      <li>Wait for servicer processing (typically 4-6 weeks)</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What if I'm already in SAVE but want to switch?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">You can proactively switch to PAYE/IBR/ICR at any time. Reasons to consider:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• You want actual payments to count toward PSLF (not $0 forbearance)</li>
                      <li>• You want payment certainty (forbearance ends when courts rule)</li>
                      <li>• You want to lock in a specific plan before rules change</li>
                    </ul>
                    <p className="text-sm mt-3">Apply through StudentAid.gov and select your new plan choice.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Calculate Your Specific Payments</h3>
              <p className="text-primary-100 mb-6 max-w-2xl">
                Use our IDR calculator to see exactly what your monthly payment would be under each available plan based on your income and family size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/income-driven-repayment-calculator" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                  Calculate IDR Payments
                </Link>
                <Link href="/blog/save-plan-alternatives" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition text-center">
                  Read Full Guide
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
