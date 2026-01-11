---
id: playwright-real-device-on-hyperexecute
title: Running Playwright Real Device Tests on HyperExecute
hide_title: false
sidebar_label: Real Device
description: Learn how to run playwright automation tests using Real Devices on HyperExecute
keywords:
    - hyperexecute
    - hyperexecute testing
    - real devices
    - playwright
    - playwright test
    - playwright hyperexecute
    - real device playwright
    - real device test
url: https://www.testmu.ai/support/docs/playwright-real-device-on-hyperexecute
site_name: LambdaTest
slug: playwright-real-device-on-hyperexecute
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
          "name": "How to run playwright real deices automation tests on HyperExecute",
          "item": `${BRAND_URL}/support/docs/playwright-real-device-on-hyperexecute/`
        }]
      })
    }}
></script>
This guide explains how to run your **Playwright** tests on **Real devices (Android and iOS)**  using HyperExecute:

## Prerequisites
Before running your tests, ensure you have:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file with the test configuration.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .

## Step 1: Set Up Your Test Project
You can use your own Playwright project or try the sample repo:. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Playwright Real Device from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Configure Desired Capabilities
Update your test configuration with the required capabilities.

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>
    ```javascript title="playwright-android-real-device.js" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-android-real-device.js
    ```
  </TabItem>

  <TabItem value="ios" label="iOS" default>
    ```javascript title="playwright-ios-real-device.js" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-ios-real-device.js
    ```
  </TabItem>
</Tabs>

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

### Configure the CDP URL
You will have to update the **CDP (Chrome DevTools Protocol) URL** which is a protocol used for communication between the browser and the developer tools.

```javascript title="playwright-ios-real-device.js"
const browser = await chromium.connect({
  wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

## Step 2: Download the CLI in your Project
The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the project to execute the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Host Machine | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

## Step 3: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>
    ```yaml title="hyperexecute_android.yaml" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_android.yaml
    ```
  </TabItem>

  <TabItem value="ios" label="iOS" default>
    ```yaml title="hyperexecute_ios.yaml" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_ios.yaml
    ```
  </TabItem>
</Tabs>

:::info
To Run test on Mobile Containers in a Particular Region

```yaml title="hyperexecute.yaml"
dynamicAllocation: true

framework:
  name: appium
  args:
    playwrightRD : true
    region: ap       # supported regions -> ap, eu, us 
    reservation: false
```
- If **`reservation : false`**, it means that it will allocate the device from any region. If you want to allocate the device of any specific region, keep the **`reservation : true`**.
:::

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/3.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Step 6: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/4.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>