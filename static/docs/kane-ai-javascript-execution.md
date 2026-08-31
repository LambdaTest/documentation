# How to Execute JavaScript With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When a test interaction cannot be expressed in plain English, write or paste a JavaScript snippet and KaneAI runs it in the current test session. This gives you direct DOM access for cases natural language cannot reliably handle: read-only date pickers, exact table-cell assertions, string manipulation, clipboard, and browser storage. You switch between natural language and JavaScript step by step, with no setup.

## Prerequisites


Before you begin, make sure you have:


Before you add a JavaScript step, make sure you have the following.
- A KaneAI test session open in the test editor.
- The JavaScript snippet you want to run, tested in your browser DevTools console first.


## Execute a Custom JavaScript Step


Follow these steps to write and run a JavaScript snippet as a test step.

### Step 1: Open Write a Step


In KaneAI's test editor, go to the **Write a Step** field where you write test scenarios in plain English.

**Result:** The step input is ready to accept a new instruction.

### Step 2: Switch to JavaScript Mode


To switch to JavaScript execution mode, type the forward slash `/` or click the `+` icon. When the JavaScript option appears, click it to change the input mode to custom JavaScript.

**Result:** The step input accepts JavaScript instead of natural language.

### Step 3: Write Your JavaScript


Write or paste your custom JavaScript snippet directly into the text field. For example:

```javascript
function simulateTyping(element, text) {
element.value = '';  // Clear any existing value

for (let i = 0; i < text.length; i++) {
let char = text[i];
let keyDownEvent = new KeyboardEvent('keydown', {key: char});
element.dispatchEvent(keyDownEvent);
element.value += char;

let inputEvent = new Event('input', {bubbles: true});
element.dispatchEvent(inputEvent);
let keyUpEvent = new KeyboardEvent('keyup', {key: char});
element.dispatchEvent(keyUpEvent);
}

let changeEvent = new Event('change', {bubbles: true});
element.dispatchEvent(changeEvent);
}

// Example usage
let inputElement1 = document.querySelector('[aria-label="First Name"]');
let inputElement2 = document.querySelector('[aria-label="Last Name"]');
let inputElement3= document.querySelector('[aria-label="Email"]');
simulateTyping(inputElement1, 'Aman');
simulateTyping(inputElement2, 'Chopra');
simulateTyping(inputElement3, 'amanc@lambdatest.com');

return {"First name": "Aman", "Last name": "Chopra", "email": "amanc@lambdatest.com"};
```

This snippet simulates typing into text fields by dispatching key-related events (`keydown`, `input`, `keyup`, and `change`), mimicking real user interaction character by character. It fills the first name, last name, and email fields, then returns them as an object.

**Result:** The snippet sits in the step input, ready to run.

### Step 4: Execute the Step


When your code is ready, press Enter. KaneAI runs the snippet in the current test session.

**Result:** The snippet executes on the live page, and any return value is saved as a variable for later steps.

#### Return Values and Variables
If your snippet returns a value, KaneAI saves it as a variable you can use later in the test. The output is captured, assigned to a variable, and available throughout test execution.

For example, in the snippet above:

```javascript
return {"First name": "Aman", "Last name": "Chopra", "email": "amanc@lambdatest.com"};
```

The returned object with the keys `First name`, `Last name`, and `email` will be stored in a variable. You can reference this variable later in your test to validate or reuse the values.

> To use a variable created from a return value in a later step, reference the specific property (for example, First name) for verification or further actions.

#### JavaScript Snippets in Generated Code
When your test runs, KaneAI adds your snippet directly into the generated test code. Custom JavaScript interactions become part of the overall test logic, so you can track, debug, and modify them alongside the rest of the test.





## JS Snippet Workarounds by Scenario


Now that you can run a JavaScript step, the rest of this page is a library of ready-to-use snippets for the scenarios where natural language falls short. Each section below names where natural language is unreliable and gives the exact snippet to use instead.

### Add a JS Snippet as a Step


Follow these steps to run a snippet as a test step.

1. In the KaneAI input field, type `/` or click the `+` icon.
2. Select **Add JS Snippet**.
3. Write or paste your JavaScript code.
4. Click **Add** to execute it as a test step.

The snippet runs in the context of the page with full access to the DOM, `document`, `window`, and any JavaScript variables the page has defined.



### Date Picker Interactions


**Problem:** Many date pickers use read-only inputs that reject typed values. Natural language typing doesn't trigger the custom event handlers these components rely on.

#### Set Read-Only Date Picker

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

#### Set React DatePicker Date

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

#### Set Date Range Picker

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




### String Manipulation & Data Transformation


**Problem:** Operations like converting text to lowercase, extracting substrings, or formatting data are not reliably handled via natural language.

#### Convert Text to Lowercase

```javascript
const title = document.querySelector('h1.page-title').textContent;
const lowercase = title.toLowerCase();
if (lowercase === 'welcome to dashboard') {
return 'PASS: Title in lowercase matches expected value';
} else {
throw new Error('FAIL: Got "' + lowercase + '"');
}
```

#### Extract and Validate a Substring

```javascript
const orderText = document.querySelector('.order-id').textContent;
// Text is "Order #12345", extract just the number
const orderId = orderText.replace('Order #', '');
if (orderId.length === 5 && !isNaN(orderId)) {
return 'PASS: Order ID is valid: ' + orderId;
} else {
throw new Error('FAIL: Invalid order ID format: ' + orderId);
}
```

#### Trim Whitespace and Compare

```javascript
const actual = document.querySelector('.username').textContent.trim();
const expected = 'john_doe';
if (actual === expected) {
return 'PASS: Username matches';
} else {
throw new Error('FAIL: Expected "' + expected + '", got "' + actual + '"');
}
```



### Table & List Validation


**Problem:** KaneAI can't reliably assert specific cell values in complex tables (e.g., "the 5th column of the 3rd row contains X").

#### Assert Specific Table Cell Value

```javascript
const rows = document.querySelectorAll('table.users-table tbody tr');
const thirdRowFifthCol = rows[2].querySelectorAll('td')[4].textContent.trim();
if (thirdRowFifthCol === 'Active') {
return 'PASS: 3rd row, 5th column is "Active"';
} else {
throw new Error('FAIL: Got "' + thirdRowFifthCol + '"');
}
```

#### Count Table Rows

```javascript
const rowCount = document.querySelectorAll('table tbody tr').length;
if (rowCount === 10) {
return 'PASS: Table has 10 rows';
} else {
throw new Error('FAIL: Table has ' + rowCount + ' rows, expected 10');
}
```

#### Validate Table is Sorted

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



### Clipboard Operations


**Problem:** Natural language can't directly read or write clipboard content.

#### Copy Text to Clipboard

```javascript
const text = document.querySelector('.referral-code').textContent;
await navigator.clipboard.writeText(text);
return 'Copied to clipboard: ' + text;
```

#### Read Clipboard Content

```javascript
const clipText = await navigator.clipboard.readText();
return 'Clipboard contains: ' + clipText;
```



### Local Storage & Session Storage


**Problem:** You may need to verify, set, or clear browser storage for test setup or validation.

#### Read a Local Storage Value

```javascript
const token = localStorage.getItem('authToken');
if (token) {
return 'Auth token exists: ' + token.substring(0, 20) + '...';
} else {
throw new Error('FAIL: No auth token in localStorage');
}
```

#### Set a Local Storage Value

```javascript
localStorage.setItem('feature_flag_newUI', 'true');
return 'Feature flag set';
```

#### Clear Session Storage

```javascript
sessionStorage.clear();
return 'Session storage cleared';
```


### Quick Reference: JS Snippets


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

### Best Practices for JS Snippets


| Practice | Details |
|---|---|
| **Use natural language first** | Only fall back to JS when natural language is unreliable |
| **Keep snippets focused** | One snippet = one action or assertion |
| **Use descriptive return values** | Return "PASS: ..." or throw "FAIL: ..." for clear test output |
| **Null-check elements** | Always check if `querySelector` returns `null` before operating on it |
| **Test snippets in browser DevTools first** | Paste into the Console to verify before adding to KaneAI |

## Next Steps


Combine JavaScript steps with the rest of your KaneAI test flow.

- Reuse a snippet's return value with [KaneAI Using Variables](/support/docs/kane-ai-using-variables/).
- See every plain-English instruction in the [KaneAI Command Guide](/support/docs/kane-ai-command-guide/).
- Validate backend responses alongside UI steps with [KaneAI API Testing](/support/docs/kane-ai-api-testing/).
