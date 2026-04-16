---
id: error-handling-kaneai
title: Error Handling in Authoring
sidebar_label: Error Handling
description: Use TestMu AI Accessibility DevTools to automatically find and report accessibility issues as per WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/error-handling-kaneai/
site_name: TestMu AI
slug: error-handling-kaneai/
canonical: https://www.testmuai.com/support/docs/error-handling-kaneai/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Accessibility Android Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rules/`
        }]
      })
    }}
></script>


This page provides a comprehensive reference for common errors encountered when authoring automated test cases for both web and app platforms.  Each table below lists error categories, describes what they mean, gives examples of instructions that are not accepted, and suggests how to write correct instructions.  

Use this guide to quickly identify, understand, and correct authoring issues to ensure your test cases run smoothly.

## Error Categories for Web and App Authoring 

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

### Captcha Blocked

**Description:** If CAPTCHA is detected on screen, the test flow will be halted immediately, as interacting with CAPTCHA (e.g., solving puzzles, entering characters) is not supported. <br />
**Common Authoring Error:** Selecting CAPTCHA checkbox or entering CAPTCHA text. <br />
**Suggested Ways:** Generally, CAPTCHA is not present in application used for testing. If you encounter a CAPTCHA, try testing the application where CAPTCHA is disabled or not triggered.

---

### Loop Detected

**Description:** The same operation is repeated 3 or more times without any state change, indicating a possible infinite loop.<br />
**Common Authoring Error:** Repeating the same action (e.g., clicking) without checking state.<br />
**Suggested Ways:** Review and update the flow to ensure that each iteration results in a state change to avoid loops.

---

### Persistent Loader
**Description:** If a loading spinner or progress indicator stays visible for too long—specifically, after waiting multiple times or for more than 30 seconds—it usually means the system is stuck and not progressing as expected.<br />
**Common Authoring Error:** Waiting forever for the loader to go away without handling timeouts.<br />
**Suggested Ways:** Implement a timeout to stop waiting after a reasonable period. Use checks that confirm when the page or content has fully loaded instead of relying only on the loader disappearing.

---

### Dead Click

**Description:** If you keep clicking the same element but nothing happens—no change on the screen, no popup, and no response—this means the click isn’t having any effect.<br />
**Common Authoring Error:** Repeatedly clicking on an element that isn’t interactive or is disabled.<br />
**Suggested Ways:** Make sure the element you want to click can actually be clicked and will trigger some action before clicking it. stop the flow if clicks don’t cause any response.

---

### Navigation Stuck

**Description:** If you try to navigate multiple times but nothing changes on the screen, and the system can’t confirm that the navigation succeeded, it means the navigation is stuck.<br />
**Common Authoring Error:** repeatedly navigating without checking if the page or state actually changed.<br />
**Suggested Ways:** check the navigation to ensure it is successful and the page or state changes as expected.

---

### Lambda Error

**Description:** This error indicates an internal issue within the system. it may be caused by problems such as creating input parameters, accessing secrets, or other internal issues. <br />
**Common Authoring Error:** Errors related to parameter configuration, secret management, or system-level issues. <br />
**Suggested Ways:** Please attempt to resolve the issue on your side. if the problem continues, contact support at support@testmuai.com for assistance.

---

### Reached Maximum Step Limit

**Description:** During the generative step, if the number of steps reaches the maximum limit of 50, this error occurs.<br />
**Common Authoring Error:** Flows that are too long or contain loops causing excessive steps.<br />
**Suggested Ways:** Simplify the flow by breaking it into smaller parts and ensure there are no infinite loops or unnecessary steps.

---

### While Loop — Maximum Iterations Reached

**Error Code:** `LOOP_MAX_LIMIT_REACHED` <br />
**Error Message:** *While loop exceeded maximum iterations. This may be due to an issue with the loop condition or the actions within the loop.* <br />
**Description:** A [While Loop](/support/docs/kaneai-while-loops/) ran the hard cap of **30 iterations per execution** without its condition ever becoming false. This usually means a variable referenced in the condition is never updated inside the body, or the UI state being checked is never reached. <br />
**Common Authoring Error:** A loop condition such as `{{counter}} < 10` where no body step increments `{{counter}}`, or `while the spinner is visible` where the underlying action never dismisses the spinner. <br />
**Suggested Ways:** Review the loop condition and body to confirm the condition can become false. Add or correct a body step that advances the condition toward termination (for example, increment the counter, or interact with the element whose state is checked). If your scenario legitimately requires more than 30 iterations, contact your <BrandName /> support representative.

---

### While Loop — Infinite Loop Detected

**Error Code:** `INFINITE_LOOP_DETECTED` <br />
**Error Message:** *The while loop appears to be an infinite loop. Please review the loop condition and the actions within the loop to ensure that the loop will terminate properly.* <br />
**Description:** KaneAI detected a While Loop condition / body combination that cannot terminate — typically a condition that is independent of anything the body changes, or a comparison that is always true (for example, `1 == 1`). <br />
**Common Authoring Error:** A While Loop whose body does not touch any value referenced by the condition, or a condition built from constants only. <br />
**Suggested Ways:** Ensure the body contains at least one step that changes a value referenced by the condition — increment a counter, click a control that updates UI state, or wait for a status transition. If the condition uses constants, rewrite it so it depends on a variable or UI state that evolves during the loop.

---

### While Loop — Both Operands Are Parameters

**Error Code:** `BOTH_OPERANDS_AS_PARAMETERS` <br />
**Error Message:** *Both operands in the while loop condition are parameters. Only one operand should be a parameter.* <br />
**Description:** Both sides of a [While Loop](/support/docs/kaneai-while-loops/) condition are test parameters (for example, `${max_retries} > ${default_retries}`). Parameter values are fixed for the lifetime of a run, so such a condition cannot change between iterations — it would either loop forever or never enter. <br />
**Common Authoring Error:** Comparing two dataset parameters directly in the loop condition, such as `${threshold} > ${limit}`. <br />
**Suggested Ways:** Replace one operand with a runtime‑updated value — a counter variable incremented inside the body, a value read from the UI via a query, or a literal. Valid examples include `{{counter}} < ${max_retries}`, `${status} == "ready"`, and `{{cart_empty}} == false`.

---

### While Loop — Cannot Be Created via Natural Language

**Error Code:** `WHILE_NOT_SUPPORTED_VIA_NL` <br />
**Error Message:** *Looping is supported via slash commands only. Type / and select While Loop to add a loop.* <br />
**Description:** A natural‑language step was used to describe a loop (for example, *"repeat until the cart is empty"*, *"while the spinner is visible, do X"*, or *"keep clicking Next"*). The natural‑language pipeline does not expand these phrases into loops — [While Loops](/support/docs/kaneai-while-loops/) can only be added through the **/** slash command menu. <br />
**Common Authoring Error:** Typing looping phrases like *"keep clicking Load more until no more results appear"* as a regular step instead of creating a While Loop block. <br />
**Suggested Ways:** Remove the looping phrase from the plain‑English step. Open the slash menu (`/`), select **While Loop**, enter the loop condition, and add the per‑iteration action as a body step inside the loop.

---

<br />
> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._
