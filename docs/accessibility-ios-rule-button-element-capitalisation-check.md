---
id: accessibility-ios-rule-button-element-capitalisation-check
title: Button Element Capitalisation Check
sidebar_label: Button Element Capitalisation Check
description: Rule-level Accessibility guidance for Button Element Capitalisation Check on iOS.
slug: accessibility-ios-rule-button-element-capitalisation-check/
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
          "name": "Button Element Capitalisation Check (iOS)",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-button-element-capitalisation-check/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-button-element-capitalisation-check/"
    },
    "headline": "Button Element Capitalisation Check (iOS)",
    "description": "Rule-level Accessibility guidance for Button Element Capitalisation Check on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-button-element-capitalisation-check/",
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

# Button Element Capitalisation Check

Button labels in iOS apps should follow standard capitalisation conventions to ensure VoiceOver reads them naturally and consistently.

:::info WCAG Reference
**Maps to:** WCAG 3.1.6 Pronunciation | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)
:::

## What this rule checks

The scanner flags button labels that use all-uppercase text (e.g., "SUBMIT"), all-lowercase text (e.g., "submit"), or inconsistent capitalisation that affects VoiceOver pronunciation.

## Why it matters

VoiceOver may spell out all-uppercase labels letter by letter (e.g., "S-U-B-M-I-T" instead of "Submit") depending on the speech engine. Inconsistent capitalisation creates an unpredictable listening experience.

## Common failure patterns

- button titles set to "DELETE" or "CANCEL" in all caps
- labels that use lowercase for stylistic reasons ("learn more")
- inconsistent capitalisation within the same screen ("Submit" on one button, "SAVE" on another)
- uppercase applied through code (`uppercased()`) rather than styling

## Remediation guidance

- use title case or sentence case for button labels ("Submit Order", "Learn more")
- if visual uppercase is desired, apply it through `UIButton.Configuration` text transform or CSS `text-transform` rather than changing the actual text string
- ensure the accessibility label uses natural capitalisation even if the visual display is uppercase
- test with VoiceOver to confirm buttons are spoken as words, not spelled out

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
