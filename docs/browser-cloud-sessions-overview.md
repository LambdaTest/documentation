---
id: browser-cloud-sessions-overview
title: Sessions Overview - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Understand the Sessions API
description: The Sessions API lets you create and control cloud-based browser sessions through simple SDK calls in TestMu AI Browser Cloud.
keywords:
  - browser cloud sessions
  - browser sessions api
  - cloud browser instance
  - ai agent browser session
  - websocket browser automation
url: https://www.testmuai.com/support/docs/browser-cloud-sessions-overview/
site_name: TestMu AI
slug: browser-cloud-sessions-overview/
canonical: https://www.testmuai.com/support/docs/browser-cloud-sessions-overview/
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
          "name": "Sessions Overview",
          "item": `${BRAND_URL}/support/docs/browser-cloud-sessions-overview/`
        }]
      })
    }}
></script>

# Understanding the Sessions API

The Sessions API lets you create and control cloud-based browser sessions
through simple SDK calls. Each session is like giving your AI agent its own
dedicated browser window, but running on <BrandName /> Browser Cloud and controlled
through your code.


## Sessions at a Glance

When you create a session, you get a fully isolated Chrome browser running in
<BrandName /> Browser Cloud that your code controls. Each browser has its own
state, cookies, and storage, so your AI agent can navigate the web, interact
with sites, and maintain context across multiple steps without interference
from other sessions.

Specifically, each session gives you:

1. A **session ID** to track and manage it
2. A **WebSocket URL** to connect your automation tool (Puppeteer, Playwright, or Selenium)
3. A **debug URL** to watch the session on the <BrandName /> dashboard
4. A **session viewer URL** for real-time streaming of the browser


## Before You Begin

If you have not set up your account and installed the SDK yet, [launch your first session](/support/docs/launch-first-session/) before working with sessions.


## How It Works

```
Your Agent                          TestMu AI Cloud
    │                                      │
    ├── client.sessions.create() ────────→ │  Spins up a real Chrome browser
    │                                      │  Returns session ID + WebSocket URL
    │                                      │
    ├── client.puppeteer.connect() ──────→ │  Your agent drives the browser
    │   page.goto(...)                     │  via WebSocket (CDP)
    │   page.click(...)                    │
    │   page.type(...)                     │
    │                                      │
    ├── browser.close() ─────────────────→ │  Browser disconnects
    │                                      │
    └── client.sessions.release() ───────→ │  Session cleaned up
                                           │  Resources freed
```

Your agent creates a session, connects to it using its preferred automation
library, does its work, and releases the session when done. That's the entire
lifecycle.




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
        Sessions Overview
      </span>
    </li>
  </ul>
</nav>
