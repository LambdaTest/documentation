---
id: appium-java-junit
title: Appium With JUnit
sidebar_label: JUnit
description: Automate Mobile App using Java Appium Testing with JUnit Framework
keywords:
  - appium
  - java
  - junit
  - testmu ai java junit
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-java-junit/
site_name: TestMu AI
slug: appium-java-junit/
canonical: https://www.testmuai.com/support/docs/appium-java-junit/
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
          "item": `${BRAND_URL}/support/docs/appium-java-junit/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-java-junit/"
    },
    "headline": "Appium With JUnit",
    "description": "Automate Mobile App using Java Appium Testing with JUnit Framework",
    "url": "https://www.testmuai.com/support/docs/appium-java-junit/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "appium",
      "java",
      "junit"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; You should have Java client library installed for Appium.; Download and install Maven from the official website. For Linux/macOS you can use Homebrew package manager..",
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
        "name": "Step 4: Update your Automation Script (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "package com.lambdatest;\n\nimport io.appium.java_client.MobileBy;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\nimport java.net.MalformedURLException;\nimport java.net.URL;\n\npublic class android {\n    String username = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\" //Enter the Username here\n            : System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\"  //Enter the accessKey here\n            : System.getenv(\"LT_ACCESS_KEY\");\n    public static RemoteWebDriver driver = null;\n    public String gridURL = \"@mobile-hub.lambdatest.com/wd/hub\";\n    public String status = \"passed\";\n    @Before\n    public void setUp() throws Exception {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"build\", \"JUNIT Native App automation\");\n        capabilities.setCapability(\"name\", \"Java JUnit Android Pixel 6\");\n        capabilities.setCapability(\"platformName\", \"android\");\n        capabilities.setCapability(\"deviceName\", \"Pixel 6\"); \n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"platformVersion\",\"12\");\n        // highlight-next-line\n        capabilities.setCapability(\"app\",\"APP_URL\"); //Enter your app (.apk) url\n        capabilities.setCapability(\"deviceOrientation\", \"PORTRAIT\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",false);\n        capabilities.setCapability(\"visual\",true);\n        try\n        {\n            driver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accessKey + gridURL), capabilities);\n        }\n        catch (MalformedURLException e)\n        {\n            System.out.println(\"Invalid grid URL\");\n        } catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    @Test\n    public void testSimple() throws Exception\n    {\n        try\n        {\n            WebDriverWait wait = new WebDriverWait(driver, 30);\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"color\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"geoLocation\"))).click();;\n            Thread.sleep(5000);\n            driver.navigate().back();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"Text\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"notification\"))).click();;\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"toast\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(By.id(\"Browser\"))).click();;\n            Thread.sleep(10000);\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"url\"))).sendKeys(\"https://www.testmuai.com/\");\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"find\"))).click();\n            Thread.sleep(5000);\n            driver.navigate().back();\n\n            status=\"passed\";\n        }\n            catch (Exception e)\n             {\n                System.out.println(e.getMessage());\n                status=\"failed\";\n             }\n    }\n    @After\n    public void tearDown() throws Exception\n    {\n        if (driver != null)\n        {\n            driver.executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "iOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "package com.lambdatest;\n\nimport io.appium.java_client.MobileBy;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\nimport java.net.MalformedURLException;\nimport java.net.URL;\n\npublic class ios {\n    String username = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\"   //Add username here\n            : System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\"   //Add accessKey here\n            : System.getenv(\"LT_ACCESS_KEY\");\n    public static RemoteWebDriver driver = null;\n    public String gridURL = \"@mobile-hub.lambdatest.com/wd/hub\";\n    public String status = \"passed\";\n    @Before\n    public void setUp() throws Exception {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"build\", \"JUNIT Native App automation\");\n        capabilities.setCapability(\"name\", \"Java JUnit iOS iPhone 12\");\n        capabilities.setCapability(\"platformName\", \"ios\");\n        capabilities.setCapability(\"deviceName\", \"iPhone 12\");\n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"platformVersion\",\"15\");\n        // highlight-next-line\n        capabilities.setCapability(\"app\",\"APP_URL\"); //Enter your app (.ipa) url\n        capabilities.setCapability(\"deviceOrientation\", \"PORTRAIT\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",false);\n        capabilities.setCapability(\"visual\",true);\n        try\n        {\n            driver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accessKey + gridURL), capabilities);\n        }\n        catch (MalformedURLException e)\n        {\n            System.out.println(\"Invalid grid URL\");\n        } catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    @Test\n    public void testSimple() throws Exception\n    {\n        try\n        {\n            WebDriverWait wait = new WebDriverWait(driver, 30);\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"color\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"geoLocation\"))).click();\n            Thread.sleep(5000);\n            driver.navigate().back();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"Text\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"notification\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"toast\"))).click();\n\n            wait.until(ExpectedConditions.elementToBeClickable(By.id(\"Browser\"))).click();\n            Thread.sleep(10000);\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"url\"))).sendKeys(\"https://www.testmuai.com/\");;\n\n            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id(\"find\"))).click();\n            Thread.sleep(5000);\n            driver.navigate().back();\n\n            status=\"passed\";\n        }\n            catch (Exception e)\n             {\n                System.out.println(e.getMessage());\n                status=\"failed\";\n             }\n    }\n    @After\n    public void tearDown() throws Exception\n    {\n        if (driver != null)\n        {\n            driver.executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The capabilities object in the sample code are defined as (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\n        capabilities.setCapability(\"build\", \"JUNIT Native App automation\");\n        capabilities.setCapability(\"name\", \"Java JUnit Android Pixel 6\");\n        capabilities.setCapability(\"platformName\", \"android\");\n        capabilities.setCapability(\"deviceName\", \"Pixel 6\");\n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"platformVersion\",\"12\");\n        // highlight-next-line\n        capabilities.setCapability(\"app\",\"YOUR_APP_URL\");  //Enter your app (.apk) url\n        capabilities.setCapability(\"deviceOrientation\", \"PORTRAIT\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",false);\n        capabilities.setCapability(\"visual\",true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure the Test Capabilities (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\n        capabilities.setCapability(\"build\", \"JUNIT Native App automation\");\n        capabilities.setCapability(\"name\", \"Java JUnit iOS iPhone 12\");\n        capabilities.setCapability(\"platformName\", \"ios\");\n        capabilities.setCapability(\"deviceName\", \"iPhone 12\");\n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"platformVersion\",\"15\");\n        // highlight-next-line\n        capabilities.setCapability(\"app\",\"YOUR_APP_URL\");  //Enter your app (.ipa) url\n        capabilities.setCapability(\"deviceOrientation\", \"PORTRAIT\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",false);\n        capabilities.setCapability(\"visual\",true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn clean"
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
        "name": "The junit-5-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "junit-5-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a JUnit 5 Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/junit-5-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/junit-5-skill .cursor/skills/"
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
      "description": "Automate Mobile App using Java Appium Testing with JUnit Framework",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application given above has been provided here. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. You must set isRealMobile capability to False in the config file to run on Virtual Devices You must set isRealMobile capability to False in the config file to run on Virtual Devices",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Run the following commands to install the required dependencies: The tests can be executed in the terminal using the following command: Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-java-junit/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to trigger a automation script of **JUnit** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Java client library](https://github.com/appium/java-client) installed for Appium.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/lambdatest/LT-appium-java-junit" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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

<Tabs className="docs__val">
<TabItem value="android" label="Android" default>

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.MalformedURLException;
import java.net.URL;

public class android {
    String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME" //Enter the Username here
            : System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"  //Enter the accessKey here
            : System.getenv("LT_ACCESS_KEY");
    public static RemoteWebDriver driver = null;
    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
    public String status = "passed";
    @Before
    public void setUp() throws Exception {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("build", "JUNIT Native App automation");
        capabilities.setCapability("name", "Java JUnit Android Pixel 6");
        capabilities.setCapability("platformName", "android");
        capabilities.setCapability("deviceName", "Pixel 6"); 
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("platformVersion","12");
        // highlight-next-line
        capabilities.setCapability("app","APP_URL"); //Enter your app (.apk) url
        capabilities.setCapability("deviceOrientation", "PORTRAIT");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",false);
        capabilities.setCapability("visual",true);
        try
        {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + gridURL), capabilities);
        }
        catch (MalformedURLException e)
        {
            System.out.println("Invalid grid URL");
        } catch (Exception e)
        {
            System.out.println(e.getMessage());
        }
    }

    @Test
    public void testSimple() throws Exception
    {
        try
        {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("color"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("geoLocation"))).click();;
            Thread.sleep(5000);
            driver.navigate().back();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("Text"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("notification"))).click();;

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("toast"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(By.id("Browser"))).click();;
            Thread.sleep(10000);

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url"))).sendKeys("https://www.testmuai.com/");

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("find"))).click();
            Thread.sleep(5000);
            driver.navigate().back();

            status="passed";
        }
            catch (Exception e)
             {
                System.out.println(e.getMessage());
                status="failed";
             }
    }
    @After
    public void tearDown() throws Exception
    {
        if (driver != null)
        {
            driver.executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

<TabItem value="ios" label="iOS" default>

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.MalformedURLException;
import java.net.URL;

public class ios {
    String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"   //Add username here
            : System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"   //Add accessKey here
            : System.getenv("LT_ACCESS_KEY");
    public static RemoteWebDriver driver = null;
    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
    public String status = "passed";
    @Before
    public void setUp() throws Exception {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("build", "JUNIT Native App automation");
        capabilities.setCapability("name", "Java JUnit iOS iPhone 12");
        capabilities.setCapability("platformName", "ios");
        capabilities.setCapability("deviceName", "iPhone 12");
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("platformVersion","15");
        // highlight-next-line
        capabilities.setCapability("app","APP_URL"); //Enter your app (.ipa) url
        capabilities.setCapability("deviceOrientation", "PORTRAIT");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",false);
        capabilities.setCapability("visual",true);
        try
        {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + gridURL), capabilities);
        }
        catch (MalformedURLException e)
        {
            System.out.println("Invalid grid URL");
        } catch (Exception e)
        {
            System.out.println(e.getMessage());
        }
    }

    @Test
    public void testSimple() throws Exception
    {
        try
        {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("color"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("geoLocation"))).click();
            Thread.sleep(5000);
            driver.navigate().back();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("Text"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("notification"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("toast"))).click();

            wait.until(ExpectedConditions.elementToBeClickable(By.id("Browser"))).click();
            Thread.sleep(10000);

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url"))).sendKeys("https://www.testmuai.com/");;

            wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("find"))).click();
            Thread.sleep(5000);
            driver.navigate().back();

            status="passed";
        }
            catch (Exception e)
             {
                System.out.println(e.getMessage());
                status="failed";
             }
    }
    @After
    public void tearDown() throws Exception
    {
        if (driver != null)
        {
            driver.executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

</Tabs>

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">
<TabItem value="android-config" label="Android" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("build", "JUNIT Native App automation");
        capabilities.setCapability("name", "Java JUnit Android Pixel 6");
        capabilities.setCapability("platformName", "android");
        capabilities.setCapability("deviceName", "Pixel 6");
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("platformVersion","12");
        // highlight-next-line
        capabilities.setCapability("app","YOUR_APP_URL");  //Enter your app (.apk) url
        capabilities.setCapability("deviceOrientation", "PORTRAIT");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",false);
        capabilities.setCapability("visual",true);
```

</TabItem>

<TabItem value="ios-config" label="iOS" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("build", "JUNIT Native App automation");
        capabilities.setCapability("name", "Java JUnit iOS iPhone 12");
        capabilities.setCapability("platformName", "ios");
        capabilities.setCapability("deviceName", "iPhone 12");
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("platformVersion","15");
        // highlight-next-line
        capabilities.setCapability("app","YOUR_APP_URL");  //Enter your app (.ipa) url
        capabilities.setCapability("deviceOrientation", "PORTRAIT");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",false);
        capabilities.setCapability("visual",true);
```

</TabItem>
</Tabs>


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

:::info
- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### Step 6: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

  ```bash
  mvn clean
  ```

- The tests can be executed in the terminal using the following command:

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

## Using the JUnit 5 Agent Skill with TestMu AI
***

The [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The junit-5-skill package includes:

```
junit-5-skill/
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


### Installing JUnit 5 Agent Skill
***

Install a JUnit 5 Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/junit-5-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/junit-5-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only junit-5-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Additional Links

---

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)


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
      JUnit With Appium
      </span>
    </li>
  </ul>
</nav>
