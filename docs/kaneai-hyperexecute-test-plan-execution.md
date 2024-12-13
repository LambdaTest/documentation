---
id: kaneai-hyperexecute-test-plan-execution
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
url: https://www.lambdatest.com/support/docs/kaneai-hyperexecute-test-plan-execution
site_name: LambdaTest
slug: kaneai-hyperexecute-test-plan-execution/
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
          "name": "KaneAI Test Plan",
          "item": "https://www.lambdatest.com/support/docs/kaneai-hyperexecute-test-plan-execution"
        }]
      })
    }}
></script>
This documentation outlines the steps to create a test plan for KaneAI generated tests using Test Manager. The steps include selecting test cases, setting configurations, and running tests with HyperExecute for efficient execution. Follow the instructions carefully to ensure seamless execution of the process.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for LambdaTest platform.

## Step-by-Step Guide
### Step 1: Navigate to the Projects Page
- Log in to Test Manager. Navigate to the Projects page and select the desired project.
- Proceed to the Test Cases section.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step1.png').default} alt="Image" className="doc_img"/>

### Step 2: View and Select Test Cases
- Review the list of created test cases in the Test Cases section.
- Select the desired test cases and click Create Test Plan.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step2.png').default} alt="Image" className="doc_img"/>

### Step 3: Create a Test Plan
- Alternatively, go to the Test Plan section within the project.
- Click Create Test Plan.
- Provide the following details:
    - **Name :** e.g., Demo Test Plan 123.
    - **Description :** A brief overview of the plan.
    - **Type :** Choose KaneAI Generated Test Cases.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step3.png').default} alt="Image" className="doc_img"/>

### Step 4: Select and Add Test Cases
- Click Next to view available test cases.
- Select the required test cases for the plan.
- Click Add Test Case to include them.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step4.png').default} alt="Image" className="doc_img"/>

### Step 5: Assign and Configure Test Cases
- On the test plan page, review the added test cases.
- Assign team members in bulk.
- Update configurations as required.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step5.png').default} alt="Image" className="doc_img"/>

### Step 6: Set Browser Configurations
- Choose from available browser configurations. If a new configuration is needed, click on Create Configuration button and choose from thousands of configuration options.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step6.png').default} alt="Image" className="doc_img"/>

### Step 7: Create New Configuration
- Enter the following details:
    - **OS :** e.g., Monterey.
    - **Browser :** e.g., Chrome 131.
    - **Name :** e.g., Chrome 131 Mac OS Monterey.
- Save the configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step7.png').default} alt="Image" className="doc_img"/>

### Step 8: Link and Save Test Plan Configurations 
- Select the newly created configuration and link it to the selected test cases.
- Confirm configurations and test cases and add additional test cases if required. Save the test plan.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step8.png').default} alt="Image" className="doc_img"/>

### Step 9: Create a Build
- Once the test plan is saved, it will display test cases and configurations. Create a build and provide a name, e.g., Demo Build.
- The test plan is automatically linked to the build. You can also add a tag for filtering our your test plans. Now create the build.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step9.png').default} alt="Image" className="doc_img"/>

### Step 10: Run with HyperExecute
- Initiate the run using HyperExecute by clicking **Run with HyperExecute**.
- View all test instances in the dashboard.
- Set the desired concurrency level, e.g., 5.
- Click Execute to run the tests.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step10.png').default} alt="Image" className="doc_img"/>

### Step 11: Monitor Execution on HyperExecute
- Navigate to the HyperExecute page.
- Observe the discovery and rapid execution of test cases.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/step11.png').default} alt="Image" className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/output.mp4').default} type="video/mp4" />
</video>