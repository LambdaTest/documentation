---
id: hyperexecute-test-widgets
title: HyperExecute Test Widgets
hide_title: true
sidebar_label: Test Widgets
description: HyperExecute Test Widgets allow trend analysis of tests over time, providing insights into platform performance.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
    - HyperExecute
  - HyperExecute Widgets
  - HyperExecute Test
url: https://www.testmu.ai/support/docs/hyperexecute-test-widgets
site_name: LambdaTest
slug: hyperexecute-test-widgets
canonical: https://www.testmu.ai/support/docs/hyperexecute-test-widgets/
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
          "name": "HyperExecute Widgets",
          "item": `${BRAND_URL}/support/docs/hyperexecute-test-widgets/`
        }]
      })
    }}
></script>

# HyperExecute Test Widgets

## Test Trends

The Test Trends Widgets enable you to analyze the trends of the tests executed on the platforms over a period of time. You can compare the current trends with the previous trends on the platform by clicking on the legends at the bottom of the graph.

Use Cases of Test Trends Widgets:

- Analyze the performance of the tests that are running on the platform.
- Filter by any test capability and track the performance of the tests.
- Track trends in individual capability applied to the tests.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-trends.png').default} alt="job-trends" className="doc_img"/>

***

## Test Summary

The Test Summary Widget enables you to track the total tests that have run on the platform, grouped by their status, and also includes information about errors like test case errors, idle timeouts, queue timeouts, and Lambda errors.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-summary.png').default} alt="job-trends" className="doc_img"/>

***

## Test Browser

Test Browser widget displays the overall distribution of the tests on various browsers on the platform.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-browser.png').default} alt="job-trends" className="doc_img"/>

You can drill-down more on clicking on the Browser name and get the list by the top 10 Browser versions by ranking order of the total number of tests executed by the browser versions.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-browser-1.png').default} alt="job-trends" className="doc_img"/>

***

## Test OS

Test OS widget displays the overall distribution of the tests on various Operating Systems.

You can drill-down more on clicking on the Browser name and get the further details about that particular Operating System.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-os.png').default} alt="job-trends" className="doc_img"/>

***

## Test Status Ratio

The Test Status Ratio widget seamlessly provides information about the quality of your current test cases on the basis of the status marked on the platform. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

Use Cases:

- Review the Passed/Failed or other status distribution of the tests run on the platform.
- Track only required status by editing the widget in the settings.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-status-ratio.png').default} alt="job-trends" className="doc_img"/>

***

## Test Health Snapshot

The Test Health Snapshot widget allows you to easily analyze the flakiness / inconsistency of the tests executed on the platform. You can effortlessly track the performance of the tests by viewing the count of tests that are consistently passing or failing.

> **NOTE:** The test case health snapshot only displays the count of the unique test names executed on the platform.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-health.png').default} alt="job-trends" className="doc_img"/>

***

## Error Stats

The Error Stats widget allows you to easily analyze the tests categorized by their Status on the HyperExecute platform including Test Case Errors, Idle Timeout, Queue Timeout, and Lambda Error. You can even filter the graph by clicking on the relevant legends at the bottom of the graph.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/error-stats.png').default} alt="job-trends" className="doc_img"/>

*** 

## Build Health Snapshot

The Build Health Snapshot widget enables you to track the performance of the builds created on the platform. You can easily analyze the flakiness / inconsistency of the builds created on the platform. It tracks the performance of the builds by viewing the count of builds that are consistently successful or error.

> **NOTE:** The widget only displays the count of the unique build names created on the platform.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/build-health.png').default} alt="job-trends" className="doc_img"/>