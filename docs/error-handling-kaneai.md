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

## Error Categories for Web and App Authoring 

| Category              | Description                                                        | Common Authoring Error                                          | Suggested Ways                                                                                 |
|-----------------------|--------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| Unsupported Operation | The command is not recognized or not supported.                   | Draw signature                                                   | Use only supported web actions, e.g., click, hover, type.                                       |
| Invalid Parameter     | The value provided is not valid for this command.                 | Switch to tab with index 0.                                      | Use: scroll up, scroll down, scroll left, or scroll right. You can also use pixel value and percentage, scroll until. |
| Nested Conditional    | Conditional logic inside another conditional is not allowed.      | If X is visible then if Y is not visible then click it           | Use separate, simple conditions. E.g., If X is visible then click it.                           |
| Missing Context       | The system cannot determine the required state or context.        | After clicking login, verify 'redirect happens'                  | Assert only on current, observable states.                                                      |
| Ambiguous Relationship| The property or relationship is too vague for the system to check.| 1- Check page loaded properly without errors; 2- Assert if input field is editable. | Use specific, testable properties (e.g., visible, enabled, disabled).                          |
| Invalid Assertion     | The assertion is not valid or too broad.                          | 1-Assert all products are visible; 2-Check all products have price. | Assert each product individually or specify a count.                                            |
| Excessive Queries     | Too many elements are checked in one instruction.                 | Assert login, signup, user, password, continue, email is visible | Split into multiple instructions.                                                               |
| Too Complex           | The instruction is too complex to process at once.                | Assert user is logged in and profile is updated and dashboard is loaded | Break into smaller steps.                                                                      |
| Unspecified Element   | The element to interact with is not clear.                        | Click it, Type in input field                                    | Specify the exact element, e.g., click 'Submit'.                                                |
| Vague Instruction     | The instruction is too unclear or incomplete.                     | Waiting, qwertyu, Perform login on this page.                    | Provide a specific action or check.                                                             |

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
**Suggested Ways:** Please attempt to resolve the issue on your side. if the problem continues, contact support at support@lambdatest.com for assistance.

---

### Reached Maximum Step Limit

**Description:** During the generative step, if the number of steps reaches the maximum limit of 50, this error occurs.<br />
**Common Authoring Error:** Flows that are too long or contain loops causing excessive steps.<br />
**Suggested Ways:** Simplify the flow by breaking it into smaller parts and ensure there are no infinite loops or unnecessary steps.

---

<br />
> _Have any feedback or request? Reach out to us via support@lambdatest.com and we would be happy to hear from you._

| Category              | Description                                                              | Common Authoring Error                                          | Suggested Instruction                                                             |
|-----------------------|---------------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Unsupported Operation | The command is not recognized or not supported by the app or OS.         | Hover over the settings icon                                     | Use tap or click instead of hover.                                                |
| Invalid Parameter     | The value provided is not valid for this command.                        | 1- Swipe top left. 2- Type into search box.                      | 1- Give concrete instruction, e.g., up, down, left, right. 2- Type "Mobile" in search box. |
| Nested Conditional    | Conditional logic inside another conditional is not allowed.             | If X is visible then if Y is not visible then tap it             | Use separate, simple conditions.                                                  |
| Missing Context       | The system cannot determine the required state or context.               | Verify the checkbox you ticked earlier is now unchecked          | Assert only on current, observable states.                                        |
| Ambiguous Relationship| The property or relationship is too vague for the system to check.       | Ensure app is working                                            | Use specific, testable properties (e.g., app is open).                            |
| Invalid Assertion     | The assertion is not valid or too broad.                                 | Assert all notifications are dismissed                           | Assert each notification individually or specify a count.                         |
| Excessive Queries     | Too many elements are checked in one instruction.                        | Check if the first 5 checkboxes are visible                      | Split into multiple instructions.                                                 |
| Too Complex           | The instruction is too complex to process at once.                       | Assert user is logged in and notifications are visible and settings are enabled | Break into smaller steps.                                                         |
| Unspecified Element   | The element to interact with is not clear.                               | Tap it                                                           | Specify the exact element, e.g., tap 'Login'.                                     |
| Vague Instruction     | The instruction is too unclear or incomplete.                            | Perform login                                                    | Provide a specific action or check.                                               |


> _Have any feedback or request? Reach out to us via support@lambdatest.com and we would be happy to hear from you._