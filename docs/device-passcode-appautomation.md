---
id: device-passcode-appautomation
title: Device Passcode in App Automation on Real iOS Devices
sidebar_label: Device Passcode
description: Run automated tests on iOS apps that require a device passcode during execution on real devices.
keywords:
  - device passcode automation
  - ios passcode
  - appium automation
  - authentication testing
  - security testing
  - mdm apps
  - enterprise apps
  - lambdatest ios
  - real devices
url: https://www.lambdatest.com/support/docs/device-passcode-appautomation/
site_name: LambdaTest
slug: device-passcode-appautomation/
---

import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";

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
          "name": "Device Passcode in App Automation",
          "item": "https://www.lambdatest.com/support/docs/device-passcode-appautomation/"
        }]
      })
    }}
></script>

> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />

For certain use cases, you may need to perform tests on devices that are **passcode-protected**. Apps handling sensitive data (for example, **banking apps**, **enterprise apps**, or apps distributed through **MDM**) often enforce device passcodes for enhanced security.  

LambdaTest’s **Device Passcode in Automation** enables you to run such automated tests seamlessly on real iOS devices.

---

## Use Cases

- Validate apps requiring a system passcode prompt before login or secure workflows.  
- Ensure authentication flows function correctly when the device is protected by a passcode.  
- Automate enterprise test cases where passcodes are enforced by MDM policies.  

---

## Supported Devices

Currently, the Device Passcode feature in **App Automation** is enabled on the following iOS real devices:  

| Device Model          | iOS Version |
|-----------------------|-------------|
| iPhone 16            | 18        |
| iPhone 16 Pro        | 18        |
| iPad Air 11 (2024)   | 18        |
| iPhone 15            | 17        |
| iPhone 14            | 16        |
| iPhone 13            | 15        |

> We are actively working on expanding coverage to **all supported iOS devices** on LambdaTest Real Device Cloud.  
---

## Capability to Enable Passcode

Use the `enablePasscode` capability to enable passcode-protected devices for automation testing.  

| Capability      | Type    | Default | Description |
|-----------------|---------|---------|-------------|
| **enablePasscode** | Boolean | `false` | Enable passcode devices for running tests. Use `true` to start the session with a system passcode configured (default passcode: `123456`). |



```python
{
    "platformName": "ios",
    "deviceName": "iPhone 16",
    "platformVersion": "18",
    "isRealMobile": True,
    #highlight-next-line
    "enablePasscode": True
}
```
## Unlock Device with Default Passcode

For iOS devices, the default passcode is **123456**.  
In your test script, write automation code that taps and sets the passcode accordingly.

:::note
- Passcode entry screens are **not visible** in the stream for security reasons — you may see a blank screen briefly during automation.  
- The default passcode for iOS real devices is **123456**.  
- Enabling passcode may increase the setup time of your test by **25–30 seconds** compared to regular sessions.  
- Passcode support is currently available for **iOS real devices** only. Support for **Android devices** is **Coming Soon**.  
:::

