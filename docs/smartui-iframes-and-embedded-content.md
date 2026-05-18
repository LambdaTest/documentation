---
id: smartui-iframes-and-embedded-content
title: Iframes and Embedded Content in SmartUI
sidebar_label: Iframes & Embeds
description: How SmartUI treats same-origin and cross-origin iframes for screenshots and comparison, with practical tips for videos, widgets, and automation context.
keywords:
  - SmartUI iframe
  - embedded content
  - cross-origin iframe
  - visual regression iframe
  - SmartUI YouTube embed
  - TestMu AI SmartUI
url: https://www.testmuai.com/support/docs/smartui-iframes-and-embedded-content/
site_name: TestMu AI
slug: smartui-iframes-and-embedded-content/
canonical: https://www.testmuai.com/support/docs/smartui-iframes-and-embedded-content/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Iframes and Embedded Content in SmartUI",
          "item": `${BRAND_URL}/support/docs/smartui-iframes-and-embedded-content/`
        }]
      })
    }}
></script>

# Iframes and Embedded Content in SmartUI

Pages often include **iframes**: embedded apps, chat widgets, consent managers, or **video players** (YouTube, Vimeo). SmartUI captures what the **browser paints** in your <BrandName /> session. How much you can **inspect or target in the DOM** depends on whether the iframe is **same-origin** or **cross-origin** with the top page.

## What to expect (summary)

| Question | Short answer |
|----------|----------------|
| Are iframes supported? | **Yes** — snapshots reflect the **real browser output**, including iframe regions when they render. |
| Will third-party iframes always match pixel-for-pixel? | **No** — cross-origin embeds are **timing- and environment-dependent**; that is expected. |
| Can SmartUI read DOM inside another site’s iframe? | **No** — browsers block that for cross-origin content. |

Embeds load asynchronously; third-party players (YouTube, Vimeo) may show different pixels between runs because of consent, ads, or regional UI. Use waits, **`ignoreDOM`** on the container, or layout comparison when the embed is out of scope.

## Same-origin vs cross-origin

| Case | What you can expect |
|------|---------------------|
| **Same-origin iframe** | The child document is part of your site’s origin. **Viewport / full-page** captures usually include the iframe’s rendered area. **Element locators** for nodes inside the iframe work from automation **after** you switch the driver into that frame (see below). |
| **Cross-origin iframe** | Browser security **blocks** parent JavaScript from reading the child document (similar to CORS). **Pixels** of the iframe’s **on-screen box** can still appear in screenshots if the embed renders. **DOM-based** tooling in the parent page **cannot** see inside the third-party document. |

SmartUI does not override the browser’s security model; plan comparisons accordingly.

## Video and media embeds

For **`<video>`** elements and **embedded players** (often in iframes), SmartUI’s **first-frame** behavior and troubleshooting are documented here:

- [Handle Pages with Videos](/support/docs/smartui-handle-videos/) — includes guidance when **embedded videos via iframe** misbehave, **`ignoreDOM`** on the iframe region, and **CORS / accessibility** of iframe content.

## Element screenshots and frame context

When you use **SmartUI Hooks** to capture a **specific element** (for example [`smartui-hooks-element-screenshot`](/support/docs/smartui-hooks-element-screenshot/)), locators are resolved in the **current WebDriver browsing context**.

- To capture a node **inside** an iframe, **switch into that frame** first (for example Selenium `driver.switchTo().frame(...)`), then run the hook against the element in that document.
- If you stay on the **top** document, selectors that only exist inside the iframe will not resolve.

## Full-page and viewport captures

**Full-page** and **viewport** screenshots reflect the **composed** page the browser draws. Same-origin iframes generally composite like any other content. Cross-origin embeds still draw a **rectangle**; what appears inside it depends on the embed loading, cookies, and network—so baselines can be **noisier** than static HTML.

**Mitigations:** explicit waits, stable viewport size, and **`ignoreDOM`** (or annotations) on the iframe **container** when the embed is intentionally out of scope for the test.

## Nested iframes

Treat **nested** iframes like a stack of contexts: switch **in** level by level for inner elements, allow extra time for each document to load, and expect **more flakiness** when outer and inner origins differ.

## Shadow DOM (not an iframe)

**Shadow DOM** isolates markup inside a component but **same origin** as the host page. SmartUI’s Shadow DOM support is separate from iframe behavior:

- [Shadow DOM](/support/docs/smartui-shadow-dom/)

## Related docs

- [Handle Pages with Videos](/support/docs/smartui-handle-videos/)
- [Take a Screenshot of a Specific Element (Hooks)](/support/docs/smartui-hooks-element-screenshot/)
- [Shadow DOM](/support/docs/smartui-shadow-dom/)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
