---
id: playwright-html-report
title: Consolidated Playwright HTML Report on HyperExecute
hide_title: true
sidebar_label: Test Reports on HyperExecute
description: Learn how to generate html test report for playwright framework testing on lambdatest and download the reports from the dashboard
keywords:
 -  playwright testing with Playwright test runner
  - playwright e2e testing with Playwright test runner
  - playwright mobile testing with Playwright test runner
  - playwright testing on lambdatest Playwright test runner
  - playwright testing lambdatest 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.lambdatest.com/support/docs/playwright-html-report/
site_name: LambdaTest
slug: playwright-html-report/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Playwright Testing With Playwright Test",
          "item": "https://www.lambdatest.com/support/docs/playwright-html-report/"
        }]
      })
    }}
></script>

# Consolidated Playwright HTML Report on HyperExecute 
* * *

Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient automated browser testing. Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

LambdaTest allows you to run Playwright tests across 40+ real browsers and operating system combinations. This guide will help you on how to generate a HTML Report for Playwright testing on the LambdaTest platform.

## Reporters
***

Reporters are components or tools that generate human-readable output to display the results of test executions. They play a crucial role in providing developers, testers, and other stakeholders with valuable insights into the outcomes of automated tests. Reporters take the raw test execution data and format it into a structured and readable presentation.

### Built-in Reporters
Playwright Test provides several pre-defined or built-in reporters. Each reporter may present the test results in a different way, suitable for specific needs or preferences. These built-in reporters offer different levels of detail and visualization options, helping developers to understand the test results and identify any potential issues more effectively.
>
Following are the Playwright built-in reporters:
- List Reporter
- Line Reporter
- Dot Reporter
- HTML Reporter
- JSON Reporter
- JUnit Reporter
- GitHub Actions annotations

### Custom Reporters
Apart from the built-in reporters, Playwright Test also allows developers to create custom reporters i.e. you have the flexibility to define your own format and layout for displaying test results. Custom reporters are beneficial when you have specific reporting requirements or when you want to integrate the test results seamlessly into your existing development or CI/CD (Continuous Integration/Continuous Deployment) workflow.

## HTML Report on HyperExecute
***

There are several built-in reporters in **Playwright Test** for various needs, along with an option to create Custom Reporters.

HTML reporter produces a self-contained folder that contains a report for the test run that can be served as a web page. With Hyperexecute, we support the generation of a single HTML report for the complete job.

By default, an HTML report is opened automatically if some of the tests failed. However, you can control this behavior via the `open` property in the **Playwright config file**. The possible values for that property are `always`, `never`, and `on-failure` (default).

> In the case of Hyperexecute, we always have to set it to `never`.

### Steps to Generate HTML Report on HyperExecute

**Step 1:** Update your Playwright Configuration File by adding the below code

#### playwright.config.js File
```
import { devices } from '@playwright/test';

const config = {
 
    timeout: 5 * 60 * 1000, // Maximum time one test can run for
    testDir: './tests',
    testMatch: /.*\.spec\.js/,
    
    reporter: [['html', { open: 'never' }]],

};
```

:::tip Note

By default, the report is written into the **playwright-report folder** in the current working directory. The same location can be used in the report parameters in the YAML file.

:::

**Step 2:** Now configure the report parameters in the **HyperExecute YAML** file.

```
report: true
partialReports:
  frameworkName: playwright
  location: playwright-report
  type: html
```

**Step 3:** Now Execute your job by triggering the HyperExecute CLI. You can  visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/html-report.webp').default} alt="Image" className="doc_img"/> 