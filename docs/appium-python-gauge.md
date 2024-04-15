---
id: appium-python-gauge
title: Gauge With Appium
sidebar_label: Gauge
description: Complete guide to running your first Gauge Appium automated test script on LambdaTest Real Device Cloud Platform. Test on 3000+ Real Devices.
keywords:
  - python gauge
  - appium
  - gauge
  - python gauge appium tutorial
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/appium-python-gauge/
site_name: LambdaTest
slug: appium-python-gauge/
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
          "name": "Python With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-python-gauge/"
        }]
      })
    }}
></script>

## Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **Gauge** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Gauge** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-gauge" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

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

1. Clone the LambdaTest’s [LT-appium-python-gauge](https://github.com/LambdaTest/LT-appium-python-gauge) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-python-gauge
cd LT-appium-python-gauge
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

An automation script for the sample application available above has been provided below. 

```python title="get_started.py"
from sqlite3 import Time
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from getgauge.python import step
from step_impl.utils.driver import Driver

@step("changes color to pink")
def change_color():
  colorElement = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/color")))
  colorElement.click()

@step("changes the text to Proverbial")
def chnage_text():
    textElement = WebDriverWait(Driver.driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ID, "com.lambdatest.proverbial:id/Text")))
    textElement.click()

@step("toast will be visible")
def toast_visible():
    toastElement = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/toast")))
    toastElement.click()

@step("notification will be visible")
def notification():
  notification = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/notification")))
  notification.click()

@step("perform the speed test")
def speedTest():
  speedTest = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/speedTest")))
  speedTest.click()

@step("back to home")
def home():
  home = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/buttonPage")))
  home.click()
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object.Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

```python title="driver.py"
        caps['name'] = 'Gauge Sample Test'
        caps['build'] = 'Python_Gauge_LambdaTest'
        caps['isRealMobile'] = 'true'
        caps['platformVersion'] = '11'
        caps['platform'] = 'Android'
        caps['deviceName'] = 'Galaxy S21 Ultra 5G'
        #highlight-next-line
        caps['app'] = 'APP_URL'   #add app url here
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
npm install -g @getgauge/cli
set PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python    #for Windows
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python  #for MacOS/Linux
```

2. Run the following command in the directory where your project has been saved to execute your build.

```bash
gauge run specs
```

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
      Gauge With Appium
</span>
    </li>
  </ul>
</nav>
