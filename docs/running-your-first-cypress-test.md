---
id: running-your-first-cypress-test
title: Running Your First Cypress Test On TestMu AI Platform
sidebar_label: Run Your First Test
description: TestMu AI enables you to run Cypress automated tests across 40+ browser versions on cloud. This documentation will help you get started with your first test.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.testmu.ai/support/docs/running-your-first-cypress-test
site_name: LambdaTest
slug: running-your-first-cypress-test
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

---

To demonstrate Cypress testing on the <BrandName /> platform, we will use the [Cypress Cloud repo](https://github.com/LambdaTest/Cypress-Cloud) in the demo below.

**Step-1:** Clone the [<BrandName />-Cypress Cloud](https://github.com/LambdaTest/Cypress-Cloud) GitHub repo and switch to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

**Step-2:** Setup the **<BrandName />-Cypress CLI** and configure the configuration file, as shown in the Prerequisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using <BrandName /> credentials. You can check [here](/support/docs/authentication/) for more details about authentication.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">
  <TabItem value="config" label="lambdatest-config.json" default>

```json
{
  "lambdatest_auth": {
    "username": "<YOUR_LAMBDATEST_USERNAME>",
    "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["86.0"]
    },
    {
      "browser": "Firefox",
      "platform": "Windows 10",
      "versions": ["82.0"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "build-name",
    "parallels": 1,
    "specs": "./*.spec.js",
    "ignore_files": "",
    "npm_dependencies": {
      "cypress": "6.1.0"
    },
    "feature_file_suppport": false
  },
  "tunnel_settings": {
    "tunnel": false,
    "tunnelName": null
  }
}
```

  </TabItem>
</Tabs>

:::info
Also in `run-settings` section you need to specify the path of your `spec.js` file on which you want to run the test on. Here we will pass the path of a **sample to do** spec.js file for our demo.
:::

```json
"specs": "./cypress/integration/1-getting-started/todo.spec.js"
```

:::info Note
In this demo, all occurrences of ``http://localhost:8080`` have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run locally**](/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.
:::

**Step-3:** Execute your tests using the following command in the terminal:

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Results On <BrandName /> Platform

---

As soon as the tests starts executing, you can view them running. Just visit your <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/cypress/cypress1.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

:::tip info
For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **<BrandName /> platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a **"Completed"** message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a **"Failed"** message respectively.
:::

<img loading="lazy" src={require('../assets/images/cypress/cypress2.png').default} alt="Image" width="1281" height="722" className="doc_img"/>

## Running Your Cypress Tests Locally On <BrandName /> Platform

---

To run your tests locally on the <BrandName /> platform, you need to setup [<BrandName /> tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the <BrandName /> tunnel or Underpass set up and started, you can use the <BrandName /> platform to run your Cypress tests locally.

Now you need to activate the tunnel capability in the `lambdatest_config.json` file under the section "connection_settings" as shown below:

```json title="lambdatest_config.json"
  "connection_settings": {
    "tunnel": true,
    "tunnel_name": "lt-cypress-tunnel"
  },
```

You can provide the name of the **<BrandName /> tunnel** as per your requirements.
