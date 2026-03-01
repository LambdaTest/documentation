---
id: appium-custom-header
title: How to Use CustomHeaders Capability
hide_title: true
sidebar_label: CustomHeaders
description: Learn how to use TestMu AI CustomHeaders capability to add custom headers to your tests and bypass firewalls restrictions in app automation tests.
keywords:
- custom headers testmu ai
- bypass firewalls restrictions
- custom headers bypass firewalls
url: https://www.testmuai.com/support/docs/appium-custom-headers/
site_name: TestMu AI
slug: appium-custom-headers/
canonical: https://www.testmuai.com/support/docs/appium-custom-headers/
---


#  CustomHeaders support for automation 

Custom headers provide you the ability to keep crucial information about the request or response, such as the method, URL, and body content. You can modify the parameters of the HTTP requests delivered by your tests by manipulating with these headers, thereby around firewall restrictions.

In this documentation, we will look at LambdaTest CustomHeaders, a `capability` that allows you to add custom headers to your tests and bypass firewall restrictions while performing automated browser testing.


## How to use CustomHeaders Capability on <BrandName />?

----

To add custom headers using <BrandName />'s CustomHeader capability, you need to use <BrandName />'s Desired Capabilities class. 

1. Create an instance of the Desired Capabilities class.

2. Use the customHeaders capability to add your custom headers.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("customHeaders", new HashMap<String, String>() {{
    put("headerName", "headerValue");
}});
```

In the above code snippet, you need to replace **headerName** and **headerValue** with the actual name and value of the header. You can add multiple headers based on your requirements.

## CustomHeaders: Use Cases and Examples
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Custom headers serves different purposes for development and network communications. Here are some of its key use cases:


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
