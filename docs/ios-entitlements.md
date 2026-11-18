---
id: entitlements
title: iOS Entitlements
hide_title: true
sidebar_label: iOS Entitlements
description: Quick guide on entitlements for iOS applications.
keywords:
- iOS entitlements
- entitlements for ios apps
- mobile app testing
- ios app testing
url: https://www.testmuai.com/support/docs/ios-entitlements/
site_name: TestMu AI
slug: ios-entitlements/
canonical: https://www.testmuai.com/support/docs/ios-entitlements/
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
      "@id": "https://www.testmuai.com/support/docs/ios-entitlements/"
    },
    "headline": "iOS Entitlements",
    "description": "Quick guide on entitlements for iOS applications.",
    "url": "https://www.testmuai.com/support/docs/ios-entitlements/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Time",
    "keywords": [
      "iOS entitlements",
      "entitlements for ios apps",
      "mobile app testing"
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
    "dateModified": "2026-04-07T12:50:21+05:30"
  }) }}
/>

# iOS Entitlements
***
Entitlements are permissions included in an iOS app's signature that give the app access to specific Apple services and system features, such as Push Notifications, App Groups, Keychain Sharing and Associated Domains (universal links). Each entitlement must be authorized by the provisioning profile the app is signed with. For the full list, see [Apple's entitlements documentation](https://developer.apple.com/documentation/bundleresources/entitlements).

We support all `.ipa` files, irrespective of the certificate and provisioning profile used to build them. To install these apps on our devices, we re-sign them with our wildcard provisioning profile. Apps built with an Enterprise account can be installed without re-signing.


## Re-signing iOS Apps

Apple allows an app to be installed on a physical iPhone or iPad only if the app's provisioning profile includes that device's UDID. The UDIDs of LambdaTest cloud devices aren't part of your provisioning profile, so the app can't be installed unless we re-sign it with our wildcard provisioning profile.

Re-signing is enabled by default. Apps signed with an Enterprise certificate can be installed without re-signing.


## Entitlements after re-signing

A re-signed app can use only the entitlements that the signing provisioning profile supports. The entitlements listed under [Supported entitlements](#supported-entitlements) are retained. Others, such as Push Notifications or Associated Domains, may not be available during your test.

This matters if your test covers features that depend on these entitlements, such as receiving push notifications or opening universal links. To test them, run your app with its original signature, as described in [Testing with your original signature](#testing-with-your-original-signature).


## Build types and re-signing

How your app was signed decides whether it needs to be re-signed to install on a LambdaTest device:

| Build type | How Apple limits installation | Can it run without re-signing? |
|--|--|--|
| **Development** | Only on devices whose UDIDs are added to the provisioning profile | Yes, on private devices whose UDIDs are added to the provisioning profile |
| **Ad Hoc** | Only on devices whose UDIDs are added to the provisioning profile (up to 100 per device type per year) | Yes, on private devices whose UDIDs are added to the provisioning profile |
| **App Store** | Delivered only through the App Store or TestFlight | No, it must be re-signed |
| **Enterprise** (In-House) | Any device, with no device list | Yes, on any public or private device |


## Supported entitlements

Apple retains a defined set of entitlements when your app is re-signed. Some entitlements can be enabled by turning on the matching option when you upload your app.

| Entitlement | Purpose | How to enable |
|--|--|--|
| `application-identifier` | Identifies your app on the device | Included automatically |
| `com.apple.developer.team-identifier` | Identifies the signing team | Included automatically |
| `keychain-access-groups` | Lets your app and its extensions share keychain items | Enable **Keychain Access Groups support** at upload |

For setup steps and requirements, refer to [Keychain Access Groups support](/support/docs/ios-keychain-cleanup/).

### Features that may be affected

| Feature | What you may notice |
|---|---|
| Push notifications | Notifications aren't delivered, or the app can't register for them |
| Universal links (`https://` deep links) | The link opens in Safari rather than in your app |
| Sign in with Apple, iCloud, Apple Pay | The feature fails or isn't offered |

Deep links that use a custom URL scheme (for example `myapp://`) don't depend on entitlements and keep working after re-signing.


## Testing with your original signature

You can skip re-signing when iOS is already able to trust your app on the device. There are two ways to set this up.

### Private devices: add their UDIDs to your provisioning profile

If you use private devices (available under a separate paid plan), their UDIDs belong to your organization and don't change. Add them to your app's provisioning profile, and your build can install with your own signature:

1. Get the UDIDs of your private devices from LambdaTest.
2. Add these UDIDs to your Development or Ad Hoc provisioning profile in your Apple Developer account. See Apple's guide to [registering devices](https://developer.apple.com/help/account/devices/devices-overview/).
3. Export a new `.ipa` with the updated provisioning profile and upload it.
4. Turn off re-signing for your test.

This works well when login, deep links or push notifications must behave exactly as they do in production.

### Any device: use an Enterprise-signed build

Apps signed through the [Apple Developer Enterprise Program](https://developer.apple.com/programs/enterprise/) (In-House distribution) aren't limited to a device list. iOS accepts them on any device, public or private, so no re-signing is required and every entitlement stays intact. Upload your Enterprise build and turn off re-signing for your test.

:::Tip Choosing the right setup
- **For general functional and UI testing:** Keep re-signing on and upload any build.
- **For push notifications, universal links or in-app purchases:** Use your original signature, either with UDIDs on private devices or with an Enterprise build on any device.
:::


## Disabling Re-Signing In Manual App Testing
***

:::info

- Your application must be an Enterprise Application.

:::

When you upload an application that is generated through an Enterprise Account, you have the option at the beginning of your test to disable re-signing by toggling **Disable App Resigning**.

Once you toggle the `Disable App Resigning` option, your application's certificates will be preserved.

<img loading="lazy" src={require('../assets/images/entitlements/disableappresign.png').default} alt="monday integration" width="626" height="439" className="doc_img"/>

Re-signed builds can lose universal link handoff; see [how to test universal links on real iPhones](https://www.testmuai.com/blog/test-universal-links-ios/).


## Disabling Re-Signing In App Automation
***

:::info

- Your application must be an Enterprise Application.

:::

You can prevent re-signing your application with the "resignApp" capability. Upload your enterprise application & specify the capability as "false" to prevent it from being re-signed.

KEY|VALUE|DESCRIPTION
--|--|--
| resignApp            | TYPE: BOOLEAN <br/> DEFAULT: True <br/> `resignApp = true` | 1. By default, if this capability is not passed, your app will be re-signed.<br/> 2. You can pass "false" as a capability to prevent your apps from being re-signed.<br/> 3. This is only for iOS-specific applications and devices |
>
If you still have any questions for us, please feel free to let us know via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Portal**</span> or mail us to support@testmuai.com





