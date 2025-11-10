---
id: smartui-with-github-actions
title: GitHub Actions Pipeline Integration with SmartUI
sidebar_label: GitHub Actions
description: SmartUI now integrates with GitHub Actions Pipeline to boost your go-to market delivery. Perform automated cross browser testing with SmartUI to ensure your development code renders seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - github ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-github-actions/
site_name: LambdaTest
slug: smartui-with-github-actions/
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
          "item": "https://www.lambdatest.com/support/docs/smartui-with-github-actions/"
        }]
      })
    }}
></script>
GitHub Actions is a powerful automation and continuous integration/continuous delivery (CI/CD) platform built into GitHub. It allows you to create custom automated YAML workflows directly within your GitHub repositories. This helps you to build and test every pull request to your repository, or deploy merged pull requests to production.

This document will show you how to integrate GitHub Actions Pipeline with SmartUI to greatly shorten your test cycles.

## Steps to Integrate GitHub Actions Pipeline with SmartUI
To integrate GitHub Actions Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Create your Secrets
- Click on the **Settings** of your repository.
- Go to the **Security** option > **Secrets and Variables** > **Actions**.
- Create your secrets with variable name **LT_USERNAME** and **LT_ACCESS_KEY**. You can fetch your credentials from the [Accounts and Settings dashboard](https://accounts.lambdatest.com/security).

### Step 2: Create a New Workflow
-  Navigate to the main page of the repository.
-  Under your repository name, click  **Actions**.
-  In the left sidebar, click the **New workflow** button. 

### Step 3: Create the GitHub Actions workflow YAML file
To create the GitHub Actions pipeline YAML file, follow the sample command below:

```yaml reference title="github-actions.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/main/.github/workflows/main.yml
```

### Step 4: Run the Workflow
To run the new pipeline that you just created, click the **Run workflow** button on the workflow page. A prompt will ask you to enter your **PROJECT_TOKEN**. You can get your project token from the dashboard after creating your SmartUI project.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/github-actions/github-actions.png').default} alt="Create New Project" width="" height=""/>

> Check your output in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

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