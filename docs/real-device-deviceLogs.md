---
id: real-device-device-logs
title: Device Logs
hide_title: true
sidebar_label: Device Logs
description: With LambdaTest's Device Logs Feature, you can view the logs for the running app and the device during session. You can filter and download the logs for further analysis.

keywords:
- real device app testing 
- lambdatest real device app testing
- device logs

url: https://www.lambdatest.com/support/docs/real-device-device-logs/
site_name: LambdaTest
slug: real-device-device-logs/
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
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Native Mobile App Testing",
          "item": "https://www.lambdatest.com/support/docs/real-device-device-logs/"
        }]
      })
    }}
></script>

# Device Logs feature on Real Devices

The Device Logs Feature on Lambdatest Real Devices Platform empowers users to monitor both application and device logs conveniently. Through the Device Logs , you have the ability to sift through and download logs, facilitating thorough analysis of your application's behavior. These logs capture a detailed record of every event occurring during the App Live session, ranging from device selection and app installation to the activation of various device features.


***

## Accessing Device Logs

**Step 1:** Login to your LambdaTest account. Go to **App Testing** under **Real Device** from the left sidebar.

**Step 2**: Choose the OS version of your choice. ( Android or iOS )

**Step 3**: Select Your Application and Device: Choose the desired application and device from the device listing to start your test session.

**Step 4**: Manage **Device Logs**
- Device logs are automatically captured from the start of the session.
- You can open or close the Device Logs tab as per your requirements to view or hide the logs.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/devicelogs.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>


## Features 

1. **Filter Logs:**
   - Utilize the filter bar to seamlessly filter logs based on entered text. Once text is entered, logs matching the filter criteria will be displayed, enabling focused analysis.
   - One can also filter app logs by selecting the specific app from the filter (only for Android).

2. **Filter by Log Level:**
   - Choose the desired log level to filter logs based on severity.
   - Logs matching the selected log level will be displayed for analysis.

   | Log Level | Context                                       |
   |-----------|-----------------------------------------------|
   | Verbose   | Detailed, verbose log entries.               |
   | Debug     | Log entries for debugging purposes.           |
   | Info      | Informational log entries.                    |
   | Warning   | Log entries indicating potential issues.      |
   | Error     | Log entries indicating errors.                |
   | Assert    | Log entries indicating assertion failures.    |

3. **Clear Logs:**
   - Clear all  logs with a single click to declutter the interface.

4. **Pause/Play Logs:**
   - Pause or resume logs capture as per your requirement.

5. **Download Logs:**
   - Download captured device logs in your local for further debugging.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Real Device App Testing
      </span>
    </li>
  </ul>
</nav>