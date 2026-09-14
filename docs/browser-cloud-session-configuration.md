---
id: browser-cloud-session-configuration
title: Session Configuration - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Configure Session Options
description: Complete reference for all options available when creating a session with the TestMu AI Browser SDK.
keywords:
  - browser cloud configuration
  - session options
  - stealth config
  - browser cloud settings
  - session create options
url: https://www.testmuai.com/support/docs/browser-cloud-session-configuration/
site_name: TestMu AI
slug: browser-cloud-session-configuration/
canonical: https://www.testmuai.com/support/docs/browser-cloud-session-configuration/
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
          "name": "Session Configuration",
          "item": `${BRAND_URL}/support/docs/browser-cloud-session-configuration/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-session-configuration/"
    },
    "headline": "Session Configuration - TestMu AI Browser Cloud",
    "description": "Complete reference for all options available when creating a session with the TestMu AI Browser SDK.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-session-configuration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud configuration",
      "session options",
      "stealth config"
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
        "name": "Here is a typical create call that sets the most common options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const session = await client.sessions.create({\n  adapter: 'playwright',\n  dimensions: { width: 1920, height: 1080 },\n  blockAds: true,\n  stealthConfig: {\n    humanizeInteractions: true,\n    randomizeUserAgent: true,\n  },\n  proxy: 'http://my-proxy:8080',\n  lambdatestOptions: {\n    build: 'my-build',\n    name: 'my-test',\n    user: process.env.LT_USERNAME,\n    accessKey: process.env.LT_ACCESS_KEY,\n  },\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After creation, you receive a Session object with these fields",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "interface Session {\n    id: string;                    // Unique session ID\n    websocketUrl: string;          // WebSocket URL for adapter connection\n    debugUrl: string;              // TestMu AI dashboard URL\n    config: SessionConfig;         // Original configuration\n    status: 'live' | 'released' | 'failed';\n    createdAt: string;             // ISO timestamp\n    timeout: number;               // Session timeout in ms\n    dimensions: Dimensions;        // Viewport dimensions\n    sessionViewerUrl?: string;     // Live session viewer URL\n    userAgent?: string;            // Resolved user-agent\n    stealthConfig?: StealthConfig; // Active stealth settings\n}"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# Configure Session Options

Complete reference for all options available when creating a session with the TestMu AI Browser SDK. Use these to control stealth, persistence, browser settings, network, and extensions.

When you call `client.sessions.create()`, you can pass these options to
configure the session's behavior, browser settings, and capabilities.

## Quick Example

Here is a typical `create` call that sets the most common options:

<VerifiedTag value="Verified" />

```javascript
const session = await client.sessions.create({
  adapter: 'playwright',
  dimensions: { width: 1920, height: 1080 },
  blockAds: true,
  stealthConfig: {
    humanizeInteractions: true,
    randomizeUserAgent: true,
  },
  proxy: 'http://my-proxy:8080',
  lambdatestOptions: {
    build: 'my-build',
    name: 'my-test',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
  },
});
```

The sections below describe every available option in detail.

## Required Options

| Option | Type | Description |
|--------|------|----------------|
| `adapter` | `'puppeteer' \| 'playwright' \| 'selenium'` | Which automation library to use |
| `lambdatestOptions` | `object` | <BrandName /> capabilities (build name, test name, credentials) |

## Stealth Options

| Option | Type | Default | Description |
|--------|------|---------|----------------|
| `stealthConfig.humanizeInteractions` | `boolean` | `false` | Add random delays to clicks and typing |
| `stealthConfig.randomizeUserAgent` | `boolean` | `true` | Pick random user-agent from pool |
| `stealthConfig.randomizeViewport` | `boolean` | `true` | Add ±20px jitter to viewport |
| `stealthConfig.skipFingerprintInjection` | `boolean` | `false` | Disable all stealth |

→ Learn more: [Avoid bot detection with Stealth Mode](/support/docs/browser-cloud-stealth/)

## Persistence Options

| Option | Type | Description |
|--------|------|----------------|
| `profileId` | `string` | Load/save persistent browser profile |
| `sessionContext` | `SessionContext` | Pre-load cookies, localStorage, sessionStorage |


## Browser Options

| Option | Type | Default | Description |
|--------|------|---------|----------------|
| `dimensions` | `{ width, height }` | - | Browser viewport size |
| `userAgent` | `string` | - | Custom user-agent string |
| `headless` | `boolean` | - | Run in headless mode |
| `timeout` | `number` | `300000` | Session timeout in ms (5 min) |
| `blockAds` | `boolean` | - | Block advertisements |
| `solveCaptcha` | `boolean` | - | Enable CAPTCHA solving |

## Network Options

| Option | Type | Description |
|--------|------|----------------|
| `proxy` | `string` | Proxy URL |
| `geoLocation` | `string` | Geolocation code (e.g. `'US'`, `'IN'`) |
| `tunnel` | `boolean` | Enable <BrandName /> tunnel |
| `tunnelName` | `string` | Named tunnel identifier |
| `region` | `string` | <BrandName /> data center region |
| `optimizeBandwidth` | `boolean \| config` | Block images/media/styles |


## Extension Options

| Option | Type | Description |
|--------|------|----------------|
| `extensionIds` | `string[]` | Chrome extension IDs to load |



## Session Object

After creation, you receive a Session object with these fields:

<VerifiedTag value="Verified" />

```typescript
interface Session {
    id: string;                    // Unique session ID
    websocketUrl: string;          // WebSocket URL for adapter connection
    debugUrl: string;              // TestMu AI dashboard URL
    config: SessionConfig;         // Original configuration
    status: 'live' | 'released' | 'failed';
    createdAt: string;             // ISO timestamp
    timeout: number;               // Session timeout in ms
    dimensions: Dimensions;        // Viewport dimensions
    sessionViewerUrl?: string;     // Live session viewer URL
    userAgent?: string;            // Resolved user-agent
    stealthConfig?: StealthConfig; // Active stealth settings
}
```



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
        Session Configuration
      </span>
    </li>
  </ul>
</nav>
