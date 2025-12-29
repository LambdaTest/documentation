---
id: kaneai-hyperexecute-test-run-execution
title: Create and Execute your Test Run for KaneAI Generated Tests on HyperExecute
hide_title: false
sidebar_label: Execute Test Runs on HyperExecute
description: Learn how to execute KaneAI-generated test runs directly on HyperExecute with this step-by-step guide for efficient and rapid test execution.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai guided walkthrough
  - kane ai test runs
  - hyperexecute
  - test run
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

### Step 2: Create a Test Run
- Go to the Test Run section within the project.
- Click on Create Test Run.
- Provide the following details:
    - **Name :** e.g., Demo Test Run 123.
    - **Description :** A brief overview of the run.
    - **Tags :** Any label to differentiate your test run.
    - **Type :** Choose KaneAI Generated Test Cases.

### Step 3: Select and Add Test Cases
- Click Next to view available test cases.
- Select the required test cases for the run.
- Click Add Test Case to include them.

:::tip
Only KaneAI test cases for which code generation has been successful will be available for selection here.
:::

### Step 4: Assign and Configure Test Cases
- On the test run page, review the added test cases.
- Assign team members in bulk.
- Update configurations as required.

#### Set Configurations
- Choose from available desktop browser and mobile app configurations. If a new configuration is needed, click on Create Configuration button and choose from thousands of configuration options.

#### Create New Configuration
- Enter **configuration name** and the following details to create a new Desktop configuration:
    - **OS :** e.g., macOS.
    - **OS Version :** e.g., Monterey.
    - **Browser :** e.g., Chrome.
    - **Browser Version :** e.g., 131.
    - **Resolution :** e.g., 1440x900.
- Enter **configuration name** and the following details to create a new Real Device configuration:
    - **OS :** e.g., android.
    - **Manufacturer :** e.g., Samsung.
    - **Device :** e.g., Galaxy S24.
    - **OS Version :** e.g., 14.
    - **App :** e.g., Proverbial.
- Click on Create Configuration

### Step 5: Run with HyperExecute
- Initiate the run using HyperExecute by clicking **Run with HyperExecute**.
- View all test instances in the dashboard.
- Set the desired concurrency level, e.g., 5.
- Click Execute to run the tests.

#### Monitor Execution on HyperExecute
- Navigate to the HyperExecute page.
- Observe the discovery and rapid execution of test cases.


## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/output.mp4').default} type="video/mp4" />
</video>
