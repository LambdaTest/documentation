---
id: browser-cloud-api-reference
title: API Reference - TestMu AI Browser Cloud
hide_title: true
sidebar_label: API Reference
description: REST API reference for TestMu AI Browser Cloud. Planned endpoints for sessions, context, profiles, files, extensions, quick actions, and tunnels.
keywords:
  - browser cloud api
  - rest api browser cloud
  - browser cloud endpoints
  - api reference
url: https://www.testmuai.com/support/docs/browser-cloud-api-reference/
site_name: TestMu AI
slug: browser-cloud-api-reference/
canonical: https://www.testmuai.com/support/docs/browser-cloud-api-reference/
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
          "name": "API Reference",
          "item": `${BRAND_URL}/support/docs/browser-cloud-api-reference/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-api-reference/"
    },
    "headline": "API Reference - TestMu AI Browser Cloud",
    "description": "REST API reference for TestMu AI Browser Cloud. Planned endpoints for sessions, context, profiles, files, extensions, quick actions, and tunnels.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-api-reference/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud api",
      "rest api browser cloud",
      "browser cloud endpoints"
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
        "name": "Planned Endpoints",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Sessions\n  POST   /v1/sessions              Create a session\n  GET    /v1/sessions              List sessions\n  GET    /v1/sessions/:id          Get session details\n  GET    /v1/sessions/:id/live     Get live session details\n  DELETE /v1/sessions/:id          Release a session\n  DELETE /v1/sessions              Release all sessions\n\nContext\n  GET    /v1/sessions/:id/context          Get full context\n  PUT    /v1/sessions/:id/context          Set full context\n  GET    /v1/sessions/:id/context/cookies  Get cookies\n  PUT    /v1/sessions/:id/context/cookies  Set cookies\n  DELETE /v1/sessions/:id/context          Clear context\n\nProfiles\n  GET    /v1/profiles              List profiles\n  POST   /v1/profiles              Create/save profile\n  GET    /v1/profiles/:id          Get profile\n  PUT    /v1/profiles/:id          Update profile\n  DELETE /v1/profiles/:id          Delete profile\n\nFiles\n  POST   /v1/sessions/:id/files           Upload file\n  GET    /v1/sessions/:id/files           List files\n  GET    /v1/sessions/:id/files/:path     Download file\n  GET    /v1/sessions/:id/files/archive   Download all (zip)\n  DELETE /v1/sessions/:id/files/:path     Delete file\n  DELETE /v1/sessions/:id/files           Delete all files\n\nExtensions\n  POST   /v1/extensions            Register extension\n  GET    /v1/extensions            List extensions\n  GET    /v1/extensions/:id        Get extension\n  DELETE /v1/extensions/:id        Delete extension\n\nQuick Actions\n  POST   /v1/scrape               Scrape a URL\n  POST   /v1/screenshot           Screenshot a URL\n  POST   /v1/pdf                  Generate PDF from URL\n\nTunnel\n  POST   /v1/tunnel/start         Start tunnel\n  POST   /v1/tunnel/stop          Stop tunnel\n  GET    /v1/tunnel/status        Get tunnel status"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# API Reference (Coming Soon)

The REST API will expose all TestMu AI Browser SDK capabilities over HTTP, making
<BrandName /> Browser Cloud accessible from any programming language. In the meantime, the [TestMu AI Browser SDK quickstart](/support/docs/launch-first-session/) provides full access to all these capabilities from Node.js.

Here's a preview of the planned endpoint structure:

## Planned Endpoints

```
Sessions
  POST   /v1/sessions              Create a session
  GET    /v1/sessions              List sessions
  GET    /v1/sessions/:id          Get session details
  GET    /v1/sessions/:id/live     Get live session details
  DELETE /v1/sessions/:id          Release a session
  DELETE /v1/sessions              Release all sessions

Context
  GET    /v1/sessions/:id/context          Get full context
  PUT    /v1/sessions/:id/context          Set full context
  GET    /v1/sessions/:id/context/cookies  Get cookies
  PUT    /v1/sessions/:id/context/cookies  Set cookies
  DELETE /v1/sessions/:id/context          Clear context

Profiles
  GET    /v1/profiles              List profiles
  POST   /v1/profiles              Create/save profile
  GET    /v1/profiles/:id          Get profile
  PUT    /v1/profiles/:id          Update profile
  DELETE /v1/profiles/:id          Delete profile

Files
  POST   /v1/sessions/:id/files           Upload file
  GET    /v1/sessions/:id/files           List files
  GET    /v1/sessions/:id/files/:path     Download file
  GET    /v1/sessions/:id/files/archive   Download all (zip)
  DELETE /v1/sessions/:id/files/:path     Delete file
  DELETE /v1/sessions/:id/files           Delete all files

Extensions
  POST   /v1/extensions            Register extension
  GET    /v1/extensions            List extensions
  GET    /v1/extensions/:id        Get extension
  DELETE /v1/extensions/:id        Delete extension

Quick Actions
  POST   /v1/scrape               Scrape a URL
  POST   /v1/screenshot           Screenshot a URL
  POST   /v1/pdf                  Generate PDF from URL

Tunnel
  POST   /v1/tunnel/start         Start tunnel
  POST   /v1/tunnel/stop          Stop tunnel
  GET    /v1/tunnel/status        Get tunnel status
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
        API Reference
      </span>
    </li>
  </ul>
</nav>
