---
id: junit-xml-report
title: JUnit XML Report
hide_title: false
sidebar_label: JUnit XML
description: Generate a consolidated JUnit XML report with HyperExecute. Track test results, including pass/fail statuses, with easy-to-follow configuration steps
keywords:
  - junit xml reports
  - report junit xml testmu ai 
  
url: https://www.testmuai.com/support/docs/junit-xml-report/
site_name: TestMu AI
slug: junit-xml-report/
canonical: https://www.testmuai.com/support/docs/junit-xml-report/
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
          "name": "JUnit XML Report",
          "item": `${BRAND_URL}/support/docs/junit-xml-report/`
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
      "@id": "https://www.testmuai.com/support/docs/junit-xml-report/"
    },
    "headline": "JUnit XML Report",
    "description": "Generate a consolidated JUnit XML report with HyperExecute. Track test results, including pass/fail statuses, with easy-to-follow configuration steps",
    "url": "https://www.testmuai.com/support/docs/junit-xml-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "junit xml reports",
      "report junit xml testmu ai"
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
        "name": "In your HyperExecute YAML configuration, define the report parameters like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n    frameworkName: junit\n    location: reports/\n    type: xml"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
A JUnit XML report is an XML-based test result file format used to represent the results of test executions, particularly unit tests. The XML report provides detailed information about the tests run, including which tests passed, failed, were skipped, and any associated error messages.

## Steps to Generate Consolidated JUnit XML Report
Follow these steps to generate a consolidated JUnit XML report:

### Step 1: Update Your Project Configuration
Configure all the necessary dependencies and configurations to your project.

### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [report](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml
report: true
partialReports:
    frameworkName: junit
    location: reports/
    type: xml
```

### Step 3: Execute Your Tests
Run your tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated junit xml report.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/junit-xml-report.png').default} alt="Image" className="doc_img"/> 
