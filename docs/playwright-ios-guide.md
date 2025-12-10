---
id: playwright-ios-guide
title: How To Run Playwright Tests On LambdaTest iOS Devices
hide_title: false
sidebar_label: Test on iOS Device
description: Here you can learn how to run Playwright tests on the LambdaTest iOS real devices.
keywords:
  - playwright testing
  - playwright ios
  - playwright mobile testing
  - playwright testing on lambdatest
  - playwright testing lambdatest
  - playwright real devices

url: https://www.lambdatest.com/support/docs/playwright-ios-device/
site_name: LambdaTest
slug: playwright-ios-device/
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
          "name": "Getting Started With Playwright Testing",
          "item": "https://www.lambdatest.com/support/docs/playwright-ios-device/"
        }]
      })
    }}
></script>
:::info BETA
Playwright support for iOS Real Devices is in **Beta**.
:::

Playwright test automation on real iOS devices is now supported on LambdaTest. Test on latest iPhone and iPad safari combinations to catch device-specific issues that mobile emulation may miss. Integrate with your existing CI pipeline, and access logs and debugging artifacts for each test run.

This guide will cover the basics of getting started with Playwright testing on iOS devices on the LambdaTest platform.

> Testing with Playwright on real iOS and Android devices is currently supported with Playwright **v1.53.2**

## Prerequisites
**Step 1:** Clone the LambdaTest-Playwright repository on your system using the following command.

```
git clone https://github.com/LambdaTest/playwright-sample/
```

:::tip Sample Repo
All the code samples in this documentation can be found in the LambdaTest's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>
:::

**Step 2:**  Install the npm dependencies.

```bash
npm install
```

**Step 3:**  Add browserWSEndpoint (browser end point URL) in your test script.

```javascript
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

**Step 4:**  In order to run your Playwright tests on iOS devices , you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

## Run Your First Test

**Step 1:** Add the below code snippet in your test scripts to initiate your first Playwright test on LambdaTest.

```javascript title="lambdatest-sample.js" reference
https://github.com/LambdaTest/playwright-sample/blob/58263f6d136f268c224726b492764537adae217e/playwright-ios-real-device.js
```

**Step 2:** Pass the below command to run the test.

```
node playwright-ios-real-device.js
```

## View your Playwright test results
The LambdaTest Automation Dashboard is where you can see the results of your Playwright iOS tests after running them on the LambdaTest platform. 

The below screenshot of LambdaTest Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-ios-real-device.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

:::note
- Only Safari and Node.js integrations are currently supported; we plan to extend compatibility to additional browsers and languages soon.

- Playwright testing on real iOS devices is currently supported on latest iOS versions—iOS 17, iOS 18, and iOS 26—across both iPhones and iPads. Extension of device coverage is currently in progress.
:::
