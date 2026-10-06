---
id: test-vapi-agents
toc_max_heading_level: 3
title: How to Test Vapi Agents With TestMu AI
hide_title: false
sidebar_label: Test Vapi Agents
description: Automated phone, voice, and chat testing for Vapi AI agents with TestMu AI. Drive multi-turn conversations across personas and edge cases, then score every run.
keywords:
 - test vapi agents
 - vapi ai agent testing
 - phone agent testing
 - voice agent testing
 - chat agent testing
 - vapi agent testing integration
url: https://www.testmuai.com/support/docs/test-vapi-agents/
site_name: TestMu AI
slug: test-vapi-agents/
canonical: https://www.testmuai.com/support/docs/test-vapi-agents/
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
          "name": "Test Vapi Agents",
          "item": `${BRAND_URL}/support/docs/test-vapi-agents`
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
      "@id": "https://www.testmuai.com/support/docs/test-vapi-agents/"
    },
    "headline": "How to Test Vapi Agents With TestMu AI",
    "description": "Automated phone, voice, and chat testing for Vapi AI agents with TestMu AI. Drive multi-turn conversations across personas and edge cases, then score every run.",
    "url": "https://www.testmuai.com/support/docs/test-vapi-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test vapi agents",
      "vapi ai agent testing",
      "phone agent testing"
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
    "dateModified": "2026-10-05T16:23:33+05:30"
  }) }}
/>

Vapi is a voice AI platform where a single assistant configuration carries the model, voice, transcriber, tools, and call behaviour, then ships across phone, web, and chat. With the TestMu AI Agent Testing Platform you can put your Vapi assistant through multi-turn conversations across personas and edge cases on every surface it ships to, and score each run.

To connect one, you need a Vapi account with a published assistant, a provisioned phone number for phone caller agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## How do you test Vapi tools and Squad handoffs?

---

A single Vapi assistant carries its tools and transport across every surface, so a few behaviours are worth building dedicated scenarios around:

- **Default tools.** Default tools each need their own scenario: `transferCall`, `endCall`, `dtmf`, `sms`, `apiRequest`.
- **Squad handoffs.** Squads hand off mid-call, so the transfer boundary needs testing.
- **WebSocket transport.** WebSocket transport rejects phone parameters, and audio pauses trigger silence timeouts.
- **Chat session state.** Chat context carries through session IDs, so multi-turn state needs its own tests.

## How is a Vapi assistant reached on phone, voice, and chat?

---

A single Vapi assistant ships across surfaces. Generate scenarios from the system prompt or supporting docs, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over the phone network: DTMF entry, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the assistant over a direct audio stream rather than a phone number, with the endpoint profile created using REST API or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through Vapi's Chat API, catching reasoning, tool call, and grounding failures, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## How do you check which tools a Vapi assistant actually called? {#vapi-integration}

---

A call transcript shows what the assistant said, not which tools it ran. Connect your Vapi assistant in the **Integrations** tab of a Phone Caller agent with your **Vapi Auth API Key** and **Vapi Agent ID** (plus the optional **Vapi Public Key** for WebRTC connections), and TestMu AI imports the prompt and tool catalog, then marks each tool a scenario expects as **Called** or **Not Called** after every test call. For Vapi, the integration can also keep the imported prompt in sync with the live assistant (**Auto-sync Prompts**) and pull real production calls into the same analysis view (**Auto-fetch Production Calls**). The sections below cover when to use the integration, the setup, the results, and troubleshooting.

### When to Use the Vapi Integration

The integration is optional. Choose based on what you need to check.

- Without the integration, TestMu AI tests any agent that answers a phone number, on any platform, with no code changes, SDK, or test build. Each result includes the transcript, the call recording, pass or fail grading against your criteria, and call and audio quality metrics.
- Connect the integration when you want to import your Vapi assistant's prompt and tool catalog, or check which tools it invoked during each test call.
- Turn on the Vapi sync options when you also want the imported prompt kept in sync with the live assistant between manual syncs, or the assistant's production calls in the same analysis view as your test calls. See [Turn On Vapi Sync Options](#turn-on-vapi-sync-options).

For a side-by-side comparison, see [How the Vapi Integration Works](#how-the-vapi-integration-works).

TestMu AI offers this integration for ElevenLabs, Retell, and Vapi. For the other two, see the [ElevenLabs integration](/support/docs/test-elevenlabs-agents/#elevenlabs-integration) and the [Retell integration](/support/docs/test-retell-agents/#retell-integration).

### Vapi Integration Prerequisites

- An agent in TestMu AI with the **Phone Caller** agent type.
- An assistant hosted on **Vapi**.
- The Vapi API key and the Vapi agent identifier for the assistant that you want to test.

This section covers the TestMu AI workflow only. Obtain the API key and agent identifier from Vapi through your organization's approved credential process.

:::warning
API keys are secrets. Enter them only in the TestMu AI integration form. Do not put them in a scenario, prompt, test data file, or source code.
:::

### Connect Vapi

Connect your Vapi assistant from the **Integrations** tab of the Phone Caller agent that will test it.

1. In TestMu AI, open the **Phone Caller** agent that will test your Vapi assistant.
2. Select **Integrations** from the agent navigation.
3. Select **Connect** on the Vapi provider card.
4. Enter the values for Vapi. See [Vapi Integration Fields](#vapi-integration-fields).
5. Select **Save**.

TestMu AI encrypts the saved credentials and scopes them to this Phone Caller agent.

#### Vapi Integration Fields

| Field | Required | Description |
|---|---|---|
| **Vapi Auth API Key** | Yes | Your Vapi API key. |
| **Vapi Agent ID** | Yes | The identifier of the Vapi assistant that you want to test. |
| **Vapi Public Key** | No | Your Vapi public key, for WebRTC connections. |
| **Auto-fetch Production Calls** | No | A toggle. When it is on, TestMu AI continuously fetches the assistant's production calls into the same analysis view as your test calls. |
| **Auto-sync Prompts** | No | A toggle. When it is on, TestMu AI keeps the imported prompt continuously in sync with the live assistant. |

:::note
One provider can be active per agent. To test a different provider agent or use different credentials, use a separate TestMu AI agent.
:::

#### Confirm the Connection

After you select **Save**, confirm that Vapi is connected.

1. Check that the Vapi provider card shows **Connected** or provides **Re-sync**.
2. If necessary, reopen the provider settings and confirm that the expected agent identifier is displayed.
3. Run a [smoke test](#run-a-smoke-test) in a small suite before you run a full regression suite.

### Sync the Prompt and Tools

Syncing imports the prompt and tool catalog of the connected Vapi assistant. The tool catalog lists the actions the assistant can take, such as booking an appointment, looking up an order, or transferring to a human.

1. Open **Prompt**.
2. Select **Sync from Vapi**.

TestMu AI imports the prompt. If the provider exposes tools, TestMu AI also refreshes the available tools. Author your scenarios against the imported prompt and tools.

:::tip
Sync again after you change the assistant on Vapi, so that the prompt and tools in TestMu AI match the deployed assistant. **Auto-sync Prompts** also keeps the prompt in sync between manual syncs. See [Turn On Vapi Sync Options](#turn-on-vapi-sync-options).
:::

### Set Expected Tool Calls for Each Scenario

Each scenario has its own list of expected tools. On every run, TestMu AI checks whether the assistant invoked each selected tool.

1. Open **Scenarios**.
2. Create or edit a scenario.
3. In the scenario editor, which lists every tool from the synced catalog, select each tool that the assistant is expected to invoke during the conversation.

The selected tools become the validation contract for the scenario, so select only the tools that the scenario must validate. For example:

| Example scenario | Expected tools |
|---|---|
| Booking | `check_availability`, `book_appointment` |
| Cancellation | `cancel_appointment` |

:::note
If the tool catalog changes on Vapi, sync again. The scenario editor warns you when a scenario's selected tools no longer match the current catalog.
:::

### Run a Smoke Test

Run one short scenario in a small suite to confirm that the integration works end to end before you run a full regression suite.

1. Open **Scenarios**.
2. Select or create a short scenario.
3. In the scenario, make the expected response of your Vapi assistant clear, starting with its first message or greeting.
4. Optionally, select one expected tool call to confirm tool call validation end to end.
5. Run the scenario in a small suite.
6. Review the result and the transcript.
7. Confirm that the intended Vapi assistant answered and that any selected tool shows the expected verdict.

After the smoke test passes, add coverage for the tools, transfers, long conversations, and failure paths that apply to your Vapi assistant.

### View Tool Call Validation Results

After a run, the suite results show tool call validation alongside the transcript and the call recording. Each test result also includes pass or fail against your validation criteria and call and audio quality metrics.

| View | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected for the scenario, with its verdict: **Called** or **Not Called**. |
| **AUT Tool Calls** | Every tool the assistant invoked during the call, including tools you did not select, so unexpected tool calls are visible. |
| **Selected AUT Tool Calls** | **AUT Tool Calls** narrowed to the tools selected for the scenario, with a rollup of how many of the expected tools were called. |

#### Tool Call Verdicts

| Verdict | Meaning |
|---|---|
| **Called** | The assistant invoked the tool during the call. |
| **Not Called** | The assistant did not invoke the tool during the call. |

A scenario with no selected tools shows that no expected tools were mapped. Only black-box checks applied to that scenario.

:::tip
Read the transcript and **Expected Tool Validation** together. For example, the transcript can show the assistant confirming a cancellation, promising a callback, or saying it transferred the caller while the matching tool shows **Not Called**.
:::

### Turn On Vapi Sync Options

The Vapi integration has two optional toggles for continuous synchronization. They are part of the Vapi provider form in **Integrations**, next to the Vapi credentials. Turn on either or both when you [connect Vapi](#connect-vapi).

| Option | What it does |
|---|---|
| **Auto-sync Prompts** | Keeps the imported prompt continuously in sync with the live Vapi assistant, including between manual syncs. |
| **Auto-fetch Production Calls** | Continuously fetches the assistant's production calls and shows them in the same analysis view as your test calls. |

### How the Vapi Integration Works

In a phone agent test, TestMu AI places real phone calls to your Vapi assistant, holds a conversation, and grades the outcome. Without the integration, this is black-box testing: TestMu AI records what the assistant says on the call, but it cannot see the actions the assistant takes behind the phone line. A transcript records what the assistant said, such as a booking confirmation, but not whether the assistant called its booking tool.

With the integration, testing is white-box: TestMu AI also reads the assistant's configuration and tool catalog from Vapi and checks which tools the assistant invoked during each test call. It works as follows.

1. When you sync, TestMu AI imports the assistant's prompt and, if the provider exposes tools, its tool catalog. With **Auto-sync Prompts** turned on, the prompt also stays in sync between manual syncs.
2. TestMu AI places a real phone call to the assistant and holds a conversation.
3. After every test call, TestMu AI checks which tools the assistant invoked and marks each tool selected for the scenario as **Called** or **Not Called**.
4. The suite results show the tool call validation alongside the transcript, the call recording, pass or fail against your validation criteria, and call and audio quality metrics.

The following table compares testing with and without the integration.

| Capability | Without the integration (black-box) | With the integration (white-box) |
|---|---|---|
| Real phone call testing, transcripts, recordings | Yes | Yes |
| Pass or fail grading against your criteria | Yes | Yes |
| Call and audio quality metrics | Yes | Yes |
| Prompt imported from your live assistant | No | Yes |
| Tool catalog imported for scenario authoring | No | Yes |
| Tool call validation (tools your assistant invoked) | No | Yes |
| **Auto-sync Prompts** | No | Yes |
| **Auto-fetch Production Calls** | No | Yes |

### Troubleshoot the Vapi Integration

| Problem | What to do |
|---|---|
| TestMu AI rejects the API key | Create or retrieve a valid API key from Vapi, then replace the saved value in TestMu AI. |
| TestMu AI cannot find the assistant | Confirm that the agent identifier belongs to Vapi and that it was copied in full. |
| The wrong assistant answers | Reopen **Integrations**, check the saved agent identifier, and rerun the smoke test. |
| Vapi tools are unavailable | Sync the Vapi configuration again, then confirm that the tools are configured for the connected Vapi assistant. |
| The scenario editor warns that selected tools no longer match the catalog | The tool catalog changed on Vapi. Sync again, then review the tools selected for the scenario. |
| **Expected Tool Validation** shows that no expected tools were mapped | The scenario has no selected tools, so only black-box checks applied. Select the expected tools in the scenario editor. |
| A credential may have been exposed | Revoke or rotate the key with Vapi, then save the replacement key in TestMu AI. |

### Security and Credential Handling

- TestMu AI encrypts saved Vapi credentials and scopes them to the Phone Caller agent where you save them.
- TestMu AI uses your Vapi credentials only to read your assistant's configuration and check its activity during your own test calls, and, with **Auto-fetch Production Calls** turned on, to fetch its production calls.
- TestMu AI never uses your Vapi credentials to modify your assistant.

Follow these practices for the integration:

- Use dedicated API keys for test and production environments where possible.
- Rotate keys according to your organization's security policy and after a suspected exposure.
- Update the saved agent identifier before you test a replacement Vapi assistant.
- Disconnect the integration or rotate its key when you no longer need it.

## Where do Vapi test runs go wrong?

---

Common failure modes to watch for:

- No transcript returned
- Call ends on the wrong turn
- Audio format mismatch
- Chat schema mismatch
