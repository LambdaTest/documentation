---
id: hyperexecute-integration-with-ci-cd-tools
title: Integration With CI/CD Tools
hide_title: true
sidebar_label: Overview 
description: HyperExecute offers integrations with numerous CI/CD tools to help you fast-track your robust delivery pipeline for pacing up your go-to-market launch. 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with ci/cd tools
    - ci/cd tools
    - continuous integration
    - continuous delivery
    - continuous integration tools
image: /assets/images/og-images/JPG-4.jpg
url: https://www.testmu.ai/support/docs/hyperexecute-integration-with-ci-cd-tools
site_name: LambdaTest
slug: hyperexecute-integration-with-ci-cd-tools
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Integration With CI/CD Tools",
          "item": `${BRAND_URL}/support/docs/hyperexecute-integration-with-ci-cd-tools/`
        }]
      })
    }}
></script>

# HyperExecute Integration With CI/CD Tools
HyperExecute offers integrations with numerous CI/CD tools to assist you to:
- Expend less manual effort
- Deliver faster
- Reduce risk

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/ci-cd.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

To integrate any CI pipeline with HyperExecute, follow these steps:

1. **Download the HyperExecute CLI Binary:**

To integrate HyperExecute with your preferred CI pipeline, you need to make use of the Hyperexecute CLI. HyperExecute CLI is a command line client used to interact and run tests on HyperExecute and provide a host of other useful features that accelerate test execution.

For triggering tests using HyperExecute CLI, you have to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered: Below are the HyperExecute CLI download links for different operating systems:

| OS | HyperExecute CLI download link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

- If the Pipeline VM Image agent has the OS flavor of Linux or Mac, then the HyperExecute CLI binary would need additional permission. Run the command below to get the required permission: 

```
chmod u+x hyperexecute
```

2. **Execute the HyperExecute CLI Binary**

To execute the HyperExecute CLI binary, run the following command:

- **For Windows**
```
hyperexecute.exe –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

- **For Mac/Linux**

```
./hyperexecute –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

Below are detailed instructions for CI/CD tool integrations to help you get the most out of HyperExecute.

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/aws-codepipeline-with-hyperexecute/">AWS CodePipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/azure-with-hyperexecute/">Azure DevOps Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/github-actions-with-hyperexecute/">GitHub Actions Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/gitlab-integration-with-hyperexecute/">GitLab Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/circle-ci-with-hyperexecute/">CircleCI Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/jenkins-with-hyperexecute/">Jenkins Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/bitbucket-pipeline-with-hyperexecute/">Bitbucket Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/travis-ci-with-hyperexecute/">Travis CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/teamcity-with-hyperexecute/">TeamCity Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/gocd-integration-with-hyperexecute/">GoCD Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/bamboo-integration-with-hyperexecute/">Bamboo CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/semaphore-integration-with-hyperexecute/">Semaphore Integration</a>
</div>

***

Want to know more about Hyperexecute? Here’s a [link](/support/docs/getting-started-with-hyperexecute/) to our Documentation.

>If your favourite CI/CD tool is not in the list mentioned above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have it ready shortly for you.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       Integrations With CI/CD Tools
      </span>
    </li>
  </ul>
</nav>