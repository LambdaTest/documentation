---
id: accessibility-ios-rule-touch-target-sizing
title: Touch Target Sizing
sidebar_label: Touch Target Sizing
description: Rule-level Accessibility guidance for Touch Target Sizing.
slug: accessibility-ios-rule-touch-target-sizing/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-touch-target-sizing/"
    },
    "headline": "Touch Target Sizing",
    "description": "Rule-level Accessibility guidance for Touch Target Sizing.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-touch-target-sizing/",
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

# Touch Target Sizing

Touch targets should be large enough for reliable interaction.

:::info WCAG Reference
**Maps to:** WCAG 2.5.5 Target Size (Enhanced) | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
:::

## What this rule checks

This rule checks whether iOS controls provide enough touch area and spacing for reliable interaction.

## Why it matters

Small or tightly packed targets make interaction harder for users with motor impairments and for anyone using assistive touch patterns.

## Common failure patterns

- icons or text buttons smaller than the recommended touch area
- adjacent controls with almost no spacing between them
- visually large controls whose tappable region is much smaller than the rendered component

## Remediation guidance

- increase the tappable region of small controls
- add spacing between adjacent actions
- verify that custom components preserve touch size across device sizes

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
