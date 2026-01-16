---
id: gauge-frameworks
title: Execute Selenium Tests With Gauge
sidebar_label: Gauge
description: Your guide to running tests using Gauge on TestMu AI's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - gauge automation testing
  - gauge scripts
  - testing with gauge
  - gauge selenium grid
  - gauge selenium
  - online selenium grid
  - automated browser testing
  - automation testing
  - cross browser testing with gauge
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmu.ai/support/docs/running-gauge-tests-on-testmu-selenium-grid/
site_name: LambdaTest
slug: running-gauge-tests-on-testmu-selenium-grid
canonical: https://www.testmu.ai/support/docs/running-gauge-tests-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Running Gauge Test Automation On <BrandName /> Selenium Grid",
          "item": `${BRAND_URL}/support/docs/running-gauge-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Selenium With Gauge Test Tutorial

---

In this topic, you will learn how to configure and run tests using **Gauge** on <BrandName />'s [Selenium testing cloud platform](https://www.lambdatest.com/selenium-automation).

## Objectives

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Gauge** framework.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Gauge** framework to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

:::tip Sample repo

All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/gauge-selenium-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of Selenium Client and WebDriver are ideal for running your automation script on <BrandName /> Selenium cloud grid.

- Install **Maven**. It can be downloaded and installed following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.

- Install the **Gauge** framework which can be downloaded from [the official website of Gauge](https://docs.gauge.org/getting_started/installing-gauge.html?os=windows&language=null&ide=null).

### Cloning Repo and Installing Dependencies

**Step 1:** Clone the <BrandName />’s [gauge-selenium-sample](https://github.com/LambdaTest/gauge-selenium-sample) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/gauge-selenium-sample
cd gauge-selenium-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

**Step 2:** Install the mandatory Selenium dependencies for Maven by running the below command:

```bash
mvn compile
```

### Setting up Your Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set <BrandName /> **Username** and **Access Key** in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \\
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \`
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Run Your First Test

---

### Sample Test with Gauge

Let’s checkout sample Gauge code running <BrandName /> Selenium grid.

```java title="StepImplementation_ToDo.java"
package driver.driver;

import com.thoughtworks.gauge.Step;
import driver.driver.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class StepImplementation_ToDo {

    private final WebDriver driver;

    public StepImplementation_ToDo() {
        this.driver = DriverFactory.getDriver();
    }

  @Step("Open the todo app")
  public void gotoApp() throws InterruptedException {

        System.out.println(DriverFactory.getDriver());
        driver.get("https://lambdatest.github.io/sample-todo-app/");
        String title = driver.getTitle();
        assertEquals(title,"Sample page - lambdatest.com");
  }

  @Step("Select the desired items")
  public void selectItems() throws InterruptedException {

      WebElement itemOne = driver.findElement(By.name("li1"));
      itemOne.click();

      driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

      WebElement itemThird = driver.findElement(By.name("li3"));
      itemThird.click();
  }

  @Step("Add new item <itemName>")
  public void addNewItem(String itemName) throws InterruptedException {

      WebElement addItem  = driver.findElement(By.id("sampletodotext"));
      addItem.sendKeys(itemName);
      Thread.sleep(2000);

      WebElement addButton = driver.findElement(By.id("addbutton"));
      addButton.click();
  }
}
```

### Configuring your Test Capabilities

**Step 4:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
        capabilities.setCapability("network", true); // To enable network logs
        capabilities.setCapability("visual", true); // To enable step by step screenshot
        capabilities.setCapability("video", true); // To enable video recording
        capabilities.setCapability("console", true); // To capture console logs
```

:::info Note

You can generate capabilities for your test requirements with the help of our inbuilt :link: **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

:::

### Executing the Test

**Step 5:** The tests can be executed in the terminal using either of the following commands:

```bash
mvn test
```

or

```bash
mvn clean install
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

:::

## Run Parallel Tests using Gauge

---

Gauge framework do support parallel test execution on the <BrandName /> grid. To perform parallel testing, more than one browser specifications need to be updated in the env folder of the project. For instance, we have defined specifications for Chrome, Firefox, Safari and Edge in the below screenshot. Once the test is executed, all parallel browser specifications will hit on the <BrandName /> grid and execute simultaneously to achieve parallelism.

<p align="center">
<img loading="lazy" src={require('../assets/images/selenium/gauge1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

In case you’d need to chuck out test for any browser, you would need to either delete the folder or comment out the code in it.

### Executing Parallel Tests Using Gauge

To run parallel tests using **Gauge**, we would have to execute the same command we had used for single test which would be:

```bash
mvn test  
```

or

```bash
mvn clean install
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build).

:::

## Testing Locally Hosted or Privately Hosted Projects

---

You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

:::tip Tunnel Help

Refer our :link: [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

:::

Here’s how you can establish <BrandName /> Tunnel.

:::info Download the binary file

- [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

:::

Open command prompt and navigate to the binary folder.

Run the following command:

```bash
./LT -user {user’s login email} -key {user’s access key}
```

So if your user name is **lambdatest@example.com**, the command would be:

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`./LT -user lambdatest@example.com -key ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code as shown:

```java title="Tunnel Capability"
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("tunnel", true);
```

## Additional Links

---

- [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

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
      <span className="breadcrumbs__link">
      Gauge Automation Testing  
      </span>
    </li>
  </ul>
</nav>
