---
id: accessibility-web-rule-2-5-7-dragging-movements
title: Dragging Movements (2.5.7)
sidebar_label: Dragging Movements (2.5.7)
description: Rule-level Accessibility guidance for Dragging Movements (WCAG 2.5.7 Level AA).
slug: accessibility-web-rule-2-5-7-dragging-movements/
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
          "name": "Dragging Movements (2.5.7)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-5-7-dragging-movements/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-7-dragging-movements/"
    },
    "headline": "Dragging Movements (2.5.7)",
    "description": "Rule-level Accessibility guidance for Dragging Movements (WCAG 2.5.7 Level AA).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-7-dragging-movements/",
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

# Dragging Movements (2.5.7)

Functionality that uses a dragging movement must also be achievable through a single-pointer action without dragging, unless dragging is essential or the functionality is determined by the user agent.


:::info WCAG Reference
**Applies to:** WCAG 2.2
**Introduced in:** WCAG 2.2 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
:::


## What this rule checks

The scanner flags drag-and-drop interactions, slider controls, and reorderable lists that do not offer an alternative single-click or keyboard-based method.

## Why it matters

Users with motor disabilities may not be able to hold a pointer button while moving the cursor. A single-pointer alternative (click source, click target) or keyboard method ensures these users can still accomplish the task.

## Common failure patterns

- kanban boards that require drag-and-drop to move cards between columns
- sliders that can only be adjusted by dragging the thumb
- file upload areas that only accept drag-and-drop with no browse button
- sortable lists with no move-up/move-down buttons

## Remediation guidance

- add move-up/move-down buttons or a "Move to" menu for reorderable lists
- support click-on-source then click-on-destination as an alternative to drag-and-drop
- ensure sliders can be adjusted with arrow keys, or provide a text input alternative
- always include a file browse button alongside drag-and-drop upload zones

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
