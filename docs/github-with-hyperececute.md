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
url: https://www.testmuai.com/support/docs/github-with-hyperexecute/
site_name: TestMu AI
slug: github-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/github-with-hyperexecute/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "GitLab CI Integration",
          "item": `${BRAND_URL}/support/docs/github-with-hyperexecute/`
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
      "@id": "https://www.testmuai.com/support/docs/github-with-hyperexecute/"
    },
    "headline": "GitHub CI Integration",
    "description": "TestMu AI now integrates with GitLab CI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/github-with-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "testmu ai integrations",
      "testmu ai integrations with ci/cd tools",
      "ci/cd tools"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A Git or GitHub repository.; Download and install node.js and node package manager or npm.; To install node.js with homebrew use the command below.; If you already have npm set up, you might want to update to the most recent version. To upgrade npm, run the following code in your terminal.; Install WebdriverIO with the npm command below.; For Linux/Mac; For Windows.",
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
        "name": "Prerequisites For Integrating GitHub CI With HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$ brew install node"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites For Integrating GitHub CI With HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install npm@latest \u2013g"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites For Integrating GitHub CI With HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install webdriverio"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME> \n$ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>\n$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

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
To integrate GitHub CI with HyperExecute, you need to make use of the HyperExecute CLI. HyperExecute CLI is a command line client to interact and run tests on HyperExecute and provides a host of other useful features that accelerate test execution.

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
