# How to Change iOS App Settings on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Changing iOS app settings on TestMu AI lets you toggle permissions and preferences like camera, location, and app resets during App Automation on real iOS devices, using the lambda-ios-settings hook to manipulate settings the public cloud otherwise blocks for security.

**Supported on:** Real devices

**iOS App Settings** are the permissions or preferences that can be enabled/disabled for an app through iOS settings. Accessing the device settings is restricted on the iOS public cloud devices of TestMu AI due to security constraints. However, in multiple cases, the native app must be tested for various permissions which can only be enabled and disabled with the settings app.

Access and configure iOS device settings during an **App Automation session.**


This feature is supported only on iOS 14 and above devices.


## How to use iOS app settings in App Automation



To make it easier for the user to access the iOS app settings, we have created a **lambda-hook**. This web-hook supports the opening and manipulation of the settings.

The hook `"lambda-ios-settings"` takes a JSON parameter which tells which settings we need to manipulate. Below shown is an example of the lambda hook written in python3.

```bash
params = {"Permission Settings":{"Camera":"Off", "Location":"While using the app"},"Reset App":"On","Next Page":{"Child Toggle":"On"},"Others":"White","Slider-1":"0.1", "TextField-2":"ABCD", "TextField-1":"XYZ"}
driver.execute_script("lambda-ios-settings", params)
```

If you look at the code snippet above you can see `params` which contains the **JSON object** for manipulating the iOS app settings. This JSON object contains **Permission settings**. Let’s learn more about that.


## iOS app settings Supported by Lambda Hook



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



Note that we have separate key for Precise Location. We do not pass it inside Location object as shown:

```bash
params = {"Permission Settings":{"Location":"While using the app", "Precise Location": "On"}}
```



### Custom App Settings

These are the settings added by the app developer using the [iOS Settings Bundle](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/UserDefaults/Preferences/Preferences.html#//apple_ref/doc/uid/10000059i-CH6-SW11).


For a step-by-step guide on adding a Settings Bundle to your app, refer to Apple's official documentation: [Building a settings bundle for your app](https://developer.apple.com/documentation/foundation/building-a-settings-bundle-for-your-app).


**Supported custom settings**

Currently, App Automate supports the following custom settings:

- Toggles

- Multivalued Settings

- Nested Settings

- Sliders

- Textfields

Apart from Textfields and Sliders, for every other settings, we have to pass the Name of that particular setting as the **key-value pair**. For example:

- "Reset App" : "On".

For **textfields and sliders**, we pass the index of that particular textfield or slider starting from 1 when we traverse from top to bottom. For example:

1. "Slider-1":"0.1",

2. "TextField-2":"ABCD"

The values in Slider are entered on a scale from 0-1 which means the values are not integers but decimals.

If any key is not present, we should get an error saying one of the keys is missing in the passed preferences.

### Remember

The title of the keys displayed on your iOS app settings page must be unique.


## Apply iOS app settings with the `updateAppSettings` capability



Besides the in-session `lambda-ios-settings` hook, which applies settings **on demand** during a running test, you can now apply the same iOS Settings Bundle values **automatically at session start** by passing the `updateAppSettings` capability. TestMu AI applies the settings right after the app is installed and **before it launches**, so the app reads the desired values on its very first launch, with no in-test hook call required.

**When to use which**

| | `updateAppSettings` capability | `lambda-ios-settings` hook |
|---|---|---|
| Applied | Once, pre-launch (at session start) | On demand, any time during the test |
| Best for | Baseline settings the app should have before first launch | Changing settings mid-run |


You can use both in the same session. The hook applies over the capability values if you change them later.


### Requirements

- iOS **real device**, **App Automation** (Appium) session.
- The app under test must include a **Settings Bundle** (`Settings.bundle`).
- The payload uses the **same structure** as the `lambda-ios-settings` hook (see [iOS app settings Supported by Lambda Hook](#ios-app-settings-supported-by-lambda-hook) above).

### Usage

Pass `updateAppSettings` inside `lt:options` (W3C). Below shown is an example written in python3.

```python
options = {
"platformName": "iOS",
"lt:options": {
"deviceName": "iPhone 15",
"platformVersion": "17",
"isRealMobile": True,
"app": "lt://APP_ID",
"updateAppSettings": {
"Permission Settings": {
"Location": "While using the app",
"Precise Location": "On"
},
"Allow Cross-Website Tracking": "On",
"Environment": "QA_1",
"Slider-1": "0.5",
"TextField-1": "sample text"
}
}
}
```

The keys and values follow the same rules as the hook: setting **titles must match the app's iOS Settings page exactly** and be unique, sliders use a 0-1 decimal scale, and textfields and sliders are indexed (e.g. `Slider-1`, `TextField-2`).

### Errors and validation

`updateAppSettings` is validated when the session is created and **fails fast** (no device is allocated) if the target is not applicable:

| Scenario | Error message |
|---|---|
| App has no Settings Bundle | `Invalid test parameters: updateAppSettings capability is not supported for the app_id  specified in the 'app' params - the app does not have a Settings Bundle. Remove the updateAppSettings capability or upload a build that includes Settings.bundle.` |
| Web / no-app session | `updateAppSettings capability is only supported for iOS real device app automation tests` |
| Android session | `updateAppSettings capability is not supported with android platform` |


## Additional Links



- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
- [Building a settings bundle for your app (Apple Developer)](https://developer.apple.com/documentation/foundation/building-a-settings-bundle-for-your-app)
