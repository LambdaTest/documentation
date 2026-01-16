---
id: http-basic-authentication
title: HTTP Basic Authentication
hide_title: true
sidebar_label: HTTP Basic Authentication
description: HTTP basic authentication represents a mechanism of challenge and response to help the server make a request authentication from a client, passing the User ID and password in the URL as the standard HTTP &quot;Authorization&quot; header.
keywords:
  - http basic authentication
  - http authentication
  - basic authentication
  - http authorization header
  - browser support for http authentication
url: https://www.testmu.ai/support/docs/http-basic-authentication/
site_name: LambdaTest
slug: http-basic-authentication/
canonical: https://www.testmu.ai/support/docs/http-basic-authentication/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "HTTP Basic Authentication",
          "item": `${BRAND_URL}/support/docs/http-basic-authentication/`
        }]
      })
    }}
></script>

# HTTP Basic Authentication

* * *

HTTP basic authentication represents a challenge and response mechanism to help the server make a request authentication from a client, passing the User ID and password in the URL as the standard HTTP "Authorization" header. 

For example: `https://username:password@www.example.com/example-page.php`

## Browser Support For HTTP Basic Authentication

* * *
HTTP authentication is incompatible among the majority of the web browser. It is supported by only Google Chrome and Mozilla Firefox.

| BROWSER | SUPPORT FOR BASIC HTTP AUTHENTICATION |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Google Chrome | Supported |
| Mozilla FireFox | Although supported, Mozilla Firefox may throw a prompt confirmation. Mozilla Firefox performs a check to evaluate whether basic HTTP authentication is mandatory to access the website. In cases, where it isn’t necessary, Firefox will throw a similar warning: "You are about to log in to the site "www.example.com" with the username "username", but the website does not require authentication. This may be an attempt to trick you." For more information, refer to the [MDN document](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). |
| Safari | Unsupported |
| Edge | Unsupported |
| Internet Explorer | Supported |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        HTTP Basic Authentication
      </span>
    </li>
  </ul>
</nav>