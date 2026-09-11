---
id: accessibility-automation
title: Accessibility Automation (Overview)
sidebar_label: Accessibility Automation
description: Overview of TestMu AI Accessibility Automation for web testing across supported frameworks and execution environments.
slug: accessibility-automation/
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
          "name": "Accessibility Automation (Overview)",
          "item": `${BRAND_URL}/support/docs/accessibility-automation/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-automation/"
    },
    "headline": "Accessibility Automation (Overview)",
    "description": "Overview of TestMu AI Accessibility Automation for web testing across supported frameworks and execution environments.",
    "url": "https://www.testmuai.com/support/docs/accessibility-automation/",
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

# Accessibility Automation (Overview)

Accessibility Automation lets teams run accessibility checks as part of automated web test execution.

This overview introduces the Accessibility Automation workflow and supported execution model for running checks alongside automated web tests. You will see how framework-based runs relate to DevTools, Web Scanner, and Test Scheduling, and what to expect from grid execution, settings, and reporting.

## When to use this

Use this workflow when your team already runs automated web tests and wants repeatable Accessibility checks in the same execution path.

## What this includes

- grid-based automation execution
- supported framework integrations
- automation settings such as WCAG version, best practices, and needs review
- reporting through the Accessibility dashboard
- optional CI/CD and HyperExecute orchestration (see **[HyperExecute integration: Selenium accessibility](/support/docs/selenium-hyperexecute-accessibility-tests/)** when running on HyperExecute with Selenium)

## Product boundary

Accessibility Automation is not the same as DevTools, Web Scanner, or Test Scheduling. It is specifically for framework-driven execution.

## Known limitation

For Playwright Accessibility Automation, use Chrome. `pw-chromium` is currently not supported for accessibility report generation because the required extension does not load reliably in bundled Chromium sessions.

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [HyperExecute integration: Selenium accessibility](/support/docs/selenium-hyperexecute-accessibility-tests/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
