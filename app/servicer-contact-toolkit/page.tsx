import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicerContactToolkit from '@/components/ServicerContactToolkit';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What should I ask my servicer after SAVE ends?',
    answer: 'Ask for your official deadline, available repayment plans, estimated payment under each plan, whether RAP is available for your loans, and whether the plan affects PSLF if applicable.',
  },
  {
    question: 'Should I rely on a phone call alone?',
    answer: 'No. Ask for written confirmation or a confirmation number, then save screenshots, messages, and plan approval documents.',
  },
  {
    question: 'Can RepaymentGuide contact my servicer for me?',
    answer: 'No. This toolkit helps you prepare questions and templates, but only you, your authorized representative, or your servicer can act on your account.',
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Servicer Contact Toolkit - SAVE and RAP Questions',
  description: 'Generate a student loan servicer email template, phone script, and document checklist for SAVE transition, RAP, PSLF, Parent PLUS, and IDR questions.',
  keywords: ['student loan servicer contact', 'SAVE servicer notice', 'RAP servicer questions', 'student loan phone script'],
  alternates: { canonical: '/servicer-contact-toolkit/' },
  openGraph: {
    title: 'Student Loan Servicer Contact Toolkit',
    description: 'Copy a servicer email template and phone script for 2026 repayment decisions.',
    url: 'https://repaymentguide.com/servicer-contact-toolkit/',
  },
};

export default function ServicerContactToolkitPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-950 via-primary-950 to-slate-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-white/20">Action toolkit</p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Student Loan Servicer Contact Toolkit</h1>
              <p className="max-w-3xl text-xl text-primary-50">Turn your repayment decision into a clear email, phone script, and document checklist before contacting your loan servicer.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />
            <ServicerContactToolkit />

            <section className="grid gap-6 md:grid-cols-3">
              <Link href="/save-ending-what-should-i-do" className="rounded-3xl border bg-amber-50 p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-amber-950">SAVE next steps</h2><p className="mt-2 text-amber-900">Use the checklist before contacting your servicer.</p></Link>
              <Link href="/rap-payment-calculator" className="rounded-3xl border bg-primary-50 p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-primary-950">Estimate RAP first</h2><p className="mt-2 text-primary-800">Bring your estimate into the servicer conversation.</p></Link>
              <Link href="/student-loan-scenarios" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Find your scenario</h2><p className="mt-2 text-gray-600">Start from the borrower situation that matches you.</p></Link>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.pslfHelpTool, officialStudentLoanSources.consolidation]} title="Official sources to verify with your servicer" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
