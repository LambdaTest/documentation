---
id: appium-androidtv
title: Android TV Automation
sidebar_label: Android TV
description: Learn how to automate Android TV apps using Appium with a step-by-step tutorial and sample Python code.
keywords:
  - android tv
  - appium
  - automation
  - androidtv
  - nvidia shield
  - python
url: https://www.testmuai.com/support/docs/appium-androidtv/
site_name: TestMu AI Docs
slug: appium-androidtv/
canonical: https://www.testmuai.com/support/docs/appium-androidtv/

---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/appium-androidtv/"
    },
    "headline": "Android TV Automation",
    "description": "Learn how to automate Android TV apps using Appium with a step-by-step tutorial and sample Python code.",
    "url": "https://www.testmuai.com/support/docs/appium-androidtv/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "android tv",
      "appium",
      "automation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials in the TestMu AI Profile; Install the latest Python build from the official website. We recommend using the latest version.; Make sure pip is installed in your system. You can install pip from pip documentation..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Configure Desired Capabilities (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "  DesiredCapabilities capabilities = new DesiredCapabilities();\n  HashMap<String, Object> ltOptions = new HashMap<String, Object>();\n\n  ltOptions.put(\"build\", \"Android TV Demo\");\n  ltOptions.put(\"name\", \"Android TV Demo\");\n  ltOptions.put(\"deviceName\", \"Nvidia Shield TV\");\n  ltOptions.put(\"platformVersion\", \"11\");\n  ltOptions.put(\"platformName\", \"androidtv\");\n  ltOptions.put(\"isRealMobile\", true);  \n  ltOptions.put(\"privateCloud\", true);\n  ltOptions.put(\"w3c\", true);\n  ltOptions.put(\"automationName\", \"UiAutomator2\");\n  ltOptions.put(\"app\", \"lt://APP_ID\");  \n  /* Optional Capability */\n  /* ltOptions.put(\"appPackage\", \"org.smarttube.stable\"); */\n\n  capabilities.setCapability(\"LT:Options\", ltOptions);"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<RealDeviceTag value="Real Device" />

# How to Automate Android TV Apps on TestMu AI

Automated smart TV testing on <BrandName /> runs your Appium scripts against real Android TV devices in the cloud, such as the Nvidia Shield TV on Android 11. This page shows how to upload your app, set the Android TV capabilities and send D-pad key events, so you can check remote-based navigation and app behavior in automated runs.

:::note Plus Plan Feature
This feature is available exclusively with the **Private Cloud** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::
 
---

## Objective

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Android TV** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of <BrandName />.

## Prerequisites

---

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to <BrandName /> username and accessKey. If you have not registered yet, you can do the same by visiting our <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>website</a>. You will be able to access the credentials in the [<BrandName /> Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

---
## Supported Models

| Device Model          | Platform Version |
|----------------------|------------------|
| Nvidia Shield TV      | Android 11       |

## Run Your First Test
---

### 1. Set Up Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName />. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set <BrandName /> `Username` and `Access Key` in environment variables with following commands.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### 2. Upload your application
Upload your **Android TV** application (.ipa file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

 <VerifiedTag value="Verified" />

 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "$LT_USERNAME:$LT_ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@smarttube_stable.apk" \
-F "name=androidtv_app" \
-F "type=androidtv"
`}
</CodeBlock>
</div>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/android-tv-real-device.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>



### 3. Configure Desired Capabilities

In your automation script, set up the **platform capability** to specify that you are testing on an Android TV device.

<VerifiedTag value="Verified" />

<Tabs>
<TabItem value="Java" label="Java" default>

```java
  DesiredCapabilities capabilities = new DesiredCapabilities();
  HashMap<String, Object> ltOptions = new HashMap<String, Object>();

  ltOptions.put("build", "Android TV Demo");
  ltOptions.put("name", "Android TV Demo");
  ltOptions.put("deviceName", "Nvidia Shield TV");
  ltOptions.put("platformVersion", "11");
  ltOptions.put("platformName", "androidtv");
  ltOptions.put("isRealMobile", true);  
  ltOptions.put("privateCloud", true);
  ltOptions.put("w3c", true);
  ltOptions.put("automationName", "UiAutomator2");
  ltOptions.put("app", "lt://APP_ID");  
  /* Optional Capability */
  /* ltOptions.put("appPackage", "org.smarttube.stable"); */

  capabilities.setCapability("LT:Options", ltOptions);
```

</TabItem>
</Tabs>

What each Android TV capability in the block above does:

| Capability | Value | What it does |
|------------|-------|--------------|
| `platformName` | `androidtv` | Runs the test on an Android TV device instead of a phone or tablet. |
| `deviceName` | `Nvidia Shield TV` | Picks the device model from [Supported Models](#supported-models). |
| `platformVersion` | `11` | Sets the Android version of that device. |
| `isRealMobile` | `true` | Runs the test on a real device. |
| `privateCloud` | `true` | Fetches the device from your organization's Private Cloud, which Android TV automation needs. |
| `automationName` | `UiAutomator2` | Uses the UiAutomator2 automation engine, which also sends the D-pad key events shown below. |
| `w3c` | `true` | Makes Appium use the W3C WebDriver protocol. |
| `app` | `lt://APP_ID` | Points to the app you uploaded in step 2. |
| `appPackage` | `org.smarttube.stable` | Optional. Names the package of the app to start. |

Shown below is an execution snapshot from TestMu AI Dashboard:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/execution-real-device.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

## Navigate With D-pad Key Events
---

An Android TV app is driven by its remote, so most steps in a TV test move focus with the D-pad and then select the focused item. Appium sends each remote button as an Android key event through the UiAutomator2 driver. These are the key codes from the [Android `KeyEvent` reference](https://developer.android.com/reference/android/view/KeyEvent):

| Remote button | Android key code | Value |
|---------------|------------------|-------|
| Up | `KEYCODE_DPAD_UP` | 19 |
| Down | `KEYCODE_DPAD_DOWN` | 20 |
| Left | `KEYCODE_DPAD_LEFT` | 21 |
| Right | `KEYCODE_DPAD_RIGHT` | 22 |
| Select (center) | `KEYCODE_DPAD_CENTER` | 23 |
| Back | `KEYCODE_BACK` | 4 |
| Home | `KEYCODE_HOME` | 3 |

In your test, press the keys in the order a viewer would:

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

// driver is the AndroidDriver session started with the capabilities above
driver.pressKey(new KeyEvent(AndroidKey.DPAD_DOWN));   // move focus down one row
driver.pressKey(new KeyEvent(AndroidKey.DPAD_RIGHT));  // move focus to the next tile
driver.pressKey(new KeyEvent(AndroidKey.DPAD_CENTER)); // select the focused item
driver.pressKey(new KeyEvent(AndroidKey.BACK));        // go back one screen
```

</TabItem>
<TabItem value="python" label="Python">

```python
# driver is the Appium session started with the capabilities above
driver.press_keycode(20)  # KEYCODE_DPAD_DOWN: move focus down one row
driver.press_keycode(22)  # KEYCODE_DPAD_RIGHT: move focus to the next tile
driver.press_keycode(23)  # KEYCODE_DPAD_CENTER: select the focused item
driver.press_keycode(4)   # KEYCODE_BACK: go back one screen
```

</TabItem>
</Tabs>

## Additional Links

---

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)




