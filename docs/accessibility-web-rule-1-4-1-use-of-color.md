---
id: accessibility-web-rule-1-4-1-use-of-color
title: Use of Color (1.4.1)
sidebar_label: Use of Color (1.4.1)
description: Rule-level Accessibility guidance for Use of Color (WCAG 1.4.1 Level A).
slug: accessibility-web-rule-1-4-1-use-of-color/
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
          "name": "Use of Color (1.4.1)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-1-4-1-use-of-color/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-1-use-of-color/"
    },
    "headline": "Use of Color (1.4.1)",
    "description": "Rule-level Accessibility guidance for Use of Color (WCAG 1.4.1 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-1-use-of-color/",
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

# Use of Color (1.4.1)

Color must not be the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
:::

## What this rule checks

The scanner flags instances where meaning is communicated exclusively through color without a secondary visual indicator such as text, icons, patterns, or underlines.

## Why it matters

Users with color-vision deficiency, low vision, or monochrome displays cannot distinguish elements when the only differentiator is color. Adding a secondary cue ensures everyone perceives the intended meaning.

## Common failure patterns

- required form fields marked only with red text
- chart series differentiated only by color with no patterns or labels
- links within body text that are distinguished only by color (no underline or icon)
- status indicators (success/error) using only green/red with no text or icon

## Remediation guidance

- pair color with a text label, icon, pattern, or border change
- underline links or add a visible icon to distinguish them from surrounding text
- use patterns, hatching, or data labels in charts alongside color
- test the interface with a color-blindness simulator to confirm the secondary cue is visible

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
