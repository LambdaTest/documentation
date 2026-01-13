---
id: basic-authentication-for-web-automation
title: Basic Authentication for Safari Web Automation
sidebar_label: Basic Authentication for Safari Web Automation
description: Now you can Basic Authentication during your Safari web automation sessions on iOS real devices with TestMu AI Real Device Cloud Platform with 3000+ real mobile devices.
keywords:
  - basic authentication
  - safari web automation
  - web automation
  - basic authentication for web automation
  - app testing
  - real devices
url: https://www.testmu.ai/support/docs/basic-authentication-for-web-automation
site_name: LambdaTest
slug: basic-authentication-for-web-automation
canonical: https://www.testmu.ai/support/docs/basic-authentication-for-web-automation/
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
          "name": "Biometric Authentication",
          "item": `${BRAND_URL}/support/docs/basic-authentication-for-web-automation/`
        }]
      })
    }}
></script>

## Introduction
---
Basic Authentication is a method for an HTTP user agent to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of `Authorization: Basic <credentials>`, where credentials is the **Base64** encoding of ID and password joined by a single colon `:`.

To provide support for Basic Authentication in Safari during Web Automation, we have introduced a new lambda hook in our `iOS` Real Device (RD) web sessions.


:::info
1. This hook is not compatible with any app-based sessions.
2. The capability `autoAcceptAlerts` must be set to `false`.
:::

## How to Use
---
Here is an example of how to use the Basic Authentication hook in Python:

```python
data = {
  "username": "admin",
  "password": "admin",
  "url": "https://the-internet.herokuapp.com/basic_auth",
}
driver.execute_script("lambda-ios-set-basic-auth", data)
```

:::info
It is important to note that all three parameters (username, password, URL) are mandatory and must be passed to the script.
:::

## Limitations
---
Please note, this hook is designed to be used exclusively with Safari on iOS Real Device (RD) web sessions and is not compatible with Android sessions or any app-based sessions.


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
      Basic Authentication for Safari Web Automation
      </span>
    </li>
  </ul>
</nav>

