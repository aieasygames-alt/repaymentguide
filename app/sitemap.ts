import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const blogPosts = [
  { slug: 'save-ending-rap-vs-save-2026', lastModified: '2026-07-01' },
  { slug: 'save-plan-alternatives', lastModified: '2025-06-01' },
  { slug: 'pslf-application-guide', lastModified: '2025-05-15' },
  { slug: 'idr-plan-comparison', lastModified: '2025-05-01' },
  { slug: 'student-loan-refinancing-vs-consolidation', lastModified: '2025-04-15' },
  { slug: 'parent-plus-loan-repayment-options', lastModified: '2025-04-01' },
  { slug: 'student-loan-default-rehabilitation', lastModified: '2025-03-20' },
  { slug: 'deferment-vs-forbearance', lastModified: '2025-03-10' },
  { slug: 'student-loan-forgiveness-programs', lastModified: '2025-02-28' },
  { slug: 'student-loan-consolidation-guide', lastModified: '2025-02-15' },
  { slug: 'married-borrowers-repayment-strategy', lastModified: '2025-02-01' },
  { slug: 'student-loan-tax-implications', lastModified: '2025-01-20' },
  { slug: 'recent-graduate-repayment-guide', lastModified: '2025-01-10' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repaymentguide.com';

  const urls = [
    { url: `${baseUrl}/`, lastModified: '2026-07-05', changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/student-loan-payment-calculator/`, lastModified: '2026-07-05', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/save-plan-calculator/`, lastModified: '2026-07-05', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/income-driven-repayment-calculator/`, lastModified: '2026-07-05', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/pslf-calculator/`, lastModified: '2026-07-05', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/student-loan-changes-2026/`, lastModified: '2026-07-11', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: '2026-07-05', changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${baseUrl}/news/`, lastModified: '2026-07-05', changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: '2026-07-05', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact/`, lastModified: '2026-07-05', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy/`, lastModified: '2026-07-05', changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms/`, lastModified: '2026-07-05', changeFrequency: 'monthly' as const, priority: 0.3 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return urls;
}
