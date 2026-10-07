# Safari Settings for App Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI allows you to configure Safari browser settings on **real iOS devices** during your automated tests using Appium. By passing the `crossSiteTracking` and `blockSafariPopups` capabilities, you can control Safari's privacy and pop-up behavior to match your testing requirements.

## Overview

Safari on iOS enables **Prevent Cross-Site Tracking** by default, which restricts third-party cookies and website data from being shared across different websites. This can interfere with test scenarios that rely on cross-site authentication, third-party integrations, or cookie-based tracking.

Additionally, Safari's **Block All Popups** behavior can prevent pop-up windows from opening, which may block testing flows involving payment gateways, OAuth pop-ups, or multi-window interactions.

With TestMu AI's Safari Settings capabilities, you can programmatically control these settings during your automation test sessions on real iOS devices.

## Capabilities

| Capability | Type | Default | Description |
|------------|------|---------|-------------|
| `crossSiteTracking` | Boolean | `false` | When set to `true`, disables Safari's "Prevent Cross-Site Tracking" setting, allowing third-party cookies and cross-site data sharing. |
| `blockSafariPopups` | Boolean | `false` | When set to `true`, enables Safari's "Block All Popups" setting, preventing websites from opening pop-up windows. |

## Supported Platforms

| Device Type | Supported OS Version | Supported Frameworks |
|-------------|----------------------|----------------------|
| iPhone      | iOS 16 and above     | Appium, XCUI, Flutter |
| iPad        | iPadOS 16 and above  | Appium, XCUI, Flutter |

These capabilities are supported only on **real iOS devices**. They are not available on simulators or virtual devices.

## Usage Examples

Pass these capabilities alongside your other desired capabilities when initializing the Appium driver.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "iOS");
capabilities.setCapability("deviceName", "iPhone 15");
capabilities.setCapability("platformVersion", "17");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app", "YOUR_APP_URL");

// Safari Settings
capabilities.setCapability("crossSiteTracking", true);   // Disable Prevent Cross-Site Tracking
capabilities.setCapability("blockSafariPopups", true);    // Enable Block All Popups
```

```python
desired_caps = {
    "platformName": "iOS",
    "deviceName": "iPhone 15",
    "platformVersion": "17",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",

    # Safari Settings
    "crossSiteTracking": True,       # Disable Prevent Cross-Site Tracking
    "blockSafariPopups": True,       # Enable Block All Popups
}
```

```javascript
const capabilities = {
    platformName: "iOS",
    deviceName: "iPhone 15",
    platformVersion: "17",
    isRealMobile: true,
    app: "YOUR_APP_URL",

    // Safari Settings
    crossSiteTracking: true,         // Disable Prevent Cross-Site Tracking
    blockSafariPopups: true,         // Enable Block All Popups
};
```

```csharp
AppiumOptions capabilities = new AppiumOptions();
capabilities.AddAdditionalCapability("platformName", "iOS");
capabilities.AddAdditionalCapability("deviceName", "iPhone 15");
capabilities.AddAdditionalCapability("platformVersion", "17");
capabilities.AddAdditionalCapability("isRealMobile", true);
capabilities.AddAdditionalCapability("app", "YOUR_APP_URL");

// Safari Settings
capabilities.AddAdditionalCapability("crossSiteTracking", true);   // Disable Prevent Cross-Site Tracking
capabilities.AddAdditionalCapability("blockSafariPopups", true);    // Enable Block All Popups
```

```ruby
capabilities = {
    "platformName" => "iOS",
    "deviceName" => "iPhone 15",
    "platformVersion" => "17",
    "isRealMobile" => true,
    "app" => "YOUR_APP_URL",

    # Safari Settings
    "crossSiteTracking" => true,     # Disable Prevent Cross-Site Tracking
    "blockSafariPopups" => true,     # Enable Block All Popups
}
```

## Capability Details

### crossSiteTracking

When `crossSiteTracking` is set to `true`, it disables Safari's "Prevent Cross-Site Tracking" privacy setting on the device. This allows:
- Third-party cookies to be read and written across different domains.
- Cross-site tracking mechanisms (analytics, ad-tech, session sharing) to function as expected.
- OAuth and SSO flows that depend on cookies across multiple domains to work seamlessly.

When set to `false` (default), Safari's built-in cross-site tracking prevention remains active, and third-party cookies are restricted.

### blockSafariPopups

When `blockSafariPopups` is set to `true`, it enables Safari's "Block All Popups" setting on the device. This:
- Prevents websites from opening new browser windows or tabs via JavaScript (`window.open()`).
- Blocks pop-up windows triggered by user interactions on websites.

When set to `false` (default), pop-up windows are allowed to open normally.

## Use Cases

- **OAuth / SSO Testing**: Disable cross-site tracking to test login flows that rely on cookies shared across identity providers and your application.
- **Ad-Tech & Analytics Validation**: Verify that third-party tracking pixels and analytics scripts function correctly when cross-site restrictions are removed.
- **Payment Gateway Flows**: Test payment redirects that involve pop-up windows or cross-domain cookie sharing.
- **Pop-Up Blocking Verification**: Enable popup blocking to verify your application gracefully handles blocked pop-ups with fallback behavior.
- **Privacy Compliance Testing**: Test your application with cross-site tracking both enabled and disabled to ensure compliance with user privacy expectations.

- These settings are applied during test setup and remain active for the entire session duration.
- Settings reset to their defaults when the session ends.
- The `crossSiteTracking` capability does **not** bypass CORS restrictions on 3rd-party iFrames. This is an Apple-level restriction that cannot be overridden.
- For **manual testing**, you can configure these same settings through the Safari Settings panel in the device toolbar during App Live or Browser Live sessions. See [Safari Settings on Real Devices](/support/docs/safari-settings-on-real-devices/) for more details.
