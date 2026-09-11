---
id: accessibility-android-rule-redundant-role-label
title: Redundant Role Keyword in Accessibility Label
sidebar_label: Redundant Role in Label
description: Rule-level Accessibility guidance for Redundant Role Keyword in Accessibility Label on Android.
slug: accessibility-android-rule-redundant-role-label/
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
          "name": "Redundant Role Keyword in Accessibility Label",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-redundant-role-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-redundant-role-label/"
    },
    "headline": "Redundant Role Keyword in Accessibility Label",
    "description": "Rule-level Accessibility guidance for Redundant Role Keyword in Accessibility Label on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-redundant-role-label/",
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

# Redundant Role Keyword in Accessibility Label

Accessible labels shouldn't repeat a control's role — words like "button" or "switch" — since TalkBack already announces the role separately.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags accessible names that embed the control's role — words like "button", "switch", "checkbox", "slider", "dropdown" — on controls whose role TalkBack already announces. Common informal variants are also flagged ("btn", "toggle", "text field", "picker"), since they encode the same role intent. Only role words matching the actual control type are considered: "Play button" on a text label that is not a button is not flagged.

## Why it matters

TalkBack appends the role to every announcement. A Button labeled "Submit button" is announced as "Submit button, Button" — the user hears the role twice on every focus. Across a whole screen this doubles the verbosity of navigation and slows down screen reader users without adding any information.

## Common failure patterns

- labels that describe the widget instead of the action: "Settings icon", "Search button", "Volume slider"
- abbreviated role words in labels: "Submit btn", "WiFi toggle"

## Remediation guidance

- identify role keywords — find words like "button", "link", or "icon" in the label that describe the control's type
- remove them — "Settings Icon" becomes "Settings"
- assign the role programmatically instead — use the `Button` class, or `role = Role.Button` in Compose, so TalkBack announces it once, correctly

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
