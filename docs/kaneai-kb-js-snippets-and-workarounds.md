---
id: kaneai-kb-js-snippets-and-workarounds
title: JS Snippets & Workarounds
hide_title: false
sidebar_label: JS Snippets & Workarounds
description: Work around natural language limitations in KaneAI using JavaScript snippets for DOM manipulation, validation, date pickers, shadow DOM, and more
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai javascript
  - kaneai js snippet
  - kaneai workaround
  - kaneai limitations
url: https://www.testmuai.com/support/docs/kaneai-kb-js-snippets-and-workarounds
site_name: TestMu AI
slug: kaneai-kb-js-snippets-and-workarounds/
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
          "name": "JS Snippets & Workarounds",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-js-snippets-and-workarounds"
        }]
      })
    }}
></script>

KaneAI's natural language engine handles the vast majority of web testing scenarios. However, some interactions require direct DOM manipulation or precise programmatic control that natural language can't reliably express. For these cases, KaneAI provides **JS Snippets** — the ability to execute JavaScript code directly on the page.

This guide is organized by common QA scenario, showing you **when** natural language falls short and **exactly what JS snippet** to use as a workaround.

## How to Add a JS Snippet

1. In the KaneAI input field, type `/` or click the `+` icon
2. Select **Add JS Snippet**
3. Write or paste your JavaScript code
4. Click **Add** to execute it as a test step

The snippet runs in the context of the page and has full access to the DOM, `document`, `window`, and any JavaScript variables the page has defined.

---

## Date Picker Interactions

**Problem:** Many date pickers use read-only inputs that reject typed values. Natural language typing doesn't trigger the custom event handlers these components rely on.

### Set Date on a Read-Only Date Picker

```javascript
const dateInput = document.querySelector('input[name="startDate"]');
// Remove readonly temporarily
dateInput.removeAttribute('readonly');
// Set the value
dateInput.value = '2026-03-15';
// Trigger change events so the framework (React, Angular, Vue) picks up the change
dateInput.dispatchEvent(new Event('input', { bubbles: true }));
dateInput.dispatchEvent(new Event('change', { bubbles: true }));
return 'Date set to 2026-03-15';
```

### Set Date on React DatePicker

React components use synthetic events. Use the native input setter:

```javascript
const dateInput = document.querySelector('input[name="date"]');
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype, 'value'
).set;
nativeInputValueSetter.call(dateInput, '2026-03-15');
dateInput.dispatchEvent(new Event('input', { bubbles: true }));
return 'React date picker value set';
```

### Set Date Range Picker

```javascript
const startDate = document.querySelector('input[name="start"]');
const endDate = document.querySelector('input[name="end"]');

const setter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype, 'value'
).set;

setter.call(startDate, '2026-02-01');
startDate.dispatchEvent(new Event('input', { bubbles: true }));

setter.call(endDate, '2026-02-28');
endDate.dispatchEvent(new Event('input', { bubbles: true }));

return 'Date range set: Feb 1 - Feb 28, 2026';
```

---


## String Manipulation & Data Transformation

**Problem:** Operations like converting text to lowercase, extracting substrings, or formatting data are not reliably handled via natural language.

### Convert Text to Lowercase and Validate

```javascript
const title = document.querySelector('h1.page-title').textContent;
const lowercase = title.toLowerCase();
if (lowercase === 'welcome to dashboard') {
  return 'PASS: Title in lowercase matches expected value';
} else {
  throw new Error('FAIL: Got "' + lowercase + '"');
}
```

### Extract and Validate a Substring

```javascript
const orderText = document.querySelector('.order-id').textContent;
// Text is "Order #12345" — extract just the number
const orderId = orderText.replace('Order #', '');
if (orderId.length === 5 && !isNaN(orderId)) {
  return 'PASS: Order ID is valid: ' + orderId;
} else {
  throw new Error('FAIL: Invalid order ID format: ' + orderId);
}
```

### Trim Whitespace and Compare

```javascript
const actual = document.querySelector('.username').textContent.trim();
const expected = 'john_doe';
if (actual === expected) {
  return 'PASS: Username matches';
} else {
  throw new Error('FAIL: Expected "' + expected + '", got "' + actual + '"');
}
```

---

## Table & List Validation

**Problem:** KaneAI can't reliably assert specific cell values in complex tables (e.g., "the 5th column of the 3rd row contains X").

### Assert Specific Table Cell Value

```javascript
const rows = document.querySelectorAll('table.users-table tbody tr');
const thirdRowFifthCol = rows[2].querySelectorAll('td')[4].textContent.trim();
if (thirdRowFifthCol === 'Active') {
  return 'PASS: 3rd row, 5th column is "Active"';
} else {
  throw new Error('FAIL: Got "' + thirdRowFifthCol + '"');
}
```

### Count Table Rows

```javascript
const rowCount = document.querySelectorAll('table tbody tr').length;
if (rowCount === 10) {
  return 'PASS: Table has 10 rows';
} else {
  throw new Error('FAIL: Table has ' + rowCount + ' rows, expected 10');
}
```

### Validate Table is Sorted

```javascript
const cells = Array.from(document.querySelectorAll('table tbody tr td:first-child'));
const values = cells.map(cell => cell.textContent.trim());
const sorted = [...values].sort((a, b) => a.localeCompare(b));
const isSorted = JSON.stringify(values) === JSON.stringify(sorted);
if (isSorted) {
  return 'PASS: Table is sorted alphabetically by first column';
} else {
  throw new Error('FAIL: Table is not sorted. Got: ' + values.join(', '));
}
```

---

## Clipboard Operations

**Problem:** Natural language can't directly read or write clipboard content.

### Copy Text to Clipboard

```javascript
const text = document.querySelector('.referral-code').textContent;
await navigator.clipboard.writeText(text);
return 'Copied to clipboard: ' + text;
```

### Read Clipboard Content

```javascript
const clipText = await navigator.clipboard.readText();
return 'Clipboard contains: ' + clipText;
```

---

## Local Storage & Session Storage

**Problem:** You may need to verify, set, or clear browser storage for test setup or validation.

### Read a Local Storage Value

```javascript
const token = localStorage.getItem('authToken');
if (token) {
  return 'Auth token exists: ' + token.substring(0, 20) + '...';
} else {
  throw new Error('FAIL: No auth token in localStorage');
}
```

### Set a Local Storage Value (Test Setup)

```javascript
localStorage.setItem('feature_flag_newUI', 'true');
return 'Feature flag set';
```

### Clear Session Storage (Logout Simulation)

```javascript
sessionStorage.clear();
return 'Session storage cleared';
```
---

## Quick Reference: When to Use JS Snippets

| Scenario | Natural Language? | JS Snippet Needed? |
|---|---|---|
| Click a visible button | Yes | No |
| Type in a standard input | Yes | No |
| Assert text is visible | Yes | No |
| Set date on read-only date picker | Unreliable | **Yes** |
| Validate specific table cell | No | **Yes** |
| String manipulation (lowercase, trim) | Unreliable | **Yes** |
| Read/write localStorage | No | **Yes** |
| Clipboard operations | No | **Yes** |
| Check if page is fully loaded | No | **Yes** |
| Count elements on page | Unreliable for exact counts | **Yes** |

## Best Practices for JS Snippets

| Practice | Details |
|---|---|
| **Use natural language first** | Only fall back to JS when natural language is unreliable |
| **Keep snippets focused** | One snippet = one action or assertion |
| **Use descriptive return values** | Return "PASS: ..." or throw "FAIL: ..." for clear test output |
| **Null-check elements** | Always check if `querySelector` returns `null` before operating on it |
| **Test snippets in browser DevTools first** | Paste into the Console to verify before adding to KaneAI |
