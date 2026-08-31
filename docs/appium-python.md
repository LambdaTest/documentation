---
id: appium-python
title: "How to Run Appium Python Tests on TestMu AI"
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Python"
description: "Run Appium tests in Python on TestMu AI real Android and iOS devices, covering Vanilla Python, Behave, Robot, Gauge, and PyTest with full setup."
keywords:
  - python appium
  - python appium tutorial
  - appium behave python
  - appium robot framework python
  - appium gauge python
  - appium pytest
  - real devices
  - testmu ai cloud platform
  - app automation
  - appium automation

url: https://www.testmuai.com/support/docs/appium-python/
site_name: TestMu AI
slug: appium-python/
canonical: https://www.testmuai.com/support/docs/appium-python/
---


import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



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
          "name": "How to Run Appium Python Tests on TestMu AI",
          "item": `${BRAND_URL}/support/docs/appium-python/`
        }]
      })
    }}
></script>

# How to Run Appium Python Tests on TestMu AI
---

Running Appium Python tests on TestMu AI executes native and hybrid mobile automation on real Android and iOS devices. Set desired capabilities, upload your app, and run tests across Vanilla Python, Behave, Robot, Gauge, or PyTest, then view dashboard results.

**Supported on:** Real &amp; Virtual devices

## Prerequisites
---

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).
- For the **PyTest** framework, also install pytest on your system with the following pip command:

```bash
pip install pytest
```

## Set Your Credentials
---

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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

## Upload Your App
---

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

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

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

## Run a Test With Your Framework
---

Pick your framework below. Each tab contains the complete flow for that framework: the sample repository, the automation script, the test capabilities, and the command to execute your tests. The credentials and app upload you set above are shared across all of them.

<Tabs groupId="framework" queryString="framework">

<TabItem value="vanilla" label="Vanilla Python" default>

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```python title="ios.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
    "deviceName": "iPhone 12",
    "platformName": "ios",
    "platformVersion": "14",
    "isRealMobile": True,
    #highlight-next-line
    "app": "APP_URL",  # Enter app (.ipa) url 
    "build": "Python Vanilla iOS",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}


def startingTest():
    if os.environ.get("LT_USERNAME") is None:
        username = "username" #Add username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        accesskey = "accesskey" #Add accessKey here
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    try:
        driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
                                  username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
        time.sleep(3)
        colorElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "color")))
        colorElement.click()
        textElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Text")))
        textElement.click()
        toastElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "toast")))
        toastElement.click()
        notification = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "notification")))
        notification.click()
        time.sleep(3)
        geolocation = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "geoLocation")))
        geolocation.click()
        time.sleep(5)
        driver.back()
        home = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Home")))
        home.click()
        speedTest = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "speedTest")))
        speedTest.click()
        time.sleep(5)
        driver.back()
        browser = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Browser")))
        browser.click()
        url = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "url")))
        url.send_keys("https://www.testmuai.com")
        find = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "find")))
        find.click()
        driver.quit()
    except:
        driver.quit()


startingTest()
```

</TabItem>

<TabItem value="android" label="Android" default>

```python title="android.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
    "deviceName": "Galaxy S20",
    "platformName": "Android",
    "platformVersion": "10",
    #highlight-next-line
    "app": "APP_URL",  # Enter app (.apk) url
    "isRealMobile": True,
    "build": "Python Vanilla Android",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}


def startingTest():
    if os.environ.get("LT_USERNAME") is None:
        username = "username" #Add username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        accesskey = "accesskey" #Add accessKey here
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    try:
        driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
                                  username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
        colorElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/color")))
        colorElement.click()

        textElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ID, "com.lambdatest.proverbial:id/Text")))
        textElement.click()

        toastElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/toast")))
        toastElement.click()

        notification = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/notification")))
        notification.click()

        geolocation = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/geoLocation")))
        geolocation.click()
        time.sleep(5)

        driver.back()

        home = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/buttonPage")))
        home.click()

        speedTest = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/speedTest")))
        speedTest.click()
        time.sleep(5)

        driver.back()

        browser = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/webview")))
        browser.click()

        url = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/url")))
        url.send_keys("https://www.testmuai.com")

        find = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/find")))
        find.click()
        driver.quit()
    except:
        driver.quit()


startingTest()
```

</TabItem>


</Tabs>

:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```python title="iOS(.ipa)"
 desired_caps = {
    "deviceName":"iPhone 12",
    "platformName":"ios",
    "platformVersion":"14",
    "isRealMobile":True,
    #highlight-next-line
    "app":"YOUR_APP_URL",
    "build":"Python Vanilla iOS",
    "name":"Sample Test - Python",
    "network":False,
    "visual":True,
    "video":True
}
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```python title="Android(.apk)"
desired_caps = {
    "deviceName":"Galaxy S20",
    "platformName":"Android",
    "platformVersion":"10",
    "isRealMobile":True,
    #highlight-next-line
    "app":"YOUR_APP_URL",
    "build":"Python Vanilla Android",
    "name":"Sample Test - Python",
    "network":False,
    "visual":True,
    "video":True
}
```

</TabItem>

</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Run the following command in the directory where your project has been saved to execute your build.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```bash
python3 ios.py
```

</TabItem>

<TabItem value="android" label="Android" default>

```bash
python3 android.py
```

</TabItem>

</Tabs>

:::tip
If you are unable to run the automation script with the above mentioned commands try **'python'** command except for **'python3'**.
:::

</TabItem>

<TabItem value="behave" label="Behave">

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-behave" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. You can write or add your own Appium automation scripts in `*StepDef.py` directory to run different tests on your app.

<Tabs className="docs__val">

<TabItem value="android-stepdef" label="Android" default>

```python title="AndroidStepDef.py"
import sys
import os
path = os.getcwd()
sys.path.append(os.path.abspath(os.path.join(path, os.pardir)))
from time import time
from behave import given
from appium import webdriver
import appConfig as appConf
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@given("Start the android app automation test")
def startAndroidAppAutomationTest(self):
    if os.environ.get("LT_USERNAME") is None:
        #highlight-next-line
        username = "username" #Enter username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        #highlight-next-line  
        accesskey = "accesskey" #Enter accessKey here
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    driver = webdriver.Remote(
        command_executor="https://"+username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub",
        desired_capabilities=appConf.app_android_desired_caps
        )
    try:
        colorElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/color")))
        colorElement.click()

        textElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/Text")))
        textElement.click()

        toastElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/toast")))
        toastElement.click()

        notification = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/notification")))
        notification.click()

        geolocation = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/geoLocation")))
        geolocation.click()

        home = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/Home")))
        home.click()

        speedTest = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/speedTest")))
        speedTest.click()

        home = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/Home")))
        home.click()

        browser = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/Browser")))
        browser.click()

        url = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/url")))
        url.send_keys("https://www.testmuai.com")

        find = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ID,"com.lambdatest.proverbial:id/find")))
        find.click()

        driver.quit()
    except:
        driver.quit()
```

</TabItem>
<TabItem value="ios-stepdef" label="iOS" default>

```python title="iOSStepDef.py"
import sys
import os
path = os.getcwd()
sys.path.append(os.path.abspath(os.path.join(path, os.pardir)))
import appConfig as appConf
from behave import given
from appium import webdriver
import time
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@given("Start the ios app automation test")
def startIOSAppAutomationTest(self):
    if os.environ.get("LT_USERNAME") is None:
        #highlight-next-line
        username = "username" #Enter username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
      #highlight-next-line
        accesskey = "accesskey" #Enter accesskey herE
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    driver = webdriver.Remote(
        command_executor="https://"+username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub",
        desired_capabilities=appConf.app_ios_desired_caps
    )
    try:
        colorElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"color")))
        colorElement.click()

        textElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"Text")))
        textElement.click()

        toastElement = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"toast")))
        toastElement.click()

        notification = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"notification")))
        notification.click()
        time.sleep(3)

        geolocation = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"geoLocation")))
        geolocation.click()
        time.sleep(3)

        home = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"Back")))
        home.click()

        speedTest = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"speedTest")))
        speedTest.click()
        time.sleep(3)

        home = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"Back")))
        home.click()

        browser = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"Browser")))
        browser.click()

        url = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"url")))
        url.send_keys("https://www.testmuai.com")

        find = WebDriverWait(driver,20).until(EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID,"find")))
        find.click()

        driver.quit()
    except:
        driver.quit()

```

</TabItem>

</Tabs>

### Step 3: Configure the Test Capabilities

You need to update your capabilities in `appConfig.py` files. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code for a single test are defined as:


The capabilities for running tests on both **Android** and **iOS** apps are:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```python title="appConfig.py"
app_ios_desired_caps = {
  "lt:options": {
    "deviceName":"iPhone 12",
    "platformName":"ios",
    "platformVersion":"14",
    "build":"Python Behave - iOS",
    "name":"Sample Test iOS",
    #highlight-next-line
    "app":"APP_URL" ,#Enter app (.ipa) url here
    "isRealMobile":True,
    "network":False,
    "visual":True,
    "video":True,
    "w3c":True
  }
}
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>
<TabItem value="android-config" label="Android" default>

```python title="appConfig.py"
app_android_desired_caps = {
 	"lt:options": {
		"platformName": "android",
		"deviceName": "OnePlus 6",
		"platformVersion": "8",
    "build": "Python Behave - Android",
		"name": "Sample Test Android",
    #highlight-next-line
		"app": "APP_URL", #Enter app (.apk) url here
		"visual": True,
		"video": True,
    "w3c": True,
		"isRealMobile": True
	}
}
```


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Execute the following command to run your test on <BrandName /> platform:

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```bash
behave --tags @iosApp
```

</TabItem>

<TabItem value="android" label="Android" default>

```bash
behave --tags @androidApp
```

</TabItem>

</Tabs>

</TabItem>

<TabItem value="robot" label="Robot">

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-robot" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

#### Set-up Your Virtual Environment for Linux/macOS

Create your Virtual Environment:

```python
python3 -m virtualenv venv
```

Activate your Virtual Environment:

```python
source venv/bin/activate
```

These commands will create a new virtual environment name `venv` and activate it.

#### Setup Your Authentication

Replace <BrandName /> `username` and `accesskey` in the `common.robot` file as mentioned below:

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
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### Step 2: Update your Automation Script

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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts `Makefile` file. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

```python title="Makefile"
test_Web_ios:
	robot --variable version:15 --variable platformName:ios --variable deviceName:"iPhone.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true Tests/AndroidIosWeb.robot

test_Web_Android:
	robot --variable version:11 --variable platformName:android --variable deviceName:"Galaxy.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true  Tests/AndroidIosWeb.robot	
```

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Execute the following command to run your test on <BrandName /> platform:

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

</TabItem>

<TabItem value="gauge" label="Gauge">

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-gauge" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here.

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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

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

:::info
- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### Step 4: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
npm install -g @getgauge/cli
set PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python    #for Windows
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python  #for MacOS/Linux
```

- Run the following command in the directory where your project has been saved to execute your build.

```bash
gauge run specs
```

</TabItem>

<TabItem value="pytest" label="PyTest">

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-pytest" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```python title="ios.py"
from os import environ
import pytest
from appium import webdriver

@pytest.fixture(scope='function')
def test_setup_ios(request):
    test_name = request.node.name
    build = environ.get('BUILD', "Pytest IOS Sample")
    caps = {}
    caps["deviceName"] = "iPhone 11"
    caps["platformName"] = "iOS"
    caps["platformVersion"] = "14"
    caps["app"] = "lt://proverbial-ios"     #Enter the app (.ipa) url here
    caps["isRealMobile"] = True
    caps['build'] = build
    caps['name'] = test_name
    caps['project'] = project_name
    driver = webdriver.Remote("https://<username>:<accessKey>@mobile-hub.lambdatest.com/wd/hub", caps)   #Add LambdaTest username and accessKey here
    request.cls.driver = driver
    
    yield driver
    
    def fin():
        #browser.execute_script("lambda-status=".format(str(not request.node.rep_call.failed if "passed" else "failed").lower()))
        if request.node.rep_call.failed:
            driver.execute_script('lambda-status=failed')
        else:
            driver.execute_script('lambda-status=passed')
        driver.quit()
    request.addfinalizer(fin)
    
@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    # this sets the result as a test attribute for LambdaTest reporting.
    # execute all other hooks to obtain the report object
    outcome = yield
    rep = outcome.get_result()

    # set an report attribute for each phase of a call, which can
    # be "setup", "call", "teardown"
    setattr(item, "rep_" + rep.when, rep)
```

</TabItem>

<TabItem value="android" label="Android" default>

```python title="conftest.py"
from os import environ
import pytest
from appium import webdriver

@pytest.fixture(scope='function')
def test_setup_android(request):
    test_name = request.node.name
    build = environ.get('BUILD', "Pytest Android Sample")
    caps = {}
    caps["deviceName"] = "Galaxy S21 5G"
    caps["platformName"] = "Android"
    caps["platformVersion"] = "11"
    caps["app"] = "lt://proverbial-android"   #Enter the app (.apk) url here
    caps["isRealMobile"] = True
    caps['build'] = build
    caps['name'] = test_name
    caps['project'] = project_name
    driver = webdriver.Remote("https://<username>:<accessKey>@mobile-hub.lambdatest.com/wd/hub", caps)  #Add LambdaTest username and accessKey here
    request.cls.driver = driver
    
    yield driver
    
    def fin():
        #browser.execute_script("lambda-status=".format(str(not request.node.rep_call.failed if "passed" else "failed").lower()))
        if request.node.rep_call.failed:
            driver.execute_script('lambda-status=failed')
        else:
            driver.execute_script('lambda-status=passed')
        driver.quit()
    request.addfinalizer(fin)
    
@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    # this sets the result as a test attribute for LambdaTest reporting.
    # execute all other hooks to obtain the report object
    outcome = yield
    rep = outcome.get_result()

    # set an report attribute for each phase of a call, which can
    # be "setup", "call", "teardown"
    setattr(item, "rep_" + rep.when, rep)
```

</TabItem>

</Tabs>

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```python title="iOS(.ipa)"
   caps = {
      "deviceName": "iPhone 11",
      "platformName": "iOS",
      "platformVersion": "14",
      "app": "lt://proverbial-ios"     # Enter the app (.ipa) URL here,
      "isRealMobile": True,
      "build": build,
      "name": test_name,
      "project": project_name
   }
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```python title="Android(.apk)"
   caps = {
      "deviceName": "Galaxy S21 5G",
      "platformName": "Android",
      "platformVersion": "11",
      "app": "lt://proverbial-android"     # Enter the app (.apk) URL here,
      "isRealMobile": True,
      "build": build,
      "name": test_name,
      "project": project_name
   }
```

</TabItem>

</Tabs>


:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Run the following command in the directory where your project has been saved to execute your build.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```bash
pytest test_ios.py
```

</TabItem>

<TabItem value="android" label="Android" default>

```bash
pytest test.py
```

</TabItem>

</Tabs>

:::tip
If you are unable to run the automation script with the above mentioned commands try using `python -m` before the given commands.
:::

</TabItem>

</Tabs>

## View Your Results
---

Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build). Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps
---

Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
- [Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks)

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
        How to Run Appium Python Tests on TestMu AI
      </span>
    </li>
  </ul>
</nav>
