---
id: smartui-with-travis-ci
title: Travis CI Pipeline Integration with SmartUI
sidebar_label: Travis CI
description: SmartUI now integrates with Travis CI Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - Travis CI ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-travis-ci/
site_name: LambdaTest
slug: smartui-with-travis-ci/
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
          "name": "Travis CI Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-travis-ci/"
        }]
      })
    }}
></script>
Travis CI is one of the most popular CI/CD platforms, known for its simplicity and support for open-source projects. It provides continuous integration for projects hosted on GitHub and Bitbucket.

This guide explains how to integrate your project with the Travis CI CI/CD pipeline to trigger visual regression testing with LambdaTest SmartUI whenever changes are made to your repository.

## Steps to Integrate Travis CI Pipeline with SmartUI
To integrate Travis CI Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Set Up Your Repository
Ensure your project is hosted in GitHub, or any supported repository.

### Step 2: Create a New Pipeline:

- Navigate to Pipelines in your TravisCI project.
- Select New Pipeline and connect your repository.

### Step 3: Add Environment Variables

Go to Pipeline Settings > Variables. Add the following variables:
- `LT_USERNAME`: Your LambdaTest username.
- `LT_ACCESS_KEY`: Your LambdaTest access key.

### Step 4: Setup your Workflow

```yaml title=".travis.yml"
language: node_js
node_js:
  - "16"

env:
  global:
    - LT_USERNAME=${LT_USERNAME}
    - LT_ACCESS_KEY=${LT_ACCESS_KEY}

script:
  - echo "Installing SmartUI CLI"
  - npm install @lambdatest/smartui-cli
  - echo "Running SmartUI tests"
  - npx smartui --version
  - npx smartui config:create smartui-web.json
  - npx smartui --config smartui-web.json exec -- mvn --quiet test -D suite=sdk-cloud.xml
```

### Step 5: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>