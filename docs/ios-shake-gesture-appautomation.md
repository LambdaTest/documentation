---
id: ios-shake-gesture-appautomation
title: Trigger iOS Shake Gesture on Mobile Devices Using Appium
hide_title: true
sidebar_label: Shake Gesture (iOS)
description: Simulate a shake gesture on iOS real devices and simulators during Appium automation tests on TestMu AI using the lambda_executor hook.
keywords:
  - Appium
  - TestMu AI
  - iOS Shake Gesture
  - Shake Gesture Automation
  - lambda_executor
  - Real Devices
  - iOS Simulator
url: https://www.testmuai.com/support/docs/ios-shake-gesture-appautomation/
site_name: TestMu AI
slug: ios-shake-gesture-appautomation/
canonical: https://www.testmuai.com/support/docs/ios-shake-gesture-appautomation/
---


import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "Trigger iOS Shake Gesture on Real Devices",
          "item": `${BRAND_URL}/support/docs/ios-shake-gesture-appautomation/`
        }]
      })
    }}
></script>

# Trigger Shake Gesture on iOS Devices 
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

<BrandName /> supports simulating a **shake gesture** on iOS Real Devices and iOS Simulators during Appium automation sessions. Apps often bind the shake gesture to actions such as switching between production and staging builds, opening debug menus, surfacing feedback prompts, or undoing the last action.

By the end of this document, you will be able to:
- Trigger a shake gesture on iOS Real Devices and Simulators
- Validate the response returned by the `lambda_executor` hook
- Use the same hook inside Web Automation tests running on iOS Real Devices

:::note
This feature also works in **Web Automation tests on Real Devices**. The same `lambda_executor` script can be used inside your Appium-based web automation session.
:::

---

## Supported Platforms

| Platform           | OS Version          | 
|--------------------|---------------------|
| iOS Real Device    | iOS 16 and above    | 
| iOS Simulator (Virtual) | All OS   | 

---

## Support for Automation on Mobile Devices

To trigger a shake gesture, use the `lambda_executor` Appium hook with the `gestures` action. No additional capability is required.

---

## Supported Arguments

| Argument          | Type      | Description                                                                 |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| `action`          | String    | Must be `"gestures"` (lowercase).                                           |
| `arguments.shake` | Boolean   | Set to `true` to trigger the shake. Set to `false` to skip without erroring.|

> 💡 **Note:** The hook **can be invoked multiple times** in the same session.

---

### Appium Hook Example

<Tabs className="docs__val">
  <TabItem value="python" label="Python" default>

```python
response = driver.execute_script(
  'lambda_executor: {"action": "gestures", "arguments": {"shake": true}}'
)
# response → "shake gesture triggered successfully"
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
String response = (String) ((JavascriptExecutor) driver).executeScript(
  "lambda_executor: {\"action\": \"gestures\", \"arguments\": {\"shake\": true}}"
);
// response → "shake gesture triggered successfully"
```

  </TabItem>
</Tabs>

---

## Response References

| Scenario                   | Response                                          |
|----------------------------|---------------------------------------------------|
| `shake: true`| `shake gesture triggered successfully`            |
| `shake: false`             | `shake gesture skipped (shake=false)`             |
| Wrong type for `shake`     | `argument 'shake' must be a boolean, got string`  |
| `shake` argument missing   | `missing required argument: shake`                |
| Wrong action casing        | `Please send a valid action for LambdaHook`       |
| Android session            | `shake gesture is supported on iOS only`          |






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
       iOS Shake Gesture
      </span>
    </li>
  </ul>
</nav>
