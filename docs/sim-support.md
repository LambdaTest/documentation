---
id: sim-support
title: SIM & eSIM Automation on Real Devices
sidebar_label: Enable SIM
description: Learn how to automate SIM and eSIM scenarios on real mobile devices using Appium, including capabilities, SMS validation, and supported devices.
keywords:
  - SIM
  - eSIM
  - iOS
  - Android
  - automation
  - testing
slug: sim-support
canonical: https://www.testmu.ai/support/docs/sim-support/
site_name: LambdaTest
url: https://www.testmu.ai/support/docs/sim-support
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# SIM Support On Public Real Devices
<RealDeviceTag value="Real Device" /> 
SIM & eSIM support enables testing of SMS-driven use cases on real mobile devices, such as **OTP verification** and **two-factor authentication** workflows. By automating SIM interactions, teams can validate SMS handling, **verify phone numbers**, and confirm secure onboarding processes without relying on physical test phones.

**SMS-based authentication** is one of the most widely used security and identity verification methods. Automating these flows ensures consistent validation, reduces manual effort, and helps uncover edge cases early in the testing cycle.

With **<BrandName />**, you can automate SIM and eSIM scenarios on **Real Devices**. From requesting SIM-enabled devices to retrieving phone numbers and polling incoming SMS for OTP validation, <BrandName /> provides an end-to-end setup for testing SMS-driven features in your automation suite.

> To enable this for your organization, contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or email **support@testmu.ai**.<br />

---

## Use Cases

- **OTP & Two-Factor authentication**: Automate SMS receipt and validation to test secure login or sign-up workflows.  
- **Phone Number Retrieval**: Programmatically fetch the device’s number at runtime to trigger verification flows.  
- **SMS Interrupt Testing**: Inject incoming SMS messages during a test session to validate in-app handling of message interrupts.  
- **Messaging Workflows**: Verify outbound and inbound SMS flows as part of automated Appium tests.  

---


## Supported Countries & SIM Availability
<BrandName /> provides SIM and eSIM-enabled devices across **specific countries**, allowing you to test SMS-driven workflows under real carrier conditions. The **availability** of physical SIMs or eSIMs varies by region and carrier, ensuring your automation scripts can validate authentication flows, messaging, and phone number handling in environments that closely resemble real-world usage.

| Country | Carriers               | SIM Type Availability        |
|---------|-----------------------|-----------------------------|
| Ireland | Three                 | Physical SIM / eSIM (iOS only) |
| India   | Airtel, Jio, Vodafone | Physical SIM                |
| USA     | T-Mobile, Verizon, AT&T              | Physical SIM / eSIM (iOS only) |

---

## Capabilities
When automating SIM or eSIM scenarios on real devices, you can **customize** your test session using specific capabilities. These capabilities allow you to request **SIM-enabled devices** and define preferences such as region, carrier, or eSIM usage. The table below summarizes the key capabilities available for your automation scripts.

| Capability    | Type    | Default | Description |
|---------------|---------|---------|-------------|
| **enableSim** | Boolean | false   | Provision a SIM-enabled device. Must be set to `True` to request SIM support. |
| **simOptions**| Object  | None    | Define SIM preferences such as region, carrier, or eSIM request. These parameters are nested inside `simOptions`. |


### simOptions Configurations

| Configuration | Type       | Example                  | Description |
|-----------|------------|--------------------------|-------------|
| region    | String     | "IND", "USA" ,"IRL"            | ISO country code for SIM region. |
| carrier   | String  | ["airtel"] or ["jio","vodafone"] | Select preferred carrier(s). |
| esim      | Boolean    | true                     | Request an eSIM-enabled device (iOS only). |

:::info
Region and carrier values are case-sensitive. Make sure to enter them exactly as shown in the example above.
::::
---

## SIM support Workflow in Automation Test


### Step 1: Add SIM Capabilities

To enable SIM & eSIM support, include the following capability in your automation session as highlighted in the Capabilities:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```python title="iOS(.ipa)"
 desired_caps = {
    'platformName': 'iOS',
    'platformVersion': '16.0',
    'deviceName': 'iPhone 14',
    'app': 'YOUR_APP_ID',
    'enableSim': True,
    'simOptions': {
        'region': 'IND',
        'carrier': ['airtel', 'vodafone'],
        'esim': True
    }
}
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```python title="Android(.apk)"
desired_caps = {
    'platformName': 'Android',
    'platformVersion': '16',
    'deviceName': 'Galaxy S25',
    'app': 'YOUR_APP_ID',
    'enableSim': True,
    'simOptions': {
        'region': 'IND',
        'carrier': ['airtel', 'vodafone']
    }
}
```

</TabItem>

</Tabs>


### Step 2: Retrieve SIM Properties at Runtime

```python
driver.execute_script(
  "lambda_executor: { \"action\": \"deviceInfo\", \"arguments\": { \"deviceProperties\": [\"simOptions\"] } }"
)
```
Sample Response:
``` JSON
{
  "simOptions": {
    "phoneNumber": "+15555551234",
    "region": "USA",
    "esim": true,
    "carrier": "TMobile"
  }
}
```
### Step 3: Validate SMS Workflows
- Trigger an SMS to the device using your backend/system.
- Poll and read incoming SMS messages via Appium script.
- Extract OTP codes or verification text to validate end-to-end flow

### Session Validation & Error Handling
If SIM-enabled devices matching your preferences are unavailable, sessions may fail with errors such as:
- **No match**: There’s no device that fits the SIM settings you selected (for example, region or eSIM options). Try changing your preferences or broadening your criteria.
-  **Busy devices**: All devices that match your settings are currently in use. You can either wait for one to become available or pick a different device

## Supported Devices

| Device                  | OS Version  |
|--------------------------|-------------|
| Samsung Galaxy S25 Ultra | Android 15  |
| Samsung Galaxy S25       | Android 15  |
| Samsung Galaxy S24       | Android 14  |
| Samsung Galaxy S23       | Android 13  |
| Google Pixel 9           | Android 15  |
| Google Pixel 7           | Android 13  |
| Google Pixel 6           | Android 12  |
| iPhone 16 Pro            | iOS 18      |
| iPhone 15 Pro            | iOS 17      |
| iPhone 14                | iOS 16      |
| iPhone 14 Pro            | iOS 16      |
| iPhone 13                | iOS 15      |
| iPhone 13 Mini           | iOS 15      |

---