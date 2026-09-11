---
id: accessibility-web-rule-2-1-1-keyboard
title: Keyboard (2.1.1)
sidebar_label: Keyboard (2.1.1)
description: Rule-level Accessibility guidance for Keyboard (WCAG 2.1.1 Level A).
slug: accessibility-web-rule-2-1-1-keyboard/
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
          "name": "Keyboard (2.1.1)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-1-1-keyboard/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-1-1-keyboard/"
    },
    "headline": "Keyboard (2.1.1)",
    "description": "Rule-level Accessibility guidance for Keyboard (WCAG 2.1.1 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-1-1-keyboard/",
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

# Keyboard (2.1.1)

All interactive functionality must be operable through a keyboard interface without requiring specific timing for individual keystrokes.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
:::

## What this rule checks

The scanner verifies that interactive elements (links, buttons, form controls, and custom widgets) are reachable and operable using keyboard alone: Tab, Shift+Tab, Enter, Space, and arrow keys as appropriate.

## Why it matters

Users who cannot use a mouse, including people who rely on switch devices, voice control, or screen readers, depend entirely on keyboard access. If a control cannot be reached or activated by keyboard, those users are blocked.

## Common failure patterns

- custom dropdowns or modals that respond only to mouse clicks
- drag-and-drop interfaces with no keyboard alternative
- `<div>` or `<span>` elements used as buttons without `tabindex` or keyboard event handlers
- interactive components that require hover to reveal sub-menus

## Remediation guidance

- use native interactive elements (`<button>`, `<a>`, `<select>`) whenever possible
- add `tabindex="0"` and keyboard event listeners to custom interactive widgets
- provide keyboard-equivalent actions for drag-and-drop, swipe, and hover interactions
- test the entire flow using only the keyboard (Tab, Enter, Space, Escape, arrows)

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
