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

Every modern software company knows the importance of robust testing. As the development environment becomes increasingly complex, the tools we use for testing have to evolve to keep up. But sometimes, obstacles arise that make testing more difficult—one such obstacle being corporate firewalls. Designed to keep networks secure, these firewalls can occasionally interfere with your testing process.

However, the software testing industry is nothing if not innovative. One solution that's gaining traction is the use of custom headers to bypass firewalls. Specifically, we'll explore how <BrandName />'s customHeaders and customUrlFilters capabilities give developers precise control over network requests and firewall bypassing during testing.

In this docum?ntation, w? will look at LambdaT?st CustomH?ad?rs, a capability that allows you to add custom h?ad?rs to your t?sts and bypass fir?wall r?strictions whil? p?rforming automat?d browser t?sting. 

## About CustomHeaders
---

Custom h?ad?rs provid? you th? ability to k??p crucial information about th? r?qu?st or r?spons?, such as th? m?thod, URL, and body cont?nt. You can modify th? param?t?rs of th? HTTP r?qu?sts d?liv?r?d by your t?sts by manipulating with th?s? h?ad?rs, th?r?by around fir?wall r?strictions. 

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

2. **Content Negotiation**: D?t?rmin?s how th? cli?nt and s?rv?r d?cid? on th? data format to ?xchang?. For instanc?, th? "Acc?pt" h?ad?r can sp?cify th? format (lik? JSON or XML) that th? cli?nt pr?f?rs for th? r?spons? data. 

**Example**: `Accept` header specifies the client-preferred format of the response data.

```java
Accept: application/json 
```

3. **Rate Limiting**: Custom h?ad?rs ar? oft?n us?d by APIs to provid? information about rat? limits. Th?y might s?nd h?ad?rs indicating how many r?qu?sts a cli?nt can mak? in a giv?n tim? p?riod, how many r?qu?sts th?y hav? l?ft, or wh?n th?y can mak? n?w r?qu?sts. 

**Example**

```java
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
```

4. **Debugging and Performance Tracking**: Som? s?rvic?s includ? custom h?ad?rs in th?ir r?spons?s to provid? additional information that can help in d?bugging or p?rformanc? tracking. This can includ? s?rv?r v?rsion numb?rs, ?x?cution tim?s, or oth?r int?rnal d?tails. 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

5. **CORS (Cross-Origin Resource Sharing)**: Th? CORS standard us?s custom h?ad?rs to allow brows?rs and s?rv?rs to int?ract s?cur?ly with r?sourc?s from diff?r?nt origins. This includ?s h?ad?rs lik? "Acc?ss-Control-Allow-Origin" and "Acc?ss-Control-Allow-M?thods". 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

6. **Custom Application Logic**: Custom h?ad?rs can also b? us?d to impl?m?nt sp?cific application-l?v?l logic. For instanc?, a custom h?ad?r could b? us?d to d?t?rmin? th? languag? of th? r?spons?, to ?nabl? or disabl? f?atur?s, or to sp?cify v?rsion numb?rs for API v?rsioning. 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

7. **Bypassing Firewalls or Proxies**: In som? cas?s, custom h?ad?rs can b? us?d to bypass c?rtain n?twork r?strictions, such as fir?walls or proxy s?rv?rs. This should, how?v?r, b? don? r?sponsibly and in accordanc? with s?curity polici?s. 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

8. **Server Health and Status Information**: Som? applications us? custom h?ad?rs to provid? h?alth and status information about th? s?rv?r or application. This can b? us?d for monitoring and maintaining th? h?alth of th? syst?m. 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

9. **SEO Optimization**: Custom h?ad?rs lik? canonical and pagination h?ad?rs can b? us?d to guid? s?arch ?ngin?s and optimiz? SEO. 

**Example**

```java
X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions.
```

10. **A/B Testing**: Custom h?ad?rs can b? us?d to control or track A/B t?sting, wh?r? diff?r?nt v?rsions of a s?rvic? ar? t?st?d against ?ach oth?r to d?t?rmin? which p?rforms b?tt?r. 

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

To provide even more precise control, <BrandName /> introduces the customUrlFilters capability. When used in conjunction with customHeaders, it allows you to specify exactly which URLs should receive the custom headers. This ensures that headers are not indiscriminately applied to every request—only those matching your defined filters will carry the custom headers.

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

While the ability to add and control custom headers is powerful, it's crucial to use it responsibly. Always follow your organization's security and compliance policies. These capabilities are designed to facilitate secure, realistic testing—not to bypass security controls inappropriately.

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

<BrandName />’s customHeaders and customUrlFilters capabilities empower you to simulate complex request scenarios, bypass firewalls responsibly, and selectively apply network rules—providing a flexible, developer-centric approach to browser testing.

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
