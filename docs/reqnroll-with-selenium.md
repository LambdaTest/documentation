---
id: reqnroll-with-selenium-appium
title: Reqnroll With Selenium Grid
hide_title: true
sidebar_label: Reqnroll
description: Now you can run your automation scripts using Selenium with Reqnroll on TestMu AI online grid of 10000+ real desktop browsers and real operating systems.
keywords:
  - reqnroll
  - reqnroll selenium
  - reqnroll appium
  - reqnroll tutorial
  - c# selenium
  - c# automation testing
  - selenium webdriver c#
  - selenium c# testing tutorial
  - c# selenium framework
url: https://www.testmu.ai/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/
site_name: LambdaTest
slug: reqnroll-automation-with-selenium-appium-on-testmu/
canonical: https://www.testmu.ai/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Reqnroll Selenium: Run Automation Scripts on Online Grid Using Reqnroll Testing Framework",
          "item": `${BRAND_URL}/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/`
        }]
      })
    }}
></script>

# Reqnroll with Selenium and Appium: Tutorial to Run Your First Test on <BrandName /> 
***

In this topic, you will learn how to configure and run your web and mobile automation testing scripts on [<BrandName /> Selenium cloud grid](https://www.lambdatest.com/selenium-automation) and [<BrandName /> Appium cloud grid](https://www.lambdatest.com/appium-mobile-testing) using **Reqnroll**.

## Objective
***

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Reqnroll** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Reqnroll** with **Selenium** to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/reqnroll-automation-sample/). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Reqnroll Selenium
***
>**Note:** This tutorial is specifically for Windows users using **Microsoft Visual Studio**.

Before you can start performing **Reqnroll** automation testing with **Selenium**, you would need to:

* Download and Install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
* Make sure you work with latest version of **Reqnroll**.
* **.Net** framework to deliver guidelines while developing a range of application using C#.
* Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to appropriate folder. A [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
* You would also need <BrandName /> tunnel binary file for testing your locally hosted or privately hosted projects.


## Web Automation Testing with Reqnroll



**Step 1:** Create a virtual environment by triggering the virtualenv venv command on the terminal.

```bash
virtualenv venv
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-virtual-environment.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>



**Step 2:** Navigate the newly created virtual environment by triggering the source venv/bin/activate command on the terminal.

```bash
source venv/bin/activate
```


**Step 3:** You can fetch the <BrandName /> Credentials from the [<BrandName /> Profile Section](https://accounts.lambdatest.com/security/username-accesskey).

Update the <BrandName /> Credentials - [LT_USERNAME](https://github.com/hjsblogger/reqnroll-web-mobile-automation/blob/main/selenium_4/Makefile#L17) and [LT_ACCESS_KEY](https://github.com/hjsblogger/reqnroll-web-mobile-automation/blob/main/selenium_4/Makefile#L18) in Makefile.

Alternatively, you can also export the environment variables LT_USERNAME and LT_ACCESS_KEY by triggering the following commands on the terminal:

**For macOS:**
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

**For Linux:**
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
**For Windows:**

```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```
**Step 4:** Run the make clean command on the terminal to clean the temporary files.

```bash
make clean
```
<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 5:** Trigger the command `make build` on the terminal to build the automation project


```bash
make build
```
<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step5.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 6:** **Execution**

Trigger the command `make reqnroll-automation-test` to run the Reqnroll tests on the <BrandName /> platform


<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step6.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step6.0.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 7:** **Execution**

Navigate to the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/) to check the status of the test execution:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-cloud-execution.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

As seen below, all the scenarios that are a part of respective *.feature(s)* files successfully executed on <BrandName />.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step7.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step7.1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

## Mobile App Automation Testing with Reqnroll



**Step 1:** Create a virtual environment by triggering the *virtualenv venv* command on the terminal


```bash
virtualenv venv
```
<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 2**

Navigate the newly created virtual environment by triggering the source *venv/bin/activate* command on the terminal

```bash
source venv/bin/activate
```

**Step 3**

You can fetch the <BrandName /> Credentials from the [<BrandName /> Profile Section](https://accounts.lambdatest.com/security/username-accesskey) section.

Update the <BrandName /> Credentials - [LT_USERNAME](https://github.com/hjsblogger/reqnroll-web-mobile-automation/blob/main/appium/Makefile#L17) and [LT_ACCESS_KEY](https://github.com/hjsblogger/reqnroll-web-mobile-automation/blob/main/appium/Makefile#L18) in Makefile.

Alternatively, you can also export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* by triggering the following commands on the terminal:

**For macOS:**
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
**For Linux:**

```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

**For Windows:**

```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```

**Step 4**

For the testing, we are using the [Proverbial App (apk)](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) from <BrandName />. The app needs to be uploaded to the <BrandName /> cloud storage. Run the below command for uploading the app to the cloud:

Note: Please replace the LT_USERNAME and LT_ACCESS_KEY with the actual <BrandName /> credentials that are available in the [<BrandName /> Profile Section](https://accounts.lambdatest.com/security/username-accesskey) section.

```bash
curl -u "LT_USERNAME:LT_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=proverbial-android" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"
```

If the command execution is successful, you would see a APP ID in the command output:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>


You would also see the app named 'proverbial-android' in the [App Live App Dashboard](https://applive.lambdatest.com/app).

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step4.1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Now that the app is available for testing, let's execute the other make commands

**Step 5**

Run the *make clean* command on the terminal to clean the temporary files

```bash
make clean
```
<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step5.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 6**

Trigger the command *make build* on the terminal to build the automation project

```bash
make build
```
<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step6.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>


**Step 7**

Trigger the command make `reqnroll-automation-test` to run the Reqnroll tests on the <BrandName /> platform

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step7.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step7.1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step7.2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 8**

Navigate to the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/) to check the status of the test execution. As seen below, all the scenarios that are a part of respective .feature(s) files successfully executed on <BrandName />.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-mobile-step8.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>


## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)


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
      <span className="breadcrumbs__link"> Reqnroll Automation Testing  </span>
    </li>
  </ul>
</nav>
