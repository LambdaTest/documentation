---
id: appium-java-cucumber
title: Appium With Cucumber for Java 
sidebar_label: Cucumber
description: Test your Appium automation scripts using Java Cucumber on TestMu AI Real Device Cloud Platform of 3000+ real mobile devices.
keywords:
  - appium
  - java
  - cucumber
  - testmu ai java
  - framework on testmu ai
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-java-cucumber/
site_name: TestMu AI
slug: appium-java-cucumber/
canonical: https://www.testmuai.com/support/docs/appium-java-cucumber/
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
          "item": `${BRAND_URL}/support/docs/appium-java-cucumber/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-java-cucumber/"
    },
    "headline": "Appium With Cucumber for Java",
    "description": "Test your Appium automation scripts using Java Cucumber on TestMu AI Real Device Cloud Platform of 3000+ real mobile devices.",
    "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/",
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
      "cucumber"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; You should have Java client library installed for Selenium and Appium.; Install the latest Java development environment i.e. JDK 8 or higher. We recommend using the < JDK 11 version.; Download and install Maven from the official website. For Linux/macOS you can use Homebrew package manager..",
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
        "text": "\n:::tip\n- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**\n:::\n\n### Step 5: Configure the Test Capabilities\n\nYou can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.\n\nThe capabilities object in the sample code are defined as:\n\n<Tabs className=\"docs__val\">\n<TabItem value=\"single-config\" label=\"Single\" default>\n\n```java\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n<suite name=\"BDD Test Suite\" verbose=\"1\" parallel=\"tests\"\n\tthread-count=\"3\" >\n    <test name=\"ANDROIDTEST\" annotations=\"JDK\"\n\t\tpreserve-order=\"true\">\n        <parameter name=\"deviceName\" value=\".*\"/>\n        <parameter name=\"platformVersion\" value=\"12\"/>\n        <parameter name=\"platformName\" value=\"Android\"/>\n        <classes>\n            <class name=\"MyRunner.TestRunner\" />\n        <\/classes>\n    <\/test> <!-- Test -->\n<\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure the Test Capabilities (Parallel)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n<suite name=\"BDD Test Suite\" verbose=\"1\" parallel=\"tests\"\n       thread-count=\"2\">\n    <test name=\"Galaxy\" annotations=\"JDK\"\n          preserve-order=\"true\">\n        <parameter name=\"deviceName\" value=\"Galaxy.*\"/>\n        <parameter name=\"platformVersion\" value=\"11\"/>\n        <parameter name=\"platformName\" value=\"Android\"/>\n        <classes>\n            <class name=\"MyRunner.TestRunner\"/>\n        <\/classes>\n    <\/test> <!-- Test -->\n    <test name=\"OnePlus\" annotations=\"JDK\"\n          preserve-order=\"true\">\n        <parameter name=\"deviceName\" value=\"Pixel.*\"/>\n        <parameter name=\"platformVersion\" value=\"12\"/>\n        <parameter name=\"platformName\" value=\"Android\"/>\n        <classes>\n            <class name=\"MyRunner.TestRunner\"/>\n        <\/classes>\n    <\/test> <!-- Test -->\n\n<\/suite>"
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
        "name": "Step 6: Execute and Monitor your Tests (Single)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn test -D suite=single.xml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (Parallel)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  mvn test -D suite=parallel.xml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The cucumber-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "cucumber-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Cucumber Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/cucumber-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/cucumber-skill .cursor/skills/"
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
      "description": "Test your Appium automation scripts using Java Cucumber on TestMu AI Real Device Cloud Platform of 3000+ real mobile devices.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application given above has been provided here. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. You must set isRealMobile capability to False in the config file to run on Virtual Devices",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Run the following commands to install the required dependencies: The tests can be executed in the terminal using the following command: Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-java-cucumber/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>




In this documentation, you will learn how to trigger a automation script of **Cucumber** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Java client library](https://github.com/appium/java-client) installed for Selenium and Appium.
- Install the latest Java development environment i.e. JDK 8 or higher. We recommend using the < JDK 11 version.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-java-cucumber" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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

```java package MyRunner;
import java.net.URL;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.TestNGCucumberRunner;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.AppiumDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;

import org.openqa.selenium.JavascriptExecutor;
import java.net.MalformedURLException;


@CucumberOptions(
        features = "src/main/java/Features/todo.feature",
        glue = {"stepDefinitions"},
        plugin = "json:target/cucumber-reports/CucumberTestReport.json")

public class TestRunner extends AbstractTestNGCucumberTests {
    
    private TestNGCucumberRunner testNGCucumberRunner;
  
    public static RemoteWebDriver connection;
    
    @BeforeClass(alwaysRun = true)
    public void setUpCucumber() {
         testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
    
    @BeforeMethod(alwaysRun = true)
    @Parameters({ "deviceName", "platformVersion", "platformName" })
    public void setUpClass(String deviceName, String platformVersion, String platformName) throws Exception {

            String username = System.getenv("LT_USERNAME") == null ? "YOUR_LT_USERNAME" : System.getenv("LT_USERNAME");      //Enter your LambdaTest username at the place of YOUR_LT_USERNAME 
            String accesskey = System.getenv("LT_ACCESS_KEY") == null ? "YOUR_LT_ACCESSKEY" : System.getenv("LT_ACCESS_KEY");     //Enter your LambdaTest accessKey at the place of YOUR_LT_ACCESSKEY

            DesiredCapabilities capability = new DesiredCapabilities();         


            capability.setCapability("platformName", platformName);
            capability.setCapability("deviceName", deviceName);
            capability.setCapability("platformVersion",platformVersion);
                        
            capability.setCapability("build", "Native App automate Demo");
            capability.setCapability("test", "Test Parallel");          
            capability.setCapability("isRealMobile", true);
            // highlight-next-line
            capability.setCapability("app","lt://proverbial-android");     //Enter the app url here
            capability.setCapability("network", false);
            capability.setCapability("video", true);
            capability.setCapability("console", true);
            capability.setCapability("visual", true);

            String gridURL = "https://" + username + ":" + accesskey + "@mobile-hub.lambdatest.com/wd/hub";
            System.out.println(gridURL);
            connection = new RemoteWebDriver(new URL(gridURL), capability);
            System.out.println(capability);
            System.out.println(connection.getSessionId());
}


    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideScenarios();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
    }
}
```

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">
<TabItem value="single-config" label="Single" default>

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="BDD Test Suite" verbose="1" parallel="tests"
	thread-count="3" >
    <test name="ANDROIDTEST" annotations="JDK"
		preserve-order="true">
        <parameter name="deviceName" value=".*"/>
        <parameter name="platformVersion" value="12"/>
        <parameter name="platformName" value="Android"/>
        <classes>
            <class name="MyRunner.TestRunner" />
        </classes>
    </test> <!-- Test -->
</suite>
```

</TabItem>

<TabItem value="parallel-config" label="Parallel" default>

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="BDD Test Suite" verbose="1" parallel="tests"
       thread-count="2">
    <test name="Galaxy" annotations="JDK"
          preserve-order="true">
        <parameter name="deviceName" value="Galaxy.*"/>
        <parameter name="platformVersion" value="11"/>
        <parameter name="platformName" value="Android"/>
        <classes>
            <class name="MyRunner.TestRunner"/>
        </classes>
    </test> <!-- Test -->
    <test name="OnePlus" annotations="JDK"
          preserve-order="true">
        <parameter name="deviceName" value="Pixel.*"/>
        <parameter name="platformVersion" value="12"/>
        <parameter name="platformName" value="Android"/>
        <classes>
            <class name="MyRunner.TestRunner"/>
        </classes>
    </test> <!-- Test -->

</suite>
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
  mvn clean install
  ```

- The tests can be executed in the terminal using the following command:

  <Tabs className="docs__val">
  <TabItem value="single-exec" label="Single" default>

  ```bash
  mvn test -D suite=single.xml
  ```
  </TabItem>

  <TabItem value="parallel-exec" label="Parallel" default>

  ```bash
  mvn test -D suite=parallel.xml
  ```

  </TabItem>
  </Tabs>

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Cucumber Agent Skill with TestMu AI
***

The [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cucumber-skill package includes:

```
cucumber-skill/
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


### Installing Cucumber Agent Skill
***

Install a Cucumber Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cucumber-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cucumber-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cucumber-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      Java Cucumber With Appium
      </span>
    </li>
  </ul>
</nav>
