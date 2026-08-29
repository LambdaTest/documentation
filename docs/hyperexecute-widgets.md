---
id: hyperexecute-widgets
title: HyperExecute Widgets on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Widgets"
description: Explore HyperExecute widgets for job, stage, task, test, and resource utilization insights, all in one place on TestMu AI.
keywords:
  - hyperexecute widgets
  - hyperexecute job widgets
  - hyperexecute stage widgets
  - hyperexecute task widgets
  - hyperexecute test widgets
  - hyperexecute resource widgets
url: https://www.testmuai.com/support/docs/hyperexecute-widgets/
site_name: TestMu AI
slug: hyperexecute-widgets/
canonical: https://www.testmuai.com/support/docs/hyperexecute-widgets/
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
          "name": "HyperExecute Widgets on TestMu AI",
          "item": `${BRAND_URL}/support/docs/hyperexecute-widgets/`
        }]
      })
    }}
></script>

# HyperExecute Widgets

HyperExecute Widgets give you all the insights of your executed jobs in one place, including the count and insights of Jobs, Stages, Tasks, and Tests run on the platform.

## Job Widgets

### Job Trends

The `Job Trends` Widget empowers you to analyze the trends of executed Jobs on the <BrandName /> platform, categorized as **Failed**, **Aborted**, **Lambda Error**, **Timeout**, and **Completed**.

You can leverage the widget to understand the distribution of Job statuses, enabling a comprehensive assessment of your team's application performance. By utilizing legends for seamless filtering, you can quickly identify specific failing Job numbers and troubleshoo

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-trends.png').default} alt="job-trends" className="doc_img"/>

***

### Job Summary

The `Job Summary` widget enables you to track the total Jobs being run on the platform grouped by their status including **Completed**, **Partially Completed**, **Failed**, **Aborted**, etc.

If you wants to get a total number of the Jobs being executed on the platform for a specific environment or status. With the Job Summary widget you can see the total count of the desired use cases.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-summary.png').default} alt="job-trends" className="doc_img"/>

***

<!-- ### Job Insights
The `Job Insights` widget allows the user to get deep insights about the Jobs executed on the platform categorized by their status including **Completed**, **Failed**, **Lambda Error**, **Timeout**, and **Cancelled**.
You can understand the status distribution of the Jobs executed by your team and drill down into each failed Job number to understand where the error lies and troubleshoot it.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-insights.png').default} alt="job-trends" className="doc_img"/> -->

### Job Queue Time Trends

The **Job Queue Time Trends** Widget provides you a comprehensive view of the total queue time for all jobs in a visual format. The widget displays a stacked line or bar chart, with the total queue time for each job on the y-axis and the job number in descending order from right on the x-axis.

This visualization enables you to quickly identify trends and patterns in the queue time across multiple jobs, helping to optimize the testing processes and resource allocation with other use cases like:

- Identifying trends in queue time
- Optimizing resource allocation
- Monitoring the impact of changes
- Comparing performance over time
- Sharing insights with team members

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-queue-time.png').default} alt="job-trends" className="doc_img"/>

## Stage Widgets

### Stage Trends

The `Stage Trends` widget enables the user to track the total Stages being run on the platform grouped by their status including **Completed**, **Skipped**, **Failed**, **Aborted**, etc.

You can use this widget when you want to get a total of the Stages being executed on the platform for a specific environment or status. With the Stage Summary widget you can see the total count of the desired use cases.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/stage-trends.png').default} alt="job-trends" className="doc_img"/>

***

### Stage Summary

The `Stage Summary` widget enables the user to track the total Stages being run on the platform grouped by their status including **Completed**, **Skipped**, **Failed**, **Aborted**, etc.

If you wants to get a total of the Stages being executed on the platform for a specific environment or status. With the Stage Summary widget you can see the total count of the desired use cases.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/stage-summary.png').default} alt="job-trends" className="doc_img"/>

## Task Widgets

### Task Trends

The `Task Trends` widget allows you to analyze the trends of the Task for each Job executed on the platform categorized into **Completed**, **Failed**, **Aborted**, **Lambda Error**, and **Cancelled**, which can be filtered by a specific date and time.

If you want to know the status distribution of the Tasks in the Jobs executed by the team to understand the performance of their application. You can identify if any particular Task in the Job is failing and get the information about it.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/task-trends.png').default} alt="job-trends" className="doc_img"/>

***

### Task Summary

The `Task Summary` widget enables the user to track the total Tasks being run on the platform grouped by their status including **Completed**, **Skipped**, **Failed**, **Aborted**, etc.

If you wants to get a total of the Tasks being executed on the platform for a specific environment or status. With the Task Summary widget you can see the total count of the desired use cases.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/task-summary.png').default} alt="job-trends" className="doc_img"/>

***

### Task Status Ratio

The `Task Status Ratio` widget provides an insightful overview of the quality of your current test cases, as marked by the status within your framework on the platform. 

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/task-status-ratio.png').default} alt="job-trends" className="doc_img"/>

## Test Widgets

### Test Trends

The Test Trends Widgets enable you to analyze the trends of the tests executed on the platforms over a period of time. You can compare the current trends with the previous trends on the platform by clicking on the legends at the bottom of the graph.

Use Cases of Test Trends Widgets:

- Analyze the performance of the tests that are running on the platform.
- Filter by any test capability and track the performance of the tests.
- Track trends in individual capability applied to the tests.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-trends.png').default} alt="job-trends" className="doc_img"/>

***

### Test Summary

The Test Summary Widget enables you to track the total tests that have run on the platform, grouped by their status, and also includes information about errors like test case errors, idle timeouts, queue timeouts, and Lambda errors.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-summary.png').default} alt="job-trends" className="doc_img"/>

***

### Test Browser

Test Browser widget displays the overall distribution of the tests on various browsers on the platform.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-browser.png').default} alt="job-trends" className="doc_img"/>

You can drill-down more on clicking on the Browser name and get the list by the top 10 Browser versions by ranking order of the total number of tests executed by the browser versions.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-browser-1.png').default} alt="job-trends" className="doc_img"/>

***

### Test OS

Test OS widget displays the overall distribution of the tests on various Operating Systems.

You can drill-down more on clicking on the Browser name and get the further details about that particular Operating System.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-os.png').default} alt="job-trends" className="doc_img"/>

***

### Test Status Ratio

The Test Status Ratio widget seamlessly provides information about the quality of your current test cases on the basis of the status marked on the platform. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

Use Cases:

- Review the Passed/Failed or other status distribution of the tests run on the platform.
- Track only required status by editing the widget in the settings.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-status-ratio.png').default} alt="job-trends" className="doc_img"/>

***

### Test Health Snapshot

The Test Health Snapshot widget allows you to easily analyze the flakiness / inconsistency of the tests executed on the platform. You can effortlessly track the performance of the tests by viewing the count of tests that are consistently passing or failing.

> **NOTE:** The test case health snapshot only displays the count of the unique test names executed on the platform.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/test-health.png').default} alt="job-trends" className="doc_img"/>

***

### Error Stats

The Error Stats widget allows you to easily analyze the tests categorized by their Status on the HyperExecute platform including Test Case Errors, Idle Timeout, Queue Timeout, and Lambda Error. You can even filter the graph by clicking on the relevant legends at the bottom of the graph.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/error-stats.png').default} alt="job-trends" className="doc_img"/>

*** 

### Build Health Snapshot

The Build Health Snapshot widget enables you to track the performance of the builds created on the platform. You can easily analyze the flakiness / inconsistency of the builds created on the platform. It tracks the performance of the builds by viewing the count of builds that are consistently successful or error.

> **NOTE:** The widget only displays the count of the unique build names created on the platform.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/build-health.png').default} alt="job-trends" className="doc_img"/>

## Resource Utilization Widgets

### Concurrency Trends

The Concurrency Trends widget allows you to know the tests which are kept in the queue and the tests that are put in a running state. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/concurrency-trends.png').default} alt="job-trends" className="doc_img"/>

## Create Widget Dashboards

### Create Your Widgets Dashboard using Pre-built Template

To create your widgets dashboard, follow the below mentioned steps:

**Step 1:** Go to the Insights section from the <BrandName /> Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step1.png').default} alt="job-trends" className="doc_img"/>

**Step 2:** Click on the **Create New** button, then select the **Pre-built Templates** option.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step4.png').default} alt="job-trends" className="doc_img"/>

**Step 3:** Select HyperExecute Report

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step5.png').default} alt="job-trends" className="doc_img"/>

**Step 4:** Enter your Dashboard name and then click on **Create Dashboard** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step6.png').default} alt="job-trends" className="doc_img"/>

### Create Your Custom Widgets Dashboard

To create your widgets dashboard, follow the below mentioned steps:

**Step 1:** Go to the Insights from the <BrandName /> Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step1.png').default} alt="job-trends" className="doc_img"/>

**Step 2:** Click on the **Create New** button, then select the **Custom Widgets** option.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step2.png').default} alt="job-trends" className="doc_img"/>

**Step 3:** Now customize your Widget Dashboard

- Select HyperExecute

- Give name to your Dashboard

- Select your desired widgets that you want in your dashboard.

> Note: You can re-customize the same dashboard by adding more widgets later.

- Click on **Create Dashboard** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/step3.png').default} alt="job-trends" className="doc_img"/>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item"><a className="breadcrumbs__link" target="_self" href={BRAND_URL}>Home</a></li>
    <li className="breadcrumbs__item"><a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>Support</a></li>
    <li className="breadcrumbs__item breadcrumbs__item--active"><span className="breadcrumbs__link">HyperExecute Widgets</span></li>
  </ul>
</nav>
