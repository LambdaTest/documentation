---
id: hyperexecute-status
title: HyperExecute Status
hide_title: false
sidebar_label: Status
description: This documentation outlines the status list and the meaning of status used in job, test, task and scenario level at hyperexecute.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - hyperexecute status
  - hyperexecute status list
  - job status
  - scenario status
  - test status
  - task status
  - list of hyperexecute status
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-status/
site_name: TestMu AI
slug: hyperexecute-status/
canonical: https://www.testmuai.com/support/docs/hyperexecute-status/
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
          "name": "HyperExecute Status",
          "item": `${BRAND_URL}/support/docs/hyperexecute-status/`
        }]
      })
    }}
></script>
This page provides a comprehensive overview of the various statuses available in HyperExecute, encompassing job, task, scenario, and test levels. These statuses will enable you to properly read test execution results as well as identify problems that may occur in automated testing processes.

HyperExecute categorizes test execution outcomes into distinct levels, offering a granular view of the entire testing process. Here's a breakdown of these levels and their associated statuses:

## 1. Job Level Status
All the tests on HyperExecute get executed as a Job. Each Job has a Status, a unique Job Number, a set of Labels, info on number of Tasks executed as part of that Job, and a Summary section followed by the details of the Job Duration and who initiated the Job.

| Icon | Status | Status Description |
|------|--------|--------------------|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/initiated.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Initiated| The payload is uploading and is waiting to be assigned to an available virtual machine as per the given OS request in the YAML file. |
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/running.png').default} alt="Image" style={{width: '30px',margin: '0px',}} className="doc_img no-zoom"/>|Running| The job is actively executing tests across different browser and OS combinations as defined in your configuration. |
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/passed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Completed| The job has finished executing all tests, irrespective of the overall outcome (passed/failed).|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/partially-completed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Partially Completed| This status indicates a non-standard scenario where all steps within the job's runner command execution finished, but no test session was created. <br /><br /> This can occur primarily in two cases: <br />  1. API/Desktop Tests <br />  2. Local Web Test Execution. <br />
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/failed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Failed| One or more test cases within the job encountered errors or failed assertions indicating an issue within the tests. |
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/aborted.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Aborted| An unexpected error or issue caused the job to terminate prematurely before all tests could run. |
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/lambda-error.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Lambda Error| An error originating from <BrandName />'s side prevented the job from executing as planned. This could be a temporary glitch or require contacting <BrandName /> support for further investigation. |
| <img loading="lazy" src={require('../assets/images/hyperexecute/icons/idle-timeout.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> | Time Out | The job exceeded the maximum allocated execution time limit. This might occur due to complex tests, slow environments, or resource limitations. |
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/ignored.png').default} alt="Image" style={{width: '30px',margin: '0px',}} className="doc_img no-zoom"/>|Ignored| It is a user-defined status, used when a test case is intentionally not executed, such as when it is marked for future development, or a feature is not yet implemented.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/blocked.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Blocked| The job is currently stuck due to an external dependency or resource constraint. This could involve waiting for another job using the same resources to finish or limitations on available browsers/devices. |

## 2. Task Level Status

A Task is a further subdivision within a job, often representing the execution of tests on a specific browser and operating system combination.

| Icon | Status | Status Description |
|------|--------|--------------------|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/initiated.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Initiated| The payload has been uploaded and is waiting to be assigned to an available virtual machine as per the given OS request in the YAML file.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/running.png').default} alt="Image" style={{width: '30px',margin: '0px',}} className="doc_img no-zoom"/>|Running| The job is actively executing tests as defined in your YAML file configuration.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/passed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Completed| The task has finished executing all its assigned test steps and all the test running in that tasks are passed.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/skipped.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Skipped| It is a user-defined status indicates that the task was intentionally bypassed, possibly due to configuration settings, conditional execution logic, or irrelevance to the current test scenario.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/failed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Failed| When one or more assertions within the task failed, indicating a problem with the tests themselves.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/ignored.png').default} alt="Image" style={{width: '30px',margin: '0px',}} className="doc_img no-zoom"/>|Ignored| Similar to the job level, the task was entirely disregarded, likely due to configuration issues or specific conditions set to trigger execution.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/aborted.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Aborted| An unforeseen error or issue caused the task to terminate prematurely before all steps could run.
| <img loading="lazy" src={require('../assets/images/hyperexecute/icons/idle-timeout.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> | Time Out | The task exceeded the maximum allocated execution time limit. This might occur due to complex test steps, slow environments, or resource limitations
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/lambda-error.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Lambda Error| An error originating from <BrandName />'s side prevented the task from executing as planned. This could be a temporary glitch or require contacting <BrandName /> support for further investigation.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/blocked.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Blocked| The task is currently stuck due to an external dependency or resource constraint. This could involve waiting for another task using the same resources to finish or limitations on available browsers/devices.

## 3. Stage Level Status
A Tasks can have multiple stages which are usually divided into 3 categories:
1. **Pre Steps** - The stages/actions that are performed before Test execution begins, like installation of dependencies etc.
2. **Scenarios** - Test execution stages.
3. **Post Steps** - The stages/actions that are performed after Test execution is completed, like creation of reports, artifacts etc.

A Stage can attain different statuses based on the completion level.

| Icon | Status | Status Description |
|------|--------|--------------------|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/running.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Running| The stage is currently executing the defined actions or test steps. This indicates active progress within a specific stage of your test
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/passed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Completed| The stage has finished executing all its test steps successfully.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/ignored.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Ignored| It is a user-defined status which indicates that the stage was entirely bypassed during execution, likely due to configuration settings or conditional logic within your test script.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/skipped.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Skipped| It is a user-defined status indicates that the stage was intentionally bypassed, possibly due to configuration settings, conditional execution logic, or irrelevance to the current test scenario.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/failed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Failed| One or more assertions within the stage failed, signifying an issue within the tests.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/muted.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Muted| This stage's results are being suppressed due to the HyperExecute [test muting](/support/docs/hyperexecute-test-muting/) functionality. 
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/aborted.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Aborted| An unexpected error or issue caused the stage to terminate prematurely before all actions could be completed.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/cancelled.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Cancelled| If you have aborted your job in the middle of test execution, then all the left over tests will be marked as Cancelled.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/lambda-error.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/> |Lambda Error| An error originating from <BrandName />'s side prevented the stage from executing as planned. This could be a temporary glitch or require contacting <BrandName /> support for further investigation.

## 4. Tests Level Status

The most granular level, representing an individual test case verifying a specific functionality of your application. It's like a single action you perform to test something.

| Icon | Status | Status Description |
|------|--------|--------------------|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/created.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Created| The test has been defined in your test script but hasn't begun execution yet.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/running.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Running| The test is actively being executed as per the configurations.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/completed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Completed| The test has finished execution and is successfully passed.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/queued.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Queue| The test is waiting for the virtual machine to be allocated.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/queue-timeout.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Queue Timeout| The wait time exceeded the maximum limit for the virtual machine to be allocated.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/stopped.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Stopped| When you abort the stage, your tests are marked as Stopped.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/idle-timeout.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Idle Timeout| It indicates that your session was inactive for the defined time.
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/lambda-error.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img no-zoom"/>|Lambda Error| An error originating from <BrandName />'s side prevented the stage from executing as planned. This could be a temporary glitch or require contacting <BrandName /> support for further investigation.

### User Defined Status
HyperExecute allows users to define the status of tests using **lambda hooks**. This can be helpful for monitoring test status and results.

HyperExecute supports the following user-defined lambda hooks status:

| Icon | Status | Status Description |
|------|--------|--------------------|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/passed.png').default} alt="Image" style={{width: '30px',margin: '0px',}} className="doc_img"/>|Passed| A test case has passed when it has executed successfully, and all the assertions have been verified without any errors. <br /> `driver.executeScript("lambda-status=passed");`|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/failed.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img"/>|Failed| A test case has failed when it has not executed as expected, and one or more assertions have not been verified or have failed. <br /> `driver.executeScript("lambda-status=failed");`|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/skipped.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img"/>|Skipped| A test case may be skipped if it is not relevant or cannot be executed due to some issues like environment setup, data, or configuration. This status can also be used for test cases that are marked for review or maintenance. <br />`driver.executeScript("lambda-status=skipped");`|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/ignored.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img"/>|Ignored| The ignored status is used when a test case is intentionally not executed, such as when it is marked for future development, or a feature is not yet implemented. <br/> `driver.executeScript("lambda-status=ignored");`|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/unknown.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img"/>|Unknown| When a user wants to mark status of their tests as undecided. <br /> `driver.executeScript("lambda-status=unknown");`|
|<img loading="lazy" src={require('../assets/images/hyperexecute/icons/error.png').default} alt="Image" style={{width: '30px',margin: '0px',}}  className="doc_img"/>|Error| A test case can end in an error status when an unexpected exception is thrown during its execution. This error can be due to a coding error or a defect in the application under test. <br /> `driver.executeScript("lambda-status=error");`|

### Priority Scenario Mapping

In a **Scenario**, there can be numerous tests running, and each test has its own status, which means the final status of the scenario is derived from its test status depending on the status of the test with the **highest priority**.

For example, if a scenario contains two tests, one with status `passed` and one with status `failed`, the scenario status will be `failed`.

Consider the following Decreasing Order of Priority among Users with marked status:

|Priority| User Marked Status| Scenario Status|
|------|------|------|
|P0|Failed|Failed|
|P1|Error|Failed|
|P2|Passed|Completed|
|P3|Ignored|Completed|
|P4|Skipped|Completed|
|P5|Unknown|Completed|

*** 

Now that you have understood the concepts of HyperExecute, you can [get started](/support/docs/hyperexecute-running-your-first-job/#quick-run) with it quickly. Learn more about other [HyperExecute features](/support/docs/key-features-of-hyperexecute/). 


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
