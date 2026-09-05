import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SaveDeadlineCalculator from '@/components/SaveDeadlineCalculator';
import { FAQSchema } from '@/components/FAQSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { CalculatorSchema } from '@/components/CalculatorSchema';
import { CalculatorDisclosure, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'When does the SAVE 90-day deadline start?',
    answer: 'Use the sent date on your servicer notice, unless the notice gives a specific due date. If the notice gives a specific deadline, rely on that deadline instead of an estimate.',
  },
  {
    question: 'Are the 90 days calendar days or business days?',
    answer: 'Treat the window as calendar days unless your servicer notice says otherwise. Save the notice and verify the deadline inside your servicer account.',
  },
  {
    question: 'What should I do before the final week?',
    answer: 'Compare plans, submit your repayment choice, save confirmation screenshots, and check that your servicer processed the change before your deadline.',
  },
];

export const metadata: Metadata = {
  title: 'SAVE and IDR Deadline Calculator - 2026 Student Loan Tool',
  description: 'Calculate your estimated SAVE or IDR deadline from a servicer notice date and plan a safer timeline for choosing RAP, IBR, PAYE, ICR, or Standard repayment.',
  keywords: ['SAVE 90 day deadline', 'SAVE transition deadline calculator', 'IDR deadline calculator', 'student loan deadline calculator'],
  alternates: {
    canonical: '/save-90-day-deadline-calculator/',
  },
  openGraph: {
    title: 'SAVE 90-Day Deadline Calculator',
    description: 'Estimate your SAVE transition deadline and planning milestones.',
    url: 'https://repaymentguide.com/save-90-day-deadline-calculator/',
  },
};

export default function SaveDeadlineCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://repaymentguide.com/' },
          { name: 'Student Loan Calculators', url: 'https://repaymentguide.com/student-loan-calculators/' },
          { name: 'SAVE 90-Day Deadline Calculator', url: 'https://repaymentguide.com/save-90-day-deadline-calculator/' },
        ]}
      />
      <CalculatorSchema
        name="SAVE 90-Day Deadline Calculator"
        description="Estimate the 90-day response date after a SAVE transition notice and plan repayment comparison milestones."
        url="https://repaymentguide.com/save-90-day-deadline-calculator/"
        keywords={['SAVE 90 day deadline', 'SAVE transition', 'student loan deadline calculator']}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-primary-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-800 ring-1 ring-amber-200">
                SAVE transition planning tool
              </p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">SAVE and IDR Deadline Calculator</h1>
              <p className="max-w-3xl text-xl text-gray-700">
                Estimate the date by which you should choose a replacement repayment plan after receiving a SAVE transition notice, IDR recertification notice, or servicer plan-selection deadline.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <SaveDeadlineCalculator />

            <div className="mx-auto mt-12 max-w-4xl space-y-8">
              <CalculatorDisclosure
                title="SAVE deadline assumptions"
                assumptions={[
                  'The estimated date is calculated as 90 calendar days after the notice date you enter.',
                  'If your servicer notice gives a specific deadline, use that date instead of this estimate.',
                  'The tool does not confirm whether your account is in SAVE, whether your notice was sent, or whether your servicer processed your plan election.',
                ]}
                sources={[
                  officialStudentLoanSources.edRapFactSheet,
                  officialStudentLoanSources.edRateUpdate,
                  officialStudentLoanSources.idrApplication,
                ]}
              />

              <section className="rounded-2xl border bg-white p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">What to do after calculating your date</h2>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Save your notice.</strong> Keep the email, letter, or account message that shows the sent date and any due date.</li>
                  <li><strong>2. Compare plans early.</strong> Run RAP, IBR, PAYE, ICR, and Standard estimates before waiting on servicer processing.</li>
                  <li><strong>3. Submit before the final two weeks.</strong> Waiting until the deadline increases the risk of processing delays or payment shock.</li>
                  <li><strong>4. Verify the new bill.</strong> After submitting, check that your servicer applied the plan you selected.</li>
                </ol>
              </section>

              <section className="rounded-2xl border bg-white p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Is this also an IDR deadline calculator?</h2>
                <p className="text-gray-700">
                  Use this page for any student loan deadline where you need a planning date from a servicer notice. SAVE transition notices, IDR recertification reminders, and plan-selection messages can use different wording, so always compare this estimate with the exact date shown in your account.
                </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Link href="/idr-payment-estimator" className="rounded-xl border bg-primary-50 p-4 font-semibold text-primary-950 hover:bg-primary-100">Estimate IDR payments first</Link>
                <Link href="/income-driven-repayment-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">Compare repayment plans</Link>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <Link href="/rap-vs-save-calculator" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">RAP vs SAVE</Link>
                <Link href="/ibr-vs-rap" className="rounded-xl border bg-slate-50 p-4 font-semibold text-slate-900 hover:bg-slate-100">IBR vs RAP</Link>
                <Link href="/parent-plus-rap-eligibility" className="rounded-xl border bg-green-50 p-4 font-semibold text-green-950 hover:bg-green-100">Parent PLUS RAP eligibility</Link>
              </div>
            </section>

              <section className="rounded-2xl border bg-white p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Why the notice date matters</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    SAVE transition timing is not the same for every borrower. A generic policy date can help you prepare, but your practical deadline depends on the date your servicer sends the notice or the exact due date printed in that notice.
                  </p>
                  <p>
                    If you are close to the deadline, prioritize actions that create a record: save the notice, download confirmation pages, write down representative names when you call, and check your account after submitting a repayment request. Those records can help if your bill changes before the servicer finishes processing the plan election.
                  </p>
                  <p>
                    Borrowers pursuing PSLF should be especially careful. A rushed or automatic placement can affect whether a month counts, so compare the payment estimate and the qualifying-payment rules before assuming the lowest bill is the safest option.
                  </p>
                </div>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <Link href="/income-driven-repayment-calculator" className="rounded-2xl border bg-primary-50 p-6 transition hover:shadow-md">
                  <h3 className="mb-2 text-xl font-bold text-primary-900">Compare IDR plans next</h3>
                  <p className="text-primary-800">Estimate RAP, IBR, PAYE, ICR, and SAVE-era comparisons with your income and household size.</p>
                </Link>
                <Link href="/repayment-plan-recommendation" className="rounded-2xl border bg-white p-6 transition hover:shadow-md">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Get a plan recommendation path</h3>
                  <p className="text-gray-600">Answer a few questions to see which repayment plans to compare first.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
