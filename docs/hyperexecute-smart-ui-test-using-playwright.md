---
id: hyperexecute-smart-ui-test-using-playwright
title: SmartUI Testing in HyperExecute using Playwright
hide_title: false
sidebar_label: Playwright
description: Boost bug detection speed using HyperExecute smart UI testing with Playwright. Perform Visual UI Regression Testing for perfect app delivery.
keywords:
  - smart ui testing in testmu ai
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-test-using-playwright/
site_name: LambdaTest
slug: hyperexecute-smart-ui-test-using-playwright/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "SmartUI Testing",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-test-using-playwright/"
        }]
      })
    }}
></script>

This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Playwright.

## Prerequisites

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environment Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- To run SmartUI tests, you need to have a **Baseline Image** and a **Comparison Image**. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.

:::info
After creating the project, you will get your `PROJECT_TOKEN`. You need to keep this project token safe as it will be used in the further steps below.
:::

## Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Playwright JavaScript from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/HyperExecute-Playwright-Vanilla-JavaScript/tree/smart-ui" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **CDP endpoint** in your tests file.

By setting up the CDP endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```bash
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

Configure the desired capabilities based on your test requirements. For example:

```bash
const capabilities = {
  'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': process.env.HYPEREXECUTE_PLATFORM,
    'build': 'Playwright SmartUI Build',
    'name': 'Playwright SmartUI Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'smartUIProjectName': process.env.SMARTUI_PROJECT || 'SmartUI-PW',
    'smartUIBaseline': true
  }
}
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

## Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

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

## Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Pre** command
- and other necessary YAML Parameters

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
  CACHE_DIR: m2_cache_dir

# Dependency caching for Windows
cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - ${CACHE_DIR}

matrix:
  classname: ["pw-smartui.js"]

pre:
  # install playwright version to be used.
  - npm install playwright@1.42.0 --save-exact

testSuites:
  - node hooks/pw-smartui.js

jobLabel: ['HYP', 'Playwright' 'SmartUI']

```

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 3.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

- Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. Click on the **Approved** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/playwright/1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

- This will redirect you the SmartUI dashboard where you can see all the images you have pushed for the testing.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/playwright/2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

- Now you can make the changes in the UI as per your requirement and trigger the Job once again.

- Again click on the **Apprved** button again.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/playwright/3.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

- Now, you will find two builds in your dashboard. One will be the **Baseline Build** and the other one will be the **Non Baseline Build**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/playwright/4.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

- Open any screenshot from the **Non Baseline Build**, and you can see the comparison between the two screenshots, i.e. the Baseline Image and the Non Baseline Image.

- You can now approve or reject the changes directly from the dashboard as well.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/playwright/5.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>