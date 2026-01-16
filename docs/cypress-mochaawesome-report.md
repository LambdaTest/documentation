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
  
url: https://www.testmu.ai/support/docs/cypress-mochaawesome-report/
site_name: LambdaTest
slug: cypress-mochaawesome-report/
canonical: https://www.testmu.ai/support/docs/cypress-mochaawesome-report/
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
          "name": "Cypress Mochawesome Report",
          "item": `${BRAND_URL}/support/docs/cypress-mochaawesome-report/`
        }]
      })
    }}
></script>
The Mochawesome reporter is a custom Cypress reporter designed to generate standalone HTML reports. These reports are clean, modern, and interactive, making it easier to visualize test results. With features like filtering tests and displaying stack traces for failures, the Mochawesome report is an essential tool in Cypress for clear and concise test insights.

## Generating a Consolidated HTML Report
Follow these steps to generate a consolidated HTML report using Mochawesome:

### Step 1: Update Your Cypress Configuration
In your Cypress configuration file `cypress.config.js`, add the following code to enable Mochawesome as a reporter:

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
- Ensure the `reportDir` path is set to `"cypress/results"` —this path is used to generate logs that will be visible on the dashboard. **Do not change this path.**
:::

### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  frameworkName: cypress
  location: cypress/results
  type: html
```

### Step 3: Execute Your Tests
Run your Cypress tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Mochawesome report.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/cypress-mochawesome-report.gif').default} alt="Image" className="doc_img"/> 
