---
id: kane-cli-checkpoint-devtools-cookies
title: Cookies Assertions
sidebar_label: Cookies
description: "Verify browser cookies (names, values, and flags such as httpOnly, secure, and sameSite) set during test execution."
keywords:
  - cookies assertion
  - session cookie
  - httponly
  - secure cookie
  - kane cli
  - devtools
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-cookies/
site_name: TestMu AI
slug: kane-cli-checkpoint-devtools-cookies/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-cookies/
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
          "name": "Cookies Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-cookies/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-cookies/"
    },
    "headline": "Cookies Assertions",
    "description": "Verify browser cookies (names, values, and flags such as httpOnly, secure, and sameSite) set during test execution.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-devtools-cookies/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "cookies assertion",
      "session cookie",
      "httponly"
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
        "name": "Example Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: a cookie named \"session_id\" exists\nAssert: the session cookie is httpOnly\nAssert: no cookies are set without the Secure flag\nAssert: at least 3 cookies are set on the page\nAssert: the auth cookie has sameSite set to \"Strict\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Extractions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Store all cookies\nExtract the value of the \"session_id\" cookie\nStore all cookie names\nGet all cookies for the example.com domain"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example If/Else",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "If a cookie named \"auth_token\" exists then go to dashboard, else go to login"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

Cookie assertions let you verify browser cookies: check existence, values, and security attributes like httpOnly, secure, and sameSite.

## How Capture Works

Cookies are captured as a **point-in-time snapshot** when the checkpoint triggers:

- **On-demand capture**: Cookies are read from the browser context at the moment the assertion runs, not accumulated over time
- **Current state only**: You see exactly what cookies exist right now, including any set by the page's JavaScript or server responses
- **All cookies visible**: Unlike `document.cookie` in JavaScript, KaneAI can see httpOnly cookies too
- **Domain-scoped**: Cookies are captured for all domains the browser has visited in this session

### Planning for Multi-Step Tests

Because cookies are captured at assertion time:

- If you need to check cookies set by a specific page, assert on the **same page** or **after** you've visited it
- If cookies are needed in a later step (e.g., after navigating away), extract and store them first
- Cookies persist in the browser across steps (unlike network/console which reset), but asserting on a different domain may show different cookies

## What You Can Query

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Cookie name (e.g., "session_id") |
| `value` | string | Cookie value |
| `domain` | string | Domain (e.g., ".example.com") |
| `path` | string | Cookie path (e.g., "/") |
| `expires` | float | Expiry as epoch seconds (-1 for session cookies) |
| `http_only` | bool | True if HttpOnly flag is set |
| `secure` | bool | True if Secure flag is set |
| `same_site` | string | "Strict", "Lax", or "None" |

## Example Assertions

<VerifiedTag value="Verified" />

```
Assert: a cookie named "session_id" exists
Assert: the session cookie is httpOnly
Assert: no cookies are set without the Secure flag
Assert: at least 3 cookies are set on the page
Assert: the auth cookie has sameSite set to "Strict"
```

## Example Extractions

<VerifiedTag value="Verified" />

```
Store all cookies
Extract the value of the "session_id" cookie
Store all cookie names
Get all cookies for the example.com domain
```

## Example If/Else

<VerifiedTag value="Verified" />

```
If a cookie named "auth_token" exists then go to dashboard, else go to login
```
