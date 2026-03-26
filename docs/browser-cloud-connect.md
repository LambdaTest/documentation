---
id: browser-cloud-connect
title: Connect to a Session - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Connect to a Session
description: Drive TestMu AI Browser Cloud sessions using Puppeteer, Playwright, or Selenium.
keywords:
  - browser cloud connect
  - puppeteer cloud browser
  - playwright cloud browser
  - selenium cloud browser
  - browser automation adapter
url: https://www.testmuai.com/support/docs/connect-to-session/
site_name: TestMu AI
slug: connect-to-session/
canonical: https://www.testmuai.com/support/docs/connect-to-session/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Connect",
          "item": `${BRAND_URL}/support/docs/connect-to-session/`
        }]
      })
    }}
></script>

# Connect to a Session

Connect to a cloud browser session and control it with Puppeteer, Playwright, or Selenium. All three adapters connect to the same <BrandName /> Browser Cloud infrastructure - pick the one that matches your existing test framework.

| | Puppeteer | Playwright | Selenium |
|---|---|---|---|
| **Connection** | WebSocket (CDP) | WebSocket (CDP) | HTTP (WebDriver) |
| **Stealth** | Best | Good | Coming Soon |
| **Return type** | `Browser` | `{ browser, context, page }` | `WebDriver` |
| **Humanized interactions** | `click`, `type` | `click`, `type`, `fill` | Coming Soon |
| **Auto-waiting** | Manual | Built-in | Manual |
| **Profile persistence** | Yes | Yes | Yes |

**Our recommendation:** Start with **Puppeteer** for most agent use cases. It
has the best stealth support and the simplest return type. Switch to
**Playwright** if you need auto-waiting or `page.fill()`. Use **Selenium** if
you have an existing Selenium test suite you want to run on the cloud.

## Before You Begin

Make sure you have completed the following before connecting to a session:

- **TestMu AI Browser SDK installed** - Run `npm install @testmuai/browser-cloud` if you have not already.
- **Session credentials configured** - Set your `LT_USERNAME` and `LT_ACCESS_KEY` environment variables.
- **Quickstart completed** - If this is your first time using <BrandName /> Browser Cloud, [launch your first session](/support/docs/launch-first-session/) first.

---

## Basic Usage

### Puppeteer

Most Puppeteer scripts start with `puppeteer.launch()` to launch a local
browser. With the TestMu AI Browser SDK, you replace that with
`client.puppeteer.connect()` to connect to a cloud browser instead. Your
subsequent Puppeteer calls work exactly the same as before.

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

// 1. Create a cloud session
const session = await client.sessions.create({
    adapter: 'puppeteer',
    lambdatestOptions: {
        build: 'My Agent',
        name: 'Puppeteer Session',
        'LT:Options': {
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
        }
    }
});

// 2. Connect - returns a standard Puppeteer Browser object
const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

// 3. Use Puppeteer as normal
await page.goto('https://example.com');
await page.screenshot({ path: 'screenshot.png' });

// 4. Clean up
await browser.close();
await client.sessions.release(session.id);
```

The `browser` object returned by `client.puppeteer.connect()` is a standard
Puppeteer `Browser`. Use it exactly as you would with plain Puppeteer - all
existing Puppeteer knowledge applies.

### Playwright

Like Puppeteer, the main change is how you connect - replacing
`chromium.launch()` with `client.playwright.connect()`.

:::note
Playwright requires **Node.js 18+**. If you see a version error,
upgrade with `nvm install 18 && nvm use 18`.
:::

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

const session = await client.sessions.create({
    adapter: 'playwright',
    lambdatestOptions: {
        build: 'My Agent',
        name: 'Playwright Session',
        'LT:Options': {
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
        }
    }
});

// Returns browser, context, AND page - all three ready to use
const { browser, context, page } = await client.playwright.connect(session);

await page.goto('https://example.com');
await page.screenshot({ path: 'screenshot.png' });

await browser.close();
await client.sessions.release(session.id);
```

Notice the key difference from Puppeteer: `client.playwright.connect()` returns
three objects - `browser`, `context`, and `page` - instead of just a browser.
These are standard Playwright objects. Use them exactly as you would with plain
Playwright.

### Selenium

Selenium connects to <BrandName /> differently from Puppeteer and Playwright.
Instead of WebSocket, it uses the standard **WebDriver protocol over HTTP**,
connecting to <BrandName />'s Selenium Hub.

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

const session = await client.sessions.create({
    adapter: 'selenium',
    lambdatestOptions: {
        build: 'My Agent',
        name: 'Selenium Session',
        'LT:Options': {
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
        }
    }
});

// Returns a standard Selenium WebDriver
const driver = await client.selenium.connect(session);

await driver.get('https://example.com');
const title = await driver.getTitle();
console.log('Title:', title);

await driver.quit();
await client.sessions.release(session.id);
```

The `driver` object is a standard Selenium `WebDriver`. Use it exactly as you
would with plain `selenium-webdriver`.

---

## What the SDK Does for You

<Tabs>
  <TabItem value="puppeteer" label="Puppeteer" default>

When you call `client.puppeteer.connect(session)`, the SDK handles several
things automatically based on your session configuration:

1. **Stealth check.** If `stealthConfig` is present and `skipFingerprintInjection` is not set, the SDK connects via `puppeteer-extra` with the stealth plugin - which patches 15+ browser fingerprints automatically.

2. **User-agent.** If `randomizeUserAgent` is enabled, a random realistic user-agent is set on the page.

3. **Viewport.** If `randomizeViewport` is enabled, ±20px random jitter is added to the viewport dimensions.

4. **Humanized interactions.** If `humanizeInteractions` is true, `page.click()` and `page.type()` are monkey-patched to add random delays that mimic human behavior.

5. **Profile loading.** If `profileId` is set, saved cookies are loaded from disk. And when you call `browser.close()`, the profile is automatically saved with the current cookies.

  </TabItem>
  <TabItem value="playwright" label="Playwright">

When you call `client.playwright.connect(session)`:

1. **Connects** to <BrandName /> cloud via `chromium.connect`
2. **Gets or creates** a `BrowserContext` and `Page`
3. **Injects stealth scripts** (if enabled) via `page.addInitScript()` - these run before any page JavaScript:
   - Hides `navigator.webdriver`
   - Fakes `chrome.runtime` (simulates extensions presence)
   - Fakes `navigator.plugins` (3 standard Chrome plugins)
   - Sets `navigator.languages = ['en-US', 'en']`
   - Patches `permissions.query` for notifications
   - Spoofs WebGL vendor/renderer
4. **Auto-applies stealth** to new pages via `context.on('page')`
5. **Patches interactions** (if humanize enabled) - `page.click()`, `page.type()`, and `page.fill()` get random delays
6. **Loads/saves profile** (if `profileId` set)

  </TabItem>
  <TabItem value="selenium" label="Selenium">

When you call `client.selenium.connect(session)`:

1. **Connects** to the <BrandName /> Selenium Hub at `https://hub.lambdatest.com/wd/hub` via HTTP
2. **Reads** `LT_USERNAME` and `LT_ACCESS_KEY` from your environment variables
3. **Builds** W3C capabilities from your session config
4. **Connects** over the standard WebDriver protocol

The Selenium adapter **ignores** `session.websocketUrl` and builds its own connection.

  </TabItem>
</Tabs>

---

## Adding Session Features

```typescript
const session = await client.sessions.create({
    adapter: 'puppeteer',   // or 'playwright' or 'selenium'
    stealthConfig: {                   // Anti-bot detection
        humanizeInteractions: true,
        randomizeUserAgent: true,
    },
    profileId: 'my-app-login',         // Persist auth state
    tunnel: true,                      // Access localhost
    timeout: 600000,                   // 10-minute timeout
    lambdatestOptions: { ... }
});
```

---

## Full Working Example

<Tabs>
  <TabItem value="puppeteer" label="Puppeteer" default>

A complete script that creates a session, scrapes a page title, and cleans up
with proper error handling:

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'puppeteer',
        lambdatestOptions: {
            build: 'Agent Scripts',
            name: 'Scrape Example',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log(`View session: ${session.sessionViewerUrl}`);

    try {
        const browser = await client.puppeteer.connect(session);
        const page = (await browser.pages())[0];

        await page.goto('https://news.ycombinator.com');
        const title = await page.title();
        console.log('Page title:', title);

        await browser.close();
    } finally {
        await client.sessions.release(session.id);
    }
}

main().catch(console.error);
```

  </TabItem>
  <TabItem value="playwright" label="Playwright">

A complete script that creates a session, scrapes a page title, and cleans up
with proper error handling:

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'playwright',
        lambdatestOptions: {
            build: 'Agent Scripts',
            name: 'Scrape Example',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log(`View session: ${session.sessionViewerUrl}`);

    try {
        const { browser, context, page } = await client.playwright.connect(session);

        await page.goto('https://news.ycombinator.com');
        const title = await page.title();
        console.log('Page title:', title);

        await browser.close();
    } finally {
        await client.sessions.release(session.id);
    }
}

main().catch(console.error);
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

A complete script that creates a session, scrapes a page title, and cleans up
with proper error handling:

```typescript
import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'selenium',
        lambdatestOptions: {
            build: 'Agent Scripts',
            name: 'Scrape Example',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log(`View session: ${session.sessionViewerUrl}`);

    try {
        const driver = await client.selenium.connect(session);

        await driver.get('https://news.ycombinator.com');
        const title = await driver.getTitle();
        console.log('Page title:', title);

        await driver.quit();
    } finally {
        await client.sessions.release(session.id);
    }
}

main().catch(console.error);
```

  </TabItem>
</Tabs>

:::warning
Sessions remain active until explicitly released or timed out.
Always call `client.sessions.release()` when finished instead of waiting for
the timeout.
:::

---

## When to Choose

| Use Case | Recommended | Why |
|----------|-------------|-----|
| General agent automation | Puppeteer | Mature, well-documented, large ecosystem |
| Stealth-heavy tasks | Puppeteer | Best stealth plugin support (`puppeteer-extra-plugin-stealth`) |
| Complex form interactions | Playwright | Built-in `page.fill()` method |
| Auto-waiting | Playwright | Automatically waits for elements before interacting |
| Multi-page workflows | Playwright | Better context management for complex navigation |
| Existing Selenium test suite | Selenium | Minimal migration - same WebDriver API |
| Simple return type | Puppeteer | Returns a single `Browser` object (vs Playwright's 3 objects) |

---



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
        Connect
      </span>
    </li>
  </ul>
</nav>
