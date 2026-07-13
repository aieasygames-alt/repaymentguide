import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Does RAP count for PSLF?',
    answer: 'RAP may be part of a PSLF strategy if the payment, loan type, and employment satisfy PSLF requirements. Borrowers should verify plan treatment with official PSLF tools before relying on it.',
  },
  {
    question: 'Should PSLF borrowers choose the lowest RAP payment?',
    answer: 'Not automatically. PSLF borrowers should prioritize qualifying payments, qualifying employment, Direct Loan status, and servicer processing over a payment estimate alone.',
  },
  {
    question: 'What should I save for PSLF records?',
    answer: 'Save employer certification confirmations, payment confirmations, servicer messages, plan approval letters, and screenshots showing payment counts.',
  },
];

export const metadata: Metadata = {
  title: 'PSLF and RAP Qualifying Payments: 2026 Borrower Guide',
  description: 'Learn how to check whether RAP payments can fit a PSLF strategy, what to verify before switching plans, and which records to keep.',
  keywords: ['PSLF RAP qualifying payments', 'does RAP count for PSLF', 'RAP PSLF', 'PSLF student loan payments 2026'],
  alternates: { canonical: '/pslf-rap-qualifying-payments/' },
  openGraph: {
    title: 'PSLF and RAP Qualifying Payments',
    description: 'A practical checklist for PSLF borrowers considering RAP.',
    url: 'https://repaymentguide.com/pslf-rap-qualifying-payments/',
  },
};

export default function PslfRapQualifyingPaymentsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary-100 py-14">
          <div className="container mx-auto px-4"><div className="max-w-4xl"><p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-200">PSLF-safe planning</p><h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">PSLF and RAP Qualifying Payments</h1><p className="max-w-3xl text-xl text-gray-700">If you are pursuing Public Service Loan Forgiveness, the question is not just “what is the lowest payment?” It is “will this payment count?”</p></div></div>
        </section>

        <section className="container mx-auto px-4 py-12"><div className="mx-auto max-w-4xl space-y-8">
          <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
          <FinancialDisclaimer />

          <section className="rounded-3xl border bg-white p-6"><h2 className="text-2xl font-bold text-gray-900">Quick Answer</h2><p className="mt-3 text-gray-700">RAP can be worth comparing for PSLF if it is available for your loans and produces qualifying monthly payments. Before switching, verify Direct Loan status, repayment plan treatment, employer certification, payment count history, and whether any transition processing could interrupt qualifying payments.</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href="https://studentaid.gov/pslf" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">Use PSLF Help Tool</a><Link href="/rap-payment-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-blue-700 hover:bg-blue-50">Estimate RAP payment</Link></div></section>

          <section className="rounded-3xl border bg-white p-6"><h2 className="text-2xl font-bold text-gray-900">PSLF-Safe RAP Checklist</h2><ol className="mt-4 space-y-3 text-gray-700"><li><strong>1. Confirm loan type.</strong> PSLF generally requires eligible Direct Loans.</li><li><strong>2. Confirm employer eligibility.</strong> The borrower, not a spouse or child, needs qualifying employment.</li><li><strong>3. Confirm plan treatment.</strong> Verify whether your RAP payment will be treated as qualifying for PSLF before relying on it.</li><li><strong>4. Avoid processing gaps.</strong> Keep servicer confirmations and watch the first bill after switching.</li><li><strong>5. Track payment count.</strong> Save screenshots before and after any plan change.</li></ol></section>

          <section className="grid gap-6 md:grid-cols-2"><div className="rounded-3xl border bg-blue-50 p-6"><h2 className="text-xl font-bold text-blue-950">RAP may help PSLF borrowers when</h2><ul className="mt-3 space-y-2 text-blue-900"><li>- The payment is lower than IBR, PAYE, or ICR.</li><li>- The loan type is eligible.</li><li>- The servicer confirms the plan is PSLF-compatible.</li><li>- Employment certification is current.</li></ul></div><div className="rounded-3xl border bg-amber-50 p-6"><h2 className="text-xl font-bold text-amber-950">Pause before switching when</h2><ul className="mt-3 space-y-2 text-amber-900"><li>- You have Parent PLUS consolidation history.</li><li>- Your payment count is under review.</li><li>- Your servicer notice conflicts with StudentAid.gov records.</li><li>- You cannot document qualifying employment.</li></ul></div></section>

          <OfficialSources sources={[officialStudentLoanSources.pslfHelpTool, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.edRapFactSheet]} title="Official PSLF and RAP sources" />
        </div></section>
      </main>
      <Footer />
    </>
  );
}
