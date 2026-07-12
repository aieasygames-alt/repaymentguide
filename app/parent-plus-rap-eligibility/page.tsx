import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParentPlusEligibilityChecker from '@/components/ParentPlusEligibilityChecker';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Are Parent PLUS loans eligible for RAP?',
    answer: 'Parent PLUS eligibility can be limited. Direct Consolidation loans that include Parent PLUS loans may not be eligible for RAP, so borrowers should verify loan type details before relying on RAP.',
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
  title: 'Parent PLUS RAP Eligibility Checker - 2026 Repayment Guide',
  description: 'Check whether Parent PLUS loans should rely on RAP, ICR, Standard repayment, or a PSLF strategy after the 2026 student loan repayment changes.',
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
                Parent PLUS borrowers need a separate repayment strategy. Use this checker to identify whether RAP, ICR, Standard repayment, or PSLF deserves the first look.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
