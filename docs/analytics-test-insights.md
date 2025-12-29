---
id: analytics-test-insights
title: Test Insights - Advanced insights for analyzing test runs
sidebar_label: Tests Insights
description: Analytics - Tests Insights for analyzing the past results with the latest test runs
keywords:
  - analytics
  - test insights
  - test observability
  - test analytics
  - test performance
  - test failure classification
url: https://www.testmu.ai/support/docs/analytics-test-insights
site_name: LambdaTest
slug: analytics-test-insights
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
          "name": "Linear App Integration",
          "item": "https://www.lambdatest.com/support/docs/analytics-test-insights/"
        }]
      })
    }}
></script>

---

import NewTag from '../src/component/newTag';

## About Test Insights
LambdaTest Analytics provides Test Insights, a powerful feature designed to help you analyze your test runs and gain valuable insights into your testing processes. With Test Insights, you can visualize your test runs, track progress, and improve the quality of your tests with actionable analytics.

## Prerequisites for Test Insights
1. **LambdaTest Account**: You must have an active LambdaTest account to access Test Insights.
2. **Subscription Plan**: Test Insights is available for users with the HyperExecute or App/Web Automation subscription plan.
3. **Test Execution Data**: You should have test execution data available in your LambdaTest account. Test Insights analyzes this data to provide insights into your test runs.
4. **Access to Analytics**: Ensure you have access to the LambdaTest Analytics platform to view and analyze your test insights.

## Getting Started with Test Insights

To get started with Test Insights, follow these steps:
1. **Log in to your LambdaTest account**: Go to the [LambdaTest website](https://www.lambdatest.com) and log in with your credentials.
2. **Navigate to the Analytics section**: Click on the "Insights" tab in the left sidebar of the LambdaTest dashboard.
3. **Select Test Insights**: In the Insights section, click on "Test Insights" to access the insights dashboard.
4. **View Test Runs**: You will see a list of your test runs, along with various metrics and visualizations.
5. **Analyze Test Data**: Use the available filters and options to analyze your test data, including execution time, pass/fail rates, and more.

## Key Features of Test Insights
- **Test Run Visualization**: Easily visualize your test runs with detailed graphs and charts, allowing you to identify trends and patterns in your testing data.
- **Test Performance Analysis**: Analyze the performance of your tests, including execution time, pass/fail rates, and more, to optimize your testing processes.
- **Test Failure Classification**: Automatically classify test failures to help you quickly identify and address issues in your code.
- **Actionable Analytics**: Gain actionable insights from your test data to make informed decisions and improve the overall quality of your software.
- **Historical Data Comparison**: Compare your current test runs with historical data to identify regressions and improvements over time.

## Unique Test Instances

The **Show Unique Instances** toggle consolidates retry runs to give you a cleaner, more accurate view of your test results.

**How it works:**

- When **ON**: Within a single build run, tests are grouped by **test name + environment** (browser + OS + device + resolution) as a single instance. Only the **final run** of each instance is considered in reporting, eliminating noise from intermediate retry attempts.

- When **OFF**: All individual test executions are shown, including every retry attempt.

The grouping is scoped to individual build IDs, meaning each build's metrics reflect only the deduplicated results within that specific build run.

This feature is especially useful when your test pipeline uses automatic retries, as it shows the true pass/fail state of each test-environment combination rather than inflating counts with intermediate failures.

:::note Processing Time
Retry run consolidation requires a small amount of processing time after test execution completes. If you've just finished running tests, wait a moment before toggling on Unique Instances to ensure all data is consolidated.
:::

## Use Cases for Test Insights

- **Test Optimization**: Use Test Insights to identify slow-running tests and optimize them for better performance.
- **Quality Assurance**: Monitor the quality of your tests by analyzing pass/fail rates and identifying areas for improvement.
- **Regression Detection**: Quickly detect regressions in your code by comparing current test runs with historical data.
- **Team Collaboration**: Share insights with your team to foster collaboration and improve the overall testing process.


