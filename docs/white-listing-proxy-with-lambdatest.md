---
id: white-listing-proxy-with-lambdatest
title: White-listing Proxy With TestMu AI
hide_title: true
sidebar_label: White Listing Proxy With TestMu AI
description: This documentation will help you learn how you can white list TestMu AI domain if you are accessing the internet through a firewall-protected network.
keywords:
 - White-listing Proxy With TestMu AI
url: https://www.testmu.ai/support/docs/white-listing-proxy-with-testmu
site_name: LambdaTest
slug: white-listing-proxy-with-testmu
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "White-listing Proxy With LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/white-listing-proxy-with-lambdatest/"
        }]
      })
    }}
></script>

# White-listing Proxy With LambdaTest
* * *

If you are accessing the internet through a firewall-protected network then you may face an issue in connecting with LambdaTest. You may encounter the below error messages:

In such scenarios, you may need to whitelist LambdaTest domain. Whitelisting is a process which conveys your firewall-protected network to allow access for a set of IP addresses, IP range, or an entire domain trusted by you. Whitelisting is a security procedure to help users access a website or web-app which is considered to be non-malicious by their network security team.

You can relay the below domain to your network security team, asking them to whitelist it so you could connect with LambdaTest from your firewall protected network.

| PROTOCOL | PORTS       | SOURCE                 | DESTINATION      |
|----------|-------------|------------------------|------------------|
| TCP      | 80, 443, 22 | All LambdaTest Clients | *.lambdatest.com |

>In case of any queries or special request related to whitelisting, just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}> **shout**</span>.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       White-Listing Proxy With LambdaTest
      </span>
    </li>
  </ul>
</nav>
