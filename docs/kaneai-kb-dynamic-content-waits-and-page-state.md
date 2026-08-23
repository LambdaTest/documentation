---
id: kaneai-kb-dynamic-content-waits-and-page-state
title: How to Handle Waits and Dynamic Content in KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Waits
description: Handle loading spinners, async content, toast notifications, modals, infinite scroll, and timing-sensitive scenarios in KaneAI
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai waits
  - kaneai dynamic content
  - kaneai loading
  - async testing
url: https://www.testmuai.com/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/
site_name: TestMu AI
slug: kaneai-kb-dynamic-content-waits-and-page-state/
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
          "name": "Dynamic Content, Waits & Page State in KaneAI",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/"
        }]
      })
    }}
></script>

# How to Handle Waits and Dynamic Content in KaneAI
***


KaneAI handles asynchronous behavior through three wait mechanisms: built-in auto-waits, explicit waits, and custom step timeouts. Use them to test data that loads from APIs, pages that render progressively, notifications that appear and disappear, and content that shows based on user interaction.

## Wait Mechanisms
***

KaneAI handles timing in three ways so a step never runs before the UI is ready: a built-in auto-wait on every interaction, explicit waits you add in natural language, and a custom timeout for individual steps. Combine them to keep assertions from racing dynamic content.

### Default Auto-wait (built-in)
***

Every element interaction command (click, type, assert) automatically waits up to **10 seconds** for the target element to become interactable. You do not need explicit waits for most simple interactions.

Auto-wait is sufficient when you:

- Click a button that is already on the page.
- Type in a visible input field.
- Assert text that is already rendered.

### Explicit Waits
***

Use an explicit wait when you know an action takes longer than the default 10 seconds, or when you need to pause between steps.

```
wait for 5 seconds
wait for 10 seconds
```

Use explicit waits:

- After a form submission that triggers a page redirect.
- After clicking a button that triggers an API call.
- Between cascading dropdown selections.
- After scrolling on infinite-scroll pages.
- Before asserting on content loaded from an API.

### Custom Step Timeout
***

For individual steps that need more time, set a custom timeout from the step menu:

1. Click the **step menu** (three dots).
2. Select **Step Timeout**.
3. Enter a timeout value (min **1** second, max **300** seconds; default **10** seconds when unset).

Use a custom timeout when you wait for:

- File uploads to complete.
- Large reports to generate.
- Third-party payment gateways to respond.

:::tip Recommendation
Prefer a **custom step timeout** over an explicit wait when you wait for a specific element to appear. Custom timeouts are dynamic: they proceed as soon as the element is ready, while explicit waits always wait the full duration.
:::

:::note Supported platforms
Step Timeout is available for **Web**, **Mobile Web**, and **App (Android and iOS)** testing. It applies only to element-based interactions (click, type, search, clear); fixed `wait` steps and assertions are unaffected.
:::

## Dynamic Content Scenarios
***

These examples show how to handle common asynchronous UI behaviors with waits and assertions.

### Scenario: Spinner After Submit
***

Your app shows a spinner after clicking "Submit" and then displays a success message.

```
click on the "Submit" button
wait for 5 seconds
assert "Submission Successful" is visible
assert the loading spinner is not visible
```

**Better approach using custom timeout:**
1. Set the custom step timeout to 15 seconds for the assertion step
2. Write: `assert "Submission Successful" is visible`
3. KaneAI will wait up to 15 seconds for the message, proceeding immediately when it appears

### Scenario: Toast Notification (Auto-Dismiss)
***

Toast notifications appear briefly (typically 3-5 seconds) and then disappear. KaneAI does not currently support interacting with toast notifications via natural language commands. Use a JS snippet to capture them instead.
```javascript
// Wait briefly and capture the toast content
return document.querySelector('.toast-message')?.textContent || 'NO TOAST FOUND';
```

:::tip
Adjust the selector (`.toast-message`) to match your application's toast component class or ID.
:::

### Scenario: Modal After Click
***

```
click on "Delete Account" button
wait for 2 seconds
assert the confirmation modal is visible
assert "Are you sure you want to delete your account?" is visible in the modal
click "Cancel" inside the modal
assert the modal is not visible
```

### Scenario: Debounced Auto-Complete Search
***

Search fields often wait 300-500ms after the user stops typing before making an API call.

```
type "react testing" in the search bar
wait for 2 seconds
assert search suggestions are visible
click on the first suggestion
assert the search results page has loaded
```

### Scenario: Page Redirect After Action
***

After login, the app redirects to the dashboard.

```
type "admin@example.com" in the email field
type "password123" in the password field
click "Sign In"
wait for 5 seconds
assert the current URL contains "/dashboard"
assert "Welcome, Admin" is visible
```

### Scenario: Lazy-Loaded Images
***

Product pages often load images lazily as you scroll.

```
scroll down 3 times
wait for 3 seconds
assert the product image for "Winter Jacket" is visible
```

### Scenario: Tab Content On Click
***

Tabs that load their content via AJAX when selected:

```
click on the "Reviews" tab
wait for 3 seconds
assert customer reviews are visible
assert "5 out of 5 stars" is visible
```

### Scenario: Conditional UI From API
***

A dashboard that shows different content based on the user's subscription:

```
go to https://app.example.com/dashboard
wait for 5 seconds
if "Upgrade to Pro" button is visible then click on it
```

## Handling Popups & Dialogs
***

KaneAI handles several types of popups and dialogs, as described below.

### Browser Alert Dialogs
***

KaneAI handles native browser alerts (`alert()`, `confirm()`, `prompt()`) automatically in most cases.

### Cookie Consent Banners
***

```
if "Accept Cookies" button is visible then click on it
```

### Permission Dialogs
***

For notification or location permission popups, handle them before they appear using [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/) or custom headers.

### Dismissing Popups (Mobile)
***

On mobile apps, use:
```
dismiss dialog
```

This works for popups that don't have visible close buttons.

## Network-Dependent Content
***

Use waits and network throttling to test content that depends on network conditions.

### Scenario: Slow API Response
***

When your app fetches data from a slow API:

```
click on "Generate Report"
wait for 15 seconds
assert "Report ready for download" is visible
```

**Or with custom timeout:** Set the assertion step timeout to 30 seconds instead of using explicit wait.

### Testing Under Poor Network Conditions
***

Use [KaneAI Network Throttling](/support/docs/kaneai-network-throttling/) to simulate slow connections:

1. Before starting the session, set network profile to **3G** or **Custom**
2. Add longer waits to account for slower load times
3. Validate that the app handles slow networks gracefully

```
-- With 3G throttling enabled --
go to https://app.example.com
wait for 10 seconds
assert the page content has loaded
assert no "Network Error" message is visible
```

## Test Flow Patterns
***

These reusable patterns combine actions, waits, and assertions for reliable async testing.

### Action → Wait → Assert
***

The most reliable pattern for any action that triggers asynchronous behavior:

```
-- Action --
click on "Submit" button

-- Wait --
wait for 3 seconds

-- Assert --
assert "Success" message is visible
```

### Scroll → Wait → Interact
***

For content below the fold:

```
scroll down until "Contact Us" section is visible
wait for 2 seconds
type "feedback@example.com" in the email field
```

### Pattern: Conditional Wait
***

When you're unsure if a popup or overlay will appear:

```
if "Close" button is visible then click on "Close" button
wait for 2 seconds
click on "Continue" button
```

## Troubleshooting
***

Common timing mistakes and how to fix them:

| Mistake | What happens | Fix |
|---|---|---|
| No wait after page navigation | Assertion runs on old page, fails or passes incorrectly | Add `wait for 3-5 seconds` after navigation |
| Asserting toast after long wait | Toast has already disappeared | Assert immediately after the triggering action via JS snippet |
| Using explicit wait when custom timeout is better | Test always waits full duration even if element appears early | Use custom step timeout instead |
| Asserting dynamic count without waiting for load | Count is 0 because data hasn't loaded yet | Wait for data to load, then assert count |
| Not handling conditional popups | Test fails when an unexpected cookie banner or dialog appears | Use `if` conditional to dismiss popups |

## Next Steps
***

Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/)
- [KaneAI While Loops](/support/docs/kaneai-while-loops/)
- [KaneAI JavaScript Execution](/support/docs/kane-ai-javascript-execution/)
- [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/)
