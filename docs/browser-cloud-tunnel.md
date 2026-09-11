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
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-tunnel/"
    },
    "headline": "Tunnel - TestMu AI Browser Cloud",
    "description": "Access localhost and internal networks from cloud browsers in TestMu AI Browser Cloud.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-tunnel/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud tunnel",
      "localhost cloud browser",
      "encrypted tunnel"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "For example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Cloud Browser --(encrypted tunnel)--> Your Machine --> localhost:3000\n                                                   --> staging.internal.company.com\n                                                   --> 192.168.1.50:8080"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI Browser SDK handles starting and routing the tunnel automatically",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "const session = await client.sessions.create({\n    adapter: 'puppeteer',\n    tunnel: true,\n    tunnelName: 'my-tunnel',   // Optional: name for identification\n    lambdatestOptions: { ... }\n});\n\nconst browser = await client.puppeteer.connect(session);\nconst page = (await browser.pages())[0];\n\nawait page.goto('http://localhost:3000');  // This works!"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "multiple sessions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Start the tunnel\nawait client.tunnel.start({\n    user: process.env.LT_USERNAME!,\n    key: process.env.LT_ACCESS_KEY!,\n    tunnelName: 'my-tunnel',\n});\n\nconsole.log('Tunnel running:', client.tunnel.getStatus()); // true\n\n// Create sessions that use it\nconst session = await client.sessions.create({\n    adapter: 'puppeteer',\n    tunnel: true,\n    tunnelName: 'my-tunnel',\n    lambdatestOptions: { ... }\n});\n\n// ... agent work ...\n\n// Stop when done\nawait client.tunnel.stop();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Tunnel Config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "interface TunnelConfig {\n    user: string;           // TestMu AI username\n    key: string;            // TestMu AI access key\n    tunnelName?: string;    // Named tunnel for identification\n    proxyHost?: string;     // Corporate proxy host\n    proxyPort?: string;     // Corporate proxy port\n    proxyUser?: string;     // Proxy auth user\n    proxyPass?: string;     // Proxy auth password\n    logFile?: string;       // Log file path\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "API",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "await client.tunnel.start(config);   // Start tunnel\nawait client.tunnel.stop();          // Stop tunnel\nclient.tunnel.getStatus();           // Returns true/false"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
