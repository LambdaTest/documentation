---
id: accessibility-jaws-windows
title: JAWS on Windows
sidebar_label: JAWS on Windows
description: "JAWS on Windows for enterprise manual accessibility validation: sessions, web modes, and triage patterns."
slug: accessibility-jaws-windows/
url: https://www.testmuai.com/support/docs/accessibility-jaws-windows/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-jaws-windows/
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
          "name": "JAWS on Windows",
          "item": `${BRAND_URL}/support/docs/accessibility-jaws-windows/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-jaws-windows/"
    },
    "headline": "JAWS on Windows",
    "description": "JAWS on Windows for enterprise manual accessibility validation: sessions, web modes, and triage patterns.",
    "url": "https://www.testmuai.com/support/docs/accessibility-jaws-windows/",
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

# JAWS on Windows

Use this page as the Windows-specific reference for **JAWS** when your accessibility program standardizes on Freedom Scientific tooling alongside or instead of NVDA.

## When to use this

Use JAWS when your team needs to validate important desktop screen-reader flows on Windows and compare behavior across assistive technologies.

## Onboarding: start a productive session

1. Launch **JAWS** before the browser if your IT policy requires it; otherwise JAWS attaches to the active window.
2. Open **Chrome or Edge** (match your automated scan browsers where possible).
3. Press **Insert + Space** to enter **Forms mode** when interacting with native controls, and return to virtual cursor for reading-heavy pages (JAWS announces mode changes).
4. Use **Insert + F6** for headings list, **Insert + F7** for links list, fast ways to audit IA after a scan.
5. Document findings with **speech history** (Insert + Space, then H) when filing bugs.

## What to validate

- screen-reader announcement quality
- control labels and state changes
- table, form, and dialog behavior
- keyboard-only task completion

## Pairing with Accessibility reports

1. Pick the **top five** automated issues from **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)**.
2. Reproduce each with JAWS active; note whether the issue is **real-world blocking** or a false positive.
3. Update tickets with **JAWS-specific** notes (version, synthesizer) for engineering.

## Related docs

- [Screen Reader](/support/docs/screen-reader-on-accessibility/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
