---
id: error-handling-kaneai
title: KaneAI Authoring Errors
hide_title: true
toc_max_heading_level: 2
sidebar_label: Errors
description: Reference of KaneAI errors for web and app tests. Every failed step reports one of five error categories, what went wrong, and what to do next.
keywords:
    - testmu ai kaneai
    - kaneai errors
    - kaneai error categories
    - instruction error
    - element error
    - application error
    - data error
    - system error
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
          "name": "KaneAI Errors",
          "item": `${BRAND_URL}/support/docs/error-handling-kaneai/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/error-handling-kaneai/"
    },
    "headline": "Error Handling in Authoring",
    "description": "Use TestMu AI Accessibility DevTools to automatically find and report accessibility issues as per WCAG guidelines.",
    "url": "https://www.testmuai.com/support/docs/error-handling-kaneai/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T20:20:47+05:30"
  }) }}
/>



# KaneAI Errors
***

When a KaneAI step fails, the answer is on screen. You do not have to look anything up.

:::note
An errored step pauses the authoring session with the **Error flag** set — run actions on later steps are blocked and Resume is unavailable until you re-run, edit, or delete it. See [The Error flag](/support/docs/kaneai-authoring-session/#the-error-flag).
:::

## What KaneAI shows you when a step fails
***

Every failed step reports the same three things, in the step itself.

| | What it tells you |
|---|---|
| **Category** | The kind of problem, one of the five below. It tells you where to look first: at your step, at the element, at your application, at your data, or at us. |
| **Message** | What went wrong, written in your terms and quoting the value that caused it. Never a stack trace. |
| **Suggestion** | What to do next, phrased as an action you can take on this step. |

Two further fields sit behind those. The **reason** is the specific fault inside the category, and the **diagnostic** keeps the raw underlying text, such as an exception string, for debugging. The diagnostic is never used as the headline, so the first thing you read is always an explanation rather than machine output.

## Error categories
***

Every error belongs to one of five categories. The category tells you where to look first.

| Category | Meaning | Where to look |
|---|---|---|
| **Instruction error** | The step itself is wrong | Rewrite the instruction |
| **Element error** | The target element could not be found or used | Check the element and how the step describes it |
| **Application error** | The application or page under test misbehaved | Check the application, not the test |
| **Data error** | A variable, type, secret, or query is wrong | Check the values the step depends on |
| **System error** | A problem on our side, not yours | Retry, then contact support |

:::note
An assertion that comes back false is **not** an error. It is recorded as a failed assertion and the test carries on. An error means the step could not be checked at all.
:::

### How an error is categorised
***

The category is decided by where the problem is, not by which part of the system reported it.

- A media, deeplink, GPS, or accessibility action that fails on a mobile app is an **application error**, because the action reached the app and the app is what failed.
- An action that fails on an element that had already been found is an **application error**, not an element error. The failure is in performing the action, not in locating the target.
- The agent being unable to continue is a **system error**, not a defect in your instruction.

## Instruction errors
***

**The step itself is wrong.** KaneAI could not work out one action and one target from what you wrote, or the action you asked for is not supported.

It covers a step that states a goal instead of an action, a condition that cannot be evaluated, a value that is out of range, and an unsupported operation. The fix is always in the instruction.

## Element errors
***

**The target element could not be found or could not be used.** The instruction was understood. KaneAI could not act on the thing you named.

The element may not be on the page at that point, the description may match more than one control, the element may be present but hidden or disabled, or something may be covering it. Look at the element and at how the step describes it.

Mobile app tests report the same element errors, with the same guidance, as web tests.

## Application errors
***

**The application under test misbehaved.** The step was right and the element was found. What failed is your application.

It covers a page that will not load, a popup blocking an action, an HTTP error, a CAPTCHA or paywall, and mobile actions the app refused. An error in this category usually points at your application rather than your test.

## Data errors
***

**A value the step depends on is wrong.** A variable, a secret, a type, a schema, or a query. The step and the element are both fine.

Common causes are a variable no earlier step creates, a comparison between a number and text, and a value of the wrong kind. The message names the variable, and where a type is wrong it names both what the variable holds and what the step needed.

## System errors
***

**A problem on our side, not yours.** Nothing in your test needs changing.

The agent could not continue, the browser session ended, or an internal operation timed out. Run the step again, and contact support if it repeats.

:::note
When the browser or device session has ended, that is reported in place of any more specific cause.
:::

## Session states
***

Sometimes the whole session stops rather than a single step failing. These are not errors and belong to no category.

| State | What it means | What to do |
|---|---|---|
| **Stopped by you** | You stopped the session while a step was running. | Nothing to fix. Run the test again when you are ready. |
| **Out of credits** | Your organization has run out of KaneAI credits and the session is paused. | Add credits, then run the test again. |
| **Session expired** | Your KaneAI session or access key expired mid test. | Sign in again and start a new session. |

## How errors behave
***

### Assertions that fail
***

An assertion that comes back false is a **result, not an error**. KaneAI records it as a failed assertion and the test carries on, because a false assertion tells you something about your application.

A step errors only when the assertion could not be checked at all, for example when a variable it uses does not exist, when it compares a number against text, or when the operator is not supported. A step like that is never reported as passed.

If a step did not stop your test after an assertion, check whether the assertion came back false, in which case the step still succeeded, or whether the step itself carries an error.

### Errors inside conditionals
***

When a step inside an `if` block fails, KaneAI tells you which branch failed and whether the problem was in the branch **condition** or in one of the **steps** inside it. The block is marked as errored and the message stays on the step that actually failed.

A failing `elif` is reported rather than skipped, so a broken middle branch does not fall through to `else`. Editing and resetting a branch keeps its error with it, and saving a draft keeps the status of the block.

### While loops
***

Each while loop error, with its code and fix, is listed on the [While Loops](/support/docs/kaneai-while-loops/#error-messages-and-troubleshooting) page.

A `while` loop is rejected when both sides of its condition are parameters. Parameter values do not change during a run, so the loop could never end. You are told this when you create the loop, not after it runs.

A loop whose condition is vague or errored fails rather than running with an empty condition. A loop that can never end, and a loop that runs past its iteration limit, each say so.

If a step that feeds the loop condition fails, such as a query whose result the condition compares against, KaneAI retries it on the next pass rather than skipping it.

### Variables and comparisons
***

A missing variable or TOTP is reported as a data error naming the variable, on web and mobile app tests alike.

A missing variable inside a condition or an assertion is an error, not a blank. An `if` block does not fall through to `else`, and an assertion does not return a result it never checked.

Greater than and less than comparisons do not convert text to numbers, so `5 > "sam"` is an error. Equality comparisons are unaffected.

When a variable holds the wrong kind of value, the message names both what it holds and what the step needed, such as a list where text was expected.

:::note
Exported code does not apply the comparison rule above. A comparison such as `5 > "sam"` errors while you author and can still pass in exported code.
:::

### Failure conditions
***

While you author or replay a test, a soft [failure condition](/support/docs/kaneai-failure-conditions/), meaning Warn or Fail but continue, applies to **Close Tab** steps only. Every other step fails the test whatever its failure condition is.

A step with no failure condition set, or with an invalid one, is treated as **Fail test immediately**. Your organization default applies to assertions only.

A failure condition never hides a step that could not be evaluated. A missing variable, a comparison against text, the wrong kind of value, or an unsupported operator stays an error. A soft failure condition softens only an assertion that came back false.

:::note
Test runs and exported code are not affected. Assertions there still honor a soft failure condition, and UI actions still honor it in run reports.
:::

### Objectives
***

An objective that fails to generate stays in your test, marked as errored, so you can see what happened. Retrying replaces the failed attempt.

An errored objective you have not changed is carried forward with its status, its error and its steps. Saving a test that contains one saves the test as **errored**, even when the objective produced no steps.

When you reopen the test, an errored objective still shows its error and the next run regenerates it. Objectives that ran cleanly restore their steps and replay as before.

### Where an error appears
***

An error stays with its step while you author, when you save a draft, when you quit and save, on the test summary, and when you reopen the test.

When you reopen a test to edit it, the step is reset and any message or suggestion from the previous attempt is cleared, so you never read guidance belonging to an older version of the step.

On the summary page, a test that ended with an error is reported as **Error**. Steps that never ran are marked as skipped, and steps that passed, errored or were stopped keep their status.

## Examples of errors in KaneAI
***

Three real errors, as KaneAI reports them while you author. Each shows the same three things: the **category**, a **message** that says what went wrong in your terms, and a **suggestion** for what to do next.

### An address KaneAI cannot navigate to
***

The step asked for `http://example.com:99999`. Port 99999 is outside the valid range, so there is nothing to open.

<img loading="lazy" src={require('../assets/images/kane-ai/error-handling/instruction-error-invalid-url.webp').default} alt="KaneAI reporting an instruction error for an invalid navigation address, with the message and suggestion below the failed step" width="1600" height="825" className="doc_img"/>

KaneAI names the category as an **instruction error**, states the problem as *Invalid address for navigation*, and suggests a valid hostname or a full URL. The address you gave is quoted back, so you can see exactly what was read.

### A step too vague to act on
***

The step said `Author the step sdfgh and run`. There is no action and no target in it.

<img loading="lazy" src={require('../assets/images/kane-ai/error-handling/instruction-error-vague-step.webp').default} alt="KaneAI reporting an instruction error for a vague step, explaining that no UI target was named" width="1600" height="825" className="doc_img"/>

Again an **instruction error**. The message explains that the text is too vague and names what is missing, concrete UI anchors or targets, and the suggestion shows the shape of a step that would work, such as *click login button*.

### An assertion on a variable that does not exist
***

The step asserted `{{ghost}} == 1`, and no step in the test ever creates `ghost`.

<img loading="lazy" src={require('../assets/images/kane-ai/error-handling/data-error-missing-variable.webp').default} alt="KaneAI reporting a data error for a missing variable used in an assertion" width="1600" height="825" className="doc_img"/>

This is a **data error**, not an element or instruction problem, because the step and its target were both fine and the value behind them was not. The message names the variable and says where KaneAI looked for it, in earlier steps and in project variables. The assertion is separately marked as false and flagged as one that might fail a test run, so you can see that the check never actually ran rather than assuming it ran and returned false.

## Full error reference
***

The categories above explain how KaneAI groups errors. The reference below lists every specific error message you may see, with what it means and how to rewrite the instruction.

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
