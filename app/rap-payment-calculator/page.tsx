import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RapPaymentCalculator from '@/components/RapPaymentCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { CalculatorSchema } from '@/components/CalculatorSchema';
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
  {
    question: 'Is RAP a good first estimate for Parent PLUS borrowers?',
    answer: 'Usually no. Parent PLUS borrowers should first check the Parent PLUS RAP eligibility page, because loan type and consolidation history can make ICR, Standard repayment, or PSLF planning more relevant than a general RAP estimate.',
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
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://repaymentguide.com/' },
          { name: 'Student Loan Calculators', url: 'https://repaymentguide.com/student-loan-calculators/' },
          { name: 'RAP Payment Calculator', url: 'https://repaymentguide.com/rap-payment-calculator/' },
        ]}
      />
      <CalculatorSchema
        name="RAP Payment Calculator"
        description="Estimate Repayment Assistance Plan monthly payments, dependent reductions, unpaid interest treatment, and principal match planning amounts."
        url="https://repaymentguide.com/rap-payment-calculator/"
        keywords={['RAP payment calculator', 'Repayment Assistance Plan', 'student loan repayment calculator']}
      />
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
                Estimate your Repayment Assistance Plan payment, dependent reduction, possible interest waiver, and possible principal match before choosing a repayment plan or comparing RAP vs IBR.
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
                <Link href="/pslf-calculator" className="block rounded-3xl border bg-white p-6 transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-gray-900">Planning PSLF?</h3>
                  <p className="mt-2 text-gray-600">See whether RAP is the lowest qualifying payment.</p>
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

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-3xl font-bold text-gray-900">How to use the RAP estimate before you apply</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Start with the monthly payment estimate, then check whether the same borrower facts produce a better result under IBR, PAYE, ICR, or Standard repayment. RAP uses AGI directly, so two borrowers with the same loan balance can see very different results if one has dependents or one qualifies for a legacy discretionary-income plan.
                </p>
                <p>
                  The estimate is most useful as a screening tool. Before submitting an IDR request, confirm your loan types, whether any consolidation loan includes Parent PLUS debt, your most recent income documentation, and whether you are trying to preserve PSLF-qualifying payments.
                </p>
                <p>
                  If your RAP estimate is close to another plan, compare the full repayment path rather than just the first bill. A lower payment can help your monthly budget, but forgiveness timing, interest treatment, and servicer processing rules can change the long-term cost.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link href="/ibr-vs-rap" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Read IBR vs RAP</Link>
                <Link href="/rap-vs-save-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Compare RAP vs SAVE</Link>
                <Link href="/pslf-rap-qualifying-payments" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Check RAP and PSLF</Link>
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6">
              <h2 className="text-3xl font-bold text-gray-900">Parent PLUS and the RAP program</h2>
              <p className="mt-4 text-gray-700">
                If you are asking whether Parent PLUS loans are eligible for the RAP program, pause before using a general RAP payment estimate. Parent PLUS loans and Direct Consolidation Loans that include Parent PLUS debt can follow different repayment rules, so the better first step is to identify the loan type and compare ICR, Standard repayment, and any PSLF path for the parent borrower.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link href="/parent-plus-rap-eligibility" className="rounded-2xl border bg-green-50 p-5 font-semibold text-green-950 hover:bg-green-100">Check Parent PLUS RAP eligibility</Link>
                <Link href="/income-driven-repayment-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Compare IDR plans</Link>
                <Link href="/pslf-calculator" className="rounded-2xl border bg-slate-50 p-5 font-semibold text-slate-900 hover:bg-slate-100">Review PSLF path</Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
