---
id: google-cloud-ci-integration
title: How to run selenium test with google cloud CI
hide_title: true
sidebar_label: Google Cloud CI
description: This documentation will help you in integrating Selenium test suites with Google Cloud CI and perform automated testing on cloud Selenium grid.
keywords:
  - ci cd google cloud
  - ci cd pipeline google cloud
  - google cloud ci selenium
  - google cloud ci
  - testmu ai integration with google cloud ci
url: https://www.testmu.ai/support/docs/google-cloud-ci-integration
site_name: LambdaTest
slug: google-cloud-ci-integration

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
          "name": "Google Cloud CI Integration",
          "item": "https://www.lambdatest.com/support/docs/google-cloud-ci-integration/"
        }]
      })
    }}
></script>

# Run Selenium Tests With Google Cloud CI
***

Google Cloud Platform is one of the market’s leading public cloud providers and offers a variety of management services. Google Cloud Build and Google Cloud Run are two Google Cloud services that use pipelines to automate builds and deployments.

Integrate your Selenium test suites with Google Cloud CI and perform automated cross-browser testing on [online Selenium Grid](https://www.lambdatest.com/selenium-automation) over 3000+ real browser environments. With this integration, you can also perform local testing of locally or privately hosted projects and Parallel testing to cut short test execution cycles and achieve faster go-to-market delivery.

## Prerequisites
***

Before integrating Google Cloud CI with LambdaTest, make sure you have the following things:

1. A GitHub or a BitBucket repository. All the code samples in this documentation can be found at [LambdaTest Google Cloud CI](https://github.com/LambdaTest/Java-TestNG-Selenium) repository on GitHub .

2. To integrate test suites with Google Cloud CI, you would need to set your LambdaTest username and access key in environment variables. You can get them from [Automation Dashboard](https://automation.lambdatest.com/) by clicking on the Key button from the top-right.

*   **For Windows:**
    ```
    set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
    ```

*   **For Mac/Linux:**
    ```
     export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
     export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
    ```

## Integrating A GitHub Repository With Google Cloud CI
***

To integrate Google Cloud CI with LambdaTest, you will need to fork the above LambdaTest Google Cloud CI repository.

1.  Go to the Google Cloud CI console and select **'Cloud Build'**.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-133.webp').default} alt="Google Cloud CI Integration" width="1360" height="569" className="doc_img"/>

2.  Once you're in the Cloud Build, click on **'Triggers'**.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-134.webp').default} alt="Google Cloud CI Integration" width="1366" height="570" className="doc_img"/>

3.  To use the trigger functionality, you will need to connect your GitHub repository to Google Cloud CI instance. Click on **'Connect Repository'**.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-136.webp').default} alt="Google Cloud CI Integration" width="1366" height="574" className="doc_img"/>

Once you click on Connect Repository, you will need to complete the steps in order to connect your repository.

<img loading="lazy" src={require('../assets/images/uploads/connect-repo.webp').default} alt="Google Cloud CI Integration" width="501" height="501" className="doc_img"/>

## Running Single Test Via Google Cloud CI

* * *

1. After connecting to the repository, click on **'Create Trigger'**.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-135.webp').default} alt="Google Cloud CI Integration" width="1358" height="576" className="doc_img"/>

* Provide a Trigger name.

<img loading="lazy" src={require('../assets/images/uploads/name.webp').default} alt="Google Cloud CI Integration" width="1173" height="281" className="doc_img"/>

*   Select the repository's source and then select the branch.

<img loading="lazy" src={require('../assets/images/uploads/source.webp').default} alt="Google Cloud CI Integration" width="1133" height="294" className="doc_img"/>

*   Under the **'Configuration'**, select _**Cloud Build configuration file (yaml or json)**_.

<img loading="lazy" src={require('../assets/images/uploads/config.webp').default} alt="Google Cloud CI Integration" width="1109" height="386" className="doc_img"/>

*   In the **'Advanced'** category, click on **'Add Variable'**. 

<img loading="lazy" src={require('../assets/images/uploads/env-var.webp').default} alt="Google Cloud CI Integration" width="1097" height="233" className="doc_img"/>

Enter your LambdaTest Username and Access Key in the provided field and then click on **'Create'**. 

<img loading="lazy" src={require('../assets/images/uploads/env-var-fill.webp').default} alt="Google Cloud CI Integration" width="1106" height="564" className="doc_img"/>

2.  Your trigger project will be created on the selected Google Cloud CI GitHub repository. To run the single test through Google Cloud CI, click on **'Run'**.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-139.webp').default} alt="Google Cloud CI Integration" width="1366" height="572" className="doc_img"/>

A new build can be seen in the Google Cloud CI console. The current status of this build will be ‘Running’ or ‘Successful’.

<img loading="lazy" src={require('../assets/images/uploads/image-1.webp').default} alt="Google Cloud CI Integration" width="1024" height="508W" className="doc_img"/>

You can also view the detailed insights of your test execution on [LambdaTest Automation dashboard](https://automation.lambdatest.com/timeline/).

## Running Parallel Test Via Google Cloud CI

* * *

To run parallel tests on LambdaTest cloud, you will need to make minor tweaks in `cloudbuild.yml` file.

```
steps:
- name: gcr.io/cloud-builders/docker
  args: ['run' , '-d', '--name=lt', '--network=cloudbuild', 'lambdatest/tunnel', '--user', '${_LT_USERNAME}', '--key', '${_LT_ACCESS_KEY}', '--tunnelName', 'GCloud', '--infoAPIPort', '15000','--load-balanced']
- name: curlimages/curl
  args: ['-s', '--retry-connrefused', '--connect-timeout', '5', '--max-time', '5', '--retry', '30', '--retry-delay', '2', '--retry-max-time', '60', 'http://lt:15000/api/v1.0/info']
- name: 'ubuntu'
  args: ['sleep', '20']
- name: 'bash'
  args: ['ls']
- name: 'maven'
  entrypoint: 'mvn'
  args: ['test', '-P', 'parallel']
  env:
  - 'LT_USERNAME=${_LT_USERNAME}'
  - 'LT_ACCESS_KEY=${_LT_ACCESS_KEY}'
```

In the above YAML code, you need to add the following command to **args**.

`mvn test -P parallel`

Below is the screenshot of the above-executed parallel tests. 

<img loading="lazy" src={require('../assets/images/uploads/image-2.webp').default} alt="Google Cloud CI Integration" width="102" height="504" className="doc_img"/>

## Running Local Test Via Google Cloud CI

* * *

To run local tests on LambdaTest cloud, you will need to make minor tweaks in `cloudbuild.yml` file.

```
steps:
- name: gcr.io/cloud-builders/docker
  args: ['run' , '-d', '--name=lt', '--network=cloudbuild', 'lambdatest/tunnel', '--user', '${_LT_USERNAME}', '--key', '${_LT_ACCESS_KEY}', '--tunnelName', 'GCloud', '--infoAPIPort', '15000','--load-balanced']
- name: curlimages/curl
  args: ['-s', '--retry-connrefused', '--connect-timeout', '5', '--max-time', '5', '--retry', '30', '--retry-delay', '2', '--retry-max-time', '60', 'http://lt:15000/api/v1.0/info']
- name: 'ubuntu'
  args: ['sleep', '20']
- name: 'bash'
  args: ['ls']
- name: 'maven'
  entrypoint: 'mvn'
  args: ['test', '-P', 'local']
  env:
  - 'LT_USERNAME=${_LT_USERNAME}'
  - 'LT_ACCESS_KEY=${_LT_ACCESS_KEY}'
```

Add the below command to **args**.

`mvn test -P local`

Below is the screenshot of the above-executed local tests. 

<img loading="lazy" src={require('../assets/images/uploads/image.webp').default} alt="Google Cloud CI Integration" width="102" height="585" className="doc_img"/>

>
That's all! Ship your quality product faster using LambdaTest and Google Cloud CI integration. In case you have any queries for us, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24*7 Customer Chat Support</span> or you can also mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Run Selenium Tests With Google Cloud CI</span>
    </li>
  </ul>
</nav>

