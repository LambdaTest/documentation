---
id: analytics-modules-automation-test-overview
title: Web & App Automation Modules
sidebar_label: Web & App Automation
description: A detailed guide to understanding the test health and trends module. Explore widgets for Test Status, Browser, OS Distribution, and more.
keywords:
 - analytics
 - test overview
 - test trends
 - test status ratio
 - test browser
 - test OS
 - test device coverage
url: https://www.testmu.ai/support/docs/analytics-modules-automation-test-overview
site_name: LambdaTest
slug: analytics-modules-automation-test-overview
canonical: https://www.testmu.ai/support/docs/analytics-modules-automation-test-overview/
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
          "item": `${BRAND_URL}/support/docs/analytics-modules-automation-test-overview/`
        }]
      })
    }}
></script>
The Test Overview module in <BrandName /> Analytics is a powerful tool that provides you with a comprehensive view of your test performance across various dimensions. By leveraging this module, you can gain valuable insights into test flakiness, total tests run, and test categorization by status and platform.

## Test Health Snapshot

<img loading="lazy" src={require('../assets/images/analytics/test-overview-1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Health Snapshot widget enables you to quickly assess the flakiness or inconsistency of your tests executed on the <BrandName /> platform. This widget displays the count of unique test names and their consistency in test status over a specified duration.

#### How It Works
- The widget calculates the total number of unique test names executed on the platform.
- For each unique test name, it determines the consistency of the test status (passing or failing) across multiple runs.
- Tests that consistently pass or fail are considered stable, while tests with varying statuses are marked as inconsistent.

#### Value Proposition
By identifying inconsistent tests, you can focus your efforts on stabilizing your test suite, reducing flaky tests, and improving overall test reliability. This widget helps you prioritize your test maintenance tasks and ensures a more robust testing process.

## Build Health Snapshot

<img loading="lazy" src={require('../assets/images/analytics/test-overview-2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Build Health Snapshot widget provides an overview of the performance and consistency of your builds created on the <BrandName /> platform. It displays the count of unique build names and their consistency in build status over a specified duration.

#### How It Works
- The widget calculates the total number of unique build names created on the platform.
- For each unique build name, it determines the consistency of the build status (successful or error) across multiple runs.
- Builds that consistently succeed or fail are considered stable, while builds with varying statuses are marked as inconsistent.

#### Value Proposition
By monitoring the health of your builds, you can identify and resolve any inconsistencies or errors in your build process. This widget helps you ensure the reliability and stability of your builds, leading to a more efficient and effective testing workflow.

## Test Summary

<img loading="lazy" src={require('../assets/images/analytics/test-overview-3.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Summary widget provides a high-level overview of the total tests run on the <BrandName /> platform, grouped by their status. It also includes information about various test-related errors, such as test case errors, idle timeouts, queue timeouts, and Lambda errors.

#### How It Works
- The widget calculates the total number of tests executed on the platform.
- It categorizes the tests based on their status (passed, failed, skipped, etc.).
- The widget also tracks and displays the count of different test-related errors encountered during execution.

#### Value Proposition
The Test Summary widget allows you to quickly gauge the overall health and performance of your tests. By understanding the distribution of test statuses and identifying common errors, you can take targeted actions to improve test stability, reduce errors, and optimize your testing process.

## Test Browser Distribution

<img loading="lazy" src={require('../assets/images/analytics/test-overview-4.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Browser Distribution widget provides a breakdown of the tests executed across different browsers on the <BrandName /> platform. It displays the distribution of tests by browser and allows you to drill down into specific browser versions.

#### How It Works
- The widget calculates the total number of tests executed on each browser.
- It presents the distribution of tests across different browsers in a visual format.
- You can click on a specific browser to view the top 10 browser versions based on the number of tests executed.

#### Value Proposition
By understanding the browser distribution of your tests, you can ensure adequate coverage across different browsers and versions. This widget helps you identify any browser-specific issues and optimize your test coverage to deliver a seamless user experience across various browsers.

## Test OS Distribution

<img loading="lazy" src={require('../assets/images/analytics/test-overview-5.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test OS Distribution widget provides an overview of the tests executed across different operating systems on the <BrandName /> platform. It displays the distribution of tests by operating system and allows you to drill down into specific OS versions.

#### How It Works
- The widget calculates the total number of tests executed on each operating system.
- It presents the distribution of tests across different operating systems in a visual format.
- You can click on a specific operating system to view the top 10 OS versions based on the number of tests executed.

#### Value Proposition
Understanding the distribution of tests across different operating systems helps you ensure compatibility and identify any OS-specific issues. This widget enables you to optimize your test coverage and deliver a consistent user experience across various operating systems.

## Test Trends

<img loading="lazy" src={require('../assets/images/analytics/test-overview-6.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Trends widget provides a visual representation of the trends in test execution over time. It allows you to analyze the performance of your tests and compare current trends with historical data.

#### How It Works
- The widget tracks the number of tests executed on the platform over a specified time period.
- It presents the test trends in a graph format, allowing you to visualize the changes in test volume over time.
- You can interact with the graph to view data for specific time intervals and compare trends across different periods.

#### Value Proposition
By analyzing test trends, you can identify patterns, spikes, or dips in test execution. This information helps you understand the impact of changes in your testing process, identify areas for optimization, and make data-driven decisions to improve your overall testing strategy.

## Test Device Coverage

<img loading="lazy" src={require('../assets/images/analytics/test-overview-7.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Device Coverage widget, specifically designed for App Automation, provides an overview of the tests executed across different mobile devices on the <BrandName /> platform. It displays the distribution of tests by device and allows you to drill down into specific device models.

#### How It Works
- The widget calculates the total number of tests executed on each mobile device.
- It presents the distribution of tests across different devices in a visual format.
- You can click on a specific device to view the distribution of tests across different models of that device.

#### Value Proposition
Understanding the device coverage of your tests is crucial for ensuring the compatibility and performance of your mobile applications. This widget helps you identify any device-specific issues, optimize your test coverage, and deliver a seamless user experience across a wide range of mobile devices.

## Test Status Ratio

<img loading="lazy" src={require('../assets/images/analytics/test-overview-8.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The Test Status Ratio widget provides a breakdown of the test statuses (passed, failed, skipped, etc.) for the tests executed on the <BrandName /> platform. It allows you to assess the overall quality and stability of your test cases.

#### How It Works
- The widget calculates the total number of tests executed on the platform.
- It categorizes the tests based on their status (passed, failed, skipped, etc.).
- The widget presents the distribution of test statuses in a visual format, such as a pie chart or bar graph.

#### Value Proposition
By analyzing the test status ratio, you can quickly identify the proportion of passing, failing, and skipped tests. This information helps you assess the overall health and reliability of your test suite. You can use this widget to track improvements in test stability over time and identify areas that require further attention and optimization.

---

The Test Overview module in <BrandName /> Analytics empowers you to gain comprehensive insights into your test performance, identify trends, and make data-driven decisions to optimize your testing process. By leveraging the various widgets available in this module, you can ensure test reliability, improve test coverage, and deliver high-quality applications across different browsers, operating systems, and devices.

Start exploring the Test Overview module today and unlock the full potential of your testing data to drive continuous improvement and success in your testing efforts.