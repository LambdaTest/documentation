---
id: appium-nodejs-mocha
title: Mocha With Appium
sidebar_label: Mocha
description: Now you can run your automation scripts using JavaScript Mocha on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - javascript
  - lambdatest java
  - framework on lambdatest
  - mocha
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/appium-nodejs-mocha/
site_name: LambdaTest
slug: appium-nodejs-mocha/
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
          "name": "WebDriverIO With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-nodejs-mocha/"
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

In this topic, you will learn how to configure and run your **Mocha** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **Mocha** for application testing with **Appium** on **LambdaTest**.
2. Learn more about Desired Capabilities for Appium testing.
3. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-nodejs-mocha" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing App automation testing with Appium, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.
- Install **npm** from the official [npm website](https://www.npmjs.com/).

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

Clone the LambdaTest’s :link: [LT-appium-nodejs-mocha](https://github.com/LambdaTest/LT-appium-nodejs-mocha) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs-mocha
cd LT-appium-nodejs-mocha
```
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

An automation script for the sample application available above has been provided here. 

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

### Configure the test capabilities

You can update your custom capabilities in the scripts. In our sample script, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object.Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code for a single test are defined as:

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

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

1. Execute the following commands to install the required dependencies:

```bash
npm i
npm install
npm install selenium-webdriver
npm i appium-android-driver
npm i appium-base-driver
npm install --save
```

2. The tests can be executed in the terminal using the following command:

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
      Mocha With Appium
</span>
    </li>
  </ul>
</nav>
