---
id: custom-header
title: How to Bypass Firewalls using CustomHeaders Capability
hide_title: true
sidebar_label: CustomHeaders
description: Learn how to use TestMu AI CustomHeaders capability to add custom headers to your tests and bypass firewalls restrictions.
keywords:
- custom headers testmu ai
- bypass firewalls restrictions
- custom headers bypass firewalls
url: https://www.testmuai.com/support/docs/custom-headers/
site_name: TestMu AI
slug: custom-headers/
canonical: https://www.testmuai.com/support/docs/custom-headers/
---

# Overcoming Firewalls: A Deep Dive into <BrandName />'s customHeaders and customUrlFilters Capabilities
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Every modern software company knows the importance of robust testing. As the development environment becomes increasingly complex, the tools we use for testing have to evolve to keep up. But sometimes, obstacles arise that make testing more difficult�one such obstacle being corporate firewalls. Designed to keep networks secure, these firewalls can occasionally interfere with your testing process.

However, the software testing industry is nothing if not innovative. One solution that's gaining traction is the use of custom headers to bypass firewalls. Specifically, we'll explore how <BrandName />'s customHeaders and customUrlFilters capabilities give developers precise control over network requests and firewall bypassing during testing.

In this documentation, we will look at LambdaTest CustomHeaders, a capability that allows you to add custom headers to your tests and bypass firewall restrictions while performing automated browser testing.

## About CustomHeaders
---

Custom headers provide you the ability to keep crucial information about the request or response, such as the method, URL, and body content. You can modify the parameters of the HTTP requests delivered by your tests by manipulating with these headers, thereby around firewall restrictions.

## How to use CustomHeaders Capability on <BrandName />?
---

To add custom headers using <BrandName />'s CustomHeader capability, you need to use <BrandName />'s Desired Capabilities class. 

1. Create an instance of the Desired Capabilities class.

2. Use the customHeaders capability to add your custom headers.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("customHeaders", new HashMap<String, String>() {{
    put("headerName", "headerValue");
}});
```

In the above code snippet, you need to replace "headerName" and "headerValue" with the actual name and value of the header. You can add multiple headers based on your requirements.

## CustomHeaders: Use Cases and Examples
---

Custom headers serves different purposes for web development and network communications. Here are some of its key use cases:


1. **User Identification and Session Management**: Used to send tokens, session IDs to authenticate and identify users. This helps in managing user sessions, implement stateless authentication mechanisms, track user behavior.

**Example**: The Custom header `X-Session-ID`is used to track user sessions.

```java
X-Session-ID: 1234567890 
```

2. **Content Negotiation**: Determines how the client and server decide on the data format to exchange. For instance, the "Accept" header can specify the format (like JSON or XML) that the client prefers for the response data.

**Example**: `Accept` header specifies the client-preferred format of the response data.

```java
Accept: application/json 
```

3. **Rate Limiting**: Custom headers are often used by APIs to provide information about rate limits. They might send headers indicating how many requests a client can make in a given time period, how many requests they have left, or when they can make new requests.

**Example**

```java
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
```

4. **Debugging and Performance Tracking**: Some services include custom headers in their responses to provide additional information that can help in debugging or performance tracking. This can include server version numbers, execution times, or other internal details.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

5. **CORS (Cross-Origin Resource Sharing)**: The CORS standard uses custom headers to allow browsers and servers to interact securely with resources from different origins. This includes headers like "Access-Control-Allow-Origin" and "Access-Control-Allow-Methods".

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

6. **Custom Application Logic**: Custom headers can also be used to implement specific application-level logic. For instance, a custom header could be used to determine the language of the response, to enable or disable features, or to specify version numbers for API versioning.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

7. **Bypassing Firewalls or Proxies**: In some cases, custom headers can be used to bypass certain network restrictions, such as firewalls or proxy servers. This should, however, be done responsibly and in accordance with security policies.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

8. **Server Health and Status Information**: Some applications use custom headers to provide health and status information about the server or application. This can be used for monitoring and maintaining the health of the system.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

9. **SEO Optimization**: Custom headers like canonical and pagination headers can be used to guide search engines and optimize SEO.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

10. **A/B Testing**: Custom headers can be used to control or track A/B testing, where different versions of a service are tested against each other to determine which performs better.

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

## <BrandName />: Testing Redefined

<BrandName /> is a cloud-based cross-browser testing platform that allows you to perform both automated and live interactive testing on your web applications. The platform supports over 2,000 browser and operating system environments, making it a go-to tool for developers seeking comprehensive coverage.

## CustomHeader Capability: Your Key to Bypass Firewalls

Among <BrandName />'s many features, the customHeaders capability stands out for teams dealing with firewall constraints. This capability allows you to inject custom headers into your HTTP requests, which can be used to bypass firewalls or simulate specific client behavior.

Custom headers are an integral part of HTTP requests and responses. They can carry essential information such as authentication tokens, user agents, API versioning, and more. By modifying these headers in your tests, you can adjust the network behavior of the browser and ensure compatibility with restricted environments.

## Targeted Control with customUrlFilters

To provide even more precise control, <BrandName /> introduces the customUrlFilters capability. When used in conjunction with customHeaders, it allows you to specify exactly which URLs should receive the custom headers. This ensures that headers are not indiscriminately applied to every request�only those matching your defined filters will carry the custom headers.

### Key Behavior:

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

### Behavior of this Example:

The headers `WebView: Enable` and `X-Custom-Token: secure-token-123` will only be applied to:

- `https://www.xhaus.com/headers`
- Any subpaths of domains like `https://api.example.com/`, etc.

A request to `https://lambdatest.github.io/sample-todo-app/` will not contain any of the custom headers since it is not listed in customUrlFilters.

## A Responsible Approach to Bypassing Firewalls

While the ability to add and control custom headers is powerful, it's crucial to use it responsibly. Always follow your organization's security and compliance policies. These capabilities are designed to facilitate secure, realistic testing�not to bypass security controls inappropriately.

## Use Cases

?? **User Identification and Session Management**

Send tokens or session IDs with headers like:

```java
X-Session-ID: 1234567890
```

?? **Content Negotiation**

Specify expected response formats:

```java
Accept: application/json
```

?? **Rate Limiting**

Get limits and usage from APIs:

```java
X-RateLimit-Remaining: 10
```

?? **Debugging and Performance Tracking**

Include trace info or timing metrics:

```java
X-Execution-Time: 150ms
```

?? **CORS (Cross-Origin Resource Sharing)**

Enable cross-origin requests:

```java
Access-Control-Allow-Origin: *
```

?? **Custom Application Logic**

Pass app-level config:

```java
X-App-Version: v2.3.1
```

?? **Bypassing Firewalls/Proxies**

Mask the request with common headers:

```java
User-Agent: Mozilla/5.0 (Windows NT 10.0...)
```

?? **Server Health**

Return backend state:

```java
X-Server-Status: All systems operational
```

?? **SEO Optimization**

Guide search engines:

```java
Link: <https://example.com/page>; rel="canonical"
```

?? **A/B Testing**

Track experimental groups:

```java
X-Experiment-ID: variant_b
```

## Conclusion

<BrandName />�s customHeaders and customUrlFilters capabilities empower you to simulate complex request scenarios, bypass firewalls responsibly, and selectively apply network rules�providing a flexible, developer-centric approach to browser testing.

By turning obstacles like firewalls into controllable conditions, <BrandName /> not only simplifies testing but enhances the realism and effectiveness of your QA process.

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
