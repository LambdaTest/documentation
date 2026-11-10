---
id: analytics-kpi-threshold-alerts
title: KPI Threshold Alerts
sidebar_label: KPI Threshold Alerts
description: Get an email, Slack or webhook alert when a test-health KPI such as New Failures, Consistent Failures, Unstable, Flaky or Retried goes above a count you set within a rolling window.
keywords:
  - analytics
  - insights
  - kpi alerts
  - threshold alerts
  - test health
  - notifications
  - smart tags
url: https://www.testmuai.com/support/docs/analytics-kpi-threshold-alerts/
site_name: TestMu AI
slug: analytics-kpi-threshold-alerts/
canonical: https://www.testmuai.com/support/docs/analytics-kpi-threshold-alerts/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KPI Threshold Alerts",
          "item": `${BRAND_URL}/support/docs/analytics-kpi-threshold-alerts/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/analytics-kpi-threshold-alerts/"
    },
    "headline": "KPI Threshold Alerts",
    "description": "Get an email, Slack or webhook alert when a test-health KPI such as New Failures, Consistent Failures, Unstable, Flaky or Retried goes above a count you set within a rolling window.",
    "url": "https://www.testmuai.com/support/docs/analytics-kpi-threshold-alerts/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Insights",
    "keywords": [
      "analytics",
      "insights",
      "kpi alerts",
      "threshold alerts",
      "test health",
      "notifications",
      "smart tags"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "datePublished": "2026-10-19T12:00:00+05:30",
    "dateModified": "2026-10-19T12:00:00+05:30"
  }) }}
/>

KPI threshold alerts tell you on the same day when your test health gets worse, instead of waiting for the next weekly report. You choose which test-health KPIs to watch and set a count limit for each. When a KPI goes above its limit within the window you choose, <BrandName /> sends an alert by email, Slack or webhook.

:::note
KPI threshold alerts are being rolled out gradually. If you don't see the **KPI threshold alerts** section described below, contact support.
:::

## KPIs you can watch {#kpis-you-can-watch}

You can watch the five **Test States** KPIs from the Insights weekly report:

| KPI | What is counted | Counts |
|---|---|---|
| **New Failures** | Tests that ran in both the current window and the window before it, and failed only in the current one | Tests |
| **Consistent Failures** | Tests that failed in both the current window and the window before it | Tests |
| **Unstable** | Tests with mixed results, or whose most common result is a lambda error, queue timeout or idle timeout | Tests |
| **Flaky** | Test runs flagged as flaky | Runs, not distinct tests |
| **Retried** | Test runs that were retried | Runs, not distinct tests |

New Failures and Consistent Failures compare the window with the same number of days just before it. For example, with a 7-day window, the last 7 days are compared with the 7 days before them.

:::tip
The **New Failures** KPI is different from the **New Failure** [smart tag](/support/docs/analytics-smart-tags-test-intelligence/). The smart tag marks a single test whose latest run failed after a run of passes. The KPI counts tests across the whole window, compared with the window before it.
:::

## Set up KPI threshold alerts {#set-up-kpi-threshold-alerts}

Go to **Organization Settings → Org Product Preferences → Insights → Smart Tags**. The **Smart Tags and Anomaly Notifications** card holds the settings, which apply to the whole organization:

1. Turn on **Enable anomaly notifications**.
2. Turn on **KPI threshold alerts**. The **Build anomaly digest** above it is a separate switch for [anomaly notifications](/support/docs/analytics-build-insights-test-cases/#anomaly-notifications); you can turn on either or both.
3. Under **Window and check frequency**:
   - **Count tests in the last** — the window, from 1 to 15 days. The default is 7 days.
   - **Check every** — **6h**, **12h** or **Daily**. The default is **Daily**.
4. Under **Alert me when**, tick each KPI you want to watch and enter its limit in **Alert when count is above**. The limit is a whole number from 1 to 2,147,483,647.
5. Turn on at least one channel. KPI threshold alerts use the same channels as anomaly notifications:
   - **Email** — add up to 50 recipient addresses.
   - **Slack** — choose a channel. Slack must first be connected under **Integrations**.
   - **Webhook** — add up to 20 public `http` or `https` endpoint URLs.
6. Click **Update**.

**Update** stays disabled until the settings can be saved. A message explains what is missing, for example:

- *Turn on at least one of Build anomaly digest or KPI threshold alerts.*
- *Select at least one KPI under KPI threshold alerts.*
- *Enter a whole-number threshold from 1 to 2,147,483,647 for Flaky.*

<img loading="lazy" src={require('../assets/images/analytics/kpi-threshold-alerts-settings.webp').default} alt="KPI threshold alerts section in the Smart Tags and Anomaly Notifications settings" width="768" height="465" className="doc_img"/>

## When an alert is sent {#when-an-alert-is-sent}

KPIs are checked at fixed times in UTC, based on **Check every**:

| Check every | Check times (UTC) |
|---|---|
| **6h** | 00:00, 06:00, 12:00 and 18:00 |
| **12h** | 00:00 and 12:00 |
| **Daily** | 00:00 |

At each check:

- Each watched KPI is counted over the window — the chosen number of days up to the check time.
- A KPI is breached when its count is **above** its limit. A count equal to the limit does not alert.
- If any KPI is breached, one alert is sent that lists every breached KPI. If none is breached, nothing is sent.
- While a KPI stays above its limit, the alert is sent again at every check. No message is sent when it drops back below.

After you save, the first check runs within about an hour.

## What an alert contains {#what-an-alert-contains}

- **Email** — the subject gives the number of breached KPIs and the check time, for example `Insights Alert: 3 KPIs above threshold · Oct 14, 06:00 UTC`. The email shows the window, then each breached KPI with its count, its limit and how far it is over. A table lists every KPI you watch with its current count, its limit and whether it is breached, followed by a **View in Insights** button.
- **Slack** — the same details: the window, the check time, the breached KPIs and the KPIs within their limits, with a **View in Insights** button.
- **Webhook** — a JSON `POST` with the `X-LT-Event: insights_kpi_alert` header. The body carries `schema_version`, `event`, `environment`, `org_id`, `slot` (the check time), `window`, `frequency_hours`, a `breaches` list, a `watched` list and `insights_url`. Each entry in `breaches` and `watched` has `kpi`, `label`, `count` and `threshold`. `org_id` and `slot` together identify one alert.

```json
{
  "schema_version": 1,
  "event": "insights_kpi_alert",
  "environment": "production",
  "org_id": 123456,
  "slot": "2026-10-14T06:00:00Z",
  "window": { "from": "2026-10-07T06:00:00Z", "to": "2026-10-14T06:00:00Z", "days": 7 },
  "frequency_hours": 6,
  "breaches": [
    { "kpi": "consistent_failures", "label": "Consistent Failures", "count": 49, "threshold": 20 }
  ],
  "watched": [
    { "kpi": "consistent_failures", "label": "Consistent Failures", "count": 49, "threshold": 20 },
    { "kpi": "unstable", "label": "Unstable", "count": 4, "threshold": 25 }
  ],
  "insights_url": "https://…"
}
```

<img loading="lazy" src={require('../assets/images/analytics/kpi-threshold-alerts-email.webp').default} alt="KPI threshold alert email" width="768" height="1066" className="doc_img"/>

:::caution
Webhook payloads are delivered to your endpoint wherever it is hosted, so webhook delivery is outside <BrandName />'s data residency guarantee.
:::

## Related

- [Anomaly notifications](/support/docs/analytics-build-insights-test-cases/#anomaly-notifications) — a digest when a build finishes with anomalies.
- [Smart Tags](/support/docs/analytics-smart-tags-test-intelligence/) — smart tags for test sessions and how to configure them.
- [Build Insights](/support/docs/analytics-build-insights/) — the build list and build details.
