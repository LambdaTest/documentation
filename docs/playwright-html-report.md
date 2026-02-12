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
canonical: https://www.testmu.ai/support/docs/playwright-html-report/
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
          "name": "Playwright Testing With Playwright Test",
          "item": `${BRAND_URL}/support/docs/playwright-html-report/`
        }]
      })
    }}
></script>
Playwright offers built-in HTML reports to help visualize the results of your test runs. These reports are detailed, user-friendly, and interactive, allowing you to analyze each test's status, logs, and errors in an organized manner.

## Steps to Generate Consolidated HTML Report
Follow these steps to generate a consolidated Playwright HTML report:

### Step 1: Update Your Playwright Configuration

In your Playwright configuration file `playwright.config.js`, add the following code to enable the reporter:

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

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/playwright-html-report.gif').default} alt="Image" className="doc_img"/> 
