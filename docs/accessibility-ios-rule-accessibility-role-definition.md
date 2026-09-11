---
id: accessibility-ios-rule-accessibility-role-definition
title: Accessibility Role Definition
sidebar_label: Accessibility Role Definition
description: Rule-level Accessibility guidance for Accessibility Role Definition on iOS.
slug: accessibility-ios-rule-accessibility-role-definition/
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
          "name": "Accessibility Role Definition",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-accessibility-role-definition/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-accessibility-role-definition/"
    },
    "headline": "Accessibility Role Definition",
    "description": "Rule-level Accessibility guidance for Accessibility Role Definition on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-accessibility-role-definition/",
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

# Accessibility Role Definition

Interactive iOS elements must expose the correct accessibility traits so VoiceOver announces their role (button, link, switch, header) accurately.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner verifies that interactive elements have appropriate `accessibilityTraits` set, such as `.button`, `.link`, `.header`, `.adjustable`, or `.selected`, matching their actual behavior.

## Why it matters

VoiceOver uses traits to tell users what kind of element they are interacting with and how to use it. Without the correct trait, users may not know they can tap, swipe, or adjust a control.

## Common failure patterns

- custom interactive views with no `accessibilityTraits` set (defaults to `.none`)
- links styled as buttons but missing `.link` trait
- section headers in lists without `.header` trait
- slider-like controls missing `.adjustable` trait

## Remediation guidance

- set `accessibilityTraits` on every interactive element to match its behavior
- use `.button` for tappable controls, `.link` for navigation links, `.header` for section headings
- for adjustable controls (sliders, steppers), set `.adjustable` and implement `accessibilityIncrement()` and `accessibilityDecrement()`
- in SwiftUI, use `.accessibilityAddTraits()` to add the appropriate traits
- test with VoiceOver and confirm the announced trait matches the element's behavior

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
