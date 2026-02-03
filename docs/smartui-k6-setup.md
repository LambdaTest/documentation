---
id: smartui-k6-setup
title: Getting started with SmartUI using K6
sidebar_label: K6
description: In this documentation, learn how to perform Visual Regression testing with K6 on the TestMu AI Automation Cloud across 40+ browser versions.
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

url: https://www.testmuai.com/support/docs/smartui-k6-setup/
site_name: LambdaTest
slug: smartui-k6-setup/
canonical: https://www.testmuai.com/support/docs/smartui-k6-setup/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

This documentation will act as your step-by-step guide in to perform K6 test with SmartUI.

### Prerequisites for running SmartUI with K6

- Basic understanding of K6 is required.
- Go to [SmartUI](https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set LT_USERNAME=YOUR_USERNAME"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:LT_USERNAME=YOUR_USERNAME"
```

</TabItem>
</Tabs>

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform -

### **Step 1:** Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Web</b> for executing your `K6` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className='doc_img'/> -->

### **Step 2:** Configure your test with K6 Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Clone the sample GitHub repository:

```bash
git clone https://github.com/LambdaTest/smartui-k6-sample
cd smartui-k6-sample
```

2. Install the required dependencies:

```bash
npm install @lambdatest/smartui-cli @lambdatest/k6-driver
```

3. Install k6 by referring to the installation guide `https://k6.io/docs/get-started/installation/`:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS' label='MacOS' default>

```bash
brew install k6
```
</TabItem>

<TabItem value='Windows-1' label='Windows' default>

```bash
winget install k6
```

</TabItem>
</Tabs>

4. Set up the <BrandName /> credentials by using the commands below in the terminal. The account details are available on your [<BrandName /> Profile](https://accounts.lambdatest.com/detail/profile) page.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
export PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
set PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
$env:PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

</TabItem>
</Tabs>

5. Create and configure SmartUI config file:

```bash
npx smartui config:create smartui-web.json
```

6. Add the SmartUI snapshot function to your test file. Create or edit `test.js`:

```javascript title="test.js"
import http from 'k6/http';
import { smartuiSnapshot } from '@lambdatest/k6-driver';

export default function () {
  const response = http.get('https://www.lambdatest.com'); // Enter your desired URL here
  smartuiSnapshot(response, 'Homepage-Screenshot');
  // Please specify your response and the screenshot name in this function
  // response - k6 http response instance (required)
  // Screenshot_Name - Name of the screenshot; unique to each screenshot (required)
}
```

### **Step 3:** Executing the SmartUI Test Suite

Execute the test using the following command:

```bash
npx smartui exec k6 run test.js
```

  - You can check the executed builds over at [<BrandName /> SmartUI](https://smartui.lambdatest.com/).

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```javascript
const response1 = http.get('https://example.com');
smartuiSnapshot(response1, "HomePage-Header");

const response2 = http.get('https://example.com/products');
smartuiSnapshot(response2, "ProductPage-MainContent");
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use K6's built-in check and sleep methods for timing control
- Consider adding delays for lazy-loaded content

**Example:**
```javascript
import { sleep, check } from 'k6';
import http from 'k6/http';
import { smartuiSnapshot } from '@lambdatest/k6-driver';

const response = http.get('https://example.com');
check(response, {
  'status is 200': (r) => r.status === 200,
});
sleep(2); // Wait for dynamic content
smartuiSnapshot(response, "Page-Loaded");
```

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

</TabItem>
<TabItem value='configuration-management' label='Configuration Management'>

**Configuration Management**

- Keep SmartUI configuration in version control
- Use environment variables for sensitive data
- Document custom configuration choices

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-appearing-in-dashboard' label='Screenshots Not Appearing in Dashboard' default>

**Issue: Screenshots Not Appearing in Dashboard**

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

3. Ensure you're using the SmartUI CLI wrapper:
   ```bash
   npx smartui exec k6 run test.js
   ```

4. Check network connectivity to <BrandName /> servers

5. Review test execution logs for error messages

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found" Error**

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

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
   ```javascript
   import { sleep } from 'k6';
   import http from 'k6/http';
   import { smartuiSnapshot } from '@lambdatest/k6-driver';
   
   const response = http.get('https://example.com');
   sleep(2); // Wait for content to load
   smartuiSnapshot(response, 'Screenshot-Name');
   ```

2. Check response status before taking screenshot:
   ```javascript
   import { check } from 'k6';
   
   const response = http.get('https://example.com');
   check(response, {
     'status is 200': (r) => r.status === 200,
   });
   smartuiSnapshot(response, 'Screenshot-Name');
   ```

3. Verify viewport size in smartui-web.json configuration file

</TabItem>
<TabItem value='k6-browser-not-enabled' label='K6 Browser Not Enabled'>

**Issue: SmartUI CLI Not Working**

**Symptoms**: Tests fail with SmartUI-related errors

**Possible Causes**:
- `@lambdatest/smartui-cli` not installed
- `@lambdatest/k6-driver` not installed
- PROJECT_TOKEN not set

**Solutions**:
1. Install required dependencies:
   ```bash
   npm install @lambdatest/smartui-cli @lambdatest/k6-driver
   ```

2. Set PROJECT_TOKEN environment variable:
   ```bash
   export PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
   ```

3. Verify K6 is installed:
   ```bash
   k6 version
   ```

4. Run tests using the SmartUI CLI wrapper:
   ```bash
   npx smartui exec k6 run test.js
   ```

</TabItem>
<TabItem value='screenshot-status-not-approved' label='Screenshot Status Not Approved'>

**Issue: Screenshot Status Not Approved**

**Symptoms**: Screenshots appear but status is not Approved"

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

</TabItem>
<TabItem value='screenshot-names-not-matching-baseline' label='Screenshot Names Not Matching Baseline'>

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [K6 Browser Testing Documentation](/support/docs/k6-browser-testing/) for K6-specific issues
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmu.ai or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [K6 Browser Testing Documentation](/support/docs/k6-browser-testing/)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)

For additional information about K6 framework please explore the documentation [here](/support/docs/k6-browser-testing/)

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI K6 Setup </span>
    </li>
  </ul>
</nav>

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI K6 Setup </span>
    </li>
  </ul>
</nav>
