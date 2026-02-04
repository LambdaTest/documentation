---
id: private-dependencies-cypress
title: Execute Cypress Tests Including Private Dependencies
sidebar_label: Execute Including Private Dependencies
description: This article guides you on how to execute your Cypress tests including the private dependencies on TestMu AI platform.
keywords:
  - Cypress Automation
  - Cypress With TestMu AI
  - TestMu AI With Cypress
  - Private Dependencies
  - Execute Cypress Tests
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests With TestMu AI
  - Execute With Private Dependencies
  - TestMu AI Cloud Platform

url: https://www.testmuai.com/support/docs/private-dependencies-cypress/
site_name: LambdaTest
slug: private-dependencies-cypress/
canonical: https://www.testmu.ai/support/docs/private-dependencies-cypress/
---

This article guides you on how to execute your **Cypress** tests including the **private dependencies** on **<BrandName /> platform**.
Earlier if your project includes any private dependency, the tests will error out with the **LambdaError** on our platform but now we have built the support for handling the private dependencies.

> In this demo we are demonstrating using [<BrandName />'s Sample Cypress Cloud Repo](https://github.com/LambdaTest/Cypress-Cloud). You can find all the resources used for this article in the linked repo.

## Steps To Execute Using Private Dependencies

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Assuming that you have run a Cypress test on TestMu AI platform ( if not, this article [here](/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on <BrandName />), you need to follow these steps below:

### Update <BrandName /> Cypress CLI

---

- Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

- The CLI version should be the latest i.e. is 2.3.0. You can check the CLI version by running the below command.

```bash
lambdatest-cypress --version
```

### Add Private Dependencies

---

You can either add private dependency in the `package.json` file or in the `lambdatest-config.json` file. Refer to the below steps for both approaches.

- **If passing private dependency in package.json file –**

  Add the private dependency and create `.npmrc` file in the root directory of your project as highlighted below and define the same in `.npmrc` file as well.

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-1.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-2.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

- **If passing private dependency in lambdatest-config.json file -**

  If you define the dependencies in the `lambdatest-config.json` file, it will override the `package.json` file and our cloud grid will read the dependencies from the `lambdatest-config.json` file. You can define the dependencies in the npm_dependencies object available in the run_settings of `lambdatest-config.json` file. Also, here as well, you have to create `.npmrc` file and there you have to define the private dependency.

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-3.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-4.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  > If you are using an **access token** in the private dependency and you are accessing its value from the **environment variable**, in that case, you have to add `dep_token` capability and define all those in environment variables in it. You can pass multiple environment variables as comma-separated.

  Refer the below screenshot for the help.

  ***

  <img loading="lazy" src={require('../assets/images/cypress/dependencies/dependencies-5.webp').default} alt="Image" width="1282" height="722" className="doc_img"/>

  > All the keys present in **dep_tokens** will be replaced in the `.npmrc` file and if the key is not present in the environment variable, it will throw an error.

After doing this setup, run your tests on the **<BrandName /> platform** and now the test will execute perfectly with the **private dependencies**.

> To download private dependencies over tunnel follow this [documentation](/support/docs/npm-via-tunnel/).

---

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmu.ai.

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
      Execute Cypress Tests Including Private Dependencies
      </span>
    </li>
  </ul>
</nav>
