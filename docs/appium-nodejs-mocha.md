---
id: appium-nodejs-mocha
title: Appium With Mocha
sidebar_label: Mocha
description: Now you can run your automation scripts using JavaScript Mocha on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - javascript
  - testmu ai java
  - framework on testmu ai
  - mocha
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-nodejs-mocha/
site_name: TestMu AI
slug: appium-nodejs-mocha/
canonical: https://www.testmuai.com/support/docs/appium-nodejs-mocha/
---


import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "item": `${BRAND_URL}/support/docs/appium-nodejs-mocha/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/"
    },
    "headline": "Appium With Mocha",
    "description": "Now you can run your automation scripts using JavaScript Mocha on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
    "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/",
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
      "javascript",
      "testmu ai java"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; Install npm from the official npm website.; Download and install NodeJS from official NodeJS website. You should be having NodeJS v6 or newer.; Make sure you are using the latest version of JavaScript..",
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
        "text": "\n<\/TabItem>\n\n<TabItem value=\"android\" label=\"Android\" default>\n\n```javascript title=\"android_test.js\"\nconst { default: driver } = require(\"appium-android-driver/build/lib/driver\");\nconst { By } = require(\"selenium-webdriver\");\nconst { capabilities } = require(\"../conf/android.conf\");\n\nrequire(\"appium-android-driver\")\nvar assert= require(\"assert\"),\n  webdriver = require(\"selenium-webdriver\"),\n   conf_file= process.argv[3] || \"conf/Appp.conf.js\";\n \n\nvar caps = require(\"../\" + conf_file).capabilities;\n\nvar buildDriver = function(caps) {\n  return new webdriver.Builder()\n    .usingServer(\n      \"http://\" +\n      LT_USERNAME +\n      \":\" +\n      LT_ACCESS_KEY +\n      \"@mobile-hub.lambdatest.com/wd/hub\"\n    )\n    .withCapabilities(caps)\n    .build();\n};\n\n\ndescribe(\"Mocha Appium Test \" + caps.browserName, function() {\n  var driver;\n  this.timeout(0);\n\n\n    it ('Application is launched', function name(done) { \n        driver=buildDriver(caps);\n      \n        driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click().then(function(){\n        console.log(\"Successfully clicked Color\");\n    });\n     driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click().then(function(){\n        console.log(\"Successfully clicked Text\");\n    });\n    driver.findElement(By.id('com.lambdatest.proverbial:id/notification')).click().then(function(){\n        console.log(\"Successfully clicked Notification\");\n    })\n    driver.findElement(By.id('com.lambdatest.proverbial:id/toast')).click().then(function(){\n        console.log(\"Successfully clicked Toast\");\n        driver.quit()\n    })\n});\n\n\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure the Test Capabilities (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n\n:::tip\n- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**\n:::\n\n<\/TabItem>\n<TabItem value=\"ios-config\" label=\"iOS\" default>\n\n```javascript title=\"ios.conf.js\"\nLT_USERNAME = process.env.LT_USERNAME || \"<your username>\";        //Enter your LambdaTest username here\nLT_ACCESS_KEY = process.env.LT_ACCESS_KEY || \"<your accessKey>\";    //Enter your LambdaTest accessKey here\n\nexports.capabilities = {\n  'build': 'Mocha-iOS-Sample', //Build name\n  'name': 'Mocha-iOS', // Test name\n  'platformName':'ios', // OS name\n  'deviceName': 'iPhone 12 Pro', // Device name\n  'platformVersion': '15', // OS version\n  'app' : 'lt://proverbial-ios',     // Add app (.ipa) url here\n  'isRealMobile' : true,\n  'visual': false,  // To take step by step screenshot\n  'network':false,  // To capture network Logs\n  'console':false, // To capture console logs.\n  'tunnel': false // If you want to run the localhost than change it to true\n  };"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i\nnpm install\nnpm install selenium-webdriver\nnpm i appium-android-driver\nnpm i appium-base-driver\nnpm install --save"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "npm run android    //to run single test\nnpm run parallel_android    //to run parallel tests"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "npm run ios    //to run single test\nnpm run parallel_ios    //to run parallel tests"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The mocha-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "mocha-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Mocha Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/mocha-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/mocha-skill .cursor/skills/"
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
      "description": "Now you can run your automation scripts using JavaScript Mocha on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application available above has been provided here. You must set isRealMobile capability to False in the config file to run on Virtual Devices",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. The capabilities object in the sample code are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You must set isRealMobile capability to False in the config file to run on Virtual Devices You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Execute the following commands to install the required dependencies: The tests can be executed in the terminal using the following command: Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-mocha/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to configure and run your **Mocha** automation testing scripts with **Appium** on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **npm** from the official [npm website](https://www.npmjs.com/).
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/lambdatest/LT-appium-nodejs-mocha" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.
:::

### Step 4: Update your Automation Script

An automation script for the sample application available above has been provided here.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```javascript title="ios_test.js"
const driver= require("appium-base-driver")

//const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { element } = require("wd/lib/element-commands");

require("appium-base-driver")
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/ios.conf.js";
 

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
      LT_USERNAME +
      ":" +
      LT_ACCESS_KEY +
      "@mobile-hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

describe("Mocha Appium iOS Test " + caps.browserName, function() {
  var driver;
  this.timeout(0);
    it ('Application is launched', function name(done) { 
        driver=buildDriver(caps);
        driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click().then(function(){
          console.log("Successfully clicked Color");
        
        });
        driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click().then(function(){
          console.log("Successfully clicked Notification");
        });
        driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click().then(function(){
            console.log("Successfully clicked Toast");
    });
         driver.findElement(By.xpath('//XCUIElementTypeButton[@name="Text"]')).click().then(function(){
             console.log("Successfully clicked Text");
             driver.quit()
    });  
});
});

```

</TabItem>

<TabItem value="android" label="Android" default>

```javascript title="android_test.js"
const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { capabilities } = require("../conf/android.conf");

require("appium-android-driver")
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/Appp.conf.js";
 

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
      LT_USERNAME +
      ":" +
      LT_ACCESS_KEY +
      "@mobile-hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};


describe("Mocha Appium Test " + caps.browserName, function() {
  var driver;
  this.timeout(0);


    it ('Application is launched', function name(done) { 
        driver=buildDriver(caps);
      
        driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click().then(function(){
        console.log("Successfully clicked Color");
    });
     driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click().then(function(){
        console.log("Successfully clicked Text");
    });
    driver.findElement(By.id('com.lambdatest.proverbial:id/notification')).click().then(function(){
        console.log("Successfully clicked Notification");
    })
    driver.findElement(By.id('com.lambdatest.proverbial:id/toast')).click().then(function(){
        console.log("Successfully clicked Toast");
        driver.quit()
    })
});


});
```

</TabItem>

</Tabs>

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="android-config" label="Android" default>

```javascript title="android.conf.js"
LT_USERNAME = process.env.LT_USERNAME || "<your username>";      //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";  //Enter your LambdaTest accessKey here

exports.capabilities = {
  'build': 'Mocha-Appium-Sample', //Build name
  'name': 'Mocha-Android', // Test name
  'platformName':'android', // OS name
  'deviceName': 'Galaxy S10', // Device name
  'platformVersion': '11', // OS version
  'app' : 'lt://proverbial-android',     // Add app (.apk) url here
  'isRealMobile' : true,
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>
<TabItem value="ios-config" label="iOS" default>

```javascript title="ios.conf.js"
LT_USERNAME = process.env.LT_USERNAME || "<your username>";        //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";    //Enter your LambdaTest accessKey here

exports.capabilities = {
  'build': 'Mocha-iOS-Sample', //Build name
  'name': 'Mocha-iOS', // Test name
  'platformName':'ios', // OS name
  'deviceName': 'iPhone 12 Pro', // Device name
  'platformVersion': '15', // OS version
  'app' : 'lt://proverbial-ios',     // Add app (.ipa) url here
  'isRealMobile' : true,
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };
```

</TabItem>

</Tabs>

:::note

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::


### Step 6: Execute and Monitor your Tests

- Execute the following commands to install the required dependencies:

```bash
npm i
npm install
npm install selenium-webdriver
npm i appium-android-driver
npm i appium-base-driver
npm install --save
```
- The tests can be executed in the terminal using the following command:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
<TabItem value="android-exec" label="Android" default>

```js
npm run android    //to run single test
npm run parallel_android    //to run parallel tests
```

</TabItem>

<TabItem value="ios-exec" label="iOS" default>

```js
npm run ios    //to run single test
npm run parallel_ios    //to run parallel tests
```

</TabItem>
</Tabs>

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Mocha Agent Skill with TestMu AI
***

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The mocha-skill package includes:

```
mocha-skill/
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


### Installing Mocha Agent Skill
***

Install a Mocha Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only mocha-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      Mocha With Appium
</span>
    </li>
  </ul>
</nav>
