---
id: kane-cli-checkpoint-visual
title: Visual Assertions
sidebar_label: Visual
description: "Verify what is visible on the screen by analyzing the current screenshot. Visual is the default analyze method KaneAI uses for assertions."
keywords:
  - visual assertion
  - screenshot assertion
  - kane cli
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-visual/
site_name: TestMu AI
slug: kane-cli-checkpoint-visual/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-visual/
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
          "name": "Visual Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-visual/"
        }]
      }) }}
></script>

Visual assertions verify what's visible on screen by analyzing the current screenshot. This is the default method — when in doubt, KaneAI uses visual analysis.

## When It's Used

- Text content: prices, labels, headings, counts, messages
- Visibility: "is the login button visible", "are search results displayed"
- Color checks using color names: "has red background", "blue text"
- Any content that appears visually on the page

## Examples

### Assertions

```
Assert: the product price is $29.99
Assert: the search results show at least 5 items
Assert: the error message is visible
Assert: the hero section displays "Welcome back"
```

### Extractions

```
Store the product price
Extract the heading text
Get the number of items in the cart
```

### If/Else

```
If the login button is visible then click it, else click Sign Up
```

## How It Works

1. KaneAI takes a screenshot of the current page
2. The AI model analyzes the screenshot to find the requested information
3. The extracted value is compared against the expected value using the specified operator

## Best Practices

- Use visual assertions for any text or content you can see on screen
- Be specific about what to look for: "the price in the cart summary" not just "the price"
- For exact CSS values (like `rgb(255,0,0)` or `#ff0000`), use [Textual (DOM)](/support/docs/kane-cli-checkpoint-textual/) instead
- For element states (disabled, checked), use [Textual (DOM)](/support/docs/kane-cli-checkpoint-textual/) instead
