---
id: kaneai-kb-dynamic-content-waits-and-page-state
title: Dynamic Content, Waits & Page State
hide_title: false
sidebar_label: Dynamic Content, Waits & Page State
description: Handle loading spinners, async content, toast notifications, modals, infinite scroll, and timing-sensitive scenarios in KaneAI
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai waits
  - kaneai dynamic content
  - kaneai loading
  - async testing
url: https://www.testmuai.com/support/docs/kaneai-kb-dynamic-content-waits-and-page-state
site_name: TestMu AI
slug: kaneai-kb-dynamic-content-waits-and-page-state/
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
          "name": "Dynamic Content, Waits & Page State",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-dynamic-content-waits-and-page-state"
        }]
      })
    }}
></script>

Modern web applications are heavily asynchronous — data loads from APIs, pages render progressively, notifications pop up and disappear, and content appears based on user interaction. This guide teaches you how to handle these dynamic behaviors reliably in KaneAI tests.

## Understanding Waits in KaneAI

KaneAI provides three types of wait mechanisms:

### 1. Default Auto-Wait (Built-In)

Every element interaction command (click, type, assert, etc.) automatically waits up to **10 seconds** for the target element to become interactable. You don't need to add explicit waits for most simple interactions.

**When auto-wait is sufficient:**
- Clicking a button that's already on the page
- Typing in a visible input field
- Asserting text that's already rendered

### 2. Explicit Waits

Use explicit waits when you know an action will take longer than the default 10 seconds, or when you need to pause between steps.

```
wait for 5 seconds
wait for 10 seconds
```

**When to use explicit waits:**
- After form submission that triggers a page redirect
- After clicking a button that triggers an API call
- Between cascading dropdown selections
- After scrolling on infinite-scroll pages
- Before asserting on content loaded from an API

### 3. Custom Step Timeout

For individual steps that need more time, set a custom timeout via the step menu:

1. Click the **step menu** (three dots)
2. Select **Step Timeout**
3. Enter your timeout value (up to 300 seconds)

**When to use custom timeout:**
- Waiting for file uploads to complete
- Waiting for large reports to generate
- Waiting for third-party payment gateways to respond

:::tip Recommendation
Prefer **custom step timeout** over explicit waits when you're waiting for a specific element to appear. Custom timeouts are dynamic — they proceed as soon as the element is ready, while explicit waits always wait the full duration.
:::

## Real-World Dynamic Content Scenarios

### Scenario: Loading Spinner After Form Submit

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

Toast notifications appear briefly (typically 3-5 seconds) and then disappear. KaneAI does not currently support interacting with toast notifications via natural language commands. Use a JS snippet to capture them instead.
```javascript
// Wait briefly and capture the toast content
return document.querySelector('.toast-message')?.textContent || 'NO TOAST FOUND';
```

:::tip
Adjust the selector (`.toast-message`) to match your application's toast component class or ID.
:::

### Scenario: Modal/Dialog After Button Click

```
click on "Delete Account" button
wait for 2 seconds
assert the confirmation modal is visible
assert "Are you sure you want to delete your account?" is visible in the modal
click "Cancel" inside the modal
assert the modal is not visible
```

### Scenario: Auto-Complete Search (Debounced Input)

Search fields often wait 300-500ms after the user stops typing before making an API call.

```
type "react testing" in the search bar
wait for 2 seconds
assert search suggestions are visible
click on the first suggestion
assert the search results page has loaded
```

### Scenario: Page Redirect After Action

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

Product pages often load images lazily as you scroll.

```
scroll down 3 times
wait for 3 seconds
assert the product image for "Winter Jacket" is visible
```

### Scenario: Tab Content That Loads on Click

Tabs that load their content via AJAX when selected:

```
click on the "Reviews" tab
wait for 3 seconds
assert customer reviews are visible
assert "5 out of 5 stars" is visible
```

### Scenario: Conditional UI Based on API Response

A dashboard that shows different content based on the user's subscription:

```
go to https://app.example.com/dashboard
wait for 5 seconds
if "Upgrade to Pro" button is visible then click on it
```

## Handling Popups & Dialogs

### Browser Alert Dialogs

KaneAI handles native browser alerts (`alert()`, `confirm()`, `prompt()`) automatically in most cases.

### Cookie Consent Banners

```
if "Accept Cookies" button is visible then click on it
```

### Permission Dialogs

For notification or location permission popups, handle them before they appear using Chrome options or custom headers. See [Chrome Options](/support/docs/kaneai-chrome-options).

### Dismissing Popups Without Close Buttons (Mobile)

On mobile apps, use:
```
dismiss dialog
```

This works for popups that don't have visible close buttons.

## Network-Dependent Content

### Scenario: Slow API Response

When your app fetches data from a slow API:

```
click on "Generate Report"
wait for 15 seconds
assert "Report ready for download" is visible
```

**Or with custom timeout:** Set the assertion step timeout to 30 seconds instead of using explicit wait.

### Testing Under Poor Network Conditions

Use KaneAI's [Network Throttling](/support/docs/kaneai-network-throttling) to simulate slow connections:

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

## Patterns for Robust Test Flows

### Pattern: Action → Wait → Assert

The most reliable pattern for any action that triggers asynchronous behavior:

```
-- Action --
click on "Submit" button

-- Wait --
wait for 3 seconds

-- Assert --
assert "Success" message is visible
```

### Pattern: Scroll → Wait → Interact

For content below the fold:

```
scroll down until "Contact Us" section is visible
wait for 2 seconds
type "feedback@example.com" in the email field
```

### Pattern: Conditional Wait for Dynamic Content

When you're unsure if a popup or overlay will appear:

```
if "Close" button is visible then click on "Close" button
wait for 2 seconds
click on "Continue" button
```

## Common Mistakes and How to Avoid Them

| Mistake | What happens | Fix |
|---|---|---|
| No wait after page navigation | Assertion runs on old page, fails or passes incorrectly | Add `wait for 3-5 seconds` after navigation |
| Asserting toast after long wait | Toast has already disappeared | Assert immediately after the triggering action via JS snippet |
| Using explicit wait when custom timeout is better | Test always waits full duration even if element appears early | Use custom step timeout instead |
| Asserting dynamic count without waiting for load | Count is 0 because data hasn't loaded yet | Wait for data to load, then assert count |
| Not handling conditional popups | Test fails when an unexpected cookie banner or dialog appears | Use `if` conditional to dismiss popups |
