---
id: hyperexecute-run-jmeter-tests
title: Unleash the Power of JMeter Performance Testing with HyperExecute
hide_title: false
sidebar_label: Execute JMeter Test Plan on HyperExecute
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

## Prerequisites

- Setup the [JMeter Test Plan](https://jmeter.apache.org/usermanual/build-web-test-plan.html) using Apache JMeter GUI.

After setting up a Test Plan, now you need to associate your test cases and execute it as well via HyperExecute.

## Step 1: Setup your JMeter Project

- Go to the [HyperExecute Project's Dashboard](https://hyperexecute.lambdatest.com/hyperexecute/projects) and click on the **Setup new project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/1.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

- Select the **Tool** as **JMeter** and enter your **Project Name**.

- Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/2.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

- Browse and Upload the test plans that you have created.

- Click on the **Save** button

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/3.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

## Step 2: Execute Your Test Plans

- Select your desired **.jmx** file and click on the **Run** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/4.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

- Configure the following parameters to perform the testing and click on the **Continue** button

  - **Total Users :** This indicates the number of users you intend to test for.

  - **Duration (min) :** This specifies the desired duration for the test.
  
  - **Ramp-up Time (min) :** This specifies the amount of time it should take to reach the peak test load.

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/5.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

  - **Total Load Distribution :** Configure the regions in which you want to distribute the load testing as per the % of the users.

- Click on the **Run Test** button.

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/6.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

## Step 3: Analyze Your Project Performance

- Toggle to the **Jobs** section.

### Summary Report

- Here you can check the Summary of your Job executed that comprises of the details:

  - **Total number of Virtual Users** which basically simulates an instance script of real-world visitors to your app or site.
  - **Ramp-up** and **Average Response** time.
  - Average **Throuput** and **Bandwidth** time.
  - **Load** and **Response Time** graph.
  - Additional details like **regions** and test duration.
  
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/7.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Timeline Report

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/8.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Request Stats

You can analyze the number of requests sent on that particular time.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/9.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Errors
- Here you can check the Error Code type, Error Count, percentage of that error, and the percent of error in all the samples.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/10.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

### Logs
- You can check the logs of your Jobs executed.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/11.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>