# Phone Agent Testing With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The TestMu AI Agent Testing Platform tests phone voice agents by placing real telephone calls, not simulations. An AI-powered simulated caller follows a scenario, the platform records the full conversation, and it scores the call across 30+ call quality metrics. It covers inbound support lines, IVR flows, and outbound dialers.

Phone agents come in two directions, inbound and outbound, and each has its own workflow. This page covers what is shared across both, including [custom metrics](#custom-metrics). It also covers [performance testing](#performance-testing), which applies to agents that answer calls. See the dedicated guides for [inbound phone agent testing](/support/docs/inbound-phone-agent/) and [outbound phone agent testing](/support/docs/outbound-phone-agent/).

## Features

Phone testing runs in two modes, both scored with the same 30+ metrics.

**Live test calls.** The platform places a real call and drives the conversation with a simulated caller. During the call it tracks duration in real time, produces a speaker-identified transcript, and detects DTMF tones for menu navigation.

**Recording analysis.** Upload batches of recorded production calls (MP3 or WAV) and the platform scores them with the same metrics, so you can monitor real production quality without placing new calls.

**Voice and noise simulation.** To match production conditions, the platform simulates the voice and acoustic environment per scenario:

- **Voice profiles:** 200+ voices across providers, with accents and speech speeds.
- **Background noise:** 15 presets such as café, street, call center, and poor cellular connection.
- **Response timing:** a configurable delay from 0.5 to 5.0 seconds, and a maximum call duration from 60 to 1800 seconds.

**Shared capabilities.** Phone agents also support test suites, agent profiles, a Green, Yellow, or Red go-live assessment, and cron-based scheduled runs. See the [inbound](/support/docs/inbound-phone-agent/) and [outbound](/support/docs/outbound-phone-agent/) guides for the direction-specific workflow.

**Custom metrics.** Define plain-language checks for your own business rules, such as whether the agent asked for a PIN before changing an address. Each check is graded on every call of the scenarios you attach it to. See [Custom Metrics](#custom-metrics).

**Voice platform integrations.** If your agent runs on ElevenLabs, Retell, or Vapi, connect it in the **Integrations** tab to import its prompt and tool catalog and to see which tools it actually called on each test call. See the integration setup for [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), or [Vapi](/support/docs/test-vapi-agents/#vapi-integration).

**Performance testing.** Hold a target number of concurrent calls to your agent for a set period and measure load delivery, reliability, and response latency under load. See [Performance Testing](#performance-testing).

## Metrics

Every call is scored across 8 metric categories with 30+ individual metrics: conversation flow and interaction dynamics, accuracy and effectiveness, user experience and satisfaction, business operational metrics, audio voice quality, speech-to-text evaluation, validation results, and automated issue tags. Key metrics include First Call Resolution, CSAT, containment rate, intent recognition accuracy, and speech-to-text accuracy across accents and noise.

For the full metric tables and thresholds, see the [inbound phone agent metrics](/support/docs/inbound-phone-agent/#metrics). To grade your own business rules alongside them, see [Custom Metrics](#custom-metrics). A [performance test](#performance-testing) produces no conversation quality scores.

## Run a Phone Agent Test

Phone tests run from the dashboard or the CLI, driven by scenarios grouped into suites. Pick the direction that matches your agent.

- To test an agent that answers calls, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).
- To test an agent that places calls, see [outbound phone agent testing](/support/docs/outbound-phone-agent/).
- To run calls from the terminal, see how to [test phone agents with the CLI](/support/docs/agent-testing-cli/).

## Custom Metrics

Custom Metrics in the TestMu AI Agent Testing Platform grade phone agent calls on rules you write in plain language, such as "Did the agent ask for a PIN code after asking for the address?" For every call of the scenarios you attach a metric to, an AI agent grades the call from its transcript and returns an explanation, a verbatim quote as evidence, and clickable timestamps that jump the recording to the quoted moment. Custom Metrics are available for inbound and outbound **Phone Caller** agents, under **Configs**, then the **Custom Metrics** tab.

### When to Use Custom Metrics

Choose the grading method that matches what you want to check.

- Use the [built-in metrics](/support/docs/inbound-phone-agent/#metrics) to grade how well a call went in general. Use a custom metric to grade a rule specific to your business, such as asking for a PIN before changing an address, checking the 30-day return window before promising a refund, or offering a human handoff as soon as a caller sounds frustrated.
- Use a scenario's validation criteria to check whether that scenario's expected outcomes happened. Use a custom metric to grade a business rule on every call of each scenario you attach it to.

### Custom Metrics Prerequisites

- An inbound or outbound **Phone Caller** agent. See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) or [test an outbound phone agent](/support/docs/outbound-phone-agent/).
- At least one phone scenario in the project. A metric grades only the scenarios you attach it to.
- The rule you want checked, written in a sentence or two of plain language.
- Optionally, a test profile carrying values such as a customer ID or caller name, if your check should reference the data the call ran with.

### Create a Custom Metric

Create one custom metric for each business rule. You set its name, output type, grading prompt, and scenarios in the **New custom metric** drawer.

1. Open your **Phone Caller** agent.
2. Go to **Configs**, then the **Custom Metrics** tab.
3. Select **Create Custom Metric**. The **New custom metric** drawer opens.
4. Enter a short name that says what the check is, such as "Pin code after asking for address" or "Managed customer frustration escalation". The name appears in results and in **Metric Config**.
5. Choose an output type. See [Choose an Output Type](#choose-an-output-type).
6. Write the grading prompt. See [Write the Grading Prompt](#write-the-grading-prompt).
7. Optionally, select an **Insert test data** chip to insert a test profile key into the prompt. See [Use Test Profile Data in a Prompt](#use-test-profile-data-in-a-prompt).
8. In the **Scenarios** panel on the right, tick each scenario the metric applies to. See [Attach Scenarios](#attach-scenarios).
9. Select **Create metric**.

To fill in the name, output type, and grading prompt from a ready-made check instead of steps 4 to 6, see [Start From an Example](#start-from-an-example).

From then on, TestMu AI grades every new call of the attached scenarios on the metric. Past results are unchanged.

The **Custom Metrics** tab lists every metric in the project with its type, such as "Rating · passes at 70" or "Yes / No", and the number of scenarios it is attached to. The list flags a metric that is attached to no scenarios, because TestMu AI never grades it.

A new custom metric is report-only. TestMu AI grades it and shows it on every call of its attached scenarios, but it does not change a call's pass or fail verdict until you turn it on in **Metric Config**. See [Turn On Pass or Fail Gating](#turn-on-pass-or-fail-gating).

#### Choose an Output Type

The output type sets how TestMu AI grades a call on the metric and when the call passes.

| Output type | Meaning |
|---|---|
| **Yes / No, passes on yes** | A binary check. The call passes the metric only when the answer is yes. |
| **Rating 0-100, passes at the Metric Config bar** | A quality score from 0 to 100. The pass bar is set in **Metric Config** and defaults to 70. |

Use Yes / No for a rule that either happened or did not, such as "asked for a PIN". Use Rating for a quality that comes in degrees, such as how well the agent handled frustration.

#### Write the Grading Prompt

The grading prompt is what the AI agent checks in the call transcript. Write it in plain language, the way you would explain the check to a new QA hire, for example "Did the agent verify the caller's identity before sharing any account detail?" You do not write code, regular expressions, or scoring rubrics in a configuration file.

| Output type | How to write the prompt | Example |
|---|---|---|
| Yes / No | Start with "Did the agent ...?" To make the check strict, add one sentence on what counts as no. | "Did the agent ask for the customer ID before helping with the account? Moving on without asking counts as no." |
| Rating | Start with "Rate how well the agent ...", then add what to consider and, optionally, score bands. | "Rate how clearly the agent explained the next steps before the call ended. 0 to 25 nothing explained · 26 to 50 vague · 51 to 75 clear but incomplete · 76 to 100 clear and complete." |

For more guidance, see [Grading Prompt Guidelines](#grading-prompt-guidelines).

#### Use Test Profile Data in a Prompt

Write `{key}` anywhere in the grading prompt, where `key` is a field from a test profile. When TestMu AI grades a call, it replaces the placeholder with the value from the test profile the call ran with. The **Insert test data** chips below the prompt insert the keys that your project's profiles already carry.

For example, one metric with the prompt "Did the agent greet `{caller_name}` appropriately in English?" applies to every caller, because `{caller_name}` is filled in from the test profile each call ran with.

If a call runs without a value for a key, TestMu AI still grades the metric and shows the missing value as "not set". The drawer warns you ahead of time which scenarios this affects.

#### Start From an Example

Below the grading prompt, the drawer shows ready-made example chips.

1. Optionally, select **Suggest examples from my agent prompt (uses credits)**. The action reads your agent's own prompt and proposes 4 to 6 checks based on it, such as "Yes / No · Enforced refund transaction limit".
2. Select an example chip. The chip fills in the name, output type, and grading prompt together.
3. Edit any of the filled-in values as needed.

If your agent prompt or test data changes later, the drawer notes that the stored examples are based on an earlier version. To get new suggestions, select **Suggest examples from my agent prompt (uses credits)** again.

#### Attach Scenarios

In the **Scenarios** panel on the right of the drawer, tick the scenarios the metric applies to. TestMu AI grades only calls of the ticked scenarios on the metric and leaves everything else untouched. For example, attach a booking-flow check to booking scenarios, not to your cancellation tests.

Grading runs on every call of every attached scenario, so attach a metric only to the scenarios where it applies.

You can save a metric with no scenarios attached, but TestMu AI never grades it, and the **Custom Metrics** list flags it. A project holds up to 50 custom metrics, and up to 20 of them can be attached to one scenario.

### Grading Prompt Guidelines

Follow these guidelines when you write a grading prompt.

- **One rule per metric.** "Asked for a PIN" and "confirmed the new address" are two metrics, so a failure shows which rule broke.
- **Say what counts as no.** A Yes / No prompt with one sentence of edge-case guidance, such as "if the caller refused, the agent should still have asked at least once", grades more consistently than a bare question.
- **Give ratings score bands.** Spelling out what 0 to 25, 26 to 50, 51 to 75, and 76 to 100 mean anchors the score and makes runs comparable.
- **Keep grading prompts about the transcript.** Checks about hold music, voice tone, or backend actions cannot be judged from what was said. Use the audio metrics and tool call validation for those. Tool call validation is available through the [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), and [Vapi](/support/docs/test-vapi-agents/#vapi-integration) integrations.

### Turn On Pass or Fail Gating

Turn on a custom metric in **Metric Config** to make it decide the call's pass or fail verdict.

1. In your **Phone Caller** agent, go to **Configs**, then **Metric Config**.
2. Find the **Custom metrics** section, which lists every metric in the project.
3. Turn on each metric that should decide the verdict.
4. For a Rating metric, set the pass bar with the slider.

An enabled metric works the same way as the built-in metrics: a call that fails it fails, and it counts in the score. The pass bar you set in **Metric Config** is the one shown and used everywhere, including on results. TestMu AI still grades a metric that is turned off and shows it on every call's results for reference.

Leave a new metric off in **Metric Config** for a few runs. Read its grades, tighten the prompt if needed, then turn it on.

### View Custom Metric Results

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

**Example Explanation**
For a failed Yes / No check on asking for a PIN, the explanation can read: "The agent asked the caller to provide the new shipping address but never asked for a PIN code at any point in the call."

The status chip shows one of these values.

| Status | Meaning |
|---|---|
| **Pass** | The call passed the metric. A Yes / No metric passes on yes, and a Rating metric passes at the pass bar set in **Metric Config**. |
| **Fail** | The call did not pass the metric. The call's verdict changes only when the metric is turned on in **Metric Config**. |
| **Skipped** | The metric could not be graded, for example because the call had no usable transcript or grading could not complete in time. The chip is grey and shows the reason. A skipped metric never fails a call. |

At the suite level, gated custom metrics (the ones turned on in **Metric Config**) roll up into the call's verdict breakdown as a single line, such as "Custom metrics (1 of 3 failed)".

### What Happens When You Edit or Delete a Metric

Editing or deleting a custom metric does not change the grades already stored on past calls.

| Action | What happens |
|---|---|
| Edit the grading prompt or output type | TestMu AI creates a new version of the metric. Each grade records the version it was scored with. |
| Delete the metric | TestMu AI stops grading the metric on future calls and removes it from **Metric Config**. Past call results keep the grades they already have. |

To keep a metric on results without letting it decide verdicts, turn it off in **Metric Config** instead of deleting it.

### How Custom Metric Grading Works

After each call of an attached scenario is analyzed, TestMu AI grades the call on its custom metrics.

1. TestMu AI fills any `{key}` placeholders in your grading prompts with the test profile data the call ran with.
2. The grading AI agent reads the call transcript and grades every attached metric in one pass.
3. TestMu AI stores each grade on the call with its explanation, evidence quote, timestamps, and a confidence level.

Grading follows these rules.

- **Grading is transcript-based.** It judges what was said on the call, not audio quality or latency. The [built-in call and audio quality metrics](/support/docs/inbound-phone-agent/#metrics) cover those.
- **Grading is fail-safe.** If a call has no usable transcript, or grading cannot complete in time, TestMu AI marks the affected metrics **Skipped** with the reason. A skipped metric never fails a call, and the rest of the call's analysis always completes.

### Custom Metrics Limits and Defaults

| Item | Limit or default |
|---|---|
| Custom metrics per project | Up to 50 |
| Custom metrics attached to one scenario | Up to 20 |
| Rating scale | 0 to 100 |
| Pass bar for a Rating metric | 70 by default. Set it with the slider in **Metric Config**. |
| Gating for a new metric | Off (report-only) until you turn it on in **Metric Config** |
| Checks proposed by **Suggest examples from my agent prompt (uses credits)** | 4 to 6, based on your agent's prompt. The action uses credits. |

### Troubleshoot Custom Metrics

| What you see | What to do |
|---|---|
| A metric never appears on a call's results | Confirm that the call's scenario is ticked for that metric, and that the call was analyzed after the metric was created. Metrics grade new calls only. A performance test produces no custom metrics, because AI does not evaluate performance calls. See [Performance Testing Scope and Exclusions](#performance-testing-scope-and-exclusions). |
| A metric shows **Skipped** | Read the reason on the row. A call with no usable transcript, or grading that could not complete in time, is skipped rather than failed. |
| A grade mentions "not set" | The call ran without a test profile value for a `{key}` in your prompt. Add the key to the test profile the scenario runs with, or remove the placeholder. |
| A metric fails calls, but the verdict does not change | The metric is off in **Metric Config**. Turn it on there to make it decide pass or fail. |
| "This check was not saved" when you create or edit a metric | The grading prompt was rejected because it is not a grading check, for example an attempt to extract data or perform an unrelated task. Rephrase it as a check on the agent's behavior in the call. |
| "Could not screen the prompt right now" | Prompt review was temporarily unavailable. Try saving again in a moment. |
| **Suggest examples from my agent prompt (uses credits)** is disabled | Suggestions are generated from your agent's prompt. Add a prompt to the agent first. |
| "This project already has the maximum of 50 custom metrics" | A project holds up to 50 custom metrics, and up to 20 of them can be attached to one scenario. Delete or detach metrics you no longer use. |

### Custom Metrics Security and Safeguards

These safeguards apply to every custom metric.

- TestMu AI reviews each grading prompt when you save it. It rejects a prompt that tries to do something other than grade the call, such as extracting information or overriding instructions.
- Evidence timestamps point only at moments that exist on the recording.
- Custom metrics read the call transcript and nothing else.
- Grades never modify your agent or your systems.

## Performance Testing

Performance testing on the TestMu AI Agent Testing Platform measures how an AI phone agent behaves when it handles many calls at the same time. You run a performance test on a phone suite: TestMu AI uses the suite's scenarios to place real phone calls to your agent, holds a target number of concurrent calls for a set period, and reports on load delivery, reliability, and responsiveness. The run page shows the test's current phase live. Because the test places calls to your agent, it applies to agents that answer calls.

### When to Use Performance Testing

Choose the test that matches what you want to check.

- Use a performance test to measure how your agent behaves under concurrent load: whether the requested number of concurrent calls is sustained, whether calls connect and conversations end as expected, and how quickly the agent responds as load changes.
- Use a standard [phone agent test](#run-a-phone-agent-test) on the same suite to confirm that your agent behaves correctly on an individual call. A performance test does not evaluate conversation content. See [Performance Testing Scope and Exclusions](#performance-testing-scope-and-exclusions).

### Performance Testing Prerequisites

- A phone suite that contains at least one scenario. To set up scenarios and test suites, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).
- Enough available parallels to cover the target load. A parallel is the capacity for one concurrent call. See [Parallels and Pricing](#parallels-and-pricing).

### Configure a Performance Test

Set two parameters for the test: how many concurrent calls to hold, and for how long.

| Parameter | Description | Accepted range |
|---|---|---|
| **Target** | Number of concurrent calls to maintain during the hold | 1 to the number of available parallels |
| **Hold duration** | Length of the steady-state measurement period | 1 to 120 minutes. The default is 5. |

TestMu AI places every call over live telephony to your agent, using the scenarios, voices, background noise profiles, and personas configured in the suite. It distributes calls evenly across every scenario and configuration combination (voice, noise profile, and persona) in the suite, so the test exercises each scenario.

Each call in a performance test is charged for its call minutes, the same as a standard test call. See [Usage Charges](#usage-charges).

### What Happens During a Performance Test

Each test moves through four phases: ramp up, hold, drain, and finalizing. The run page shows the current phase live.

| Phase | What happens |
|---|---|
| **1. Ramp up** | TestMu AI initiates calls at a rate of 5 per second until it reaches the target. If the test does not reach the target within the expected ramp time plus a 60-second allowance, it proceeds to the hold and records that the ramp timed out. |
| **2. Hold** | TestMu AI maintains the target load for the configured **Hold duration**. It checks concurrency every 2 seconds and replaces each completed call with a new one. This is the only scored phase. |
| **3. Drain** | TestMu AI initiates no new calls. Calls in progress get up to 60 seconds to complete. TestMu AI ends any call still active after this window and classifies it as **Ended by test**. |
| **4. Finalizing** | TestMu AI waits for the final call records from the voice platform (duration, end reason, and cost), then compiles the results. |

**Measurement window**
TestMu AI calculates load, reliability, and latency metrics on the hold phase only, so start-up and wind-down activity does not distort the measurements. The ramp up and drain phases introduce and remove load in a controlled way, and TestMu AI excludes them from scoring.

### Performance Test Safeguards

Performance tests run with the following safeguards.

| Safeguard | Behavior |
|---|---|
| **Parallel limit** | A test never exceeds your organization's parallel limit. If not enough parallels are available at start, the test does not launch, and TestMu AI displays the available count. |
| **Platform capacity** | If the voice platform reports that it is at capacity, TestMu AI pauses new calls for 5 seconds before retrying. It records each occurrence as a *capacity rejection*. |
| **Repeated start failures** | If 10 consecutive calls fail to start for reasons other than capacity, TestMu AI stops the test and marks it as failed. |
| **Manual stop** | You can stop a test at any time. TestMu AI ends the active calls and compiles results from the data collected. |

### View Performance Test Results

A performance test reports on three areas.

| Area | Question it answers |
|---|---|
| **Load delivery** | Was the requested level of concurrent calls sustained for the full test? |
| **Reliability** | Did calls connect, and did conversations end as expected? |
| **Responsiveness** | How quickly did the agent respond to the caller, and how did that change under load? |

The results include summary metrics, an outcome for every call, a per-second load timeline, agent response latency percentiles, and a breakdown by concurrency level with automated findings. Summary metrics cover the hold phase only, while call outcomes and the load timeline cover the full test.

#### Summary Metrics

The summary reports four metrics for the hold phase.

| Metric | What it shows |
|---|---|
| **Load achieved** | Percentage of the hold during which concurrent calls were at or above 90% of the target. Reported with the average number of concurrent calls, the total seconds below target, and the number of capacity rejections. |
| **Connection reliability** | Connected calls as a percentage of all calls that reached a final connection result (connected or not connected). |
| **Response latency (hold)** | P50 and P95 agent response time across all responses recorded during the hold. Reported with the sample count, the call count, and the number of connected calls that received no agent response. |
| **Conversation reliability** | Calls that ended normally as a percentage of all connected calls that have completed. |

#### Call Outcomes

TestMu AI assigns each call to exactly one outcome, so totals always reconcile.

| Outcome | Definition |
|---|---|
| **Submitted** | All calls the test attempted to place |
| **Dispatch failed** | The call could not be initiated |
| **Not connected** | The call was placed but did not connect, for example no answer or busy |
| **Connected** | The call reached the agent |
| **Ended normally** | A connected call ended by the caller, ended by the agent, or transferred by the agent |
| **Ended abnormally** | A connected call that ended for any other reason, such as a silence timeout or agent error. TestMu AI displays the reason. |
| **Ended by test** | A connected call still active when the drain window closed. TestMu AI ends the call, counts it as connected, and excludes it from normal and abnormal endings. |
| **Still active** | Calls ringing or connected while the test is running |

#### Load Timeline

The load timeline is a per-second view of the full test, with the ramp up, hold, and drain phases highlighted. It plots the following.

| Series | What it shows |
|---|---|
| **In flight** | All active calls, ringing or connected |
| **Connected** | Calls answered by the agent |
| **Ringing** | Calls placed but not yet answered |
| **Target** | The configured concurrency level |

#### Agent Response Latency

Agent response latency is the time between the end of the simulated caller's speech and the start of the agent's reply. TestMu AI measures it on every conversational turn.

| Percentile | Interpretation |
|---|---|
| **P50** | Median response time. Represents the typical caller experience. |
| **P90** | 90% of responses were at or below this value. |
| **P95** | 95% of responses were at or below this value. The primary indicator used for degradation analysis. |
| **P99** | 99% of responses were at or below this value. Represents the slowest experiences callers encounter. |

A widening gap between P50 and the upper percentiles as load increases indicates that a subset of callers is experiencing materially longer delays.

If the results show latency as not supported, see [Performance Testing Scope and Exclusions](#performance-testing-scope-and-exclusions).

#### Concurrency Analysis

TestMu AI breaks the results down by concurrency level to identify the point at which performance degrades. It groups calls by the number of concurrent calls active when each call started. The groups are 1, 2 to 5, 6 to 10, 11 to 20, 21 to 50, 51 to 100, 101 to 200, and 201 to 500.

Each group reports the following.

| Metric | Description |
|---|---|
| **Calls** | Number of calls in the group |
| **Success rate and drop rate** | Share of completed calls that ended normally (success rate) or dropped (drop rate) |
| **Time to connect** | Average time from call initiation to connection |
| **First response** | Average time to the agent's first reply |
| **Response latency** | P50, P90, P95, and P99 agent response time |
| **Call duration** | Average length of a call |
| **Error distribution** | Call endings grouped by reason, such as drop, silence timeout, agent error, maximum duration reached, or no answer |
| **Cost** | Average cost per call |

### How Automated Findings Are Decided

TestMu AI derives findings from the concurrency analysis using fixed rules. No AI model is involved, and the same data always produces the same findings.

| Finding | Rule |
|---|---|
| **Breaking point** | The lowest concurrency group where the success rate falls below **80%**, or where P95 response latency exceeds **2x** the P95 of the lowest group |
| **Latency degradation** | Ratio of P95 response latency at peak concurrency to P95 at the lowest group |
| **Drop rate alert** | The lowest concurrency group where the drop rate reaches **15%** or higher |
| **Safe operating capacity** | The highest concurrency group below the breaking point, or confirmation that no degradation was observed |

**Confidence thresholds**
A concurrency group contributes to findings only when it contains at least **3 calls** and at least **10 response samples**. TestMu AI still displays groups below these thresholds and marks them as low confidence, so that isolated events are not reported as capacity issues.

### Performance Testing Scope and Exclusions

Performance tests focus on load behavior. The following are outside their scope.

| Not included | Detail |
|---|---|
| **Transcript analysis** | AI does not evaluate performance calls. A performance test produces no validation criteria, scenario pass or fail results, [custom metrics](#custom-metrics), or conversation quality scores. To evaluate conversation content, run the suite as a standard test. |
| **Ramp up and drain scoring** | TestMu AI calculates summary metrics on the hold phase only. |
| **Agent infrastructure metrics** | TestMu AI takes measurements from the caller's perspective. It does not observe server resources, model provider limits, or other systems internal to your agent. |
| **Latency without timed messages** | Response latency requires timestamped messages for both caller and agent from the voice platform. When these are unavailable, TestMu AI reports latency as not supported. |
| **Load above the parallel limit** | Tests do not raise your organization's parallel limit. Additional parallels are required to test higher concurrency. |

### Parallels and Pricing

A parallel is the capacity for one concurrent call. The number of available parallels determines the maximum target for a performance test. Parallels in use by other tests in your organization reduce the number available.

| Item | Price |
|---|---|
| **Included parallels** | 5 per organization, at no additional cost |
| **Additional parallels** | $60 per parallel |

**Example**
A test with a target of 15 concurrent calls requires 15 parallels. With 5 included, 10 additional parallels are needed, at a cost of 10 x $60 = $600.

#### Usage Charges

Calls placed during a performance test are charged as follows.

- Each call is charged for its call minutes (voice platform and telephony), consistent with standard test calls.
- No analysis charges apply, as performance calls are not evaluated by AI.
- Calls that do not connect incur no call charge, and any credits reserved for them are released.
- Charges are settled when the test completes.

### Troubleshoot Performance Tests

| Symptom | Cause | What to do |
|---|---|---|
| The test does not launch, and the available parallel count is displayed | Fewer parallels were available at start than the **Target** needs | Set **Target** to the available count or lower, or add parallels. Parallels in use by other tests in your organization reduce the number available. |
| The maximum **Target** is lower than expected | The target is limited to available parallels, and other tests running in your organization at the same time use parallels | Run the test when fewer parallels are in use by other tests, or add parallels. See [Parallels and Pricing](#parallels-and-pricing). |
| The test stops and is marked as failed | 10 consecutive calls failed to start for reasons other than capacity | Review the call outcomes. TestMu AI counts calls that could not be initiated as **Dispatch failed**. |
| The test records that the ramp timed out | The test did not reach the target within the expected ramp time plus the 60-second allowance | The test still proceeds to the hold. Check **Load achieved** for the percentage of the hold during which concurrent calls were at or above 90% of the target. |
| Calls show **Ended abnormally** | The calls connected but did not end normally, for example because of a silence timeout or agent error | Read the reason displayed for each call. To see the concurrency levels at which these endings occur, check **Error distribution** in the [concurrency analysis](#concurrency-analysis). |
| A concurrency group is marked low confidence | The group has fewer than 3 calls or fewer than 10 response samples | Increase the **Hold duration** or the **Target** to collect more data. |
| The results show no validation criteria, scenario pass or fail results, custom metrics, or conversation quality scores | AI does not evaluate performance calls | Run the same suite as a standard test to evaluate conversation content. |

## Related TestMu AI Guides

- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) step by step.
- See how to [test an outbound phone agent](/support/docs/outbound-phone-agent/) step by step.
- See how to connect [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), or [Vapi](/support/docs/test-vapi-agents/#vapi-integration) agents for tool call validation.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
