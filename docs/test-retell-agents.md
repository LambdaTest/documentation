---
id: test-retell-agents
toc_max_heading_level: 2
title: Retell Integration for TestMu AI Agent Testing
hide_title: false
sidebar_label: Retell
description: Connect a Retell agent to TestMu AI Agent Testing to import its prompt and tools and check every tool it calls during real test calls.
keywords:
 - retell integration
 - test retell agents
 - retell tool call testing
 - retell ai agent testing
 - retell phone agent testing
url: https://www.testmuai.com/support/docs/test-retell-agents/
site_name: TestMu AI
slug: test-retell-agents/
canonical: https://www.testmuai.com/support/docs/test-retell-agents/
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
      "@id": "https://www.testmuai.com/support/docs/test-retell-agents/"
    },
    "headline": "Retell Integration for TestMu AI Agent Testing",
    "description": "Connect a Retell agent to TestMu AI Agent Testing to import its prompt and tools and check every tool it calls during real test calls.",
    "url": "https://www.testmuai.com/support/docs/test-retell-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "retell integration",
      "test retell agents",
      "retell tool call testing"
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

The Retell integration connects a Retell agent to a Phone Caller agent in the TestMu AI Agent Testing Platform. TestMu AI imports the agent's prompt and tool catalog, and after every test call it checks which tools the agent actually called. A transcript shows what the agent said. The integration shows what it did behind the call.

Without the integration, TestMu AI still tests any Retell agent that answers a phone number, with transcripts, recordings, grading, and call quality metrics. Connect it when you also want the prompt imported and the tool calls checked.

## Integration at a Glance

---

| Item | Details |
|---|---|
| **Agent type** | Phone Caller, inbound. TestMu AI calls your Retell agent's phone number. |
| **Where you connect** | The agent's **Integrations** tab, on the **Retell** card. |
| **What you need** | A Retell API key and the agent's ID. |
| **What is imported** | The agent's prompt and tool catalog. |
| **What is checked** | Whether the agent called each tool a scenario expects, with the arguments and result of every call. |

## Prerequisites

---

### In Retell

- A published agent with a Retell number, or a number connected over SIP trunking.
- A Retell API key and the agent's ID, obtained through your organization's approved credential process.

### In TestMu AI

- A Phone Caller agent with the call type **Inbound (Bot receives calls)**, with the Retell agent's phone number added on its **Phone Numbers** tab. See [Test an Inbound Phone Agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

:::warning
API keys are secrets. Enter them only in the integration form, never in a scenario, prompt, test data file, or source code.
:::

## Connect Retell

---

1. Open the Phone Caller agent and select **Integrations**.
2. Select **Connect** on the **Retell** card.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agent-integrations-tab.webp').default} alt="Integrations tab of a Phone Caller Inbound agent, with Connect buttons on the ElevenLabs, Retell, VAPI, Agentforce, Cartesia, and Amazon Connect cards" width="1918" height="943" className="doc_img"/>

3. Fill in the fields, then select **Save**.

| Field | Required | What to enter |
|---|---|---|
| **Retell API Key** | Yes | Your Retell API key. |
| **Retell Agent ID** | Yes | The ID of the Retell agent you want to test. |

The connection works when the card shows **Connected** and a **Re-sync** button. TestMu AI stores the credentials as HyperExecute secrets, scoped to this agent. One provider can be connected per agent, so use a separate TestMu AI agent to test another Retell agent or provider.

## Sync the Prompt and Tools

---

On the **Prompt** tab, select **Sync from Retell**. TestMu AI imports the agent's prompt and refreshes its tool catalog: the actions the agent can take, such as booking an appointment or transferring to a human. Generate your scenarios from the imported prompt.

Sync again after you change the agent in Retell, so the prompt and tools match what is deployed.

## Select the Expected Tools for Each Scenario

---

Open a scenario and, in the scenario editor, select each tool from the synced catalog that the scenario expects the agent to call.

| Example scenario | Expected tools |
|---|---|
| Booking | `check_availability`, `book_appointment` |
| Cancellation | `cancel_appointment` |

- Select only the tools the scenario must check. The tool check passes only if the agent called all of them.
- Scenarios with no tools selected still run, without a tool check.
- If the catalog changes in Retell, sync again. The scenario editor warns you when a selected tool no longer exists.

## Run a Test and Read the Tool Calls

---

Start with one short scenario and one expected tool in a small suite, to confirm that the right agent answers and the tool check works. Then run your suites as for any [inbound phone agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

Open a call and select the **Tool Calls** tab.

| Section | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected on the scenario, marked **Called** or **Not Called**. |
| **Selected AUT Tool Calls** | Each call the agent made to a selected tool, with its status, arguments, and result. |
| **AUT Tool Calls** | Every tool the agent called, including tools you didn't select, so unexpected calls are visible. |

- Read the transcript and the tool calls together. If the agent says it booked or transferred while the tool shows **Not Called**, it claimed an action it didn't take.
- A tool that ran but returned an error still shows **Called**, so check the result of each call.
- **Not Called** can be the right outcome, for example when the caller never gave the agent the details it needed.

## Troubleshooting

---

| Problem | What to do |
|---|---|
| The API key is rejected | Create or copy a valid key in Retell, then save it again. |
| The agent isn't found | Check that the agent ID is a Retell agent ID, copied in full. |
| The wrong agent answers | Check the saved agent ID and the number on the **Phone Numbers** tab, then run the short test again. |
| No tools appear in the scenario editor | Confirm the agent has tools in Retell, then select **Re-sync**. |
| The scenario editor warns that selected tools no longer match | The catalog changed in Retell. Sync again and review the scenario's tools. |
| A call shows no expected tools mapped | The scenario has no tools selected, so only the call itself was graded. Select its expected tools. |
| A key may have been exposed | Rotate it in Retell and save the new key. |

## Security and Credentials

---

- Saved credentials are stored as HyperExecute secrets, scoped to the agent where you save them.
- TestMu AI uses them only to read the agent's configuration and check its activity during your test calls. It never modifies your agent.
- Use separate keys for test and production, rotate them on your usual schedule, and disconnect the integration when you no longer need it.

## Testing Tips for Retell Agents

---

- **Conversation Flow agents are graphs.** Coverage means every node, not every intent, so write scenarios that reach each node.
- **Press Digit timing.** Press Digit timing decides whether navigation into an external IVR succeeds, so give keypad (DTMF) steps their own scenarios.
- **Other surfaces.** The integration works on phone calls. To test the same logic without a phone line, connect the agent as a [voice agent](/support/docs/voice-agent/) through Retell's web call API, or as a [chat agent](/support/docs/chat-agent/) through the Chat API. Chat agents converted from a voice agent drift apart from it over time, so test both, and check whether the chat widget's public key or the API's private key is in use.

## Other Integrations

---

- **Phone Caller agents:** [Amazon Connect](/support/docs/test-amazon-connect-bots/), [Cartesia](/support/docs/test-cartesia-agents/), [ElevenLabs](/support/docs/test-elevenlabs-agents/), [Vapi](/support/docs/test-vapi-agents/), and [Salesforce Agentforce](/support/docs/test-agentforce-agents/).
- **Voice agents:** [Deepgram Voice Agent](/support/docs/test-deepgram-voice-agents/).
- See [Phone Agent Testing](/support/docs/phone-agent/) for everything else a phone test covers.
