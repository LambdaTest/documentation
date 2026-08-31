# Automating Accessibility Testing with Selenium

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Selenium accessibility automation runs WCAG accessibility checks against your web pages inside your existing Selenium test flow, then reports the violations in the TestMu AI Automation dashboard. Enable it with a single capability, choose whether scans fire on demand or automatically, and review the results alongside the rest of your automation run.

> Compatible only with Chrome and Edge browser versions >= 90.

## Prerequisites

Before you run your first accessibility scan, make sure you have the following in place:

- Your [TestMu AI Username and Access Key](/support/docs/using-environment-variables-for-authentication-credentials/).
- A local machine set up for your testing framework.
- Chrome or Edge, version 90 or later, since accessibility scans run only on these browsers.

## Step-by-Step Guide to Trigger Your Test

Follow the numbered steps below in order. By the end, the session and its accessibility report appear in the Automation dashboard.

### Step 1: Set Up Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub


If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 Capabilities Generator.

**Expected result:** Your test file points at the TestMu AI Hub endpoint and declares valid desired capabilities, so the test can launch a remote browser session.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.







  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}









  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}






**Expected result:** `LT_USERNAME` and `LT_ACCESS_KEY` are set in your shell, so your test authenticates to TestMu AI without hardcoding credentials.

### Step 3: Configure the Necessary Capabilities

To enable the accessibility testing within your automated test suite, set `accessibility: true` in your configuration file.

There are two primary ways to run accessibility tests:

#### 1. On-Demand Scans (via Hooks)
For precise control over which pages are scanned, you can trigger scans manually at specific points in your test execution. This is the recommended approach to reduce test execution time and focus only on relevant pages.

To use this, simply enable accessibility in your capabilities:
```java
capability.setCapability("accessibility", true); // Enable accessibility testing
```

Then, trigger the scan directly within your test script when the desired page is fully loaded:
```java
// Execute the LambdaTest accessibility scan hook
driver.executeScript("lambda-accessibility-scan");
```
*Note: If you do not execute the hook in your script when using this method, no accessibility reports will be generated.*

#### 2. Continuous Auto-Scanning
If you want the accessibility scanner to run automatically as your test drives the application, without writing manual hooks, you can pass the `accessibility.autoscan` capability:

```java
capability.setCapability("accessibility", true); // Enable accessibility testing
capability.setCapability("accessibility.autoscan", true); // Scan automatically as the test interacts with the app
```

With autoScan enabled, a scan is triggered by **interactive commands** such as navigation, clicks, and `executeScript()`. Read only operations such as `findElement()`, explicit waits, and attribute reads do not trigger a scan. Each triggered scan consumes 1 accessibility scan, so an interaction heavy test consumes more than 1 scan per page. See [How scan consumption works](/support/docs/accessibility-testing/#how-scan-consumption-works).

#### Advanced Capabilities
You can also define other settings capabilities to refine your scan rules as described below:

```java
capability.setCapability("accessibility.wcagVersion", "wcag21aa"); // Specify WCAG version (e.g., WCAG 2.1 Level AA)
capability.setCapability("accessibility.bestPractice", false); // Exclude best practice issues from results
capability.setCapability("accessibility.needsReview", true); // Include issues that need review
```

For the full list of settings you can tune, including the WCAG version, Best Practice, Beta, and AI rule groups, see the [Supported Automation Capabilities reference](/support/docs/accessibility-automation-scan-configurations/).

**Expected result:** Your capabilities include `accessibility: true` and either the `lambda-accessibility-scan` hook or `accessibility.autoscan`, so scans are generated during the run.

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
mvn test
```



**Expected result:** The test run completes and the session, along with its accessibility report, appears under the Accessibility tab in the Automation dashboard. Open the report to see the list of WCAG violations detected on each scanned page.

## Next steps

- Review your findings in depth with the [Navigating the Dashboard guide](/support/docs/accessibility-testing-navigating-dashboard/) to read the Accessibility Score, break down issues in Issue Summary and All Issues, and file bugs into your tracker.
- Refine which pages get scanned by switching between the on-demand `lambda-accessibility-scan` hook and `accessibility.autoscan`, as covered in Step 3 above.
