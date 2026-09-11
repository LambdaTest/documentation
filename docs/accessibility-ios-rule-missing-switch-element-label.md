---
id: accessibility-ios-rule-missing-switch-element-label
title: Missing Switch Element Label
sidebar_label: Missing Switch Element Label
description: Rule-level Accessibility guidance for Missing Switch Element Label on iOS.
slug: accessibility-ios-rule-missing-switch-element-label/
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
          "name": "Missing Switch Element Label",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-missing-switch-element-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-switch-element-label/"
    },
    "headline": "Missing Switch Element Label",
    "description": "Rule-level Accessibility guidance for Missing Switch Element Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-switch-element-label/",
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

# Missing Switch Element Label

iOS switch controls must have an accessibility label that describes the setting they toggle.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags `UISwitch` and `Toggle` (SwiftUI) elements that have no accessibility label, leaving VoiceOver to announce only "Switch, on" or "Switch, off" without context.

## Why it matters

Hearing "Switch, off" tells the user the state but not what the switch controls. Without a label, users cannot make informed decisions about whether to toggle the switch.

## Common failure patterns

- `UISwitch` elements in table cells where the label text is in a separate `UILabel` not programmatically linked
- settings screens where switches are visually paired with labels but not associated in the accessibility tree
- custom switch implementations that do not expose an accessible name

## Remediation guidance

- set `accessibilityLabel` on the `UISwitch` to describe the setting (e.g., "Dark mode", "Push notifications")
- use `UITableViewCell`'s built-in `textLabel` as the accessibility label for the cell when the switch is the cell's accessory view
- in SwiftUI, the `Toggle("Label text")` initializer automatically provides a label. Ensure it is always populated
- test with VoiceOver to confirm the full announcement includes both the setting name and the state

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
