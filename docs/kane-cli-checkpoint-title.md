---
id: kane-cli-checkpoint-title
title: Title Assertions
sidebar_label: Title
description: "Verify the browser tab document.title — useful for confirming navigation reached the expected page."
keywords:
  - page title assertion
  - document.title
  - kane cli
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/
site_name: TestMu AI
slug: kane-cli-checkpoint-title/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/
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
          "name": "Title Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/"
        }]
      }) }}
></script>

Title assertions check the browser tab's document title (`document.title`).

## When It's Used

- Page title verification: "title contains Dashboard"
- Navigation confirmation: "title is Home Page"

## Examples

### Assertions

```
Assert: page title contains "Dashboard"
Assert: title is "My Account - Settings"
```

### Extractions

```
Store the page title
```

## How It Works

1. KaneAI reads `page.title()` directly
2. The title string is compared against the expected value
3. No screenshot or DOM analysis needed — this is a direct read
