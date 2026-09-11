---
id: appium-nodejs-webdriverio
title: Appium With WebDriverIO
sidebar_label: WebDriverIO
description: Now you can run your Appium automation scripts using with WebDriverIO on TestMu AI Real Device Cloud Platform  of 3000+ real mobile devices.
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/
site_name: TestMu AI
slug: appium-nodejs-webdriverio/
canonical: https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/
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
          "item": `${BRAND_URL}/support/docs/appium-nodejs-webdriverio/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/"
    },
    "headline": "Appium With WebDriverIO",
    "description": "Now you can run your Appium automation scripts using with WebDriverIO on TestMu AI Real Device Cloud Platform  of 3000+ real mobile devices.",
    "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/",
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
        "text": "\n<\/TabItem>\n\n<TabItem value=\"android\" label=\"Android\" default>\n\n```javascript title=\"specs/android-test.js\"\ndescribe(\"Proverbial APK\", () => {\n  it(\"Changes color\", async () => {\n    var color = await $(\"id=color\");\n    await color.waitForDisplayed({ timeout: 30000 });\n    await color.click();\n    await color.click();\n  });\n\n  it(\"Changes text\", async () => {\n    var text = await $(\"id=Text\");\n    await text.waitForDisplayed({ timeout: 30000 });\n    await text.click();\n  });\n\n  it(\"Toast\", async () => {\n    var toast = await $(\"id=toast\");\n    await toast.waitForDisplayed({ timeout: 30000 });\n    await toast.click();\n  });\n\n  it(\"Notification\", async () => {\n    var nf = await $(\"id=notification\");\n    await nf.waitForDisplayed({ timeout: 30000 });\n    await nf.click();\n  });\n\n  it(\"Geolocation\", async () => {\n    var geo = await $(\"id=geoLocation\");\n    await geo.waitForDisplayed({ timeout: 30000 });\n    await geo.click();\n\n    driver.back();\n  });\n\n  it(\"SpeedTest\", async () => {\n    var st = await $(\"id=speedTest\");\n    await st.waitForDisplayed({ timeout: 30000 });\n    await st.click();\n\n    await browser.pause(10000);\n    driver.back();\n  });\n\n  it(\"Browser\", async () => {\n    var browser = await $(\"id=Browser\");\n    await browser.waitForDisplayed({ timeout: 30000 });\n    await browser.click();\n\n    let el7 = await $(\"id=url\");\n    await el7.click();\n    await el7.setValue(\"https://www.testmuai.com/\");\n    driver.back();\n  });\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n\n:::tip\n- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**\n:::\n\n<\/TabItem>\n<TabItem value=\"android-config\" label=\"android-single.conf.js\" default>\n\n```javascript title=\"android-sample/android-single.conf.js\"\nexports.config = {\n  //highlight-next-line\n  user: process.env.LT_USERNAME || \"YOUR_USERNAME\",\n  //highlight-next-line\n  key: process.env.LT_ACCESS_KEY || \"YOUR_ACCESS_KEY\",\n\n  updateJob: false,\n  //highlight-next-line\n  specs: [\"./../specs/android-test.js\"], //path of your test script\n  exclude: [],\n\n  capabilities: [\n    {\n      build: \"NodeJS WebDriverIO Android\",\n      name: \"Sample Test - WebDriverIO\",\n      isRealMobile: true,\n      platformName: \"Android\",\n      deviceName: \"Galaxy S9\",\n      platformVersion: \"10\",\n      app: \"YOUR_APP_URL\", //Enter your app (.apk) url\n    },\n  ],\n\n  logLevel: \"info\",\n  coloredLogs: true,\n  screenshotPath: \"./errorShots/\",\n  baseUrl: \"\",\n  waitforTimeout: 10000,\n  connectionRetryTimeout: 90000,\n  connectionRetryCount: 3,\n  path: \"/wd/hub\",\n  hostname: \"mobile-hub.lambdatest.com\",\n  port: 80,\n\n  framework: \"mocha\",\n  mochaOpts: {\n    ui: \"bdd\",\n    timeout: 20000,\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd ios"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The webdriverio-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "webdriverio-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a WebdriverIO Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/webdriverio-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/webdriverio-skill .cursor/skills/"
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
      "description": "Now you can run your Appium automation scripts using with WebDriverIO on TestMu AI Real Device Cloud Platform  of 3000+ real mobile devices.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application available above has been provided here. Ensure to update the APP_URL, username and accesKey in your scripts inside specs directory the before running the tests.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You need to update your capabilities in .conf.js files. In this sample project, we have provided the examples for running tests on both Android and iOS** apps. You can find the configs for both iOS and Android in the ios-sample and android-sample directories correspondingly. We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. You need to pass the path of your test script in specs object to run your own automation script. The capabilities object in the sample code for a single test are defined as: You must set isRealMobile capability to False in the config file to run on Virtual Devices You must set isRealMobile capability to False in the config file to run on Virtual Devices You must add the generated APPURL** to the app capability in the config file. You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Navigate to the corresponding directory based on your app. Install the required dependencies using the following command: Execute the following command to run your test on TestMu AI platform: Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-nodejs-webdriverio/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to configure and run your **WebdriverIO** automation testing scripts with **Appium** on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **npm** from the official [npm website](https://www.npmjs.com/).
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-nodejs-webdriverio" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in your scripts inside `specs` directory the  before running the tests.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```javascript title="specs/ios-test.js"
describe("Proverbial APK", () => {
  it("Changes color", async () => {
    var color = await $("id=color");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    await color.click();
  });

  it("Changes text", async () => {
    var text = await $("id=Text");
    await text.waitForDisplayed({ timeout: 30000 });
    await text.click();
  });

  it("Toast", async () => {
    var toast = await $("id=toast");
    await toast.waitForDisplayed({ timeout: 30000 });
    await toast.click();
  });

  it("Notification", async () => {
    var nf = await $("id=notification");
    await nf.waitForDisplayed({ timeout: 30000 });
    await nf.click();
  });

  it("Geolocation", async () => {
    var geo = await $("id=geoLocation");
    await geo.waitForDisplayed({ timeout: 30000 });
    await geo.click();

    driver.back();
  });

  it("SpeedTest", async () => {
    var st = await $("id=speedTest");
    await st.waitForDisplayed({ timeout: 30000 });
    await st.click();

    await browser.pause(10000);
    driver.back();
  });

  it("Browser", async () => {
    var browser = await $("id=Browser");
    await browser.waitForDisplayed({ timeout: 30000 });
    await browser.click();

    let el7 = await $("id=url");
    await el7.click();
    await el7.setValue("https://www.testmuai.com/");
    driver.back();
  });
});
```

</TabItem>

<TabItem value="android" label="Android" default>

```javascript title="specs/android-test.js"
describe("Proverbial APK", () => {
  it("Changes color", async () => {
    var color = await $("id=color");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    await color.click();
  });

  it("Changes text", async () => {
    var text = await $("id=Text");
    await text.waitForDisplayed({ timeout: 30000 });
    await text.click();
  });

  it("Toast", async () => {
    var toast = await $("id=toast");
    await toast.waitForDisplayed({ timeout: 30000 });
    await toast.click();
  });

  it("Notification", async () => {
    var nf = await $("id=notification");
    await nf.waitForDisplayed({ timeout: 30000 });
    await nf.click();
  });

  it("Geolocation", async () => {
    var geo = await $("id=geoLocation");
    await geo.waitForDisplayed({ timeout: 30000 });
    await geo.click();

    driver.back();
  });

  it("SpeedTest", async () => {
    var st = await $("id=speedTest");
    await st.waitForDisplayed({ timeout: 30000 });
    await st.click();

    await browser.pause(10000);
    driver.back();
  });

  it("Browser", async () => {
    var browser = await $("id=Browser");
    await browser.waitForDisplayed({ timeout: 30000 });
    await browser.click();

    let el7 = await $("id=url");
    await el7.click();
    await el7.setValue("https://www.testmuai.com/");
    driver.back();
  });
});
```
</TabItem>
</Tabs>

### Step 5: Configure the Test Capabilities

You need to update your capabilities in `*.conf.js` files. In this sample project, we have provided the examples for running tests on both **Android** and **iOS** apps. You can find the configs for both iOS and Android in the `ios-sample` and `android-sample` directories correspondingly. 

We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. You need to pass the path of your test script in `specs` object to run your own automation script. The capabilities object in the sample code for a single test are defined as:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios-config" label="ios-single.conf.js" default>

```javascript title="ios-sample/ios-single.conf.js"
exports.config = {
  //highlight-next-line
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  //highlight-next-line
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  //highlight-next-line
  specs: ["./../specs/ios-test.js"], //path of your test script
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO iOS",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "iPhone 13 Pro",
      platformVersion: "15",
      platformName: "iOS",
      //highlight-next-line
      app: "YOUR_APP_URL", //Enter your app (.ipa) url
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>
<TabItem value="android-config" label="android-single.conf.js" default>

```javascript title="android-sample/android-single.conf.js"
exports.config = {
  //highlight-next-line
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  //highlight-next-line
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  //highlight-next-line
  specs: ["./../specs/android-test.js"], //path of your test script
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO Android",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      app: "YOUR_APP_URL", //Enter your app (.apk) url
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Navigate to the corresponding directory based on your app.

```bash
cd ios
```
- Install the required dependencies using the following command:

```bash
npm i
```
- Execute the following command to run your test on <BrandName /> platform:

```bash
npm run single
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the WebdriverIO Agent Skill with TestMu AI
***

The [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The webdriverio-skill package includes:

```
webdriverio-skill/
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


### Installing WebdriverIO Agent Skill
***

Install a WebdriverIO Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/webdriverio-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/webdriverio-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only webdriverio-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      WebDriverIO With Appium
</span>
    </li>
  </ul>
</nav>
