---
id: hyperexecute-katalon-report
title: Katalon Reports on HyperExecute
hide_title: false
sidebar_label: Katalon
description: Learn how to generate Katalon test report for HyperExecute on TestMu AI and download the reports from the dashboard
keywords:
    - Katalon reports
    - hyperexecute Katalon reports
    - hyperexecute testing
url: https://www.testmuai.com/support/docs/hyperexecute-katalon-report/
site_name: TestMu AI
slug: hyperexecute-katalon-report/
canonical: https://www.testmuai.com/support/docs/hyperexecute-katalon-report/
---

import NewTag from '../src/component/newTag';
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
          "name": "Katalon Reports",
          "item": `${BRAND_URL}/support/docs/hyperexecute-katalon-report/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-katalon-report/"
    },
    "headline": "Katalon Reports on HyperExecute",
    "description": "Learn how to generate Katalon test report for HyperExecute on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-katalon-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "Katalon reports",
      "hyperexecute Katalon reports",
      "hyperexecute testing"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the following configurations in your YAML file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports: \n  type: html \n  location: Reports/ \n  frameworkName: katalon"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
HyperExecute provides seamless integration with Katalon Studio, enabling you to generate and view detailed execution reports directly from your test runs. These reports include details such as:

- Test case execution status (Pass/Fail/Skipped)
- Execution time and duration
- Environment and browser details
- Stack traces for failed tests

> Ensure your project is configured with the [Katalon framework]( https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/) and all test scripts are in place.

## Steps to Generate Katalon Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
report: true
partialReports: 
  type: html 
  location: Reports/ 
  frameworkName: katalon
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

> This image shows consolidated report of katalon 10+ versions

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/katalon-report.png').default} alt="Image"  className="doc_img"/>
