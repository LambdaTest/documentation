---
id: kane-cli-checkpoint-textual
title: Textual (DOM) Assertions
sidebar_label: Textual (DOM)
description: "Extract data from the DOM — element states, attributes, and computed styles — and assert on values that may not be visible in a screenshot."
keywords:
  - dom assertion
  - textual assertion
  - element state
  - kane cli
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-textual/
site_name: TestMu AI
slug: kane-cli-checkpoint-textual/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-textual/
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
          "name": "Textual (DOM) Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-textual/"
        }]
      }) }}
></script>

Textual assertions extract data from the page's DOM — element states, attributes, and computed styles that aren't always visible in a screenshot.

## When It's Used

- Element states: disabled, enabled, checked, readonly, expanded
- CSS properties with exact values: `font-size: 16px`, `opacity: 0.5`, `display: none`
- HTML attributes: `placeholder`, `aria-*`, `data-*`, `class`, `id`, `href`, `src`, `type`, `value`
- Attribute existence: "has placeholder", "has aria-label"
- Exact CSS color values: `rgb(255,0,0)`, `#ff0000`

## Examples

### Assertions

```
Assert: the submit button is disabled
Assert: the checkbox is checked
Assert: the input field has placeholder "Enter email"
Assert: the element has aria-label "Close dialog"
Assert: the font-size of the heading is 24px
```

### Extractions

```
Extract the href of the first link
Store the value attribute of the email input
Get the class of the error message element
```

## When NOT to Use

- For visible text content (prices, labels) → use [Visual](/support/docs/kane-cli-checkpoint-visual/)
- For color names like "red background" → use [Visual](/support/docs/kane-cli-checkpoint-visual/) (DOM may return `transparent` or inherited values)
- For network/console/cookie data → use [DevTools](/support/docs/kane-cli-checkpoint-devtools/)

## How It Works

1. KaneAI captures the DOM snapshot of the page
2. The AI model identifies the target element and extracts the requested property
3. The value is compared against the expected value
