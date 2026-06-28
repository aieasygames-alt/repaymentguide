import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentCalculator from '@/components/PaymentCalculator';

export const metadata: Metadata = {
  title: 'Student Loan Payment Calculator - Calculate Monthly Payments',
  description: 'Calculate your monthly student loan payments under different repayment plans. Compare standard, graduated, and extended repayment options.',
  keywords: ['student loan payment calculator', 'monthly payment', 'loan calculator'],
  openGraph: {
    title: 'Student Loan Payment Calculator',
    description: 'Calculate your monthly student loan payments',
    url: 'https://repaymentguide.com/student-loan-payment-calculator',
  },
};

export default function PaymentCalculatorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Student Loan Payment Calculator</h1>
          <p className="text-xl text-gray-600 mb-8">
            Calculate your monthly payments under standard federal repayment plans.
          </p>
          <PaymentCalculator />

          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Understanding Repayment Plans</h2>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Standard 10-Year</h3>
                <p className="text-gray-600 text-sm">
                  Fixed monthly payments over 10 years. Pays off loans fastest with least interest.
                </p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Standard 20-Year</h3>
                <p className="text-gray-600 text-sm">
                  For loans over $30,000. Fixed payments over 20 years with lower monthly payments.
                </p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Graduated 10-Year</h3>
                <p className="text-gray-600 text-sm">
                  Payments start low and increase every 2 years. Good if you expect income growth.
                </p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Extended 25-Year</h3>
                <p className="text-gray-600 text-sm">
                  For loans over $30,000. Lowest monthly payments but most interest paid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
