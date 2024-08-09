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


In the following guide, we will walk you through the comprehensive process of establishing a **custom project** and constructing an efficient **workflow** within the HyperExecute platform. By leveraging these features, you can optimize your testing procedures and streamline your development pipeline.

> This is currently in the **Beta** version.

## Steps to setup your Custom Project

**Step 1:** Go to the **Projects** section in HyperExecute. Click on the **New Project** to create your projects on HyperExecute.

**Step 2:** Select **Custom Project** as the **Type of Project**. Provide a unique **Project Name** (required) and select your desired framework and language for which you want to execute the test. Click the **Continue** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/create-project.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Provide the **URL** and the **[Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)** of your repository. You can also add your team members as **Co-Owners** to allow them to edit or delete the project alongside you.

Click on the **Save** button to finish the setup of your project.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/project-detail.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Steps to setup your Workflow inside the Project

**Step 1:** Click on the **Setup Workflow** button.
- Enter your workflow name.
- Provide your branch name.
- Enter the path of your YAML file you want to execute.

Click on the **Next** button.

**Step 2:** Configure the schedule of your workflow. Select your **day** (you can select multiple days also) and **time** at which you want to trigger your tests. Click on the **Next** button.

**Step 3:** You can also link other existing workflows in this project that are completed.

Click on the **Finish** button and your job will be triggered on the defined day and time.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/projects/setup-workflow.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Additional Resources

You can also setup different products like Tosca, Tosca DEX or JMeter projects as well, for further details refer to the respective pages:

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