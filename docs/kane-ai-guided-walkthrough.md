---
id: kane-ai-guided-walkthrough
title: Guided Walkthrough of KaneAI
hide_title: false
sidebar_label: Guided Walkthrough
description: Explore KaneAI’s features and components to efficiently manage automated tests. Learn to navigate projects, edit test cases, and track test history.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai guided walkthrough
url: https://www.testmuai.com/support/docs/kane-ai-guided-walkthrough/
site_name: LambdaTest
slug: kane-ai-guided-walkthrough/
canonical: https://www.testmuai.com/support/docs/kane-ai-guided-walkthrough/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "KaneAI Guided Walkthrough",
          "item": `${BRAND_URL}/support/docs/kane-ai-guided-walkthrough`
        }]
      })
    }}
></script>
This guided walkthrough will help you understand the various components and features available, ensuring you can efficiently navigate and use the platform for managing your automated tests after you have successfully [run your first test](/support/docs/kane-ai-web-test/).

> Navigate to the [Test Manager](https://test-manager.lambdatest.com/projects) and [select your project and folder](/support/docs/kane-ai-web-test/#step-3-save-your-test-case) into which you have saved your tests to manage your tests.

## Projects Page
All the Test Cases generated are accessible from the Test Manager page in the Test Cases section. Each of the Test Case has a unique `Test Case ID` and `Labels` to uniquely identify them. The top section displays the project name, number of Test Cases in that particular project folder, Test Plans, Builds and its creation details.

On this page you have other things such as **filters**, **adding test cases**, **importing csv files** and much more. You can also filter through all of the test cases on the basis of the status, creator, and tags.

Click on the three dots (...) of your desired Test Case to Edit or Delete that particular Test Case.

<img loading="lazy" src={require('../assets/images/kane-ai/kane-ai-project.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

## Understanding Test Case Details
The test case dashboard provides a comprehensive view of a specific test case, including its summary, code, runs, issues, and version history.

### Summary

- **Project:** The name of the project to which the test case belongs.
- **Creator:** The person who created the test case.
- **Created:** When was the test case created.
- **Description:** A brief overview of the test case's purpose and steps.
- **Steps Performed:** List of all the steps performed during that session.
- **HyperExecute:** This button will trigger your steps to the [HyperExecute](/support/docs/getting-started-with-hyperexecute/).
- **Edit Test Steps:** This button will open the playground where you can edit your test cases.

<img loading="lazy" src={require('../assets/images/kane-ai/testcase-summary.png').default} alt="Image" className="doc_img"/>

### Code

The code page within the test manager provides a comprehensive view of the code used to execute a specific test case. This page typically includes the language and the framework used to create the test case code.

- **Generate New Code:** If you want to generate another codebase in different language or framework for the same test case.
- **HyperExecute:** This button will trigger your steps to the HyperExecute.
- **View Code:** This opens the code in a built-in separate editor from where you can edit your code files and Download it as well.
- **Download:** To download the entire test case code files.

<img loading="lazy" src={require('../assets/images/kane-ai/testcase-code.png').default} alt="Image" className="doc_img"/>

### Runs
It shows the history of the test executed with meta data like time for the test completion, who has executed the test, browser and the Operating System.

### Issues
The number of reported issues or defects during test execution.

### Version History

This provides a detailed overview of the changes made to a test case over time. This functionality allows you to track the evolution of your test cases, identify the root causes of issues, and revert to specific versions if necessary.
