---
id: analytics-test-case-insights
title: Test Case Insights
sidebar_label: Test Case Insights
description: Gain insights into test case execution and performance with TestMu AI's analytics to optimize your testing strategy and enhance software quality.
keywords:
  - analytics
url: https://www.testmu.ai/support/docs/analytics-test-case-insights
site_name: LambdaTest
slug: analytics-test-case-insights
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Overview",
          "item": "https://www.lambdatest.com/support/docs/analytics-test-case-insights/"
        }]
      })
    }}
></script>

Analyzing the test case level insights of your test automation execution on LambdaTest is now easier than ever with the `Test Case Insights` module. The user can easily find information about the count, and type of the test cases through the highly customizable widgets.

## Prerequisites For Insights:

1. You should have an active LambdaTest account.
2. You should han active subscription plan with HyperExecute or App Automation.
3. You should have executed at least one test on the LambdaTest HyperExecute / App Automation platform.

## How To Access Test Case Insights?

1. Go to the `Insights` tab on the left navigation bar and click on the `Create New`.
2. Select the `Custom Dashboard` option from the menu.
3. Now, search for `Test Case` widgets in the `Web Automation, App Automation & HyperExecute` products.
4. Add the widgets to the dashboard by clicking on the `Add Widget` button.

<!-- <img loading="lazy" src={require('../assets/images/analytics/test-case-widgets-dashboard.webp').default} alt="cmd" width="800" height="400" className="doc_img"/> -->

## Capture Test Case Insights for Web Automation

### Capture by WebHook

You can use LambdaHooks to start and end a test case within a single Selenium session.

#### Test Case Start

To start a test case, use the `lambda-testCase-start` hook:

```java
// To start a test case
((JavascriptExecutor) driver).executeScript("lambda-testCase-start={Your Test Case Name}");
```

#### Test Case End

To end a test case, use the `lambda-testCase-end` hook:

```java
// To end a test case
((JavascriptExecutor) driver).executeScript("lambda-testCase-end={Your Test Case Name}");
```

## Capture Test Case Insights for App Automation

### Capture by WebHook

You can use LambdaHooks to start and end a test case within a single Appium session.

#### Test Case Start

To start a test case, use the `lambda-testCase-start` hook:

```java
// To start a test case
((JavascriptExecutor) driver).executeScript("lambda-testCase-start={Your Test Case Name}");
```

#### Test Case End

To end a test case, use the `lambda-testCase-end` hook:

```java
// To end a test case
((JavascriptExecutor) driver).executeScript("lambda-testCase-end={Your Test Case Name}");

```

To know more about the hooks and how to use them, you can refer to the [LambdaHooks for Appium](/support/docs/appium-testmu-hooks/#differentiating-test-cases-in-single-session) documentation.

## Capture Test Case Insights for HyperExecute

### Capture by WebHook

You can capture the test case insights by using the WebHook. You need to add the following `WebHook` in your test script.

```bash
// For Stage of test case `START`
driver.executeScript(`lambda-testCase-start=${Name of the test case}`)

// For Stage of test case `END`
driver.executeScript(`lambda-testCase-end=${Name of test case}`)

```

### Capture by Playwright reporter 

#### Step 1 - Configure your reporter in YAML

You can capture the test case insights by using the `reporter` configuration in your `YAML` file for capturing and seeing the test cases in our test case widgets on dashboard. 

Here is a link to documentation for setting up the reporter for `PlaywrightJS`: [Click here](/docs/playwright-html-report/#step-1-update-your-playwright-configuration)

#### Step 2 - Add the code to lambdatest-setup file

Once, you have setup the `reporter` then the following code snippet should be added to your `lambdatest-setup.js` config. 

```js title=lambdatest-
try {
        const response = JSON.parse(await ltPage.evaluate(
          (_, data) => {
            return window.eval(data)
          },
          `lambdatest_action: ${JSON.stringify({ action: 'getTestDetails' })}`
        ))

        if (response?.data?.test_id) {
          testInfo.annotations.push({
            type: 'lt_test_id',
            description: response.data.test_id,
          })
          console.log('LambdaTest Test ID:', response.data.test_id)
        }
      } catch (err) {
        console.warn('Could not fetch LambdaTest test details:', err.message)
      }
```

#### Step 3 - Execute the tests using HyperExecute

You can now, execute the tests on our `HyperExecute` platform and you can see the results captured in the `Test Case Widgets` on the dashboards.

## Capture by NPM Package for WebdriverIO

You can capture the test case insights by using the NPM Package. You need to add the following `NPM Package` in your test script. Here is the link to the NPM package: [wdio-lambdatest-test-case-analytics-service](https://www.npmjs.com/package/wdio-lambdatest-test-case-analytics-service)

:::caution
The package currently only supports for `WebdriverIO` framework. We will be adding support for other frameworks soon.
:::

```bash
npm i wdio-lambdatest-test-case-analytics-service
```

Now, once the package has been installed, you need to add the following code in your `wdio.conf.js` file.

```javascript
exports.config = {
  // ...
  services: [
    ["lambdatest-test-case-analytics", {}], // Add the service
    // ... other services
  ],
  // ...
};
```

Once, you have completed the configuration and start executing your tests on the `HyperExecute` platform, you will be able to see the test case insights on the `Test Case Insights` module.

## Test Case Insights Widgets

### Test Case Health Snapshot

You can analyze the health of your test cases by using the `Test Case Health Snapshot` widget. The widget will display the total number of test cases success, failed. The widget will be displayed in card view and you can also view the details of the test cases by clicking on the `View Details` button.

<img loading="lazy" src={require('../assets/images/analytics/test-case-health-snapshot.webp').default} alt="cmd" width="800" height="400" className="doc_img"/>

### Test Case Group View

You can analyze the test cases by their group by using the `Test Case Group View` widget. The widget will display the total number of test cases in each group. The widget will be displayed in card view and you can also view the details of the test cases by clicking on the `View Details` button.

<img loading="lazy" src={require('../assets/images/analytics/test-cases-view.webp').default} alt="cmd" width="800" height="400" className="doc_img"/>

## Test Case Use Cases

The user can use the `Test Case Insights` module to analyze the test case level insights of their test automation execution on LambdaTest. The user can use the module to analyze the following use cases:

- Analyze the test case level insights of your test automation execution on LambdaTest.
- Check the health of your test cases.
- Detect the test cases that are failing frequently.
- Drill down to the test cases for faster debugging.
