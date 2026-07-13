import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RapPaymentCalculator from '@/components/RapPaymentCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Can I still choose SAVE instead of RAP?',
    answer: 'SAVE is not available for new repayment elections in the 2026 transition. Use SAVE history as context, but compare current options such as RAP, IBR, PAYE, ICR, and Standard repayment.',
  },
  {
    question: 'Why compare RAP vs SAVE if SAVE ended?',
    answer: 'Many borrowers remember their SAVE payment and want to understand payment shock. This page helps compare the old SAVE-era expectation against the current RAP estimate.',
  },
  {
    question: 'What should I compare after RAP?',
    answer: 'After estimating RAP, compare IBR, PAYE, ICR, and Standard repayment, especially if you are pursuing PSLF, married filing separately, or have Parent PLUS loans.',
  },
];

export const metadata: Metadata = {
  title: 'RAP vs SAVE Calculator: Estimate Your 2026 Payment Change',
  description: 'Use this RAP vs SAVE calculator guide to estimate your RAP payment after SAVE and understand which current repayment plans to compare next.',
  keywords: ['RAP vs SAVE calculator', 'SAVE vs RAP payment calculator', 'RAP payment after SAVE', 'SAVE payment change 2026'],
  alternates: { canonical: '/rap-vs-save-calculator/' },
  openGraph: {
    title: 'RAP vs SAVE Calculator',
    description: 'Estimate your RAP payment after the SAVE transition.',
    url: 'https://repaymentguide.com/rap-vs-save-calculator/',
  },
};

export default function RapVsSaveCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-950 via-primary-950 to-slate-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-white/20">SAVE transition calculator</p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">RAP vs SAVE Calculator</h1>
              <p className="max-w-3xl text-xl text-primary-50">SAVE ended, but your old SAVE payment is still the reference point for payment shock. Estimate RAP first, then compare the other current options.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />
            <RapPaymentCalculator />

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">How to Interpret RAP vs SAVE</h2>
              <p className="mt-3 text-gray-700">Do not treat SAVE as a current choice. Instead, use your former SAVE bill to understand how much your payment could change. Then compare RAP with IBR, PAYE, ICR, and Standard repayment before submitting a new plan election.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-primary-50 p-5"><h3 className="font-bold text-primary-950">If RAP is lower</h3><p className="mt-2 text-sm text-primary-800">Confirm loan eligibility, PSLF treatment, and Parent PLUS history before choosing it.</p></div>
                <div className="rounded-2xl bg-amber-50 p-5"><h3 className="font-bold text-amber-950">If RAP is higher</h3><p className="mt-2 text-sm text-amber-900">Run IBR and PAYE estimates because discretionary income formulas may be better.</p></div>
                <div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-slate-950">If PSLF applies</h3><p className="mt-2 text-sm text-slate-700">Prioritize qualifying payments and clean documentation over payment estimate alone.</p></div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/income-driven-repayment-calculator" className="rounded-xl bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">Compare current IDR plans</Link>
                <Link href="/save-90-day-deadline-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-800 hover:bg-primary-50">Calculate SAVE deadline</Link>
              </div>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.edRapFactSheet, officialStudentLoanSources.edRateUpdate, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication]} title="Official sources for RAP vs SAVE" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
