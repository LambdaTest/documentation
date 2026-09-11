---
id: custom-speclow-report
title: Custom Specflow Report
sidebar_label: Custom Specflow
description: Custom specflow report
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/custom-speclow-report/
site_name: TestMu AI
slug: custom-speclow-report/
canonical: https://www.testmuai.com/support/docs/custom-speclow-report/
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
          "name": "HyperExecute Custom Specflow Report",
          "item": `${BRAND_URL}/support/docs/custom-speclow-report/`
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
      "@id": "https://www.testmuai.com/support/docs/custom-speclow-report/"
    },
    "headline": "Custom Specflow Report",
    "description": "Custom specflow report",
    "url": "https://www.testmuai.com/support/docs/custom-speclow-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A valid TestMu AI account.; A configured HyperExecute environment.; A SpecFlow-based test suite..",
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
        "name": "Add the following settings in your YAML file to enable reporting and configure partial reports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n  location: YOUR_REPORTS_LOCATION\n  type: xml\n  frameworkName: specflow-custom\n  email:\n    to: [YOUR_EMAIL_ID]\n    metaInfo: [ \"project-name:YOUR_CUSTOM_PROJECT_NAME\", \"project-env: YOUR_CUSTOM_PROJECT_ENV\" ]"
      }
    ],
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Configuration Changes",
      "description": "To enable custom SpecFlow reporting, make the following changes to your YAML configuration file and test script.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Modify the YAML Configuration File",
          "text": "Add the following settings in your YAML file to enable reporting and configure partial reports: Explanation: report: true \u2192 Enables the reporting feature. partialReports.location \u2192 Specifies the directory where the partial reports will be stored. partialReports.type: xml \u2192 Configures the report format as XML. partialReports.frameworkName: specflow-custom \u2192 Sets the framework name. email.to \u2192 Defines the recipient email address where the reports will be sent. email.metaInfo \u2192 Adds metadata, including project name and environment details, to the report.",
          "url": "https://www.testmuai.com/support/docs/custom-speclow-report/#step-1-modify-the-yaml-configuration-file"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Modify the Test Script",
          "text": "Add the following capability in your test script to ensure the correct execution status is recorded: ((IJavaScriptExecutor)driver).ExecuteScript($\"lambda-info=suitename:YOURSUITENAME:passed\"); Explanation: This script sends test execution information (suite name and status) to TestMu AI. Replace YOURSUITENAME with the appropriate suite name. The passed status can be dynamically changed based on the test result.",
          "url": "https://www.testmuai.com/support/docs/custom-speclow-report/#step-2-modify-the-test-script"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Report Generation and Email Notification",
          "text": "Once the tests are executed, the custom SpecFlow report will be generated and sent to the configured email address. The report will include: Tag-based test summaries and details. Suite-based test summaries and details. Number of tests passed, failed, skipped, or with other statuses. Meta information such as project name and environment.",
          "url": "https://www.testmuai.com/support/docs/custom-speclow-report/#step-3-report-generation-and-email-notification"
        }
      ]
    }
  ]) }}
/>
This guide provides step-by-step instructions on how to generate a custom SpecFlow report in <BrandName /> HyperExecute. By following the specified changes in the YAML file and modifying the test script, users can receive detailed test reports via email.

## Prerequisites
- A valid <BrandName /> account.
- A configured HyperExecute environment.
- A SpecFlow-based test suite.

## Configuration Changes
To enable custom SpecFlow reporting, make the following changes to your YAML configuration file and test script.

### Step 1: Modify the YAML Configuration File
Add the following settings in your YAML file to enable reporting and configure partial reports:

<VerifiedTag value="Verified" />

```yaml
report: true
partialReports:
  location: YOUR_REPORTS_LOCATION
  type: xml
  frameworkName: specflow-custom
  email:
    to: [YOUR_EMAIL_ID]
    metaInfo: [ "project-name:YOUR_CUSTOM_PROJECT_NAME", "project-env: YOUR_CUSTOM_PROJECT_ENV" ]
```

Explanation:
- `report: true` → Enables the reporting feature.
- `partialReports.location` → Specifies the directory where the partial reports will be stored.
- `partialReports.type: xml` → Configures the report format as XML.
- `partialReports.frameworkName: specflow-custom` → Sets the framework name.
- `email.to` → Defines the recipient email address where the reports will be sent.
- `email.metaInfo` → Adds metadata, including project name and environment details, to the report.

### Step 2: Modify the Test Script
Add the following capability in your test script to ensure the correct execution status is recorded:

`((IJavaScriptExecutor)driver).ExecuteScript($"lambda-info=suitename:YOUR_SUITE_NAME:passed");`

Explanation:
- This script sends test execution information (suite name and status) to <BrandName />.
- Replace `YOUR_SUITE_NAME` with the appropriate suite name.
- The passed status can be dynamically changed based on the test result.

### Step 3: Report Generation and Email Notification
Once the tests are executed, the custom SpecFlow report will be generated and sent to the configured email address. The report will include:

- Tag-based test summaries and details.
- Suite-based test summaries and details.
- Number of tests passed, failed, skipped, or with other statuses.
- Meta information such as project name and environment.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/custom-specflow.png').default} alt="Image" className="doc_img"/> 
