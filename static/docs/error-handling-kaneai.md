# Error Handling in Authoring

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page provides a comprehensive reference for common errors encountered when authoring automated test cases for both web and app platforms.  Each table below lists error categories, describes what they mean, gives examples of instructions that are not accepted, and suggests how to write correct instructions.

Use this guide to quickly identify, understand, and correct authoring issues to ensure your test cases run smoothly.


Each category below describes what the error means, an example that is rejected, and how to rewrite the instruction.

### Unsupported Operation


**Description:** This command is not supported while authoring test cases. It applies to actions that cannot be executed in the authoring environment.
**Common Authoring Error:** Draw signature or Take a screenshot, Hover over the settings icon
**Suggested Ways:** Use supported web actions e.g., Use tap or click instead of hover or Try performing using slash commands in the prompt box.

### Invalid Parameter


**Description:** The value provided is not valid for this command. This can happen if the input is missing, outside the supported range, or formatted incorrectly.
**Common error:** Switch to tab with index 0, or swipe top left.
**How to fix:** Use scroll up, scroll down, scroll left, or scroll right. You can also use a pixel value, a percentage, or scroll until.

### Nested Conditional


**Description:** Conditional logic cannot be placed inside another conditional. Break the flow into separate, standalone conditions instead of nesting them.
**Common error:** If X is visible then if Y is not visible then click it.
**How to fix:** Use separate, simple conditions, for example: If X is visible then click it.

### Missing Context


**Description:** The system cannot determine the required state or context. This usually occurs when the instruction relies on information that has not been defined, provided, or established earlier in the test.
**Common error:** After clicking login, verify 'redirect happens', or verify the checkbox you ticked earlier is now unchecked.
**How to fix:** Assert only on current, observable states.

### Ambiguous Relationship
**Description:** The specified property or relationship is too vague for the system to validate. Use clear and precise terms to ensure accurate validation.
**Common Authoring Error:**


**Description:** The specified property or relationship is too vague for the system to validate. Use clear, precise terms to ensure accurate validation.
**Common error:** Check page loaded properly without errors, or assert if input field is editable.
**How to fix:** Use specific, testable properties, for example visible, enabled, or disabled.

### Invalid Assertion
**Description:** The assertion provided is either not supported or is too broad to be validated. Use only allowed assertion operators and ensure the condition is specific and measurable.
**Common Authoring Error:**


**Description:** The assertion is either not supported or too broad to be validated. Use only allowed assertion operators and keep the condition specific and measurable.
**Common error:** Assert all products are visible, or check all products have price.
**How to fix:** Assert each product individually or specify a count.

### Excessive Queries


**Description:** The instruction attempts to check too many elements at once. Reduce the number of queries to stay within the supported limit.
**Common Authoring Error:** Assert login, signup, user, password, continue, email is visible
**Suggested Ways:** Split into multiple instructions.

### Instruction Is Too Complex


**Description:** The instruction contains too many actions or conditions to be processed at once.
**Common error:** Assert user is logged in and profile is updated and dashboard is loaded.
**How to fix:** Break the instruction into smaller steps.

### Unspecified Element


**Description:** The target element is not clearly defined. Provide a specific identifier so the system can locate the correct element.
**Common error:** Click it, type in input field, or tap it.
**How to fix:** Specify the exact element, for example click 'Submit'.

### Vague Instruction


**Description:** The instruction is unclear or incomplete.
**Common Authoring Error:** Waiting, qwertyu, Perform login on this page.
**Suggested Ways:** Provide a specific action or check.

### Attribute Not Allowed


**Description:** The attribute used is not supported, for example button has color #333 on mobile.
**Common error:** Using a blocked or unsupported attribute.
**How to fix:** Remove the attribute or use a supported one.

### Invalid Variable Syntax


**Description:** The variable is written in an incorrect format, such as extra or mismatched braces or spaces.
**Common error:** A variable such as ``${{name}}`` or ``${ user }``.
**How to fix:** Use the ``${var}`` or ``{{var}}`` format.

### Time Sensitive Assertion


**Description:** The instruction attempts to validate temporary UI elements such as toasts, spinners, or banners. These elements are short-lived and can produce unreliable results.
**Common error:** Assert toast says "Forecast job deleted".
**How to fix:** Check a stable post-condition instead, for example the row is gone or the job is absent.

### Captcha Blocked


**Description:** When a CAPTCHA is detected on screen, the test flow halts immediately, because interacting with a CAPTCHA (solving puzzles, entering characters) is not supported.
**Common error:** Selecting a CAPTCHA checkbox or entering CAPTCHA text.
**How to fix:** Test an application where CAPTCHA is disabled or not triggered.

### Loop Detected


**Description:** The same operation is repeated three or more times without any state change, indicating a possible infinite loop.
**Common error:** Repeating the same action, such as clicking, without checking state.
**How to fix:** Update the flow so each iteration results in a state change.

### Persistent Loader


**Description:** A loading spinner or progress indicator stays visible for too long (after waiting multiple times or for more than 30 seconds), which usually means the system is stuck.
**Common error:** Waiting indefinitely for the loader to disappear without handling timeouts.
**How to fix:** Set a timeout to stop waiting after a reasonable period, and use checks that confirm the page or content has fully loaded instead of relying only on the loader disappearing.

### Dead Click


**Description:** You keep clicking the same element but nothing happens (no screen change, no popup, no response), which means the click has no effect.
**Common error:** Repeatedly clicking an element that is not interactive or is disabled.
**How to fix:** Confirm the element is clickable and triggers an action before clicking it, and stop the flow if clicks cause no response.

### Navigation Stuck


**Description:** You try to navigate multiple times but nothing changes on screen, and the system cannot confirm the navigation succeeded.
**Common error:** Repeatedly navigating without checking whether the page or state actually changed.
**How to fix:** Check that the navigation succeeds and the page or state changes as expected.

### Lambda Error


**Description:** An internal system issue occurred, such as creating input parameters, accessing secrets, or another internal problem.
**Common error:** Issues related to parameter configuration, secret management, or system-level failures.
**How to fix:** Retry the operation. If the problem continues, contact support at support@testmuai.com.

### Reached Maximum Step Limit


**Description:** During the generative step, the number of steps reached the maximum limit of 50.
**Common error:** Flows that are too long or contain loops that produce excessive steps.
**How to fix:** Break the flow into smaller parts and remove infinite loops or unnecessary steps.

### While Loop: Maximum Iterations Reached


**Description:** Error code `LOOP_MAX_LIMIT_REACHED`. A [While Loop](/support/docs/kaneai-while-loops/) reached the hard cap of **30 iterations per execution** without its condition becoming false. This usually means a variable referenced in the condition is never updated inside the body, or the UI state being checked is never reached.
**Common error:** A loop condition such as `{{counter}} < 10` where no body step increments `{{counter}}`, or `while the spinner is visible` where the underlying action never dismisses the spinner.
**How to fix:** Confirm the condition can become false, and add or correct a body step that advances it toward termination (increment the counter, or interact with the element whose state is checked). If your scenario legitimately requires more than 30 iterations, contact your TestMu AI support representative.

### While Loop: Infinite Loop Detected


**Description:** Error code `INFINITE_LOOP_DETECTED`. KaneAI detected a While Loop condition and body combination that cannot terminate, typically a condition independent of anything the body changes, or a comparison that is always true (for example, `1 == 1`).
**Common error:** A While Loop whose body does not touch any value referenced by the condition, or a condition built from constants only.
**How to fix:** Ensure the body contains at least one step that changes a value referenced by the condition: increment a counter, click a control that updates UI state, or wait for a status transition. If the condition uses constants, rewrite it to depend on a variable or UI state that evolves during the loop.

### While Loop: Both Operands Are Parameters


**Description:** Error code `BOTH_OPERANDS_AS_PARAMETERS`. Both sides of a While Loop condition are test parameters (for example, `${max_retries} > ${default_retries}`). Parameter values are fixed for the lifetime of a run, so the condition cannot change between iterations; it would either loop forever or never enter.
**Common error:** Comparing two dataset parameters directly in the loop condition, such as `${threshold} > ${limit}`.
**How to fix:** Replace one operand with a runtime-updated value: a counter variable incremented inside the body, a value read from the UI via a query, or a literal. Valid examples include `{{counter}} < ${max_retries}`, `${status} == "ready"`, and `{{cart_empty}} == false`.

### While Loop: Cannot Be Created via Natural Language


**Description:** Error code `WHILE_NOT_SUPPORTED_VIA_NL`. A natural-language step described a loop (for example, *"repeat until the cart is empty"*, *"while the spinner is visible, do X"*, or *"keep clicking Next"*). The natural-language pipeline does not expand these phrases into loops; While Loops can only be added through the **/** slash command menu.
**Common error:** Typing a looping phrase such as *"keep clicking Load more until no more results appear"* as a regular step instead of creating a While Loop block.
**How to fix:** Remove the looping phrase from the step, open the slash menu (`/`), select **While Loop**, enter the loop condition, and add the per-iteration action as a body step inside the loop.

## Next Steps


Continue with these guides:

- Review the full [KaneAI command reference](/support/docs/kane-ai-command-guide/).
- Understand assertion failure behavior in [KaneAI failure conditions](/support/docs/kaneai-failure-conditions/).


> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._
