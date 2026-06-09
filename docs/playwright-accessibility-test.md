---
id: playwright-accessibility-test
title: Automation Tests with Accessibility Tool using Playwright
sidebar_label: Playwright
description: Use TestMu AI Accessibility Automation with Playwright to detect and report accessibility issues during automated test execution.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/playwright-accessibility-test/
site_name: TestMu AI
slug: playwright-accessibility-test/
canonical: https://www.testmuai.com/support/docs/playwright-accessibility-test/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Playwright Accessibility Automation",
          "item": `${BRAND_URL}/support/docs/playwright-accessibility-test/`
        }]
      })
    }}
></script>
This document walks you through the process of evaluating the accessibility of your website through the execution of automated tests using <BrandName />'s Accessibility Tool.

> **Note:** Accessibility Testing for Playwright is currently supported on the **Chrome browser**. It is **not supported on `pw-chromium`**.

:::caution Current limitation for `pw-chromium`
Accessibility report generation in Playwright depends on a Chrome extension required by the platform being loaded during the session.

With **Playwright's bundled Chromium (`pw-chromium`)**, the required extension is not loaded reliably, so accessibility reports may not be generated even when `accessibility: true` is enabled and the scan hook runs correctly.

**Current recommendation:** run your Playwright accessibility tests on **Chrome** instead of `pw-chromium`.
:::

## Prerequisites

- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

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

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator</a>.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

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

To enable the accessibility testing within your automated test suite, set `accessibility: true` in your configuration file.

There are two primary ways to run accessibility tests:

#### 1. On-Demand Scans (via Hooks)
For precise control over which pages are scanned, you can trigger scans manually at specific points in your test execution. This is the recommended approach to reduce test execution time and focus only on relevant pages.

To use this, simply enable accessibility in your capabilities:

```javascript
capabilities['accessibility'] = true; // Enable accessibility testing
```

Then, trigger the scan directly within your test script when the desired page is fully loaded:

```javascript
// Execute the LambdaTest accessibility scan hook
await page.evaluate('lambda-accessibility-scan');
```

*Note: If you do not execute the hook in your script when using this method, no accessibility reports will be generated.*

#### 2. Continuous Auto-Scanning
If you want the accessibility scanner to run automatically on every single page navigation throughout the entire test session without writing manual hooks, you can pass the `accessibility.autoscan` capability:

```javascript
capabilities['accessibility'] = true; // Enable accessibility testing
capabilities['accessibility.autoscan'] = true; // Automatically scan all pages
```

#### Advanced Capabilities
You can also define other settings capabilities to refine your scan rules as described below:

```javascript
const capabilities = {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa", // Specify WCAG version (e.g., WCAG 2.1 Level AA)
  "accessibility.bestPractice": false,     // Exclude best practice issues from results
  "accessibility.needsReview": true        // Include issues that need review
};
```

:::note Browser choice for Playwright accessibility
If your Playwright project is not browser-specific, use **Chrome** for accessibility automation until `pw-chromium` extension loading is supported reliably.

This is the safest workaround when reports are not being generated for `pw-chromium`.
:::

### Step 4: Add the following add-on Script
<BrandName /> uses a Chrome extension for accessibility scans and report generation. In your `lambdatest-setup.js` file add these three lines after your page creation command as shown below:

```javascript
// Load the extension for report generation of the accessibility tests
await ltPage.goto("chrome://extensions/?id=johgkfjmgfeapgnbkmfkfkaholjbcnah");
const secondToggleButton = ltPage.locator('#crToggle').nth(0); 
await secondToggleButton.click();
```

:::caution Why this fails on `pw-chromium`
If you run the same setup on **Playwright bundled Chromium (`pw-chromium`)**, the required accessibility extension may not stay loaded, which prevents accessibility report generation.

At the moment, there is no confirmed public workaround for this behavior. Use **Chrome** for accessibility automation on Playwright.
:::

### Step 5: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
npx playwright test --config=./playwright.config.js
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/playwright/playwright-accessibility-1.png').default} alt="automation-dashboard" className="doc_img"/> <br />

You can access the detailed accessibility report from the [Accessibility Automation Reports Dashboard](https://www.testmuai.com/login/?redirectTo=https://accessibility.lambdatest.com/automation)

<img loading="lazy" src={require('../assets/images/accessibility-testing/playwright/playwright-accessibility.png').default} alt="automation-dashboard" className="doc_img"/>

## Troubleshooting

| Issue | What it means | Recommended action |
|---|---|---|
| Accessibility report is not generated on `pw-chromium` | The required accessibility extension is not loading reliably in Playwright bundled Chromium | Run the same test on **Chrome** instead of `pw-chromium` |
| Hook executes but no report appears | `lambda-accessibility-scan` ran, but the accessibility extension was not active in the session | Use **Chrome**, then rerun the test |
| Unsure whether this is a product bug or setup issue | The test may be correct, but the browser target is unsupported for accessibility automation | Verify the browser is **Chrome**, not `pw-chromium` |
| Customer needs immediate unblock | Browser is not central to the use case | Ask the customer to run functional + accessibility automation on **Chrome** until the limitation is resolved |
