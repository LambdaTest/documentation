---
id: kane-ai-javascript-execution
title: KaneAI - JavaScript Execution
hide_title: false
sidebar_label: JavaScript Execution
description: Learn how to execute your tests on Kane AI using custom javascript snippets
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai guided walkthrough
  - kane ai prompts
  - kane ai commands
url: https://www.lambdatest.com/support/docs/kane-ai-javascript-execution/
site_name: LambdaTest
slug: kane-ai-javascript-execution/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI JavaScript Execution",
          "item": `${BRAND_URL}/support/docs/kane-ai-javascript-execution/`
        }]
      })
    }}
></script>
With KaneAI’s new JavaScript Execution feature, you now have the flexibility to write or paste custom JavaScript code snippets to perform tests. This allows for more advanced and customized test scenarios alongside KaneAI’s plain English test-writing format.

This can be very useful for:
- **Advanced Interactions:** If you need more granular control over interactions that can’t be expressed in plain English.
- **Complex Test Scenarios:** For scenarios that involve manipulating the DOM, testing specific elements, or interacting with APIs directly.
- **Flexibility:** Switch between natural language and JavaScript to suit your testing needs.
- **Precision:** Perform tests that require more detailed code logic.
- **Seamless Execution:** Test JavaScript code directly without any setup.

## How to Execute Custom JavaScript Tests
### Step 1: Click on the "Write a Step" Field
In KaneAI’s test editor, navigate to the "Write a Step" field where you typically write your test scenarios in plain English.

### Step 2: Trigger JavaScript Mode
To switch to JavaScript execution mode, type the forward slash `/` or click on the `+` icon. You will see a JavaScript Pop-up Option appear. Click on the JavaScript option to switch the input mode to custom JavaScript.

### Step 3: Write or Paste Your JavaScript Code
Now, you can write or paste your custom JavaScript code snippet directly into the text field. A sample JavaScript code:

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

The provided code snippet simulates typing into text fields programmatically by dispatching key-related events such as keydown, input, keyup, and change. It mimics real user interaction by typing each character into the field and updating its value accordingly. The example provided fills in the first name, last name, and email fields with specific values and returns them in an object format.

### Step 4: Execute the Test
Once your code is ready, simply press Enter. KaneAI will run your custom JavaScript snippet in the current testing environment.

#### Handling Return Values and Variable Usage
If your JavaScript snippet contains return values, KaneAI will automatically save these values in a variable that can be used later in the test. The output from your JavaScript code will be captured and assigned to a variable. This variable will be available for use throughout your test execution.

For example, in the code snippet provided:

```javascript
return {"First name": "Aman", "Last name": "Chopra", "email": "amanc@lambdatest.com"};
```

The returned object with the keys `First name`, `Last name`, and `email` will be stored in a variable. You can reference this variable later in your test to validate or reuse the values.

> Variables created from return values can be used in subsequent test steps. To use the variable, simply refer to the specific property (e.g., First name) in your test steps for verification or further actions.

#### JavaScript Snippets in Generated Code
When your test is executed, the JavaScript code snippet you provided will be added directly into the generated test code. This ensures that any custom interactions performed with JavaScript are part of the overall test logic. The inclusion of JavaScript in the generated code allows for easy tracking, debugging, and modification if needed.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/kane-ai-js-execution.mp4').default} type="video/mp4" />
</video>
