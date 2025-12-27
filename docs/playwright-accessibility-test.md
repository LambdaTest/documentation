---
id: playwright-accessibility-test
title: Automation Tests with Accessibility Tool using Playwright
sidebar_label: Playwright
description: Use TestMu AI Accessibility DevTools with Playwright to detect and report accessibility issues with automation, following WCAG guidelines.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Automation
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/playwright-accessibility-test/
site_name: LambdaTest
slug: playwright-accessibility-test/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Accessibility Testing Test",
          "item": "https://www.lambdatest.com/support/docs/playwright-accessibility-test/"
        }]
      })
    }}
></script>
This document walks you through the process of evaluating the accessibility of your website through the execution of automated tests using LambdaTest's Accessibility Tool.

> **Note :** Accessibility Testing for Playwright is currently only supported on the Chrome browser (not Chromium-based browsers).

## Prerequisites

- Your [LambdaTest Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/lambdatest-accessibility-playwright" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

```javascript
  const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Accessibility',
      'name': 'Playwright Accessibility',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      ..//
    }
  }
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 3: Configure the Necessary Capabilities
To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```javascript
const capabilities = {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21a",
  "accessibility.bestPractice": false,
  "accessibility.needsReview": true
};
```

### Step 4: Add the following add-on Script
LambdaTest uses an internal Chrome extension that powers accessibility scans and generates accessibility reports. In your `lambdatest-setup.js` file add these three lines after your page creation command as shown below:

```javascript
// Load the extension for report generation of the accessibility tests
await ltPage.goto("chrome://extensions/?id=johgkfjmgfeapgnbkmfkfkaholjbcnah");
const secondToggleButton = ltPage.locator('#crToggle').nth(0); 
await secondToggleButton.click();
```

### Step 5: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
npx playwright test --config=./playwright.config.js
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/playwright/playwright-accessibility-1.png').default} alt="automation-dashboard" className="doc_img"/> <br />

You can access the detailed accessibility report from the [Accessibility Automation Reports Dashboard](https://accessibility.lambdatest.com/automation)

<img loading="lazy" src={require('../assets/images/accessibility-testing/playwright/playwright-accessibility.png').default} alt="automation-dashboard" className="doc_img"/>
