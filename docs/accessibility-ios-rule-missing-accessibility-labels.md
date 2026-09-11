---
id: accessibility-ios-rule-missing-accessibility-labels
title: Missing Accessibility Labels
sidebar_label: Missing Accessibility Labels
description: Rule-level Accessibility guidance for Missing Accessibility Labels.
slug: accessibility-ios-rule-missing-accessibility-labels/
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
          "name": "Missing Accessibility Labels",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-missing-accessibility-labels/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-accessibility-labels/"
    },
    "headline": "Missing Accessibility Labels",
    "description": "Rule-level Accessibility guidance for Missing Accessibility Labels.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-missing-accessibility-labels/",
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

# Missing Accessibility Labels

Interactive iOS elements need accessible names that assistive technologies can announce.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

This rule checks whether meaningful iOS controls and interactive elements expose accessible names through labels and related accessibility properties.

## Why it matters

VoiceOver users depend on clear accessible names to understand what each control does and to move through the interface confidently.

## Common failure patterns

- custom buttons with no `accessibilityLabel`
- image-based controls with no accessible name
- duplicate labels that make multiple controls sound identical

## Remediation guidance

- add accurate labels for meaningful interactive elements
- make labels action-oriented when the element performs an action
- verify the spoken output in VoiceOver after implementation

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
