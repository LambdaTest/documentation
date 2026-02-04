---
id: screen-reader-voiceover-real-devices-app
title: Screen Reader (VoiceOver) on iOS Devices
sidebar_label: Screen Reader (VoiceOver)
description: Test your app's and website's accessibility with TestMu AI's Screen Reader (VoiceOver) on iOS devices across multiple browsers. Navigate through app elements with spoken descriptions, ensuring compliance with WCAG standards.
keywords:
  - screen reader
  - voiceover
  - accessibility
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/screen-reader-voiceover-real-devices-app/
site_name: LambdaTest
slug: screen-reader-voiceover-real-devices-app/
canonical: https://www.testmu.ai/support/docs/screen-reader-voiceover-real-devices-app/
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
          "name": "Screen Reader on Real Devices App",
          "item": `${BRAND_URL}/support/docs/screen-reader-voiceover-real-devices-app/`
        }]
      })
    }}
></script>

Manual accessibility testing ensures that your app or website is fully accessible and compliant with Web Content Accessibility Guidelines (WCAG). With iOS VoiceOver feature on <BrandName />, you can test the accessibility of your website on supported real iOS devices. 

Ensuring accessibility with VoiceOver is essential for creating inclusive digital experiences that accommodate users with visual impairments. VoiceOver provides spoken feedback, allowing users to navigate, interact, and understand UI elements without relying on visual cues.

> This feature is currently in **Closed Beta**


## Accessing Screen Reader in Real Device App Testing

**Step 1:** Click on the **Real Devices** > **App Testing/Browser Testing**

**Step 2:** Select a supported **iOS device** from the list. Supported devices will have an `Accessibility` icon next to them as shown below.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/step_one_voiceover.png').default} className="doc_img"/>

**Step 3:** Click on the **screen reader** option from toolbar and use toggle to enable and disable voiceover feature on your device. Once enabled this will take around 10-15 seconds to start the feature on your device.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/step_two_voiceover.png').default} className="doc_img"/>

> Make sure your system's audio is turned on to hear the spoken descriptions provided by VoiceOver.

## Supported Devices

The VoiceOver feature is currently supported on selected iOS devices, allowing accurate accessibility testing. Below is the list of supported devices, with more being added over time to enhance accessibility coverage:

| Device | iOS Version |
|--------|--------------|
| iPhone 15 | iOS 17 |
| iPhone 16 | iOS 18 |

---
## How to Navigate using Keyboard Shortcuts

The navigation behavior on iOS—such as moving to the next or previous element, auto-reading from the start of the page, and interacting with UI elements—can be performed using keyboard shortcuts when **VoiceOver** is enabled.

On a real iOS device, VoiceOver navigation can be executed via keyboard shortcuts and touch gestures as well . However, when performing  accessibility testing, using keyboard shortcuts is the most efficient way to validate VoiceOver interactions.

Ensuring that your website or application is accessible using **keyboard shortcuts** guarantees that it will also be accessible through touch gestures. If a site is fully navigable and interactable using VoiceOver keyboard commands, it will be equally accessible through swipe gestures and VoiceOver touch commands.

To navigate and interact using VoiceOver on iOS in a Manual test session, use the following keyboard shortcuts:

## VoiceOver Keyboard Shortcuts

Below is a list of VoiceOver keyboard shortcuts, using `Control+Option` on macOS and `Ctrl+Alt` on Windows. These commands allow seamless navigation and interaction with UI elements.

| Action                                               | macOS (Control+Option)                              | Windows (Ctrl+Alt)                                  |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| Turn on VoiceOver Help                               | Control+Option+K                                     | Ctrl+Alt+K                                           |
| Turn off VoiceOver Help                              | Option+Esc                                           | Windows+Esc                                      |
| Select the next or previous item                     | Control+Option+Right Arrow / Control+Option+Left Arrow | Ctrl+Alt+Right Arrow / Ctrl+Alt+Left Arrow           |
| Activate the selected item                           | Control+Option+Space bar                             | Ctrl+Alt+Space bar                                   |
| Touch and hold the selected item                     | Control+Option+Shift+M                               | Ctrl+Alt+Shift+M                                     |
| Read from the current position                       | Control+Option+A                                     | Ctrl+Alt+A                                           |
| Read from the top                                    | Control+Option+B                                     | Ctrl+Alt+B                                           |
| Pause reading                                        | Control+Option+Hyphen                               | Ctrl+Alt+Hyphen                                       |
| Copy the last spoken text to the clipboard           | Control+Option+Shift+C                               | Ctrl+Alt+Shift+C                                     |
| Search for text                                      | Control+Option+F                                     | Ctrl+Alt+F                                           |
| Mute or unmute VoiceOver                             | Control+Option+S                                     | Ctrl+Alt+S                                           |
| Go to the Home Screen                                | Control+Option+H                                     | Ctrl+Alt+H                                           |
| Move to the status bar                               | Control+Option+M, then Option+Up Arrow               | Ctrl+Alt+M, then Alt+Up Arrow                     |
| Open Control centre                                   | (Control+Option+M), then Option+Down Arrow           | (Ctrl+Alt+M), then Alt+Down Arrow                    |
| Open the App Switcher                                | Control+Option+H+H                                   | Ctrl+Alt+H+H                                   |
| Open the Item Chooser                                | Control+Option+I                                     | Ctrl+Alt+I                                           |
| Change the label of the selected item                | Control+Option+Slash                                 | Ctrl+Alt+Slash                                       |
| Swipe up or down                                     | Control+Option+Up Arrow / Control+Option+Down Arrow | Ctrl+Alt+Up Arrow / Ctrl+Alt+Down Arrow             |
| Turn the rotor left or right                         | Control+Option+Command+Left Arrow / Right Arrow     | Ctrl+Alt+Command+Left Arrow / Right Arrow           |
| Adjust the setting specified by the rotor            | Control+Option+Command+Up Arrow / Down Arrow        | Ctrl+Alt+Command+Up Arrow / Down Arrow              |
| Return to the previous screen                        | Option+Esc                                          | Windows+Esc+EscEsc                                  |

By incorporating **VoiceOver** keyboard navigation into your accessibility testing workflow, you can identify usability barriers early, ensuring compliance with WCAG standards and delivering an **inclusive digital experience for all users**.


:::tip 

 If the keyboard shortcuts do not work initially, click on the device screen in your test session to ensure that it is in focus.
:::

