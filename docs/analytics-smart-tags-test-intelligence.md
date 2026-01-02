---
id: analytics-smart-tags-test-intelligence
title: Smart Tags - Test Intelligence
sidebar_label: Smart Tags
description: Analyze tests faster with Smart Tags in TestMu AI Analytics. Get insights on your test automation execution with Smart Tags.
keywords:
  - analytics
  - smart tags
url: https://www.testmu.ai/support/docs/analytics-smart-tags-test-intelligence
site_name: LambdaTest
slug: analytics-smart-tags-test-intelligence
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
          "name": "Test Overview",
          "item": `${BRAND_URL}/support/docs/analytics-smart-tags-test-intelligence/`
        }]
      })
    }}
></script>

Smart Tags in <BrandName /> Analytics help you analyze your test automation execution faster. With Smart Tags, you can categorize your tests based on different parameters and get insights on your test execution. This feature helps you identify patterns, trends, and anomalies in your test results, making it easier to optimize your test automation strategy.

## Pre-requisites For Smart Tags:

1. You should have an active <BrandName /> account.
2. You should run at least 10 tests on the <BrandName /> automation platform.
3. This feature is available for users with the HyperExecute or App / Web Automation subscription plan.
4. You should have access to the <BrandName /> Analytics platform.
5. You can see the smart tags on creating a dashboard in the Insights section.
6. Click on the `Create New` button to create a new dashboard.
7. Choose any of the available widgets and add them to the dashboard.
8. Click on the widget drill down to see the smart tags.

## What are Smart Tags?

Smart Tags are labels that are assigned by the system depending on the execution patterns of your tests. These tags are currently of the following types:

* **Flaky:** Tests that have inconsistent results across multiple executions.
* **Always Failing:** Tests that have consistently failed across multiple executions.
* **New Failures:** Tests that have started failing recently.
* **Performance Anomalies:** Tests that have shown a significant change in performance.

## Flaky Tests:

Flaky tests are tests that have inconsistent results across multiple executions. These tests may pass or fail randomly, making it difficult to identify the root cause of the failure. By categorizing tests as flaky, you can focus on fixing these tests to improve the reliability of your test suite.

For more information on Flaky Tests, you can refer to our [Flaky Tests Guide](/docs/test-intelligence-flakiness-test-detection/).

## Always Failing Tests:

Always failing tests are tests that have consistently failed across multiple executions. These tests are critical as they indicate a persistent issue in your application or test automation scripts. By identifying and fixing these tests, you can ensure the stability and reliability of your test suite.

## New Failures:

New failures are tests that have started failing recently. These tests may indicate a recent change in your application or test environment that has caused the failures. By monitoring new failures, you can quickly identify and address issues before they impact your test suite.

## Performance Anomalies:

Performance anomalies are tests that have shown a significant change in performance. These tests may have suddenly become slower or faster than usual, indicating a potential issue in your application or test environment. By tracking performance anomalies, you can investigate the root cause of the performance change and optimize your test suite accordingly.

