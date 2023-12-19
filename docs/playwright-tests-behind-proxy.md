---
id: playwright-behind-proxy
title: Run Playwright Tests Behind The Proxy
hide_title: true
sidebar_label: Run Test Behind Proxy
description: Learn how to run Playwright test scripts on the LambdaTest platform if your system is behind a proxy or have a firewall configuration.
keywords:
- how do i run playwright tests through a proxy
- run playwright tests behind proxy
- run playwright tests behind firewall

url: https://www.lambdatest.com/support/docs/playwright-tests-behind-proxy/
site_name: LambdaTest
slug: playwright-tests-behind-proxy/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Run Playwright Tests Behind The Proxy",
          "item": "https://www.lambdatest.com/support/docs/playwright-tests-behind-proxy/"
        }]
      })
    }}
></script>

# Run Playwright Tests Behind The Proxy
***

If you are behind a corporate proxy, your Playwright script will not be able to access to the CDP endpoint of LambdaTest, which is invoked from within the `playwright.connect` method. To perform Playwright tests behind the proxy server, you'd need to make some additional tweaks on your end.

## Prerequisites
***

Below are the steps to enable Playwright testing on LambdaTest behind a proxy.

1. Install the `global-agent` npm package as a dev-dependency by running the following command.

```js
npm i --save-dev global-agent
```

2. Configure the environment variable with the correct `proxy-host`, `proxy-port` and `proxy credential` (if applicable). For example, in the below command, the `proxy-host` is 127.0.0.1, `proxy-port` is 8888, `proxy-username` is salmank, and `proxy-password` is demo9599.

```
export GLOBAL_AGENT_HTTP_PROXY=http://salmank:demo9599@127.0.0.1:8888
```

## Playwright Testing Behind The Proxy On LambdaTest
***

Shown below is the test script that uses the `global0-agent` npm package and invokes bootstrap() to handle proxy and ensure that the test runs without a hitch.

```
To be added
```

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Run Playwright Tests Behind The Proxy
      </span>
    </li>
  </ul>
</nav>






