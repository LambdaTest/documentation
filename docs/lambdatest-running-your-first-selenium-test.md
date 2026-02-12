---
id: lambdatest-running-your-first-selenium-test
title: Run Your First Test on TestMu AI using Selenium
hide_title: false
sidebar_label: Running Your First Job
description: Learn how to run your first Selenium test on TestMu AI's cross-browser testing platform. Step-by-step guide for setup and execution on 3000+ browsers.
keywords:
  - Automation Platform
  - Dashboard
  - Automation Testing
  - testmu ai Dashboard
url: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
site_name: TestMu AI
slug: testmu-running-your-first-selenium-test/
canonical: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Inside LambdaTest Automation Platform",
          "item": `${BRAND_URL}/support/docs/lambdatest-running-your-first-selenium-test/`
        }]
      })
    }}
></script>

<BrandName /> provides a powerful Selenium Grid that allows you to perform automated cross-browser testing on over **3000+ real browsers** and operating systems. This guide will walk you through the process of setting up and running your first Selenium test on the <BrandName /> platform.

## Prerequisites
Before you begin, ensure you have the following:

- Your [<BrandName /> Username and Access Key](https://accounts.lambdatest.com/security)
- Install Java Development Kit (JDK). We recommend Java version 11
- Install [Maven](https://maven.apache.org/)
- [Download](https://www.selenium.dev/downloads/) the latest Selenium Client and its WebDriver bindings

## Run your first test

### Step 1: Configure Your Test Suite

:::tip Sample repo
Download or Clone the code sample for the TestNG from the <BrandName /> GitHub repository to run the tests on our Standard Grid.

<a href="https://github.com/LambdaTest/Java-TestNG-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/java-testng-selenium
cd java-testng-selenium
```

### Step 2: Update the dependencies

Before proceeding forward, run the below command to update the outdated dependencies 

```bash
mvn versions:display-dependency-updates
```

### Step 3: Setup your <BrandName /> Credentials

In your terminal (as per your respective Operating System), run these command to setup your <BrandName /> credentials.
> You can see your credentials below if you have logged into our platform.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 4: Execute your test

Run the following command to execute your test on <BrandName />

<Tabs className="docs__val">

<TabItem value="bash" label="Single Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`mvn test -D suite=single.xml`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Parallel Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`mvn test -D suite=parallel.xml`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Monitor the Test Execution
Visit the [<BrandName /> Web Automation](https://automation.lambdatest.com/build) page to check the status of your test execution.

<img loading="lazy" src={require('../assets/images/selenium/running-first-test/run-first-test.png').default} alt="Image"  className="doc_img"/>
