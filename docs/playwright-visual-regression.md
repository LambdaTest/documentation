---
id: playwright-visual-regression
title: Getting started with SmartUI using Playwright
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

url: https://www.testmu.ai/support/docs/playwright-visual-regression/
site_name: LambdaTest
slug: playwright-visual-regression
canonical: https://www.testmu.ai/support/docs/playwright-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform -

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

3. Set up the <BrandName /> credentials by using the commands below in the terminal.The account details are available on your [<BrandName /> Profile](https://accounts.lambdatest.com/detail/profile) page.
   
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
      "smartUIProjectName": "<projectName>" //Add the required SmartUI Project name
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

- You can check the executed builds over at [<BrandName /> SmartUI](https://smartui.lambdatest.com/).

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
:::tip For step by step guide for  `Github Integration` click [here](/support/docs/smartui-github-app-integration/)
:::

For additional information about Playwright framework please explore the documentation [here](/support/docs/playwright-testing/)

## Advanced Options for Screenshot Comparison


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).

  **Handling Dynamic Data** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, see [Handling Dynamic Data with DOM Configuration](/support/docs/html-dom-smartui-options).

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="capability-configuration" label="Capability Configuration" default>

### Capability Configuration

- Always set `visual: true` in your capabilities to enable SmartUI
- Use consistent project and build names across test runs
- Set meaningful test names for better organization

**Example:**
```javascript
const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  platformName: 'Windows 10',
  'LT:Options': {
    username: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    visual: true,
    name: 'Homepage Visual Test',
    build: 'Release 1.0',
    'smartUI.project': 'MyProject',
    'smartUI.build': 'Build-1.0'
  }
};
```

</TabItem>
<TabItem value="screenshot-timing" label="Screenshot Timing">

### Screenshot Timing

- Wait for page elements to load before capturing screenshots
- Use Playwright's wait methods for dynamic content
- Consider page load time when setting up tests

**Example:**
```javascript
await page.goto('https://example.com');
await page.waitForSelector('.main-content', { state: 'visible' });
await page.waitForLoadState('networkidle');
```

</TabItem>
<TabItem value="screenshot-naming" label="Screenshot Naming">

### Screenshot Naming

- Use descriptive, consistent names
- Include context (page, component, state) in names
- Avoid special characters

</TabItem>
<TabItem value="baseline-management" label="Baseline Management">

### Baseline Management

- Establish baselines from stable builds
- Review and approve baselines before using
- Update baselines when intentional changes are made

</TabItem>
<TabItem value="viewport-selection-1" label="Viewport Selection">

### Viewport Selection

- Test on viewports that match your user base
- Include mobile, tablet, and desktop viewports
- Consider both portrait and landscape orientations

</TabItem>
<TabItem value="viewport-selection-2" label="Viewport Selection">

### Viewport Selection

- Test on viewports that match your user base
- Include mobile, tablet, and desktop viewports
- Consider both portrait and landscape orientations

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className="docs__val" groupId="troubleshooting">
<TabItem value="screenshots-not-captured" label="Screenshots Not Captured" default>

### Issue: Screenshots Not Captured

**Symptoms**: Tests run but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- `visual: true` not set in capabilities
- Incorrect project name
- Network connectivity issues
- Credentials not set correctly

**Solutions**:
1. Verify `visual: true` is set in capabilities:
   ```javascript
   'LT:Options': {
     visual: true, // Must be set
     // ... other options
   }
   ```

2. Check project name matches exactly (case-sensitive):
   ```javascript
   'smartUI.project': 'ExactProjectName'
   ```

3. Verify credentials are set:
   ```bash
   echo $LT_USERNAME
   echo $LT_ACCESS_KEY
   ```

4. Check network connectivity to <BrandName />

</TabItem>
<TabItem value="project-not-found-error" label="Project Not Found Error">

### Issue: "Project Not Found" Error

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo or mismatch
- Project deleted
- Wrong account credentials

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project name directly from dashboard
3. Check credentials match the account with the project
4. Ensure project name is in capabilities, not just in dashboard

</TabItem>
<TabItem value="screenshots-show-blank-pages" label="Screenshots Show Blank Pages">

### Issue: Screenshots Show Blank Pages

**Symptoms**: Screenshots captured but show blank or incomplete content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Timing issues
- Viewport issues

**Solutions**:
1. Add explicit waits before screenshot:
   ```javascript
   await page.waitForSelector('#content', { state: 'visible' });
   await page.waitForLoadState('networkidle');
   ```

2. Wait for specific elements to be visible:
   ```javascript
   await page.waitForSelector('.main-content', { state: 'visible' });
   ```

3. Increase wait time for slow-loading pages

4. Check viewport size matches expected dimensions

</TabItem>
<TabItem value="build-name-conflicts" label="Build Name Conflicts">

### Issue: Build Name Conflicts

**Symptoms**: Screenshots appear in wrong build or build name issues

**Possible Causes**:
- Build name not set consistently
- Special characters in build name
- Build name conflicts

**Solutions**:
1. Set build name in capabilities:
   ```javascript
   'smartUI.build': 'ConsistentBuildName'
   ```

2. Avoid special characters in build names

3. Use consistent naming convention across team

</TabItem>
<TabItem value="mismatch-percentage-unexpected" label="Mismatch Percentage Unexpected">

### Issue: Mismatch Percentage Unexpected

**Symptoms**: Mismatch percentage higher or lower than expected

**Possible Causes**:
- Threshold settings
- Dynamic content not ignored
- Rendering differences
- Baseline issues

**Solutions**:
1. Review threshold settings in project settings

2. Use `ignoreDOM` for dynamic content:
   ```javascript
   'smartUI.options': {
     'ignoreDOM': {
       'id': ['timestamp', 'user-id']
     }
   }
   ```

3. Check baseline is correct and up-to-date

4. Review comparison settings in project

### Getting Help

If you encounter issues not covered here:

- Review [SmartUI Build Options](/support/docs/smart-ui-build-options) documentation
- Check [Advanced Test Settings](/support/docs/test-settings-options/) for comparison options
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmu.ai or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [SmartUI Build Options](/support/docs/smart-ui-build-options)
- [Advanced Test Settings](/support/docs/test-settings-options/)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Project Settings](/support/docs/smartui-project-settings)

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

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
      <span className="breadcrumbs__link"> Playwright Visual Regression </span>
    </li>
  </ul>
</nav>