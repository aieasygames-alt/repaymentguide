import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What is the Income-Based Repayment calculator for?',
    answer: 'This Income-Based Repayment calculator helps federal student loan borrowers estimate how IBR may compare with RAP, PAYE, and ICR. Use it when you want an income-based payment estimate before checking your official options through StudentAid.gov or your loan servicer.',
  },
  {
    question: 'Is IBR the same as IDR?',
    answer: 'No. IDR means income-driven repayment, the broader category of federal repayment plans tied to income. IBR, or Income-Based Repayment, is one plan within that category. Other income-driven options can include PAYE, ICR, and RAP, depending on eligibility and policy timing.',
  },
  {
    question: 'Can IBR payments be zero dollars?',
    answer: 'IBR can produce a very low or zero monthly payment when discretionary income is low. Your actual bill depends on your adjusted gross income, family size, poverty-guideline allowance, loan type, borrower history, and annual income recertification through the official IDR process.',
  },
  {
    question: 'Should married borrowers use this IBR calculator?',
    answer: 'Yes, but treat the result as a planning estimate. Married filing status can change which income is counted under some legacy IDR plans. Compare the repayment effect with tax consequences before changing filing status, and confirm final treatment through official channels.',
  },
];

export const metadata: Metadata = {
  title: 'Income-Based Repayment Calculator - Estimate Student Loan IBR',
  description: 'Estimate your student loan IBR payment, see how income and household size affect the result, and compare IBR with RAP and PAYE.',
  keywords: ['income based repayment calculator', 'Income-Based Repayment calculator', 'IBR calculator', 'student loan income based repayment calculator'],
  alternates: { canonical: '/income-based-repayment-calculator/' },
  openGraph: {
    title: 'Income-Based Repayment Calculator',
    description: 'Estimate IBR student loan payments and compare income-driven repayment options.',
    url: 'https://repaymentguide.com/income-based-repayment-calculator/',
  },
};

export default function IncomeBasedRepaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">IBR payment estimate</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Income-Based Repayment Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate your student loan IBR payment, see how income and household size affect the result, and compare Income-Based Repayment with RAP, PAYE, and ICR.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <IdrComparison />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              assumptions={[
                'IBR estimates use AGI, household size, and legacy discretionary-income formulas where applicable.',
                'The comparison also shows other income-driven repayment plans so you can see when IBR is not the lowest estimate.',
                'Your servicer and StudentAid.gov determine final IBR eligibility, payment amount, and recertification deadlines.',
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
              <h2 className="text-2xl font-bold text-gray-900">Student loan IBR calculator quick paths</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/idr-payment-estimator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">IDR payment estimator</Link>
                <Link href="/ibr-vs-rap" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">IBR vs RAP comparison</Link>
                <Link href="/student-loan-calculators" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">All student loan calculators</Link>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">How to read your IBR payment estimate</h2>
              <p className="mt-3 text-gray-700">
                IBR estimates are most useful when you compare them against at least two alternatives. If IBR is lower than RAP, check whether you qualify and whether the forgiveness timeline fits your plan. If RAP or PAYE is lower, look at eligibility, payment caps, PSLF, and long-term cost before switching.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/blog/ibr-payment-estimate-examples-2026" className="rounded-xl border bg-primary-50 p-4 font-semibold text-primary-950 hover:bg-primary-100">IBR payment examples</Link>
                <Link href="/paye-payment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">PAYE payment calculator</Link>
                <Link href="/student-loan-payment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Standard payment calculator</Link>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">When an IBR Calculator Is Useful</h2>
              <p className="mt-3 text-gray-700">
                Use an Income-Based Repayment calculator when your goal is to understand whether a legacy IDR plan could lower your student loan payment. IBR is often worth checking when your income is low relative to family size, PAYE eligibility is uncertain, or you need to compare spouse-income treatment.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-primary-50 p-4">
                  <h3 className="font-semibold text-primary-950">Income fit</h3>
                  <p className="mt-2 text-sm text-primary-900">IBR uses discretionary income, so household size and poverty-guideline allowances matter.</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-gray-900">Plan comparison</h3>
                  <p className="mt-2 text-sm text-gray-700">IBR should be compared with RAP, PAYE, ICR, and standard repayment before switching.</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-gray-900">PSLF strategy</h3>
                  <p className="mt-2 text-sm text-gray-700">Public service borrowers should focus on qualifying payments, not only the lowest estimate.</p>
                </div>
              </div>
            </section>

            <section className="overflow-x-auto rounded-2xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">IBR vs Other IDR Plans</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Plan</th>
                    <th className="p-3 text-left">Why compare it with IBR?</th>
                    <th className="p-3 text-left">Common next check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">RAP</td>
                    <td className="p-3">Uses AGI tiers and dependent reductions instead of the legacy discretionary-income formula.</td>
                    <td className="p-3"><Link href="/ibr-vs-rap" className="text-primary-700 underline">IBR vs RAP</Link></td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-semibold">PAYE</td>
                    <td className="p-3">May have a shorter forgiveness path for eligible borrowers.</td>
                    <td className="p-3">Check borrower-history eligibility.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">ICR</td>
                    <td className="p-3">Often relevant for Parent PLUS borrowers after consolidation.</td>
                    <td className="p-3"><Link href="/parent-plus-rap-eligibility" className="text-primary-700 underline">Parent PLUS checker</Link></td>
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

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.loanSimulator]} title="Official sources for IBR estimates" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
