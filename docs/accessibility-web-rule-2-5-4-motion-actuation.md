---
id: accessibility-web-rule-2-5-4-motion-actuation
title: Motion Actuation (2.5.4)
sidebar_label: Motion Actuation (2.5.4)
description: Rule-level Accessibility guidance for Motion Actuation (WCAG 2.5.4 Level A).
slug: accessibility-web-rule-2-5-4-motion-actuation/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-4-motion-actuation/"
    },
    "headline": "Motion Actuation (2.5.4)",
    "description": "Rule-level Accessibility guidance for Motion Actuation (WCAG 2.5.4 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-4-motion-actuation/",
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

# Motion Actuation (2.5.4)

Functionality triggered by device motion (shaking, tilting) or user motion (gestures captured by a camera) must also be operable through a UI control, and the motion response can be disabled to prevent accidental activation.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html)
:::


## What this rule checks

The scanner identifies interactions driven by device sensors (accelerometer, gyroscope, camera) that do not offer an alternative button or control and cannot be disabled.

## Why it matters

Users who have their device mounted in a fixed position, users with tremors, or users who cannot perform specific physical motions need an alternative way to trigger the same functionality.

## Common failure patterns

- "shake to undo" with no on-screen undo button
- tilt-to-scroll with no scroll controls or keyboard alternative
- camera-based gesture recognition with no button fallback

## Remediation guidance

- provide an on-screen button or control for every motion-triggered action
- allow users to disable motion-based activation in settings
- if motion is essential to the functionality (e.g., a step counter), document the exception
- test with the device in a fixed position to confirm all functionality is reachable through UI controls

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
