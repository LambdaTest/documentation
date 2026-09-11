---
id: accessibility-android-rule-meaningful-sequence
title: Meaningful Sequence
sidebar_label: Meaningful Sequence
description: Rule-level Accessibility guidance for Meaningful Sequence on Android.
slug: accessibility-android-rule-meaningful-sequence/
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
          "name": "Meaningful Sequence",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-meaningful-sequence/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-meaningful-sequence/"
    },
    "headline": "Meaningful Sequence",
    "description": "Rule-level Accessibility guidance for Meaningful Sequence on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-meaningful-sequence/",
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

# Meaningful Sequence

The order in which content is announced must match the order in which it visually makes sense to read.

:::info WCAG Reference
**Maps to:** WCAG 1.3.2 Meaningful Sequence | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
:::

## What this rule checks

The scanner examines whether the programmatic reading order of the screen matches the meaningful visual sequence of its content. Detection is AI-based, comparing the announced order against the visual layout. *(AI rule)* Where [Traversal Order Does Not Match Visual Layout](/support/docs/accessibility-android-rule-traversal-order-mismatch/) targets misused traversal overrides on focusable controls, this rule concerns the sequence of the content itself.

## Why it matters

Content whose meaning depends on order — steps in a process, a heading followed by its body, a price next to its product — loses that meaning when announced out of sequence. The user hears all the pieces but cannot reconstruct the whole.

## Common failure patterns

- multi-column layouts read column-by-column when the meaning flows row-by-row
- captions announced before the content they describe
- visual ordering achieved purely through positioning while the hierarchy retains insertion order

## Remediation guidance

- reorder views in the layout to match the visual reading order
- use `android:accessibilityTraversalBefore` / `android:accessibilityTraversalAfter` to set the correct TalkBack traversal sequence when reordering in code isn't possible

## Related docs

- [Traversal Order Does Not Match Visual Layout](/support/docs/accessibility-android-rule-traversal-order-mismatch/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
