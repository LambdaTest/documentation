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
