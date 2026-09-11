---
id: accessibility-android-rule-interactive-role-undefined
title: Interactive Role Undefined
sidebar_label: Interactive Role Undefined
description: Rule-level Accessibility guidance for Interactive Role Undefined on Android.
slug: accessibility-android-rule-interactive-role-undefined/
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
          "name": "Interactive Role Undefined (Android)",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-interactive-role-undefined/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-interactive-role-undefined/"
    },
    "headline": "Interactive Role Undefined (Android)",
    "description": "Rule-level Accessibility guidance for Interactive Role Undefined on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-interactive-role-undefined/",
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

# Interactive Role Undefined

Interactive Android elements must expose a meaningful accessibility role so TalkBack can announce what the element is and how to interact with it.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags interactive elements (buttons, switches, checkboxes, sliders) that do not expose a recognized accessibility role to the Android accessibility framework.

## Why it matters

TalkBack announces both the accessible name and the role ("Button", "Switch", "Checkbox") to tell users what kind of control they are interacting with. Without a role, users hear the name but cannot tell whether to tap, swipe, or double-tap.

## Common failure patterns

- custom clickable `View` elements with no `accessibilityClassName` override
- `LinearLayout` or `FrameLayout` used as a button with an `onClickListener` but no role
- Jetpack Compose elements using `clickable` without a `role` parameter in `Modifier.semantics`

## Remediation guidance

- use native Android widgets (`Button`, `Switch`, `CheckBox`) whenever possible
- for custom views, override `getAccessibilityClassName()` to return the appropriate widget class name
- in Jetpack Compose, set `role = Role.Button` (or the appropriate role) inside `Modifier.semantics { }`
- test with TalkBack to confirm the announced role matches the element's behavior

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
