---
id: bypass-proxy-domains
title: How to Bypass Proxy Domains
hide_title: false
sidebar_label: Bypass Proxy Domains
description: Learn how to use TestMu AI bypassProxyDomains capability to specify domains that should bypass the dedicated proxy.
keywords:
- custom headers testmu ai
- bypass firewalls restrictions
- custom headers bypass firewalls
url: https://www.testmu.ai/support/docs/bypass-proxy-domains/
site_name: LambdaTest
slug: bypass-proxy-domains/
canonical: https://www.testmu.ai/support/docs/bypass-proxy-domains/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BRAND_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Support",
        "item": `${BRAND_URL}/support/docs/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bypass Proxy Domains",
        "item": `${BRAND_URL}/support/docs/bypass-proxy-domains/`
      }
    ]})
  }}>
</script>

When running tests with Dedicated Proxy (DP) enabled, all outgoing requests are routed through the proxy. While this provides secure and controlled network access, it can sometimes cause issues when your tests need to access services running locally, such as localhost endpoints or specific internal domains.

To solve this, you can use the `bypassProxyDomains` capability. This capability lets you define a list of domains that should bypass the dedicated proxy and instead be resolved directly from the test environment.

With `bypassProxyDomains`, you can configure specific domains (like localhost) to skip the proxy hop and resolve locally. This ensures that local APIs, servers, or background services started during tests remain accessible.

## Capability Reference

| Capability           | Type      | Required | Description                                                                    |
| -------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `dedicatedProxy`     | `boolean` | Yes      | Must be set to `true` for `bypassProxyDomains` to take effect.                 |
| `bypassProxyDomains` | `array`   | Optional | List of domains (hostnames) to bypass the dedicated proxy and resolve locally. |

> `dedicatedProxy: true` is mandatory for bypassProxyDomains to take effect.

## Example Usage

```java title="test1.java"
DesiredCapabilities capabilities = new DesiredCapabilities();
String bypassProxyDomains[] = { "127.0.0.1", "localhost", "todomvc" };

capabilities.setCapability("dedicatedProxy", true);
capabilities.setCapability("bypassProxyDomains", bypassProxyDomains);
```

> **Note :** Cypress currently does not support bypassing the domains `127.0.0.1` and `localhost` when using the `bypassProxyDomains` capability
