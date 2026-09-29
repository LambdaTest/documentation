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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-iframes-and-embedded-content/"
    },
    "headline": "Iframes and Embedded Content in SmartUI",
    "description": "How SmartUI treats same-origin and cross-origin iframes for screenshots and comparison, with practical tips for videos, widgets, and automation context.",
    "url": "https://www.testmuai.com/support/docs/smartui-iframes-and-embedded-content/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "SmartUI iframe",
      "embedded content",
      "cross-origin iframe"
    ],
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
    "dateModified": "2026-09-29T12:00:00+05:30"
  }) }}
/>

# Iframes and Embedded Content in SmartUI

Pages often include **iframes**: embedded apps, chat widgets, consent managers, payment forms, or **video players** (YouTube, Vimeo). How SmartUI handles an iframe depends on two things:

- **How you capture.** SmartUI Hooks photograph the page in your own <BrandName /> browser session. The SmartUI CLI and SDKs (`smartuiSnapshot`, `smartui exec`) copy the page (its DOM) and render the copy again in SmartUI's cloud browsers.
- **Where the iframe comes from.** A **same-origin** iframe is served from the same site as the page. A **cross-origin** iframe comes from another site, and the browser does not let the page's scripts read its contents.

## What to expect (summary)

| Question | Short answer |
|----------|--------------|
| Are iframes supported? | **Yes.** Hooks capture exactly what your session shows. The CLI and SDKs copy same-origin frames and reload cross-origin frames from their URL. |
| Will a cross-origin iframe show my logged-in state in a CLI or SDK snapshot? | **No.** SmartUI reloads it without your test's cookies, login or session, so it shows what a new visitor would see. Use Hooks, or ignore the frame. |
| Will third-party embeds always match pixel-for-pixel? | **No.** Ads, consent prompts and regional content change between runs. That is expected. |
| Can SmartUI read the DOM inside another site's iframe? | **No.** Browsers block that for cross-origin content. |
| Does SmartUI warn me when a frame was reloaded instead of copied? | **No.** The CLI does not print a warning today, so check the screenshot. |

## How the CLI and SDKs capture iframes

When you call `smartuiSnapshot` (or any SDK built on the SmartUI CLI), SmartUI copies the page at that moment and sends the copy to its cloud browsers. Each iframe on the page is handled by one of these rules:

| Iframe | What SmartUI does | What you see in the screenshot |
|--------|-------------------|--------------------------------|
| Same-origin and fully loaded | Copies the frame's current content into the snapshot | The frame exactly as your test left it, including logged-in state and anything your test typed or clicked |
| Same-origin but still loading when you took the snapshot | Keeps only the frame's URL, then loads it fresh in the cloud browser | The frame as a new visitor would see it |
| Cross-origin (another site) | Keeps only the frame's URL, then loads it fresh in the cloud browser | Public embeds (maps, videos, widgets) usually look right. Anything that needs your login, cookies or test data looks wrong, for example a sign-in prompt instead of an account page |
| Built by JavaScript with no `src` | With `enableJavaScript: true`, the page's scripts rebuild it in the cloud browser. Without it, SmartUI copies the frame if it can read it, and drops it if it cannot | The rebuilt or copied frame, or an empty area |
| Inside the page `<head>` | Removed | Nothing (these frames do not draw anything visible) |
| A YouTube embed | Replaced with the video's thumbnail image | A still frame instead of the player |
| An iframe whose `src` is a video file (`.mp4`, `.webm`, `.ogg`) | Tries to capture the first video frame as a poster image | A still frame, if the video could be read |

Frames that SmartUI reloads come from SmartUI's cloud, not from your machine. If the frame URL is on a private network or `localhost`, it can only load through a [tunnel](/support/docs/smartui-sdk-tunnel/).

### When a cross-origin iframe looks wrong

Pick the option that matches what the iframe is for in your test:

1. **The iframe is part of what you are testing** (for example your own app embedded on another domain). Capture that page with [SmartUI Hooks](/support/docs/smartui-hooks-element-screenshot/), which photograph your real browser session, including the frame.
2. **The iframe is out of scope** (chat widgets, ads, consent managers, third-party players). Exclude its container from comparison with `ignoreDOM`, as shown in [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data/). The frame still appears in the image but no longer fails the comparison.
3. **You want the iframe gone from the image entirely.** Hide it with [customCSS](/support/docs/smartui-custom-css/), for example `iframe[src*="chat-widget"] { display: none !important; }`. Unlike `ignoreDOM`, this removes it from the screenshot.
4. **The iframe is still loading when you take the snapshot.** Wait for it to finish loading in your test before calling `smartuiSnapshot`, so SmartUI can copy it instead of reloading it.

## Hooks: same-origin vs cross-origin

With SmartUI Hooks, the screenshot comes from your own browser session, so it shows what the browser painted, frames included.

| Case | What you can expect |
|------|---------------------|
| **Same-origin iframe** | Viewport and full-page captures include the iframe's rendered area. Element locators inside the iframe work **after** you switch the driver into that frame (see below). |
| **Cross-origin iframe** | The iframe's pixels appear in the screenshot if the embed rendered. Scripts in the parent page cannot see inside the other site's document, so element-based options cannot target nodes inside it. |

SmartUI does not override the browser's security model; plan comparisons accordingly.

## Video and media embeds

For **`<video>`** elements and **embedded players** (often in iframes), SmartUI's **first-frame** behavior and troubleshooting are documented here:

- [Handle Pages with Videos](/support/docs/smartui-handle-videos/): includes guidance when **embedded videos via iframe** misbehave, **`ignoreDOM`** on the iframe region, and **CORS / accessibility** of iframe content.

## Element screenshots and frame context

When you use **SmartUI Hooks** to capture a **specific element** (for example [`smartui-hooks-element-screenshot`](/support/docs/smartui-hooks-element-screenshot/)), locators are resolved in the **current WebDriver browsing context**.

- To capture a node **inside** an iframe, **switch into that frame** first (for example Selenium `driver.switchTo().frame(...)`), then run the hook against the element in that document.
- If you stay on the **top** document, selectors that only exist inside the iframe will not resolve.

## Full-page and viewport captures

**Full-page** and **viewport** screenshots reflect the **composed** page the browser draws. Same-origin iframes generally composite like any other content. Cross-origin embeds still draw a **rectangle**; what appears inside it depends on the embed loading, cookies, and network, so baselines can be **noisier** than static HTML.

**Mitigations:** explicit waits, stable viewport size, **`ignoreDOM`** on the iframe **container** when the embed is out of scope for the test, or **`customCSS`** when it should not appear in the image at all.

## Nested iframes

Treat **nested** iframes like a stack of contexts: switch **in** level by level for inner elements, allow extra time for each document to load, and expect **more flakiness** when outer and inner origins differ. In CLI and SDK snapshots, the rules in the table above apply at every level: a same-origin frame inside a cross-origin frame is reloaded along with its parent.

## Shadow DOM (not an iframe)

**Shadow DOM** isolates markup inside a component but **same origin** as the host page. SmartUI's Shadow DOM support is separate from iframe behavior:

- [Shadow DOM](/support/docs/smartui-shadow-dom/)

## Related docs

- [Handle Pages with Videos](/support/docs/smartui-handle-videos/)
- [Take a Screenshot of a Specific Element (Hooks)](/support/docs/smartui-hooks-element-screenshot/)
- [Custom CSS](/support/docs/smartui-custom-css/)
- [Shadow DOM](/support/docs/smartui-shadow-dom/)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
