---
id: download-artefacts-cypress
title: Downloading Artefacts For A Cypress Project
sidebar_label: Download Artefacts For Cypress Project
description: This article guides you on how to download the artefacts for a cypress project from TestMu AI Cloud machine.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Artefacts
  - Download Artefacts
  - Artefacts for Cypress
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Project

url: https://www.lambdatest.com/support/docs/download-artefacts-cypress/
site_name: LambdaTest
slug: download-artefacts-cypress/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

This article guides you on how to download the artefacts for a Cypress project from LambdaTest Cloud machine.

:::tip Sample repo

In this demo we are demonstrating using LambdaTest's sample Cypress Cloud repo. You can find all the resources used for this article in the linked repo. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Downloading The Data From The LambdaTest Cloud Machine

---

Assuming that you have run a Cypress test on lambdatest platform ( if not, this article [here](/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on LambdaTest), you need to follow these steps below:

### Update LambdaTest Cypress CLI

---

Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

```bash
npm install -g lambdatest-cypress-cli
```

### Add downloads Capability

---

Add **"downloads"** capability in the `lambdatest-config.json` file and define the files/directories that you wanted to download in this capability. You can mention multiple file paths in this capability separated by a comma. Refer to the below example for the same.

<img loading="lazy" src={require('../assets/images/cypress/cypress4.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Add --sync Flag

---

Append `–-sync` flag in the run command as mentioned below and run your test on the LambdaTest platform. 

```bash
lambdatest-cypress run --sync=true
```

Once the test gets executed, you will find a `build_id` on the console corresponding to the executed test.

<img loading="lazy" src={require('../assets/images/cypress/cypress5.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Get session_id In lambdatest_run.json
---

Go to your `lambdatest_run.json` file and copy the `session_id`.

```json title=lambdatest_run.json
{
   "build_id": "7724863",
   "session_id": "6c899177-047e-4432-a9a7-17776e23aae3"
}
```

Now pass the session_id by running the following command.

```json
lambdatest-cypress generate-report --session_id 6c899177-047e-4432-a9a7-17776e23aae3
```

### View The Downloaded Folder
---

- A new folder with the name **lambdatest-artifacts** will get created in the **root** directory of your project and all the files will be downloaded in this folder.

<img loading="lazy" src={require('../assets/images/cypress/cypress6.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

- The file name will be created with the session_id combined with the browser name, browser version, and the test id corresponding to it.

  <img loading="lazy" src={require('../assets/images/cypress/cypress7.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

:::tip Support
That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@lambdatest.com.
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Download Artefacts For Cypress Project
      </span>
    </li>
  </ul>
</nav>
