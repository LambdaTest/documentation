---
id: error-handling-kaneai
title: Error Handling in Authoring
sidebar_label: Error Handling
description: Use LambdaTest Accessibility DevTools to automatically find and report accessibility issues as per WCAG guidelines.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/error-handline-kaneai/
site_name: LambdaTest
slug: error-handline-kaneai/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Accessibility Android Rules",
          "item": "https://www.lambdatest.com/support/docs/accessibility-android-rules/"
        }]
      })
    }}
></script>


This page provides a comprehensive reference for common errors encountered when authoring automated test cases for both web and app platforms.  Each table below lists error categories, describes what they mean, gives examples of instructions that are not accepted, and suggests how to write correct instructions.  

Use this guide to quickly identify, understand, and correct authoring issues to ensure your test cases run smoothly.

## Error categories for Web and App Authoring 

### Unsupported Operation
**Description:** This command is not supported while authoring test cases. It applies to actions that cannot be executed in the authoring environment. <br />
**Common Authoring Error:** Draw signature or Take a screenshot, Hover over the settings icon <br />
**Suggested Ways:** Use supported web actions e.g., Use tap or click instead of hover or Try performing using slash commands in the prompt box.

---

### Invalid Parameter
**Description:** The value provided is not valid for this command.  The value provided is not valid for this command. This may happen if the input is missing, outside the supported range, or formatted incorrectly.<br />
**Common Authoring Error:** Switch to tab with index 0 or Swipe top left.  <br />
**Suggested Ways:** Use: scroll up, scroll down, scroll left, or scroll right. You can also use pixel value and percentage, scroll until.

---

### Nested Conditional
**Description:** Conditional logic cannot be placed inside another conditional. To avoid errors, break down the flow into separate, standalone conditions instead of nesting them. <br />
**Common Authoring Error:** If X is visible then if Y is not visible then click it.  
**Suggested Ways:** Use separate, simple conditions. E.g., If X is visible then click it.

---

### Missing Context
**Description:** The system cannot determine the required state or context. This usually occurs when the instruction relies on information that hasn’t been defined, provided, or established earlier in the test. <br />
**Common Authoring Error:** After clicking login, verify 'redirect happens' or Verify the checkbox you ticked earlier is now unchecked. 
**Suggested Ways:** Assert only on current, observable states.

---

### Ambiguous Relationship
**Description:** The specified property or relationship is too vague for the system to validate. Use clear and precise terms to ensure accurate validation. <br /> 
**Common Authoring Error:**  

1. Check page loaded properly without errors  
2. Assert if input field is editable  

**Suggested Ways:** Use specific, testable properties (e.g., visible, enabled, disabled).

---

### Invalid Assertion
**Description:** The assertion provided is either not supported or is too broad to be validated. Use only allowed assertion operators and ensure the condition is specific and measurable. <br /> 
**Common Authoring Error:**  

1. Assert all products are visible  
2. Check all products have price  

**Suggested Ways:** Assert each product individually or specify a count.

---

### Excessive Queries
**Description:** The instruction attempts to check too many elements at once. Reduce the number of queries to stay within the supported limit. <br /> 
**Common Authoring Error:** Assert login, signup, user, password, continue, email is visible  
**Suggested Ways:** Split into multiple instructions.

---

### Instruction is Too Complex
**Description:** The instruction contains too many actions or conditions to be processed at once. Simplify it by breaking it into smaller, more manageable steps. <br /> 
**Common Authoring Error:** Assert user is logged in and profile is updated and dashboard is loaded  
**Suggested Ways:** Break into smaller steps.

---

### Unspecified Element
**Description:** The target element is not clearly defined. Provide a specific identifier to ensure the system can locate the correct element. <br /> 
**Common Authoring Error:** Click it, Type in input field or Tap it.<br />
**Suggested Ways:** Specify the exact element, e.g., click 'Submit'.

---

### Vague Instruction
**Description:** The instruction is unclear or incomplete.  
**Common Authoring Error:** Waiting, qwertyu, Perform login on this page.  
**Suggested Ways:** Provide a specific action or check.

---

### Attribute Not Allowed
**Description:** Attribute used is not supported (e.g., button has color #333 on mobile). <br />
**Common Authoring Error:** Using blocked or unsupported attributes. <br />
**Suggested Ways:** Remove it or use a supported attribute.

---

### Invalid Variable Syntax
**Description:** The variable is written in an incorrect format, such as using extra or mismatched braces, spaces.  
**Common Authoring Error:** Wrong variable like ``${{name}}`` or ``${ user }``.  
**Suggested Ways:** Always use ``${var}`` or ``{{var}}`` format.

---

### Time Sensitive Assertion
**Description:** The instruction attempts to validate temporary UI elements such as toasts, spinners, or banners. These elements are short-lived and may lead to unreliable results; use stable post-conditions instead. <br />
**Common Authoring Error:** Example — assert toast says "Forecast job deleted". <br />
**Suggested Ways:** Instead, check something stable (e.g., row is gone, job is absent).

---


<br />
> _Have any feedback or request? Reach out to us via support@lambdatest.com and we would be happy to hear from you._

