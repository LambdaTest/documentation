---
id: kane-cli-checkpoint-url
title: URL Assertions
sidebar_label: URL
description: "Check values in the browser address bar — current URL path, query parameters, fragments, and redirect targets."
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

URL assertions check values in the browser's address bar — the current URL path, query parameters, fragments, and redirect targets.

## When It's Used

- URL path: "URL contains /checkout"
- Query parameters: "URL has param `sort=price`"
- Redirect verification: "redirected to /login"
- Fragment/hash: "URL hash is #section-2"

## Examples

### Assertions

```
Assert: URL contains /checkout
Assert: the page redirected to /dashboard
Assert: URL path is /products/42
```

### Extractions

```
Store the current URL
Extract the URL path
```

### If/Else

```
If URL contains /login then enter credentials, else go to profile
```

## How It Works

1. KaneAI reads the current `page.url` value directly
2. The URL string is compared against the expected value using the specified operator
3. No screenshot or DOM analysis needed — this is a direct read
