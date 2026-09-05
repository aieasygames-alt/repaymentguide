import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParentPlusEligibilityChecker from '@/components/ParentPlusEligibilityChecker';
import { FAQSchema } from '@/components/FAQSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { CalculatorSchema } from '@/components/CalculatorSchema';
import { CalculatorDisclosure, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Are Parent PLUS loans eligible for RAP?',
    answer: 'Parent PLUS loans and consolidation loans that include Parent PLUS debt are generally not a clean RAP fit. Parent borrowers should verify loan type and consolidation history before relying on a RAP estimate.',
  },
  {
    question: 'What repayment plan should Parent PLUS borrowers compare?',
    answer: 'Parent PLUS borrowers often need to compare Standard repayment, ICR after consolidation, and any PSLF strategy tied to the parent borrower\'s qualifying employment.',
  },
  {
    question: 'Can Parent PLUS loans qualify for PSLF?',
    answer: 'Parent PLUS loans may be part of a PSLF strategy only when the parent borrower meets PSLF requirements, including qualifying employment and eligible repayment rules.',
  },
];

export const metadata: Metadata = {
  title: 'Are Parent PLUS Loans Eligible for RAP? 2026 Checker',
  description: 'Check whether Parent PLUS loans are eligible for RAP, when ICR or Standard repayment may apply, and how PSLF changes the parent borrower strategy.',
  keywords: ['Parent PLUS RAP eligibility', 'Parent PLUS repayment 2026', 'Parent PLUS ICR', 'Parent PLUS PSLF', 'RAP Parent PLUS'],
  alternates: {
    canonical: '/parent-plus-rap-eligibility/',
  },
  openGraph: {
    title: 'Parent PLUS RAP Eligibility Checker',
    description: 'Find the first repayment questions Parent PLUS borrowers should answer before choosing a plan.',
    url: 'https://repaymentguide.com/parent-plus-rap-eligibility/',
  },
};

export default function ParentPlusRapEligibilityPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://repaymentguide.com/' },
          { name: 'Student Loan Calculators', url: 'https://repaymentguide.com/student-loan-calculators/' },
          { name: 'Parent PLUS RAP Eligibility Checker', url: 'https://repaymentguide.com/parent-plus-rap-eligibility/' },
        ]}
      />
      <CalculatorSchema
        name="Parent PLUS RAP Eligibility Checker"
        description="Check the first repayment questions Parent PLUS borrowers should answer before relying on RAP, ICR, Standard repayment, or PSLF."
        url="https://repaymentguide.com/parent-plus-rap-eligibility/"
        keywords={['Parent PLUS RAP eligibility', 'Parent PLUS repayment', 'Parent PLUS ICR']}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-800 ring-1 ring-green-200">
                Parent PLUS repayment checker
              </p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Parent PLUS RAP Eligibility Checker</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Parent PLUS borrowers need a separate repayment strategy. Use this checker to answer whether Parent PLUS loans are eligible for RAP, ICR, Standard repayment, or PSLF planning.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <CalculatorDisclosure
              title="Parent PLUS checker assumptions"
              assumptions={[
                'The checker is a planning guide for Parent PLUS repayment questions, not an official eligibility decision.',
                'Parent PLUS outcomes depend on the parent borrower, loan type, Direct Consolidation history, and current federal rules.',
                'If you are pursuing PSLF, the parent borrower must meet PSLF employment and repayment requirements.',
              ]}
              sources={[
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.consolidation,
                officialStudentLoanSources.pslfHelpTool,
                officialStudentLoanSources.edRapFactSheet,
              ]}
            />
            <ParentPlusEligibilityChecker />

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Are Parent PLUS loans eligible for RAP?</h2>
              <p className="mt-3 text-gray-700">
                For most parent borrowers, the safer starting assumption is that Parent PLUS loans need a separate path. A Direct Consolidation Loan that includes Parent PLUS debt may not be eligible for RAP, so do not rely on a general RAP calculator until you verify the loan type in StudentAid.gov.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <a href="https://studentaid.gov/manage-loans/consolidation" target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Check consolidation</a>
                <Link href="/rap-payment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">RAP calculator</Link>
                <Link href="/pslf-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">PSLF calculator</Link>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Link href="/income-driven-repayment-calculator" className="rounded-2xl border bg-primary-50 p-5 font-semibold text-primary-950 hover:bg-primary-100">Compare IDR plans</Link>
                <Link href="/income-based-repayment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Estimate IBR next</Link>
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Why Parent PLUS borrowers need a separate check</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Parent PLUS loans follow different repayment paths than loans borrowed by the student. The parent borrower, not the student, is the borrower for repayment, PSLF employment, income documentation, and any consolidation strategy.
                </p>
                <p>
                  If a Direct Consolidation Loan includes Parent PLUS debt, do not assume a general RAP estimate applies. Parent borrowers often need to compare ICR after consolidation, Standard repayment, and PSLF rules tied to the parent borrower&apos;s qualifying employment.
                </p>
                <p>
                  The safest next step is to identify the exact loan type in StudentAid.gov, confirm whether Parent PLUS loans were consolidated, then compare payment estimates with the repayment plan that is actually available to the parent borrower.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <a href="https://studentaid.gov/manage-loans/consolidation" target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Review consolidation rules</a>
                <a href="https://studentaid.gov/pslf" target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Check PSLF rules</a>
                <a href="https://studentaid.gov/manage-loans/repayment/plans" target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Compare repayment plans</a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
