---
id: java-framework
title: Selenium With Java
sidebar_label: Java
description: Run Java Selenium tests on TestMu AI cloud grid across 3000+ browsers and OS combinations.
keywords:
  - java selenium cloud testing
  - run java tests on selenium grid
  - java webdriver remote execution
  - java automation cross browser testing
  - selenium java cloud grid setup
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Selenium With Java",
          "item": `${BRAND_URL}/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run your Java Selenium tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

## Prerequisites
---

Complete these steps before running Java Selenium tests.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. Install the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 11 or later.
4. Download the latest [Selenium Java Client](https://www.selenium.dev/downloads/) and extract the ZIP file to your project directory.
5. Add the Selenium JARs to your project dependencies in your IDE.

<img loading="lazy" src={require('../assets/images/selenium/java1.png').default} alt="IntelliJ project settings" width="1260" height="1071" className="doc_img"/>

Navigate to **Dependencies** in module settings, click **+**, and add the downloaded Selenium JARs.

<img loading="lazy" src={require('../assets/images/selenium/java2.png').default} alt="Selenium JARs added to project dependencies" width="1150" height="740" className="doc_img"/>

## Step 1: Create the Test File
---

Create a new Java file and add the following sample test. It opens a to-do app, marks two items as done, adds a new item, and verifies it.

```java title="JavaToDo.java"
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.util.HashMap;
public class JavaTodo {
    String username = "YOUR_LAMBDATEST_USERNAME";
    String accesskey = "YOUR_LAMBDATEST_ACCESS_KEY";
    static RemoteWebDriver driver = null;
    String gridURL = "@hub.lambdatest.com/wd/hub";
    boolean status = false;
    public static void main(String[] args) {
        new JavaTodo().test();
    }
    public void test() {
        setUp();
        try {
            driver.get("https://lambdatest.github.io/sample-todo-app/");

            driver.findElement(By.name("li1")).click();
            driver.findElement(By.name("li2")).click();

            driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
            driver.findElement(By.id("addbutton")).click();

            String enteredText = driver.findElementByXPath("/html/body/div/div/div/ul/li[6]/span").getText();
            if (enteredText.equals("Yey, Let's add it to list")) {
                status = true;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            tearDown();
        }
    }
    private void setUp() {
        ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), browserOptions);
        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    private void tearDown() {
        if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```

## Step 2: Set Your Credentials
---

Replace the placeholder values with your actual credentials from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).

<div className="lambdatest__codeblock">
    <CodeBlock className="language-java">
  {`String username= "${ YOUR_LAMBDATEST_USERNAME()}"; 
String accesskey= "${ YOUR_LAMBDATEST_ACCESS_KEY()}";`}
  </CodeBlock>
</div>

## Step 3: Configure Capabilities
---

Define the browser, version, and OS for your test run.

```java
ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Execute your Java test from your IDE or terminal.

**From your IDE:** Build and run the Java file directly.

**From the terminal:**

```bash
cd to/file/location
javac -classpath ".:/path/to/selenium/jarfile:" JavaTodo.java
java -classpath ".:/path/to/selenium/jarfile:" JavaTodo
```

Your test results appear on the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build).

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
      Selenium With Java
      </span>
    </li>
  </ul>
</nav>
