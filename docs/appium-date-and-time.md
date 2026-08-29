---
id: appium-date-and-time
title: How to Set Device Date and Time on TestMu AI
hide_title: true
sidebar_label: Set Date and Time 
description: Configure date, time, and hour format on real devices using Appium automation on TestMu AI, including 12-hour and 24-hour formats and network time sync.
keywords:
 - Appium
 - TestMu AI
 - Set Date and Time
 - Device Time Automation
 - 12-hour format
 - 24-hour format

url: https://www.testmuai.com/support/docs/appium-date-and-time/
site_name: TestMu AI
slug: appium-date-and-time/
canonical: https://www.testmuai.com/support/docs/appium-date-and-time/
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
          "name": "How to Set Device Date and Time on TestMu AI",
          "item": `${BRAND_URL}/support/docs/appium-date-and-time/`
        }]
      })
    }}
></script>

# How to Set Device Date and Time on TestMu AI

Setting device date and time on TestMu AI lets you configure custom date, time, and hour format on real devices during Appium automation, simulating scheduled events, alarms, chats, and time-format localization by using the lambda_executor hook with the updateDeviceSettings action.

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

| Platform  | OS Version          | Support Status     |
| --------- | ------------------- | ------------------ |
| iOS       | 14 and above        | Fully Supported    |
| Android   | 10 and above        | Fully Supported    |

:::warning Unsupported Android Devices
Custom date and time configuration is not supported on certain Android device models, primarily from **Motorola, Xiaomi, Oppo, and other Chinese OEMs**. On these devices, the Appium hook will return the following error:

`Custom date and time hook is not supported on this device. Please try on another device_id.`

If you encounter this error, retry your automation run on a different Android device.
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
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        How to Set Device Date and Time on TestMu AI
      </span>
    </li>
  </ul>
</nav>
