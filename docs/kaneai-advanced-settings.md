---
id: kaneai-advanced-settings
title: Advanced Settings in KaneAI Test Case
hide_title: false
sidebar_label: Advanced Settings
description: Configure iOS app permissions during authoring and edit advanced settings for KaneAI test cases across desktop web, mobile app, and mobile web platforms.
keywords:
  - kaneai advanced settings
  - edit advanced settings
  - test case settings
  - network configuration
  - chrome options
  - custom headers
  - timezone
  - resolution
  - ios app permissions
  - version history
  - kaneai test summary
url: https://www.testmuai.com/support/docs/kaneai-advanced-settings/
site_name: TestMu AI
slug: kaneai-advanced-settings/
canonical: https://www.testmuai.com/support/docs/kaneai-advanced-settings/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/"
    },
    "headline": "Advanced Settings in KaneAI Test Case",
    "description": "Configure iOS app permissions during authoring and edit advanced settings for KaneAI test cases across desktop web, mobile app, and mobile web platforms.",
    "url": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "kaneai advanced settings",
      "edit advanced settings",
      "test case settings"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-12"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Edit Advanced Settings",
      "description": "Learn how to edit advanced settings for your KaneAI test cases from the test summary page across desktop web, mobile app, and mobile web platforms.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Open the Test Summary Page",
          "text": "Navigate to your test case in KaneAI and open the Test Summary tab.",
          "url": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/#step-1-open-the-test-summary-page"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Open the Edit Test Steps Dialog",
          "text": "Click on Edit Test Steps to open the advanced settings panel. You will see the current configuration for your test case.",
          "url": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/#step-2-open-the-edit-test-steps-dialog"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Modify the Settings",
          "text": "Update the settings as needed. For example, you can: Change the Network Configuration from None to Geolocation and select a region. Choose the Resolution for a Desktop Web authoring or editing session. Update the Timezone to a different zone. Toggle Chrome Options on or off and add command-line switches. Enable Custom Headers and add HTTP headers for your test. Settings that have been modified will display an Edited badge next to them.",
          "url": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/#step-3-modify-the-settings"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Save Your Changes",
          "text": "Choose one of the two actions at the bottom of the dialog: Apply Settings: Saves the settings and generates a new version with updated code. The test case remains on the Test Summary page. Edit Test Steps: Saves the settings and opens the playground so you can adjust the test steps to reflect the new configuration. The session opens in the Paused state with the cursor at the bottom-most step, so step editing is available right away. See Authoring Session.",
          "url": "https://www.testmuai.com/support/docs/kaneai-advanced-settings/#step-4-save-your-changes"
        }
      ]
    }
  ]) }}
/>

KaneAI allows you to edit the advanced settings of an existing test case directly from the **Test Summary** page. This gives you the flexibility to update configurations like network settings, resolution, timezone, Chrome options, and custom headers after a test has already been authored, without having to recreate it from scratch.

When authoring an iOS mobile app test, you can also configure [App Permissions](#ios-app-permissions) in **Advanced Settings** before starting the session.

Editing advanced settings is supported across **Desktop Web**, **Mobile App**, and **Mobile Web**. Individual settings depend on the platform.

## Overview

When you edit advanced settings for a test case, you have two options:

- **Apply Settings**: Saves the updated settings and generates a new version of the test case with regenerated code. Use this when the setting changes do not affect the test steps themselves.
- **Edit Test Steps**: Saves the updated settings and opens the playground so you can make relevant changes to your test steps. Use this when the updated settings may require modifications to the test flow.

## Platform-Specific Advanced Settings

The available settings vary depending on the platform of your test case. Refer to the relevant section below for the complete list of configurable options.

### Desktop Web

| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy for accessing applications behind firewalls |
| **Resolution** | Dropdown | Set the browser window size at 100% scaling: **1440 x 900 (Default)**, **1920 x 1080**, **1366 x 768**, or **1280 x 720** |
| **Timezone** | Dropdown | Set the timezone where your tests will run |
| **Chrome Options** | Toggle + multi-input | Add up to 10 Chrome browser command-line flags |
| **Custom Headers** | Toggle + multi-input | Add up to 10 custom HTTP headers to inject in your test case |
| **Environment** | Dropdown | Select the variable environment the test is authored against. See [Select an Environment for an Authoring Session](/support/docs/kane-ai-using-variables/#select-an-environment-for-an-authoring-session) |

:::note
**Resolution** applies only to Desktop Web authoring and editing sessions. Test runs use the resolution specified in their execution configurations.
:::

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
| **Network Throttling** | Dropdown | Select a throttling profile, always honored during authoring and test case execution. See [Network Throttling](/support/docs/kaneai-network-throttling/). |
| **Timezone** | Dropdown | Set timezone for test session |
| **Language** | Dropdown | Set language for test session |

:::tip
For more details on mobile app capabilities like biometric authentication, image injection, and video injection, see [Advanced Mobile Features](/support/docs/kane-ai-mobile-app-capabilities/).
:::

### iOS App

**Top-level settings:**

| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy |
| **GPS Location** | Toggle + lat/long input | Mock GPS coordinates on real device |
| **App Permissions** | Dropdowns per permission | Configure app permissions at session start for native iOS apps on real devices running iOS 16 or later. See [iOS App Permissions](#ios-app-permissions). |

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
| **Network Throttling** | Dropdown | Select a throttling profile, always honored during authoring and test case execution. See [Network Throttling](/support/docs/kaneai-network-throttling/). |
| **Timezone** | Dropdown | Set timezone |
| **Language** | Dropdown | Set language |

#### iOS App Permissions

Use **App Permissions** to configure access to location, camera, photos, and contacts for a native iOS app. This feature requires a **real device running iOS 16 or later**.

1. Select your iOS app build and a supported real device for authoring.
2. Open **Advanced Settings** and find **App Permissions**.
3. Choose the permissions your test needs from the options below. Leave a permission at **No change** to preserve the app's normal permission behavior.
4. Start the authoring session. KaneAI applies the selected permissions during session startup and relaunches the app after applying them.
5. Author and save your test case. The saved permissions are reused in subsequent Test Runs and reruns.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/ios-app-permissions.png').default} alt="App Permissions in KaneAI iOS Advanced Settings, showing Location, nested Precise Location, Camera, Photos, and Contacts" className="doc_img"/>

| Permission | iOS 16–17 options | iOS 18 and later options |
|---|---|---|
| **Location** | Never, Ask next time, While using the app, Always | Never, Ask next time, While using the app, Always |
| **Precise Location** | On, Off | On, Off |
| **Camera** | On, Off | On, Off |
| **Photos** | None, Selected photos, All photos | None, Limited access, Full access |
| **Contacts** | On, Off | None, Limited access, Full access |

All permissions also offer **No change**, which is the default. **Precise Location** is nested under **Location** and is available when you select a Location value other than **Never** or **No change**. For a test that needs an exact location while using the app, select **Location: While using the app** and **Precise Location: On**.

**Location** controls whether the app can access location data. To choose the coordinates the device reports, configure [GPS Location](/support/docs/kaneai-gps-location/) separately. App Permissions also operate independently of **Auto-Accept Alerts** and **Auto-Dismiss Alerts**.

For more details about iOS permissions and settings in App Automation, see [iOS App Settings](/support/docs/appium-ios-app-settings/).

To change permissions for a saved test, open **Test Summary → Edit Test Steps → Advanced Settings**, update **App Permissions**, and [save a new version](#step-4-save-your-changes). Subsequent Test Runs use the updated saved configuration. Permissions cannot be overridden when creating or executing a Test Run, or changed during an active session.

**Limitations and session behavior:**

- **Supported platforms:** App Permissions are available only for native iOS apps on real devices running iOS 16 or later. Android apps, iOS mobile browsers, desktop browsers, iOS virtual devices, and iOS 15 or earlier are unsupported. Custom app preferences, such as an app's environment setting, are not supported through App Permissions.
- **Startup time:** Applying permissions adds approximately one minute to session startup. Configuring multiple permissions can increase this delay.
- **Permissions not applied:** If a permission cannot be applied, the session still starts and displays a warning identifying the affected permission. For example, a permission may be unavailable in iOS Settings until the app has requested it. Review the warning before continuing with steps that depend on that permission.
- **iOS version compatibility:** Choose options supported by the device used for execution. For example, **Full access** for Photos and Contacts requires iOS 18 or later. If a test saved with these values runs on iOS 16 or 17, the unsupported permissions are shown as **Not Applied**.
- **Reset Session:** Reinstalls the app and resets all permissions to **Not Asked**. Configured permissions are applied only at session start; resetting does not preserve the applied permission state.

### Android Web

Android Web test cases share most settings with [Android App](#android-app), with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

### iOS Web

iOS Web test cases share most settings with [iOS App](#ios-app), with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

**App Permissions** are exclusive to native iOS app tests and are not available for iOS Web.

## How to Edit Advanced Settings

### Step 1: Open the Test Summary Page

Navigate to your test case in KaneAI and open the **Test Summary** tab.

### Step 2: Open the Edit Test Steps Dialog

Click on **Edit Test Steps** to open the advanced settings panel. You will see the current configuration for your test case.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/edit-test-steps-advanced-settings.png').default} alt="Edit Test Steps - Advanced Settings" className="doc_img"/>

### Step 3: Modify the Settings

Update the settings as needed. For example, you can:

- Change the **Network Configuration** from `None` to `Geolocation` and select a region.
- Choose the **Resolution** for a **Desktop Web** authoring or editing session.
- Update the **Timezone** to a different zone.
- Toggle **Chrome Options** on or off and add command-line switches.
- Enable **Custom Headers** and add HTTP headers for your test.
- Change the **Environment** the test is authored against.
- Update **App Permissions** for a native iOS app test on a supported real device.

Settings that have been modified will display an **Edited** badge next to them.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/advanced-settings-in-session.png').default} alt="Edited Advanced Settings" className="doc_img"/>

### Step 4: Save Your Changes

Choose one of the two actions at the bottom of the dialog:

- **Apply Settings**: Saves the settings and generates a new version with updated code. The test case remains on the Test Summary page.
- **Edit Test Steps**: Saves the settings and opens the playground so you can adjust the test steps to reflect the new configuration. The session opens in the **Paused** state with the cursor at the bottom-most step, so step editing is available right away. See [Authoring Session](/support/docs/kaneai-authoring-session/).

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/edited-advanced-settings.png').default} alt="Apply Settings or Edit Test Steps" className="doc_img"/>

## Version History

Every time you apply updated settings, a new version of the test case is created. You can view and compare changes between versions from the **Version History** tab.

The version comparison view shows a diff of what changed, for example, updated network configuration or timezone values, so you can track exactly what was modified in each version. A change of environment is shown by the environment's name.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/advanced-settings-version-history.png').default} alt="Advanced Settings Version History" className="doc_img"/>

## Limitations

- **Advanced settings only**: Only advanced settings (network configuration, Desktop Web authoring resolution, timezone, Chrome options, custom headers, environment, and mobile session settings) can be edited from the test summary page. To change test steps, OS, browser, or device configurations, you need to open the playground.
- **New version generated on every apply**: Applying updated settings always creates a new version of the test case with regenerated code. There is no way to update settings in-place without generating a new version.
- **Version history diff for pre-rollout versions**: If you compare a version created after this feature was rolled out with a version created before it, the diff will have no advanced settings changes to display since the older version never tracked them. Similarly, if you open a pre-rollout version and click on advanced settings, only the latest settings are shown as the original settings were not recorded for that version.

> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._
