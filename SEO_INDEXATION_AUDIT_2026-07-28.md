# RepaymentGuide Indexation Audit - 2026-07-28

## Scope

- Site: https://repaymentguide.com/
- Focus: Google Search Console and Bing Webmaster indexation problems
- Methods: live crawl of sitemap URLs, robots.txt/header checks, canonical/meta extraction, local Next.js route comparison, public search visibility checks, limited official-source policy verification.
- Limitation: no Google Search Console, Bing Webmaster, GA4, or PageSpeed API credentials were available locally, so URL Inspection verdicts and real Search Console coverage buckets were not accessible.

## Executive Summary

The site is crawlable and does not appear to have a global noindex/canonical blocker. All 46 sitemap URLs returned HTTP 200, used self-referencing canonicals, and exposed server-rendered content.

The indexation weakness appears to come from a mix of:

1. Domain/verification issues, especially broken www handling and missing Bing file verification.
2. Several thin or near-thin pages in a YMYL niche.
3. Weak internal linking to some older blog posts and niche pages.
4. Cloudflare-managed robots/content rules that block many AI/SEO crawlers and return 403 to GPTBot.
5. Blog article templates rendering a duplicate H1 because the markdown content includes the same H1 as the hero.
6. Limited structured data depth for calculators and trust/entity signals.

## Critical / High Priority Findings

### 1. www host is broken

Observed:

- https://repaymentguide.com/ returns 200.
- http://repaymentguide.com/ redirects to https://repaymentguide.com/.
- https://www.repaymentguide.com/ fails at TLS connection.
- http://www.repaymentguide.com/ returns an empty reply.

Impact:

- Not likely to block sitemap-submitted canonical URLs, but it weakens host consolidation and can create discovery failures from backlinks, browser autocomplete, or third-party citations using www.

Recommended fix:

- In Cloudflare DNS/Pages, configure www.repaymentguide.com as an alias/CNAME to the Pages project.
- Add a single 301 redirect from https://www.repaymentguide.com/* to https://repaymentguide.com/*.
- Verify in GSC/Bing as either domain property or both host variants.

### 2. Bing verification file is missing

Observed:

- https://repaymentguide.com/BingSiteAuth.xml returns 404.
- A Google-style text verification file exists and returns 200.
- No msvalidate meta tag was found in the codebase.

Impact:

- If Bing Webmaster Tools is configured to use file verification, verification will fail or become unstable.

Recommended fix:

- Add the exact BingSiteAuth.xml from Bing Webmaster Tools to `public/`.
- Alternatively add Bing's `msvalidate.01` meta verification tag in `app/layout.tsx`.

### 3. Dashboard is publicly accessible but absent from sitemap

Observed:

- Local static route `/dashboard/` exists and returns 200 live.
- `/dashboard/` is not in sitemap.
- It has no explicit noindex directive.

Impact:

- Google can discover it through non-sitemap paths and treat it as a low-value/auth-like page.

Recommended fix:

- If the dashboard is private/user utility, add `robots: { index: false, follow: false }` metadata.
- If it is meant to rank, add unique public value and include it in sitemap.

### 4. Thin and near-thin pages

Pages under roughly 500 extracted words:

- `/`
- `/rap-payment-calculator/`
- `/student-loan-scenarios/`
- `/save-ending-what-should-i-do/`
- `/save-90-day-deadline-calculator/`
- `/parent-plus-rap-eligibility/`
- `/rap-vs-save-calculator/`
- `/ibr-vs-rap/`
- `/pslf-rap-qualifying-payments/`
- `/married-filing-separately-student-loans-rap/`
- `/blog/`
- `/contact/`
- `/privacy/`
- `/terms/`

Impact:

- This is a YMYL financial topic. Thin pages can be crawled but left in "Discovered - currently not indexed" or "Crawled - currently not indexed" if Google sees insufficient unique value.

Recommended fix:

- Prioritize commercial/search-intent pages, not legal boilerplate.
- Add 700-1,200 words of unique support content to calculator pages: methodology, assumptions, examples, eligibility notes, official source notes, FAQ, and related plan links.

### 5. Weak inlinks to some sitemap URLs

Low internal-link count among sitemap pages:

- `/blog/deferment-vs-forbearance/` - 1 internal inlink
- `/blog/student-loan-tax-implications/` - 1 internal inlink
- `/blog/recent-graduate-repayment-guide/` - 1 internal inlink
- `/married-filing-separately-student-loans-rap/` - 2 internal inlinks
- `/blog/student-loan-refinancing-vs-consolidation/` - 2 internal inlinks
- `/blog/student-loan-default-rehabilitation/` - 2 internal inlinks

Impact:

- Pages with few contextual links are weaker crawl/index candidates.

Recommended fix:

- Add contextual links from relevant calculators and guide pages.
- Add topic clusters: SAVE/RAP, PSLF, Parent PLUS, default, tax, consolidation/refinancing.

## Medium Priority Findings

### 6. Blog posts duplicate H1

Observed:

- Blog article pages render the hero H1 and then the markdown H1 again in the article body.

Impact:

- Not a hard indexing blocker, but it is a quality/template signal issue.

Recommended fix:

- Strip the first markdown H1 when rendering blog content, or store post body without the title H1.

### 7. Cloudflare robots/content rules are more restrictive than source code

Observed live robots.txt includes Cloudflare Managed Content rules before the app-generated rules:

- `Content-Signal: search=yes,ai-train=no,use=reference`
- Blocks Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, CloudflareBrowserRenderingCrawler, Google-Extended, GPTBot, meta-externalagent.
- GPTBot user agent receives HTTP 403.
- Googlebot and bingbot user agents receive 200 for the homepage.

Impact:

- This should not block Google Search or Bing Search directly.
- It can hurt AI-search visibility and third-party SEO crawlers.
- It may complicate diagnostics because the live robots.txt differs from `app/robots.ts`.

Recommended fix:

- Decide whether AI visibility matters.
- If yes, loosen Cloudflare crawler/content controls for `ChatGPT-User`, `PerplexityBot`, and other retrieval/search agents while still blocking training crawlers if desired.
- Keep Googlebot/Bingbot explicitly allowed.

### 8. Structured data is present but shallow

Observed:

- Home has WebSite schema.
- Blog posts have Article schema.
- FAQ page has FAQPage schema.

Opportunities:

- Add SoftwareApplication/WebApplication schema for calculators.
- Add Organization schema with sameAs/profiles if available.
- Add BreadcrumbList on all content and calculator pages.
- Add FAQPage to key calculator pages where visible FAQ content exists.

### 9. Static asset caching is modest

Observed:

- HTML and sitemap: `cache-control: public, max-age=0, must-revalidate`.
- Static chunks/images: `max-age=14400, must-revalidate`.

Impact:

- Not an indexation blocker, but less ideal for performance.

Recommended fix:

- For hashed Next assets and immutable images, use long-lived cache headers where Cloudflare Pages allows it.

## What Looks Healthy

- Sitemap is live, valid XML, 46 URLs, no duplicates, all URLs use trailing slash.
- All sitemap URLs tested returned HTTP 200.
- Canonicals are self-referencing and match the sitemap URL format.
- No accidental `noindex` found on sitemap URLs.
- HTTPS and core security headers are present on the canonical host.
- Main content is server-rendered in initial HTML.
- Current SAVE/RAP core claims broadly match current public official/servicer guidance checked on 2026-07-28.

## Recommended 7-Day Action Plan

1. Fix www host and force 301 to the bare canonical domain.
2. Add/verify Bing Webmaster ownership.
3. Add `noindex` to `/dashboard/` unless it is intended as a public landing page.
4. Fix duplicate blog H1 rendering.
5. Expand the top indexation-priority thin pages:
   - `/rap-payment-calculator/`
   - `/save-90-day-deadline-calculator/`
   - `/parent-plus-rap-eligibility/`
   - `/rap-vs-save-calculator/`
   - `/ibr-vs-rap/`
6. Add contextual links to the low-inlink pages from calculators, FAQ, and scenario pages.
7. Add BreadcrumbList and calculator schema to key tools.

## GSC / Bing Data Needed Next

Export or screenshot these reports to validate root cause:

- GSC Pages report: Not indexed reasons, especially "Discovered - currently not indexed", "Crawled - currently not indexed", "Duplicate without user-selected canonical", "Alternate page with proper canonical".
- GSC Sitemaps report: submitted URL count, discovered URL count, last read date, errors/warnings.
- GSC URL Inspection for 5 examples:
  - homepage
  - a calculator indexed successfully
  - a calculator not indexed
  - a blog post indexed successfully
  - a blog post not indexed
- Bing Webmaster URL Inspection and Index Explorer for the same sample URLs.
- Bing verification method currently selected.
