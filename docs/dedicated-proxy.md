---
id: dedicated-proxy
title: Dedicated Proxy - IP Whitelisting
hide_title: true
sidebar_label: Dedicated Proxy for IP whitelisting
description: This article will guide you on how does TestMu AI Cloud access network restricted resources using a dedicated proxy server.
keywords:
  - dedicated proxy
  - inbound ip whitelisting
  - ip whitelisting
  - ip whitelsiting testmu ai
url: https://www.testmu.ai/support/docs/dedicated-proxy
site_name: LambdaTest
slug: dedicated-proxy
canonical: https://www.testmu.ai/support/docs/dedicated-proxy/
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
          "name": "Migration",
          "item": `${BRAND_URL}/support/docs/dedicated-proxy/`
        }]
      })
    }}
></script>

# Dedicated Proxy - IP Whitelisting

---

This article will guide you on how does TestMu AI cloud access network restricted resources using a dedicated proxy server.

## Prerequisites

---

- Client network resources are publicly discoverable (clientapplication.private.com) but access is restricted to the dedicated proxy.
- The **dedicated proxy IP** needs to be whitelisted by the client’s network administrators.

## IP whitelisting

---

IP whitelisting can help the client to have control over who has the access to resources hosted on their network. IP whitelist is an approved list of IP addresses or IP domains that have permission to access the resource domain. Reserved for only trusted users, it is only set and updated by the client network administrators. With dedicated proxy solution, **only a single IP** needs to be whitelisted which saves the hassle of whitelisting multiple IP ranges.

## Dedicated Proxy Server of <BrandName />

---

<BrandName /> provides a dedicated proxy server solution that can be whitelisted to provide access to the client’s network-restricted resources.

### How does it work?

---

<img loading="lazy" src={require('../assets/images/uploads/ip2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

---

1. The test script from the client network machine makes a call to the <BrandName /> cloud platform to start the test session.
2. <BrandName /> cloud then allocates a device to the user with the specified capabilities to run the user’s test on the <BrandName /> cloud.
3. This allocated device makes all the network requests via the dedicated Proxy allocated to the client. The dedicated proxy checks whether resources can be attained through the public internet or need to be fetched from the client’s network.
4. The dedicated proxy accesses the network restricted resources by reaching out to the client’s network via the whitelisted IP.

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmu.ai.

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
      Dedicated Proxy for IP Whitelisting
      </span>
    </li>
  </ul>
</nav>
