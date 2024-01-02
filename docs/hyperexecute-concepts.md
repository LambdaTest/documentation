---
id: hyperexecute-concepts
title: Concepts
hide_title: true
sidebar_label: Concepts
description: Discover key HyperExecute concepts for software testing, including Jobs, Tasks, Stages, Scenarios, Tests, User-Defined Status, and Priority Scenario Mapping..
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-concepts/
site_name: LambdaTest
slug: hyperexecute-concepts/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-concepts/"
        }]
      })
    }}
></script>

# Concepts

HyperExecute is a one stop solution for all of your software testing needs.
This page explains the different concepts that are essential in order to get started with Hyperexecute.


***

## 1. Jobs
 
All kinds of tests get executed on Hyperexecute in the form of a [`JOB`](/support/docs/hyperexecute-concepts/#1-jobs). You can see all the executed jobs on the HyperExecute [Jobs Page](https://hyperexecute.lambdatest.com/hyperexecute). 

Each job has a unique ` JOB Number ` and is executed as a group of [` Tasks `](/support/docs/hyperexecute-concepts/#2-tasks).

<img loading="lazy" src={require('../assets/images/hye-icons/concepts1.png').default} alt="Image"  className="doc_img"/>

A [`Job`](/support/docs/hyperexecute-concepts/#1-jobs) can attain different statuses based on the completion level.

| Icon | Status | Status Description |
| ------| ------ | ------|
||Aborted||
||Failed||
||Initiated||
||Running||
||Completed||
||Skipped||
||Lambda Error||
||Timeout||
||Blocked||


## 2. Tasks

Each `Task` is a standalone just-in-time testing environment. When there are multiple tests, they get split into parallel tasks for faster execution in a [`JOB`](/support/docs/hyperexecute-concepts/#1-jobs).

All the Tasks inside a Job are listed on the left side, along with the details of OS that they are running on. Every Task has multiple [`Stages`](/support/docs/hyperexecute-concepts/#2-stages).

<img loading="lazy" src={require('../assets/images/hye-icons/concepts2.png').default} alt="Image"  className="doc_img"/>

A [`Task`](/support/docs/hyperexecute-concepts/#2-tasks) can attain different statuses based on the completion level.

| Icon | Status | Status Description |
| ------| ------ | ------|
||Aborted||
||Failed||
||Initiated||
||Running||
||Completed||
||Skipped||
||Lambda Error||
||Timeout||
||Blocked||
||Queue||
||Cancelled||
||Rescheduling||

## 3. Stages
A Tasks can have multiple [`stages`](/support/docs/hyperexecute-concepts/#2-stages) which are usually divided into 3 categories:
1. **Pre Steps** - The stages/actions that are performed before Test execution begins, like installation of dependencies etc.
2. **Scenarios** - Test execution stages.
3. **Post Steps** - The stages/actions that are performed after Test execution is completed, like creation of reports, artifacts etc.

<!-- <img loading="lazy" src={require('../assets/images/hye-icons/tasks.png').default} alt="Image" className="doc_img"/> -->
<img loading="lazy" src={require('../assets/images/hye-icons/task.png').default} alt="Image" className="doc_img"/>

A [`Stage`](/support/docs/hyperexecute-concepts/#2-stages) can attain different statuses based on the completion level.

| Icon | Status |
| ---------| :---- |
| <img loading="lazy" src={require('../assets/images/hye-icons/completed.png').default} alt="Image" style={{width: '20px',margin: '0px',}} className="doc_img"/> | Completed  |
| <img loading="lazy" src={require('../assets/images/hye-icons/failed.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Failed  |
| <img loading="lazy" src={require('../assets/images/hye-icons/created.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Created |
| <img loading="lazy" src={require('../assets/images/hye-icons/skipped.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Skipped |
| <img loading="lazy" src={require('../assets/images/hye-icons/cancelled.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Cancelled |
| <img loading="lazy" src={require('../assets/images/hye-icons/aborted.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Aborted |
| <img loading="lazy" src={require('../assets/images/hye-icons/time-out.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Time Out |
| <img loading="lazy" src={require('../assets/images/hye-icons/lambda-error.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/> | Lambda Error - An error arose from LambdaTest’s side. |

<!---

If you ever face any problems while running your jobs, you can always click on the **Help Center** to browse through our [documentation](/support/docs/), or get in touch with the support team. 

<img loading="lazy" src={require('../assets/images/hye-icons/concepts3.png').default} alt="Image"  className="doc_img"/>

-->


## 4. Scenarios

This section would show all the test suites or test scenarios that have been executed in the Job under the selected Task.


## 5. Tests

A scenario can have multiple tests (browser sessions) associated to it. 
<img loading="lazy" src={require('../assets/images/hyperexecute-knowledgebase/hyperexecute-test.png').default} alt="Image" className="doc_img"/>
You can also see the history of a particular test to understand since when this test case started failing for instance.
<img loading="lazy" src={require('../assets/images/hyperexecute-knowledgebase/hyperexecute-test-history.png').default} alt="Image" className="doc_img"/>

### User Defined Status
HyperExecute allows users to define the status of tests using **lambda hooks**. This can be helpful for monitoring test status and results.

HyperExecute supports the following user-defined lambda hooks status:

| Icon | Status | Status Description |
| ------| ------ | ------|
|<img loading="lazy" src={require('../assets/images/hye-icons/completed.png').default} alt="Image" style={{width: '20px',margin: '0px',}} className="doc_img"/>|Passed| A test case has passed when it has executed successfully, and all the assertions have been verified without any errors. <br /> `driver.executeScript("lambda-status=passed");`|
|<img loading="lazy" src={require('../assets/images/hye-icons/failed.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/>|Failed| A test case has failed when it has not executed as expected, and one or more assertions have not been verified or have failed. <br /> `driver.executeScript("lambda-status=failed");`|
|<img loading="lazy" src={require('../assets/images/hye-icons/skipped.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/>|Skipped| A test case may be skipped if it is not relevant or cannot be executed due to some issues like environment setup, data, or configuration. This status can also be used for test cases that are marked for review or maintenance. <br />`driver.executeScript("lambda-status=skipped");`|
|<img loading="lazy" src={require('../assets/images/hye-icons/ignored.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/>|Ignored| The ignored status is used when a test case is intentionally not executed, such as when it is marked for future development, or a feature is not yet implemented. <br/> `driver.executeScript("lambda-status=ignored");`|
|<img loading="lazy" src={require('../assets/images/hye-icons/ignored.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/>|Unknown| When a user wants to mark status of their tests as undecided. <br /> `driver.executeScript("lambda-status=unknown");`|
|<img loading="lazy" src={require('../assets/images/hye-icons/error.png').default} alt="Image" style={{width: '20px',margin: '0px',}}  className="doc_img"/>|Error| A test case can end in an error status when an unexpected exception is thrown during its execution. This error can be due to a coding error or a defect in the application under test. <br /> `driver.executeScript("lambda-status=error");`|

### Priority Scenario Mapping

In a **Scenario**, there can be numerous tests running, and each test has its own status, which means the final status of the scenario is derived from its test status depending on the status of the test with the **highest priority**.

For example, if a scenario contains two tests, one with status `passed` and one with status `failed`, the scenario status will be `failed`.

Consider the following Decreasing Order of Priority among Users with marked status:

|Priority| User Marked Status| Scenario Status|
|------|------|------|
|P0|Failed|Failed
|P1|Error|Failed
|P2|Passed|Completed
|P3|Ignored|Completed
|P4|Skipped|Completed
|P5|Unknown|Completed

## HyperExecute Test Status Overview
The various test statuses in HyperExecute are summarized in this table along with the level at which each status is applicable.


| Icon | Status | Status Description | Level |
| ------| ------ | ------| ----- |
||Aborted||Test, Scenario, Task, Job|
||Failed||Test, Scenario, Task, Job|
||Initiated||Test, Task, Job|
||Running||Test, Task, Job|
||Completed||Test, Scenario, Task, Job|
||Skipped||Scenario, Task, Job|
||Successful||Test|
||Lambda Error||Test, Scenario, Task, Job|
||Timeout||Scenario, Task, Job|
||Blocked||Job|
||Queue||Test, Task|
||Cancelled||Test, Scenario, Task|
||Rescheduling||Task, |
||In-Progress||Scenario|
||Created||Scenario|
||Log-Available||Scenario|
||Queue-Timeout||Test|
||Idle-Timeout||Test|
||Stopped||Test|
||Passed||Test|


*** 

Now that you have understood the concepts of HyperExecute, you can [get started](/support/docs/hyperexecute-running-your-first-job/#quick-run) with it quickly. Learn more about other [HyperExecute features](/support/docs/key-features-of-hyperexecute/). 


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
        Concepts
      </span>
    </li>
  </ul>
</nav>