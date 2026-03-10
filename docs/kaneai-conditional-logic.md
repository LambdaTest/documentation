---
id: kaneai-conditional-logic
title: Conditional Logic (If / Else‑If / Else) in KaneAI
hide_title: false
sidebar_label: Conditional Logic
description: Learn how to use If, Else‑If, and Else conditions in KaneAI to build branching test flows with support for modules, JavaScript, API, and DB steps inside each branch.
keywords:
  - kaneai conditional logic
  - kaneai if else
  - kaneai else if
  - kaneai branching
  - kaneai conditional modules
  - kaneai conditions
url: https://www.testmuai.com/support/docs/kaneai-conditional-logic/
site_name: TestMu AI
slug: kaneai-conditional-logic/
canonical: https://www.testmuai.com/support/docs/kaneai-conditional-logic/
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
          "name": "Conditional Logic in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-conditional-logic/`
        }]
      })
    }}
></script>

## Introduction

KaneAI supports conditional branching in your test cases using **If / Else‑If / Else** blocks. This lets you handle dynamic application behavior — for example, clicking a login button only when it is visible, or choosing between different checkout flows based on a variable value.

Each branch can contain multiple steps, including regular actions, **modules**, **JavaScript**, **API**, and **DB** steps, giving you full flexibility to build complex, real‑world test scenarios.

## How It Works

1. Insert a conditional block from the **/** slash command menu during authoring or from the **+ Add step** option during a paused state.
2. Define a condition using variables and comparison operators.
3. Optionally add **Else‑If** branches for additional conditions.
4. Add steps — including modules, JS, API, and DB steps — inside each branch.
5. During authoring, only the branch whose condition is true gets executed — steps in the remaining branches are queued.
6. In automation, KaneAI evaluates the conditions top‑to‑bottom at runtime and executes the first matching branch automatically.

<img loading="lazy" src={require('../assets/images/kane-ai/features/if-else/slash-if-else.png').default} alt="If / Else-If / Else block in the KaneAI authoring panel" className="doc\_img"/>

## Prerequisites

- An active KaneAI authoring session.
- Variables or element states available to build your conditions (e.g., smart variables, global variables, or extracted values).

## Step‑by‑step Guide

### Step 1 — Add a Conditional Block

1. In your authoring session, press **/** to open the slash command menu.
2. Select **Add If-Else** option.
3. KaneAI inserts an **If / Else** block into your test flow.

### Step 2 — Define the Condition

Click the **If** header to open the condition editor. You can define conditions in two ways — toggle between them using the **switcher icon** (`&&`).

<img loading="lazy" src={require('../assets/images/kane-ai/features/if-else/condition-switcher.png').default} alt="Condition mode switcher" className="doc\_img"/>

#### Option A — Natural Language

Type your condition as a plain-English sentence (e.g., "login button is visible"). KaneAI interprets the intent and evaluates it at runtime.

#### Option B — Operand & Operator

Build the condition explicitly using left operand, operator, and right operand:

1. Enter a **left operand** — this can be a variable (e.g., `{{login_button_visible}}`), extracted text, or a literal value.
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

3. Enter the **right operand** (e.g., `true`, a number, or another variable).


#### Adding Multiple Conditions

You can combine conditions using **AND** / **OR** logic:

1. After defining the first condition, click the **+** button (labeled **Add condition**).
2. Toggle the logical operator between **AND** and **OR** using the dropdown.
3. Fill in the additional condition's operands and operator.
4. Click the green **checkmark** to confirm.

<img loading="lazy" src={require('../assets/images/kane-ai/features/if-else/add-conditions.png').default} alt="Condition editor with AND / OR logic" className="doc\_img"/>

### Step 3 — Add Steps Inside a Branch

Each branch (**If**, **Else‑If**, **Else**) supports multiple steps. You can add:

- **Regular test steps** — type your instruction in the step input field.
- **Modules** — reuse existing modules by adding them inside any branch.
- **JavaScript steps** — execute custom JS within a branch.
- **API steps** — make API calls as part of a conditional flow.
- **DB steps** — run database queries conditionally.
- **Manual interaction** — click the **manual interaction icon** next to the step input field to perform actions directly on the browser within the branch.

Use the step input field or press **/** inside a branch to access the slash command menu.

<img loading="lazy" src={require('../assets/images/kane-ai/features/if-else/slash-command-add-steps.png').default} alt="Adding steps and manual interaction inside a conditional branch" className="doc\_img"/>

### Step 4 — Add Else‑If Branches

To handle additional conditions beyond the initial **If**:

1. Click **Add Else‑If** between the **If** and **Else** blocks.
2. Define the condition for the new branch (same process as Step 2).
3. Add steps inside the **Else‑If** block.
4. Repeat to add as many **Else‑If** branches as needed.

:::note Authoring vs. Automation behavior
During authoring only one condition can be true at a time, so only the matching branch's steps are executed — steps under the remaining branches go into a **queued** state. When the test runs in automation, all queued branches are evaluated automatically and the first matching branch is executed.
:::

### Step 5 — Add Steps to the Else Branch

The **Else** block executes when none of the preceding conditions are met. Click **+ Add step** inside the **Else** block and add your fallback steps.

### Step 6 — Close the Block

Click **End If** at the bottom of the conditional block to finalize it. You can then continue adding steps after the conditional block as usual.

## Using Modules Inside Conditional Branches

You can embed entire modules within any branch of a conditional block. This is useful for reusing login flows, setup routines, or shared workflows that should only run under specific conditions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/if-else/add-module-in-if-else.png').default} alt="Module embedded inside an If branch" className="doc\_img"/>

To add a module inside a branch:

1. Click into the step input field within the branch.
2. Press **/** and select the module you want to add, or type your instruction.
3. The module and its steps appear inline within the branch.

## Tips and Recommendations

- **Keep conditions simple.** Use clear, single‑purpose comparisons. Combine with AND / OR only when necessary.
- **Use variables for dynamic values.** Store extracted values or API responses in variables, then reference them in your conditions.
- **Leverage modules for reusable logic.** Instead of duplicating steps across branches, create a module and embed it.
- **Test each branch independently.** During authoring, verify that each branch executes the correct steps before saving.

## Limitations

- **Nested conditions are not supported.** You cannot place an If / Else‑If / Else block inside another conditional block.

## FAQ

### Can I add an Else‑If branch after I have already authored the test?

Yes. When you pause the test or revisit it in the playground, you can edit the conditional block and add new Else‑If branches.

### How many Else‑If branches can I add?

You can add up to **5** Else‑If branches per conditional block.

### Can I use modules, JS, API, and DB steps inside every branch?

Yes. All branch types — If, Else‑If, and Else — support the full range of step types including modules, JavaScript, API, and DB steps.

### Are nested If / Else blocks supported?

No. Nested conditional blocks are not supported. If you need complex branching, consider splitting the logic across multiple test cases or using Else‑If branches instead.
