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
          "name": "iOS Entitlements",
          "item": `${BRAND_URL}/support/docs/ios-entitlements`
        }]
      })
    }}
></script>

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
We support all ipa files generated from different Certificates & Profiles.

However, to install these apps on our devices, we resign your applications with our Resigning Certificate.

This is true for all Certificates & Profiles except the applications generated using an Enterprise Account.


## Re-signing iOS Apps

Apple requires every app installed on a physical iPhone or iPad to be signed with a valid certificate and a provisioning profile that includes the target device. To run your app on LambdaTest real devices, the app is automatically re-signed with our LambdaTest certificate and provisioning profile during installation.

Re-signing is enabled by default and works with Development, Ad Hoc, App Store and Enterprise builds, so you can upload your `.ipa` as it is.


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
2. Add these UDIDs to your Development or Ad Hoc provisioning profile in your Apple Developer account.
3. Export a new `.ipa` with the updated provisioning profile and upload it.
4. Turn off re-signing for your test.

This works well when login, deep links or push notifications must behave exactly as they do in production.

### Any device: use an Enterprise-signed build

Apps signed through the **Apple Developer Enterprise Program** (In-House distribution) aren't limited to a device list. iOS accepts them on any device, public or private, so no re-signing is required and every entitlement stays intact. Upload your Enterprise build and turn off re-signing for your test.

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

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        iOS Entitlements
      </span>
    </li>
  </ul>
</nav>




