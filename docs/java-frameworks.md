---
id: java-framework
title: Run your Selenium Java tests on LambdaTest
sidebar_label: Java
description: Your guide to running tests using Java on LambdaTest's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - java selenium
  - java selenium tutorial
  - java selenium webdriver
  - java selenium
  - java selenium testing

image: /assets/images/og-images/Java-with-Selenium-1-1.jpg
url: https://www.lambdatest.com/support/docs/java-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: java-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "Running Java Automation Testing Scripts On Selenium Grid using TestNG Framework",
          "item": "https://www.lambdatest.com/support/docs/java-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>
This guide walks you through the process of running Selenium Java tests on LambdaTest, a cloud-based cross-browser testing platform. By following these steps, you can seamlessly execute automated tests on a wide range of browsers and operating systems using LambdaTest’s Selenium Grid.

## Prerequisites
Before you begin, ensure you have the following:

- Your [LambdaTest Username and Access Key](https://accounts.lambdatest.com/)
- Install Java Development Kit (JDK). We recommend Java version 11
- Install [Maven](https://maven.apache.org/)
- [Download](https://www.selenium.dev/downloads/) the latest Selenium Client and its WebDriver bindings

## Step 1: Configure your test suite

:::tip Sample repo
Download or Clone the code sample for the Java from the LambdaTest GitHub repository to run the tests on our Standard Grid.

<a href="https://github.com/LambdaTest/java-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/java-selenium-sample.git
cd java-selenium-sample
```

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```java title="Test.java"
// highlight-next-line
public static String hubURL = "https://hub.lambdatest.com/wd/hub";
private WebDriver driver;
public void setup() throws MalformedURLException {
  //... your capabilities
  // highlight-next-line
  driver = new RemoteWebDriver(new URL(hubURL), capabilities);
}
```

## Step 2: Update the dependencies
Run the command below to check for outdated dependencies. Review updates carefully before modifying your `pom.xml`, as they might not be compatible with your code.

```bash
mvn versions:display-dependency-updates
```

## Step 3: Configure your test Capabilities
LambdaTest requires specific capabilities to set the browser, browser version, operating system, and other configurations for your test.

Example desired capabilities for testing on Chrome 120:

```java title="Test.java"
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "120.0");
capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSeleniumSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

:::tip
You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.
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
Replace the `TEST_FILE_NAME` in the below command with your desired test file to execute that particular test on LambdaTest Grid:
```bash
mvn clean install exec:java -Dexec.mainClass="com.lambdatest.TEST_FILE_NAME" -Dexec.classpathScope=test -e
```

Visit the [LambdaTest Web Automation](https://automation.lambdatest.com/build) page to check the status of your test execution.
<img loading="lazy" src={require('../assets/images/selenium/language-frameworks/java/1.png').default} alt="Image"  className="doc_img"/>

## Additional Links
- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)