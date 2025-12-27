---
id: lambdatest-azure-devops-app
title: TestMu AI Azure DevOps App
hide_title: true
sidebar_label: LambdaTest Azure DevOps App
description: Efficiently manage your tests with TestMu AI Azure DevOps App, seamlessly integrating Test Manager capabilities into your Azure DevOps environment to enhance collaboration.
keywords:
  - Azure DevOps app
  - LambdaTest Azure DevOps App
  - Azure DevOps marketplace
url: https://www.lambdatest.com/support/docs/lambdatest-azure-devops-app/
site_name: LambdaTest
slug: lambdatest-azure-devops-app/
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
          "name": "LambdaTest Azure DevOps App",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-azure-devops-app/"
        }]
      })
    }}
></script>

# LambdaTest Azure DevOps App

LambdaTest Test Manager integrates directly with Azure DevOps through the Azure DevOps Marketplace App, allowing you to manage tests seamlessly within the Azure DevOps interface. It provides Test Manager functionalities in your Azure DevOps environment, boosting workflow efficiency and facilitating improved collaboration among teams.

**Let's have a look at how to use the LambdaTest Azure DevOps App:**

## Installation and Setup

1. Head over to the [LambdaTest AI Test Manager](https://marketplace.visualstudio.com/items?itemName=Lambdatest.lambdatest-ai-tms-app) Azure DevOps App on the Azure DevOps Marketplace. Select **Get it free** as shown in the below image.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/1-search-app-ado-marketplace.png').default} alt="Search LambdaTest App in Azure DevOps Marketplace" className="doc_img" width="1366" height="629"/>

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/2-install-app.png').default} alt="Install LambdaTest Azure DevOps App" className="doc_img" width="1366" height="629"/>

2. A screen will appear asking you to select the Azure DevOps organization. Choose your organization and click on **Install** to install the app.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/3-choose-organization.png').default} alt="Choose Azure DevOps Organization" className="doc_img" width="1366" height="629"/>

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/4-final-screen.png').default} alt="Installation Complete Screen" className="doc_img" width="1366" height="629"/>

3. In the Organization Settings, navigate to **Extensions** and look for **LambdaTest AI Test Manager**, click on it to configure the app. Enter the required credentials, **Username** and **Access Key** of your LambdaTest account. Then, click on **Authenticate** to proceed.

> **Note:** The LambdaTest account credentials used to configure the App must also install and integrate Azure DevOps in their LambdaTest account through integrations.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/5-authenticate-with-credentials.png').default} alt="Authenticate with LambdaTest Credentials" className="doc_img" width="1366" height="629"/>

## Linking Existing Test Cases

4. Go to any Azure DevOps work item and click on the **LambdaTest** tab located in the work item details. Click on **Link Test Case** to link a test case to Azure DevOps work item.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/6-link-test-case.png').default} alt="Link Test Cases to Work Item" className="doc_img" width="1366" height="629"/>

5. Enter the test case name or test case ID and select any of the test cases for which you want to link a work item. Test Cases created across all projects in your LambdaTest Organization will be accessible here.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/7-search-test-case.png').default} alt="Search and Select Test Cases" className="doc_img" width="1366" height="629"/>

Once linked, the Test Case will be visible in the Test Cases section.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/8-view-linked-test-case.png').default} alt="View Linked Test Cases" className="doc_img" width="1366" height="629"/>

6. Go to **Execution History** to view all the executions of the test cases that are linked to the Azure DevOps work item.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/9-view-execution-history.png').default} alt="View Test Case Execution History" className="doc_img" width="1366" height="629"/>

## Creating New Test Cases

7. You can also create test cases with AI or manually within the Azure DevOps interface. To achieve that, click on **Add Test Case** and choose an option to start creating Test Cases. Let's see how we can utilize the **Generate with AI** functionality.

> **Note:** To create test cases, the user must have access to Test Manager in their LambdaTest account.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/10-create-test-cases.png').default} alt="Create New Test Cases" className="doc_img" width="1366" height="629"/>

8. Provide your requirements by attaching files or adding textual requirements. By default, the existing Azure DevOps work item will be attached in the input box.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/enter-input-requirements.png').default} alt="Enter Input Requirements for AI Generation" className="doc_img" width="1366" height="629"/>

9. AI will start generating Test scenarios and Test Cases based on the input requirements. You can view test case title, description, pre-conditions, steps and other fields. Once you have reviewed the test cases, you can select the test cases and save them in the specified Project and Folder.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/11-generate-with-ai.png').default} alt="AI Generated Test Cases Review" className="doc_img" width="1366" height="629"/>

10. You can view all the selected test cases saved in the Test Cases section. All the test cases that are getting saved will get automatically linked to the corresponding Work Item.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/12-test-cases-post-generation.png').default} alt="View Saved Test Cases After Generation" className="doc_img" width="1366" height="629"/>

This allows you to seamlessly connect Test Cases right from Azure DevOps work items, enhancing your workflows and maintaining traceability between your development tasks and testing activities.

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
       LambdaTest Azure DevOps App
      </span>
    </li>
  </ul>
</nav>
