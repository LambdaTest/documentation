---
id: kane-cli-writing-objectives
title: Writing Objectives
sidebar_label: Writing Objectives
description: "Learn the three objective patterns: actions, assertions, and extractions: and how to write natural language objectives that produce reliable test results."
keywords:
  - kane cli objectives
  - natural language testing
  - kaneai
  - testmu ai
  - browser automation
  - write test objectives
url: https://www.testmuai.com/support/docs/kane-cli-writing-objectives/
site_name: TestMu AI
slug: kane-cli-writing-objectives/
canonical: https://www.testmuai.com/support/docs/kane-cli-writing-objectives/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
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
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-writing-objectives/"
    },
    "headline": "Writing Objectives",
    "description": "Learn the three objective patterns: actions, assertions, and extractions: and how to write natural language objectives that produce reliable test results.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-writing-objectives/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli objectives",
      "natural language testing",
      "kaneai"
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
        "name": "Use imperative verbs to describe what the agent should do",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"go to https://example.com\"\n\"click the 'Add to Cart' button\"\n\"fill the email field with user@example.com\"\n\"scroll down to the pricing section\"\n\"select 'Premium' from the plan dropdown\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"assert the page contains 'Order Confirmed'\"\n\"verify the cart total shows '$29.99'\"\n\"confirm no error message is visible\"\n\"check that the Submit button is disabled\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "\u274c Bad: agent may see it but won't persist it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"go to example.com and tell me the price\"\n\"read the page title\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "\u2705 Good: value is captured in final_state",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"go to example.com, store the price of the first item as 'price'\"\n\"store the page title as 'page_title'\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Chain all three patterns in one objective",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"go to {{app_url}}/dashboard,\n store the welcome message as 'welcome_text',\n store the user role in the sidebar as 'role',\n assert the role is 'Admin',\n click the Settings button,\n assert the page contains 'Account Settings'\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Login flow",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \\\n  --url https://app.example.com \\\n  --variables-file ./creds.json \\\n  \"fill the email field with '{{email}}',\n   fill the password field with '{{password}}',\n   click the Login button,\n   assert the page contains 'Dashboard',\n   store the logged-in username as 'username'\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Search with filters",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \\\n  --url https://shop.example.com/products \\\n  \"click the Category filter,\n   select 'Electronics',\n   click the Sort dropdown,\n   select 'Price: Low to High',\n   store the count of products as 'result_count',\n   assert the result_count is greater than 0\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Settings change",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \\\n  --url https://app.example.com/account \\\n  \"click the Settings tab,\n   scroll down to the Notification section,\n   check the 'Email Notifications' checkbox,\n   click Save,\n   assert the page shows 'Settings saved successfully'\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Checkout",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \\\n  --url https://shop.example.com/cart \\\n  --variables-file ./payment.json \\\n  \"store the cart total as 'total',\n   assert the total is greater than 0,\n   click Checkout,\n   fill the card number field with '{{card_number}}',\n   fill the expiry field with '{{card_expiry}}',\n   fill the CVC field with '{{card_cvc}}',\n   click Place Order,\n   assert the page contains 'Order Confirmed',\n   store the order number as 'order_id'\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Objectives on Mobile",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \"Sign in and open the account tab\" --target simulator --app ./builds/MyApp.zip"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "In Interactive TUI, the browser stays open between runs: state carries over automatically",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "> go to https://myapp.com and log in as admin\n  \u2713 PASSED\n\n> navigate to User Management and create a new user \"qa@example.com\"\n  \u2713 PASSED\n\n> verify the new user appears in the users table\n  \u2713 PASSED"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "In Headless CLI, use --max-steps to cap each run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli run \"login flow\" --url https://myapp.com --max-steps 10\nkane-cli run \"dashboard check\" --url https://myapp.com --max-steps 10"
      }
    ],
    "dateModified": "2026-08-12T13:15:00+05:30"
  }) }}
/>

The objective string is the most important input to Kane CLI. How you phrase it determines what the agent does and whether it succeeds. Objectives follow three patterns that you can combine freely.

## Three Patterns

| Pattern | Keywords | Purpose |
|---------|----------|---------|
| 🎯 **Action** | go to, click, type, fill, search, scroll, hover, select, submit | Performs browser actions |
| ✅ **Assertion** | assert, verify, confirm, check that, ensure | Validates a condition: produces pass/fail |
| 📦 **Extraction** | store X as 'name' | Reads a value from the page, persists in output |

:::note
**Assertions** and **extractions** are evaluated as [Checkpoints](/support/docs/kane-cli-checkpoints/). See the reference for all analyze methods (Visual, Textual, URL, Title, DevTools) and comparison operators.
:::

### Actions

Use imperative verbs to describe what the agent should do:

<VerifiedTag value="Verified" />

```
"go to https://example.com"
"click the 'Add to Cart' button"
"fill the email field with user@example.com"
"scroll down to the pricing section"
"select 'Premium' from the plan dropdown"
```

### Assertions

Assertions validate page state. The test fails if the condition is not met.

<VerifiedTag value="Verified" />

```
"assert the page contains 'Order Confirmed'"
"verify the cart total shows '$29.99'"
"confirm no error message is visible"
"check that the Submit button is disabled"
```

### Extractions: The "store as" Pattern

Extractions read a value from the page and store it in the run output's `final_state` field.

**Always use the explicit `store X as 'name'` syntax.** Vague phrasing like "tell me" or "read" does not reliably capture data.

❌ Bad: agent may see it but won't persist it:

<VerifiedTag value="Verified" />

```
"go to example.com and tell me the price"
"read the page title"
```

✅ Good: value is captured in `final_state`:

<VerifiedTag value="Verified" />

```
"go to example.com, store the price of the first item as 'price'"
"store the page title as 'page_title'"
```

---

## Combining Patterns

Chain all three patterns in one objective:

<VerifiedTag value="Verified" />

```
"go to {{app_url}}/dashboard,
 store the welcome message as 'welcome_text',
 store the user role in the sidebar as 'role',
 assert the role is 'Admin',
 click the Settings button,
 assert the page contains 'Account Settings'"
```

This objective: navigates → extracts two values → validates a condition → performs an action → validates the result.

---

## Real Examples

### Login flow

<VerifiedTag value="Verified" />

```bash
kane-cli run \
  --url https://app.example.com \
  --variables-file ./creds.json \
  "fill the email field with '{{email}}',
   fill the password field with '{{password}}',
   click the Login button,
   assert the page contains 'Dashboard',
   store the logged-in username as 'username'"
```

### Search with filters

<VerifiedTag value="Verified" />

```bash
kane-cli run \
  --url https://shop.example.com/products \
  "click the Category filter,
   select 'Electronics',
   click the Sort dropdown,
   select 'Price: Low to High',
   store the count of products as 'result_count',
   assert the result_count is greater than 0"
```

### Settings change

<VerifiedTag value="Verified" />

```bash
kane-cli run \
  --url https://app.example.com/account \
  "click the Settings tab,
   scroll down to the Notification section,
   check the 'Email Notifications' checkbox,
   click Save,
   assert the page shows 'Settings saved successfully'"
```

### Checkout

<VerifiedTag value="Verified" />

```bash
kane-cli run \
  --url https://shop.example.com/cart \
  --variables-file ./payment.json \
  "store the cart total as 'total',
   assert the total is greater than 0,
   click Checkout,
   fill the card number field with '{{card_number}}',
   fill the expiry field with '{{card_expiry}}',
   fill the CVC field with '{{card_cvc}}',
   click Place Order,
   assert the page contains 'Order Confirmed',
   store the order number as 'order_id'"
```

---

## Assertion Types

| Type | Example |
|------|---------|
| Exact match | `assert the total shows '$29.99'` |
| Contains | `assert the page contains 'Welcome'` |
| State | `assert the Submit button is disabled` |
| Conditional | `if a cookie banner appears, dismiss it, then assert the homepage loads` |
| Negative | `assert no error message is visible` |
| Positional | `assert 'Settings' appears in the left sidebar` |

---

## Dos and Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Use imperative verbs: "go to", "click", "store as" | Use vague verbs: "check out", "look at", "explore" |
| Be specific: "click the **blue** 'Submit' in the checkout form" | Be ambiguous: "click the button" |
| Name extractions: "store X as 'name'" | Expect implicit capture: "tell me the price" |
| Use `{{variables}}` for credentials and URLs | Hardcode secrets in the objective |
| Always provide `--url` | Assume the agent knows where to start |
| Split objectives with >15 steps | Cram 30 steps into one objective |

---

## Objectives on Mobile

Objectives are written the same way for a native mobile app as for the browser. The difference is what the run points at: a mobile run installs an **app you supply** with `--app`, so the objective describes app screens and controls rather than a URL.

<VerifiedTag value="Verified" />

```bash
kane-cli run "Sign in and open the account tab" --target simulator --app ./builds/MyApp.zip
```

Pointing a mobile run at a website is not supported yet. WebViews inside the app under test are handled. See [Mobile Testing](/support/docs/kane-cli-mobile/).

## Splitting Long Objectives

Objectives with more than 15 steps drift and become unreliable. Split them into multiple runs.

In **Interactive TUI**, the browser stays open between runs: state carries over automatically:

<VerifiedTag value="Verified" />

```
> go to https://myapp.com and log in as admin
  ✓ PASSED

> navigate to User Management and create a new user "qa@example.com"
  ✓ PASSED

> verify the new user appears in the users table
  ✓ PASSED
```

In **Headless CLI**, use `--max-steps` to cap each run:

<VerifiedTag value="Verified" />

```bash
kane-cli run "login flow" --url https://myapp.com --max-steps 10
kane-cli run "dashboard check" --url https://myapp.com --max-steps 10
```

:::tip
A good rule: if your objective has more than three `assert` statements or more than five distinct actions, consider splitting it.
:::
