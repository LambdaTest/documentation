---
id: screen-recorder-on-real-devices-app
title: Screen Recorder on Real Devices App
sidebar_label: Screen Recorder
description: Test camera functionalities in mobile apps with LambdaTest's Camera Image Injection. Support for QR codes, barcodes, and image capture across 3000+ real devices.
keywords:
  - image injection
  - app test automation
  - camera image
  - QR code scanning
  - Barcode scanning
  - lambdatest capture code
  - framework on lambdatest
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/screen-recorder-on-real-devices-app/
site_name: LambdaTest
slug: screen-recorder-on-real-devices-app/
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
          "name": "Screen Recorder on Real Devices App",
          "item": "https://www.lambdatest.com/support/docs/screen-recorder-on-real-devices-app/"
        }]
      })
    }}
></script>

Manual accessibility testing is crucial to ensure that your mobile websites are fully compliant with the Web Content Accessibility Guidelines (WCAG). This guarantees that your websites are usable by people with disabilities, regardless of their device or browsing capabilities.

LambdaTest's Live ScreenReader feature empowers you to conduct manual accessibility testing on real Android devices. It works similarly to Google TalkBack, enabling you to navigate your mobile app element by element and hear spoken descriptions of the UI.

## Supported Devices
In the first phase, this feature support will be limited to specific devices to reduce maintainability and facilitate an easier rollout.

| Device |Android Version |
|--------|--------------|
|Google Pixel 8 Pro|Android 14|
|Samsung Galaxy S24|Android 14|
|Samsung Galaxy S23|Android 13|
|Google Pixel 6 Pro|Android 13|
|Samsung Galaxy S22 5G|Android 12|
|Google Pixel 6 Pro|Android 12|

## Screen Recorder in Real Device App Testing

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select your required device and upload your application and click on Start button.

**Step 3:** Click on the screen recorder button and toggle it to enable in your device.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/talkback.png').default} className="doc_img"/>


## Talkback Keyboard Shortcuts
For the ScreenReader feature on Android devices, use the following keyboard shortcuts to trigger TalkBack actions :
| TalkBack Action | MacOS Keyboard Shortcut | Windows Keyboard Shortcut |
|-----------------|-------------------------|---------------------------|
| Move to previous/next item | Command + (Left/Right arrow) |  Ctrl + (Left/Right arrow) |
| Activate/open element |Control + Option + Space | Ctrl + ALT + Space|
| Go back | Esc|Esc |
| Pause or resume speech |Control + Option + Z |Ctrl + ALT + Z |
| Read from next item |Control + Option + P | Ctrl + ALT + P|
| Move up the slider | Control + Option + U|Ctrl + ALT + U|
| Move down the slider | Control + Option + D| Control + Option + D |
| Go to home screen | Control + Option + H|Ctrl + ALT + H |
| Go to recents | Control + Option + R| Ctrl + ALT + R|
| Go to quick settings | Control + Option + Q|Ctrl + ALT + Q |


