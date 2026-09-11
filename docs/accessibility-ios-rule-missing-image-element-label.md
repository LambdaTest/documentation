---
id: accessibility-ios-rule-missing-image-element-label
title: Missing Image Element Label
sidebar_label: Missing Image Element Label
description: Rule-level Accessibility guidance for Missing Image Element Label on iOS.
slug: accessibility-ios-rule-missing-image-element-label/
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
          "name": "Missing Image Element Label",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-missing-image-element-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-image-element-label/"
    },
    "headline": "Missing Image Element Label",
    "description": "Rule-level Accessibility guidance for Missing Image Element Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-image-element-label/",
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

# Missing Image Element Label

Meaningful `UIImageView` and `Image` elements in iOS apps must have an accessibility label that describes their content or purpose.

:::info WCAG Reference
**Maps to:** WCAG 1.1.1 Non-text Content | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
:::

## What this rule checks

The scanner identifies image elements that are visible on screen and carry meaningful content but have no `accessibilityLabel`, causing VoiceOver to either skip them or announce the image file name.

## Why it matters

VoiceOver users cannot see images. Without a label, they miss the information the image conveys, whether it is a product photo, an avatar, a status icon, or a chart.

## Common failure patterns

- product images in a shopping app with no accessibility label
- user avatars or profile pictures with no descriptive text
- status icons (success checkmark, error X) with no label
- chart or graph images with no text alternative

## Remediation guidance

- set `accessibilityLabel` on every meaningful `UIImageView` to describe what the image shows
- for decorative images, set `isAccessibilityElement = false` to hide them from VoiceOver
- in SwiftUI, use `.accessibilityLabel("description")` on `Image` views
- keep labels descriptive but concise (e.g., "Product photo: Blue running shoes" rather than "image_shoe_blue_v2.png")

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
