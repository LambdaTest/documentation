---
id: custom-dns-map
title: Custom DNS Mapping for Selenium Tests
sidebar_label: Map a Custom DNS Entry
description: Define custom IP addresses for specific domains during Selenium tests using the customDnsMap capability.
keywords:
  - custom dns mapping selenium capability
  - redirect domain IP selenium testing
  - override dns resolution test automation
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/custom-dns-map/
site_name: TestMu AI
slug: custom-dns-map/
canonical: https://www.testmuai.com/support/docs/custom-dns-map/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Custom DNS Mapping",
          "item": `${BRAND_URL}/support/docs/custom-dns-map/`
        }]
      })
    }}
></script>

## Overview
---

The `customDnsMap` capability lets you define custom IP addresses for specific domains.

This is useful when you need to redirect domain requests to different IP addresses for testing purposes, without altering the global or browser-specific configurations.

The customDnsMap capability uses the following format:

```bash
"customDnsMap": {
    "google.com": "<IP>",
    "stackoverflow.com": "<IP>",
    "<domain1>": "<IP1>",
    "<domain2>": "<IP2>",
    ...
}
```

Here `<domain1>` and `<domain2>` are the domain names to be redirected, and `<IP1>` and `<IP2>` are the corresponding IP addresses. When a domain listed in the `customDnsMap` is accessed, it resolves to the specified IP address, overriding any existing DNS resolution for that domain.

## Use Cases
---

The customDnsMap capability serves a variety of testing purposes.

- **Domain Redirection for Testing:** Redirect a domain to a different IP address, such as a staging or development server, when testing a web application that needs to connect to a specific backend.

- **Local Development Testing:** Map a preferred domain to the local IP address to test application behavior when accessed via a domain name instead of localhost.

- **Simulating Server Failures:** Redirect a domain to an invalid or different IP address to test how an application responds to server failures.

- **Overriding Default DNS Resolutions:** When a default DNS resolution is set but a specific test scenario requires a different IP address, use customDnsMap to override the resolution for that particular test.

- **Load Balancer Testing:** Redirect traffic to a specific server to evaluate its performance and functionality in isolation.

The following example shows how to redirect traffic to a staging server for the domain `example.com`:

```bash
"customDnsMap": {
  "example.com": "192.168.1.100"
}
```

With this configuration, whenever a user accesses `example.com`, the request redirects to `192.168.1.100`, which is the staging server.

## Benefits
---

The `customDnsMap` capability offers the following benefits.

- **Flexibility:** Easily and dynamically redirect traffic to different IP addresses without global configuration changes.

- **Control:** Gain full control over how domains are resolved, which is essential for testing and debugging.

- **Efficiency:** Improve testing and development workflows by eliminating the need to switch between different environments manually.

## Conclusion
---

The `customDnsMap` capability improves the efficiency and flexibility of testing and development workflows on the TestMu AI platform. Use it to redirect domains, simulate server failures, and test against specific backend servers.

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
        Custom DNS Mapping for Selenium Tests
      </span>
    </li>
  </ul>
</nav>
