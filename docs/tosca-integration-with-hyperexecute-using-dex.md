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
url: https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute-using-dex/
site_name: LambdaTest
slug: tosca-integration-with-hyperexecute-using-dex/
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
          "name": "Tosca Integration with HyperExecute using DEX",
          "item": "https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute-using-dex/"
        }]
      })
    }}
></script>

# Tosca Integration using DEX

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute using DEX.

## Pre-requisites:

1. Ensure that you have the required Tosca DEX License.

2. A valid running Tosca DEX Server.

## Steps to Integrate Tosca

**Step 1:** Go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/). Click on the **Projects**.

**Step 2:** Click on the **Setup a New Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step1.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 3:** Select **Tosca with DEX** tool. Enter your **Project Name**. Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step2.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 4:** Select the **Type** as Cloud License. Enter the **License Details**, i.e. Username and Password with which you want to execute your tests. **Cloud Server id** field is optional.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step3.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 5:** Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace. For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Continue** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step4.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 6:** You need to provide the details of your DEX Server as per the **pre-requisites**.

- Select the **Type** of the protocol. For the demo purpose, we are using HTTP protocol.
- Provide the **IP Address** of your DEX Server.
- Enter your required **Port** (optional).

Click on **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step5.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 7:** Please wait for the discovered test events to get populated. Now, select the desired test events that you want to execute, and then click on the **Run** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step6.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 8:** Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute and click on the **Run** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step7.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 9:** Now go to the [**Jobs**](https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.

You can also download the video output.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-dex/step9.png').default} alt="Image" width="1365" height="650" className="doc_img"/>