import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Student Loan Repayment Guides & Tips',
  description: 'Expert guides on student loan repayment, IDR plans, PSLF, and saving money on your student loans.',
  keywords: ['student loan blog', 'repayment tips', 'IDR guides', 'PSLF help'],
  openGraph: {
    title: 'RepaymentGuide Blog',
    description: 'Student loan repayment guides and tips',
    url: 'https://repaymentguide.com/blog',
  },
};

const blogPosts = [
  {
    title: 'Understanding SAVE Plan Alternatives',
    excerpt: 'With SAVE plan changes, learn about your other IDR options.',
    date: '2024-06-01',
    slug: 'save-plan-alternatives',
  },
  {
    title: 'PSLF Application Guide',
    excerpt: 'Step-by-step guide to applying for Public Service Loan Forgiveness.',
    date: '2024-05-15',
    slug: 'pslf-application-guide',
  },
  {
    title: 'IDR Plan Comparison',
    excerpt: 'Compare SAVE, PAYE, IBR, and ICR to find your best option.',
    date: '2024-05-01',
    slug: 'idr-plan-comparison',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Student Loan Repayment Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert guides and tips to help you navigate student loan repayment.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-gray-50 border rounded-lg p-8 text-center mt-8">
            <p className="text-gray-500">More articles coming in Phase 6</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
