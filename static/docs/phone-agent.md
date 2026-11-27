# Phone Agent Testing With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The TestMu AI Agent Testing Platform tests phone agents over real telephone calls, not simulations. A simulated caller follows a scenario, the platform records the full conversation, and every call is scored on 42 call quality metrics. You can test agents that answer calls (inbound) and agents that place them (outbound), with live test calls or with recordings of your production calls.

## What Are Phone Agents

A phone agent is an AI voice agent that talks to people over the telephone network, such as a support line, an IVR menu, a sales dialer, or an appointment reminder. Testing one differs from testing a [voice agent](/support/docs/voice-agent/) or a [chat agent](/support/docs/chat-agent/) in three ways.

- **Telephony infrastructure.** Chat and voice agents are reached through an endpoint profile. A phone agent is reached over a real phone line, so results include what the phone network adds, such as the time a call takes to connect and the audio quality of the call.
- **Real-time speech.** The simulated caller speaks and listens in real time, with the voice, accent, and background noise you choose. Pauses, interruptions, and silences are measured the way a caller experiences them.
- **IVR handling.** Keypad tones (DTMF) are detected and shown in the transcript, so you can test menu navigation.

If your phone line is a scripted IVR menu that only accepts set keypad or spoken options, test it as an [IVR agent](/support/docs/ivr-agent/) instead.

## Inbound vs. Outbound

| | Inbound | Outbound |
|---|---|---|
| **Who starts the call** | The platform calls your agent's phone number, and your agent answers. | Your agent calls a number the platform provides, and the platform answers. |
| **Main use cases** | IVR menus, inbound support, appointment scheduling, and billing. | Sales dialers, lead qualification, collections, and appointment reminders. |
| **Key testing concern** | Understanding what the caller needs and resolving it on the first call. | Opening the call well and keeping the recipient engaged, since your agent speaks first. |

- [Inbound phone agents](#inbound-phone-agents) if your agent answers calls.
- [Outbound phone agents](#outbound-phone-agents) if your agent places calls.

## Phone Agent Testing Features

These features apply to inbound and outbound agents, and the walkthroughs below don't cover them step by step.

- **Pre Analysis and Post Analysis.** Phone testing runs in two modes, which you switch with the analysis dropdown. Pre Analysis places live test calls, and Post Analysis scores recordings of your production calls. See [Analyze Production Calls](#analyze-production-calls-post-analysis).
- **Caller voices.** Choose from 200+ voices across providers, with different accents and speech speeds, and preview a voice before you pick it.
- **Background noise.** Add one of 15 presets, such as café, street, call center, or poor cellular connection, to test your agent in realistic conditions.
- **Call timing.** **Turn Wait Time** (0.5 to 5 seconds) is how long the caller waits after your agent stops speaking before it replies. Raise it if your agent pauses between sentences, so the caller doesn't cut in. **End call if silent for** (30 to 180 seconds) ends a call that goes quiet, and a maximum call duration (60 to 1800 seconds) stops runaway calls. You can also choose whether the caller or your agent speaks first.
- **Scenario types.** When you generate scenarios, choose **Happy Path** for normal flows, **Negative** for errors and invalid inputs, **Edge Case** for boundary values and unusual conditions, or **Red Team** for security attacks and adversarial inputs. Scenario languages include Japanese and Portuguese.
- **Red teaming.** Red team scenarios are generated from your agent's own prompt. The platform identifies the rules your agent must follow, attacks those rules, and prioritizes rules not yet covered, and the target list refreshes when the prompt changes. Findings appear in the Red Team section of the suite's **Insights** page, and each one links to the moment in the call recording.
- **Pronunciation assessment.** Set an accent on the agent and switch the check on per scenario to see mispronounced words on the finished call.
- **Personas.** A persona sets the type of caller the simulated caller plays. Choose an available persona or create your own.
- **Validation criteria.** Each scenario lists the outcomes a call must reach, such as "agent confirms the new appointment date". Every call is checked against them on the **Validation Results** tab.
- **Test profiles.** A test profile holds the data a call runs with, such as a customer ID or a caller name, so you can run data-driven calls.
- **Agent profiles.** For inbound tests, an agent profile is a reusable caller persona with a name, phone number, voice, and background noise, kept in a library for your whole organization. Each profile can be switched between active and inactive.
- **Live call monitoring.** Follow each call's status and duration while it runs, and end a call in progress.
- **Recordings and transcripts.** Every call produces a recording and a speaker-identified transcript. Keypad tones (DTMF) appear in the transcript, so you can test IVR menu navigation. Click anywhere on the waveform to jump to that moment, or drag to scrub.
- **Voice platform integrations.** If your agent runs on ElevenLabs, Retell, or Vapi, connect it on the **Integrations** tab to import its prompt and tool catalog, and see whether your agent called each expected tool on every test call. See the setup for [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), or [Vapi](/support/docs/test-vapi-agents/#vapi-integration). Salesforce Agentforce voice agents connect the same way: the prompt syncs, you pick Agentforce tools in the scenario editor, and the tool calls made on each call are verified. See the [Agentforce integration](/support/docs/test-agentforce-agents/#agentforce-integration).

## Inbound Phone Agents

An inbound phone agent answers calls. To test one, the platform places a real call to your agent's phone number, and a simulated caller follows each scenario. Typical use cases are IVR menus, inbound support, appointment scheduling, and billing.

You can register phone numbers from 20+ countries. Registered numbers are masked on screen, and you can edit or delete them on the **Phone Numbers** tab. Inbound agents can also be reached over a SIP trunk instead of a phone number.

## Test an Inbound Phone Agent (Pre Analysis)

Follow these seven steps in the dashboard to run live test calls against your inbound agent.

**Step 1: Create the agent.** On the Agent Testing page, click **Create New Agent**. Enter an **Agent Name**, set **Agent Type** to **Phone Caller Agent**, and set **Phone Call Type** to **Inbound (Bot receives calls)**. Then click **Create New Agent**.

**Step 2: Define the agent prompt.** On the **Prompt** tab, describe your agent's role and ideal behavior in **Agent-Under-Evaluation Prompt**, then click **Save Prompt**. The prompt defines the behavior your agent is tested against, so include the policies, facts, and steps your agent must follow.

- Optionally, under **Upload Files**, add supporting documents (PDF, MS Word, MS Excel, TXT, MD), audio (MP3, WAV, M4A), or images (PNG, JPG, WEBP), up to 5 MB each.
- Optionally, under **Import from Jira**, enter a Jira issue key or URL and click **Import**. You can import up to five tickets, each shown as its own tab. Click **Connect Jira** first if Jira isn't connected.

**Step 3: Generate scenarios.** On the **Scenarios** tab, click **Generate Scenarios**. Set the number of scenarios, up to 20. Select the scenario types to generate, or leave them all unchecked for normal scenarios, and select the languages. Then click **Generate Scenarios**.

**Step 4: Add your agent's phone number.** On the **Phone Numbers** tab, register the number your agent answers on, with its country code. If you test one number most of the time, set it as the default. The platform dials this number in every test call.

**Step 5: Create a suite.** On the **Suites** tab, click **Create New Suite**.

- Enter a **Suite Name**.
- Optionally, select an **Agent Profile**. A profile set on a scenario overrides it.
- Choose the **Region** the test calls come from. The default is US.
- Select the scenarios to run. For each one, choose the phone number to call, one or more voices, a background noise, a persona, and a test profile, and set the **Iterations**.
- Adjust **Turn Wait Time** and **End call if silent for** if needed.
- Check the number of calls and the available parallel calls in the footer, then click **Create New Suite**.

**Step 6: Run the suite.** Click **Run** next to your suite. Every call in the suite is a real phone call to your agent, so the **Confirm Run** dialog lists each call before anything is dialed. Check the number of calls and each call's voice and background noise, then click the trigger button, such as **Trigger 2 calls**.

**Step 7: Review the call results.** Open a call from the list to see whether it passed and why.

- Start with failed calls. On the **Analytics** tab, click a metric tile to see the reason behind its result. Times in the reason, such as "At 01:38", jump to that moment in the recording.
- On the **Recording** tab, play the call or read the transcript around that moment to hear how your agent handled it.
- On the **Validation Results** tab, check which of the scenario's validation criteria the call met or missed.
- If a call failed but its metrics look fine, check the **MOS** badge. A call's pass or fail can be based on the metrics, on the mean opinion score of the call audio, or on both.

## Performance Testing for Inbound Phone Agents {#performance-testing}

Performance testing holds a target number of concurrent calls to your inbound agent for a set period, using the scenarios in a suite. It shows whether the load was sustained, whether calls connected and ended normally, and how response latency changed as load rose, so you can find the concurrency level at which your agent starts to degrade. It does not score conversation content, so run the suite as a standard test to check what your agent says. Performance testing applies only to agents that answer calls.

To configure a test and read its results, see [Inbound Phone Agent Performance Testing](/support/docs/phone-agent-performance-testing/).

## Outbound Phone Agents

An outbound phone agent places calls. To test one, the platform reserves a recipient number from an outbound number pool, your agent calls it, and the platform answers and scores the conversation. Typical use cases are sales dialers, lead qualification, collections, and appointment reminders.

- **Outbound number pool.** You can see the pool's status and available numbers, and manage the reservations each suite holds.
- **Passive mode.** Listen to a live outbound call and score it without taking part in the conversation, for QA monitoring.
- **No performance testing.** Performance testing places calls to your agent, so it applies only to inbound agents.

## Test an Outbound Phone Agent (Pre Analysis)

Follow these six steps in the dashboard to run live test calls with your outbound agent.

**Step 1: Create the agent.** On the Agent Testing page, click **Create New Agent**. Enter an **Agent Name**, set **Agent Type** to **Phone Caller Agent**, and set **Phone Call Type** to **Outbound (Bot makes calls)**. Then click **Create New Agent**.

**Step 2: Define the agent prompt.** On the **Prompt** tab, describe your agent's role and ideal behavior in **Agent-Under-Evaluation Prompt**, then click **Save Prompt**. The prompt defines the behavior your agent is tested against, so include the policies, facts, and steps your agent must follow.

- Optionally, under **Upload Files**, add supporting documents (PDF, MS Word, MS Excel, TXT, MD), audio (MP3, WAV, M4A), or images (PNG, JPG, WEBP), up to 5 MB each.
- Optionally, under **Import from Jira**, enter a Jira issue key or URL and click **Import**. You can import up to five tickets, each shown as its own tab. Click **Connect Jira** first if Jira isn't connected.

**Step 3: Generate scenarios.** On the **Scenarios** tab, click **Generate Scenarios**. Set the number of scenarios, up to 7 at a time. Select the scenario types to generate, or leave them all unchecked for normal scenarios, and select the languages. Then click **Generate Scenarios**.

**Step 4: Create a suite.** On the **Suites** tab, click **Create New Suite**.

- Enter a **Suite Name**.
- Optionally, choose a **Profile**.
- Select the scenarios to run, and choose a voice and a background noise for each one.
- Adjust **Turn Wait Time** and **End call if silent for** if needed.
- Click **Create New Suite**.

**Step 5: Run the suite.** On the **Suites** tab, click **Run** next to your suite. The platform reserves recipient numbers from the outbound number pool, your agent calls them, and the platform answers as the simulated recipient. Because the platform answers, your agent speaks first.

The suite holds its reserved numbers until you release them, so click **Clear Reservations** in the suite dialog when the run is done.

**Step 6: Review the call results.** Open a call from the list to see whether it passed and why.

- Start with failed calls. The **Call Summary** at the top of the **Analytics** tab explains the verdict. Click a metric tile to see the reason behind its result. Times in the reason, such as "At 01:38", jump to that moment on the **Recording** tab.
- On the **Validation Results** tab, check which of the scenario's validation criteria the call met or missed.
- Read **User sentiment** together with the scenario. The simulated recipient plays a scripted character, so a recipient written to be skeptical may stay negative even when your agent does well.
- Because your agent speaks first, **Opening length** always applies, and **Time to First Word** is timed from the moment the call connects.

## Analyze Production Calls (Post Analysis)

Post Analysis scores recordings of real production calls with the same metrics as live test calls, without placing new calls. Use it to check how your agent performs with real customers. It works for inbound and outbound agents.

To analyze production calls, select **Post Analysis** from the analysis dropdown. In Post Analysis, you can:

- **Upload recordings** of production calls as MP3 or WAV files. Add their transcripts too if you want to compare them with the speech-to-text output, and pick an accent at upload to check pronunciation.
- **Analyze in batches.** Multiple recordings are analyzed in parallel.
- **Choose metrics.** Select which metric categories or individual metrics to run.
- **Review a call.** Play the recording, follow the speaker-identified transcript with any keypad inputs (0 to 9, star, pound), and download the audio and transcript.
- **Organize recordings.** Bookmark and tag recordings, and search or filter them by name, status, date, or tag.

## Phone Agent Metrics {#metrics}

Every call, whether a live test call or a production recording, is scored on 42 metrics grouped under six questions: is it fast, does it sound good, does it hold a good conversation, does it get the facts right, does it get the job done, and is it safe. Only your agent is judged. The simulated caller may be rude or confused on purpose, and that never counts against your agent.

To grade your own business rules, such as asking for a PIN before changing an address, add **custom metrics**: plain-language checks graded on every call of the scenarios you attach them to. In **Metric Config**, choose which metrics run, change their targets and ratings, and decide which ones count toward a call's pass or fail.

For what each metric measures, its default targets, and how to set up custom metrics, see [Phone Caller Agent Metrics](/support/docs/agent-features-and-metrics/#phone-agent-metrics).

## Go-Live Assessment and Scheduled Runs

**Go-live assessment.** Get a Green, Yellow, or Red verdict on whether your agent is ready for production, with the failure patterns behind it and prioritized action items. See [Go-Live Assessment](/support/docs/agent-features-and-metrics/#go-live-assessment).

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
Performance (load) testing is on the custom-quoted Enterprise plan. A test with a target of 15 concurrent calls requires 15 parallels. With 5 included, 10 additional parallels are needed, at a cost of 10 x $60 = $600.

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

- See how to [load test an inbound phone agent](/support/docs/phone-agent-performance-testing/) with concurrent calls.
- See how to [run phone agent tests from the terminal](/support/docs/agent-testing-cli/) with the CLI.
- See how to [test a scripted IVR menu](/support/docs/ivr-agent/), including [Twilio IVRs](/support/docs/test-twilio-ivr/).
- See how to connect [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), [Vapi](/support/docs/test-vapi-agents/#vapi-integration), or [Salesforce Agentforce](/support/docs/test-agentforce-agents/#agentforce-integration) agents for tool call validation.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
