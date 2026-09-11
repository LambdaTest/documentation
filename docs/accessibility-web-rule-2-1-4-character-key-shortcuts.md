---
id: accessibility-web-rule-2-1-4-character-key-shortcuts
title: Character Key Shortcuts (2.1.4)
sidebar_label: Character Key Shortcuts (2.1.4)
description: Rule-level Accessibility guidance for Character Key Shortcuts (WCAG 2.1.4 Level A).
slug: accessibility-web-rule-2-1-4-character-key-shortcuts/
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
          "name": "Character Key Shortcuts (2.1.4)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-2-1-4-character-key-shortcuts/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-1-4-character-key-shortcuts/"
    },
    "headline": "Character Key Shortcuts (2.1.4)",
    "description": "Rule-level Accessibility guidance for Character Key Shortcuts (WCAG 2.1.4 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-2-1-4-character-key-shortcuts/",
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

# Character Key Shortcuts (2.1.4)

If a keyboard shortcut uses only a single printable character (letter, number, punctuation, or symbol), the user must be able to turn it off, remap it, or it must only be active when the relevant component has focus.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)
:::


## What this rule checks

The scanner identifies keyboard shortcuts bound to single character keys that are active globally on the page rather than scoped to a focused component.

## Why it matters

Voice-input users dictate text that produces character keystrokes. If a page binds actions to single letters (e.g., pressing "s" to search), voice dictation can accidentally trigger those shortcuts, causing unexpected behavior.

## Common failure patterns

- global shortcuts like "s" for search, "j/k" for navigation, or "?" for help
- single-character shortcuts that remain active even when focus is inside a text field
- shortcuts documented only in a help modal, with no way to disable or remap them

## Remediation guidance

- require a modifier key (Ctrl, Alt, Shift) for global shortcuts
- scope single-character shortcuts so they only work when the relevant component is focused
- provide a settings UI to disable or remap character shortcuts
- if modifier keys are not feasible, ensure the shortcut deactivates when a text input has focus

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
