---
id: playwright-html-report
title: Consolidated Playwright HTML Report
hide_title: false
sidebar_label: Playwright HTML
description: Learn how to generate html test report for playwright framework testing on TestMu AI and download the reports from the dashboard
keywords:
 -  playwright testing with Playwright test runner
  - playwright e2e testing with Playwright test runner
  - playwright mobile testing with Playwright test runner
  - playwright testing on testmu ai Playwright test runner
  - playwright testing testmu ai 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.testmuai.com/support/docs/playwright-html-report/
site_name: TestMu AI
slug: playwright-html-report/
canonical: https://www.testmuai.com/support/docs/playwright-html-report/
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
          "name": "Playwright Testing With Playwright Test",
          "item": `${BRAND_URL}/support/docs/playwright-html-report/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-html-report/"
    },
    "headline": "Consolidated Playwright HTML Report",
    "description": "Learn how to generate html test report for playwright framework testing on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/playwright-html-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "playwright testing with Playwright test runner",
      "playwright e2e testing with Playwright test runner",
      "playwright mobile testing with Playwright test runner"
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
        "name": "Step 1: Update Your Playwright Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ":::note\n- In the case of HyperExecute, we always have to set the value of `open: never`.\n\n- By default, the report is written into the **playwright-report folder** in the current working directory. The same location can be used in the report parameters in the YAML file.\n:::\n\n### Step 2: Configure the HyperExecute YAML File\nIn your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:\n\n```yaml title=\"hyperexecute.yaml\"\nreport: true\npartialReports:\n  frameworkName: playwright\n  location: playwright-report\n  type: html"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Generate Consolidated HTML Report",
      "description": "Follow these steps to generate a consolidated Playwright HTML report:",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Update Your Playwright Configuration",
          "text": "In your Playwright configuration file playwright.config.js, add the following code to enable the reporter: In the case of HyperExecute, we always have to set the value of open: never. By default, the report is written into the playwright-report folder in the current working directory. The same location can be used in the report parameters in the YAML file.",
          "url": "https://www.testmuai.com/support/docs/playwright-html-report/#step-1-update-your-playwright-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure the HyperExecute YAML File",
          "text": "In your HyperExecute YAML configuration, define the report parameters like this:",
          "url": "https://www.testmuai.com/support/docs/playwright-html-report/#step-2-configure-the-hyperexecute-yaml-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute Your Tests",
          "text": "Run your Playwright tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Plywright HTML report.",
          "url": "https://www.testmuai.com/support/docs/playwright-html-report/#step-3-execute-your-tests"
        }
      ]
    }
  ]) }}
/>
Playwright offers built-in HTML reports to help visualize the results of your test runs. These reports are detailed, user-friendly, and interactive, allowing you to analyze each test's status, logs, and errors in an organized manner.

## Steps to Generate Consolidated HTML Report
Follow these steps to generate a consolidated Playwright HTML report:

### Step 1: Update Your Playwright Configuration

In your Playwright configuration file `playwright.config.js`, add the following code to enable the reporter:

<VerifiedTag value="Verified" />

```javascript title="playwright.config.js"
import { devices } from '@playwright/test';

const config = {
  ...//
  reporter: [['html', { open: 'never' }]],
  ...//
};
```
:::note
- In the case of HyperExecute, we always have to set the value of `open: never`.

- By default, the report is written into the **playwright-report folder** in the current working directory. The same location can be used in the report parameters in the YAML file.
:::

### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  frameworkName: playwright
  location: playwright-report
  type: html
```

### Step 3: Execute Your Tests
Run your Playwright tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Plywright HTML report.

<video class="right-side" width="80%" controls id="vid">
<source src= {require('../assets/images/hyperexecute/knowledge-base/reports/playwright-html-report.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video> 
