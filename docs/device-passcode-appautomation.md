---
id: device-passcode-appautomation
title: Device Passcode in App Automation on Real Devices
sidebar_label: Device Passcode
description: Run automated tests on iOS apps that require a device passcode during execution on real devices.
keywords:
  - device passcode automation
  - ios passcode
  - appium automation
  - authentication testing
  - security testing
  - mdm apps
  - enterprise apps
  - testmu ai ios
  - real devices
url: https://www.testmuai.com/support/docs/device-passcode-appautomation/
site_name: TestMu AI
slug: device-passcode-appautomation/
canonical: https://www.testmuai.com/support/docs/device-passcode-appautomation/
---

import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
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
          "name": "Device Passcode in App Automation",
          "item": `${BRAND_URL}/support/docs/device-passcode-appautomation/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/device-passcode-appautomation/"
    },
    "headline": "Device Passcode in App Automation on Real Devices",
    "description": "Run automated tests on iOS apps that require a device passcode during execution on real devices.",
    "url": "https://www.testmuai.com/support/docs/device-passcode-appautomation/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "device passcode automation",
      "ios passcode",
      "appium automation"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Capability to Enable Passcode (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "{\n    \"platformName\": \"ios\",\n    \"deviceName\": \"iPhone 16\",\n    \"platformVersion\": \"18\",\n    \"isRealMobile\": True,\n    #highlight-next-line\n    \"enablePasscode\": True\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Capability to Enable Passcode (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "{\n    \"platformName\": \"android\",\n    \"deviceName\": \"Samsung Galaxy S25\",\n    \"platformVersion\": \"15\",\n    \"isRealMobile\": True,\n    #highlight-next-line\n    \"enablePasscode\": True\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" /> 

For certain use cases, you may need to perform tests on devices that are **passcode-protected**. Apps handling sensitive data (for example, **banking apps**, **enterprise apps**, or apps distributed through **MDM**) often enforce device passcodes for enhanced security.  

<BrandName />’s **Device Passcode in Automation** enables you to run such automated tests seamlessly on real devices.

:::note Plus Plan Feature
This feature is available exclusively with the **Real Device Plus Automation Cloud** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::

---

## Use Cases

- Validate apps requiring a system passcode prompt before login or secure workflows.  
- Ensure authentication flows function correctly when the device is protected by a passcode.  
- Automate enterprise test cases where passcodes are enforced by MDM policies.  

---

## Supported Platforms

| Platform | Version      |
|----------|--------------|
| iOS      | 14 and above |
| Android  | 11 and above |

---

## Default Passcode
- **iOS:**  `123456`  
- **Android:**  `1234`  


## Capability to Enable Passcode

Use the `enablePasscode` capability to configure passcode-protected devices during automation testing.  

| Capability        | Type    | Default | Description |
|-------------------|---------|---------|-------------|
| **enablePasscode** | Boolean | `false` | Enable passcode devices for running tests. Use `true` to start the session with a system passcode configured. |

<Tabs>
  <TabItem value="ios" label="iOS">


```python
{
    "platformName": "ios",
    "deviceName": "iPhone 16",
    "platformVersion": "18",
    "isRealMobile": True,
    #highlight-next-line
    "enablePasscode": True
}
```

  </TabItem>
  <TabItem value="android" label="Android">



```python
{
    "platformName": "android",
    "deviceName": "Samsung Galaxy S25",
    "platformVersion": "15",
    "isRealMobile": True,
    #highlight-next-line
    "enablePasscode": True
}
```

  </TabItem>
</Tabs>

:::note
- Passcode entry screens are **not visible** in the stream for security reasons. You may see a blank screen briefly during automation.  
- Enabling passcode for iOS Devices may increase the setup time of your test by **25–30 seconds** compared to regular sessions.  
:::

