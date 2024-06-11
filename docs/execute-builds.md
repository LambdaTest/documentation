---
id: execute-builds
title: Execute Builds
hide_title: true
sidebar_label: Execute Builds
description: Experience Test Manager for streamlined test management and real-time testing. Elevate your testing efficiency with various features and insights.
keywords:
  - test manager
  - test case management 
  - creating projects
  - test case
  - test case import
  - test case creation
  - test case repository
  - test plan creation
  - build creation
  - executing build
  - build history
  - real time testing using test manager
url: https://www.lambdatest.com/support/docs/execute-builds/
site_name: LambdaTest
slug: execute-builds/
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
          "name": "Real Time Testing using Test Manager",
          "item": "https://www.lambdatest.com/support/docs/execute-builds/"
        }]
      })
    }}
></script>

# Execute Builds

Test Manager enhances real-time testing by offering a dynamic interface that displays the step by step progress of each test case as they are executed, providing visibility and detailed insights into the testing process. 

Executing a build in Test Manager initiates the testing phase for your selected test plan, marking a crucial step towards validating the functionality and performance of your test cases by running all the associated test cases within the build based on selected configurations.

**Steps for Execution of a Build**

1. Click on the created build. To execute it, ensure the **Status** and **Assignee** are added, then click **Run Build** on the right side to execute all test cases at once.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/run-build.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. You can also run the test cases individually by clicking on **Run Test Case**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/run-test-case.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. Upon execution, the screen redirects to the test case location based on the selected configuration. A notification box appears in the top right-hand corner. After each test step, a screenshot is automatically captured, with the option to manually capture additional screenshots.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/capture-screenshots.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. Click on **Expand details** to view the test steps for the test case. The image labeled as **Test Evidence** is captured automatically, and the **Recorded Media** displays the screenshots captured by users.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/expand-details.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

5. The status for each test step for **test case 1** must be marked as Passed or Failed in the **Test Step Execution Summary** box along with remarks. Also mark the status as **Passed** in the top right hand side.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-step-execution-summary.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

6. Switch configurations to proceed with the **Next Test Case**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/switch-configurations.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

7. If not executing the test case based on its configuration, select the test case and mark its status as Passed, Failed, or Skipped. In the image below, step 1 is marked as passed, step 2 as failed, and step 3 as skipped.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-case-status.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

8. All selected test cases have been executed according to their configurations and assignees. Test cases 1 and 2, not executed through LambdaTest, will display a symbol indicating the same. Update the progress status in the top right corner.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/selected-test-cases.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

9. Click on the test case executed to have a detailed view of the **Test Steps**. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/detailed-test-cases-view.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

10. The status of the number of builds **Passed**, **Failed**, **Skipped** or **Not Started** can be viewed as shown in the below image

<img loading="lazy" src={require('../assets/images/mobile-app-testing/status-of-builds.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>


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
        Executing Builds
      </span>
    </li>
  </ul>
</nav>