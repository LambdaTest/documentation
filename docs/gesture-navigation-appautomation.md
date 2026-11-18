---
id: gesture-navigation-appautomation
title: Gesture Navigation on Android Real Devices
sidebar_label: Gesture Navigation
description: Use the navigationMode capability to run Appium tests on Android real devices with gesture navigation instead of the 3-button navigation bar.
keywords:
  - gesture navigation
  - navigationMode capability
  - android gesture navigation
  - 3-button navigation
  - edge swipe back
  - appium real devices
  - edge-to-edge layout testing
  - testmu ai app automation

url: https://www.testmuai.com/support/docs/gesture-navigation-appautomation/
site_name: TestMu AI
slug: gesture-navigation-appautomation/
canonical: https://www.testmuai.com/support/docs/gesture-navigation-appautomation/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Gesture Navigation on Android Real Devices",
          "item": `${BRAND_URL}/support/docs/gesture-navigation-appautomation/`
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
      "@id": "https://www.testmuai.com/support/docs/gesture-navigation-appautomation/"
    },
    "headline": "Gesture Navigation on Android Real Devices",
    "description": "Use the navigationMode capability to run Appium tests on Android real devices with gesture navigation instead of the 3-button navigation bar.",
    "url": "https://www.testmuai.com/support/docs/gesture-navigation-appautomation/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "gesture navigation",
      "navigationMode capability",
      "android gesture navigation"
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
        "name": "Enabling Gesture Navigation via Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"lt:options\": {\n    \"platformName\": \"android\",\n    \"deviceName\": \"Galaxy S24\",\n    \"platformVersion\": \"14\",\n    \"isRealMobile\": true,\n    \"navigationMode\": \"gesture\"\n  }\n}"
      }
    ],
    "dateModified": "2026-11-11T12:00:00+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" />

By default, every Android real device on <BrandName /> starts a session in **3-button navigation** (the Back, Home and Recents bar). Set the `navigationMode` capability to `gesture` to switch the device to **gesture navigation** for that session. The device goes back to its original navigation mode when the session ends.

## Use Cases

- Test flows that rely on system gestures, such as a swipe from the left or right screen edge to go back.
- Check edge-to-edge layouts without the 3-button bar taking up screen space.
- Verify that in-app swipes near the screen edges do not clash with system gestures.

## Supported Platforms

| Item | Support |
|------|---------|
| Platform | Android real devices only |
| Android version | Android 10 and above |
| Device makes | Google Pixel and Samsung Galaxy (phones and tablets) |
| Session types | Appium app automation and Appium browser automation on real devices |

:::note Not supported

- **iOS:** session creation fails. See [Errors](#errors).
- **Android 9 and below:** these versions have no system gesture navigation. The session starts and runs in 3-button navigation.
- **Other device makes** (Xiaomi, OnePlus, Motorola, Vivo, Oppo and others): the capability is ignored and the session runs in 3-button navigation.
- **Virtual devices (emulators):** the capability is ignored.
- **Manual (Live) real device sessions:** there is no navigation mode option.

:::

## Enabling Gesture Navigation via Capabilities

Add the `navigationMode` capability inside `lt:options`:

```json
{
  "lt:options": {
    "platformName": "android",
    "deviceName": "Galaxy S24",
    "platformVersion": "14",
    "isRealMobile": true,
    "app": "YOUR_APP_URL",
    // highlight-next-line
    "navigationMode": "gesture"
  }
}
```

| Capability | Type | Accepted value | Default |
|------------|------|----------------|---------|
| `navigationMode` | String | `gesture` (case-insensitive) | Not set: 3-button navigation |

:::info

- There is no `threeButton` value. To run in 3-button navigation, leave the capability out.
- For browser automation, replace the `app` capability with `browserName`.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

## What Changes in Gesture Mode

- A swipe inward from the left or right edge is the system **Back** action.
- A swipe up from the bottom edge goes **Home**. Swipe up and hold opens **Recents**.
- The 3-button bar is replaced by a thin gesture handle, so the app gets more screen height. Screenshots and video recordings show this layout.
- `pressKeycode(4)` (the Back key) works as before, in both modes.
- App swipes that start exactly at a screen edge can be taken by the system as Back or Home. Start such swipes a little inside the edge if you do not want the system gesture.

The example below performs an edge swipe that triggers **Back** in gesture mode, using UiAutomator2:

```java
driver.executeScript("mobile: swipeGesture", Map.of(
    "left", 0, "top", 1100, "width", 600, "height", 100,
    "direction", "right", "percent", 0.75, "speed", 2500));
```

## Errors

| Case | Result |
|------|--------|
| Any value other than `gesture` | Session creation fails with HTTP 400: `The capability navigationMode has value <x> which is not supported. Supported values are [gesture]` |
| Used with a non-Android platform | Session creation fails with HTTP 400: `navigationMode capability is not supported with <platform> platform` |
| Unsupported device make, Android 9 or below, or virtual device | No error. The session runs in 3-button navigation. |
