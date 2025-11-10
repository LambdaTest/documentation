---
id: smartui-with-semaphore
title: Semaphore Pipeline Integration with SmartUI
sidebar_label: Semaphore
description: SmartUI now integrates with Semaphore Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - semaphore ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-semaphore/
site_name: LambdaTest
slug: smartui-with-semaphore/
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
          "name": "Semaphore Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-semaphore/"
        }]
      })
    }}
></script>
Semaphore is a modern CI/CD (Continuous Integration and Continuous Delivery) platform designed for developers to automate the process of building, testing, and deploying software.

This guide explains how to integrate your project with the Semaphore CI/CD pipeline to trigger visual regression testing with LambdaTest SmartUI whenever changes are made to your repository.

## Steps to Integrate Semaphore Pipeline with SmartUI
To integrate Semaphore Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/semaphore" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Create your Project
- Click on the **Create New** >> **Choose Repository**.
- Select your desired repository from your VCS (GitHub or Bitbucket)
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/semaphore/1.gif').default} alt="Create New Project" />

### Step 2: Setup your Workflow
- Select your desired build tool and edit your workflow as per your requirement. A sample workflow is given for your reference:
- Click on **Run the Workflow** button to trigger your tests
```yaml reference title="semaphore.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/semaphore/.semaphore/semaphore.yml
```

:::tip
You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your Semaphore project repository.
:::

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>