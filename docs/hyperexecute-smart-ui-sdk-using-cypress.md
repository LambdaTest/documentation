---
id: hyperexecute-smart-ui-sdk-using-cypress
title: UI Testing with Cypress using HyperExecute and SmartUI SDK
hide_title: false
sidebar_label: Cypress
description: Automate Hyperexecute tests seamlessly! Integrate SmartUI SDK with Cypress for efficient & reliable UI testing. 
keywords:
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - perform visual ui testing online
  - compare image to image
  - smart ui sdk
  - cypress
  - hyperexecute integrations with cypress sdk
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-sdk-using-cypress/
site_name: LambdaTest
slug: hyperexecute-smart-ui-sdk-using-cypress/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-hooks-using-cypress/"
        }]
      })
    }}
></script>
This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Selenium

> **Note :** SmartUI SDK only supports Cypress versions >= 10.0.0

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> or <b>Web</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

:::info
After creating the project, you will get your `PROJECT_TOKEN`. You need to keep this project token safe as it will be used in the further steps below.
:::

## Step 2: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Maestro framework from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-smartui-sdk-cypress" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

### Adding SmartUI function to take screenshot
You can incorporate SmartUI into your custom `Cypress` test script, as shown below: 

```javascript
/// <reference types="cypress" />
describe('Test Case name', () => {
  beforeEach(() => {

    cy.visit('Required URL')
  })

  it('SmartUI Snapshot', () => {
    cy.smartuiSnapshot('Screenshot Name');
  })
})
```

## Step 3: Setup the CLI in your Test Suite

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

## Step 4: Configure YAML in your Test Suite

You need to edit the `PROJECT_TOKEN: "YOUR_PROJECT_TOKEN"` flag and enter your project token that show in the SmartUI app after, creating your project.

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

# highlight-next-line
cypress: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
  CYPRESS_CACHE_FOLDER: cypressCache
  PROJECT_TOKEN: "YOUR_PROJECT_TOKEN"

cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules
  - cypressCache

pre:
  - npm i @lambdatest/smartui-cli @lambdatest/cypress-driver cypress@v13
  - npx smartui config:create smartui-web.json

post:
  - cat hyp-smartui-sdk-cypress.yaml

testDiscovery:
  type: raw
  mode: static
  command: ls cypress/e2e

testRunnerCommand: npx smartui --config smartui-web.json exec -- npx cypress run --spec cypress/e2e/smartuiSDKLocal.cy.js --browser chrome --headed

jobLabel: ["smart-ui-sdk", "hyperexecute", "cypress"]
```

:::info
It is mandatory to mention these commands in the pre flag to download all the necessary dependencies

```bash
pre:
  - npm i @lambdatest/smartui-cli @lambdatest/cypress-driver cypress@v13
  - npx smartui config:create smartui-web.json
```
:::

## Step 5: Execute your Test Suite

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

## Step 6: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui-sdk/cypress.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>