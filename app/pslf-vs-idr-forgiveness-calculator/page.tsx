import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PslfCalculator from '@/components/PslfCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'Is PSLF better than IDR forgiveness?',
    answer: 'PSLF can be better for borrowers with qualifying public service employment because forgiveness can arrive after 120 qualifying monthly payments. IDR forgiveness can help borrowers outside public service, but timelines are usually much longer and depend on the plan.',
  },
  {
    question: 'Can PSLF and IDR work together?',
    answer: 'Yes. Many PSLF borrowers use an income-driven repayment plan because lower qualifying payments can preserve cash flow while working toward 120 PSLF payments. The key is confirming that the repayment plan and employment both qualify.',
  },
  {
    question: 'Does this calculator estimate IDR forgiveness too?',
    answer: 'This page uses the PSLF calculator for the 120-payment path and links to the IDR calculator for RAP, IBR, PAYE, and ICR estimates. Use both tools before deciding which official path to verify.',
  },
  {
    question: 'What should I compare before choosing PSLF or IDR forgiveness?',
    answer: 'Compare employment eligibility, Direct Loan status, monthly payment, years remaining, forgiveness tax treatment, spouse-income rules, loan balance, and whether plan changes could affect official payment counts.',
  },
];

export const metadata: Metadata = {
  title: 'PSLF vs IDR Forgiveness Calculator - Compare Paths',
  description: 'Compare PSLF vs IDR forgiveness paths. Estimate PSLF progress, then check IDR payments under RAP, IBR, PAYE, and ICR.',
  keywords: ['PSLF vs IDR forgiveness calculator', 'PSLF calculator', 'IDR forgiveness calculator', 'student loan forgiveness calculator'],
  alternates: { canonical: '/pslf-vs-idr-forgiveness-calculator/' },
  openGraph: {
    title: 'PSLF vs IDR Forgiveness Calculator',
    description: 'Compare public service forgiveness with income-driven repayment forgiveness paths.',
    url: 'https://repaymentguide.com/pslf-vs-idr-forgiveness-calculator/',
  },
};

export default function PslfVsIdrForgivenessCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">Forgiveness path comparison</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">PSLF vs IDR Forgiveness Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Compare the 120-payment PSLF path with longer income-driven repayment forgiveness timelines before you choose which official route to verify.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <PslfCalculator />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              assumptions={[
                'This page estimates PSLF progress and provides decision guidance for comparing PSLF against IDR forgiveness paths.',
                'IDR forgiveness timelines vary by plan; use the IDR calculator for RAP, IBR, PAYE, and ICR payment estimates.',
                'Final PSLF and IDR forgiveness eligibility depends on official federal loan records, employment certification, repayment plan status, and servicer processing.',
              ]}
              sources={[
                officialStudentLoanSources.pslfHelpTool,
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
                officialStudentLoanSources.loanSimulator,
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Answer: PSLF vs IDR Forgiveness</h2>
              <p className="mt-3 text-gray-700">
                PSLF is usually the first path to investigate if you work full time for a qualifying government or nonprofit employer and have eligible Direct Loans. IDR forgiveness is usually the broader fallback for borrowers who need income-driven payments but do not have a PSLF-qualifying employment path.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/pslf-qualifying-payment-calculator" className="rounded-xl bg-primary-700 px-5 py-3 text-center font-semibold text-white hover:bg-primary-800">Track PSLF payments</Link>
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border px-5 py-3 text-center font-semibold text-primary-700 hover:bg-primary-50">Compare IDR plans</Link>
              </div>
            </section>

            <section className="overflow-x-auto rounded-2xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">PSLF vs IDR Forgiveness Comparison</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Factor</th>
                    <th className="p-3 text-left">PSLF</th>
                    <th className="p-3 text-left">IDR forgiveness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Timeline</td>
                    <td className="p-3">120 qualifying monthly payments</td>
                    <td className="p-3">Often 20-30 years depending on plan</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-semibold">Employment requirement</td>
                    <td className="p-3">Qualifying public service employment required</td>
                    <td className="p-3">No public service employer requirement</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Plan strategy</td>
                    <td className="p-3">Often paired with IDR to keep qualifying payments affordable</td>
                    <td className="p-3">Plan choice affects monthly payment and forgiveness timeline</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Main verification step</td>
                    <td className="p-3">Submit PSLF forms and confirm payment count</td>
                    <td className="p-3">Submit IDR application and recertify income annually</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-primary-50 p-6">
                <h2 className="text-xl font-bold text-primary-950">Investigate PSLF first when</h2>
                <ul className="mt-3 space-y-2 text-primary-900">
                  <li>- You work for a government or 501(c)(3) nonprofit employer.</li>
                  <li>- You can document full-time qualifying employment.</li>
                  <li>- Your loans are Direct Loans or can be handled safely.</li>
                  <li>- Your official payment count is already meaningful.</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Investigate IDR forgiveness when</h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>- You do not have qualifying public service employment.</li>
                  <li>- Your main need is a lower income-based payment.</li>
                  <li>- You are comparing RAP, IBR, PAYE, or ICR.</li>
                  <li>- You need a long-term repayment path outside PSLF.</li>
                </ul>
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

            <OfficialSources sources={[officialStudentLoanSources.pslfHelpTool, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.loanSimulator]} title="Official sources for forgiveness comparisons" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
