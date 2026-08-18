---
id: low-power-mode-on-real-devices
title: Low Power/Battery Saver Mode on Real Devices
sidebar_label: Low Power Mode
description: Toggle Low Power Mode (iOS) and Battery Saver Mode (Android) during manual app testing sessions on real devices to validate app behavior under battery-saving conditions.
keywords:
  - low power mode
  - battery saver mode
  - battery saver testing
  - ios low power mode
  - android battery saver mode
  - manual app testing
  - battery optimization testing
  - testmu ai real devices
url: https://www.testmuai.com/support/docs/low-power-mode-on-real-devices/
site_name: TestMu AI
slug: low-power-mode-on-real-devices/
canonical: https://www.testmuai.com/support/docs/low-power-mode-on-real-devices/
---
import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";

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
          "name": "Low Power Mode on Real Devices",
          "item": `${BRAND_URL}/support/docs/low-power-mode-on-real-devices/`
        }]
      })
    }}
></script>

<BrandName />'s **Low Power Mode** (iOS) / **Battery Saver Mode** (Android) toggle lets you test how your app behaves under battery-saving conditions during a manual testing session on a real device — background app refresh stopping, display refresh rate capping at 60 Hz, automatic downloads pausing, and network behavior changes.

:::note Plus Plan Feature
This feature is currently in **Beta** and available exclusively with the **Real Device Plus Live** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::

---

## Use Cases

- Validate background refresh, sync, and automatic-download behavior when Low Power Mode / Power Saving Mode is active.
- Confirm your app degrades gracefully when the display refresh rate is capped at 60 Hz.
- Test network-dependent flows under battery-saver network restrictions.
- Reproduce real user battery-saving conditions without having to drain a physical device first.

## Supported Devices

| Platform                        | Supported Devices                          |
|----------------------------------|---------------------------------------------|
| iOS — Low Power Mode             | All iPhone & iPad on iOS 16 and above        |
| Android — Battery Saver Mode      | Samsung and OnePlus devices only             |

> The toggle is only shown in the session toolbar for supported devices — it stays hidden on unsupported OS versions or OEMs.

## Enabling Low Power Mode / Battery Saver Mode

**Step 1:** Start a manual testing session in **App Testing** on a supported iOS or Android device.

**Step 2:** Open **Device Controls** in the session toolbar. The same feature is labeled **Low Power Mode** on iOS and **Battery Saver Mode** on Android.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/low-power-mode-device-controls-ios.png').default} className="doc_img"/>

**Step 3:** Turn the toggle **On** to enable it on the device. Turn it **Off** at any time to restore normal power behavior.

- **iOS enabled:**

<img loading="lazy" src={require('../assets/images/real-device-app-testing/low-power-mode-enabled-ios.png').default} className="doc_img"/>

- **Android enabled:**

<img loading="lazy" src={require('../assets/images/real-device-app-testing/battery-saver-mode-enabled-android.png').default} className="doc_img"/>

:::info
- Disabling the mode is always allowed and has no restrictions.
:::

## Things to Know

- **No automation support yet:** Low Power Mode / Battery Saver Mode is available only through the manual-session UI. There is no Appium/WebDriver capability or hook to set it from an automated test as of now.
- **Not available with Apple Pay or Device Passcode (iOS):** Low Power Mode forces a 30-second auto-lock that can't be changed while it's on. Combined with a passcode-protected session (an [Apple Pay](apple-pay-manual.md) setup implies a passcode), this could leave the device stuck at the lock screen — so the toggle is hidden, and an enable request is blocked, whenever [Apple Pay](apple-pay-manual.md) or [Device Passcode](device-passcode-on-realdevice.md) is active on the session. Disable those first if you need Low Power Mode.
- **Auto-lock while enabled (iOS):** Because of the forced 30-second auto-lock, an idle device may lock itself while Low Power Mode is on. Interact with the device periodically, or turn the mode off, to avoid this.
- **Always reset for you:** Low Power Mode / Battery Saver Mode is automatically turned off when your session ends, so you never need to remember to switch it off before finishing your test.
