import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
              Calculate payments, compare IDR plans, and estimate PSLF forgiveness with our free tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/student-loan-payment-calculator" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Calculate Payments
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold mb-2">SAVE Alternatives</h3>
                <p className="text-gray-600">Compare SAVE with other IDR plans to find your best option.</p>
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
