import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RepaymentRecommendationFlow from '@/components/RepaymentRecommendationFlow';
import { FAQSchema } from '@/components/FAQSchema';

const faqs = [
  {
    question: 'Is this a final repayment plan recommendation?',
    answer: 'No. This tool gives a starting point for which plans to compare first. Final eligibility and payment amounts should be confirmed with StudentAid.gov or your loan servicer.',
  },
  {
    question: 'Why does the tool ask about Parent PLUS loans?',
    answer: 'Parent PLUS loans have special IDR eligibility rules. They can change whether RAP, PAYE, IBR, or ICR is worth comparing first.',
  },
  {
    question: 'Why does PSLF change the recommendation?',
    answer: 'PSLF borrowers should prioritize qualifying repayment plans and qualifying employment strategy, not just the lowest monthly payment.',
  },
];

export const metadata: Metadata = {
  title: 'RAP vs IBR vs PAYE Recommendation Tool - 2026 Student Loans',
  description: 'Answer a few questions to see whether RAP, IBR, PAYE, ICR, or Standard repayment should be your first comparison after the 2026 SAVE transition.',
  keywords: ['RAP vs IBR', 'RAP vs PAYE', 'student loan repayment recommendation', 'IDR recommendation tool', 'RAP calculator'],
  alternates: {
    canonical: '/repayment-plan-recommendation/',
  },
  openGraph: {
    title: 'RAP vs IBR vs PAYE Recommendation Tool',
    description: 'Find which student loan repayment plans to compare first in 2026.',
    url: 'https://repaymentguide.com/repayment-plan-recommendation/',
  },
};

export default function RepaymentPlanRecommendationPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">
                2026 repayment decision assistant
              </p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">RAP vs IBR vs PAYE Recommendation Tool</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Get a practical starting point for which repayment plans to compare first based on income, household size, PSLF goals, and Parent PLUS status.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
              <p className="font-semibold">Important disclaimer</p>
              <p className="mt-2 text-sm">
                This recommendation flow is a prioritization aid, not a final eligibility decision. Confirm final plan availability, payment amount, and PSLF treatment with StudentAid.gov or your loan servicer.
              </p>
            </div>
            <RepaymentRecommendationFlow />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
