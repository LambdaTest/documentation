---
id: appium-date-and-time
title: Set Custom Date, Time & Hour Format on Real Devices
hide_title: true
sidebar_label: Set Date and Time 
description: This document provides information about configuring date, time, and hour-format on Real Devices using Appium automation on TestMu AI.
keywords:
 - Appium
 - TestMu AI
 - Set Date and Time
 - Device Time Automation
 - 12-hour format
 - 24-hour format

url: https://www.testmu.ai/support/docs/appium-date-and-time
site_name: LambdaTest
slug: appium-date-and-time
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
          "name": "Set Custom Date, Time & Hour Format on Real Devices",
          "item": "https://www.lambdatest.com/support/docs/appium-date-and-time/"
        }]
      })
    }}
></script>

# Set Device Date & Time

LambdaTest now supports configuring custom **date**, **time**, and **hour-format** on Real Devices via Appium during automation testing sessions. This allows developers and testers to simulate specific date/time conditions to validate use cases like scheduled events, alarms, chats, or localization for time formats.

By the end of this document, you will be able to:
- Set a specific date and time on the device
- Toggle between 12-hour and 24-hour formats
- Enable/disable automatic time syncing with network settings

---

## Support for Automation on Real Devices

To modify the date and time settings programmatically, use the `lambda_executor` Appium hook with the `updateDeviceSettings` action. You can provide multiple arguments including custom date, time, format toggle, and auto-time setting.


---
## Supported Arguments

| Argument           | Format        | Description                                                                 |
| ------------------ | ------------- | --------------------------------------------------------------------------- |
| `customDate`       | `MMM DD YYYY` | Sets the device date. You can select a date up to **7 days** from today.    |
| `customTime`       | `HH:MM`       |  Sets time in 24-hour format `(e.g., 13:30)`. Display adapts based on `twelveHourTime` (shown as `1:30 PM` if enabled).|
| `twelveHourTime`   | `On` / `Off`  | `On` for 12-hour, `Off` for 24-hour format.                                 |
| `setAutomatically` | `On` / `Off`  | Enables or disables syncing with network time.                              |

> 💡 **Note:** When `setAutomatically` is turned **On**, all Other Arguments for  **Date and Time**  are automatically disabled on the device.


---
### Appium Hook Example

<CodeBlock language="js">
{`driver.execute_script('lambda_executor: { 
  "action": "updateDeviceSettings", 
  "arguments": { 
    "customDate": "Jun 20 2025", 
    "customTime": "15:05", 
    "twelveHourTime": "On", 
    "setAutomatically": "On" 
  } 
}')`}
</CodeBlock>



---
## Supported Platforms

| Platform  | OS Version    | Support Status                  |
| --------- | ------------- | ------------------------------- |
| iOS       | 14 and above  |  Fully Supported               |

:::note
This feature is currently not supported on Android. Support for Android is planned in a future update.
:::

---

## Example Use Cases

- Validate how the app behaves across different time zones or locales.
- Test reminder or calendar event triggering logic.
- Test 12-hour vs. 24-hour format layout rendering.


> For Configuring Device **Date and Time** during **Manual Testing** on Real Devices, please refer to our [Set Date & Time on Real Devices (Manual)](/support/docs/set-date-time-hour-format-real-devices/) guide.



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       IP Geolocation
      </span>
    </li>
  </ul>
</nav>
