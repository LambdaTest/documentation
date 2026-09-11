---
id: kane-cli-checkpoint-url
title: URL Assertions
sidebar_label: URL
description: "Check values in the browser address bar: current URL path, query parameters, fragments, and redirect targets."
keywords:
  - url assertion
  - query parameter assertion
  - kane cli
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-url/
site_name: TestMu AI
slug: kane-cli-checkpoint-url/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-url/
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
          "name": "URL Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-url/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-url/"
    },
    "headline": "URL Assertions",
    "description": "Check values in the browser address bar: current URL path, query parameters, fragments, and redirect targets.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-url/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "url assertion",
      "query parameter assertion",
      "kane cli"
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
        "name": "Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: URL contains /checkout\nAssert: the page redirected to /dashboard\nAssert: URL path is /products/42"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Extractions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Store the current URL\nExtract the URL path"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If/Else",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "If URL contains /login then enter credentials, else go to profile"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

URL assertions check values in the browser's address bar: the current URL path, query parameters, fragments, and redirect targets.

## When It's Used

- URL path: "URL contains /checkout"
- Query parameters: "URL has param `sort=price`"
- Redirect verification: "redirected to /login"
- Fragment/hash: "URL hash is #section-2"

## Examples

### Assertions

<VerifiedTag value="Verified" />

```
Assert: URL contains /checkout
Assert: the page redirected to /dashboard
Assert: URL path is /products/42
```

### Extractions

<VerifiedTag value="Verified" />

```
Store the current URL
Extract the URL path
```

### If/Else

<VerifiedTag value="Verified" />

```
If URL contains /login then enter credentials, else go to profile
```

## How It Works

1. KaneAI reads the current `page.url` value directly
2. The URL string is compared against the expected value using the specified operator
3. No screenshot or DOM analysis needed, this is a direct read
