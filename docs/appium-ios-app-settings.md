---
id: appium-ios-app-settings
title: iOS App Settings
sidebar_label: iOS App Settings
description: iOS App Settings are the permissions or preferences that can be enabled/disabled for an app through iOS settings.
keywords:
  - appium
  - ios
  - app settings
  - lambdatest ios
  - automation on lambdatest
  - ios app settings
  - app automation
  - real devices
url: https://www.lambdatest.com/support/docs/appium-ios-app-settings/
site_name: LambdaTest
slug: appium-ios-app-settings/
---
import RealDeviceTag from '../src/component/realDevice';

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
          "name": "iOS App Settings",
          "item": "https://www.lambdatest.com/support/docs/appium-ios-app-settings/"
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> 
**iOS App Settings** are the permissions or preferences that can be enabled/disabled for an app through iOS settings. Accessing the device settings is restricted on the iOS public cloud devices of LambdaTest due to security constraints. However, in multiple cases, the native app must be tested for various permissions which can only be enabled and disabled with the settings app.

This document will guide you on how to access and use iOS settings for **App Automation session.**

:::note
This feature is supported only on iOS 14 and above devices.
:::

## How to use iOS app settings in App Automation

---

To make it easier for the user to access the iOS app settings, we have created a **lambda-hook**. This web-hook supports the opening and manipulation of the settings.

The hook `"lambda-ios-settings"` takes a JSON parameter which tells which settings we need to manipulate. Below shown is an example of the lambda hook written in python3.

```bash
params = {"Permission Settings":{"Camera":"Off", "Location":"While using the app"},"Reset App":"On","Next Page":{"Child Toggle":"On"},"Others":"White","Slider-1":"0.1", "TextField-2":"ABCD", "TextField-1":"XYZ"}
driver.execute_script("lambda-ios-settings", params)
```

If you look at the code snippet above you can see `params` which contains the **JSON object** for manipulating the iOS app settings. This JSON object contains **Permission settings**. Let’s learn more about that.


## iOS app settings Supported by Lambda Hook

---

### App-specific permission settings 
The permission settings are available in the OS and changed through permissions provided by the user.

**Supported permission settings**

Currently, App Automate supports the following permission settings:

- Camera

- Contacts

- Photos

- Notifications

- Location

- Precise Location

One important thing to remember while handling Permission Settings is that, we have to first take action on the **Permission Pop ups** from the app when they appear and then only those particular Permission Settings will be reflected in the app settings page. For example:

Let's say we pass Camera: "On" in the lambda hook’s preferences even before handling Camera’s permission popup from the app, the Camera key would be missing on the app settings page which would result in failure. So we have to be sure that we have handled the permission pop ups before calling lambda hook.

:::info

Note that we have separate key for Precise Location. We do not pass it inside Location object as shown:

```bash
params = {"Permission Settings":{"Location":"While using the app", "Precise Location": "On"}}
```

:::
### Custom App Settings 

These are the settings added by the app developer using the [iOS Settings Bundle](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/UserDefaults/Preferences/Preferences.html#//apple_ref/doc/uid/10000059i-CH6-SW11).

Currently, App Automate supports the following **custom settings** - 

*1. Toggles-* 

Toggles represent simple On/Off switches. To automate toggles, use the setting name as the key and set its value to "On" or "Off".

Example => Biometric : On


*2. Multivalued Settings-*

Multivalued settings allow users to choose from multiple options, such as dropdowns or segmented controls. The setting name is the key, and the selected option is the value.

Example => Currency : Rs

*3. Nested Settings-*

Nested settings refer to child panes or submenus within the main settings. To interact with them, use the main setting name and specify the desired nested option.

Example => Other Settings : [Country:USA , Voice Command : On]

*4. Sliders-*

Sliders accept decimal values between 0 and 1. If multiple sliders are present, specify the index to target a specific one.

Example => Slider-1 : 0.5

*5. Textfields-*

Textfields accept plain text input. If multiple textfields exist, use an indexed key to target the correct field.

Example => TextField-1 : This is LambdaTest

*6. Secure Textfields-* 

Secure textfields are similar to regular textfields but are used for sensitive data like passwords. They obscure the text as it’s entered.

Example => SecureTextField-1: 000000

Note: If any key is not present, we should get an error saying one of the keys is missing in the passed preferences.

**Important Considerations:** 

*1. Default Values-* 

If a Textfield or Secure Textfield has a default value, it will be cleared before applying the new preference. To retain the default value, pass it explicitly in the preference.

*2. Clearing Values-*

Pass an empty string ("") to clear an existing value.

*3. Untouched Fields-* 

To leave a Textfield/Secure Textfield untouched, simply omit it from the preferences.

### Remember

The title of the keys displayed on your iOS app settings page must be unique.


## Additional Links

---

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

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
      iOS App Settings
      </span>
    </li>
  </ul>
</nav>
