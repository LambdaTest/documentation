---
id: accessibility-passed-test-cases
title: Passed Test Cases
sidebar_label: Passed Test Cases
description: Show passing accessibility checks alongside violations so teams can track both achievements and remaining gaps.
slug: accessibility-passed-test-cases/
url: https://www.testmuai.com/support/docs/accessibility-passed-test-cases/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-passed-test-cases/
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
          "name": "Passed Test Cases",
          "item": `${BRAND_URL}/support/docs/accessibility-passed-test-cases/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-passed-test-cases/"
    },
    "headline": "Passed Test Cases",
    "description": "Show passing accessibility checks alongside violations so teams can track both achievements and remaining gaps.",
    "url": "https://www.testmuai.com/support/docs/accessibility-passed-test-cases/",
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

# Passed Test Cases

Passed Test Cases lets teams include successful accessibility checks in a report instead of showing only failures and incomplete items.

Passed checks deserve attention alongside violations because they show what already works and make trends easier to spot across runs. The sections that follow explain why that balance matters, when to turn the feature on, and how it improves conversations with auditors and stakeholders.

## When to use this

Use this feature when you want a fuller view of Accessibility progress and not just a list of violations.

## Why it matters

Passed checks help teams:

- show what is already working well
- compare results across runs
- provide more balanced review material for audits and stakeholders

## How to enable and read Passed Test Cases (onboarding)

1. Open an Accessibility **report settings** or **scan configuration** surface where passed checks are exposed (wording may appear as “Passed tests”, “Include passing checks”, or similar, UI varies by scan type).
2. Turn the option **on** before the next run if you want auditors to see green checks alongside violations.
3. After the run, open **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)** and look for passed-rule summaries or toggles that reveal passing rules.
4. Pair passes with **[Accessibility Score](/support/docs/accessibility-web-score/)** trends so leadership sees improvement, not only open defects.
5. Export the augmented report when sharing outside the dashboard ([exporting](/support/docs/accessibility-exporting-sharing-reports/)).

## Related docs

- [Accessibility Score](/support/docs/accessibility-web-score/)
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
