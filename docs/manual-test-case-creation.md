---
id: manual-test-case-creation
title: Create & Manage Test Cases
sidebar_label: Create & Manage Test Cases
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

Test Manager streamlines the process of creating, managing, and editing test cases. It enables users to develop manual test cases, allowing efficient management of all testing activities from a single platform.

## Creating a Test Case

After selecting your project, type your test case **title** to create a new test case. You can create a **folders** to organize and store the test cases.

<img
  loading="lazy"
  src={require('../assets/images/mobile-app-testing/manual_test_case_creation/empty_project.png').default}
  alt=" "
  className="doc_img"
/>

To add a new test case, click on the **Add Test Case** button on the right side or use `Command + \` for Mac and `Control + \` for Windows shortcut to create a new test case.

:::tip
Press **shift + Enter** to create multiple test cases simultaneously. 
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/multiple-test-cases.webp').default} alt="Real " className="doc_img"/>
After test case is created you will be redirected to a screen listing all the test cases. 

:::tip
 By default test cases having no parent folder are stored under **Untitled** folder. 
:::
<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/new_test_case.png').default} alt=" " className="doc_img"/>

***

## Manage Test Case

### Test Case Details

When you select a test case, you’ll be redirected to the Test Case Details page, where you can view Test Case details such as: **Test Case Title**, **Description**, **Precondition** , **Attachments**, **System Fields**: **Type**, **Status**, **Priority**, **Tag(s)** & **Custom Fields** 


<img loading="lazy" src={require('../assets/images/test-manager/test-cases/test-case-summary.png').default} alt=" " className="doc_img"/>

***

### Test Case Steps

Test Steps can be accessed from the `Test Steps` section, present in the Summary Page of a Test Case. 

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/test-steps-page.png').default} alt=" "  className="doc_img"/>

The Test Manager offers a comprehensive Steps section with a rich text editor and these features:

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/add-new-step.png').default} alt=" " className="doc_img"/>

**1. Add Step level Attachments**

**2. Add Steps and Modules in between Steps**

**3. Importing or Creating a Module:**

- Select Test Steps & click on the `Create Module` option to make a sharable module out of them. 

- Import existing Modules by clicking on the Modules button. 

To know more about how to use Modules refer the [Modules doc](https://www.lambdatest.com/support/docs/create-modules/).

#### Add New Step:

To add a new step click on on the `Add Test Step` button. 

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/save-test-case.png').default} alt=" "  className="doc_img"/>


:::info
You can use the **Generate with AI** option to ask agent to analyse your test case details & generate the next step of action for you. 
:::

#### Save Changes:

To save the changes made in the Test Case click on the `Save Changes` button OR use the `Command + /` for Mac & `Ctrl + /` shortcut. 

:::note
 Any change in the Test Case, on **saving** will create a new version for that Test Case. You can add a commit message to note the reason for changes. To know more about how versioning works checkout the [Versioning doc](https://www.lambdatest.com/support/docs/test-case-versioning/). 
:::

***

### Test Case Runs Section

**Test Case Runs Section** provides an overview of a test case's executions & plannings, whether are manual or automated. It includes detailed information of Test Instances of the Test case such as **applied configuration**, **executed by**, **Test Run name**, **Test Instance Execution Status**, **Execution time** and filters based on available fields. 

#### Executed Test Instances of Test Case

- This section displays test instances that have been executed. You can filter the test instances based on the **executor** and the **current status**.   

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/executed_runs.png').default} alt=" " className="doc_img"/>

#### Planned Test Instances of Test Case
- This section shows Planned Instances that are included in a Test Run but their execution is not yet started. You can filter Test Instances based on the **Assignee** of the Test Instance. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/manual_test_case_creation/planned_runs.png').default} alt=" " className="doc_img"/>

- On clicking on that Test Case's execution you will be redirected to `Automation Dashboard` if its a Automation execution, the `Test Instance Page` if its Manual Instance or `Test Runs Page` if its a unexecuted Automation Instance. 

***

### Issues section

This section lists the linked Jira/ADO Issues with the Test Case. For more information refer [this page](https://www.lambdatest.com/support/docs/link-jira-issues-with-test-manager/)

***

### Version History

This section allows you to manage the Version History of the test caase by comparing Versions, Viewing or Reverting to them. For more information refer [this page](https://www.lambdatest.com/support/docs/test-case-versioning). 

***

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