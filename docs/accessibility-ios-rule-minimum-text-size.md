---
id: accessibility-ios-rule-minimum-text-size
title: Minimum Text Size
sidebar_label: Minimum Text Size
description: Rule-level Accessibility guidance for Minimum Text Size on iOS.
slug: accessibility-ios-rule-minimum-text-size/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-minimum-text-size/"
    },
    "headline": "Minimum Text Size",
    "description": "Rule-level Accessibility guidance for Minimum Text Size on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-minimum-text-size/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "What this rule checks",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "estimatedFontSize = frameHeight / 1.1777"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Minimum Text Size

Text should render at or above a readable minimum size so it isn't difficult to read for users with low vision.

:::info WCAG Reference
**Maps to:** Best Practice (Readable Text) — no specific WCAG success criterion
:::

## What this rule checks

The scanner estimates the font size of text elements from their accessibility frame height using the San Francisco font's line-height ratio:

```
estimatedFontSize = frameHeight / 1.1777
```

Where 1.1777 is the constant ratio of ascender (0.9668) minus descender (−0.2109) for the San Francisco typeface. A violation is reported when the estimated font size falls below **11pt**, the Apple Human Interface Guidelines minimum.

Two guards prevent false positives from unreliable frame heights: elements with frame height below 4pt are skipped (collapsed/clipped SwiftUI composite controls), and elements whose frame touches the top or bottom screen edge (within 2pt) are skipped (partially scrolled-off elements with truncated frames).

## Why it matters

Very small text is hard to read for everyone and unreadable for users with low vision, especially when it also fails to scale with the user's font preference. Minimum sizes exist because below them, no amount of squinting recovers the content.

## Common failure patterns

- captions, timestamps, and legal text set well below the recommended minimum
- fixed-size fonts that ignore the user's text-size preference
- dense information UIs shrinking text to fit more on screen

## Remediation guidance

- increase any non-scalable text below 11pt to at least the recommended minimum
- prefer Dynamic Type styles so text scales with the user's font preference (see [Dynamic Type Support](/support/docs/accessibility-ios-rule-dynamic-type-support/))

## Related docs

- [Dynamic Type Support](/support/docs/accessibility-ios-rule-dynamic-type-support/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
