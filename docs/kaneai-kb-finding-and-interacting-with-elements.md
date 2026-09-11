---
id: kaneai-kb-finding-and-interacting-with-elements
title: Finding & Interacting with Elements
hide_title: false
sidebar_label: Finding & Interacting with Elements
description: Learn how to reliably target and interact with web and mobile elements using KaneAI's natural language instructions
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai elements
  - kaneai locators
  - element targeting
  - natural language testing
url: https://www.testmuai.com/support/docs/kaneai-kb-finding-and-interacting-with-elements/
site_name: TestMu AI
slug: kaneai-kb-finding-and-interacting-with-elements/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Finding & Interacting with Elements",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-finding-and-interacting-with-elements/"
        }]
      })
    }}
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-kb-finding-and-interacting-with-elements/"
    },
    "headline": "Finding & Interacting with Elements",
    "description": "Learn how to reliably target and interact with web and mobile elements using KaneAI's natural language instructions",
    "url": "https://www.testmuai.com/support/docs/kaneai-kb-finding-and-interacting-with-elements/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai elements"
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
        "name": "Use Positional Cues to Disambiguate",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click on the \"Submit\" button at the bottom of the page\nclick on the search icon in the top right corner"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use Positional Cues to Disambiguate",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click the \"Edit\" button next to \"john@example.com\"\nclick the \"Delete\" icon beside the \"Quarterly Report\" row"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use Positional Cues to Disambiguate",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click on the second \"Add to Cart\" button\nselect the third item in the dropdown"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use Positional Cues to Disambiguate",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click \"Submit\" inside the payment form\nclick \"Save\" inside the modal dialog"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: E-Commerce Product Listing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click the \"Add to Cart\" button below the \"Running Shoes\" product\nclick the \"Add to Cart\" button for the first product in the list"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Data Table with Repeated Actions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click the \"Edit\" button in the row containing \"jane.doe@company.com\"\nclick \"Delete\" next to user \"John Smith\"\nclick the \"View\" link in the third row of the users table"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Navigation Menu with Nested Items",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hover on the \"Account\" menu, then click on \"Settings\"\nclick on \"Settings\" inside the \"Admin\" dropdown"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Modal/Dialog Interactions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click \"Confirm\" inside the confirmation dialog\nclick the \"Cancel\" button in the modal"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Checkout Flow That Opens Payment in New Tab",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click on \"Proceed to Payment\"\nswitch to the 2nd tab\ntype \"4111111111111111\" in the card number field\nclick \"Pay Now\"\nswitch to the 1st tab\nassert \"Payment Successful\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Hover & Multi-Step Interactions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hover on the \"Products\" menu item\nclick on \"Electronics\" in the dropdown"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Hover & Multi-Step Interactions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hover on the user avatar in the top right corner\nclick on \"Sign Out\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Tooltip Verification",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hover on the info icon next to \"Annual Revenue\"\nassert tooltip text \"Total revenue for the fiscal year\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Drag and Drop",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "drag \"Task: Fix Bug\" and drop it on the \"In Progress\" column\ndrag the first item and drop it below the third item in the list\ndrag \"Card A\" to \"Column B\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example, to click a deeply nested shadow DOM element",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "document.querySelector('my-component').shadowRoot.querySelector('.hidden-btn').click();"
      }
    ],
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

KaneAI converts natural language instructions into automation actions by identifying the right element on the page. The more precisely you describe an element, the more reliably KaneAI will find and interact with it. This guide covers practical techniques for targeting elements in real-world applications.

## How KaneAI Finds Elements

KaneAI uses a combination of signals to locate elements:

- **Text content**: visible labels, button text, placeholder text
- **Element type**: button, link, input field, dropdown, checkbox
- **Position on page**: top, bottom, left sidebar, inside a specific section
- **Visual appearance**: color, size, icons
- **Accessibility attributes**: aria-labels, roles, alt text

The best instructions combine **what the element is** (type) with **how to identify it** (text or position).

## Describing Elements Clearly

### Use the Element Type

Always mention what kind of element you are targeting. This eliminates ambiguity when multiple elements share the same text.

| Instruction | Why it works |
|---|---|
| `click on the "Login" button` | Specifies both the text and element type |
| `click on the "Pricing" link in the navigation bar` | Distinguishes the nav link from other "Pricing" text on the page |
| `type "john@example.com" in the email input field` | Targets the input specifically, not a label |

:::tip
Think of it like giving directions to a person: "Click the blue **button** that says Submit" is clearer than "Click Submit."
:::

### Use Quotes for Exact Text Matching

Wrap element text in quotes when you need an exact match. This prevents KaneAI from matching similar but incorrect elements.

| Scenario | Instruction |
|---|---|
| Page has both "Sign In" and "Sign Up" buttons | `click on the "Sign In" button` |
| Input field has placeholder "Enter your email" | `type "test@example.com" in the "Enter your email" field` |
| Multiple links with similar names | `click on the "View Details" link` |

### Use Positional Cues to Disambiguate

When multiple elements look the same (e.g., a table with "Edit" buttons on every row, or a page with multiple "Submit" buttons), use position or context to narrow down the target.

**Absolute positions:**

<VerifiedTag value="Verified" />

```
click on the "Submit" button at the bottom of the page
click on the search icon in the top right corner
```

**Relative positions (near another element):**

<VerifiedTag value="Verified" />

```
click the "Edit" button next to "john@example.com"
click the "Delete" icon beside the "Quarterly Report" row
```

**Ordering (nth element):**

<VerifiedTag value="Verified" />

```
click on the second "Add to Cart" button
select the third item in the dropdown
```

**Inside a container:**

<VerifiedTag value="Verified" />

```
click "Submit" inside the payment form
click "Save" inside the modal dialog
```

## Real-World Scenarios

### Scenario: E-Commerce Product Listing

Your page shows a grid of products, each with an "Add to Cart" button.

:::note Bad approach
`click on Add to Cart`. KaneAI won't know which product you mean.
:::

:::tip Good approaches

<VerifiedTag value="Verified" />

```
click the "Add to Cart" button below the "Running Shoes" product
click the "Add to Cart" button for the first product in the list
```
:::

### Scenario: Data Table with Repeated Actions

A user management table has Edit, Delete, and View buttons for each row.

:::tip

<VerifiedTag value="Verified" />

```
click the "Edit" button in the row containing "jane.doe@company.com"
click "Delete" next to user "John Smith"
click the "View" link in the third row of the users table
```
:::

### Scenario: Navigation Menu with Nested Items

A multi-level navigation has "Settings" under both "Account" and "Admin" sections.

:::tip

<VerifiedTag value="Verified" />

```
hover on the "Account" menu, then click on "Settings"
click on "Settings" inside the "Admin" dropdown
```
:::

### Scenario: Modal/Dialog Interactions

A page has a confirmation modal with "Cancel" and "Confirm" buttons, but the background page also has buttons.

:::tip

<VerifiedTag value="Verified" />

```
click "Confirm" inside the confirmation dialog
click the "Cancel" button in the modal
```
:::

## Scrolling to Find Elements

If an element is not visible in the current viewport, KaneAI can scroll to find it.

| Action | Instruction |
|---|---|
| Scroll until element appears | `scroll until the "Load More" button is visible` |
| Scroll by specific amount | `scroll down by 500 pixels` |
| Scroll by percentage | `scroll down by 30 percent` |
| Scroll to page boundaries | `scroll to the bottom of the page` |
| Scroll multiple times (infinite scroll) | `scroll down 5 times` |
| Scroll within a container | `scroll down inside the chat messages panel` |

:::note
`scroll until` works only for interactable elements. For non-interactable elements, use `scroll down X times` combined with a wait step.
:::

:::note
`scroll until` is currently supported on **Web only**. For mobile app, use `scroll down X times` combined with a wait step.
:::

## Tab & Window Management

Many real-world flows open new tabs (e.g., clicking "Terms & Conditions" or a payment gateway).

**Key rule:** When a new tab opens, you must explicitly switch to it before interacting with elements on that tab.

| Action | Instruction |
|---|---|
| Open URL in new tab | `open https://example.com in a new tab` |
| Switch to tab by name | `switch to the "Payment Gateway" tab` |
| Switch to tab by position | `switch to the 2nd tab` |
| Close a tab | `close the "Terms" tab` |
| Return to original tab | `switch to the 1st tab` |

:::note
Window management is currently not supported on KaneAI.
:::

### Scenario: Checkout Flow That Opens Payment in New Tab

<VerifiedTag value="Verified" />

```
click on "Proceed to Payment"
switch to the 2nd tab
type "4111111111111111" in the card number field
click "Pay Now"
switch to the 1st tab
assert "Payment Successful" is visible
```

:::warning
Always add a `switch to tab` instruction after any action that opens a new tab. Without it, subsequent instructions will execute on the wrong tab and fail.
:::

## Hover & Multi-Step Interactions

Some UI elements only appear after hovering (e.g., dropdown menus, tooltips, action icons on table rows).

<VerifiedTag value="Verified" />

```
hover on the "Products" menu item
click on "Electronics" in the dropdown
```

<VerifiedTag value="Verified" />

```
hover on the user avatar in the top right corner
click on "Sign Out"
```

### Scenario: Tooltip Verification

<VerifiedTag value="Verified" />

```
hover on the info icon next to "Annual Revenue"
assert tooltip text "Total revenue for the fiscal year" is visible
```

## Drag and Drop

KaneAI supports drag-and-drop interactions on **Desktop Web, Android apps, iOS apps, and Mobile Web**, for sortable lists, kanban boards, sliders, payment confirmation gestures, and similar UI patterns.

<VerifiedTag value="Verified" />

```
drag "Task: Fix Bug" and drop it on the "In Progress" column
drag the first item and drop it below the third item in the list
drag "Card A" to "Column B"
```

Use **Manual Interaction** to capture sliders, slide-to-confirm gestures, and other dynamic-target drags that NL cannot resolve reliably. Manual recording is available on Desktop Web, Android, and iOS. Mobile Web is **NL-only**.

:::info
See the [Drag and Drop](/support/docs/kane-ai-drag-drop/) guide for the full platform matrix, gesture classification rules, and replay behavior.
:::

## When Natural Language Isn't Enough

For complex or highly dynamic pages where natural language targeting is unreliable, KaneAI supports **JS Snippets** as a workaround. Common cases include:

- Elements with no visible text or distinguishing attributes
- Canvas-based interactions
- Custom web components with non-standard rendering

Use the `/` command and select **"Add JS Snippet"** to execute JavaScript directly. For example, to click a deeply nested shadow DOM element:

```javascript
document.querySelector('my-component').shadowRoot.querySelector('.hidden-btn').click();
```

:::info
See the [JS Snippets & Workarounds](/support/docs/kaneai-kb-js-snippets-and-workarounds) guide for a comprehensive list of scenarios where JS scripting is the recommended approach.
:::

## Quick Reference: Element Interaction Commands

| Action | Example Instructions |
|---|---|
| **Click** | `click on the "Submit" button` |
| **Double / N-Click** | `double click the title` , `click the button 5 times`, see [Click Interactions](/support/docs/kane-ai-click-interactions/) |
| **Right Click** | `right click on the file row` (web only), see [Click Interactions](/support/docs/kane-ai-click-interactions/) |
| **Long Press** | `long press the menu icon for 3 seconds`, see [Click Interactions](/support/docs/kane-ai-click-interactions/) |
| **Type** | `type "hello world" in the search input` |
| **Clear** | `clear the email input field` |
| **Hover** | `hover on the "Products" menu` |
| **Select (dropdown)** | `select "United States" from the country dropdown` |
| **Select (date)** | `select 21st September date` |
| **Check/Uncheck** | `check the "I agree" checkbox` |
| **Drag & Drop** | `drag "Card A" and drop it on "Column B"` |

## Do's and Don'ts

| Do | Don't |
|---|---|
| `click the "Save" button inside the settings modal` | `click Save` (which Save button?) |
| `type "admin" in the "Username" input field` | `type admin` (which field?) |
| `click the "Edit" button next to "john@example.com"` | `click the Edit button` (which row?) |
| `hover on "Account" menu, then click "Profile"` | `go to my profile` (too vague for nested nav) |
| `scroll until the "Footer" section is visible` | `scroll to the bottom` (if you need a specific section, name it) |
| `switch to the "Checkout" tab` | `continue on the new tab` (KaneAI needs explicit tab switch) |
