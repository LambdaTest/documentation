---
id: accessibility-ios-rule-images-with-text
title: Images with Text
sidebar_label: Images with Text
description: Rule-level Accessibility guidance for Images with Text on iOS.
slug: accessibility-ios-rule-images-with-text/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-images-with-text/"
    },
    "headline": "Images with Text",
    "description": "Rule-level Accessibility guidance for Images with Text on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-images-with-text/",
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

# Images with Text

Meaningful text baked into an image's pixels is invisible to VoiceOver and must be provided as real text or an accessible label instead.

:::info WCAG Reference
**Maps to:** WCAG 1.1.1 Non-text Content | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
:::

## What this rule checks

The scanner detects images whose pixels contain rendered text that exists nowhere else on the screen as real text — text content embedded inside an image that isn't readable by assistive technology.

## Why it matters

A screen reader can only speak what the accessibility tree contains. Text baked into a banner, promotion image, or screenshot is invisible to VoiceOver, and it does not scale with Dynamic Type, does not reflow, and cannot be selected or translated. The information exists solely for sighted users.

## Common failure patterns

- marketing banners exported from design tools with headline text flattened into the bitmap
- screenshots or diagrams containing instructions
- stylized text rendered as an image to preserve a custom font

## Remediation guidance

- avoid embedding meaningful text inside images — use real text views with an `accessibilityLabel` set so VoiceOver can read the content
- if the image is decorative, mark it as such so screen readers skip it

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
