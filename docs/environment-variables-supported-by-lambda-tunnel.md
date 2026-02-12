---
id: environment-variables-supported-by-lambda-tunnel
title: Environment Variables Supported By TestMu AI Tunnel
hide_title: true
sidebar_label: Environment Variables Supported By TestMu AI Tunnel
description: Now you can access the TestMu AI tunnel through a proxy tunnel and leverage the environment variables to define your proxy settings. If these proxy environment variables are set then the tunnel will automatically detect them.
keywords:
  - TestMu AI automation
  - TestMu AI environment variables
  - TestMu AI setup
  - TestMu AI tunnel
url: https://www.testmuai.com/support/docs/environment-variables-supported-by-lambda-tunnel/
site_name: TestMu AI
slug: environment-variables-supported-by-lambda-tunnel/
canonical: https://www.testmuai.com/support/docs/environment-variables-supported-by-lambda-tunnel/
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
          "name": "Environment Variable",
          "item": `${BRAND_URL}/support/docs/environment-variables-supported-by-lambda-tunnel/`
        }]
      })
    }}
></script>

# Environment Variables Supported By <BrandName /> Tunnel

---

You can leverage these environment variables to define your proxy settings. If these proxy environment variables are set then the tunnel will automatically detect them. You can switch command-line flags through an environment variable or <b>.lt.yaml</b>==$0 file with the <BrandName /> tunnel.
To configure the <b>.lt.yaml</b>, you can refer to the section [Leverage .lt.yaml file](/docs/advanced-tunnel-features/#leverage-ltyaml-file) of the documentation [Advanced <BrandName /> Tunnel Features](/docs/advanced-tunnel-features/).

### What are Environment Variables?

---

Environment variables can be used in place of command-line flags. Each operating system has its compatibility in terms of environment variables. Command-line flags restrict environment variables from being bypassed. When available, the command-line flags always take priority.

Below is the following list of environment variables used by the <BrandName /> Tunnel

| ENVIRONMENT VARIABLE               | DESCRIPTION                                                                                               | OPERATING SYSTEM                |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `http_proxy`<br />`HTTP_PROXY`     | <BrandName /> tunnel uses the HTTP proxy `http://hostname:port`                                              | Windows, Mac OS, Linux          |
| `https_proxy`<br />`HTTPS_PROXY`   | <BrandName /> tunnel uses the HTTPS proxy `https://hostname:port`                                            | Windows, Mac OS, Linux          |
| `no_proxy`<br />`NO_PROXY`         | Comma separated list of hosts to bypass proxy when using tunnel. Wild cards is supported for sub-domains. | Windows, Mac OS, Linux          |
| `LT_USERNAME`<br />`LT_ACCESS_KEY` | <BrandName /> Username<br /><BrandName /> Access Key                                                            | Windows, Mac OS, Linux, FreeBSD |

That was all you need to know for <BrandName /> tunnel proxies. In case you have any questions, feel free to share them with us. Our experts are available on <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. You can also drop us a mail at **[support@testmu.ai](mailto:support@testmu.ai)**. Happy testing! 🙂

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
        Environment Variable
      </span>
    </li>
  </ul>
</nav>
