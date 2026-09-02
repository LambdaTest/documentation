# Getting started with SmartUI using K6

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This documentation will act as your step-by-step guide in to perform K6 test with SmartUI.

### Prerequisites for running SmartUI with K6

- Basic understanding of K6 is required.
- Go to [SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

```bash
export LT_USERNAME="YOUR_USERNAME"
```

```bash
set LT_USERNAME=YOUR_USERNAME"
```

```powershell
$env:LT_USERNAME=YOUR_USERNAME"
```

The following steps will guide you in running your first Visual Regression test on TestMu AI platform -

### **Step 1:** Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as Web for executing your `K6` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

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

```bash
brew install k6
```

```bash
winget install k6
```

4. Set up the TestMu AI credentials by using the commands below in the terminal. The account details are available on your [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile) page.

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
export PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
set PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

```powershell
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
$env:PROJECT_TOKEN="YOUR_PROJECT_TOKEN"
```

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

  - You can check the executed builds over at [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).

## Best Practices

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

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep SmartUI configuration in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

## Troubleshooting

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

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

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
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [K6 Browser Testing Documentation](/support/docs/k6-browser-testing/)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)

For additional information about K6 framework please explore the documentation [here](/support/docs/k6-browser-testing/)

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).

## Advanced Options for Screenshot Comparison

**Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).
