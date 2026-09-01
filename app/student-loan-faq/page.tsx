import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import {
  FinancialDisclaimer,
  OfficialSources,
  officialStudentLoanSources,
} from '@/components/TrustSignals';

const faqs = [
  {
    question: 'SAVE is ending. What should I do first?',
    answer: 'Find your servicer notice, write down the notice date and any listed deadline, then compare RAP, IBR, PAYE, ICR, and Standard repayment before the 90-day window closes. Do not rely on automatic placement if your budget depends on income-driven repayment.',
  },
  {
    question: 'How do I calculate my SAVE 90-day deadline?',
    answer: 'Use the sent date on your servicer notice and count 90 calendar days, unless the notice gives a specific deadline. If your servicer gives an exact date, use the servicer date instead of a calculator estimate.',
  },
  {
    question: 'Why did my SAVE payment go from $0 to a higher RAP estimate?',
    answer: 'SAVE used a poverty-line exclusion before calculating discretionary income. RAP uses adjusted gross income tiers, subtracts $50 per dependent from the monthly payment, and has a minimum payment. A borrower who had a $0 SAVE bill can still see a higher RAP estimate.',
  },
  {
    question: 'Is RAP better than IBR?',
    answer: 'RAP may be better if its AGI-based payment is lower and you value the unpaid-interest waiver and matching principal benefit. IBR may be better for some borrowers because it uses discretionary income, can exclude spouse income when filing separately, and may have a shorter forgiveness timeline.',
  },
  {
    question: 'Should married borrowers file separately for student loans?',
    answer: 'Filing separately can reduce payments under some legacy IDR plans when spouse income can be excluded, but it can also raise taxes or reduce tax benefits. Compare both repayment and tax effects before changing filing status.',
  },
  {
    question: 'Are Parent PLUS loans eligible for RAP?',
    answer: 'Parent PLUS rules are separate from ordinary Direct Loan rules. Parent PLUS borrowers should verify whether the loan is a Parent PLUS loan, whether it has been consolidated, and whether ICR, Standard repayment, or a PSLF strategy is the realistic path.',
  },
  {
    question: 'Does an IBR calculation use AGI that includes capital gains?',
    answer: 'IBR estimates usually start with adjusted gross income from tax information, and capital gains can be part of AGI. If the tax year included unusual income, compare the tax-return estimate with any current-income documentation allowed by the official IDR process.',
  },
  {
    question: 'How do I estimate PAYE with AGI and dependents?',
    answer: 'Use AGI and household size as the starting point for a PAYE estimate, then compare PAYE with IBR, RAP, and the standard payment cap. Dependents can reduce discretionary income through household size, but eligibility and borrower history still matter.',
  },
  {
    question: 'Can RAP payments count for PSLF?',
    answer: 'RAP may be part of a PSLF strategy if the borrower has eligible loans, qualifying employment, and payments that meet PSLF rules. PSLF borrowers should verify plan treatment through StudentAid.gov and their servicer before switching.',
  },
  {
    question: 'What if I am in student loan default in 2026?',
    answer: 'Do not wait. Review official default resolution options such as rehabilitation and consolidation, then contact the Default Resolution Group or your loan holder. Getting out of default can restore access to repayment options and reduce collection consequences.',
  },
  {
    question: 'Is the Standard plan safer than IDR?',
    answer: 'Standard repayment can be simpler and may reduce total interest if you can afford the bill. IDR may be safer for cash flow, PSLF, or high debt-to-income situations. The safer choice depends on monthly affordability, forgiveness goals, and loan type.',
  },
  {
    question: 'Which calculator should I use first?',
    answer: 'Use the SAVE deadline calculator if you received a servicer notice. Use the IDR calculator if you need payment estimates. Use the recommendation tool if you are deciding which plans deserve your first comparison.',
  },
];

const quickLinks = [
  {
    title: 'Calculate a SAVE deadline',
    href: '/save-90-day-deadline-calculator',
    description: 'Enter your servicer notice date and estimate your 90-day planning deadline.',
  },
  {
    title: 'Compare RAP, IBR, PAYE, and ICR',
    href: '/income-driven-repayment-calculator',
    description: 'Run payment estimates using income, family size, balance, and interest rate.',
  },
  {
    title: 'Find which plan to compare first',
    href: '/repayment-plan-recommendation',
    description: 'Answer a short flow for PSLF, Parent PLUS, and income-driven repayment scenarios.',
  },
  {
    title: 'Check Parent PLUS questions',
    href: '/parent-plus-rap-eligibility',
    description: 'Sort out Parent PLUS, consolidation, ICR, RAP, and PSLF considerations.',
  },
  {
    title: 'Estimate PAYE with AGI',
    href: '/paye-payment-calculator',
    description: 'Compare PAYE when AGI, household size, dependents, or PSLF affect the estimate.',
  },
  {
    title: 'Check IBR income inputs',
    href: '/income-based-repayment-calculator',
    description: 'Review how IBR estimates use AGI, household size, and unusual tax-year income.',
  },
];

const sources = [
  officialStudentLoanSources.edRapFactSheet,
  officialStudentLoanSources.studentAidRepaymentPlans,
  officialStudentLoanSources.idrApplication,
  officialStudentLoanSources.pslfHelpTool,
  officialStudentLoanSources.consolidation,
  officialStudentLoanSources.defaultResolution,
  officialStudentLoanSources.irsStudentLoans,
];

export const metadata: Metadata = {
  title: 'Student Loan FAQ 2026 - SAVE, RAP, IBR, PSLF and Parent PLUS',
  description: 'Fast answers to common 2026 student loan repayment questions about SAVE ending, RAP vs IBR, Parent PLUS, PSLF, default, and repayment calculators.',
  keywords: [
    'student loan FAQ 2026',
    'SAVE ending what should I do',
    'RAP vs IBR',
    'Parent PLUS RAP eligibility',
    'IBR AGI capital gains',
    'PAYE AGI dependents',
    'IDR deadline calculator',
    'PSLF RAP qualifying payments',
    'student loan default rehabilitation 2026',
  ],
  alternates: {
    canonical: '/student-loan-faq/',
  },
  openGraph: {
    title: 'Student Loan FAQ 2026',
    description: 'Quick answers and next-step tools for SAVE, RAP, IBR, PSLF, Parent PLUS, and default questions.',
    url: 'https://repaymentguide.com/student-loan-faq/',
  },
};

export default function StudentLoanFaqPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
                2026 student loan question library
              </p>
              <h1 className="mb-5 text-4xl font-bold md:text-5xl">Student Loan FAQ: SAVE, RAP, IBR, PSLF, Parent PLUS and Default</h1>
              <p className="max-w-3xl text-xl text-slate-100">
                Fast, plain-English answers for borrowers who need to choose a repayment plan, avoid a missed deadline, or understand which official tool to use next.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-8">
                <section className="rounded-2xl border bg-white p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">Start with the question closest to your situation</h2>
                  <div className="divide-y">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group py-4">
                        <summary className="cursor-pointer list-none font-semibold text-gray-900">
                          <span className="mr-2 text-primary-700">Q.</span>
                          {faq.question}
                        </summary>
                        <p className="mt-3 pl-7 leading-relaxed text-gray-700">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border bg-primary-50 p-6">
                  <h2 className="mb-4 text-2xl font-bold text-primary-950">Common next steps</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {quickLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="rounded-xl border bg-white p-5 transition hover:border-primary-300 hover:shadow-sm">
                        <h3 className="font-bold text-gray-900">{link.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{link.description}</p>
                      </Link>
                    ))}
                  </div>
                </section>

                <FinancialDisclaimer />
              </div>

              <aside className="space-y-6">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                  <h2 className="text-xl font-bold">Do not wait until the last week</h2>
                  <p className="mt-3 text-sm leading-relaxed">
                    If you received a SAVE transition notice, compare plans and submit your choice early enough for servicer processing. Save screenshots or confirmation numbers after submitting.
                  </p>
                  <Link href="/save-90-day-deadline-calculator" className="mt-4 inline-block rounded-lg bg-amber-900 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-950">
                    Estimate your deadline
                  </Link>
                </div>

                <OfficialSources sources={sources} title="Official sources to verify" />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
