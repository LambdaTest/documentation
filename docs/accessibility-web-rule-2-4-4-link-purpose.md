---
id: accessibility-web-rule-2-4-4-link-purpose
title: Link Purpose in Context (2.4.4)
sidebar_label: Link Purpose (2.4.4)
description: Rule-level Accessibility guidance for Link Purpose in Context (WCAG 2.4.4 Level A).
slug: accessibility-web-rule-2-4-4-link-purpose/
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
          "name": "Link Purpose in Context (2.4.4)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-4-4-link-purpose/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-4-link-purpose/"
    },
    "headline": "Link Purpose in Context (2.4.4)",
    "description": "Rule-level Accessibility guidance for Link Purpose in Context (WCAG 2.4.4 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-4-link-purpose/",
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

# Link Purpose in Context (2.4.4)

The purpose of each link must be determinable from the link text alone or from the link text combined with its programmatically determined context.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
:::

## What this rule checks

The scanner flags links whose text is generic (e.g., "click here", "read more", "learn more") without surrounding context that clarifies the destination or action.

## Why it matters

Screen-reader users often navigate by listing all links on a page. If every link says "Read more," the list is useless. Clear link text lets users decide which link to follow without reading the surrounding paragraph.

## Common failure patterns

- repeated "Click here" or "Read more" links across a page
- links that use a URL as the visible link text
- icon-only links (e.g., a pencil icon) with no accessible name
- links whose purpose changes based on visual position but whose text is identical

## Remediation guidance

- write link text that describes the destination or action (e.g., "View order #1234" instead of "Click here")
- use `aria-label` or `aria-labelledby` to provide context when the visible text must remain short
- add `aria-label` to icon-only links that describes the action
- when multiple links share text, add visually hidden context (e.g., "Read more about pricing")

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
