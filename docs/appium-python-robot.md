---
id: appium-python-robot
title: Robot With Appium
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

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **Robot** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **Robot** for application testing with **Appium** on **LambdaTest**.
2. Learn more about Desired Capabilities for Appium testing.
3. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-robot" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing App automation testing with Appium, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Install the latest stable Python build from the [official website](https://www.python.org/downloads/).
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Setting up virtual environment

---

### Creation of virtual environment

**For mac/linux** :
```python
   python3 -m virtualenv venv
```
### Activating the virtual environment
**For mac/linux** :
```python
   source venv/bin/activate
```
These commands will create a new virtual environment name `venv` and activate it.


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

Clone the LambdaTest’s [LT-appium-python-robot](https://github.com/LambdaTest/LT-appium-python-robot) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-python-robot
cd LT-appium-python-robot
```

### 3. Set up your authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://appautomation.lambdatest.com/).

Replace LambdaTest `username` and `accesskey` in the `common.robot` file as mentioned below:

```js title="common.robot"
*** Settings ***
Library  AppiumLibrary

*** Variables ***
// highlight-start
${username}         username
${accesskey}        accesskey
// highlight-end
${REMOTE_URL}       https://${username}:${accesskey}@mobile-hub.lambdatest.com/wd/hub
${TIMEOUT}          3000

*** Keywords ***
Open test app
    Open Application  ${REMOTE_URL}  platformName=${platform}  platformVersion=${version}  deviceName=${deviceName}  visual=${visual}  network=${network}  isRealMobile=${isRealMobile}   app=${app}   name=Robot Framework Sample Test    build=Appium Python Robot

Close test app
    Close Application
```

### 4. Write your automation script

To get started, here is an example of sample test on our sample Android and iOS App shown below. You can write or add your own Appium automation scripts in `*StepDef.py` directory to run different tests on your app.

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

### Configure the test capabilities

You need to update your capabilities in `Makefile` files. In this sample project, we have provided the examples for running tests on both **Android** and **iOS** apps. We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code for a single test are defined as:

```python title="Makefile"
test_Android1:
	robot --variable version:10 --variable platform:Android --variable deviceName:"Galaxy S20" --variable isRealMobile:true --variable visual:true --variable network:false --variable console:false --variable app:"APP_URL" Tests/Android.robot

test_iOS1:
	robot --variable version:14 --variable platform:iOS --variable deviceName:"iPhone 11" --variable isRealMobile:true --variable visual:true --variable network:false --variable console:false --variable app:"APP_URL" Tests/IOS.robot
```

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Executing The Tests

1. Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

2. Execute the following command to run your test on LambdaTest platform:

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
      Robot With Appium
</span>
    </li>
  </ul>
</nav>
