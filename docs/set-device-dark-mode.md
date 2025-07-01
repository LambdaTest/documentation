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

url: https://www.lambdatest.com/support/docs/set-dark-mode/
site_name: LambdaTest
slug: set-dark-mode/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "item": "https://www.lambdatest.com/support/docs/set-dark-mode/"
        }]
      })
    }}
></script>

---

LambdaTest now supports configuring dark mode settings via Appium during automation testing sessions on Virtual Devices. This allows developers and testers to validate user interface behavior, theme switching, and visual consistency across light and dark mode environments for both mobile apps and web applications.

By the end of this document, you will be able to:

- Enable or disable dark mode on iOS and Android devices
- Test dark mode behavior in web browsers
- Validate app UI consistency across different theme modes

## Testing Scenarios

### Mobile App Testing

- Validate app UI elements render correctly in dark mode
- Test color contrast and readability in dark themes
- Verify icon and image visibility in dark backgrounds
- Ensure proper theme inheritance across app screens

### Web Testing

- Test CSS media queries for `prefers-color-scheme: dark`
- Validate web application dark theme implementations
- Verify browser-level dark mode support
- Test responsive design across light and dark modes

## Support for Automation

To modify the dark mode settings programmatically, use the `lambdatest_executor` Appium hook with the `updateDeviceSettings` action. You can toggle dark mode on or off for comprehensive theme testing across your applications.

:::info

💡 **Note:** This feature is currently supported on Virtual Devices only.
:::

## Appium Hook Example

### Java Implementation

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {
    \"action\":\"updateDeviceSettings\", 
    \"arguments\": {
       \"DarkMode\" : \"true\"
   }
}");
```

### Python Implementation

```python
driver.execute_script('lambdatest_executor: {
    "action": "updateDeviceSettings",
    "arguments": {
        "DarkMode": "true"
    }
}')
```

## Supported Arguments

| Argument | Format | Description |
|----------|--------|-------------|
| DarkMode | true / false | Enables or disables system-wide dark mode. True activates dark mode, False activates light mode. |

💡 **Note:** Dark mode changes apply system-wide and will affect both native apps and web browsers. Some applications may require a restart or refresh to fully reflect the theme changes.

## Supported Platforms

- **iOS:** 13 and above
- **Android:** 10 and above

## Limitations

- Dark mode changes are applied at the system level and may require app restarts for full effect
- Some legacy applications may not fully support dark mode theming
- Web applications must implement their own dark mode CSS for the setting to take effect beyond browser UI
