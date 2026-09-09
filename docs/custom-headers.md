---
id: custom-header
title: How to Bypass Firewalls Using CustomHeaders Capability
sidebar_label: Inject Custom HTTP Headers
description: Add custom headers to Selenium tests and bypass firewall restrictions using the customHeaders capability.
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

# Bypass Firewalls with customHeaders and customUrlFilters
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Corporate firewalls keep networks secure but can occasionally interfere with your testing process. The customHeaders and customUrlFilters capabilities give developers precise control over network requests and firewall bypassing during testing.

This document covers the customHeaders capability, which lets you add custom headers to your tests and bypass firewall restrictions while performing automated browser testing.

## About CustomHeaders
---

Custom headers carry information about the request or response, such as the method, URL, and body content. You can modify the parameters of HTTP requests sent by your tests by manipulating these headers, thereby working around firewall restrictions.

## How to Use CustomHeaders Capability on TestMu AI
---

Add custom headers using the Desired Capabilities class.

1. Create an instance of the Desired Capabilities class.

2. Use the customHeaders capability to add your custom headers.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("customHeaders", new HashMap<String, String>() {{
    put("headerName", "headerValue");
}});
```

In the above code snippet, replace "headerName" and "headerValue" with the actual name and value of the header. You can add multiple headers based on your requirements.

## CustomHeaders: Use Cases and Examples
---

Custom headers serve different purposes for web development and network communications.


1. **User Identification and Session Management**: Send tokens and session IDs to authenticate and identify users. This helps manage user sessions and implement stateless authentication.

**Example**: The Custom header `X-Session-ID` tracks user sessions.

```java
X-Session-ID: 1234567890 
```

2. **Content Negotiation**: Determine how the client and server decide on the data format to exchange. The "Accept" header specifies the format (like JSON or XML) that the client prefers.

**Example**: `Accept` header specifies the client-preferred format of the response data.

```java
Accept: application/json 
```

3. **Rate Limiting**: APIs use custom headers to provide information about rate limits, including how many requests a client can make in a given time period and when they can make new requests.

**Example**

```java
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
```

4. **Debugging and Performance Tracking**: Some services include custom headers in their responses to provide additional information for debugging or performance tracking, such as server version numbers and execution times.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

5. **CORS (Cross-Origin Resource Sharing)**: The CORS standard uses custom headers to allow browsers and servers to interact securely with resources from different origins, including headers like "Access-Control-Allow-Origin" and "Access-Control-Allow-Methods".

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

6. **Custom Application Logic**: Use custom headers to implement specific application-level logic, such as determining the response language, enabling or disabling features, or specifying API version numbers.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

7. **Bypassing Firewalls or Proxies**: In some cases, use custom headers to bypass certain network restrictions, such as firewalls or proxy servers. Always do this responsibly and in accordance with security policies.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

8. **Server Health and Status Information**: Some applications use custom headers to provide health and status information about the server or application for monitoring purposes.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

9. **SEO Optimization**: Custom headers like canonical and pagination headers guide search engines and optimize SEO.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

10. **A/B Testing**: Use custom headers to control or track A/B testing, where different versions of a service are tested against each other.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

## CustomHeader Capability: Your Key to Bypass Firewalls
---

The customHeaders capability lets you inject custom headers into your HTTP requests to bypass firewalls or simulate specific client behavior.

Custom headers are an integral part of HTTP requests and responses. They can carry authentication tokens, user agents, API versioning, and more. By modifying these headers in your tests, you can adjust the network behavior of the browser and ensure compatibility with restricted environments.

## Targeted Control with customUrlFilters
---

The customUrlFilters capability, used together with customHeaders, lets you specify exactly which URLs should receive the custom headers. This ensures that headers are only applied to requests matching your defined filters.

### Key Behavior

- If customHeaders are defined without customUrlFilters, the headers apply globally to all outgoing network requests.
- If customUrlFilters are provided, the customHeaders only apply to requests matching the filter criteria.
- Filters can be exact URLs or regular expressions, providing flexible targeting.

### Implementation Example

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

The headers `WebView: Enable` and `X-Custom-Token: secure-token-123` are only applied to:

- `https://www.xhaus.com/headers`
- Any subpaths of domains like `https://api.example.com/`, etc.

A request to `https://lambdatest.github.io/sample-todo-app/` will not contain any of the custom headers since it is not listed in customUrlFilters.

## A Responsible Approach to Bypassing Firewalls
---

While the ability to add and control custom headers is useful, always follow your organization's security and compliance policies. These capabilities are designed to facilitate secure, realistic testing - not to bypass security controls inappropriately.

## Use Cases
---

The following examples show common use cases for custom headers.

**User Identification and Session Management**

Send tokens or session IDs with headers like:

```java
X-Session-ID: 1234567890
```

**Content Negotiation**

Specify expected response formats:

```java
Accept: application/json
```

**Rate Limiting**

Get limits and usage from APIs:

```java
X-RateLimit-Remaining: 10
```

**Debugging and Performance Tracking**

Include trace info or timing metrics:

```java
X-Execution-Time: 150ms
```

**CORS (Cross-Origin Resource Sharing)**

Enable cross-origin requests:

```java
Access-Control-Allow-Origin: *
```

**Custom Application Logic**

Pass app-level config:

```java
X-App-Version: v2.3.1
```

**Bypassing Firewalls/Proxies**

Mask the request with common headers:

```java
User-Agent: Mozilla/5.0 (Windows NT 10.0...)
```

**Server Health**

Return backend state:

```java
X-Server-Status: All systems operational
```

**SEO Optimization**

Guide search engines:

```java
Link: <https://example.com/page>; rel="canonical"
```

**A/B Testing**

Track experimental groups:

```java
X-Experiment-ID: variant_b
```

## Conclusion
---

The customHeaders and customUrlFilters capabilities let you simulate request scenarios, bypass firewalls responsibly, and selectively apply network rules - providing a flexible, developer-centric approach to browser testing.

By turning obstacles like firewalls into controllable conditions, TestMu AI simplifies testing and enhances the realism and effectiveness of your QA process.

Happy testing!

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
