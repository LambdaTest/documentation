---
id: playwright-webview-test
title: Playwright Webview Testing
hide_title: false
sidebar_label: Webview Testing
description: Learn how to perform webview testing on android using playwright framework on TestMu AI platform with 3000+ browsers cross platform.
keywords:
  - playwright testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright android
url: https://www.testmu.ai/support/docs/playwright-webview-test
site_name: LambdaTest
slug: playwright-webview-test
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Playwright Android Webview Testing",
          "item": "https://www.lambdatest.com/support/docs/playwright-webview-test/"
        }]
      })
    }}
></script>
WebView testing is an essential process for ensuring the functionality and reliability of applications that rely on embedded web browsers. This guide provides detailed steps to perform WebView testing using Playwright. It is designed for developers, QA engineers, and anyone involved in software quality assurance.

## Steps to perform Webview testing

### Step 1: Setup your test suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

- If you are using your own project, configure the `browserWSEndpoint` (browser end point URL) in your test script to run the test on LambdaTest

```javascript
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

- Here is the sample test script for your reference:

```javascript reference title="playwrightwebview.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js
```

### Step 2: Update the dependencies
Before proceeding forward, run the below command to update the outdated dependencies

```bash
npm install
```

### Step 3: Update your test Capabilities
Include the following field in the capabilities object to enable WebView testing:

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
Use our [Capability Generator](https://www.lambdatest.com/capabilities-generator/) to select from a wide range of options for customizing your tests.
:::

### Step 4: Setup your LambdaTest credentials

In your terminal (as per your respective Operating System), run these command to setup your LambdaTest credentials.
> You can see your credentials below if you have logged into our platform.

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

### Step 5: Execute your test
Replace the `TEST_FILE_NAME` in the below command with your desired test file to execute that particular test on LambdaTest:

```bash
node playwrightwebview.js
```

Visit the [LambdaTest Web Automation](https://automation.lambdatest.com/build) page to check the status of your test execution.
<img loading="lazy" src={require('../assets/images/playwright-testing/webview-test.png').default} alt="Image"  className="doc_img"/>

