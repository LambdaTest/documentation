---
id: kane-ai-supported-assertions
title: KaneAI - Supported Assertions
hide_title: false
sidebar_label: Supported Assertions
description: KaneAI supports a wide range of assertions to validate test cases efficiently. Here's an overview of the supported and unsupported assertions.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai assertions
url: https://www.lambdatest.com/support/docs/kane-ai-supported-assertions/
site_name: LambdaTest
slug: kane-ai-supported-assertions/
---

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
          "name": "KaneAI Supported Assertions",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-assertions/"
        }]
      })
    }}
></script>
KaneAI offers robust assertion support to validate various aspects of your test cases efficiently. Below is an overview of the supported and unsupported assertions.

## Supported Assertions

KaneAI supports a range of assertions to make test validations more seamless and effective. Here are the types of assertions currently supported:

### Driver Assertions
Driver assertions rely on the web driver to validate browser url, page & window properties and dimensions. 

**Examples:**
- Assert if the current browser URL is "https://example.com".
- Check if the page title is "Dashboard".
- Validate if the client height and width match the expected values.

### Text Assertions
Text assertions validate the presence or absence of specific text on the screen.

**Examples:**
- Assert if the text "Welcome Back!" is visible.
- Check if the error message "Invalid password" appears on failed login.

### Selection State Assertions
Selection state assertions verify the selection status of elements like checkboxes and radio buttons.

**Examples:**
- Assert if the "Remember Me" checkbox is checked.
- Verify if the "Male" radio button is selected.

### Color Assertions
Color assertions validate the color properties of elements on the screen.

**Examples:**
- Assert if the submit button has a blue background.
- Check if the error message appears in red.

### Visual Assertions
Visual assertions ensure the visibility of images on the screen.

**Examples:**
- Assert if the company logo is displayed in the header.
- Verify the visibility of a product image on the product page.

### Relative Assertions
Relative assertions check the visibility of one element in relation to another.

**Examples:**
- Assert if the login button is in same column as the username field.
- Check if the submit button and cancel button are in the same row.

---

## Unsupported Assertions
There are some assertions that KaneAI does not support at this moment. However the support for these kind of assertions is currently under development.
Below are examples of unsupported assertions along with examples.

### Element State Assertions (To be available soon)
These assertions check for state of elements like being disabled or enabled.

**Examples:**
- Assert if the submit button is disabled.
- Assert if text input field is enabled.
- Assert if a dropdown is expanded.

### Element Property Assertions (To be available soon)
Property assertions involve checking styles or attributes of an element.

**Examples:**
- Assert if the font size of a header is "16px".
- Assert if the padding of a button is "10px".

### Spatial Assertions (To be available soon)
Spatial assertions validate the position or arrangement of elements.

**Examples:**
- Assert that the 5th column of a table contains "Jordan.Mathews".

### Logical Assertions (To be available soon)
Logical assertions are used to combine multiple conditions.

**Examples:**
- Assert if the user is an admin **and** is logged in.
- Assert if either username or email is filled.

### Mathematical Assertions (To be available soon)
Mathematical assertions verify numerical operations or calculations.

**Examples:**
- Verify if the sum of 3 and 4 equals 7.

### Assertions for Actions Being Performed (To be available soon)
These assertions aim to check the state after an action, which is not supported directly.

**Examples:**
- Assert if the page is scrolled to the bottom.
- Assert if a tooltip appears after hovering over an info icon.
  - Currently, you can break this into two steps: Hover on the info icon, then assert if the tooltip is visible.

### Nested Assertions (To be available soon)
Nested assertions involve multiple layers of validation within a single assertion.

**Examples:**
- Assert if both the login button is enabled and the welcome message is visible.

---

For further assistance or questions, feel free to reach out to our support team at kaneaisupport@lambdatest.com.
