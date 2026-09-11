---
id: accessibility-web-rule-2-4-2-page-titled
title: Page Titled (2.4.2)
sidebar_label: Page Titled (2.4.2)
description: Rule-level Accessibility guidance for Page Titled (WCAG 2.4.2 Level A).
slug: accessibility-web-rule-2-4-2-page-titled/
---
import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Page Titled (2.4.2)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-4-2-page-titled/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-2-page-titled/"
    },
    "headline": "Page Titled (2.4.2)",
    "description": "Rule-level Accessibility guidance for Page Titled (WCAG 2.4.2 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-2-page-titled/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [],
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Page Titled (2.4.2)

Every web page must have a descriptive title that identifies its topic or purpose.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
:::

## What this rule checks

The scanner verifies that each page has a non-empty `<title>` element and that the title text meaningfully describes the page content.

## Why it matters

The page title is the first thing a screen reader announces when a page loads. It also appears in browser tabs, bookmarks, and search results. A missing or generic title forces users to explore the page to understand where they are.

## Common failure patterns

- pages with an empty `<title>` element
- all pages sharing the same generic title like "Home" or the site name
- SPA routes that do not update the document title when the view changes
- titles that describe the site but not the specific page (e.g., "Acme Corp" on every page)

## Remediation guidance

- write titles in the format "Page Purpose - Site Name" (e.g., "Order History - Acme Store")
- update `document.title` on route changes in single-page applications
- include key differentiators when pages are similar (e.g., "Edit Profile" vs. "View Profile")
- keep titles concise but specific enough to identify the page without seeing it

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
