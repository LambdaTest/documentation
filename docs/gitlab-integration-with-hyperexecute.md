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
url: https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/
site_name: TestMu AI
slug: gitlab-integration-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/"
    },
    "headline": "GitLab Integration:HyperExecute",
    "description": "TestMu AI integrates with GitLab Pipeline to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "testmu ai integrations",
      "testmu ai integrations with ci/cd tools",
      "ci/cd tools"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Below is a sample of GitLab YAML created for your reference",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "## Define the image to use (adjust for macOS if needed)\nimage: ubuntu:latest\n\n## Define pipelines (can have multiple pipelines)\npipelines:\n  ## Default pipeline (can be named differently)\n  default:\n    ## Branches to trigger this pipeline on (adjust as needed)\n    branches:\n      - master\n\n    ## Define steps in the pipeline\n    steps:\n      ## Download Hyperexecute CLI (descriptive name)\n      - name: Download Hyperexecute CLI\n        script: |\n          wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute\n          chmod u+x hyperexecute\n\n      ## Run Hyperexecute tests (descriptive name)\n      - name: Run Hyperexecute Tests\n        script: |\n          ./hyperexecute --user <your_user_name> --key <your_access_key> --config <your_yaml_file_path>"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# GitLab Integration with HyperExecute
* * *

GitLab is a web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis. It is a complete DevOps platform that enables professionals to perform all the tasks in a project, from project planning and source code management to monitoring and security.

This document will show you how to integrate GitLab Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate GitLab Pipeline with HyperExecute

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

<VerifiedTag value="Verified" />

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

**Below is an example of a HyperExecute job that was triggered through the above pipeline:**
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
