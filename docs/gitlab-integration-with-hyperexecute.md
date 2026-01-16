---
id: gitlab-integration-with-hyperexecute
title: GitLab Integration:HyperExecute
hide_title: true
sidebar_label: GitLab
description: TestMu AI integrates with GitLab Pipeline to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmu.ai/support/docs/gitlab-integration-with-hyperexecute/
site_name: LambdaTest
slug: gitlab-integration-with-hyperexecute/
canonical: https://www.testmu.ai/support/docs/gitlab-integration-with-hyperexecute/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GitHub Actions Pipeline Integration",
          "item": `${BRAND_URL}/support/docs/gitlab-integration-with-hyperexecute/`
        }]
      })
    }}
></script>

# GitLab Integration with HyperExecute
* * *

GitLab is a web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis. It is a complete DevOps platform that enables professionals to perform all the tasks in a project—from project planning and source code management to monitoring and security.

This document will show you how to integrate GitLab Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate GitLab Pipeline with Hyperexecute

***

To integrate GitLab Pipeline with HyperExecute, follow the below steps: 

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/gitlab" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### 1. Log into your GitLab account


### 2. Create a New Project

To create a new project and connect your external repository to GitLab CI/CD, click the **Run CI/CD for external repository** tab on the bottom right. 
 
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/create_gitlab_project.png').default} alt="Create New Project" width="" height=""/>

### 3. Connect Your External Repository:

On GitLab, you can either connect your external repository from [GitHub](https://www.github.com) or by URL. In this example, we will connect our external repository by URL. 

To connect your external repository by URL, fill in the required information in the form below and click the **Create Project** button at the bottom of the page.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/connect_gitlab_by_url.png').default} alt="Create New Project" width="" height=""/>


### 4. Configure the Pipeline
- To configure the new pipeline that you just created, click the **Configure Pipeline** button in the center of the page.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/configure_gitlab.png').default} alt="Create New Project" width="" height=""/>

<p></p>

- Click on the **+Set up CI/CD** button as shown below.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/set_up_cicd_gitlab.png').default} alt="Create New Project" width="" height=""/>
<p></p>

- Create a new `.gitlab-ci.yml` file at the root of the repository.

Below is a sample of GitLab YAML created for your reference:

```bash
## Define the image to use (adjust for macOS if needed)
image: ubuntu:latest

## Define pipelines (can have multiple pipelines)
pipelines:
  ## Default pipeline (can be named differently)
  default:
    ## Branches to trigger this pipeline on (adjust as needed)
    branches:
      - master

    ## Define steps in the pipeline
    steps:
      ## Download Hyperexecute CLI (descriptive name)
      - name: Download Hyperexecute CLI
        script: |
          wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
          chmod u+x hyperexecute

      ## Run Hyperexecute tests (descriptive name)
      - name: Run Hyperexecute Tests
        script: |
          ./hyperexecute --user <your_user_name> --key <your_access_key> --config <your_yaml_file_path>
```

### 5. Run Your Job
- To commit your changes and run your job, click the **Commit Changes** button.
<p></p>
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/new_yaml_file.png').default} alt="Create New Project" width="" height=""/>

<p></p>

**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/successful_gitlab.png').default} alt="Create New Project" width="" height=""/>

>
**Run your tests at speeds never seen before. Happy testing! :)**

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
