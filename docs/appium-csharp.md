---
id: appium-csharp
title: Appium with C#
sidebar_label: C#
description: Now you can run your automation scripts using Appium with CSharp on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - csharp
  - testmu ai csharp
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-csharp/
site_name: TestMu AI
slug: appium-csharp/
canonical: https://www.testmuai.com/support/docs/appium-csharp/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "PHP With Appium",
          "item": `${BRAND_URL}/support/docs/appium-csharp/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/appium-csharp/"
    },
    "headline": "Appium with C#",
    "description": "Now you can run your automation scripts using Appium with CSharp on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
    "url": "https://www.testmuai.com/support/docs/appium-csharp/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "appium",
      "csharp",
      "testmu ai csharp"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; Install the MS Visual Studio 2013 or later version for C#. We recommend using the latest version..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ":::tip\n- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**\n:::\n\n<\/TabItem>\n\n<TabItem value=\"android\" label=\"Android\" default>\n\n```csharp title=\"csharp-appium-first.sln\"\nusing System;\nusing OpenQA.Selenium.Appium;\nusing OpenQA.Selenium.Support.UI;\nusing OpenQA.Selenium.Appium.Android;\nusing System.Threading;\n\nnamespace csharp_appium {\n  class Program {\n    static void Main(string[] args) {\n        AppiumOptions caps = new AppiumOptions();\n\n        caps.AddAdditionalCapability(\"user\", \"########\"); //Add the LT Username\n        caps.AddAdditionalCapability(\"accessKey\", \"########\"); //Add the LT Access key\n\n        // Set URL of the application under test\n        caps.AddAdditionalCapability(\"app\", \"###########\"); //Add the App ID\n\n        // Specify device and os_version\n        caps.AddAdditionalCapability(\"deviceName\", \"Galaxy S21 Ultra 5G\"); //Add the Device Details\n        caps.AddAdditionalCapability(\"platformVersion\", \"11\");\n        caps.AddAdditionalCapability(\"platformName\", \"Android\");\n        caps.AddAdditionalCapability(\"isRealMobile\", true);\n        caps.AddAdditionalCapability(\"network\", false);\n        caps.AddAdditionalCapability(\"w3c\", true);\n        caps.AddAdditionalCapability(\"visual\", true);\n        caps.AddAdditionalCapability(\"video\", true);\n        caps.AddAdditionalCapability(\"project\", \"CSharp Sample Android\");\n        caps.AddAdditionalCapability(\"build\", \"CSharp Sample Android\");\n        caps.AddAdditionalCapability(\"name\", \"CSharp Sample Android\");\n\n        // Initialize the remote Webdriver using LambdaTest remote URL\n        // and desired capabilities defined above\n        AndroidDriver < AndroidElement > driver = new AndroidDriver < AndroidElement > (\n          new Uri(\"https://mobile-hub.lambdatest.com/wd/hub\"), caps);\n\n        // Test case for the sample Android app.\n        // If you have uploaded your app, update the test case here.\n        AndroidElement color = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"color\"))\n        );\n        color.Click();\n        color.Click();\n\n        AndroidElement text = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"Text\"))\n        );\n        text.Click();\n\n        AndroidElement toast = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"toast\"))\n        );\n        toast.Click();\n\n        AndroidElement nf = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"notification\"))\n        );\n        nf.Click();\n\n        AndroidElement gl = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"geoLocation\"))\n        );\n        gl.Click();\n\n        Thread.Sleep(5000);\n\n        driver.Navigate().Back();\n\n        AndroidElement st = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(\n          SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id(\"speedTest\"))\n        );\n        st.Click();\n\n        Thread.Sleep(5000);\n\n        driver.Navigate().Back();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure the Test Capabilities (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value=\"android-config\" label=\"Android\" default>\n\n```csharp title=\"Android(.apk)\"\n  AppiumOptions caps = new AppiumOptions(); \n  caps.AddAdditionalCapability(\"LT_USERNAME\", \"username\"); \n  caps.AddAdditionalCapability(\"LT_ACCESSKEY\", \"accessKey\");\n\tcaps.setCapability(\"platformName\", \"Android\");\n\tcaps.setCapability(\"deviceName\", \"Galaxy S20\");\n\tcaps.setCapability(\"isRealMobile\", true);\n\tcaps.setCapability(\"platformVersion\",\"11\");\n\tcaps.setCapability(\"Visual\", true);\n\tcaps.setCapability(\"Console\", true);\n\tcaps.setCapability(\"Network\", false);\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The appium-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "appium-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Appium Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/appium-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/appium-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Try our Sample Repository",
      "description": "Now you can run your automation scripts using Appium with CSharp on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub Open the Android/iOS project using the file with a .sln extension.",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application given above has been provided here. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. You must set isRealMobile capability to False in the config file to run on Virtual Devices",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You must set isRealMobile capability to False in the config file to run on Virtual Devices You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Click the Play icon to run the test. Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-csharp/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to trigger a automation script of **CSharp** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install the MS Visual Studio 2013 or later version for C#. We recommend using the latest version.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-csharp" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

> Open the Android/iOS project using the file with a .sln extension.

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

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

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}
    </CodeBlock>
  </div>
</TabItem>

<TabItem value="powershell" label="App URL" default>

  <VerifiedTag value="Verified" />

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
:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

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

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

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

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Click the **Play** icon to run the test.

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Appium Agent Skill with TestMu AI
***

The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The appium-skill package includes:

<VerifiedTag value="Verified" />

```
appium-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Appium Agent Skill
***

Install a Appium Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/appium-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/appium-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only appium-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      CSharp With Appium
      </span>
    </li>
  </ul>
</nav>
