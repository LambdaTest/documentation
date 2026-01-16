---
id: appium-kotlin
title: Appium With Kotlin
sidebar_label: Kotlin
description: Now you can run your Appium automation scripts using Kotlin on TestMu AI Real Device Cloud Platform of 3000+ real mobile devices.
keywords:
  - appium
  - Kotlin
  - testmu ai kotlin
  - framework on testmu ai
  - java
  - app testing
  - real devices
url: https://www.testmu.ai/support/docs/appium-kotlin/
site_name: LambdaTest
slug: appium-kotlin/
canonical: https://www.testmu.ai/support/docs/appium-kotlin/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

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
          "name": "Koltin With Appium",
          "item": `${BRAND_URL}/support/docs/appium-kotlin/`
        }]
      })
    }}
></script>

In this documentation, you will learn how to configure and run your **Kotlin** automation testing scripts with **Appium** on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Install the latest version of [**IntelliJ IDEA**](https://www.jetbrains.com/idea/). You can use any other IDE also.
- Download and install [**Maven**](https://maven.apache.org/). You can use [**Homebrew**](https://brew.sh/) package manager for Linux/macOS.
- Make sure that Kotlin plugins are enabled/installed in the IntelliJ IDEA if you are using a previous version.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-kotlin" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
</Tabs>

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="App File" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}
    </CodeBlock>
  </div>
</TabItem>

<TabItem value="powershell" label="App URL" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}
    </CodeBlock>
  </div>
</TabItem>

</Tabs>

:::tip
- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.
:::

### Step 4: Update your Automation Script

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests.

<Tabs className="docs__val">
<TabItem value="android" label="Android" default>

```java title="android.kt"
import io.appium.java_client.MobileBy
import io.appium.java_client.MobileElement
import io.appium.java_client.android.AndroidDriver
import io.appium.java_client.android.AndroidElement
import org.junit.jupiter.api.Test
import org.openqa.selenium.remote.DesiredCapabilities
import java.net.URL

class android {

    @Test
    fun `sample test`() {
        //highlight-next-line
        val username = "LT_USERNAME"   //Add your LambdaTest username here
        //highlight-next-line
        val accessKey = "LT_ACCESS_KEY"    //Add your LambdaTest accessKey here

        var driver: AndroidDriver<MobileElement>? = null

        val hub = URL("https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub")

        val caps = DesiredCapabilities()
        caps.setCapability("autoAcceptAlerts", true)
        caps.setCapability("platformName", "Android")
        caps.setCapability("deviceName", "Galaxy S20")
        caps.setCapability("platformVersion", "11")
        caps.setCapability("platformName", "Android")
        caps.setCapability("isRealMobile", true)
        //highlight-next-line
        caps.setCapability("app", "APP_URL") //Add the app (.apk) url here
        caps.setCapability("deviceOrientation", "PORTRAIT")
        caps.setCapability("build", "Kotlin Vanilla - Android")
        caps.setCapability("name", "Sample Test Kotlin")
        caps.setCapability("console", true)
        caps.setCapability("network", false)
        caps.setCapability("visual", true)
        caps.setCapability("device log", true)


        val app = AndroidDriver<AndroidElement>(hub, caps)

        Thread.sleep(4000)

        val color: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/color")) as MobileElement
            color.click()

        val text: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/Text")) as MobileElement
            text.click()

        val toast: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/toast")) as MobileElement
            toast.click()

        val notification: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/notification")) as MobileElement
            notification.click()

        val geo: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/geoLocation")) as MobileElement
            geo.click()
        Thread.sleep(5000)

        val el3: MobileElement =
            app.findElementByAccessibilityId("Home") as MobileElement

        app.navigate().back()
        Thread.sleep(2000)

        val speedtest: MobileElement =
            app.findElement(MobileBy.id("com.lambdatest.proverbial:id/speedTest")) as MobileElement
            speedtest.click()
        Thread.sleep(5000)

        app.navigate().back()


        if (app != null) {
            app.quit()
        };

    }
}
```
</TabItem>

<TabItem value="ios" label="iOS" default>

```java title="iOS.kt"
import io.appium.java_client.MobileBy
import io.appium.java_client.MobileElement
import io.appium.java_client.remote.AppiumCommandExecutor
import io.appium.java_client.android.AndroidDriver
import io.appium.java_client.android.AndroidElement
import io.appium.java_client.ios.IOSDriver
import io.appium.java_client.ios.IOSElement
import org.junit.jupiter.api.Test
import org.openqa.selenium.remote.DesiredCapabilities
import java.net.URL

class iOS {

    @Test
    fun `sample test`() {
        //highlight-next-line
        val username = "LT_USERNAME"  //Add your LambdaTest username here
        //highlight-next-line
        val accessKey = "LT_ACCESS_KEY"  //Add your LambdaTest accessKey here

        var driver: IOSDriver<IOSElement>? = null

        val hub = URL("https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub")

        val caps = DesiredCapabilities()
        caps.setCapability("platformName", "ios")
        caps.setCapability("deviceName", "iPhone 12")
        caps.setCapability("platformVersion", "14")
        caps.setCapability("isRealMobile", true)
        //highlight-next-line
        caps.setCapability("app", "APP_URL") //Add the app (.ipa) url here
        caps.setCapability("deviceOrientation", "PORTRAIT")
        caps.setCapability("build", "Kotlin Vanilla - iOS")
        caps.setCapability("name", "Sample Test Kotlin")
        caps.setCapability("console", true)
        caps.setCapability("network", false)
        caps.setCapability("visual", true)
        caps.setCapability("device log", true)


        val app = IOSDriver<IOSElement>(hub, caps)

        Thread.sleep(4000)

        val color: MobileElement =
            app.findElementById("color")
            color.click()

        val text: MobileElement =
            app.findElementById("Text")
            text.click()

        val toast: MobileElement =
            app.findElementById("toast")
            toast.click()

        val notification: MobileElement =
            app.findElementById("notification")
            notification.click()

        val geo: MobileElement =
            app.findElementById("geoLocation")
            geo.click()

        Thread.sleep(5000)

        app.navigate().back()


        if (app != null) {
            app.quit()
        };

    }
}
```
:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::
</TabItem>
</Tabs>

### Step 5: Configure the Test Capabilities
You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">
<TabItem value="ios-config" label="iOS" default>

```java
val caps = DesiredCapabilities()
caps.setCapability("platformName", "ios")
caps.setCapability("deviceName", "iPhone 12")
caps.setCapability("platformVersion", "14")
caps.setCapability("isRealMobile", true)
//highlight-next-line
caps.setCapability("app", "APP_URL") //Add the app (.ipa) url here
caps.setCapability("deviceOrientation", "PORTRAIT")
caps.setCapability("build", "Kotlin Vanilla - iOS")
caps.setCapability("name", "Sample Test Kotlin")
caps.setCapability("console", true)
caps.setCapability("network", false)
caps.setCapability("visual", true)
caps.setCapability("device log", true)
```

</TabItem>

<TabItem value="android-config" label="Android" default>

```java
val caps = DesiredCapabilities()
caps.setCapability("autoAcceptAlerts", true)
caps.setCapability("platformName", "Android")
caps.setCapability("deviceName", "Galaxy S20")
caps.setCapability("platformVersion", "11")
caps.setCapability("platformName", "Android")
caps.setCapability("isRealMobile", true)
//highlight-next-line
caps.setCapability("app", "APP_URL") //Add the app (.apk) url here
caps.setCapability("deviceOrientation", "PORTRAIT")
caps.setCapability("build", "Kotlin Vanilla - Android")
caps.setCapability("name", "Sample Test Kotlin")
caps.setCapability("console", true)
caps.setCapability("network", false)
caps.setCapability("visual", true)
caps.setCapability("device log", true)
```

</TabItem>
</Tabs>
:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Install the required dependencies:

```bash
mvn clean install
```
2. Now, you have to successfully **build** the test in your IDE.
3. Then run the current file by using **Run** button in the IDE.

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
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
      Kotlin With Appium
</span>
    </li>
  </ul>
</nav>
