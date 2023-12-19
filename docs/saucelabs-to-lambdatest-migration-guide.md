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
LambdaTest and Sauce Labs both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from Sauce Labs to LambdaTest

<b>[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 3.141.59]</b>

## Introduction
***
Migrating your existing tests running on Sauce Labs Cloud to LambdaTest Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use LambdaTest desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

## Changes to be made in your scripts
***
### Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.

The following are the changes in the parameters:

* Username 
* Access Key

You can find Username and Access Key in the LambdaTest Profile Section of the Automation Dashboard.

<img loading="lazy" className="doc_img" src={require('../assets/images/saucelabs-lambdatest-migration/dashboard.webp').default} alt="Image" width="1024" height="667" /> 

When migrating from Sauce Labs to LambdaTest, you need to make the following changes in the existing code:

* UserName
* AccessKey
* Hub URL
* Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property | Sauce Labs | LambdaTest |
|---|---| ---|
| UserName (Type: String) | UserName to access Selenium Grid on Sauce Labs | UserName to access Selenium Grid on LambdaTest |
| AccessKey (Type: String) | AccessKey to access Selenium Grid on Sauce Labs | AccessKey to access Selenium Grid on LambdaTest |
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

### Changes in Hub URL
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

### Capabilities Generator

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

<img loading="lazy" className="doc_img" src={require('../assets/images/saucelabs-lambdatest-migration/lt-capabilities.webp').default} alt="Image" width="1024" height="667" />

Shown below is the comparison of the capabilities generated by Sauce Labs and LambdaTest capabilities generator:

| Capabilities | Sauce Labs | LambdaTest |
|---|---| ---|
| Browser | browserName | browserName |
| Browser Version | version | version |
| Platform Name | platform | platform |

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

## Hands On Guide - Sauce Labs To LambdaTest Migration
***
Let’s take a practical example that demonstrates the entire migration process. The test scenario is to open Google on Chrome (version 92.0) that is installed on a Windows 10 machine.

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
       Sauce Labs To LambdaTest Migration
      </span>
    </li>
  </ul>
</nav>