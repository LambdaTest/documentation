---
id: real-device-network-logs
title: Network Logs
hide_title: true
sidebar_label: Network Logs
description: With LambdaTest's Network Logs Feature, monitor and analyze network traffic in real-time during your testing sessions. Gain insights into HTTP/S traffic, track network requests and responses, and customize monitoring settings using different proxy or network configurations.
keywords:
- real device app testing 
- lambdatest real device app testing
- network logs

url: https://www.lambdatest.com/support/docs/real-device-network-logs/
site_name: LambdaTest
slug: real-device-network-logs/
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
          "item": "https://www.lambdatest.com/support/docs/real-device-network-logs/"
        }]
      })
    }}
></script>

# Network Logs feature on Real Devices

The Network Logs Feature on Lambdatest Real Devices Platform empowers users to closely monitor network traffic during testing sessions. This feature enables the viewing of HTTP/S traffic, analysis of network requests and responses, and tracking of network activity using various proxy or network settings.

***

## Accessing Network Logs

**Step 1:** Login to your LambdaTest account. Go to **App Testing** under **Real Device** from the left sidebar.

**Step 2**: Choose the OS version of your choice. ( Android or iOS )

**Step 3**: Select Your Application and Device: Choose the desired application and device from the device listing to start your test session.

**Step 4**: Enable **Network Logs**
- Click on the Network Log icon on top-bar to enable network logs capture.
- Upon enabling network logs, the application will **restart** automatically to initiate the capturing process.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/networklogs.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

:::tip 
- **Default Network Logs Enabled:** Users can configure their sessions to start with network logs enabled at the app level from app settings . This feature saves users time by eliminating the need to enable network logs manually for each session.
:::

## Features 

1. **Filter Logs:**
   - Easily filter logs by various options such as status code, request method, content type, etc.
   - Users can choose to show only `Connect` and `Error` logs for focused analysis.
2. **Expand Network Calls:**
   - Expand each network call to view detailed information including request headers, request body, response headers, and response body. 
   - Copy the `CURL` command for debugging purposes.
3. **Clear Logs:**
   - Clear all network logs with a single click to declutter the interface.
4. **Pause/Play Logs:**
   - Pause or resume network logs capture as per your requirement.
5. **Download Logs:**
   - Download captured network logs in HAR format(HTTP Archive).




:::note
LambdaTest uses two proxies to capture network logs:
- Martian (Google): This is the default proxy used for capturing network logs.
- MITM Proxy: If your use case requires MITM (Man-In-The-Middle) proxy, you can contact LambdaTest support to enable it.
:::




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