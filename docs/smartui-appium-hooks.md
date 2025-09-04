---
id: smartui-appium-hooks
title: Getting Started With Visual Regression Testing Using Appium On SmartUI Real Devices (NodeJS)
sidebar_label: Appium Hooks
description: Explore our Appium Visual Regression support documentation for step-by-step guidance! Conduct visual testing, manage apps, and ensure your mobile apps are flawless before launch.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/smartui-appium-hooks/
site_name: LambdaTest
slug: smartui-appium-hooks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';
import NewTag from '../src/component/newTag';

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
          "name": "SmartUI-Hooks",
          "item": "https://www.lambdatest.com/support/docs/appium-visual-regression/"
        }]
      })
    }}
></script>

Using the LambdaTest platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/pmuhutnb9ixb?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Prerequisites for SmartUI with App Automation

- Basic understanding of [appium](https://appium.io/docs/en/2.0/intro/) and remote [WebDriver](https://www.selenium.dev/documentation/webdriver/drivers/remote_webdriver/) is required.
- Go to [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) and login along with your credentials.
- Access your Hub for your appium **remote connection** instance at `@mobile-hub.lambdatest.com/wd/hub`.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

</TabItem>
<TabItem value="Windows" label="Windows" default>

```bash
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

</TabItem>
</Tabs>

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Real Device </b> for executing your `Appium` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

## Step 2: Upload your application

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val" groupId="language">
<TabItem value="App File" label="App File" default>

 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}
</CodeBlock>
</div>

</TabItem>
<TabItem value="App URL" label="App URL" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ```lt://APP123456789123456789``` and will be used in the next step.

:::

## Step 3: Clone the sample project

Clone the LambdaTest’s :link: [LT-appium-nodejs](https://github.com/LambdaTest/LT-appium-nodejs) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs
cd LT-appium-nodejs
```

## Step 4: Set up your authentication

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

## Step 5: Configure your test with Appium Desired Capabilities

:::tip Explore more capabilities

To view and generate more capabilities for your appium application test suite, please see the capability generator here: https://www.lambdatest.com/capabilities-generator/

:::

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Edit the required capabilities for your test suite as shown in the below sample code snippet:

```javascript title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration. This sample is for NodeJS"
let capabilities = {
  deviceName: "iPhone 12", // Configure your Device for appium test (Mandatory)
  platformName: "ios", // Configure your OS for appium test (Mandatory)
  platformVersion: "14", // Configure your OS Version for appium test (Mandatory)
  isRealMobile: true, // Configure if you want to test in a real-device (Mandatory)
  app: "APP_URL", // Set your uploaded App URL for testing (Mandatory)
  //highlight-next-line
  visual: true, // Configure your Capture screenshot  for appium test (Mandatory)
  name: "testing app session ", // Name of the test for appium (Recommended)
  build: "Real Device App Build", // Name of the build for appium (Recommended)
  //highlight-start
  "smartUI.project": "<Your Project Name>", // Replace the name of project with the new project name (Mandatory)
  "smartUI.build": "<Your Build Name>", // Replace the name of Build with the new Build name (Optional)
  "smartUI.baseline": false, // Enable if you want to update to a new baseline build (Optional)
  "smartUI.cropStatusBar" : true, // Optional (By default true)
  "smartUI.cropFooter" : true, // Optional (By default false)
  //highlight-end
};

// Connecting to the Lambdatest appium Cloud Grid with Smart UI
let gridUrl =
  "https://" +
  "<Your Username>" +
  ":" +
  "<Your Access Key>" +
  `@mobile-hub.lambdatest.com/wd/hub`;

// Here is your Remote WebDrive Connection
let driver = await new webdriver.Builder()
  .usingServer(gridUrl)
  .withCapabilities(capabilities)
  .build();
```
:::caution Important

It is important that the `visual:true` is set your capabilities configuration for capturing the screenshots to SmartUI - Visual Regression tests and add into the build for comparison. If this capability is not added then the build status will be shown as `Error`. 

:::

- Webhook for taking the screenshot - This part of the code needs to be attached below the required segment of appium script of which we would like to take the screenshot to test on.

```javascript title="For Example if your are using with NodeJS"
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

:::caution

Appium with SmartUI is currently only supports the viewport based screenshot comparisons.

:::

- Execute your test suite as per the execution command depending on your framework or language.

```bash title="For Example if your are using with NodeJS"
npm i && node your_test_script.js
```

- You can check the executed builds over at [LambdaTest SmartUI](https://smartui.lambdatest.com/).

## Smart Crop With SmartUI

The all-new **Real Device mobile notification status bar and navigation bar crop** feature in SmartUI allows you to take your visual regression testing workflows to the next level. With Smart Crop, you can crop the status bar and navigation bar or footer from screenshots, enabling them to focus solely on the core UI elements during visual comparisons.

By leveraging machine learning algorithms, it accurately detects and crops the status bar and navigation bar from screenshots. With precise image processing techniques, SmartUI precisely identifies the location of status bar elements. By excluding it from visual comparisons, the focus is solely on critical UI elements. 

### Original Screenshot:

<img loading="lazy" src={require('../assets/images/smart-visual-testing/screenshot.webp').default} alt="Profile" width="1360" height="603" className="doc_img"/>

### Cropped Screenshot

<img loading="lazy" src={require('../assets/images/smart-visual-testing/cropped_ss.jpg').default} alt="Profile" width="1360" height="603" className="doc_img"/>

## Running Tests on Other Languages and Frameworks

---

In this module we discussed about running smart visual tests on **NodeJS**, here we will know more about running those tests for any language or framework with appium. 

In a similar way, we can run visual tests for other languages and frameworks using their corresponding script executing commands. To understand better, we provided the commands for some of the popular languages and frameworks:

### For taking viewport screenshot

This part of the code needs to be attached below the required segment of selenium script of which we would like to take the screenshot to test on.

<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

</TabItem>

<TabItem value="python" label="Python" default>

```python
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="ruby" label="Ruby" default>

```python
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="csharp" label="C#" default>

```csharp
driver.Execute("smartui.takeScreenshot=<Your Screenshot Name>");
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor)driver).execute("smartui.takeScreenshot=<Your Screenshot Name>");
```

</TabItem>
</Tabs>

### For capturing full page screenshot in Native Apps <NewTag value="BETA" bgColor="#ffec02" color="#000" />

You can capture the full page screenshot for apps which have a scrolling functionality on their application user interface for your **Appium** functional testing.

Add the following **Webhook** to your test cases where we need to capture the screenshot of your application.

<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
let config = {
  screenshotName: '<Name of your screenshot>',
  fullPage: true,
  pageCount: 15   // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
await driver.execute("smartui.takeScreenshot", config);
```
</TabItem>

<TabItem value="python" label="Python" default>

```python
config = {
  'screenshotName': '<Your Screenshot Name>',
  'fullPage': True,
  'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute("smartui.takeScreenshot", config)
```
</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>',
  'fullPage': true,
  'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute("smartui.takeScreenshot", config)
```
</TabItem>

<TabItem value="csharp" label="C#" default>

```csharp
var config = new Dictionary<string, string> {
  {"screenshotName", "<Your Screenshot Name>"},
  {"fullPage", true},
  {"pageCount", 15} // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
driver.Execute("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "<Your Screenshot Name>");
config.put("fullPage", true);
config.put("pageCount", 15); // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
((JavascriptExecutor)driver).execute("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

:::note 
Please note that this webhook is only applicable to <b>native app screenshots</b> and has known limitations. You can use an optimized value of page count (between 1 and 20) to get the best results of your full page screenshots, according to your use case.
:::

For additional information about appium framework please explore the documentation [here](https://www.lambdatest.com/support/docs/getting-started-with-lambdatest-automation/)


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
      <span className="breadcrumbs__link"> Getting Started with appium Visual Regression  </span>
    </li>
  </ul>
</nav>
