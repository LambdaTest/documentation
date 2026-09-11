---
id: bitbucket-pipelines-integration
title: Bitbucket Pipelines Integration With TestMu AI
hide_title: true
sidebar_label: Bitbucket Pipelines 
description: TestMu AI integration with Bitbucket Pipelines will help you perform cross-browser testing on 3000+ real browsers &amp; browser versions, through a Selenium Grid hosted on TestMu AI cloud servers.
keywords:
  - bitbucket pipelines
  - bitbucket integration with testmu ai
  - continuous delivery pipeline
  - bitbucket pipelines for continuous delivery
  
url: https://www.testmuai.com/support/docs/bitbucket-pipelines-integration-with-testmu/
site_name: TestMu AI
slug: bitbucket-pipelines-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/bitbucket-pipelines-integration-with-testmu/
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
          "item": "https://www.testmuai.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Bitbucket Pipelines Integration With TestMu AI",
          "item": `${BRAND_URL}/support/docs/bitbucket-pipelines-integration-with-testmu/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Bitbucket Integration",
          "item": `${BRAND_URL}/support/docs/bitbucket-integration/`
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
      "@id": "https://www.testmuai.com/support/docs/bitbucket-pipelines-integration-with-testmu/"
    },
    "headline": "Bitbucket Pipelines Integration With TestMu AI",
    "description": "TestMu AI integration with Bitbucket Pipelines will help you perform cross-browser testing on 3000+ real browsers &amp; browser versions, through a Selenium Grid hosted on TestMu AI cloud servers.",
    "url": "https://www.testmuai.com/support/docs/bitbucket-pipelines-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "bitbucket pipelines",
      "bitbucket integration with testmu ai",
      "continuous delivery pipeline"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Make sure you have your Bitbucket Credentials.; TestMu AI Authentication Credentials; For Linux/Mac:; For Windows:.",
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "     $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n     $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "    $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n    $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Integrating TestMu AI With Bitbucket Pipelines",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "# This is a sample build configuration for JavaScript.\n# Check our guides at https://confluence.atlassian.com/x/14UWN for more examples.\n# Only use spaces to indent your .yml configuration.\n# -----\n# You can specify a custom docker image from Docker Hub as your build environment.\nimage: node:10.15.3\n\npipelines:\n  default:\n    - step:\n        caches:\n          - node\n        script: # Modify the commands below to build your repository.\n          - npm install\n          - npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You will find the below log generated",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "> protractor-lambdatest@0.1.0 single /opt/atlassian/pipelines/agent/build\n> protractor conf/single.conf.js\n[10:23:53] I/launcher - Running 1 instances of WebDriver\n[10:23:53] I/hosted - Using the selenium server at https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub\nStarted\n.\n1 spec, 0 failures\nFinished in 7.713 seconds\n[10:24:10] I/launcher - 0 instance(s) of WebDriver still running\n[10:24:10] I/launcher - chrome67.0 #01 passed"
      }
    ],
    "dateModified": "2026-05-14T14:47:09+05:30"
  }) }}
/>
# Bitbucket Pipelines Integration With <BrandName />
***

Bitbucket Pipelines offers a free, automated continuous integration service through Bitbucket cloud servers. With Bitbucket Pipelines, teams can ship their product faster as they could rapidly test their code as soon as they commit. Once the code is tested, Bitbucket Pipeline deploys it into the Production environment automatically. It does so with the help of containers that can be fully customized according to your project requirements.

<BrandName /> integration with Bitbucket Pipelines will help you perform cross browser testing on 3000+ real browsers & browser versions through a Selenium Grid hosted on <BrandName /> cloud servers. All you need is to set up your Bitbucket Pipelines with your <BrandName /> account & you can trigger tests onto <BrandName />, directly from your Bitbucket Pipelines.

In this topic, you will learn about the:

- Prerequisites
- Setup to integrate <BrandName /> with Bitbucket Pipelines
- Parallel execution on <BrandName /> Selenium Grid

## Prerequisites
***

**Important:** Visit <BrandName /> [GitHub repository for Bitbucket Pipelines](https://github.com/qa-repo/protractor-selenium-bitbucket-sample).

- Make sure you have your [Bitbucket Credentials](https://bitbucket.org/dashboard/overview).

- **<BrandName /> Authentication Credentials**   
Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your <BrandName /> automation dashboard by clicking on the key icon near the help button.

  - For Linux/Mac:
    
    <VerifiedTag value="Verified" />

    ``` 
     $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
     $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
     ```

  - For Windows:

    <VerifiedTag value="Verified" />

    ```
    $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```   

## Integrating <BrandName /> With Bitbucket Pipelines
***

**Step 1:** Log in to your Bitbucket account. Go to repositories & import the <BrandName /> Git repository for Bitbucket Pipelines. You will be facing the below screen after import is successful.

<img loading="lazy" src={require('../assets/images/bigbucket-pipeline/1.webp').default} alt="Bitbucket Pipelines" width="1267" height="500" className="doc_img"/>

**Step 2:** After importing the Git repository, fetch the [yml file](https://github.com/qa-repo/protractor-selenium-bitbucket-sample/blob/master/bitbucket-pipelines.yml) to run your automation tests using the Protractor framework on <BrandName /> Selenium Grid.

<VerifiedTag value="Verified" />

```
# This is a sample build configuration for JavaScript.
# Check our guides at https://confluence.atlassian.com/x/14UWN for more examples.
# Only use spaces to indent your .yml configuration.
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: node:10.15.3

pipelines:
  default:
    - step:
        caches:
          - node
        script: # Modify the commands below to build your repository.
          - npm install
          - npm run single
```
**Step 3:** Now, you need to add <BrandName /> environment variables into your Bitbucket pipelines. These environment variables will help to authenticate your test before they are executed on <BrandName /> Selenium Grid. Go to **Settings** --> **General** --> **Username aliases** --> **Repository variables**.

<img loading="lazy" src={require('../assets/images/bigbucket-pipeline/2.webp').default} alt="Bitbucket Pipelines" width="1286" height="615" className="doc_img"/>

**Step 4:** After adding the environment variables, you need to visit your pipeline & click on **Rerun**.

<img loading="lazy" src={require('../assets/images/bigbucket-pipeline/3.webp').default} alt="Bitbucket Pipelines" width="1264" height="528" className="doc_img"/>

**Step 5:** Run the below command to execute a test on <BrandName /> Selenium Grid.

`npm run single`

You will find the below log generated:

<VerifiedTag value="Verified" />

```
> protractor-lambdatest@0.1.0 single /opt/atlassian/pipelines/agent/build
> protractor conf/single.conf.js
[10:23:53] I/launcher - Running 1 instances of WebDriver
[10:23:53] I/hosted - Using the selenium server at https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub
Started
.
1 spec, 0 failures
Finished in 7.713 seconds
[10:24:10] I/launcher - 0 instance(s) of WebDriver still running
[10:24:10] I/launcher - chrome67.0 #01 passed
```

## Running Tests In Parallel On <BrandName /> Selenium Grid
***
<BrandName /> Selenium Grid will help you execute multiple test cases in parallel. You can run a single test scenario over numerous browsers + OS combinations, simultaneously. You can also run different test cases in a similar browser + OS combinations. This would significantly trim down the time taken on your cross browser testing activities.

For running test in parallel, replace the run command from **single** to **parallel** as you update the pipeline’s **yml file**.

**Replace:** npm run single

**With:** npm run parallel

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Bitbucket Pipelines Integration</span>
    </li>
  </ul>
</nav>
