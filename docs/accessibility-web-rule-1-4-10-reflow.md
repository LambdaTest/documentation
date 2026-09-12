---
id: accessibility-web-rule-1-4-10-reflow
title: Reflow (1.4.10)
sidebar_label: Reflow (1.4.10)
description: Rule-level Accessibility guidance for Reflow (WCAG 1.4.10 Level AA).
slug: accessibility-web-rule-1-4-10-reflow/
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
          "name": "Reflow (1.4.10)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-1-4-10-reflow/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-10-reflow/"
    },
    "headline": "Reflow (1.4.10)",
    "description": "Rule-level Accessibility guidance for Reflow (WCAG 1.4.10 Level AA).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-10-reflow/",
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

# Reflow (1.4.10)

Content must reflow to fit within a viewport width of 320 CSS pixels without requiring horizontal scrolling, except for content that requires two-dimensional layout (data tables, toolbars, maps).


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
:::


## What this rule checks

The scanner identifies content that causes horizontal scrolling at 320px viewport width (equivalent to 400% zoom on a 1280px desktop display).

## Why it matters

Users with low vision who zoom to 400% or more should not have to scroll horizontally to read each line of text. Horizontal scrolling makes reading extremely difficult and slow.

## Common failure patterns

- fixed-width layouts or containers that do not respond to viewport changes
- wide data tables presented as the primary reading content without a scrollable wrapper
- images or embedded media with fixed pixel widths that overflow the viewport
- multi-column layouts that do not collapse to a single column at narrow widths

## Remediation guidance

- use responsive CSS (relative units, `max-width`, flexbox/grid) to allow single-column reflow
- wrap wide tables in a scrollable container so the rest of the page still reflows
- set images to `max-width: 100%` so they scale within their container
- test at 320px viewport width (or 400% zoom) and fix any horizontal overflow

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
