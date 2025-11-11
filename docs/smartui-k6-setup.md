---
id: smartui-k6-setup
title: Getting started with SmartUI using K6
sidebar_label: K6
description: In this documentation, learn how to perform Visual Regression testing with K6 on the LambdaTest Automation Cloud across 40+ browser versions.
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

url: https://www.lambdatest.com/support/docs/smartui-k6-setup/
site_name: LambdaTest
slug: smartui-k6-setup/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

This documentation will act as your step-by-step guide in to perform K6 test with SmartUI.

### Prerequisites for running SmartUI with K6

- Basic understanding of K6 is required.
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
3. Select the platform as <b>Web</b> for executing your `K6` tests. 
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

### **Step 2:** Configure your test with K6 Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Please clone the following sample Github repo (`https://github.com/LambdaTest/smartui-k6-sample`).

```powershell
git clone https://github.com/LambdaTest/smartui-k6-sample.git
```

2.  Install k6 by referring to the installation guide `https://k6.io/docs/get-started/installation/`:
   
<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS" label="MacOS" default>

```bash
brew install k6
```
</TabItem>

<TabItem value="Windows" label="Windows" default>

```bash
winget install k6
```

</TabItem>
</Tabs>

1.  Set up the LambdaTest credentials by using the commands below in the terminal.The account details are available on your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.
   
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
   
4.  Edit the required capabilities in your test file `k6-smartui.js`.

```javascript title="Add the following code snippet to run SmartUI with K6 in ./navigation.js"
import { chromium } from 'k6/experimental/browser';
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export default async function () {
  const capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
      "platform": "MacOS Ventura",
      "build": "K6 Build",
      "name": "K6 SmartUI test",
      "user": __ENV.LT_USERNAME,
      "accessKey": __ENV.LT_ACCESS_KEY,
      "network": true,
      "video": true,
      "console": true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '', // Optional
      'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
      'smartUIProjectName': 'K6_Test_Sample', // Add the required SmartUI Project name
    },
  };

  const wsURL = `wss://cdp.lambdatest.com/k6?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  const browser = chromium.connect(wsURL);

  const page = browser.newPage();

  try {
    await page.goto("https://duckduckgo.com");

    // Add the following command in order to take screenshot in SmartUI
    await captureSmartUIScreenshot(page, "Homepage")

    let element = await page.$("[name=\"q\"]");
    await element.click();
    await element.type("K6");
    await element.press("Enter");
    let title = await page.title();

    expect(title).to.equal("K6 at DuckDuckGo");

    // Pass the `page` object. Add `screennshotName` if you want to fetch response for a specific screenshot
    await validateSmartUIScreenshots(page)

    // Mark the test as passed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "passed", remark: "Assertions passed" },})}`);
    await teardown(page, browser)
  } catch (e) {
      console.log('Error:: ', JSON.stringify(e))
      await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: JSON.stringify(e) } })}`)

    await teardown(page, browser)
    throw e
  }
};

async function captureSmartUIScreenshot(page, screenshotName) {
  await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { screenshotName: screenshotName } })}`);
}

async function teardown(page, browser) {
  await page.close();
  await browser.close();
}

const validateSmartUIScreenshots = async (page, screenshotName) => {
  try {
    await page.waitForTimeout(10000) // Added delay to get reports of all screenshots captured

    let screenshotResponse = JSON.parse(await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'smartui.fetchScreenshotStatus', arguments: { screenshotName }})}`))
    console.log('screenshotStatus response: ', screenshotResponse)

    if (screenshotResponse.screenshotsData && Array.isArray(screenshotResponse.screenshotsData)) {
      for (let i = 0; i < screenshotResponse.screenshotsData.length; i++) {
        let screenshot = screenshotResponse.screenshotsData[i];
        if (screenshot.screenshotStatus !== "Approved") {
          throw new Error(`Screenshot status is not approved for the screenshot ${screenshot.screenshotName}`);
        }
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}
```

### **Step 3:** Executing the SmartUI Test Suite on Cloud

Execute the test using the following command to run the test suite using `K6` 

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
K6_BROWSER_ENABLED=true k6 run k6-smartui.js
```

</TabItem>
<TabItem value="Windows" label="Windows" default>

```bash
set K6_BROWSER_ENABLED=true
k6 run k6-smartui.js
```

</TabItem>


</Tabs>

  - You can check the executed builds over at [LambdaTest SmartUI](https://smartui.lambdatest.com/).

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="screenshot-naming" label="Screenshot Naming" default>

### Screenshot Naming

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```javascript
await smartuiSnapshot(page, "HomePage-Header");
await smartuiSnapshot(page, "ProductPage-MainContent");
```

</TabItem>
<TabItem value="wait-for-page-load" label="Wait for Page Load" >

### Wait for Page Load

- Always wait for pages to fully load before taking screenshots
- Use K6's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```javascript
await page.goto('https://example.com');
await page.waitForSelector('#main-content');
await page.waitForLoadState('networkidle');
await smartuiSnapshot(page, "Page Loaded");
```

</TabItem>
<TabItem value="handle-dynamic-content" label="Handle Dynamic Content" >

### Handle Dynamic Content

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

</TabItem>
<TabItem value="configuration-management" label="Configuration Management" >

### Configuration Management

- Keep SmartUI configuration in version control
- Use environment variables for sensitive data
- Document custom configuration choices

</TabItem>
<TabItem value="test-organization" label="Test Organization" >

### Test Organization

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

## Troubleshooting

### Common Issues

#### Issue: Screenshots Not Appearing in Dashboard

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- K6 browser not enabled

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Ensure K6 browser is enabled:
   ```bash
   K6_BROWSER_ENABLED=true k6 run k6-smartui.js
   ```

4. Check network connectivity to LambdaTest servers

5. Review test execution logs for error messages

#### Issue: "Project Not Found" Error

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

#### Issue: Screenshots Show Blank or Incorrect Content

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
   ```javascript
   await page.waitForSelector('#content');
   await page.waitForSelector('.main-content');
   await page.waitForLoadState('networkidle');
   ```

2. Enable JavaScript in configuration:
   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

#### Issue: K6 Browser Not Enabled

**Symptoms**: Tests fail with "browser not enabled" error

**Possible Causes**:
- `K6_BROWSER_ENABLED` environment variable not set
- K6 browser extension not installed
- K6 version doesn't support browser

**Solutions**:
1. Set environment variable:
   ```bash
   export K6_BROWSER_ENABLED=true
   ```

2. Or run with environment variable:
   ```bash
   K6_BROWSER_ENABLED=true k6 run k6-smartui.js
   ```

3. Verify K6 version supports browser:
   ```bash
   k6 version
   ```

4. Install K6 browser extension if needed

#### Issue: Screenshot Status Not Approved

**Symptoms**: Screenshots appear but status is not "Approved"

**Possible Causes**:
- Screenshot comparison failed
- Baseline doesn't exist
- Mismatch threshold exceeded

**Solutions**:
1. Check screenshot status in response:
   ```javascript
   if (screenshot.screenshotStatus !== "Approved") {
       // Handle non-approved status
   }
   ```

2. Review comparison results in SmartUI dashboard
3. Verify baseline exists and is correct
4. Adjust pixel threshold if needed

#### Issue: Screenshot Names Not Matching Baseline

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [K6 Browser Testing Documentation](https://www.lambdatest.com/support/docs/k6-browser-testing/) for K6-specific issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [K6 Browser Testing Documentation](https://www.lambdatest.com/support/docs/k6-browser-testing/)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)

For additional information about K6 framework please explore the documentation [here](https://www.lambdatest.com/support/docs/k6-browser-testing/)

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).

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
      <span className="breadcrumbs__link"> SmartUI K6 Setup </span>
    </li>
  </ul>
</nav>

</TabItem>
</Tabs>

## Troubleshooting

### Common Issues

#### Issue: Screenshots Not Appearing in Dashboard

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- K6 browser not enabled

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Ensure K6 browser is enabled:
   ```bash
   K6_BROWSER_ENABLED=true k6 run k6-smartui.js
   ```

4. Check network connectivity to LambdaTest servers

5. Review test execution logs for error messages

#### Issue: "Project Not Found" Error

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

#### Issue: Screenshots Show Blank or Incorrect Content

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
   ```javascript
   await page.waitForSelector('#content');
   await page.waitForSelector('.main-content');
   await page.waitForLoadState('networkidle');
   ```

2. Enable JavaScript in configuration:
   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

#### Issue: K6 Browser Not Enabled

**Symptoms**: Tests fail with "browser not enabled" error

**Possible Causes**:
- `K6_BROWSER_ENABLED` environment variable not set
- K6 browser extension not installed
- K6 version doesn't support browser

**Solutions**:
1. Set environment variable:
   ```bash
   export K6_BROWSER_ENABLED=true
   ```

2. Or run with environment variable:
   ```bash
   K6_BROWSER_ENABLED=true k6 run k6-smartui.js
   ```

3. Verify K6 version supports browser:
   ```bash
   k6 version
   ```

4. Install K6 browser extension if needed

#### Issue: Screenshot Status Not Approved

**Symptoms**: Screenshots appear but status is not "Approved"

**Possible Causes**:
- Screenshot comparison failed
- Baseline doesn't exist
- Mismatch threshold exceeded

**Solutions**:
1. Check screenshot status in response:
   ```javascript
   if (screenshot.screenshotStatus !== "Approved") {
       // Handle non-approved status
   }
   ```

2. Review comparison results in SmartUI dashboard
3. Verify baseline exists and is correct
4. Adjust pixel threshold if needed

#### Issue: Screenshot Names Not Matching Baseline

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [K6 Browser Testing Documentation](https://www.lambdatest.com/support/docs/k6-browser-testing/) for K6-specific issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [K6 Browser Testing Documentation](https://www.lambdatest.com/support/docs/k6-browser-testing/)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)

For additional information about K6 framework please explore the documentation [here](https://www.lambdatest.com/support/docs/k6-browser-testing/)

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).

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
      <span className="breadcrumbs__link"> SmartUI K6 Setup </span>
    </li>
  </ul>
</nav>
