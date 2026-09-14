---
id: browser-cloud-debugging
title: Debugging & Observability - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Replay and Debug Sessions
description: Watch, replay, and debug your agent's browser sessions with video recordings, console logs, and network capture.
keywords:
  - browser cloud debugging
  - session recording
  - browser cloud logs
  - session observability
  - troubleshooting browser cloud
url: https://www.testmuai.com/support/docs/browser-cloud-debugging/
site_name: TestMu AI
slug: browser-cloud-debugging/
canonical: https://www.testmuai.com/support/docs/browser-cloud-debugging/
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
          "name": "Debugging",
          "item": `${BRAND_URL}/support/docs/browser-cloud-debugging/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-debugging/"
    },
    "headline": "Debugging & Observability - TestMu AI Browser Cloud",
    "description": "Watch, replay, and debug your agent's browser sessions with video recordings, console logs, and network capture.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-debugging/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud debugging",
      "session recording",
      "browser cloud logs"
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
        "name": "Every session appears on the TestMu AI Web Automation Dashboard",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://automation.lambdatest.com/logs/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "This is especially helpful when running multiple agents or scenarios",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "const session = await client.sessions.create({\n    lambdatestOptions: {\n        build: 'Price Monitor Agent - v2.1',\n        name: 'Extract Competitor Pricing - Amazon',\n        'LT:Options': {\n            username: process.env.LT_USERNAME,\n            accessKey: process.env.LT_ACCESS_KEY,\n            video: true,     // Record video\n            console: true,   // Capture console logs,\n        }\n    }\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Every session provides URLs for viewing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "console.log(session.debugUrl);          // Dashboard URL for this session\nconsole.log(session.sessionViewerUrl);  // Live stream of the browser"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The SDK logs connection steps and actions to stdout",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Adapter: Connecting to session session_123_abc via Puppeteer...\nAdapter: Set stealth user-agent: Mozilla/5.0 (Windows NT 10.0...\nAdapter: Set stealth viewport: 1907x1063\nAdapter: Humanized interactions enabled\nAdapter: Loading profile my-app-login"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Common Issues",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Error: Timed out after 30000ms while waiting for the WebSocket"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Common Issues",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Session session_xyz not found"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Playwright requires Node.js 18 or higher."
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# Replay and Debug Sessions

Watch, replay, and troubleshoot your agent's browser sessions. Every session automatically records video, console logs, and network requests - accessible from the TestMu AI dashboard.


## Built-In Observability

When your agent runs at 3am and does something unexpected, you need to know
exactly what happened. Every session runs on TestMu AI's infrastructure,
which means every session automatically comes with video recordings, console
logs, and network request capture - no extra setup required.


## TestMu AI Web Automation Dashboard

Every session appears on the TestMu AI Web Automation Dashboard:

<VerifiedTag value="Verified" />

```
https://automation.lambdatest.com/logs/
```

From the dashboard you can:

- Watch **live video** of the browser as your agent interacts with it
- **Replay** recorded sessions after they complete
- View captured **console logs**
- Inspect **network requests**
- Review **screenshots**
- Check **test results** (pass/fail)


## Organizing Sessions

Use `build` and `name` in `lambdatestOptions` to organize sessions on the
dashboard. This is especially helpful when running multiple agents or scenarios:

<VerifiedTag value="Verified" />

```typescript
const session = await client.sessions.create({
    lambdatestOptions: {
        build: 'Price Monitor Agent - v2.1',
        name: 'Extract Competitor Pricing - Amazon',
        'LT:Options': {
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
            video: true,     // Record video
            console: true,   // Capture console logs,
        }
    }
});
```


## Debug URLs

Every session provides URLs for viewing:

<VerifiedTag value="Verified" />

```typescript
console.log(session.debugUrl);          // Dashboard URL for this session
console.log(session.sessionViewerUrl);  // Live stream of the browser
```


## SDK Console Output

The SDK logs connection steps and actions to stdout:

<VerifiedTag value="Verified" />

```
Adapter: Connecting to session session_123_abc via Puppeteer...
Adapter: Set stealth user-agent: Mozilla/5.0 (Windows NT 10.0...
Adapter: Set stealth viewport: 1907x1063
Adapter: Humanized interactions enabled
Adapter: Loading profile my-app-login
```


## Common Issues

Here are the most common issues and how to fix them.

**Connection Timeout**

<VerifiedTag value="Verified" />

```
Error: Timed out after 30000ms while waiting for the WebSocket
```

Causes: Invalid `LT_USERNAME` or `LT_ACCESS_KEY`, TestMu AI service outage,
or network firewall blocking WebSocket connections.

Fix: Verify your credentials, check the TestMu AI status page, try a different
network.


**Session Not Found**

<VerifiedTag value="Verified" />

```
Session session_xyz not found
```

Cause: Session was already released or timed out. The default timeout is 5
minutes.

Fix: Increase with `timeout: 600000` (10 minutes) in your session config.


**Playwright Requires Node 18+**

<VerifiedTag value="Verified" />

```
Playwright requires Node.js 18 or higher.
```

Fix: Upgrade Node.js with `nvm install 18 && nvm use 18`.


**Profile Not Loading**

Cause: On the first run, there's no saved profile yet.

Fix: This is normal. The profile is created when `browser.close()` is called.
Subsequent runs will load it.




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
        Debugging
      </span>
    </li>
  </ul>
</nav>
