---
id: ios-keychain-cleanup
title: Support for iOS keychain cleanup and access groups
sidebar_label: iOS Keychain Cleanup
description: Secure and clean iOS testing with LambdaTest's iOS Keychain cleanup and seamless access group handling support.
keywords:
  - appium
  - manual testing
  - keychain 
  - access group
  - cleanup
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/ios-keychain-cleanup/
site_name: LambdaTest
slug: ios-keychain-cleanup/
---

import CodeBlock from '@theme/CodeBlock';
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
          "name": "iOS Keychain Cleanup",
          "item": "https://www.lambdatest.com/support/docs/ios-keychain-cleanup/"
        }]
      })
    }}
></script>

<RealDeviceTag value="Real Device" /> 
Apple’s [Keychain](https://developer.apple.com/documentation/security/keychain_services) offers a secure system for apps to store sensitive information like passwords, certificates, authentication tokens, and other small data pieces.  
LambdaTest now offers enhanced Keychain management on real iOS devices, enabling you to test app flows that rely on secure storage and Keychain-specific use cases more effectively.

## Keychain Cleanup After Sessions

Certain iOS apps may retain user data such as login details across different test sessions.  
This happens because when an app is uninstalled, any Keychain data associated with it **remains on the device**, as iOS does not automatically clear it.  
While this data is isolated from other apps, it can persist unless specifically removed.

To prevent data from carrying over across sessions, LambdaTest offers an option to automatically clear all Keychain entries after your test ends — ensuring a clean environment for every run.

## Keychain Access Groups During App Resigning

When LambdaTest resigns your iOS application using a wildcard provisioning profile (to enable installation on real devices), the app’s **keychain-access-groups** entitlement is preserved.  
However, the **Bundle Seed ID** (also known as Team ID) — a critical part of access groups — gets replaced during resigning.

As a result, app functionalities that depend on the original access group may break if not handled properly.  
By enabling Keychain support, LambdaTest takes care of these changes, allowing your app to continue using Keychain securely even after resigning.


>This feature is currently in **Beta**. We are actively refining it based on real-world usage and feedback.

## How to Enable iOS Keychain Support During App Upload

To activate Keychain cleanup and access group handling, simply pass the `ios_keychain_enabled` parameter during app upload.

Example using **cURL**:

```bash
curl -u "USERNAME:ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@/path/to/your-app.ipa" \
-F "name=YourAppName" \
-F "ios_keychain_enabled=true"
```
Enabling `ios_keychain_enabled=true` will
- Clear Keychain data after each test session.
- Preserve Keychain access across resigning.


:::note
- Supported on **iOS 13 and above** only. Apps targeting earlier iOS versions are not compatible.
- Requires app resigning (`resignApp=true`). Apps signed with **Enterprise certificates** are not supported. LT framework needs to be injected in this case.

:::

## Frequently Asked Questions (FAQs)

### 1. Can Keychain cleanup be managed without `ios_keychain_enabled`?

Yes. Developers have the following options:
- Proactively delete Keychain entries during user logout or similar app events.
- Reset all Keychain data during the app's first launch after installation.

You can refer to Apple's guide for best practices: [Manage Keychain Data](https://developer.apple.com/documentation/security/keychain_services).

Additionally, apps can provide an in-app setting to manually clear Keychain data if needed during testing.

---

### 2. Can Keychain access groups be handled without `ios_keychain_enabled`?

Yes.
Developers can dynamically retrieve the access group information (`kSecAttrAccessGroup`) from existing Keychain entries instead of hardcoding Bundle Seed IDs.

This approach ensures your app remains functional even if the Team ID changes after resigning.



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
      iOS Keychain Cleanup
      </span>
    </li>
  </ul>
</nav>
