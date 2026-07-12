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
  {
    question: 'How do I calculate my SAVE transition deadline?',
    answer: 'Use the sent date on your servicer notice, then count the number of calendar days listed in the notice. If the notice gives a specific due date, use that date instead of estimating.',
  },
  {
    question: 'Should Parent PLUS borrowers choose RAP?',
    answer: 'Parent PLUS borrowers should be careful. Parent PLUS loans and consolidation loans that include Parent PLUS loans can have different IDR eligibility rules, so review Parent PLUS-specific options before choosing a plan.',
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

const planRows = [
  {
    plan: 'RAP',
    bestFor: 'Borrowers who compare favorably under an AGI-based formula and want interest/principal protections.',
    watchOut: 'No poverty-line exclusion, $10 minimum payment, 30-year IDR forgiveness timeline outside PSLF.',
  },
  {
    plan: 'IBR',
    bestFor: 'Borrowers who need an income-driven option and may not qualify for PAYE.',
    watchOut: 'Payment percentage and forgiveness timeline can vary based on borrower timing and loan history.',
  },
  {
    plan: 'PAYE',
    bestFor: 'Eligible borrowers who want a payment cap and a 20-year non-PSLF forgiveness timeline.',
    watchOut: 'Eligibility is narrower than IBR, so not every borrower can choose it.',
  },
  {
    plan: 'ICR',
    bestFor: 'Some Parent PLUS borrowers after consolidation and borrowers who do not fit other IDR plans.',
    watchOut: 'Often has a higher payment formula than other IDR options.',
  },
  {
    plan: 'Tiered Standard',
    bestFor: 'Borrowers who want fixed payments and are not relying on IDR forgiveness.',
    watchOut: 'May create payment shock and may be a poor fit for some forgiveness strategies.',
  },
];

const deadlineExamples = [
  {
    noticeDate: 'July 1, 2026',
    planningNote: 'Start comparing plans immediately; do not wait until the final week to apply.',
  },
  {
    noticeDate: 'August 15, 2026',
    planningNote: 'Your deadline may be later than someone notified in July, but servicer processing can still take time.',
  },
  {
    noticeDate: 'A notice with a specific due date',
    planningNote: 'Use the servicer-provided date, then save a copy of the notice for your records.',
  },
];

const mistakeCards = [
  {
    title: 'Only chasing the lowest monthly payment',
    description: 'A lower bill can still be the wrong choice if it delays forgiveness, affects PSLF progress, or leaves you in a plan you cannot sustain.',
  },
  {
    title: 'Assuming RAP works like SAVE',
    description: 'RAP uses a different formula and timeline. Run the numbers instead of assuming your old SAVE payment will carry over.',
  },
  {
    title: 'Ignoring Parent PLUS rules',
    description: 'Parent PLUS loans are often the exception to the general IDR rule. Check eligibility before relying on a calculator result.',
  },
  {
    title: 'Waiting for automatic placement',
    description: 'Automatic placement may be convenient, but it may not pick the best plan for your budget, loan type, or forgiveness goal.',
  },
];

const borrowerPaths = [
  {
    label: 'Low income, no PSLF',
    path: 'Compare RAP minimum payments against IBR/PAYE. Pay attention to whether a poverty-guideline-based plan produces a lower bill.',
  },
  {
    label: 'Public service worker',
    path: 'Start with PSLF eligibility, then compare qualifying repayment plans. A non-qualifying payment can be more expensive than it looks.',
  },
  {
    label: 'High balance, rising income',
    path: 'Look for payment caps, forgiveness timelines, and whether your future income could make RAP or ICR more expensive.',
  },
  {
    label: 'Parent borrower',
    path: 'Review consolidation history first. Then compare ICR, Standard repayment, and any PSLF strategy tied to parent employment.',
  },
];

const decisionTools = [
  {
    title: 'SAVE 90-Day Deadline Calculator',
    description: 'Enter your servicer notice date and get an estimated deadline plus planning milestones.',
    href: '/save-90-day-deadline-calculator',
  },
  {
    title: 'RAP vs IBR vs PAYE Recommendation Tool',
    description: 'Answer a few questions to see which repayment plans deserve your first comparison.',
    href: '/repayment-plan-recommendation',
  },
  {
    title: 'Parent PLUS RAP Eligibility Checker',
    description: 'Check the Parent PLUS-specific questions that can change your repayment path.',
    href: '/parent-plus-rap-eligibility',
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
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Which repayment plan should you compare first?</h2>
              <p className="text-lg text-gray-600">
                There is no universal best plan. Use this table to decide what to test first in the calculator.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-gray-900">Plan</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-gray-900">Compare first if...</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-gray-900">Watch out for...</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {planRows.map((row) => (
                      <tr key={row.plan}>
                        <td className="px-5 py-4 font-semibold text-primary-700">{row.plan}</td>
                        <td className="px-5 py-4 text-gray-700">{row.bestFor}</td>
                        <td className="px-5 py-4 text-gray-700">{row.watchOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-50 py-14">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Use the decision tools</h2>
              <p className="text-lg text-gray-600">
                These tools turn the 2026 rules into concrete next steps: deadline timing, plan comparison order, and Parent PLUS eligibility checks.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {decisionTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-bold text-primary-900">{tool.title}</h3>
                  <p className="mb-4 text-gray-600">{tool.description}</p>
                  <span className="font-semibold text-primary-700">Open tool →</span>
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

        <section className="bg-amber-50 py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">Deadline planning</p>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Do not treat every SAVE deadline as the same date</h2>
                <p className="text-gray-700">
                  Your practical deadline depends on your servicer notice. The safest move is to save the notice, write down the sent date, and apply early enough for processing delays.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {deadlineExamples.map((example) => (
                  <div key={example.noticeDate} className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-2 font-bold text-amber-900">{example.noticeDate}</h3>
                    <p className="text-sm text-gray-700">{example.planningNote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Recommended path by borrower type</h2>
              <p className="text-lg text-gray-600">
                These are starting points, not final advice. Use them to choose which calculations and guides to open first.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {borrowerPaths.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{item.label}</h3>
                  <p className="text-gray-700">{item.path}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Four mistakes to avoid during the 2026 transition</h2>
              <p className="text-lg text-gray-600">
                Most bad outcomes come from rushing, assuming old rules still apply, or treating plan names as interchangeable.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {mistakeCards.map((item) => (
                <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
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
