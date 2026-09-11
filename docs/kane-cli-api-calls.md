---
id: kane-cli-api-calls
title: API Calls
sidebar_label: API Calls
description: "Have the Kane CLI agent make HTTP API calls directly inside an objective to seed data, hit a backend, then assert on or reuse the response."
keywords:
  - api calls
  - kane cli
  - http request
  - seed data
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-api-calls/
site_name: TestMu AI
slug: kane-cli-api-calls/
canonical: https://www.testmuai.com/support/docs/kane-cli-api-calls/
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
          "name": "API Calls",
          "item": "https://www.testmuai.com/support/docs/kane-cli-api-calls/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-api-calls/"
    },
    "headline": "API Calls",
    "description": "Have the Kane CLI agent make HTTP API calls directly inside an objective to seed data, hit a backend, then assert on or reuse the response.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-api-calls/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "api calls",
      "kane cli",
      "http request"
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
        "name": "Phrase an explicit HTTP request and name its response with \"save the response as \u2026\"",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Call POST https://api.example.com/orders with body {\"item\": \"sku_42\", \"qty\": 1}, save the response as order\nHit GET https://api.example.com/orders/123, save the response as fetched\nCall DELETE https://api.example.com/orders/123"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A pasted curl works too and is kept exactly as written: method, headers, body, and auth",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "curl -X POST https://api.example.com/login -H 'Content-Type: application/json' -d '{\"u\":\"a\",\"p\":\"b\"}', save the response as login"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "API calls and browser actions mix freely in one objective",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Call POST https://api.example.com/login with body {\"u\": \"{{user}}\", \"p\": \"{{password}}\"}, save the response as login,\nassert {{login.status}} is 200,\nthen open https://app.example.com and verify the dashboard loads"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using the response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Call POST https://api.example.com/orders with body {\"item\": \"sku_42\", \"qty\": 1}, save the response as order,\nassert {{order.status}} is 201,\nthen open https://app.example.com/orders and verify an order for \"sku_42\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Tokens and secrets",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "curl -X DELETE https://api.example.com/records/42 -H \"Authorization: Bearer {{api_token}}\""
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

Objectives can have the agent **make an API call directly**, not just observe the requests a page makes. This is useful for seeding data before a flow, hitting a backend to set up state, or checking a service, then asserting on or reusing the response.

## Making a call

Phrase an explicit HTTP request and name its response with "save the response as …":

<VerifiedTag value="Verified" />

```
Call POST https://api.example.com/orders with body {"item": "sku_42", "qty": 1}, save the response as order
Hit GET https://api.example.com/orders/123, save the response as fetched
Call DELETE https://api.example.com/orders/123
```

A pasted `curl` works too and is kept exactly as written: method, headers, body, and auth:

<VerifiedTag value="Verified" />

```
curl -X POST https://api.example.com/login -H 'Content-Type: application/json' -d '{"u":"a","p":"b"}', save the response as login
```

## Using the response

Once you've saved a response under a name, reference it elsewhere in the objective:

| Reference | Resolves to |
|-----------|-------------|
| `{{order.status}}` | the HTTP status code (e.g. `201`) |
| `{{order.response_body}}` | the whole response body |
| `{{order.response_body.<field>}}` | a field from the JSON response body |

Assert on it, or feed it into later actions. API calls and browser actions mix freely in one objective:

<VerifiedTag value="Verified" />

```
Call POST https://api.example.com/login with body {"u": "{{user}}", "p": "{{password}}"}, save the response as login,
assert {{login.status}} is 200,
then open https://app.example.com and verify the dashboard loads
```

<VerifiedTag value="Verified" />

```
Call POST https://api.example.com/orders with body {"item": "sku_42", "qty": 1}, save the response as order,
assert {{order.status}} is 201,
then open https://app.example.com/orders and verify an order for "sku_42" is visible
```

## Tokens and secrets

Put any API token or credential in a variable marked `secret: true` (see [Variables and Context](/support/docs/kane-cli-variables-and-context/)) so it is masked in logs and never stored in plain text:

<VerifiedTag value="Verified" />

```
curl -X DELETE https://api.example.com/records/42 -H "Authorization: Bearer {{api_token}}"
```

## Make a call vs. observe page traffic

These are two different things:

- **Make a call (this page)**: *you* tell the agent to send a request: seed a record, call a backend, set up state.
- **[Network assertions](/support/docs/kane-cli-checkpoint-devtools-network/)**: *observe* the requests the page itself makes during a UI flow (status codes, bodies, timing).

They compose: seed state with a direct call, drive the UI, then assert on the page's own network traffic.
