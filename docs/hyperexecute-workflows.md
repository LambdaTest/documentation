---
id: hyperexecute-workflows
title: Hyperexecute Workflows
hide_title: true
sidebar_label: Smart Workflows
description: Effortlessly Set Up Hyperexecute Workflows for Scheduled Test Execution | LambdaTest
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-workflows/
site_name: LambdaTest
slug: hyperexecute-workflows/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-workflows/"
        }]
      })
    }}
></script>
# HyperExecute Workflows

> The workflow feature is currently in the **Beta** version, so it works only in the [dynamic mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).

You can setup scheduled workflows on HyperExecute platform to enable scheduled test execution on your projects acutomatically.

## Steps to setup the Workflow

**Step 1:** Go to the **Workflows** section. Click on the **Add Workflow** to create and schedule workflows for your test project on HyperExecute.
<img loading="lazy" src={require('../assets/images/hyperexecute/features/smart-workflow/hyp-workflow-start.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 2:** Provide all the necessary details in order to setup the workflow:

- In the **Workflow Name** field, provide the name of your workflow.
- Provide the path of your repository in the **Repo URL** field from which you want to setup the workflow.
- Enter the specified **Branch Name** of your repository.
- Provide the [**Access Token**](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
- Provide the **File Location** of your YAML file in the repository.

Click on **Continue** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/smart-workflow/hyp-workflow-add.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 3:** Now provide the details of time slots during which you want your tests to be executed. Click on **Create Workflow** button

<img loading="lazy" src={require('../assets/images/hyperexecute/features/smart-workflow/hyp-workflow-time.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

The HyperExecute platform will make sure that the jobs are initiated on the scheduled time.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/smart-workflow/hyp-workflow-added.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
        Hyperexecute Workflows
      </span>
    </li>
  </ul>
</nav>
