---
id: xcui-visual-regression
title: Getting Started With Visual Regression Testing Using XCUI On SmartUI Real Devices
sidebar_label: XCUI
description: Dive into our detailed XCUI Visual Regression support documentation for step-by-step guidance! Efficiently perform visual testing, manage applications, and ensure your mobile apps are visually perfect before launch.
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

url: https://www.lambdatest.com/support/docs/xcui-visual-regression/
site_name: LambdaTest
slug: xcui-visual-regression/
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
          "item": "https://www.lambdatest.com/support/docs/xcui-visual-regression/"
        }]
      })
    }}
></script>

XCUI (XCTest UI) is Apple's native UI testing framework used for testing iOS applications. It is part of the XCTest framework and allows developers to write UI automation tests for iOS apps. In this documentation, you will learn step-by-step how to perform regression testing and find Visual UI Regression bugs easily with the help of Smart Testing.

## Prerequisites

- Your LambdaTest [Username and Access key](https://accounts.lambdatest.com/security).
- Access to an **iOS** app (.ipa) and an **iOS Test** app (.ipa file).
- Go to [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) and login along with your credentials.

:::tip Sample repo
If you do not have any **iOS** app (.ipa) and an **iOS Test** app (.ipa) file, you can run your sample tests on LambdaTest by using our sample :link: [XCUI app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/prod-ios-app.ipa) and a sample :link: [XCUI Test App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/prod-ios-test-app.ipa).

Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.
<a href="https://github.com/LambdaTest/lambdatest-xcui" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Real Device </b> for executing your `XCUI` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Step 2: Set up your Authentication

Now, you need to export your environment variables LT_USERNAME and LT_ACCESS_KEY that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
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

## Step 3: Update your App Configurations

> It should be in your app configurations then only you can perform the XCUI integration.
- Update this [dependency](https://swiftpackageindex.com/LambdaTest/lambdatest-xcui) in your test classes. You can do it as follows:

```java
import XCTest
import SmartuiXcui // importing the package
final class MyAppUITests: XCTestCase {
  func testExample() throws {
      // launch application
      let app = XCUIApplication()
      app.launch()
      // take screenshot
      let ltApp = LTApp()
      try ltApp.screenshot(name: "screenshotName")
  }
}
```

Now build your application.

## Step 4: Upload your Application

To begin testing, upload your iOS application (.ipa file) to LambdaTest's servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your LambdaTest Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_IOS_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_IOS_APP>"" --form "type=\"xcuit-ios\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your ios application in the above URL in place of `<PATH_OF_YOUR_IOS_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 5: Upload Your Test Suite

Upload your XCUI test suite (.ipa) file to LambdaTest servers using our REST API.

The following sample cURL command shows how to upload a test suite:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"" --form "type=\"xcuit-ios\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your ios application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 5: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:
 
> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the fourth step) and **TEST_SUITE_ID** (generated in the fifth step) in the below command.

```javascript
curl --location 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "app" : "APP_ID", //enter your app-id
    "testSuite": "TEST_SUITE_ID", //enter your test-suite id
    "device" :  ["iPhone 13-16"], //enter your device names
    "smartUI.project": "XCUI-SmartUI-Project",
    "build" : "Proverbial-XCUITest",
    "video" : true,
    "queueTimeout": 10800,
    "idleTimeout": 150,
    "devicelog": true,
    "network": false,
    "only-testing" : ["LambdaUiKitIOSUITestsLaunchTests"],
    "smartUI.cropStatusBar" : true,
    "smartUI.cropNavigationBar" : true
}'
```

> You can check the executed builds over at [LambdaTest SmartUI](https://smartui.lambdatest.com/).

:::
## How to use Sharding

---

1. Firstly, create a folder on your local.
2. Download the HyperExecute CLI file and put it under this folder. You may download HyperExecute CLI from either of the following ways:
- Download it from our HyperExecute documentation page [here](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), or
- "Get Started" through HyperExecute [onboarding](https://hyperexecute.lambdatest.com/quickstart) and download the CLI.
3. Refer to the sample `.ipa` files and `.yaml` file given below. Put all of them under this folder.
- [ProverbialTest.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/ProverbialTest.ipa)
- [LambdaUiKitIOS.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/LambdaUiKitIOS.ipa) 

Refer to the sample `.yaml` file here

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios
autosplit: true
maxRetries: 2
retryOnFailure: true
globalTimeout: 180    #MAXQUEUETIMEOUT

framework:
  name: "ios/xcui"
  args:
    buildName: "XCUIT"
    video: true
    networkLog: true
    deviceLog: true
    
    # You can use either the appId (APP1234567) or provide the path of the application using appPath.

    #highlight-next-line
    appPath: LambdaUiKitIOS.ipa
    # We have used the appPath here instead of appId

    # You can use either the APP ID (APP1234567) or provide the path of the application.

    #highlight-next-line
    testSuiteAppId: lt://APP10160202521675167637685231
    # We have used the testSuiteAppID here instead of testSuitePath

    deviceSelectionStrategy: all
    devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16"]

    smartUI:
      project: "Espresso-SmartUI-Project"

    shards:
      mappings:
      - name: shard1
        strategy: "only-testing/skip-testing"
        values: ["<className>/<className/testName>"]
     - name: shard2
       strategy: "only-testing/skip-testing"
       values: ["<className>/<className/testName>", "<className>/<className/testName>"]
```

:::tip When shards are added

If you are using the `deviceSelectionStrategy: all`, then in that case all the mentioned shards will be executed on all the devices.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on 2 devices (2 Shards * 2 Devices).

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on any one device from the list provided.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on any device (2 shards * any device mentioned).

:::

:::caution When shards aren't added

If you are using the `deviceSelectionStrategy: all`, then in that case all the tests will be executed on all the devices based on the concurrency. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be auto distributed on the devices based on the max concurrency.


If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned tests will be executed on any one device from the list provided. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be executed on any one device.

:::

## Filters in Sharding
You can filter the Classes / Tests that you'd like to execute using filters.
Here's an example of the same.

```java
filters:
      attributes:
      - type: className
        values: ["LambdaUiKitIOSUITests","LambdaUiKitIOSUITestsLaunchTests"]
      - type: testName
        values: ["LambdaUiKitIOSUITests/testverifyAppLaunch"]
```
This example will run only the 2 classes & one test as mentioned from the TestSuite.

## XCTestPlan in Sharding
To implement the XCTestPlan in Sharding, add the `xctestplan` flag along with `app` and `testSuite` in the [framework](https://www.lambdatest.com/support/docs/hyperexecute-yaml-version0.2/#framework) flag as shown below:

```yaml
framework:
  name: "ios/xcui"
  args:
    "app" : "lt://APP_ID",
    "testSuite": "lt://TEST_SUITE_ID",
    "xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
```

> Refer the documentation to learn how to use [XCTestPlan feature](/support/docs/xctestplan/).

## Smart Crop With SmartUI

The all-new **Real Device mobile notification status bar and navigation bar crop** feature in SmartUI allows you to take your visual regression testing workflows to the next level. With Smart Crop, you can crop the status bar and navigation bar or footer from screenshots, enabling them to focus solely on the core UI elements during visual comparisons.

By leveraging machine learning algorithms, it accurately detects and crops the status bar and navigation bar from screenshots. With precise image processing techniques, SmartUI precisely identifies the location of status bar elements. By excluding it from visual comparisons, the focus is solely on critical UI elements.  

| Original Screenshot | Cropped Screenshot |
|---------------------|--------------------|
| <img loading="lazy" src={require('../assets/images/smart-visual-testing/screenshot.webp').default} alt="Profile" width="1360" height="603" className="doc_img"/> | <img loading="lazy" src={require('../assets/images/smart-visual-testing/cropped_ss.jpg').default} alt="Profile" width="1360" height="603" className="doc_img"/> |