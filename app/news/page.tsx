import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '2026 Student Loan News - SAVE, RAP & Repayment Updates',
  description: 'Follow 2026 student loan repayment updates, including SAVE transition deadlines, RAP, IDR plans, PSLF, and borrower next steps.',
  keywords: ['2026 student loan news', 'SAVE plan news', 'RAP plan', 'student loan updates', 'IDR news', 'PSLF updates'],
  alternates: {
    canonical: '/news/',
  },
  openGraph: {
    title: '2026 Student Loan News & Updates',
    description: 'Latest student loan repayment news for SAVE, RAP, IDR, and PSLF borrowers',
    url: 'https://repaymentguide.com/news',
  },
};

const newsItems = [
  {
    title: 'SAVE Borrowers Face 2026 Repayment Transition',
    excerpt: 'SAVE borrowers should watch for servicer notices, compare RAP and legacy IDR options, and avoid missing plan selection deadlines.',
    date: '2026-07-11',
    category: 'SAVE Plan',
    relatedArticle: '/student-loan-changes-2026',
    actionText: 'Start with the 2026 changes guide'
  },
  {
    title: 'RAP Enters the Repayment Plan Comparison',
    excerpt: 'RAP is not a one-for-one SAVE replacement. Borrowers should compare the AGI-based formula against IBR, PAYE, ICR, and Standard repayment.',
    date: '2026-07-10',
    category: 'RAP',
    relatedArticle: '/income-driven-repayment-calculator',
    actionText: 'Compare RAP with IDR plans'
  },
  {
    title: 'PSLF Borrowers Should Check Plan Fit Before Switching',
    excerpt: 'PSLF borrowers need more than a low monthly payment. Confirm that your plan, employer, and qualifying payment strategy still align.',
    date: '2026-07-08',
    category: 'PSLF',
    relatedArticle: '/pslf-calculator',
    actionText: 'Estimate PSLF forgiveness'
  },
  {
    title: 'Parent PLUS Borrowers Need a Separate Strategy',
    excerpt: 'Parent PLUS borrowers and consolidation loans that include Parent PLUS loans can face different IDR eligibility rules than other borrowers.',
    date: '2026-07-06',
    category: 'Parent PLUS',
    relatedArticle: '/blog/parent-plus-loan-repayment-options',
    actionText: 'Review Parent PLUS options'
  },
  {
    title: 'Borrowers in Default Should Compare Rehabilitation and Consolidation',
    excerpt: 'Default recovery can affect credit reporting, collections, repayment plan access, and the timeline for getting back into good standing.',
    date: '2026-07-03',
    category: 'Default',
    relatedArticle: '/blog/student-loan-default-rehabilitation',
    actionText: 'Compare default recovery paths'
  },
  {
    title: 'Standard Repayment Can Surprise Borrowers Leaving SAVE',
    excerpt: 'A fixed repayment plan may be simple, but it can raise monthly bills and may not support every forgiveness strategy.',
    date: '2026-07-01',
    category: 'IDR Plans',
    relatedArticle: '/blog/save-ending-rap-vs-save-2026',
    actionText: 'Read the SAVE transition checklist'
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Loan News & Updates</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Stay informed about the latest developments in student loan repayment, policy changes, and borrower benefits.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Alert */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-900 mb-2">Important: 2026 Repayment Choices Are Active</h3>
                <p className="text-red-800 mb-3">
                  SAVE borrowers should watch for servicer notices and compare RAP, IBR, PAYE, ICR, and Standard repayment before choosing a new plan.
                </p>
                <Link href="/student-loan-changes-2026" className="text-red-700 hover:text-red-800 font-medium">
                  Open the 2026 changes guide →
                </Link>
              </div>
            </div>
          </div>

          {/* News Items */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link href={item.relatedArticle} className="text-primary-600 hover:text-primary-700 font-medium">
                  {item.actionText} →
                </Link>
              </article>
            ))}
          </div>

          {/* Policy Updates Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Policy Updates (2026)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">SAVE Transition</h3>
                <p className="text-gray-600 mb-3">
                  SAVE borrowers should compare replacement plans and track servicer deadlines before a default placement creates a payment surprise.
                </p>
                <Link href="/student-loan-changes-2026" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read the 2026 guide →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">RAP Comparison</h3>
                <p className="text-gray-600 mb-3">
                  RAP may lower payments for some borrowers, but the AGI-based formula, dependent adjustment, and timeline differ from SAVE.
                </p>
                <Link href="/income-driven-repayment-calculator" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Compare IDR plans →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">PSLF Plan Safety</h3>
                <p className="text-gray-600 mb-3">
                  PSLF borrowers should verify plan eligibility, employer certification, and qualifying payment progress before switching plans.
                </p>
                <Link href="/pslf-calculator" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Estimate PSLF forgiveness →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Parent PLUS Constraints</h3>
                <p className="text-gray-600 mb-3">
                  Parent PLUS loans and consolidation loans that include Parent PLUS loans need a separate repayment strategy.
                </p>
                <Link href="/blog/parent-plus-loan-repayment-options" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Review Parent PLUS options →
                </Link>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer" className="block bg-white border rounded-lg p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-primary-700">StudentAid.gov</h3>
                <p className="text-gray-600 text-sm">
                  Official federal student aid website. Apply for IDR, check payment counts, and manage your loans.
                </p>
              </a>

              <Link href="/blog" className="block bg-white border rounded-lg p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-primary-700">Blog & Guides</h3>
                <p className="text-gray-600 text-sm">
                  In-depth articles on repayment strategies, forgiveness programs, and money-saving tips.
                </p>
              </Link>

              <Link href="/contact" className="block bg-white border rounded-lg p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-primary-700">Get Help</h3>
                <p className="text-gray-600 text-sm">
                  Questions about your specific situation? Reach out to our team for guidance.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white mt-12">
            <h3 className="text-2xl font-bold mb-3">Stay Updated on Student Loan Changes</h3>
            <p className="text-primary-100 mb-6 max-w-2xl">
              Student loan policies change frequently. Check back regularly for updates on repayment transitions,
              IDR plan choices, and forgiveness program changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                Read Latest Blog Posts
              </Link>
              <Link href="/income-driven-repayment-calculator" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition text-center">
                Calculate Your Payments
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
