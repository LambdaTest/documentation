---
id: espresso-mockwebserver-localhost
title: Testing with MockWebServer & Localhost
sidebar_label: MockWebServer & Localhost
description: Test applications using MockWebServer or localhost-based mock servers with Espresso on TestMu AI real devices.
keywords:
  - espresso
  - mockwebserver
  - localhost testing
  - port forwarding
  - mock server
  - real devices
url: https://www.testmuai.com/support/docs/espresso-mockwebserver-localhost/
site_name: TestMu AI
slug: espresso-mockwebserver-localhost/
canonical: https://www.testmuai.com/support/docs/espresso-mockwebserver-localhost/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "MockWebServer & Localhost",
          "item": `${BRAND_URL}/support/docs/espresso-mockwebserver-localhost/`
        }]
      })
    }}
></script>

<BrandName /> supports testing apps that use MockWebServer or similar localhost-based mock servers in Android Espresso tests.

## Why Special Configuration is Needed

When network capture (`network: true`) is enabled, HTTP requests from the device route through proxy. Localhost requests fail because the proxy runs on the host machine, not the device — so `http://localhost:{port}` resolves to the host's localhost instead of the device's.

Platform provides two solutions: **Localhost Bypass** and **Port Forwarding**.

## Option 1: Localhost Bypass

Works when network is set to `true` and application uses standard HTTP libraries.Localhost network calls will not be captured.

```json
{
  "app": "lt://APP_ID",
  "testSuite": "lt://TESTSUITE_ID",
  "device": ["Galaxy S21-12", "Pixel 6-13"],
  "build": "MockWebServer Test",
  "network": true,
  "localhost": true
}
```

| Capability | Data Type | Description |
|------------|-----------|-------------|
| `localhost` | Boolean | Bypass proxy for `localhost`/`127.0.0.1` requests. Default: `false` |

### Supported HTTP Libraries

| Library | Notes |
|---------|-------|
| **Java HttpURLConnection** | `URL.openConnection()` is intercepted |
| **OkHttp** | `proxy()` and `proxySelector()` are intercepted |
| **Retrofit** | Uses OkHttp internally |
| **Volley** | Uses HttpURLConnection internally |

:::note Requirements
- `network: true` is required for `localhost: true` to work.
- `localhost` capability cannot be used together with `portForwarding`.
- Supported only on real android devices right now.

## Option 2: Port Forwarding

Best when localhost network logs need to be captured and there are no port conflicts.

```json
{
  "app": "lt://APP_ID",
  "testSuite": "lt://TESTSUITE_ID",
  "device": ["Galaxy S21-12", "Pixel 6-13"],
  "build": "MockWebServer Test",
  "network": true,
  "portForwarding": {
    "ports": [9091, 9092]
  }
}
```

| Capability | Data Type | Description |
|------------|-----------|-------------|
| `portForwarding` | Object | Configure port forwarding for localhost services on the device |
| `portForwarding.ports` | Array | Ports to forward (max 5 unique ports, must be 1024–65535) |

Port forwarding works at the network level, so **all HTTP libraries are supported**.

:::note
- Ports must be in the range 1024–65535. Privileged ports (1–1023) are blocked.
- Maximum 5 unique ports. No duplicate ports allowed.
- Invalid port formats (e.g., strings like `"abc"`) are rejected.
- Cannot be used together with `localhost`.
- `network: true` is **not** required for port forwarding — it works independently.
:::


## Troubleshooting

- **Connection errors** — Ensure `network: true` is set when using `localhost: true`. For `portForwarding`, `network: true` is optional.
- **Cannot use localhost and portForwarding together** — These are mutually exclusive. Pick one.
- **Port validation errors** — Ports must be 1024–65535, max 5 unique ports, no duplicates allowed.

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
        MockWebServer & Localhost
      </span>
    </li>
  </ul>
</nav>
