import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PslfCalculator from '@/components/PslfCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'What is a PSLF qualifying payment?',
    answer: 'A PSLF qualifying payment is a monthly payment that meets Public Service Loan Forgiveness rules for eligible Direct Loans, qualifying employment, and an eligible repayment plan. Borrowers should verify official counts with the PSLF Help Tool and StudentAid.gov records.',
  },
  {
    question: 'How many qualifying payments do I need for PSLF?',
    answer: 'Public Service Loan Forgiveness generally requires 120 qualifying monthly payments. The payments do not need to be consecutive, but they must be tied to qualifying employment and eligible federal loan status.',
  },
  {
    question: 'Can this calculator confirm my official PSLF payment count?',
    answer: 'No. This calculator estimates progress from the count you enter. Only StudentAid.gov, your PSLF servicer records, and official employment certification can confirm your qualifying payment count.',
  },
  {
    question: 'Do IDR payments count for PSLF?',
    answer: 'Many PSLF borrowers use income-driven repayment plans such as RAP, IBR, PAYE, or ICR. Some 10-year Standard repayment payments can qualify, but extended, graduated, and some consolidation standard schedules can be risky for PSLF.',
  },
];

export const metadata: Metadata = {
  title: 'PSLF Qualifying Payment Calculator - Track 120 Payments',
  description: 'Use this PSLF qualifying payment calculator to estimate progress toward 120 payments and check what to verify with StudentAid.gov.',
  keywords: ['PSLF qualifying payment calculator', 'PSLF payment count calculator', '120 qualifying payments', 'public service loan forgiveness calculator'],
  alternates: { canonical: '/pslf-qualifying-payment-calculator/' },
  openGraph: {
    title: 'PSLF Qualifying Payment Calculator',
    description: 'Estimate your progress toward 120 qualifying PSLF payments.',
    url: 'https://repaymentguide.com/pslf-qualifying-payment-calculator/',
  },
};

export default function PslfQualifyingPaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">PSLF payment count tool</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">PSLF Qualifying Payment Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate how close you are to 120 PSLF qualifying payments, then verify your official count through StudentAid.gov and your loan servicer records.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <PslfCalculator />

          <div className="mx-auto mt-8 max-w-4xl">
            <CalculatorDisclosure
              assumptions={[
                'The calculator estimates PSLF progress from the qualifying payment count, monthly payment, loan balance, employment type, and loan type you enter.',
                'It does not certify employment, verify Direct Loan status, or confirm official qualifying payment credit.',
                'PSLF generally requires 120 qualifying monthly payments; use the official PSLF Help Tool for certification and records.',
              ]}
              sources={[
                officialStudentLoanSources.pslfHelpTool,
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">What Counts Toward 120 PSLF Payments?</h2>
              <p className="mt-3 text-gray-700">
                A PSLF qualifying payment is not just any student loan payment. It usually depends on having eligible Direct Loans, working full time for a qualifying employer, making payments under an eligible repayment plan, and keeping employment certification records current.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-primary-50 p-4">
                  <h3 className="font-semibold text-primary-950">Core requirements to check</h3>
                  <ul className="mt-2 space-y-1 text-sm text-primary-900">
                    <li>- Direct Loan status</li>
                    <li>- Qualifying government or nonprofit employment</li>
                    <li>- Full-time employment standard</li>
                    <li>- Eligible repayment plan</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-gray-900">Records to keep</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li>- Annual PSLF forms</li>
                    <li>- Employer certification confirmations</li>
                    <li>- Servicer payment count notices</li>
                    <li>- StudentAid.gov account screenshots or downloads</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Which tool should PSLF borrowers open next?</h2>
              <p className="mt-3 text-gray-700">
                If you are close to 120, use this PSLF qualifying payment calculator to check the count you already have, then compare payment strategy with the IDR and RAP tools. Many borrowers only need to know whether RAP, IBR, or PAYE creates the lowest qualifying bill.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/pslf-calculator" className="rounded-xl border bg-primary-50 p-4 font-semibold text-primary-950 hover:bg-primary-100">PSLF calculator</Link>
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Compare IDR plans</Link>
                <Link href="/rap-payment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">RAP payment calculator</Link>
              </div>
            </section>

            <section className="overflow-x-auto rounded-2xl border bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">PSLF Payment Count Checkpoints</h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Payment count</th>
                    <th className="p-3 text-left">What it means</th>
                    <th className="p-3 text-left">Recommended action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">0-24</td>
                    <td className="p-3">Early PSLF stage; records matter more than projections.</td>
                    <td className="p-3">Certify employment and confirm loan type.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-semibold">25-84</td>
                    <td className="p-3">Midstream stage; repayment plan choice can still change cost.</td>
                    <td className="p-3"><Link href="/income-driven-repayment-calculator" className="text-primary-700 underline">Compare IDR plans</Link>.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">85-120</td>
                    <td className="p-3">Close to forgiveness; avoid unnecessary plan or consolidation risk.</td>
                    <td className="p-3">Verify official count before switching anything major.</td>
                  </tr>
                </tbody>
              </table>
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

            <OfficialSources sources={[officialStudentLoanSources.pslfHelpTool, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication]} title="Official sources for PSLF payment counts" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
