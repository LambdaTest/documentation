---
id: accessibility-android-rule-emoji-symbol-label
title: Emoji or Symbol Used in Accessibility Label
sidebar_label: Emoji or Symbol in Label
description: Rule-level Accessibility guidance for Emoji or Symbol Used in Accessibility Label on Android.
slug: accessibility-android-rule-emoji-symbol-label/
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
          "name": "Emoji or Symbol Used in Accessibility Label",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-emoji-symbol-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-emoji-symbol-label/"
    },
    "headline": "Emoji or Symbol Used in Accessibility Label",
    "description": "Rule-level Accessibility guidance for Emoji or Symbol Used in Accessibility Label on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-emoji-symbol-label/",
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

# Emoji or Symbol Used in Accessibility Label

Accessible labels should rely on descriptive text rather than emoji or symbols, which screen readers announce inconsistently.

:::info WCAG Reference
**Maps to:** Best Practice (Accessibility Label Quality) — no specific WCAG success criterion
:::

## What this rule checks

The scanner flags interactive elements whose accessible label is made up mostly or entirely of emoji, arrows, geometric shapes, or other special symbols instead of descriptive text. A label is flagged when half or more of its meaningful characters are emoji or symbols. Ordinary punctuation is acceptable; static (non-interactive) text is not checked.

## Why it matters

Screen readers announce emoji and symbols by their Unicode names, which are often verbose, ambiguous, or inconsistent across devices and screen reader versions. A button labeled "→" may be read as "rightwards arrow" — which says nothing about what the button does. A label like "🔥🔥🔥" produces "fire fire fire": noise, not meaning. Users who rely on the spoken label get no usable information about the control's purpose.

## Common failure patterns

- icon-only buttons labeled with the emoji itself ("❤️", "★", "✓") instead of an action description
- decorative symbols included in the accessible name alongside little or no text

## Remediation guidance

- determine intent — check whether the emoji is functional (represents an action) or decorative
- replace functional emoji with a descriptive verb, e.g. change "❤️" to "Add to Favorites"
- hide decorative icons from the focus order instead of labeling them — set `android:importantForAccessibility="no"`

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
