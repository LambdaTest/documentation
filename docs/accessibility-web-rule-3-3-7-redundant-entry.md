---
id: accessibility-web-rule-3-3-7-redundant-entry
title: Redundant Entry (3.3.7)
sidebar_label: Redundant Entry (3.3.7)
description: Rule-level Accessibility guidance for Redundant Entry (WCAG 3.3.7 Level A).
slug: accessibility-web-rule-3-3-7-redundant-entry/
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
          "name": "Redundant Entry (3.3.7)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-3-3-7-redundant-entry/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-7-redundant-entry/"
    },
    "headline": "Redundant Entry (3.3.7)",
    "description": "Rule-level Accessibility guidance for Redundant Entry (WCAG 3.3.7 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-7-redundant-entry/",
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

# Redundant Entry (3.3.7)

Information previously entered by or provided to the user in the same process must be auto-populated or available for selection, unless re-entering is essential for security or the data is no longer valid.


:::info WCAG Reference
**Applies to:** WCAG 2.2
**Introduced in:** WCAG 2.2 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)
:::


## What this rule checks

The scanner identifies multi-step flows where users are asked to re-enter information they have already provided in a previous step (e.g., name, address, email) without auto-fill or a selection option.

## Why it matters

Re-entering the same information is difficult for users with cognitive disabilities, motor impairments, or short-term memory challenges. It increases error rates and abandonment in multi-step workflows.

## Common failure patterns

- checkout forms that ask for the shipping address and then require the billing address to be typed again from scratch
- multi-page forms that do not pre-fill fields from earlier pages
- account creation flows that ask for the email on step 1 and again on step 3
- support ticket forms that require re-entering contact details already available from the user profile

## Remediation guidance

- auto-populate fields with information provided in earlier steps of the same process
- offer a "same as shipping" checkbox for billing address forms
- use session storage or form state management to carry data across steps
- if security requires re-entry (e.g., password confirmation), document the exception

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
