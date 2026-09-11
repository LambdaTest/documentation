---
id: accessibility-android-rule-non-responsive-container
title: Non-Responsive Container Clips Text
sidebar_label: Non-Responsive Container
description: Rule-level Accessibility guidance for Non-Responsive Container Clips Text on Android.
slug: accessibility-android-rule-non-responsive-container/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-non-responsive-container/"
    },
    "headline": "Non-Responsive Container Clips Text",
    "description": "Rule-level Accessibility guidance for Non-Responsive Container Clips Text on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-non-responsive-container/",
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

# Non-Responsive Container Clips Text

Layout containers that hold text should size flexibly so they can grow alongside text scaled up by the user's font setting.

:::info WCAG Reference
**Maps to:** WCAG 1.4.10 Reflow | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
:::

## What this rule checks

The scanner examines whether layout containers that hold text use flexible sizing (`match_parent`, `wrap_content`, or `0dp` with `layout_weight`) rather than fixed pixel dimensions. Containers without any text content are not checked — fixed dimensions are legitimate for icons and decorative elements.

:::note
The required device data is available on Android 11+ only; on older devices the rule reports **Incomplete**.
:::

## Why it matters

This rule is the counterpart to [Dynamic Type Support](/support/docs/accessibility-android-rule-dynamic-type-support/): even when text is correctly sized in `sp`, a hard-sized parent container cannot grow with it. When the user enlarges their font scale, the text expands but the container does not — the result is clipped, truncated, or overlapping text, and content can become unreadable or actions unreachable. WCAG 1.4.10 requires content to reflow without loss of information or functionality.

## Common failure patterns

- cards, chips, or banners with hard-coded `layout_width`/`layout_height` in `dp` wrapping text
- fixed-height rows in lists whose text truncates at larger font scales

## Remediation guidance

- identify the container that wraps the clipped text
- replace fixed dimensions with flexible sizing so the container grows with its content — use `match_parent`, `wrap_content`, or `0dp` with `layout_weight` instead of a fixed dp/px dimension. In `ConstraintLayout`, use `0dp` with constraint chains rather than fixed sizes.

## Related docs

- [Dynamic Type Support](/support/docs/accessibility-android-rule-dynamic-type-support/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
