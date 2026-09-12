---
id: accessibility-supported-wcag-browsers
title: Supported WCAG Versions & Browsers
sidebar_label: Supported WCAG Versions & Browsers
description: Reference page for supported WCAG versions, browser scope, and high-level environment considerations in Accessibility Testing.
slug: accessibility-supported-wcag-browsers/
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
          "name": "Supported WCAG Versions & Browsers",
          "item": `${BRAND_URL}/support/docs/accessibility-supported-wcag-browsers/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-supported-wcag-browsers/"
    },
    "headline": "Supported WCAG Versions & Browsers",
    "description": "Reference page for supported WCAG versions, browser scope, and high-level environment considerations in Accessibility Testing.",
    "url": "https://www.testmuai.com/support/docs/accessibility-supported-wcag-browsers/",
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

# Supported WCAG Versions & Browsers

Use this page as a reference for supported WCAG version selection and browser-related considerations across Accessibility workflows.

## Supported WCAG coverage

Current Accessibility docs reference support for these WCAG targets:

- WCAG 2.0 A
- WCAG 2.0 AA
- WCAG 2.1 A
- WCAG 2.1 AA
- WCAG 2.1 AAA
- WCAG 2.2 A
- WCAG 2.2 AA

## Browser considerations

Accessibility web workflows are optimized for Chromium-based browsers. Using current supported browser versions improves compatibility for DevTools and automation-related scans.

## Important caveat

For Playwright Accessibility Automation, Chrome should be used instead of `pw-chromium` because the required extension does not load reliably in bundled Chromium sessions.

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Accessibility FAQ](/support/docs/accessibility-faq/)
