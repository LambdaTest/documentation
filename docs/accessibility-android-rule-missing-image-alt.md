---
id: accessibility-android-rule-missing-image-alt
title: Missing Image Alt
sidebar_label: Missing Image Alt
description: Rule-level Accessibility guidance for Missing Image Alt.
slug: accessibility-android-rule-missing-image-alt/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-image-alt/"
    },
    "headline": "Missing Image Alt",
    "description": "Rule-level Accessibility guidance for Missing Image Alt.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-image-alt/",
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

# Missing Image Alt

Meaningful images in Android experiences need an accessible description.

:::info WCAG Reference
**Maps to:** WCAG 1.1.1 Non-text Content | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
:::

## What this rule checks

This rule checks whether meaningful Android images expose a useful accessibility description for TalkBack and related assistive technologies.

## Why it matters

If meaningful imagery is silent to assistive technology, users can miss content, state, or action context that is visible on screen.

## Common failure patterns

- product or profile images with no `contentDescription`
- icon buttons with visual meaning but no accessible label
- decorative images announced unnecessarily

## Remediation guidance

- add a clear `contentDescription` to meaningful images
- use an empty description for decorative content when appropriate
- verify that image-based controls expose both purpose and action

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
