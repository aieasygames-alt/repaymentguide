import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://repaymentguide.com"),
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION
    ? {
        ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
          ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
          : {}),
        ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
          ? {
              other: {
                'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
              },
            }
          : {}),
      }
    : undefined,
  title: "RepaymentGuide - Student Loan Payment Calculator & IDR Plan Comparison",
  description: "Calculate your student loan payments, compare RAP, PAYE, IBR, ICR, and standard repayment options, and estimate PSLF forgiveness. Free tools for federal student loan borrowers.",
  keywords: ["student loan calculator", "IDR plans", "RAP plan", "IBR", "PSLF", "student loan repayment"],
  authors: [{ name: "RepaymentGuide Team" }],
  openGraph: {
    title: "RepaymentGuide - Student Loan Payment Calculator",
    description: "Free tools to calculate payments and compare repayment plans",
    type: "website",
    url: "https://repaymentguide.com",
    siteName: "RepaymentGuide",
    locale: "en_US",
    images: [
      {
        url: "https://repaymentguide.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RepaymentGuide - Student Loan Repayment Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RepaymentGuide - Student Loan Payment Calculator",
    description: "Free tools to calculate payments and compare repayment plans",
    images: ["https://repaymentguide.com/images/og-image.jpg"],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RepaymentGuide',
  url: 'https://repaymentguide.com',
  description: 'Student loan repayment calculators and IDR plan comparison tools',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://repaymentguide.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'RepaymentGuide',
    url: 'https://repaymentguide.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://repaymentguide.com/images/logo.webp',
      width: 200,
      height: 60,
    },
  },
};

import './globals.css';
import Analytics from '@/components/Analytics';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
