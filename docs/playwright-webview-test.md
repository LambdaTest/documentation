---
id: playwright-webview-test
title: How to Test WebViews With Playwright on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "WebView Testing"
description: Run Playwright WebView tests on real Android devices on TestMu AI using the isPwMobileWebviewTest capability and the CDP endpoint.
keywords:
  - playwright webview testing testmu ai
  - playwright android webview
  - test webviews with playwright
  - isPwMobileWebviewTest capability
  - playwright hybrid app testing
url: https://www.testmuai.com/support/docs/playwright-webview-test/
site_name: TestMu AI
slug: playwright-webview-test/
canonical: https://www.testmuai.com/support/docs/playwright-webview-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Playwright Android Webview Testing",
          "item": `${BRAND_URL}/support/docs/playwright-webview-test/`
        }]
      })
    }}
></script>

# How to Test WebViews With Playwright on TestMu AI
***

When your Android app embeds a web browser, you can validate those WebViews with Playwright on real devices through TestMu AI. Testing on real hardware surfaces rendering and interaction defects that emulators miss. You enable the `isPwMobileWebviewTest` capability, point your script at the TestMu AI CDP endpoint, and run your test against a live Android device.


Follow these steps to configure a WebView test and run it on a real Android device on TestMu AI.

## Step 1: Set Up Your Test Suite
***

Use your own project or clone the sample repository to follow along with the same files shown here.

:::tip Sample repo
Clone the code sample from the TestMu AI GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Playwright WebView sample script on the TestMu AI GitHub repository" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, configure the `browserWSEndpoint` (browser endpoint URL) in your test script to run the test on TestMu AI.

```javascript
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

Here is the sample test script for your reference:

```javascript reference title="playwrightwebview.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js
```

## Step 2: Update the Dependencies
***

Update the outdated dependencies before you run the test.

```bash
npm install
```

## Step 3: Set Up Your TestMu AI Credentials
***

Set your TestMu AI credentials in the terminal for your operating system. The commands below are prefilled if you are logged in to TestMu AI.

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

## Step 3: Update Your Test Capabilities
***

Include the following field in the capabilities object to enable WebView testing.

```javascript title="playwrightwebview.js"
const capabilities = {
  "LT:Options": {
    "platformName": "android",
    "isRealMobile": true, //if true, test will run on real devices
    // highlight-next-line
    "isPwMobileWebviewTest": true, //mandatory capability to enable WebView testing
  },
```

:::tip
Use the [Playwright capability generator](https://www.lambdatest.com/capabilities-generator/) to select from a range of options for customizing your tests.
:::

## Step 4: Execute Your Test
***

Run the command below with your test file to execute the WebView test on TestMu AI. Replace `playwrightwebview.js` with your own file name if it differs.

```bash
node playwrightwebview.js
```

Open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to check the status of your test execution.

<img loading="lazy" src={require('../assets/images/playwright-testing/webview-test.png').default} alt="Playwright WebView test session status on the TestMu AI Automation Dashboard" className="doc_img"/>

## Related Playwright Guides
***

Continue with these related guides to extend your Playwright coverage on TestMu AI.

- [How to run Playwright tests on real Android devices](/support/docs/playwright-android/) covers browser testing across Node.js, Java, C#, and Python.
- [How to configure Playwright capabilities](/support/docs/capabilities-for-playwright/) documents every supported capability key.
- [How to set up Playwright test execution](/support/docs/playwright-test-execution-setup/) walks through connecting Playwright to TestMu AI.

