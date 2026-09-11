---
id: accessibility-web-rule-2-5-2-pointer-cancellation
title: Pointer Cancellation (2.5.2)
sidebar_label: Pointer Cancellation (2.5.2)
description: Rule-level Accessibility guidance for Pointer Cancellation (WCAG 2.5.2 Level A).
slug: accessibility-web-rule-2-5-2-pointer-cancellation/
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
          "name": "Pointer Cancellation (2.5.2)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-5-2-pointer-cancellation/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-2-pointer-cancellation/"
    },
    "headline": "Pointer Cancellation (2.5.2)",
    "description": "Rule-level Accessibility guidance for Pointer Cancellation (WCAG 2.5.2 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-5-2-pointer-cancellation/",
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

# Pointer Cancellation (2.5.2)

For single-pointer actions, at least one of the following must be true: the down-event does not trigger the action, the action is triggered on the up-event and can be aborted, the up-event reverses any outcome of the down-event, or completing the action on the down-event is essential.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)
:::


## What this rule checks

The scanner verifies that interactive elements do not fire irreversible actions on `mousedown` or `touchstart` alone, allowing users to abort by moving the pointer away before releasing.

## Why it matters

Users with motor impairments frequently trigger accidental clicks. Firing on the up-event (click/mouseup/touchend) allows them to move the pointer off the target before releasing, cancelling the action.

## Common failure patterns

- destructive actions (delete, submit, purchase) triggered on `mousedown`
- drag-and-drop that commits on `pointerdown` with no undo
- custom buttons that respond to `touchstart` instead of `click`

## Remediation guidance

- use `click` events rather than `mousedown` or `touchstart` for actions
- if down-event activation is needed, provide an undo or confirmation step
- implement drag cancellation by allowing users to drop outside the target zone
- test by pressing down on a button, dragging away, and releasing to confirm no action occurs

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
