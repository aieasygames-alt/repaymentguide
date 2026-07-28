import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Is RAP better than IBR?',
    answer: 'RAP can be better when its AGI-based payment is lower or its interest and principal benefits matter. IBR can be better when the poverty-guideline deduction, payment cap, spouse-income treatment, or shorter forgiveness timeline is more valuable.',
  },
  {
    question: 'Does RAP or IBR have a lower payment?',
    answer: 'It depends on income, household size, dependents, and borrower history. RAP uses AGI tiers and a dependent reduction. IBR uses discretionary income and can produce very low payments for low-income borrowers.',
  },
  {
    question: 'Which plan is safer for PSLF?',
    answer: 'PSLF borrowers should confirm that the selected plan produces qualifying payments and that employment is certified. Do not choose solely by the lowest estimated payment.',
  },
];

export const metadata: Metadata = {
  title: 'IBR vs RAP: Which Student Loan Plan Should You Compare First?',
  description: 'Compare IBR vs RAP for 2026 student loan repayment, including payment formulas, PSLF strategy, spouse income, forgiveness timelines, and borrower fit.',
  keywords: ['IBR vs RAP', 'RAP vs IBR', 'income based repayment vs RAP', 'student loan RAP plan'],
  alternates: { canonical: '/ibr-vs-rap/' },
  openGraph: {
    title: 'IBR vs RAP Student Loan Comparison',
    description: 'A practical 2026 comparison of IBR and RAP.',
    url: 'https://repaymentguide.com/ibr-vs-rap/',
  },
};

export default function IbrVsRapPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://repaymentguide.com/' },
          { name: '2026 Student Loan Changes', url: 'https://repaymentguide.com/student-loan-changes-2026/' },
          { name: 'IBR vs RAP', url: 'https://repaymentguide.com/ibr-vs-rap/' },
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">2026 repayment comparison</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">IBR vs RAP: Which Plan Should You Compare First?</h1>
              <p className="max-w-3xl text-xl text-gray-700">RAP and IBR can both be reasonable after the SAVE transition, but they solve different borrower problems. Start with the formula, then check PSLF, spouse income, and forgiveness timing.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Answer</h2>
              <p className="mt-3 text-gray-700">Compare <strong>RAP first</strong> if you have eligible Direct Loans, dependents, and want to understand the new AGI-based payment plus potential interest and principal benefits. Compare <strong>IBR first</strong> if your income is low relative to household size, you need a legacy IDR formula, you are married filing separately, or PAYE eligibility is uncertain.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/rap-payment-calculator" className="rounded-xl bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">Estimate RAP payment</Link>
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-700 hover:bg-primary-50">Compare IDR plans</Link>
              </div>
            </section>

            <section className="overflow-x-auto rounded-3xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">RAP vs IBR Comparison Table</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white"><th className="p-3 text-left">Factor</th><th className="p-3 text-left">RAP</th><th className="p-3 text-left">IBR</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3 font-semibold">Payment formula</td><td className="p-3">1-10% of AGI, minus $50 per dependent</td><td className="p-3">10-15% of discretionary income</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3 font-semibold">Minimum payment</td><td className="p-3">Minimum monthly payment applies</td><td className="p-3">Can be $0 if discretionary income is low</td></tr>
                  <tr className="border-b"><td className="p-3 font-semibold">Non-PSLF forgiveness</td><td className="p-3">30 years</td><td className="p-3">20-25 years depending on borrower timing</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3 font-semibold">Parent PLUS</td><td className="p-3">Limited; verify consolidation history</td><td className="p-3">Parent PLUS usually requires a separate strategy</td></tr>
                  <tr><td className="p-3 font-semibold">Best first look</td><td className="p-3">Eligible borrowers with dependents or interest concerns</td><td className="p-3">Borrowers needing legacy IDR protections or spouse-income planning</td></tr>
                </tbody>
              </table>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border bg-primary-50 p-6"><h2 className="text-xl font-bold text-primary-950">Choose RAP to investigate when</h2><ul className="mt-3 space-y-2 text-primary-900"><li>- Your RAP estimate is meaningfully lower than IBR.</li><li>- Dependents reduce the monthly payment.</li><li>- Interest waiver or principal match could help your balance.</li><li>- You have eligible Direct Loans and no Parent PLUS complication.</li></ul></div>
              <div className="rounded-3xl border bg-white p-6"><h2 className="text-xl font-bold text-gray-900">Choose IBR to investigate when</h2><ul className="mt-3 space-y-2 text-gray-700"><li>- Your income is low after the poverty-guideline allowance.</li><li>- You need a plan with a possible $0 payment.</li><li>- You are not eligible for PAYE.</li><li>- Married filing separately strategy matters.</li></ul></div>
            </section>

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">A practical way to decide what to calculate first</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  If you need the lowest immediate bill, start by comparing the monthly payment under both formulas. RAP can be simple because it starts from AGI and dependents. IBR can be more protective for lower-income households because it starts from discretionary income after a poverty-guideline allowance.
                </p>
                <p>
                  If you are thinking beyond the next bill, compare time to forgiveness, likely income changes, and whether your servicer can process the request before a SAVE transition deadline. A plan that looks slightly cheaper today can be less useful if it stretches repayment longer or creates documentation problems.
                </p>
                <p>
                  If you are married filing separately, pursuing PSLF, or managing older loans, treat this page as a starting point rather than a final answer. Those details can change whether RAP, IBR, PAYE, ICR, or Standard repayment belongs at the top of your list.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link href="/rap-payment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Estimate RAP</Link>
                <Link href="/income-based-repayment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Estimate IBR</Link>
                <Link href="/married-filing-separately-student-loans-rap" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Review separate filing</Link>
              </div>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.edRapFactSheet]} title="Official sources for IBR vs RAP" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
