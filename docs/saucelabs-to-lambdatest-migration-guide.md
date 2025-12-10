---
id: saucelabs-to-lambdatest-migration-guide
title: How to migrate from Sauce Labs to LambdaTest
hide_title: true
sidebar_label: Sauce Labs To LambdaTest Migration
description: Using this guide, you can seamlessly migrate from SauceLabs to LambdaTest. It showcases a hands-on implementation using which you can run tests on LambdaTest (within few minutes)
keywords:
  - saucelabs lambdatest migration
  - saucelabs lambdatest porting
  - saucelabs lambdatest selenium testing
  - saucelabs lambdatest migration guide
  - how to migrate from saucelabs to lambdatest
  - sauce labs lambdatest migration
  - sauce labs lambdatest porting
  - sauce labs lambdatest selenium testing
  - sauce labs lambdatest migration guide
  - how to migrate from sauce labs to lambdatest
url: https://www.lambdatest.com/support/docs/saucelabs-to-lambdatest-migration-guide/
site_name: LambdaTest
slug: saucelabs-to-lambdatest-migration-guide/
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
          "name": "Sauce Labs to LambdaTest migration",
          "item": "https://www.lambdatest.com/support/docs/saucelabs-to-lambdatest-migration-guide"
        }]
      })
    }}
></script>

# Migrating From Sauce Labs To LambdaTest
* * *
LambdaTest and Sauce Labs both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from Sauce Labs to LambdaTest.


<b>[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 4 and Selenium 3]</b>



***
## Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.


When migrating your Selenium 4 tests from BrowserStack to LambdaTest, the following updates are required in your existing code:

1.  <b>Get LambdaTest Credentials</b>: You can find these credentials under Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. <b>Create .env file</b>: Securely store your LambdaTest credentials, create a .env file in the root of your project and add the following values:


<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Selenium Grid Credentials" default>

```js
public static final String user_name = "SauceLabs_UserName";
public static final String access_key = "SauceLabs_AccessKey";
```
</TabItem>

<TabItem value="android" label="LambdaTest Selenium Grid Credentials" default>
```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```
</TabItem>
</Tabs>

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for LambdaTest execution.


## Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Selenium Grid URL" default>

```js
@ondemand.us-west-1.saucelabs.com:443/wd/hub
```
</TabItem>

<TabItem value="android" label="LambdaTest Selenium Grid URL" default>

```js
@hub.lambdatest.com/wd/hub
```
</TabItem>

</Tabs>

## Configuring Selenium 4 Tests on LambdaTest
Migrating your existing tests running on Sauce Labs Cloud to LambdaTest Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  LambdaTest Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and LambdaTest:


<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Capabilities" default>

```js
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 11");
browserOptions.setBrowserVersion("latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
browserOptions.setCapability("sauce:options", sauceOptions);
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
Migrating your existing tests running on Sauce Labs Cloud to LambdaTest Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  LambdaTest Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and LambdaTest:

<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Capabilities" default>

```js
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browserName", "chrome");
caps.setCapability("platform", "Windows 11");
caps.setCapability("version", "latest");
caps.setCapability("build", "<your build id>");
caps.setCapability("name", "<your test name>");
caps.setCapability("username", "YOUR_USERNAME");
caps.setCapability("accessKey", "YOUR_ACCESS_KEY");
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


To generate capabilities use [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.

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

<!-- 

### Sauce Labs
``` js
// test.java
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;

public class SauceLabsSampleTest
{
  public static final String user_name = "SauceLabs_user_name";
  public static final String access_key = "SauceLabs_access_key";
  public static final String grid_url = "https://" + user_name + ":" + access_key + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
  public static void main(String[] args) throws Exception
   {
       DesiredCapabilities caps = new DesiredCapabilities();
       caps.setCapability("build", "Build #1");
       caps.setCapability("name", "Sample Project");
       caps.setCapability("platform", "Windows 10");
       caps.setCapability("browserName", "chrome");
       caps.setCapability("version", "92.0");
      
       WebDriver driver = new RemoteWebDriver(new URL(grid_url), caps);
       driver.get("http://www.google.com");
       driver.quit();
   }
}
```

### LambdaTest
``` js
// test.java
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
public class LambdaTestSampleTest
{
    public static final String user_name = "LambdaTest_user_name";
    public static final String access_key = "LambdaTest_access_key";
    public static final String grid_url = "https://" + user_name + ":" + access_key + "@hub.lambdatest.com/wd/hub";
    public static void main(String[] args) throws Exception
    {
        DesiredCapabilities caps = new DesiredCapabilities();
        capabilities.setCapability("build", "Build #1");
        capabilities.setCapability("name","Sample project");
        capabilities.setCapability("platform", "Windows 10 ");
        capabilities.setCapability("browserName", "Chrome");
        capabilities.setCapability("version", "92.0");
        WebDriver driver = new RemoteWebDriver(new URL(grid_url), caps);
        driver.get("http://www.google.com");
        driver.quit();
    }
}
```

As seen above, the majority of the implementation is unchanged. Changes are only made on the infrastructure side (i.e. instead of Sauce Labs, the tests would be run on LambdaTest).

Here is a side-by-side comparison of what has changed from the implementation point of view:

**Sauce Labs**
``` js
// test.java

public static final String user_name = "SauceLabs_user_name";
public static final String access_key = "SauceLabs_access_key";
public static final String grid_url = "https://" + user_name + ":" + access_key + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
public static void main(String[] args) throws Exception
{
   DesiredCapabilities caps = new DesiredCapabilities();
 
   caps.setCapability("build", "Build #1");
   caps.setCapability("name", "Sample Project");
   caps.setCapability("platform", "Windows 10");
   caps.setCapability("browserName", "chrome");
   caps.setCapability("version", "92.0");
```

**LambdaTest**
``` js
// test.java
public static final String user_name = "LambdaTest_user_name";
public static final String access_key = "LambdaTest_access_key";
public static final String grid_url = "https://" + user_name + ":" + access_key + "@hub.lambdatest.com/wd/hub";
public static void main(String[] args) throws Exception
{
   DesiredCapabilities caps = new DesiredCapabilities();
 
   capabilities.setCapability("build", "Build #1");
   capabilities.setCapability("name","Sample project");
   capabilities.setCapability("platform", "Windows 10 ");
   capabilities.setCapability("browserName", "Chrome");
   capabilities.setCapability("version", "92.0");        
``` -->

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
       Sauce Labs To LambdaTest Migration
      </span>
    </li>
  </ul>
</nav>