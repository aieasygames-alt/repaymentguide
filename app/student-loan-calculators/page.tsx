import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const calculatorGroups = [
  {
    title: 'Payment and plan comparison',
    description: 'Start here if you need a monthly payment estimate or want to compare federal repayment plans.',
    tools: [
      {
        name: 'Student Loan Payment Calculator',
        href: '/student-loan-payment-calculator',
        description: 'Estimate standard, graduated, and extended repayment payments.',
      },
      {
        name: 'Income-Driven Repayment Calculator',
        href: '/income-driven-repayment-calculator',
        description: 'Compare RAP, IBR, PAYE, ICR, and other income-driven repayment estimates.',
      },
      {
        name: 'Repayment Plan Recommendation Tool',
        href: '/repayment-plan-recommendation',
        description: 'Answer a short flow to decide which plans deserve your first comparison.',
      },
    ],
  },
  {
    title: 'IDR and IBR calculators',
    description: 'Use these when your search is specifically about IDR, IBR, or income-based repayment.',
    tools: [
      {
        name: 'IDR Payment Estimator',
        href: '/idr-payment-estimator',
        description: 'Get a quick income-driven repayment estimate before using official federal tools.',
      },
      {
        name: 'Income-Based Repayment Calculator',
        href: '/income-based-repayment-calculator',
        description: 'Focus on IBR and compare it with RAP, PAYE, and ICR.',
      },
      {
        name: 'Student Loan IDR Payment Calculator',
        href: '/student-loan-idr-payment-calculator',
        description: 'Estimate federal student loan IDR payments with plain-language next steps.',
      },
    ],
  },
  {
    title: 'RAP, SAVE, and 2026 transition tools',
    description: 'Use these if you are leaving SAVE or comparing the new RAP formula with legacy plans.',
    tools: [
      {
        name: 'RAP Payment Calculator',
        href: '/rap-payment-calculator',
        description: 'Estimate Repayment Assistance Plan payments, dependent reductions, and planning limits.',
      },
      {
        name: 'RAP vs SAVE Calculator',
        href: '/rap-vs-save-calculator',
        description: 'Compare a former SAVE reference point with current RAP planning estimates.',
      },
      {
        name: 'SAVE 90-Day Deadline Calculator',
        href: '/save-90-day-deadline-calculator',
        description: 'Estimate the response window from a servicer notice date.',
      },
    ],
  },
  {
    title: 'PSLF and forgiveness calculators',
    description: 'Use these if public service, qualifying payments, or long-term forgiveness strategy matters.',
    tools: [
      {
        name: 'PSLF Calculator',
        href: '/pslf-calculator',
        description: 'Estimate Public Service Loan Forgiveness progress and potential forgiveness.',
      },
      {
        name: 'PSLF Qualifying Payment Calculator',
        href: '/pslf-qualifying-payment-calculator',
        description: 'Track progress toward 120 qualifying PSLF payments.',
      },
      {
        name: 'PSLF vs IDR Forgiveness Calculator',
        href: '/pslf-vs-idr-forgiveness-calculator',
        description: 'Compare the 120-payment PSLF path with longer IDR forgiveness timelines.',
      },
    ],
  },
];

const faqs = [
  {
    question: 'Which student loan calculator should I use first?',
    answer: 'Start with the Student Loan Payment Calculator for standard repayment. Use the Income-Driven Repayment Calculator if your payment depends on income, family size, PSLF, or the SAVE transition. Use the recommendation tool if you are unsure which plan to compare first.',
  },
  {
    question: 'Are these calculators official federal tools?',
    answer: 'No. RepaymentGuide calculators provide planning estimates. Confirm final eligibility, payment amounts, deadlines, and forgiveness credit with StudentAid.gov, the official Loan Simulator, the IDR application, the PSLF Help Tool, or your servicer.',
  },
  {
    question: 'Do these calculators cover private student loans?',
    answer: 'Most tools on this page focus on federal student loans. Private student loans use lender-specific terms and usually do not qualify for federal IDR, PSLF, RAP, or federal forgiveness programs.',
  },
  {
    question: 'Why are there separate IDR, IBR, and PSLF calculators?',
    answer: 'Borrowers search with different levels of specificity. A broad IDR calculator compares plans, an IBR calculator focuses on Income-Based Repayment, and PSLF tools focus on qualifying employment, 120 payments, and forgiveness progress.',
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Calculators - IDR, IBR, PSLF, RAP & SAVE',
  description: 'Find the right student loan calculator for IDR, IBR, PSLF, RAP, SAVE deadlines, and federal repayment plan comparisons.',
  keywords: ['student loan calculators', 'student loan repayment calculator', 'IDR calculator', 'IBR calculator', 'PSLF calculator', 'RAP calculator'],
  alternates: { canonical: '/student-loan-calculators/' },
  openGraph: {
    title: 'Student Loan Calculators',
    description: 'Choose the right calculator for federal student loan repayment planning.',
    url: 'https://repaymentguide.com/student-loan-calculators/',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Student Loan Calculators',
  itemListElement: calculatorGroups.flatMap((group) => group.tools).map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://repaymentguide.com${tool.href}/`,
    name: tool.name,
    description: tool.description,
  })),
};

export default function StudentLoanCalculatorsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-950 via-primary-950 to-slate-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-white/20">Calculator hub</p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Student Loan Calculators</h1>
              <p className="max-w-3xl text-xl text-primary-50">
                Choose the right student loan calculator for federal repayment planning, including IDR, IBR, PSLF, RAP, SAVE deadlines, and payment comparisons.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Start With the Closest Match</h2>
              <p className="mt-3 text-gray-700">
                If you only need a fixed-payment estimate, start with the standard payment calculator. If your payment depends on income, household size, public service, or a SAVE transition notice, use the IDR estimator, IBR payment calculator, RAP calculator, PSLF calculator, or deadline tools below.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Link href="/income-driven-repayment-calculator" className="rounded-xl bg-primary-700 p-5 text-white transition hover:bg-primary-800">
                  <h3 className="font-bold">Need an income-based payment?</h3>
                  <p className="mt-2 text-sm text-primary-50">Use the IDR payment estimator to compare IBR, PAYE, ICR, and RAP.</p>
                </Link>
                <Link href="/pslf-calculator" className="rounded-xl border bg-white p-5 transition hover:bg-primary-50">
                  <h3 className="font-bold text-gray-900">Pursuing PSLF?</h3>
                  <p className="mt-2 text-sm text-gray-700">Estimate progress toward 120 qualifying payments.</p>
                </Link>
                <Link href="/ibr-vs-rap" className="rounded-xl border bg-white p-5 transition hover:bg-primary-50">
                  <h3 className="font-bold text-gray-900">IBR vs RAP?</h3>
                  <p className="mt-2 text-sm text-gray-700">Compare the two plans before you commit.</p>
                </Link>
                <Link href="/save-90-day-deadline-calculator" className="rounded-xl border bg-amber-50 p-5 transition hover:bg-amber-100">
                  <h3 className="font-bold text-amber-950">Got a SAVE notice?</h3>
                  <p className="mt-2 text-sm text-amber-900">Estimate your 90-day planning window.</p>
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Popular calculator searches</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/income-driven-repayment-calculator" className="rounded-full bg-primary-50 px-4 py-2 font-semibold text-primary-800 hover:bg-primary-100">income driven repayment calculator</Link>
                <Link href="/income-based-repayment-calculator" className="rounded-full bg-primary-50 px-4 py-2 font-semibold text-primary-800 hover:bg-primary-100">income based repayment calculator</Link>
                <Link href="/idr-payment-estimator" className="rounded-full bg-primary-50 px-4 py-2 font-semibold text-primary-800 hover:bg-primary-100">IDR payment estimator</Link>
                <Link href="/ibr-vs-rap" className="rounded-full bg-primary-50 px-4 py-2 font-semibold text-primary-800 hover:bg-primary-100">IBR vs RAP</Link>
                <Link href="/rap-payment-calculator" className="rounded-full bg-primary-50 px-4 py-2 font-semibold text-primary-800 hover:bg-primary-100">RAP payment calculator</Link>
              </div>
            </section>

            {calculatorGroups.map((group) => (
              <section key={group.title}>
                <div className="mb-5">
                  <h2 className="text-2xl font-bold text-gray-900">{group.title}</h2>
                  <p className="mt-2 max-w-3xl text-gray-700">{group.description}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {group.tools.map((tool) => (
                    <Link key={tool.href} href={tool.href} className="rounded-2xl border bg-white p-6 transition hover:border-primary-300 hover:shadow-md">
                      <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-700">{tool.description}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-primary-700">Open calculator</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

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

            <FinancialDisclaimer />
            <OfficialSources sources={[officialStudentLoanSources.loanSimulator, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.pslfHelpTool]} title="Official sources for final repayment decisions" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
