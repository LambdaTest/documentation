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

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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

This document outlines the requirements and testing procedures for accessibility features in iOS applications and mobile browsers. These features ensure that applications are usable by individuals with various accessibility needs.

## Accessibility Settings
The following features are essential to test when ensuring accessibility for mobile apps and web content on iOS devices:

### Display and Text Size
This section focuses on improving text visibility and contrast to assist users with visual needs.

#### Key Features:
- **Increase Contrast :** Enabling this option enhances the contrast of UI elements against the background, making text and interface components easier to see.

- **Smart Invert :** This option reverses colors on the display, except for media and images. It's designed for users who prefer darker backgrounds without inverting every color on the screen.

- **Larger Accessibility Settings :** When enabled, this option adjusts interface elements to be larger and more accessible without affecting the core layout of the device’s UI.

- **Text Size Adjustment :** A slider is provided to adjust the size of the text throughout the system. Users can move the slider to the right for larger text and to the left for smaller text. This feature benefits users who need larger fonts for readability across apps and system interfaces.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/accessibility-1.png').default} className="doc_img"/>

### Reduce Motion

The Reduce Motion setting is designed to minimize dynamic animations and motion effects. This can benefit users sensitive to motion or those who prefer a more static display.

#### Key Features:
- **Reduce Motion of User Interface :** This toggle reduces animations throughout the system, including the parallax effect of icons on the Home Screen and in-app transitions.
- **Parallax Effect Adjustment :** Disabling parallax can create a more stable and comfortable experience, particularly for users prone to motion sickness.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/accessibility-2.png').default} className="doc_img"/>

## Conclusion
These accessibility settings allow iOS users to customize their device’s interface to match individual needs, improving usability and comfort. Whether adjusting text size or reducing motion,