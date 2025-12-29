---
id: hyperexecute-appium-testing
title: Appium Testing - Real Device On HyperExecute
sidebar_label: Appium - Real Device
description: Maximize Appium test execution with HyperExecute – Explore TestMu AI's support documentation for seamless automation testing.
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.testmu.ai/support/docs/hyperexecute-appium-testing
site_name: LambdaTest
slug: hyperexecute-appium-testing
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Getting Started With Appium Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-appium-testing/"
        }]
      })
    }}
></script>
This page outlines how to execute your Appium tests on HyperExecute using TestNG with YAML 0.2
> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Appium.

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- Setup the Environmental Variable
- Ensure you have Appium’s [Java client library](https://github.com/appium/java-client) installed.
- Access to an **Android** app (.apk or .aab file) or an **iOS** app (.ipa file).

:::tip Sample repo
All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/hyperexecute-appium-testng/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::
> If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

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

## Steps to Run Your Test

### Step 1: Upload your Application
Upload your <b>_iOS_</b> application (.ipa file) or <b>_android_</b> application (.apk file) to the LambdaTest servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication. Make sure to add the path of the <b>appFile</b> in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">
  <TabItem value="file" label="App file" default>

<Tabs className="docs__val">
<TabItem value="macos-file" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' --form 'name="Android_App"' --form 'appFile=@"<RELATIVE_PATH_OF_YOUR_APP>"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"<RELATIVE_PATH_OF_YOUR_APP>""
`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
  <TabItem value="url" label="App URL" default>

<Tabs className="docs__val">
<TabItem value="macos-url" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-url" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

### Step 2: Configure your Test Script
Write Your Automation Script in the client language of your choice from the ones supported by Appium. An automation script for the sample applications have been provided below.

Here is a sample automation script in Java for the sample app downloaded above. Ensure to update the `app_url`, `username` and `accesskey` in the below code.

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>

```java reference title="AndroidApp.java"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/main/java/AndroidApp.java
```

</TabItem>
<TabItem value="iOS" label="iOS" default>

```java reference title="iOSApp.java"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/main/java/iOSApp.java
```

</TabItem>
</Tabs>

### Step 3: Update your XML file
Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

<Tabs className="docs__val">
<TabItem value="androidXML" label="Android" default>
```xml reference title="android-parallel.xml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/test/java/android-parallel.xml
```
</TabItem>

<TabItem value="iOSXML" label="iOS" default>
```xml reference title="ios-parallel.xml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/test/java/ios-parallel.xml
```
</TabItem>
</Tabs>

### Step 4: Configure YAML and Execute your Script
<Tabs className="docs__val">
<TabItem value="androidYAML" label="Android" default>
```yaml reference title="android-parallel.yaml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/yaml/android/hyp-rd-android-multiple.yaml
```
</TabItem>

<TabItem value="iOSYAML" label="iOS" default>
```yaml reference title="ios-parallel.yaml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/yaml/ios/hyp-rd-ios-multiple.yaml
```
</TabItem>
</Tabs>

> The ```region``` parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:
- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

### Step 5: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Configure Smart UI

To configure SmartUI with HyperExecute, you need to simply add a capability in your test file:

```bash java
"smartUI.project": "<YOUR_SMARTUI_PROJECT_NAME>"
```

> Refer to the [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to understand how to write the capability in different languages.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/appium/capability-generator.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## More About Desired Capabilities
Sample Capabilities for both android and iOS are mentioned below -
<Tabs className="docs__val">
<TabItem value="androidCaps" label="Android" default>

```java
{
  "deviceName": "Galaxy Tab S4",
  "platformName": "android",
  "platformVersion": "10",
  "app": "App_url",
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
  "app": "App_url",
  "isRealMobile": True,
  "visual": True,
  "console": True,
  "build": "lt-web-4",
  "network": True,
}
```

</TabItem>
</Tabs>

> For more details, please refer to our guide on [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

## Navigation in Automation Dashboard

Every test run on the HyperExecute has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/appium/hyperexecute-appium.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

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
      Appium Testing 
      </span>
    </li>
  </ul>
</nav>
