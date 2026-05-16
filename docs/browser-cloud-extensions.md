---
id: browser-cloud-extensions
title: Extensions - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Load Chrome Extensions
description: Load Chrome extensions into TestMu AI Browser Cloud sessions.
keywords:
  - browser cloud extensions
  - chrome extensions cloud
  - browser extension automation
  - load extensions cloud browser
url: https://www.testmuai.com/support/docs/browser-cloud-extensions/
site_name: TestMu AI
slug: browser-cloud-extensions/
canonical: https://www.testmuai.com/support/docs/browser-cloud-extensions/
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
          "name": "Extensions",
          "item": `${BRAND_URL}/support/docs/browser-cloud-extensions/`
        }]
      })
    }}
></script>

# Load Chrome Extensions

Install Chrome extensions into cloud browser sessions so they behave identically to local browsers with your required extensions.


## Overview

Your agent workflow depends on a Chrome extension - an ad blocker, a cookie manager, or a custom tool your team built. Without it, the browser behaves differently and your automation may not work as expected.

The Extension Service solves this by letting you register Chrome extensions and inject them into <BrandName /> Browser Cloud sessions. You provide a cloud-hosted URL (S3) for each extension, and <BrandName /> downloads and installs it into the browser instance when the session starts. Your cloud sessions behave the same way as your local browser.

:::note Before You Begin
Your extension must be hosted at a cloud URL (such as an S3 bucket) before you can register it. See [Current Limitations](#current-limitations) for details on what is supported today.
:::


## Loading Extensions into a Session

First, register an extension. Then pass its ID when creating a session:

```typescript
// Step 1: Register (one time)
const ext = await client.extensions.register({
    name: 'My Extension',
    version: '1.0.0',
    cloudUrl: 'https://s3.amazonaws.com/bucket/extension.zip',
});

// Step 2: Load into sessions
const session = await client.sessions.create({
    adapter: 'puppeteer',
    extensionIds: [ext.id],    // Pass registered extension IDs
    lambdatestOptions: { ... }
});
```

When `extensionIds` are provided, the session manager fetches the cloud URLs
and adds them to <BrandName /> capabilities as `lambda:loadExtension`.


## Managing Extensions

```typescript
const extensions = await client.extensions.list();

const ext = await client.extensions.get('ext_abc123');

await client.extensions.delete('ext_abc123');
```


## Extension Object

```typescript
interface Extension {
    id: string;
    name: string;
    version: string;
    description?: string;
    enabled: boolean;
    createdAt: string;
    cloudUrl?: string;     // S3 URL
    localPath?: string;    // Local file path
}
```

## Supported Formats

- `.zip` archives containing Chrome extension files
- `.crx` Chrome extension packages


## Current Limitations

- Extension upload to S3 must be done manually (via curl, AWS CLI, or your upload pipeline)
- The automated upload API through <BrandName /> is not yet integrated
- Extensions only work with cloud sessions



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
        Extensions
      </span>
    </li>
  </ul>
</nav>
