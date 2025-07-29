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

## Error categories for Web Authoring

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


### Error categories for Mobile Authoring

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