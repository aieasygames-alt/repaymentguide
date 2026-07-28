interface CalculatorSchemaProps {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}

export function CalculatorSchema({ name, description, url, keywords = [] }: CalculatorSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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
    keywords: keywords.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
