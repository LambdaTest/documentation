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

# Migrating from BrowserStack to LambdaTest
* * *
LambdaTest and BrowserStack both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from BrowserStack to LambdaTest

<b>[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 3.141.59]</b>

## Introduction
***
Migrating your existing tests running on BrowserStack to LambdaTest can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

## Changes to be made in your scripts
***
### Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.

The following are the changes in the parameters:

* Username 
* Access Key

You can find Username and Access Key in the LambdaTest Profile Section of the Automation Dashboard.

<<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/dashboard.webp').default} alt="Image" width="1024" height="667" />

When migrating from BrowserStack to LambdaTest, you need to make the following changes in the existing code:

* UserName
* AccessKey
* Hub URL
* Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property | BrowserStack | LambdaTest |
|---|---| ---|
| UserName (Type: String) | UserName to access Selenium Grid on BrowserStack | UserName to access Selenium Grid on LambdaTest |
| AccessKey (Type: String) | AccessKey to access Selenium Grid on BrowserStack | AccessKey to access Selenium Grid on LambdaTest |
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

### Changes in Hub URL
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

### Capabilities Generator

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

<img loading="lazy" className="doc_img" src={require('../assets/images/browserstack-lambdatest-migration/lt-capabilities.webp').default} alt="Image" width="1024" height="667" />

Shown below is the comparison of the capabilities generated by BrowserStack and LambdaTest capabilities generator:

| Capabilities | BrowserStack | LambdaTest |
|---|---| ---|
| Browser | browser | browserName |
| Browser Version | browser_version | version |
| Platform Name | os | platform |
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

## Hands On Guide - BrowserStack To LambdaTest Migration
***
Let’s take a practical example that demonstrates the entire migration process. The test scenario is to open Google on Chrome (version 92.0) that is installed on a Windows 10 machine.

### BrowserStack
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