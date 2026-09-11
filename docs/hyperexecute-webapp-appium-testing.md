---
id: hyperexecute-webapp-appium-testing
title: Appium Testing On HyperExecute - WebApp
sidebar_label: Appium - WebApp
description: Now you can run your automation scripts using Selenium with Behave on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/hyperexecute-webapp-appium-testing/
site_name: TestMu AI
slug: hyperexecute-webapp-appium-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-webapp-appium-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Getting Started With Appium Testing on HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-webapp-appium-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-webapp-appium-testing/"
    },
    "headline": "Appium Testing On HyperExecute - WebApp",
    "description": "Now you can run your automation scripts using Selenium with Behave on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-webapp-appium-testing/",
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
    "dependencies": "Your TestMu AI Username and Access key; HyperExecute CLI in order to initiate a test execution Job .; Setup the Environmental Variable; Ensure you have Appium\u2019s Java client library installed.; HyperExecute YAML file which contains all the necessary instructions..",
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
        "name": "Steps to Run Your Test (Android Web App)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "package com.lambdatest;\n\nimport io.appium.java_client.MobileBy;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.concurrent.TimeUnit;\n\npublic class androidWeb {\n\n    String username = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\" //Enter the Username here\n            : System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\"  //Enter the Access key here\n            : System.getenv(\"LT_ACCESS_KEY\");\n    public static RemoteWebDriver driver = null;\n    public String gridURL = \"@mobile-hub.lambdatest.com/wd/hub\";\n    public String status = \"passed\";\n    @Before\n    public void setUp() throws Exception {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"build\", \"HYP Web RD Demo\");\n        capabilities.setCapability(\"name\", \"Java Android Web Test\");\n        capabilities.setCapability(\"platformName\", \"android\");\n        capabilities.setCapability(\"deviceName\", \"Galaxy. *,OnePlus. *,Pixel. *\"); //Enter the name of the device here\n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"region\", \"eu\");\n        // capabilities.setCapability(\"platformVersion\",\"9\");\n        capabilities.setCapability(\"deviceOrientation\", \"portrait\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",true);\n        capabilities.setCapability(\"visual\",true);\n        try\n        {\n            driver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accessKey + gridURL), capabilities);\n        }\n        catch (MalformedURLException e)\n        {\n            System.out.println(\"Invalid grid URL\");\n        } catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    @Test\n    public void testSimple() throws Exception\n    {\n        try\n        {\n            driver.get(\"https://lambdatest.github.io/sample-todo-app/\");\n            driver.findElement(By.name(\"li1\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li2\")).click();\n\n        System.out.println(\"Checking Box\");\n        driver.findElement(By.name(\"li3\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li4\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 6\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 7\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 8\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li1\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li3\")).click();\n\n            status=\"passed\";\n        }\n        catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n            status=\"failed\";\n        }\n    }\n    @After\n    public void tearDown() throws Exception\n    {\n        if (driver != null)\n        {\n            driver.executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "iOS Web App",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "package com.lambdatest;\n\nimport io.appium.java_client.MobileBy;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.concurrent.TimeUnit;\n\npublic class iosWeb {\n\n    String username = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\"   //Enter the Username here\n            : System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\"   //Enter the Access key here\n            : System.getenv(\"LT_ACCESS_KEY\");\n    public static RemoteWebDriver driver = null;\n    public String gridURL = \"@hub.lambdatest.com/wd/hub\";\n    public String status = \"passed\";\n    @Before\n    public void setUp() throws Exception {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"build\", \"HYP Web RD Demo\");\n        capabilities.setCapability(\"name\", \"Java JUnit iOS Web Test\");\n        capabilities.setCapability(\"platformName\", \"ios\");\n        capabilities.setCapability(\"deviceName\", \"iPhone.*\");\n        capabilities.setCapability(\"isRealMobile\", true);\n        // capabilities.setCapability(\"platformVersion\",\"14\");\n        capabilities.setCapability(\"deviceOrientation\", \"portrait\");\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"network\",true);\n        capabilities.setCapability(\"visual\",true);\n        \n        try\n        {\n            driver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accessKey + gridURL), capabilities);\n        }\n        catch (MalformedURLException e)\n        {\n            System.out.println(\"Invalid grid URL\");\n        } catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    @Test\n    public void testSimple() throws Exception\n    {\n        try\n        {\n            driver.manage().timeouts().setScriptTimeout(10, TimeUnit.SECONDS);\n           driver.get(\"https://lambdatest.github.io/sample-todo-app/\");\n            driver.findElement(By.name(\"li1\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li2\")).click();\n\n        System.out.println(\"Checking Box\");\n        driver.findElement(By.name(\"li3\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li4\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 6\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 7\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        driver.findElement(By.id(\"sampletodotext\")).sendKeys(\" List Item 8\");\n        driver.findElement(By.id(\"addbutton\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li1\")).click();\n\n        System.out.println(\"Checking Another Box\");\n        driver.findElement(By.name(\"li3\")).click();\n            status=\"passed\";\n        }\n        catch (Exception e)\n        {\n            System.out.println(e.getMessage());\n            status=\"failed\";\n        }\n    }\n    @After\n    public void tearDown() throws Exception\n    {\n        if (driver != null)\n        {\n            driver.executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample YAML 0.2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "version: \"0.1\"\nrunson: win\n\nautosplit: true\n\nconcurrency: 2\n\ntestDiscovery:\n    command: cat tests.txt\n    mode: static\n    type: raw\n\ntestRunnerCommand: mvn test -P $test\n\nframework:\n    name: appium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "More About Desired Capabilities (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "{\n    \"deviceName\": \"Galaxy Tab S4\",\n    \"platformName\": \"android\",\n    \"platformVersion\": \"10\",\n    \"visual\": True,\n    \"console\": True,\n    \"deviceOrientation\": \"PORTRAIT\",\n    \"build\": \"new-12\",\n    \"isRealMobile\": True,\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "More About Desired Capabilities (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "{\n    \"deviceName\": \"iPhone 12 Mini\",\n    \"platformName\": \"ios\",\n    \"platformVersion\": \"14\",\n    \"isRealMobile\": True,\n    \"visual\": True,\n    \"console\": True,\n    \"build\": \"lt-web-4\",\n    \"network\": True,\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
This page outlines how to execute your Appium tests on HyperExecute for WebApps using TestNG with YAML 0.2
> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Appium.

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the Environmental Variable
- Ensure you have Appium’s [Java client library](https://github.com/appium/java-client) installed.
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

<!-- > If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa). -->

### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

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

### Steps to Run Your Test
**Step 1:** Write your Automation Script in the client language of your choice from the ones supported by [Appium](/support/docs/appium-languages-and-frameworks/). An automation script for the sample applications have been provided below.

Here is a sample automation script in Java. Ensure to update the `username` and `accesskey` in the below code.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
  <TabItem value="android" label="Android Web App" default>

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class androidWeb {

    String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME" //Enter the Username here
            : System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"  //Enter the Access key here
            : System.getenv("LT_ACCESS_KEY");
    public static RemoteWebDriver driver = null;
    public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
    public String status = "passed";
    @Before
    public void setUp() throws Exception {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("build", "HYP Web RD Demo");
        capabilities.setCapability("name", "Java Android Web Test");
        capabilities.setCapability("platformName", "android");
        capabilities.setCapability("deviceName", "Galaxy. *,OnePlus. *,Pixel. *"); //Enter the name of the device here
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("region", "eu");
        // capabilities.setCapability("platformVersion","9");
        capabilities.setCapability("deviceOrientation", "portrait");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",true);
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
            driver.get("https://lambdatest.github.io/sample-todo-app/");
            driver.findElement(By.name("li1")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li2")).click();

        System.out.println("Checking Box");
        driver.findElement(By.name("li3")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li4")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 6");
        driver.findElement(By.id("addbutton")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 7");
        driver.findElement(By.id("addbutton")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 8");
        driver.findElement(By.id("addbutton")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li1")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li3")).click();

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

</TabItem>
<TabItem value="iOS" label="iOS Web App" default>

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class iosWeb {

    String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"   //Enter the Username here
            : System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"   //Enter the Access key here
            : System.getenv("LT_ACCESS_KEY");
    public static RemoteWebDriver driver = null;
    public String gridURL = "@hub.lambdatest.com/wd/hub";
    public String status = "passed";
    @Before
    public void setUp() throws Exception {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("build", "HYP Web RD Demo");
        capabilities.setCapability("name", "Java JUnit iOS Web Test");
        capabilities.setCapability("platformName", "ios");
        capabilities.setCapability("deviceName", "iPhone.*");
        capabilities.setCapability("isRealMobile", true);
        // capabilities.setCapability("platformVersion","14");
        capabilities.setCapability("deviceOrientation", "portrait");
        capabilities.setCapability("console",true);
        capabilities.setCapability("network",true);
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
            driver.manage().timeouts().setScriptTimeout(10, TimeUnit.SECONDS);
           driver.get("https://lambdatest.github.io/sample-todo-app/");
            driver.findElement(By.name("li1")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li2")).click();

        System.out.println("Checking Box");
        driver.findElement(By.name("li3")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li4")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 6");
        driver.findElement(By.id("addbutton")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 7");
        driver.findElement(By.id("addbutton")).click();

        driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 8");
        driver.findElement(By.id("addbutton")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li1")).click();

        System.out.println("Checking Another Box");
        driver.findElement(By.name("li3")).click();
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

</TabItem>
</Tabs>

**Step 2:** Execute Your Test Case. Debug and run your code.

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at <a href="https://www.testmuai.com/login/" onClick={CookieTrackingLogin}><BrandName /> Automation</a>.

## Sample YAML 0.2

<VerifiedTag value="Verified" />

```bash
version: "0.1"
runson: win

autosplit: true

concurrency: 2

testDiscovery:
    command: cat tests.txt
    mode: static
    type: raw

testRunnerCommand: mvn test -P $test

framework:
    name: appium
```

> The ```region``` parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:
- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

## More About Desired Capabilities
Sample Capabilities for both android and iOS web app mentioned below -

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
<TabItem value="androidCaps" label="Android" default>

```java
{
    "deviceName": "Galaxy Tab S4",
    "platformName": "android",
    "platformVersion": "10",
    "visual": True,
    "console": True,
    "deviceOrientation": "PORTRAIT",
    "build": "new-12",
    "isRealMobile": True,
}
```

</TabItem>
<TabItem value="iOSCaps" label="iOS" default>

```java
{
    "deviceName": "iPhone 12 Mini",
    "platformName": "ios",
    "platformVersion": "14",
    "isRealMobile": True,
    "visual": True,
    "console": True,
    "build": "lt-web-4",
    "network": True,
}
```

</TabItem>
</Tabs>

> Refer to the [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to understand more about it.

## Navigation in Automation Dashboard

Every test run on the HyperExecute has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/appium/hyperexecute-webapp-appium.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the Appium tests on HyperExecute for WebApps, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.



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
      Appium Testing 
      </span>
    </li>
  </ul>
</nav>
