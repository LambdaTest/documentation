---
id: appium-rokutv
title: Roku TV With Appium
sidebar_label: Roku TV
description: Complete guide to running your first RokuTV Appium automated test script on LambdaTest Real Device Cloud Platform. Test on 3000+ Real Devices.
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

---

In this topic, you will learn how to configure and run your **Roku TV** automation testing scripts with **Roku WebDriver** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Roku TV** with **Roku WebDriver**.
2.  Understand and configure the core capabilities required for your Roku WebDriver test suite.
3.  Explore the advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-rokutv" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Run your first test

---

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
:::tip NOTE

You can find LambdaTest's python Roku client for your reference at [lt-python-roku-client](https://github.com/LambdaTest/lt-python-roku-client) 

:::

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
from webDriver import WebDriver
import time

def run(hub_url: str, caps: dict):
    try:
        web_driver = WebDriver(hub_url, caps)


        web_driver.apps()
        time.sleep(5)
        web_driver.launch_the_channel("dev")

        for i in range(5):
            t = time.time()
            web_driver.press_btn("select")
            t2 = time.time()
            print("select time :",t2-t)
            time.sleep(2)


        web_driver.quiet()
        print("Test passed")
    except  Exception as e:
        print(f"Error: {e}")
        print("Test failed")
    
if __name__ == "__main__":

    if os.environ.get("LT_USERNAME") is None:
        # Enter LT username here if environment variables have not been added
        username = "username"
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        # Enter LT accesskey here if environment variables have not been added
        accessToken = "accessToken"
    else:
        accessToken = os.environ.get("LT_ACCESS_KEY")

    hub_url = "mobile-hub-internal.lambdatest.com/wd/hub/session"

    url = "https://"+username+":"+accessToken+"@"+hub_url
    
    caps = {
        "deviceName": "Roku Express",      #We also support "Roku Ultra"
        "platformVersion": "11",
        "isRealMobile": True,
        "platformName": "roku",
        "build": "Roku Sample Test",
        "app": "APP_URL"          #Add app url here
        "video": True,
        "visual": True,
        "devicelog": True
    }
    t1 = time.time()
    run(url, caps)
    t2 = time.time()
    print("sec:",t2-t1)
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

**Supported Model:**
- Device: `"Roku Ultra"` ; OS Version:`"11"`
- Device: `"Roku Express"` ; OS Version:`"11"`

**Supported Capabilities:**
Please check at the end of the doc.

**Platform:**
`"roku"`

```python title="main.py"
    caps = {
        "deviceName": "Roku Express",     #We also support "Roku Ultra"
        "platformVersion": "11",
        "isRealMobile": True,
        "platformName": "roku",
        "build": "Roku Sample Test",
        "app": "APP_URL"          #Add app url here
        "video": True,
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

| KEY                  | VALUES                                                                                                                                                                   | CAPABILITY DESCRIPTION                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*deviceName         | TYPE: STRING <br/> `iPhone 13`                                                                                                                                           | Name of the device.                                                                                                                                                                                                                                                                                                                                                           |
| isRealDevice                | TYPE: BOOLEAN <br/> DEFAULT: TRUE <br/> `video=TRUE` <br/> OR <br/> `video=FALSE`                                                                                        | It makes sure that the device being allocated is a Real device.                                                                                                                                                                                                                                                                                                                                      |
| \*platformName       | TYPE: STRING <br/> `ios`                                                                                                                                                 | Name of the OS.                                                                                                                                                                                                                                                                                                                                                               |
| \*platformVersion    | TYPE: STRING <br/> `14`                                                                                                                                                  | OS version.                                                                                                                                                                                                                                                                                                                                                                   |
| build                | TYPE: STRING <br/> DEFAULT: Untitled <br/> `build=iOS Small Run`                                                                                                         | You can group your tests like a job containing multiple tests.                                                                                                                                                                                                                                                                                                                |
| \*app                | TYPE: STRING <br/> `app=lt://APP100201061631704657918380`                                                                                                                | Accepts App URL returned after uploading an app on the LambdaTest servers.                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    |
| visual               | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `visual=TRUE` <br/> OR <br/> `visual=FALSE`                                                                                     | Command by command screenshots will be recorded at each test step. By default the flag is set as off. Note: test execution time will increase if it’s set as ‘true’.                                                                                                                                                                                                          |
| video                | TYPE: BOOLEAN <br/> DEFAULT: TRUE <br/> `video=TRUE` <br/> OR <br/> `video=FALSE`                                                                                        | Video recording of the complete screen.                                                                                                                                                                                                                                                                                                                                       |
| devicelog            | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `devicelog=TRUE` <br/> OR <br/> `devicelog=FALSE`                                                                                | Enable Device logs.                                                                                                                                                                                                                                                                                                                                                           |

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).

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
