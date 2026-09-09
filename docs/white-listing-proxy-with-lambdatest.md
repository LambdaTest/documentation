---
id: white-listing-proxy-with-lambdatest
title: Whitelisting Proxy with TestMu AI
sidebar_label: Whitelist Proxy IPs
description: Whitelist the TestMu AI domain to connect from a firewall-protected network.
keywords:
  - whitelist lambdatest domain firewall
  - proxy configuration selenium grid
  - firewall access lambdatest ports
  - network security whitelist testing
  - TCP port 80 443 whitelist
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/white-listing-proxy-with-testmu/
site_name: TestMu AI
slug: white-listing-proxy-with-testmu/
canonical: https://www.testmuai.com/support/docs/white-listing-proxy-with-testmu/
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
          "name": "White-listing Proxy With TestMu AI",
          "item": `${BRAND_URL}/support/docs/white-listing-proxy-with-testmu/`
        }]
      })
    }}
></script>

# Whitelisting Proxy with TestMu AI
* * *

If you access the internet through a firewall-protected network, you may face issues connecting with TestMu AI. You may encounter error messages.

In such scenarios, you need to whitelist the TestMu AI domain. Whitelisting tells your firewall-protected network to allow access for a set of IP addresses, IP range, or an entire domain that you trust. Whitelisting is a security procedure to help users access a website or web-app that their network security team considers non-malicious.

Relay the below domain to your network security team and ask them to whitelist it so you can connect with TestMu AI from your firewall-protected network.

| PROTOCOL | PORTS       | SOURCE                 | DESTINATION      |
|----------|-------------|------------------------|------------------|
| TCP      | 80, 443, 22 | All TestMu AI Clients | *.lambdatest.com |

>In case of any queries or special requests related to whitelisting, reach out via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat support**</span>.

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
       Whitelisting Proxy With TestMu AI
      </span>
    </li>
  </ul>
</nav>
