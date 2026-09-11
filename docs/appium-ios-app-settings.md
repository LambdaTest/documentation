---
id: appium-ios-app-settings
title: iOS App Settings
sidebar_label: iOS App Settings
description: iOS App Settings are the permissions or preferences that can be enabled/disabled for an app through iOS settings.
keywords:
  - appium
  - ios
  - app settings
  - testmu ai ios
  - automation on testmu ai
  - ios app settings
  - app automation
  - real devices
url: https://www.testmuai.com/support/docs/appium-ios-app-settings/
site_name: TestMu AI
slug: appium-ios-app-settings/
canonical: https://www.testmuai.com/support/docs/appium-ios-app-settings/
---
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
          "name": "iOS App Settings",
          "item": `${BRAND_URL}/support/docs/appium-ios-app-settings/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-ios-app-settings/"
    },
    "headline": "iOS App Settings",
    "description": "iOS App Settings are the permissions or preferences that can be enabled/disabled for an app through iOS settings.",
    "url": "https://www.testmuai.com/support/docs/appium-ios-app-settings/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "appium",
      "ios",
      "app settings"
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
        "name": "How to use iOS app settings in App Automation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "params = {\"Permission Settings\":{\"Camera\":\"Off\", \"Location\":\"While using the app\"},\"Reset App\":\"On\",\"Next Page\":{\"Child Toggle\":\"On\"},\"Others\":\"White\",\"Slider-1\":\"0.1\", \"TextField-2\":\"ABCD\", \"TextField-1\":\"XYZ\"}\ndriver.execute_script(\"lambda-ios-settings\", params)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "We do not pass it inside Location object as shown",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "params = {\"Permission Settings\":{\"Location\":\"While using the app\", \"Precise Location\": \"On\"}}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Usage",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"platformName\": \"iOS\",\n    \"lt:options\": {\n        \"deviceName\": \"iPhone 15\",\n        \"platformVersion\": \"17\",\n        \"isRealMobile\": True,\n        \"app\": \"lt://APP_ID\",\n        \"updateAppSettings\": {\n            \"Permission Settings\": {\n                \"Location\": \"While using the app\",\n                \"Precise Location\": \"On\"\n            },\n            \"Allow Cross-Website Tracking\": \"On\",\n            \"Environment\": \"QA_1\",\n            \"Slider-1\": \"0.5\",\n            \"TextField-1\": \"sample text\"\n        }\n    }\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" /> 
**iOS App Settings** are the permissions or preferences that can be enabled/disabled for an app through iOS settings. Accessing the device settings is restricted on the iOS public cloud devices of <BrandName /> due to security constraints. However, in multiple cases, the native app must be tested for various permissions which can only be enabled and disabled with the settings app.

This document will guide you on how to access and use iOS settings for **App Automation session.**

:::note
This feature is supported only on iOS 14 and above devices.
:::

## How to use iOS app settings in App Automation

---

To make it easier for the user to access the iOS app settings, we have created a **lambda-hook**. This web-hook supports the opening and manipulation of the settings.

The hook `"lambda-ios-settings"` takes a JSON parameter which tells which settings we need to manipulate. Below shown is an example of the lambda hook written in python3.

```bash
params = {"Permission Settings":{"Camera":"Off", "Location":"While using the app"},"Reset App":"On","Next Page":{"Child Toggle":"On"},"Others":"White","Slider-1":"0.1", "TextField-2":"ABCD", "TextField-1":"XYZ"}
driver.execute_script("lambda-ios-settings", params)
```

If you look at the code snippet above you can see `params` which contains the **JSON object** for manipulating the iOS app settings. This JSON object contains **Permission settings**. Let’s learn more about that.


## iOS app settings Supported by Lambda Hook

---

### App-specific permission settings 
The permission settings are available in the OS and changed through permissions provided by the user.

**Supported permission settings**

Currently, App Automate supports the following permission settings:

- Camera

- Contacts

- Photos

- Notifications

- Location

- Precise Location

One important thing to remember while handling Permission Settings is that, we have to first take action on the **Permission Pop ups** from the app when they appear and then only those particular Permission Settings will be reflected in the app settings page. For example:

Let's say we pass Camera: "On" in the lambda hook’s preferences even before handling Camera’s permission popup from the app, the Camera key would be missing on the app settings page which would result in failure. So we have to be sure that we have handled the permission pop ups before calling lambda hook.

:::info

Note that we have separate key for Precise Location. We do not pass it inside Location object as shown:

```bash
params = {"Permission Settings":{"Location":"While using the app", "Precise Location": "On"}}
```

:::

### Custom App Settings 

These are the settings added by the app developer using the [iOS Settings Bundle](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/UserDefaults/Preferences/Preferences.html#//apple_ref/doc/uid/10000059i-CH6-SW11).

**Supported custom settings**

Currently, App Automate supports the following custom settings:

- Toggles

- Multivalued Settings

- Nested Settings

- Sliders

- Textfields

Apart from Textfields and Sliders, for every other settings, we have to pass the Name of that particular setting as the **key-value pair**. For example:

- "Reset App" : "On".

For **textfields and sliders**, we pass the index of that particular textfield or slider starting from 1 when we traverse from top to bottom. For example:

1. "Slider-1":"0.1",

2. "TextField-2":"ABCD"

The values in Slider are entered on a scale from 0-1 which means the values are not integers but decimals.

If any key is not present, we should get an error saying one of the keys is missing in the passed preferences.

### Remember

The title of the keys displayed on your iOS app settings page must be unique.


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
      iOS App Settings
      </span>
    </li>
  </ul>
</nav>
