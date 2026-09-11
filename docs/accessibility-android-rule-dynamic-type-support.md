---
id: accessibility-android-rule-dynamic-type-support
title: Dynamic Type Support
sidebar_label: Dynamic Type Support
description: Rule-level Accessibility guidance for Dynamic Type Support on Android.
slug: accessibility-android-rule-dynamic-type-support/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-dynamic-type-support/"
    },
    "headline": "Dynamic Type Support",
    "description": "Rule-level Accessibility guidance for Dynamic Type Support on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-dynamic-type-support/",
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

# Dynamic Type Support

On-screen text should be sized in scale-independent pixels (`sp`) so it responds to the user's system font-size setting.

:::info WCAG Reference
**Maps to:** WCAG 1.4.4 Resize Text | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
:::

## What this rule checks

The scanner examines whether on-screen text is sized in `sp` (scale-independent pixels) — the only Android text unit that responds to the user's system-wide font-size preference. Text sized in fixed units (`dp`, `px`, `pt`, `in`, `mm`) renders at a fixed size no matter what the user configures.

:::note
The required device data is available on Android 11+ only; on older devices the rule passes silently rather than flagging an issue.
:::

## Why it matters

Users with low vision commonly increase Android's font-size setting (up to 200%). Text sized in `dp` or `px` ignores that setting entirely — it stays small regardless, leaving the user no way to read it short of using a screen magnifier for every interaction. WCAG 1.4.4 requires that text be resizable up to 200% without loss of content or functionality.

## Common failure patterns

- `android:textSize` declared in `dp` or `px` to "protect" a layout from large fonts
- custom text rendering that computes pixel sizes directly

## Remediation guidance

- replace fixed-unit text sizes with scale-independent units so the accessibility font-scale takes effect — use `sp` for `android:textSize` instead of `dp` or `px`, and avoid setting a fixed text size on `TextView` / `Button` / `EditText`
- test at the system's largest font-size setting and confirm no text clips or truncates (see [Non-Responsive Container Clips Text](/support/docs/accessibility-android-rule-non-responsive-container/) for the layout side of this)

## Related docs

- [Non-Responsive Container Clips Text](/support/docs/accessibility-android-rule-non-responsive-container/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
