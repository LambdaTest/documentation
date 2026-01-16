---
id: migrate-legacy-lambdatest
title: How to Migrate From Legacy Test Execution Platform to TestMu AI
hide_title: true
sidebar_label: Legacy Platform To TestMu AI Migration
description: Learn how to migrate from legacy test execution platform to TestMu AI cloud platform.
keywords:
- migrate from legacy platform to testmu ai
- transition to testmu ai from legacy testing
- switch legacy test execution to testmu ai
- legacy test platform to testmu ai migration
- moving from old testing platform to testmu ai
- upgrade your testing with testmu ai from legacy system
url: https://www.testmu.ai/support/docs/migrate-from-legacy-platform-to-testmu/
site_name: LambdaTest
slug: migrate-from-legacy-platform-to-testmu/
canonical: https://www.testmu.ai/support/docs/migrate-from-legacy-platform-to-testmu/
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
          "name": "How to Migrate From Legacy Platform to TestMu AI",
          "item": `${BRAND_URL}/support/docs/migrate-from-legacy-platform-to-testmu/`
        }]
      })
    }}
></script>

# How to Migrate From Legacy Test Execution Platform to <BrandName />
---

Legacy test execution platforms present various challenges including limited browser and device support, slow test execution, lack of built-in test orchestration, and others; that can impact software quality and increase maintenance efforts and costs. Migrating to a cloud-based test execution platform like <BrandName /> is a smart move for any organization that wants to improve software quality, reduce maintenance efforts, and cut costs. 

In this guide,  we will look at how to migrate from legacy test execution platform to <BrandName />.


<!-- ## Why <BrandName />?
---

Developers and testers require a robust test execution platform that is reliable, secure, scalable, fast, and affordable. On the other hand, enterprises seek innovation that orchestrates tests and bring in much-needed intelligence to provide faster developer feedback and quicker time-to-market. This is exactly where <BrandName /> steps in to help you in meeting these requirements.

*<BrandName /> is an AI-based test orchestration and execution platform that allows you to perform manual and automated tests at scale on over 10000+ real browsers, devices, and operating systems combinations.*

Here's why you should shift from legacy test execution platform to <BrandName />.

| Features | <BrandName /> | Legacy Platform |
|------------|------------|------- ---|
| Smart In-Built Test Orchestration Workflows | ✅ | ❌ |
| AI Native Test Intelligence | ✅  | ❌ |
| AI Native Root Cause Analysis (RCA) | ✅ | ❌ |
| Auto Healing | ✅ | ❌ |
| 70% Faster Test Execution | ✅ |❌|
| Flaky Test Detection | ✅ | ❌ |
| Private Real Device Cloud | ✅ |❌ | -->

## How to Migrate From Local Grid to <BrandName />
---

The major difference between a local Selenium Grid and a cloud-based Selenium Grid like <BrandName /> is the point of execution.

On a local grid, tests run directly on the system where browser drivers (ChromeDriver, FirefoxDriver, etc.) are installed.
When using <BrandName />, tests execute remotely on cloud infrastructure, all you need is a valid <BrandName /> account, and no driver installation is required.

<BrandName /> provides scalability, parallel execution, and increased reliability, which are difficult to maintain with a local grid setup.

Migration is simple, tests running on a local grid can be executed on <BrandName /> with minimal modifications, typically requiring no changes to your automation logic. Only the execution endpoint and capabilities need to be configured. 


## Run Your Script Locally

You can run your script locally by executing it directly on your machine with your preferred browser setup. This allows you to quickly test functionality, debug issues, and verify results without relying on external environments. It's an efficient way to validate tests during development.



<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/local-test-script.png').default} alt="Lambdatest text validation result" width="1024" height="667" />


<!-- 
```Java
// TextValidationTest.java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TextValidationTest {

    public static void main(String[] args) throws Exception {

        // ================== Start Local WebDriver ==================
        WebDriver driver = new ChromeDriver();

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

``` -->

## Connect Your Local Script to <BrandName />

To migrate your existing local script to <BrandName />, you only need to update your WebDriver configuration with cloud capabilities and the <BrandName /> Hub URL. Once the credentials and capabilities are added, the same test can run on remote browsers without code logic changes.



### Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on <BrandName /> Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on <BrandName />, visit the [<BrandName /> signup page](https://accounts.lambdatest.com/register) and create a new account.


When migrating your Selenium 4 tests from BrowserStack to <BrandName />, the following updates are required in your existing code:

1.  <b>Get <BrandName /> Credentials</b>: You can find these credentials under Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. <b>Create .env file</b>: Securely store your <BrandName /> credentials, create a .env file in the root of your project and add the following values:

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```


Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for <BrandName /> execution.


### Add <BrandName /> Hub URL
You need to now add the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

```js
@hub.lambdatest.com/wd/hub
```


### <BrandName /> Automation Capabilities
Add your capabilities using the [<BrandName /> Capabilities Generator](https://www.lambdatest.com/capabilities-generator/), where you can quickly generate the required browser, OS, and platform configurations for your test script. Select the environment you want, copy the capabilities, and paste them directly into your script to run on <BrandName />.



<Tabs className="docs__val">

<TabItem value="android" label="Selenium 4 <BrandName /> Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```
</TabItem>

<TabItem value="ios" label="Selenium 3 <BrandName /> Capabilities" default>

```js
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "Safari");
capabilities.setCapability("browserVersion", "26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("platformName", "MacOS Tahoe");
ltOptions.put("visual", true);
ltOptions.put("video", true);
capabilities.setCapability("LT:Options", ltOptions);
```

</TabItem>



</Tabs>

## Hands On Guide -  <BrandName /> Migration


You can execute the same test that previously ran on a local environment by connecting it to the <BrandName /> cloud grid. With minor configuration changes and added capabilities, your script can run cross-browser on <BrandName /> without altering the core test logic.


**Test Scenario**:

This test script performs a basic text validation on the website [<BrandName /> eCommerce Playground](https://ecommerce-playground.lambdatest.io/) and shows the expected execution results when running the test in the <BrandName /> cloud.


<Tabs className="docs__val">

<TabItem value="ios" label="<BrandName /> Execution With Selenium 4 Capabilities" default>

```java
// TextValidationTest.java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.safari.SafariOptions;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {


    public static void main(String[] args) throws Exception {

        String username = System.getenv("LT_USERNAME") == null ? 
        "Your LT Username" : System.getenv("LT_USERNAME");

        String authkey = System.getenv("LT_ACCESS_KEY") == null ? 
        "Your LT AccessKey\n"  : System.getenv("LT_ACCESS_KEY");

        String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";


        SafariOptions browserOptions = new SafariOptions();
        browserOptions.setPlatformName("MacOS Tahoe");
        browserOptions.setBrowserVersion("26");
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("username", "<your_username>");
        ltOptions.put("accessKey", "<your_access_key>");
        ltOptions.put("project", "Text Validation Test");
        ltOptions.put("build", "Text Validation Test Build");
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);

        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), browserOptions);

        try {

            driver.get("https://ecommerce-playground.lambdatest.io/");

            String expectedText = "This is a dummy website for Web Automation Testing";
            boolean isTextPresent = driver.getPageSource().contains(expectedText);

            if (isTextPresent) {
                ((JavascriptExecutor) driver).executeScript("lambda-status=passed");
                System.out.println("✔ Text validation PASSED");
            } else {
                ((JavascriptExecutor) driver).executeScript("lambda-status=failed");
                System.out.println("✘ Text validation FAILED");
            }

        } catch (Exception e) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=pass");
            e.printStackTrace();
        } finally {
            driver.quit();   // 🔹 Correctly placed – runs even if test fails
        }
    }
}
```

</TabItem>

<TabItem value="android" label="<BrandName /> Execution With Selenium 3 Capabilities" default>

```java
// TextValidationTest.java – Selenium 3 Configuration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.JavascriptExecutor;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {


    public static void main(String[] args) throws Exception {

        String username = System.getenv("LT_USERNAME") == null ? 
        "Your LT Username" : System.getenv("LT_USERNAME");

        String authkey = System.getenv("LT_ACCESS_KEY") == null ? 
        "Your LT AccessKey" : System.getenv("LT_ACCESS_KEY");

        String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";
        
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "Safari");
        capabilities.setCapability("browserVersion", "26");
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("username", "<your_username>");
        ltOptions.put("accessKey", "<your_access_key>");
        ltOptions.put("platformName", "MacOS Tahoe");
        ltOptions.put("visual", true);
        ltOptions.put("video", true);
        capabilities.setCapability("LT:Options", ltOptions);

        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), capabilities);

        try {

            driver.get("https://ecommerce-playground.lambdatest.io/");

            String expectedText = "This is a dummy website for Web Automation Testing";
            boolean isTextPresent = driver.getPageSource().contains(expectedText);

            if (isTextPresent) {
                ((JavascriptExecutor) driver).executeScript("lambda-status=passed");
                System.out.println("✔ Text validation PASSED");
            } else {
                ((JavascriptExecutor) driver).executeScript("lambda-status=failed");
                System.out.println("✘ Text validation FAILED");
            }

        } catch (Exception e) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=pass");
            e.printStackTrace();
        } finally {
            driver.quit();   // 🔹 Correctly placed – runs even if test fails
        }
    }
}
```

</TabItem>

</Tabs>


**Result**

Visit <BrandName /> Web Automation dashboard to view your test execution result.

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/lambdatest-safar-execution.png').default} alt="Lambdatest text validation result" width="1024" height="667" />


## Contact Us for Support
---

If you come across any challenges while migrating or need help at any stage, feel free to reach out to our support team. We are dedicated to ensuring a seamless transition to <BrandName /> and are available around the clock to help you with any queries or issues. 

Get in touch with us through our support portal 💬 or community forums 👥.














