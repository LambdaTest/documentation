---
id: custom-header
title: How to Set Custom HTTP Headers in Selenium on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Custom HTTP Headers"
description: Add custom HTTP headers to Selenium tests on TestMu AI using the customHeaders capability to bypass firewalls and control requests.
keywords:
  - custom headers bypass firewall selenium
  - customUrlFilters selective header injection
  - add custom HTTP headers selenium tests
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/custom-headers/
site_name: TestMu AI
slug: custom-headers/
canonical: https://www.testmuai.com/support/docs/custom-headers/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# How to Set Custom HTTP Headers in Selenium on TestMu AI
---

Corporate firewalls keep networks secure but can occasionally interfere with your testing process. The customHeaders and customUrlFilters capabilities give developers precise control over network requests and firewall bypassing during testing.

This document covers the customHeaders capability, which lets you add custom headers to your tests and bypass firewall restrictions while performing automated browser testing.

## About CustomHeaders
---

Custom headers carry information about the request or response, such as the method, URL, and body content. You can modify the parameters of HTTP requests sent by your tests by manipulating these headers, thereby working around firewall restrictions. `customHeaders` is one of many network controls available on the platform; see the full list of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) for related options.

## How to Use CustomHeaders Capability on TestMu AI
---

Add custom headers using the Capabilities class.

1. Create an instance of the Capabilities class.

2. Use the customHeaders capability to add your custom headers.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("customHeaders", new HashMap<String, String>() {{
    put("headerName", "headerValue");
}});
```

In the above code snippet, replace "headerName" and "headerValue" with the actual name and value of the header. You can add multiple headers based on your requirements.

## CustomHeader Capability: Your Key to Bypass Firewalls
---

The customHeaders capability lets you inject custom headers into your HTTP requests to bypass firewalls or simulate specific client behavior.

Custom headers are an integral part of HTTP requests and responses. They can carry authentication tokens, user agents, API versioning, and more. By modifying these headers in your tests, you can adjust the network behavior of the browser and ensure compatibility with restricted environments.

## Targeted Control with customUrlFilters
---

The customUrlFilters capability, used together with customHeaders, lets you specify exactly which URLs should receive the custom headers. This ensures that headers are only applied to requests matching your defined filters.

### Key Behavior
---

- If customHeaders are defined without customUrlFilters, the headers apply globally to all outgoing network requests.
- If customUrlFilters are provided, the customHeaders only apply to requests matching the filter criteria.
- Filters can be exact URLs or regular expressions, providing flexible targeting.

### Implementation Example
---

```java
DesiredCapabilities capabilities = new DesiredCapabilities();

Map<String, String> headers = new HashMap<>();
headers.put("WebView", "Enable");
headers.put("X-Custom-Token", "secure-token-123");

List<String> urlFilters = Arrays.asList(
    "https://www.xhaus.com/headers",
    "https://.*\\.example\\.com/.*"
);

capabilities.setCapability("customHeaders", headers);
capabilities.setCapability("customUrlFilters", urlFilters);
```

### Behavior of This Example
---

The headers `WebView: Enable` and `X-Custom-Token: secure-token-123` are only applied to:

- `https://www.xhaus.com/headers`
- Any subpaths of domains like `https://api.example.com/`, etc.

A request to `https://lambdatest.github.io/sample-todo-app/` will not contain any of the custom headers since it is not listed in customUrlFilters.

## A Responsible Approach to Bypassing Firewalls
---

While the ability to add and control custom headers is useful, always follow your organization's security and compliance policies. These capabilities are designed to facilitate secure, realistic testing - not to bypass security controls inappropriately. For related network configuration, you can also apply custom DNS mapping to redirect domains or run tests behind a proxy for restricted environments.

## Use Cases
---

The following examples show common use cases for custom headers.

**User Identification and Session Management**

Send tokens or session IDs with headers like:

```http
X-Session-ID: 1234567890
```

**Content Negotiation**

Specify expected response formats:

```http
Accept: application/json
```

**Rate Limiting**

Get limits and usage from APIs:

```http
X-RateLimit-Remaining: 10
```

**Debugging and Performance Tracking**

Include trace info or timing metrics:

```http
X-Execution-Time: 150ms
```

**CORS (Cross-Origin Resource Sharing)**

Enable cross-origin requests:

```http
Access-Control-Allow-Origin: *
```

**Custom Application Logic**

Pass app-level config:

```http
X-App-Version: v2.3.1
```

**Bypassing Firewalls/Proxies**

Mask the request with common headers:

```http
User-Agent: Mozilla/5.0 (Windows NT 10.0...)
```

**Server Health**

Return backend state:

```http
X-Server-Status: All systems operational
```

**SEO Optimization**

Guide search engines:

```http
Link: <https://example.com/page>; rel="canonical"
```

**A/B Testing**

Track experimental groups:

```http
X-Experiment-ID: variant_b
```

## Conclusion
---

The customHeaders and customUrlFilters capabilities let you simulate request scenarios, bypass firewalls responsibly, and selectively apply network rules - providing a flexible, developer-centric approach to browser testing.

By turning obstacles like firewalls into controllable conditions, TestMu AI simplifies testing and enhances the realism and effectiveness of your QA process.

Happy testing!

## Next Steps
---

Continue with these related guides:

- [Custom DNS Map](/support/docs/custom-dns-map/)
- [Run Selenium Tests Behind the Proxy](/support/docs/selenium-tests-behind-proxy/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)

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
      CustomHeaders  
      </span>
    </li>
  </ul>
</nav>
