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
url: https://www.testmu.ai/support/docs/app-automation-dashboard
site_name: LambdaTest
slug: app-automation-dashboard
canonical: https://www.testmu.ai/support/docs/app-automation-dashboard/
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

***

>In case you have any questions or need any additional information, drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmu.ai.

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

