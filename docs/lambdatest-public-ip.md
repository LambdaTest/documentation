---
id: lambdatest-public-ip
title: TestMu AI Public IP Ranges
hide_title: false
sidebar_label: TestMu AI Public IP
description: Learn which IP addresses needs to be whitelisted before running your tests on TestMu AI grid and its other products
keywords:
  - TestMu AI Public IP address
  - TestMu AI IP whitelist
  - TestMu AI 
url: https://www.testmuai.com/support/docs/testmu-public-ip/
site_name: TestMu AI
slug: testmu-public-ip/
canonical: https://www.testmuai.com/support/docs/testmu-public-ip/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

{/*
Copy buttons on this page are injected at runtime — there is no markup for them here.
Source: src/js/copy-ips.js + src/js/copy-ips.css, registered via clientModules in docusaurus.config.js.

Behaviour:
- Tables with ✅/❌ columns get a copy button per column header (copies only that column's
ticked rows), plus a copy-all button on the first header cell.
- All other tables get a single copy button next to their heading.
Values are read from the rendered table at click time, so tables can be edited freely here —
no IP list needs updating anywhere else.

Constraints:
- The script only runs on this page, gated by PATH_MATCH = /\/testmu-public-ip\/?$/ in copy-ips.js.
If this page's slug changes, update that regex or the buttons silently stop appearing.
- Values must look like an IP, CIDR, or hostname to be copied. Anything else is skipped with a
console warning (see VALID_VALUE in copy-ips.js) — extend it before adding IPv6 or ranges.
*/}

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
          "name": "LambdaTest Public IPs",
          "item": `${BRAND_URL}/support/docs/testmu-public-ip/`
        }]
      })
    }}
></script> 

These are the list of the IP ranges that you need to whitelist with respect to the specific <BrandName /> products.

Whitelist these Firewall IPs to allow <BrandName /> cloud infrastructure to access your firewall-protected application or environment. Configure them as **inbound** allow rules.

| Subnet Range | Desktop & Emulators &<br />Simulators - Automation | Desktop & Emulators &<br />Simulators (Real Time) | Real Device<br />(Manual & Automation) |
|--------------|----------------------------------------------|------------------------------------------|----------------------------------------|
| **103.231.42.40/29** | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> |
| **103.231.79.40/29** | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> |
| **23.105.12.32/27** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **23.106.34.192/26** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **209.58.137.40/29** | <p align="center"> ❌ </p> | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> |
| **23.83.156.64/26** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **23.105.162.225** | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **23.105.174.26** | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **23.106.127.152/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **199.7.167.8/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **208.78.110.56/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **207.254.54.32/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **207.254.53.0/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **207.254.30.104/29** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> |
| **137.174.189.0/26** | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> | <p align="center"> ✅ </p> |
| **217.112.145.88/29** | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> |
| **149.6.5.8/29** | <p align="center"> ✅ </p> | <p align="center"> ❌ </p> | <p align="center"> ✅ </p> |



## KaneAI IPs {#kaneai-ips}

Whitelist these IP ranges to allow KaneAI to access applications hosted within your firewall-protected environment. Configure them as **inbound** allow rules.

| IP / CIDR |
|------------|
| `4.224.6.32/28` |
| `20.253.69.48/28` |
| `20.242.202.160/28` |
| `20.102.24.108/31` |
| `4.224.143.208/28` |
| `20.204.184.92/31` |
| `52.224.184.10/31` |
| `20.204.224.62/31` |
| `172.199.71.240/28` |

## Tunnel IPs {#tunnel-ips}

Whitelist these IP addresses to allow the Tunnel client to establish outbound connections with the Tunnel service. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `3.214.241.254` |
| `52.36.84.247` |
| `3.66.78.89` |
| `13.126.37.58` |
| `23.106.127.152/29` |
| `23.106.34.219` |
| `23.106.54.77` |
| `23.82.88.184` |
| `199.58.84.59` |
| `172.241.165.120` |

## Integration Tools IPs {#integration-tools-ips}

Whitelist this IP address to allow <BrandName /> integration tools to access applications hosted within your firewall-protected environment. Configure it as an **inbound** allow rule.


| IP Address |
|------------|
| `3.208.126.109` |


## Stun Servers {#stun-server-ips}

Whitelist the following STUN server IP addresses or hostnames to enable WebRTC connectivity. **You can whitelist either the complete set of IP addresses or the complete set of hostnames**.

Configure it as an **outbound** allow rule.

### IP Addresses

| IP Address |
|------------|
| `52.72.255.172` |
| `13.126.232.213` |
| `34.246.27.205` |
| `3.222.169.4` |
| `43.204.134.9` |
| `54.228.155.35` |

### Hostnames

| Hostname                   |
|----------------------------|
| `stun-us-2.lambdatest.com` |
| `stun-ap-2.lambdatest.com` |
| `stun-eu-2.lambdatest.com` |
| `stun-us-1.lambdatest.com` |
| `stun-as-1.lambdatest.com` |
| `stun-eu-1.lambdatest.com` |

Instead of adding each hostname individually, you can whitelist the wildcard domain **`*.lambdatest.com`** to allow all of them at once.


## Guacamole Servers {#guacamole-servers-ips}

Whitelist these IP addresses for browser-based remote access sessions falls back to a Guacamole session. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `54.225.186.4` |
| `52.71.149.142` |
| `44.238.12.62` |
| `3.111.139.20` |
| `54.255.17.88` |
| `3.64.247.89` |


## WebSocket Connections {#websocket-connections-ips}

Whitelist these IP addresses to allow WebSocket (WS/WSS) communication for device interaction and DevTools functionality. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `3.73.105.110/32` |
| `3.72.144.221/32` |
| `18.235.85.58/32` |
| `44.207.198.148/32` |
| `3.109.252.59` |
| `43.205.182.101` |
| `18.138.79.89` |
| `54.254.173.86` |


## SSE Connections {#sse-connections-ips}

Whitelist these domains to allow Server-Sent Events (SSE) streaming, which delivers real-time session, device, and test execution updates to your browser or client. Configure them as **outbound** allow rules.

| Hostname                        |
|---------------------------------|
| `kaneaivm-india.lambdatest.com` |
| `kaneaivm-us.lambdatest.com`    |
| `device.lambdatest.com`         |

Instead of adding each hostname individually, you can whitelist the wildcard domain **`*.lambdatest.com`** to allow all of them at once.


:::note
- If you prefer not to whitelist the product-specific public IP ranges listed below, consider using a **Dedicated Proxy**.

- It provides a unique static IP exclusively for your organization, making firewall management, auditing, and access control simpler. This is especially useful for organizations with strict security or compliance requirements that want to whitelist a single dedicated IP instead of multiple product-specific IP ranges.

- For more information, refer to the documentation links provided below.
  :::

## Additional Links

- [Network Whitelisting Guide](/support/docs/network-whitelisting-and-tunnel-guide/#2-when-dedicated-proxy-whitelisting-has-to-be-done/)
- [Dedicated Proxy - IP Whitelisting](/support/docs/dedicated-proxy/)
