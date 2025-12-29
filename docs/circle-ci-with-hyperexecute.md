---
id: circle-ci-with-hyperexecute
title: CircleCI Integration with Hyperexecute
hide_title: false
sidebar_label: CircleCI
description: HyperExecute integrates with CircleCI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmu.ai/support/docs/circle-ci-with-hyperexecute
site_name: LambdaTest
slug: circle-ci-with-hyperexecute
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
          "name": "CircleCI Pipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/circle-ci-with-hyperexecute/"
        }]
      })
    }}
></script>

CircleCI allows you to build fully automated pipelines from testing to deployment, freeing up your time to focus on the real work of innovation. Using CircleCI, you can automate your entire testing suite for new commits, reducing the possibility of human error, while also automating deploys with orbs.

This document will show you how to integrate CircleCI Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate CircleCI Pipeline with Hyperexecute

***

To integrate CircleCI Pipeline with HyperExecute, follow the below steps: 

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/circleci-project-setup" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### 1. Log into your CircleCI account


### 2. Create a New Project

Follow these steps to create a new project in CircleCI:

- In CircleCI, click **Projects** in the sidebar.

- Find your project and click the blue **Set Up Project** button next to it.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/circle-ci/circle-ci-new.png').default} alt="Create New Project" width="" height=""/>

If you cannot see your project, check that you have selected the correct organization in the top left-hand corner of CircleCI.
 
### 3. Specify a Config File

Once you have set up your project, you will be prompted to provide a config.yml file.

- From the pop-up window, select your preferred option. You can either:

  - Include a config.yml in the .circleci directory of your repo.

  - Commit a starter CI pipeline to a new branch of your repo.

  - Use an editable config.yml template.

  If you choose the starter CI pipeline, a sample config.yml file is created and committed to a circleci-project-setup branch in your repo.

Below is a sample of CircleCI YAML created for your reference:

```bash
version: 2.1
jobs:
  test-java:
    docker:
      - image: cimg/openjdk:17.0
    steps:
      - checkout
      - run:
          name: "Download HE CLI"
          command: wget https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
      - run:
          name: "Permissions"
          command: chmod u+x hyperexecute
      - run:
          name: "Runner Command"
          command: ./hyperexecute --config yaml/autosplit_linux.yaml
workflows:
  build-and-test:
    jobs:
      - test-java
```

- Click the blue **Set Up Project** button.

CircleCI then uses the specified config.yml file to run your pipeline. You can see the output in the CircleCI dashboard.

To make changes to your pipeline, either edit the .circleci/config.yml file in your repo, or click the ellipsis next your project in the Dashboard and choose **Configuration File**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/circle-ci/circle-config.png').default} alt="Create New Project" width="" height=""/>


### 4. Run Your Job
- Once your changes are made and your configuration is valid, you may commit and re-run the pipeline by clicking the **Save and Run** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/circle-ci/circle-ci-run.png').default} alt="Create New Project" width="" height=""/>

- A modal will pop up, and you will see the option to commit on the branch you are working from, or you can choose to create a new branch for the commit.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/circle-ci/circle-commit.png').default} alt="Create New Project" width="" height=""/>
<p></p>



**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/circle-ci/successful_gitlab.png').default} alt="Create New Project" width="" height=""/>

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
