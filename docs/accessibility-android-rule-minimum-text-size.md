---
id: accessibility-android-rule-minimum-text-size
title: Minimum Text Size
sidebar_label: Minimum Text Size
description: Rule-level Accessibility guidance for Minimum Text Size on Android.
slug: accessibility-android-rule-minimum-text-size/
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
          "name": "Minimum Text Size",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-minimum-text-size/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-minimum-text-size/"
    },
    "headline": "Minimum Text Size",
    "description": "Rule-level Accessibility guidance for Minimum Text Size on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-minimum-text-size/",
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

# Minimum Text Size

Text should render at or above a readable minimum size so it isn't difficult to read for users with low vision.

:::info WCAG Reference
**Maps to:** Best Practice (Readable Text) — no specific WCAG success criterion
:::

## What this rule checks

The scanner examines on-screen text and reports elements rendered below the recommended minimum size (16dp on Android) that do not scale with the user's font preference.

## Why it matters

Very small text is hard to read for everyone and unreadable for users with low vision — especially when it is also sized in a fixed unit that ignores the system font scale. Minimum sizes exist because below them, no amount of squinting recovers the content.

## Common failure patterns

- captions, timestamps, and legal text set well below the recommended minimum
- fixed-size fonts that ignore the user's text-size preference
- dense information UIs shrinking text to fit more on screen

## Remediation guidance

- increase any non-scalable text (dp/px) below 16dp to at least the recommended minimum
- prefer `sp` so text scales with the user's font preference (see [Dynamic Type Support](/support/docs/accessibility-android-rule-dynamic-type-support/))

## Limitations

- Text size can only be read from actual `TextView` instances. Custom views drawing text via `Canvas.drawText()` return no size data and are not evaluated.
- The rendering metadata (`ExtraRenderingInfo`) may be unavailable even on Android 11+ for recycled views, WebView content, or views not fully laid out — such elements are not evaluated.

## Related docs

- [Dynamic Type Support](/support/docs/accessibility-android-rule-dynamic-type-support/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
