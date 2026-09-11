---
id: accessibility-ios-rule-unique-option-names
title: Unique Option Names
sidebar_label: Unique Option Names
description: Rule-level Accessibility guidance for Unique Option Names on iOS.
slug: accessibility-ios-rule-unique-option-names/
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
          "name": "Unique Option Names",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-unique-option-names/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-unique-option-names/"
    },
    "headline": "Unique Option Names",
    "description": "Rule-level Accessibility guidance for Unique Option Names on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-unique-option-names/",
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

# Unique Option Names

Options within the same selection group must have distinct accessible names so screen reader users can tell them apart.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner checks children of recognized option group containers for duplicate accessible names. The recognized container types are `XCUIElementTypeSegmentedControl`, `XCUIElementTypeTabBar` / `XCUIElementTypeTabGroup`, `XCUIElementTypeRadioGroup`, `XCUIElementTypePicker`, and `XCUIElementTypeMenu` / `XCUIElementTypeMenuBar`.

Within each container, the rule collects visible, interactive children (buttons, tabs, radio buttons, menu items, picker wheels) and checks for children with the same `accessibilityLabel`. Custom views with the `.adjustable` trait are also treated as option-like children. Duplicate labels are reported with a `groupId` that clusters the matching elements together.

Unlike [Duplicate Accessibility Label](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/), which checks the entire screen, this rule looks specifically inside a single selection group, where identically named options make the choice itself meaningless.

## Why it matters

A selection group exists to offer a choice. When three radio buttons all announce as "Option", a screen reader user cannot tell what they are choosing between; position in the group carries the meaning, and position is exactly what a non-visual user does not have.

## Common failure patterns

- segmented controls whose segments were labelled from a shared placeholder string
- radio groups built from custom views where each option's label was set to the group's title
- tab items differentiated only by icon, with identical fallback labels

## Remediation guidance

- give every option within a picker, radio group, or segmented control a distinct accessible name so screen reader users can tell them apart
- don't rely on position or visual styling to differentiate identically labeled options

## Related docs

- [Duplicate Accessibility Label](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
