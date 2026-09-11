---
id: accessibility-ios-rule-missing-editable-element-label
title: Missing Editable Element Label
sidebar_label: Missing Editable Element Label
description: Rule-level Accessibility guidance for Missing Editable Element Label on iOS.
slug: accessibility-ios-rule-missing-editable-element-label/
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
          "name": "Missing Editable Element Label",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-missing-editable-element-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-editable-element-label/"
    },
    "headline": "Missing Editable Element Label",
    "description": "Rule-level Accessibility guidance for Missing Editable Element Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-editable-element-label/",
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

# Missing Editable Element Label

Editable iOS elements (text fields, text views, search bars) must have an accessibility label that describes what input is expected.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags `UITextField`, `UITextView`, `UISearchBar`, and similar editable controls that have no accessibility label and no associated placeholder text that VoiceOver can use as a fallback.

## Why it matters

When a text field has no label, VoiceOver announces "Text field" with no indication of what the user should type. This makes forms, search interfaces, and data entry screens unusable for blind users.

## Common failure patterns

- text fields that rely on visual placeholder text but have no accessibility label
- search bars where the placeholder disappears on focus and no label remains
- multi-line text views (comments, notes) with no accessible description
- form fields where the label is a separate view not programmatically linked to the input

## Remediation guidance

- set `accessibilityLabel` on every editable element to describe the expected input
- use `UITextField`'s placeholder text as a fallback, but provide a proper label for clarity
- group the label and input into a single accessibility element if appropriate
- in SwiftUI, use `.accessibilityLabel("Field description")` on `TextField` views
- test with VoiceOver to confirm each field announces a meaningful description before the user types

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
