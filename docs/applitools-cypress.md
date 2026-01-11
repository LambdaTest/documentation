---
id: applitools-integration-cypress
title: Applitools Integration With TestMu AI For Cypress
sidebar_label: Applitools Integration For Cypress
description: TestMu AI integration with Applitools will allow you perform automated cross browser testing on more than 2000 real browsers running on real operating systems, hosted on a cloud platform. You can execute your Cypress automation test scripts on TestMu AI directly from your Applitools instance.
keywords:
  - testmu ai integrations
  - applitools for cypress
  - testmu ai cypress
  - cypress automation
  - testmu ai integration with applitools
  - applitools integration
  - cross browser testing
  - free cross browser testing tool
url: https://www.testmu.ai/support/docs/applitools-integration-with-testmu
site_name: LambdaTest
slug: applitools-integration-cypress
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

**Applitools** provides an end-to-end software testing platform powered by **Visual AI**. This article will guide you on how to integrate your **Cypress** automation tests with **Applitools** and **<BrandName />**.

> Before getting started, make sure you have made accounts in **<BrandName />** and **Applitools** platforms.

## Setting Up Applitools Dependencies And Packages

---

You can download or clone the sample GitHub project from the following repo - [Cypress-LambdaTest-Applitools-Integration](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration). Navigate to your project directory and follow these steps:

- Install the **NPM dependencies** using the below command:

  ```bash
  npm install
  ```

- Set up **Applitools Eyes** using the below command:

  ```bash
  npx eyes-setup
  ```

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the below screenshot. You can find your **Applitools API** key by logging into your Applitools account and going to your **Profile > My API Key**.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools1.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  > Set the **testConcurrency** and **browser configuration** as per the requirement.

- Install Applitools Eyes dependencies using the below command:

  ```bash
  npm install @applitools/eyes-cypress --save-dev
  ```

  > It will create Applitools Eyes to an Existing Node.js Cypress Project.

## Setting up <BrandName /> CLI and Dependencies

---

- Install the <BrandName /> CLI using below command:

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- Setup configurations on which you want to run your test using the below command:

  ```bash
  lambdatest-cypress init
  ```

  > It will create a **lambdatest-config.json** file in the root directory of your project.

- Add spec file path in the `run_setting` and your **<BrandName /> credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools2.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

## Running The Sample Project

---

Execute your first test case using the below command:

```bash
lambdatest-cypress run
```

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools3.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

> The first test case that you execute will be considered as the base image by default by Applitools.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools4.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test by using the same run command.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools5.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Applitools will compare the base image with this test and highlight the difference.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools6.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

> That’s all! you have successfully integrated **Applitools** and **<BrandName />** for running your **Cypress** tests. In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
