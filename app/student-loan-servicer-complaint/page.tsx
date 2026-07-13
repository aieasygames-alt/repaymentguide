import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudentLoanComplaintBuilder from '@/components/StudentLoanComplaintBuilder';
import { FAQSchema } from '@/components/FAQSchema';
import { ArticleTrustSummary, FinancialDisclaimer, OfficialSources, officialStudentLoanSources } from '@/components/TrustSignals';

const faqs = [
  {
    question: 'When should I file a student loan servicer complaint?',
    answer: 'File a complaint after you have tried to get a clear answer from your servicer and the issue still affects your payment, deadline, repayment plan, PSLF credit, loan status, or account accuracy.',
  },
  {
    question: 'Should I use Federal Student Aid or CFPB for a servicer complaint?',
    answer: 'Use Federal Student Aid for federal aid and federal student loan account issues. CFPB also accepts student loan complaints and routes them to companies for response. Some borrowers may use both, but keep each complaint factual and consistent.',
  },
  {
    question: 'What should I include in a student loan servicer complaint?',
    answer: 'Include a short summary, dates, payment amounts, deadlines, confirmation numbers, screenshots or notices, and the exact outcome you want, such as a written eligibility decision or payment correction.',
  },
];

const escalationSteps = [
  {
    title: '1. Make one clear written request first',
    body: 'Ask your servicer for the deadline, available repayment plans, payment estimates, and the next action required. A clear written request creates a record if the answer is delayed or incomplete.',
    link: { href: '/servicer-contact-toolkit', label: 'Use the servicer toolkit' },
  },
  {
    title: '2. Build a dated evidence packet',
    body: 'Save notices, account screenshots, call notes, confirmation numbers, application confirmations, and any dollar amount affected. Complaints work better when they show dates and facts instead of only frustration.',
    link: { href: '#complaint-builder', label: 'Build complaint packet' },
  },
  {
    title: '3. Submit through the right channel',
    body: 'Federal Student Aid provides a feedback and ombudsman path for federal student aid issues. CFPB says most companies respond within 15 days, with some final responses taking up to 60 days.',
    link: { href: '#official-channels', label: 'Compare official channels' },
  },
  {
    title: '4. Track the case and keep acting on deadlines',
    body: 'A complaint does not automatically pause payments, deadlines, interest, or required forms. Keep following official account instructions unless your servicer or StudentAid.gov confirms a different action in writing.',
    link: { href: '/save-90-day-deadline-calculator', label: 'Track a deadline' },
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Servicer Complaint Guide: What to Include',
  description: 'Build a student loan servicer complaint packet, compare FSA and CFPB channels, and organize proof for payment, PSLF, SAVE, RAP, or IDR issues.',
  keywords: ['student loan servicer complaint', 'file complaint student loan servicer', 'FSA complaint student loans', 'CFPB student loan complaint'],
  alternates: { canonical: '/student-loan-servicer-complaint/' },
  openGraph: {
    title: 'Student Loan Servicer Complaint Guide',
    description: 'Build a complaint packet for unresolved student loan servicing issues.',
    url: 'https://repaymentguide.com/student-loan-servicer-complaint/',
  },
};

export default function StudentLoanServicerComplaintPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-rose-50 via-amber-50 to-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-200">Escalation guide</p>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Student Loan Servicer Complaint: What to Include and Where to File</h1>
              <p className="max-w-3xl text-xl text-gray-700">If your servicer answer is unclear, late, or inconsistent, turn the problem into a dated complaint packet before escalating to Federal Student Aid, CFPB, or another official channel.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="#complaint-builder" className="rounded-xl bg-rose-700 px-5 py-3 text-center font-semibold text-white hover:bg-rose-800">Build complaint packet</Link>
                <Link href="/servicer-contact-toolkit" className="rounded-xl border border-rose-200 bg-white px-5 py-3 text-center font-semibold text-rose-800 hover:bg-rose-50">Contact servicer first</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl space-y-8">
            <ArticleTrustSummary published="2026-07-13" updated="2026-07-13" policyReviewed="2026-07-13" />
            <FinancialDisclaimer />

            <section className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quick answer</h2>
              <p className="mt-3 text-gray-700">A strong student loan servicer complaint should include five things: the company name, the issue, key dates, dollar amounts or deadlines affected, and the exact correction you want. Keep it factual, attach proof, and continue watching payment or application deadlines while the complaint is pending.</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              {escalationSteps.map((step) => (
                <article key={step.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
                  <p className="mt-3 text-gray-700">{step.body}</p>
                  <Link href={step.link.href} className="mt-4 inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-100">{step.link.label}</Link>
                </article>
              ))}
            </section>

            <section id="official-channels" className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Federal Student Aid vs CFPB complaint channels</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="border p-3">Channel</th>
                      <th className="border p-3">Use it when</th>
                      <th className="border p-3">What to expect</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border p-3 font-semibold text-gray-900">Federal Student Aid Feedback Center</td>
                      <td className="border p-3">The issue involves federal loans, repayment plan processing, forgiveness, loan status, or a StudentAid.gov-related case.</td>
                      <td className="border p-3">FSA describes a process to submit feedback, upload supporting documents, track cases, and seek escalated review when available.</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-semibold text-gray-900">Consumer Financial Protection Bureau</td>
                      <td className="border p-3">The issue is with a financial company or servicer response, billing, credit reporting, collection, or complaint handling.</td>
                      <td className="border p-3">CFPB says it sends complaints to companies for response; most companies respond within 15 days, with some final responses taking up to 60 days.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="complaint-builder">
              <StudentLoanComplaintBuilder />
            </section>

            <section className="rounded-3xl border bg-amber-50 p-6 text-amber-950">
              <h2 className="text-2xl font-bold">Do not wait for a complaint to protect a deadline</h2>
              <p className="mt-3">If a payment due date, IDR application deadline, SAVE transition window, PSLF certification, or default resolution step is approaching, keep working the official process while the complaint is pending. A complaint can create accountability, but it is not the same as an approved deferment, forbearance, plan change, or forgiveness decision.</p>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <Link href="/save-ending-what-should-i-do" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">SAVE next steps</h2><p className="mt-2 text-gray-600">Handle the plan transition before deadlines pile up.</p></Link>
              <Link href="/pslf-rap-qualifying-payments" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">PSLF and RAP</h2><p className="mt-2 text-gray-600">Check payment-count risks before switching plans.</p></Link>
              <Link href="/student-loan-scenarios" className="rounded-3xl border bg-white p-6 transition hover:shadow-md"><h2 className="text-xl font-bold text-gray-900">Borrower scenarios</h2><p className="mt-2 text-gray-600">Find the guide that matches your situation.</p></Link>
            </section>

            <OfficialSources sources={[officialStudentLoanSources.fsaFeedbackCenter, officialStudentLoanSources.cfpbComplaint, officialStudentLoanSources.studentAidRepaymentPlans, officialStudentLoanSources.pslfHelpTool]} title="Official complaint and repayment sources" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
