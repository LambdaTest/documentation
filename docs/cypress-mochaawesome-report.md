---
id: cypress-mochaawesome-report
title: Consolidated Mochawesome Report for Cypress
hide_title: false
sidebar_label: Cypress Mochawesome
description: Discover how to create MochaAwesome test reports for Cypress framework testing on TestMu AI and how to download these reports from the dashboard
keywords:
    - cypress testing
    - cypress automation testing
    - hyperexecute cypress testing
    - hyperexecute automation testing
    - hyperexecute cypressv10 testing
    - hyperexecute cypress testing
  
url: https://www.testmuai.com/support/docs/cypress-mochaawesome-report/
site_name: TestMu AI
slug: cypress-mochaawesome-report/
canonical: https://www.testmuai.com/support/docs/cypress-mochaawesome-report/
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
          "name": "Cypress Mochawesome Report",
          "item": `${BRAND_URL}/support/docs/cypress-mochaawesome-report/`
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
      "@id": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/"
    },
    "headline": "Consolidated Mochawesome Report for Cypress",
    "description": "Discover how to create MochaAwesome test reports for Cypress framework testing on TestMu AI and how to download these reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "cypress testing",
      "cypress automation testing",
      "hyperexecute cypress testing"
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
        "name": "Step 1: Update Your Cypress Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n:::note\n- The `overwrite` parameter should be set to `true` to ensure the report is replaced with the latest run results.\n- The `html` option should be set to `false` because we will be merging JSON files later, and the mocha-merge utility does not support HTML files.\n- Ensure the `reportDir` path is set to `\"cypress/results\"`. This path is used to generate logs that will be visible on the dashboard. **Do not change this path.**\n:::\n\n### Step 2: Configure the HyperExecute YAML File\nIn your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:\n\n```yaml title=\"hyperexecute.yaml\"\nreport: true\npartialReports:\n  frameworkName: cypress\n  location: cypress/results\n  type: html"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Generating a Consolidated HTML Report",
      "description": "Follow these steps to generate a consolidated HTML report using Mochawesome:",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Update Your Cypress Configuration",
          "text": "In your Cypress configuration file cypress.config.js, add the following code to enable Mochawesome as a reporter: The overwrite parameter should be set to true to ensure the report is replaced with the latest run results. The html option should be set to false because we will be merging JSON files later, and the mocha-merge utility does not support HTML files. Ensure the reportDir path is set to \"cypress/results\". This path is used to generate logs that will be visible on the dashboard. Do not change this path.",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#step-1-update-your-cypress-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure the HyperExecute YAML File",
          "text": "In your HyperExecute YAML configuration, define the report parameters like this:",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#step-2-configure-the-hyperexecute-yaml-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute Your Tests",
          "text": "Run your Cypress tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Mochawesome report.",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#step-3-execute-your-tests"
        }
      ]
    }
  ]) }}
/>
The Mochawesome reporter is a custom Cypress reporter designed to generate standalone HTML reports. These reports are clean, modern, and interactive, making it easier to visualize test results. With features like filtering tests and displaying stack traces for failures, the Mochawesome report is an essential tool in Cypress for clear and concise test insights.

## Generating a Consolidated HTML Report
Follow these steps to generate a consolidated HTML report using Mochawesome:

### Step 1: Update Your Cypress Configuration
In your Cypress configuration file `cypress.config.js`, add the following code to enable Mochawesome as a reporter:

<VerifiedTag value="Verified" />

```javascript title="cypress.config.js"
"reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": [
      "mochawesome"
    ],
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": true,
      "html": false,
      "json": true
    }
  }
```

:::note
- The `overwrite` parameter should be set to `true` to ensure the report is replaced with the latest run results.
- The `html` option should be set to `false` because we will be merging JSON files later, and the mocha-merge utility does not support HTML files.
- Ensure the `reportDir` path is set to `"cypress/results"`. This path is used to generate logs that will be visible on the dashboard. **Do not change this path.**
:::

### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  frameworkName: cypress
  location: cypress/results
  type: html
```

### Step 3: Execute Your Tests
Run your Cypress tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Mochawesome report.

<video class="right-side" width="80%" controls id="vid">
<source src= {require('../assets/images/hyperexecute/knowledge-base/reports/cypress-mochawesome-report.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video> 
