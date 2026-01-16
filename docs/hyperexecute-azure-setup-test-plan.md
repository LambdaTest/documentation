---
id: hyperexecute-azure-setup-test-plan
title: Azure Test Plan
hide_title: true
sidebar_label: Setup the Test Plan
description: Learn how to set up your Azure Test Plan project for seamless integration with HyperExecute.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - azure test plan
    - azure integration
    - azure test-plan setup 
url: https://www.testmu.ai/support/docs/hyperexecute-azure-setup-test-plan/
site_name: LambdaTest
slug: hyperexecute-azure-setup-test-plan
canonical: https://www.testmu.ai/support/docs/hyperexecute-azure-setup-test-plan/
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
          "name": "Azure Test Plan Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-azure-setup-test-plan/`
        }]
      })
    }}
></script>

# Step 1: Setup the Azure Test Plan

> You need to first [**setup the Azure Test Plan**](https://learn.microsoft.com/en-us/azure/devops/test/create-a-test-plan?view=azure-devops#prerequisites) Project before integrating HyperExecute with it.

**Step 1:** Login to your [Azure DevOps](https://dev.azure.com/) account.

**Step 2:** Click on the New Project button. Enter the basic details like **Project Name**, **Visibility**. Click on **Create Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step1.png').default} alt="Image"  className="doc_img" />

**Step 3:** Click on Test Plans option in the left pane. Then, click on New Test Plan to start creating new Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step3.png').default} alt="Image"  className="doc_img" />

**Step 4:** Enter the **Name** of the Test Plan, choose the **Area Path**, and select the **iteration**. Click on Create button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step4.png').default} alt="Image"  className="doc_img" />

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step6.png').default} alt="Image"  className="doc_img" /> -->

**Step 5:** Now, hover over the test plan name and click on the three-dots. Click on **New Suite** >> **Static Suite**. Set a name for the Suite.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step5.png').default} alt="Image"  className="doc_img" />

**Step 6:** Your test suite is now created. Click on **New Test Case** button and create a new test case. Once created, click on **Save and Close**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step7.png').default} alt="Image"  className="doc_img" />

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step8.png').default} alt="Image"  className="doc_img" />

Once created, you will see a screen something similar to below

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step9.png').default} alt="Image"  className="doc_img" />