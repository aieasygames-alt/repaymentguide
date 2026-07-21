import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What does a student loan IDR payment calculator estimate?',
    answer: 'A student loan IDR payment calculator estimates monthly payments under income-driven repayment options. It uses income and household size to compare plans, then helps you decide which official plan details to verify through StudentAid.gov or your federal loan servicer.',
  },
  {
    question: 'Why might my servicer payment differ from this estimate?',
    answer: 'Your servicer may use different verified income documentation, family size, loan type data, consolidation history, borrower-history rules, and current policy instructions. This calculator is useful for planning, but final payment amounts come from official servicer processing.',
  },
  {
    question: 'Which IDR plan should student loan borrowers compare first?',
    answer: 'Compare the plan with the lowest estimate, but do not stop there. Check whether RAP, IBR, PAYE, or ICR is actually available for your loans, whether PSLF matters, whether spouse income changes the result, and whether forgiveness timing affects your long-term cost.',
  },
  {
    question: 'Does this calculator cover private student loans?',
    answer: 'No. Income-driven repayment plans are federal student loan options. Private student loans use lender-specific terms and usually do not offer federal IDR, PSLF, or federal loan forgiveness rules. Separate private-loan refinancing or hardship programs require lender review.',
  },
];

export const metadata: Metadata = {
  title: 'Student Loan IDR Payment Calculator - Compare Plans',
  description: 'Use this student loan IDR payment calculator to estimate income-driven payments under RAP, IBR, PAYE, and ICR.',
  keywords: ['student loan IDR payment calculator', 'student loan income driven repayment calculator', 'federal student loan IDR calculator', 'IDR payment calculator'],
  alternates: { canonical: '/student-loan-idr-payment-calculator/' },
  openGraph: {
    title: 'Student Loan IDR Payment Calculator',
    description: 'Compare estimated federal student loan payments under income-driven repayment plans.',
    url: 'https://repaymentguide.com/student-loan-idr-payment-calculator/',
  },
};

export default function StudentLoanIdrPaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">Federal student loan IDR tool</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Student Loan IDR Payment Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate federal student loan IDR payments and compare income-driven repayment plans before choosing your next official repayment step.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <IdrComparison />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              assumptions={[
                'The calculator is designed for federal student loan planning, not private student loan repayment.',
                'IDR estimates can change after official income documentation, consolidation, servicer review, or annual recertification.',
                'Use official federal tools and servicer records for final payment amounts and eligibility decisions.',
              ]}
              sources={[
                officialStudentLoanSources.loanSimulator,
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">What This Student Loan IDR Calculator Compares</h2>
              <p className="mt-3 text-gray-700">
                This calculator is for borrowers who want a practical estimate before submitting an IDR application. It helps compare income-driven repayment options, but the right plan also depends on loan type, servicer records, PSLF goals, spouse-income treatment, and whether you are responding to a SAVE transition notice.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-gray-900">Inputs that shape the estimate</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li>- Adjusted gross income</li>
                    <li>- Household size</li>
                    <li>- Plan formula and forgiveness timeline</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-gray-900">Items to verify officially</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li>- Loan type and consolidation history</li>
                    <li>- Parent PLUS treatment</li>
                    <li>- PSLF qualifying payment credit</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="overflow-x-auto rounded-2xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Calculator Path by Search Intent</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">If you searched for...</th>
                    <th className="p-3 text-left">Best next page</th>
                    <th className="p-3 text-left">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">income driven repayment calculator</td>
                    <td className="p-3"><Link href="/income-driven-repayment-calculator" className="text-primary-700 underline">IDR calculator</Link></td>
                    <td className="p-3">Broad comparison across income-driven repayment plans.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3">income based repayment calculator</td>
                    <td className="p-3"><Link href="/income-based-repayment-calculator" className="text-primary-700 underline">IBR calculator</Link></td>
                    <td className="p-3">Focuses on the Income-Based Repayment plan.</td>
                  </tr>
                  <tr>
                    <td className="p-3">idr payment estimator</td>
                    <td className="p-3"><Link href="/idr-payment-estimator" className="text-primary-700 underline">IDR payment estimator</Link></td>
                    <td className="p-3">Quick estimate for planning before official verification.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-lg border bg-white">
                    <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">{faq.question}</summary>
                    <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.loanSimulator, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication]} title="Official sources for federal student loan IDR payments" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
