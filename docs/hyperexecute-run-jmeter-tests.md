---
id: hyperexecute-run-jmeter-tests
title: Unleash the Power of JMeter Performance Testing with HyperExecute
hide_title: false
sidebar_label: JMeter
description: Perform the steps to learn how to do the performance testing on HyperExecute using the jmeter tests plans
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - lambdatest
  - jmeter
  - hyperexecute dashboard
url: https://www.lambdatest.com/support/docs/hyperexecute-run-jmeter-tests/
site_name: LambdaTest
slug: hyperexecute-run-jmeter-tests/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Products Integration",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Performance Testing",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-run-jmeter-tests/"
        }]
      })
    }}
></script>

> This is currently in the **Beta** version.

## Prerequisites

- Setup the [JMeter Test Plan](https://jmeter.apache.org/usermanual/build-web-test-plan.html) using Apache JMeter GUI. After setting up a Test Plan, now you need to associate your test cases and execute it as well via HyperExecute.

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the JMeter Performance Testing from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-jmeter-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

## Step 1: Setup your JMeter Project

- Go to the [HyperExecute Project's Dashboard](https://hyperexecute.lambdatest.com/hyperexecute/projects) and click on the **New Project** button.
- Browse and Upload your JMeter test files to create a new performance test project.
- Click on the **Save** button

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/images/hyperexecute/frameworks/performance_testing/setup.mp4').default} type="video/mp4" />
</video>

## Step 2: Execute your Test Plans
- Select your desired **.jmx** file and click on the **Run** button.
- Configure the following parameters to perform the testing and click on the **Continue** button
  - **Total Users :** This indicates the number of users you intend to test for.
  - **Duration (min) :** This specifies the desired duration for the test.
  - **Ramp-up Time (min) :** This specifies the amount of time it should take to reach the peak test load.
  - **Total Load Distribution :** Configure the **regions** in which you want to distribute the load testing as per the % of the users.
  - **Split CSV :** Enables splitting the input data from a CSV file among different threads or regions. This ensures organized data utilization across parallel executions.
  - **Job Labels :** Add meaningful labels or tags to test executions for better identification and traceability in logs and reports.
  - **Machine count :**  Specify the number of machines (or nodes) to use for parallel test execution. This parameter is essential for scaling test workloads or reducing execution time.

:::info
**Supported Regions :** HyperExecute supports the following regions for performance testing
- West US 2 (Moses Lake, Washington)
- East US (Richmond, Virginia) (**default**)
- Central India (Pune, Maharashtra)
- Southeast Asia (Singapore)
- Brazil South (São Paulo State, Brazil)
- Mexico Central (Querétaro State, Mexico)
:::

- Click on the **Run Test** button.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/images/hyperexecute/frameworks/performance_testing/execute.mp4').default} type="video/mp4" />
</video>

## Step 3: Analyze Your Project Performance

- Toggle to the **Jobs** section.

### Summary Report

- Here you can check the Summary of your Job executed that comprises of the details:

  - **Total number of Virtual Users** which basically simulates an instance script of real-world visitors to your app or site.
  - **Ramp-up** and **Average Response** time.
  - Average **Throuput** and **Bandwidth** time.
  - **Load** and **Response Time** graph.
  - Additional details like **regions** and test duration.
  
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/summary-report.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Timeline Report

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/timeline-report.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Request Stats

You can analyze the number of requests sent on that particular time.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/request-stats.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Errors
- Here you can check the Error Code type, Error Count, percentage of that error, and the percent of error in all the samples.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/error-reports.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Logs
- You can check the logs of your Jobs executed.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/logs.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

## Handling Special Scenarios: Overriding and Default Values
### Scenario 1: Overriding Values via the HyperExecute UI
When executing performance tests using HyperExecute, you have the option to override default parameters directly in the UI. Let’s explore a sample scenario to understand how HyperExecute handles these overrides.

You configure the following parameters in the HyperExecute UI:
- **Virtual Users :** (The total number of simulated users for the test): 500
- **Ramp-Up Time :** 1 minute
- **Total Duration :** 2 minutes
- **Regions :** 2 (50% distribution each)
- **Maximum Users per Machine :** 100

#### Resulting Test Distribution:
- **Load Distribution Across Regions :**
  - The total 500 virtual users are divided equally between the two regions.
  - Each region is allocated 250 users (500 users ÷ 2 regions).

- **Machine Allocation :** Since a single machine can handle a maximum of 100 users, each region requires multiple machines to support its load:
  - **Region 1 :** 250 users → 3 machines (lets say it distributed as 84, 83, 83 users per machine).
  - **Region 2 :** 250 users → 3 machines (lets say it distributed as 84, 83, 83 users per machine).

- **User Allocation per Machine:** Users are evenly distributed among machines to ensure optimal utilization and balanced load:
For example, in Region 1:
Machine 1 = 84 users, Machine 2 = 83 users, Machine 3 = 83 users.

#### Key Takeaways:
- **Flexible Overrides :** HyperExecute dynamically adjusts the load distribution and machine allocation based on your specified parameters.
- **Optimal Resource Utilization :** It ensures that no machine exceeds the maximum user threshold, maintaining a balanced and efficient test execution.
- **Region-Specific Allocation :** Users are distributed proportionally based on the defined load percentages for each region.

This approach ensures smooth execution of performance tests and provides precise control over resource utilization, enabling you to simulate real-world scenarios effectively.