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
url: https://www.lambdatest.com/support/docs/integrate-azure-pipelines-with-lambdatest/
site_name: LambdaTest
slug: integrate-azure-pipelines-with-lambdatest/
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
          "name": "Azure Pipeline Extension",
          "item": "https://www.lambdatest.com/support/docs/integrate-azure-pipelines-with-lambdatest/"
        }]
      })
    }}
></script>

# Integrate Azure Pipelines With LambdaTest
* * *
Azure Pipelines is a service presented by Azure DevOps to help projects ship faster with the help of a robust pipeline. With Azure Pipelines you can easily generate a build, test it before deploying the changes live in any language you are comfortable with i.e. Node.js, Python, Java, PHP, Ruby, C/C++, .NET etc. The platform offers unlimited CI/CD minutes for open-source projects, along with 10 free parallel jobs. Azure pipelines offers great cross-platform support using which you can run jobs in parallel across Windows, macOS, Linux.

LambdaTest now integrates with Azure to boost your go-to-market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on the cloud. Perform automation testing in parallel with LambdaTest’s Selenium grid to drastically trim down your test cycles.

## Pre-requisite
* * *
1. An [Azure CI account](https://dev.azure.com/).

2. A [Git or GitHub](https://github.com/) repository.

3. **LambdaTest Authentication Credentials**

    Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

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

## Integrating LambdaTest with Azure Pipelines
* * *
> First and foremost, you need to clone our GitHub repository for downloading the relevant code needed to integrate [Azure Pipelines with LambdaTest](https://github.com/LambdaTest/protractor-selenium-azure-sample).

**Step 1:** First and foremost, we need to create a project. Populate the relevant fields as you wish and hit the create button.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure.webp').default} alt="Populate the relevant fields" width="636" height="625" className="doc_img"/>

**Step 2:** Now, Azure Pipelines will ask you about the location of your code. If you have your code repository in GitHub then select the option for GitHub from the values.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure-1.webp').default} alt="Azure Pipelines will ask you about the location of your code" width="456" height="494" className="doc_img"/>

**Step 3:** After you choose an option for your code repository, you will be asked to login. Post login, you need to choose the particular repository. The repository will pick the azure-pipelines.yml file.

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

**Step 4:** Executing the above file will run the script in LambdaTest Grid successfully. See the below image of the output.

<img loading="lazy" src={require('../assets/images/azure-pipeline/azure-2.webp').default} alt="Image" width="990" height="590" className="doc_img"/>

## Parallel Testing
* * *
For running the test in parallel, replace protractor single.conf.js with protractor parallel.conf.js in same YML file.

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

Monitor and analyze your test result on the LambdaTest Automation Dashboard.

Deploy your code in a reliable manner at scale using Azure integration with LambdaTest, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        Azure Pipeline Extension
      </span>
    </li>
  </ul>
</nav>
