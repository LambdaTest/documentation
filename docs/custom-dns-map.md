---
id: custom-dns-map
title: Custom DNS Mapping
hide_title: false
sidebar_label: Custom DNS Mapping
description: Learn how to provide Custom IP for Domains.
keywords:
    - custom dns mapping
    - testmu ai custom dns map

url: https://www.lambdatest.com/support/docs/custom-dns-map/
site_name: LambdaTest
slug: custom-dns-map/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Custom DNS Mapping",
          "item": "https://www.lambdatest.com/support/docs/custom-dns-map/"
        }]
      })
    }}
></script>
## Overview

The `customDnsMap` capability allows users to define custom IP addresses for specific domains. This is useful when you need to redirect domain requests to different IP addresses for testing purposes, without altering the global or browser-specific configurations.

The customDnsMap capability is specified in the following format:

```bash
"customDnsMap": {
    "google.com": "<IP>",
    "stackoverflow.com": "<IP>",
    "<domain1>": "<IP1>",
    "<domain2>": "<IP2>",
    ...
}
```

Here `<domain1>` and `<domain2>` are the domain names to be redirected, and `<IP1>` and `<IP2>` are the corresponding IP addresses. When a domain listed in the `customDnsMap` is accessed, it will resolve to the specified IP address in the map, overriding any existing DNS resolution for that domain.

## Use Cases

The customDnsMap capability can be used for a variety of purposes, including:

- **Domain Redirection for Testing:** If you're testing a web application and need it to connect to a specific backend server, you can use customDnsMap to redirect the domain to a different IP address, such as a staging or development server.

- **Local Development Testing:** Developers working on local setups might want to test their application's behavior when accessed via a domain name instead of localhost. With customDnsMap, they can map their preferred domain to the local IP address.

- **Simulating Server Failures:** To test how an application responds to server failures, you can redirect a domain to an invalid or different IP address using customDnsMap.

- **Overriding Default DNS Resolutions:** In situations where a default DNS resolution is set, but a specific test scenario requires a different IP address, customDnsMap can be used to override the default resolution for that particular test.

- **Load Balancer Testing:** If an application's architecture includes multiple backend servers with a load balancer, customDnsMap can redirect traffic to a specific server, allowing testers to evaluate its performance and functionality in isolation.

The following example shows how to use the `customDnsMap` capability to redirect traffic to a staging server for the domain `example.com`:

```bash
"customDnsMap": {
  "example.com": "192.168.1.100"
}
```

With this configuration in place, whenever a user accesses the domain `example.com`, their request will be redirected to the IP address `192.168.1.100`, which is the staging server.

## Benefits

The `customDnsMap` capability offers a number of benefits, including:

- **Flexibility:** It allows users to easily and dynamically redirect traffic to different IP addresses, without the need for global configuration changes.

- **Control:** It gives users complete control over how their domains are resolved, which is essential for testing and debugging purposes.

- **Efficiency:** It can help to improve the efficiency of testing and development workflows by eliminating the need to switch between different environments manually.

## Conclusion

The `customDnsMap` capability is a powerful tool that can be used to improve the efficiency and flexibility of testing and development workflows. It is a valuable addition to the LambdaTest platform, and it is sure to be used by many testers and developers to improve the quality of their software.