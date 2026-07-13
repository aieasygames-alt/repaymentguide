# Analytics Setup

RepaymentGuide ships with GA4 code and calculator event tracking. Tracking is inactive until the production environment has a real GA measurement ID.

## Cloudflare Pages Environment Variables

Set these in Cloudflare Pages > RepaymentGuide > Settings > Environment variables:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your-google-site-verification-token
```

`NEXT_PUBLIC_GA_ID` must be a real GA4 measurement ID. The app intentionally does not load Google Analytics when the value is missing or still set to `G-XXXXXXXXXX`.

## Events Sent to GA4

When GA is configured, these events are emitted:

| Event | When it fires | Key params |
|---|---|---|
| `calculator_submit` | User runs a calculator | `calculator_name`, plan/type params when available |
| `calculator_share` | User copies a shareable result link | `calculator_name`, plan/type params when available |
| `calculator_print` | User prints a calculator report | `calculator_name`, plan/type params when available |
| `calculator_calendar_download` | User downloads SAVE deadline `.ics` reminders | `calculator_name`, `window_days` |

Current calculator names:

```text
payment
idr_comparison
pslf
rap_payment
save_deadline
```

## Suggested GA4 Conversions

Mark these as key events after traffic starts:

```text
calculator_submit
calculator_share
calculator_calendar_download
```

## Search Console

After setting `NEXT_PUBLIC_GSC_VERIFICATION`, redeploy and verify ownership in Google Search Console. Then submit:

```text
https://repaymentguide.com/sitemap.xml
```
