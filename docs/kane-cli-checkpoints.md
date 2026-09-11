---
id: kane-cli-checkpoints
title: Checkpoints
sidebar_label: Overview
description: "Checkpoints are verification points KaneAI evaluates during test execution: assert conditions, branch on results, or extract values for later use."
keywords:
  - kane cli checkpoints
  - assertions
  - extractions
  - testmu ai
  - kaneai
  - browser automation
url: https://www.testmuai.com/support/docs/kane-cli-checkpoints/
site_name: TestMu AI
slug: kane-cli-checkpoints/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoints/
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
          "name": "Checkpoints",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoints/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-checkpoints/"
    },
    "headline": "Checkpoints",
    "description": "Checkpoints are verification points KaneAI evaluates during test execution: assert conditions, branch on results, or extract values for later use.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-checkpoints/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli checkpoints",
      "assertions",
      "extractions"
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
        "name": "KaneAI automatically picks the right analyze method",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: the price is $29.99                    \u2192 Visual\nAssert: the submit button is disabled          \u2192 Textual (DOM)\nAssert: URL contains /checkout                 \u2192 URL\nAssert: page title contains \"Dashboard\"        \u2192 Title\nAssert: no API calls returned 5xx              \u2192 DevTools (Network)\nAssert: no console errors                      \u2192 DevTools (Console)\nAssert: page LCP is under 2500ms               \u2192 DevTools (Performance)\nAssert: session cookie exists                  \u2192 DevTools (Cookies)\nAssert: auth_token exists in localStorage      \u2192 DevTools (localStorage)\nAssert: the clipboard has the copied link      \u2192 DevTools (Clipboard)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Extractions work the same way",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Store the product price                        \u2192 Visual\nStore the current URL                          \u2192 URL\nStore all cookies                              \u2192 DevTools (Cookies)\nStore the API response body                    \u2192 DevTools (Network)"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

Checkpoints are verification points that KaneAI evaluates during test execution. They let you assert conditions, branch on results, or extract values for later use.

## Checkpoint Types

| Type | What it does |
|------|-------------|
| **Assertion** | Verify a condition is true, fails the test if not |
| **If/Else** | Branch execution based on a condition |
| **Extraction** | Store a value for use in later steps |

All three types work with every analyze method below.

## Analyze Methods

Each checkpoint uses an analyze method to determine *where* to look for the data:

| Method | Data Source | When to Use |
|--------|-----------|-------------|
| [Visual](/support/docs/kane-cli-checkpoint-visual/) | Screenshot (what you see on screen) | Text, labels, prices, counts, colors, visibility checks |
| [Textual (DOM)](/support/docs/kane-cli-checkpoint-textual/) | Page DOM elements | Element states (disabled, checked), CSS properties, HTML attributes |
| [URL](/support/docs/kane-cli-checkpoint-url/) | Browser URL bar | URL path, query params, redirects |
| [Title](/support/docs/kane-cli-checkpoint-title/) | Page title | Document title verification |
| [DevTools](/support/docs/kane-cli-checkpoint-devtools/) | Browser internals | Network traffic, console logs, performance, cookies, localStorage |

## How to Use

Write your assertions naturally in the objective. KaneAI automatically picks the right analyze method:

```
Assert: the price is $29.99                    → Visual
Assert: the submit button is disabled          → Textual (DOM)
Assert: URL contains /checkout                 → URL
Assert: page title contains "Dashboard"        → Title
Assert: no API calls returned 5xx              → DevTools (Network)
Assert: no console errors                      → DevTools (Console)
Assert: page LCP is under 2500ms               → DevTools (Performance)
Assert: session cookie exists                  → DevTools (Cookies)
Assert: auth_token exists in localStorage      → DevTools (localStorage)
```

Extractions work the same way:

```
Store the product price                        → Visual
Store the current URL                          → URL
Store all cookies                              → DevTools (Cookies)
Store the API response body                    → DevTools (Network)
```

## Operators

Assertions support these comparison operators:

| Operator | Meaning | Example |
|----------|---------|---------|
| `equals` | Exact match | price equals "29.99" |
| `contains` | Substring match | URL contains "/checkout" |
| `not_contains` | Does not contain | title not contains "Error" |
| `gt` / `gte` | Greater than / or equal | items greater than 5 |
| `lt` / `lte` | Less than / or equal | LCP less than 2500 |
| `not_equals` | Not equal | status not equals "failed" |

## Learn More

- [Visual Assertions](/support/docs/kane-cli-checkpoint-visual/): screenshot-based text and visibility checks
- [Textual (DOM) Assertions](/support/docs/kane-cli-checkpoint-textual/): element states and attributes
- [URL Assertions](/support/docs/kane-cli-checkpoint-url/): URL-based checks
- [Title Assertions](/support/docs/kane-cli-checkpoint-title/): page title checks
- [DevTools Assertions](/support/docs/kane-cli-checkpoint-devtools/): network, console, performance, cookies, localStorage, clipboard
