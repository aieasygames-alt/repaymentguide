import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const blogPosts = [
  'save-plan-alternatives',
  'pslf-application-guide',
  'idr-plan-comparison',
  'student-loan-refinancing-vs-consolidation',
  'parent-plus-loan-repayment-options',
  'student-loan-default-rehabilitation',
  'deferment-vs-forbearance',
  'student-loan-forgiveness-programs',
  'student-loan-consolidation-guide',
  'married-borrowers-repayment-strategy',
  'student-loan-tax-implications',
  'recent-graduate-repayment-guide',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repaymentguide.com';

  const urls = [
    { url: `${baseUrl}/`, lastModified: '2024-06-01', changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/student-loan-payment-calculator/`, lastModified: '2024-06-01', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/save-plan-calculator/`, lastModified: '2024-06-01', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/income-driven-repayment-calculator/`, lastModified: '2024-06-01', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/pslf-calculator/`, lastModified: '2024-06-01', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: '2024-06-01', changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${baseUrl}/news/`, lastModified: '2024-06-01', changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: '2024-06-01', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact/`, lastModified: '2024-06-01', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy/`, lastModified: '2024-06-01', changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms/`, lastModified: '2024-06-01', changeFrequency: 'monthly' as const, priority: 0.3 },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: '2024-06-01',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return urls;
}
