---
id: kaneai-while-loops
title: While Loops in KaneAI
hide_title: false
sidebar_label: While Loops
description: Learn how to use While Loops in KaneAI to repeat test steps based on dynamic conditions, iterate over collections with JavaScript, and use the built-in {{loop_counter}} variable in natural-language steps and element selectors.
keywords:
  - kaneai while loop
  - kaneai loops
  - kaneai iteration
  - kaneai loop counter
  - kaneai repeat steps
  - kaneai polling
  - kaneai control flow
url: https://www.testmuai.com/support/docs/kaneai-while-loops/
site_name: TestMu AI
slug: kaneai-while-loops/
canonical: https://www.testmuai.com/support/docs/kaneai-while-loops/
---

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
          "name": "While Loops in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-while-loops/`
        }]
      })
    }}
></script>

## Introduction

KaneAI supports repeating a block of steps using **While Loops**. A While Loop executes the steps inside its body for as long as a user‑defined condition evaluates to **true**, and re‑checks the condition before every iteration.


## How It Works

1. Insert a **While Loop** block from the **/** slash command menu — this is the only entry point for adding a loop.
2. Define the loop condition — either in natural language (default) or using the operand & operator editor.
3. Confirm the condition. The loop body opens.
4. Add steps inside the loop body — natural language steps, modules, JavaScript, API, DB, or manual interaction.
5. Click **End While** to finalize the block. Until you finalize, the loop is an authoring‑only placeholder and does not run.
6. Once finalized, each run of the loop follows the same cycle on every iteration:
   - The condition is evaluated.
   - If the condition is **true**, the loop body runs once.
   - If the condition is **false**, the loop exits successfully and execution moves on to the next step in the test.
7. A hard safety cap of **30 iterations per execution** prevents runaway loops — see [Max Iteration Safety Limit](#max-iteration-safety-limit).


## Prerequisites

- An active KaneAI authoring session.
- Familiarity with [Conditional Logic (If / Else)](/support/docs/kaneai-conditional-logic/) — While Loops reuse the same condition editor.
- Any variables, smart variables, or dataset parameters you plan to reference in the loop condition or body.

## Step‑by‑step Guide

### Step 1 — Insert a While Loop Block

A While Loop can only be added through the **/** slash command menu.

1. In your authoring session, press **/** to open the slash command menu.
2. Select **Add While Loop**.
3. KaneAI inserts an empty While Loop block at the current position in your test flow. The block contains a header, an empty condition editor, and an **End While** control.

A newly inserted block starts in an empty state with no condition and no body steps.


<img loading="lazy" src={require('../assets/images/kane-ai/features/while-loops/insert-while-loop.png').default} alt="Empty While Loop block inserted into the test flow" className="doc\_img"/>

### Step 2 — Define the Loop Condition

The condition editor opens in **natural language mode** by default, matching KaneAI's NL‑first authoring philosophy. You can switch to **operand & operator mode** at any time.



#### Option A — Natural Language

Type your condition as a plain‑English sentence. KaneAI interprets the intent and re‑evaluates it at runtime. Examples:

- `while the loading spinner is visible`
- `while the Next button is present`
- `while {{count}} is greater than 0`
- `while {{job_status}} is not "complete"`

#### Option B — Operand & Operator

Build the condition explicitly using a **left operand**, a **comparison operator**, and a **right operand**:

1. Enter a **left operand** — this can be a variable (e.g., `{{active_count}}`), a dataset parameter (e.g., `${max_attempts}`), extracted text, or a literal value.
2. Choose a **comparison operator** from the dropdown:

| Operator | Description |
|---|---|
| `==` | Equals |
| `!=` | Not equals |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `contains` | Left operand contains the right operand |
| `not_contains` | Left operand does not contain the right operand |
| `starts_with` | Left operand starts with the right operand |
| `ends_with` | Left operand ends with the right operand |
| `is_visible` | Target element is currently visible on the page |
| `is_not_visible` | Target element is not currently visible on the page |

3. Enter the **right operand** — a literal, variable, dataset parameter, or extracted value.

Both operands support variables (`{{var_name}}`), dataset parameters (`${param_name}`), extracted text, and literal values.

#### Confirming the Condition

Confirm the condition to open the loop body. Once confirmed, the condition remains editable until the loop begins executing — you can reopen it to adjust operators, operands, or the natural‑language expression.


<img loading="lazy" src={require('../assets/images/kane-ai/features/while-loops/add-condition.png').default} alt="Toggle between natural language and operand & operator modes" className="doc\_img"/>

### Step 3 — Add Steps Inside the Loop Body

The loop body becomes available only after the condition is confirmed. Inside the body you get the standard KaneAI step input — the same one used in the main authoring flow — where you can type a natural‑language step or press **/** to open the slash command menu.

You can add any of the following inside a loop body:

- **Natural language steps** — type your instruction in plain English.
- **Modules** — reuse existing modules by adding them via the slash command menu.
- **JavaScript steps** — execute custom JS for data extraction, array handling, or index management.
- **API steps** — make API calls as part of the iteration.
- **DB steps** — run database queries inside each iteration.
- **Manual interaction** — perform actions directly on the browser within the loop body using the manual interaction control.
- **If / Else blocks** — insert a conditional block inside the loop body via the slash command menu to add branching logic within iterations.


### Step 4 — Finalize the Loop with "End While"

When your loop body is ready, click **End While** at the bottom of the block to finalize it.

:::note Finalization is required
Unlike If / Else blocks (which evaluate the moment you confirm a condition), a While Loop **accumulates** steps first and is only executed once you finalize it with **End While**. Until finalization it exists as an authoring‑only placeholder so you can keep adding body steps. The **End While** button is active only after the condition is confirmed **and** at least one step has been added to the body.
:::

Clicking **End While** starts execution immediately. KaneAI re‑evaluates the condition before every iteration and stops when the condition becomes false or when the [max iteration safety limit](#max-iteration-safety-limit) is reached.

<img loading="lazy" src={require('../assets/images/kane-ai/features/while-loops/loop-body-steps.png').default} alt="Adding steps inside a While Loop body" className="doc\_img"/>

## Executing a While Loop

Once a While Loop has been finalized, KaneAI runs it inline in the Playground. Each iteration evaluates the condition, runs the body steps in order if the condition is true, and then re‑evaluates. Execution finishes the moment the condition becomes false or the safety cap is reached.

**While the loop is running**, the block header shows the current iteration so you can follow progress as it happens. A **Pause While** control is available during execution, which you can use to interrupt a run and inspect intermediate state.

<img loading="lazy" src={require('../assets/images/kane-ai/features/while-loops/while-loop-running.png').default} alt="While Loop executing with the current iteration shown in the block header" className="doc\_img"/>

**When the loop finishes**, the block switches to a completed state and reports the final outcome of the condition along with the total number of iterations that ran. Every body step inside the block reflects the status it had on the most recent iteration, so you can review what happened in the final pass without re‑running the test.

<img loading="lazy" src={require('../assets/images/kane-ai/features/while-loops/while-loop-completed.png').default} alt="Completed While Loop showing the final condition outcome and total iterations" className="doc\_img"/>

## Using the `{{loop_counter}}` Variable

Every While Loop exposes a built‑in **`{{loop_counter}}`** variable inside its body. The counter is **1‑indexed** and increments by 1 on each iteration (first iteration → `1`, second → `2`, and so on).

`{{loop_counter}}` is available to all step types inside the loop body, including natural language steps, JavaScript snippets, API and DB steps, and **element selectors**.

**Example — clicking each row of a table one at a time:**

> Click the row at position `{{loop_counter}}` in the bookings table

KaneAI substitutes the counter into the underlying element selector before it is resolved, so a selector like `tr:nth-of-type({{loop_counter}})` targets row 1 on the first iteration, row 2 on the second, and so on.

## Using Dataset Parameters and Variables in Loops

All existing KaneAI [variables](/support/docs/kane-ai-using-variables/) and [dataset parameters](/support/docs/kane-ai-using-datasets/) are fully usable inside loop conditions and loop body steps. No special configuration is required.

- **Variables** use the `{{variable_name}}` syntax — for example, `{{active_count}}`, `{{job_status}}`, or a value extracted from a previous step.
- **Dataset parameters** use the `${parameter_name}` syntax — for example, `${max_retries}`.

**Dynamic iteration count pattern.** You can extract a count from the page or an API response into a variable using a JavaScript step, then reference that variable in the While condition:

1. Add a JS step that reads the count and stores it in `{{total}}`.
2. Add a While Loop with the condition `{{loop_counter}} <= {{total}}`.
3. Add the steps you want to repeat inside the body.

:::note Operand validation
Both operands of a condition cannot be parameters at the same time. If one operand is a parameter (for example, a dataset parameter like `${max_retries}`), the other operand must be a runtime‑updated value — a local variable, a smart variable, a value read from the UI, or a literal. If both operands are parameters, KaneAI rejects the condition with the `BOTH_OPERANDS_AS_PARAMETERS` error. See [Error Messages and Troubleshooting](#error-messages-and-troubleshooting) for details.
:::

## Element Presence / Absence Conditions

While Loop conditions can reference the visibility of UI elements directly — useful for polling, waits, and spinner handling.

- **Natural language mode:**
  - `while the loading spinner is visible`
  - `while the Next button is present`
- **Operand & operator mode:** use the `is_visible` or `is_not_visible` operator with an element reference as the operand.

Example use case: after triggering a data‑heavy action, repeat a short wait step while a loading spinner element is visible, so the test resumes automatically the moment the spinner disappears.

:::note Automatic query refresh
For UI‑based conditions you do **not** need to add a manual query step inside the loop body. KaneAI automatically inserts the underlying visual / DOM query and re‑runs it at the start of every iteration, so the condition is always evaluated against fresh page state.
:::



## Max Iteration Safety Limit

Every While Loop is capped at a hard maximum of **30 iterations per execution**. If the condition has not become false by the 30th iteration, execution stops and the step is marked as failed with the message:

> While loop exceeded maximum iterations (30)

This safety cap prevents a mis‑configured or non‑terminating condition from consuming unlimited execution time.

- The maximum iteration value is **not shown** during normal authoring or execution — only the current iteration number is displayed.
- When a loop hits the cap, execution stops and an error is reported. The error clearly indicates that termination was caused by the safety limit and not by the exit condition becoming false.
- The underlying error code is `LOOP_MAX_LIMIT_REACHED`.

Use the safety cap as a last line of defense — design your condition so the loop exits naturally well before the 30th iteration. If your scenario legitimately requires more than 30 iterations, reach out to your <BrandName /> support representative.


## Common Use Cases

- **Deactivate active items.** Repeat a deactivation step `while {{active_count}} > 0` to drain a queue of active bookings, alerts, or records.
- **Poll a status endpoint.** Trigger an async operation, then poll `while {{job_status}} != "complete"` with a short wait inside the body and the max iteration cap as a safety net.
- **Wait for a loading spinner.** Use the natural‑language condition `while the loading spinner is visible` to resume the test the moment the spinner disappears.
- **Validate paginated table rows.** Iterate `while the Next button is enabled` (or `while {{has_next_page}} == "true"`) and validate each page's rows inside the body.
- **Click each row by position.** Use `{{loop_counter}}` inside element targeting (`tr:nth-of-type({{loop_counter}})`) to walk a table row by row without hand‑writing selectors.

## Tips and Recommendations

- **Design for a natural exit.** Write conditions that terminate deterministically. Treat the max iteration limit as a safety net, not a control flow mechanism.
- **Keep loop bodies small.** Extract repeated logic into a [module](/support/docs/kane-ai-modules/) and call the module inside the loop body instead of duplicating steps.
- **Validate the body first.** Author the steps you intend to repeat outside a loop first, confirm they work, and then move them inside the While block.
- **Use `{{loop_counter}}` for position‑based targeting.** Prefer `{{loop_counter}}` in selectors over hand‑writing `nth-of-type(…)` indexes — it keeps the intent obvious and avoids off‑by‑one errors.
- **Extract dynamic counts into variables.** Read the number of items from the page or API into a variable first, then reference it in your condition, rather than hard‑coding an iteration count.

## Editing an Existing While Loop

Once a While Loop has been finalized, you can still change it — the loop itself stays in sync automatically.

- **Add, remove, or reorder body steps.** Use the edit instruction action on any step inside the loop; the loop updates automatically to reflect the change.
- **Change the condition.** Edit the While Loop step directly. The new condition applies on the next test run.
- **Finalize later.** If you closed the authoring view before clicking **End While**, the loop remains unfinalized. Re‑open the test, add the remaining body steps, and click **End While** when ready.
- **Loops inside modules.** When a While Loop is part of a [module](/support/docs/kane-ai-modules/), any change to the loop condition or body bumps the module version so other tests using that module pick up the new behavior on their next run.

## Nesting Rules

While Loops can contain **regular If / Else conditional blocks** inside their body, which lets you branch within each iteration. The maximum supported nesting depth is **two levels** — a While Loop containing a conditional, which in turn contains ordinary steps.

The following nesting patterns are **not supported**:

- A While Loop directly inside another While Loop.
- A While Loop directly inside a conditional branch (If, Else‑If, or Else).

## Limitations

- **No For‑Each loop construct.** Collection iteration is expressed via the [While + JS pattern](#collection-iteration-pattern-while--javascript) in v1.
- **Hard cap of 30 iterations per execution.** The safety cap is fixed and not user‑configurable. Contact support if you have a scenario that legitimately requires more.
- **Nested While Loops are not supported.** You cannot place a While Loop inside another While Loop (see [Nesting Rules](#nesting-rules)).
- **While Loops cannot live inside conditional branches.** A While Loop cannot be placed inside an If / Else branch in v1.
- **No Break / Continue commands.** There is no way to exit a loop early or skip to the next iteration; structure your condition to terminate naturally.
- **Natural language cannot create a loop.** Phrases like "repeat this 10 times" or "while the spinner is visible, do X" will not create a loop — you must use the slash command and select **While Loop**. KaneAI surfaces this as the `WHILE_NOT_SUPPORTED_VIA_NL` error.
- **Both operands in a condition cannot be parameters at the same time.** At least one side must be a runtime‑updated value. See `BOTH_OPERANDS_AS_PARAMETERS` in [Error Messages and Troubleshooting](#error-messages-and-troubleshooting).
- **Local variables must be defined inside the block.** If a local variable referenced inside a While block was created outside the block, KaneAI shows an error when you click **End While**.

## Error Messages and Troubleshooting

Below are the user‑facing error codes you may encounter when authoring or running a While Loop, together with what each one means and how to resolve it.

### 1. `LOOP_MAX_LIMIT_REACHED`

**Error message**

> While loop exceeded maximum iterations. This may be due to an issue with the loop condition or the actions within the loop.

**Suggestion**

> Review the loop condition and the actions being performed within the loop to ensure they are correct and will allow the loop to terminate properly.

**When you see it.** The loop ran the maximum allowed number of iterations (**30**) without the condition ever becoming false.

**How to resolve.**

- Verify that the condition *can* become false. Typical causes:
  - A variable used in the condition is never updated inside the body.
  - The UI state being checked (element visible, value present, etc.) is never reached.
- Add or correct a body step that advances the condition toward termination.
- If your scenario legitimately requires more than 30 iterations, contact your <BrandName /> support representative.

### 2. `INFINITE_LOOP_DETECTED`

**Error message**

> The while loop appears to be an infinite loop. Please review the loop condition and the actions within the loop to ensure that the loop will terminate properly.

**Suggestion**

> Review the loop condition and the actions being performed within the loop to ensure they are correct and will allow the loop to terminate properly.

**When you see it.** KaneAI detected a condition / body combination that cannot terminate — typically a condition that is independent of anything the body changes, or a comparison that is always true.

**How to resolve.**

- Ensure the body contains at least one step that changes a value referenced by the condition — for example, increment a counter, click a control that updates the UI state, or wait for a status transition.
- If the condition uses constants only (e.g. `1 == 1`), rewrite it so it depends on a variable or UI state that evolves during the loop.

### 3. `BOTH_OPERANDS_AS_PARAMETERS`

**Error message**

> Both operands in the while loop condition are parameters. Only one operand should be a parameter.

**Suggestion**

> Please modify the loop condition to ensure that only one operand is a parameter.

**When you see it.** Both sides of the loop condition are test parameters (for example, `${max_retries} > ${default_retries}`). Parameter values are fixed for the lifetime of a run, so such a condition cannot change between iterations — it would either be an infinite loop or never enter.

**How to resolve.** Replace one operand with a runtime‑updated value:

- A counter variable incremented in the body.
- A value read from the UI via a query.
- A literal.

Example valid forms: `{{counter}} < ${max_retries}`, `${status} == "ready"`, `{{cart_empty}} == false`.

### 4. `WHILE_NOT_SUPPORTED_VIA_NL`

**Error message**

> Looping is supported via slash commands only. Type / and select While Loop to add a loop.

**Suggestion**

> Use the while loop button in slash commands to create a loop instruction.

**When you see it.** You added a natural‑language step that describes a loop — for example, *"repeat until the cart is empty"*, *"while the spinner is visible, do X"*, or *"keep clicking Next"*. The natural‑language pipeline does not expand these phrases into loops.

**How to resolve.**

1. Remove the looping phrase from the plain‑English step.
2. Open the slash menu (`/`) and select **While Loop**.
3. Enter the loop condition in the While Loop authoring dialog.
4. Add the per‑iteration action as a body step inside the loop.

## FAQ

### How do I exit a While Loop early?

Early exit (Break) and skip‑to‑next‑iteration (Continue) are not supported in v1. Structure your exit condition — for example, combine it with an additional flag variable you set from inside the loop — so the loop terminates naturally on the next re‑evaluation.

### Can I nest a While Loop inside another While Loop?

No. Nested loops are not supported in v1, and a While Loop cannot be placed inside an If / Else branch either. A While Loop **can** contain conditional (If / Else) blocks in its body — see [Nesting Rules](#nesting-rules). If you need multi‑level iteration, split the logic across multiple test cases or use a single loop combined with JavaScript for inner bookkeeping.

### What happens if my condition is already false on the first check?

The loop body is skipped entirely — zero iterations run — and execution continues with the next step after the block.

### What is the maximum number of iterations allowed?

Every While Loop is capped at a hard maximum of **30 iterations per execution**. The limit is fixed and not user‑configurable. If a scenario legitimately requires more, reach out to your <BrandName /> support representative.

### Can I use `{{loop_counter}}` outside the loop body?

No. `{{loop_counter}}` is only defined inside the While Loop body it belongs to. If you need to reference the final iteration count after the loop completes, store it in a variable of your own inside the loop body.

### Does the Test Summary page show each iteration?

No. The live iteration counter is a Playground‑only view. On the Test Summary page, the While block shows only its final completed state along with the total number of iterations that ran. Step‑level screenshots and statuses inside the block reflect data from the most recent iteration that was executed.

### Do dataset parameters and variables work inside loops?

Yes. Both `{{variable}}` and `${dataset_parameter}` syntaxes are fully supported inside loop conditions and body steps with no special configuration. The only restriction is that both operands in a single condition cannot be parameters at the same time — at least one must be a runtime‑updated value such as a local variable, a smart variable, a UI‑derived value, or a literal. See the `BOTH_OPERANDS_AS_PARAMETERS` entry in [Error Messages and Troubleshooting](#error-messages-and-troubleshooting).

### Why is nothing happening when I click "End While"?

The **End While** action is only available once the condition has been confirmed **and** at least one step exists in the loop body. Confirm the condition and add at least one body step, then **End While** becomes available.
