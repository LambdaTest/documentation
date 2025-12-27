---
id: app-automation-app-sim
title: App Automation Using Emulators and Simulators on TestMu AI
sidebar_label: App Automation (Emu/Sim)
description: Learn how to run app automated tests on using Emulators and Simulators on TestMu AI.
keywords:
  - app automation emulators simulators
  - app automation emulators 
  - app automation simulators
url: https://www.lambdatest.com/support/docs/app-automation-on-emulators-simulators/
site_name: LambdaTest
slug: app-automation-on-emulators-simulators/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "App Automation Using Emulators and Simulators on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/app-automation-on-emulators-simulators/"
        }]
      })
    }}
></script>

LambdaTest enables developers and testers to automate mobile app testing using cloud-based emulators and simulators. This eliminates the need for physical devices, streamlining the process of validating app functionality across a wide range of configurations. 

<div className="ytframe"> 
<div className="youtube" data-embed="ZcgYzi60Nmo" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

---

In this documеntation, learn how to run app automated tests on Emulators and Simulators using LambdaTest virtual testing cloud. 

:::info Note

Currently, App Automation is available for Emulators and Simulators in the Beta phase, with support for the Appium framework. To use this feature, [Contact Sales](https://www.lambdatest.com/contact-us).
:::

## Prerequisites
---

Bеforе you gеt startеd with App Automation on LambdaTеst, makе surе you havе thе following prеrеquisitеs in placе: 

1. [Sign up for a LambdaTеst account](https://accounts.lambdatest.com/register) if you havеn't alrеady. 

2. Install [Appium Java Client](https://github.com/appium/java-client).

3. A LambdaTest Username and Access Key.

4. Ensure you have an access to an **Android** app (*.apk* or *.aab* file) or an **iOS** *zip* file (containing *.app* file).

:::tip

Don't have **.apk** or **.app** filеs? You can still run your samplе tеsts on LambdaTеst using our samplе Android and iOS applications, accеssiblе through thе following links:

* [Samplе Android App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Samplе iOS App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/firefox.zip) 

:::

## Run Your First Test
---

Here are the following steps to run your first app automated test on Emulators and Simulators.

### Step 1: Upload Your Application

Upload your **iOS** application (*.app* file) or **Android** application (*.apk* file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">
  <TabItem value="file" label="App file" default>

<Tabs className="docs__val">
<TabItem value="macos-file" label="Linux/macOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "<USERNAME>:<KEY>" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'  
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "<USERNAME>:<KEY>" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"' 
`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
  <TabItem value="url" label="App URL" default>

<Tabs className="docs__val">
<TabItem value="macos-url" label="Linux macOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-url" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

:::info Note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the Step 2.

:::

### Step 2: Write Your Automation Script

1. Write your automation script in your preferred language that Appium framework supports. 

In the below test script, ensure to update the `app_url`, `username` and `accesskey`. 


:::info Set the Capability
To run the test on Emulator/Simulator, set the `isRealMobile` capability to `false`.
:::

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>

```python
# Tested on python3, Selenium 4.9.0, Appium-Python-Client 2.2.0

from appium import webdriver
from selenium.webdriver.common.by import By
import time


def startingTest():
    print(f"Starting test")
    desiredCap = caps[0].copy()

    print(
        f"deviceName {desiredCap['lt:options'].get('deviceName')}, platformVersion {desiredCap['lt:options'].get('platformVersion')}"
    )

    try:
        driver = webdriver.Remote(command_executor=url, desired_capabilities=desiredCap)
    except Exception as e:
        print("err", e)
        return

    try:
        print(f"driver created")
        time.sleep(10)

        ctx = driver.current_context
        print("ctx", ctx)
        sessionId = driver.session_id
        print("sessionId", sessionId)
        isKeyBoardShown = driver.is_keyboard_shown()
        print(f"isKeyboardShown {isKeyBoardShown}")
        isLocked = driver.is_locked()
        print("isLocked", isLocked)
        isInstalled = driver.is_app_installed("com.example.QAapp")
        print("isInstalled", isInstalled)

        print(driver.page_source)
        elem = driver.find_element(By.ID, "com.example.QAapp:id/webpage").click()
        print("element", elem)
        time.sleep(2)

        driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
            "ThisIsDemoText"
        )
        driver.find_element(By.ID, "websiteName").clear()
        elem = driver.find_element(By.ID, "com.example.QAapp:id/findButton")
        print("element", elem)

        driver.find_element(By.ID, "com.example.QAapp:id/websiteName").click()
        params = {"command": "input-text", "text": "thisIsMyText"}
        result = driver.execute_script("lambda-adb", params)
        print("result", result)
        time.sleep(2)

        driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
            "https://www.ifconfig.me"
        )
        driver.find_element(By.ID, "findButton").click()
        time.sleep(2)
        driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
            "https://google.com"
        )
        driver.find_element(By.ID, "findButton").click()
        time.sleep(2)

        if desiredCap["lt:options"].get("tunnel"):
            driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
                "http://localhost.lambdatest.com:8001"
            )
            driver.find_element(By.ID, "findButton").click()
            time.sleep(5)

        driver.orientation = "LANDSCAPE"

        print("Quitting test")
        driver.quit()
    except Exception as e:
        print(e)
        driver.quit()


USERNAME = "YOUR_USERNAME"
ACCESS_KEY = "YOUR_ACCESS_KEY"
url = "https://{USERNAME}:{ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub"

buildName = "Testing build"
numTests = 1

caps = [
    {
        "lt:options": {
            "w3c": True,
            "platformName": "Android",
            "allowInvisibleElements": True,
            "deviceName": "Galaxy A33 5G",
            "platformVersion": "13",
            "app": "YOUR_APP_URL",
            "devicelog": True,
            "build": buildName,
            "visual": True,
            "network": True,
            "tunnel": False,
            "video": True,
            "isRealMobile": false,
        },
    }
]
startingTest()
```

</TabItem>
<TabItem value="iOS" label="iOS" default>

```python
from appium import webdriver
from selenium.webdriver.common.by import By
import time


def simulatorTest():
    print(f"Starting test")
    try:
        driver = webdriver.Remote(command_executor=url, desired_capabilities=caps)
    except Exception as e:
        print(f"Error creating driver", e)
        return

    try:
        print(f"driver created")
        time.sleep(10)
        for i in range(0, 1):
            ctx = driver.current_context
            print("ctx", ctx)

            sshot = driver.get_screenshot_as_base64()
            print("sshot", sshot[:100])

            print("Getting page source")
            print("page_src1", driver.page_source)

            sessionId = driver.session_id
            print("sessionId", sessionId)
            driver.is_keyboard_shown()
            isLocked = driver.is_locked()
            print("isLocked", isLocked)
            element = driver.switch_to.active_element
            print(f"element", element)
            element.send_keys("https://google.com\n")
            time.sleep(5)

            if caps["lt:options"].get("tunnel"):
                driver.find_element(By.NAME, "url").send_keys(
                    "http://localhost.lambdatest.com:8001\n"
                )
                time.sleep(5)

            driver.find_element(By.NAME, "url").send_keys("https://mylocationnow.io/\n")
            time.sleep(5)

            driver.find_element(By.NAME, "url").send_keys("http://www.fast.com\n")
            time.sleep(2)

        print(f"Quitting")
        driver.quit()
    except Exception as e:
        print(f', error platformVersion {caps["lt:options"]["platformVersion"]} :: {e}')
        driver.execute_script("lambda-status=failed")
        driver.quit()


# prod
url = "https://{USERNAME}:{ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub"

buildName = "Testing build"
numTests = 1


caps = {
    "lt:options": {
        "w3c": True,
        "platformName": "ios",
        "deviceName": "iPhone 12",
        "platformVersion": "14.5",
        "app": "YOUR_APP_URL",
        "devicelog": True,
        "build": buildName,
        "visual": True,
        "network": True,
        "video": True,
        "isRealMobile": false,
    },
}


simulatorTest()
```

</TabItem>
</Tabs>

2. Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

<Tabs className="docs__val">
  <TabItem value="androidXML" label="Android" default>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">


    <test name="AppTest 1">
        <parameter name="version" value="11"/>
        <parameter name="platform" value="Android"/>
        <parameter name="device" value="Galaxy S21 Ultra 5G"/>
        <classes>
            <class name="AndroidApp"/>
        </classes>
    </test>

    <test name="AppTest 2">
        <parameter name="version" value="11"/>
        <parameter name="platform" value="Android"/>
        <parameter name="device" value="Galaxy S21"/>
        <classes>
            <class name="AndroidApp"/>
        </classes>
    </test>
</suite>
```

</TabItem>

<TabItem value="iOSXML" label="iOS" default>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">


    <test name="iOSApp 1">
        <parameter name="version" value="14"/>
        <parameter name="platform" value="iOS"/>
        <parameter name="device" value="iPhone 11"/>
        <classes>
            <class name="iOSApp"/>
        </classes>
    </test>

    <test name="iOSApp 2">
        <parameter name="version" value="14"/>
        <parameter name="platform" value="iOS"/>
        <parameter name="device" value="iPhone 12 Pro"/>
        <classes>
            <class name="iOSApp"/>
        </classes>
    </test>
</suite>
```

</TabItem>
</Tabs>

### Step 3: Execute Your Test Case

Debug and run your code. Run `iOSApp.java` or `AndroidApp.java` in your editor.

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at LambdaTest [App Automation Dashboard](https://appautomation.lambdatest.com/build).

## More About Desired Capabilities
---

Sample Capabilities for both Android and iOS are mentioned below -
<Tabs className="docs__val">
<TabItem value="androidCaps" label="Android" default>

```java
{
    "deviceName": "Galaxy Tab S4",
    "platformName": "android",
    "platformVersion": "10",
    "app": "App_url",
    "visual": true,
    "console": true,
    "deviceOrientation": "PORTRAIT",
    "build": "new-12",
    "isRealMobile": false,
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
    "isRealMobile": false,
    "visual": true,
    "console": true,
    "build": "lt-web-4",
    "network": false,
}
```

</TabItem>
</Tabs>


