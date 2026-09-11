---
id: accessibility-devtools
title: Accessibility DevTools (Overview)
sidebar_label: Accessibility DevTools
description: Overview of TestMu AI Accessibility DevTools for manual and assisted web accessibility testing.
slug: accessibility-devtools/
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
          "name": "Accessibility DevTools (Overview)",
          "item": `${BRAND_URL}/support/docs/accessibility-devtools/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-devtools/"
    },
    "headline": "Accessibility DevTools (Overview)",
    "description": "Overview of TestMu AI Accessibility DevTools for manual and assisted web accessibility testing.",
    "url": "https://www.testmuai.com/support/docs/accessibility-devtools/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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

# Accessibility DevTools (Overview)

Accessibility DevTools is the browser-based workflow for manual and assisted Accessibility testing on websites and web apps.

Use this overview when you need to decide whether DevTools is the right surface, what the browser-based toolkit includes, and how it differs from Automation, Web Scanner, and Test Scheduling. It frames manual and assisted browser sessions in the context of the broader Accessibility product.

## When to use this

Use DevTools when you want to inspect a page directly in the browser, validate issues quickly, or run scan types that are tied to an interactive browsing session.

## What you can do in DevTools

- install the toolkit
- run quick, full-page, partial-page, multi-page, workflow, and keyboard scans
- configure WCAG, best-practice, and needs-review settings
- review issues in an interactive session before moving to reports or remediation

## Product boundary

DevTools is not the same as:

- **Accessibility Automation**, which runs through test frameworks
- **Test Scheduling** (Accessibility), which runs recurring web scans inside the Accessibility product
- **Web Scanner**, the separate Web Scanner product for URL lists and scans, different navigation tree from Accessibility Test Scheduling

## Typical workflow

1. Install the toolkit.
2. Open the target page.
3. Select the right scan type.
4. Review the findings.
5. Move into the dashboard or remediation flow if needed.

## Related docs

- [Install TestMu AI Accessibility Toolkit](/support/docs/accessibility-testing-install-devtools/)
- [Run Your Quick Scan](/support/docs/accessibility-testing-run-quick-scan/)
- [Keyboard Scan](/support/docs/accessibility-keyboard-scan/)
- [Configure Accessibility DevTools](/support/docs/accessibility-devtools-settings/)
