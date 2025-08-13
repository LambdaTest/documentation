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
KaneAI offers a range of commands to perform various actions on web pages. These commands, called instructions, guide KaneAI in executing specific tasks during your test cases. By using instructions along with descriptive instructions, you can create clear, human-readable test cases.

This document provides an overview of the different instructions available in KaneAI, allowing you to write test cases in plain English with ease.

## Navigation and Page Interaction

### Open a website
- `go to https://www.lambdatest.com`
- `open https://www.lambdatest.com`

### Click
- `click on login button`

### Type or Enter Text
- `enter "random@gmail.com"`
- `type "random@gmail.com"`
- `send keys "random@gmail.com"`

### Clear Input
- `clear email input field`
- `clear the password field`

### Select Date
- `select 21st september date`

### Hover
- `hover on shop by category option`

### Search
- `search for iphone`

### Refresh Page
- `refresh the page`

### Navigate Back/Forward
- `go back`
- `navigate back`
- `go forward`
- `navigate forward`

### Wait

#### Default wait for element
For all instructions which require an element to interact with in web, wait for element is added in the generated code with a default timeout of 10 seconds.

#### Explicit Waits
You may also define explicit wait timeouts using natural language such as below.
- `wait for 5 seconds`

#### Custom Wait Timeouts
You can assign a custom timeout to any specific step, waiting for that element based on visibility or clickibility.

Follow these steps to set timeouts on test steps:

- Click on three dots on step & select the `Step Timeout` option.
- Set the max time (in seconds) you want to wait for a particular element. 

:::note
You can add maximum of 300 seconds timeout for an operation. 
:::
<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/commands/select_set_timeout.png').default} alt="" className="doc_img"/>

:::note
 Custom Waits can only be added on instruction involving element based interactions. 
:::

## Tab Management

### Open New Tab
- `open new lambdatest tab`

### Switch Tabs
- `switch to 2nd tab`
- `switch to lambdatest tab`

### Close Tab
- `close lambdatest tab`
- `close 2nd tab`

## Page Interaction
### Scroll
- `scroll until the button is visible`
- `scroll until xyz option is visible inside a section`
- `scroll once`
- `scroll by 100px`
- `scroll to the bottom`
- `scroll to the top`
- `scroll 3 times`
- `scroll by 20 percent`

If your element is not visible in the viewport, you can use the `scroll until` command to go to that particular element if that is present currently in the DOM. This can be used in vertical scrollable pages & even on the scrollable sub-sections. 

## Assertions
KaneAI supports a range of assertions to make test validations more seamless and effective. Here are the types of assertions currently supported:

### Driver Assertions
Driver assertions rely on the web driver to validate browser url, page & window properties and dimensions. 

**Examples:**
- Assert if the current browser URL is "https://example.com".
- Validate if the client height and width match the expected values.

### Text Assertions
Text assertions validate the presence or absence of specific text on the screen.

**Examples:**
- Assert if the text "Welcome Back!" is visible.
- Check if the error message "Invalid password" appears on failed login.

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

### Mathematical Assertions
Mathematical assertions verify numerical operations or calculations.

**Examples:**
- Verify if the sum of 3 and 4 equals 7.

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

## Query Information
- `query the current url`
- `query the time mentioned in the poster`

## Conditional Actions
### Conditional Click
- `if pop up is present in the viewport then click on it`

### Conditional Selection
- `if price of the product is less than 200 then click on add to cart else select second product`

## Best Practices

- Use clear and specific commands to ensure accurate execution.
- Combine different command types to create comprehensive test scenarios.
- Utilize conditional statements for more dynamic and robust testing.
- Always include appropriate wait times to account for page load and element visibility.
- Use assertions to verify the expected state of the page or elements.