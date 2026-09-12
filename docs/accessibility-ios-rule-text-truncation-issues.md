---
id: accessibility-ios-rule-text-truncation-issues
title: Text Truncation Issues
sidebar_label: Text Truncation Issues
description: Rule-level Accessibility guidance for Text Truncation Issues on iOS.
slug: accessibility-ios-rule-text-truncation-issues/
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
          "name": "Text Truncation Issues",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-text-truncation-issues/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-text-truncation-issues/"
    },
    "headline": "Text Truncation Issues",
    "description": "Rule-level Accessibility guidance for Text Truncation Issues on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-text-truncation-issues/",
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

# Text Truncation Issues

Text content in iOS apps must not be truncated in ways that hide meaningful information from users, especially when Dynamic Type increases font sizes.

:::info WCAG Reference
**Maps to:** WCAG 1.4.4 Resize Text | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
:::

## What this rule checks

The scanner identifies text elements that are clipped or truncated (ending with "...") when the content contains meaningful information that is lost, particularly when the user has increased the text size through Dynamic Type settings.

## Why it matters

Users with low vision rely on Dynamic Type to increase text size. If the app truncates text instead of expanding or wrapping, these users lose access to important information like button labels, instructions, or data values.

## Common failure patterns

- labels with a fixed `numberOfLines = 1` that truncate long content
- table cells with fixed heights that clip multi-line text at larger Dynamic Type sizes
- navigation bar titles that truncate when text size increases
- buttons with fixed widths that clip label text

## Remediation guidance

- use `numberOfLines = 0` with Auto Layout constraints to allow text to wrap
- set minimum cell heights using Auto Layout rather than fixed values
- use `adjustsFontForContentSizeCategory = true` on text elements
- test with the largest Dynamic Type size (Accessibility sizes enabled) to confirm no meaningful content is lost

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
