---
id: phone-agent-custom-metrics
toc_max_heading_level: 2
title: Custom Metrics for Phone Agent Testing With TestMu AI
hide_title: false
sidebar_label: Custom Metrics
description: Create custom metrics that grade inbound and outbound phone agent calls on your business rules, turn on pass or fail gating, and review results in TestMu AI.
keywords:
 - custom metrics for voice agents
 - phone agent custom metrics
 - voice agent business rules testing
 - custom evaluation metrics
 - phone caller agent testing
url: https://www.testmuai.com/support/docs/phone-agent-custom-metrics/
site_name: TestMu AI
slug: phone-agent-custom-metrics/
canonical: https://www.testmuai.com/support/docs/phone-agent-custom-metrics/
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
          "name": "Custom Metrics",
          "item": `${BRAND_URL}/support/docs/phone-agent-custom-metrics`
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
      "@id": "https://www.testmuai.com/support/docs/phone-agent-custom-metrics/"
    },
    "headline": "Custom Metrics for Phone Agent Testing With TestMu AI",
    "description": "Create custom metrics that grade inbound and outbound phone agent calls on your business rules, turn on pass or fail gating, and review results in TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/phone-agent-custom-metrics/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "custom metrics for voice agents",
      "phone agent custom metrics",
      "voice agent business rules testing"
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
    "dateModified": "2026-09-30T19:28:43+05:30"
  }) }}
/>

Custom Metrics in the TestMu AI Agent Testing Platform grade phone agent calls on rules you write in plain language, such as "Did the agent ask for a PIN code after asking for the address?" For every call of the scenarios you attach a metric to, an AI agent grades the call from its transcript and returns an explanation, a verbatim quote as evidence, and clickable timestamps that jump the recording to the quoted moment. Custom Metrics are available for inbound and outbound **Phone Caller** agents, under **Configs**, then the **Custom Metrics** tab.

## When to Use Custom Metrics

---

Choose the grading method that matches what you want to check.

- Use the [built-in metrics](/support/docs/inbound-phone-agent/#metrics) to grade how well a call went in general. Use a custom metric to grade a rule specific to your business, such as asking for a PIN before changing an address, checking the 30-day return window before promising a refund, or offering a human handoff as soon as a caller sounds frustrated.
- Use a scenario's validation criteria to check whether that scenario's expected outcomes happened. Use a custom metric to grade a business rule on every call of each scenario you attach it to.

## Prerequisites

---

- An inbound or outbound **Phone Caller** agent. See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) or [test an outbound phone agent](/support/docs/outbound-phone-agent/).
- At least one phone scenario in the project. A metric grades only the scenarios you attach it to.
- The rule you want checked, written in a sentence or two of plain language.
- Optionally, a test profile carrying values such as a customer ID or caller name, if your check should reference the data the call ran with.

## Create a Custom Metric

---

Create one custom metric for each business rule. You set its name, output type, grading prompt, and scenarios in the **New custom metric** drawer.

1. Open your **Phone Caller** agent.
2. Go to **Configs**, then the **Custom Metrics** tab.
3. Select **Create Custom Metric**. The **New custom metric** drawer opens.
4. Enter a short name that says what the check is, such as "Pin code after asking for address" or "Managed customer frustration escalation". The name appears in results and in **Metric Config**.
5. Choose an output type. See [Choose an Output Type](/support/docs/phone-agent-custom-metrics/#choose-an-output-type).
6. Write the grading prompt. See [Write the Grading Prompt](/support/docs/phone-agent-custom-metrics/#write-the-grading-prompt).
7. Optionally, select an **Insert test data** chip to insert a test profile key into the prompt. See [Use Test Profile Data in a Prompt](/support/docs/phone-agent-custom-metrics/#use-test-profile-data-in-a-prompt).
8. In the **Scenarios** panel on the right, tick each scenario the metric applies to. See [Attach Scenarios](/support/docs/phone-agent-custom-metrics/#attach-scenarios).
9. Select **Create metric**.

:::tip
To fill in the name, output type, and grading prompt from a ready-made check instead of steps 4 to 6, see [Start From an Example](/support/docs/phone-agent-custom-metrics/#start-from-an-example).
:::

From then on, TestMu AI grades every new call of the attached scenarios on the metric. Past results are unchanged.

The **Custom Metrics** tab lists every metric in the project with its type, such as "Rating · passes at 70" or "Yes / No", and the number of scenarios it is attached to. The list flags a metric that is attached to no scenarios, because TestMu AI never grades it.

:::note
A new custom metric is report-only. TestMu AI grades it and shows it on every call of its attached scenarios, but it does not change a call's pass or fail verdict until you turn it on in **Metric Config**. See [Turn On Pass or Fail Gating](/support/docs/phone-agent-custom-metrics/#turn-on-pass-or-fail-gating).
:::

### Choose an Output Type

The output type sets how TestMu AI grades a call on the metric and when the call passes.

| Output type | Meaning |
|---|---|
| **Yes / No, passes on yes** | A binary check. The call passes the metric only when the answer is yes. |
| **Rating 0-100, passes at the Metric Config bar** | A quality score from 0 to 100. The pass bar is set in **Metric Config** and defaults to 70. |

Use Yes / No for a rule that either happened or did not, such as "asked for a PIN". Use Rating for a quality that comes in degrees, such as how well the agent handled frustration.

### Write the Grading Prompt

The grading prompt is what the AI agent checks in the call transcript. Write it in plain language, the way you would explain the check to a new QA hire, for example "Did the agent verify the caller's identity before sharing any account detail?" You do not write code, regular expressions, or scoring rubrics in a configuration file.

| Output type | How to write the prompt | Example |
|---|---|---|
| Yes / No | Start with "Did the agent ...?" To make the check strict, add one sentence on what counts as no. | "Did the agent ask for the customer ID before helping with the account? Moving on without asking counts as no." |
| Rating | Start with "Rate how well the agent ...", then add what to consider and, optionally, score bands. | "Rate how clearly the agent explained the next steps before the call ended. 0 to 25 nothing explained · 26 to 50 vague · 51 to 75 clear but incomplete · 76 to 100 clear and complete." |

For more guidance, see [Grading Prompt Guidelines](/support/docs/phone-agent-custom-metrics/#grading-prompt-guidelines).

### Use Test Profile Data in a Prompt

Write `{key}` anywhere in the grading prompt, where `key` is a field from a test profile. When TestMu AI grades a call, it replaces the placeholder with the value from the test profile the call ran with. The **Insert test data** chips below the prompt insert the keys that your project's profiles already carry.

For example, one metric with the prompt "Did the agent greet `{caller_name}` appropriately in English?" applies to every caller, because `{caller_name}` is filled in from the test profile each call ran with.

:::note
If a call runs without a value for a key, TestMu AI still grades the metric and shows the missing value as "not set". The drawer warns you ahead of time which scenarios this affects.
:::

### Start From an Example

Below the grading prompt, the drawer shows ready-made example chips.

1. Optionally, select **Suggest examples from my agent prompt (uses credits)**. The action reads your agent's own prompt and proposes 4 to 6 checks based on it, such as "Yes / No · Enforced refund transaction limit".
2. Select an example chip. The chip fills in the name, output type, and grading prompt together.
3. Edit any of the filled-in values as needed.

If your agent prompt or test data changes later, the drawer notes that the stored examples are based on an earlier version. To get new suggestions, select **Suggest examples from my agent prompt (uses credits)** again.

### Attach Scenarios

In the **Scenarios** panel on the right of the drawer, tick the scenarios the metric applies to. TestMu AI grades only calls of the ticked scenarios on the metric and leaves everything else untouched. For example, attach a booking-flow check to booking scenarios, not to your cancellation tests.

Grading runs on every call of every attached scenario, so attach a metric only to the scenarios where it applies.

You can save a metric with no scenarios attached, but TestMu AI never grades it, and the **Custom Metrics** list flags it. A project holds up to 50 custom metrics, and up to 20 of them can be attached to one scenario.

## Grading Prompt Guidelines

---

Follow these guidelines when you write a grading prompt.

- **One rule per metric.** "Asked for a PIN" and "confirmed the new address" are two metrics, so a failure shows which rule broke.
- **Say what counts as no.** A Yes / No prompt with one sentence of edge-case guidance, such as "if the caller refused, the agent should still have asked at least once", grades more consistently than a bare question.
- **Give ratings score bands.** Spelling out what 0 to 25, 26 to 50, 51 to 75, and 76 to 100 mean anchors the score and makes runs comparable.
- **Keep grading prompts about the transcript.** Checks about hold music, voice tone, or backend actions cannot be judged from what was said. Use the audio metrics and [tool call validation](/support/docs/voice-agent-integrations/) for those.

## Turn On Pass or Fail Gating

---

Turn on a custom metric in **Metric Config** to make it decide the call's pass or fail verdict.

1. In your **Phone Caller** agent, go to **Configs**, then **Metric Config**.
2. Find the **Custom metrics** section, which lists every metric in the project.
3. Turn on each metric that should decide the verdict.
4. For a Rating metric, set the pass bar with the slider.

An enabled metric works the same way as the built-in metrics: a call that fails it fails, and it counts in the score. The pass bar you set in **Metric Config** is the one shown and used everywhere, including on results. TestMu AI still grades a metric that is turned off and shows it on every call's results for reference.

:::tip
Leave a new metric off in **Metric Config** for a few runs. Read its grades, tighten the prompt if needed, then turn it on.
:::

## View Custom Metric Results

---

Custom metric grades appear on a call's **Validation Results** tab, in the same view as the scenario's validation criteria.

1. Open a call result.
2. Go to the **Validation Results** tab.
3. Find the **Custom metrics** card, below the scenario's validation criteria.

The card shows a pass or fail rollup and one row per metric. Each row shows the following.

| Item | What it shows |
|---|---|
| Name and outcome | The metric name and its outcome, such as "Yes / No · No" or "Rating · 84 / 100 · passes at 70", with the grade's confidence level. |
| Explanation | One to three sentences on why the grade is what it is. |
| **Evidence** | The verbatim transcript quote behind the grade, with timestamps you can click to jump the recording to that moment. |
| Status chip | **Pass**, **Fail**, or **Skipped**. |

:::info Example Explanation
For a failed Yes / No check on asking for a PIN, the explanation can read: "The agent asked the caller to provide the new shipping address but never asked for a PIN code at any point in the call."
:::

The status chip shows one of these values.

| Status | Meaning |
|---|---|
| **Pass** | The call passed the metric. A Yes / No metric passes on yes, and a Rating metric passes at the pass bar set in **Metric Config**. |
| **Fail** | The call did not pass the metric. The call's verdict changes only when the metric is turned on in **Metric Config**. |
| **Skipped** | The metric could not be graded, for example because the call had no usable transcript or grading could not complete in time. The chip is grey and shows the reason. A skipped metric never fails a call. |

At the suite level, gated custom metrics (the ones turned on in **Metric Config**) roll up into the call's verdict breakdown as a single line, such as "Custom metrics (1 of 3 failed)".

## What Happens When You Edit or Delete a Metric

---

Editing or deleting a custom metric does not change the grades already stored on past calls.

| Action | What happens |
|---|---|
| Edit the grading prompt or output type | TestMu AI creates a new version of the metric. Each grade records the version it was scored with. |
| Delete the metric | TestMu AI stops grading the metric on future calls and removes it from **Metric Config**. Past call results keep the grades they already have. |

:::tip
To keep a metric on results without letting it decide verdicts, turn it off in **Metric Config** instead of deleting it.
:::

## How Grading Works

---

After each call of an attached scenario is analyzed, TestMu AI grades the call on its custom metrics.

1. TestMu AI fills any `{key}` placeholders in your grading prompts with the test profile data the call ran with.
2. The grading AI agent reads the call transcript and grades every attached metric in one pass.
3. TestMu AI stores each grade on the call with its explanation, evidence quote, timestamps, and a confidence level.

Grading follows these rules.

- **Grading is transcript-based.** It judges what was said on the call, not audio quality or latency. The [built-in call and audio quality metrics](/support/docs/inbound-phone-agent/#metrics) cover those.
- **Grading is fail-safe.** If a call has no usable transcript, or grading cannot complete in time, TestMu AI marks the affected metrics **Skipped** with the reason. A skipped metric never fails a call, and the rest of the call's analysis always completes.

## Limits and Defaults

---

| Item | Limit or default |
|---|---|
| Custom metrics per project | Up to 50 |
| Custom metrics attached to one scenario | Up to 20 |
| Rating scale | 0 to 100 |
| Pass bar for a Rating metric | 70 by default. Set it with the slider in **Metric Config**. |
| Gating for a new metric | Off (report-only) until you turn it on in **Metric Config** |
| Checks proposed by **Suggest examples from my agent prompt (uses credits)** | 4 to 6, based on your agent's prompt. The action uses credits. |

## Troubleshooting

---

| What you see | What to do |
|---|---|
| A metric never appears on a call's results | Confirm that the call's scenario is ticked for that metric, and that the call was analyzed after the metric was created. Metrics grade new calls only. |
| A metric shows **Skipped** | Read the reason on the row. A call with no usable transcript, or grading that could not complete in time, is skipped rather than failed. |
| A grade mentions "not set" | The call ran without a test profile value for a `{key}` in your prompt. Add the key to the test profile the scenario runs with, or remove the placeholder. |
| A metric fails calls, but the verdict does not change | The metric is off in **Metric Config**. Turn it on there to make it decide pass or fail. |
| "This check was not saved" when you create or edit a metric | The grading prompt was rejected because it is not a grading check, for example an attempt to extract data or perform an unrelated task. Rephrase it as a check on the agent's behavior in the call. |
| "Could not screen the prompt right now" | Prompt review was temporarily unavailable. Try saving again in a moment. |
| **Suggest examples from my agent prompt (uses credits)** is disabled | Suggestions are generated from your agent's prompt. Add a prompt to the agent first. |
| "This project already has the maximum of 50 custom metrics" | A project holds up to 50 custom metrics, and up to 20 of them can be attached to one scenario. Delete or detach metrics you no longer use. |

## Security and Safeguards

---

These safeguards apply to every custom metric.

- TestMu AI reviews each grading prompt when you save it. It rejects a prompt that tries to do something other than grade the call, such as extracting information or overriding instructions.
- Evidence timestamps point only at moments that exist on the recording.
- Custom metrics read the call transcript and nothing else.
- Grades never modify your agent or your systems.

## Related TestMu AI Guides

---

- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) and its built-in call quality metrics.
- See how to [test an outbound phone agent](/support/docs/outbound-phone-agent/).
- See the [phone agent testing overview](/support/docs/phone-agent/) for both testing modes.
- See [voice agent integrations](/support/docs/voice-agent-integrations/) for tool call validation.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
