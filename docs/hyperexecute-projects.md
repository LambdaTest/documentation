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

## Link Jobs to Projects Using YAML
When you run jobs on HyperExecute, connecting them to projects helps you track performance trends, compare results over time, and get valuable insights from your test history. You can link jobs to projects in two ways using your YAML configuration file.

### Method 1: Use an Existing Project
If you already have a project in HyperExecute, follow these steps to connect your jobs to it:

1. Go to [Projects List](https://hyperexecute.lambdatest.com/hyperexecute/projects) tab on HyperExecute Dashboard.
2. Select and open the project you want to link your jobs to.
3. Click the copy icon next to the project name. This copies the project configuration you'll need for your YAML file.
4. Paste the copied details into your YAML file before running your job.
5. All jobs using this YAML will automatically appear in your selected project. 

The copied project detail which you need to add to the YAML will look like this:
```yaml
 project:
    name: 'demo-project' #project name
    id: '1abc2345-56de-7890-f1cg-h2ij34k56789' #project id
```

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/projects/copy-project.mp4').default} type="video/mp4" />
</video>

### Method 2: Create a New Project Automatically

Want to start fresh or organize jobs under a new project? You can create one directly from your YAML file. To create a new project for your job run, follow the steps given below.

1. Think of a unique name that clearly identifies what you're testing.
2. Include the project name in your YAML file in the following format.

```yaml
 project:
    name: 'unique_project_name'
```

3. All jobs using this YAML will automatically appear in your new project.

:::note
If a project with your chosen name already exists, HyperExecute will link your jobs to the existing project instead of creating new.
:::

## Setup Custom Project
**Step 1:** Go to the **Projects** section in HyperExecute. Click on the **New Project** to create your projects on HyperExecute.

**Step 2:** Select **Custom Project** as the **Type of Project**. Provide a unique **Project Name** (required) and select your desired framework and language used in your project. Click on the **Continue**.

**Step 3:** Provide your **GitHub URL** and the **[Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)** / **Bitbucket URL** and the **[Repository Access Tokens](https://support.atlassian.com/bitbucket-cloud/docs/repository-access-tokens/)** / **Azure Repo URL** and the **[Access Token](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)** of your repository. You can also add your team members as **Co-Owners** to allow them to edit or delete the project alongside you.

:::info important
Currently, only **GitHub**, **Bitbucket** and **Azure** repositories are supported.
:::

Click on **Save** button to finish the setup of your project.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/nghrqs7qgczc?embed=inline"  name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Schedule your Workflows
Within each HyperExecute Project, you can set up one or more workflows. These workflows allow for scheduled execution of your tests, providing you with the flexibility to automate your testing process according to your development and release cycles. 

> To learn more about Workflows in HyperExecute, refer to our [detailed documentation](/support/docs/hyperexecute-workflows)

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
