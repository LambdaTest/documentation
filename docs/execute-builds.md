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

1. Click on the build that you created. You can execute the build for which the assignee and configuration is added and click on **Run Build** presented on the right side to execute all the test cases in one go.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/run-build.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. You can also run the test cases individually by clicking on **Run Test Case**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/run-test-case.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. Upon execution, the screen redirects to where the test case runs based on the selected configuration. You will see a box shown in the top right hand side, click on **Expand details** to get an overview of the test steps for the test case. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/expand-details.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. The status for each test step for test case 1 must be marked as passed or failed in the **Test Step Execution Summary** box along with remarks. Also mark the status as passed in the top right hand side.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-step-execution-summary.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

5. Switch configurations to proceed with the **Next Test Case**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/switch-configurations.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

6. If you prefer not to execute the test case based on its configuration, you can select the test case and mark its status as failed, passed, or skipped. In the below image, step 1 is marked as passed, step 2 as failed, and step 3 as skipped. After you finish marking the status for each step, set the overall status of the test case to **Passed**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-case-status.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

7. All the selected test cases have now been executed based on their configuration and assignee. However, test case 1 and 2 that have not been executed through LT, will have a symbol reflecting it.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/selected-test-cases.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>




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