import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudentLoanPaymentShockPlanner from '@/components/StudentLoanPaymentShockPlanner';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Why did my student loan payment increase?',
    answer: 'A payment can increase because your repayment plan changed, income or family size was recertified, a temporary forbearance ended, your servicer recalculated the account, or a SAVE transition notice moved you toward another plan. Verify the exact inputs before assuming the bill is final.',
  },
  {
    question: 'What should I do if my student loan payment is suddenly too high?',
    answer: 'Save the notice, compare plans, check the due date, and ask your servicer to confirm the calculation in writing. If the answer is unclear, keep dated records and consider filing an official complaint packet.',
  },
  {
    question: 'Can AGI or capital gains make my IDR payment increase?',
    answer: 'Yes. If your IDR payment was recalculated from tax-return AGI, capital gains or other one-time income can raise the estimate. Ask which income documentation was used and whether current-income documentation is available through the official IDR process.',
  },
  {
    question: 'Should PSLF borrowers choose the lowest payment after an increase?',
    answer: 'Not automatically. PSLF borrowers should confirm that the plan, loan type, employer, and monthly payment treatment still produce PSLF-qualifying payments before switching based only on the lowest estimate.',
  },
];

const causes = [
  {
    title: 'Plan transition',
    body: 'If you moved from SAVE or another plan, the new payment may reflect a different formula, minimum payment, or eligibility rule. Compare more than one plan before choosing.',
    link: { href: '/save-ending-what-should-i-do', label: 'SAVE next steps' },
  },
  {
    title: 'Income or family size update',
    body: 'IDR payments can change when income, household size, tax filing status, or documentation changes. Ask which inputs were used and whether updated documentation is allowed.',
    link: { href: '/income-driven-repayment-calculator', label: 'Compare IDR payments' },
  },
  {
    title: 'AGI spike or one-time income',
    body: 'Capital gains, bonuses, or other unusual tax-year income can make an IDR estimate look higher than your current budget. Compare the AGI-based estimate with any current-income documentation your servicer will accept.',
    link: { href: '/income-based-repayment-calculator', label: 'Check IBR income inputs' },
  },
  {
    title: 'PSLF risk',
    body: 'A lower payment is not enough if the payment does not count toward PSLF. Confirm loan type, qualifying employment, and plan treatment before switching.',
    link: { href: '/pslf-rap-qualifying-payments', label: 'Check PSLF plan risk' },
  },
  {
    title: 'Servicer or processing issue',
    body: 'If the math, deadline, or plan status does not make sense, create a written record. Ask for the calculation inputs, then escalate with proof if needed.',
    link: { href: '/student-loan-servicer-complaint', label: 'Build complaint packet' },
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Payment Increased? What to Check First',
  description: 'Use this student loan payment increase checklist and planner to verify a higher bill, compare repayment plans, contact your servicer, and protect deadlines.',
  keywords: ['student loan payment increased', 'student loan payment went up', 'why did my student loan payment increase', 'SAVE payment increased'],
  alternates: { canonical: '/student-loan-payment-increase/' },
  openGraph: {
    title: 'Student Loan Payment Increased? What to Check First',
    description: 'Turn a higher student loan bill into a clear verification and action plan.',
    url: 'https://repaymentguide.com/student-loan-payment-increase/',
  },
};

export default function StudentLoanPaymentIncreasePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-rose-950 via-slate-900 to-primary-950 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-rose-100 ring-1 ring-white/20">Payment shock checklist</p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Student Loan Payment Increased? What to Check First</h1>
              <p className="max-w-3xl text-xl text-rose-50">If your student loan payment went up, calculate the impact, protect the due date, and ask your servicer the right verification questions before you act.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="#planner" className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-rose-950 hover:bg-rose-50">Use payment shock planner</Link>
                <Link href="/servicer-contact-toolkit" className="rounded-xl border border-white/30 px-5 py-3 text-center font-semibold text-white hover:bg-white/10">Prepare servicer questions</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-09-01" policyReviewed="2026-09-01" />
            <FinancialDisclaimer />

            <section className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quick answer</h2>
              <p className="mt-3 text-gray-700">If your student loan payment increased, do four things before changing plans: identify whether the amount is an estimate or bill, confirm the due date, ask which income and loan inputs were used, and compare available plans. If the servicer cannot explain the increase clearly, save proof and escalate with a complaint packet.</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              {causes.map((cause) => (
                <article key={cause.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">{cause.title}</h2>
                  <p className="mt-3 text-gray-700">{cause.body}</p>
                  <Link href={cause.link.href} className="mt-4 inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-100">{cause.link.label}</Link>
                </article>
              ))}
            </section>

            <section id="planner">
              <StudentLoanPaymentShockPlanner />
            </section>

            <section className="rounded-3xl border bg-amber-50 p-6 text-amber-950">
              <h2 className="text-2xl font-bold">If the due date is close</h2>
              <p className="mt-3">Do not wait for a perfect answer if a bill is due soon. Ask the servicer what action prevents delinquency while your plan review, IDR application, or complaint is pending. Get the answer in writing or save a confirmation number.</p>
            </section>

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">If the increase came from AGI or recertification</h2>
              <p className="mt-3 text-gray-700">
                Ask your servicer which AGI, family size, tax filing status, and income documentation were used. If the higher payment reflects capital gains, a bonus, or another one-time tax-year event, compare that bill with an official current-income review before switching plans.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/income-based-repayment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Review IBR AGI inputs</Link>
                <Link href="/servicer-contact-toolkit" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Ask for calculation proof</Link>
                <Link href="/save-90-day-deadline-calculator" className="rounded-2xl border bg-amber-50 p-5 font-semibold text-amber-950 hover:bg-amber-100">Check IDR deadline</Link>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <Link href="/repayment-plan-recommendation" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Plan recommendation</h2><p className="mt-2 text-gray-600">Find which repayment path deserves your first look.</p></Link>
              <Link href="/rap-payment-calculator" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Estimate RAP</h2><p className="mt-2 text-gray-600">Check whether RAP explains the new payment.</p></Link>
              <Link href="/student-loan-scenarios" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">More scenarios</h2><p className="mt-2 text-gray-600">Match your situation to the next best guide.</p></Link>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.loanSimulator, officialStudentLoanSources.fsaFeedbackCenter]} title="Official sources to verify a payment increase" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
