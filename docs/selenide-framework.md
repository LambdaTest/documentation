---
id: selenide-frameworks
title: Execute Selenium Tests With Selenide
sidebar_label: Selenide
description: Your guide to running tests using Selenide on TestMu AI's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - Selenide
  - Selenium
  - Selenium automation testing
  - Selenium Testing tool
  - Selenium testing tutorial
  - selenium python
  - Selenium Grid
  - Selenium Automation

image: /assets/images/og-images/selenium-testing-og.png

url: https://www.testmuai.com/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
site_name: LambdaTest
slug: selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
canonical: https://www.testmuai.com/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
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
          "name": "LambdaTest With Selenide Automation Framework: Perform Automation Testing Faster On Cloud Selenium Grid",
          "item": `${BRAND_URL}/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/`
        }]
      })
    }}
></script>

# Selenium With Selenide Tutorial

---

In this topic, you will learn how to configure and run tests using **Selenide** on <BrandName />'s [Selenium testing cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Selenide** automation framework.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Selenide** framework to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

:::tip Sample repo

All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/selenide-testng-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of Selenium Client and WebDriver are ideal for running your automation script on <BrandName /> Selenium cloud grid.

- Install **Maven**. It can be downloaded and installed following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.

### Cloning Repo and Installing Dependencies

**Step 1:** Clone the <BrandName />’s [selenide-testng-sample](https://github.com/LambdaTest/selenide-testng-sample) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/selenide-testng-sample
cd selenide-testng-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

### Setting up Your Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 2:** Set <BrandName /> `Username` and `Access Key` in environment variables.

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

:::info note

You can also mention your <BrandName /> credentials in each of the config files located at `selenide-testng-sample/src/test/resources/conf/`.

:::

## Run Your First Test

---

### Sample Test with Selenide

Let’s checkout sample Selenide code running <BrandName /> Selenium grid. This is a simple Selenide automation script similar to the script we have used in our [Github repo](https://github.com/LambdaTest/selenide-testng-sample).

```java title="Selenide To Do"
package com.lambdatest;

import java.io.FileReader;
import java.net.URL;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.sleep;
import static com.codeborne.selenide.Selenide.title;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.codeborne.selenide.WebDriverRunner;

public class LambdaTestSetup {
    public RemoteWebDriver driver;
    public String status="failed";

    public static String username;
    public static String accessKey;
    public static String sessionId;

    @BeforeMethod(alwaysRun = true)
    @Parameters(value = { "config", "environment" })
    public void setUp(String config_file, String environment) throws Exception {
        JSONParser parser = new JSONParser();
        JSONObject config = (JSONObject) parser.parse(new FileReader("src/test/resources/conf/" + config_file));
        JSONObject envs = (JSONObject) config.get("environments");

        DesiredCapabilities capabilities = new DesiredCapabilities();

        Map<String, String> envCapabilities = (Map<String, String>) envs.get(environment);
        Iterator it = envCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
        }

        Map<String, String> commonCapabilities = (Map<String, String>) config.get("capabilities");
        it = commonCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            if (capabilities.getCapability(pair.getKey().toString()) == null) {
                capabilities.setCapability(pair.getKey().toString(),
                        (pair.getValue().toString().equalsIgnoreCase("true")
                                || (pair.getValue().toString().equalsIgnoreCase("false"))
                                        ? Boolean.parseBoolean(pair.getValue().toString())
                                        : pair.getValue().toString()));
            }
        }
        capabilities.setCapability("name", this.getClass().getName());

        username = System.getenv("LT_USERNAME");
        if (username == null) {
            username = (String) config.get("user");
        }

        accessKey = System.getenv("LT_ACCESS_KEY");
        if (accessKey == null) {
            accessKey = (String) config.get("key");
        }

        driver = new RemoteWebDriver(
                new URL("http://" + username + ":" + accessKey + "@" + config.get("server") + "/wd/hub"), capabilities);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        sessionId = driver.getSessionId().toString();

        WebDriverRunner.setWebDriver(driver);
    }

    @Test
    public void test() throws Exception {

        open("http://www.google.co.uk");

        $(By.name("q")).setValue("LambdaTest").pressEnter();

        sleep(2000);

        Assert.assertEquals(title(), "LambdaTest - Google Search");

        status = "passed";
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() throws Exception {
        driver.executeScript("lambda-status="+status);
        driver.quit();
    }

}
```

### Configuring your Test Capabilities

**Step 3:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:

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

**Step 4:** Install the mandatory Selenium dependencies for Maven by running the below command:

```bash
mvn compile
```

**Step 5:** The tests can be executed in the terminal using the following command:

```bash
mvn test -P single
```

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Run Parallel Tests using Selenide

---

### Setting up the Parallel Environment

Here is an example of `parallel.testng.xml` file which would help you to run a single test on various browsers at the same time, you would also need to generate a config file `parallel.config.json` to define capabilities of the browsers.

```xml title="parallel.testng.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="Parallel" thread-count="3" parallel="tests">
	<test name="SingleTestChrome">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="chrome"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>

	<test name="SingleTestFirefox">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="firefox"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>

	<test name="SingleTestSafari">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="safari"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>
</suite>
```

```json title="parallel.config.json"
{
  "server": "hub.lambdatest.com",
  "user": "YOUR_USERNAME",
  "key": "YOUR_ACCESS_KEY",

  "capabilities": {
    "build": "Java Selenide Parallel"
  },

  "environments": {
    "chrome": {
      "platform": "windows 10",
      "browserName": "chrome",
      "version": "latest"
    },
    "firefox": {
      "platform": "windows 8.1",
      "browserName": "firefox",
      "version": "latest"
    },
    "safari": {
      "platform": "macOS Mojave",
      "browserName": "safari",
      "version": "latest"
    }
  }
}
```

### Executing Parallel Tests Using Selenide

To run parallel tests using Selenide, we would have to execute the below command in the terminal:

```bash
mvn test -P parallel
```

:::info
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build).
:::

## Testing Locally Hosted or Privately Hosted Projects

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
      <span className="breadcrumbs__link"> Selenide Automation Testing  </span>
    </li>
  </ul>
</nav>
