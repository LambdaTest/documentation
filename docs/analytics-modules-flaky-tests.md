---
id: analytics-modules-test-intelligence-flaky-test-analytics
title: Flaky Test Analytics with Test Intelligence
sidebar_label: Flaky Tests Insights
description: Analyze your flaky tests with Test Intelligence and get insights on the flaky tests that are causing your test runs to fail.
keywords:
  - analytics
url: https://www.lambdatest.com/support/docs/analytics-modules-test-intelligence-flaky-test-analytics/
site_name: LambdaTest
slug: analytics-modules-test-intelligence-flaky-test-analytics/
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
          "item": "https://www.lambdatest.com/support/docs/analytics-modules-test-intelligence-flaky-test-analytics/"
        }]
      })
    }}
></script>
The best way to analyze your flaky tests is to use Test Intelligence. Test Intelligence is a machine learning-based algorithm that helps you identify flaky tests and get insights on the flaky tests that are causing your test runs to fail. By observing the historical test runs, Test Intelligence can identify the flaky tests and provide you with the insights to help you fix them.

<iframe width="800" height="450" src="https://www.youtube.com/embed/h_A4KRo2V8Q?si=k_acrR-06_FO0N7q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Flakiness Trends
The Flakiness Trends widget allows the QA teams to analyze the trends of the flaky tests executed on the platform categorized into Passed, Failed, and Flaky which can easily be filtered with the legends added at the top of the graph.

<img loading="lazy" src={require('../assets/images/analytics/atx-flakiness-trends.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The graph shows the time series of the flaky tests executed on the platform. The QA teams can easily filter the graph with the legends added at the top of the graph. The QA teams can also hover over the graph to get the exact count of the flaky tests executed on the platform.


The following are the use cases of the Flakiness Trends widget:
- The QA teams can check the decrease or increase in the flaky tests executed on the platform over time.
- Easily navigate the to the test logs and fix the issues identified on the test logs. 

## Flakiness Severity Summary
Analyze the flaky tests severity summary which is broadly categorized to High, Medium and Low depending on the `Flake Rate` of the tests. The following are the distribution of for the severity: 

- `High` - If the flake rate is more than `75%` in compared to the previous test runs. 
- `Medium` - If the flake rate is between `50%` to `75%` in compared to the previous test runs.
- `Low` - If the flake rate is less than `50%` in compared to the previous test runs.

<img loading="lazy" src={require('../assets/images/analytics/atx-ftd-severity.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

:::note FLAKY RATE
The flake rate is calculated on the basis of the total number of flaky tests executed on the platform in compared to the previous test runs.

For example, if the total number of flaky tests executed on the platform is `100` and the total number of flaky tests executed on the platform in compared to the previous test runs is `50` then the flake rate will be `50%`.
:::

The following are the use cases of the Flakiness Severity Summary widget:
- The QA teams can easily identify the flaky tests that are causing the test runs to fail on the basis of the severity.
- The QA can prioritize on the basis of the severity and fix the flaky tests that are causing the test runs to fail.

## Flakiness Tests - Test Group View
The Flakiness Tests - Test Group View widget allows the QA teams to analyze the flaky tests on the basis of the test groups. The QA teams can easily analyze the flaky tests on the basis of the test groups and get insights on the flaky tests that are causing the test runs to fail.

<img loading="lazy" src={require('../assets/images/analytics/atx-ftd-tests-group-view.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The following are the use cases of the Flakiness Tests - Test Group View widget:
- The QA teams can easily analyze the flaky tests on the basis of the test groups.
- The QA teams can identify the % of occurrence of the flaky tests on the basis of each test group.

:::note Flaky Rate Calculation
To read more about the Flaky Tests Analytics, you can refer the documentation at [Flaky Tests - Test Intelligence](/docs/test-intelligence-flakiness-test-detection/)
:::