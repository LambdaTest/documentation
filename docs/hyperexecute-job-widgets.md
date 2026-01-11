---
id: hyperexecute-job-widgets
title: HyperExecute Job Widgets
hide_title: true
sidebar_label: Job Widgets
description: Quickly and easily set up Hyperexecute Widgets for efficient analysis of test results.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - HyperExecute
  - HyperExecute Widgets
  - HyperExecute Jobs
url: https://www.testmu.ai/support/docs/hyperexecute-job-widgets
site_name: LambdaTest
slug: hyperexecute-job-widgets
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-job-widgets/`
        }]
      })
    }}
></script>

# HyperExecute Job Widgets

## Job Trends

The `Job Trends` Widget empowers you to analyze the trends of executed Jobs on the <BrandName /> platform, categorized as **Failed**, **Aborted**, **Lambda Error**, **Timeout**, and **Completed**.

You can leverage the widget to understand the distribution of Job statuses, enabling a comprehensive assessment of your team's application performance. By utilizing legends for seamless filtering, you can quickly identify specific failing Job numbers and troubleshoo

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-trends.png').default} alt="job-trends" className="doc_img"/>

***

## Job Summary

The `Job Summary` widget enables you to track the total Jobs being run on the platform grouped by their status including **Completed**, **Partially Completed**, **Failed**, **Aborted**, etc.

If you wants to get a total number of the Jobs being executed on the platform for a specific environment or status. With the Job Summary widget you can see the total count of the desired use cases.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-summary.png').default} alt="job-trends" className="doc_img"/>

***

<!-- ## Job Insights
The `Job Insights` widget allows the user to get deep insights about the Jobs executed on the platform categorized by their status including **Completed**, **Failed**, **Lambda Error**, **Timeout**, and **Cancelled**.
You can understand the status distribution of the Jobs executed by your team and drill down into each failed Job number to understand where the error lies and troubleshoot it.
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-insights.png').default} alt="job-trends" className="doc_img"/> -->

## Job Queue Time Trends

The **Job Queue Time Trends** Widget provides you a comprehensive view of the total queue time for all jobs in a visual format. The widget displays a stacked line or bar chart, with the total queue time for each job on the y-axis and the job number in descending order from right on the x-axis.

This visualization enables you to quickly identify trends and patterns in the queue time across multiple jobs, helping to optimize the testing processes and resource allocation with other use cases like:

- Identifying trends in queue time
- Optimizing resource allocation
- Monitoring the impact of changes
- Comparing performance over time
- Sharing insights with team members

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/widgets/job-queue-time.png').default} alt="job-trends" className="doc_img"/>