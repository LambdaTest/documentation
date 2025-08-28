---
id: kane-ai-command-guide
title: KaneAI - Command Guide
hide_title: false
sidebar_label: Command Types
description: Master KaneAI commands to automate web actions like navigation, clicking, typing, and more. Create dynamic, readable test cases with ease
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai guided walkthrough
  - kane ai instructions
  - kane ai commands
url: https://www.lambdatest.com/support/docs/kane-ai-command-guide
site_name: LambdaTest
slug: kane-ai-command-guide/
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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Command Guide",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-command-guide"
        }]
      })
    }}
></script>

# KaneAI Command Guide

KaneAI offers a **natural language interface** for authoring test steps. Each step is expressed as an instruction that KaneAI translates into executable automation. With KaneAAI supported commands you can build **clear, dynamic, and human-readable test cases**.

---

## 🔗 Navigation & Page Interaction


| Action       | Example Commands                               |
|--------------|------------------------------------------------|
| Open URL     | `go to https://example.com`  ,  `open https://example.com` |
| Click        | `click on login button`                        |
| Type Text    | `enter "user@example.com"`  ,  `type "password123"` |
| Clear Field  | `clear email input field`                      |
| Select Date  | `select 21st september date`                   |
| Hover        | `hover on shop by category option`             |
| Search       | `search for "laptop"`                          |
| Refresh      | `refresh the page`                             |
| Navigation   | `go back`  ,   `navigate back`  ,  `go forward`  ,  `navigate forward` |


## ⏱ Waits & Timeouts

### Default Wait
Every element interaction automatically includes a **default wait of 10 seconds** for the element to become interactable.

### Explicit Waits
Define timeouts explicitly using natural language instruction like  ` wait for 5 seconds `

### Custom Timeouts
You can override waits per step via the UI:
1. Click step menu (⋮) → **Step Timeout**
2. Enter timeout value **(seconds, max 300)**

:::note
Custom waits apply only to element-based interactions.  
:::
<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/commands/select_set_timeout.png').default} alt="" className="doc_img"/>

---

## 📑 Tab Management

- `open new lambdatest tab`  
- `switch to 2nd tab` / `switch to lambdatest tab`  
- `close lambdatest tab` / `close 2nd tab`

---

## 📜 Scrolling

- `scroll until the button is visible`
- `scroll by 100px`
- `scroll to the bottom` / `scroll to the top`
- `scroll 3 times`
- `scroll by 20 percent`

:::tip
Use `scroll until` for elements not yet visible in the viewport. Works for entire pages and scrollable subsections.  
:::

---

## ✅ Assertions

Assertions validate expected outcomes. KaneAI supports several categories:

| Category | Example |
| :--- | :--- |
| **Driver Assertions** | Validate **browser state** (URL, dimensions).<ul><li>Assert if current URL is `https://example.com`</li><li>Validate window height and width</li></ul> |
| **Text Assertions** | Check for **presence/absence of text**.<ul><li>Assert “Welcome Back!” is visible</li><li>Assert error message “Invalid password” is displayed</li></ul> |
| **Visual Assertions** | Confirm **image or logo visibility**.<ul><li>Assert company logo appears in header</li><li>Assert product image is visible</li></ul> |
| **Relative Assertions** | Validate **element relationships**.<ul><li>Assert login button is in same column as username</li><li>Assert submit & cancel buttons are in same row</li></ul> |
| **Mathematical Assertions** | Check **numeric calculations**.<ul><li>Assert `3 + 4 = 7`</li></ul> |

:::note
Since **July 20, 2025**, all assertions fail tests immediately by default.  
Older tests may still use *warn-and-continue* until edited.  
More info: [Failure Conditions](https://www.lambdatest.com/support/docs/kaneai-failure-conditions)  
:::

---

## 🚧 Unsupported (Coming Soon)

The following assertion types are not yet available:

| Category | Example | Description |
| :--- | :--- | :--- |
| **Element State** | Assert if submit button is disabled | Directly acessing the element state is not supported. | 
| **Element Property** | Assert if font size is 16px | Directly acessing the element properties is not supported. |
| **Spatial** | Assert the 5th column of the table contains "Jordan.Mathews" | This requires to deep knowledge of DOM to understand the possitions & arrangements of the elements. 
| **Logical** | Assert user is admin AND logged in | Assertions combining multiple conditions. | 
| **Action-based** | Assert tooltip appears after hover | Assertion after an action is performed. *These types of instructions can be broken into multiple steps & executed as for now.* |
| **Nested Assertions** | Assert login button enabled AND welcome message visible | Nested assertions involve multiple layers of validation within a single assertion. |

---

## 🔍 Query Information
- `query the current url`
- `query the time mentioned in the poster`

---

## 🔄 Conditional Actions

### Conditional Click
`if pop up is present in the viewport then click on it`

### Conditional Selection
`if price < 200 then click add to cart else select second product`

***

## Do's and Don'ts

| **Do (Good Example)**                                             | **Don’t (Bad Example)**                                                                |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `Assert text "Submit" on form footer is visible`                  | `Assert that the submit button works and the layout is correct`                        |
| `Assert textbox contains the exact value 'heading1'`              | `Assert the textbox has heading` (vague, unclear what “heading” refers to)             |
| `Assert logo is visible`  `Assert 3 search results are shown` | `Assert logo is visible and 3 results are shown` (too many assertions in one)          |
| Use: `Assert search results appear` after a wait step             | `Wait for search results and then assert they are visible` (assertion contains action) |
| `Assert the divider looks red`                                    | `Assert divider color is #ff5733` (too detail‑specific, fragile visual check)          |
| `Assert no text in table overflows its cell`                      | `Assert the page looks well designed` (subjective, unclear)                            |

***

## 🌟 Best Practices
- Write **clear, specific** commands
- Combine command types for richer tests
- Use **conditional logic** for dynamic flows
- Apply waits thoughtfully for stability
- Always add assertions to validate outcomes