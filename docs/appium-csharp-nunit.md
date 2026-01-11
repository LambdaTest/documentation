---
id: appium-csharp-nunit
title:  Appium with NUnit
sidebar_label: NUnit
description: Now you can run your Appium automation scripts using NUnit on TestMu AI Real Device Cloud Platform of 3000+ real mobile devices.
keywords:
  - appium
  - csharp
  - c#
  - testmu ai java
  - framework on testmu ai
  - NUNit
  - app testing
  - real devices
url: https://www.testmu.ai/support/docs/appium-csharp-nunit
site_name: LambdaTest
slug: appium-csharp-nunit
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
          "name": "NUnit With Appium",
          "item": `${BRAND_URL}/support/docs/appium-csharp-nunit/`
        }]
      })
    }}
></script>

In this documentation, you will learn how to trigger a automation script of **NUnit** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Install the MS Visual Studio 2013 or later version for C#. We recommend using the latest version.
- Install the framework [NUnit3.0](https://nunit.org/), and [NuGet](https://www.nuget.org/downloads) plugin for Visual Studio and add the NuGet CLI executable installed in your path.
- Access to an Android app (.apk or .aab file) or an iOS app (.ipa file).

## Install and Setup the Dependencies

- Install the NuGet packages for the project:
```bash
nuget.exe install ..\NUnitSelenium\packages.config
```
- Clean and rebuild the project
```bash
nmake clean build
```

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-csharp-nunit" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

> Open the Android/iOS project using the file with a .sln extension.

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

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

### Step 4: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```csharp title="NUnitAppiumTests.cs"
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;

using NUnit.Framework;
using System.Threading;
using System.Collections.Generic;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Appium.Android;
using OpenQA.Selenium.Appium.iOS;
using OpenQA.Selenium.Support.UI;

namespace NUnitSelenium
{
    //-------------------Running two parallel test cases----------------------------
    //highlight-next-line
    [TestFixture("OnePlus 6", "8", "Android", "APP_URL")]    // Android Testing 
    //highlight-next-line
    [TestFixture("iPhone 11", "14", "iOS", "APP_URL")]      // iOS testing
    [Parallelizable(ParallelScope.Fixtures)]
    public class NUnitSeleniumSample
    {
        //--------------------We can initialize username and access Key with hub url to authenticate our test script-------------------------------------
        public static string LT_USERNAME = Environment.GetEnvironmentVariable("LT_USERNAME") ==null ? "your username" : Environment.GetEnvironmentVariable("LT_USERNAME");
        public static string LT_ACCESS_KEY = Environment.GetEnvironmentVariable("LT_ACCESS_KEY") == null ? "your accessKey" : Environment.GetEnvironmentVariable("LT_ACCESS_KEY");
        public static bool tunnel = Boolean.Parse(Environment.GetEnvironmentVariable("LT_TUNNEL")== null ? "false" : Environment.GetEnvironmentVariable("LT_TUNNEL"));       
        public static string build = Environment.GetEnvironmentVariable("LT_BUILD") == null ? "your build name" : Environment.GetEnvironmentVariable("LT_BUILD");
        public static string seleniumUri = "https://mobile-hub.lambdatest.com:443/wd/hub";

        //-------------------------Initialization of Driver--------------------------
        AndroidDriver<AndroidElement> driver;

        // Initialization some parameter 
        private String deviceName;
        private String platformVersion;
        private String platformName;
        private String app;

        public NUnitSeleniumSample(String deviceName, String platformVersion, String platformName, String app)
        {
            this.deviceName = deviceName;
            this.platformVersion = platformVersion;
            this.platformName = platformName;
            this.app = app;
        }

        [SetUp]
        public void Init()
        {
            //-----------------------------------Create instance for passing capabilities-----------------------------------------------------------------
            AppiumOptions capabilities = new AppiumOptions();
            //highlight-next-line
            capabilities.AddAdditionalCapability("user", "LT_USERNAME");   //Add LambdaTest username here
            //highlight-next-line
            capabilities.AddAdditionalCapability("accessKey", "LT_ACCESS_KEY");   //Add LambdaTest accessKey here
            capabilities.AddAdditionalCapability("app",app);
            capabilities.AddAdditionalCapability("deviceName", deviceName);
            capabilities.AddAdditionalCapability("platformVersion", platformVersion);
            capabilities.AddAdditionalCapability("platformName", platformName);
            capabilities.AddAdditionalCapability("build", "Csharp NUnit");
            capabilities.AddAdditionalCapability("name", "NUnit Test");
            capabilities.AddAdditionalCapability("isRealMobile", true);

            driver = new AndroidDriver<AndroidElement> (new Uri(seleniumUri), capabilities, TimeSpan.FromSeconds(600));
            
           // Console.Out.WriteLine(driver);
            Console.Out.WriteLine("On Which Device/Platform test is running:"+deviceName+" "+platformVersion+" "+platformName);
            
        }

        [Test]
        public void Todotest()
        {
            {
                //----------------------Text Color Changes---------------------------------
                Console.WriteLine("1.Text Color Changes");
                AndroidElement searchElement = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(20)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("color"))
             );
                System.Threading.Thread.Sleep(1000);
                searchElement.Click();
                System.Threading.Thread.Sleep(1000);
                searchElement.Click();

                System.Threading.Thread.Sleep(1000);

                //----------------------Text Changes by clicking a button---------------------------------
                Console.WriteLine("2.Text Changes by clicking a button");

                AndroidElement changeelement = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(10)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("Text"))
             );
                changeelement.Click();

                System.Threading.Thread.Sleep(1000);

                //----------------------Toast---------------------------------
                Console.WriteLine("3.Toast");

                AndroidElement toast = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(10)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("toast"))
             );
                toast.Click();

                System.Threading.Thread.Sleep(1000);

                //----------------------Notification By clicking a button---------------------------------
                Console.WriteLine("4.Notification Button clicked");

                AndroidElement Notification = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(10)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("notification"))
             );
                Notification.Click();
                System.Threading.Thread.Sleep(2000);

                //----------------------Geolocation button---------------------------------
                Console.WriteLine("5.Geolocation");

                AndroidElement geolocation = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(10)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("geoLocation"))
             );
                geolocation.Click();
                System.Threading.Thread.Sleep(4000);
                driver.PressKeyCode(AndroidKeyCode.Back);
                System.Threading.Thread.Sleep(1000);

                //----------------------Speed Test Button---------------------------------
                Console.WriteLine("6.Speed Test Button Clicked");

                AndroidElement speed = (AndroidElement)new WebDriverWait(
                 driver, TimeSpan.FromSeconds(10)).Until(
                 SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                    MobileBy.Id("speedTest"))
             );
                speed.Click();
                System.Threading.Thread.Sleep(5000);
                driver.PressKeyCode(AndroidKeyCode.Back);
                System.Threading.Thread.Sleep(1000);


                //----------------------Browser Button---------------------------------
                //   Console.WriteLine("Browser Button Clicked");

                AndroidElement BROWSER = (AndroidElement)new WebDriverWait(
                  driver, TimeSpan.FromSeconds(30)).Until(
                  SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                     MobileBy.XPath("//android.widget.FrameLayout[@content-desc=\"Browser\"]/android.widget.FrameLayout/android.widget.ImageView"))
                  
              );
                BROWSER.Click();


                AndroidElement url = (AndroidElement)new WebDriverWait(
                driver, TimeSpan.FromSeconds(10)).Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
                   MobileBy.Id("url"))
            );

                url.Click();

                url.SendKeys("www.lambdatest.com");

                System.Threading.Thread.Sleep(1000);

                driver.PressKeyCode(AndroidKeyCode.Back);

                System.Threading.Thread.Sleep(3000);
            }
        }

        [TearDown]
        public void Cleanup()

        {
            
            bool passed = TestContext.CurrentContext.Result.Outcome.Status == NUnit.Framework.Interfaces.TestStatus.Passed;
            try
            {
                //-----------------Marking Test status passed or failed -----------------------------------------
                ((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=" + (passed ? "passed" : "failed"));
               
            }
            finally
            {
                //---------------------Quit the session-----------------------
                
                driver.Quit();
            }
        }
    }
}

```
:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```csharp
AppiumOptions capabilities = new AppiumOptions();
capabilities.AddAdditionalCapability("user", "LT_USERNAME");   //Add LambdaTest username here
capabilities.AddAdditionalCapability("accessKey", "LT_ACCESS_KEY");   //Add LambdaTest accessKey here
capabilities.AddAdditionalCapability("app",app);
capabilities.AddAdditionalCapability("deviceName", deviceName);
capabilities.AddAdditionalCapability("platformVersion", platformVersion);
capabilities.AddAdditionalCapability("platformName", platformName);
capabilities.AddAdditionalCapability("build", "Csharp NUnit");
capabilities.AddAdditionalCapability("name", "NUnit Test");
capabilities.AddAdditionalCapability("isRealMobile", true);
```

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

Run the following command in your project directory to execute your build and run the tests parallelly.

```bash
nmake all
```

OR

Go to **Build menu** in Visual Studio Code menu bar and click on **Build Solution**. After the solution is built navigate built navigate to **Test menu** and click on **Test All** to execute the tests.

:::caution Warning
Make sure that **DotNetSeleniumExtras.WaitHelpers** in the NuGet packages which you can check from **Project Menu -> Manage NuGet Packages**.
:::

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
      Java With Appium
      </span>
    </li>
  </ul>
</nav>
