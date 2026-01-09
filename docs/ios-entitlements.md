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
url: https://www.testmu.ai/support/docs/ios-entitlements
site_name: LambdaTest
slug: ios-entitlements
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

# iOS Entitlements
***
We support all ipa files generated from different Certificates & Profiles.

However, to install these apps on our devices, we resign your applications with our Resigning Certificate.

This is true for all Certificates & Profiles except the applications generated using an Enterprise Account.

## Disabling Re-Signing In Manual App Testing
***

:::info Note

- Your application must be an Enterprise Application.

:::

When you upload an application that is generated through an Enterprise Account, you have the option at the beginning of your test to disable re-signing by toggling iOS Entitlements.

Once you toggle the iOS Entitlements option, your application's certificates will be preserved.

<img loading="lazy" src={require('../assets/images/entitlements/1.webp').default} alt="monday integration" width="626" height="439" className="doc_img"/>


## Disabling Re-Signing In App Automation
***

:::info Note

- Your application must be an Enterprise Application.

:::

You can prevent re-signing your application with the "resignApp" capability. Upload your enterprise application & specify the capability as "false" to prevent it from being re-signed.

KEY|VALUE|DESCRIPTION
--|--|--
| resignApp            | TYPE: BOOLEAN <br/> DEFAULT: True <br/> `resignApp = true` | 1. By default, if this capability is not passed, your app will be re-signed.<br/> 2. You can pass "false" as a capability to prevent your apps from being re-signed.<br/> 3. This is only for iOS-specific applications and devices |
>
If you still have any questions for us, please feel free to let us know via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Portal**</span> or mail us to support@lambdatest.com

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




