---
id: github-actions-with-hyperexecute
title: GitHub Actions Pipeline Integration with Hyperexecute
sidebar_label: GitHub Actions
description: LambdaTest now integrates with GitHub Actions Pipeline to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 10000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/github-actions-with-hyperexecute/
site_name: LambdaTest
slug: github-actions-with-hyperexecute/
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
          "name": "GitHub Actions Pipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/github-actions-with-hyperexecute/"
        }]
      })
    }}
></script>
GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

This document will show you how to integrate GitHub Actions Pipeline with HyperExecute to greatly shorten your test cycles.

## Steps To Integrate GitHub Actions Pipeline with HyperExecute
To integrate GitHub Actions Pipeline with HyperExecute, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/main" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Create a New Workflow
-  Navigate to the main page of the repository.
-  Under your repository name, click  **Actions**.
-  In the left sidebar, click the **New workflow** button. 

### Step 2: Create the GitHub Actions workflow YAML file
To create the GitHub Actions pipeline YAML file, follow the sample command below:

```yaml reference title="github-actions.yml"
https://github.com/LambdaTest/hyp-ci-cd-integration-sample/blob/main/.github/workflows/main.yml
```
- **on:**
  - **workflow_dispatch:** Here you declare the pre-defined variables that will be used before running the GitHub Actions Pipeline as an input. 
- **jobs:**
 In the Jobs Section, declare the workflow of the pipeline execution. 
  - **runs-on**: It contains the name of the OS you would like to execute the GitHub Actions Pipeline on.
  - **steps**: In the steps section, you declare the execution commands.  
    - The first step in the above sample YAML changes the path of the root directory.
    - In the second step it downloads the HyperExecute CLI binary. 
    - The third step is the execution command which executes the [*Hyperexecute CLI binary*](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/). This contains your LambdaTest Username, Access Key, and path of the YAML created for HyperExecute.

### Step 3: Run the Workflow
To run the new pipeline that you just created, click the **Run workflow** button on the workflow page. A prompt will ask you to enter your **LT Username**, and **LT Access Key** and your tests will be triggered.

> You can fetch your credentials from the [Accounts and Settings dashboard](https://accounts.lambdatest.com/security).

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/github/github-actions.png').default} alt="Create New Project" width="" height=""/>


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
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>