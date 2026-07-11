import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About RepaymentGuide - Student Loan Repayment Experts',
  description: 'Learn about RepaymentGuide\'s mission to help student loan borrowers make informed repayment decisions.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About RepaymentGuide',
    description: 'Our mission is to make student loan repayment simple and accessible for everyone.',
    url: 'https://repaymentguide.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About RepaymentGuide</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Making student loan repayment simple, transparent, and accessible for everyone.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Mission */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At RepaymentGuide, we believe that navigating student loan repayment shouldn't require a finance degree.
                Our mission is to provide clear, accurate, and actionable information that helps borrowers make informed
                decisions about their student loans.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We understand that student loan repayment is one of the most significant financial decisions
                you'll make. That's why we've built free tools and resources to help you understand your options,
                compare plans, and choose the path that's best for your situation.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Free Calculators</h3>
                  <p className="text-gray-600">
                    Accurate tools to estimate payments under different repayment plans and understand your options.
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Clear Explanations</h3>
                  <p className="text-gray-600">
                    Simple breakdowns of complex topics like IDR plans, PSLF, and loan forgiveness.
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Up-to-Date Information</h3>
                  <p className="text-gray-600">
                    Current information on SAVE plan changes, new policies, and repayment updates.
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Actionable Guidance</h3>
                  <p className="text-gray-600">
                    Step-by-step guides to help you apply for programs and manage your loans effectively.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Approach */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accuracy First</h3>
                    <p className="text-gray-600">
                      Our calculators use the latest federal formulas and guidelines to provide accurate estimates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparency</h3>
                    <p className="text-gray-600">
                      We clearly explain our methodology and cite official sources so you can verify the information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">User-Centered</h3>
                    <p className="text-gray-600">
                      Designed by borrowers, for borrowers. We focus on what you actually need to know.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Independence</h3>
                    <p className="text-gray-600">
                      Not affiliated with loan servicers or lenders. We're here to help you, not sell you anything.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Take Control?</h3>
              <p className="text-primary-100 mb-6 max-w-xl mx-auto">
                Start by using our free calculators to understand your options and create a repayment strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/student-loan-payment-calculator"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Calculate Payments
                </a>
                <a
                  href="/income-driven-repayment-calculator"
                  className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition"
                >
                  Compare IDR Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
