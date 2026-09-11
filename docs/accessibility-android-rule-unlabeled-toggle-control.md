---
id: accessibility-android-rule-unlabeled-toggle-control
title: Unlabeled Toggle Control
sidebar_label: Unlabeled Toggle Control
description: Rule-level Accessibility guidance for Unlabeled Toggle Control on Android.
slug: accessibility-android-rule-unlabeled-toggle-control/
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
          "name": "Unlabeled Toggle Control",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-unlabeled-toggle-control/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-unlabeled-toggle-control/"
    },
    "headline": "Unlabeled Toggle Control",
    "description": "Rule-level Accessibility guidance for Unlabeled Toggle Control on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-unlabeled-toggle-control/",
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

# Unlabeled Toggle Control

Android toggle controls (switches, toggle buttons) must have labels that describe what setting they control.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags `Switch`, `ToggleButton`, and `SwitchCompat` elements that have no accessible label, leaving TalkBack to announce only the state ("On" / "Off") without context.

## Why it matters

Hearing "Switch, off" without knowing what the switch controls is useless. TalkBack users need both the label and the state to understand the setting and decide whether to change it.

## Common failure patterns

- `Switch` elements with no `android:text` and no `contentDescription`
- toggle controls where the label is a separate `TextView` not programmatically linked
- custom toggle implementations that do not expose accessibility text

## Remediation guidance

- set `android:text` on the toggle control to describe the setting
- if the label is a separate view, use `android:labelFor` on the label pointing to the toggle
- for Jetpack Compose, set a description in `Modifier.semantics { contentDescription = "..." }`
- test with TalkBack to confirm the full announcement includes both the label and the state

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
