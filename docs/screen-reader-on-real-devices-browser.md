---
id: screen-reader-on-real-devices-browser
title: Screen Reader (TalkBack) for Android - Web Browser
sidebar_label: Screen Reader
description: Test the accessibility of your website with the Screen Reader from TestMu AI. Using actual Android devices, navigate through elements with spoken descriptions to make sure they adhere to WCAG standards.
keywords:
  - image injection
  - app test automation
  - camera image
  - QR code scanning
  - Barcode scanning
  - testmu ai capture code
  - framework on testmu ai
  - app testing appium
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/screen-reader-on-real-devices-browser/
site_name: TestMu AI
slug: screen-reader-on-real-devices-browser/
canonical: https://www.testmu.ai/support/docs/screen-reader-on-real-devices-browser/
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
          "name": "Screen Reader on Real Devices Web",
          "item": `${BRAND_URL}/support/docs/screen-reader-on-real-devices-browser/`
        }]
      })
    }}
></script>

Manual accessibility testing is crucial to ensure that your mobile apps and websites are fully compliant with the Web Content Accessibility Guidelines (WCAG). This guarantees that your websites are usable by people with disabilities, regardless of their device or browsing capabilities.

<BrandName />'s Live Screen Reader feature empowers you to perform manual accessibility testing on real Android devices, allowing you to navigate through app elements with spoken descriptions of the UI—similar to the [Google TalkBack](https://support.google.com/accessibility/android/topic/3529932?hl=en&ref_topic=9078845) functionality. This feature enables comprehensive accessibility testing to ensure compliance with WCAG standards.

> This feature is currently in **Beta**


## Accessing Screen Reader in Real Device Browser Testing

**Step 1:** Click on the **Real Devices** > **Browser Testing**

**Step 2:** Select your required device and add your url to test and start session.

**Step 3:** Click on the **screen reader** option from toolbar and use toggle to enable and disable talkBack feature on your device.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/talkback.png').default} className="doc_img"/>

## Supported Devices

 Screen feature is available on below android devices only to ensure a smooth rollout. We'll expand support to more devices based on feedback and performance insights only.

| Device |Android Version |
|--------|--------------|
|Google Pixel 8 Pro|Android 14|
|Samsung Galaxy S23|Android 13|
|Google Pixel 7 Pro|Android 13|
|Samsung Galaxy S22 5G|Android 12|
|Google Pixel 6 Pro|Android 12|

---
## How to Navigate using Keyboard Shortcuts

Users accessing your mobile website on an Android device with TalkBack enabled can interact through touch gestures or by using keyboard shortcuts via a Bluetooth keyboard. Both options enable them to carry out "TalkBack actions," such as navigating between elements or having content read aloud.

These two navigation methods function similarly, performing the same actions within the UI, ensuring that your site remains fully accessible, no matter the approach. Once your website meets WCAG standards using one method, it will be compatible with the other as well.

For the **Screen Reader** feature on android devices , use the following keyboard shortcuts to trigger the different actions :

| TalkBack Action | MacOS Keyboard Shortcut | Windows Keyboard Shortcut |
|-----------------|-------------------------|---------------------------|
| Move to previous/next item | Control + Option + (Left/Right arrow) |  Ctrl + (Left/Right arrow) |
| Activate/open element | Control + Option + Space | Ctrl + Alt + Space|
| Go back | Esc|Esc |
| Pause or resume speech |Control + Option + Z |Ctrl + Alt + Z |
| Read from next item |Control + Option + P | Ctrl + Alt + P|
| Move up the slider | Control + Option + U|Ctrl + Alt + U|
| Move down the slider | Control + Option + D| Ctrl + Alt + D |
| Go to home screen | Control + Option + H|Ctrl + Alt + H |
| Go to recents | Control + Option + R| Ctrl + Alt + R|
| Go to quick settings | Control + Option + Q|Ctrl + Alt + Q |
