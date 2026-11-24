---
id: test-vapi-agents
toc_max_heading_level: 2
title: Vapi Integration for TestMu AI Agent Testing
hide_title: false
sidebar_label: Vapi
description: Connect a Vapi assistant to TestMu AI Agent Testing to import its prompt and tools, check every tool it calls on test calls, and pull in production calls.
keywords:
 - vapi integration
 - test vapi agents
 - vapi tool call testing
 - vapi assistant testing
 - vapi phone agent testing
url: https://www.testmuai.com/support/docs/test-vapi-agents/
site_name: TestMu AI
slug: test-vapi-agents/
canonical: https://www.testmuai.com/support/docs/test-vapi-agents/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



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
    "headline": "Vapi Integration for TestMu AI Agent Testing",
    "description": "Connect a Vapi assistant to TestMu AI Agent Testing to import its prompt and tools, check every tool it calls on test calls, and pull in production calls.",
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
      "vapi integration",
      "test vapi agents",
      "vapi tool call testing"
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
    "dateModified": "2026-11-20T12:00:00+05:30"
  }) }}
/>

The Vapi integration connects a Vapi assistant to a Phone Caller agent in the TestMu AI Agent Testing Platform. TestMu AI imports the assistant's prompt and tool catalog, and after every test call it checks which tools the assistant actually called. A transcript shows what the assistant said. The integration shows what it did behind the call.

Without the integration, TestMu AI still tests any Vapi assistant that answers a phone number, with transcripts, recordings, grading, and call quality metrics. Connect it when you also want the prompt imported and the tool calls checked.

## Integration at a Glance

---

| Item | Details |
|---|---|
| **Agent type** | Phone Caller, inbound. TestMu AI calls your assistant's phone number. |
| **Where you connect** | The agent's **Integrations** tab, on the **VAPI** card. |
| **What you need** | A Vapi API key and the assistant's ID. |
| **What is imported** | The assistant's prompt and tool catalog. |
| **What is checked** | Whether the assistant called each tool a scenario expects, with the arguments and result of every call. |
| **Vapi extras** | Keep the prompt in sync with the live assistant, and bring production calls into the same analysis view as your test calls. |

## Prerequisites

---

### In Vapi

- A published assistant with a phone number it answers on.
- A Vapi API key and the assistant's ID, obtained through your organization's approved credential process.

### In TestMu AI

- A Phone Caller agent with the call type **Inbound (Bot receives calls)**, with the assistant's phone number added on its **Phone Numbers** tab. See [Test an Inbound Phone Agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

:::warning
API keys are secrets. Enter them only in the integration form, never in a scenario, prompt, test data file, or source code.
:::

## Connect Vapi

---

1. Open the Phone Caller agent and select **Integrations**.
2. Select **Connect** on the **VAPI** card.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agent-integrations-tab.webp').default} alt="Integrations tab of a Phone Caller Inbound agent, with Connect buttons on the ElevenLabs, Retell, VAPI, Agentforce, Cartesia, and Amazon Connect cards" width="1918" height="943" className="doc_img"/>

3. Fill in the fields, then select **Save**.

| Field | Required | What to enter |
|---|---|---|
| **Vapi Auth API Key** | Yes | Your Vapi API key. |
| **Vapi Agent ID** | Yes | The ID of the assistant you want to test. |
| **Vapi Public Key** | No | Your Vapi public key, needed only for WebRTC connections. |
| **Auto-sync Prompts** | No | Keeps the imported prompt in sync with the live assistant between manual syncs. |
| **Auto-fetch Production Calls** | No | Brings the assistant's production calls into the same analysis view as your test calls. |

The connection works when the card shows **Connected** and a **Re-sync** button. TestMu AI stores the credentials as HyperExecute secrets, scoped to this agent. One provider can be connected per agent, so use a separate TestMu AI agent to test another assistant or provider.

## Sync the Prompt and Tools

---

On the **Prompt** tab, select **Sync from Vapi**. TestMu AI imports the assistant's prompt and refreshes its tool catalog: the actions the assistant can take, such as booking an appointment or transferring to a human. Generate your scenarios from the imported prompt.

Sync again after you change the assistant in Vapi, so the prompt and tools match what is deployed. With **Auto-sync Prompts** on, the prompt also stays in sync between manual syncs.

## Select the Expected Tools for Each Scenario

---

Open a scenario and, in the scenario editor, select each tool from the synced catalog that the scenario expects the assistant to call.

| Example scenario | Expected tools |
|---|---|
| Booking | `check_availability`, `book_appointment` |
| Cancellation | `cancel_appointment` |

- Select only the tools the scenario must check. The tool check passes only if the assistant called all of them.
- Scenarios with no tools selected still run, without a tool check.
- If the catalog changes in Vapi, sync again. The scenario editor warns you when a selected tool no longer exists.

## Run a Test and Read the Tool Calls

---

Start with one short scenario and one expected tool in a small suite, to confirm that the right assistant answers and the tool check works. Then run your suites as for any [inbound phone agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

Open a call and select the **Tool Calls** tab.

| Section | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected on the scenario, marked **Called** or **Not Called**. |
| **Selected AUT Tool Calls** | Each call the assistant made to a selected tool, with its status, arguments, and result. |
| **AUT Tool Calls** | Every tool the assistant called, including tools you didn't select, so unexpected calls are visible. |

- Read the transcript and the tool calls together. If the assistant says it booked or transferred while the tool shows **Not Called**, it claimed an action it didn't take.
- A tool that ran but returned an error still shows **Called**, so check the result of each call.
- **Not Called** can be the right outcome, for example when the caller never gave the assistant the details it needed.

## Troubleshooting

---

| Problem | What to do |
|---|---|
| The API key is rejected | Create or copy a valid key in Vapi, then save it again. |
| The assistant isn't found | Check that the agent ID is a Vapi assistant ID, copied in full. |
| The wrong assistant answers | Check the saved agent ID and the number on the **Phone Numbers** tab, then run the short test again. |
| No tools appear in the scenario editor | Confirm the assistant has tools in Vapi, then select **Re-sync**. |
| The scenario editor warns that selected tools no longer match | The catalog changed in Vapi. Sync again and review the scenario's tools. |
| A call shows no expected tools mapped | The scenario has no tools selected, so only the call itself was graded. Select its expected tools. |
| A key may have been exposed | Rotate it in Vapi and save the new key. |

## Security and Credentials

---

- Saved credentials are stored as HyperExecute secrets, scoped to the agent where you save them.
- TestMu AI uses them only to read the assistant's configuration, check its activity during your test calls, and, with **Auto-fetch Production Calls** on, fetch its production calls. It never modifies your assistant.
- Use separate keys for test and production, rotate them on your usual schedule, and disconnect the integration when you no longer need it.

## Testing Tips for Vapi Assistants

---

- **Default tools.** Give each default tool its own scenario: `transferCall`, `endCall`, `dtmf`, `sms`, and `apiRequest`.
- **Squad handoffs.** Squads hand off mid-call, so test the transfer boundary between assistants.
- **Other surfaces.** The integration works on phone calls. To test the same assistant without a phone line, connect it as a [voice agent](/support/docs/voice-agent/) over WebSocket, where audio pauses can trigger silence timeouts, or as a [chat agent](/support/docs/chat-agent/) through Vapi's Chat API, where session IDs carry context between turns.

## Other Integrations

---

- **Phone Caller agents:** [Amazon Connect](/support/docs/test-amazon-connect-bots/), [Cartesia](/support/docs/test-cartesia-agents/), [ElevenLabs](/support/docs/test-elevenlabs-agents/), [Retell](/support/docs/test-retell-agents/), and [Salesforce Agentforce](/support/docs/test-agentforce-agents/).
- **Voice agents:** [Deepgram Voice Agent](/support/docs/test-deepgram-voice-agents/).
- See [Phone Agent Testing](/support/docs/phone-agent/) for everything else a phone test covers.