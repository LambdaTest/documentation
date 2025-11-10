---
id: smartui-with-circle-ci
title: Circle CI Pipeline Integration with SmartUI
sidebar_label: Circle CI
description: SmartUI now integrates with Circle CI Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - circle-ci ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-circle-ci/
site_name: LambdaTest
slug: smartui-with-circle-ci/
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
          "name": "Circle CI Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-circle-ci/"
        }]
      })
    }}
></script>
CircleCI is a popular CI/CD tool known for its speed, flexibility, and seamless integration with version control systems like GitHub and Bitbucket. It is cloud-native and also offers an on-premises solution.

This guide explains how to integrate your project with the CircleCI CI/CD pipeline to trigger visual regression testing with LambdaTest SmartUI whenever changes are made to your repository.

## Steps to Integrate CircleCI Pipeline with SmartUI
To integrate CircleCI Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Set Up Your Repository
Ensure your project is hosted in GitHub, or any supported repository.

### Step 2: Create a New Pipeline:

- Navigate to Pipelines in your CircleCI project.
- Select New Pipeline and connect your repository.

### Step 3: Add Environment Variables

Go to Pipeline Settings > Variables. Add the following variables:
- `LT_USERNAME`: Your LambdaTest username.
- `LT_ACCESS_KEY`: Your LambdaTest access key.

### Step 4: Setup your Workflow

```yaml title=".circleci/config.yml"
version: 2.1
jobs:
  smartui_test:
    docker:
      - image: circleci/node:16
    environment:
      LT_USERNAME: $LT_USERNAME
      LT_ACCESS_KEY: $LT_ACCESS_KEY
    steps:
      - checkout
      - run:
          name: Install Dependencies
          command: npm install @lambdatest/smartui-cli
      - run:
          name: Execute SmartUI Tests
          command: |
            npx smartui --version
            npx smartui config:create smartui-web.json
            npx smartui --config smartui-web.json exec -- mvn --quiet test -D suite=sdk-cloud.xml

workflows:
  version: 2
  smartui_pipeline:
    jobs:
      - smartui_test
```

### Step 5: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>