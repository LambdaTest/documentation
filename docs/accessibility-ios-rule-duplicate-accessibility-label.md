---
id: accessibility-ios-rule-duplicate-accessibility-label
title: Duplicate Accessibility Label
sidebar_label: Duplicate Accessibility Label
description: Rule-level Accessibility guidance for Duplicate Accessibility Label on iOS.
slug: accessibility-ios-rule-duplicate-accessibility-label/
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
          "name": "Duplicate Accessibility Label",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-duplicate-accessibility-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-duplicate-accessibility-label/"
    },
    "headline": "Duplicate Accessibility Label (iOS)",
    "description": "Rule-level Accessibility guidance for Duplicate Accessibility Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-duplicate-accessibility-label/",
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

# Duplicate Accessibility Label

Interactive iOS elements within the same screen must have unique accessibility labels to avoid confusion when multiple controls sound identical to VoiceOver.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner identifies multiple interactive elements on the same screen that share the same accessibility label, making them indistinguishable to VoiceOver users.

## Why it matters

When VoiceOver announces two buttons as "Edit" without any additional context, users cannot tell which one to activate. Unique labels enable users to confidently choose the correct control.

## Common failure patterns

- list cells each containing an "Edit" button or "Delete" button with identical labels
- multiple "Close" buttons in a screen with several dismissible panels
- icon buttons that all share a generic label like "Action" or "More"
- navigation items on different sections of a tabbed interface with the same label

## Remediation guidance

- include context in the label: "Edit shipping address" vs. "Edit billing address"
- for list items, append identifying information: "Delete order #1234"
- use `accessibilityLabel` with specific context rather than generic action words
- in SwiftUI, use `.accessibilityLabel("specific description")` to override default labels
- test by having VoiceOver list all actions on the screen and confirming each is distinguishable

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
