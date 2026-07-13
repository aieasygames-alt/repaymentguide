import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Does married filing separately help with RAP?',
    answer: 'RAP uses AGI-based rules, so tax filing status can affect the AGI used for estimates. However, filing separately can also change taxes, credits, and deductions, so compare both loan and tax outcomes.',
  },
  {
    question: 'Is IBR better than RAP for married borrowers?',
    answer: 'IBR may be better when spouse-income exclusion and the discretionary income formula reduce payments. RAP may be better when its AGI tier and dependent reduction produce a lower payment.',
  },
  {
    question: 'Should we file separately just for student loans?',
    answer: 'Do not decide from the loan payment alone. Compare federal and state taxes, lost deductions or credits, PSLF goals, and repayment plan eligibility before filing.',
  },
];

export const metadata: Metadata = {
  title: 'Married Filing Separately, Student Loans, and RAP in 2026',
  description: 'Compare married filing separately student loan strategy under RAP, IBR, PAYE, and ICR, including spouse income, taxes, dependents, and PSLF.',
  keywords: ['married filing separately student loans RAP', 'RAP spouse income', 'student loans married filing separately 2026'],
  alternates: { canonical: '/married-filing-separately-student-loans-rap/' },
  openGraph: {
    title: 'Married Filing Separately and RAP',
    description: 'A 2026 student loan planning guide for married borrowers.',
    url: 'https://repaymentguide.com/married-filing-separately-student-loans-rap/',
  },
};

export default function MarriedFilingSeparatelyRapPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-rose-50 to-primary-100 py-14"><div className="container mx-auto px-4"><div className="max-w-4xl"><p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-200">Married borrower strategy</p><h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Married Filing Separately, Student Loans, and RAP</h1><p className="max-w-3xl text-xl text-gray-700">For married borrowers, the best repayment plan can change when spouse income, tax filing status, dependents, and PSLF goals interact.</p></div></div></section>

        <section className="container mx-auto px-4 py-12"><div className="mx-auto max-w-4xl space-y-8">
          <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
          <FinancialDisclaimer />

          <section className="rounded-3xl border bg-white p-6"><h2 className="text-2xl font-bold text-gray-900">Quick Answer</h2><p className="mt-3 text-gray-700">Married filing separately can still matter after the SAVE transition, but RAP changes the math because it uses an AGI-based formula and dependent reduction instead of the same discretionary-income structure as IBR and PAYE. Compare tax filing outcomes before choosing a repayment plan.</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><Link href="/rap-payment-calculator" className="rounded-xl bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">Estimate RAP</Link><Link href="/blog/married-borrowers-repayment-strategy" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-700 hover:bg-primary-50">Read married borrower guide</Link></div></section>

          <section className="rounded-3xl border bg-white p-6"><h2 className="text-2xl font-bold text-gray-900">Three Calculations to Run Before Filing</h2><ol className="mt-4 space-y-3 text-gray-700"><li><strong>1. Joint tax return plus repayment estimate.</strong> Start with the simplest filing status and estimate RAP, IBR, PAYE, and ICR.</li><li><strong>2. Separate tax returns plus repayment estimate.</strong> Estimate each spouse's tax impact and the borrower AGI used for repayment.</li><li><strong>3. PSLF scenario.</strong> If PSLF is in play, focus on the lowest qualifying payment and clean documentation.</li></ol></section>

          <section className="overflow-x-auto rounded-3xl border bg-white p-6"><h2 className="mb-4 text-2xl font-bold text-gray-900">RAP vs Legacy IDR for Married Borrowers</h2><table className="w-full border-collapse text-sm"><thead><tr className="bg-slate-900 text-white"><th className="p-3 text-left">Question</th><th className="p-3 text-left">Why it matters</th></tr></thead><tbody><tr className="border-b"><td className="p-3 font-semibold">Whose AGI is used?</td><td className="p-3">RAP estimates depend heavily on AGI, so filing status can change the input.</td></tr><tr className="border-b bg-gray-50"><td className="p-3 font-semibold">Are dependents claimed?</td><td className="p-3">RAP reduces the monthly payment by $50 per dependent, subject to minimum payment rules.</td></tr><tr className="border-b"><td className="p-3 font-semibold">Will separate filing raise taxes?</td><td className="p-3">A lower loan payment can be offset by higher tax liability or lost tax benefits.</td></tr><tr><td className="p-3 font-semibold">Is PSLF involved?</td><td className="p-3">For PSLF, the payment only helps if it counts and employment is certified.</td></tr></tbody></table></section>

          <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.irsStudentLoans, officialStudentLoanSources.pslfHelpTool]} title="Official sources for married borrower planning" />
        </div></section>
      </main>
      <Footer />
    </>
  );
}
