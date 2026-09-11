---
id: smartui-weekly-report-email
title: SmartUI in the Insights Weekly Report
sidebar_label: Weekly Report Email
description: Read the SmartUI States card in the TestMu AI Insights Weekly Report email, with last week's SmartUI build statuses and screenshot counts.
keywords:
  - SmartUI weekly report
  - SmartUI email
  - Insights weekly report
  - SmartUI build summary
  - Visual regression report
  - TestMu AI SmartUI
slug: smartui-weekly-report-email/
url: https://www.testmuai.com/support/docs/smartui-weekly-report-email/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/smartui-weekly-report-email/
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
          "name": "SmartUI in the Insights Weekly Report",
          "item": `${BRAND_URL}/support/docs/smartui-weekly-report-email/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-weekly-report-email/"
    },
    "headline": "SmartUI in the Insights Weekly Report",
    "description": "Read the SmartUI States card in the TestMu AI Insights Weekly Report email, with last week's SmartUI build statuses and screenshot counts.",
    "url": "https://www.testmuai.com/support/docs/smartui-weekly-report-email/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "SmartUI weekly report",
      "SmartUI email",
      "Insights weekly report"
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
    "dateModified": "2026-09-11T15:00:00+05:30"
  }) }}
/>

# SmartUI in the Insights Weekly Report

Every Monday, <BrandName /> emails your organization an **Insights Weekly Report**. If your organization ran SmartUI builds during the week, the email includes a **SmartUI States** card, so you can check how your visual tests went without opening the dashboard.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/weekly-report/insights-weekly-report-email.png').default} alt="Insights Weekly Report email showing the SmartUI States card with build statuses and screenshot counts" width="560" height="795" className="doc_img"/>

## When the email is sent

- The email is sent every Monday morning (UTC).
- It covers the previous week, from Monday 00:00 to Sunday 23:59:59. The date range is shown at the top of the email.
- It goes to every user in your organization.

:::note
The email is sent only to organizations that ran at least one automation test during the week. If your organization ran only SmartUI builds that week, the email is not sent.
:::

## Read the SmartUI States card

### Total Builds

The number of SmartUI builds created during the week, split by status. The bar shows the share of each status.

| Status | What it counts |
|---|---|
| **Approved** | Builds that were approved. |
| **Rejected** | Builds that were rejected. |
| **Pending Approval** | Builds still waiting for review. |
| **Others** | All remaining builds, such as builds with errors, partially rejected builds, or builds that are still running. |

### Total Screenshots

The number of screenshots captured during the week, split by whether they were compared.

| Type | What it counts |
|---|---|
| **Generated Screenshots** | Screenshots captured without a comparison against a baseline. |
| **Re/Compared Screenshots** | Screenshots compared against a baseline. |

## Open the full report

Select **View Insights** in the email to open the same week in Insights. If the button does not work in your email client, copy the link shown below the button into your browser.

## Stop receiving the email

Select **Click here** at the bottom of the email to unsubscribe.
