---
id: browser-cloud-tunnel
title: Tunnel - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Access Localhost and Internal Networks
description: Access localhost and internal networks from cloud browsers in TestMu AI Browser Cloud.
keywords:
  - browser cloud tunnel
  - localhost cloud browser
  - encrypted tunnel
  - internal network access
  - vpn cloud browser
url: https://www.testmuai.com/support/docs/browser-cloud-tunnel/
site_name: TestMu AI
slug: browser-cloud-tunnel/
canonical: https://www.testmuai.com/support/docs/browser-cloud-tunnel/
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
          "name": "Browser Cloud",
          "item": `${BRAND_URL}/support/docs/what-is-browser-cloud/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Tunnel",
          "item": `${BRAND_URL}/support/docs/browser-cloud-tunnel/`
        }]
      })
    }}
></script>

# Access Localhost and Internal Networks Using Tunnel

Create encrypted tunnels between your local machine and Browser Cloud. Let cloud browsers reach localhost dev servers, staging environments, and private network resources.


## Why You Need This

Your cloud browser can only reach public URLs by default. But your agent may need to access localhost, staging servers, or internal tools. For example:

- Test a local development server before deploying
- Access a staging environment behind a corporate VPN
- Interact with internal tools and dashboards
- Work with a local API backend

The Tunnel Service solves this by creating an encrypted connection between your local machine and <BrandName />'s cloud infrastructure. Once the tunnel is running, your <BrandName /> Browser Cloud sessions can reach any URL that your machine can reach - including `localhost`, private IPs, and internal hostnames.

```
Cloud Browser --(encrypted tunnel)--> Your Machine --> localhost:3000
                                                   --> staging.internal.company.com
                                                   --> 192.168.1.50:8080
```


## Automatic Tunnel (Recommended)

The easiest approach. Set `tunnel: true` in your session config and the
TestMu AI Browser SDK handles starting and routing the tunnel automatically:

```typescript
const session = await client.sessions.create({
    adapter: 'puppeteer',
    tunnel: true,
    tunnelName: 'my-tunnel',   // Optional: name for identification
    lambdatestOptions: { ... }
});

const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

await page.goto('http://localhost:3000');  // This works!
```

If you set `tunnel: true` without a `tunnelName`, the SDK auto-generates a name
and starts the tunnel for you.


## Manual Tunnel

For more control - for example, starting the tunnel once and reusing it across
multiple sessions:

```typescript
// Start the tunnel
await client.tunnel.start({
    user: process.env.LT_USERNAME!,
    key: process.env.LT_ACCESS_KEY!,
    tunnelName: 'my-tunnel',
});

console.log('Tunnel running:', client.tunnel.getStatus()); // true

// Create sessions that use it
const session = await client.sessions.create({
    adapter: 'puppeteer',
    tunnel: true,
    tunnelName: 'my-tunnel',
    lambdatestOptions: { ... }
});

// ... agent work ...

// Stop when done
await client.tunnel.stop();
```


## Tunnel Config

```typescript
interface TunnelConfig {
    user: string;           // TestMu AI username
    key: string;            // TestMu AI access key
    tunnelName?: string;    // Named tunnel for identification
    proxyHost?: string;     // Corporate proxy host
    proxyPort?: string;     // Corporate proxy port
    proxyUser?: string;     // Proxy auth user
    proxyPass?: string;     // Proxy auth password
    logFile?: string;       // Log file path
}
```


## API

```typescript
await client.tunnel.start(config);   // Start tunnel
await client.tunnel.stop();          // Stop tunnel
client.tunnel.getStatus();           // Returns true/false
```


## How It Works

The Tunnel Service uses the `@lambdatest/node-tunnel` package to create a
binary tunnel connection to <BrandName /> infrastructure. The tunnel name is passed
as a <BrandName /> capability so cloud browsers know to route their traffic through
your local machine.



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
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="/support/docs/what-is-browser-cloud/">
        Browser Cloud
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Tunnel
      </span>
    </li>
  </ul>
</nav>
