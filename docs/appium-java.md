---
id: appium-java
title: Appium with Java
sidebar_label: Java
description: Automate Mobile Apps with ease using Java and Appium
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-java/
site_name: TestMu AI
slug: appium-java/
canonical: https://www.testmuai.com/support/docs/appium-java/
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
          "name": "WebDriverIO With Appium",
          "item": `${BRAND_URL}/support/docs/appium-java/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-java/"
    },
    "headline": "Appium with Java",
    "description": "Automate Mobile Apps with ease using Java and Appium",
    "url": "https://www.testmuai.com/support/docs/appium-java/",
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
      "java",
      "testmu ai java"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; You should have Java client library installed for Selenium and Appium.; Download and install Maven from the official website. For Linux/macOS you can use Homebrew package manager..",
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
        "text": "\n<\/TabItem>\n\n<TabItem value=\"ios\" label=\"iOS\" default>\n\n```java title=\"vanilla_ios.java\"\nimport io.appium.java_client.AppiumDriver;\nimport io.appium.java_client.MobileBy;\nimport io.appium.java_client.MobileElement;\nimport io.appium.java_client.ios.IOSDriver;\n\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\n\nimport java.net.URL;\n\npublic class vanilla_ios {\n    //highlight-next-line\n    public static String userName = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\"  //Add LambdaTest username here\n            : System.getenv(\"LT_USERNAME\");\n    //highlight-next-line\n    public static String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\" //Add LambdaTest accessKey here\n            : System.getenv(\"LT_ACCESS_KEY\");\n\n    public static final String URL = \"https://\" + userName + \":\" + accessKey + \"@mobile-hub.lambdatest.com/wd/hub\";\n    public static IOSDriver driver = null;\n\n    public static void main(String[] args) throws Exception {\n\n       try {\n            DesiredCapabilities caps = new DesiredCapabilities();\n            caps.setCapability(\"platformVersion\", \"15\");\n            caps.setCapability(\"deviceName\", \"iPhone 12\");\n            caps.setCapability(\"isRealMobile\", true);\n            //highlight-next-line\n            caps.setCapability(\"app\", \"APP_URL\"); //Enter your app url\n            caps.setCapability(\"platformName\", \"iOS\");\n            caps.setCapability(\"build\", \"Java Vanilla - iOS\");\n            caps.setCapability(\"name\", \"Sample Test Java\");\n            caps.setCapability(\"devicelog\", true);\n            caps.setCapability(\"network\", false);\n\n\n        driver = new IOSDriver(new URL(\"https://\" + userName + \":\" + accessKey + \"@beta-hub.lambdatest.com/wd/hub\"), caps);\n\n\n            Thread.sleep(2000);\n\n            //Changes color\n\n            driver.findElement(MobileBy.id(\"color\")).click();\n            Thread.sleep(1000);\n\n            //Back to black color\n            driver.navigate().back();\n\n            Thread.sleep(1000);\n\n            //Changes the text to proverbial\n            driver.findElement(MobileBy.id(\"Text\")).click();\n            Thread.sleep(1000);\n\n            //toast is visible\n            driver.findElement(MobileBy.id(\"toast\")).click();\n            Thread.sleep(1000);\n\n            //notification is visible\n            driver.findElement(MobileBy.id(\"notification\")).click();\n            Thread.sleep(2000);\n\n            //Open the geolocation page\n            driver.findElement(MobileBy.id(\"geoLocation\")).click();\n            Thread.sleep(4000);\n            driver.navigate().back();\n            Thread.sleep(1000);\n\n            //Takes to speed test page\n            driver.findElement(MobileBy.id(\"speedTest\")).click();\n            Thread.sleep(5000);\n            driver.navigate().back();\n            Thread.sleep(1000);\n\n            //Opens the browser\n            MobileElement browser = (MobileElement) driver.findElementByAccessibilityId(\"Browser\");\n            browser.click();\n            Thread.sleep(3000);\n\n           WebDriverWait el7 =  new WebDriverWait(driver, 30);\n           el7.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"url\")));\n           driver.findElementById(\"url\").sendKeys(\"https://www.testmuai.com/\");\n\n            //Clicks on the text box\n            WebDriverWait el = new WebDriverWait(driver,90);\n            MobileElement el4 = (MobileElement) driver.findElementByAccessibilityId(\"find\");\n            el.until(ExpectedConditions.elementToBeClickable(el4));\n            el4.click();\n            el4.sendKeys(\"Lambdatest\");\n\n            //((JavascriptExecutor) driver).executeScript(\"lambda-status=passed\");\n            driver.quit();\n\n        } catch (Exception t) {\n           System.out.println(t);\n           driver.quit();\n\n       }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The capabilities object in the sample code are defined as (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\n            capabilities.setCapability(\"deviceName\", \"Galaxy S20\");\n            capabilities.setCapability(\"platformVersion\", \"11\");\n            capabilities.setCapability(\"platformName\", \"Android\");\n            capabilities.setCapability(\"isRealMobile\", true);\n            //highlight-next-line\n            capabilities.setCapability(\"app\", \"YOUR_APP_URL\"); //Enter your app url\n            capabilities.setCapability(\"deviceOrientation\", \"PORTRAIT\");\n            capabilities.setCapability(\"build\", \"Java Vanilla - Android\");\n            capabilities.setCapability(\"name\", \"Sample Test Java\");\n            capabilities.setCapability(\"console\", true);\n            capabilities.setCapability(\"network\", false);\n            capabilities.setCapability(\"visual\", true);\n            capabilities.setCapability(\"devicelog\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "iOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities caps = new DesiredCapabilities();\n            caps.setCapability(\"platformVersion\", \"15\");\n            caps.setCapability(\"deviceName\", \"iPhone 12\");\n            caps.setCapability(\"isRealMobile\", true);\n            //highlight-next-line\n            caps.setCapability(\"app\", \"YOUR_APP_URL\"); //Enter your app url\n            caps.setCapability(\"platformName\", \"iOS\");\n            caps.setCapability(\"build\", \"Java Vanilla - iOS\");\n            caps.setCapability(\"name\", \"Sample Test Java\");\n            caps.setCapability(\"devicelog\", true);\n            caps.setCapability(\"network\", false);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn clean install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn test -P android"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn test -P ios"
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
      "description": "Automate Mobile Apps with ease using Java and Appium",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application given above has been provided here. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. You must set isRealMobile capability to False in the config file to run on Virtual Devices",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You must set isRealMobile capability to false in the config file to run on Virtual Devices You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Run the following commands to install the required dependencies: The tests can be executed in the terminal using the following command: Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-java/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to trigger a automation script of **Java** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Java client library](https://github.com/appium/java-client) installed for Selenium and Appium.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-java" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

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
<TabItem value="android" label="Android" default>

```java title="vanilla_android.java"

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;

public class vanilla_android {
    //highlight-next-line
    public static String userName = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"  //Add LambdaTest username here
            : System.getenv("LT_USERNAME");
    //highlight-next-line
    public static String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY" //Add LambdaTest accessKey here
            : System.getenv("LT_ACCESS_KEY");

    private static AppiumDriver driver;

    public static void main(String args[]) throws MalformedURLException, InterruptedException {

        try {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("deviceName", "Galaxy S20");
            capabilities.setCapability("platformVersion", "11");
            capabilities.setCapability("platformName", "Android");
            capabilities.setCapability("isRealMobile", true);
            //highlight-next-line
            capabilities.setCapability("app", "APP_URL");     //Enter your app url
            capabilities.setCapability("deviceOrientation", "PORTRAIT");
            capabilities.setCapability("build", "Java Vanilla - Android");
            capabilities.setCapability("name", "Sample Test Java");
            capabilities.setCapability("console", true);
            capabilities.setCapability("network", false);
            capabilities.setCapability("visual", true);
            capabilities.setCapability("devicelog", true);

            driver = new AppiumDriver(new URL("https://" +userName + ":" + accessKey + "@mobile-hub.lambdatest.com/wd/hub"), capabilities);

            MobileElement color = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/color"));
            color.click();

            MobileElement text = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/Text"));
            //Changes the text to proverbial
            text.click();

            //toast is visible
            MobileElement toast = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/toast"));
            toast.click();

            //notification is visible
            MobileElement notification = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/notification"));
            notification.click();

            //Open the geolocation page
            MobileElement geo = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/geoLocation"));
            geo.click();
            Thread.sleep(5000);

            //takes back to home page
            MobileElement el3 = (MobileElement) driver.findElementByAccessibilityId("Home");

            driver.navigate().back();
            Thread.sleep(2000);

            //Takes to speed test page
            MobileElement speedtest = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/speedTest"));
            speedtest.click();
            Thread.sleep(5000);

            driver.navigate().back();

            //Opens the browser
            MobileElement browser = (MobileElement) driver.findElement(MobileBy.AccessibilityId("Browser"));
            browser.click();

            MobileElement url = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/url"));
            url.sendKeys("https://www.testmuai.com");
            MobileElement find = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/find"));
            find.click();

        } catch (AssertionError a) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=failed");
            a.printStackTrace();
        }
// The driver.quit statement is required, otherwise the test continues to execute, leading to a timeout.
        driver.quit();
    }
    }
```

</TabItem>

<TabItem value="ios" label="iOS" default>

```java title="vanilla_ios.java"
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.URL;

public class vanilla_ios {
    //highlight-next-line
    public static String userName = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"  //Add LambdaTest username here
            : System.getenv("LT_USERNAME");
    //highlight-next-line
    public static String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY" //Add LambdaTest accessKey here
            : System.getenv("LT_ACCESS_KEY");

    public static final String URL = "https://" + userName + ":" + accessKey + "@mobile-hub.lambdatest.com/wd/hub";
    public static IOSDriver driver = null;

    public static void main(String[] args) throws Exception {

       try {
            DesiredCapabilities caps = new DesiredCapabilities();
            caps.setCapability("platformVersion", "15");
            caps.setCapability("deviceName", "iPhone 12");
            caps.setCapability("isRealMobile", true);
            //highlight-next-line
            caps.setCapability("app", "APP_URL"); //Enter your app url
            caps.setCapability("platformName", "iOS");
            caps.setCapability("build", "Java Vanilla - iOS");
            caps.setCapability("name", "Sample Test Java");
            caps.setCapability("devicelog", true);
            caps.setCapability("network", false);


        driver = new IOSDriver(new URL("https://" + userName + ":" + accessKey + "@beta-hub.lambdatest.com/wd/hub"), caps);


            Thread.sleep(2000);

            //Changes color

            driver.findElement(MobileBy.id("color")).click();
            Thread.sleep(1000);

            //Back to black color
            driver.navigate().back();

            Thread.sleep(1000);

            //Changes the text to proverbial
            driver.findElement(MobileBy.id("Text")).click();
            Thread.sleep(1000);

            //toast is visible
            driver.findElement(MobileBy.id("toast")).click();
            Thread.sleep(1000);

            //notification is visible
            driver.findElement(MobileBy.id("notification")).click();
            Thread.sleep(2000);

            //Open the geolocation page
            driver.findElement(MobileBy.id("geoLocation")).click();
            Thread.sleep(4000);
            driver.navigate().back();
            Thread.sleep(1000);

            //Takes to speed test page
            driver.findElement(MobileBy.id("speedTest")).click();
            Thread.sleep(5000);
            driver.navigate().back();
            Thread.sleep(1000);

            //Opens the browser
            MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
            browser.click();
            Thread.sleep(3000);

           WebDriverWait el7 =  new WebDriverWait(driver, 30);
           el7.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url")));
           driver.findElementById("url").sendKeys("https://www.testmuai.com/");

            //Clicks on the text box
            WebDriverWait el = new WebDriverWait(driver,90);
            MobileElement el4 = (MobileElement) driver.findElementByAccessibilityId("find");
            el.until(ExpectedConditions.elementToBeClickable(el4));
            el4.click();
            el4.sendKeys("Lambdatest");

            //((JavascriptExecutor) driver).executeScript("lambda-status=passed");
            driver.quit();

        } catch (Exception t) {
           System.out.println(t);
           driver.quit();

       }
    }
}
```

</TabItem>

</Tabs>

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">
<TabItem value="android-config" label="Android" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("deviceName", "Galaxy S20");
            capabilities.setCapability("platformVersion", "11");
            capabilities.setCapability("platformName", "Android");
            capabilities.setCapability("isRealMobile", true);
            //highlight-next-line
            capabilities.setCapability("app", "YOUR_APP_URL"); //Enter your app url
            capabilities.setCapability("deviceOrientation", "PORTRAIT");
            capabilities.setCapability("build", "Java Vanilla - Android");
            capabilities.setCapability("name", "Sample Test Java");
            capabilities.setCapability("console", true);
            capabilities.setCapability("network", false);
            capabilities.setCapability("visual", true);
            capabilities.setCapability("devicelog", true);
```

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

<TabItem value="ios-config" label="iOS" default>

```java
DesiredCapabilities caps = new DesiredCapabilities();
            caps.setCapability("platformVersion", "15");
            caps.setCapability("deviceName", "iPhone 12");
            caps.setCapability("isRealMobile", true);
            //highlight-next-line
            caps.setCapability("app", "YOUR_APP_URL"); //Enter your app url
            caps.setCapability("platformName", "iOS");
            caps.setCapability("build", "Java Vanilla - iOS");
            caps.setCapability("name", "Sample Test Java");
            caps.setCapability("devicelog", true);
            caps.setCapability("network", false);
```

</TabItem>
</Tabs>

:::note

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `false` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

  <VerifiedTag value="Verified" />

  ```bash
  mvn clean install
  ```

- The tests can be executed in the terminal using the following command:

  <VerifiedTag value="Verified" />

  <Tabs className="docs__val">
  <TabItem value="android-exec" label="Android" default>

  ```bash
  mvn test -P android
  ```
  </TabItem>

  <TabItem value="ios-exec" label="iOS" default>

  ```bash
  mvn test -P ios
  ```

  </TabItem>
  </Tabs>

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
      <span className="breadcrumbs__link">Java With Appium</span>
    </li>
  </ul>
</nav>
