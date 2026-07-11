import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';

const faqs = [
  {
    question: 'What changed for student loan repayment in 2026?',
    answer: 'Borrowers need to compare new and existing repayment options, including RAP, Tiered Standard, IBR, PAYE, ICR, and PSLF-safe choices. SAVE borrowers should pay close attention to servicer notices and plan deadlines.',
  },
  {
    question: 'Is RAP the same as SAVE?',
    answer: 'No. RAP uses a different formula based on adjusted gross income, includes a dependent adjustment, has a 30-year IDR forgiveness timeline, and includes interest and principal benefits when borrowers make full on-time payments.',
  },
  {
    question: 'What should SAVE borrowers do first?',
    answer: 'Save the servicer notice, write down the notice date, compare RAP against IBR, PAYE, ICR, and Standard repayment, and submit a plan choice before the deadline listed by the servicer.',
  },
  {
    question: 'Can PSLF borrowers use RAP?',
    answer: 'RAP may count for PSLF if the borrower satisfies all PSLF requirements, but PSLF borrowers should compare plans carefully and confirm final eligibility with StudentAid.gov or their servicer.',
  },
];

const actionCards = [
  {
    title: 'SAVE borrower',
    description: 'Your main risk is missing the transition window or choosing a plan that raises your payment unexpectedly.',
    href: '/blog/save-ending-rap-vs-save-2026',
    cta: 'Read the 90-day checklist',
  },
  {
    title: 'Choosing between RAP, IBR, PAYE, and ICR',
    description: 'Run estimates with your AGI, household size, balance, and forgiveness goals before submitting a plan choice.',
    href: '/income-driven-repayment-calculator',
    cta: 'Compare IDR payments',
  },
  {
    title: 'Pursuing PSLF',
    description: 'A low payment is not enough; the plan also needs to fit PSLF rules and your qualifying employment strategy.',
    href: '/pslf-calculator',
    cta: 'Estimate PSLF forgiveness',
  },
  {
    title: 'Parent PLUS borrower',
    description: 'Parent PLUS rules remain unusually restrictive, especially around RAP and older IDR options.',
    href: '/blog/parent-plus-loan-repayment-options',
    cta: 'Review Parent PLUS options',
  },
];

export const metadata: Metadata = {
  title: '2026 Student Loan Changes - SAVE, RAP, IBR & PSLF Guide',
  description: 'A practical 2026 student loan repayment guide for SAVE borrowers, RAP, IBR, PAYE, ICR, PSLF, Parent PLUS, and default recovery decisions.',
  keywords: [
    '2026 student loan changes',
    'SAVE ending 2026',
    'RAP repayment plan',
    'RAP vs SAVE',
    'student loan repayment changes',
    'PSLF 2026',
  ],
  alternates: {
    canonical: '/student-loan-changes-2026/',
  },
  openGraph: {
    title: '2026 Student Loan Changes: What Borrowers Should Do Next',
    description: 'Compare SAVE, RAP, IBR, PAYE, ICR, Standard repayment, and PSLF-safe next steps.',
    url: 'https://repaymentguide.com/student-loan-changes-2026/',
    type: 'article',
  },
};

export default function StudentLoanChanges2026Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-primary-900 to-primary-700 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-white/20">
                Updated for the 2026 repayment transition
              </p>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                2026 Student Loan Changes: SAVE, RAP, IBR, and PSLF Next Steps
              </h1>
              <p className="max-w-3xl text-xl text-primary-50">
                If your repayment plan is changing, do not guess. Use this guide to identify your borrower type, compare the right plans, and avoid deadline surprises.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/income-driven-repayment-calculator" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary-700 transition hover:bg-primary-50">
                  Compare IDR Plans
                </Link>
                <Link href="/blog/save-ending-rap-vs-save-2026" className="rounded-lg bg-primary-950/50 px-6 py-3 text-center font-semibold text-white ring-1 ring-white/30 transition hover:bg-primary-950">
                  SAVE 90-Day Checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-900">Key question</p>
                <p className="text-gray-700">Which plan lowers your payment without hurting forgiveness?</p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">Deadline risk</p>
                <p className="text-gray-700">SAVE borrowers should track servicer notice dates carefully.</p>
              </div>
              <div className="rounded-xl border border-green-100 bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-900">Best first step</p>
                <p className="text-gray-700">Run RAP, IBR, PAYE, ICR, and Standard estimates side by side.</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Official check</p>
                <p className="text-gray-700">Confirm final eligibility on StudentAid.gov before applying.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">What changed in plain English</h2>
              <div className="space-y-4 text-lg leading-8 text-gray-700">
                <p>
                  The 2026 repayment transition pushes borrowers to make active choices. The Department of Education describes RAP as an income-based repayment option with payments tied to income, a dependent adjustment, an unpaid-interest waiver after qualifying on-time payments, and a matching principal benefit in some cases.
                </p>
                <p>
                  Tiered Standard repayment is also part of the new landscape, with fixed repayment terms based on the amount borrowed. That can be simpler than income-driven repayment, but it may not be the best fit for borrowers pursuing forgiveness or trying to keep payments tied to income.
                </p>
                <p>
                  The practical takeaway: your best option depends on loan type, income, household size, PSLF status, Parent PLUS history, and how close you are to forgiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Start with your situation</h2>
              <p className="text-lg text-gray-600">
                Borrowers do not all need the same advice. Pick the lane that matches your risk.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {actionCards.map((card) => (
                <Link key={card.title} href={card.href} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-700">{card.title}</h3>
                  <p className="mb-4 text-gray-600">{card.description}</p>
                  <span className="font-semibold text-primary-700">{card.cta} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">A safer 2026 repayment checklist</h2>
                <ol className="space-y-4">
                  {[
                    'Download or screenshot your current servicer notice and repayment plan details.',
                    'Confirm your loan types, especially Parent PLUS, consolidation, FFEL, Perkins, or Direct Loan status.',
                    'Estimate monthly payments under RAP, IBR, PAYE, ICR, and Standard repayment.',
                    'If you are pursuing PSLF, confirm that your plan and employment strategy still support qualifying payments.',
                    'Submit your repayment choice before your servicer deadline, then verify the new bill after processing.',
                  ].map((item, index) => (
                    <li key={item} className="flex gap-4 rounded-xl border bg-white p-5">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">{index + 1}</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <aside className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-primary-950">Fastest useful workflow</h3>
                <p className="mb-5 text-primary-900">
                  If you only have 10 minutes, run the IDR calculator first, then read the guide for whichever plan looks best.
                </p>
                <div className="space-y-3">
                  <Link href="/income-driven-repayment-calculator" className="block rounded-lg bg-primary-700 px-4 py-3 text-center font-semibold text-white hover:bg-primary-800">
                    Run IDR Calculator
                  </Link>
                  <Link href="/save-plan-calculator" className="block rounded-lg bg-white px-4 py-3 text-center font-semibold text-primary-700 ring-1 ring-primary-200 hover:bg-primary-100">
                    Compare SAVE Alternatives
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Official sources to verify before applying</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <a href="https://www.ed.gov/about/news/press-release/fact-sheet-trump-administration-simplifying-student-loan-repayment" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:border-primary-300 hover:shadow-sm">
                  <h3 className="font-semibold text-primary-700">Department of Education RAP fact sheet</h3>
                  <p className="mt-2 text-sm text-gray-600">Official overview of RAP, Tiered Standard, interest waiver, and principal matching concepts.</p>
                </a>
                <a href="https://studentaid.gov/manage-loans/repayment/plans/income-driven" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:border-primary-300 hover:shadow-sm">
                  <h3 className="font-semibold text-primary-700">StudentAid.gov IDR plans</h3>
                  <p className="mt-2 text-sm text-gray-600">Official application and eligibility information for income-driven repayment plans.</p>
                </a>
                <a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:border-primary-300 hover:shadow-sm">
                  <h3 className="font-semibold text-primary-700">StudentAid.gov PSLF</h3>
                  <p className="mt-2 text-sm text-gray-600">Official PSLF requirements, employment certification, and qualifying payment guidance.</p>
                </a>
                <a href="https://studentaid.gov/loan-simulator/" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:border-primary-300 hover:shadow-sm">
                  <h3 className="font-semibold text-primary-700">Federal Loan Simulator</h3>
                  <p className="mt-2 text-sm text-gray-600">Official calculator to compare repayment plans before submitting a final choice.</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-700 py-14 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Make the plan choice before the plan chooses you</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-100">
              Compare payments now, then use the official application or your servicer account to confirm the final repayment plan.
            </p>
            <Link href="/income-driven-repayment-calculator" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-700 hover:bg-primary-50">
              Start Comparing Plans
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
