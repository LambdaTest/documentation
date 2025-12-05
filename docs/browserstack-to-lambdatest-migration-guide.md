---
id: browserstack-to-lambdatest-migration-guide
title: How to migrate from BrowserStack to LambdaTest
hide_title: true
sidebar_label: BrowserStack To LambdaTest Migration
description: Using this guide, you can seamlessly migrate from BrowserStack to LambdaTest. It showcases a hands-on implementation using which you can run tests on LambdaTest (within few minutes)
keywords:
  - browserstack lambdatest migration
  - browserstack lambdatest porting
  - browserstack lambdatest selenium testing
  - browserstack lambdatest migration guide
  - how to migrate from browserstack to lambdatest
url: https://www.lambdatest.com/support/docs/browserstack-to-lambdatest-migration-guide/
site_name: LambdaTest
slug: browserstack-to-lambdatest-migration-guide/
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
          "name": "BrowserStack to LambdaTest migration",
          "item": "https://www.lambdatest.com/support/docs/browserstack-to-lambdatest-migration-guide/"
        }]
      })
    }}
></script>

# Migration from BrowserStack to LambdaTest
* * *
LambdaTest and BrowserStack both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from BrowserStack to LambdaTest

<b>[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 4 and Selenium 3]</b>

## Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.
<!-- 
The following are the changes in the parameters:

* Username 
* Access Key

You can find Username and Access Key from your LambdaTest Account Settings.

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/dashboard.webp').default} alt="Image" width="1024" height="667" /> -->

When migrating your Selenium 4 tests from BrowserStack to LambdaTest, the following updates are required in your existing code:

1.  <b>Get LambdaTest Credentials</b>: You can find these credentials under Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. <b>Create .env file</b>: Securely store your LambdaTest credentials, create a .env file in the root of your project and add the following values:

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for LambdaTest execution.


## Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

<Tabs className="docs__val">

<TabItem value="ios" label="BrowserStack Selenium Grid URL" default>

```js
@hub-cloud.browserstack.com/wd/hub
```

</TabItem>

<TabItem value="android" label="LambdaTest Selenium Grid URL" default>

```js
@hub.lambdatest.com/wd/hub
```

</TabItem>

</Tabs>

## Configuring Selenium 4 Tests on LambdaTest
***
Migrating your Selenium 4 tests from BrowserStack to LambdaTest requires only a few small updates. In this guide, we’ll walk through how to apply LambdaTest’s W3C-compliant capabilities, configure authentication, and execute your Selenium 4 test sessions on real browsers hosted in the LambdaTest cloud.

***

### LambdaTest Automation Capabilities


Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of BrowserStack and LambdaTest:

<Tabs className="docs__val">

<TabItem value="ios" label="BrowserStack Capablities" default>

```js
MutableCapabilities capabilities = new MutableCapabilities();
HashMap<String, Object> bstackOptions = new HashMap<String, Object>();
capabilities.setCapability("browserName", "Chrome");
bstackOptions.put("os", "OS X");
bstackOptions.put("osVersion", "Tahoe");
bstackOptions.put("browserVersion", "latest");
bstackOptions.put("userName", "YOUR_USERNAME");
bstackOptions.put("accessKey", "YOUR_ACCESS_KEY");
bstackOptions.put("consoleLogs", "info");
capabilities.setCapability("bstack:options", bstackOptions);
```

</TabItem>

<TabItem value="android" label="LambdaTest Capabilities" default>

```js
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("dev");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

</TabItem>

</Tabs>

To generate capabilities use [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.



## Configuring Selenium 3 Tests on LambdaTest
***
Migrating your Selenium 3 tests from BrowserStack to LambdaTest requires only a few simple configuration changes. In the sections below, we’ll guide you through updating your test setup, applying Selenium 3–compatible capabilities, and running your test sessions on real browsers hosted on the LambdaTest cloud.
***

### LambdaTest Automation Capabilities

The Capabilities Generator allows you to configure the required desired capabilities for Selenium 3 test execution. These capabilities define the browser environment in which your tests will run.

With Selenium 3, the core capabilities remain:

* Browser Name (e.g., Chrome, Firefox, Edge)
* Browser Version
* Operating System / Platform

Optionally, you may also configure Selenium versions or other advanced settings based on your test requirements. However, for this migration guide, we will primarily focus on the three fundamental capabilities listed above.

Below are example capability representations from BrowserStack and LambdaTest to help you understand how to adapt your existing configuration during migration.


<Tabs className="docs__val">

<TabItem value="ios" label="BrowserStack Capablities" default>

```js
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browser", "Chrome");
caps.setCapability("os", "OS X");
caps.setCapability("os_version", "Tahoe");
caps.setCapability("browser_version", "latest");
caps.setCapability("browserstack.user", "YOUR_USERNAME");
caps.setCapability("browserstack.key", "YOUR_ACCESS_KEY");
caps.setCapability("browserstack.console", "info");
```

</TabItem>

<TabItem value="android" label="LambdaTest Capabilities" default>

```js
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "Safari");
capabilities.setCapability("browserVersion", "26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("visual", true);
ltOptions.put("video", true);
ltOptions.put("platformName", "MacOS Tahoe");
capabilities.setCapability("LT:Options", ltOptions);
```

</TabItem>

</Tabs>

To generate capabilities for Selenium 3, you can use the [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) , which allows you to define essential automation parameters such as browser name, browser version, operating system, along with any additional test configurations required for execution.


## Hands On Guide -  LambdaTest Migration
***
Let’s walk through a practical example demonstrating how to migrate a Selenium 4 test to LambdaTest. In this scenario, we launch the latest Chrome browser on a Windows 10 machine.

**Test Scenario**:

This test script performs a basic text validation on the website [LambdaTest eCommerce Playground](https://ecommerce-playground.lambdatest.io/) and shows the expected execution results when running the test in the LambdaTest cloud.


<Tabs className="docs__val">

<TabItem value="ios" label="LambdaTest Execution With Selenium 4 Capabilities" default>

```java
// TextValidationTest.java

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {

    public static void main(String[] args) throws Exception {

        // ---------------- Authentication using Environment Variables ----------------
        String username = System.getenv("LT_USERNAME") == null ? "Your LT Username" : System.getenv("LT_USERNAME");  // If env variables are unavailable, you may hard-code credentials here.
        String authkey = System.getenv("LT_ACCESS_KEY") == null ? "Your LT AccessKey" : System.getenv("LT_ACCESS_KEY"); // If env variables are unavailable, you may hard-code credentials here.

        String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";

        // ---------------- Selenium 4 Browser Options (Runs on LambdaTest Cloud) ----------------
        ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("username", username);
        ltOptions.put("accessKey", authkey);
        ltOptions.put("project", "Text Validation Test");
        ltOptions.put("build", "Text Validation Test Build");
        ltOptions.put("selenium_version", "4.0.0");
        ltOptions.put("w3c", true);

        browserOptions.setCapability("LT:Options", ltOptions);

        // ---------------- Start Remote WebDriver Session ----------------
        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), browserOptions);

        // 1. Visit Page
        driver.get("https://ecommerce-playground.lambdatest.io/");

        // 2. Text Validation
        String expectedText = "This is a dummy website for Web Automation Testing";
        boolean isTextPresent = driver.getPageSource().contains(expectedText);

        if (isTextPresent) {
            System.out.println("✔ Text validation PASSED");
            System.out.println("Found: " + expectedText);
        } else {
            System.out.println("✘ Text validation FAILED");
        }

        // ---------------- End Session ----------------
        driver.quit();
    }
}
```

</TabItem>

<TabItem value="android" label="LambdaTest Execution With Selenium 3 Capabilities" default>

```java
// TextValidationTest.java – Selenium 3 Configuration

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {

    public static void main(String[] args) throws Exception {

        // ================== LambdaTest Authentication via ENV Vars ==================
        String username = System.getenv("LT_USERNAME") == null ? "Your LT Username" : System.getenv("LT_USERNAME"); // If env variables are unavailable, you may hard-code credentials here.
        String authkey = System.getenv("LT_ACCESS_KEY") == null ? "Your LT AccessKey" : System.getenv("LT_ACCESS_KEY"); // If env variables are unavailable, you may hard-code credentials here.
        String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";

        // ================== Selenium 3 LambdaTest Capabilities ==================
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "Safari");
        capabilities.setCapability("browserVersion", "26");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("username", username);            // pulled dynamically
        ltOptions.put("accessKey", authkey);            // pulled dynamically
        ltOptions.put("visual", true);
        ltOptions.put("video", true);
        ltOptions.put("platformName", "MacOS Tahoe");
     

        capabilities.setCapability("LT:Options", ltOptions);

        // ================== Start Selenium 3 Remote WebDriver ==================
        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), capabilities);

        // 1. Open Website
        driver.get("https://ecommerce-playground.lambdatest.io/");

        // 2. Validate expected UI text
        String expectedText = "This is a dummy website for Web Automation Testing";
        boolean isTextPresent = driver.getPageSource().contains(expectedText);

        if (isTextPresent) {
            System.out.println("✔ Text validation PASSED");
            System.out.println("Found: " + expectedText);
        } else {
            System.out.println("✘ Text validation FAILED");
        }

        driver.quit();
    }
}

```

</TabItem>

</Tabs>











**Result**

Visit LambdaTest Web Automation dashboard to view your test execution result.

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/Lambdatest-text-validation-result.png').default} alt="Lambdatest text validation result" width="1024" height="667" />





<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       BrowserStack To LambdaTest Migration
      </span>
    </li>
  </ul>
</nav>