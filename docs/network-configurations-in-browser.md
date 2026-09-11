---

id: network-configurations-in-browser
title: Network Configurations in Browser Live
sidebar_label: Network Configurations 
description: Learn how to configure and capture HTTP/S traffic on real devices during manual testing in Browser Live, with options for content capture and domain filtering.
keywords:
  - testmu ai manual testing
  - network logs
  - mitm proxy 
  - http traffic capture
  - domain filtering
  - network configurations
url: https://www.testmuai.com/support/docs/network-configurations-in-browser/
site_name: TestMu AI
slug: browser-network-configurations/
canonical: https://www.testmu.ai/support/docs/browser-network-configurations/

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
          "name": "Network Configurations in Browser Live",
          "item": `${BRAND_URL}/support/docs/browser-network-configurations/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-network-configurations/"
    },
    "headline": "Network Configurations in Browser Live",
    "description": "Learn how to configure and capture HTTP/S traffic on real devices during manual testing in Browser Live, with options for content capture and domain filtering.",
    "url": "https://www.testmuai.com/support/docs/browser-network-configurations/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Device",
    "keywords": [
      "testmu ai manual testing",
      "network logs",
      "mitm proxy"
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
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Enabling Network Configuration",
      "description": "Learn how to configure and capture HTTP/S traffic on real devices during manual testing in Browser Live, with options for content capture and domain filtering.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Access App Testing",
          "text": "Log into your TestMu AI dashboard and navigate to Real Devices > App Testing.",
          "url": "https://www.testmuai.com/support/docs/browser-network-configurations/#step-1-access-app-testing"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Select your device or browser",
          "text": "Choose a real Android or iOS device, upload your app (APK/IPA), or open a browser URL.",
          "url": "https://www.testmuai.com/support/docs/browser-network-configurations/#step-2-select-your-device-or-browser"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure network log options",
          "text": "Run your app. In the network logs for your device, open the Configuration Options slider and select the options you want to apply for your current session.",
          "url": "https://www.testmuai.com/support/docs/browser-network-configurations/#step-3-configure-network-log-options"
        }
      ]
    }
  ]) }}
/>

# Network Logs and Configurations in real devices

Network logs record every network interaction during your test session, from API calls and page requests to server responses and load times. These logs are stored in HAR format, giving you a complete snapshot of **network performance** for each run. By reviewing this data, you can identify slow endpoints, troubleshoot failed requests, and validate that your app communicates with the right services, all without leaving your testing workflow.

On <BrandName />, you can enable **network configurations** to capture and analyze this traffic in real time on real devices. With flexible options such as content capture and domain-based filtering, you can focus on the most relevant network interactions while reducing noise from unrelated requests. This helps ensure faster debugging, clearer insights, and more efficient test runs.


> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />

--- 

### Use cases

- **Debug API calls** by viewing HTTP/S request and response data directly from real device sessions.
- **Verify backend integration** by checking if calls are made to the correct endpoints.
- **Filter noise** by including/excluding specific hosts.
- **Reproduce production issues** that depend on specific network conditions or API behaviors.

---

## Enabling Network Configuration

### Step 1: Access App Testing

Log into your <BrandName /> dashboard and navigate to Real Devices > App Testing.

### Step 2: Select your device or browser

Choose a real Android or iOS device, upload your app (APK/IPA), or open a browser URL.


### Step 3: Configure network log options

Run your app. In the network logs for your device, open the **Configuration Options** slider and select the options you want to apply for your current session.   
![Enable network logs](../assets/images/real-device-app-testing/Network-RD/Network-window-o.png)

---

### Configuration Options

| Setting                     | Type                         | Default  | Description                                                                                                  |
|-----------------------------|------------------------------|----------|--------------------------------------------------------------------------------------------------------------|
| Capture Content              | Toggle                       | Enabled  | Captures the full response body of network requests in the DevTools Response tab. Disable if only headers or metadata are needed. |
| Include specific domains | Text input (comma-separated domains) | Empty    | Capture network requests only for the specified domains. |
| Exclude specific domains    | Text input (comma-separated domains) | Empty    | Exclude network requests to the specified domains. |

---

## Available configuration options


### **Include specific domains**:
 Use this to capture logs only for network requests to specified domains. Enable the toggle and add the domains separated by commas, as shown below.  
![Include hosts for network logs](../assets/images/real-device-app-testing/Network-RD/Network_Include_Ho.png)

### **Capture content**: 
Use this option to capture or exclude response content. This is off by default but can be enabled if needed, as shown below.  
![Disable content capture](../assets/images/real-device-app-testing/Network-RD/Network_disable_cont.png)

### **Exclude specific domains**: 
Use this to exclude certain domains from network logs. This works similarly to **Include specific domains**. If both options are enabled, **Exclude specific domains** takes precedence.  
![Exclude hosts from network logs](../assets/images/real-device-app-testing/Network-RD/Network_Log_excl.png)


---

## Best practices & tips

- Exclude noisy domains to reduce clutter in your logs.  
- Use the include list to focus on relevant domains.  
- Avoid broad patterns that may capture excessive traffic.  
- Save your settings for reuse in future sessions.

---

:::info 
- Available only on **Pro Plans** for manual testing.  
- Apps from the App Store or Play Store may not support network capture.  
- Certificate-pinned apps may fail unless pinned hosts are excluded.  
::
