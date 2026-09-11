---
id: accessibility-android-rule-non-focusable-interactive-element
title: Non-Focusable Interactive Element
sidebar_label: Non-Focusable Interactive Element
description: Rule-level Accessibility guidance for Non-Focusable Interactive Element on Android.
slug: accessibility-android-rule-non-focusable-interactive-element/
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
          "name": "Non-Focusable Interactive Element",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-non-focusable-interactive-element/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-non-focusable-interactive-element/"
    },
    "headline": "Non-Focusable Interactive Element",
    "description": "Rule-level Accessibility guidance for Non-Focusable Interactive Element on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-non-focusable-interactive-element/",
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

# Non-Focusable Interactive Element

Clickable elements must be able to receive keyboard or d-pad focus so external-keyboard and switch-access users can reach them.

:::info WCAG Reference
**Maps to:** WCAG 2.1.1 Keyboard | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
:::

## What this rule checks

The scanner examines visible, enabled interactive elements and reports any that respond to touch but cannot receive input (keyboard/d-pad) focus, and have no focusable interactive ancestor or descendant handling the action on their behalf.

## Why it matters

Users navigating with an external keyboard, D-pad, or switch access move focus between focusable elements and activate the focused one. An element that responds to touch but cannot receive input focus is simply unreachable for them — the action exists for touch users only.

## Common failure patterns

- `setOnClickListener` sets `clickable=true` but does not set `focusable=true` — both are required, and it's easy to add one without the other
- custom controls that intercept touch events but never became focusable
- a clickable child inside a focusable container that does not actually delegate the click

## Remediation guidance

Every clickable element must also be focusable.

- add `android:focusable="true"` or `view.isFocusable = true` on custom clickable views, or use native controls (`Button`, `EditText`, `CheckBox`, `Switch`), which are focusable by default
- in Compose, use `Modifier.clickable {}` inside a `Button`, or add `.focusable()` to custom clickable containers
- where a container handles its children's click (e.g., a list row), make the container both focusable and clickable so keyboard users can reach the action

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
