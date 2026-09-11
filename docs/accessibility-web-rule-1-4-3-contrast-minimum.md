---
id: accessibility-web-rule-1-4-3-contrast-minimum
title: Contrast (Minimum) (1.4.3)
sidebar_label: Contrast (Minimum) (1.4.3)
description: Rule-level Accessibility guidance for Contrast (Minimum) (1.4.3).
slug: accessibility-web-rule-1-4-3-contrast-minimum/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-3-contrast-minimum/"
    },
    "headline": "Contrast (Minimum) (1.4.3)",
    "description": "Rule-level Accessibility guidance for Contrast (Minimum) (1.4.3).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-3-contrast-minimum/",
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

# Contrast (Minimum) (1.4.3)

Text and important visual elements need sufficient contrast to remain readable.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
:::

## What this rule checks

This rule checks whether text and important UI elements meet the minimum contrast requirements needed for readable, usable interfaces.

## Why it matters

Low contrast makes content difficult to read for users with low vision, color-vision differences, or difficult viewing conditions.

## Common failure patterns

- light gray text on a white background
- status text that uses color with weak contrast
- disabled-looking controls that are still interactive

## Remediation guidance

- increase the contrast between foreground and background colors
- verify contrast after hover, focus, and active-state styling is applied
- avoid relying on color tokens that look correct in one theme but fail in another

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
