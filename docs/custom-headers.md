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
          "name": "How to Bypass Firewalls Using CustomHeaders Capability",
          "item": `${BRAND_URL}/support/docs/custom-headers/`
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
      "@id": "https://www.testmuai.com/support/docs/custom-headers/"
    },
    "headline": "How to Bypass Firewalls Using CustomHeaders Capability",
    "description": "Add custom headers to Selenium tests and bypass firewall restrictions using the customHeaders capability.",
    "url": "https://www.testmuai.com/support/docs/custom-headers/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "custom headers bypass firewall selenium",
      "customUrlFilters selective header injection",
      "add custom HTTP headers selenium tests"
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
        "name": "How to Use CustomHeaders Capability on TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"customHeaders\", new HashMap<String, String>() {{\n    put(\"headerName\", \"headerValue\");\n}});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "CustomHeaders: Use Cases and Examples",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "CustomHeaders: Use Cases and Examples",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "Accept: application/json "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "CustomHeaders: Use Cases and Examples",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-RateLimit-Limit: 60\nX-RateLimit-Remaining: 56\nX-RateLimit-Reset: 1372700873"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890 //custom header X-Session-ID to track user sessions."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Implementation Example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\n\nMap<String, String> headers = new HashMap<>();\nheaders.put(\"WebView\", \"Enable\");\nheaders.put(\"X-Custom-Token\", \"secure-token-123\");\n\nList<String> urlFilters = Arrays.asList(\n    \"https://www.xhaus.com/headers\",\n    \"https://.*\\\\.example\\\\.com/.*\"\n);\n\ncapabilities.setCapability(\"customHeaders\", headers);\ncapabilities.setCapability(\"customUrlFilters\", urlFilters);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Send tokens or session IDs with headers like",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Session-ID: 1234567890"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Specify expected response formats",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "Accept: application/json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get limits and usage from APIs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-RateLimit-Remaining: 10"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Include trace info or timing metrics",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Execution-Time: 150ms"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable cross-origin requests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "Access-Control-Allow-Origin: *"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass app-level config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-App-Version: v2.3.1"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mask the request with common headers",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "User-Agent: Mozilla/5.0 (Windows NT 10.0...)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Return backend state",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Server-Status: All systems operational"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Guide search engines",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "Link: <https://example.com/page>; rel=\"canonical\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Track experimental groups",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "X-Experiment-ID: variant_b"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>
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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```http
X-Session-ID: 1234567890
```

**Content Negotiation**

Specify expected response formats:

<VerifiedTag value="Verified" />

```http
Accept: application/json
```

**Rate Limiting**

Get limits and usage from APIs:

<VerifiedTag value="Verified" />

```http
X-RateLimit-Remaining: 10
```

**Debugging and Performance Tracking**

Include trace info or timing metrics:

<VerifiedTag value="Verified" />

```http
X-Execution-Time: 150ms
```

**CORS (Cross-Origin Resource Sharing)**

Enable cross-origin requests:

<VerifiedTag value="Verified" />

```http
Access-Control-Allow-Origin: *
```

**Custom Application Logic**

Pass app-level config:

<VerifiedTag value="Verified" />

```http
X-App-Version: v2.3.1
```

**Bypassing Firewalls/Proxies**

Mask the request with common headers:

<VerifiedTag value="Verified" />

```http
User-Agent: Mozilla/5.0 (Windows NT 10.0...)
```

**Server Health**

Return backend state:

<VerifiedTag value="Verified" />

```http
X-Server-Status: All systems operational
```

**SEO Optimization**

Guide search engines:

<VerifiedTag value="Verified" />

```http
Link: <https://example.com/page>; rel="canonical"
```

**A/B Testing**

Track experimental groups:

<VerifiedTag value="Verified" />

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
