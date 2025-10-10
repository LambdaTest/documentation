---
id: playwright-visual-regression
title: Getting started with Smart UI using Playwright
sidebar_label: Playwright
description: Master Playwright Visual Regression with our step-by-step guide. Seamlessly integrate SmartUI, enhance your testing skills, and unlock a world of possibilities.
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

url: https://www.lambdatest.com/support/docs/playwright-visual-regression/
site_name: LambdaTest
slug: playwright-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';


---
This documentation will act as your step-by-step guide in to perform Playwright test with SmartUI.
- Basic understanding of Playwright is required.
- Go to [SmartUI](https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR_USERNAME" 
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>
<TabItem value="Windows" label="Windows" default>

```bash
set LT_USERNAME="YOUR_USERNAME" 
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
$env:LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>
</Tabs>

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

### Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Web</b> for executing your `PlayWright` tests. 
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

### Step 2: Configure your test with Playwright Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Please clone the following sample Github repo 

```bash 
git clone https://github.com/LambdaTest/playwright-sample
```

2. Install the node modules using the command

```bash
npm i
```

3. Set up the LambdaTest credentials by using the commands below in the terminal.The account details are available on your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.
   
For macOS:
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
For Linux:
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
For Windows:
```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```

1. Edit the required capabilities in your test file `playwright-smartui.js`.

```javascript title="Add the following code snippet to run SmartUI with Playwright in playwright-smartui.js file"
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true,
      "smartUIProjectName": "<projectName>" //Add the required Smart UI Project name
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const page = await browser.newPage()

  await page.goto('https://www.bing.com')
  // Add the following command in order to take screenshot in SmartUI 
 await page.evaluate((_) => {},
`lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { fullPage: true, screenshotName: "<Your Screenshot Name>" } })}`); // Add a relevant screenshot name here

  const element = await page.$('[aria-label="Enter your search term"]')
  await element.click()
  await element.type('LambdaTest')
  await element.press('Enter')
  const title = await page.title()

  try {
    expect(title).toEqual('LambdaTest - Search')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

  await browser.close()
})()
```

- Execute the test using the following command

```bash
node playwright-smartui.js
```

- You can check the executed builds over at [LambdaTest SmartUI](https://smartui.lambdatest.com/).

## Fetching Screenshot Status and Results using WebHook <NewTag value='New' color='#000' bgColor='#ffec02' />



To retrieve the status and results of a captured screenshot, you can utilize the provided webhook. Follow the steps below to fetch this information:

```javascript
 // Add this code snippet within your script to fetch the screenshot status during runtime


response = await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: 'smartui.fetchScreenshotStatus', arguments: { screenshotName: "" }})}`)

console.log(response)
```
A sample response for the same can be seen below

```json
screenshotStatus response:  {
  screenshotsData: [
    {
      screenshotName: '<Your Screenshot Name>',
      screenshotURL: '<Link to the screenshot captured>',
      screenshotStatus: 'Approved', // current status of the screenshot
      approvedBy: 'system', // Approver details
      misMatchPercentage: 31.8, // percentage mismatch of the screenshot
      threshold: 5000, // Threshold set for the screenshot
      browserName: 'chrome', // Browser used for capturing the screenshot
      resolution: '1920x1080' // Resolution of the screenshot
    },
    
  buildId: '<Your Build ID>',
  projectName: '<Your Project Name>'
}
```
The following are the description of the parameters: 

| Parameter            | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `screenshotName`     | Name of the screenshot for which the result is to be fetched. |
| `screenshotURL`      | URL of the screenshot captured.                               |
| `screenshotStatus`   | Status of the screenshot captured.                            |
| `approvedBy`          | Approver of the screenshot      |
| `misMatchPercentage` | Percentage of mismatch in the screenshot captured.            |
| `threshold`          | Threshold set for the screenshot captured.                    |
| `browserName`        | Browser used for capturing the screenshot.                    |
| `resolution`         | Resolution of the screenshot captured.                        |
| `buildId`            | ID of the build in which the screenshot was captured.         |
| `projectName`        | Name of the project in which the screenshot was captured.     |




By including the above code, you will be able to obtain the status of the captured screenshot. If you specify a particular `Screenshot Name`, the response will contain the result for that specific screenshot.

:::note

Please note that the screenshot name should be provided within the screenshotName argument.
:::
## GitHub App Integration With Playwright
***

Experience effortless collaboration and streamlined testing workflows with SmartUI's GitHub app integration for Playwright users. Now, you can seamlessly link your GitHub repositories to your SmartUI accounts. This integration empowers teams to effortlessly share test scripts, review and track changes, and provide feedback within the familiar GitHub environment. 

To add this integration, you can add the following capability:

```bash
const capabilities: {
  ...
   "smartUIProjectName": "<projectName>"
   "github": {
    "url": "https://api.github.com/repos/OWNER/REPO/statuses/commitId"
   }
  ...
}
```
:::tip For step by step guide for  `Github Integration` click [here](https://www.lambdatest.com/support/docs/smartui-github-app-integration/)
:::

For additional information about Playwright framework please explore the documentation [here](https://www.lambdatest.com/support/docs/playwright-testing/)

## Advanced Options for Screenshot Comparison


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).

  **Handling Dynamic Data** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, click [here](/support/docs/html-dom-smartui-options/#configuration-for-playwright).

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
      <span className="breadcrumbs__link"> Playwright Visual Regression </span>
    </li>
  </ul>
</nav>