---
id: migrate-legacy-lambdatest
title: How to Migrate From Legacy Test Execution Platform to LambdaTest
hide_title: true
sidebar_label: Legacy Platform To LambdaTest Migration
description: Learn how to migrate from legacy test execution platform to LambdaTest cloud platform.
keywords:
- migrate from legacy platform to lambdatest
- transition to lambdatest from legacy testing
- switch legacy test execution to lambdatest
- legacy test platform to lambdatest migration
- moving from old testing platform to lambdatest
- upgrade your testing with lambdatest from legacy system
url: https://www.lambdatest.com/support/docs/migrate-from-legacy-platform-to-lambdatest/
site_name: LambdaTest
slug: migrate-from-legacy-platform-to-lambdatest/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "How to Migrate From Legacy Platform to LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/migrate-from-legacy-platform-to-lambdatest/"
        }]
      })
    }}
></script>

# How to Migrate From Legacy Test Execution Platform to LambdaTest
---

Legacy test execution platforms present various challenges including limited browser and device support, slow test execution, lack of built-in test orchestration, and others; that can impact software quality and increase maintenance efforts and costs. Migrating to a cloud-based test execution platform like LambdaTest is a smart move for any organization that wants to improve software quality, reduce maintenance efforts, and cut costs. 

In this guide,  we will look at how to migrate from legacy test execution platform to LambdaTest.


## Why LambdaTest?
---

Developers and testers require a robust test execution platform that is reliable, secure, scalable, fast, and affordable. On the other hand, enterprises seek innovation that orchestrates tests and bring in much-needed intelligence to provide faster developer feedback and quicker time-to-market. This is exactly where LambdaTest steps in to help you in meeting test orchestration and execution needs.

*LambdaTest is an AI-based test orchestration and execution platform that allows you to perform manual and automated tests at scale on over 3000+ real browsers, devices, and operating systems combinations.*

Here's why you should shift from legacy test execution platform to LambdaTest.

| Features | LambdaTest | Legacy Platform |
|------------|------------|------- ---|
| Smart In-Built Test Orchestration Workflows | ✅ | ❌ |
| AI-Powered Test Intelligence | ✅  | ❌ |
| AI-Powered Root Cause Analysis (RCA) | ✅ | ❌ |
| Auto Healing | ✅ | ❌ |
| 70% Faster Test Execution | ✅ |❌|
| Flaky Test Detection | ✅ | ❌ |
| Private Real Device Cloud | ✅ |❌ |

## How to Migrate From Local Grid to LambdaTest
---

The major difference between a local Selenium grid and cloud-based Selenium grid like LambdaTest is the point of execution. In case of the local Selenium grid, tests are run on the machine that contains
the browser drivers (i.e. ChromeDriver, FirefoxDriver, etc). For running tests on the LambdaTest grid, you only need a valid account on the LambdaTest platform.

LambdaTest grid offers scalability and reliability – two integral factors that
cannot be achieved with a local Selenium grid.

Tests running on local Selenium grid can be ported to run on the LambdaTest grid with minimal changes. In most scenarios, you would not be required to change the test logic since only the point of execution has changed for the test scenarios (or test suites).

|Local Selenium Grid | LambdaTest Grid |
|------------|------------|
| Local Selenium WebDriver (i.e. ChromeDriver, FirefoxDriver, etc) | Remote Selenium WebDriver that runs the test on the LambdaTest Hub `@hub.lambdatest.com/wd/hub`|

Before running the tests, you need to generate the desired browser capabilities using the [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).


For demonstration, we use TestNG framework to run the tests. However, LambdaTest Automation support a wide range of programming languages and testing frameworks. To get started, please visit our guide [LambdaTest Supported Languages and Frameworks](https://www.lambdatest.com/support/docs/getting-started-with-lambdatest-automation/). 

*  **Local Selenium Grid (e.g. Chrome)**

```java
private WebDriver driver = null;
@BeforeSuite
public void setup() throws MalformedURLException {
    /* Set the ChromeDriver path if it is not in the folder where Chrome executable is located */
    driver = ChromeDriver();
}
```

*  **Cloud-based Selenium Grid (LambdaTest)**

```java
private static RemoteWebDriver driver;
private static String Status = "failed";
@BeforeSuite
public void setup() throws MalformedURLException {
        try {
            /* Take username and accesskey from https://accounts.lambdatest.com/detail/profile */
            String username = "user-name";
            String authkey = "access-key";
            String hub = "@hub.lambdatest.com/wd/hub";
            DesiredCapabilities caps = new DesiredCapabilities();
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("browserName", "chrome");
            capabilities.setCapability("version", "70.0");
            capabilities.setCapability("platform", "win10");
            capabilities.setCapability("build", "LambdaTestSampleApp");
            capabilities.setCapability("name", "LambdaTestTestNGSample");
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey +
                hub), caps);
```

Further reading on [running Java tests with TestNG on LambdaTest grid](https://www.lambdatest.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-lambdatest-selenium-grid/).

## Migrating From BrowserStack to LambdaTest
* * *

:::info Note
This guide covers the migration of tests running on the cloud grid that uses **Selenium 3.141.59**.
:::

LambdaTest and BrowserStack both offer the cloud-based Selenium grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from BrowserStack to LambdaTest

Migrating your existing tests running on BrowserStack to LambdaTest can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

### Changes to be Made in Your Scripts
***

#### Authentication

Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium grid, you need to have a valid Username and Access Key to perform tests on our grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.

The following are the changes in the parameters:

* Username 
* Access Key

To get your LambdaTest Username and Access Key, go to **Settings > Account Settings > Password & Security** in your LambdaTest Dashboard.

<img loading="lazy" className="doc_img" src={require('../assets/images/legacy_platform_to_lambdatest/auth.png').default} alt="Image" width="1024" height="667" />

When migrating from BrowserStack to LambdaTest, you need to make the following changes in the existing code:

* Username
* Access Key
* Hub URL
* Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property | BrowserStack | LambdaTest |
|---|---| ---|
| Username (Type: String) | UserName to access Selenium grid on BrowserStack | UserName to access Selenium grid on LambdaTest |
| Access Key (Type: String) | AccessKey to access Selenium grid on BrowserStack | AccessKey to access Selenium grid on LambdaTest |
| Selenium Hub URL (Type: String) | @hub-cloud.browserstack.com/wd/hub | @hub.lambdatest.com/wd/hub |

For a Java-based implementation, here are the changes in the script as far as the authentication stage is concerned:

**BrowserStack** 
``` js
// test.java
public static final String user_name = "BrowserStack_UserName";
public static final String access_key = "BrowserStack_AccessKey";
```
**LambdaTest**
``` js
// test.java
public static final String user_name = "LambdaTest_UserName";
public static final String access_key = "LambdaTest_AccessKey";
```

#### Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

Here is a side-by-side comparison of the Hub URL for BrowserStack and LambdaTest:

| Property | BrowserStack | LambdaTest |
|---|---| ---|
| Selenium Hub URL (Type: String) | @hub-cloud.browserstack.com/wd/hub | @hub.lambdatest.com/wd/hub |

For a Java-based implementation, here are the changes in the script as far as the Hub URL is concerned:

**BrowserStack**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@hub-cloud.browserstack.com/wd/hub";
```
**LambdaTest**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@hub.lambdatest.com/wd/hub";
```

#### Capabilities Generator

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of BrowserStack and LambdaTest:

**BrowserStack**

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/bs-capabilities.webp').default} alt="Image" width="1024" height="667" />

**LambdaTest**

You can generate the corresponding Selenium capabilities using the [LambdaTest capabilities generator](https://www.lambdatest.com/capabilities-generator/). Capabilities matching  the ones shown in the BrowserStack capabilities screenshot is below:

<img loading="lazy" className="doc_img" src={require('../assets/images/legacy_platform_to_lambdatest/lt-capabilities.png').default} alt="Image" width="1024" height="667" />

Shown below is the comparison of the capabilities generated by BrowserStack and LambdaTest capabilities generator:

| Capabilities | BrowserStack | LambdaTest |
|---|---| ---|
| Browser | browser | browserName |
| Browser Version | browser_version | browserVersion |
| Platform Name | os | platformName |
| Platform Version | os_version | N.A |

The platform (or OS) version is a part of the platform name in LambdaTest. Hence, it is mentioned as NA (Not Applicable) in the Capabilities Comparison Table.

Here is the summary of the comparison of Desired Capabilities for `Java` language:

**BrowserStack**
``` js
// test.java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("os", "Windows");
caps.setCapability("os_version", "10");
caps.setCapability("browser", "Chrome");
caps.setCapability("browser_version", "latest");
caps.setCapability("browserstack.local", "false");
caps.setCapability("browserstack.selenium_version", "3.141.59");
```
**LambdaTest**
``` js
// test.java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");
capabilities.setCapability("platform", "Windows 10");
capabilities.setCapability("browserName", "Chrome");
capabilities.setCapability("version","92.0");
```

### Demonstration - BrowserStack to LambdaTest Migration
***
Let’s take a practical example that demonstrates the entire migration process. The test scenario is to open Google on Chrome (version 92.0) that is installed on a Windows 10 machine.

#### BrowserStack
``` js
// test.java
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
 
public class BrowserStackSampleTest
{
    public static final String user_name = "BrowserStack_user_name";
    public static final String access_key = "BrowserStack_access_key";
    public static final String grid_url = "https://" + user_name + ":" + access_key + "@hub-cloud.browserstack.com/wd/hub";
    public static void main(String[] args) throws Exception
    {
        DesiredCapabilities caps = new DesiredCapabilities();
 
        caps.setCapability("build", "Build #1");
        caps.setCapability("name", "Sample project");
        caps.setCapability("os", "Windows");
        caps.setCapability("os_version", "10");
        caps.setCapability("browser", "Chrome");
        caps.setCapability("browser_version", "92.0");
        
        WebDriver driver = new RemoteWebDriver(new URL(grid_url), caps);
        driver.get("http://www.google.com");
 
        driver.quit();
    }
}
```

#### LambdaTest
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

As seen above, the majority of the implementation is unchanged. Changes are only made on the infrastructure side (i.e. instead of BrowserStack, the tests would be run on LambdaTest).

Here is a side-by-side comparison of what has changed from the implementation point of view:

**BrowserStack**
``` js
// test.java

public static final String user_name = "BrowserStack_user_name";
public static final String access_key = "BrowserStack_access_key";
public static final String grid_url = "https://" + user_name + ":" + access_key + "@hub-cloud.browserstack.com/wd/hub";
public static void main(String[] args) throws Exception
{
    DesiredCapabilities caps = new DesiredCapabilities();

    caps.setCapability("build", "Build #1");
    caps.setCapability("name", "Sample project");
    caps.setCapability("os", "Windows");
    caps.setCapability("os_version", "10");
    caps.setCapability("browser", "Chrome");
    caps.setCapability("browser_version", "92.0");
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
```

## Migrating From Sauce Labs to LambdaTest
* * *

:::info Note
This guide covers the migration of tests running on the cloud grid that uses **Selenium 3.141.59**.
:::

LambdaTest and Sauce Labs both offer the cloud-based Selenium grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from Sauce Labs to LambdaTest

Migrating your existing tests running on Sauce Labs Cloud to LambdaTest Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

### Changes to be Made in Your Scripts
***

#### Authentication

Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium grid, you need to have a valid Username and Access Key to perform tests on our grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.

The following are the changes in the parameters:

* Username 
* Access Key

To get your LambdaTest Username and Access Key, go to **Settings > Account Settings > Password & Security** in your LambdaTest Dashboard.

<img loading="lazy" className="doc_img" src={require('../assets/images/legacy_platform_to_lambdatest/auth.png').default} alt="Image" width="1024" height="667" /> 

When migrating from Sauce Labs to LambdaTest, you need to make the following changes in the existing code:

* Username
* Access Key
* Hub URL
* Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property | Sauce Labs | LambdaTest |
|---|---| ---|
| Username (Type: String) | UserName to access Selenium grid on Sauce Labs | UserName to access Selenium grid on LambdaTest |
| Access Key (Type: String) | AccessKey to access Selenium grid on Sauce Labs | AccessKey to access Selenium grid on LambdaTest |
| Selenium Hub URL (Type: String) | @ondemand.us-west-1.saucelabs.com:443/wd/hub | @hub.lambdatest.com/wd/hub |

For a Java-based implementation, here are the changes in the script as far as the authentication stage is concerned:

**Sauce Labs** 
``` js
// test.java
public static final String user_name = "SauceLabs_UserName";
public static final String access_key = "SauceLabs_AccessKey";
```
**LambdaTest**
``` js
// test.java
public static final String user_name = "LambdaTest_UserName";
public static final String access_key = "LambdaTest_AccessKey";
```

#### Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

Here is a side-by-side comparison of the Hub URL for Sauce Labs and LambdaTest:

| Property | Sauce Labs | LambdaTest |
|---|---| ---|
| Selenium Hub URL (Type: String) | @ondemand.us-west-1.saucelabs.com:443/wd/hub | @hub.lambdatest.com/wd/hub |

For a Java-based implementation, here are the changes in the script as far as the Hub URL is concerned:

**Sauce Labs**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
```
**LambdaTest**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@hub.lambdatest.com/wd/hub";
```

#### Capabilities Generator

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and LambdaTest:

**Sauce Labs**

<img loading="lazy" className="doc_img" src={require('../assets/images/saucelabs-lambdatest-migration/sl-capabilities.webp').default} alt="Image" width="1024" height="667" />

**LambdaTest**

You can generate the corresponding Selenium capabilities using the [LambdaTest capabilities generator](https://www.lambdatest.com/capabilities-generator/). Capabilities matching  the ones shown in the Sauce Labs capabilities screenshot is below:

<img loading="lazy" className="doc_img" src={require('../assets/images/legacy_platform_to_lambdatest/lt-capabilities.png').default} alt="Image" width="1024" height="667" />

Shown below is the comparison of the capabilities generated by Sauce Labs and LambdaTest capabilities generator:

| Capabilities | Sauce Labs | LambdaTest |
|---|---| ---|
| Browser | browserName | browserName |
| Browser Version | version | browserVersion |
| Platform Name | platform | platformName |

The platform (or OS) version is a part of the platform name in LambdaTest. Hence, it is mentioned as NA (Not Applicable) in the Capabilities Comparison Table.

Here is the summary of the comparison of Desired Capabilities for `Java` language:

**Sauce Labs**
``` js
// test.java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");
capabilities.setCapability("platform", "Windows 10");
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "92.0");
```
**LambdaTest**
``` js
// test.java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");
capabilities.setCapability("platform", "Windows 10");
capabilities.setCapability("browserName", "Chrome");
capabilities.setCapability("version","92.0");
```

### Demonstration - Sauce Labs To LambdaTest Migration
***
Let’s take a practical example that demonstrates the entire migration process. The test scenario is to open Google on Chrome (version 92.0) that is installed on a Windows 10 machine.

#### Sauce Labs
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

#### LambdaTest
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
```

## Contact Us for Support
---

If you come across any challenges while migrating or need help at any stage, feel free to reach out to our support team. We are dedicated to ensuring a seamless transition to LambdaTest and are available around the clock to help you with any queries or issues. 

Get in touch with us through our support portal 💬 or community forums 👥.



















