---
id: appium-python-robot
title:  Appium with Robot
sidebar_label: Robot
description: Now you can run your Appium automation scripts using with Robot on LambdaTest Real Device Cloud Platform of 3000+ real mobile devices.
keywords:
  - appium
  - lambdatest python
  - lambdatest
  - framework on lambdatest
  - python
  - robot
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/appium-python-robot/
site_name: LambdaTest
slug: appium-python-robot/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

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
          "name": "Robot With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-python-robot/"
        }]
      })
    }}
></script>

In this documentation, you will learn how to trigger a automation script of **Robot** for application testing with **Appium** on LambdaTest, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of LambdaTest.

## Prerequisites

- Your LambdaTest [Username and Access key](https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).

## Set-up Your Virtual Environment for Linux/macOS

### Create your Virtual Environment

```python
python3 -m virtualenv venv
```

### Activate your Virtual Environment

```python
source venv/bin/activate
```
These commands will create a new virtual environment name `venv` and activate it.

## Setup Your Authentication

Replace LambdaTest `username` and `accesskey` in the `common.robot` file as mentioned below:

```js title="common.robot"
*** Settings ***
Library  AppiumLibrary

*** Variables ***

${platformName}         ios
#${platformVersion}     15  # Set your default version
${deviceName}           iPhone.*
${visual}               True
${network}              True
${isRealMobile}         True
${LT_APP_ID}            ''
${LT_GRID_URL}          ''
${TIMEOUT}              3000

*** Keywords ***

Open test app
    [Timeout]   ${TIMEOUT}
    ${CAPABILITIES}=    Create Dictionary
    ...   platformName=${platformName}
    ...   platformVersion=${version}
    ...   deviceName=${deviceName}
    ...   visual=${visual}
    ...   network=${network}
    ...   devicelog=${devicelog}
    ...   isRealMobile=${isRealMobile}
    ...   name=LT_Appium_Robot_App_iOS
    ...   build=LT_Appium_Robot_App_Automation
    ...   app=${LT_APP_ID}
    TRY
        ${REMOTE_URL}=    Set Variable If    '%{LT_GRID_URL}' == ''    mobile-hub.lambdatest.com    %{LT_GRID_URL}
    EXCEPT
        ${REMOTE_URL}=    Set Variable    mobile-hub.lambdatest.com
    END
    TRY
        ${APP_ID}=    Set Variable If    '%{LT_APP_ID}' == ''    lt://proverbial-ios    %{LT_APP_ID}
    EXCEPT
        ${APP_ID}=    Set Variable    lt://proverbial-ios
    END
    ${REMOTE_URL}=   Set Variable       https://%{LT_USERNAME}:%{LT_ACCESS_KEY}@${REMOTE_URL}/wd/hub

    Open Application  ${REMOTE_URL}  platformName=ios  platformVersion=${version}  deviceName=${deviceName}  visual=${visual}  network=${network}  devicelog=${devicelog}  isRealMobile=${isRealMobile}  app=${APP_ID}  name=LT_Appium_Robot_App_iOS  build=LT_Appium_Robot_App_Automation

Close test app
    Close All Applications
```

:::note

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-robot" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [LambdaTest Profile page](https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

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

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

### Step 4: Update your Automation Script

An automation script file `*StepDef.py` for the sample application given above has been provided here.

<Tabs className="docs__val">

<TabItem value="ios-script" label="iOS" default>

```python title="IOS.robot"
*** Settings ***

Resource  ../Resources/Common.robot

Test Setup  Common.Open test app
Test Teardown  Common.Close test app

*** Variables ***
${TIMEOUT}          3000

*** Test Cases ***

Example of connecting to Lambdatest via Robot Framework
	[Timeout]   ${TIMEOUT}
	Click element  id=color
	Click element  id=Text
	Click element  id=toast
	Click element  id=notification
	Click element  id=geoLocation
```

</TabItem>

<TabItem value="android-script" label="Android" default>

```python title="Android.robot"
*** Settings ***

Resource  ../Resources/Common.robot

Test Setup  Common.Open test app
Test Teardown  Common.Close test app

*** Variables ***
${TIMEOUT}          3000

*** Test Cases ***

Example of connecting to Lambdatest via Robot Framework
	[Timeout]   ${TIMEOUT}
	Click element  id=color
	Click element  id=Text
	Click element  id=toast

	Click element  id=notification
	Click element  id=geoLocation
	Sleep	2 seconds
	Click element  id=Home
	Sleep	2 seconds
	Click element  id=speedTest
	Sleep	2 seconds

	Click element  id=Browser
	Input Text   id=url	https://lambdatest.com
	Click element  id=find

```

</TabItem>

</Tabs>

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts `Makefile` file. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

```python title="Makefile"
test_Web_ios:
	robot --variable version:15 --variable platformName:ios --variable deviceName:"iPhone.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true Tests/AndroidIosWeb.robot

test_Web_Android:
	robot --variable version:11 --variable platformName:android --variable deviceName:"Galaxy.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true  Tests/AndroidIosWeb.robot	
```

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Execute the following command to run your test on LambdaTest platform:

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```bash
make test_iOS1
```

</TabItem>

<TabItem value="android" label="Android" default>

```bash
make test_Android1
```

</TabItem>

</Tabs>

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

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
      Robot With Appium
</span>
    </li>
  </ul>
</nav>
