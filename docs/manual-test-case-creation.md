---
id: manual-test-case-creation
title: Manual Test Case Creation
hide_title: true
sidebar_label: Manual Test Case Creation
description: Learn efficient manual test case creation with LambdaTest's Test Manager, streamlining testing processes and enhancing test execution.
keywords:
  - test case creation
  - test case
  - test cases
  - manual test case creation
url: https://www.lambdatest.com/support/docs/manual-test-case-creation/
site_name: LambdaTest
slug: manual-test-case-creation/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Manual Test Case Creation",
          "item": "https://www.lambdatest.com/support/docs/manual-test-case-creation/"
        }]
      })
    }}
></script>

# Manual Test Case Creation

Test Manager streamlines the process of creating, managing, and editing test cases. It enables users to develop manual test cases, facilitating efficient management of all testing activities from a single platform.

## Creating a Test Case

After selecting your project, type your test case title to create a new test case. You can also create a folder to  organize and store the test cases.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/empty_project.png').default} alt=" "  className="doc_img"/>

To add a new test case, click on the **Add Test Case** button on the right side. Use `Command + \` for Mac and `Control + \` for Windows to create a new test case.

Press `shift + Enter` to create multiple test cases simultaneously. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/multiple-test-cases.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>
After test case is created you will be redirected to a screen listing all the test cases. 

:::tip
 By default test cases having no parent folder are stored under **Untitled** folder. 
:::
<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/new_test_case.png').default} alt=" "  className="doc_img"/>

***

## View Test Case Details

### Test Case Summary Section

Upon selecting a test case, you will be redirected to Test Case Summary page where you can view Test Case details such as: **Test Name**, **Description**, **Precondition** , **Attachments**, **System Fields**: **Type**, **Status**, **Priority**, **Tag(s)** & **Custom Fields** 


<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/test_case_summary_page.png').default} alt=" "  className="doc_img"/>

***

### Test Case Runs Section

**Test Case Runs Section** provides an overview of a test case's executions & plannings, whether manual or through automated. It includes detailed information of Test Instances of the Test case such as **applied configuration**, **executed by**, **Test Run name**, **Test Instance Execution Status**, **Execution time** and helpful filters according to available fields. 

#### Executed Test Instances of Test Case

- This section shows Executed Instances having following statuses: `Passed`, `Failed`, `Skipped`. You can filter Test Instances based on who has executed the Instances & Status.  

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/executed_runs.png').default} alt=" "  className="doc_img"/>

#### Planned Test Instances of Test Case
- This section shows Planned Instances that are included in a Test Run but their execution is not yet started. You can filter Test Instances based on the **Assignee** of the Test Instance. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/planned_runs.png').default} alt=" "  className="doc_img"/>

- On clicking on that Test Case's execution you will be redirected to `Automation Dashboard` if its a Automation execution, the `Test Instance Page` if its Manual Instance or `Test Runs Page` if its a unexecuted Autoamtion Instance. 

***

### Issues section

This section lists the linked Jira/ADO Issues with the Test Case. For more information refer [this page](https://www.lambdatest.com/support/docs/link-jira-issues-with-test-manager/)

***

### Test Case Steps Section

Test cases typically consist of multiple steps. You can add these steps using the **Manual Test Steps**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/manual_test_steps.png').default} alt=" "  className="doc_img"/>

Add steps to your test cases, each with a **Steps**, and an optional **outcome** field. Attachments can be added to any step if required.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/add_test_step.png').default} alt=" "  className="doc_img"/>

Test steps can be modified by clicking the **Edit** option on the right-hand side and deleted by selecting the **Delete** option.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/edit_test_step.png').default} alt=" "  className="doc_img"/>

You can optional user the Generate with AI option to ask AI to generate more Steps. 

:::tip
 The more data your Test Case is having, including the details in **Summary page** & **Test Steps** the more accurate the AIs suggestion will be.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/generate_test_step.png').default} alt=" "  className="doc_img"/>



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Manual Test Case Creation
      </span>
    </li>
  </ul>
</nav>