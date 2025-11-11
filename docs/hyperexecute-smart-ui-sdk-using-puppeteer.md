---
id: hyperexecute-smart-ui-sdk-using-puppeteer
title: UI Testing with Puppeteer using HyperExecute and SmartUI SDK
hide_title: false
sidebar_label: Puppeteer
description: Streamline Hyperexecute UI testing with SmartUI SDK and Puppeteer. Write robust, end-to-end tests effortlessly. 
keywords:
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - puppeteer pytest
  - puppeteer mocha
  - automation testing with puppeteer
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-sdk-using-puppeteer/
site_name: LambdaTest
slug: hyperexecute-smart-ui-sdk-using-puppeteer/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-hooks-using-puppeteer/"
        }]
      })
    }}
></script>
This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using **Puppeteer**

## Prerequisites

You must do the following in order to run the tests on HyperExecute from your local system:

- Get your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/) from the dashboard
- Download [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Set your [Environmental Variables](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- Use your login credentials to access [LambdaTest SmartUI](https://smartui.lambdatest.com/).

## Step 1: Create a SmartUI Project

With the application, create a project in which we will merge all of your builds that have been applied to the project. To initiate a SmartUI Project, take the following actions:

1. Access the [Projects page](https://smartui.lambdatest.com/).
2. Click the `new project` button now.
3. Choose the **CLI** or **Web** platform to run your `SDK` tests on.
4. Include the project name, the approvers of the changes that were discovered, and tags for any filters or simple navigation.
5. Select **Submit** by clicking.

:::info
After creating the project, you will get your `PROJECT_TOKEN`. You need to keep this project token safe as it will be used in the further steps below.
:::

## Step 2: Setup Your Test Suite

To configure and test it, you can use your own project. We are using the sample repository for demonstration purposes.

:::tip Sample repo
Download or Clone the code sample for the Puppeteer framework from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-smartui-sdk-puppeteer" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Configure Your Test Suite

In the `sdkCloud.js` file, update the following capabilities

```javascript
  const capabilities = {
    "LT:Options": {
      "build": "Puppeteer SmartUI Build", // Mention your desired build name
      "name": "Puppeteer SmartUI Test", // Provide the name of your test
    },
  };
```

## Step 3: Setup the CLI in your Test Suite

Following the download or cloning of the sample repository, you must configure the environment variables and the CLI.

### Download the HyperExecute CLI

The tests on HyperExecute are started using the Command Line Interface (CLI). To run the tests on HyperExecute, it is advised to download the CLI binary to the host system and store it in the suite's root directory.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you have to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).

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

## Step 4: Configure YAML in your Test Suite

Edit the `PROJECT_TOKEN: "YOUR_PROJECT_TOKEN"` flag and enter your project token that show in the SmartUI app after, creating your project.

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
  PROJECT_TOKEN: "YOUR_PROJECT_TOKEN" #Enter your project token here

pre:
  - npm install @lambdatest/smartui-cli @lambdatest/puppeteer-driver puppeteer
  - npx smartui config:create smartui-web.json

post:
  - cat hyperexecute-smartui-sdk.yaml

testDiscovery:
  type: raw
  mode: static
  command: ls sdk/puppeteerCloud.js

testRunnerCommand: npx smartui exec node sdk/puppeteerCloud.js --config smartui-web.json

jobLabel: ["smart-ui-sdk", "hyperexecute", "puppeteer"]
```

:::info
It is mandatory to mention these commands in the pre flag to download all the necessary dependencies

```bash
pre:
  - npm install @lambdatest/smartui-cli @lambdatest/puppeteer-driver puppeteer
  - npx smartui config:create smartui-web.json
```
:::

## Step 5: Execute your Test Suite

> **NOTE:** On macOS, you can grant permission by running **`chmod u+x./hyperexecute`** if you receive a permission denied warning when using the CLI. If a security pop-up appears, click the Allow button on the **System Preferences** → **.Security and Privacy** → **.General tab**.

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

## Step 6: Monitor the Test Execution

Go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to see the status of your job.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui-sdk/puppeteer.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>