---
id: set-date-time-hour-format-real-devices-browser
title: Set Custom Date, Time & Hour Format on Real Devices (Browser)
sidebar_label: Date & Time Settings
description: Change the date, time, and hour format on real iOS and Android devices while running real-time browser tests on TestMu AI, across manual and automated runs.

keywords:
  - set device time iOS
  - change date mobile automation
  - iOS 12-hour format testing
  - real device date time change
  - Appium date override
  - TestMu AI date configuration
  - real device time simulation
  - app testing on real device
  - simulate date time
  - iOS automation hooks
url: https://www.testmuai.com/support/docs/set-date-time-hour-format-real-devices-browser/
site_name: TestMu AI
slug: set-date-time-hour-format-real-devices-browser/
canonical: https://www.testmuai.com/support/docs/set-date-time-hour-format-real-devices-browser/
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
      "name": "Set Date and Time on Real Devices",
      "item": `${BRAND_URL}/support/docs/set-date-time-hour-format-real-devices-browser/`
    }]
  }) }}
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
      "@id": "https://www.testmuai.com/support/docs/set-date-time-hour-format-real-devices-browser/"
    },
    "headline": "Set Custom Date, Time & Hour Format on Real Devices (Browser)",
    "description": "Change the date, time, and hour format on real iOS and Android devices while running real-time browser tests on TestMu AI, across manual and automated runs.",
    "url": "https://www.testmuai.com/support/docs/set-date-time-hour-format-real-devices-browser/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Device",
    "keywords": [
      "set device time iOS",
      "change date mobile automation",
      "iOS 12-hour format testing"
    ],
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
    "dateModified": "2026-07-14T19:55:23+05:30"
  }) }}
/>


Websites often behave differently depending on the device clock, from AM/PM logic and countdown timers to locale-specific date formats and scheduled banners. While running a real-time browser session on a real device, <BrandName /> lets you override the **date, time, 12/24-hour format**, and the **automatic time sync** toggle on real **iOS (14+)** and **Android (10+)** hardware, so you can reproduce these conditions on demand.

This makes it easy to reproduce time-bound web flows, verify regional formatting, and exercise clock-dependent UI without waiting for the real calendar to move.

---

## Open Date & Time Settings During a Browser Session

**Step 1:** Sign in to your <BrandName /> dashboard, go to **Real Time Testing**, and open the **Browser Testing** tab.

**Step 2:** Pick a supported real device (iOS 14+ or Android 10+) along with the browser and OS version you want to test, then click **Start** to launch the live session.

**Step 3:** After the device boots, open the **iOS Settings** or **Android Settings** panel from the left sidebar, depending on the platform you launched.

**Step 4:** Select **Set Date and Time** to bring up the configuration modal.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic1.png').default} className="doc_img"/>

**Step 5:** Adjust the **date**, **time**, and **hour format** in the modal, then click **Update** to push the changes to the live device.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic-last.png').default} className="doc_img"/>

:::note
A few Android models, mainly those from **Motorola, Xiaomi, Oppo, and other Chinese OEMs**, don't allow the clock to be changed. On those devices the modal shows a **Not Supported** message instead of the editable fields.
:::


---

## What You Can Configure

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic2.png').default} className="doc_img"/>

The modal exposes four controls for simulating different date and time scenarios:

### 1. Set Date and Time Automatically
- **Enabled:** the device keeps its clock in sync with network time.
- **Disabled:** the manual fields unlock so you can enter your own values.
- You must switch this off before editing the date or time by hand.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic4.png').default} className="doc_img"/>


### 2. Date
- A calendar picker lets you jump to any day within the next **7 days**.
- Your choice immediately becomes the device's system date.
- Any day in the past, or more than a week ahead, is **greyed out** and can't be picked.
- The **Apply** button activates only once a valid date is chosen.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic3.png').default} className="doc_img"/>


### 3. Time
- Enter a precise value in `HH:MM:SS` format.
- The picker follows whichever hour format (12- or 24-hour) you've selected.
- You can type the value directly or step through it with the arrow keys.

### 4. Time Format (12/24 Hour)
- Switch between **12-hour** (with AM/PM) and **24-hour** display.
- Choosing 12-hour reveals the AM/PM control in the time picker.
- Choosing 24-hour hides the AM/PM control automatically.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/set-date-and-time-pic-5.png').default} className="doc_img"/>


## Platform Support

| Platform | Availability             | OS Versions Supported |
| -------- | ------------------------ | --------------------- |
| iOS      | Real-time browser session | iOS 14 and above      |
| Android  | Real-time browser session | Android 10 and above  |

:::warning
Custom date and time changes aren't available on certain Android models, particularly those from **Motorola, Xiaomi, Oppo, and other Chinese OEMs**. On these devices the modal will display a **Not Supported** message during the session.
:::

---

## When to Use It

- Reproduce scheduled banners, promos, or countdown timers on a website
- Verify time-sensitive web flows such as booking or checkout windows
- Confirm 12- and 24-hour formats render correctly
- Preview how pages look on a future or backdated day
- Debug calendar widgets and time-based components
- Confirm behaviour when auto time sync is toggled on or off
- Cover edge cases like midnight rollover or end-of-month dates
