---
id: accessibility-ios-rule-missing-button-element-label
title: Missing Button Element Label
sidebar_label: Missing Button Element Label
description: Rule-level Accessibility guidance for Missing Button Element Label on iOS.
slug: accessibility-ios-rule-missing-button-element-label/
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
          "name": "Missing Button Element Label",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-missing-button-element-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-button-element-label/"
    },
    "headline": "Missing Button Element Label",
    "description": "Rule-level Accessibility guidance for Missing Button Element Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-button-element-label/",
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

# Missing Button Element Label

iOS button elements must have an accessibility label that describes the action they perform.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags `UIButton` and `Button` elements that have no title text, no accessibility label, and rely only on an image or icon without an accessible name for VoiceOver.

## Why it matters

VoiceOver users hear "Button" with no additional context when a button lacks a label. They cannot tell what the button does, making it impossible to confidently interact with the interface.

## Common failure patterns

- icon-only buttons (close X, hamburger menu, share icon) with no accessibility label
- buttons with an image but no title text
- custom button subclasses that override drawing but do not set accessibility properties
- system bar button items using custom images without labels

## Remediation guidance

- set `accessibilityLabel` on every button that does not have visible title text
- for icon-only buttons, describe the action: "Close", "Open menu", "Share"
- in SwiftUI, use `.accessibilityLabel("action description")` on `Button` views
- if the button already has title text, VoiceOver uses it automatically, no additional label needed

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
