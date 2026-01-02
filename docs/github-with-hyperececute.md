---
id: github-with-hyperexecute
title: GitHub CI Integration
hide_title: true
# sidebar_label: Gitlab CI Integration
description: TestMu AI now integrates with GitLab CI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmu.ai/support/docs/github-with-hyperexecute
site_name: LambdaTest
slug: github-with-hyperexecute
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GitLab CI Integration",
          "item": `${BRAND_URL}/support/docs/github-with-hyperexecute/`
        }]
      })
    }}
></script>

# GitHub CI Integration
* * *
GitHub is one of the best solutions for supporting continuous integration for Git projects for clients of all sizes. Now, quickly deploy your code and extensively test it to ensure a reliable delivery for your easy release.

This document will show you how to use HyperExecute Integration with GitHub Continuous Integration. We will use the WebdriverIO framework to execute our automation script.


## Prerequisites For Integrating GitHub CI With HyperExecute
* * *
To perform your WebdriverIO tests with HyperExecute, you would need the following essentials to be already set up.

1. **Global Dependencies**

* A Git or GitHub repository.
* Download and install node.js and node package manager or npm.
* To install node.js with homebrew use the command below.

```
$ brew install node
```

* If you already have npm set up, you might want to update to the most recent version. To upgrade npm, run the following code in your terminal.


```
npm install npm@latest –g
```

* Install WebdriverIO with the npm command below.

```
npm install webdriverio
```

2. **<BrandName /> Authentication Credentials**

Keep your <BrandName /> login, access key, and HubURL handy for authentication purposes. They must be configured as environment variables. You can find them on your <BrandName /> automation dashboard by clicking on the key symbol next to the help button.

* **For Linux/Mac**

```
$ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME> 
$ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

* **For Windows**

```
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

## Integrating HyperExecute With GitHub CI
* * *
To integrate GitHub CI with HyperExecute, you need to make use of the Hyperexecute CLI. HyperExecute CLI is a command line client to interact and run tests on HyperExecute and provides a host of other useful features that accelerate test execution.

For triggering tests using HyperExecute CLI, you have to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered: Below are the HyperExecute CLI download links for different operating systems:

| OS | HyperExecute CLI download link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

HyperExecute CLI provides different command-line flags that let you customize the HyperExecute experience. Once you download the HyperExecute CLI in your machine, run the command *hyperexecute.exe --help* on the terminal to explore the different flags.

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/cli-help.png').default} alt="Image"  className="doc_img"/>

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
