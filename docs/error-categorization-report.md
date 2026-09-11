---
id: error-categorization-report
title: Error Categorization Report
hide_title: false
sidebar_label: Error Categorization
description: Streamline error analysis with the Error Categorization Report. Identify patterns in test failures to enhance quality and efficiency in your testing process.
keywords:
  - error categorization reports
  - error testing testmu ai 
  
url: https://www.testmuai.com/support/docs/error-categorization-report/
site_name: TestMu AI
slug: error-categorization-report/
canonical: https://www.testmuai.com/support/docs/error-categorization-report/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Error Categorization Report",
          "item": `${BRAND_URL}/support/docs/error-categorization-report/`
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
      "@id": "https://www.testmuai.com/support/docs/error-categorization-report/"
    },
    "headline": "Error Categorization Report",
    "description": "Streamline error analysis with the Error Categorization Report. Identify patterns in test failures to enhance quality and efficiency in your testing process.",
    "url": "https://www.testmuai.com/support/docs/error-categorization-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "error categorization reports",
      "error testing testmu ai"
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
The Error Categorization Report is a specialized report that helps simplify the process of identifying and categorizing errors in your HyperExecute job. By organizing test failures with similar characteristics, this report provides a clear and structured overview of problematic stages and associated tests for efficient error tracking and analysis.

:::info
You can generate and download other reports as well, along with the error-report.
:::

## Configure YAML file to Generate the Error Categorization Report

This report is generated when your job includes multiple error categories. To enable the error categorization report, simply pass the [`errorCategorizedReport`](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedreport) flag to your YAML file:

```yaml title="hyperexecute.yaml"
errorCategorizedReport:
  enabled: true
```

:::note
This report does not depend on the [`report: true`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) flag. It will generate the error report even if you do not pass the `report: true` flag in your YAML file.
:::

Now trigger your job on HyperExecute, and if your job fails (encounters any failed tests), it will generate the Error Categorization Report. This report list down all the error summaries along with the specific details. You can also check for the particular error for the specific test.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/error-categorization-report.gif').default} alt="Image" className="doc_img"/> 
