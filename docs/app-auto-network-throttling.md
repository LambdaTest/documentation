---
id: app-auto-network-throttling
title: Network Throttling 
hide_title: true
sidebar_label: Network Throttling
description: Now validate your mobile applications over low latency networks (2G/3G/LTE) or in offline mode with varying upload and download speeds. LambdaTest empowers you to simulate these mobile network conditions through its desired capabilities, ensuring comprehensive testing of your mobile applications.
keywords:
    - cross platform testing
    - network throttling
    - Appium capabilities generator
    - Appium desired capabilities
    - LambdaTest Appium grid capabilities
    - LambdaTest automation capabilities generator for Appium
    - Appium capability configuration
    - Appium automation testing
    - Appium automation grid online
    - configure Appium tests with network throttling desired capabilities
    - network throttling capabilities for Appium
    - throttling test on LambdaTest with Appium
url: https://www.lambdatest.com/support/docs/app-auto-network-throttling/
site_name: LambdaTest
slug: app-auto-network-throttling/
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
          "name": "Network Throttling",
          "item": "https://www.lambdatest.com/support/docs/app-auto-network-throttling/"
        }]
      })
    }}
></script>

# Network Throttling

***
In Appium testing, assessing your app's performance under diverse network conditions (2G/3G/LTE) and offline scenarios, is crucial. Fluctuating upload and download speeds can significantly impact your app's behavior across different devices.

LambdaTest simplifies testing by enabling simulation of diverse network conditions. Whether starting with defaults or custom profiles, these features replicate real-world scenarios, proving invaluable for Appium tests. The device maintains uninterrupted internet connectivity throughout, ensuring a reliable testing experience for your mobile applications.

## Objectives
----

By the end of this guide, you will learn how to:
- Initialize a test session with predefined network profiles.
- Dynamically change network profiles during test execution using LambdaHooks.
- Define and implement custom network profiles.
- Reset the network profile to default settings.

## Workflow
----
### Initialization

- **Capability:** Initiate a test session with predefined network profiles using the `networkProfile` capability. Example:
     ```python
     caps = {
        "network": True,
        "networkProfile": "2g-gprs-good"  # Set the desired network profile
    }
    ```

:::note
To utilize the **networkProfile** capability, ensure that you include `network: True` in the capabilities.
:::  

### During Test Execution

- **LambdaHook:** Dynamically alter the network profile within the test session using the following LambdaHook:
    ```python
    driver.execute_script("updateNetworkProfile=3g-umts-good")
    ```

### Supported Network Profiles

| Profile Name             | Download Speed | Upload Speed | Latency |
|--------------------------|-----------------|--------------|---------|
| 2g-gprs-poor             | 20 Kbps         | 6 Kbps       | 1000 ms |
| 2g-gprs-good             | 50 Kbps         | 16 Kbps      | 500 ms  |
| 3g-umts-poor             | 200 Kbps        | 64 Kbps      | 400 ms  |
| 4g-lte-poor              | 1 Mbps          | 500 Kbps     | 200 ms  |
| 3g-umts-good             | 5 Mbps          | 2 Mbps       | 100 ms  |
| 4g-lte-good              | 15 Mbps         | 7 Mbps       | 70 ms   |
| 4g-lte-advanced-good     | 25 Mbps         | 12 Mbps      | 20 ms   |
| default                  | NA             | NA           | NA      |


### Custom Profiles

- **LambdaHook:** Define and implement custom network profiles with LambdaHook by specifying the maximum download speed (kbps), maximum upload speed (kbps), and latency (ms) for the custom condition, as illustrated in the example.
    ```python
    driver.execute_script("customNetworkProfile: { \"downloadSpeed\": 500, \"uploadSpeed\" : 250, \"latency\": 100 }" )
    ```

### Default/Reset Network Configuration

- **LambdaHook:** Employ this webhook to seamlessly restore the device's network profile to its default state. Invocation of this LambdaHook removes any predefined or custom network settings, ensuring the device is reset to its original configuration.
    ```python
    driver.execute_script("updateNetworkProfile=default")
    ```

### Offline Mode

#### Android

- To initialize tests in **offline mode**, set the `networkProfile` capability to `offline` during session initiation:
    ```python
    caps = {
        "network": True,
        "networkProfile": "offline"  # Set to offline mode
    }
    ```

- **LambdaHook:** You can also switch to offline mode during the test execution with the following command:
    ```python
    driver.execute_script("updateNetworkProfile=offline")
    ```

#### iOS

- For **iOS** devices, offline mode cannot be set using the `networkProfile` capability. Instead, use the offline mode API by sending a cURL request within the running test session:
    ```bash
    curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/<session-id>/update_network' \
    --header 'Authorization: Basic <username:access_key>' \
    --header 'Content-Type: application/json' \
    --data '{"mode": "offline"}'
    ```


:::note
- **Network throttling** results may vary sometimes based on multiple factors including network conditions and device performance.

- **Wrong Capability Name or Value:** Providing an incorrect capability value results in a bad request error with a descriptive message.

- **LambdaHook Error:** If you pass any wrong value in LambdaHook, you will receive an error message.

- In offline mode, **live video** will not be available for the duration of the test session.
:::

> In case you have any questions, feel free to share them with us.Our experts are available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 Customer chat support**</span>. You can also drop us a mail at support@lambdatest.com. Happy testing! 🙂

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
        Network Throttling
      </span>
    </li>
  </ul>
</nav>