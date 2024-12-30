---
id: kaneai-hyperexecute-test-run-execution
title: Create and Execute your Test Plan for KaneAI Generated Tests on HyperExecute
hide_title: false
sidebar_label: Execute Test Plans on HyperExecute
description: Learn how to execute KaneAI-generated test plans directly on HyperExecute with this step-by-step guide for efficient and rapid test execution.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai guided walkthrough
  - kane ai test plan
  - hyperexecute
  - test plan
  - test manager
  - generate and manage test cases
url: https://www.lambdatest.com/support/docs/kaneai-hyperexecute-test-run-execution
site_name: LambdaTest
slug: kaneai-hyperexecute-test-run-execution/
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
          "name": "KaneAI Test Run",
          "item": "https://www.lambdatest.com/support/docs/kaneai-hyperexecute-test-run-execution"
        }]
      })
    }}
></script>
This documentation outlines the steps to create a test run for KaneAI generated tests using Test Manager. The steps include selecting test cases, setting configurations, and running tests with HyperExecute for efficient execution. Follow the instructions carefully to ensure seamless execution of the process.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for LambdaTest platform.

## Step-by-Step Guide
### Step 1: Navigate to the Projects Page
- Log in to Test Manager. Navigate to the Projects page and select the desired project.
- Proceed to the Test Cases section.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step1.png').default} alt="Image" className="doc_img"/>

### Step 2: Create a Test Run
- Go to the Test Run section within the project.
- Click Demo Test Run.
- Provide the following details:
    - **Name :** e.g., Demo Test Plan 123.
    - **Description :** A brief overview of the run.
    - **Type :** Choose KaneAI Generated Test Cases.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step3.png').default} alt="Image" className="doc_img"/>

### Step 3: Select and Add Test Cases
- Click Next to view available test cases.
- Select the required test cases for the run.
- Click Add Test Case to include them.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step4.png').default} alt="Image" className="doc_img"/>

### Step 4: Assign and Configure Test Cases
- On the test plan page, review the added test cases.
- Assign team members in bulk.
- Update configurations as required.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step5.png').default} alt="Image" className="doc_img"/>

### Step 5: Set Browser Configurations
- Choose from available browser configurations. If a new configuration is needed, click on Create Configuration button and choose from thousands of configuration options.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step6.png').default} alt="Image" className="doc_img"/>

### Step 6: Create New Configuration
- Enter the following details:
    - **OS :** e.g., Monterey.
    - **Browser :** e.g., Chrome 131.
    - **Name :** e.g., Chrome 131 Mac OS Monterey.
- Save the configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step7.png').default} alt="Image" className="doc_img"/>

### Step 7: Link and Save Test Run Configurations 
- Select the newly created configuration and link it to the selected test cases.
- Confirm configurations and test cases and add additional test cases if required. Save the test plan.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step8.png').default} alt="Image" className="doc_img"/>

### Step 8: Run with HyperExecute
- Initiate the run using HyperExecute by clicking **Run with HyperExecute**.
- View all test instances in the dashboard.
- Set the desired concurrency level, e.g., 5.
- Click Execute to run the tests.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step10.png').default} alt="Image" className="doc_img"/>

### Step 9: Monitor Execution on HyperExecute
- Navigate to the HyperExecute page.
- Observe the discovery and rapid execution of test cases.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step11.png').default} alt="Image" className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/output.mp4').default} type="video/mp4" />
</video>