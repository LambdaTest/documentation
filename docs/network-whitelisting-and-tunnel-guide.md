---
id: network-whitelisting-and-tunnel-guide
title: Network Whitelisting Guide
sidebar_label: Network Whitelisting Guide
description: Follow the instructions in this documentation, to understand the difference between the network and the ip whitelisting.
keywords:
  - Tunnel
  - Network
  - Whitelisting
  - Public IP
  - Outbound Whitelisting
  - Dedicated Proxy
url: https://www.testmu.ai/support/docs/network-whitelisting-and-tunnel-guide
site_name: LambdaTest
slug: network-whitelisting-and-tunnel-guide
canonical: https://www.testmu.ai/support/docs/network-whitelisting-and-tunnel-guide/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "TestMu AI Network Whitelisting and Tunnel Guide",
          "item": `${BRAND_URL}/support/docs/network-whitelisting-and-tunnel-guide/`
        }]
      })
    }}
></script>
When testing private or restricted environments on <BrandName />, your team may need to configure network access controls. Depending on how your applications are hosted and secured, <BrandName /> supports multiple approaches **Inbound Whitelisting, Dedicated Proxy, Outbound Whitelisting, STUN/TURN Whitelisting, and Tunnel configurations (including Site-to-Site tunnels)**.

> These are Inbound and Outbound with respect to user's network.

This guide helps you decide which option to use for your infrastructure setup. 

## 1. When Inbound Whitelisting Has to Be Done (Shared IP)
Inbound IP whitelisting allows <BrandName /> cloud browsers and devices to directly access your IP-restricted web applications without using a tunnel.

#### When to Use
- Your resources (e.g., staging sites, dashboards, APIs) are publicly accessible on the internet, but locked down to requests from trusted IPs.
- Your firewall or access control list (ACL) supports adding static IPs.
- You want to avoid maintaining tunnels for each test run.

#### Example
- A staging environment at staging.company.com is accessible only from a set of static IPs.
- By whitelisting <BrandName />’s shared public IPs, your QA team can test directly on the cloud grid.

> Refer to [<BrandName /> Public IP](/support/docs/testmu-public-ip/) for list for the IP addresses.

## 2. When Dedicated Proxy Whitelisting Has to Be Done
Dedicated Proxy Whitelisting provides an extra layer of security by assigning a unique static IP exclusively for your organization.

#### When to Use
- You want isolation from other <BrandName /> customers (no shared IPs).
- Your compliance or security policies mandate that only your company’s traffic be routed through a controlled IP.
- You want easier log tracking, auditing, or firewall rules with a single source IP.

#### Example
- A banking app testing environment requires that only a customer-specific IP be allowed, not shared infrastructure IPs.
- You request a dedicated proxy IP from <BrandName /> and whitelist only that.

## 3. When Outbound Whitelisting Is Required

Outbound whitelisting applies when your corporate network restricts users from accessing external domains.

#### When to Use
- Your testers cannot reach lambdatest.com or related subdomains because of firewall/proxy rules.
- You need to ensure your employees’ browsers and <BrandName /> integrations can connect to the platform.

#### What to Whitelist
- `*.lambdatest.com` (all subdomains)
- Standard ports `80` and `443`

#### Example
A QA engineer inside a corporate VPN is unable to resolve `hub.lambdatest.com`. Once `*.lambdatest.com` is whitelisted, they can execute tests without connection issues.

## 4. When STUN/TURN Server Whitelisting Is Required
For real-time testing sessions (browser, VM, or real device), <BrandName /> uses the WebRTC protocol to stream video. This requires access to STUN/TURN servers.

#### When to Use
- You notice slowness in live sessions.
- VM/real device sessions are not launching.
- The video stream falls back to Guacamole (slower protocol) instead of WebRTC.

#### What to Whitelist
Allow TLS traffic on ports 80 and 443 for the following servers:

```bash
stun-us-1.lambdatest.com  
stun-us-2.lambdatest.com  
stun-eu-1.lambdatest.com  
stun-eu-2.lambdatest.com  
stun-as-1.lambdatest.com  
stun-ap-2.lambdatest.com  
```

#### Example
If a tester in Europe is experiencing lag in live testing sessions, whitelisting `stun-eu-1.lambdatest.com` and `stun-eu-2.lambdatest.com` resolves it.

## 5. When Whitelisting Will Not Help (Tunnel Required)

Whitelisting only works if your application is publicly discoverable on the internet (with IP restrictions). If your resources are inside a private network, on localhost, or on a non-routable subnet, whitelisting will not work.

#### Use <BrandName /> Tunnel Instead
The Tunnel binary (or Underpass app) creates a secure outbound connection from your machine/network to <BrandName />, enabling the cloud to access:
- Localhost apps (http://localhost:3000)
- Internal apps behind VPN or private subnets (10.x.x.x, 192.168.x.x)
- Apps accessible only within your corporate LAN

#### Example
- A developer wants to test a React app running on `http://localhost:3000`. Whitelisting won’t work because it’s not internet-exposed.
- Solution: Start a <BrandName /> Tunnel session and run tests.

## 6. When Site-to-Site (S2S) Tunnel Should Be Used
For enterprise-grade setups, a Site-to-Site (S2S) tunnel provides a persistent, secure connection between your corporate network and <BrandName />.

#### When to Use
- You want to avoid starting a tunnel for each session.
- Your entire QA team needs always-on secure connectivity.
- You have strict compliance requirements (no public exposure, no shared infrastructure).
- You’re testing large-scale or highly regulated environments (finance, healthcare, government).

#### Example
A bank sets up a permanent S2S tunnel so all their staging/test environments can be accessed by <BrandName /> securely, without exposing them on the public internet or managing tunnels manually.

## Quick Decision Guide

| Scenario                                         | Recommended Setup                          |
| ------------------------------------------------ | ------------------------------------------ |
| Public site with IP restrictions                 | Inbound Whitelisting (Shared IPs)          |
| Public site with strict compliance               | Dedicated Proxy Whitelisting               |
| Corporate firewall blocks TestMu AI access      | Outbound Whitelisting (`*.lambdatest.com`) |
| Slowness in live sessions / video issues         | STUN/TURN Server Whitelisting              |
| Localhost or private subnet apps                 | Tunnel (Binary/Underpass)                  |
| Always-on, enterprise-grade private connectivity | Site-to-Site Tunnel                        |