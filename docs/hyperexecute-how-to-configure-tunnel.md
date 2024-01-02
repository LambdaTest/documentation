---
id: hyperexecute-how-to-configure-tunnel
title: How to Configure Tunnel with HyperExecute
hide_title: true
sidebar_label: How to Configure Tunnel with HyperExecute
description: Learn to set up a Tunnel with HyperExecute effortlessly with our straightforward guide, simplifying the configuration process for you!
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - How to Configure Tunnel with HyperExecute
url: https://www.lambdatest.com/support/docs/hyperexecute-how-to-configure-tunnel/
site_name: LambdaTest
slug: hyperexecute-how-to-configure-tunnel/
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
          "name": "Integrations",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-how-to-configure-tunnel/"
        }]
      })
    }}
></script>

# How to Configure Tunnel with HyperExecute

This page explains how you can Configure Tunnel with HyperExecute
***
    
If you want to use a tunnel with HyperExecute, you can [download the HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and set the _tunnel flag_ to true. This is an important step for enabling a tunnel to work on Hyperexecute specifically.

        ```bash
            tunnel: true
            tunnelOpts:
                global: true
        ```

<img loading="lazy" src={require('../assets/images/hyperexecute-guided-walkthrough/12.png').default} alt="Image"  style={{width: '500px',}} className="doc_img"/>

>If you have more questions, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Chat</span> with us.

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
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>