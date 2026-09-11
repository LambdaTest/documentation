---
id: azure-pipeline
title: Integrate Azure Pipelines With TestMu AI
hide_title: true
sidebar_label: Azure Pipeline Extension
description: TestMu AI now integrates with Azure to boost your go-to-market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration
  - continuous delivery
  - continuous integration tools
  - azure pipelines
url: https://www.testmuai.com/support/docs/integrate-azure-pipelines-with-testmu/
site_name: TestMu AI
slug: integrate-azure-pipelines-with-testmu/
canonical: https://www.testmuai.com/support/docs/integrate-azure-pipelines-with-testmu/
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
          "name": "Azure Pipeline Extension",
          "item": `${BRAND_URL}/support/docs/integrate-azure-pipelines-with-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/integrate-azure-pipelines-with-testmu/"
    },
    "headline": "Integrate Azure Pipelines With TestMu AI",
    "description": "TestMu AI now integrates with Azure to boost your go-to-market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/integrate-azure-pipelines-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
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
        "name": "Integrating TestMu AI with Azure Pipelines",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "# Node.js\n# Build a general Node.js project with npm.\n# Add steps that analyze code, save build artifacts, deploy, and more:\n# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript\n\ntrigger:\n- master\n\npool:\n  vmImage: 'Ubuntu-16.04'\n\nvariables:\n  LT_USERNAME: 'Your_LambdaTest_Username'\n  LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '10.x'\n  displayName: 'Install Node.js'\n\n- script: |\n    npm install\n    npm install -g protractor\n    cd conf\n    protractor single.conf.js\n  displayName: 'npm install and build'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "# Node.js\n# Build a general Node.js project with npm.\n# Add steps that analyze code, save build artifacts, deploy, and more:\n# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript\n\ntrigger:\n- master\n\npool:\n  vmImage: 'Ubuntu-16.04'\n\nvariables:\n  LT_USERNAME: 'Your_LambdaTest_Username'\n  LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '10.x'\n  displayName: 'Install Node.js'\n\n- script: |\n    npm install\n    npm install -g protractor\n    cd conf\n    protractor parallel.conf.js  //for executing parallel testing\n  displayName: 'npm install and build'"
      }
    ],
    "dateModified": "2026-06-09T15:09:24+05:30"
  }) }}
/>

# Integrate Azure Pipelines With <BrandName />
* * *
Azure Pipelines is a service presented by Azure DevOps to help projects ship faster with the help of a robust pipeline. With Azure Pipelines you can easily generate a build, test it before deploying the changes live in any language you are comfortable with i.e. Node.js, Python, Java, PHP, Ruby, C/C++, .NET etc. The platform offers unlimited CI/CD minutes for open-source projects, along with 10 free parallel jobs. Azure pipelines offers great cross-platform support using which you can run jobs in parallel across Windows, macOS, Linux.

<BrandName /> now integrates with Azure to boost your go-to-market delivery. Perform automated cross browser testing with <BrandName /> to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on the cloud. Perform automation testing in parallel with <BrandName />’s Selenium grid to drastically trim down your test cycles.

## Pre-requisite
* * *
1. An [Azure CI account](https://dev.azure.com/).

2. A [Git or GitHub](https://github.com/) repository.

3. **<BrandName /> Authentication Credentials**

    Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**

    ---
    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

    * **For Windows:**

    ---
    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

## Integrating <BrandName /> with Azure Pipelines
* * *
> First and foremost, you need to clone our GitHub repository for downloading the relevant code needed to integrate [Azure Pipelines with LambdaTest](https://github.com/LambdaTest/protractor-selenium-azure-sample).

**Step 1:** First and foremost, we need to create a project. Populate the relevant fields as you wish and hit the create button.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure.webp').default} alt="Populate the relevant fields" width="636" height="625" className="doc_img"/>

**Step 2:** Now, Azure Pipelines will ask you about the location of your code. If you have your code repository in GitHub then select the option for GitHub from the values.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure-1.webp').default} alt="Azure Pipelines will ask you about the location of your code" width="456" height="494" className="doc_img"/>

**Step 3:** After you choose an option for your code repository, you will be asked to login. Post login, you need to choose the particular repository. The repository will pick the azure-pipelines.yml file.

<VerifiedTag value="Verified" />

```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- master

pool:
  vmImage: 'Ubuntu-16.04'

variables:
  LT_USERNAME: 'Your_LambdaTest_Username'
  LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- script: |
    npm install
    npm install -g protractor
    cd conf
    protractor single.conf.js
  displayName: 'npm install and build'
```

**Step 4:** Executing the above file will run the script in <BrandName /> Grid successfully. See the below image of the output.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure-2.webp').default} alt="Image" width="990" height="590" className="doc_img"/>

## Parallel Testing
* * *
For running the test in parallel, replace protractor single.conf.js with protractor parallel.conf.js in same YML file.

<VerifiedTag value="Verified" />

```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- master

pool:
  vmImage: 'Ubuntu-16.04'

variables:
  LT_USERNAME: 'Your_LambdaTest_Username'
  LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- script: |
    npm install
    npm install -g protractor
    cd conf
    protractor parallel.conf.js  //for executing parallel testing
  displayName: 'npm install and build'
```

Monitor and analyze your test result on the <BrandName /> Automation Dashboard.

Deploy your code in a reliable manner at scale using Azure integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        Azure Pipeline Extension
      </span>
    </li>
  </ul>
</nav>
