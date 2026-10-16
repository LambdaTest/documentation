---
id: appium-safari-settings
title: Configure Safari Settings in App Automation
hide_title: true
sidebar_label: Safari Settings
description: Learn how to disable cross-site tracking and block Safari popups on real iOS devices using capabilities in your Appium automation tests on TestMu AI.
keywords:
  - safari settings appium
  - cross-site tracking automation
  - block safari popups
  - appium ios capabilities
  - crossSiteTracking capability
  - blockSafariPopups capability
  - ios safari automation
  - third party cookies testing
  - testmu ai app automation
url: https://www.testmuai.com/support/docs/appium-safari-settings/
site_name: TestMu AI
slug: appium-safari-settings/
canonical: https://www.testmuai.com/support/docs/appium-safari-settings/
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<RealDeviceTag value="Real Device" />

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
          "name": "Safari Settings in App Automation",
          "item": `${BRAND_URL}/support/docs/appium-safari-settings/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-safari-settings/"
    },
    "headline": "Configure Safari Settings in App Automation",
    "description": "Learn how to disable cross-site tracking and block Safari popups on real iOS devices using capabilities in your Appium automation tests on TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/appium-safari-settings/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "safari settings appium",
      "cross-site tracking automation",
      "block safari popups",
      "crossSiteTracking capability",
      "blockSafariPopups capability"
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
        "name": "Java example for Safari Settings capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"crossSiteTracking\", true);\ncapabilities.setCapability(\"blockSafariPopups\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python example for Safari Settings capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "desired_caps = {\n    'crossSiteTracking': True,\n    'blockSafariPopups': True\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "JavaScript example for Safari Settings capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n    crossSiteTracking: true,\n    blockSafariPopups: true\n};"
      }
    ],
    "dateModified": "2026-09-28T19:00:00+05:30"
  }) }}
/>

# Safari Settings for App Automation

<BrandName /> allows you to configure Safari browser settings on **real iOS devices** during your automated tests using Appium. By passing the `crossSiteTracking` and `blockSafariPopups` capabilities, you can control Safari's privacy and pop-up behavior to match your testing requirements.

## Overview

Safari on iOS enables **Prevent Cross-Site Tracking** by default, which restricts third-party cookies and website data from being shared across different websites. This can interfere with test scenarios that rely on cross-site authentication, third-party integrations, or cookie-based tracking.

Additionally, Safari's **Block All Popups** behavior can prevent pop-up windows from opening, which may block testing flows involving payment gateways, OAuth pop-ups, or multi-window interactions.

With <BrandName />'s Safari Settings capabilities, you can programmatically control these settings during your automation test sessions on real iOS devices.

## Capabilities

| Capability | Type | Default | Description |
|------------|------|---------|-------------|
| `crossSiteTracking` | Boolean | `false` | When set to `true`, disables Safari's "Prevent Cross-Site Tracking" setting, allowing third-party cookies and cross-site data sharing. |
| `blockSafariPopups` | Boolean | `false` | When set to `true`, enables Safari's "Block All Popups" setting, preventing websites from opening pop-up windows. |

## Supported Platforms

| Device Type | Supported OS Version | Supported Frameworks |
|-------------|----------------------|----------------------|
| iPhone      | iOS 16 and above     | Appium, XCUI, Flutter |
| iPad        | iPadOS 16 and above  | Appium, XCUI, Flutter |

:::note
These capabilities are supported only on **real iOS devices**. They are not available on simulators or virtual devices.
:::

## Usage Examples

Pass these capabilities alongside your other desired capabilities when initializing the Appium driver.

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "iOS");
capabilities.setCapability("deviceName", "iPhone 15");
capabilities.setCapability("platformVersion", "17");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app", "YOUR_APP_URL");

// Safari Settings
capabilities.setCapability("crossSiteTracking", true);   // Disable Prevent Cross-Site Tracking
capabilities.setCapability("blockSafariPopups", true);    // Enable Block All Popups
```

</TabItem>

<TabItem value="python" label="Python">

```python
desired_caps = {
    "platformName": "iOS",
    "deviceName": "iPhone 15",
    "platformVersion": "17",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",

    # Safari Settings
    "crossSiteTracking": True,       # Disable Prevent Cross-Site Tracking
    "blockSafariPopups": True,       # Enable Block All Popups
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
const capabilities = {
    platformName: "iOS",
    deviceName: "iPhone 15",
    platformVersion: "17",
    isRealMobile: true,
    app: "YOUR_APP_URL",

    // Safari Settings
    crossSiteTracking: true,         // Disable Prevent Cross-Site Tracking
    blockSafariPopups: true,         // Enable Block All Popups
};
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
AppiumOptions capabilities = new AppiumOptions();
capabilities.AddAdditionalCapability("platformName", "iOS");
capabilities.AddAdditionalCapability("deviceName", "iPhone 15");
capabilities.AddAdditionalCapability("platformVersion", "17");
capabilities.AddAdditionalCapability("isRealMobile", true);
capabilities.AddAdditionalCapability("app", "YOUR_APP_URL");

// Safari Settings
capabilities.AddAdditionalCapability("crossSiteTracking", true);   // Disable Prevent Cross-Site Tracking
capabilities.AddAdditionalCapability("blockSafariPopups", true);    // Enable Block All Popups
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
capabilities = {
    "platformName" => "iOS",
    "deviceName" => "iPhone 15",
    "platformVersion" => "17",
    "isRealMobile" => true,
    "app" => "YOUR_APP_URL",

    # Safari Settings
    "crossSiteTracking" => true,     # Disable Prevent Cross-Site Tracking
    "blockSafariPopups" => true,     # Enable Block All Popups
}
```

</TabItem>

</Tabs>

## Capability Details

### crossSiteTracking

When `crossSiteTracking` is set to `true`, it disables Safari's "Prevent Cross-Site Tracking" privacy setting on the device. This allows:
- Third-party cookies to be read and written across different domains.
- Cross-site tracking mechanisms (analytics, ad-tech, session sharing) to function as expected.
- OAuth and SSO flows that depend on cookies across multiple domains to work seamlessly.

When set to `false` (default), Safari's built-in cross-site tracking prevention remains active, and third-party cookies are restricted.

### blockSafariPopups

When `blockSafariPopups` is set to `true`, it enables Safari's "Block All Popups" setting on the device. This:
- Prevents websites from opening new browser windows or tabs via JavaScript (`window.open()`).
- Blocks pop-up windows triggered by user interactions on websites.

When set to `false` (default), pop-up windows are allowed to open normally.

## Use Cases

- **OAuth / SSO Testing**: Disable cross-site tracking to test login flows that rely on cookies shared across identity providers and your application.
- **Ad-Tech & Analytics Validation**: Verify that third-party tracking pixels and analytics scripts function correctly when cross-site restrictions are removed.
- **Payment Gateway Flows**: Test payment redirects that involve pop-up windows or cross-domain cookie sharing.
- **Pop-Up Blocking Verification**: Enable popup blocking to verify your application gracefully handles blocked pop-ups with fallback behavior.
- **Privacy Compliance Testing**: Test your application with cross-site tracking both enabled and disabled to ensure compliance with user privacy expectations.

:::tip
- These settings are applied during test setup and remain active for the entire session duration.
- Settings reset to their defaults when the session ends.
- The `crossSiteTracking` capability does **not** bypass CORS restrictions on 3rd-party iFrames. This is an Apple-level restriction that cannot be overridden.
- For **manual testing**, you can configure these same settings through the Safari Settings panel in the device toolbar during App Live or Browser Live sessions. See [Safari Settings on Real Devices](/support/docs/safari-settings-on-real-devices/) for more details.
:::


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
      Safari Settings in App Automation
      </span>
    </li>
  </ul>
</nav>
