import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getBlogImage } from '@/lib/blog-images';

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
    title: 'SAVE Is Ending: RAP vs SAVE and Your 90-Day Checklist',
    excerpt: 'SAVE borrowers are entering a 2026 transition window. Compare RAP, IBR, PAYE, ICR, and Tiered Standard before your servicer deadline.',
    date: '2026-07-01',
    slug: 'save-ending-rap-vs-save-2026',
  },
  {
    title: 'Understanding SAVE Plan Alternatives',
    excerpt: 'With SAVE ended by court order, learn about RAP, PAYE, IBR, ICR, and Tiered Standard alternatives.',
    date: '2025-06-01',
    slug: 'save-plan-alternatives',
  },
  {
    title: 'PSLF Application Guide',
    excerpt: 'Step-by-step guide to applying for Public Service Loan Forgiveness with payment tracking.',
    date: '2025-05-15',
    slug: 'pslf-application-guide',
  },
  {
    title: 'IDR Plan Comparison: Which Saves You the Most?',
    excerpt: 'Compare SAVE, PAYE, IBR, and ICR to find your best option with payment examples.',
    date: '2025-05-01',
    slug: 'idr-plan-comparison',
  },
  {
    title: 'Student Loan Refinancing vs Consolidation',
    excerpt: 'Understand the key differences between refinancing and consolidating student loans.',
    date: '2025-04-15',
    slug: 'student-loan-refinancing-vs-consolidation',
  },
  {
    title: 'Parent PLUS Loan Repayment Options',
    excerpt: 'Complete guide to repaying Parent PLUS loans, from ICR to PSLF strategies.',
    date: '2025-04-01',
    slug: 'parent-plus-loan-repayment-options',
  },
  {
    title: 'Student Loan Default Rehabilitation',
    excerpt: 'Step-by-step guide to getting out of default through rehabilitation and consolidation.',
    date: '2025-03-20',
    slug: 'student-loan-default-rehabilitation',
  },
  {
    title: 'Deferment vs Forbearance: When to Use Each',
    excerpt: 'Understand the differences between student loan deferment and forbearance options.',
    date: '2025-03-10',
    slug: 'deferment-vs-forbearance',
  },
  {
    title: 'Student Loan Forgiveness Programs',
    excerpt: 'Complete guide to all forgiveness programs from PSLF to IDR and teacher options.',
    date: '2025-02-28',
    slug: 'student-loan-forgiveness-programs',
  },
  {
    title: 'Student Loan Consolidation Guide',
    excerpt: 'When and how to consolidate federal student loans, including process and what to watch out for.',
    date: '2025-02-15',
    slug: 'student-loan-consolidation-guide',
  },
  {
    title: 'Married Borrowers: Repayment Strategies',
    excerpt: 'How marriage affects student loan repayment, from tax filing to IDR plan options.',
    date: '2025-02-01',
    slug: 'married-borrowers-repayment-strategy',
  },
  {
    title: 'Student Loan Tax Implications',
    excerpt: 'Understanding tax consequences of loan forgiveness, interest deductions, and employer assistance.',
    date: '2025-01-20',
    slug: 'student-loan-tax-implications',
  },
  {
    title: 'Recent Graduate Repayment Guide',
    excerpt: 'Complete guide for new graduates on managing student loans from grace period to repayment plans.',
    date: '2025-01-10',
    slug: 'recent-graduate-repayment-guide',
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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image
                    src={getBlogImage(post.slug)}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
