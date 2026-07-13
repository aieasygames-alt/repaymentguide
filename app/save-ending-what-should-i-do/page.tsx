import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What should I do if SAVE is ending for me?',
    answer: 'Save your servicer notice, calculate your response deadline, compare RAP, IBR, PAYE, ICR, and Standard repayment, then submit a plan choice before the final weeks of your window.',
  },
  {
    question: 'Should I wait for my servicer before choosing a new plan?',
    answer: 'Use your servicer notice as the official trigger, but do not wait until the last week to compare options. Processing delays can create payment shock or missed deadlines.',
  },
  {
    question: 'Which plan replaces SAVE?',
    answer: 'There is no one-size-fits-all replacement. RAP, IBR, PAYE, ICR, and Standard repayment can each make sense depending on income, household size, loan type, PSLF, and Parent PLUS history.',
  },
];

export const metadata: Metadata = {
  title: 'SAVE Is Ending: What Should I Do Next in 2026?',
  description: 'A step-by-step checklist for borrowers asking what to do when SAVE ends, including deadlines, RAP, IBR, PAYE, ICR, PSLF, and Parent PLUS warnings.',
  keywords: ['SAVE ending what should I do', 'SAVE plan ending next steps', 'what to do after SAVE ends', 'SAVE transition 2026'],
  alternates: { canonical: '/save-ending-what-should-i-do/' },
  openGraph: {
    title: 'SAVE Is Ending: What Should I Do Next?',
    description: 'A practical 2026 checklist for SAVE borrowers.',
    url: 'https://repaymentguide.com/save-ending-what-should-i-do/',
  },
};

export default function SaveEndingWhatShouldIDoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-primary-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-800 ring-1 ring-amber-200">SAVE transition checklist</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">SAVE Is Ending: What Should I Do Next?</h1>
              <p className="max-w-3xl text-xl text-gray-700">If you received a SAVE transition notice, work in this order: protect the deadline, compare plans, check special rules, then submit before the final rush.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">The 5-Step Answer</h2>
              <ol className="mt-4 space-y-3 text-gray-700">
                <li><strong>1. Save the notice.</strong> Keep the letter, email, or account message that shows the sent date and any due date.</li>
                <li><strong>2. Calculate the response window.</strong> Use your notice date unless the servicer gives a specific deadline.</li>
                <li><strong>3. Compare plans.</strong> Run RAP, IBR, PAYE, ICR, and Standard repayment before deciding.</li>
                <li><strong>4. Check special rules.</strong> Parent PLUS, PSLF, married filing separately, and default status can change the right next step.</li>
                <li><strong>5. Submit early and verify.</strong> Save confirmation screenshots and check your next bill.</li>
              </ol>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/save-90-day-deadline-calculator" className="rounded-xl bg-amber-700 px-5 py-3 text-center font-semibold text-white hover:bg-amber-800">Calculate deadline</Link>
                <Link href="/repayment-plan-recommendation" className="rounded-xl border px-5 py-3 text-center font-semibold text-amber-800 hover:bg-amber-50">Get plan path</Link>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <Link href="/rap-payment-calculator" className="rounded-3xl border bg-primary-50 p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-primary-950">Estimate RAP</h2><p className="mt-2 text-primary-800">Check the new AGI-based payment, dependent reduction, interest waiver, and principal match estimate.</p></Link>
              <Link href="/ibr-vs-rap" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Compare IBR vs RAP</h2><p className="mt-2 text-gray-600">See when a legacy IDR formula may beat RAP.</p></Link>
              <Link href="/pslf-rap-qualifying-payments" className="rounded-3xl border bg-blue-50 p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-blue-950">Pursuing PSLF?</h2><p className="mt-2 text-blue-900">Do not choose only by the lowest estimated payment. Verify qualifying payment treatment.</p></Link>
              <Link href="/parent-plus-rap-eligibility" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Have Parent PLUS?</h2><p className="mt-2 text-gray-600">Parent borrowers need a separate eligibility check before assuming RAP applies.</p></Link>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.edRapFactSheet, officialStudentLoanSources.edRateUpdate, officialStudentLoanSources.idrApplication, officialStudentLoanSources.studentAidRepaymentPlans]} title="Official sources for SAVE next steps" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
