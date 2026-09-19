---
id: browser-cloud-quick-actions
title: Quick Actions - Scrape, Screenshot, PDF
hide_title: true
sidebar_label: One-Liner Scrape, Screenshot, and PDF
description: One-liner operations that handle browser setup, navigation, and cleanup for scraping, screenshots, and PDF generation.
keywords:
  - browser cloud scrape
  - browser cloud screenshot
  - browser cloud pdf
  - web scraping sdk
  - quick actions
url: https://www.testmuai.com/support/docs/browser-cloud-quick-actions/
site_name: TestMu AI
slug: browser-cloud-quick-actions/
canonical: https://www.testmuai.com/support/docs/browser-cloud-quick-actions/
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
          "name": "Quick Actions",
          "item": `${BRAND_URL}/support/docs/browser-cloud-quick-actions/`
        }]
      })
    }}
></script>

# One-Liner Scrape, Screenshot, and PDF

Scrape content, take screenshots, or generate PDFs from any URL - without managing sessions, browsers, or cleanup yourself. You provide
a URL, you get back the result. The TestMu AI Browser SDK handles everything behind
the scenes.

This is useful when your agent needs data from a page but doesn't need to
interact with it beyond extraction.


## Scrape

Extract content from any webpage in your choice of format.

**Simplest form - just pass a URL:**

```typescript
const result = await client.scrape('https://example.com');
console.log(result.content);
```

**With options - control format, timing, and selectors:**

```typescript
const result = await client.scrape({
    url: 'https://example.com',
    format: 'markdown',     // 'html' | 'markdown' | 'text' | 'readability'
    delay: 3000,             // Wait 3 seconds for JS-heavy pages
    waitFor: '#content',     // Wait for this CSS selector before extracting
});
```

**Response:**

```typescript
interface ScrapeResponse {
    title: string;           // Page title
    content: string;         // Extracted content in requested format
    url: string;             // Final URL (after redirects)
    markdown?: string;       // Markdown version
    html?: string;           // Raw HTML
    metadata?: Record<string, string>; // Meta tags
}
```

**Choosing a format:**

| Format | What You Get | When To Use It |
|--------|-------------|----------------|
| `html` | Raw HTML of the page | When your agent needs to parse the DOM |
| `text` | Plain text, tags stripped | When you want minimal tokens for LLM input |
| `readability` | Cleaned article content (like Reader Mode) | When the page has an article you want to extract |
| `markdown` | HTML converted to markdown | When you want structure + low token count for LLMs |


## Screenshot

Capture a visual snapshot of any webpage.

```typescript
// Simple
const result = await client.screenshot('https://example.com');
fs.writeFileSync('screenshot.png', result.data);

// With options
const result = await client.screenshot({
    url: 'https://example.com',
    fullPage: true,          // Capture entire scrollable page
    format: 'jpeg',          // 'png' | 'jpeg' | 'webp'
    quality: 80,             // JPEG/WebP quality (1-100)
    delay: 2000,             // Wait before capturing
});
```

**Response:** `{ data: Buffer, format: string, width: number, height: number }`


## PDF

Generate a PDF document from any webpage.

```typescript
// Simple
const result = await client.pdf('https://example.com');
fs.writeFileSync('page.pdf', result.data);

// With options
const result = await client.pdf({
    url: 'https://example.com',
    format: 'A4',            // 'A4' | 'Letter' | 'Legal'
    landscape: false,
    printBackground: true,
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
});
```

**Response:** `{ data: Buffer, pageCount: number }`


## Standalone vs Session Mode

Quick Actions operate in two modes:

**Standalone mode (default).** The SDK creates a temporary headless browser
with stealth enabled, navigates to the URL, performs the operation, and closes
the browser. Fully automatic. No session management needed.

**Session mode.** If your agent already has a session running and you want the
Quick Action to use that session's browser (with its cookies, tunnel, or
extensions), register the page first:

```typescript
const session = await client.sessions.create({ ... });
const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

// Register the page for Quick Actions
client.quick.registerSessionPage(session.id, page);

// Now Quick Actions use the existing session
const result = await client.scrape({
    url: 'https://example.com',
    sessionId: session.id,
});
```

This is useful when the page requires authentication, a tunnel connection, or
specific extensions to access.




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
        Quick Actions
      </span>
    </li>
  </ul>
</nav>
