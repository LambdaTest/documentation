---
id: appium-csharp
title: C# With Appium
sidebar_label: C#
description: Now you can run your automation scripts using Appium with CSharp on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - csharp
  - lambdatest csharp
  - framework on lambdatest
  - testng
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/appium-csharp/
site_name: LambdaTest
slug: appium-csharp/
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
          "name": "PHP With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-csharp/"
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

In this topic, you will learn how to configure and run your **C#** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **C#** for application testing with **Appium** on **LambdaTest**.
2. Run test cases in **parallel** using C# with Appium to reduce build times.
3. Learn more about AppiumOptions for Appium testing.
4. Explore advanced features of LambdaTest.

:::tip Sample Repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-csharp" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing App automation testing with Appium, you have to set up Visual Studio:

<!-- <img loading="lazy" src={require('../assets/images/app-automation/vs2022.png').default} alt="Image" width="1366" height="625" className="doc_img"/> -->

- Ensure you have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)

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

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

:::

### 2. Clone the sample project

- Clone the LambdaTest’s :link: [LT-appium-java](https://github.com/LambdaTest/LT-appium-java) repository.

- Open the Android/iOS project using the file with a .sln extension.

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

<TabItem value="ios" label="iOS" default>

```csharp title="csharp-appium-first.sln"
using System;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Appium.iOS;
using System.Threading;

namespace csharp_appium_first

{
    class Program
    {
        static void Main(string[] args)
        {
            AppiumOptions caps = new AppiumOptions();


            // Set your LambdaTest access credentials
            //highlight-next-line
            caps.AddAdditionalCapability("LT_USERNAME", "username"); //Enter the Username here
            //highlight-next-line
            caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");  //Enter the Access key here

            // Set URL of the application under test
            //highlight-next-line
            caps.AddAdditionalCapability("app", "APP_URL"); //Enter the App URL here.

            // Specify device and os_version
            caps.AddAdditionalCapability("deviceName", "iPhone 12"); //Change the device name here
            caps.AddAdditionalCapability("platformVersion", "15");
            caps.AddAdditionalCapability("platformName", "iOS");
            caps.AddAdditionalCapability("isRealMobile", true);
            caps.AddAdditionalCapability("network", false);

            // Specify the platformName
            //caps.PlatformName = "iOS";

            // Set other LambdaTest capabilities
            caps.AddAdditionalCapability("project", "First CSharp project");
            caps.AddAdditionalCapability("build", "CSharp iOS");
            caps.AddAdditionalCapability("name", "first_test");

            // Initialize the remote Webdriver using LambdaTest remote URL
            // and desired capabilities defined above
            IOSDriver<IOSElement> driver = new IOSDriver<IOSElement>(
                new Uri("https://mobile-hub.lambdatest.com/wd/hub"), caps);

            // Test case for the sample iOS app.
            // If you have uploaded your app, update the test case here.
            IOSElement color = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("color"))
            );
            color.Click();
            color.Click();

            IOSElement text = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("Text"))
            );
            text.Click();

            IOSElement toast = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("toast"))
            );
            toast.Click();

            IOSElement nf = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("notification"))
            );
            nf.Click();

            IOSElement gl = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("geoLocation"))
            );
            gl.Click();

            Thread.Sleep(5000);

            driver.Navigate().Back();

            IOSElement st = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("speedTest"))
            );
            st.Click();

            Thread.Sleep(5000);

            driver.Navigate().Back();

            IOSElement browser = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.AccessibilityId("Browser"))
            );
            browser.Click();

            IOSElement inputBox = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("url"))
            );
            inputBox.Click();


            driver.Quit();

        }
    }
}
```

</TabItem>

<TabItem value="android" label="Android" default>

```csharp title="csharp-appium-first.sln"
using System;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Appium.Android;
using System.Threading;

namespace csharp_appium {
  class Program {
    static void Main(string[] args) {
        AppiumOptions caps = new AppiumOptions();

        caps.AddAdditionalCapability("user", "########"); //Add the LT Username
        caps.AddAdditionalCapability("accessKey", "########"); //Add the LT Access key

        // Set URL of the application under test
        caps.AddAdditionalCapability("app", "###########"); //Add the App ID

        // Specify device and os_version
        caps.AddAdditionalCapability("deviceName", "Galaxy S21 Ultra 5G"); //Add the Device Details
        caps.AddAdditionalCapability("platformVersion", "11");
        caps.AddAdditionalCapability("platformName", "Android");
        caps.AddAdditionalCapability("isRealMobile", true);
        caps.AddAdditionalCapability("network", false);
        caps.AddAdditionalCapability("w3c", true);
        caps.AddAdditionalCapability("visual", true);
        caps.AddAdditionalCapability("video", true);
        caps.AddAdditionalCapability("project", "CSharp Sample Android");
        caps.AddAdditionalCapability("build", "CSharp Sample Android");
        caps.AddAdditionalCapability("name", "CSharp Sample Android");

        // Initialize the remote Webdriver using LambdaTest remote URL
        // and desired capabilities defined above
        AndroidDriver < AndroidElement > driver = new AndroidDriver < AndroidElement > (
          new Uri("https://mobile-hub.lambdatest.com/wd/hub"), caps);

        // Test case for the sample Android app.
        // If you have uploaded your app, update the test case here.
        AndroidElement color = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("color"))
        );
        color.Click();
        color.Click();

        AndroidElement text = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("Text"))
        );
        text.Click();

        AndroidElement toast = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("toast"))
        );
        toast.Click();

        AndroidElement nf = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("notification"))
        );
        nf.Click();

        AndroidElement gl = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("geoLocation"))
        );
        gl.Click();

        Thread.Sleep(5000);

        driver.Navigate().Back();

        AndroidElement st = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("speedTest"))
        );
        st.Click();

        Thread.Sleep(5000);

        driver.Navigate().Back();
```

</TabItem>
</Tabs>

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```csharp title="iOS(.ipa)"
  AppiumOptions caps = new AppiumOptions(); 
  caps.AddAdditionalCapability("LT_USERNAME", "username"); 
  caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
	caps.setCapability("platformName", "iOS");
	caps.setCapability("deviceName", "iPhone 13 Pro");
	caps.setCapability("isRealMobile", true);
	caps.setCapability("platformVersion","15.0");
	caps.setCapability("Visual", true);
	caps.setCapability("Console", true);
	caps.setCapability("Network", false);

```

</TabItem>
<TabItem value="android-config" label="Android" default>

```csharp title="Android(.apk)"
  AppiumOptions caps = new AppiumOptions(); 
  caps.AddAdditionalCapability("LT_USERNAME", "username"); 
  caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
	caps.setCapability("platformName", "Android");
	caps.setCapability("deviceName", "Galaxy S20");
	caps.setCapability("isRealMobile", true);
	caps.setCapability("platformVersion","11");
	caps.setCapability("Visual", true);
	caps.setCapability("Console", true);
	caps.setCapability("Network", false);

```

</TabItem>

</Tabs>

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

Click the **Play** icon to run the test.

<!-- <img loading="lazy" src={require('../assets/images/app-automation/csharp-2.png').default} alt="Image" width="1366" height="625" className="doc_img"/> -->

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
      CSharp With Appium</span>
    </li>
  </ul>
</nav>