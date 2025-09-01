---
id: appium-rokutv
title: Roku TV With Appium
sidebar_label: Roku TV
description: Complete guide to running your first RokuTV Appium automated test script on LambdaTest Real Device Cloud Platform. Test on 10000+ Real Devices.
keywords:
  - python appium
  - rokutv
  - python appium tutorial
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/appium-rokutv/
site_name: LambdaTest
slug: appium-rokutv/
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
          "name": "Roku TV With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-rokutv/"
        }]
      })
    }}
></script>

## Tutorial To Run Your First Test On LambdaTest


As smart TVs continue to grow in popularity, relying solely on manual testing is no longer sufficient. Automating Roku TV testing provides broader device coverage, enhances user experience by validating remote-based navigation, and eliminates repetitive manual tasks. It also helps uncover issues earlier in the development cycle, ensuring a smooth and consistent experience across different Roku TV models. 
In this guide, you will learn how to configure and run your **Roku TV** automation testing scripts with **Appium Roku WebDriver** on **LambdaTest Real Device Cloud platform**.
> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br /> 
---

## Objective



By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Roku TV** with [**Appium Roku WebDriver**](https://github.com/headspinio/appium-roku-driver).
2.  Understand and configure the core capabilities required for your Roku WebDriver test suite.
3.  Explore the advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-rokutv" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

---
## Prerequisites

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).
---
## Supported Models ##

| Device                      | OS Version             |
|-----------------------------|------------------------|
|        Roku Ultra           | 11                     |
|        Roku Express         | 11                     |
---
## Run your first test


### 1. Upload your application
Upload your **Roku TV** application (.zip file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**
 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/roku-sample-app.zip"" -F "name="roku_app""
`}
</CodeBlock>
</div>

<!-- **Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/roku-sample-app.zip" -F "name=roku-sample-app"
`}
</CodeBlock>
</div> -->

:::tip

- If you do not have any **.zip** file, you can run your sample tests on LambdaTest by using our sample :link: [RokuTV app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/roku-sample-app.zip).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### 2. Clone the sample project

1. Clone the LambdaTest’s [LT-appium-rokutv](https://github.com/LambdaTest/LT-appium-rokutv) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-rokutv
cd LT-appium-rokutv
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

An automation script for the sample application available above has been provided below. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

**Info:**
Before running the script, please make sure that the file webDriver.py from Step 2, is in the same directory as this file.

```python title="main.py"
from appium import webdriver
import os
import time
from appium.options.android import UiAutomator2Options


def getCaps():
    desired_caps = {
        "automationName": "Roku",
        "deviceName": "Roku Ultra",
        "platformVersion": "11",
        "platformName": "roku",
        "isRealMobile": True,
        "build": "Roku Testing",
        "app": "APP_URL",   # Enter app url here
        "network": False,
        "devicelog": True,
        "privateCloud": True,
        "visual": True,
        "idleTimeout": 1800,
    }
    return desired_caps


def runTest():
    if os.environ.get("LT_USERNAME") is None:
        # Enter LT username below if environment variables have not been added
        username = "<YOUR_LT_USERNAME>"
    else:
        username = os.environ.get("LT_USERNAME")

    if os.environ.get("LT_ACCESS_KEY") is None:
        # Enter LT accesskey below if environment variables have not been added
        accesskey = "<YOUR_LT_ACCESS_KEY>"
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    # grid url
    gridUrl = "mobile-hub.lambdatest.com/wd/hub"

    # capabilities
    desired_cap = getCaps()
    url = "https://" + username + ":" + accesskey + "@" + gridUrl

    print("Initiating remote driver:")
    driver = webdriver.Remote(
        options=UiAutomator2Options().load_capabilities(desired_cap),
        command_executor=url
    )

    # run test
    print(driver.session_id)

    # Simulate remote control actions
    driver.execute_script("roku: pressKey", {"key": "Down"})
    driver.execute_script("roku: pressKey", {"key": "Down"})
    time.sleep(1)
    driver.execute_script("roku: pressKey", {"key": "Right"})
    driver.execute_script("roku: pressKey", {"key": "Up"})
    driver.execute_script("roku: deviceInfo")
    time.sleep(1)
    driver.execute_script("roku: getApps")
    driver.execute_script("roku: pressKey", {"key": "Right"})

    driver.quit()


if __name__ == "__main__":
    runTest()
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

**Supported Capabilities:**
Please check at the end of the doc.

**Platform:**
`"roku"`

```python title="main.py"
    caps = {
       "automationName": "Roku",
       "deviceName": "Roku Express",     #We also support "Roku Ultra"
       "platformVersion": "11",
       "isRealMobile": True,
       "platformName": "roku",
       "build": "Roku Sample Test",
       "app": "APP_URL"          #Add app id here
       "visual": True,
       "devicelog": True
   }

```

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

1. Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

2. Run the following command in the directory where your project has been saved to execute your build.

```python
python main.py
```

:::tip
If you are unable to run the automation script with the above mentioned commands try **'python3'** command except for **'python'**.
:::

### List of Capabilities supported by Roku:

| KEY              | VALUES                                                                 | CAPABILITY DESCRIPTION                                                                 |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| automationName   | TYPE: STRING <br/> `roku`                                              | Tells Appium to use the Roku Appium Driver.                                           |
| *deviceName      | TYPE: STRING <br/> `Roku Ultra`                                        | Name of the device.                                                                   |
| isRealDevice     | TYPE: BOOLEAN <br/> DEFAULT: TRUE <br/> `video=TRUE` <br/> OR <br/> `video=FALSE` | It makes sure that the device being allocated is a Real device.                       |
| *platformName    | TYPE: STRING <br/> `roku`                                              | Name of the OS.                                                                       |
| *platformVersion | TYPE: STRING <br/> `11`                                                | OS version.                                                                           |
| build            | TYPE: STRING <br/> DEFAULT: Untitled <br/> `build=iOS Small Run`       | You can group your tests like a job containing multiple tests.                        |
| *app             | TYPE: STRING <br/> `app=lt://APP100201061631704657918380`              | Accepts App URL returned after uploading an app on the LambdaTest servers.            |
| visual           | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `visual=TRUE` <br/> OR <br/> `visual=FALSE` | Command by command screenshots will be recorded at each test step. By default off.    |
| video            | TYPE: BOOLEAN <br/> DEFAULT: TRUE <br/> `video=TRUE` <br/> OR <br/> `video=FALSE`  | Video recording of the complete screen.                                               |
| devicelog        | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `devicelog=TRUE` <br/> OR <br/> `devicelog=FALSE` | Enable Device logs.                                                                   |

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Supported Commands
We utilise the Appium Roku Driver to run tests on Roku via Appium, here's a list of all the commands the driver supports from the project's [README](https://github.com/headspinio/appium-roku-driver?tab=readme-ov-file#roku-commands):

|Command|Parameters|Description|
|-------|----------|-----------|
|`roku: pressKey`|`key`|Press the remote key whose value matches `key` (must be one of the [supported key values](https://developer.roku.com/en-ca/docs/developer-program/debugging/external-control-api.md#keypress-key-values) from the Roku documentation). As addressed in the documentation, Roku TVs also support additional keys such as `PowerOff` and `PowerOn`. |
|`roku: deviceInfo`||Get information about the Roku device|
|`roku: getApps`||Get a list of apps installed on the device. The response will be a list of objects with the following keys: `id`, `type`, `subtype`, `version`, and `name`.|
|`roku: activeApp`||Get information about the active app, in the same format as `roku: getApps`.|
|`roku: activateApp`|`appId` (required), `contentId`, `mediaType`|Launch an app with the corresponding `appId`. Optionally include `contentId` and `mediaType` information (with the same properties as described above for the `activateApp` command)|
|`roku: selectElement`|`elementId` (required) |Moves the focus on an element having locator XPath as `elementId`. If it is unable to focus on the element, the driver will respond with an error.|
|`roku: playerState`||Get the state of the media player. The data will be returned as a JSON object, corresponding to the information included in the [query/media-player ECP result](https://developer.roku.com/en-ca/docs/developer-program/dev-tools/external-control-api.md#querymedia-player-example)
|`roku: deepLink`|`contentId`, `mediaType`|As described in the [Roku dev docs](https://developer.roku.com/en-ca/docs/developer-program/discovery/implementing-deep-linking.md#using-ecp-commands-for-testing-deep-linking), you can deep link into content in the running application using a content ID and media type. For this command, `contentId` is required, and `mediaType` defaults to `movie` and must be one of the [valid media types](https://developer.roku.com/en-ca/docs/developer-program/discovery/implementing-deep-linking.md#mediatype-behavior). Note that this command acts on the currently-running app. If you want to test deep-linking into an app that is not launched, use `activateApp` instead.|
|`roku: ecpInput`|`params`|This command allows calling the `/input` ECP command directly. An arbitrary set of key/value pairs can be sent in as a JSON object. No url-encoding of the values needs to be done. For example, to represent the parameters in the ECP command `POST /input?acceleration.x=0.0&acceleration.y=0.0&acceleration.z=9.8` from the ECP docs, you would construct a `params` of `{"acceleration.x": "0.0", "acceleration.y": "0.0", "acceleration.z": "9.8"}`|

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
      Roku TV With Appium
</span>
    </li>
  </ul>
</nav>
