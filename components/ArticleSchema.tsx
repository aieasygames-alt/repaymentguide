interface ArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  url: string;
  author?: string;
  image?: string;
}

export function ArticleSchema({ title, description, date, dateModified, url, author = 'RepaymentGuide Editorial Team', image }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || 'https://repaymentguide.com/images/og-image.jpg',
    datePublished: date,
    dateModified: dateModified || date,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://repaymentguide.com',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
