---
id: migrate-appium-tests-from-browserstack-and-saucelabs
title: How to Migrate Appium Tests From BrowserStack, Sauce Labs, and Local Grid
sidebar_label: Migrate From BrowserStack And Sauce Labs
description: This documentation will guide you through the process of migrating your Appium test suites from BrowserStack and Sauce Labs to LambdaTest.
keywords:
  - migrate appium tests from browserstack
  - migrate appium tests from saucelabs
  - migrate appium tests from browserstack and saucelabs to lambdatest
  - how to migrate appium tests from browserstack to lambdatest
  - how to migrate appium tests from saucelabs to lambdatest
url: https://www.lambdatest.com/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/
site_name: LambdaTest
slug: migrate-appium-tests-from-browserstack-and-saucelabs/
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
          "name": "Migrate Appium Tests From BrowserStack, Sauce Labs, or Local Grid",
          "item": "https://www.lambdatest.com/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/"
        }]
      })
    }}
></script>

---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

LambdaTest offers an online Appium automation grid to perform app automation. The online Appium Grid is available on  BrowserStack, Sauce Labs and LambdaTest. Therefore, you can effortlessly migrate your current Appium automation scripts (or suites) from local grid, Sauce Labs or BrowserStack to LambdaTest.

You can check out this guide to know about the [supported Appium versions on LambdaTest](https://www.lambdatest.com/support/docs/supported-appium-versions/).


## Migrating Tests From BrowserStack and Sauce Labs

---

## Changes in the Test Script

To move from BrowserStack or Sauce Labs to LambdaTest, you need to make some changes to your test suites such as authentication, desired capabilities etc.


### Step 1: Authentication

---

Firstly, you need to change the authentication in the configuration settings of your test suite. For running tests on LambdaTest Appium Grid, you need to have a valid Username and Access Key to run tests. In case you don’t have an account on LambdaTest, you can [sign up on LambdaTest](https://accounts.lambdatest.com/register).

The following are the changes in the parameters:

- Username
- Access Key

You can find the `Username` and `Access Key` from your LambdaTest Account Settings under [Password & Security](https://accounts.lambdatest.com/security/username-accesskey).

<img loading="lazy" src={require('../assets/images/getting-started-app-automation/username-accesskey.png').default} alt="Image" width="1366" height="625" className="doc_img"/>

When migrating from BrowserStack or Sauce Labs to LambdaTest, you need to make the following changes in the existing code:

1. User name
2. Access Key
3. Hub URL
4. Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property  | Type   | BrowserStack                                    | Sauce Labs                                     | LambdaTest                                    |
| --------- | ------ | ----------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| Username  | String | UserName to access Appium Grid on BrowserStack  | UserName to access Appium Grid on Sauce Labs  | UserName to access Appium Grid on LambdaTest  |
| Access Key | String | AccessKey to access Appium Grid on BrowserStack | AccessKey to access Appium Grid on Sauce Labs | AccessKey to access Appium Grid on LambdaTest |
| Hub URL   | String | @hub-cloud.browserstack.com/wd/hub              | ondemand.us-west-1.saucelabs.com/wd/hub       | @hub.lambdatest.com/wd/hub                    |





### Step 2: Specifying Desired Capabilities

---

Capabilities generator allows you to specify the desired capabilities (or capabilities), which are configuration options that allow you to specify the following:

1. Device
2. Operating system

You can also select other advanced options available in the LambdaTest [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).


<Tabs className="docs__val">

<TabItem value="appium1" label="Appium v1" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "ASUS ZenFone 8");
capabilities.setCapability("appiumVersion", "1.21.0");
capabilities.setCapability("platformVersion", "13");
```

</TabItem>

<TabItem value="appium2" label="Appium v2" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "ASUS ZenFone 8");
capabilities.setCapability("appiumVersion", "2.16.2");
capabilities.setCapability("platformVersion", "13");
```

</TabItem>

<TabItem value="appium3" label="Appium v3" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "ASUS ZenFone 8");
capabilities.setCapability("appiumVersion", "3.0.2");
capabilities.setCapability("platformVersion", "13");
```

</TabItem>

</Tabs>

>**Note**: Currently, Appium v3 on LambdaTest is supported on virtual devices for Android 15+ and iOS 16+.

### Step 3: Migrating Tests

---

Let's look an example that shows the entire migration process.

The test script below launches the Android app on a real device via LambdaTest using Appium and sets the required capabilities.

It then clicks through color change, text update, toast, and notification. After that it opens geo location, runs the speed test, launches the browser, visits a website, and ends the session.



```java
public class AndroidApp {

    String userName = System.getenv("LT_USERNAME") == null ?
            "username" : System.getenv("LT_USERNAME"); //Add username here
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ?
            "accessKey" : System.getenv("LT_ACCESS_KEY"); //Add accessKey here

    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";

    AppiumDriver driver;

    @Test
    @org.testng.annotations.Parameters(value = {"device", "version", "platform"})
    public void AndroidApp1(String device, String version, String platform) {
        try {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("build","Java TestNG Android");
            capabilities.setCapability("name",platform+" "+device+" "+version);
            capabilities.setCapability("deviceName", device);
            capabilities.setCapability("platformVersion",version);
            capabilities.setCapability("platformName", platform);
            capabilities.setCapability("isRealMobile", true);
            capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
            capabilities.setCapability("deviceOrientation", "PORTRAIT");
            capabilities.setCapability("console", true);
            capabilities.setCapability("network", false);
            capabilities.setCapability("visual", true);
            capabilities.setCapability("devicelog", true);

            String hub = "https://" + userName + ":" + accessKey + gridURL;
            driver = new AppiumDriver(new URL(hub), capabilities);

            MobileElement color = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/color");
            //Changes color to pink
            color.click();
            Thread.sleep(1000);
            //Back to original color
            color.click();

            MobileElement text = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/Text");
            //Changes the text to "Proverbial"
            text.click();

            //toast will be visible
            MobileElement toast = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/toast");
            toast.click();

            //notification will be visible
            MobileElement notification = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/notification");
            notification.click();
            Thread.sleep(2000);

            //Opens the geolocation page
            MobileElement geo = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/geoLocation");
            geo.click();
            Thread.sleep(5000);

            //takes back to home page
            MobileElement home = (MobileElement) driver.findElementByAccessibilityId("Home");
            home.click();

            //Takes to speed test page
            MobileElement speedtest = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/speedTest");
            speedtest.click();
            Thread.sleep(5000);

            MobileElement Home = (MobileElement) driver.findElementByAccessibilityId("Home");
            Home.click();

            //Opens the browser
            MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
            browser.click();

            MobileElement url = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/url");
            url.sendKeys("https://www.lambdatest.com");

            MobileElement find = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/find");
            find.click();

            driver.quit();

        } catch (Exception e) {
            e.printStackTrace();
            try{
                driver.quit();
            }catch(Exception e1){
                e.printStackTrace();
            }
        }
    }
}
```

The majority of the implementation, as shown above, remains unchanged. Only changes to the infrastructure are made (i.e. instead of BrowserStack or Sauce Labs, the app automation tests would be run on LambdaTest).


## Migrating From Local Grid
---

### Step 1: Define Desired Capabilities

Appium's Desired Capabilities are a collection of key-value pairs wrapped inside a JSON object. These key-value pairs request the Appium server for the required test automation session.

Let’s say you want to run an Appium 3 tests in Java on ASUS ZenFone 8 running Android 13. You can define the same in the form of capability as given below.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "ASUS ZenFone 8");
capabilities.setCapability("appiumVersion", "3.0.2");
capabilities.setCapability("platformVersion", "13");
```

### Step 2: Authentication and Running Tests

---

To begin, change the authentication in your test suite's configuration settings. To run the tests on LambdaTest Appium Grid, you need a valid user name and access key. If you were already performing tests on your local grid, you will need to modify your test script to initialize an Appium driver along with your desired capabilities.

Pass the capabilities to `@hub.lambdatest.com/wd/hub` with your LambdaTest authentication details, and you are done. 


> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

----

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
      Migrate Appium Tests From BrowserStack, Sauce Labs, or Local Grid
      </span>
    </li>
  </ul>
</nav>
