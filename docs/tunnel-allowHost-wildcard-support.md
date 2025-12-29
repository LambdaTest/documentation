---
id: tunnel-allowHost-wildcard-support
title: Support for Wildcard in --allowHosts Flag
hide_title: false
sidebar_label: Wildcard Support
description: Now you can use wildcard values for the -allow-Host flag for setting up the tunnel at TestMu AI.
keywords:
  - local app testing
  - testmu ai local testing
  - testmu ai local tunnel
  - TestMu AI tunnel
  - local app testing for linux
  - TCP with TLS 1.2 secure connection
  - shared TCP with TLS 1.2 secure connection
  - TCP with TLS 1.2 secure connection tunnel
  - docker compose TCP with TLS 1.2 secure connection tunnel
  - docker vpn tunnel
image: /assets/images/og-images/docker-tunnel.png
url: https://www.testmu.ai/support/docs/tunnel-allowHost-wildcard-support
site_name: LambdaTest
slug: tunnel-allowHost-wildcard-support
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
          "name": "Docker Tunnel",
          "item": "https://www.lambdatest.com/support/docs/tunnel-allowHost-wildcard-support/"
        }]
      })
    }}
></script>
LambdaTest Tunnel now supports wildcard entries in the [`--allowHosts`](https://lambdatest.com/support/docs/lambda-tunnel-modifiers/#:~:text=TYPE-,%2D%2DallowHosts,-Comma%20separated%20list) flag. This enhancement allows users to specify patterns for hostnames instead of listing each subdomain separately, making it more flexible and efficient.

## Usage of `--allowHosts` with Wildcards
The `--allowHosts` flag enables users to define which domains should be routed through the LambdaTest Tunnel while allowing other traffic to bypass it. With the new wildcard support, you can match multiple subdomains easily.

### Formatting Domains with Wildcards
Follow these guidelines when using wildcards in domain names:

#### Use only the domain name
- Do not include `http://` or `https://`.
- ✅ Example: `example.com`.       

#### Comma-separated list without spaces 
- Ensure that the list of domains is comma-separated with no spaces.
- ✅ Example: `example.com`, `testsite.com`, `anotherdomain.com`

#### Using Wildcards to Match Subdomains
- Prefix the domain with a dot `(.)` to match all its subdomains.
- Alternatively, you can use an asterisk `(*)` for the same effect.
- ✅ Example:
  - `".example.com"` or `"*.example.com"` will match `sub.example.com`, `api.example.com`, `blog.example.com`, etc.

:::tip Note
Enclose the argument in **quotes** to prevent shell expansion of the **asterisk (*)**.
:::

## Benefits of Wildcard Support in `--allowHosts`
- **Simplifies Configuration :** No need to manually list each subdomain.
- **Increased Flexibility :** Easily manage multiple subdomains with a single entry.
- **Better Performance :** Reduces manual domain management, improving efficiency.
