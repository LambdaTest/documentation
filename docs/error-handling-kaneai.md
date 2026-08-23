---
id: error-handling-kaneai
title: KaneAI Authoring Errors
hide_title: true
toc_max_heading_level: 2
sidebar_label: Errors
description: Reference of common KaneAI authoring errors for web and app tests, what each means, and how to rewrite the instruction correctly.
keywords:
    - testmu ai kaneai
    - kaneai errors
    - kaneai error handling
    - test authoring errors
    - kaneai troubleshooting
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
          "name": "KaneAI Authoring Errors",
          "item": `${BRAND_URL}/support/docs/error-handling-kaneai/`
        }]
      })
    }}
></script>

# KaneAI Authoring Errors
***

KaneAI rejects any instruction it cannot reliably execute and returns a categorized error. This reference lists the common web and app authoring errors. Each entry uses the same schema: what the error means, an example that is not accepted, and how to rewrite the instruction correctly. Use it to identify, understand, and correct authoring issues.

## Web and App Error Categories
***

Each category below describes what the error means, an example that is rejected, and how to rewrite the instruction.

### Unsupported Operation
***

**Description:** This command is not supported while authoring test cases. It applies to actions that cannot be executed in the authoring environment.<br />
**Common error:** Draw signature, take a screenshot, or hover over the settings icon.<br />
**How to fix:** Use a supported web action, for example tap or click instead of hover, or perform the action using slash commands in the prompt box.

### Invalid Parameter
***

**Description:** The value provided is not valid for this command. This can happen if the input is missing, outside the supported range, or formatted incorrectly.<br />
**Common error:** Switch to tab with index 0, or swipe top left.<br />
**How to fix:** Use scroll up, scroll down, scroll left, or scroll right. You can also use a pixel value, a percentage, or scroll until.

### Nested Conditional
***

**Description:** Conditional logic cannot be placed inside another conditional. Break the flow into separate, standalone conditions instead of nesting them.<br />
**Common error:** If X is visible then if Y is not visible then click it.<br />
**How to fix:** Use separate, simple conditions, for example: If X is visible then click it.

### Missing Context
***

**Description:** The system cannot determine the required state or context. This usually occurs when the instruction relies on information that has not been defined, provided, or established earlier in the test.<br />
**Common error:** After clicking login, verify 'redirect happens', or verify the checkbox you ticked earlier is now unchecked.<br />
**How to fix:** Assert only on current, observable states.

### Ambiguous Relationship
***

**Description:** The specified property or relationship is too vague for the system to validate. Use clear, precise terms to ensure accurate validation.<br />
**Common error:** Check page loaded properly without errors, or assert if input field is editable.<br />
**How to fix:** Use specific, testable properties, for example visible, enabled, or disabled.

### Invalid Assertion
***

**Description:** The assertion is either not supported or too broad to be validated. Use only allowed assertion operators and keep the condition specific and measurable.<br />
**Common error:** Assert all products are visible, or check all products have price.<br />
**How to fix:** Assert each product individually or specify a count.

### Excessive Queries
***

**Description:** The instruction attempts to check too many elements at once. Reduce the number of queries to stay within the supported limit.<br />
**Common error:** Assert login, signup, user, password, continue, email is visible.<br />
**How to fix:** Split the check into multiple instructions.

### Instruction Is Too Complex
***

**Description:** The instruction contains too many actions or conditions to be processed at once.<br />
**Common error:** Assert user is logged in and profile is updated and dashboard is loaded.<br />
**How to fix:** Break the instruction into smaller steps.

### Unspecified Element
***

**Description:** The target element is not clearly defined. Provide a specific identifier so the system can locate the correct element.<br />
**Common error:** Click it, type in input field, or tap it.<br />
**How to fix:** Specify the exact element, for example click 'Submit'.

### Vague Instruction
***

**Description:** The instruction is unclear or incomplete.<br />
**Common error:** Waiting, qwertyu, or perform login on this page.<br />
**How to fix:** Provide a specific action or check.

### Attribute Not Allowed
***

**Description:** The attribute used is not supported, for example button has color #333 on mobile.<br />
**Common error:** Using a blocked or unsupported attribute.<br />
**How to fix:** Remove the attribute or use a supported one.

### Invalid Variable Syntax
***

**Description:** The variable is written in an incorrect format, such as extra or mismatched braces or spaces.<br />
**Common error:** A variable such as ``${{name}}`` or ``${ user }``.<br />
**How to fix:** Use the ``${var}`` or ``{{var}}`` format.

### Time Sensitive Assertion
***

**Description:** The instruction attempts to validate temporary UI elements such as toasts, spinners, or banners. These elements are short-lived and can produce unreliable results.<br />
**Common error:** Assert toast says "Forecast job deleted".<br />
**How to fix:** Check a stable post-condition instead, for example the row is gone or the job is absent.

### Captcha Blocked
***

**Description:** When a CAPTCHA is detected on screen, the test flow halts immediately, because interacting with a CAPTCHA (solving puzzles, entering characters) is not supported.<br />
**Common error:** Selecting a CAPTCHA checkbox or entering CAPTCHA text.<br />
**How to fix:** Test an application where CAPTCHA is disabled or not triggered.

### Loop Detected
***

**Description:** The same operation is repeated three or more times without any state change, indicating a possible infinite loop.<br />
**Common error:** Repeating the same action, such as clicking, without checking state.<br />
**How to fix:** Update the flow so each iteration results in a state change.

### Persistent Loader
***

**Description:** A loading spinner or progress indicator stays visible for too long (after waiting multiple times or for more than 30 seconds), which usually means the system is stuck.<br />
**Common error:** Waiting indefinitely for the loader to disappear without handling timeouts.<br />
**How to fix:** Set a timeout to stop waiting after a reasonable period, and use checks that confirm the page or content has fully loaded instead of relying only on the loader disappearing.

### Dead Click
***

**Description:** You keep clicking the same element but nothing happens (no screen change, no popup, no response), which means the click has no effect.<br />
**Common error:** Repeatedly clicking an element that is not interactive or is disabled.<br />
**How to fix:** Confirm the element is clickable and triggers an action before clicking it, and stop the flow if clicks cause no response.

### Navigation Stuck
***

**Description:** You try to navigate multiple times but nothing changes on screen, and the system cannot confirm the navigation succeeded.<br />
**Common error:** Repeatedly navigating without checking whether the page or state actually changed.<br />
**How to fix:** Check that the navigation succeeds and the page or state changes as expected.

### Lambda Error
***

**Description:** An internal system issue occurred, such as creating input parameters, accessing secrets, or another internal problem.<br />
**Common error:** Issues related to parameter configuration, secret management, or system-level failures.<br />
**How to fix:** Retry the operation. If the problem continues, contact support at support@testmuai.com.

### Reached Maximum Step Limit
***

**Description:** During the generative step, the number of steps reached the maximum limit of 50.<br />
**Common error:** Flows that are too long or contain loops that produce excessive steps.<br />
**How to fix:** Break the flow into smaller parts and remove infinite loops or unnecessary steps.

### While Loop: Maximum Iterations Reached
***

**Description:** Error code `LOOP_MAX_LIMIT_REACHED`. A [While Loop](/support/docs/kaneai-while-loops/) reached the hard cap of **30 iterations per execution** without its condition becoming false. This usually means a variable referenced in the condition is never updated inside the body, or the UI state being checked is never reached.<br />
**Common error:** A loop condition such as `{{counter}} < 10` where no body step increments `{{counter}}`, or `while the spinner is visible` where the underlying action never dismisses the spinner.<br />
**How to fix:** Confirm the condition can become false, and add or correct a body step that advances it toward termination (increment the counter, or interact with the element whose state is checked). If your scenario legitimately requires more than 30 iterations, contact your <BrandName /> support representative.

### While Loop: Infinite Loop Detected
***

**Description:** Error code `INFINITE_LOOP_DETECTED`. KaneAI detected a While Loop condition and body combination that cannot terminate, typically a condition independent of anything the body changes, or a comparison that is always true (for example, `1 == 1`).<br />
**Common error:** A While Loop whose body does not touch any value referenced by the condition, or a condition built from constants only.<br />
**How to fix:** Ensure the body contains at least one step that changes a value referenced by the condition: increment a counter, click a control that updates UI state, or wait for a status transition. If the condition uses constants, rewrite it to depend on a variable or UI state that evolves during the loop.

### While Loop: Both Operands Are Parameters
***

**Description:** Error code `BOTH_OPERANDS_AS_PARAMETERS`. Both sides of a While Loop condition are test parameters (for example, `${max_retries} > ${default_retries}`). Parameter values are fixed for the lifetime of a run, so the condition cannot change between iterations; it would either loop forever or never enter.<br />
**Common error:** Comparing two dataset parameters directly in the loop condition, such as `${threshold} > ${limit}`.<br />
**How to fix:** Replace one operand with a runtime-updated value: a counter variable incremented inside the body, a value read from the UI via a query, or a literal. Valid examples include `{{counter}} < ${max_retries}`, `${status} == "ready"`, and `{{cart_empty}} == false`.

### While Loop: Cannot Be Created via Natural Language
***

**Description:** Error code `WHILE_NOT_SUPPORTED_VIA_NL`. A natural-language step described a loop (for example, *"repeat until the cart is empty"*, *"while the spinner is visible, do X"*, or *"keep clicking Next"*). The natural-language pipeline does not expand these phrases into loops; While Loops can only be added through the **/** slash command menu.<br />
**Common error:** Typing a looping phrase such as *"keep clicking Load more until no more results appear"* as a regular step instead of creating a While Loop block.<br />
**How to fix:** Remove the looping phrase from the step, open the slash menu (`/`), select **While Loop**, enter the loop condition, and add the per-iteration action as a body step inside the loop.

## Next Steps
***

Continue with these guides:

- Review the full [KaneAI command reference](/support/docs/kane-ai-command-guide/).
- Understand assertion failure behavior in [KaneAI failure conditions](/support/docs/kaneai-failure-conditions/).

<br />
> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._
