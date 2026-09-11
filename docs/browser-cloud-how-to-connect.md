---
id: browser-cloud-how-to-connect
title: How to Connect to TestMu AI Browser Cloud
hide_title: true
sidebar_label: Set Up the SDK
description: Connect your agents to TestMu AI Browser Cloud using the TestMu AI Browser SDK.
keywords:
  - browser cloud connection
  - browser cloud sdk
  - browser cloud api
  - ai agent integration
  - browser automation sdk
url: https://www.testmuai.com/support/docs/browser-cloud-sdk-setup/
site_name: TestMu AI
slug: browser-cloud-sdk-setup/
canonical: https://www.testmuai.com/support/docs/browser-cloud-sdk-setup/
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
          "name": "Browser Cloud - How to Connect",
          "item": `${BRAND_URL}/support/docs/browser-cloud-sdk-setup/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-sdk-setup/"
    },
    "headline": "How to Connect to TestMu AI Browser Cloud",
    "description": "Connect your agents to TestMu AI Browser Cloud using the TestMu AI Browser SDK.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-sdk-setup/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "browser cloud connection",
      "browser cloud sdk",
      "browser cloud api"
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
        "name": "What you need to get started",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @testmuai/testmu-cloud"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Initialize the Client",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "import { Browser } from '@testmuai/testmu-cloud';\nconst client = new Browser();"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# Set Up the Browser SDK
***

The TestMu AI Browser SDK is the primary way to integrate your agents with <BrandName /> Browser Cloud. It handles session creation, browser connections, stealth, profiles, and more from a single Node.js client.

## TestMu AI Browser SDK
***

The TestMu AI Browser SDK is the fastest way to get your agents into the Browser
Cloud. It gives you full programmatic control over sessions, adapters, stealth,
profiles, files, extensions, and tunnels directly from your Node.js application.

### What you need to get started
***

- **Node.js 16+** installed on your machine
- Install the SDK:

```bash
npm install @testmuai/testmu-cloud
```

### Initialize the Client
***

From here, you can create sessions, configure stealth mode, manage profiles,
upload files, load extensions, and open tunnels - all through a single client
instance.

<VerifiedTag value="Verified" />

```typescript
import { Browser } from '@testmuai/testmu-cloud';
const client = new Browser();
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
        How to Connect
      </span>
    </li>
  </ul>
</nav>
