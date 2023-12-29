---
id: analytics-modules-hyperexecute
title: Analytics Modules
sidebar_label: HyperExecute
description: Analytics Modules - HyperExecute
keywords:
  - analytics
url: https://www.lambdatest.com/support/docs/analytics-modules-hyperexecute/
site_name: LambdaTest
slug: analytics-modules-hyperexecute/
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
          "item": "https://www.lambdatest.com/support/docs/analytics-modules-hyperexecute/"
        }]
      })
    }}
></script>

# HyperExecute

---

#### _All the HyperExecute insights you need!_

The `HyperExecute` module enables the QA managers to get all the HyperExecute insights in one place. One can easily find information ranging from the count of the jobs, tasks, and stages run on the platform and their insights.

There following are **widgets** supported in the HyperExecute module:

- Job Trends
- Job Insights
- Job Queue Time Trends
- Job Summary
- Stage Summary
- Stage Trends
- Task Summary
- Task Trends

## Job Trends

<img loading="lazy" src={require('../assets/images/analytics/job-trends-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Job Trends` widget allows the user to analyze the trends of the `Jobs` executed on the platform categorized into Failed, Aborted, Lambda Error, Timeout, and Completed which can easily be filtered with the legends added at the top of the graph.
:::tip Use case
John is a QA Manager, and his team runs more than 50,000 Jobs in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the status distribution of the Jobs executed by his team to understand the performance of their application.

He can identify if any particular Job number is failing and troubleshoot it by viewing the logs.
:::

## Job Insights

<img loading="lazy" src={require('../assets/images/analytics/analytics-hypex-2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Job Insights` widget allows the user to get deep insights about the `Jobs` executed on the platform categorized by their status including Completed, Failed, Lambda Error, Timeout, and Cancelled.

<img loading="lazy" src={require('../assets/images/analytics/analytics-hypex-3.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The high-level insights for the day can be drilled down to know about each `Job` run on the platform on a particular day by clicking on the respective bar.

<img loading="lazy" src={require('../assets/images/analytics/analytics-hypex-4.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Which can further be expanded to know about the exact count of each `Step` and `Scenario` of the particular `Job`.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 Jobs in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the status distribution of the Jobs executed by his team and drill down into each failed Job number to understand where the error lies and troubleshoot it.
:::

## Job Queue Time Trends

The Total `Queue Time of Jobs Widget` provides users with a comprehensive view of the total queue time for all jobs in a visual format. 

The widget displays a stacked line or bar chart, with the total queue time for each job on the y-axis and the job number in descending order from right on the x-axis. 

This visualization enables users to quickly identify trends and patterns in the queue time across multiple jobs, helping them optimize their testing processes and resource allocation.

#### Use Cases for this Widget

- **Identifying trends in queue time:** With the Total Queue Time of Jobs Widget, users can quickly identify trends in queue time across multiple jobs, allowing them to investigate the causes behind the fluctuations and take necessary actions to optimize their testing processes.

- **Optimizing resource allocation:** By understanding the total queue time for each job, users can make informed decisions about resource allocation, ensuring that their testing infrastructure is used optimally and reducing the overall queue time.

- **Monitoring the impact of changes:** The widget allows users to monitor the impact of changes made to their testing processes, infrastructure, or configurations. This enables them to measure the effectiveness of any adjustments and validate whether they have led to improvements in queue time.

- **Comparing performance over time:** The widget can be used to compare performance over time by selecting different date ranges, providing insights into how the testing pipeline's efficiency has evolved and helping to identify areas for continuous improvement.

- **Sharing insights with team members:** The Total Queue Time of Jobs Widget can be shared with team members, fostering collaboration and driving improvements in testing processes. Users can discuss patterns and trends in queue time, brainstorm potential solutions, and work together to optimize their testing pipeline.

## Job Summary

<img loading="lazy" src={require('../assets/images/analytics/job-summary-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Job Summary` widget enables the user to track the total Jobs being run on the platform grouped by their status including Completed, Partially Completed, Failed, Aborted, etc. 

:::tip Use case
John is a QA Manager, and his 10+ member team runs innumerable tests on HyperExecute.

He wants to get a total of the Jobs being executed on the platform for a specific environment or status. With the Job Summary widget he can see the total count of his desired use cases.
:::


## Stage Summary

<img loading="lazy" src={require('../assets/images/analytics/stage-summary-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Stage Summary` widget enables the user to track the total Stages being run on the platform grouped by their status including Completed, Skipped, Failed, Aborted, etc. 

:::tip Use case
John is a QA Manager, and his 10+ member team runs innumerable tests on HyperExecute.

He wants to get a total of the Stages being executed on the platform for a specific environment or status. With the Stage Summary widget he can see the total count of his desired use cases.
:::

## Stage Trends

<img loading="lazy" src={require('../assets/images/analytics/stage-trends-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Stage Trends` widget allows the user to analyze the trends of the `Stage` for each `Job` executed on the platform categorized into Completed, Failed, Lambda Error, and Cancelled which can be filtered by a specific date and time.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 Jobs in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the status distribution of the Stages in the Jobs executed by his team to understand the performance of their application.

He can identify if any particular Stage for the Job is failing and get the information about it.
:::

## Task Summary

<img loading="lazy" src={require('../assets/images/analytics/task-summary-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Task Summary` widget enables the user to track the total Tasks being run on the platform grouped by their status including Completed, Skipped, Failed, Aborted, etc. 

:::tip Use case
John is a QA Manager, and his 10+ member team runs innumerable tests on HyperExecute.

He wants to get a total of the Tasks being executed on the platform for a specific environment or status. With the Task Summary widget he can see the total count of his desired use cases.
:::

## Task Trends

<img loading="lazy" src={require('../assets/images/analytics/task-trends-stats.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Task Trends` widget allows the user to analyze the trends of the `Task` for each `Job` executed on the platform categorized into Completed, Failed, Aborted, Lambda Error, and Cancelled, which can be filtered by a specific date and time.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 Jobs in a month across various LambdaTest products like Web Automation, App Automation, and HyperExecute.

John wants to know the status distribution of the Tasks in the Jobs executed by his team to understand the performance of their application.

He can identify if any particular Task in the Job is failing and get the information about it.
:::



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
      Hyperexecute </span>
    </li>
  </ul>
</nav>
