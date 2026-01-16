---
id: hyperexecute-task-metrics
title: HyperExecute- Monitoring CPU and Memory Resource Consumption
hide_title: false
sidebar_label: Task Metrics
description: HyperExecute Task Metrics helps you to understand your resource utilization for different stages of test execution.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
    - HyperExecute
  - HyperExecute Metrics
  - HyperExecute Task
url: https://www.testmu.ai/support/docs/hyperexecute-task-metrics/
site_name: LambdaTest
slug: hyperexecute-task-metrics
canonical: https://www.testmu.ai/support/docs/hyperexecute-task-metrics/
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
          "name": "HyperExecute Metrics",
          "item": `${BRAND_URL}/support/docs/hyperexecute-task-metrics/`
        }]
      })
    }}
></script>
The effectiveness of your product directly influences your user experience and how they will adopt it. As a result, it is essential to recognize and address any performance issues before the product is made available to the users.

Test Metrics feature helps you to track whether your product is making inefficient use of resources or not, such as the CPU, and memory utilization by your product at an early stage of the development process. By doing so, you can ensure that your product functions optimally and provides a seamless user experience, increasing its chances of successful adoption by users.

This document outlines how to monitor CPU and Memory consumption of virtual machines (VMs) at various levels:

## Task Level View

The task level view provides insights into the CPU and memory consumption at the individual task level. This means you can see specific metrics related to how much CPU and memory is utilized by each task.

By analyzing the task level view, you can pinpoint any tasks that may be causing high CPU or memory usage issues, allowing you to optimize their performance for better overall results.

## Stage Level View

In the stage level view of HyperExecute, the analysis is segmented into three distinct phases: pre-stage, scenario stage, and post-stage.

- **Pre-Stage :** The pre-stage view provides insights into resource utilization and actions taken before the main test scenario begins. This phase focuses on the setup, configuration, and preparatory tasks that may influence CPU and memory consumption. By examining the pre-stage metrics, you can ensure that the environment is properly configured for optimal test execution.

- **Scenario Stage :** During the scenario stage, the focus shifts to CPU and memory consumption while the main test scenario is running. This stage captures performance metrics during the active execution of the test scenario, offering valuable data on resource usage patterns. Analyzing the scenario stage metrics helps identify any performance bottlenecks or inefficiencies affecting the test execution.

- **Post-Stage :** The post-stage view concentrates on resource consumption and actions taken after completing the main test scenario. By reviewing the post-stage metrics, you can evaluate resource management efficiency and ensure system stability post-test scenario execution.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/ujyqd8y01zch?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

