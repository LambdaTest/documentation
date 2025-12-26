---
id: appium-firetv
title: Fire TV With Appium
sidebar_label: Fire TV Stick
description: Complete guide to running your first FireTV Appium automated test script on LambdaTest Real Device Cloud Platform. Test on 3000+ Real Devices.
keywords:
  - python appium
  - firetv
  - python appium tutorial
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/appium-firetv/
site_name: LambdaTest
slug: appium-firetv/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';

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
          "name": "Fire TV With Appium",
          "item": `${BRAND_URL}/support/docs/appium-firetv/`
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> 
## Tutorial To Run Your First Test On <BrandName />

---

In this topic, you will learn how to configure and run your **Fire TV** automation testing scripts with **Appium** on **<BrandName /> Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Fire TV** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of <BrandName />.

:::tip Sample repo

All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/lambdatest/LT-appium-firetv" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to <BrandName /> username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [<BrandName /> Profile](https://accounts.lambdatest.com/detail/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Run your first test

---

### 1. Upload your application
Upload your **Fire TV** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**
 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/fireos-sample-app.apk"" -F "name="fireos_app""
`}
</CodeBlock>
</div>

<!-- **Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/fireos-sample-app.apk" -F "name=fireos-sample-apk"
`}
</CodeBlock>
</div> -->

:::tip

- If you do not have any **.apk** file, you can run your sample tests on <BrandName /> by using our sample :link: [FireTV app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/fireos-sample-app.apk).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### 2. Clone the sample project

1. Clone the LambdaTest’s [LT-appium-firetv](https://github.com/LambdaTest/LT-appium-firetv) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-firetv
cd LT-appium-firetv
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


```python title="firetv.py"
from xml.dom.expatbuilder import Rejecter
from appium import webdriver
from selenium.webdriver.common.by import By
import time


def getCaps():
    desired_cap= {
        "deviceName" : "Amazon Fire TV Stick",
        "platformVersion" :  "7",
        "platformName":"fireos",
        "isRealMobile":True,
        "build": "firetv",
        "video": True,
        "app":"APP_URL",  #Add app url here
        "network": False,
        "geoLocation": "RU",
        "devicelog": True,
        "visual":True
    }

    return desired_cap

def runTest():
    username = "YOUR_LAMBDATEST_USERNAME"           #Add your username here
    accessToken = "YOUR_LAMBDATEST_ACCESSKEY"       #Add your accessKey here

    gridUrl = "mobile-hub-internal.lambdatest.com/wd/hub"

    # capabilities
    desired_cap = getCaps()
    url = "http://"+username+":"+accessToken+"@"+gridUrl

    print("Initiating remote driver on platform: " +
          desired_cap["deviceName"]+" browser: "+" version: "+desired_cap["platformVersion"])

    start = time.time()
    driver = webdriver.Remote(
        desired_capabilities=desired_cap,
        command_executor=url
    )

    # run test
    print(driver.session_id)
    time.sleep(10)

    inputfield = driver.find_element(by = By.ID, value ="enterText")
    inputfield.send_keys("https://ifconfig.me")

    time.sleep(2)

    inputfield = driver.find_element(by = By.ID, value ="JustAButton")
    inputfield.click()

    time.sleep(10)
    list2 = driver.find_element(by= By.XPATH, value="//*[@resource-id='ip_address_cell']")
    print(list2.text)

    time.sleep(50)

    driver.execute_script("lambda-status=passed")

    driver.quit()
    end = time.time()

    print("time taken: ", end - start)


if __name__ == "__main__":
    runTest()
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

**Supported Model:**
- Device: `"Amazon Fire TV Stick"` ; OS Version:`"7"`

**Supported Capabilities:**
Same as Android.

**Platform:**
`"fireos"`

```python title="firetv.py"
def getCaps():
    desired_cap= {
        "deviceName" : "Amazon Fire TV Stick",
        "platformVersion" :  "7",
        "platformName":"fireos",
        "isRealMobile":True,
        "build": "firetv",
        "video": True,
        "app":"APP_URL",  #Add app url here
        "network": False,
        "geoLocation": "RU",
        "devicelog": True,
        "visual":True
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
python firetv.py
```

:::tip
If you are unable to run the automation script with the above mentioned commands try **'python3'** command except for **'python'**.
:::

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Additional Links

---

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
      Fire TV With Appium
      </span>
    </li>
  </ul>
</nav>
