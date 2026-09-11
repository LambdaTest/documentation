---
id: accessibility-android-rule-insufficient-target-spacing
title: Insufficient Target Spacing
sidebar_label: Insufficient Target Spacing
description: Rule-level Accessibility guidance for Insufficient Target Spacing on Android.
slug: accessibility-android-rule-insufficient-target-spacing/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-insufficient-target-spacing/"
    },
    "headline": "Insufficient Target Spacing",
    "description": "Rule-level Accessibility guidance for Insufficient Target Spacing on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-insufficient-target-spacing/",
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

# Insufficient Target Spacing

Adjacent interactive Android elements must have adequate spacing between them to prevent accidental activation of neighboring controls.

:::info WCAG Reference
**Maps to:** WCAG 2.5.5 Target Size (Enhanced) | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
:::

## What this rule checks

The scanner measures the gap between adjacent clickable or focusable elements and flags pairs that are too close together, increasing the risk of mis-taps.

## Why it matters

Even when individual touch targets meet the minimum size, placing them too close together makes it difficult for users with motor impairments to tap one without accidentally hitting the other. Sufficient spacing reduces errors and improves usability.

## Common failure patterns

- toolbar buttons placed edge-to-edge with no gap
- action buttons in list items (edit, delete, share) packed tightly together
- bottom navigation icons with minimal spacing on small screens
- floating action buttons positioned near other interactive elements

## Remediation guidance

- add at least 8dp of spacing between adjacent interactive elements
- use `android:layout_margin` or Compose `Modifier.padding` to create clear separation
- consider grouping related actions into an overflow menu to reduce density
- test on the smallest supported screen size to confirm spacing remains adequate

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
