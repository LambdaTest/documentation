---
id: lambda-hooks
title: Lambda Hooks for Automation Testing
sidebar_label: Use Lambda Hooks
description: Use Lambda Hooks to modify test status, download files, throttle networks, and manage sessions in your Selenium and Playwright scripts.
keywords:
  - lambda hooks selenium commands
  - lambda hooks playwright
  - set test status pass fail
  - download file selenium grid
  - lambda-status hook usage
  - selenium javascript executor hooks
  - lambdatest_action playwright
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/lambda-hooks/
site_name: TestMu AI
slug: lambda-hooks/
canonical: https://www.testmuai.com/support/docs/lambda-hooks/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Lambda Hooks",
          "item": `${BRAND_URL}/support/docs/lambda-hooks/`
        }]
      })
    }}
></script>

# Lambda Hooks for Automation Testing

* * *

TestMu AI offers a set of hooks (Lambda Hooks) that you can use to modify your automation test cases and perform multiple operations in your automation scripts — set the test status, verify downloaded files, throttle the network, capture screenshots, and more.

Hooks are grouped into three categories so you can quickly find what applies to your framework:

- **Common Lambda Hooks** — capabilities available in both Selenium and Playwright sessions
- **Selenium-only Lambda Hooks** — available only via the Selenium JavascriptExecutor
- **Playwright-only Lambda Hooks** — available only in Playwright (and other CDP-based) sessions

## How Lambda Hooks are invoked

---

The invocation syntax differs by framework.

**Selenium** — pass the hook as a string to the JavascriptExecutor:

```java
((JavascriptExecutor) driver).executeScript("lambda-status=passed");
```

Some Selenium hooks (AutoHeal, Lighthouse, accessibility scan) instead take a JSON payload via the `lambdatest_executor` form:

```java
driver.executeScript("lambdatest_executor:{\"action\":\"lambda-heal-start\"}");
```

**Playwright** — pass a `lambdatest_action` JSON payload as the argument of an (empty) `page.evaluate` call:

```javascript
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`);
```

## Common Lambda Hooks (Selenium & Playwright)

---

These capabilities are available in both frameworks. Note that the hook name and syntax differ per framework — use the form shown for your framework.

| Hook | Selenium | Playwright | Description |
| ---- | --------- | ---------- | ----------- |
| **lambda-status** | `driver.executeScript("lambda-status=passed");`<br /><br />Supported values: `passed`, `failed`, `skipped`, `ignored`, `unknown`, `error` | Use the `setTestStatus` action (also supports a remark shown on the dashboard):<br /><br />`await page.evaluate(_ => {}, 'lambdatest_action: {"action": "setTestStatus", "arguments": {"status": "passed", "remark": "Title matched"}}');` | Mark the test passed / failed (also skipped, ignored, unknown, error). |
| **lambda-testCase-start / lambda-testCase-end** | `driver.executeScript("lambda-testCase-start=login flow");`<br /><br />`// ...test steps...`<br /><br />`driver.executeScript("lambda-testCase-end=login flow");` | `await page.evaluate(_ => {}, 'lambdatest_action: {"action": "lambda-testCase-start", "arguments": {"name": "login flow"}}');`<br /><br />`// ...test steps...`<br /><br />`await page.evaluate(_ => {}, 'lambdatest_action: {"action": "lambda-testCase-end", "arguments": {"name": "login flow"}}');` | Group commands into test cases<br /><br />(annotations in the command-logs view). |
| **lambdaUpdateName** | `driver.executeScript("lambdaUpdateName=TestName");` | `await page.evaluate(_ => {}, 'lambdatest_action: {"action": "lambdaUpdateName", "arguments": {"name": "TestName"}}');` | Update the test name during execution. |
| **lambda-unbound-ping** | `driver.executeScript("lambda-unbound-ping=lambdatest.com");` | Use the `lambda-unbound-ping` action via the `lambdatest_action` pattern. | Fetch IPs from the outbound domain. |
| **lighthouseReport** | `driver.executeScript("lambdatest_executor:{\"action\":\"lighthouseReport\"}");`<br /><br />Lighthouse reports are also generated automatically on navigation when the `performance` capability is enabled. | `await page.evaluate(_ => {}, 'lambdatest_action: {"action": "lighthouseReport"}');` | Generate a Lighthouse performance report. |
| **lambda-accessibility-scan** | `driver.executeScript("lambdatest_executor:{\"action\":\"lambda-accessibility-scan\"}");` | Use the `lambda-accessibility-scan` action via the `lambdatest_action` pattern. | Run an accessibility scan. |

## Selenium-only Lambda Hooks

---

These hooks work only through the Selenium JavascriptExecutor and are not available in Playwright sessions.

| Hook | Description | Example |
| ---- | ----------- | ------- |
| **lambda-file-exists** | Check whether the downloaded file exists in the test machine. | `((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");` |
| **lambda-file-stats** | Retrieve file metadata such as md5 code, modified time, name and size. | `((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");` |
| **lambda-file-content** | Download file content using base64 encoding. | `((JavascriptExecutor) driver).executeScript("lambda-file-content=file-name.file_format");` |
| **lambda-file-list** | List down the file in download directory. | `print driver.execute_script("lambda-file-list={match string with filename}");`<br /><br />`ie:print driver.execute_script("lambda-file-list=sample");`<br /><br />**Response:** List of files in downloads dir starting with sample |
| **lambda-files-delete** | Deletes the file in the download directory in the virtual machines (VMs). | `driver.executeScript("lambda-files-delete=file1.csv,file2.csv);` |
| **lambda-name** | For changing the test name. | `((JavascriptExecutor) driver).executeScript("lambda-name=TestName");`<br /><br />`((JavascriptExecutor) driver).executeScript("lambda-name=" + "name from hooks");` |
| **lambda-build** | For updating the build name. | `executeScript("lambda-build=BUILD_NAME");` |
| **lambda-action** | Used to mark a test as passed/failed. Moreover, it allows the option to include a failure reason, which will be visible on the TestMu AI Automation Dashboard inside the session view. | `Map<String, String> action = new HashMap();action.put("status", "failed"); action.put("reason", "tmp reason"); driver.executeScript("lambda-action", action);`<br /><br />`((JavascriptExecutor) driver).executeScript("lambda-action=" + "Lambda Error");` |
| **lambda-perform-keyboard-events** | You can simulate keyboard shortcuts like **ctrl + c**, **ctrl + v** in automation test scenarios. This hook is supported on both Windows and MacOS. | `js.executeScript("lambda-perform-keyboard-events:tab");` |
| **lambda-breakpoint** | Aborts the test execution to use the live interaction feature. | `driver.executeScript("lambda-breakpoint=true");` |
| **lambda-screenshot** | Captures the async screenshot during test execution. | `driver.executeScript("lambda-screenshot=true");` |
| **lambda-throttle-network** | Throttles network speed during test execution. | `executeScript("lambda-throttle-network","Regular 4G")` |
| **lambda-ping** | Fetches the IPs of the domain. | `driver.executeScript("lambda-ping=lambdatest.com");` |
| **lambda-exceptions** | Uploads the exceptions for tests that are captured on the console. | `driver.executeScript('lambda-exceptions', [[message]])` |
| **lambda-get-clipboard** | Prints the clipboard data on the console. | `driver.executeScript("lambda-get-clipboard");` |
| **lambda-set-clipboard** | Sets the clipboard data. | `driver.executeScript("lambda-set-clipboard= Amit");` |
| **lambda-clear-clipboard** | Clears the data of the clipboard. | `driver.executeScript("lambda-clear-clipboard");` |
| **lambda:network** | Fetches the network log entries in array format during session. | `driver.execute_script("lambda:network");`- Fetch the network log from last fetch request time to current time.<br /><br />`driver.execute_script("lambda:network=all");`- Fetch from start of test session to current time. |
| **lambda-test-tags** | Dynamically update your test tags for a test session which can be used to organize and filter your test results. | **Syntax :** `driver.executeScript("lambda-test-tags", "Tag 1,Tag 3,Tag 2");`<br /><br />**Limitations :**<br />**1. Maximum Character Length per Tag:** Each tag can have up to 50 characters.<br />**2. Maximum Number of Tags:** A maximum of 15 tags can be assigned to a single test session. |
| **lambda-heal-start* / *lambda-heal-stop** | Enables / disables [AutoHeal](/support/docs/autoheal-with-hooks/) for the portion of the test between the two calls, so locator failures are healed automatically. | `driver.execute_script('lambdatest_executor:{"action":"lambda-heal-start"}')`<br /><br />`// ...steps with dynamic locators...`<br /><br />`driver.execute_script('lambdatest_executor:{"action":"lambda-heal-stop"}')` |

## Playwright-only Lambda Hooks

---

These hooks are available only in Playwright (and other CDP-based) sessions, using the `lambdatest_action` pattern.

| Hook | Description |
| ---- | ----------- |
| *getTestDetails* | Returns details of the running test, such as the test ID and session information.<br /><br />`await page.evaluate(_ => {}, 'lambdatest_action: {"action": "getTestDetails"}');` |
| *lambdaSetBrowserPosition* | Sets the browser window position (useful when running multiple browser windows in a single session).<br /><br />`await Page_1.evaluate(() => {}, \`lambdatest_action: \${JSON.stringify({ action: 'lambdaSetBrowserPosition' })}\`);` |

> **Note**: These hooks only work if you are connected to your [TestMu AI Hub URL](/support/docs/hyperexecute-general-faqs/#17-how-can-i-access-my-lambdatest-hub-url). If you use these hooks on any other platform, you might see the error: `javascript error: Invalid left-hand side in assignment`

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
        Lambda Hooks for Automation Testing
      </span>
    </li>
  </ul>
</nav>