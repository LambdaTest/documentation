---
id: appium-kotlin
title: Kotlin With Appium
sidebar_label: Kotlin
description: Now you can run your Appium automation scripts using Kotlin on LambdaTest Real Device Cloud Platform of 3000+ real mobile devices.
keywords:
  - appium
  - Kotlin
  - lambdatest kotlin
  - framework on lambdatest
  - java
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/appium-kotlin/
site_name: LambdaTest
slug: appium-kotlin/
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
          "name": "Koltin With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-kotlin/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **Kotlin** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **Kotlin** for application testing with **Appium** on **LambdaTest**.
2. Learn more about Desired Capabilities for Appium testing.
3. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-kotlin" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you start performing App automation testing with Appium, you would need to follow these steps::

- You need to install the latest version of [**IntelliJ IDEA**](https://www.jetbrains.com/idea/) because it provides Kotlin support. It is recommended by us but you can use any other IDE also.
- Make sure that Kotlin plugins are enabled/installed in the IntelliJ IDEA if you are using a previous version.
- Download and install **Maven** following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.
- Make sure that you have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)


## Run your first test

---

### 1. Upload your application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}
</CodeBlock>
</div>

**Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### 2. Clone the sample project

1. Clone the LambdaTest’s :link: [LT-appium-java](https://github.com/LambdaTest/LT-appium-java) repository:

```bash
git clone https://github.com/LambdaTest/LT-appium-java
```
2. After you have cloned the project file open it in **InjelliJ IDEA** as a *Maven* project. 
3. Now right click on the **LT-appium-kolin** in the side bar under **Projects**, go to **Mark directory** as and choose it as **Source root**.

### 3. Set up your authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://appautomation.lambdatest.com/). Then, set LambdaTest `Username` and `Access Key` in environment variables with following commands.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### 4. Write your automation script

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

</TabItem>

</Tabs>


### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

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

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

1. Run the following commands to install the required dependencies:

```bash
mvn clean install
```
2. Firstly **build** the test in IntelliJ IDEA and make sure that it is build successfully.
3. Then, try running the current file by using **Run** button in the IDE.

:::info
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the :link: [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).
:::

## Additional Links

---

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

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
      Kotlin With Appium
</span>
    </li>
  </ul>
</nav>
