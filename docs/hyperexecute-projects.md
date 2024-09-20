---
id: hyperexecute-projects
title: HyperExecute Projects
sidebar_label: Projects
description: Discover the power of HyperExecute Projects for agile test execution. Learn how to set up and run custom projects with ease, maximizing testing efficiency.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-projects/
site_name: LambdaTest
slug: hyperexecute-projects/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-projects/"
        }]
      })
    }}
></script>
Projects serve as a centralized platform for organizing and managing test executions. By grouping similar tests, controlling access, and tracking progress, Projects streamline the testing process. You can configure [custom project](/support/docs/hyperexecute-projects/#setup-your-project) and [workflow setups](/support/docs/hyperexecute-projects/#schedule-your-workflows), as well as [integrate Tosca, Tosca DEX, and JMeter tests](/support/docs/hyperexecute-projects/#setting-up-specialized-projects) for unified management. This enables efficient test script creation, automated execution scheduling, and valuable insights into test results.

## Setup your Project
**Step 1:** Go to the **Projects** section in HyperExecute. Click on the **New Project** to create your projects on HyperExecute.

**Step 2:** Select **Custom Project** as the **Type of Project**. Provide a unique **Project Name** (required) and select your desired framework and language used in your project. Click on the **Continue**.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/create-project.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Provide the **GitHub URL** and the **[Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)** of your repository. You can also add your team members as **Co-Owners** to allow them to edit or delete the project alongside you.

:::info important
Currently, only **GitHub** repositories are supported.
:::

Click on **Save** button to finish the setup of your project.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/project-detail.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Schedule your Workflows
Within each HyperExecute Project, you can set up one or more workflows. These workflows allow for scheduled execution of your tests, providing you with the flexibility to automate your testing process according to your development and release cycles.

> **NOTE :** Currently, it works only in the [dynamic mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).

**Step 1:** Click on the **Setup Workflow**. Enter your workflow name, provide your branch name and then enter the path of your YAML file you want to execute. Click on **Next**.

**Step 2:** Configure the schedule of your workflow. Select the **days** and **time** at which you want to trigger your tests. Click on **Next**.

**Step 3: Workflow Linking (Optional)-** You can connect this workflow to other existing workflows in this project or others that you own. When this workflow is completed successfully, it can automatically activate the linked workflows. To configure this, select the workflows you want to trigger from the list of existing workflows. This feature enables you to create automated workflow chains for more complex testing and deployment processes.

Click on the **Finish** button and your job will be triggered on the defined day and time.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/setup-workflow.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Setting Up Specialized Projects
In addition to custom projects, HyperExecute supports integration with specialized testing tools such as Tosca, Tosca DEX, and Performance testing with JMeter. For detailed instructions on setting up these specific projects, please refer to their dedicated documentation pages:

<div className="support_main">

  <a href = "/support/docs/tosca-integration-with-hyperexecute-using-commander/">
  <div className="support_inners">
    <h3>Tosca using Commander</h3>
    <p>Optimize and accelerate end-to-end testing for your entire digital landscape using Tosca.</p>
  </div>
  </a>

  <a href = "/support/docs/tosca-integration-with-hyperexecute-using-dex/">
  <div className="support_inners">
    <h3>Tosca using DEX</h3>
    <p>Perform end-to-end testing using Tosca DEX with HyperExecute.</p>
  </div>
  </a>

  <a href = "/support/docs/tosca-integration-with-hyperexecute-for-sap/">
  <div className="support_inners">
    <h3>Tosca for SAP</h3>
    <p>Use Tosca for SAP to integrate with HyperExecute.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-run-jmeter-tests/">
  <div className="support_inners">
    <h3>JMeter</h3>
    <p>Experience the JMeter Performance Testing with HyperExecute.</p>
  </div>
  </a>
</div>


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
        Hyperexecute Projects
      </span>
    </li>
  </ul>
</nav>
