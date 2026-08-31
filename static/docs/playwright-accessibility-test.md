# Playwright Accessibility Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Playwright accessibility automation runs WCAG accessibility checks against your web pages inside your existing Playwright test flow, then reports the violations in the TestMu AI Automation dashboard. Enable it with a single capability, choose whether scans fire on demand or on every navigation, and review the results alongside the rest of your automation run.

> **Note:** Accessibility Testing for Playwright is currently supported on the **Chrome browser**. It is **not supported on `pw-chromium`**.

**Current limitation for `pw-chromium`**
Accessibility report generation in Playwright depends on a Chrome extension required by the platform being loaded during the session.

With **Playwright's bundled Chromium (`pw-chromium`)**, the required extension is not loaded reliably, so accessibility reports may not be generated even when `accessibility: true` is enabled and the scan hook runs correctly.

**Current recommendation:** run your Playwright accessibility tests on **Chrome** instead of `pw-chromium`.

## Prerequisites

Before you run your first accessibility scan, make sure you have the following in place:

- Your [TestMu AI Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/).
- A local machine set up for your testing framework.
- Chrome as the browser target, since accessibility reports are not generated reliably on `pw-chromium`.

## How it works

Accessibility automation is controlled entirely through capabilities. Set `accessibility: true` on your Chrome session, then decide when scans run: trigger them on demand with the `lambda-accessibility-scan` hook, or scan every page automatically with `accessibility.autoScan`. During the run, a Chrome extension captures each scan and streams the WCAG violations to the Automation dashboard, where the session and its accessibility report appear under the Accessibility tab.

## Step-by-Step Guide to Trigger Your Test

Follow the numbered steps below in order. By the end, the session and its accessibility report appear in the Automation dashboard.

### Step 1: Setup Your Test Suite
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

```javascript
const capabilities = {
'browserName': 'Chrome',
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Accessibility',
'name': 'Playwright Accessibility',
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
..//
}
}
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 Capabilities Generator.

**Expected result:** Your test suite points at the TestMu AI Hub endpoint and defines a Chrome capabilities object ready for accessibility settings.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

**Expected result:** Your terminal session has valid `LT_USERNAME` and `LT_ACCESS_KEY` values, so your tests can authenticate against the TestMu AI Hub.

### Step 3: Configure the Necessary Capabilities

To enable the accessibility testing within your automated test suite, set `accessibility: true` in your configuration file.

There are two primary ways to run accessibility tests:

#### 1. On-Demand Scans (via Hooks)
For precise control over which pages are scanned, you can trigger scans manually at specific points in your test execution. This is the recommended approach to reduce test execution time and focus only on relevant pages.

To use this, simply enable accessibility in your capabilities:

```javascript
capabilities['accessibility'] = true; // Enable accessibility testing
```

Then, trigger the scan directly within your test script when the desired page is fully loaded:

```javascript
// Execute the LambdaTest accessibility scan hook
await page.evaluate('lambda-accessibility-scan');
```

*Note: If you do not execute the hook in your script when using this method, no accessibility reports will be generated.*

#### 2. Continuous Auto-Scanning
If you want the accessibility scanner to run automatically on every single page navigation throughout the entire test session without writing manual hooks, you can pass the `accessibility.autoscan` capability:

```javascript
capabilities['accessibility'] = true; // Enable accessibility testing
capabilities['accessibility.autoscan'] = true; // Automatically scan all pages
```

#### Advanced Capabilities
You can also define other settings capabilities to refine your scan rules as described below:

```javascript
const capabilities = {
"accessibility": true,
"accessibility.wcagVersion": "wcag21aa", // Specify WCAG version (e.g., WCAG 2.1 Level AA)
"accessibility.bestPractice": false,     // Exclude best practice issues from results
"accessibility.needsReview": true        // Include issues that need review
};
```

For the full list of settings you can tune, including the WCAG version, Best Practice, and rule groups, see the [Supported Automation Capabilities reference](/support/docs/accessibility-automation-scan-configurations/).

**Browser choice for Playwright accessibility**
If your Playwright project is not browser-specific, use **Chrome** for accessibility automation until `pw-chromium` extension loading is supported reliably.

This is the safest workaround when reports are not being generated for `pw-chromium`.

**Expected result:** Your capabilities include `accessibility: true` and either the `lambda-accessibility-scan` hook or `accessibility.autoScan`, so scans are generated during the run.

### Step 4: Add the following add-on Script
TestMu AI uses a Chrome extension for accessibility scans and report generation. In your `lambdatest-setup.js` file add these three lines after your page creation command as shown below:

```javascript
// Load the extension for report generation of the accessibility tests
await ltPage.goto("chrome://extensions/?id=johgkfjmgfeapgnbkmfkfkaholjbcnah");
const secondToggleButton = ltPage.locator('#crToggle').nth(0);
await secondToggleButton.click();
```

**Why this fails on `pw-chromium`**
If you run the same setup on **Playwright bundled Chromium (`pw-chromium`)**, the required accessibility extension may not stay loaded, which prevents accessibility report generation.

At the moment, there is no confirmed public workaround for this behavior. Use **Chrome** for accessibility automation on Playwright.

**Expected result:** The accessibility extension is loaded and enabled in the Chrome session, so scans can be captured and reported.

### Step 5: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
npx playwright test --config=./playwright.config.js
```

You can access the detailed accessibility report from the [Accessibility Automation Reports Dashboard](https://www.testmuai.com/login/?redirectTo=https://accessibility.lambdatest.com/automation)

**Expected result:** The test run completes and the session, along with its accessibility report, appears under the Accessibility tab in the Automation dashboard. Open the report to review the WCAG violations detected on each scanned page.

## Troubleshooting

Use the table below to map common symptoms to the recommended fix.

| Issue | What it means | Recommended action |
|---|---|---|
| Accessibility report is not generated on `pw-chromium` | The required accessibility extension is not loading reliably in Playwright bundled Chromium | Run the same test on **Chrome** instead of `pw-chromium` |
| Hook executes but no report appears | `lambda-accessibility-scan` ran, but the accessibility extension was not active in the session | Use **Chrome**, then rerun the test |
| Unsure whether this is a product bug or setup issue | The test may be correct, but the browser target is unsupported for accessibility automation | Verify the browser is **Chrome**, not `pw-chromium` |
| Customer needs immediate unblock | Browser is not central to the use case | Ask the customer to run functional + accessibility automation on **Chrome** until the limitation is resolved |

## Next steps

- Review your findings in depth with the [Navigating the Dashboard guide](/support/docs/accessibility-testing-navigating-dashboard/) to read the Accessibility Score, break down issues in Issue Summary and All Issues, and file bugs into your tracker.
- Refine which pages get scanned by switching between the on-demand `lambda-accessibility-scan` hook and `accessibility.autoScan`, as covered in Step 3 above.
