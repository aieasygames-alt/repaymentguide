import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAVE Plan News & Updates - Latest Student Loan News',
  description: 'Stay updated on SAVE plan changes, student loan news, and repayment policy updates.',
  keywords: ['SAVE plan news', 'student loan updates', 'IDR news', 'PSLF updates'],
  alternates: {
    canonical: '/news/',
  },
  openGraph: {
    title: 'SAVE Plan News & Updates',
    description: 'Latest student loan repayment news',
    url: 'https://repaymentguide.com/news',
  },
};

const newsItems = [
  {
    title: 'SAVE Plan Legal Challenges Continue',
    excerpt: 'Courts block SAVE plan implementation as legal battles continue. Learn about your alternatives while the litigation proceeds.',
    date: '2025-06-15',
    category: 'SAVE Plan',
    relatedArticle: '/blog/save-plan-alternatives',
    actionText: 'Learn about PAYE, IBR, and ICR alternatives'
  },
  {
    title: 'New IDR Application Processing Delays',
    excerpt: 'Student loan servicers report extended processing times for IDR applications. Find out how to handle delayed applications.',
    date: '2025-06-10',
    category: 'Processing',
    relatedArticle: '/income-driven-repayment-calculator',
    actionText: 'Calculate your IDR payments while waiting'
  },
  {
    title: 'PSLF Payment Count Updates',
    excerpt: 'Borrowers continue to receive adjusted payment counts under the IDR account adjustment. Check your status today.',
    date: '2025-06-05',
    category: 'PSLF',
    relatedArticle: '/pslf-calculator',
    actionText: 'Check your payment count'
  },
  {
    title: 'Student Loan Interest Rates Update',
    excerpt: 'Federal student loan interest rates for 2024-25 academic year announced. See how rate changes affect your payments.',
    date: '2025-05-28',
    category: 'Interest Rates',
    relatedArticle: '/student-loan-payment-calculator',
    actionText: 'Recalculate your payments'
  },
  {
    title: 'Fresh Start Program Extended',
    excerpt: 'Department of Education extends Fresh Start initiative for borrowers in default. Take advantage of rehabilitation options.',
    date: '2025-05-20',
    category: 'Default',
    relatedArticle: '/blog/student-loan-default-rehabilitation',
    actionText: 'Learn about rehabilitation options'
  },
  {
    title: 'IDR Recertification Deadline Reminders',
    excerpt: 'Annual income recertification deadlines approaching. Avoid payment increases by submitting documentation on time.',
    date: '2025-05-15',
    category: 'IDR Plans',
    relatedArticle: '/blog/idr-plan-comparison',
    actionText: 'Understand your IDR options'
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
                <h3 className="font-bold text-red-900 mb-2">Important: SAVE Plan Remains Blocked</h3>
                <p className="text-red-800 mb-3">
                  The SAVE plan continues to face legal challenges. Existing SAVE borrowers remain in $0 payment forbearance.
                  New applicants should choose PAYE, IBR, or ICR alternatives.
                </p>
                <Link href="/blog/save-plan-alternatives" className="text-red-700 hover:text-red-800 font-medium">
                  Learn about your alternatives →
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Policy Updates (2025)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">IDR Account Adjustment</h3>
                <p className="text-gray-600 mb-3">
                  One-time payment count adjustment credited past payments for millions of borrowers.
                  Check your payment count at StudentAid.gov.
                </p>
                <Link href="/pslf-calculator" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Check your payment count →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Fresh Start Program</h3>
                <p className="text-gray-600 mb-3">
                  Borrowers in default can rehabilitate their loans and regain access to IDR plans and forgiveness.
                </p>
                <Link href="/blog/student-loan-default-rehabilitation" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Learn about rehabilitation →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">PSLF Waivers End</h3>
                <p className="text-gray-600 mb-3">
                  Temporary PSLF waivers have ended. Standard PSLF requirements now apply.
                  Ensure you're on an IDR plan and certifying employment annually.
                </p>
                <Link href="/blog/pslf-application-guide" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  PSLF application guide →
                </Link>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Interest Rate Changes</h3>
                <p className="text-gray-600 mb-3">
                  Federal student loan interest rates updated for 2024-25 academic year.
                  Undergraduate: 6.8%, Graduate: 8.05%, PLUS: 8.05%.
                </p>
                <Link href="/student-loan-payment-calculator" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Recalculate your payments →
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
              Student loan policies change frequently. Check back regularly for updates on SAVE plan litigation,
              IDR adjustments, and forgiveness program changes.
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
