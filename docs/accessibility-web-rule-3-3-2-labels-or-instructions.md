---
id: accessibility-web-rule-3-3-2-labels-or-instructions
title: Labels or Instructions (3.3.2)
sidebar_label: Labels or Instructions (3.3.2)
description: Rule-level Accessibility guidance for Labels or Instructions (WCAG 3.3.2 Level A).
slug: accessibility-web-rule-3-3-2-labels-or-instructions/
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
          "name": "Labels or Instructions (3.3.2)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-3-3-2-labels-or-instructions/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-2-labels-or-instructions/"
    },
    "headline": "Labels or Instructions (3.3.2)",
    "description": "Rule-level Accessibility guidance for Labels or Instructions (WCAG 3.3.2 Level A).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-2-labels-or-instructions/",
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

# Labels or Instructions (3.3.2)

Form fields and interactive controls must have labels or instructions that describe the expected input.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
:::

## What this rule checks

The scanner verifies that form inputs have visible labels programmatically associated with the control, and that fields requiring specific formats include instructions.

## Why it matters

Without labels, screen-reader users hear only "edit text" or "combo box" with no indication of what information is expected. Sighted users benefit from persistent labels too, especially when revisiting a partially completed form.

## Common failure patterns

- input fields that rely on placeholder text as the only label (disappears on focus)
- labels that exist visually but are not associated with the input (`for`/`id` mismatch)
- date or phone fields with no format hint (e.g., "MM/DD/YYYY")
- groups of related fields (address, payment) with no group label or `<fieldset>`

## Remediation guidance

- add a visible `<label>` element with a matching `for` attribute for every form control
- include format instructions or examples near the field (e.g., "Enter date as MM/DD/YYYY")
- use `<fieldset>` and `<legend>` for logically grouped fields
- never use placeholder as a substitute for a visible label

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
