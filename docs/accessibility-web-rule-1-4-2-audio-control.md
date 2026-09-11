---
id: accessibility-web-rule-1-4-2-audio-control
title: Audio Control (1.4.2)
sidebar_label: Audio Control (1.4.2)
description: Rule-level Accessibility guidance for Audio Control (WCAG 1.4.2 Level A).
slug: accessibility-web-rule-1-4-2-audio-control/
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
          "name": "Audio Control (1.4.2)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-1-4-2-audio-control/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-2-audio-control/"
    },
    "headline": "Audio Control (1.4.2)",
    "description": "Rule-level Accessibility guidance for Audio Control (WCAG 1.4.2 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-4-2-audio-control/",
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

# Audio Control (1.4.2)

Audio that plays automatically for more than three seconds must provide a mechanism to pause, stop, or control the volume independently of the system volume.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
:::

## What this rule checks

The scanner identifies pages where audio or video with sound starts automatically and runs beyond three seconds without an accessible pause or volume control.

## Why it matters

Screen-reader users hear both the assistive technology output and the page audio simultaneously. Autoplaying audio can drown out the screen reader, making the page unusable until the user can locate and silence the media.

## Common failure patterns

- background music or ambient audio that starts on page load with no pause button
- video banners set to autoplay with sound enabled
- audio players that autoplay and are positioned below the fold, requiring scroll to reach controls

## Remediation guidance

- never autoplay audio; if autoplay is required, start muted and let the user opt in
- provide a visible, keyboard-accessible pause or mute control near the top of the page
- ensure the control is the first or one of the first focusable elements so screen-reader users reach it quickly

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
