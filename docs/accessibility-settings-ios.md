---
id: accessibility-settings-ios
title: Accessibility Testing for iOS Devices
hide_title: false
sidebar_label: Accessibility Settings (iOS)
description: Ensure iOS app accessibility by testing text size, high-contrast, and reduce motion settings with real-time updates, notifications, and simplified animations.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - DevTools
url: https://www.lambdatest.com/support/docs/accessibility-settings-ios/
site_name: LambdaTest
slug: accessibility-settings-ios/
---

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
          "name": "What is Accessibility Testing",
          "item": "https://www.lambdatest.com/support/docs/accessibility-settings-ios/"
        }]
      })
    }}
></script>
Accessibility testing ensures that mobile applications and web content are accessible to all users, including those with disabilities. On iOS devices, this involves testing various accessibility features like text size adjustments, contrast settings, and motion reduction.

This document outlines the accessibility settings features provided in Real Devices (iOS) at LambdaTest. These features ensure that applications are usable by individuals with various accessibility needs.

## Accessibility Settings
iOS devices offer a range of accessibility features that can be enabled during setup and customized through the Settings app, as outlined in [Apple’s documentation](https://support.apple.com/en-in/guide/iphone/iph3e2e4367/ios).

> This feature is supported in manual testing for both apps and browsers on iOS real devices.

## Steps to set accessibility settings:

**Step 1 :** Go to the **Real Devices** > **App Testing** / **Browser Testing** <br />
**Step 2 :** Select the device-browser combination to start your test session. <br />
**Step 3 :** On the testing toolbar, click on the **iOS Settings** > **Accessibility**. <br />

<img loading="lazy" src={require('../assets/images/real-device-app-testing/accessibility-1.png').default} className="doc_img"/>

<Tabs className="docs__val">

<TabItem value="display-text" label="Display and Text Size" default>

- On the **iOS Settings** > **Accessibility** prompt, select **Display and Text Size**.
- Now, you can enable or disable the required display settings by clicking on the checkboxes, and use the slider to adjust the text size.
- Click on the Update button. A prompt will appear on the dashboard stating "**Accessibility Settings updated successfully**".

#### Key Features:
- **Increase Contrast :** Enabling this option enhances the contrast of UI elements against the background, making text and interface components easier to see.
- **Smart Invert :** This option reverses colors on the display, except for media and images. It's designed for users who prefer darker backgrounds without inverting every color on the screen.
- **Larger Accessibility Settings :** When enabled, this option adjusts interface elements to be larger and more accessible without affecting the core layout of the device’s UI.
- **Text Size Adjustment :** A slider is provided to adjust the size of the text throughout the system. Users can move the slider to the right for larger text and to the left for smaller text. This feature benefits users who need larger fonts for readability across apps and system interfaces.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/accessibility-2.png').default} className="doc_img"/>

</TabItem>

<TabItem value="reduce-motion" label="Reduce Motion" default>

- On the **iOS Settings** > **Accessibility** prompt, select **Reduce Motion**.
- Toggle the button to minimize dynamic animations and motion effect.
- Click on the Update button. A prompt will appear on the dashboard stating "**Accessibility Settings updated successfully**".

#### Key Features:
- **Reduce Motion of User Interface :** This toggle reduces animations throughout the system, including the parallax effect of icons on the Home Screen and in-app transitions.
- **Parallax Effect Adjustment :** Disabling parallax can create a more stable and comfortable experience, particularly for users prone to motion sickness.

</TabItem>
</Tabs>

## Conclusion
These accessibility settings allow iOS users to customize their device’s interface to match individual needs, improving usability and comfort. Whether adjusting text size or reducing motion,