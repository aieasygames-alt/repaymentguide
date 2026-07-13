import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RapPaymentCalculator from '@/components/RapPaymentCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { CalculatorDisclosure, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'How is a RAP payment calculated?',
    answer: 'RAP payments are estimated from adjusted gross income using a 1% to 10% income-based formula, then reduced by $50 per dependent, subject to a minimum monthly payment.',
  },
  {
    question: 'Does RAP use discretionary income?',
    answer: 'No. RAP is different from legacy IDR plans because it uses AGI-based income tiers rather than subtracting a poverty-guideline allowance first.',
  },
  {
    question: 'Can RAP help with unpaid interest?',
    answer: 'Current Department guidance says RAP can waive remaining unpaid monthly interest after full, on-time payments and can provide a matching principal payment when needed.',
  },
  {
    question: 'Are Parent PLUS loans eligible for RAP?',
    answer: 'Parent PLUS treatment is limited. Consolidation loans that include Parent PLUS loans may not be eligible for RAP, so parent borrowers should verify loan type details before relying on this calculator.',
  },
];

export const metadata: Metadata = {
  title: 'RAP Payment Calculator - Estimate 2026 Student Loan Payments',
  description: 'Estimate your Repayment Assistance Plan monthly payment, dependent reduction, unpaid interest waiver, and principal match under the 2026 RAP formula.',
  keywords: ['RAP payment calculator', 'Repayment Assistance Plan calculator', 'RAP student loan payment', 'RAP calculator 2026'],
  alternates: {
    canonical: '/rap-payment-calculator/',
  },
  openGraph: {
    title: 'RAP Payment Calculator',
    description: 'Estimate your 2026 Repayment Assistance Plan monthly payment.',
    url: 'https://repaymentguide.com/rap-payment-calculator/',
  },
};

export default function RapPaymentCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-950 via-primary-950 to-slate-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-white/20">
                2026 RAP planning tool
              </p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">RAP Payment Calculator</h1>
              <p className="max-w-3xl text-xl text-primary-50">
                Estimate your Repayment Assistance Plan payment, dependent reduction, possible interest waiver, and possible principal match before choosing a repayment plan.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-10">
            <RapPaymentCalculator />

            <CalculatorDisclosure
              title="RAP calculator assumptions"
              assumptions={[
                'RAP estimates use adjusted gross income, a 1-10% income tier, a $50 monthly reduction per dependent, and a minimum monthly payment.',
                'Interest waiver and principal match estimates assume full, on-time monthly payments and are simplified planning estimates.',
                'Parent PLUS consolidation history, tax documentation, servicer processing, PSLF status, and policy updates can change the final result.',
              ]}
              sources={[
                officialStudentLoanSources.edRapFactSheet,
                officialStudentLoanSources.studentAidRepaymentPlans,
                officialStudentLoanSources.idrApplication,
                officialStudentLoanSources.pslfHelpTool,
              ]}
            />

            <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="rounded-3xl border bg-white p-6">
                <h2 className="text-3xl font-bold text-gray-900">How RAP compares with IBR and PAYE</h2>
                <p className="mt-4 text-gray-700">
                  RAP can look attractive when the AGI tier produces a low payment and the interest waiver or principal match helps your balance move down. But RAP is not automatically better than IBR or PAYE because legacy IDR plans use discretionary income, may have payment caps, and may have shorter non-PSLF forgiveness timelines.
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 text-left">Plan</th>
                        <th className="p-3 text-left">Payment base</th>
                        <th className="p-3 text-left">Watch-out</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-semibold">RAP</td>
                        <td className="p-3">1-10% of AGI, reduced by dependents</td>
                        <td className="p-3">30-year non-PSLF forgiveness timeline</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 font-semibold">IBR</td>
                        <td className="p-3">10-15% of discretionary income</td>
                        <td className="p-3">Eligibility and timeline depend on borrower history</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">PAYE</td>
                        <td className="p-3">10% of discretionary income</td>
                        <td className="p-3">Narrower eligibility rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <aside className="space-y-4">
                <Link href="/income-driven-repayment-calculator" className="block rounded-3xl border bg-primary-50 p-6 transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-primary-950">Compare all IDR plans</h3>
                  <p className="mt-2 text-primary-800">Run RAP, IBR, PAYE, and ICR side by side.</p>
                </Link>
                <Link href="/save-90-day-deadline-calculator" className="block rounded-3xl border bg-amber-50 p-6 transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-amber-950">SAVE deadline coming?</h3>
                  <p className="mt-2 text-amber-900">Calculate your 90-day response window.</p>
                </Link>
                <Link href="/parent-plus-rap-eligibility" className="block rounded-3xl border bg-white p-6 transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-gray-900">Parent PLUS borrower?</h3>
                  <p className="mt-2 text-gray-600">Check whether RAP is even the right starting point.</p>
                </Link>
              </aside>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
