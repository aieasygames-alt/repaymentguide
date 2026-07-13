import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'My SAVE payment was $0. What should I compare first?',
    answer: 'Start by calculating your SAVE response deadline, then compare RAP, IBR, PAYE, and ICR. RAP has a minimum payment, while legacy IDR plans may produce lower payments for some low-income borrowers.',
  },
  {
    question: 'I am pursuing PSLF. Should I pick the lowest payment?',
    answer: 'Not automatically. PSLF borrowers should verify that the plan, loan type, employer, and monthly payment count are PSLF-safe before choosing based only on the lowest estimate.',
  },
  {
    question: 'I have Parent PLUS loans. Can I use RAP?',
    answer: 'Parent PLUS and consolidation loans that include Parent PLUS require separate review. Do not assume RAP applies before checking loan type and consolidation history.',
  },
  {
    question: 'I am in default. Should I choose RAP first?',
    answer: 'Resolve default first by comparing rehabilitation and consolidation. After returning to good standing, compare available repayment plans including RAP, IBR, PAYE, ICR, and Standard repayment.',
  },
];

const scenarios = [
  {
    title: 'My SAVE payment was $0. RAP says I owe money now.',
    summary: 'This is common because RAP uses AGI tiers and has a minimum payment. Compare IBR/PAYE before assuming RAP is your best replacement.',
    links: [
      { href: '/save-ending-what-should-i-do', label: 'SAVE next steps' },
      { href: '/rap-payment-calculator', label: 'Estimate RAP' },
      { href: '/ibr-vs-rap', label: 'Compare IBR vs RAP' },
    ],
  },
  {
    title: 'I got a SAVE notice and have 90 days.',
    summary: 'Save the notice, calculate the date, add reminders, compare plans, and submit early enough for servicer processing.',
    links: [
      { href: '/save-90-day-deadline-calculator', label: 'Calculate deadline' },
      { href: '/repayment-plan-recommendation', label: 'Get plan path' },
      { href: '/rap-vs-save-calculator', label: 'RAP vs SAVE' },
    ],
  },
  {
    title: 'I work in public service and want PSLF.',
    summary: 'Payment amount matters, but qualifying payment treatment matters more. Verify Direct Loan status, employer certification, and payment counts.',
    links: [
      { href: '/pslf-rap-qualifying-payments', label: 'RAP and PSLF' },
      { href: '/pslf-calculator', label: 'PSLF calculator' },
      { href: 'https://studentaid.gov/pslf', label: 'PSLF Help Tool' },
    ],
  },
  {
    title: 'I am married and considering filing separately.',
    summary: 'Run the tax and loan math together. A lower payment can be outweighed by higher taxes or lost deductions.',
    links: [
      { href: '/married-filing-separately-student-loans-rap', label: 'MFS and RAP guide' },
      { href: '/income-driven-repayment-calculator', label: 'Compare IDR plans' },
      { href: '/blog/married-borrowers-repayment-strategy', label: 'Married borrower guide' },
    ],
  },
  {
    title: 'I have Parent PLUS loans.',
    summary: 'Parent PLUS repayment is its own lane. Check consolidation history before assuming RAP, IBR, or PAYE applies.',
    links: [
      { href: '/parent-plus-rap-eligibility', label: 'Parent PLUS checker' },
      { href: '/blog/parent-plus-loan-repayment-options', label: 'Parent PLUS guide' },
      { href: '/repayment-plan-recommendation', label: 'Get plan path' },
    ],
  },
  {
    title: 'My loans are in default.',
    summary: 'Default resolution comes before plan optimization. Compare rehabilitation vs consolidation, then choose the post-default repayment path.',
    links: [
      { href: '/student-loan-default-rehabilitation-2026', label: 'Default guide' },
      { href: 'https://studentaid.gov/manage-loans/default', label: 'Official default options' },
      { href: '/repayment-plan-recommendation', label: 'Plan after default' },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Scenarios: What Should I Do Next?',
  description: 'Find the right next step for common 2026 student loan scenarios: SAVE ending, RAP payment shock, PSLF, Parent PLUS, married filing separately, and default.',
  keywords: ['student loan scenarios', 'SAVE ending what should I do', 'RAP payment changed', 'student loan help 2026'],
  alternates: { canonical: '/student-loan-scenarios/' },
  openGraph: {
    title: 'Student Loan Scenarios: What Should I Do Next?',
    description: 'A scenario-based guide for 2026 repayment decisions.',
    url: 'https://repaymentguide.com/student-loan-scenarios/',
  },
};

export default function StudentLoanScenariosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-50 to-primary-100 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">Borrower question library</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Student Loan Scenarios: What Should I Do Next?</h1>
              <p className="max-w-3xl text-xl text-gray-700">Start with the situation that sounds most like you. Each scenario points to the calculator or guide that should come next.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />

            <div className="grid gap-6 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <section key={scenario.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">{scenario.title}</h2>
                  <p className="mt-3 text-gray-700">{scenario.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {scenario.links.map((link) => (
                      link.href.startsWith('http') ? (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200">
                          {link.label}
                        </a>
                      ) : (
                        <Link key={link.href} href={link.href} className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-100">
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <OfficialSources sources={[officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.idrApplication, officialStudentLoanSources.pslfHelpTool, officialStudentLoanSources.defaultResolution]} title="Official sources to verify your scenario" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
