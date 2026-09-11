---
id: accessibility-ios-rule-non-accessible-interaction
title: Non-accessible Interaction
sidebar_label: Non-accessible Interaction
description: Rule-level Accessibility guidance for Non-accessible Interaction on iOS.
slug: accessibility-ios-rule-non-accessible-interaction/
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
          "name": "Non-accessible Interaction",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-non-accessible-interaction/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-non-accessible-interaction/"
    },
    "headline": "Non-accessible Interaction",
    "description": "Rule-level Accessibility guidance for Non-accessible Interaction on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-non-accessible-interaction/",
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

# Non-accessible Interaction

Every interaction available to touch users must also be reachable through VoiceOver, Switch Control, or Voice Control.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags interactive elements that can't be accessed or activated via assistive technology. The action exists for touch users but is unreachable through VoiceOver, Switch Control, or Voice Control.

## Why it matters

An interaction that assistive technology cannot reach is a feature that does not exist for those users. Unlike a mislabelled control, which is confusing but present, an inaccessible interaction is silently absent: nothing announces it, nothing can focus it, and nothing can activate it.

## Common failure patterns

- gesture-only interactions (swipe, long-press, drag) with no accessible equivalent action
- a tappable view hidden from the accessibility tree while remaining visually interactive
- custom controls that never became accessibility elements

## Remediation guidance

- make sure any action (a custom button, link, or gesture) can be reached by assistive technology and has a clear description
- use descriptive labels like "Play", "Delete", rather than generic labels (e.g., "Button1")

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
