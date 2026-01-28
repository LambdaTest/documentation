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
site_name: LambdaTest
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

In this documentation, you will learn how to configure and run your **Mocha** automation testing scripts with **Appium** on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
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

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.
:::

### Step 4: Update your Automation Script

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

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

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
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

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
      Mocha With Appium
</span>
    </li>
  </ul>
</nav>
