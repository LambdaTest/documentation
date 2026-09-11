---
id: accessibility-ios-rule-dynamic-type-support
title: Dynamic Type Support
sidebar_label: Dynamic Type Support
description: Rule-level Accessibility guidance for Dynamic Type Support on iOS.
slug: accessibility-ios-rule-dynamic-type-support/
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
          "name": "Dynamic Type Support (iOS)",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-dynamic-type-support/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-dynamic-type-support/"
    },
    "headline": "Dynamic Type Support (iOS)",
    "description": "Rule-level Accessibility guidance for Dynamic Type Support on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-dynamic-type-support/",
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

# Dynamic Type Support

iOS apps must support Dynamic Type so text scales according to the user's preferred text size setting.

:::info WCAG Reference
**Maps to:** WCAG 1.4.4 Resize Text | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
:::

## What this rule checks

The scanner verifies that text elements use scalable font styles (either system text styles or custom fonts registered with `UIFontMetrics`) and respond to the user's Dynamic Type preference.

## Why it matters

Users with low vision set a larger preferred text size in iOS Settings. If an app uses fixed font sizes, text remains small regardless of the user's preference, defeating the purpose of the system-wide accessibility feature.

## Common failure patterns

- hard-coded font sizes (e.g., `UIFont.systemFont(ofSize: 14)`) instead of text styles
- custom fonts that are not registered with `UIFontMetrics` for scaling
- layouts that break at large text sizes because they use fixed dimensions
- text that scales but containers do not, causing clipping

## Remediation guidance

- use `UIFont.preferredFont(forTextStyle:)` or register custom fonts with `UIFontMetrics`
- set `adjustsFontForContentSizeCategory = true` on labels and text views
- use Auto Layout with constraints that accommodate text growth
- test with all Dynamic Type sizes, including the five Accessibility sizes beyond the standard range
- in SwiftUI, use `.font(.body)` or other text styles which scale automatically

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
