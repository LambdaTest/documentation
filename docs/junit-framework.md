---
id: junit-frameworks
title: Run your Selenium JUnit tests on LambdaTest
sidebar_label: JUnit
description: Your guide to running tests using JUnit on LambdaTest's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - java selenium
  - java selenium tutorial
  - java selenium webdriver
  - java selenium
  - java selenium testing
  - junit
  - junit tutorial
  - junit test cases
  - selenium junit
image: /assets/images/og-images/JUnit-automation-testing-with-selenium.jpg
url: https://www.lambdatest.com/support/docs/junit-with-selenium-running-junit-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: junit-with-selenium-running-junit-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "Selenium Test Behind Proxy",
          "item": "https://www.lambdatest.com/support/docs/junit-with-selenium-running-junit-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>
This guide walks you through the process of running Selenium JUnit tests on LambdaTest, a cloud-based cross-browser testing platform. By following these steps, you can seamlessly execute automated tests on a wide range of browsers and operating systems using LambdaTest’s Selenium Grid.

## Prerequisites
Before you begin, ensure you have the following:

- Your [LambdaTest Username and Access Key](https://accounts.lambdatest.com/)
- Install Java Development Kit (JDK). We recommend Java version 11
- Install [Maven](https://maven.apache.org/)
- [Download](https://www.selenium.dev/downloads/) the latest Selenium Client and its WebDriver bindings

## Step 1: Configure your test suite
:::tip Sample repo
Download or Clone the code sample for the JUnit from the LambdaTest GitHub repository to run the tests on our Standard Grid.

<a href="https://github.com/LambdaTest/junit-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash title="terminal"
git clone https://github.com/LambdaTest/junit-selenium-sample.git
cd junit-selenium-sample
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
https://github.com/LambdaTest/junit-selenium-sample/blob/master/pom.xml
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
capabilities.setCapability("name", "LambdaTestJUnitSample");
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
mvn test -P single
```

```xml title="pom.xml"
<profile>
  <id>single</id>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
          <includes>
            <include>com/lambdatest/JUnitTodo.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</profile>
```

</TabItem>

<TabItem value="parallel" label="Run parallel tests" default>

```bash title="terminal"
mvn test -P parallel
```

```xml title="pom.xml"
<profile>
  <id>parallel</id>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
          <includes>
            <include>com/lambdatest/JUnitConcurrentTodo.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</profile>
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/selenium/language-frameworks/java/1.png').default} alt="Image"  className="doc_img"/>

Visit the [LambdaTest Web Automation](https://automation.lambdatest.com/build) page to check the status of your test execution.

## Additional Links
- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

