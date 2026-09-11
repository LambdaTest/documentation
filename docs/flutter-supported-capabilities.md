---
id: flutter-supported-capabilities
title: Flutter Supported Capabilities
sidebar_label: Supported Capabilities
description: Now you can run your Flutter framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.
keywords:
  - flutter
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/flutter-supported-capabilities/
site_name: TestMu AI
slug: flutter-supported-capabilities/
canonical: https://www.testmuai.com/support/docs/flutter-supported-capabilities/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Espresso Supported Capabilities",
          "item": `${BRAND_URL}/support/docs/flutter-supported-capabilities/`
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
      "@id": "https://www.testmuai.com/support/docs/flutter-supported-capabilities/"
    },
    "headline": "Flutter Supported Capabilities",
    "description": "Now you can run your Flutter framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.",
    "url": "https://www.testmuai.com/support/docs/flutter-supported-capabilities/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "flutter",
      "java",
      "testmu ai java"
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

This document provide details about the features and capabilities supported for Espresso Framework on <BrandName />.

| Capability Name | Data Type | Description |
|------|-----------|-------------|
| app | String | Enter the app id generated while uploading the app to the platform. Example:`lt://APP123456789123456789` |
| testSuite | String | Enter the test suite id generated while uploading the test suite to the platform. Example: `lt://APP123456789123456789` |
| device | String | Enter the name and os version of the device in "DeviceName-OSVersion" format. Example: `Pixel 6-12` or `Galaxy S21 Ultra 5G-11`. You can also choose to use regular expression for device name such as `Pixel.*-12`. |
| video | Boolean | Generate video for all the tests that have run. Example: `true`. |
| queueTimeout | Integer | Total execution time of the build. Example: `queueTimeout: 300`. Maximum value is `10800`|
| testTimeout | Integer | Max wait time for test execution (default value - `900` secs) |
| deviceLog | Boolean | To generate the device logs. Example: `true`.  |
| build | String | Set the name of your Flutter test build. Example: `My Flutter Build`. |
| autoGrantPermissions: | Boolean | Boolean value to automatically grant the required permissions based on the [Android manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) in the app’s **.apk** Example: `true`. |
| build | String | To set the Espresso build name. Example: `build: My Espresso Build`. |
| geoLocation | String | Set the geolocation [country code](/support/docs/appium-ip-geolocation/#supported-ip-geolocations) if you want to enable the same in your test. Example - `geoLocation: FR`|
| gpsLocation | Decimal | The capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`|
| enableBluetooth | Boolean | Used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`|


:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::
