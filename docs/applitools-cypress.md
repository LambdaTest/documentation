---
id: applitools-integration-cypress
title: How to Integrate Applitools With Cypress on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Applitools Integration For Cypress
description: Integrate Applitools Visual AI with Cypress on TestMu AI to run automated visual and cross browser tests on real browsers and operating systems.
keywords:
  - applitools cypress testmu ai integration
  - applitools visual testing with cypress
  - cypress visual regression testing
  - run applitools tests on testmu ai
  - applitools eyes cypress
url: https://www.testmuai.com/support/docs/applitools-integration-with-testmu/
site_name: TestMu AI
slug: applitools-integration-cypress/
canonical: https://www.testmuai.com/support/docs/applitools-integration-cypress/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# How to Integrate Applitools With Cypress on TestMu AI
***

If you run Cypress tests with Applitools Visual AI, you can execute those visual checks across real browsers and operating systems by connecting them to TestMu AI. This catches visual regressions on the browser and OS combinations your users actually run, not just your local machine. You configure the Applitools access token and TestMu AI credentials in your project, then run the tests through the TestMu AI CLI.

:::note
Before you begin, create accounts on both the TestMu AI and Applitools platforms.
:::

## Set Up Applitools Dependencies and Packages
***

Start by installing the Applitools packages and adding your API key so Cypress can send visual checks to Applitools. Download or clone the sample GitHub project from the [Cypress-LambdaTest-Applitools-Integration repository](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration), navigate to your project directory, and follow these steps.

- Install the **NPM dependencies** using the below command:

  ```bash
  npm install
  ```

- Set up **Applitools Eyes** using the below command:

  ```bash
  npx eyes-setup
  ```

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the screenshot below. Find your **Applitools API** key by logging into your Applitools account and going to **Profile > My API Key**.

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools1.webp').default} alt="Applitools access token added to the applitools.config.js configuration file" width="1353" height="622" className="doc_img"/>

  :::tip
  Set the **testConcurrency** and **browser configuration** values to match your requirements.
  :::

- Install Applitools Eyes dependencies using the below command:

  ```bash
  npm install @applitools/eyes-cypress --save-dev
  ```

  This adds Applitools Eyes to an existing Node.js Cypress project.

## Set Up the TestMu AI CLI and Dependencies
***

With Applitools ready, configure the TestMu AI CLI so the tests run on the cloud grid. These steps install the CLI, generate a config file, and add your credentials.

- Install the TestMu AI CLI using the below command:

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- Set up the configuration for your test run using the below command:

  ```bash
  lambdatest-cypress init
  ```

  This creates a **lambdatest-config.json** file in the root directory of your project.

- Add the spec file path in the `run_setting` and your **TestMu AI credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools2.webp').default} alt="Spec file path and TestMu AI credentials configured in the lambdatest-config.json file" width="1353" height="622" className="doc_img"/>

## Run the Sample Project
***

Run the sample tests to generate a baseline and then compare a second run against it. Execute your first test case using the below command:

```bash
lambdatest-cypress run
```

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools3.webp').default} alt="TestMu AI Cypress run command executing the first Applitools test in the terminal" width="1353" height="622" className="doc_img"/>

Applitools treats the first test case you execute as the base image by default.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools4.webp').default} alt="First Applitools test run captured as the baseline image in the Applitools dashboard" width="1353" height="622" className="doc_img"/>

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test using the same run command.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools5.webp').default} alt="Updated URL in the applitoolsIntegration.spec.js file for the second test run" width="1353" height="622" className="doc_img"/>

Applitools compares the base image with this test and highlights the difference.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools6.webp').default} alt="Applitools highlighting the visual difference between the baseline and the second test run" width="1353" height="622" className="doc_img"/>

## Related Cypress Guides
***

Continue with the guides below to run and report on your Cypress tests on TestMu AI.

- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) sets up and executes your initial Cypress run on the cloud grid.
- [Integrate the Cypress Dashboard with TestMu AI](/support/docs/integrate-testmu-with-cypress/) views and analyzes your Cypress results across both dashboards.
- [Generate Mochawesome reports for Cypress](/support/docs/cypress-mochaawesome-report/) produces detailed reports for your Cypress test runs.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Applitools Integration For Cypress
      </span>
    </li>
  </ul>
</nav>
