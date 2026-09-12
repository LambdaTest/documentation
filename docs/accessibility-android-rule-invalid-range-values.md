---
id: accessibility-android-rule-invalid-range-values
title: Invalid Range Values
sidebar_label: Invalid Range Values
description: Rule-level Accessibility guidance for Invalid Range Values on Android.
slug: accessibility-android-rule-invalid-range-values/
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
          "name": "Invalid Range Values",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-invalid-range-values/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-invalid-range-values/"
    },
    "headline": "Invalid Range Values",
    "description": "Rule-level Accessibility guidance for Invalid Range Values on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-invalid-range-values/",
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

# Invalid Range Values

Range controls — sliders, steppers, progress bars — must report a valid, consistent min/max/current value so assistive technology can announce their state correctly.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner examines range controls — sliders (`SeekBar`), progress bars, steppers — and reports controls whose range values are inconsistent: the current value falls outside the declared min/max range, or the min/max range itself is invalid.

## Why it matters

Assistive technology announces a range control's position from its reported values ("50 percent"). When the values are inconsistent, that announcement is wrong or meaningless, and adjusting the control through TalkBack's gestures or Voice Access produces unpredictable results.

## Common failure patterns

- a custom range control exposing placeholder or default values to the accessibility tree
- a slider's value set programmatically before its range was configured
- progress indicators reporting a stale total

## Remediation guidance

- ensure min < max and the current value falls within [min, max] on the control (`SeekBar` / `Slider`)
- for custom range controls, expose the range to assistive technology via `AccessibilityNodeInfo.RangeInfo`

## Limitations

- The Android framework clamps `SeekBar`/`ProgressBar` values internally (e.g., `setProgress(150)` on `max=100` becomes `current=100`). The rule correctly sees the clamped value — this is expected behavior, so framework-clamped assignments do not produce violations.

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
