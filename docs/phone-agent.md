---
id: phone-agent
toc_max_heading_level: 3
title: Phone Agent Testing With TestMu AI
hide_title: false
sidebar_label: Phone Agents
description: Test inbound and outbound phone agents on TestMu AI with real calls. Run live test calls, analyze production recordings, and load test agents that answer calls.
keywords:
 - phone agent testing
 - inbound phone agent testing
 - outbound phone agent testing
 - ivr testing
 - ai voice agent evaluation
 - call recording analysis
 - phone agent performance testing
url: https://www.testmuai.com/support/docs/phone-agent/
site_name: TestMu AI
slug: phone-agent/
canonical: https://www.testmuai.com/support/docs/phone-agent/
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
          "name": "Phone Agent Testing",
          "item": `${BRAND_URL}/support/docs/phone-agent`
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
      "@id": "https://www.testmuai.com/support/docs/phone-agent/"
    },
    "headline": "Phone Agent Testing With TestMu AI",
    "description": "Test inbound and outbound phone agents on TestMu AI with real calls. Run live test calls, analyze production recordings, and load test agents that answer calls.",
    "url": "https://www.testmuai.com/support/docs/phone-agent/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "phone agent testing",
      "inbound phone agent testing",
      "outbound phone agent testing",
      "ivr testing"
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
    "dateModified": "2026-11-12T13:50:45+05:30"
  }) }}
/>

The TestMu AI Agent Testing Platform tests phone agents over real telephone calls, not simulations. A simulated caller follows a scenario, the platform records the full conversation, and every call is scored on 42 call quality metrics. You can test agents that answer calls (inbound) and agents that place them (outbound), with live test calls or with recordings of your production calls.

## What Are Phone Agents

---

A phone agent is an AI voice agent that talks to people over the telephone network, such as a support line, an IVR menu, a sales dialer, or an appointment reminder. Testing one differs from testing a [voice agent](/support/docs/voice-agent/) or a [chat agent](/support/docs/chat-agent/) in three ways.

- **Telephony infrastructure.** Chat and voice agents are reached through an endpoint profile. A phone agent is reached over a real phone line, so results include what the phone network adds, such as the time a call takes to connect and the audio quality of the call.
- **Real-time speech.** The simulated caller speaks and listens in real time, with the voice, accent, and background noise you choose. Pauses, interruptions, and silences are measured the way a caller experiences them.
- **IVR handling.** Keypad tones (DTMF) are detected and shown in the transcript, so you can test menu navigation.

## Inbound vs. Outbound

---

| | Inbound | Outbound |
|---|---|---|
| **Who starts the call** | The platform calls your agent's phone number, and your agent answers. | Your agent calls a number the platform provides, and the platform answers. |
| **Main use cases** | IVR menus, inbound support, appointment scheduling, and billing. | Sales dialers, lead qualification, collections, and appointment reminders. |
| **Key testing concern** | Understanding what the caller needs and resolving it on the first call. | Opening the call well and keeping the recipient engaged, since your agent speaks first. |

- [Inbound phone agents](#inbound-phone-agents) if your agent answers calls.
- [Outbound phone agents](#outbound-phone-agents) if your agent places calls.

## Phone Agent Testing Features

---

These features apply to inbound and outbound agents, and the walkthroughs below don't cover them step by step.

- **Pre Analysis and Post Analysis.** Phone testing runs in two modes, which you switch with the analysis dropdown. Pre Analysis places live test calls, and Post Analysis scores recordings of your production calls. See [Analyze Production Calls](#analyze-production-calls-post-analysis).
- **Caller voices.** Choose from 200+ voices across providers, with different accents and speech speeds, and preview a voice before you pick it.
- **Background noise.** Add one of 15 presets, such as café, street, call center, or poor cellular connection, to test your agent in realistic conditions.
- **Call timing.** **Turn Wait Time** (0.5 to 5 seconds) is how long the caller waits after your agent stops speaking before it replies. Raise it if your agent pauses between sentences, so the caller doesn't cut in. **End call if silent for** (30 to 180 seconds) ends a call that goes quiet, and a maximum call duration (60 to 1800 seconds) stops runaway calls. You can also choose whether the caller or your agent speaks first.
- **Scenario types.** When you generate scenarios, choose **Happy Path** for normal flows, **Negative** for errors and invalid inputs, **Edge Case** for boundary values and unusual conditions, or **Red Team** for security attacks and adversarial inputs. You can also create a scenario manually with a name, a description, and the expected output. Scenario languages include Japanese and Portuguese.
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

---

An inbound phone agent answers calls. To test one, the platform places a real call to your agent's phone number, and a simulated caller follows each scenario. Typical use cases are IVR menus, inbound support, appointment scheduling, and billing.

You can register phone numbers from 20+ countries. Registered numbers are masked on screen, and you can edit or delete them on the **Phone Numbers** tab. Inbound agents can also be reached over a SIP trunk instead of a phone number.

## Test an Inbound Phone Agent (Pre Analysis)

---

Follow these seven steps in the dashboard to run live test calls against your inbound agent.

**Step 1: Create the agent.** On the Agent Testing page, click **Create New Agent**. Enter an **Agent Name**, set **Agent Type** to **Phone Caller Agent**, and set **Phone Call Type** to **Inbound (Bot receives calls)**. Then click **Create New Agent**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/create-inbound-phone-caller-agent-form.webp').default} alt="Create New Agent panel with Phone Caller Agent selected and the Inbound phone call type chosen" width="1918" height="948"  className="doc_img"/>

**Step 2: Define the agent prompt.** On the **Prompt** tab, describe your agent's role and ideal behavior in **Agent-Under-Evaluation Prompt**, then click **Save Prompt**. The prompt defines the behavior your agent is tested against, so include the policies, facts, and steps your agent must follow.

- Optionally, under **Upload Files**, add supporting documents (PDF, MS Word, MS Excel, TXT, MD), audio (MP3, WAV, M4A), or images (PNG, JPG, WEBP), up to 5 MB each.
- Optionally, under **Import from Jira**, enter a Jira issue key or URL and click **Import**. You can import up to five tickets, each shown as its own tab. Click **Connect Jira** first if Jira isn't connected.

<img loading="lazy" src={require('../assets/images/agent-to-agent/inbound-phone-agent-prompt-tab-jira-import.webp').default} alt="Prompt tab for an inbound phone agent with the Agent-Under-Evaluation Prompt editor, file upload and Jira import" width="1918" height="940"  className="doc_img"/>

**Step 3: Generate scenarios.** On the **Scenarios** tab, click **Generate Scenarios**. Set the number of scenarios, up to 20. Select the scenario types to generate, or leave them all unchecked for normal scenarios, and select the languages. Then click **Generate Scenarios**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/inbound-phone-agent-generate-scenarios-dialog.webp').default} alt="Generate Scenarios dialog with number of scenarios, Negative and Edge Case scenario types and language selection for an inbound phone agent" width="1918" height="937"  className="doc_img"/>

**Step 4: Add your agent's phone number.** On the **Phone Numbers** tab, register the number your agent answers on, with its country code. If you test one number most of the time, set it as the default. The platform dials this number in every test call.

**Step 5: Create a suite.** On the **Suites** tab, click **Create New Suite**.

- Enter a **Suite Name**.
- Optionally, select an **Agent Profile**. A profile set on a scenario overrides it.
- Choose the **Region** the test calls come from. The default is US.
- Select the scenarios to run. For each one, choose the phone number to call, one or more voices, a background noise, a persona, and a test profile, and set the **Iterations**.
- Adjust **Turn Wait Time** and **End call if silent for** if needed.
- Check the number of calls and the available parallel calls in the footer, then click **Create New Suite**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/inbound-phone-agent-create-new-suite-voice-noise.webp').default} alt="Create New Suite dialog for an inbound phone agent with agent profile, region, phone number, voices, background noise, turn wait time and silence timeout" width="1914" height="942"  className="doc_img"/>

**Step 6: Run the suite.** Click **Run** next to your suite. Every call in the suite is a real phone call to your agent, so the **Confirm Run** dialog lists each call before anything is dialed. Check the number of calls and each call's voice and background noise, then click the trigger button, such as **Trigger 2 calls**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/inbound-phone-agent-confirm-run-trigger-calls.webp').default} alt="Confirm Run dialog listing two inbound scenarios with voice, background noise and iteration and the Trigger 2 calls button" width="1918" height="940"  className="doc_img"/>

**Step 7: Review the call results.** Open a call from the list to see whether it passed and why.

- Start with failed calls. On the **Analytics** tab, click a metric tile to see the reason behind its result. Times in the reason, such as "At 01:38", jump to that moment in the recording.
- On the **Recording** tab, play the call or read the transcript around that moment to hear how your agent handled it.
- On the **Validation Results** tab, check which of the scenario's validation criteria the call met or missed.
- If a call failed but its metrics look fine, check the **MOS** badge. A call's pass or fail can be based on the metrics, on the mean opinion score of the call audio, or on both.

<img loading="lazy" src={require('../assets/images/agent-to-agent/inbound-phone-agent-call-result-recording-transcript.webp').default} alt="Inbound call result showing pass status, score, MOS, number called, duration, recording waveform, call summary and transcript" width="1918" height="942"  className="doc_img"/>

## Performance Testing for Inbound Phone Agents {#performance-testing}

---

Performance testing holds a target number of concurrent calls to your inbound agent for a set period, using the scenarios in a suite. It shows whether the load was sustained, whether calls connected and ended normally, and how response latency changed as load rose, so you can find the concurrency level at which your agent starts to degrade. It does not score conversation content, so run the suite as a standard test to check what your agent says. Performance testing applies only to agents that answer calls.

To configure a test and read its results, see [Inbound Phone Agent Performance Testing](/support/docs/phone-agent-performance-testing/).

## Outbound Phone Agents

---

An outbound phone agent places calls. To test one, the platform reserves a recipient number from an outbound number pool, your agent calls it, and the platform answers and scores the conversation. Typical use cases are sales dialers, lead qualification, collections, and appointment reminders.

- **Outbound number pool.** You can see the pool's status and available numbers, and manage the reservations each suite holds.
- **Passive mode.** Listen to a live outbound call and score it without taking part in the conversation, for QA monitoring.
- **No performance testing.** Performance testing places calls to your agent, so it applies only to inbound agents.

<!-- TODO: add how to start passive mode once confirmed with product. -->

## Test an Outbound Phone Agent (Pre Analysis)

---

Follow these six steps in the dashboard to run live test calls with your outbound agent.

**Step 1: Create the agent.** On the Agent Testing page, click **Create New Agent**. Enter an **Agent Name**, set **Agent Type** to **Phone Caller Agent**, and set **Phone Call Type** to **Outbound (Bot makes calls)**. Then click **Create New Agent**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/create-outbound-phone-caller-agent-form.webp').default} alt="Create New Agent panel with Phone Caller Agent selected and the Outbound phone call type chosen" width="1918" height="946"  className="doc_img"/>

**Step 2: Define the agent prompt.** On the **Prompt** tab, describe your agent's role and ideal behavior in **Agent-Under-Evaluation Prompt**, then click **Save Prompt**. The prompt defines the behavior your agent is tested against, so include the policies, facts, and steps your agent must follow.

- Optionally, under **Upload Files**, add supporting documents (PDF, MS Word, MS Excel, TXT, MD), audio (MP3, WAV, M4A), or images (PNG, JPG, WEBP), up to 5 MB each.
- Optionally, under **Import from Jira**, enter a Jira issue key or URL and click **Import**. You can import up to five tickets, each shown as its own tab. Click **Connect Jira** first if Jira isn't connected.

<img loading="lazy" src={require('../assets/images/agent-to-agent/outbound-phone-agent-prompt-tab-jira-import.webp').default} alt="Prompt tab for an outbound phone agent with the Agent-Under-Evaluation Prompt editor, file upload and Jira import" width="1918" height="942"  className="doc_img"/>

**Step 3: Generate scenarios.** On the **Scenarios** tab, click **Generate Scenarios**. Set the number of scenarios, up to 7 at a time. Select the scenario types to generate, or leave them all unchecked for normal scenarios, and select the languages. Then click **Generate Scenarios**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/outbound-phone-agent-generate-scenarios-dialog.webp').default} alt="Generate Scenarios dialog with number of scenarios, Negative and Edge Case scenario types and language selection over the outbound scenario list" width="1917" height="936"  className="doc_img"/>

**Step 4: Create a suite.** On the **Suites** tab, click **Create New Suite**.

- Enter a **Suite Name**.
- Optionally, choose a **Profile**.
- Select the scenarios to run, and choose a voice and a background noise for each one.
- Adjust **Turn Wait Time** and **End call if silent for** if needed.
- Click **Create New Suite**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/outbound-phone-agent-create-new-suite-voice-noise.webp').default} alt="Create New Suite dialog for an outbound phone agent with profile, scenario selection, voice, background noise, turn wait time and silence timeout" width="1915" height="942"  className="doc_img"/>

**Step 5: Run the suite.** On the **Suites** tab, click **Run** next to your suite. The platform reserves recipient numbers from the outbound number pool, your agent calls them, and the platform answers as the simulated recipient. Because the platform answers, your agent speaks first.

The suite holds its reserved numbers until you release them, so click **Clear Reservations** in the suite dialog when the run is done.

<img loading="lazy" src={require('../assets/images/agent-to-agent/outbound-phone-agent-suite-clear-reservations.webp').default} alt="Suite dialog for an outbound phone agent with a selected scenario and the Clear Reservations button for releasing reserved pool numbers" width="1918" height="943"  className="doc_img"/>

**Step 6: Review the call results.** Open a call from the list to see whether it passed and why.

- Start with failed calls. The **Call Summary** at the top of the **Analytics** tab explains the verdict. Click a metric tile to see the reason behind its result. Times in the reason, such as "At 01:38", jump to that moment on the **Recording** tab.
- On the **Validation Results** tab, check which of the scenario's validation criteria the call met or missed.
- Read **User sentiment** together with the scenario. The simulated recipient plays a scripted character, so a recipient written to be skeptical may stay negative even when your agent does well.
- Because your agent speaks first, **Opening length** always applies, and **Time to First Word** is timed from the moment the call connects.

<img loading="lazy" src={require('../assets/images/agent-to-agent/outbound-phone-agent-call-result-analytics.webp').default} alt="Outbound call result showing failed status, caller number, duration, call summary and metric tiles on the Analytics tab" width="1831" height="922"  className="doc_img"/>

## Analyze Production Calls (Post Analysis)

---

Post Analysis scores recordings of real production calls with the same metrics as live test calls, without placing new calls. Use it to check how your agent performs with real customers. It works for inbound and outbound agents.

<!-- TODO: replace with step-by-step instructions and screenshots once the Post Analysis flow is confirmed with product. -->

To analyze production calls, select **Post Analysis** from the analysis dropdown. In Post Analysis, you can:

- **Upload recordings** of production calls as MP3 or WAV files. Add their transcripts too if you want to compare them with the speech-to-text output, and pick an accent at upload to check pronunciation.
- **Analyze in batches.** Multiple recordings are analyzed in parallel.
- **Choose metrics.** Select which metric categories or individual metrics to run.
- **Review a call.** Play the recording, follow the speaker-identified transcript with any keypad inputs (0 to 9, star, pound), and download the audio and transcript.
- **Organize recordings.** Bookmark and tag recordings, and search or filter them by name, status, date, or tag.

## Phone Agent Metrics {#metrics}

---

Every call, whether a live test call or a production recording, is scored on 42 metrics grouped under six questions: is it fast, does it sound good, does it hold a good conversation, does it get the facts right, does it get the job done, and is it safe. Only your agent is judged. The simulated caller may be rude or confused on purpose, and that never counts against your agent.

To grade your own business rules, such as asking for a PIN before changing an address, add **custom metrics**: plain-language checks graded on every call of the scenarios you attach them to. In **Metric Config**, choose which metrics run, change their targets and ratings, and decide which ones count toward a call's pass or fail.

For what each metric measures, its default targets, and how to set up custom metrics, see [Phone Caller Agent Metrics](/support/docs/agent-features-and-metrics/#phone-agent-metrics).

## Go-Live Assessment and Scheduled Runs

---

**Go-live assessment.** Get a Green, Yellow, or Red verdict on whether your agent is ready for production, with the failure patterns behind it and prioritized action items. See [Go-Live Assessment](/support/docs/agent-features-and-metrics/#go-live-assessment).

**Scheduled runs.** Open the dropdown next to a suite's **Run** button and select **Schedule Run** to run it every hour, daily, on weekdays, weekly, monthly, or on your own cron expression, in your local time zone. See [Scheduled Runs](/support/docs/agent-features-and-metrics/#scheduled-runs).

## Related TestMu AI Guides

---

- See how to [load test an inbound phone agent](/support/docs/phone-agent-performance-testing/) with concurrent calls.
- See how to [run phone agent tests from the terminal](/support/docs/agent-testing-cli/) with the CLI.
- See how to [test a Twilio IVR](/support/docs/test-twilio-ivr/).
- See how to connect [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), [Vapi](/support/docs/test-vapi-agents/#vapi-integration), or [Salesforce Agentforce](/support/docs/test-agentforce-agents/#agentforce-integration) agents for tool call validation.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
