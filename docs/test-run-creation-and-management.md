---
id: test-run-creation-and-management
title: Test Run - Creation and Management
hide_title: false
sidebar_label: Create & Manage Test Run
description: Gain insights into effective Test Run Creation with TestMu AI, designed to streamline your workflow.
keywords:
  - test run
  - test run creation 
url: https://www.testmuai.com/support/docs/test-run-creation-and-management/
site_name: LambdaTest
slug: test-run-creation-and-management/
canonical: https://www.testmuai.com/support/docs/test-run-creation-and-management/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Run Creation",
          "item": `${BRAND_URL}/support/docs/test-run-creation-and-management/`
        }]
      })
    }}
></script>
This guide outlines the steps required to create, configure, and manage test runs within <BrandName />'s Test Manager. It provides developers and testers with a clear understanding of the process, enabling efficient test execution and organization.

## 1. Creating a Test Run
### Step 1: Initiate a New Test Run
- Navigate to the Test Manager and click on **Create Test Run**.
- Enter a Test Run Name and an optional Description to define the purpose of the test run.

:::tip
Use descriptive names to easily identify test runs later.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-runs-one.webp').default} alt="Real "  className="doc_img"/>

### Step 2: Add Tags
- Assign relevant Tags to categorize the test run.
- Click **Create Test Run** to proceed.

<img loading="lazy" src={require('../assets/images/test-run/2.png').default} alt="Real "  className="doc_img"/>

## 2. Adding and Configuring Test Cases
### Step 3: Access the Test Cases Tab
- Upon successful creation, you will be redirected to the Test Cases tab.
- Here, you can add multiple test cases to the test run.

<img loading="lazy" src={require('../assets/images/test-run/3.png').default} alt="Real "  className="doc_img"/>

### Step 4: Assign Test Cases
- Select the desired test cases from the list.
- Assign Assignees to each test case.
- Add test case configurations individually or in bulk.
> Note: Configurations allow you to define environment settings, such as browser and device combinations.

<img loading="lazy" src={require('../assets/images/test-run/4.png').default} alt="Real "  className="doc_img"/>

### Step 5: Add Configurations
- Choose multiple configurations from the dropdown or create new configurations as needed.
- Apply configurations to the selected test cases.

<img loading="lazy" src={require('../assets/images/test-run/5.png').default} alt="Real "  className="doc_img"/>

## 3. Saving and Managing Test Runs
### Step 6: Finalize the Test Run
- Click Save Test Run to finalize the setup.
- View the created test run and its associated test cases in the main dashboard.

<img loading="lazy" src={require('../assets/images/test-run/6.png').default} alt="Real "  className="doc_img"/>

### Step 7: Bulk Update Options
- To update multiple test instances:
- Select multiple test instances.
- Use the Select Assignee and Select Status options to apply changes in bulk.

<img loading="lazy" src={require('../assets/images/test-run/7.png').default} alt="Real "  className="doc_img"/>

### Step 8: Individual Test Step Management
- Within any test instance, individually update the status of each test step.
- Add remarks or actual outcomes for manual test steps.

<img loading="lazy" src={require('../assets/images/test-run/8.png').default} alt="Real "  className="doc_img"/>

## 4. Enhancing Test Runs with Additional Context
### Step 9: Adding Remarks and Attachments
- Add Remarks or actual outcomes to enhance test instance execution details.

<img loading="lazy" src={require('../assets/images/test-run/9.png').default} alt="Real "  className="doc_img"/>

- Attach supporting files or screenshots to the remarks for better context.

<img loading="lazy" src={require('../assets/images/test-run/10.png').default} alt="Real "  className="doc_img"/>

### Step 10: Editing Test Runs
- Modify an existing test run by adding new test cases or removing unnecessary ones.
- Access the test run’s options to make edits.

<img loading="lazy" src={require('../assets/images/test-run/12.png').default} alt="Real "  className="doc_img"/>

## 5. Executing and Archiving Test Runs
### Step 11: Execute on <BrandName /> Cloud
- Click the Play Icon to execute test instances on the <BrandName /> Cloud.
<img loading="lazy" src={require('../assets/images/test-run/11.png').default} alt="Real "  className="doc_img"/>

- During execution, manually update the status of test cases and test steps as needed.
<img loading="lazy" src={require('../assets/images/test-run/14.png').default} alt="Real "  className="doc_img"/>

### Step 12: Duplicate or Archive Test Runs
- Use the three-dot menu on a test run to Duplicate or Archive the run.
- Archiving helps maintain a clean workspace by storing completed test runs separately.

<img loading="lazy" src={require('../assets/images/test-run/13.png').default} alt="Real "  className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/test-run/output.mp4').default} type="video/mp4" />
</video>
