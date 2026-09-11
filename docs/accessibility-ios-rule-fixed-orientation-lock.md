---
id: accessibility-ios-rule-fixed-orientation-lock
title: Fixed Orientation Lock
sidebar_label: Fixed Orientation Lock
description: Rule-level Accessibility guidance for Fixed Orientation Lock on iOS.
slug: accessibility-ios-rule-fixed-orientation-lock/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-fixed-orientation-lock/"
    },
    "headline": "Fixed Orientation Lock",
    "description": "Rule-level Accessibility guidance for Fixed Orientation Lock on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-fixed-orientation-lock/",
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

Apps should support both portrait and landscape orientation unless a specific orientation is essential.

:::info WCAG Reference
**Maps to:** WCAG 1.3.4 Orientation | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
:::

## What this rule checks

The scanner reports apps that restrict viewing to a single orientation (portrait or landscape only).

## Why it matters

Users with devices mounted to wheelchairs, or with motor conditions that make rotating a device difficult, have no choice about their screen's orientation. An app locked to portrait is simply sideways for a user whose device is fixed in landscape. WCAG 1.3.4 requires content to work in both orientations unless a specific orientation is essential.

## Common failure patterns

- a blanket portrait lock applied at project creation and never revisited
- individual screens locking orientation to simplify layout work
- video or camera screens locking orientation without restoring it afterward

## Remediation guidance

- support both portrait and landscape orientations unless there's a valid reason to lock one
- if locking orientation is required, provide alternatives or ensure the design accommodates various accessibility needs

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
