---
id: kane-cli-checkpoint-devtools-localstorage
title: localStorage Assertions
sidebar_label: localStorage
description: "Verify key-value pairs stored in the browser localStorage during test execution: auth tokens, feature flags, cached data."
keywords:
  - localstorage assertion
  - browser storage
  - auth token
  - kane cli
  - devtools
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-localstorage/
site_name: TestMu AI
slug: kane-cli-checkpoint-devtools-localstorage/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-localstorage/
---
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "localStorage Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-localstorage/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-localstorage/"
    },
    "headline": "localStorage Assertions",
    "description": "Verify key-value pairs stored in the browser localStorage during test execution: auth tokens, feature flags, cached data.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-localstorage/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "localstorage assertion",
      "browser storage",
      "auth token"
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
        "name": "Applications often store structured data in localStorage as JSON strings",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// Application code\nlocalStorage.setItem(\"user_prefs\", JSON.stringify({theme: \"dark\", lang: \"en\"}));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can parse it to check individual fields",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: the \"theme\" field in the user_prefs localStorage item is \"dark\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: auth_token exists in localStorage\nAssert: the theme preference in localStorage is \"dark\"\nAssert: localStorage has fewer than 10 items\nAssert: the user_id value in localStorage is not empty"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Extractions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Store all localStorage items\nExtract the auth_token from localStorage\nStore the user preferences from localStorage\nGet all localStorage keys"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example If/Else",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "If localStorage has \"onboarding_complete\" then show dashboard, else start onboarding"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

localStorage assertions let you verify data stored in the browser's `window.localStorage`: check key existence, values, and item counts.

## How Capture Works

localStorage is captured as a **point-in-time snapshot** when the checkpoint triggers:

- **On-demand capture**: localStorage is read from the current page at the moment the assertion runs
- **Current state only**: You see exactly what's in localStorage right now
- **Domain-scoped**: localStorage is per-origin (protocol + domain + port). You only see data for the current page's origin
- **String values**: All localStorage values are strings. If the application stores JSON objects, they're stored as JSON strings

### Planning for Multi-Step Tests

Because localStorage is captured at assertion time:

- Assert on localStorage while you're **on the page** that set the values. Navigating to a different domain means a different localStorage
- If values are needed later, extract and store them before navigating away
- localStorage persists across steps (unlike network/console) as long as you stay on the same origin

### JSON Values

Applications often store structured data in localStorage as JSON strings:

<VerifiedTag value="Verified" />

```javascript
// Application code
localStorage.setItem("user_prefs", JSON.stringify({theme: "dark", lang: "en"}));
```

In assertions, the value is the raw JSON string. You can parse it to check individual fields:

```
Assert: the "theme" field in the user_prefs localStorage item is "dark"
```

KaneAI will parse the JSON and drill into the value automatically.

## What You Can Query

| Method | Returns | Description |
|--------|---------|-------------|
| `storage.all()` | dict | All key-value pairs |
| `storage.get(key)` | string or None | Value for a specific key |
| `storage.keys()` | list of strings | All key names |
| `storage.has(key)` | bool | Whether a key exists |

## Example Assertions

```
Assert: auth_token exists in localStorage
Assert: the theme preference in localStorage is "dark"
Assert: localStorage has fewer than 10 items
Assert: the user_id value in localStorage is not empty
```

## Example Extractions

```
Store all localStorage items
Extract the auth_token from localStorage
Store the user preferences from localStorage
Get all localStorage keys
```

## Example If/Else

```
If localStorage has "onboarding_complete" then show dashboard, else start onboarding
```
