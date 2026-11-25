---
id: test-amazon-connect-bots
toc_max_heading_level: 2
title: Amazon Connect Integration for TestMu AI Agent Testing
hide_title: false
sidebar_label: Amazon Connect
description: Connect an Amazon Connect AI agent (Amazon Q in Connect) to TestMu AI to import its prompt and tools and check the tool calls it makes on real test calls.
keywords:
 - amazon connect integration
 - test amazon connect agents
 - amazon q in connect testing
 - amazon connect ai agent testing
 - test amazon connect bots
url: https://www.testmuai.com/support/docs/test-amazon-connect-bots/
site_name: TestMu AI
slug: test-amazon-connect-bots/
canonical: https://www.testmuai.com/support/docs/test-amazon-connect-bots/
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
      "@id": "https://www.testmuai.com/support/docs/test-amazon-connect-bots/"
    },
    "headline": "Amazon Connect Integration for TestMu AI Agent Testing",
    "description": "Connect an Amazon Connect AI agent (Amazon Q in Connect) to TestMu AI to import its prompt and tools and check the tool calls it makes on real test calls.",
    "url": "https://www.testmuai.com/support/docs/test-amazon-connect-bots/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "amazon connect integration",
      "test amazon connect agents",
      "amazon q in connect testing"
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

The Amazon Connect integration connects an agentic self-service AI agent built on Amazon Connect (Amazon Q in Connect) to a Phone Caller agent in the TestMu AI Agent Testing Platform. When you save the connection, TestMu AI imports the agent's prompt and tools. After each test call ends, it reads the tool calls the agent made and checks them against the scenario.

Without the integration, TestMu AI still tests any Amazon Connect phone number, with transcripts, recordings, grading, and call quality metrics. Connect it when you also want the prompt imported and the tool calls checked.

## Integration at a Glance

---

| Item | Details |
|---|---|
| **Agent type** | Phone Caller, inbound. TestMu AI calls the Amazon Connect number that routes to your AI agent. |
| **Supported AI agents** | Agentic self-service AI agents (the **ORCHESTRATION** type) in Amazon Q in Connect. |
| **Where you connect** | The agent's **Integrations** tab, on the **Amazon Connect** card. |
| **What you need** | The AWS region, the Connect instance ID, the AI agent ID, and read-only AWS access keys. |
| **What is imported** | The AI agent's prompt and tools, when you save. |
| **What is checked** | Whether the agent called each tool a scenario expects, with the arguments and result of every call. |
| **When tool calls appear** | Up to a minute after the call ends. |

## Prerequisites

---

### In AWS

- An Amazon Connect instance with an agentic self-service AI agent in Amazon Q in Connect, and a phone number whose contact flow routes callers to it. The AI agent must be the **ORCHESTRATION** type. Other AI agent types aren't supported.
- An access key ID and secret access key for an IAM user or role with read-only access: the describe, list, and search permissions for Amazon Connect, Amazon Q in Connect, and Contact Lens. Use a dedicated identity for testing.

### In TestMu AI

- A Phone Caller agent with the call type **Inbound (Bot receives calls)**, with the Amazon Connect phone number added on its **Phone Numbers** tab. See [Test an Inbound Phone Agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

:::warning
AWS access keys are secrets. Enter them only in the integration form, never in a scenario, prompt, test data file, or source code.
:::

## Connect Amazon Connect

---

1. Open the Phone Caller agent and select **Integrations**.
2. Select **Connect** on the **Amazon Connect** card.

<img loading="lazy" src={require('../assets/images/agent-to-agent/amazon-connect-integration-settings.webp').default} alt="Amazon Connect Integration Settings panel open over the Integrations tab, with the AWS Region, Connect Instance ID, AI Agent ID, and Access Key ID fields" width="1915" height="943" className="doc_img"/>

3. Fill in the fields, then select **Save**. TestMu AI imports the AI agent's prompt and tools.

| Field | Where to find it |
|---|---|
| **AWS Region** | The region your Connect instance runs in, such as `us-west-2`. A region that doesn't match the instance is the most common reason the instance isn't found. |
| **Connect Instance ID** | Copy the instance ARN from the instance's overview page in the AWS console, and keep only the UUID after `instance/`. |
| **AI Agent ID** | In the Connect console, under **Amazon Q** → **AI agents**. Pick the agentic self-service agent that answers your test number. |
| **Access Key ID** and **Secret Access Key** | The keys of the read-only IAM user or role from [Prerequisites](#prerequisites). |
| **Session Token** (optional) | Only for temporary credentials from AWS STS, such as an assumed role. Leave it blank for long-lived IAM user keys. Temporary credentials expire, so a dedicated IAM user with long-lived keys needs less upkeep. |

TestMu AI stores the credentials as HyperExecute secrets, scoped to this agent. One provider can be connected per agent, so use a separate TestMu AI agent to test another AI agent or provider.

## Check the Prompt and Tools

---

Open the **Prompt** tab to check the imported prompt, then generate your scenarios from it. The imported tools appear in the scenario editor.

After you change the AI agent in Amazon Connect, select **Re-sync** on the **Amazon Connect** card so the prompt and tools match what is deployed.

## Select the Expected Tools for Each Scenario

---

Open a scenario and, in the scenario editor, select each tool from the imported catalog that the scenario expects the agent to call.

| Example scenario | Expected tools |
|---|---|
| Order status | `lookup_order` |
| Address change | `verify_customer`, `update_address` |

- Select only the tools the scenario must check. The tool check passes only if the agent called all of them.
- Scenarios with no tools selected still run, without a tool check.
- If the agent's tools change, select **Re-sync** and review the tools selected on each scenario.

## Run a Test and Read the Tool Calls

---

Start with one short scenario and one expected tool in a small suite, to confirm that the call reaches the right AI agent and the tool check works. Then run your suites as for any [inbound phone agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).

The transcript, recording, and grading are ready as soon as a call ends. The tool calls take up to a minute longer, because Amazon Connect makes a call searchable only once it ends, and TestMu AI reads the tool calls after that.

Open a call and select the **Tool Calls** tab.

| Section | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected on the scenario, marked **Called** or **Not Called**. |
| **Selected AUT Tool Calls** | Each call the agent made to a selected tool, with its status, arguments, and result. |
| **AUT Tool Calls** | Every tool the agent called, including tools you didn't select, so unexpected calls are visible. |

- Read the transcript and the tool calls together. If the agent says it updated or transferred something while the tool shows **Not Called**, it claimed an action it didn't take.
- A tool that ran but returned an error still shows **Called**, so check the result of each call.
- **Not Called** can be the right outcome, for example when the caller never gave the agent the details it needed.

## Troubleshooting

---

| Problem | What to do |
|---|---|
| Saving fails with an authentication error | Check both access keys, and that the IAM user is active. With temporary credentials, enter the session token too. |
| The integration stops working after it worked before | Temporary credentials have expired. Save new keys and a new session token, or switch to long-lived keys for a dedicated IAM user. |
| The instance or AI agent isn't found | Check that the region is the instance's region, and that both IDs were copied in full. |
| The AI agent is rejected, or no tools import | Check that the AI agent is an agentic self-service (**ORCHESTRATION**) agent. Other AI agent types aren't supported. |
| The call connects, but the AI agent never answers | The contact flow doesn't route this number to the AI agent. Call the number yourself to check the routing in Amazon Connect. |
| No tool calls a minute after the call ended | Refresh the call. If they still don't appear, check that the call reached the AI agent and that the IAM identity has the read permissions for Contact Lens and Amazon Q in Connect. |
| No tools appear in the scenario editor | Confirm the AI agent has tools, then select **Re-sync**. |
| A call ends as **dispatch-failed** | The number on the **Phone Numbers** tab is wrong or not in international format. Fix it and run the call again. |
| A key may have been exposed | Deactivate it in IAM, create a new one, and save it in TestMu AI. |

## Security and Credentials

---

- Saved credentials are stored as HyperExecute secrets, scoped to the agent where you save them.
- Give the IAM user or role only the read-only describe, list, and search permissions for Amazon Connect, Amazon Q in Connect, and Contact Lens.
- Use separate access keys for testing, rotate them on your usual schedule, and disconnect the integration when you no longer need it.

## Testing Tips for Amazon Connect

---

- **The contact flow is part of the call.** Queue routing, hold, and transfer to a representative are part of what callers experience, so build scenarios that reach them.
- **Contact attributes.** Contact attributes carry state between the contact flow and the agent, so a value set in one place and read in another is a real failure point.
- **Amazon Lex bots.** If your contact flow uses an Amazon Lex bot instead of an AI agent, there is nothing to connect. Test the number as a [phone caller agent](/support/docs/phone-agent/), and see how to [test Amazon Lex bots](/support/docs/test-amazon-lex-bots/) for the bot itself.

## Other Integrations

---

- **Phone Caller agents:** [Cartesia](/support/docs/test-cartesia-agents/), [ElevenLabs](/support/docs/test-elevenlabs-agents/), [Retell](/support/docs/test-retell-agents/), [Vapi](/support/docs/test-vapi-agents/), and [Salesforce Agentforce](/support/docs/test-agentforce-agents/).
- **Voice agents:** [Deepgram Voice Agent](/support/docs/test-deepgram-voice-agents/).
- See [Phone Agent Testing](/support/docs/phone-agent/) for everything else a phone test covers.
