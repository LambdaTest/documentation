---
id: playwright-real-device-on-hyperexecute
title: Run playwright automation tests on HyperExecute using Real Devices
hide_title: true
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
url: https://www.lambdatest.com/support/docs/playwright-real-device-on-hyperexecute/
site_name: LambdaTest
slug: playwright-real-device-on-hyperexecute/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "How to run playwright real deices automation tests on HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/playwright-real-device-on-hyperexecute/"
        }]
      })
    }}
></script>

# Running Playwright with Real Devices on HyperExecute

This guide details how to execute your **Playwright Real Device** tests on **HyperExecute**:
<!-- 
- [**Using Local System**](/support/docs/JUnit-on-hyperexecute-grid/#1-testing-using-local-system) - You can use your own local machine to execute tests.
- [**Using Gitpod Platform**](/support/docs/JUnit-on-hyperexecute-grid/#2-testing-using-gitpod) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account) -->

<!-- ## Testing Using Local System

Follow the step-by-step guide to execute your test on HyperExecute. -->

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Playwright Real Device from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

### Configure the Capabilities

Configure the desired capabilities based on your test requirements. For example:

```bash
const capabilities = {
  'browserName': 'Chrome', #Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'android',
    'build': 'Playwright HyperExecute Build',
    'name': 'Playwright HyperExecute Test',
    'user': '<your_lambdatest_user_name>',
    'accessKey': '<your_lambdatest_access_key>',
    # 'network': true,
    'video': true,
    'console': true
  }
}
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 [Capabilities Generator Tool](https://www.lambdatest.com/capabilities-generator/).

### Configure the CDP URL

- You will have to update the **CDP (Chrome DevTools Protocol) URL** which is a protocol used for communication between the browser and the developer tools.

```bash
const browser = await chromium.connect({
  wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
- **runson** flag to specify the operating system
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.
- **Pre and Post** commands
- and other necessary YAML Parameters

```bash
---
version: "0.2"

runson: android

autosplit: true

concurrency: 1

retryOnFailure: true
maxRetries: 2

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules

env:
  INFRA_TIMEOUT: 2000

runtime:
  language: node
  version: "18"

pre:
  - npm install
  - npx playwright install

testDiscovery:
    command: cat pw_androidtests.txt
    mode: static
    type: raw

testRunnerCommand: npm run test-android --verbose

# highlight-start
framework:
  name: appium
  args:
    playwrightRD : true
    region: eu
# highlight-end

jobLabel: ['Playwright', 'Real-Device', 'HyperExecute']
```

:::info
To Run test on Mobile Containers in a Particular Region

```bash
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

```bash
./hyperexecute --config <path_of_yaml_file>
```

OR use this command if you have not exported your username and access key in the step 2.

```bash
./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_name>
```

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/1.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/2.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/3.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Step 6: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/4.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>