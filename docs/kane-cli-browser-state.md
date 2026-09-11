---
id: kane-cli-browser-state
title: Browser State Actions
sidebar_label: Browser State
description: "Set cookies, localStorage, and the clipboard directly from a Kane CLI objective to seed state before a flow or test copy and paste behavior."
keywords:
  - browser state
  - set cookies
  - localstorage
  - clipboard
  - kane cli
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-browser-state/
site_name: TestMu AI
slug: kane-cli-browser-state/
canonical: https://www.testmuai.com/support/docs/kane-cli-browser-state/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Browser State Actions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-browser-state/"
        }]
      }) }}
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-browser-state/"
    },
    "headline": "Browser State Actions",
    "description": "Set cookies, localStorage, and the clipboard directly from a Kane CLI objective to seed state before a flow or test copy and paste behavior.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-browser-state/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "browser state",
      "set cookies",
      "localstorage"
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
        "name": "Cookies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Set a cookie named session with value abc123\nSet cookies consent=yes and tracking=off, then reload the page\nDelete the consent cookie\nClear all cookies"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "localStorage",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Set localStorage keys theme=dark and lang=en\nDelete the lang key from localStorage\nClear localStorage"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clipboard",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Write \"John Tester\" to the clipboard\nClick the message field, then paste from the clipboard\nClear the clipboard"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "See Cookies, localStorage, and Clipboard",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Set a cookie named session with value abc123, reload, and verify the page shows you as logged in\nSet localStorage theme=dark, reload, and verify the dark theme is active\nClick the Copy link button, then verify the clipboard contains \"/invoice/42\""
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

Objectives can directly manage cookies, localStorage, and the clipboard, useful for seeding state before a flow (skip a login, dismiss a consent banner) and for testing copy/paste behavior.

## Cookies

```
Set a cookie named session with value abc123
Set cookies consent=yes and tracking=off, then reload the page
Delete the consent cookie
Clear all cookies
```

- Values accept `{{variables}}`: `set a cookie named session with value {{auth_token}}`
- A cookie without an explicit domain applies to the **current page's site**. Navigate first
- Reload or navigate after setting if the page must pick the cookie up
- Provide `path` together with a domain; a path alone is rejected by the browser

## localStorage

```
Set localStorage keys theme=dark and lang=en
Delete the lang key from localStorage
Clear localStorage
```

- Storage is **per-site**. Navigate to the target site before setting
- Reload after setting if the app only reads storage on page load
- Values accept `{{variables}}`

## Clipboard

The run uses an **isolated test clipboard**. Your real OS clipboard is never read or written. Site Copy buttons are captured into it automatically.

```
Write "John Tester" to the clipboard
Click the message field, then paste from the clipboard
Clear the clipboard
```

- **Paste targets the focused field**: click or focus the field first, then paste (`Ctrl/Cmd+V` in an objective works the same way)
- Text and images both paste; rich editors receive a real paste event
- Typical flows: *write → click field → paste*, or *click the site's Copy button → click field → paste*

## Verifying state

Each of these has a matching assertion family. See [Cookies](/support/docs/kane-cli-checkpoint-devtools-cookies/), [localStorage](/support/docs/kane-cli-checkpoint-devtools-localstorage/), and [Clipboard](/support/docs/kane-cli-checkpoint-devtools-clipboard/):

```
Set a cookie named session with value abc123, reload, and verify the page shows you as logged in
Set localStorage theme=dark, reload, and verify the dark theme is active
Click the Copy link button, then verify the clipboard contains "/invoice/42"
```
