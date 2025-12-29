---
id: aws-codepipeline-Integration
title: How to integrate AWS CodePipeline with TestMu AI
hide_title: true
sidebar_label: AWS CodePipeline
description: Rapidly commit changes in CI CD pipeline and validate them for UI/UX anomalies by integrating your AWS CodePipeline instance with TestMu AI Selenium Grid.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - continuous integration
  - aws codepipeline
  - continuous integration tools
  
url: https://www.lambdatest.com/support/docs/aws-codepipeline-integration-with-lambdatest/
site_name: LambdaTest
slug: aws-codepipeline-integration-with-lambdatest/
---
***
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "AWS CodePipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/aws-codepipeline-integration-with-lambdatest/"
        }]
      })
    }}
></script>
# AWS CodePipeline Integration With LambdaTest

AWS CodePipeline is a cloud-based continuous delivery platform for fully automating your release pipelines. Provides an intuitive interface for configuring & modeling different stages of release cycles, so you can envision how your code changes would look when pushed across these different changes. You can also track your pipeline in real-time, and look into the pipeline history to understand the timestamps involved in the execution of various pipelines.

LambdaTest integration with AWS CodePipeline will help you perform automated cross browser testing through a Selenium Grid offering 3000+ real browsers, browser versions. Now, not only can you commit changes to your code using AWS CodePipeline, but you can also validate any UI/UX anomalies of your web application through a wide variety of browsers using LambdaTest, a cloud-based cross browser testing tool.

## Prerequisite
***

* Login details in [AWS CodePipeline CI](https://aws.amazon.com/codepipeline/).
* A GitHub repository. Here is our sample GitHub repository for [AWS CodePipeline](https://github.com/LambdaTest/protractor-selenium-awscodepipeline-sample.git).
* **LambdaTest Authentication Credentials**   
   Be aware of your LambdaTest authentication credentials, i.e., your LambdaTest username, access key,a and HubURL. You need to set them up as your environment variables. You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

   - For Linux/Mac:
    ```
    $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```
   - For Windows:

     ```
     $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
     $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
     ```

## Integrating Your LambdaTest Account With AWS CodePipeline
***

**Step 1:** Login to your AWS CodePipeline instance. Visit the Pipelines page and create a new pipeline.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline1.webp').default} alt="AWS CodePipeline" width="1316" height="419" className="doc_img"/>

**Step 2:** Set your pipeline settings for a **new service role**.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline2.webp').default} alt="AWS CodePipeline" width="1247" height="461" className="doc_img"/>

**Step 3:** Now, provide your git details in the next step to **Add Source Stage**.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline3.webp').default} alt="AWS CodePipeline" width="1209" height="460" className="doc_img"/>

**Step 4:** Follow the steps in AWS CodePipeline & fill the form page on the next step to **Add build stage**.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline4.webp').default} alt="AWS CodePipeline" width="1223" height="425" className="doc_img"/>

**Step 5:** Create a new build project while adding a **Build Stage**.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline5.webp').default} alt="AWS CodePipeline" width="1025" height="410" className="doc_img"/>

**Step 6:**  Choose a **Deploy Provider** on **deploy stage** screen and click on **Next**.

<img loading="lazy" src={require('../assets/images/aws-codePipeline-integration/aws-codepipeline6.webp').default} alt="AWS CodePipeline" width="1160" height="393" className="doc_img"/>

>**Note:** Find the sample code from our [GitHub repository for AWS CodePipeline](https://github.com/LambdaTest/protractor-selenium-awscodepipeline-sample).

**Step 7:** Start a build and pull the codes from Git. Read the below `buildspec.yml` from your project’s root directory.

```
version: 0.2
env:
  variables:
    LT_USERNAME: "{your_lambda_username}"
    LT_ACCESS_KEY: "{your_lambda_access_key}"
phases:
  install:
    runtime-versions:
      nodejs: 10
  pre_build:
    commands:
      - echo Installing source NPM dependencies...
      - npm install
      - npm install -g protractor
  build:
    commands:
      - echo Build started on `date`
      - cd conf
      - protractor single.conf.js
artifacts:
  files:
      - '**/*'
  base-directory: 'dist*'
discard-paths: yes
```

**Step 8:** Monitor your test being triggered on the LambdaTest platform. You will observe the below output generated.

```
[Container] 2019/07/09 05:43:39 Running command echo Build started on `date` 
Build started on Tue Jul 9 05:43:39 UTC 2019 
[Container] 2019/07/09 05:43:39 Running command cd conf 
[Container] 2019/07/09 05:43:39 Running command protractor single.conf.js 
[05:43:39] I/launcher - Running 1 instances of WebDriver 
[05:43:39] I/hosted - Using the selenium server at https://user:bX3VZpiN4Tp7cLD7MTfoXqqOZK3q7Xov7UcSCwGQkzf1MEB6bI@hub.lambdatest.com/wd/hub 
Started 
•[32m.•[0m 
1 spec, 0 failures 
Finished in 15.406 seconds 
[05:44:04] I/launcher - 0 instance(s) of WebDriver still running 
[05:44:04] I/launcher - chrome67.0 #01 passed 
```

Kudos! Now, you can rapidly commit changes and validate them for UI/UX anomalies by executing automated cross browser testing using LambdaTest Selenium Grid. Happy Testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">AWS CodePipeline Integration With LambdaTest</span>
    </li>
  </ul>
</nav>
