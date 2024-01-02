---
id: circle-ci-with-hyperexecute
title: CircleCI Integration
hide_title: true
sidebar_label: CircleCI
description: HyperExecute integrates with CircleCI to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/circle-ci-with-hyperexecute/
site_name: LambdaTest
slug: circle-ci-with-hyperexecute/
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

# CircleCI Integration with Hyperexecute
* * *
CircleCI allows you to build fully automated pipelines from testing to deployment, freeing up your time to focus on the real work of innovation. Using CircleCI, you can automate your entire testing suite for new commits, reducing the possibility of human error, while also automating deploys with orbs.

This document will show you how to integrate CircleCI Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate CircleCI Pipeline with Hyperexecute

***

To integrate CircleCI Pipeline with HyperExecute, follow the below steps: 
### 1. Log into your CircleCI account


### 2. Create a New Project

Follow these steps to create a new project in CircleCI:

- In CircleCI, click **Projects** in the sidebar.

- Find your project and click the blue **Set Up Project** button next to it.

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-ci-new.png').default} alt="Create New Project" width="" height=""/>

If you cannot see your project, check that you have selected the correct organization in the top left-hand corner of CircleCI.
 


### 3. Specify a Config File

Once you have set up your project, you will be prompted to provide a config.yml file.

- From the pop-up window, select your preferred option. You can either:

  - Include a config.yml in the .circleci directory of your repo.

  - Commit a starter CI pipeline to a new branch of your repo.

  - Use an editable config.yml template.

  If you choose the starter CI pipeline, a sample config.yml file is created and committed to a circleci-project-setup branch in your repo.

Below is a sample of CircleCI YAML created for your reference:

```
version: 2.1

jobs: # basic units of work in a run
  build:
    Lambdatest: # use the Lambdatest executor
      # CircleCI Node images available at: https://circleci.com/developer/images/image/cimg/node
      - image: cimg/node:17.2.0
        auth:
          username: LT_USERNAME
          access key: LT_ACCESS_KEY
    steps: # steps that comprise the `build` job
      - checkout # check out source code to working directory
      # Run a step to setup an environment variable
      # Redirect MY_ENV_VAR into $BASH_ENV
      - run:
          name: "Setup custom environment variables"
          command: echo 'export MY_ENV_VAR="FOO"' >> "$BASH_ENV"
      - run: # print the name of the branch we're on
          name: "What branch am I on?"
          command: echo ${CIRCLE_BRANCH}
      # Run another step, the same as above; note that you can
      # invoke environment variable without curly braces.
      - run:
          name: "What branch am I on now?"
          command: echo $CIRCLE_BRANCH
      - run:
          name: "What was my custom environment variable?"
          command: echo ${MY_ENV_VAR}
      - run:
          name: "Print an env var stored in the Project"
          command: echo ${PROJECT_ENV_VAR}
      - run:
          name: "Print an env var stored in a Context"
          command: echo ${CONTEXT_ENV_VAR}

workflows: # a single workflow with a single job called build
  build:
    jobs:
      - build:
          context: Testing-Env-Vars

```

- Click the blue **Set Up Project** button.

CircleCI then uses the specified config.yml file to run your pipeline. You can see the output in the CircleCI dashboard.

To make changes to your pipeline, either edit the .circleci/config.yml file in your repo, or click the ellipsis next your project in the Dashboard and choose **Configuration File**.

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-config.png').default} alt="Create New Project" width="" height=""/>


### 4. Run Your Job
- Once your changes are made and your configuration is valid, you may commit and re-run the pipeline by clicking the **Save and Run** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-ci-run.png').default} alt="Create New Project" width="" height=""/>

- A modal will pop up, and you will see the option to commit on the branch you are working from, or you can choose to create a new branch for the commit.

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-commit.png').default} alt="Create New Project" width="" height=""/>
<p></p>



**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/main/successful_gitlab.png').default} alt="Create New Project" width="" height=""/>

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