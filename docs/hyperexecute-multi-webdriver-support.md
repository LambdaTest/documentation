---
id: hyperexecute-multi-webdriver-support
title: Multi WebDriver-Based Parallel Execution
hide_title: false
sidebar_label: Multi WebDriver-Based Parallel Execution
description: Multi WebDriver-Based Parallel Execution
keywords:
  - LambdaTest HyperExecute
  - HyperExecute Integration
  - Azure Test Plan
  - Katalon
  - Provar
  - Tosca
  - Excel
  - Accelq
url: https://www.lambdatest.com/support/docs/hyperexecute-multi-webdriver-support/
site_name: LambdaTest
slug: hyperexecute-multi-webdriver-support/
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
          "name": "Use Cases",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-multi-webdriver-support/"
        }]
      })
    }}
></script>

In traditional testing scenarios, executing test cases that require multiple components running concurrently with different webdrivers presents a significant challenge. Typically, each test case is mapped to a single webdriver, limiting the ability to execute tests in parallel.

This documentation explores how HyperExecute addresses this challenge by enabling parallel execution of test cases utilizing multiple webdrivers.

## Challenges Unveiled

One of our client's testing environment involved test cases divided into three components: **Caller**, **Transmitter**, and **Receiver**. Each component required a separate webdriver for execution. To achieve the desired test coverage, it was necessary for all three components to launch and run simultaneously.

However, on their local machines, running three separate instances concurrently for extended periods, such as nine hours straight, was impractical and resource-intensive.

## Unveiling the Approach

HyperExecute provided a solution by introducing parallel execution capabilities within a single virtual machine (VM). By launching three different sessions within one VM for the Caller, Receiver, and Transmitter components, HyperExecute enabled parallel execution of the test cases.

This approach optimized resource utilization and bandwidth, eliminating the need for running multiple machines simultaneously.

## Implementation Details

HyperExecute enabled parallel execution of multiple webdrivers within a single Virtual Machine (VM):

### Parallel Session Management

HyperExecute manages parallel test execution by launching separate sessions within a single VM for each component - Caller, Transmitter, and Receiver. These sessions operate concurrently, enabling the simultaneous execution of test cases.

### `concurrentSession` Flag

This flag triggers the launch of parallel webdrivers, allowing for the execution of test cases across multiple components simultaneously.

```bash
concurrentSession: true
```

## Benefits

This parallelization approach has several benefits:

### Optimized Resource Utilization
By consolidating multiple sessions within a single VM, HyperExecute optimizes resource utilization, reducing the need for running multiple machines concurrently.

### Bandwidth Optimization
Executing test cases in parallel within a single VM minimizes network bandwidth requirements, resulting in efficient utilization of available resources.

### Time Efficiency
Parallel execution of test cases significantly reduces the overall test execution time, enhancing productivity and accelerating the testing process.

## Conclusion

HyperExecute's implementation of parallel test execution with multiple webdrivers addresses the challenges associated with traditional testing scenarios.

By leveraging parallel sessions within a single VM and utilizing the concurrentSession flag, HyperExecute offers an efficient solution for achieving simultaneous execution of test cases across multiple components.

This approach enhances resource utilization, optimizes bandwidth, and improves overall testing efficiency, enabling organizations to streamline their testing processes effectively.