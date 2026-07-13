import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Student Loan Repayment Made Simple
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Calculate payments, compare RAP and legacy IDR plans, and estimate PSLF forgiveness with our free tools.
            </p>
            <div className="max-w-3xl mx-auto mb-8 bg-white/90 border border-primary-200 rounded-lg p-4 text-left shadow-sm">
              <p className="text-sm font-semibold text-primary-800 mb-1">2026 SAVE transition update</p>
              <p className="text-gray-700">
                SAVE borrowers are being notified to choose another plan within 90 days. Compare RAP, IBR, PAYE, ICR, and standard repayment before your servicer deadline.
              </p>
              <Link href="/student-loan-changes-2026" className="inline-block mt-2 text-primary-700 font-semibold hover:text-primary-800">
                Start with the 2026 changes guide →
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rap-payment-calculator" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Calculate RAP Payment
              </Link>
              <Link href="/income-driven-repayment-calculator" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border border-primary-600">
                Compare IDR Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Free Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <Link href="/rap-payment-calculator" className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V7a4 4 0 018 0v4m-2 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m-6-6h6m-6 4h4m-4 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">RAP Calculator</h3>
                <p className="text-gray-600">Estimate your RAP payment, dependent reduction, interest waiver, and principal match.</p>
              </Link>

              <Link href="/student-loan-payment-calculator" className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Payment Calculator</h3>
                <p className="text-gray-600">Calculate your monthly payment under different repayment plans.</p>
              </Link>

              <Link href="/save-plan-calculator" className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">SAVE Transition</h3>
                <p className="text-gray-600">Compare RAP, IBR, PAYE, ICR, and standard options after SAVE.</p>
              </Link>

              <Link href="/income-driven-repayment-calculator" className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">IDR Calculator</h3>
                <p className="text-gray-600">Find which income-driven repayment plan saves you the most.</p>
              </Link>

              <Link href="/pslf-calculator" className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">PSLF Calculator</h3>
                <p className="text-gray-600">Estimate your Public Service Loan Forgiveness amount.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700">Popular borrower questions</p>
              <h2 className="text-3xl font-bold text-gray-900">Not sure where to start?</h2>
              <p className="mt-4 text-gray-600">
                Start with short answers for SAVE deadlines, RAP vs IBR, Parent PLUS, PSLF, default, and married filing separately scenarios.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/student-loan-faq" className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">Student Loan FAQ</Link>
                <Link href="/student-loan-scenarios" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">Borrower Scenarios</Link>
                <Link href="/save-ending-what-should-i-do" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">SAVE Next Steps</Link>
                <Link href="/rap-vs-save-calculator" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">RAP vs SAVE</Link>
                <Link href="/ibr-vs-rap" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">IBR vs RAP</Link>
                <Link href="/pslf-rap-qualifying-payments" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">RAP and PSLF</Link>
                <Link href="/married-filing-separately-student-loans-rap" className="rounded-lg border bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">Married Filing Separately</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to optimize your repayment?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Use our free calculators to understand your options and make informed decisions about your student loans.
            </p>
            <Link href="/student-loan-payment-calculator" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
