---
id: accessibility-native-app-automation-test
title: Native App Accessibility Automation
sidebar_label: Automation
description: Detect and report accessibility issues automatically using TestMu AI Accessibility Native App Automationv, aligned with WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Automation
    - Accessibility Testing Settings
    - Android Accessibility 
    - iOS Accessibility
url: https://www.testmu.ai/support/docs/accessibility-android-automation-test/
site_name: LambdaTest
slug: accessibility-native-app-automation-test/
canonical: https://www.testmu.ai/support/docs/accessibility-native-app-automation-test/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Android Test",
          "item": `${BRAND_URL}/support/docs/accessibility-android-automation-test/`
        }]
      })
    }}
></script>
<BrandName /> now enables native Accessibility Automation Testing for Android and iOS apps using Appium. This feature helps developers and QA teams to validate the accessibility of their mobile apps programmatically by leveraging <BrandName />'s device cloud.

With built-in support for `lambda-accessibility-scan`, this integration ensures that your apps are tested for compliance with accessibility standards and best practices like WCAG (Web Content Accessibility Guidelines).

## Prerequisites
Before getting started, ensure the following:

- You have a <BrandName /> account.
- <BrandName /> credentials (username & access key).
- App uploaded to <BrandName /> App Storage (lt://APP_ID).
- Access to a valid Android or iOS device on <BrandName />.

> Native app accessibility automation supports both Android and iOS applications.

## Step 1: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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

## Step 2: Upload your Application
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

## Step 3: Configure required Capabilities
To enable accessibility testing, the following two configurations are mandatory:

- Enable accessibility in capabilities:
```python
"accessibility": True
```

- Invoke scan via script:
```python
driver.execute_script("lambda-accessibility-scan")
```

You may call `lambda-accessibility-scan` multiple times to scan different app screens or flows.


:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Sample Script

```python
from curses import flash
import time
# import requests
from appium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest
import os
from appium import webdriver
from appium.options.android import UiAutomator2Options
import sys
from selenium.webdriver.common.by import By
from appium.webdriver.client_config import AppiumClientConfig


options = UiAutomator2Options()
options.load_capabilities({
    "platform": "android",
    "platformVersion": "14",
    "deviceName": "Galaxy S23 Ultra",
    "isRealMobile": True,
    "app" : "lt://YOUR_APP_ID",
    "accessibility": True,
    "buildName": "Accessibility-lambda",
    "idleTimeout": 1800,
    "build": "Accessibility Native App",
    "name": "Android App Accessibility",
    "devicelog": True,
    "visual": True,
})
url = "https://YOUR_LT_USERNAME:YOUR_LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub" 

client_config = AppiumClientConfig(
    remote_server_addr=url,
    ignore_certificates=True,
    direct_connection=True
)

driver = webdriver.Remote(client_config.remote_server_addr, options = options, client_config=client_config)
driver.implicitly_wait(2)

time.sleep(10)
driver.execute_script("lambda-accessibility-scan")
time.sleep(10)
driver.find_element(By.CSS_SELECTOR, '#username').send_keys("Pbtest1") # Example CSS selector
driver.execute_script("lambda-accessibility-scan")

driver.quit()
```

> App Accessibility automation is available for iOS 16.5 and later versions.


## Step 4: Execute and Monitor your Tests
Run the following command in the directory where your project has been saved to execute your build.

```bash
python3 test.py
```

## Accessibility Dashboard and Reporting
You can check the complete detailed report on the [Accessibility Dashboard](https://accessibility.lambdatest.com/automation)

<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/6.png').default} alt="automation-dashboard" className="doc_img"/>

