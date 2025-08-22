---
id: set-device-dark-mode
title: Set Device Dark Mode
sidebar_label: Set Dark Mode
description: This documentation will help you change thed device level dark and light mode.
keywords:
  - mobile app testing
  - realtime mobile testing on real devices
  - how to test mobile apps manually
  - manual mobile app testing tools
  - appium desktop
  - dark mode
  - virtual devices

url: https://www.lambdatest.com/support/docs/set-device-dark-mode/
site_name: LambdaTest
slug: set-device-dark-mode/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
          "name": "Appium Inspector Integration on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/set-device-dark-mode/"
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
LambdaTest now allows you to **enable or disable dark mode** for automation testing as well. This helps developers and testers validate UI behavior across light and dark themes, theme switching without manual intervention, and visual consistency for mobile apps and web applications.

---

## Use Cases

### Mobile App Testing

- Ensure UI elements render correctly in dark mode
- Check text contrast and readability
- Verify icon and image visibility in dark backgrounds
- Confirm theme consistency across screens

### Web Testing

- Test CSS media queries for `prefers-color-scheme: dark`
- Validate dark theme implementations in your app
- Check browser-level dark mode support
- Review responsiveness across both themes

:::info 
 This feature works for both Virtual and Real Devices.
:::

## Supported Platforms

| Platform | Version        |
|----------|----------------|
| iOS      | 13 and above   |
| Android  | 11 and above   |


### Enabling Dark Mode via Capabilities 

You can enable the dark mode setting through `darkMode` capability before the session starts. This ensures the device starts in the dark   theme without additional steps during test execution.

<Tabs>
<TabItem value="ios" label="iOS" default>

```json
{
    "deviceName":"iPhone 16",
    "platformName":"ios",
    "platformVersion":"18",
    "isRealMobile":True,
    "app":"YOUR_APP_URL",
    #highlight-next-line
    "darkMode": true
}
```

</TabItem>
<TabItem value="android" label="Android">

```json
{
    "deviceName":"Galaxy S20",
    "platformName":"Android",
    "platformVersion":"10",
    "isRealMobile":True,
    "app":"YOUR_APP_URL",
    #highlight-next-line
    "darkMode": true
}
```

</TabItem>
</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

---

### Enabling Dark Mode via Hooks

To change dark mode settings during test execution, use the hook with the `updateDeviceSettings` action. The example below demonstrates this using **Python**.

<Tabs>
<TabItem value="real-devices" label="Real Devices" default>

```python
driver.execute_script('lambda_executor: { 
      "action": "updateDeviceSettings", 
      "arguments": { 
        "darkMode" : "on" 
        } 
}')
```

</TabItem>
<TabItem value="virtual-devices" label="Virtual Devices">

```python
driver.execute_script('lambdatest_executor: {
      "action": "updateDeviceSettings",
      "arguments": {
        "DarkMode": "true"
       }
}')
```

</TabItem>
</Tabs>


:::tip
- Dark mode changes are applied at the system level and may require app restarts for full effect
- Some legacy applications may not fully support dark mode theming
- Web applications must implement their own dark mode CSS for the setting to take effect beyond browser UI
:::

