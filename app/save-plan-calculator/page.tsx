import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdrComparison from '@/components/IdrComparison';

export const metadata: Metadata = {
  title: 'SAVE Plan Calculator & Alternatives - Compare IDR Plans',
  description: 'Compare SAVE plan with PAYE, IBR, and ICR. Find the best income-driven repayment plan for your student loans.',
  keywords: ['SAVE plan', 'IDR plans', 'PAYE', 'IBR', 'ICR', 'income driven repayment'],
  openGraph: {
    title: 'SAVE Plan Calculator & Alternatives',
    description: 'Compare SAVE with other IDR plans',
    url: 'https://repaymentguide.com/save-plan-calculator',
  },
};

export default function SavePlanCalculatorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">SAVE Plan Alternatives</h1>
          <p className="text-xl text-gray-600 mb-8">
            With SAVE plan blocked by courts, compare your income-driven repayment options.
          </p>
          <IdrComparison />

          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">SAVE Plan Status</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-red-900 mb-2">Court Order Block (2024)</h3>
              <p className="text-red-800">
                The SAVE plan is currently blocked by court orders. The Department of Education has
                placed borrowers in SAVE on a forbearance with $0 payments until legal challenges are resolved.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">IDR Plan Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Plan</th>
                    <th className="border p-3 text-left">Payment %</th>
                    <th className="border p-3 text-left">Forgiveness</th>
                    <th className="border p-3 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">SAVE</td>
                    <td className="border p-3">5% (undergrad)</td>
                    <td className="border p-3">10-20 years</td>
                    <td className="border p-3">Undergrad borrowers (when available)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-semibold">PAYE</td>
                    <td className="border p-3">10%</td>
                    <td className="border p-3">20 years</td>
                    <td className="border p-3">Newer borrowers with high debt</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">IBR</td>
                    <td className="border p-3">10-15%</td>
                    <td className="border p-3">20-25 years</td>
                    <td className="border p-3">Borrowers with older loans</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-semibold">ICR</td>
                    <td className="border p-3">20%</td>
                    <td className="border p-3">25 years</td>
                    <td className="border p-3">Parent PLUS borrowers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
