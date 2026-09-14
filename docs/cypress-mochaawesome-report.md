---
id: cypress-mochaawesome-report
title: How to Generate Cypress Mochawesome and ReportPortal Reports on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Reporters"
description: Generate consolidated Mochawesome HTML reports and send Cypress results to ReportPortal.io on TestMu AI, then download them from the dashboard.
keywords:
    - cypress mochawesome report
    - cypress mochawesome html report
    - cypress reportportal integration
    - consolidated cypress test report
    - cypress reporter testmu ai
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



# How to Generate Cypress Mochawesome and ReportPortal Reports on TestMu AI
***

If you run Cypress tests on TestMu AI, you can consolidate their results into a single readable report instead of reading raw console output. The Mochawesome reporter produces standalone, interactive HTML reports with test filtering and failure stack traces, and TestMu AI can also forward results to ReportPortal.io. You configure a reporter in `cypress.config.js`, set the report parameters, then download the generated report from the dashboard.

## Generating a Consolidated HTML Report
***

The Mochawesome reporter writes per-spec JSON files that TestMu AI merges into one HTML report. Follow these steps to enable the reporter and generate that consolidated report.

### Update Your Cypress Configuration
***

In your Cypress configuration file `cypress.config.js`, add the following code to enable Mochawesome as a reporter.

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
- The `html` option should be set to `false` because the JSON files are merged later, and the mocha-merge utility does not support HTML files.
- Ensure the `reportDir` path is set to `"cypress/results"`. This path is used to generate logs that will be visible on the dashboard. **Do not change this path.**
:::

### Configure the HyperExecute YAML File
***

In your HyperExecute YAML configuration, define the [`report` parameters in the HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#report) so the run collects the Mochawesome output.

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  frameworkName: cypress
  location: cypress/results
  type: html
```

### Execute Your Tests
***

Run your Cypress tests on HyperExecute using the CLI. After the job completes, open the HyperExecute dashboard to download and view the consolidated Mochawesome report.

<video class="right-side" width="80%" controls id="vid">
<source src= {require('../assets/images/hyperexecute/knowledge-base/reports/cypress-mochawesome-report.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video>

## Send Cypress Results to ReportPortal.io
***

By default, the TestMu AI Cypress multi-reporter generates a Mochawesome report. To send results to ReportPortal.io instead, define a separate reporter configuration file and add the ReportPortal agent as a dependency.

1. Create a [ReportPortal.io account](http://reportportal.io/) and copy your Report Portal credentials from your profile.
2. In your Cypress project, create a file that holds the ReportPortal reporter configuration and credentials.
3. Set that file's name in the `reporter_config_file` capability of `lambdatest-config.json`.
4. Add the `@reportportal/agent-js-cypress` dependency in `lambdatest-config.json` or `package.json`.
5. Run your tests, then open the dashboard to view the results in ReportPortal.

## Related Cypress Guides
***

Continue with the guides below to download and debug your Cypress runs on TestMu AI.

- [Download Cypress reports and artefacts](/support/docs/download-artefacts-cypress/) pulls reports, logs, and other build artefacts back from the dashboard.
- [View detailed Cypress command logs](/support/docs/cypress-detailed-command-logs/) helps you debug test results command by command.
- [Configure Cypress run settings](/support/docs/run-settings/) covers reporter options and every other run option.
