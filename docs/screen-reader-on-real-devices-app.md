---
id: screen-reader-on-real-devices-app
title: Screen Reader (TalkBack) for Android Application
sidebar_label: Screen Reader
description: Test your app's accessibility with TestMu AI's Screen Reader. Navigate through app elements with spoken descriptions on real Android devices, ensuring compliance with WCAG standards.
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
url: https://www.testmu.ai/support/docs/screen-reader-on-real-devices-app
site_name: LambdaTest
slug: screen-reader-on-real-devices-app
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
          "name": "Screen Reader on Real Devices App",
          "item": "https://www.lambdatest.com/support/docs/screen-reader-on-real-devices-app/"
        }]
      })
    }}
></script>

Manual accessibility testing is crucial to ensure that your mobile apps and websites are fully compliant with the Web Content Accessibility Guidelines (WCAG). This guarantees that your websites are usable by people with disabilities, regardless of their device or browsing capabilities.

LambdaTest's Live Screen Reader feature empowers you to perform manual accessibility testing on real Android devices, allowing you to navigate through app elements with spoken descriptions of the UI—similar to the [Google TalkBack](https://support.google.com/accessibility/android/topic/3529932?hl=en&ref_topic=9078845) functionality. This feature enables comprehensive accessibility testing to ensure compliance with WCAG standards.



## Accessing Screen Reader in Real Device App Testing

**Step 1:** Navigate to **Real Devices** > **App Testing**.

**Step 2:** Select the app you want to test and choose a device. Once selected, click on the **Start button** to launch the session.

> Make sure the device supports accessibility features — look for the **Accessibility icon** next to the device name.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/Acessiblity_Phone_selection.png').default} className="doc_img"/>

**Step 3:** After the session starts, open the **Screen Reader** option from the sidebar and use the **toggle to enable or disable the TalkBack** functionality.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/Accessiblity_TalkBack_toggle.png').default} className="doc_img"/>

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
| Move to previous/next item | Control + Option + (Left/Right arrow) |  Ctrl + Alt + (Left/Right arrow) |
| Activate/open element | Control + Option + Space | Ctrl + Alt + Space|
| Go back | Esc|Esc |
| Pause or resume speech |Control + Option + Z |Ctrl + Alt + Z |
| Read from next item |Control + Option + P | Ctrl + Alt + P|
| Move up the slider | Control + Option + U|Ctrl + Alt + U|
| Move down the slider | Control + Option + D| Ctrl + Alt + D |
| Go to home screen | Control + Option + H|Ctrl + Alt + H |
| Go to recents | Control + Option + R| Ctrl + Alt + R|
| Go to quick settings | Control + Option + Q|Ctrl + Alt + Q |


