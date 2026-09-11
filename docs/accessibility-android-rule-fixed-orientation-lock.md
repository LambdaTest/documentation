---
id: accessibility-android-rule-fixed-orientation-lock
title: Fixed Orientation Lock
sidebar_label: Fixed Orientation Lock
description: Rule-level Accessibility guidance for Fixed Orientation Lock on Android.
slug: accessibility-android-rule-fixed-orientation-lock/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-fixed-orientation-lock/"
    },
    "headline": "Fixed Orientation Lock (Android)",
    "description": "Rule-level Accessibility guidance for Fixed Orientation Lock on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-fixed-orientation-lock/",
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

# Fixed Orientation Lock

Android activities must support both portrait and landscape orientations unless a specific orientation is essential to the functionality.

:::info WCAG Reference
**Maps to:** WCAG 1.3.4 Orientation | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
:::

## What this rule checks

The scanner flags activities with `android:screenOrientation` set to a fixed value (`portrait`, `landscape`, `sensorPortrait`, `sensorLandscape`) in the manifest, preventing device rotation.

## Why it matters

Users with motor disabilities may mount their device in a fixed orientation (e.g., attached to a wheelchair). Users with low vision may prefer landscape to display larger text. Locking orientation removes this choice and can make the app physically uncomfortable or impossible to use.

## Common failure patterns

- `android:screenOrientation="portrait"` set globally on all activities
- orientation locked programmatically with `setRequestedOrientation()` for non-essential reasons
- splash screens or onboarding locked to portrait that propagate the lock to subsequent screens

## Remediation guidance

- remove `android:screenOrientation` from the manifest (defaults to user-controlled rotation)
- only lock orientation when the content genuinely requires it (e.g., a camera viewfinder)
- test the app in both orientations to confirm layouts adapt correctly
- document any essential orientation requirement with a clear justification

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
