---
id: hyperexecute-create-jmeter-test-plan
title: Create a HTTP Test Plan using Apache JMeter GUI
hide_title: false
sidebar_label: Create a HTTP Test Plan using Apache JMeter GUI
description: Learn how to do the create a HTTP Test Plan using Apache JMeter GUI
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - lambdatest
  - jmeter
  - apache jmeter gui
  - http
  - create test plaxn
url: https://www.lambdatest.com/support/docs/hyperexecute-create-jmeter-test-plan/
site_name: LambdaTest
slug: hyperexecute-create-jmeter-test-plan/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-create-jmeter-test-plan/"
        }]
      })
    }}
></script>

You will have to first setup the JMeter Test Plan before integrating HyperExecute with it.

## Prerequisite

- You need to have a Java v8 or higher.
- You need to install the JDK.

## Steps to create a JMeter Test Plan

### Step 1: Setup Apache JMeter

- Download the [Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi) zip file.

- Now, unzip the file and place the JMeter folder at any directory.

- Go to **JMETER_HOME/bin** and start JMeter with **jmeterw.bat** on Windows and **jmeter.sh** on Linux/Unix.

### Step 2: Create a Test Plan

- Double-click the **jmeter.jar** file in your JMeter installation directory.

- Right-click on **Test Plan** and select **Add**. This creates a new, empty test plan.

### Step 3: Setup Your Test Case

#### Add a Thread Group

- Right-click on the Test Plan and select **Threads (Users) -> Thread Group**.

- Configure the Thread Group:

  - **Name:** Assign a descriptive name (e.g., "Basic HTTP Load Test").
  - **Number of Threads (users):** Specify the number of simulated users you want to simulate (e.g., 10).
  - **Ramp-Up Period (seconds):** Set the time it takes for all threads to ramp up to the specified number (e.g., 30 seconds).
  - **Loop Count:** If you want to run the test repeatedly, set the number of loops (e.g., 1).

#### Add an HTTP Request

- Right-click on the Thread Group and select **Sampler -> HTTP Request**.

- Configure the HTTP Request:

  - **Name:** Enter a meaningful name (e.g., "Home Page Request").
  - **Server Name or IP:** Provide the hostname or IP address of the target server.
  - **Port:** Specify the port number (e.g., 80 for HTTP).
  - **Path:** Enter the URL path of the requested resource (e.g., "/index.html").
  - **Method:** Choose the HTTP method (e.g., GET, POST).
  - **Parameters:** If needed, define any request parameters.

#### Add Listeners 

- Listeners collect and display test results. While not strictly necessary for a basic test, they're valuable for analysis.

- Right-click on the Test Plan or Thread Group and select **Add -> Listener**.

  - **View Results Tree:** Lists individual requests and responses.
  - **Aggregate Report:** Provides summary statistics across all requests.
  - **Graph Results:** Presents response times graphically.

### Step 4: Save the file

<!-- ### Step 5: Perform the Load Testing

Simply increase the number of **Threads (Users)** and configure the **Ramp Up Period(in seconds)**. This implies how many users would be sending requests in how many seconds.

In the example we have mentioned 10 users in 20 seconds. That means every 2 second a user will send an request. -->