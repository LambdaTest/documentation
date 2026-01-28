---
id: appium-nodejs
title: Appium with Nodejs
sidebar_label: NodeJS
description: Optimize your Appium automation with Node.js using TestMu AI's comprehensive support documentation.
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/appium-nodejs/
site_name: LambdaTest
slug: appium-nodejs/
canonical: https://www.testmuai.com/support/docs/appium-nodejs/
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
          "item": `${BRAND_URL}/support/docs/appium-nodejs/`
        }]
      })
    }}
></script>

In this documentation, you will learn how to configure and run your **NodeJS** automation testing scripts with **Appium** on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Install **npm** from the official [npm website](https://www.npmjs.com/).
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-nodejs" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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
  - You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
  - You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::
- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.
:::

### Step 4: Update your Automation Script

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```javascript title="iOS.js"
var wd = require("wd");
var assert = require("assert");
var asserter = wd.asserters;
username =
  process.env.LT_USERNAME == undefined
    //highlight-next-line
    ? "username" //Enter the username here
    : process.env.LT_USERNAME;
accesskey =
  process.env.LT_ACCESS_KEY == undefined
    //highlight-next-line
    ? "access_key" //Enter the access_key here
    : process.env.LT_ACCESS_KEY;

desired_capabilities = {
  deviceName: "iPhone 12",
  platformVersion: "14",
  platformName: "iOS",
  isRealMobile: true,
  //highlight-next-line
  app: "APP_URL", //Enter the app (.ipa) url
  visual: true,
  video: true,
  build: "NodeJS Vanilla - iOS",
  name: "Sample Test - NodeJS",
};

driver = wd.promiseRemote(
  `https://${username}:${accesskey}@mobile-hub.lambdatest.com/wd/hub`
);

async function iOStest() {
  try {
    driver
      .init(desired_capabilities)
      .then(function () {
        return driver.waitForElementById("color", 10000);
      })
      .then(function (color) {
        return color.click();
      })
      .then(function () {
        return driver.waitForElementById("Text", 10000);
      })
      .then(function (text) {
        text.click();
        return driver.waitForElementById("toast", 10000);
      })
      .then(function (toast) {
        toast.click();
        return driver.waitForElementById("notification", 10000);
      })
      .then(function (notification) {
        notification.click();
        return driver.waitForElementById("geoLocation", 10000);
      })
      .then(function (geoLocation) {
        return geoLocation.click();
      })
      .then(async function () {
        return driver.waitForElementById("Back", 10000);
      })
      .then(function (Back) {
        Back.click();
        return driver.waitForElementById("speedTest", 10000);
      })
      .then(async function (speedTest) {
        speedTest.click();
        return driver.waitForElementById("Back", 10000);
      })
      .then(function (back) {
        back.click();
        return driver.waitForElementById("Browser", 10000);
      })
      .then(function (Browser) {
        Browser.click();
        return driver.waitForElementById("url", 10000);
      })
      .then(function (url) {
        url.type("https://www.lambdatest.com");
        return driver.waitForElementById("find", 10000);
      })
      .then(function (find) {
        find.click();
        driver.quit();
      });
  } catch (e) {
    driver.quit();
  }
}

iOStest();
```

</TabItem>

<TabItem value="android" label="Android" default>

```javascript title="Android.js"
const wd = require("wd");
//highlight-next-line
const username = process.env.LT_USERNAME || "username"; //Add username here

const accessKey = process.env.LT_ACCESS_KEY || "accessKey"; //Add accessKey here

const desiredCapabilities = {
  app: "APP_URL", // Enter the app (.apk) url
  build: "NodeJS - Android",
  name: "Sample Test NodeJS",
  deviceName: "Galaxy S20",
  isRealMobile: true,
  platformName: "android",
  platformVersion: "11",
  video: true,
  visual: true,
};

const driver = wd.promiseRemote(
  `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`
);

const DEFAULT_TIMEOUT = 10000;

async function runAndroidTest() {
  try {
    driver
      .init(desiredCapabilities)
      .then(function () {
        return driver.waitForElementById("color", DEFAULT_TIMEOUT);
      })
      .then(function (colorButton) {
        return colorButton.click();
      })
      .then(function () {
        return driver.waitForElementById("Text", DEFAULT_TIMEOUT);
      })
      .then(function (text) {
        text.click();
        return driver.waitForElementById("toast", DEFAULT_TIMEOUT);
      })
      .then(function (toast) {
        toast.click();
        return driver.waitForElementById("notification", DEFAULT_TIMEOUT);
      })
      .then(function (notification) {
        notification.click();
        return driver.waitForElementById("geoLocation", DEFAULT_TIMEOUT);
      })
      .then(function (geoLocation) {
        geoLocation.click();
        return driver.waitForElementById("buttonPage", DEFAULT_TIMEOUT);
      })
      .then(function (Home) {
        Home.click();
        return driver.waitForElementById("speedTest", DEFAULT_TIMEOUT);
      })
      .then(function (speedTest) {
        speedTest.click();
        return driver.waitForElementById("webview", DEFAULT_TIMEOUT);
      })
      .then(function (Browser) {
        Browser.click();
        return driver.waitForElementById("url", DEFAULT_TIMEOUT);
      })
      .then(function (url) {
        url.type("https://www.lambdatest.com");
        return driver.waitForElementById("find", DEFAULT_TIMEOUT);
      })
      .then(function (find) {
        find.click();
        driver.quit();
      });
  } catch (e) {
    driver.quit();
  }
}

runAndroidTest();
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

<TabItem value="ios-config" label="iOS.js" default>

```javascript
desired_capabilities = {
  deviceName: "iPhone 12",
  platformVersion: "14",
  platformName: "iOS",
  isRealMobile: true,
  //highlight-next-line
  app: "APP_URL", //Enter the app (.ipa) url
  visual: true,
  video: true,
  build: "NodeJS Vanilla - iOS",
  name: "Sample Test - NodeJS",
};
```

</TabItem>
<TabItem value="android-config" label="Android.js" default>

```javascript
desired_capabilities = {
  deviceName: "Galaxy S20",
  platformVersion: "11",
  platformName: "android",
  isRealMobile: true,
  //highlight-next-line
  app: "APP_URL", //Enter the app (.apk) url
  visual: true,
  video: true,
  build: "NodeJS Vanilla - Android",
  name: "Sample Test - NodeJS",
};
```

</TabItem>

</Tabs>

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

  ```bash
  npm i wd
  ```

- The tests can be executed in the terminal using the following command:

  <Tabs className="docs__val">
  <TabItem value="ios-exec" label="iOS" default>

  ```bash
  node IOS.js
  ```

  </TabItem>
  <TabItem value="android-exec" label="Android" default>
  
  ```bash
  node Android.js
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
      JavaScript With Appium
</span>
    </li>
  </ul>
</nav>
