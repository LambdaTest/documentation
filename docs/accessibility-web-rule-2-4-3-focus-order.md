---
id: accessibility-web-rule-2-4-3-focus-order
title: Focus Order (2.4.3)
sidebar_label: Focus Order (2.4.3)
description: Rule-level Accessibility guidance for Focus Order (WCAG 2.4.3 Level A).
slug: accessibility-web-rule-2-4-3-focus-order/
---

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-3-focus-order/"
    },
    "headline": "Focus Order (2.4.3)",
    "description": "Rule-level Accessibility guidance for Focus Order (WCAG 2.4.3 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-4-3-focus-order/",
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

# Focus Order (2.4.3)

When a page can be navigated sequentially, interactive components must receive focus in an order that preserves meaning and operability.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
:::

## What this rule checks

The scanner verifies that the tab order of interactive elements follows a logical reading sequence and does not jump unexpectedly between unrelated sections.

## Why it matters

Keyboard users experience a page as a linear sequence of focusable elements. An illogical focus order makes it difficult to understand context, complete multi-step forms, or predict where focus will move next.

## Common failure patterns

- positive `tabindex` values that override the natural DOM order
- visually reordered layouts (CSS Grid/Flexbox `order`) where DOM order does not match visual order
- dynamically injected content that receives focus before the user reaches the trigger
- modals or drawers that do not move focus into themselves on open

## Remediation guidance

- rely on DOM source order rather than positive `tabindex` values
- ensure CSS visual reordering matches the underlying DOM sequence
- move focus into modals, dialogs, and drawers when they open, and return it when they close
- test with keyboard-only navigation to confirm the sequence feels natural

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
