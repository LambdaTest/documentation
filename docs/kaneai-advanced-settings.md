---
id: kaneai-advanced-settings
title: How to Configure Advanced Settings With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Advanced Settings
description: Edit advanced settings for a KaneAI test from the test summary page across desktop web, mobile app, and mobile web.
keywords:
  - kaneai advanced settings
  - edit advanced settings
  - test case settings
  - network configuration
  - chrome options
  - custom headers
  - timezone
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
          "name": "Advanced Settings in KaneAI Test Case",
          "item": `${BRAND_URL}/support/docs/kaneai-advanced-settings/`
        }]
      })
    }}
></script>

# How to Configure Advanced Settings With KaneAI
***


**Advanced Settings** in KaneAI let you edit the configuration of an existing test case, such as network settings, timezone, Chrome options, and custom headers, directly from the **Test Summary** page without recreating the test. Advanced Settings are supported on **Desktop Web**, **Mobile App**, and **Mobile Web**.

## Platform-Specific Advanced Settings
***

The available settings depend on the platform of your test case. Refer to the relevant section below for the complete list of configurable options.

### Desktop Web
***

| Setting | Control Type | Description |
|---|---|---|
| **Network Configuration** | Dropdown (Tunnel / Inactive) | Select tunnel or proxy for accessing applications behind firewalls |
| **Timezone** | Dropdown | Set the timezone where your tests will run |
| **Chrome Options** | Toggle + multi-input | Add up to 10 Chrome browser command-line flags |
| **Custom Headers** | Toggle + multi-input | Add up to 10 custom HTTP headers to inject in your test case |

### Android App
***

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

:::tip
For more on mobile app capabilities like biometric authentication, image injection, and video injection, see [KaneAI Mobile App Capabilities](/support/docs/kane-ai-mobile-app-capabilities/).
:::

### iOS App
***

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
***

Android Web test cases share most settings with **Android App**, with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

### iOS Web
***

iOS Web test cases share most settings with [iOS App](#ios-app), with the following differences:

- **Custom Headers** is available (Toggle + multi-input, add up to 10 custom HTTP headers)
- **Biometric Authentication**, **Image Injection**, and **Video Injection** are **not** available

## Edit Advanced Settings
***

Follow these steps to update the Advanced Settings of an existing test case.

### Step 1: Open Test Summary
***

Open your test case in KaneAI and go to the **Test Summary** tab.

**Result:** The test case summary opens.

### Step 2: Open the Edit Dialog
***

Click **Edit Test Steps** to open the Advanced Settings panel.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/edit-test-steps-advanced-settings.png').default} alt="Edit Test Steps - Advanced Settings" className="doc_img"/>

**Result:** The panel shows the current configuration for your test case.

### Step 3: Modify the Settings
***

Update the settings as needed. For example:

- Change the **Network Configuration** from `None` to `Geolocation` and select a region.
- Update the **Timezone** to a different zone.
- Toggle **Chrome Options** on or off and add command-line switches.
- Enable **Custom Headers** and add HTTP headers for your test.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/advanced-settings-in-session.png').default} alt="Edited Advanced Settings" className="doc_img"/>

**Result:** Modified settings display an **Edited** badge.

### Step 4: Save Your Changes
***

Choose one of the two save actions at the bottom of the dialog (see [Save actions](#save-actions)).

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/edited-advanced-settings.png').default} alt="Apply Settings or Edit Test Steps" className="doc_img"/>

**Result:** KaneAI saves the updated settings and generates a new version of the test case.

## Save Actions
***

Choose one of the following actions to save your settings changes.

| Action | What it does | When to use |
|---|---|---|
| **Apply Settings** | Saves the settings and generates a new version with regenerated code. The test case stays on the Test Summary page. | The setting changes do not affect the test steps. |
| **Edit Test Steps** | Saves the settings and opens the playground so you can adjust the test steps. | The updated settings may require changes to the test flow. |

## Version History
***

Each time you apply updated settings, KaneAI creates a new version of the test case, viewable from the **Version History** tab. The comparison view shows a diff of what changed, such as updated network configuration or timezone values, so you can track exactly what was modified in each version.

<img loading="lazy" src={require('../assets/images/kane-ai/features/edit-advanced-settings/advanced-settings-version-history.png').default} alt="Advanced Settings Version History" className="doc_img"/>

## Limitations
***

Keep these limitations in mind:

- **Advanced Settings only:** From the Test Summary page you can edit only Advanced Settings (network configuration, timezone, Chrome options, custom headers, and mobile session settings). To change test steps, OS, browser, or device configuration, open the playground.
- **New version on every apply:** Applying updated settings always creates a new version with regenerated code. You cannot update settings in place.
- **Pre-rollout versions:** Comparing a version created after this feature rolled out with one created before it shows no Advanced Settings changes, because the older version never tracked them. Opening a pre-rollout version shows only the latest settings, because the original settings were not recorded.

## Next Steps
***

Continue with these guides:

- [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/)
- [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/)
- [KaneAI Geolocation Tunnel Proxy](/support/docs/kane-ai-geolocation-tunnel-proxy/)
