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
