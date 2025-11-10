---
id: smartui-with-gitlab
title: GitLab Pipeline Integration with SmartUI
sidebar_label: GitLab
description: SmartUI now integrates with GitLab Pipeline to boost your go-to market delivery. Perform automated cross browser testing with SmartUI to ensure your development code renders seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-gitlab/
site_name: LambdaTest
slug: smartui-with-gitlab/
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
          "name": "GitLab Pipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-gitlab/"
        }]
      })
    }}
></script>
A GitLab Pipeline automates building, testing, and deploying code changes. It's essential for rapid development, improved code quality, and faster delivery by catching errors early and reducing manual work.

This document will show you how to integrate GitLab Pipeline with SmartUI to shorten your test cycles.

## Steps to Integrate GitLab Pipeline with SmartUI
To integrate GitLab Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/gitlab" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Setup your Projects in GitLab
- Click on the **New Project** > **Run CI/CD for external repository**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/1.png').default} alt="Create New Project" width="" height=""/>

- Enter your repository URL and click on Create Project.

### Step 2: Create a New Workflow
-  Navigate to the **Build** section > **Pipelines**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt="Create New Project" width="" height=""/>

- Select your required template for CI/CD workflow file. For the demo we are using the Test template.
- Now, write your workflow YAML file. Here is the sample file for your reference.
- Commit this yaml file in your repository and make the required changes in your code to automatically trigger the pipeline.

```yaml reference title=".gitlab-ci.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/gitlab/.gitlab-ci.yml
```

:::tip
You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your GitLab project repository.
:::

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

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