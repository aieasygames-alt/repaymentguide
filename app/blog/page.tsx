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
  alternates: {
    canonical: '/blog/',
  },
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
    excerpt: 'Compare RAP, PAYE, IBR, and ICR to find your best current option with payment examples.',
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

const topicClusters = [
  {
    title: 'Repayment plan decisions',
    description: 'Use these guides when you are comparing IDR, RAP, IBR, consolidation, refinancing, or the first bill after SAVE.',
    links: [
      { href: '/blog/idr-plan-comparison', label: 'IDR plan comparison' },
      { href: '/blog/save-plan-alternatives', label: 'SAVE alternatives' },
      { href: '/blog/student-loan-consolidation-guide', label: 'Consolidation guide' },
      { href: '/blog/student-loan-refinancing-vs-consolidation', label: 'Refinancing vs consolidation' },
    ],
  },
  {
    title: 'Borrower situations',
    description: 'These articles cover borrower-specific questions where the right plan depends on who borrowed, marital status, or career stage.',
    links: [
      { href: '/blog/parent-plus-loan-repayment-options', label: 'Parent PLUS options' },
      { href: '/blog/married-borrowers-repayment-strategy', label: 'Married borrower strategy' },
      { href: '/blog/recent-graduate-repayment-guide', label: 'Recent graduate guide' },
      { href: '/student-loan-scenarios', label: 'Scenario library' },
    ],
  },
  {
    title: 'Forgiveness, tax, and relief',
    description: 'Use these when you need to protect forgiveness credit, understand tax effects, or choose temporary relief carefully.',
    links: [
      { href: '/blog/pslf-application-guide', label: 'PSLF application guide' },
      { href: '/blog/student-loan-forgiveness-programs', label: 'Forgiveness programs' },
      { href: '/blog/student-loan-tax-implications', label: 'Tax implications' },
      { href: '/blog/deferment-vs-forbearance', label: 'Deferment vs forbearance' },
      { href: '/blog/student-loan-default-rehabilitation', label: 'Default rehabilitation' },
    ],
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

          <section className="mb-10 rounded-2xl border bg-primary-50 p-6">
            <h2 className="text-2xl font-bold text-primary-950">Find the right student loan guide faster</h2>
            <p className="mt-3 max-w-3xl text-primary-900">
              Start with your repayment decision, borrower situation, or forgiveness question. These topic paths help you move from a broad article to the calculator, checklist, or official source that should come next.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {topicClusters.map((cluster) => (
                <div key={cluster.title} className="rounded-xl border bg-white p-5">
                  <h3 className="font-bold text-gray-900">{cluster.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{cluster.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cluster.links.map((link) => (
                      <Link key={link.href} href={link.href} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

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
