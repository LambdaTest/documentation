---
id: puppeteer-visual-regression
title: Getting started with Smart UI using Puppeteer
sidebar_label: Puppeteer
description: Learn Puppeteer Visual Regression Set up Smart UI, run tests on LambdaTest Cloud across 40+ browsers. Step-by-step guide for seamless testing.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/puppteer-visual-regression/
site_name: LambdaTest
slug: puppeteer-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

This documentation will act as your step-by-step guide in to perform Puppteer test with SmartUI.

### Prerequisites for running SmartUI with Puppeteer

- Basic understanding of Puppeteer is required.
- Go to [SmartUI](https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
</Tabs>

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

### **Step 1:** Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Web</b> for executing your `Puppeteer` tests. 
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

### **Step 2:** Configure your test with Puppeteer Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Please clone the following sample Github repo (`https://github.com/LambdaTest/puppeteer-sample`).

```bash
git clone https://github.com/LambdaTest/puppeteer-sample.git
```

2. Install the node modules using the command:

```bash
npm i
```

3. Set up the LambdaTest credentials by following the instructions mentioned in the `README.md` file.
4. Edit the required capabilities in your test file `navigation.js`.

```javascript title="Add the following code snippet to run SmartUI with Puppeteer in ./navigation.js"
"use strict";
const { strict } = require("once");
const puppeteer = require("puppeteer");
const expect = require("chai").expect;

(async () => {
  const capabilities = {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 10",
      build: "puppeteer-build-1",
      name: "My first Puppeteer test",
      resolution: "1366x768",
      user: process.env.LT_USERNAME || "Your Username",
      accessKey: process.env.LT_ACCESS_KEY || "Your Access Key",
      network: true,
      smartUIProjectName: "Testing Puppeteer Connection", // Add your SmartUI Project Name here
      smartUIBuildName: "My First Build", // Replace with your build name of choice here
      // smartUIBaseline: false, // (Optional) To set your current build as baseline to compare
    },
  };

  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`,
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
    });
    console.log("Navigating to LambdaTest");
    await page.goto("https://www.lambdatest.com/");
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { fullPage: true, screenshotName: "Navigating to LambdaTest" } })}`);
    console.log("Navigating to Pricing");
    await page.goto("https://www.lambdatest.com/pricing");
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { fullPage: true, screenshotName: "Navigating to Pricing" } })}`);
    console.log("Navigating to Automation");

    await page.goto("https://www.lambdatest.com/automation-testing");
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { fullPage: true, screenshotName: "Navigating to Automation" } })}`);
    console.log("Closing browser");
    await browser.close();
  } catch (e) {
    console.log("Error - ", e);
  }
})();
```

### **Step 3:** Executing the SmartUI Test Suite on Cloud

Execute the test using the following command to run the test suite using `puppeteer` 

```bash
node navigation.js
```

- You can check the executed builds over at [LambdaTest SmartUI](https://smartui.lambdatest.com/).

For additional information about Puppteer framework please explore the documentation [here](/docs/puppeteer-testing/)

## Advanced Options for Screenshot Comparison


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).

  **Handling Dynamic Data** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, click [here](/support/docs/html-dom-smartui-options/#configuration-for-puppeteer).
  
<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

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
      <span className="breadcrumbs__link"> Getting Started with Selenium Visual Regression  </span>
    </li>
  </ul>
</nav>