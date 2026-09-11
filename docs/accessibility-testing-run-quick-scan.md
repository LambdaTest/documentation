---
id: accessibility-testing-run-quick-scan
title: Run Your Quick Scan
hide_title: false
sidebar_label: Run Your Quick Scan
description: Improve your website's accessibility by running a quick scan with TestMu AI Accessibility DevTools and efficiently review and resolve any issues found.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
url: https://www.testmuai.com/support/docs/accessibility-testing-run-quick-scan/
site_name: TestMu AI
slug: accessibility-testing-run-quick-scan/
canonical: https://www.testmuai.com/support/docs/accessibility-testing-run-quick-scan/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Run Your Quick Scan",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-run-quick-scan/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-testing-run-quick-scan/"
    },
    "headline": "Run Your Quick Scan",
    "description": "Improve your website's accessibility by running a quick scan with TestMu AI Accessibility DevTools and efficiently review and resolve any issues found.",
    "url": "https://www.testmuai.com/support/docs/accessibility-testing-run-quick-scan/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
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
Quick Scan is the fastest way to check a single page for accessibility issues using the DevTools extension. It scans the full page and returns a list of issues grouped by severity.

:::note
Quick Scan performs the same check as a Full Page Scan. If you want details on what the scan covers and how issues are categorized, see [Full Page Scan](/support/docs/accessibility-testing-full-page-scanner/).
:::

## Prerequisite

- You have [installed the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

## Run the scan

1. Open the target webpage.
2. Open **DevTools** (Inspect panel) and select the **<BrandName /> Accessibility DevTools** tab.
3. Click the **Full Page Scan** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/1.png').default} alt="DevTools quick scan trigger" className="doc_img"/>

## Review the results

The scan returns a list of issues found on the page. Click any issue to see which element is affected and where it appears in the DOM.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/2.png').default} alt="DevTools quick scan results" className="doc_img"/>

## Next steps

- To scan only part of the page, see [Partial Page Scan](/support/docs/accessibility-testing-partial-page-scanner/).
- To scan across multiple pages, see [Multi-Page Scan](/support/docs/accessibility-testing-multi-page-scanner/).
- To configure WCAG version, best practices, and needs review, see [Configure Accessibility DevTools](/support/docs/accessibility-devtools-settings/).
