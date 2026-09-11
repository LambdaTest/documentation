---
id: accessibility-android-rule-button-capitalization-check
title: Button Element Capitalisation Check
sidebar_label: Button Capitalisation Check
description: Rule-level Accessibility guidance for Button Element Capitalisation Check on Android.
slug: accessibility-android-rule-button-capitalization-check/
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
          "name": "Button Element Capitalisation Check",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-button-capitalization-check/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-button-capitalization-check/"
    },
    "headline": "Button Element Capitalisation Check",
    "description": "Rule-level Accessibility guidance for Button Element Capitalisation Check on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-button-capitalization-check/",
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

Button labels on Android should use consistent, sentence-style capitalization so text-to-speech engines pronounce them correctly.

:::info WCAG Reference
**Maps to:** WCAG 3.1.6 Pronunciation | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)
:::

## What this rule checks

The scanner reviews button labels — including clickable containers acting as buttons — for irregular capitalization: labels that begin with a lowercase letter, mid-word capitalization (e.g., "SubMit", "LogIn"), or an unnecessary capital after a hyphen in hyphenated labels (e.g., "Sign-In" instead of "Sign-in").

## Why it matters

Screen readers use capitalization as a pronunciation cue. Irregular casing — all-caps fragments, camel case, or mixed-case words — can cause text-to-speech engines to spell out letters, split words unnaturally, or mispronounce the label, making the button's purpose harder to understand when heard rather than read.

## Common failure patterns

- marketing-driven all-caps or camel-case strings ("BUY NOW", "LogIn") baked into the source text
- hyphenated labels with inconsistent casing ("Sign-In", "Check-Out")

## Remediation guidance

- use sentence case (e.g., "Save changes") in the underlying string instead of all caps or inconsistent capitalization
- if a stylized all-caps look is desired visually, apply it through styling (`android:textAllCaps`) rather than in the source string, so the underlying accessible text remains normally cased
- keep hyphenated labels in sentence case too — "Sign-in", not "Sign-In"

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
