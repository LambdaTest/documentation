---
id: tosca-integration-with-hyperexecute-using-dex
title: Tosca Integration using DEX
hide_title: true
sidebar_label: Tosca Integration using DEX
description: This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute using DEX
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - tosca
    - tricentis
url: https://www.testmuai.com/support/docs/tosca-integration-with-hyperexecute-using-dex/
site_name: TestMu AI
slug: tosca-integration-with-hyperexecute-using-dex/
canonical: https://www.testmuai.com/support/docs/tosca-integration-with-hyperexecute-using-dex/
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
          "name": "Tosca Integration with HyperExecute using DEX",
          "item": `${BRAND_URL}/support/docs/tosca-integration-with-hyperexecute-using-dex/`
        }]
      })
    }}
></script>

# Tosca Integration using DEX

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute using DEX.

## Prerequisites

1. Ensure that you have the required Tosca DEX License.

2. A valid running Tosca DEX Server.

## Steps to Integrate Tosca

### Step 1: Initialize the Tosca Project

- Go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/). Click on the **Projects**.

- Click on the **Setup a New Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step1.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Select **Tosca with DEX** tool. Enter your **Project Name**. Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step2.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 2: Manage your License and Credentials

- Select the **Type** as Cloud License. Enter the **License Details**, i.e. Username and Password with which you want to execute your tests. **Cloud Server id** field is optional.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step3.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace.

For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Continue** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step4.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 3: Configure DEX Server Details

- You need to provide the details of your DEX Server as per the **prerequisites**.

- Select the **Type** of the protocol. For the demo purpose, we are using HTTP protocol.
- Provide the **IP Address** of your DEX Server.
- Enter your required **Port** (optional).

Click on **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step5.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 4: Execute Your Project

- Please wait for the discovered test events to get populated. Now, select the desired test events that you want to execute, and then click on the **Run** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step6.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute, enable the [Retry on Failure](#auto-retry-for-non-assertion-errors) (optional) and click on the **Run** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step7.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 5: Check the Logs Status in Dashboard

- Now go to the [**Jobs**](https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.

You can also download the video output.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step9.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

## Auto Retry for Non-Assertion Errors

You can enhance the efficiency of Tosca test execution by automating the retry process in the event of **Non-Assertion Errors**. It usually occurs when a program encounters an unexpected conditions like runtime error, timeouts, connectivity issues etc.

To enable the **Auto Retry** on Failure of tests:

**Step 1:** After setting up your DEX Server, select the events that you want to execute. Click on the Run button.

**Step 2:** Now enable the toggle button for **Retry on Failure** and click on the Run button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step10.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

Now, once your execution is finished, the platform will automatically analyze your execution list results and logs.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step12.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

If your execution lists fail due to any non-assertion error, HyperExecute will automatically trigger those specific failed lists again.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step13.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

> **NOTE :** Your event name should be same with the execution list.
