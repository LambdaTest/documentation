---
id: screen-reader-voiceover-real-devices-app
title: Screen Reader (VoiceOver) on iOS
sidebar_label: Screen Reader (VoiceOver)
description: Test your app's accessibility with LambdaTest's Screen Reader (VoiceOver). Navigate through app elements with spoken descriptions on real iOS devices, ensuring compliance with WCAG standards.
keywords:
  - screen reader
  - voiceover
  - accessibility
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/screen-reader-voiceover-real-devices-app/
site_name: LambdaTest
slug: screen-reader-voiceover-real-devices-app/
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
          "item": "https://www.lambdatest.com/support/docs/screen-reader-voiceover-real-devices-app/"
        }]
      })
    }}
></script>

Manual accessibility testing ensures that your app or website is fully accessible and compliant with Web Content Accessibility Guidelines (WCAG). With iOS VoiceOver feature on LambdaTest, you can test the accessibility of your website on supported real iOS devices. 

The VoiceOver feature enables spoken UI descriptions, helping you verify element order, keyboard navigation, and accessibility compliance.

> This feature is currently in **Closed Beta**


## Accessing Screen Reader in Real Device App Testing

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select a supported **iOS device** from the list. Supported devices will have an Accessibility icon next to them as shown below.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/talkback.png').default} className="doc_img"/>

**Step 3:** Click on the **screen reader** option from toolbar and use toggle to enable and disable talkBack feature on your device.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/talkback.png').default} className="doc_img"/>

## Supported Devices

The VoiceOver feature is currently available on the following iOS devices:

| Device | iOS Version |
|--------|--------------|
| iPhone 15 | iOS 17 |
| iPhone 16 | iOS 18 |
| iPhone 15 Pro | iOS 17 |

---
## How to Navigate using Keyboard Shortcuts

Users accessing your mobile website on an Android device with TalkBack enabled can interact through touch gestures or by using keyboard shortcuts via a Bluetooth keyboard. Both options enable them to carry out "TalkBack actions," such as navigating between elements or having content read aloud.

These two navigation methods function similarly, performing the same actions within the UI, ensuring that your site remains fully accessible, no matter the approach. Once your website meets WCAG standards using one method, it will be compatible with the other as well.

For the **Screen Reader** feature on android devices , use the following keyboard shortcuts to trigger the different actions :

Below is a list of **VoiceOver** keyboard shortcuts, using **Control+Option** on **macOS** and **Ctrl+Alt** on **Windows**. The commands are mapped to equivalent actions on each platform.

| Action                                               | macOS (Control+Option)                              | Windows (Ctrl+Alt)                                  |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| Turn on VoiceOver Help                               | Control+Option+K                                     | Ctrl+Alt+K                                           |
| Turn off VoiceOver Help                              | Esc (Escape)                                         | Esc (Escape)                                         |
| Select the next or previous item                     | Control+Option+Right Arrow / Control+Option+Left Arrow | Ctrl+Alt+Right Arrow / Ctrl+Alt+Left Arrow           |
| Activate the selected item                           | Control+Option+Space bar                             | Ctrl+Alt+Space bar                                   |
| Touch and hold the selected item                     | Control+Option+Shift+M                               | Ctrl+Alt+Shift+M                                     |
| Read from the current position                       | Control+Option+A                                     | Ctrl+Alt+A                                           |
| Read from the top                                    | Control+Option+B                                     | Ctrl+Alt+B                                           |
| Pause or resume reading                              | Control                                              | Ctrl                                                 |
| Copy the last spoken text to the clipboard           | Control+Option+Shift+C                               | Ctrl+Alt+Shift+C                                     |
| Search for text                                      | Control+Option+F                                     | Ctrl+Alt+F                                           |
| Mute or unmute VoiceOver                             | Control+Option+S                                     | Ctrl+Alt+S                                           |
| Go to the Home Screen                                | Control+Option+H                                     | Ctrl+Alt+H                                           |
| Move to the status bar                               | Control+Option+M                                     | Ctrl+Alt+M                                           |
| Open Notifications screen                            | (Control+Option+M), then Option+Up Arrow            | (Ctrl+Alt+M), then Alt+Up Arrow                      |
| Open Control Center                                  | (Control+Option+M), then Option+Down Arrow          | (Ctrl+Alt+M), then Alt+Down Arrow                    |
| Open Search                                          | Option+Up Arrow                                      | Alt+Up Arrow                                         |
| Open the App Switcher                                | Control+Option+H, then H                             | Ctrl+Alt+H, then H                                   |
| Open the Item Chooser                                | Control+Option+I                                     | Ctrl+Alt+I                                           |
| Change the label of the selected item                | Control+Option+Slash                                 | Ctrl+Alt+Slash                                       |
| Start, stop, or pause an action                      | Control+Option+Hyphen                                | Ctrl+Alt+Hyphen                                      |
| Swipe up or down                                     | Control+Option+Up Arrow / Control+Option+Down Arrow | Ctrl+Alt+Up Arrow / Ctrl+Alt+Down Arrow             |
| Turn the rotor left or right                         | Control+Option+Command+Left Arrow / Right Arrow     | Ctrl+Alt+Command+Left Arrow / Right Arrow           |
| Adjust the setting specified by the rotor            | Control+Option+Command+Up Arrow / Down Arrow        | Ctrl+Alt+Command+Up Arrow / Down Arrow              |
| Turn the screen curtain on or off                    | Control+Option+Fn+Hyphen                            | Ctrl+Alt+Fn+Hyphen                                   |
| Return to the previous screen                        | Esc                                                 | Esc                                                 |



