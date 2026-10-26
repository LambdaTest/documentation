---
id: debugging-logs
title: Debugging Logs on TestMu AI
hide_title: true
sidebar_label: Debugging Logs
description: Learn how to enable and access debugging logs such as device logs, network logs, Appium logs and video recordings for your app automation tests on the TestMu AI platform.
keywords:   
 - appium
 - appium languages
 - appium framework 
 - configuration
 - supported platforms
 - automation testing framework
 - test automation frameworks
 - app testing
 - test debugging
url: https://www.testmuai.com/support/docs/debugging-logs/
site_name: TestMu AI
slug: debugging-logs/
canonical: https://www.testmuai.com/support/docs/debugging-logs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Debugging Logs",
          "item": `${BRAND_URL}/support/docs/debugging-logs/`
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
      "@id": "https://www.testmuai.com/support/docs/debugging-logs/"
    },
    "headline": "Debugging Logs on TestMu AI",
    "description": "Learn how to enable and access debugging logs such as device logs, network logs, Appium logs and video recordings for your app automation tests on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/debugging-logs/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [ 
      "debugging logs",
      "device logs",
      "network logs",
      "appium logs",
      "app automation"
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
        "name": "Here's an example of how to enable debugging logs in your Appium test script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Java code example for enabling debugging logs in Appium tests on TestMu AI\n\nDesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"devicelog\", true);\ncapabilities.setCapability(\"network\", true);\ncapabilities.setCapability(\"visual\", true);\ncapabilities.setCapability(\"video\", true);\ncapabilities.setCapability(\"platformName\", \"android\");\n// Add other capabilities as needed                      |"
      }
    ],
    "dateModified": "2026-10-21T18:30:00+05:30"
  }) }}
/>

# Debugging Logs
<RealDeviceTag value="Real Device" />

When an app automation test fails, logs show you what happened in the Appium session during the failure. <BrandName /> captures these logs during your Appium test and makes them available on the **App Automation** dashboard, alongside the test video.

This document explains the following log types and how to enable them:

- [Device logs](#device-logs)
- [Appium logs](#appium-logs)
- [Network logs](#network-logs)
- [Crash logs](#crash-logs)

## Enable debugging logs

You enable most logs by adding capabilities to the `lt:options` object in your test script. The following table lists each log type, the capability it requires and its default state.

| Log type | Capability | Default |
|---|---|---|
| Device logs | `devicelog: true` | Disabled |
| Appium logs | Not required | Enabled |
| Network logs | `network: true` | Disabled |
| Crash logs | Not required | Captured automatically when the app crashes |

The following example enables device logs and network logs using W3C capabilities:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("w3c", true);
ltOptions.put("platformName", "android");
ltOptions.put("deviceName", "Galaxy S26");
ltOptions.put("platformVersion", "16");
ltOptions.put("isRealMobile", true);
ltOptions.put("devicelog", true);   // Enable device logs
ltOptions.put("network", true);     // Enable network logs
capabilities.setCapability("lt:options", ltOptions);
// Add other capabilities as needed
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to generate the complete set of capabilities for your device, OS version and programming language.
:::

## View logs on the dashboard

1. Log in to the <BrandName /> **App Automation** dashboard.
2. Open the build and select the test session you want to debug.
3. In the **Logs** section, select the tab for the log type you need: **Device**, **Appium**, **Network** or **Crash**.
4. To download a log for offline analysis, click the download icon on that tab.

<img loading="lazy" src={require('../assets/images/app-automation/appiumlogs.png').default} alt="Logs section of a test session on the App Automation dashboard" className="doc_img doc_img_dimension" width="1424" height="724"/>

## Device logs

Device logs are the system logs that the device generates while your test runs. On Android, these come from Logcat; on iOS, they come from the device system log. They contain messages from your app and from the operating system, which helps you understand the state of the device when a test step failed.

To enable device logs, add the following capability to `lt:options`:

```java
ltOptions.put("devicelog", true);
```

## Appium logs

Appium logs are generated by the Appium server during your test. They record every command your script sends, the capabilities used to start the session and the response returned by the driver. Use Appium logs to identify the command that failed and the reason, such as an element that could not be located.

Appium logs are **enabled by default** on <BrandName />, so no capability is required.

## Network logs

Network logs record the HTTP and HTTPS requests your app makes during the test, along with the responses from the server. Each entry includes the URL, method, status code, headers, payload and timing. Use network logs to identify failed API calls, slow responses and unexpected data.

To enable network logs, add the following capability to `lt:options`:

```java
ltOptions.put("network", true);
```

The captured requests and responses appear in the **Network** tab of your test session. The following diagram shows how network traffic flows through the proxy.

<img loading="lazy" src={require('../assets/images/app-automation/networklogs.png').default} alt="Network tab showing captured requests and responses for a test session" className="doc_img doc_img_dimension" width="1280" height="1401"/>


### Role of the proxy certificate

Because HTTPS traffic is encrypted, the proxy can read it only if your app accepts a secure connection from the proxy instead of directly from your server. For each server your app contacts, the proxy presents a certificate signed by the <BrandName /> root certificate authority (CA). The test device trusts this root CA, so your app accepts the proxy's certificate and the connection succeeds.

### When network traffic cannot be captured

Some apps accept secure connections only from their own servers. In these cases, the proxy cannot capture the traffic. The most common causes are:

- **SSL or certificate pinning:** The app trusts only a specific server certificate or public key. When it receives the proxy's certificate, the app detects a mismatch and closes the connection.
- **No trust for user-installed certificates:** Some apps do not trust user-installed CAs unless the app's network security configuration allows it.
- **Mutual TLS (mTLS) or network restrictions:** The server requires a client certificate or accepts connections only from known network paths, which the proxy cannot provide.

When this happens, the TLS handshake fails before the request reaches your server. You might notice:

- SSL or TLS handshake errors in the device logs, such as `SSLHandshakeException` on Android
- `NSURLErrorCancelled (-999)` or `boringssl` errors on iOS
- Blank screens, missing data or "no connection" messages in the app

The same build typically works when `network` is set to `false`, because the app then connects directly to the server and the standard handshake succeeds.

### Resolve network capture issues

| Option | What to do | Consideration |
|---|---|---|
| Use a test build without pinning | Disable SSL pinning in the debug or staging build that you upload for testing. | Requires a separate build for testing. |
| Trust the user-level certificate | On Android, allow user-installed CAs in the app's network security configuration. For pinned apps, add the proxy's key to the pin set in test builds only. |
| Disable network capture | Set `network` to `false` to test the pinned build without changes. | Network logs are not captured for the session. |

To allow user-installed CAs on Android, add a `<certificates src="user" />` entry to the trust anchors in your app's `res/xml/network_security_config.xml` file:

```xml
<network-security-config>
  <base-config>
    <trust-anchors>
      <certificates src="system" />
      <certificates src="user" />
    </trust-anchors>
  </base-config>
</network-security-config>
```

Make sure the file is referenced in your `AndroidManifest.xml` through the `android:networkSecurityConfig="@xml/network_security_config"` attribute on the `<application>` element.


## Crash logs

If your app crashes during a test, <BrandName /> captures the crash report from the device and displays it in the **Crash** tab of your test session. The crash log includes the exception type and the stack trace, which help you locate the code that caused the crash.

- **Android:** Displays the fatal exception and its stack trace, the same information that appears under `FATAL EXCEPTION` in Logcat.
- **iOS:** Displays the crash report generated by the system, including the exception type and the stack trace of the crashed thread.
