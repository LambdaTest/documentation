---
id: analytics-modules-test-overview
title: Analytics Modules
sidebar_label: Test Overview
description: Analytics Modules - Test Overview
keywords:
  - analytics
url: https://www.lambdatest.com/support/docs/analytics-modules-test-overview/
site_name: LambdaTest
slug: analytics-modules-test-overview/
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
          "item": "https://www.lambdatest.com/support/docs/analytics-modules-test-overview/"
        }]
      })
    }}
></script>

# Test Overview

---

The **Test Overview** module enables the users to get an overview of the tests running on LambdaTest. This module covers the general information about the tests including test flakiness, the total number of tests run and tests categorized by their status and platform.

## Test Case Health Snapshot

<img loading="lazy" src={require('../assets/images/analytics/test-overview-1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Health Snapshot` widget allows the user to easily analyze the **flakiness / inconsistency** of the tests executed on the platform. 

The user can effortlessly track the performance of the tests by viewing the count of tests that are consistently passing or failing.

:::note
The test case health snapshot only displays the count of the unique test names executed on the platform.
:::

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

He wants to understand the health status of the test cases run on the platform for a specific environment or test status. He can see all the unique test names listed with their consistency in the test status for a specific duration.

He can identify if any test cases are inconsistent and get the information about the test logs.
:::

## Build Health Snapshot

The `Build Health Snapshot` widget enables the user to track the performance of the builds created on the platform. The user can easily analyze the **flakiness / inconsistency** of the builds created on the platform.

The user can effortlessly track the performance of the builds by viewing the count of builds that are consistently successful  or error.

:::note 
The build health snapshot only displays the count of the unique build names created on the platform.
:::

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

He wants to understand the health status of the builds created on the platform for a specific environment or build status. He can see all the unique build names listed with their consistency in the build status for a specific duration.

He can identify if any builds are inconsistent and get the information about the test logs.
:::


## Test Summary

<img loading="lazy" src={require('../assets/images/analytics/test-overview-2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Summary` widget enables the user to track the total tests which have run on the platform grouped by their status and also includes information about the errors like Test case errors, Idle timeouts, Queue timeouts, and Lambda errors.

:::tip Use case
John is a QA Manager, and his 10+ member team runs innumerable tests on various LambdaTest products like Web Automation, App Automation, and HyperExecute.

He wants to get a total of the tests being executed on the platform for a specific product, environment or test status. With the Test Summary widget he can see the total count of his desired use cases.
:::

The following are the different use cases to annalyze your tests with **Test Summary**: 

- Add summary widget of all the products and analyze the total count of the test runs on the platform. 

- Apply multiple filters on the basis of Project, Build Name, Test Name to get more detailed summary view of the tests executed. 

- Identify all the list of tests by clicking on **inspect** to see all the tests of the selected status card. 

## Test Browser

<img loading="lazy" src={require('../assets/images/analytics/test-overview-3.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Browser` widget displays the overall distribution of the tests on various browsers on the platform.

<img loading="lazy" src={require('../assets/images/analytics/test-overview-4.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

#### Ability to get insights on Browser Versions

You can **drill-down** more on clicking on the **Browser** name and get the list by the **top 10 Browser versions** by ranking order of the total number of tests executed by the browser versions. 

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, and HyperExecute.

John wants to know the browser categorization of the test executed by his team to understand the performance of their web application on a particular browser.

He can identify if any test cases are failing for a particular browser and get the information about the test logs.  
:::

## Test OS

<img loading="lazy" src={require('../assets/images/analytics/test-overview-5.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test OS` widget displays the overall distribution of the tests on various Operating Systems.

<img loading="lazy" src={require('../assets/images/analytics/test-overview-6.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

You can **drill-down** more on clicking on the **Operating Systems** name and get the list by the **top 10 Operating System versions** by ranking order of the total number of tests executed by the browser versions. 

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the Operating System categorization of the test executed by his team to understand the performance of their application on a particular Operating System.

He can identify if any test cases are failing for a particular Operating System and get the information about the test logs.
:::

## Test Trends

<img loading="lazy" src={require('../assets/images/analytics/test-overview-7.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Trends` widget makes it very straightforward for the user to analyze the trends of the tests executed on the platforms over a period of time. 

The user can compare the current trends with the previous trends on the platform by clicking on the legends at the bottom of the graph.

:::tip Use case
John is a QA Manager, and wants to see the trends of the increase or decrease in the test cases over a period of time. John can interact with the graph and change the view in various view formats like hourly, weekly, daily, and monthly.
:::

The following are the different use cases to annalyze your tests with **Test Trends**: 

- Analyze the performance your of the tests which are run on the platform. 
- Filter by any test capablity and track the performance of the tests. 
- Track trends of individual capability applied for the tests for the executed on the Lambdatest platform. 

## Test Device Coverage

<img loading="lazy" src={require('../assets/images/analytics/test-overview-8.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Device Coverage` widget is an App Automation specific widget that displays the overall distribution of the tests on various mobile devices on the platform.

<img loading="lazy" src={require('../assets/images/analytics/test-overview-9.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The distribution can be further categorized by clicking on a particular mobile device. This displays the information about the specific model of the mobile devices where the tests are executed.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the device categorization of the test executed by his team to understand the performance of their application on a particular device.

He can identify if any test cases are failing for a particular device and get the information about the test logs.
:::

## Test Status Ratio

<img loading="lazy" src={require('../assets/images/analytics/test-overview-10.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Test Status Ratio` widget seamlessly provides information about the quality of the user's current test cases on the basis of the status marked on the platform. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to understand the distribution of the status of the executed tests on the platform. With Test Status Ratio widget he can easily get a list of tests that are failing or facing an error and resolve them.
:::

The following are the different use cases to annalyze your tests with **Test Status Ratio**: 
- Review the Passed/Failed or other status distribution of the tests run on the platform. 
- Check you distribution for all your SMOKE/Regression tests by filtering by Porject Name, Build Name or test names. 
- Track only required status by editing the widget in the settings. 

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Test Overview </span>
    </li>
  </ul>
</nav>
