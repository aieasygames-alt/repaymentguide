import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { CalculatorSchema } from '@/components/CalculatorSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What does a PAYE payment calculator estimate?',
    answer: 'A PAYE payment calculator estimates a possible Pay As You Earn monthly payment using income and household size. The final amount depends on official eligibility, income documentation, loan history, and servicer processing.',
  },
  {
    question: 'Should I compare PAYE with IBR?',
    answer: 'Yes. PAYE and IBR can look similar in simple examples, but eligibility, payment caps, borrower history, spouse-income treatment, and forgiveness timelines can change which plan is better.',
  },
  {
    question: 'Can PAYE help PSLF borrowers?',
    answer: 'PAYE can be worth checking for PSLF if the borrower is eligible and PAYE creates a lower qualifying payment than IBR, RAP, ICR, or Standard repayment.',
  },
  {
    question: 'How do AGI and dependents affect a PAYE estimate?',
    answer: 'PAYE planning estimates usually start with adjusted gross income, household size, and the poverty-guideline allowance. Dependents can matter through household size, so a borrower with a higher AGI and several dependents should compare PAYE, IBR, RAP, and the standard payment cap.',
  },
];

export const metadata: Metadata = {
  title: 'PAYE Payment Calculator - Estimate Student Loan PAYE',
  description: 'Estimate a PAYE student loan payment, compare PAYE with IBR and RAP, and see when Pay As You Earn may fit PSLF or IDR planning.',
  keywords: ['PAYE payment calculator', 'PAYE student loan calculator', 'PAYE repayment calculator', 'PAYE vs IBR calculator'],
  alternates: { canonical: '/paye-payment-calculator/' },
  openGraph: {
    title: 'PAYE Payment Calculator',
    description: 'Estimate a PAYE student loan payment and compare PAYE with IBR, RAP, and other IDR plans.',
    url: 'https://repaymentguide.com/paye-payment-calculator/',
  },
};

export default function PayePaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://repaymentguide.com/' },
          { name: 'Student Loan Calculators', url: 'https://repaymentguide.com/student-loan-calculators/' },
          { name: 'PAYE Payment Calculator', url: 'https://repaymentguide.com/paye-payment-calculator/' },
        ]}
      />
      <CalculatorSchema
        name="PAYE Payment Calculator"
        description="Estimate Pay As You Earn student loan payments and compare PAYE with IBR, RAP, ICR, Standard repayment, and PSLF planning."
        url="https://repaymentguide.com/paye-payment-calculator/"
        keywords={['PAYE payment calculator', 'Pay As You Earn', 'student loan PAYE calculator']}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-200">PAYE estimate</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">PAYE Payment Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate a Pay As You Earn student loan payment, then compare PAYE with IBR, RAP, ICR, Standard repayment, and PSLF strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <IdrComparison />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              title="PAYE calculator assumptions"
              assumptions={[
                'The calculator provides a planning estimate and does not confirm PAYE eligibility.',
                'PAYE eligibility can depend on borrower history, loan timing, income documentation, and official plan rules.',
                'Compare PAYE with IBR, RAP, ICR, Standard repayment, and PSLF before relying on a single estimate.',
              ]}
              sources={[
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
                officialStudentLoanSources.loanSimulator,
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">When a PAYE estimate is useful</h2>
              <p className="mt-3 text-gray-700">
                PAYE is worth estimating when you may qualify for Pay As You Earn and want to compare a legacy income-driven plan against IBR or RAP. It can be especially relevant for borrowers checking payment caps, PSLF, or higher-income scenarios where the standard payment matters.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/income-based-repayment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Compare PAYE vs IBR</Link>
                <Link href="/rap-payment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Compare PAYE vs RAP</Link>
                <Link href="/pslf-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Check PAYE for PSLF</Link>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border bg-primary-50 p-4 font-semibold text-primary-950 hover:bg-primary-100">Open the IDR payment estimator</Link>
                <Link href="/save-90-day-deadline-calculator" className="rounded-xl border bg-amber-50 p-4 font-semibold text-amber-950 hover:bg-amber-100">Check your deadline first</Link>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Estimating PAYE with AGI and dependents</h2>
              <p className="mt-3 text-gray-700">
                If your question starts with a specific AGI, such as $108,000, and a specific number of dependents, run PAYE as one scenario rather than the final answer. Household size can lower discretionary income, but PAYE eligibility, the standard repayment cap, spouse income, and PSLF goals can still change which plan is best.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border bg-primary-50 p-4 font-semibold text-primary-950 hover:bg-primary-100">Run AGI scenarios</Link>
                <Link href="/income-based-repayment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Compare IBR</Link>
                <Link href="/student-loan-payment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Check standard cap</Link>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Link href="/parent-plus-rap-eligibility" className="rounded-xl border bg-green-50 p-4 font-semibold text-green-950 hover:bg-green-100">Parent PLUS RAP eligibility</Link>
                <Link href="/ibr-vs-rap" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">See IBR vs RAP next</Link>
              </div>
            </section>

            <section className="overflow-x-auto rounded-2xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">PAYE vs IBR vs RAP</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Plan</th>
                    <th className="p-3 text-left">Why compare it?</th>
                    <th className="p-3 text-left">Best next check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">PAYE</td>
                    <td className="p-3">May offer a useful payment cap and 20-year forgiveness timeline for eligible borrowers.</td>
                    <td className="p-3">Confirm borrower-history eligibility.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-semibold">IBR</td>
                    <td className="p-3">Often the fallback legacy IDR plan when PAYE eligibility is uncertain.</td>
                    <td className="p-3"><Link href="/income-based-repayment-calculator" className="text-primary-700 underline">IBR calculator</Link></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">RAP</td>
                    <td className="p-3">Uses AGI tiers and dependent reductions instead of the PAYE discretionary-income formula.</td>
                    <td className="p-3"><Link href="/ibr-vs-rap" className="text-primary-700 underline">IBR vs RAP guide</Link></td>
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

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.loanSimulator]} title="Official sources for PAYE estimates" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
