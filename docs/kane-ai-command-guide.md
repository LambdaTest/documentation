---
id: kane-ai-command-guide
title: KaneAI Command Reference
hide_title: true
toc_max_heading_level: 2
sidebar_label: Commands
description: Master KaneAI commands to automate web actions like navigation, clicking, typing, and more. Create dynamic, readable test cases with ease
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai guided walkthrough
  - kane ai instructions
  - kane ai commands
url: https://www.testmuai.com/support/docs/kane-ai-command-guide/
site_name: TestMu AI
slug: kane-ai-command-guide/
canonical: https://www.testmuai.com/support/docs/kane-ai-command-guide/
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
          "name": "KaneAI Command Reference",
          "item": "https://www.testmuai.com/support/docs/kane-ai-command-guide/"
        }]
      })
    }}
></script>

# KaneAI Command Reference
***


KaneAI converts **natural language instructions** into executable automation steps. This reference lists the commands for interacting with web pages, controlling tabs, handling waits, performing assertions, and building dynamic tests without writing code.

---

## Navigation & Page Interaction
***

Use the below commands to move around the page:

| Action | Example Command |
|--------|-----------------|
| Open URL | `go to https://example.com`, `open https://example.com` |
| Click | `click on login button` |
| Double / N-Click | `double click the title`, `click the button 5 times` (see [KaneAI Click Interactions](/support/docs/kane-ai-click-interactions/)) |
| Right Click | `right click on the file row` (web only) |
| Long Press | `long press the menu icon for 3 seconds` |
| Type Text | `enter "user@example.com"`, `type "password123"` |
| Clear Field | `clear email input field` |
| Select Date | `select 21st september date` |
| Hover | `hover on shop by category option` |
| Search | `search for "laptop"` |
| Refresh | `refresh the page` |
| Navigation | `go back`, `navigate back`, `go forward`, `navigate forward` |

---

## Waits & Timeouts
***

Control how long KaneAI waits for elements before a step proceeds or fails.

| Action | Example Command |
|--------|-----------------|
| Default wait | Automatic; every element interaction waits up to **10 seconds** for the element to become interactable |
| Explicit wait | `wait for 5 seconds` (pauses the script for exactly 5 seconds before the next step) |

The default 10-second wait prevents commands such as click or type from failing on slow loading or page transitions. Use an explicit wait when you know an action, such as a button click or form submission, will take longer than usual.

**Custom timeouts**

To set a custom wait timeout on a specific step, use the step menu:

1. Click the step menu.
2. Select **Step Timeout**.
3. Enter your preferred timeout value (minimum 1 second, maximum 300 seconds).

Step Timeout is a dynamic ceiling: the step proceeds as soon as the element is ready and uses the extra time only on genuinely slow loads. Use a custom timeout for slow page loads or dynamic content, such as elements that depend on external API calls.

:::note
Step Timeout is supported across **Web**, **Mobile Web**, and **App (Android and iOS)** testing. Custom waits apply only to element-based interactions.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/commands/select_set_timeout.webp').default} alt="" className="doc_img"/>

---

## Tab Management
***

Manage browser tabs during a test by opening, switching, and closing them. Tabs are indexed in the order they were opened, and the index starts at 1.

| Action | Example Command |
|--------|-----------------|
| Open a new tab | `open amazon.com in a new tab` |
| Switch by position | `switch to 2nd tab` |
| Switch by name | `switch to TestMu AI tab` |
| Close by name | `close TestMu AI tab` |
| Close by position | `close 2nd tab` |

**Tips**

- Opening a new tab does not switch focus to it. Add an explicit switch command, such as `switch to Amazon tab` or `switch to 2nd tab`.
- Make sure a tab is open before you switch to it. If the tab does not exist or has already been closed, the command fails.
- Use an explicit wait if the tab change loads content or triggers dynamic changes.

---

## Scrolling Commands
***

Control scrolling to reveal elements, move to page positions, or scroll dynamic content.

| Action | Example Command |
|--------|-----------------|
| Scroll until element is visible | `scroll until the submit button is visible` (web only) |
| Scroll by pixels | `scroll by 100px` |
| Scroll by percentage | `scroll by 20 percent` |
| Scroll to bottom | `scroll to the bottom` |
| Scroll to top | `scroll to the top` |
| Scroll multiple times | `scroll 3 times` (useful for infinite-scroll pages) |

:::tip
Use `scroll until` for elements not yet in the viewport. It works for entire pages and for scrollable subsections.
:::

---

## Assertions
***

Assertions are used to validate whether your expectations match the actual outcomes in the application. KaneAI supports several types of assertions to check various elements during test execution:

| Category | Example |
| :--- | :--- |
| **Driver Assertions** | Validate **browser state** ( current URL, window dimensions).<ul><li>Example: Assert if current URL is `https://example.com`</li><li>Validate window height and width</li></ul> |
| **Text Assertions** | Check for **presence/absence of text**.<ul><li>Example: Assert “Welcome Back!” is visible</li><li>Example: Assert error message “Invalid password” is displayed</li></ul> |
| **Visual Assertions** | Confirm **image or logo visibility**.<ul><li>Example: Assert company logo appears in header</li><li>Example: Assert product image is visible</li></ul> |
| **Relative Assertions** | Validate **element relationships**.<ul><li>Example: Assert login button is in same column as username</li><li>Example: Assert submit & cancel buttons are in same row</li></ul> |
| **Mathematical Assertions** | Check **numeric calculations**.<ul><li>Example: Assert `3 + 4 = 7`</li></ul> |
| **Element State Assertions** | Verify **element states** like enabled, disabled, visible, hidden, checked, clickable, and more.<ul><li>Example: Assert the "Submit" button is enabled</li><li>Example: Assert the "Terms" checkbox is checked</li></ul> |
| **DOM Attribute Assertions** | Assert **HTML, ARIA, or data attribute** values on elements.<ul><li>Example: Assert the aria-expanded of the "Menu" equals "true"</li><li>Example: Assert the href of the "Dashboard" link contains "/dashboard"</li></ul> |
| **CSS Property Assertions** | Validate **computed CSS properties** like color, font-size, opacity, and more.<ul><li>Example: Assert the font-size of the "Heading" equals "24px"</li><li>Example: Assert the background-color of the "Banner" equals "blue"</li></ul> |

:::note
Since **July 20, 2025**, all assertions fail tests immediately by default.  
Older tests may still use *warn-and-continue* until edited.  
More info: [KaneAI Failure Conditions](/support/docs/kaneai-failure-conditions/)
:::

---

## Unsupported Assertions
***

The following assertion types are not yet available via natural language. Use **JS snippets** as workarounds where applicable.

| Category | Example | Description |
| :--- | :--- | :--- |
| **Spatial** | Assert the 5th column of the table contains "Jordan.Mathews" | Requires detailed knowledge of the DOM structure to assert based on element positions and arrangement. |
| **Action-based** | Assert tooltip appears after hover | Assertions based on actions (e.g., hover or click) need to be split into multiple steps (hover → wait → assert). |
| **Nested Assertions** | Assert login button enabled AND welcome message visible | Nested assertions involving multiple layers of validation within a single assertion are not supported. Split into separate assertions. |

---

## Query Information
***

Retrieve specific information from the page during a test.

| Action | Example Command |
|--------|-----------------|
| Query the current URL | `query the current URL` (returns the URL of the active page) |
| Query page text or data | `query the time mentioned in the poster` (extracts text or data from a page element) |

---

## Conditional Actions
***

Use conditional logic to run actions based on conditions on the page. KaneAI supports **If / Else-If / Else** blocks with multiple conditions combined via AND / OR logic, and you can add modules, JavaScript, API, and DB steps inside each branch. For the full guide, see [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/).

| Action | Example Command |
|--------|-----------------|
| Conditional click | `if pop up is present in the viewport then click on it` (clicks the pop-up only when it is visible) |
| Conditional selection | `if price < 200 then click add to cart else select second product` (chooses an action based on the price) |

:::note
Nested conditions (an If / Else block inside another If / Else block) are not supported.
:::

---

## Do's and Don'ts
***

Follow these examples for better clarity and performance during test writing:

| **Do (Good Example)**                                             | **Don’t (Bad Example)**                                                                |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `Assert text "Submit" on form footer is visible`                  | `Assert that the submit button works and the layout is correct`                        |
| `Assert textbox contains the exact value 'heading1'`              | `Assert the textbox has heading` (vague, unclear what “heading” refers to)             |
| `Assert logo is visible`                                          | `Assert 3 search results are shown`          |
| `Assert search results appear after a wait step`             | `Wait for search results and then assert they are visible` (assertion contains action) |
| `Assert the divider looks red`                                    | `Assert divider color is #ff5733` (too detail‑specific, fragile visual check)          |
| `Assert no text in table overflows its cell`                      | `Assert the page looks well designed` (subjective, unclear)                            |

**Key Takeaways:**

- **Be specific and clear:** Avoid vague assertions like "heading" and ensure conditions are well-defined.
- **Don’t mix actions with assertions:** Keep actions (like waiting for an element) separate from assertions.
- **Avoid overly specific checks:** Instead of checking for exact visual details (like a color code), focus on functionality (e.g., "Assert divider is visible").
- **Limit the number of assertions:** Avoid making too many assertions in a single step. Test one clear outcome per assertion.

---

## Best Practices
***

Follow these best practices to write effective and reliable tests:

- **Write clear, specific commands:** Ensure your instructions are precise and unambiguous to improve test reliability.
- **Combine command types for richer tests:** Use a mix of commands like waits, clicks, and queries to create more complex and dynamic test flows.
- **Use conditional logic for dynamic scenarios:** When a page changes dynamically (e.g., based on user interaction), use if-else logic to handle different conditions effectively.
- **Apply waits thoughtfully for stability:** Use waits when necessary to ensure elements are loaded and ready for interaction, preventing timing issues.
- **Always add assertions to validate outcomes:** After actions, always verify expected outcomes (e.g., element visibility, text presence) to ensure that the desired result has been achieved.

## Next Steps
***

Continue with these guides:

- Add loops to your tests with [KaneAI While Loops](/support/docs/kaneai-while-loops/).
- Look up authoring errors in the [Error Handling KaneAI](/support/docs/error-handling-kaneai/).
