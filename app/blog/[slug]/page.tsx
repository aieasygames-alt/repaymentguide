import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts: Record<string, {
  title: string;
  date: string;
  content: string;
}> = {
  'save-plan-alternatives': {
    title: 'Understanding SAVE Plan Alternatives',
    date: '2024-06-01',
    content: `
# Understanding SAVE Plan Alternatives

With the SAVE plan blocked by court orders as of 2024, many borrowers are wondering what their options are. This guide explains the alternative income-driven repayment (IDR) plans available.

## What Happened to SAVE?

The SAVE (Saving on a Valuable Education) plan was introduced as the most generous IDR plan, offering:

- 5% of discretionary income for undergraduate loans
- 10% for graduate loans
- 100% unpaid interest subsidy
- Forgiveness after 10-20 years

However, legal challenges have blocked its implementation, leaving borrowers in need of alternatives.

## Your IDR Options

### PAYE (Pay As You Earn)

Best for newer borrowers with loans after October 2007 and October 2011. Offers 10% of discretionary income payments with a payment cap.

### IBR (Income-Based Repayment)

Available to all borrowers regardless of loan date. Good option for those with older loans who don't qualify for PAYE.

### ICR (Income-Contingent Repayment)

The only option for Parent PLUS loan borrowers after consolidation into Direct Loans. Has the highest payment percentage (20%).

## What Should You Do?

1. **Check your eligibility**: Each plan has different requirements
2. **Compare payments**: Use our IDR calculator to see estimates
3. **Consider your timeline**: How long until forgiveness?
4. **Apply**: Submit your IDR application through StudentAid.gov

The right plan depends on your loan type, income, and forgiveness timeline.
    `,
  },
  'pslf-application-guide': {
    title: 'PSLF Application Guide',
    date: '2024-05-15',
    content: `
# PSLF Application Guide

Public Service Loan Forgiveness (PSLF) can forgive your remaining student loan balance after 120 qualifying payments. Here's how to apply.

## Step 1: Verify Eligibility

- Direct Loans only (consolidate FFEL/Perkins if needed)
- Full-time employment (30+ hours/week)
- Government or 501(c)(3) nonprofit employer
- 120 qualifying monthly payments

## Step 2: Enroll in Qualifying Repayment Plan

Must be in an income-driven repayment plan (SAVE, PAYE, IBR, ICR).

## Step 3: Submit Employment Certification

Use the PSLF Help Tool to:
- Certify your employment
- Track qualifying payments
- Ensure you're on the right track

Submit this form annually and when changing employers.

## Step 4: Make 120 Qualifying Payments

- Payments must be made in full and on time
- Only payments after Oct 1, 2007 qualify
- Must be made while employed full-time by qualifying employer

## Step 5: Apply for Forgiveness

After 120 payments, submit the PSLF application through your servicer or StudentAid.gov.

## IDR Account Adjustment

Many borrowers received payment count adjustments in 2024. Check your payment count at StudentAid.gov.
    `,
  },
  'idr-plan-comparison': {
    title: 'IDR Plan Comparison',
    date: '2024-05-01',
    content: `
# IDR Plan Comparison: Which Saves You the Most?

Choosing the right income-driven repayment plan can save you thousands. Here's how the plans compare.

## Payment Percentage

| Plan | Payment % | Forgiveness |
|------|-----------|-------------|
| SAVE | 5-10% | 10-20 years |
| PAYE | 10% | 20 years |
| IBR | 10-15% | 20-25 years |
| ICR | 20% | 25 years |

## Key Differences

### SAVE Plan (When Available)
- Lowest payments (5% for undergrad)
- 100% interest subsidy
- Blocked by courts as of 2024

### PAYE Plan
- Payment cap protects high earners
- Strict eligibility requirements
- No interest capitalization if staying in plan

### IBR Plan
- Available to all borrowers
- Spouse income excluded if filing separately
- Higher payment percentage

### ICR Plan
- Only option for Parent PLUS borrowers
- Highest payment percentage
- Always counts spouse income

## How to Choose

1. **New borrower with high debt**: PAYE
2. **Older loans**: IBR
3. **Parent PLUS loans**: ICR (after consolidation)
4. **When SAVE becomes available**: SAVE (for most borrowers)

Use our IDR calculator to compare your specific situation.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | RepaymentGuide Blog`,
    description: post.content.slice(0, 160).replace(/\n/g, ' '),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(p => p.trim());

  return (
    <>
      <Header />
      <main className="flex-1 py-12">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h2>;
              }
              if (paragraph.startsWith('## ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.slice(3)}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-4">{paragraph.slice(2)}</li>;
              }
              if (paragraph.startsWith('| ')) {
                return (
                  <div key={index} className="overflow-x-auto my-4">
                    <table className="min-w-full border border-gray-300">
                      <tbody>
                        {paragraph.split('\n').map((row, i) => (
                          <tr key={i} className="border-b">
                            {row.split('|').filter(cell => cell.trim()).map((cell, j) => (
                              <td key={j} className="px-4 py-2 border-r last:border-r-0">{cell.trim()}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t">
            <a href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Blog
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
