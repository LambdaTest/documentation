---
id: testng-framework
title: Run your Selenium TestNG tests on LambdaTest
sidebar_label: TestNG
description: Your guide to running tests using TestNG on LambdaTest's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - java selenium
  - testng selenium
  - testng
  - testng tutorial
  - testng selenium framework
  - java selenium tutorial
  - java selenium webdriver
  - java selenium
  - java selenium testing
image: /assets/images/og-images/TestNG-framework-Selenium.jpg
url: https://www.lambdatest.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid
site_name: LambdaTest
slug: testng-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Running Java Automation Scripts On Selenium Grid Using TestNG Framework",
          "item": "https://www.lambdatest.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>
This guide walks you through the process of running Selenium TestNG tests on LambdaTest, a cloud-based cross-browser testing platform. By following these steps, you can seamlessly execute automated tests on a wide range of browsers and operating systems using LambdaTest’s Selenium Grid.

## Prerequisites
Before you begin, ensure you have the following:

- Your [LambdaTest Username and Access Key](https://accounts.lambdatest.com/)
- Install Java Development Kit (JDK). We recommend Java version 11
- Install [Maven](https://maven.apache.org/)
- [Download](https://www.selenium.dev/downloads/) the latest Selenium Client and its WebDriver bindings

## Step 1: Configure your test suite

:::tip Sample repo
Download or Clone the code sample for the TestNG from the LambdaTest GitHub repository to run the tests on our Standard Grid.

<a href="https://github.com/LambdaTest/Java-TestNG-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash title="terminal"
git clone https://github.com/LambdaTest/Java-TestNG-Selenium.git
cd Java-TestNG-Selenium
```

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```java title="Test.java"
public static String hubURL = "https://hub.lambdatest.com/wd/hub";
```

## Step 2: Update the dependencies
Run the command below to check for outdated dependencies. Review updates carefully before modifying your `pom.xml`, as they might not be compatible with your code.

```bash title="terminal"
mvn versions:display-dependency-updates
```

```xml reference
https://github.com/LambdaTest/java-testng-selenium/blob/master/pom.xml
```

## Step 3: Configure your test Capabilities
LambdaTest requires specific capabilities to set the browser, browser version, operating system, and other configurations for your test.

Example desired capabilities for testing on Chrome 120:

```java title="Test.java"
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "120.0");
capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestTestNGSample");
```

:::tip
Use our [Capability Generator](https://www.lambdatest.com/capabilities-generator/) to select from a wide range of options for customizing your tests.
:::

## Step 4: Setup your LambdaTest credentials
In your terminal (as per your respective Operating System), run these command to setup your LambdaTest credentials.
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

## Step 5: Execute your test
If you are using the sample code repository (provided above), then use the below mentioned command to trigger your tests:

<Tabs className="docs__val" queryString="testType">
<TabItem value="single" label="Run single tests" default>

```bash title="terminal"
mvn test -D suite=single.xml
```

```xml reference
https://github.com/LambdaTest/java-testng-selenium/blob/master/single.xml
```
</TabItem>

<TabItem value="parallel" label="Run parallel tests" default>

```bash title="terminal"
mvn test -D suite=parallel.xml
```

```xml reference
https://github.com/LambdaTest/java-testng-selenium/blob/master/parallel.xml
```
</TabItem>

<TabItem value="single-parallel" label="Single test on multiple browsers" default>
Here is an example xml file which would help you to run a single test on various browsers at the same time:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="3" name="LambaTestSuite" parallel="tests">

  <test name="WIN8TEST">
  <parameter name="browser" value="firefox"/>
  <parameter name="version" value="62.0"/>
  <parameter name="platform" value="WIN8"/>
    <classes>
      <class name="LambdaTest.TestNGToDo"/>
    </classes>
  </test> <!-- Test -->

  <test name="WIN10TEST">
  <parameter name="browser" value="chrome"/>
  <parameter name="version" value="79.0"/>
  <parameter name="platform" value="WIN10"/>
    <classes>
      <class name="LambdaTest.TestNGToDo"/>
    </classes>
  </test> <!-- Test -->
  <test name="MACTEST">
  <parameter name="browser" value="safari"/>
  <parameter name="version" value="11.0"/>
  <parameter name="platform" value="macos 10.13"/>
    <classes>
      <class name="LambdaTest.TestNGToDo"/>
    </classes>
  </test> <!-- Test -->

</suite>
```
</TabItem>

</Tabs>

Visit the [LambdaTest Web Automation](https://automation.lambdatest.com/build) page to check the status of your test execution.
<img loading="lazy" src={require('../assets/images/selenium/language-frameworks/java/1.png').default} alt="Image"  className="doc_img"/>

## Additional Links
- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)