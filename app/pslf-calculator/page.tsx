import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PslfCalculator from '@/components/PslfCalculator';
import Link from 'next/link';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'PSLF Calculator - Public Service Loan Forgiveness Estimator',
  description: 'Estimate your Public Service Loan Forgiveness amount. Track your progress toward 120 qualifying payments with detailed guidance.',
  keywords: ['PSLF calculator', 'public service loan forgiveness', 'loan forgiveness', 'PSLF'],
  openGraph: {
    title: 'PSLF Calculator - Estimate Your Forgiveness',
    description: 'Calculate your Public Service Loan Forgiveness amount',
    url: 'https://repaymentguide.com/pslf-calculator',
  },
};

const faqs = [
  {
    question: 'What counts as qualifying employment for PSLF?',
    answer: 'Qualifying employment includes working for: government organizations (federal, state, local, tribal, or territorial); 501(c)(3) nonprofit organizations; or other types of nonprofit organizations that provide certain public services. Full-time employment is defined as 30+ hours per week or meeting your employer\'s definition of full-time.'
  },
  {
    question: 'How do I track my qualifying payments?',
    answer: 'Submit the PSLF Help Tool form annually (or when changing employers) at StudentAid.gov/pslf. Your servicer will track your payments and employer certifications. You can also check your payment count by logging into StudentAid.gov and viewing your loan servicer dashboard.'
  },
  {
    question: 'Do payments made before enrolling in an IDR plan count?',
    answer: 'Only payments made under an income-driven repayment plan (SAVE, PAYE, IBR, or ICR) count toward PSLF. Standard or graduated repayment payments don\'t qualify. However, the 2024 IDR Account Adjustment may have credited some past payments made under non-qualifying plans.'
  },
  {
    question: 'What is the IDR Account Adjustment and how does it affect me?',
    answer: 'The IDR Account Adjustment (implemented in 2024) recategorized past payments made under non-qualifying repayment plans (including deferments and forbearances) as qualifying payments for IDR forgiveness and PSLF. Many borrowers received significant payment count increases, moving them closer to forgiveness.'
  },
  {
    question: 'Can I work part-time and still qualify?',
    answer: 'Generally, no. PSLF requires full-time employment (30+ hours per week) or meeting your employer\'s definition of full-time. However, if you have multiple part-time jobs with qualifying employers, you may qualify if the combined hours meet the full-time requirement.'
  },
  {
    question: 'Does PSLF forgive Parent PLUS loans?',
    answer: 'Yes, but only after consolidation. Parent PLUS loans must be consolidated into a Direct Consolidation Loan first, then you must enroll in the ICR repayment plan. Payments made before consolidation don\'t count toward your 120 required payments.'
  }
];

export default function PslfCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Public Service Loan Forgiveness Calculator</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Estimate your forgiveness amount and track your progress toward 120 qualifying payments.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Calculator */}
          <PslfCalculator />

          {/* Detailed Content */}
          <div className="mt-16 max-w-4xl mx-auto space-y-12">
            {/* PSLF Requirements */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PSLF Requirements Checklist</h2>

              <div className="bg-white border rounded-xl overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Direct Loans Only</h3>
                      <p className="text-gray-600 text-sm">FFEL and Perkins loans must be consolidated into Direct Loans first. Payments made before consolidation DON'T count toward PSLF.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">120 Qualifying Monthly Payments</h3>
                      <p className="text-gray-600 text-sm">Payments must be made in full, on time, while enrolled in an income-driven repayment plan (SAVE, PAYE, IBR, or ICR).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Full-Time Employment</h3>
                      <p className="text-gray-600 text-sm">30+ hours per week at a qualifying employer. Multiple part-time jobs with qualifying employers can combine to meet full-time status.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Qualifying Employer</h3>
                      <p className="text-gray-600 text-sm">Government organizations (federal, state, local, tribal) or 501(c)(3) nonprofit organizations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 font-bold">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Qualifying Repayment Plan</h3>
                      <p className="text-gray-600 text-sm">Must be enrolled in an income-driven repayment plan. Standard and graduated plans DON'T qualify.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Qualifying Employers */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Qualifying Employer?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary-700">✅ Qualifying Employers</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Federal government agencies</li>
                    <li>• State government agencies</li>
                    <li>• Local government agencies</li>
                    <li>• Tribal governments</li>
                    <li>• 501(c)(3) nonprofit organizations</li>
                    <li>• Public schools (K-12)</li>
                    <li>• Public colleges/universities</li>
                    <li>• Public libraries</li>
                    <li>• Law enforcement</li>
                    <li>• Fire departments</li>
                    <li>• Public hospitals</li>
                    <li>• AmeriCorps/Peace Corps</li>
                  </ul>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-red-700">❌ Non-Qualifying Employers</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• For-profit companies</li>
                    <li>• Labor unions</li>
                    <li>• Partisan political organizations</li>
                    <li>• Religious organizations (non-501(c)(3))</li>
                    <li>• Contractors for qualifying employers</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 rounded text-sm text-red-800">
                    <strong>Important:</strong> Working for a contractor of a qualifying employer does NOT qualify. You must be directly employed by the government or nonprofit organization.
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Tracking */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Track Your Payments</h2>

              <div className="bg-white border rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Submit the PSLF Form Annually</h3>
                  <p className="text-gray-600 mb-4">
                    Use the <a href="https://studentaid.gov/pslf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">PSLF Help Tool</a> at StudentAid.gov to submit your Employment Certification Form.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">When to Submit</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Annually (every 12 months)</li>
                        <li>• When changing employers</li>
                        <li>• As soon as you start at a qualifying employer</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What Happens After Submission</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Your servicer reviews your employment</li>
                        <li>• Qualifying payments are credited</li>
                        <li>• You'll receive payment count confirmation</li>
                        <li>• Errors are flagged for correction</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Check Your Payment Count</h4>
                      <p className="text-blue-800 text-sm">
                        Log in to StudentAid.gov and view your loan servicer dashboard to see your current payment count. Due to the IDR Account Adjustment, many borrowers are closer to forgiveness than they thought.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common PSLF Mistakes to Avoid</h2>

              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Wrong Repayment Plan</h3>
                  <p className="text-red-800 text-sm">
                    Standard and graduated repayment plans don't qualify for PSLF. You MUST be in an income-driven repayment plan (SAVE, PAYE, IBR, or ICR).
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Not Certifying Employment</h3>
                  <p className="text-red-800 text-sm">
                    If you don't submit the PSLF form annually, you won't know if your payments are counting. Many borrowers discover too late that their employment didn't qualify.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Consolidating Without Understanding Impact</h3>
                  <p className="text-red-800 text-sm">
                    Consolidating FFEL or Perkins loans resets your PSLF payment clock to zero. Only consolidate if necessary to gain PSLF eligibility.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Missing Payments</h3>
                  <p className="text-red-800 text-sm">
                    Late or partial payments don't count toward your 120. Set up autopay to ensure you never miss a payment.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Assuming Forgiveness is Automatic</h3>
                  <p className="text-red-800 text-sm">
                    You must submit a PSLF application after making 120 payments. Forgiveness is not automatic.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Need detailed PSLF guidance?</strong> Read our complete <Link href="/blog/pslf-application-guide" className="text-blue-700 hover:text-blue-800 underline">PSLF application guide</Link> and learn about <Link href="/blog/student-loan-forgiveness-programs" className="text-blue-700 hover:text-blue-800 underline">all forgiveness programs</Link> available.
                </p>
              </div>

              <div className="space-y-4">
                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What counts as qualifying employment for PSLF?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Qualifying employment includes working for:</p>
                    <ul className="space-y-1 text-sm mb-2">
                      <li>• Government organizations (federal, state, local, tribal, or territorial)</li>
                      <li>• 501(c)(3) nonprofit organizations</li>
                      <li>• Other types of nonprofits that provide public services</li>
                    </ul>
                    <p className="text-sm">Full-time employment is 30+ hours per week or meeting your employer's definition of full-time.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    How do I track my qualifying payments?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Submit the PSLF Help Tool form annually (or when changing employers) at StudentAid.gov/pslf.</p>
                    <p className="text-sm">Your servicer will track your payments and employer certifications. You can also check your payment count by logging into StudentAid.gov and viewing your loan servicer dashboard.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Do payments made before enrolling in an IDR plan count?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Only payments made under an income-driven repayment plan (SAVE, PAYE, IBR, or ICR) count toward PSLF.</p>
                    <p className="text-sm">Standard or graduated repayment payments don't qualify. However, the 2024 IDR Account Adjustment may have credited some past payments made under non-qualifying plans.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    What is the IDR Account Adjustment and how does it affect me?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">The IDR Account Adjustment (implemented in 2024) recategorized past payments made under non-qualifying repayment plans (including deferments and forbearances) as qualifying payments for IDR forgiveness and PSLF.</p>
                    <p className="text-sm">Many borrowers received significant payment count increases, moving them closer to forgiveness.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Can I work part-time and still qualify?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Generally, no. PSLF requires full-time employment (30+ hours per week) or meeting your employer's definition of full-time.</p>
                    <p className="text-sm">However, if you have multiple part-time jobs with qualifying employers, you may qualify if the combined hours meet the full-time requirement.</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    Does PSLF forgive Parent PLUS loans?
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">Yes, but only after consolidation. Parent PLUS loans must be consolidated into a Direct Consolidation Loan first, then you must enroll in the ICR repayment plan.</p>
                    <p className="text-sm">Payments made before consolidation don't count toward your 120 required payments.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Apply for PSLF?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl">
                Use the PSLF Help Tool to certify your employment and track your qualifying payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://studentaid.gov/pslf" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                  PSLF Help Tool
                </a>
                <Link href="/income-driven-repayment-calculator" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition text-center">
                  Compare IDR Plans
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
