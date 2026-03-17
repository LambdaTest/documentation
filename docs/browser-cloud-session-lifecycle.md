---
id: browser-cloud-session-lifecycle
title: Session Lifecycle - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Handle Session Lifecycle
description: How sessions are created, managed, and released in TestMu AI Browser Cloud.
keywords:
  - browser cloud session lifecycle
  - session states
  - session timeout
  - release session
  - browser session management
url: https://www.testmuai.com/support/docs/browser-cloud-session-lifecycle/
site_name: TestMu AI
slug: browser-cloud-session-lifecycle/
canonical: https://www.testmuai.com/support/docs/browser-cloud-session-lifecycle/
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
          "name": "Session Lifecycle",
          "item": `${BRAND_URL}/support/docs/browser-cloud-session-lifecycle/`
        }]
      })
    }}
></script>

# Handle Session Lifecycle

Learn how sessions move from creation to release, and how to manage timeouts and cleanup.
Understanding the session lifecycle helps you avoid leaked sessions, reduce wasted resources, and ensure clean recordings on your dashboard.


## Session States

Every session passes through a simple set of states during its lifetime:

```
create() ──→ live ──→ released
                 └──→ failed
```

**Live.** The session has been created and is ready for connections. Your agent
can connect, navigate, and interact with the browser. The session stays in this
state until you release it or it times out.

**Released.** The session has been explicitly released by your code, or it
reached its timeout. The browser is closed, resources are freed, and the
recording is saved to the <BrandName /> dashboard.

**Failed.** Something went wrong - a crash, connection loss, or infrastructure
error. Failed sessions are automatically cleaned up.


## Session Timeout

Every session has a timeout that defines how long it stays alive. The default is
**5 minutes** (300,000 ms). After this time, the session is automatically
released whether your agent is still using it or not.

You can adjust the timeout when creating a session:

```typescript
const session = await client.sessions.create({
    adapter: 'puppeteer',
    timeout: 600000,  // 10 minutes
    lambdatestOptions: { ... }
});
```

For quick scrapes, the default 5 minutes is usually enough. For multi-step
workflows where your agent navigates through several pages, you may want
10–30 minutes.


## Releasing Sessions

When your agent is done, release the session explicitly. This frees resources
immediately and ensures a clean recording on the dashboard:

```typescript
// Release a single session
await client.sessions.release(session.id);
```

If your agent manages multiple sessions in parallel, you can release all of
them at once:

```typescript
// Release all active sessions
await client.sessions.releaseAll();
```


## Listing and Retrieving Sessions

You can check which sessions are currently active and retrieve details about any
specific session:

```typescript
// List all active sessions
const sessions = client.sessions.list();

// Get details of a specific session
const session = client.sessions.retrieve('session_12345_abc');
```


## Live Session Details

While a session is running, you can get real-time information about it:

```typescript
const details = await client.sessions.liveDetails(session.id);

console.log(details.pages);            // Currently open pages/tabs
console.log(details.wsUrl);            // WebSocket URL
console.log(details.sessionViewerUrl); // Live viewer URL
```


## Best Practices

**Always release sessions when done.** Don't rely on timeouts alone - they
exist as a safety net, not as your primary cleanup mechanism:

```typescript
const session = await client.sessions.create({ ... });
try {
    const browser = await client.puppeteer.connect(session);
    // ... your agent's work ...
    await browser.close();
} finally {
    await client.sessions.release(session.id);
}
```

**Use `releaseAll()` in your shutdown handler.** If your agent process crashes,
you want to make sure no sessions are left running:

```typescript
process.on('SIGINT', async () => {
    await client.sessions.releaseAll();
    process.exit(0);
});
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
        Session Lifecycle
      </span>
    </li>
  </ul>
</nav>
