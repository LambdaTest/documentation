---
id: smartui-with-bitbucket
title: Bitbucket Pipeline Integration with SmartUI
sidebar_label: Bitbucket
description: SmartUI now integrates with Bitbucket Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - bitbucket ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-bitbucket/
site_name: LambdaTest
slug: smartui-with-bitbucket/
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
          "name": "Bitbucket Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-bitbucket/"
        }]
      })
    }}
></script>
Bitbucket is a web-based version control repository hosting service owned by Atlassian. It is primarily designed for development teams to manage their code, collaborate on projects, and streamline their workflows.

This document will show you how to integrate Bitbucket Pipeline with SmartUI to shorten your test cycles.

## Steps to Integrate Bitbucket Pipeline with SmartUI
To integrate Bitbucket Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/bitbucket" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Setup your Projects and Repository in Bitbucket
- Click on the **Create** >> **Project**.
- Enter your Project details and click on **Create Project**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/bitbucket/1.png').default} alt="Create New Project" />

- Now click on the **Create Repository** button. You can either create a new repository or import your existing repository.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/bitbucket/2.png').default} alt="Create New Project" />

### Step 2: Create a New Workflow
- Navigate to the **Deployment** section. Select your required template for CI/CD workflow file. For the demo we are using the Test template.
- Now, write your workflow YAML file. Here is the sample file for your reference.
- Commit this yaml file in your repository and make the required changes in your code to automatically trigger the pipeline.

```yaml reference title="bitbucket-pipelines.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/bitbucket/bitbucket-pipelines.yml
```

:::tip
You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your Bitbucket project repository.
:::

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>