import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'Bytespider', 'CCBot', 'ClaudeBot', 'SemrushBot'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
      },
    ],
    sitemap: 'https://repaymentguide.com/sitemap.xml',
  };
}
