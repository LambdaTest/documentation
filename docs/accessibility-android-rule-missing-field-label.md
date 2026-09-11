---
id: accessibility-android-rule-missing-field-label
title: Missing Field Label
sidebar_label: Missing Field Label
description: Rule-level Accessibility guidance for Missing Field Label.
slug: accessibility-android-rule-missing-field-label/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-field-label/"
    },
    "headline": "Missing Field Label",
    "description": "Rule-level Accessibility guidance for Missing Field Label.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-field-label/",
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

# Missing Field Label

Input fields need labels that clearly describe the expected input.

:::info WCAG Reference
**Maps to:** WCAG 3.3.2 Labels or Instructions | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
:::

## What this rule checks

This rule checks whether Android input controls expose clear labels that describe the purpose of the field to assistive technologies.

## Why it matters

Users need to know what information a field expects before they can complete forms accurately with TalkBack or other assistive tools.

## Common failure patterns

- editable fields with placeholder-only guidance
- inputs without associated labels in custom layouts
- reused generic labels that do not identify the field clearly

## Remediation guidance

- provide a visible and accessible label for each field
- connect the label and field programmatically when the UI framework supports it
- avoid relying on hints alone when they disappear after input starts

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
