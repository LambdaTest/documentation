---
id: bitbucket-pipeline-with-hyperexecute
title: Bitbucket Pipeline Integration
hide_title: true
sidebar_label: Bitbucket
description: HyperExecute now integrates with Bitbucket CI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmu.ai/support/docs/bitbucket-pipeline-with-hyperexecute
site_name: LambdaTest
slug: bitbucket-pipeline-with-hyperexecute
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
          "name": "Bitbucket CI Integration",
          "item": "https://www.lambdatest.com/support/docs/bitbucket-pipeline-with-hyperexecute/"
        }]
      })
    }}
></script>

# Bitbucket Pipeline Integration
* * *
Bitbucket Pipelines is a CI/CD service that is built into Bitbucket. It enables you to build, test, and even deploy your code automatically based on a configuration file in your repository.

This document will show you how to integrate Bitbucket Pipelines with HyperExecute to greatly shorten your test cycles

***

### Prerequisites:
-	You need to have a Bitbucket Cloud account.
-	Your workspace must have at least one repository.
 
## How To Integrate Bitbucket Pipeline with Hyperexecute

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/bitbucket" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### 1. Log into your [Bitbucket](https://www.atlassian.com/software/bitbucket/bundle) cloud account.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-login.png').default} alt="Create New Project" width="" height=""/>

### 2. Select a Repository
- If you do not have a repository set up yet, select **Repositories** then select **Create your own repository** as shown below.
 
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-repo.png').default} alt="Create New Project" width="" height=""/>

- Fill in the required information, then select **Create repository**.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/create-bit-repo.png').default} alt="Create New Project" width="" height=""/>

### 3. Create Your Pipeline

- In your repository, go to the sidebar on the left and select **Pipelines**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-pipeline.png').default} alt="Create New Project" width="" height=""/>

<p></p>

- Click **Create your first pipeline** to scroll down to the template section.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-pipeline2.png').default} alt="Create New Project" width="" height=""/>
<p></p>

- Select **Starter pipeline**

### 4. Define Your Environment Variables
- In the sidebar, go into your repository settings.
- In the **Pipelines** section, select **Deployments**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-deployment.png').default} alt="Create New Project" width="" height=""/>

- Click on any environment to:
  - Change its name
  - Set environment-specific deployment variables.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-yml.png').default} alt="Create New Project" width="" height=""/>

- You can define custom variables that you can use in the YAML file. To add a variable, fill in the name, the value, check whether you want to encrypt it by clicking the secured box, and click **Add**.


<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bit-add-var.png').default} alt="Create New Project" width="" height=""/>


### 5. Run Your Job
After configuring your environment variables, select **Commit file** at the bottom of your screen to commit  and run your test job.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bit-commit-var.png').default} alt="Create New Project" width="" height=""/>

- You will be redirected to the screen below 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/bitbucket-successful.png').default} alt="Create New Project" width="" height=""/>


**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bitbucket/successful_gitlab.png').default} alt="Create New Project" width="" height=""/>

## Sample Bitbucket Workflow File

```bash
image: ubuntu:latest  # Adjust for macOS if needed

pipelines:
  default:
    branches:
      - master  # Adjust as needed
    steps:
      ## Download Hyperexecute CLI (descriptive name)
      - name: Download Hyperexecute CLI
        script: |
          wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
          chmod u+x hyperexecute

      ## Run Hyperexecute tests (descriptive name)
      - name: Run Hyperexecute Tests
        script: |
          ./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_path>
```

>
**Run your tests at speeds never seen before. Happy testing! :)**

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
