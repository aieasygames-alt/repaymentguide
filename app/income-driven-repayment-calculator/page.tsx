import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';

export const metadata: Metadata = {
  title: 'IDR Calculator - Find the Best Income-Driven Repayment Plan',
  description: 'Calculate payments under SAVE, PAYE, IBR, and ICR plans. Find which income-driven repayment plan saves you the most money.',
  keywords: ['IDR calculator', 'income driven repayment', 'SAVE', 'PAYE', 'IBR', 'ICR'],
  openGraph: {
    title: 'IDR Calculator - Compare All Plans',
    description: 'Find the best income-driven repayment plan',
    url: 'https://repaymentguide.com/income-driven-repayment-calculator',
  },
};

export default function IdrCalculatorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Income-Driven Repayment Calculator</h1>
          <p className="text-xl text-gray-600 mb-8">
            Compare all IDR plans and find which one saves you the most.
          </p>
          <IdrComparison />

          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Which IDR Plan Should You Choose?</h2>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Choose SAVE if:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>You have undergraduate loans (when plan becomes available)</li>
                  <li>You want the lowest monthly payments (5% discretionary income)</li>
                  <li>You want loan forgiveness in 10 years</li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Choose PAYE if:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>You're a newer borrower (loans after Oct 2007 & 2011)</li>
                  <li>You want a payment cap to protect future income growth</li>
                  <li>You have graduate loans</li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Choose IBR if:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>You have older loans (before Oct 2007)</li>
                  <li>You don't qualify for PAYE</li>
                  <li>You want to exclude spouse income by filing separately</li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Choose ICR if:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>You have Parent PLUS loans</li>
                  <li>You consolidate Parent PLUS loans into Direct Consolidation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
