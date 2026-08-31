# Advanced Settings in KaneAI Test Case

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI allows you to edit the advanced settings of an existing test case directly from the **Test Summary** page. This gives you the flexibility to update configurations like network settings, timezone, Chrome options, and custom headers after a test has already been authored, without having to recreate it from scratch.

This feature is supported across all platforms: **Desktop Web**, **Mobile App**, and **Mobile Web**.

## Overview

When you edit advanced settings for a test case, you have two options:

- **Apply Settings**: Saves the updated settings and generates a new version of the test case with regenerated code. Use this when the setting changes do not affect the test steps themselves.
- **Edit Test Steps**: Saves the updated settings and opens the playground so you can make relevant changes to your test steps. Use this when the updated settings may require modifications to the test flow.

## Platform-Specific Advanced Settings


The available settings depend on the platform of your test case. Refer to the relevant section below for the complete list of configurable options.

### Desktop Web


| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy for accessing applications behind firewalls |
| **Timezone** | Dropdown | Set the timezone where your tests will run |
| **Chrome Options** | Toggle + multi-input | Add up to 10 Chrome browser command-line flags |
| **Custom Headers** | Toggle + multi-input | Add up to 10 custom HTTP headers to inject in your test case |

### Android App


**Top-level settings:**

| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy for accessing apps behind firewalls |
| **Auto-login through Google** | Toggle + credentials | Start session pre-authenticated with a Google account |
| **GPS Location** | Toggle + lat/long input | Mock GPS coordinates on real device |

**Session settings:**

| Setting | Control Type | Description |
|---|---|---|
| **Auto-Grant Permissions** | Toggle | Auto-grant all Android Manifest permissions |
| **Enable Keyboard** | Toggle | Use specialized Unicode-enabled keyboard |
| **Ignore Unimportant Views** | Toggle | Ignore views marked unimportant for accessibility |
| **Disable UI Idle Wait** | Toggle | Skip idle wait before commands (Flutter, React Native) |
| **Enable Secure Screenshot Mocking** | Toggle | Mock secure screenshots (Salesforce use case) |
| **Disable Screenshot Block** | Toggle | Disable secure screenshot blocking |
| **Biometric Authentication** | Toggle | Enable Fingerprint / Touch ID workflows (Android 11+) |
| **Image Injection** | Toggle | Enable image capture, QR code, barcode scanning |
| **Video Injection** | Toggle | Inject video feed for live detection / face recognition |
| **Device Orientation** | Dropdown (Auto) | Set device orientation for session |
| **Capture Network Logs** | Toggle | Capture network logs for network assertions |
| **Network Throttling** | Dropdown | Select throttling profile |
| **Timezone** | Dropdown | Set timezone for test session |
| **Language** | Dropdown | Set language for test session |


For more on mobile app capabilities like biometric authentication, image injection, and video injection, see [KaneAI Mobile App Capabilities](/support/docs/kane-ai-mobile-app-capabilities/).


### iOS App


**Top-level settings:**

| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy |
| **GPS Location** | Toggle + lat/long input | Mock GPS coordinates on real device |

**Session settings:**

| Setting | Control Type | Description |
|---|---|---|
| **Upload File** | Toggle | Enable file uploads to the application |
| **Auto-Accept Alerts** | Toggle | Auto-accept system/app-level alerts |
| **Auto-Dismiss Alerts** | Toggle | Auto-dismiss system/app-level alerts |
| **Biometric Authentication** | Toggle | Enable Fingerprint / Touch ID |
| **Image Injection** | Toggle | Image capture, QR code, barcode scanning |
| **Video Injection** | Toggle | Inject recorded video feed |
| **Device Orientation** | Dropdown (Auto) | Set orientation |
| **Capture Network Logs** | Toggle | Capture network logs |
| **Network Throttling** | Dropdown | Select throttling profile |
| **Timezone** | Dropdown | Set timezone |
| **Language** | Dropdown | Set language |

### Android Web


Android Web test cases share most settings with **Android App**, with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

### iOS Web


iOS Web test cases share most settings with [iOS App](#ios-app), with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

## How to Edit Advanced Settings


Follow these steps to update the Advanced Settings of an existing test case.

Navigate to your test case in KaneAI and open the **Test Summary** tab.


Open your test case in KaneAI and go to the **Test Summary** tab.

**Result:** The test case summary opens.

### Step 2: Open the Edit Dialog


Click **Edit Test Steps** to open the Advanced Settings panel.



**Result:** The panel shows the current configuration for your test case.

### Step 3: Modify the Settings


Update the settings as needed. For example:

- Change the **Network Configuration** from `None` to `Geolocation` and select a region.
- Update the **Timezone** to a different zone.
- Toggle **Chrome Options** on or off and add command-line switches.
- Enable **Custom Headers** and add HTTP headers for your test.



**Result:** Modified settings display an **Edited** badge.

### Step 4: Save Your Changes


Choose one of the two save actions at the bottom of the dialog (see [Save actions](#save-actions)).



**Result:** KaneAI saves the updated settings and generates a new version of the test case.

## Save Actions


Choose one of the following actions to save your settings changes.

| Action | What it does | When to use |
|---|---|---|
| **Apply Settings** | Saves the settings and generates a new version with regenerated code. The test case stays on the Test Summary page. | The setting changes do not affect the test steps. |
| **Edit Test Steps** | Saves the settings and opens the playground so you can adjust the test steps. | The updated settings may require changes to the test flow. |

## Version History


Each time you apply updated settings, KaneAI creates a new version of the test case, viewable from the **Version History** tab. The comparison view shows a diff of what changed, such as updated network configuration or timezone values, so you can track exactly what was modified in each version.



## Limitations


Keep these limitations in mind:

- **Advanced Settings only:** From the Test Summary page you can edit only Advanced Settings (network configuration, timezone, Chrome options, custom headers, and mobile session settings). To change test steps, OS, browser, or device configuration, open the playground.
- **New version on every apply:** Applying updated settings always creates a new version with regenerated code. You cannot update settings in place.
- **Pre-rollout versions:** Comparing a version created after this feature rolled out with one created before it shows no Advanced Settings changes, because the older version never tracked them. Opening a pre-rollout version shows only the latest settings, because the original settings were not recorded.

## Next Steps


Continue with these guides:

- [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/)
- [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/)
- [KaneAI Geolocation Tunnel Proxy](/support/docs/kane-ai-geolocation-tunnel-proxy/)
