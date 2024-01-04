---
id: hyperexecute-appium-testing
title: Appium Testing On HyperExecute
sidebar_label: HyperExecute Appium Testing
description: Maximize Appium test execution with HyperExecute – Explore LambdaTest's support documentation for seamless automation testing.
keywords:
  - appium
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/hyperexecute-appium-testing/
site_name: LambdaTest
slug: hyperexecute-appium-testing/
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
          "name": "Getting Started With Appium Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-appium-testing/"
        }]
      })
    }}
></script>

---

<!-- This post will help you in getting started with **Appium testing** on [LambdaTest Real Device cloud platform](https://www.lambdatest.com/real-device-cloud). -->

This page outlines how to execute your Appium tests on HyperExecute using TestNG with YAML 0.2

> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Appium.

<!-- ## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of Java for application testing with Appium.
2. Learn more about Desired capabilities for Appium testing. -->

## Running Appium Tests on HyperExecute
*** 

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- Setup the Environmental Variable
- Ensure you have Appium’s [Java client library](https://github.com/appium/java-client) installed.
- Access to an **Android** app (.apk or .aab file) or an **iOS** app (.ipa file).

<!-- 1. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/). -->


> If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute Grid. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

***

For macOS:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Steps to Run Your Test

---

**Step 1:** Upload your <b>_iOS_</b> application (.ipa file) or <b>_android_</b> application (.apk file) to the LambdaTest servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication. Make sure to add the path of the <b>appFile</b> in the cURL request. Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">
  <TabItem value="file" label="App file" default>

<Tabs className="docs__val">
<TabItem value="macos-file" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \`
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \`
-F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""
`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
  <TabItem value="url" label="App URL" default>

<Tabs className="docs__val">
<TabItem value="macos-url" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-url" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

**Step 2:** Write Your Automation Script in the client language of your choice from the ones supported by Appium. An automation script for the sample applications have been provided below.

:::tip Sample repo
All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT_Java_Appium" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

Here is a sample automation script in Java for the sample app downloaded above. Ensure to update the `app_url`, `username` and `accesskey` in the below code.

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>

```java
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.URL;
import java.util.List;

public class AndroidApp {

    public static String userName = "username"; //Enter your LT Username here
    public static String accessKey = "accesskey"; //Enter your LT AccessKey here

    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";

    String DeviceValue;
    String versionValue;
    String PlatformValue;


    @org.testng.annotations.Parameters(value = {"device", "version", "platform"})
    public AndroidApp(String device, String version, String platform) {
        try {
            DeviceValue = device;
            versionValue = version;
            PlatformValue = platform;
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("build","ParallelSample Android");
            capabilities.setCapability("name",platform+" "+device+" "+version);
            capabilities.setCapability("deviceName", device);
            capabilities.setCapability("platformVersion",version);
            capabilities.setCapability("platformName", platform);
            capabilities.setCapability("isRealMobile", true);
            //AppURL (Create from Wikipedia.apk sample in project)
            capabilities.setCapability("app", "app url"); //Enter your app URL from previous step here
            capabilities.setCapability("deviceOrientation", "PORTRAIT");
            capabilities.setCapability("console", true);
            capabilities.setCapability("network", true);
            capabilities.setCapability("visual", true);
            capabilities.setCapability("devicelog", true);

            String hub = "https://" + userName + ":" + accessKey + gridURL;
            AppiumDriver driver = new AppiumDriver(new URL(hub), capabilities);

            MobileElement color = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/color");
            //Changes color
            color.click();
            //Back to black color
            color.click();

            MobileElement text = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/Text");
            //Changes the text to proverbial
            text.click();

            //toast is visible
            MobileElement toast = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/toast");
            toast.click();

            //notification is visible
            MobileElement notification = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/notification");
            notification.click();

            //Open the geolocation page
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
            MobileElement el10 = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[1]/android.view.View/android.widget.Button");
            el10.click();
            Thread.sleep(25000);


            MobileElement el11 = (MobileElement) driver.findElementByXPath("//android.widget.FrameLayout[@content-desc=\"Home\"]/android.widget.FrameLayout/android.widget.ImageView");
            el11.click();

            //Opens the browser
            MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
            browser.click();
            MobileElement el13 = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/url");
            el13.sendKeys("www.lambdatest.com");
            MobileElement el14 = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/find");
            el14.click();
            driver.quit();


        } catch (Exception t) {
            System.out.println();

        }


    }
}
```

</TabItem>
<TabItem value="iOS" label="iOS" default>

```java
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;

public class iOSApp {

    public static String userName = "username"; //Enter your LT Username here
    public static String accessKey = "accesskey"; //Enter your LT AccessKey here

    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";

    String DeviceValue;
    String versionValue;
    String PlatformValue;
    AppiumDriver driver;


    @org.testng.annotations.Parameters(value = {"device", "version", "platform"})
    public iOSApp(String device, String version, String platform) {
        try {
            DeviceValue = device;
            versionValue = version;
            PlatformValue = platform;
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("build","ParallelSample iOS");
            capabilities.setCapability("name",platform+" "+device+" "+version);
            capabilities.setCapability("deviceName", device);
            capabilities.setCapability("platformVersion",version);
            capabilities.setCapability("platformName", platform);
            capabilities.setCapability("isRealMobile", true);
            //AppURL (Create from proverbial.ipa sample in project)
            capabilities.setCapability("app", "app url"); //Enter your app URL from previous step here
            capabilities.setCapability("deviceOrientation", "PORTRAIT");
            capabilities.setCapability("console", true);
            capabilities.setCapability("network", true);
            capabilities.setCapability("visual", true);
            capabilities.setCapability("devicelog", true);
            //capabilities.setCapability("geoLocation", "HK");

            String hub = "https://" + userName + ":" + accessKey + gridURL;
            driver = new AppiumDriver(new URL(hub), capabilities);

            MobileElement color = (MobileElement) driver.findElementByAccessibilityId("Colour");
            //Changes color
            color.click();
            //Back to black color
            color.click();

            MobileElement text = (MobileElement) driver.findElementByAccessibilityId("Text");
            //Changes the text to proverbial
            text.click();

            //toast is visible
            MobileElement toast = (MobileElement) driver.findElementByAccessibilityId("Toast");
            toast.click();

            //notification is visible
            MobileElement notification = (MobileElement) driver.findElementByAccessibilityId("Notification");
            notification.click();

            //Open the geolocation page
            MobileElement geo = (MobileElement) driver.findElementByAccessibilityId("GeoLocation");
            geo.click();
            Thread.sleep(5000);

            //Takes back
            driver.navigate().back();

            //Takes to speed test page
            MobileElement speedtest = (MobileElement) driver.findElementByAccessibilityId("Speed Test");
            speedtest.click();
            Thread.sleep(5000);
            MobileElement el10 = (MobileElement) driver.findElementByAccessibilityId("start speed test - connection type multi");
            el10.click();
            Thread.sleep(25000);

            driver.navigate().back();

            //Opens the browser
            MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
            browser.click();
            Thread.sleep(3000);

            MobileElement el4 = (MobileElement) driver.findElementByAccessibilityId("Search");
            el4.click();
            el4.sendKeys("Lambdatest");

            ((JavascriptExecutor) driver).executeScript("lambda-status=passed");
            driver.quit();


        } catch (Exception t) {
            System.out.println();
            ((JavascriptExecutor) driver).executeScript("lambda-status=failed");
            driver.quit();

        }


    }
}
```

</TabItem>
</Tabs>

**Step 3:** Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

<Tabs className="docs__val">
  <TabItem value="androidXML" label="Android" default>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">


    <test name="AppTest 1">
        <parameter name="version" value="11"/>
        <parameter name="platform" value="Android"/>
        <parameter name="device" value="Galaxy S21 Ultra 5G"/>
        <classes>
            <class name="AndroidApp"/>
        </classes>
    </test>

    <test name="AppTest 2">
        <parameter name="version" value="11"/>
        <parameter name="platform" value="Android"/>
        <parameter name="device" value="Galaxy S21"/>
        <classes>
            <class name="AndroidApp"/>
        </classes>
    </test>
</suite>
```

</TabItem>

<TabItem value="iOSXML" label="iOS" default>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">


    <test name="iOSApp 1">
        <parameter name="version" value="14"/>
        <parameter name="platform" value="iOS"/>
        <parameter name="device" value="iPhone 11"/>
        <classes>
            <class name="iOSApp"/>
        </classes>
    </test>

    <test name="iOSApp 2">
        <parameter name="version" value="14"/>
        <parameter name="platform" value="iOS"/>
        <parameter name="device" value="iPhone 12 Pro"/>
        <classes>
            <class name="iOSApp"/>
        </classes>
    </test>
</suite>
```

</TabItem>
</Tabs>

**Step 4:** Execute Your Test Case. Debug and run your code. Run `iOSApp.java` or `AndroidApp.java` in your editor.

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [LambdaTest Automation](https://accounts.lambdatest.com/login).

## Sample YAML 0.2

```bash
version: 0.2
runson: android
concurrency: 1
dynamicAllocation: true
testDiscovery:
  type: raw
  mode: static
  command: grep -r -l --include="*.xml" ".*" src/test/java/ | sed 's#.*/##' | sed 's/\.xml$//'
testRunnerCommand: mvn test -P $test
framework:
  name: appium
  args:
    region: us
```
> The ```region``` parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:
- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

## More About Desired Capabilities

---

Sample Capabilities for both android and iOS are mentioned below -
<Tabs className="docs__val">
<TabItem value="androidCaps" label="Android" default>

```java
{
    "deviceName": "Galaxy Tab S4",
    "platformName": "android",
    "platformVersion": "10",
    "app": "App_url",
    "visual": True,
    "console": True,
    "deviceOrientation": "PORTRAIT",
    "build": "new-12",
    "isRealMobile": True,
}
```

</TabItem>
<TabItem value="iOSCaps" label="iOS" default>

```
{
    "deviceName": "iPhone 12 Mini",
    "platformName": "ios",
    "platformVersion": "14",
    "app": "App_url",
    "isRealMobile": True,
    "visual": True,
    "console": True,
    "build": "lt-web-4",
    "network": True,
}
```

</TabItem>
</Tabs>

> For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/appium/hyperexecute-appium.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the Appium tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.


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
      Appium Testing </span>
    </li>
  </ul>
</nav>