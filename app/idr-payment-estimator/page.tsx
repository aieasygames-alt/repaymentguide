import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What is an IDR payment estimator?',
    answer: 'An IDR payment estimator is a planning tool that approximates income-driven repayment payments using income and household size. It can help you compare RAP, IBR, PAYE, and ICR before you complete the official IDR application or confirm your bill with a loan servicer.',
  },
  {
    question: 'What information do I need for an IDR estimate?',
    answer: 'Start with adjusted gross income and household size. For a complete repayment decision, also check loan type, loan balance, interest rate, spouse income treatment, Parent PLUS history, PSLF goals, and any official servicer notice about plan changes or recertification.',
  },
  {
    question: 'Is the lowest IDR estimate always the best plan?',
    answer: 'No. A lower monthly payment can be helpful, but it is not the only factor. Compare forgiveness timing, PSLF eligibility, interest treatment, loan type restrictions, spouse-income rules, and whether the plan is available for your borrower history before applying.',
  },
  {
    question: 'Can this estimator replace StudentAid.gov?',
    answer: 'No. This estimator is for planning only. StudentAid.gov, the official Loan Simulator, the IDR application, and your loan servicer determine final eligibility, payment amount, qualifying payment credit, and documentation requirements.',
  },
];

export const metadata: Metadata = {
  title: 'IDR Payment Estimator - Estimate Student Loan Payments',
  description: 'Use this IDR payment estimator to compare income-driven repayment payments under RAP, IBR, PAYE, and ICR before applying.',
  keywords: ['IDR payment estimator', 'idr payment calculator', 'income driven repayment estimator', 'student loan idr estimator'],
  alternates: { canonical: '/idr-payment-estimator/' },
  openGraph: {
    title: 'IDR Payment Estimator',
    description: 'Estimate and compare income-driven repayment payments.',
    url: 'https://repaymentguide.com/idr-payment-estimator/',
  },
};

export default function IdrPaymentEstimatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">Quick IDR estimate</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">IDR Payment Estimator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate student loan payments under income-driven repayment plans and see whether RAP, IBR, PAYE, or ICR deserves your first official check.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <IdrComparison />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              assumptions={[
                'This estimator uses simplified IDR formulas to compare planning estimates across current repayment options.',
                'It does not verify borrower history, loan type, Parent PLUS treatment, PSLF employment, or servicer processing rules.',
                'Use official StudentAid.gov tools before submitting a plan choice or relying on a payment deadline.',
              ]}
              sources={[
                officialStudentLoanSources.loanSimulator,
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">How to Use This IDR Payment Estimator</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-4">
                {[
                  ['1', 'Enter AGI', 'Use adjusted gross income from your tax return or a current-income estimate.'],
                  ['2', 'Add household size', 'Include the family size you expect to use for repayment documentation.'],
                  ['3', 'Compare plans', 'Review RAP, IBR, PAYE, and ICR side by side.'],
                  ['4', 'Verify officially', 'Confirm eligibility and final payment through StudentAid.gov or your servicer.'],
                ].map(([step, title, body]) => (
                  <div key={step} className="rounded-xl bg-slate-50 p-4">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-800">{step}</div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-primary-50 p-6">
                <h2 className="text-xl font-bold text-primary-950">Use the estimator for planning</h2>
                <ul className="mt-3 space-y-2 text-primary-900">
                  <li>- Comparing income-driven repayment options before a servicer deadline.</li>
                  <li>- Seeing whether household size materially changes your estimate.</li>
                  <li>- Checking whether an IDR plan may fit a PSLF strategy.</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Do not use it as a final bill</h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>- It cannot confirm official eligibility.</li>
                  <li>- It cannot apply borrower-history exceptions.</li>
                  <li>- It cannot certify PSLF employment or payment counts.</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Related Calculators</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border p-4 hover:bg-primary-50">
                  <h3 className="font-semibold text-gray-900">Income-Driven Repayment Calculator</h3>
                  <p className="mt-2 text-sm text-gray-700">Use the broader IDR comparison page for detailed plan guidance.</p>
                </Link>
                <Link href="/income-based-repayment-calculator" className="rounded-xl border p-4 hover:bg-primary-50">
                  <h3 className="font-semibold text-gray-900">Income-Based Repayment Calculator</h3>
                  <p className="mt-2 text-sm text-gray-700">Focus on IBR and income-based repayment search intent.</p>
                </Link>
                <Link href="/pslf-calculator" className="rounded-xl border p-4 hover:bg-primary-50">
                  <h3 className="font-semibold text-gray-900">PSLF Calculator</h3>
                  <p className="mt-2 text-sm text-gray-700">Estimate forgiveness if public service is part of your plan.</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-lg border bg-white">
                    <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">{faq.question}</summary>
                    <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.loanSimulator, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication]} title="Official sources for IDR payment estimates" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
