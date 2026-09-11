---
id: app-automation-dashboard
title: Accessing Test Results From App Automation Dashboard
hide_title: true
sidebar_label: App Automation Dashboard
description: TestMu AI App Automation dashboard allows you to access test results, debug and fix failed test cases. This documentation guides you how to configure the desired capability for debugging test cases.
keywords:
- desired capability for app automation
- app automation dashboard testmu ai
- mobile app automation testing using appium
url: https://www.testmuai.com/support/docs/app-automation-dashboard/
site_name: TestMu AI
slug: app-automation-dashboard/
canonical: https://www.testmuai.com/support/docs/app-automation-dashboard/
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
          "name": "App Automation Dashboard",
          "item": `${BRAND_URL}/support/docs/app-automation-dashboard/`
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
      "@id": "https://www.testmuai.com/support/docs/app-automation-dashboard/"
    },
    "headline": "Accessing Test Results From App Automation Dashboard",
    "description": "TestMu AI App Automation dashboard allows you to access test results, debug and fix failed test cases. This documentation guides you how to configure the desired capability for debugging test cases.",
    "url": "https://www.testmuai.com/support/docs/app-automation-dashboard/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "desired capability for app automation",
      "app automation dashboard testmu ai",
      "mobile app automation testing using appium"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Debugging Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"devicelog\", \"true\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Debugging Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"network\", \"true\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"visual\", \"true\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"video\", \"true\")"
      }
    ],
    "dateModified": "2026-08-25T02:41:52+05:30"
  }) }}
/>

# Inside <BrandName /> App Automation Dashboard
***

You can view your App automated test results on <BrandName /> App Automation Dashboard. <BrandName /> App Automation dashboard enables you to debug failed test sessions utilizing different test logs. The capabilities for a given test session may be specified in the test script and generated using the <BrandName /> Capability Generator.

## Debugging Tests
***
<BrandName /> allows you to debug and fix failed test cases using extensive test logs such as Appium logs, device logs, network logs, screenshots, and video logs.

1. **Device Logs**

Device logs allows you to capture system logs for Android and iOS apps. It allows the user to keep track of the application logs in case the application malfunctions.

Use the `devicelog` capability to enable the Device logs.

```java
capabilities.setCapability("devicelog", "true")
```

2. **Network Logs**

Network logs enables you to take screenshots of multiple network requests during testing and to monitor the performance of network requests and responses.

Use the `network` capability to enable the Network logs.

```java
capabilities.setCapability("network", "true")
```

3. **Appium Logs**

Appium logs allows you to capture the logs created by the Appium server during test execution, that include a comprehensive session log.

>**Note**: On <BrandName /> platform, Appium logs are enabled by default.

4. **Visual Logs**

With Visual logs, you can capture the screenshots of the entire test session.

Use the `visual` capability to enable the Visual logs.

```java
capabilities.setCapability("visual", "true")
```

5. **Video Logs**

Visual logs enables you to record the video of the complete test session.

Use the `video` capability to enable the Video logs.

```java
capabilities.setCapability("video", "true")
```

## Muting Known-Broken Tests
***

If an Appium test is known to be broken or flaky, you can **mute** it instead of letting it fail the whole build. A muted test still runs on the device and still records its real result, but it is left out of the build's pass/fail verdict and summary counts.

Open the test's options menu on the dashboard and select **Mute Test...**. You can mute that single run, or mute the **combination** (test name, OS, OS version, device, and real vs. virtual device) so the mute is reapplied automatically on every future build until you unmute it. Muting works for both app and web flows on real and virtual devices, and needs no capability in your test script.

For the full workflow, matching rules, and limitations, see [Mute Test Scenarios](/support/docs/mute-test-scenarios/).

***

>In case you have any questions or need any additional information, drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       <BrandName /> App Automation Dashboard
      </span>
    </li>
  </ul>
</nav>

