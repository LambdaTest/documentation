---
id: accessibility-web-rule-1-1-1-non-text-content
title: Non-text Content (1.1.1)
sidebar_label: Non-text Content (1.1.1)
description: Rule-level Accessibility guidance for Non-text Content (1.1.1).
slug: accessibility-web-rule-1-1-1-non-text-content/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-1-1-non-text-content/"
    },
    "headline": "Non-text Content (1.1.1)",
    "description": "Rule-level Accessibility guidance for Non-text Content (1.1.1).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-1-1-non-text-content/",
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

# Non-text Content (1.1.1)

Meaningful images and non-text elements need accessible text alternatives.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
:::

## What this rule checks

This rule checks whether meaningful non-text content exposes an accessible text alternative that explains its purpose or information.

## Why it matters

Screen-reader users and other assistive technology users rely on accessible names or descriptions to understand images, icons, and other non-text elements.

## Common failure patterns

- meaningful images with no alt text
- icon-only controls with no accessible name
- charts or visual indicators with no text alternative

## Remediation guidance

- add accurate alt text for meaningful content
- mark decorative content as decorative so it is ignored correctly
- ensure icon-only controls expose an accessible name through the appropriate attribute or label

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
