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
          "name": "Extensions",
          "item": `${BRAND_URL}/support/docs/browser-cloud-extensions/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-extensions/"
    },
    "headline": "Extensions - TestMu AI Browser Cloud",
    "description": "Load Chrome extensions into TestMu AI Browser Cloud sessions.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-extensions/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud extensions",
      "chrome extensions cloud",
      "browser extension automation"
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
        "name": "Then pass its ID when creating a session",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Step 1: Register (one time)\nconst ext = await client.extensions.register({\n    name: 'My Extension',\n    version: '1.0.0',\n    cloudUrl: 'https://s3.amazonaws.com/bucket/extension.zip',\n});\n\n// Step 2: Load into sessions\nconst session = await client.sessions.create({\n    adapter: 'puppeteer',\n    extensionIds: [ext.id],    // Pass registered extension IDs\n    lambdatestOptions: { ... }\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Managing Extensions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "const extensions = await client.extensions.list();\n\nconst ext = await client.extensions.get('ext_abc123');\n\nawait client.extensions.delete('ext_abc123');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Extension Object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "interface Extension {\n    id: string;\n    name: string;\n    version: string;\n    description?: string;\n    enabled: boolean;\n    createdAt: string;\n    cloudUrl?: string;     // S3 URL\n    localPath?: string;    // Local file path\n}"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```typescript
const extensions = await client.extensions.list();

const ext = await client.extensions.get('ext_abc123');

await client.extensions.delete('ext_abc123');
```


## Extension Object

<VerifiedTag value="Verified" />

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
