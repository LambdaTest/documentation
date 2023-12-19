---
id: buildkite-integration
title: Buildkite Integration With LambdaTest
hide_title: true
sidebar_label: Buildkite Integration
description: LambdaTest offers continuous integration with Buildkite to ease your automated cross browser testing process through their Selenium grid consisting more than 3000+ browsers.
keywords:
  - lambdatest integrations
  - continuous integration
  - buildkite
  - buildkite integration
  - lambdatest buildkite integration
url: https://www.lambdatest.com/support/docs/buildkite-integration-with-lambdatest/
site_name: LambdaTest
slug: buildkite-integration-with-lambdatest/
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
          "name": "Buildkite Integration",
          "item": "https://www.lambdatest.com/support/docs/buildkite-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Triggering tests from Buildkite CI/CD to LambdaTest
* * *
Buildkite is a continuous integration (CI) and continuous deployment (CD) platform that integrates with version control systems to automate the testing and release of software. Unlike traditional CI/CD solutions, Buildkite allows developers to run builds on their own infrastructure, offering a hybrid model that combines the flexibility of self-hosted runners with the convenience of a cloud-based UI. This ensures faster build times, high levels of security, and scalability to meet the demands of projects of any size.

LambdaTest now integrates with Buildkite to boost your go-to-market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) providing 3000+ real browsers running through machines on the cloud. Perform automation testing in parallel with LambdaTest’s Selenium grid to trim down your test cycles drastically.

## Prerequisites
***
1. Buildkite account
2. A GitHub repository. Here is our sample GitHub repository for [Buildkite](https://github.com/LambdaTest/buildkite-selenium-sample).
    

## Integrating Buildkite with LambdaTest
***
**Step 1:** Login to Buildkite and click the + icon to create a new pipeline

<img loading="lazy" src={require('../assets/images/buildkite-integration/create-pipeline.png').default} alt="Create pipeline in Buildkite" width="1365" height="650" className="doc_img"/>

**Step 2:** Connect your GitHub repository. Fill the name and description fields.

You can select the GitHub account where your repository is and add the repository to setup the pipeline for it. Provide an appropriate name and description for this pipeline.

<img loading="lazy" src={require('../assets/images/buildkite-integration/connect-repository.png').default} alt="Connect repository. Add name and description." width="1365" height="650" className="doc_img"/>

**Step 3:** Add LambdaTest Credentials to Environment Variables

You need to set your LambdaTest username and accesskey as your environment variables. You can retrieve them from your LambdaTest automation dashboard by clicking on the key icon near the help button or the key icon in the side navbar. The format should be as following:

```
LT_USERNAME=YOUR_LAMBDATEST_USERNAME
LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY
```

<img loading="lazy" src={require('../assets/images/buildkite-integration/username-accesskey.png').default} alt="Add username and accesskey" width="1365" height="650" className="doc_img"/>

**Step 4:** Add steps for execution

The commands to run for test execution are to be mentioned as steps here. For example, the steps can be prerequisite package installs,  executing the testing code etc.

In the example repository, there is only a single step - executing the `lambdatest.py` file. That can be done with the following code:

```
python3 lambdatest.py
```

You can add additional steps by clicking on the `Add` button. Once all the steps are added, you can click `Create Pipeline`.

<img loading="lazy" src={require('../assets/images/buildkite-integration/add-steps.png').default} alt="Add steps" width="1365" height="650" className="doc_img"/>

**Step 5:** Adding an agent

The next step is adding an agent. In this example, a local MacOS agent is used. If you have a custom agent already setup, this step is skipped.

<img loading="lazy" src={require('../assets/images/buildkite-integration/agent.png').default} alt="Add agent" width="1365" height="650" className="doc_img"/>

**Step 6:** Create and run a build

After the pipeline is created, we can create a build. To create a build, click the `New Build` button. In the popup, add the name of the build and the branch to build. Click `Create Build.`

Now the build should be created and run. After the build runs successfully, you should be able to see your builds on LambdaTest Automation Dashboard.

<img loading="lazy" src={require('../assets/images/buildkite-integration/create-build.png').default} alt="Create and run a build" width="1365" height="650" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/buildkite-integration/dashboard.png').default} alt="Build details on Automation Dashboard" width="1365" height="650" className="doc_img"/>

That is it! You can also add a webhook to your repository to trigger the build whenever a change is done in the repository.

Monitor and analyze your test result on the **[LambdaTest automation dashboard](https://automation.lambdatest.com/).**

Reliably deploy your code at scale using Buildkite integration with LambdaTest, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        Buildkite Integration
      </span>
    </li>
  </ul>
</nav>