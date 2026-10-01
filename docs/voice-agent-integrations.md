---
id: voice-agent-integrations
toc_max_heading_level: 2
title: "Voice Agent Integrations With TestMu AI: ElevenLabs, Retell, and Vapi"
hide_title: false
sidebar_label: Voice Agent Integrations
description: Connect an ElevenLabs, Retell, or Vapi voice agent to TestMu AI, sync its prompt and tool catalog, and check which tools it calls during each test call.
keywords:
 - voice agent integrations
 - retell agent testing integration
 - vapi agent testing integration
 - elevenlabs agent testing integration
 - voice agent tool call validation
url: https://www.testmuai.com/support/docs/voice-agent-integrations/
site_name: TestMu AI
slug: voice-agent-integrations/
canonical: https://www.testmuai.com/support/docs/voice-agent-integrations/
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
          "name": "Voice Agent Integrations",
          "item": `${BRAND_URL}/support/docs/voice-agent-integrations`
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
      "@id": "https://www.testmuai.com/support/docs/voice-agent-integrations/"
    },
    "headline": "Voice Agent Integrations With TestMu AI: ElevenLabs, Retell, and Vapi",
    "description": "Connect an ElevenLabs, Retell, or Vapi voice agent to TestMu AI, sync its prompt and tool catalog, and check which tools it calls during each test call.",
    "url": "https://www.testmuai.com/support/docs/voice-agent-integrations/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "voice agent integrations",
      "retell agent testing integration",
      "vapi agent testing integration"
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

A voice agent integration connects the TestMu AI Agent Testing Platform to a voice agent hosted on ElevenLabs, Retell, or Vapi. It imports the agent's prompt and tool catalog, marks each tool a scenario expects as **Called** or **Not Called** after every test call, and, for Vapi agents, can sync the prompt and fetch production calls automatically. You set it up in the **Integrations** tab of an agent with the **Phone Caller** agent type.

## When to Use an Integration

---

An integration is optional. Choose based on where your agent runs and what you need to check.

- Without an integration, TestMu AI tests any agent that answers a phone number, on any platform, with no code changes, SDK, or test build. Each result includes the transcript, the call recording, pass or fail grading against your criteria, and call and audio quality metrics.
- Connect an integration when your agent runs on ElevenLabs, Retell, or Vapi and you want to import its prompt and tool catalog, or check which tools it invoked during each test call.
- For a Vapi agent, an integration can also keep the imported prompt in sync with the live agent and fetch the agent's production calls into the same analysis view as your test calls.

For a side-by-side comparison, see [How Voice Agent Integrations Work](/support/docs/voice-agent-integrations/#how-voice-agent-integrations-work).

## Prerequisites

---

- An agent in TestMu AI with the **Phone Caller** agent type.
- A voice agent hosted on **ElevenLabs**, **Retell**, or **Vapi**.
- The provider API key and the provider agent identifier for the voice agent that you want to test.

This page covers the TestMu AI workflow only. Obtain the API key and agent identifier from your provider through your organization's approved credential process.

:::warning
API keys are secrets. Enter them only in the TestMu AI integration form. Do not put them in a scenario, prompt, test data file, or source code.
:::

## Connect a Provider

---

Connect the voice agent from the **Integrations** tab of the Phone Caller agent that will test it.

1. In TestMu AI, open the **Phone Caller** agent that will test the external voice agent.
2. Select **Integrations** from the agent navigation.
3. Select **Connect** on the provider card that matches your voice agent.
4. Enter the values for the provider. See [Provider Fields](/support/docs/voice-agent-integrations/#provider-fields).
5. Select **Save**.

TestMu AI encrypts the saved credentials and scopes them to this Phone Caller agent.

### Provider Fields

| Provider | Field | Required | Description |
|---|---|---|---|
| ElevenLabs | **ElevenLabs API Key** | Yes | Your ElevenLabs API key. |
| ElevenLabs | **ElevenLabs Agent ID** | Yes | The identifier of the ElevenLabs agent that you want to test. |
| Retell | **Retell API Key** | Yes | Your Retell API key. |
| Retell | **Retell Agent ID** | Yes | The identifier of the Retell agent that you want to test. |
| Vapi | **Vapi Auth API Key** | Yes | Your Vapi API key. |
| Vapi | **Vapi Agent ID** | Yes | The identifier of the Vapi agent that you want to test. |
| Vapi | **Vapi Public Key** | No | Your Vapi public key, for WebRTC connections. |
| Vapi | **Auto-fetch Production Calls** | No | A toggle. When it is on, TestMu AI continuously fetches the agent's production calls into the same analysis view as your test calls. |
| Vapi | **Auto-sync Prompts** | No | A toggle. When it is on, TestMu AI keeps the imported prompt continuously in sync with the live agent. |

:::note
One provider can be active per agent. To test a different provider agent or use different credentials, use a separate TestMu AI agent.
:::

### Confirm the Connection

After you select **Save**, confirm that the provider is connected.

1. Check that the provider card shows **Connected** or provides **Re-sync**.
2. If necessary, reopen the provider settings and confirm that the expected agent identifier is displayed.
3. Run a [smoke test](/support/docs/voice-agent-integrations/#run-a-smoke-test) in a small suite before you run a full regression suite.

## Sync the Prompt and Tools

---

Syncing imports the prompt and tool catalog of the connected provider agent. The tool catalog lists the actions the agent can take, such as booking an appointment, looking up an order, or transferring to a human.

1. Open **Prompt**.
2. Select the sync action for your provider: **Sync from ElevenLabs**, **Sync from Retell**, or **Sync from Vapi**.

TestMu AI imports the prompt. If the provider exposes tools, TestMu AI also refreshes the available tools. Author your scenarios against the imported prompt and tools.

:::tip
Sync again after you change the agent on the provider, so that the prompt and tools in TestMu AI match the deployed agent. For Vapi agents, **Auto-sync Prompts** also keeps the prompt in sync between manual syncs. See [Turn On Vapi Sync Options](/support/docs/voice-agent-integrations/#turn-on-vapi-sync-options).
:::

## Set Expected Tool Calls for Each Scenario

---

Each scenario has its own list of expected tools. On every run, TestMu AI checks whether the agent invoked each selected tool.

1. Open **Scenarios**.
2. Create or edit a scenario.
3. In the scenario editor, which lists every tool from the synced catalog, select each tool that the agent is expected to invoke during the conversation.

The selected tools become the validation contract for the scenario, so select only the tools that the scenario must validate. For example:

| Example scenario | Expected tools |
|---|---|
| Booking | `check_availability`, `book_appointment` |
| Cancellation | `cancel_appointment` |

:::note
If the tool catalog changes on the provider, sync again. The scenario editor warns you when a scenario's selected tools no longer match the current catalog.
:::

## Run a Smoke Test

---

Run one short scenario in a small suite to confirm that the integration works end to end before you run a full regression suite.

1. Open **Scenarios**.
2. Select or create a short scenario.
3. In the scenario, make the expected response of the provider's voice agent clear, starting with its first message or greeting.
4. Optionally, select one expected tool call to confirm tool call validation end to end.
5. Run the scenario in a small suite.
6. Review the result and the transcript.
7. Confirm that the intended external voice agent answered and that any selected tool shows the expected verdict.

After the smoke test passes, add coverage for the tools, transfers, long conversations, and failure paths that apply to your voice agent.

## View Tool Call Validation Results

---

After a run, the suite results show tool call validation alongside the transcript and the call recording. Each test result also includes pass or fail against your validation criteria and call and audio quality metrics.

| View | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected for the scenario, with its verdict: **Called** or **Not Called**. |
| **AUT Tool Calls** | Every tool the agent invoked during the call, including tools you did not select, so unexpected tool calls are visible. |
| **Selected AUT Tool Calls** | **AUT Tool Calls** narrowed to the tools selected for the scenario, with a rollup of how many of the expected tools were called. |

### Tool Call Verdicts

| Verdict | Meaning |
|---|---|
| **Called** | The agent invoked the tool during the call. |
| **Not Called** | The agent did not invoke the tool during the call. |

A scenario with no selected tools shows that no expected tools were mapped. Only black-box checks applied to that scenario.

:::tip
Read the transcript and **Expected Tool Validation** together. For example, the transcript can show the agent confirming a cancellation, promising a callback, or saying it transferred the caller while the matching tool shows **Not Called**.
:::

## Turn On Vapi Sync Options

---

Vapi integrations have two optional toggles for continuous synchronization. They are part of the Vapi provider form in **Integrations**, next to the Vapi credentials. Turn on either or both when you [connect the provider](/support/docs/voice-agent-integrations/#connect-a-provider).

| Option | What it does |
|---|---|
| **Auto-sync Prompts** | Keeps the imported prompt continuously in sync with the live Vapi agent, including between manual syncs. |
| **Auto-fetch Production Calls** | Continuously fetches the agent's production calls and shows them in the same analysis view as your test calls. |

## How Voice Agent Integrations Work

---

TestMu AI tests a voice agent by placing real phone calls to it, holding a conversation, and grading the outcome. Without an integration, this is black-box testing: TestMu AI records what the agent says on the call, but it cannot see the actions the agent takes behind the phone line. A transcript records what the agent said, such as a booking confirmation, but not whether the agent called its booking tool.

With an integration, testing is white-box: TestMu AI also reads the agent's configuration and tool catalog from the provider and checks which tools the agent invoked during each test call. It works as follows.

1. When you sync, TestMu AI imports the agent's prompt and, if the provider exposes tools, its tool catalog. For a Vapi agent with **Auto-sync Prompts** turned on, the prompt also stays in sync between manual syncs.
2. TestMu AI places a real phone call to the agent and holds a conversation.
3. After every test call, TestMu AI checks which tools the agent invoked and marks each tool selected for the scenario as **Called** or **Not Called**.
4. The suite results show the tool call validation alongside the transcript, the call recording, pass or fail against your validation criteria, and call and audio quality metrics.

The following table compares testing with and without an integration.

| Capability | Without an integration (black-box) | With an integration (white-box) |
|---|---|---|
| Real phone call testing, transcripts, recordings | Yes | Yes |
| Pass or fail grading against your criteria | Yes | Yes |
| Call and audio quality metrics | Yes | Yes |
| Prompt imported from your live agent | No | Yes |
| Tool catalog imported for scenario authoring | No | Yes |
| Tool call validation (tools your agent invoked) | No | Yes |
| **Auto-sync Prompts** (Vapi) | No | Yes |
| **Auto-fetch Production Calls** (Vapi) | No | Yes |

## Troubleshooting

---

| Problem | What to do |
|---|---|
| TestMu AI rejects the API key | Create or retrieve a valid API key from the selected provider, then replace the saved value in TestMu AI. |
| TestMu AI cannot find the agent | Confirm that the agent identifier belongs to the selected provider and that it was copied in full. |
| The wrong voice agent answers | Reopen **Integrations**, check the saved agent identifier, and rerun the smoke test. |
| Provider tools are unavailable | Sync the provider configuration again, then confirm that the tools are configured for the selected provider agent. |
| The scenario editor warns that selected tools no longer match the catalog | The tool catalog changed on the provider. Sync again, then review the tools selected for the scenario. |
| **Expected Tool Validation** shows that no expected tools were mapped | The scenario has no selected tools, so only black-box checks applied. Select the expected tools in the scenario editor. |
| A credential may have been exposed | Revoke or rotate the key with the provider, then save the replacement key in TestMu AI. |

## Security and Credential Handling

---

- TestMu AI encrypts saved provider credentials and scopes them to the Phone Caller agent where you save them.
- TestMu AI uses your provider credentials only to read your agent's configuration and check its activity during your own test calls, and, for Vapi agents with **Auto-fetch Production Calls** turned on, to fetch its production calls.
- TestMu AI never uses your provider credentials to modify your agent.

Follow these practices for every integration:

- Use dedicated API keys for test and production environments where possible.
- Rotate keys according to your organization's security policy and after a suspected exposure.
- Update the saved agent identifier before you test a replacement provider agent.
- Disconnect the integration or rotate its key when you no longer need it.

## Related TestMu AI Guides

---

- See how to [test Retell agents](/support/docs/test-retell-agents/), including Conversation Flow agents.
- See how to [test Vapi agents](/support/docs/test-vapi-agents/), including tools and Squad handoffs.
- See how to [test ElevenLabs agents](/support/docs/test-elevenlabs-agents/), including voice and SIP codec settings.
- See the [phone agent testing overview](/support/docs/phone-agent/) for live test calls and recording analysis.
- See how to [grade your own business rules with custom metrics](/support/docs/phone-agent-custom-metrics/).
