import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PslfCalculator from '@/components/PslfCalculator';

export const metadata: Metadata = {
  title: 'PSLF Calculator - Public Service Loan Forgiveness Estimator',
  description: 'Estimate your Public Service Loan Forgiveness amount. Track your progress toward 120 qualifying payments.',
  keywords: ['PSLF calculator', 'public service loan forgiveness', 'loan forgiveness', 'PSLF'],
  openGraph: {
    title: 'PSLF Calculator - Estimate Your Forgiveness',
    description: 'Calculate your Public Service Loan Forgiveness amount',
    url: 'https://repaymentguide.com/pslf-calculator',
  },
};

export default function PslfCalculatorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">PSLF Calculator</h1>
          <p className="text-xl text-gray-600 mb-8">
            Estimate your Public Service Loan Forgiveness amount and track your progress.
          </p>
          <PslfCalculator />

          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About PSLF</h2>
            <div className="bg-white border rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                The Public Service Loan Forgiveness (PSLF) program forgives the remaining balance on
                your Direct Loans after you make 120 qualifying monthly payments under a qualifying
                repayment plan while working full-time for a qualifying employer.
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Qualifying Employment</h3>
                  <p className="text-sm text-gray-600">
                    Government organizations (federal, state, local, tribal) and 501(c)(3) nonprofit
                    organizations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Qualifying Loans</h3>
                  <p className="text-sm text-gray-600">
                    Direct Loans only. FFEL and Perkins loans must be consolidated into Direct Loans.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Qualifying Payments</h3>
                  <p className="text-sm text-gray-600">
                    120 monthly payments (10 years) under an income-driven repayment plan, made in full
                    and on time, while employed full-time (30+ hours/week).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">IDR Account Adjustment (2024)</h3>
              <p className="text-sm text-blue-800">
                Many borrowers received payment count adjustments in 2024, moving them closer to
                forgiveness. Check your payment count on StudentAid.gov to see your updated status.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
