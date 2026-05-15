---
id: site-to-site-ipsec-vpn-setup
title: IPsec Site-to-Site VPN Setup Guide
sidebar_label: Site-to-Site VPN Setup
description: A comprehensive guide to setting up IPsec Site-to-Site VPN for testing privately hosted applications on TestMu AI cloud infrastructure.
keywords:
  - Site-to-Site VPN
  - IPsec VPN
  - S2S Tunnel
  - Private Network Testing
  - Enterprise VPN
  - IKEv2
  - Network Security
url: https://www.testmuai.com/support/docs/site-to-site-ipsec-vpn-setup/
site_name: TestMu AI
slug: site-to-site-ipsec-vpn-setup/
canonical: https://www.testmuai.com/support/docs/site-to-site-ipsec-vpn-setup/
---

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
          "name": "IPsec Site-to-Site VPN Setup Guide",
          "item": `${BRAND_URL}/support/docs/site-to-site-ipsec-vpn-setup/`
        }]
      })
    }}
></script>

<BrandName /> supports connectivity via IPsec Site-to-Site VPN (S2S VPN) for clients who need to test web applications hosted on internal/private networks that are not publicly accessible. This allows <BrandName /> cloud infrastructure to reach your privately hosted test environments directly over an encrypted, authenticated tunnel — just as if both networks are on the same LAN.

:::info Executive Summary
An IPsec Site-to-Site VPN creates a permanent, encrypted tunnel between your network gateway and <BrandName /> cloud, enabling secure access to internal staging environments, development servers, and private applications without exposing them to the public internet.
:::

:::caution Client Action Required
Setting up an IPsec Site-to-Site VPN requires coordination with your organization's internal **Network and Security Team**. Your network/security team will need to configure your on-premises VPN gateway/firewall device, define firewall rules, and coordinate IP addressing with the <BrandName /> network team. Please engage your internal IT/Security team before initiating this process.
:::

## What is IPsec Site-to-Site VPN?

An IPsec Site-to-Site (S2S) VPN creates a permanent, encrypted tunnel between two network gateways, allowing devices on both networks to communicate securely as if they were on the same Local Area Network (LAN).

### Key Concepts

- **Gateway-to-Gateway**: Unlike remote access VPNs (user-to-device), S2S VPN connects entire networks. It does not require software installation on individual test machines.
- **Persistence**: The tunnel is "always on," automatically re-establishing connection if interrupted.
- **Technology**: It utilizes the IPsec suite, specifically IKEv2 for secure key exchange and ESP in Tunnel Mode for data encapsulation and encryption.
- **Use Case**: It enables <BrandName /> cloud nodes to access private URLs (e.g., `http://192.168.10.5/myapp` or `http://internal.company.com`) that are not accessible via the public internet.

## Network Architecture

The diagram below illustrates the secure connection between your internal network and <BrandName />'s cloud infrastructure.

<img loading="lazy" src={require('/assets/images/s2s-vpn/network-architecture.png').default} alt="S2S VPN Network Architecture" className="doc_img" width="800"/>

### Traffic Flow Steps

1. <BrandName /> test node initiates HTTP request to internal URL (e.g., `http://10.10.1.50`).
2. Traffic is routed to <BrandName /> VPN Gateway based on routing table.
3. VPN Gateway encapsulates packet in IPsec ESP Tunnel Mode (encrypted).
4. Encrypted packet traverses the public internet to Client's Public IP.
5. Client's VPN Gateway decrypts the packet (ESP decapsulation).
6. Request is forwarded to the internal web server.
7. Response follows the reverse path back to the test node.

## IPsec Protocol Suite

### IPsec Overview
IPsec (RFC 4301) secures IP communications. For S2S VPNs, we use **Tunnel Mode**, which encapsulates the entire original IP packet within a new IP packet, protecting both the payload and the original header.

### IKEv2 (RFC 7296)
Internet Key Exchange Version 2 is responsible for negotiation and authentication.

- **Phase 1 (IKE_SA_INIT)**: Negotiates cryptography (DH group, encryption) and generates keying material.
- **Phase 2 (IKE_AUTH)**: Authenticates peers and establishes Child SAs for traffic.
- **Ports**: UDP 500 (Initial), UDP 4500 (NAT Traversal).

### ESP (RFC 4303)
Encapsulating Security Payload provides confidentiality (encryption) and integrity. It operates as IP Protocol 50.

### NAT Traversal (NAT-T)
Standard ESP cannot pass through NAT devices. RFC 3948 solves this by encapsulating ESP packets inside UDP packets on port 4500. This is automatically detected and negotiated during IKEv2 setup.

## Recommended Security Parameters

| Parameter | Recommended Value | Notes |
|-----------|-------------------|-------|
| **IKE Version** | IKEv2 | IKEv1 is deprecated |
| **Encryption (Phase 1)** | AES-256-GCM or AES-256-CBC | NIST SP 800-77r1 approved |
| **Encryption (Phase 2)** | AES-256-GCM | Preferred AEAD cipher |
| **Integrity (Phase 1)** | HMAC-SHA-384 | SHA-1 is deprecated |
| **Diffie-Hellman Group** | Group 14 (Min) / Group 20 (Preferred) | Groups < 14 are insecure |
| **PFS** | Enabled | Perfect Forward Secrecy |
| **SA Lifetime (Phase 1)** | 28800 seconds (8 hours) | Standard enterprise setting |
| **SA Lifetime (Phase 2)** | 3600 seconds (1 hour) | Renegotiate frequently |
| **DPD** | Enabled | Dead Peer Detection |

## Firewall / Port Requirements

The following ports must be permitted on your external firewall between the Client Gateway Public IP and the <BrandName /> Gateway IP.

| Protocol | Port | Direction | Purpose |
|----------|------|-----------|---------|
| UDP | 500 | Bidirectional | IKE/ISAKMP Negotiation |
| UDP | 4500 | Bidirectional | NAT-Traversal & ESP Encapsulation |
| IP Proto 50 | N/A | Bidirectional | ESP (If no NAT is present) |
| TCP/UDP | 80, 443 | Client → TestMu AI | Allowed Test Traffic (HTTP/HTTPS) |

## S2S VPN vs. SSH Tunnel Comparison

| Feature | S2S IPsec VPN | TestMu AI SSH Tunnel |
|---------|---------------|----------------------|
| Connectivity | Gateway-to-Gateway (Permanent) | Client-Initiated (Session-based) |
| Client Software | None (Router Config) | Requires LT Binary/App |
| Scope | Entire Network/Subnets | Local Machine only |
| Best For | Enterprise / Permanent Staging | Ad-hoc / Dev Testing |

## Client Coordination

:::warning Network Team Involvement Mandatory
Setting up an IPsec Site-to-Site VPN is **NOT** a self-service process. It requires configuration on your organization's edge firewalls/routers.
:::

### Required Actions by Client Team

1. **Gateway Configuration**: Configure on-premise device (Cisco, Fortinet, Palo Alto, etc.) with provided parameters.
2. **Firewall Rules**: Permit UDP 500/4500 from <BrandName /> IP.
3. **Routing**: Add static routes directing traffic for <BrandName /> subnets into the tunnel.
4. **Security Approval**: Obtain internal change management approval.

**Timeline**: Typical setup takes 3–10 business days depending on internal client approvals.

## S2S VPN Requirement Gathering

To initiate the VPN setup process, please gather the following details from your Network/Security team and share them with <BrandName /> support at **support@testmu.ai**.

### Organization Info

| Field | Description | Example |
|-------|-------------|---------|
| **Organization Name** | Your company or organization name | Acme Corp |
| **LambdaTest Account Email** | The email associated with your <BrandName /> account | admin@acme.com |
| **Network/Security Contact Email** | Email of the technical contact from your network or security team | netops@acme.com |

### Gateway Details

| Field | Description | Example |
|-------|-------------|---------|
| **VPN Gateway Vendor** | The vendor/make of your on-premise VPN gateway or firewall device | Cisco, Fortinet, Palo Alto, AWS, Azure, etc. |
| **Gateway Public IP** | The public IP address of your VPN gateway | 203.0.113.10 |
| **Is Gateway behind NAT?** | Whether your gateway sits behind a NAT device. If **Yes**, provide the NAT IP address | No / Yes (specify NAT IP) |

### Network Addressing

| Field | Description | Example |
|-------|-------------|---------|
| **Internal Subnets to Expose** | The private subnets (in CIDR format) that <BrandName /> test nodes need to reach. List one per line | 10.10.1.0/24, 192.168.5.0/24 |
| **Internal Domain Names** | Internal domain names that should be routed through the VPN tunnel (for DNS routing) | uat.company.internal, app.corp |

### IPsec Parameters Preference

| Parameter | Options | Recommended |
|-----------|---------|-------------|
| **IKE Version** | IKEv1 / IKEv2 | IKEv2 (Recommended) |
| **Auth Method** | Pre-Shared Key (PSK) / Certificates | Pre-Shared Key (PSK) |
| **Phase 1 Encryption** | AES-256-GCM / AES-256-CBC / AES-128-GCM | AES-256-GCM (Preferred) |
| **Phase 1 DH Group** | Group 14 / Group 19 (ECP-256) / Group 20 (ECP-384) | Group 20 (ECP-384) |

:::tip Submit Your Request
Send the above details to **support@testmu.ai** to submit your VPN setup request. <BrandName /> Network Engineering will review and contact you within **2 business days**.
:::

## Implementation Checklist

Setup involves parallel work from both teams. Use the checklists below to track progress.

### Client Network Team

- Identify VPN Gateway device
- Obtain InfoSec approval
- Complete Requirement Form (see [above](#s2s-vpn-requirement-gathering))
- Configure Gateway with Parameters
- Open UDP 500/4500 on Firewall
- Configure Static Routes

### <BrandName /> Network Team

- Provide Public IP & Parameters
- Configure Cloud VPN Gateway
- Provide Cloud Subnet Ranges
- Validate SA Establishment
- End-to-End Connectivity Test

## Troubleshooting

| Issue | Possible Cause | Resolution |
|-------|----------------|------------|
| Tunnel not establishing | Firewall blocking UDP 500 | Ensure UDP 500 is open bidirectionally |
| IKE Auth Failed | PSK mismatch | Verify Pre-Shared Key matches exactly |
| TS_UNACCEPTABLE | Subnet mismatch | Verify Traffic Selectors (subnets) match on both sides |
| Tunnel Up, No Traffic | Missing Route | Add route for <BrandName /> subnet via tunnel interface |
| Drops Frequently | NAT Timeout | Enable NAT-T keepalives; check DPD |

## References & Standards

- RFC 4301: Security Architecture for the Internet Protocol (IPsec)
- RFC 7296: Internet Key Exchange Protocol Version 2 (IKEv2)
- NIST SP 800-77 Rev. 1: Guide to IPsec VPNs
- FIPS 140-3: Security Requirements for Cryptographic Modules

---

For VPN setup assistance, contact: **support@testmu.ai**
