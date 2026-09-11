---
id: kaneai-kb-assertions-and-validation
title: Assertions & Validation
hide_title: false
sidebar_label: Assertions & Validation
description: Comprehensive guide to writing reliable assertions in KaneAI with real-world examples, best practices, and workarounds for common validation scenarios
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai assertions
  - kaneai validation
  - test assertions
  - visual assertions
  - element state assertions
  - DOM attribute assertions
  - CSS property assertions
  - textual query
url: https://www.testmuai.com/support/docs/kaneai-kb-assertions-and-validation/
site_name: TestMu AI
slug: kaneai-kb-assertions-and-validation/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "Assertions & Validation",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-assertions-and-validation/"
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-kb-assertions-and-validation/"
    },
    "headline": "Assertions & Validation",
    "description": "Comprehensive guide to writing reliable assertions in KaneAI with real-world examples, best practices, and workarounds for common validation scenarios",
    "url": "https://www.testmuai.com/support/docs/kaneai-kb-assertions-and-validation/",
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
      "kaneai assertions"
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
        "name": "Text Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert \"Welcome Back, John!\" is visible\nassert \"Your order has been placed\" is displayed\nassert error message \"Invalid email address\" is visible\nassert \"Out of Stock\" is not visible on the page"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Text Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert {{username}} is visible on the page\nassert {{api_response.message}} contains \"success\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Visual Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the TestMu logo is visible in the header\nassert the product image is displayed\nassert the green checkmark icon appears next to \"Verified\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "URL & Browser State Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the current URL is \"https://example.com/dashboard\"\nassert the current URL contains \"/dashboard\"\nassert the page title contains \"Dashboard\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Relative/Layout Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the \"Login\" button is in the same row as the \"Register\" link\nassert the \"Submit\" button is below the form fields"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mathematical Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert 3 + 4 = 7\nassert the cart total equals the sum of item prices visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "DOM Attribute Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert the Sample video has a controls attribute\nAssert the input has a required attribute\nAssert the NoAlt image does not have an alt attribute"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Be Specific, Not Subjective",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the page is user-friendly\nassert the layout is correct"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Be Specific, Not Subjective",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the navigation menu has 5 items\nassert the \"Search\" input field is visible at the top of the page"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Avoid Asserting on Imperceivable Details",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the button appears red          (instead of assert color is #ff0000)\nassert the error border is visible   (instead of assert border is 2px solid red)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Login Flow Validation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type \"admin@example.com\" in the email field\ntype \"wrong_password\" in the password field\nclick on \"Sign In\" button\nassert \"Invalid credentials\" error message is visible\n\nclear the password field\ntype \"CorrectPass123\" in the password field\nclick on \"Sign In\" button\nassert the current URL contains \"/dashboard\"\nassert \"Welcome, Admin\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: E-Commerce Cart Validation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click \"Add to Cart\" for the \"Wireless Mouse\" product\nclick on the cart icon\nassert \"Wireless Mouse\" is visible in the cart\nassert the cart item count shows \"1\"\nassert the cart total is \"$29.99\"\nclick \"Remove\" next to \"Wireless Mouse\"\nassert \"Your cart is empty\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Form Validation Messages",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click the \"Submit\" button without filling any fields\nassert \"First name is required\" error is visible\nassert \"Email is required\" error is visible\nassert \"Password is required\" error is visible\n\ntype \"J\" in the \"First Name\" field\nassert \"First name must be at least 2 characters\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Search Results Verification",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type \"laptop\" in the search field and press Enter\nwait for 3 seconds\nassert search results are visible\nassert the first result contains the word \"laptop\"\nassert the results count is greater than 0"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Data Table Content Validation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert the \"Users\" table header is visible\nassert the table contains a row with \"john@example.com\"\nassert \"Active\" status is shown next to \"john@example.com\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "String Variable Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "set expectedTitle as \"Dashboard\"\nassert {{expectedTitle}} is visible on the page"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After making an API call via the / command, the response is stored as a JSON variable",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "assert {{api_response.status}} is \"200\"\nassert {{api_response.data.email}} is \"john@example.com\"\nassert {{api_response.data.items}} contains \"Laptop\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Store a value from the UI, make an API call, and compare",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Fetch the order ID displayed on the confirmation page\n-- (stored as a variable such as {{orderID}}) --\n-- Make API call to verify order via /api command --\nassert {{api_response.orderId}} equals {{orderID}}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Conditional Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "if \"Login\" button is visible then click on it\nif price < 200 then click \"Add to Cart\" else select the second product"
      }
    ],
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

Assertions verify that your application behaves correctly after performing actions. In KaneAI, you write assertions in natural language, and the AI evaluates them against the current page state. This guide covers every assertion type, shows how to write them reliably, and explains how to handle tricky validation scenarios.

:::note
All assertions have an option for failure behavior. By default, a failure in assertion will fail the test during execution. You can configure the default failure behavior for assertions via Organisation Settings. See more details in [Failure Conditions](/support/docs/kaneai-failure-conditions/#default-failure-condition-setting).
:::


## Assertion Categories

### Text Assertions

Check whether specific text content is present (or absent) on the page.

<VerifiedTag value="Verified" />

```
assert "Welcome Back, John!" is visible
assert "Your order has been placed" is displayed
assert error message "Invalid email address" is visible
assert "Out of Stock" is not visible on the page
```

**With variables:**

<VerifiedTag value="Verified" />

```
assert {{username}} is visible on the page
assert {{api_response.message}} contains "success"
```

### Visual Assertions

Verify that images, logos, icons, or visual elements appear correctly.

<VerifiedTag value="Verified" />

```
assert the TestMu logo is visible in the header
assert the product image is displayed
assert the green checkmark icon appears next to "Verified"
```

:::warning
Visual assertions rely on screenshots. Elements smaller than 12×12 pixels may not be detected reliably. Avoid asserting on exact hex colors. Use descriptive colors instead.
:::

### URL & Browser State Assertions

Validate the browser state such as the current URL or page title.

<VerifiedTag value="Verified" />

```
assert the current URL is "https://example.com/dashboard"
assert the current URL contains "/dashboard"
assert the page title contains "Dashboard"
```

### Relative/Layout Assertions

Check the spatial relationship between elements.

<VerifiedTag value="Verified" />

```
assert the "Login" button is in the same row as the "Register" link
assert the "Submit" button is below the form fields
```

### Mathematical Assertions

Validate calculations and numeric values.

<VerifiedTag value="Verified" />

```
assert 3 + 4 = 7
assert the cart total equals the sum of item prices visible
```

## Element State & Attribute Assertions

Assert element states, DOM attributes, and computed CSS properties by querying the DOM directly. Describe the element using its visible text or description and state the condition you want to verify.

:::note Desktop & Mobile Web Only
Element State & Attribute Assertions are currently supported on **desktop web** and **mobile web** only. Native mobile app assertions (Android/iOS) are planned for a future phase.
:::


### Element State Assertions

Verify the interactive state of UI elements using natural language.

| State | Positive Example | Negative Example |
|---|---|---|
| **Enabled / Disabled** | `Assert the "Submit Order" button is enabled` | `Assert the "Authorize Payment" button is disabled` |
| **Visible / Hidden** | `Assert the "Dashboard panel" is visible` | `Assert the "Hidden section" is not visible` |
| **Clickable** | `Assert the "Click Me" button is clickable` | `Assert the "View Only" button is not clickable` |
| **Present / Absent** | `Assert the "Account widget" is present` | `Assert the error banner is not present` |
| **Checked / Unchecked** | `Assert the "Terms" checkbox is checked` | `Assert the "Newsletter" checkbox is not checked` |
| **Toggled On / Off** | `Assert the Notifications toggle is toggled on` | `Assert the Dark Mode toggle is toggled off` |

:::warning Present vs. Visible
These two assertions behave differently when an element is not found:
- **"Assert element is hidden"**: Element must exist in the DOM but not be displayed. Returns an **error** if the element is not found at all.
- **"Assert element is not present"**: Element does not exist in the DOM. Returns **pass** if the element is not found.
:::

### DOM Attribute Assertions

Assert the value of any HTML, ARIA, or data attribute on an element.

| Category | Example |
|---|---|
| **ARIA** | `Assert the aria-expanded of the "Accordion Header" equals "true"` |
| **ARIA** | `Assert the aria-label of the Close button equals "Close dialog"` |
| **ARIA** | `Assert the role of the alert element equals "alert"` |
| **Data attributes** | `Assert the data-testid of the "Workspace" equals "main-content"` |
| **Data attributes** | `Assert the data-status of the "Sprint tracker" equals "active"` |
| **HTML attributes** | `Assert the placeholder of the search input contains "Search"` |
| **HTML attributes** | `Assert the href of the "Dashboard" link starts with "https://"` |
| **HTML attributes** | `Assert the src of the Logo image ends with ".svg"` |
| **Form attributes** | `Assert the action of the Signup form equals "/api/signup"` |
| **Form attributes** | `Assert the method of the form equals "POST"` |

**Attribute existence checks:**

<VerifiedTag value="Verified" />

```
Assert the Sample video has a controls attribute
Assert the input has a required attribute
Assert the NoAlt image does not have an alt attribute
```

### CSS Property Assertions

Assert computed CSS property values for the following properties:

`color` · `background-color` · `border-color` · `font-size` · `font-family` · `font-weight` · `font-style` · `display` · `visibility` · `opacity`

| Category | Example |
|---|---|
| **Color** | `Assert the color of the "Alert message" equals "rgb(255, 0, 0)"` |
| **Named color** | `Assert the background-color of the "Banner" equals "blue"` |
| **Font size** | `Assert the font-size of the "Heading" equals "24px"` |
| **Font family** | `Assert the font-family of the "Body text" contains "Arial"` |
| **Font weight** | `Assert the font-weight of the "Bold text" equals "700"` |
| **Font style** | `Assert the font-style of the "Quote" equals "italic"` |
| **Display** | `Assert the display of the "Layout" equals "flex"` |
| **Visibility** | `Assert the visibility of the "Layer" equals "hidden"` |
| **Opacity** | `Assert the opacity of the "Watermark" equals "0.5"` |

:::note CSS Value Normalization
CSS values are automatically normalized before comparison:
- **Colors:** Named colors (e.g., "red") are converted to RGB. All hex/rgb/rgba formats normalize to a canonical form.
- **Font families:** Surrounding quotes are stripped.
- **Whitespace:** Extra whitespace is collapsed.

Named color normalization is exact-match only: "red" maps to `rgb(255, 0, 0)`, but shades like `#d10000` will **not** match "red". Use exact RGB values for precision.
:::

### Supported Operators

**String Operators**

| Operator | NL Triggers | Example |
|---|---|---|
| Equals | "is", "equals" | `Assert the role equals "alert"` |
| Does not equal | "is not", "does not equal" | `Assert the type does not equal "password"` |
| Contains | "contains", "includes" | `Assert the placeholder contains "Search"` |
| Does not contain | "does not contain" | `Assert the href does not contain "staging"` |
| Starts with | "starts with" | `Assert the href starts with "https://"` |
| Does not start with | "does not start with" | `Assert the href does not start with "http://"` |
| Ends with | "ends with" | `Assert the src ends with ".svg"` |
| Does not end with | "does not end with" | `Assert the src does not end with ".png"` |

**Numeric Operators**

| Operator | NL Triggers | Example |
|---|---|---|
| Greater than | "is greater than" | `Assert the data-count is greater than "5"` |
| Less than | "is less than" | `Assert the data-index is less than "10"` |
| Greater than or equal | "is at least" | `Assert the data-score is at least "5"` |
| Less than or equal | "is at most" | `Assert the data-priority is at most "5"` |

Negation is supported across all assertion types using "NOT", "is not", "isn't", or "does not have".

### Limitations

- **Shadow DOM not supported:** Elements inside shadow DOM boundaries are not accessible.
- **No regex matching:** Pattern-based matching (e.g., "Assert data-id matches `[a-f0-9-]{36}`") is not supported.
- **Value length cap:** Attribute or CSS values exceeding 500 characters are truncated with a warning.
- **Hidden element resolution:** Element finding relies on vision. Elements present in the DOM but not visible on the page may not be resolved correctly.

## Writing Good Assertions: Do's and Don'ts

| Good Assertion | Bad Assertion | Why |
|---|---|---|
| `assert text "Submit" on the form footer is visible` | `assert that the submit button works and the layout is correct` | Combines multiple concerns; "works" is vague |
| `assert the textbox contains the exact value "heading1"` | `assert the textbox has heading` | "heading" is ambiguous, which heading? |
| `assert the TestMu logo is visible` | `assert 3 search results are shown` (as a visual assertion) | Count assertions need text-based evidence, not visual |
| `assert "Error" is not visible on the page` | `assert there are no errors` | Too vague; specify what kind of error |

## Key Rules for Reliable Assertions

### Be Specific, Not Subjective

The assertion must have a clear true/false answer given the page state.

:::note Bad

<VerifiedTag value="Verified" />

```
assert the page is user-friendly
assert the layout is correct
```
:::

:::tip Good

<VerifiedTag value="Verified" />

```
assert the navigation menu has 5 items
assert the "Search" input field is visible at the top of the page
```
:::

### Avoid Asserting on Imperceivable Details

KaneAI uses a screenshot + DOM combination. Very small visual details may not be detectable.

**Risky assertions (may be flaky):**
- Exact hex color codes (`#ff5733`)
- Colors of thin lines or indicator dots
- SVG shapes smaller than 12px
- Font sizes or font families

**Safer alternatives:**

<VerifiedTag value="Verified" />

```
assert the button appears red          (instead of assert color is #ff0000)
assert the error border is visible   (instead of assert border is 2px solid red)
```

## Real-World Assertion Scenarios

### Scenario: Login Flow Validation

<VerifiedTag value="Verified" />

```
type "admin@example.com" in the email field
type "wrong_password" in the password field
click on "Sign In" button
assert "Invalid credentials" error message is visible

clear the password field
type "CorrectPass123" in the password field
click on "Sign In" button
assert the current URL contains "/dashboard"
assert "Welcome, Admin" is visible
```

### Scenario: E-Commerce Cart Validation

<VerifiedTag value="Verified" />

```
click "Add to Cart" for the "Wireless Mouse" product
click on the cart icon
assert "Wireless Mouse" is visible in the cart
assert the cart item count shows "1"
assert the cart total is "$29.99"
click "Remove" next to "Wireless Mouse"
assert "Your cart is empty" is visible
```

### Scenario: Form Validation Messages

<VerifiedTag value="Verified" />

```
click the "Submit" button without filling any fields
assert "First name is required" error is visible
assert "Email is required" error is visible
assert "Password is required" error is visible

type "J" in the "First Name" field
assert "First name must be at least 2 characters" is visible
```

### Scenario: Search Results Verification

<VerifiedTag value="Verified" />

```
type "laptop" in the search field and press Enter
wait for 3 seconds
assert search results are visible
assert the first result contains the word "laptop"
assert the results count is greater than 0
```

### Scenario: Data Table Content Validation

<VerifiedTag value="Verified" />

```
assert the "Users" table header is visible
assert the table contains a row with "john@example.com"
assert "Active" status is shown next to "john@example.com"
```

## Asserting with Variables

Variables make assertions dynamic and reusable, especially when combined with API responses or stored values.

### String Variable Assertions

<VerifiedTag value="Verified" />

```
set expectedTitle as "Dashboard"
assert {{expectedTitle}} is visible on the page
```

### JSON Variable Assertions (from API)

After making an API call via the `/` command, the response is stored as a JSON variable:

<VerifiedTag value="Verified" />

```
assert {{api_response.status}} is "200"
assert {{api_response.data.email}} is "john@example.com"
assert {{api_response.data.items}} contains "Laptop"
```

### Cross-Referencing UI and API Data

Store a value from the UI, make an API call, and compare:

<VerifiedTag value="Verified" />

```
Fetch the order ID displayed on the confirmation page
-- (stored as a variable such as {{orderID}}) --
-- Make API call to verify order via /api command --
assert {{api_response.orderId}} equals {{orderID}}
```

## Conditional Assertions

KaneAI supports basic if-else logic for assertions that depend on page state.

<VerifiedTag value="Verified" />

```
if "Login" button is visible then click on it
if price < 200 then click "Add to Cart" else select the second product
```

:::note
Nested conditions (an If / Else block inside another If / Else block) are **not supported**. Keep conditional logic simple and flat. For complex branching, use Else‑If branches or break the test into separate test cases. See the full [Conditional Logic](/support/docs/kaneai-conditional-logic/) guide.
:::

## Unsupported Assertions (Current Limitations)

These assertion types are not yet available via natural language. Use **JS snippets** as workarounds where applicable.

| Category | Example | Workaround |
|---|---|---|
| **Specific DOM Position** | `assert the 5th table column contains "Jordan"` | JS: `document.querySelectorAll('td')[4].textContent` |
| **Action-Based** | `assert tooltip appears after hover` | Split into: hover step → wait → assert tooltip text |
| **Nested Conditions** | `assert A is true AND B is visible` | Split into two separate assertions |
| **Changes Over Time** | `assert the spinner disappears after 5 seconds` | Use wait step, then assert spinner is not visible |

:::info
For the full list of JS execution options, see [JS Snippets](/support/docs/kane-ai-javascript-execution/) guide.
:::

## Configuring Assertion Failure Behavior

By default, assertions fail the test immediately (unless configured otherwise in Organisation Settings). You can configure this per step:

| Mode | Behavior |
|---|---|
| **Fail Immediately** (default) | Test stops at the failed assertion |
| **Fail and Continue** | Assertion failure is recorded, but subsequent steps continue executing |
| **Warn and Continue** | Assertion failure is logged as a warning; test is not marked as failed |

Configure via: Step menu → **Failure Condition** → Select behavior.

This is useful when you want to run all assertions in a test and see a complete report of what passed and what failed, rather than stopping at the first failure.
