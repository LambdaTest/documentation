---
id: accessibility-web-rule-1-3-4-orientation
title: Orientation (1.3.4)
sidebar_label: Orientation (1.3.4)
description: Rule-level Accessibility guidance for Orientation (WCAG 1.3.4 Level AA).
slug: accessibility-web-rule-1-3-4-orientation/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-3-4-orientation/"
    },
    "headline": "Orientation (1.3.4)",
    "description": "Rule-level Accessibility guidance for Orientation (WCAG 1.3.4 Level AA).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-3-4-orientation/",
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

# Orientation (1.3.4)

Content must not restrict its view and operation to a single display orientation (portrait or landscape) unless a specific orientation is essential.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
:::


## What this rule checks

The scanner detects CSS or viewport meta configurations that lock the page to a single orientation, preventing users from rotating their device.

## Why it matters

Users with motor disabilities may mount their device in a fixed orientation. Users with low vision may prefer landscape for wider text columns. Locking orientation can make content inaccessible or uncomfortable to use.

## Common failure patterns

- CSS `@media (orientation: portrait)` rules that hide or break content in landscape
- JavaScript that forces a redirect or overlay when the device is rotated
- viewport meta tags that disable user scaling combined with fixed-orientation assumptions

## Remediation guidance

- support both portrait and landscape orientations through responsive design
- remove JavaScript orientation locks unless the content genuinely requires a specific orientation (e.g., a piano keyboard app)
- test the layout in both orientations on real devices
- if a specific orientation is essential, clearly document why

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
