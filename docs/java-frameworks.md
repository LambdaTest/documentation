---
id: java-framework
title: Execute Selenium Tests With Java
sidebar_label: Java
description: Your guide to running tests using Java on TestMu AI's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - java selenium
  - java selenium tutorial
  - java selenium webdriver
  - java selenium
  - java selenium testing

image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
site_name: LambdaTest
slug: java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Running Java Automation Testing Scripts On Selenium Grid using TestNG Framework",
          "item": `${BRAND_URL}/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Selenium With Java Tutorial

---

In this topic, you will learn how to configure and run tests using **Java** on <BrandName />'s [Selenium testing cloud platform](https://www.lambdatest.com/selenium-automation).

## Objectives

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Java** with Selenium.
2. Specify which browsers to perform **Java** automation testing on.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.

## Prerequisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from [the official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on <BrandName /> Selenium cloud grid.

- Setup your environment with required Selenium bindings if you are using an IDE for running the tests. These are the steps required to configure your IDE :

  - **Step 1:** Download the latest Java Selenium Bindings from the [official website](https://www.selenium.dev/downloads/) and extract the **ZIP** file to your project directory.
  - **Step 2:** Create a new Java project and once it's created, you can open the project settings. Here we are showing an example for the same in **IntelliJ IDEA CE**.
    <img loading="lazy" src={require('../assets/images/selenium/java1.png').default} alt="cmd" width="1260" height="1071" className="doc_img"/>

  - **Step 3:** Navigate to **dependencies** in module settings where you can add your external JARs.
  - **Step 4:** Under dependencies by clicking the **`+`** icon, you can add your downloaded **Selenium JARs** to the project. Once they are added, it should look like this :
    <img loading="lazy" src={require('../assets/images/selenium/java2.png').default} alt="cmd" width="1150" height="740" className="doc_img"/>

Now you are good to run the Java automation testing scripts.

## Run Your First Test

---

Let’s start with a simple Selenium Remote WebDriver test first. The Java script below tests a simple to-do application with basic functionalities like mark items as done, add items in a list, calculate total pending items etc.

### Sample Test with Java

```java title="JavaToDo.java"
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
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
        // To Setup driver
        setUp();
        try {
              //Change it to production page
            driver.get("https://lambdatest.github.io/sample-todo-app/");

              //Let's mark done first two items in the list.
              driver.findElement(By.name("li1")).click();
            driver.findElement(By.name("li2")).click();

             // Let's add an item in the list.
              driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
            driver.findElement(By.id("addbutton")).click();

              // Let's check that the item we added is added in the list.
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
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get any available one.
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);
        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    private void tearDown() {
        if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit(); //really important statement for preventing your test execution from a timeout.
        }
    }
}
```

**Step 1:** Once you setup your environment with the latest Java Selenium bindings, create a new java file `<file_name>.java` in your current project or testing directory and add the above code snippet.

### Setting up your Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 2:** Please edit and add your **UserName** and **AccessKey** which are generated from the platform in your `<file_name>.java` file:

<div className="lambdatest__codeblock">
    <CodeBlock className="language-java">
  {`String username= "${ YOUR_LAMBDATEST_USERNAME()}"; 
String accesskey= "${ YOUR_LAMBDATEST_ACCESS_KEY()}";`}
  </CodeBlock>
</div>

### Configuring your Test Capabilities

**Step 3:** In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code is defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
```

:::info Note

You can generate capabilities for your test requirements with the help of our inbuilt :link: **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

:::

### Executing the Test

- If you are using an editor or IDE for running your tests, you can just build and run your configured java file in your editor/IDE.
- If you are using a terminal/cmd, you would need to execute the following commands :

```bash
cd to/file/location
#Compile the test file:
javac -classpath ".:/path/to/selenium/jarfile:" <file_name>.java
#Run the test:
java -classpath ".:/path/to/selenium/jarfile:" <file_name>
```

**Example:**

```bash
cd /Users/macuser/Documents/LambdaTest_Java
javac -classpath ".:/Users/macuser/Documents/LambdaTest_Java/selenium-server-4.1.1.jar:" JavaTodo.java
java -classpath ".:/Users/macuser/Documents/LambdaTest_Java/selenium-server-4.1.1.jar:" JavaTodo
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

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
      Java Automation Testing 
      </span>
    </li>
  </ul>
</nav>
