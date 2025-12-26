---
id: analytics-test-failure-classification
title: Failure Categorization AI - Test Intelligence
sidebar_label: Failure Categorization
description: LambdaTest Analytics uses Failure Categorization AI to classify test failures into different categories. This helps in identifying the root cause of failures and improving test automation efficiency.
keywords:
  - analytics
  - test failure classification
  - test intelligence
  - failure categorization
  - AI
  - machine learning
  - test automation
url: https://www.lambdatest.com/support/docs/analytics-test-failure-classification/
site_name: LambdaTest
slug: analytics-test-failure-classification/
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
          "name": "Test Overview",
          "item": "https://www.lambdatest.com/support/docs/analytics-test-failure-classification/"
        }]
      })
    }}
></script>
LambdaTest Analytics uses Failure Categorization AI to classify test failures into different categories. This helps in identifying the root cause of failures and improving test automation efficiency. The AI model analyzes the test execution data and categorizes the failures based on various parameters such as environment, browser, OS, and failure type. This allows you to focus on the most critical issues and prioritize your testing efforts.

<iframe width="800" height="450" src="https://www.youtube.com/embed/fq78e4cjYuM?si=Pro4bEdFPzsYt5mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Pre-requisites For Failure Categorization AI

1. You should have an active LambdaTest account.
2. This feature is available for users with the HyperExecute or App / Web Automation subscription plan.
3. You should add the `remark` capability in your test script to enable the Failure Categorization AI. The `remark` capability is used to add comments or notes to the test execution data. This helps in providing additional context to the AI model and improves the accuracy of the failure categorization.

Here is the link to the documentation for the remark capability: 
* [Web Automation](/support/docs/appium-lambdatest-hooks/#adding-custom-status--remark)
* [App Automation](/support/docs/appium-lambdatest-hooks/#adding-custom-status--remark)

4. You should have at least one test failure in your test execution data. The AI model requires a minimum of one test failure to categorize the failures. If there are no test failures, the AI model will not be able to categorize the failures.
5. You should have access to the LambdaTest Insights platform.
6. You can see the failure categorization AI on creating a dashboard in the Insights section.
7. Click on the `Create New` button to create a new dashboard.
8. Choose any of the available widgets and add them to the dashboard.
9. Click on the widget drill down to see the failure categorization AI options.

## What is Failure Categorization AI?

The test failure categorization AI is a machine learning model that classifies test failures into different categories. The AI model uses various parameters such as environment, browser, OS, and failure type to categorize the failures. This helps in identifying the root cause of failures and improving test automation efficiency.

For the first failure as a user you will need to select the type of failure from the list of categories available. The categories are as follows:
- **Product Bug:** This category is used when the failure is due to a bug in the product being tested. This could be a UI issue, a functional issue, or any other type of bug that affects the product's functionality.
- **Test Automation Bug:** This category is used when the failure is due to a bug in the test automation code. This could be a script issue, a framework issue, or any other type of bug that affects the test automation process.
- **Environment Issue:** This category is used when the failure is due to an issue with the test environment. This could be a configuration issue, a network issue, or any other type of issue that affects the test environment.
- **No Action Required:** This category is used when the failure does not require any action. This could be a known issue, a false positive, or any other type of issue that does not require any action from the user.

Once the user selects the category for the first failure, the AI model will learn from the user's selection and will automatically categorize the subsequent failures based on the user's selection. This helps in reducing the manual effort required to categorize the failures and improves the overall efficiency of the test automation process.

## How will the Failure Categorization AI help you?

The failure categorization AI helps you in the following ways:

- **Automated Classification:** The AI model automatically classifies the test failures into different categories, reducing the manual effort required to categorize the failures.

- **Improved Efficiency:** By categorizing the failures, the AI model helps in identifying the root cause of failures and improving test automation efficiency.

- **Prioritization of Testing Efforts:** The AI model helps in prioritizing the testing efforts by identifying the most critical issues that need to be addressed.

- **Better Insights:** The AI model provides better insights into the test execution data, helping you to make data-driven decisions.


## Support 

For any queries or issues related to the Failure Categorization AI, please reach out to our [24/7 customer support](mailto:support@lambdatest.com). We are here to help you!
