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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-sessions-overview/"
    },
    "headline": "Sessions Overview - TestMu AI Browser Cloud",
    "description": "The Sessions API lets you create and control cloud-based browser sessions through simple SDK calls in TestMu AI Browser Cloud.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-sessions-overview/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud sessions",
      "browser sessions api",
      "cloud browser instance"
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
        "name": "How It Works",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Your Agent                          TestMu AI Cloud\n    \u2502                                      \u2502\n    \u251c\u2500\u2500 client.sessions.create() \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2192 \u2502  Spins up a real Chrome browser\n    \u2502                                      \u2502  Returns session ID + WebSocket URL\n    \u2502                                      \u2502\n    \u251c\u2500\u2500 client.puppeteer.connect() \u2500\u2500\u2500\u2500\u2500\u2500\u2192 \u2502  Your agent drives the browser\n    \u2502   page.goto(...)                     \u2502  via WebSocket (CDP)\n    \u2502   page.click(...)                    \u2502\n    \u2502   page.type(...)                     \u2502\n    \u2502                                      \u2502\n    \u251c\u2500\u2500 browser.close() \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2192 \u2502  Browser disconnects\n    \u2502                                      \u2502\n    \u2514\u2500\u2500 client.sessions.release() \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2192 \u2502  Session cleaned up\n                                           \u2502  Resources freed"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

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
