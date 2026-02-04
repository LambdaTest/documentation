---
id: saucelabs-to-lambdatest-migration-guide
title: How to migrate from Sauce Labs to TestMu AI
hide_title: true
sidebar_label: Sauce Labs To TestMu AI Migration
description: Using this guide, you can seamlessly migrate from SauceLabs to TestMu AI. It showcases a hands-on implementation using which you can run tests on TestMu AI (within few minutes)
keywords:
  - saucelabs testmu ai migration
  - saucelabs testmu ai porting
  - saucelabs testmu ai selenium testing
  - saucelabs testmu ai migration guide
  - how to migrate from saucelabs to testmu ai
  - sauce labs testmu ai migration
  - sauce labs testmu ai porting
  - sauce labs testmu ai selenium testing
  - sauce labs testmu ai migration guide
  - how to migrate from sauce labs to testmu ai
url: https://www.testmuai.com/support/docs/saucelabs-to-testmu-migration-guide/
site_name: LambdaTest
slug: saucelabs-to-testmu-migration-guide/
canonical: https://www.testmu.ai/support/docs/saucelabs-to-testmu-migration-guide/
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
          "name": "Sauce Labs to TestMu AI migration",
          "item": `${BRAND_URL}/support/docs/saucelabs-to-testmu-migration-guide`
        }]
      })
    }}
></script>

# Migrating From Sauce Labs To <BrandName />
* * *
<BrandName /> and Sauce Labs both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from Sauce Labs to <BrandName />.


<b>[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 4 and Selenium 3]</b>



***
## Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on <BrandName /> Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on <BrandName />, visit the [<BrandName /> signup page](https://accounts.lambdatest.com/register) and create a new account.


When migrating your Selenium 4 tests from BrowserStack to <BrandName />, the following updates are required in your existing code:

1.  <b>Get <BrandName /> Credentials</b>: You can find these credentials under Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. <b>Create .env file</b>: Securely store your <BrandName /> credentials, create a .env file in the root of your project and add the following values:


<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Selenium Grid Credentials" default>

```js
public static final String user_name = "SauceLabs_UserName";
public static final String access_key = "SauceLabs_AccessKey";
```
</TabItem>

<TabItem value="android" label="<BrandName /> Selenium Grid Credentials" default>
```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```
</TabItem>
</Tabs>

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for <BrandName /> execution.


## Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Selenium Grid URL" default>

```js
@ondemand.us-west-1.saucelabs.com:443/wd/hub
```
</TabItem>

<TabItem value="android" label="<BrandName /> Selenium Grid URL" default>

```js
@hub.lambdatest.com/wd/hub
```
</TabItem>

</Tabs>

## Configuring Selenium 4 Tests on <BrandName />
Migrating your existing tests running on Sauce Labs Cloud to <BrandName /> Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use <BrandName /> desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  <BrandName /> Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

To generate capabilities use [<BrandName /> Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.


For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and <BrandName />:


<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 15");
browserOptions.setBrowserVersion("latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
```

</TabItem>

<TabItem value="android" label="<BrandName /> Capabilities" default>

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

</Tabs>




## Configuring Selenium 3 Tests on <BrandName />
Migrating your existing tests running on Sauce Labs Cloud to <BrandName /> Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use <BrandName /> desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  <BrandName /> Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

To generate capabilities use [<BrandName /> Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.


For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and <BrandName />:

<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setCapability("platformName", "macOS 15");
browserOptions.setCapability("browserVersion", "latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
```

</TabItem>

<TabItem value="android" label="<BrandName /> Capabilities" default>

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
***
Let’s walk through a practical example demonstrating how to migrate a Selenium 4 test to <BrandName />. In this scenario, we launch the latest Chrome browser on a Windows 10 machine.

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

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/lambdatest-safar-execution.png').default} alt="TestMu AI text validation result" width="1024" height="667" />

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
       Sauce Labs To <BrandName /> Migration
      </span>
    </li>
  </ul>
</nav>
