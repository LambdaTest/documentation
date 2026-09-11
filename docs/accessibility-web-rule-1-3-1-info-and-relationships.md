---
id: accessibility-web-rule-1-3-1-info-and-relationships
title: Info and Relationships (1.3.1)
sidebar_label: Info and Relationships (1.3.1)
description: Rule-level Accessibility guidance for Info and Relationships (WCAG 1.3.1 Level A).
slug: accessibility-web-rule-1-3-1-info-and-relationships/
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
          "name": "Info and Relationships (1.3.1)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-1-3-1-info-and-relationships/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-3-1-info-and-relationships/"
    },
    "headline": "Info and Relationships (1.3.1)",
    "description": "Rule-level Accessibility guidance for Info and Relationships (WCAG 1.3.1 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-1-3-1-info-and-relationships/",
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

# Info and Relationships (1.3.1)

Content structure conveyed visually through layout, formatting, or styling must also be available programmatically so assistive technologies can interpret and present it correctly.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
:::

## What this rule checks

The scanner verifies that headings, lists, tables, form groups, and landmark regions use correct semantic HTML rather than relying on visual appearance alone.

## Why it matters

Screen-reader users navigate by structure: headings, lists, and landmarks act as signposts. When structure is only visual (e.g., bold text instead of a heading element), assistive technology cannot expose it, and users lose the ability to skim, jump, and orient themselves.

## Common failure patterns

- text styled to look like a heading but using `<div>` or `<span>` instead of `<h1>`–`<h6>`
- data presented in a grid layout but not using `<table>`, `<th>`, and `<td>`
- form fields grouped visually but missing `<fieldset>` and `<legend>`
- navigation and content areas without landmark roles (`<nav>`, `<main>`, `<aside>`)

## Remediation guidance

- use native semantic elements for headings, lists, tables, and form groups
- add ARIA landmarks only when native elements are not available
- verify heading levels follow a logical nesting order without skipping levels
- test with a screen reader to confirm the announced structure matches the visual layout

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
