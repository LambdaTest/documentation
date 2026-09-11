---
id: specflow-report
title: SpecFlow Report
hide_title: false
sidebar_label: SpecFlow
description: Learn how to generate SpecFlow Report on TestMu AI and download the reports from the dashboard
keywords:
  - specflow testing reports
  - specflow testing testmu ai 
  
url: https://www.testmuai.com/support/docs/specflow-report/
site_name: TestMu AI
slug: specflow-report/
canonical: https://www.testmuai.com/support/docs/specflow-report/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Native Extent Report",
          "item": `${BRAND_URL}/support/docs/specflow-report/`
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
      "@id": "https://www.testmuai.com/support/docs/specflow-report/"
    },
    "headline": "SpecFlow Report",
    "description": "Learn how to generate SpecFlow Report on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/specflow-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "specflow testing reports",
      "specflow testing testmu ai"
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
        "name": "Steps to Generate Specflow Reports on HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n  location: YOUR_REPORTS_LOCATION\n  type: html\n  frameworkName: specflow"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
SpecFlow is a free tool for automating tests using BDD. It's often used to create automation scripts for .NET projects.
This technical document provides a guide on generating SpecFlow reports after executing tests on HyperExecute.

> We also offer [Custom Specflow report](/support/docs/custom-speclow-report/).

## Steps to Generate Specflow Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

<VerifiedTag value="Verified" />

```yaml
report: true
partialReports:
  location: YOUR_REPORTS_LOCATION
  type: html
  frameworkName: specflow
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/specflow.png').default} alt="Image" className="doc_img"/> 
