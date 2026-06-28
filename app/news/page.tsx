import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAVE Plan News & Updates - Latest Student Loan News',
  description: 'Stay updated on SAVE plan changes, student loan news, and repayment policy updates.',
  keywords: ['SAVE plan news', 'student loan updates', 'IDR news', 'PSLF updates'],
  openGraph: {
    title: 'SAVE Plan News & Updates',
    description: 'Latest student loan repayment news',
    url: 'https://repaymentguide.com/news',
  },
};

const newsItems = [
  {
    title: 'SAVE Plan Legal Challenges Continue',
    excerpt: 'Courts block SAVE plan implementation as legal battles continue.',
    date: '2024-06-15',
    category: 'SAVE Plan',
  },
  {
    title: 'New IDR Application Processing Delays',
    excerpt: 'Student loan servicers report extended processing times for IDR applications.',
    date: '2024-06-10',
    category: 'Processing',
  },
  {
    title: 'PSLF Payment Count Updates',
    excerpt: 'Borrowers continue to receive adjusted payment counts under the IDR account adjustment.',
    date: '2024-06-05',
    category: 'PSLF',
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">SAVE Plan News & Updates</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay informed about the latest developments in student loan repayment.
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="bg-gray-50 border rounded-lg p-8 text-center mt-8">
            <p className="text-gray-500">News updates will be implemented in Phase 13</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
