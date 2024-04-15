---
id: appium-nodejs-webdriverio
title: WebDriverIO With Appium
sidebar_label: WebDriverIO
description: Now you can run your Appium automation scripts using with WebDriverIO on LambdaTest Real Device Cloud Platform  of 3000+ real mobile devices.
keywords:
  - appium
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/appium-nodejs-webdriverio/
site_name: LambdaTest
slug: appium-nodejs-webdriverio/
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
          "item": "https://www.lambdatest.com/support/docs/appium-nodejs-webdriverio/"
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

In this topic, you will learn how to configure and run your **WebDriverIO** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **WebDriverIO** for application testing with **Appium** on **LambdaTest**.
2. Run test cases in **parallel** using WebDriverIO with Appium to reduce build times.
3. Learn more about Desired Capabilities for Appium testing.
4. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-nodejs-webdriverio" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img" width="50" height="50"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you start performing App automation testing with Appium, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Download and install **NodeJS** from [official NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.
- Install **npm** from the [official npm website](https://www.npmjs.com/).

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
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### 2. Clone the sample project

Clone the LambdaTest’s :link: [LT-appium-nodejs-webdriverio](https://github.com/LambdaTest/LT-appium-nodejs-webdriverio) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs-webdriverio
cd LT-appium-nodejs-webdriverio
```

### 3. Set up your authentication

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

To get started, here is an example of sample test on our sample Android App shown below. You can write or add your own Appium automation scripts in `specs` directory to run different tests on your app.

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
    await el7.setValue("https://www.lambdatest.com/");
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
    await el7.setValue("https://www.lambdatest.com/");
    driver.back();
  });
});
```

</TabItem>

</Tabs>

### Configuring Your Test Capabilities

You need to update your capabilities in `*.conf.js` files. In this sample project, we have provided the examples for running tests on both **Android** and **iOS** apps. You can find the configs for both iOS and Android in the `ios-sample` and `android-sample` directories correspondingly. 

We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. You need to pass the path of your test script in `specs` object to run your own automation script. The capabilities object in the sample code for a single test are defined as:

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

</TabItem>

</Tabs>

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

1. Navigate to the corresponding directory based on your app.

```bash
cd ios
```

2. Install the required dependencies using the following command:

```bash
npm i
```

3. Execute the following command to run your test on LambdaTest platform:

```bash
npm run single
```

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
      WebDriverIO With Appium
</span>
    </li>
  </ul>
</nav>
---
id: appium-nodejs-webdriverio
title: WebDriverIO With Appium
sidebar_label: WebDriverIO
description: Now you can run your Appium automation scripts using with WebDriverIO on LambdaTest Real Device Cloud Platform  of 3000+ real mobile devices.
keywords:
  - appium
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/appium-nodejs-webdriverio/
site_name: LambdaTest
slug: appium-nodejs-webdriverio/
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
          "item": "https://www.lambdatest.com/support/docs/appium-nodejs-webdriverio/"
        }]
      })
    }}
></script>

# Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **WebDriverIO** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **WebDriverIO** for application testing with **Appium** on **LambdaTest**.
2. Run test cases in **parallel** using WebDriverIO with Appium to reduce build times.
3. Learn more about Desired Capabilities for Appium testing.
4. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-nodejs-webdriverio" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img" width="50" height="50"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you start performing App automation testing with Appium, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
- Make sure you are using the latest version of **JavaScript**.
- Install **npm** from the official website by clicking [here](https://www.npmjs.com/).

## Run your first test

---

### 1. Upload your application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**
 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""
`}
</CodeBlock>
</div>

**Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### 2. Clone the sample project

Clone the LambdaTest’s :link: [LT-appium-nodejs-webdriverio](https://github.com/LambdaTest/LT-appium-nodejs-webdriverio) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs-webdriverio
cd LT-appium-nodejs-webdriverio
```

### 3. Set up your authentication

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

To get started, here is an example of sample test on our sample Android App shown below. You can write or add your own Appium automation scripts in `specs` directory to run different tests on your app.

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
    await el7.setValue("https://www.lambdatest.com/");
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
    await el7.setValue("https://www.lambdatest.com/");
    driver.back();
  });
});
```

</TabItem>

</Tabs>

### Configuring Your Test Capabilities

You need to update your capabilities in `*.conf.js` files. In this sample project, we have provided the examples for running tests on both **Android** and **iOS** apps. You can find the configs for both iOS and Android in the `ios-sample` and `android-sample` directories correspondingly. 

We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. You need to pass the path of your test script in `specs` object to run your own automation script. The capabilities object in the sample code for a single test are defined as:

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

</TabItem>

</Tabs>

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. A more Detailed Capability Guide is available [here :page_facing_up:](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/) .

:::

### 5. Execute your test case

1. Navigate to the corresponding directory based on your app.

```bash
cd ios
```

2. Install the required dependencies using the following command:

```bash
npm i
```

3. Execute the following command to run your test on LambdaTest platform:

```bash
npm run single
```

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
      WebDriverIO With Appium
</span>
    </li>
  </ul>
</nav>