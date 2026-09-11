---
id: accessibility-web-rule-2-5-1-pointer-gestures
title: Pointer Gestures (2.5.1)
sidebar_label: Pointer Gestures (2.5.1)
description: Rule-level Accessibility guidance for Pointer Gestures (WCAG 2.5.1 Level A).
slug: accessibility-web-rule-2-5-1-pointer-gestures/
---
import { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Pointer Gestures (2.5.1)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-5-1-pointer-gestures/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-1-pointer-gestures/"
    },
    "headline": "Pointer Gestures (2.5.1)",
    "description": "Rule-level Accessibility guidance for Pointer Gestures (WCAG 2.5.1 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-1-pointer-gestures/",
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

# Pointer Gestures (2.5.1)

Functionality that uses multi-point or path-based gestures must also be operable with a single-pointer action without a path-based gesture, unless the gesture is essential.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html)
:::


## What this rule checks

The scanner identifies interactions that require multi-touch gestures (pinch, two-finger swipe) or precise path-based gestures (drawing a shape, swiping in a specific direction) without a single-click or single-tap alternative.

## Why it matters

Users with motor disabilities may not be able to perform multi-finger gestures or trace precise paths. Providing a single-pointer alternative ensures these users can still access the functionality.

## Common failure patterns

- pinch-to-zoom as the only way to resize a map or image (no +/- buttons)
- swipe-to-delete with no alternative button or menu option
- drawing-based interactions (signatures, annotations) with no keyboard or button fallback
- two-finger scroll required to navigate within an embedded region

## Remediation guidance

- add button controls for zoom, pan, and delete alongside gesture support
- provide single-tap or single-click alternatives for every multi-point gesture
- for path-based input, offer an alternative method (e.g., typed input, button sequences)
- test with a single mouse click/tap only to confirm all features remain accessible

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
