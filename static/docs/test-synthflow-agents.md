# How to Test Synthflow Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Synthflow is a no-code voice platform running on its own telephony infrastructure rather than a third-party carrier, with a visual flow designer and subflows for multi-agent setups. TestMu AI connects to the agent on whichever channel it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin

Before you connect a Synthflow agent, make sure you have:

- Synthflow account with a published agent
- A number provisioned on Synthflow's telephony layer, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a Synthflow Phone Agent

Phone testing covers agents that handle inbound or outbound callers running over Synthflow's own telephony stack. Paste the agent's prompt or import the flow to generate scenarios, then add the provisioned number and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, voicemail detection, and latency measured against in-house routing rather than a carrier's.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Synthflow Voice Agent

Voice testing covers agents reached through the embedded web widget rather than a phone number. Paste the prompt or import the flow to generate scenarios, then create the endpoint profile against the widget's agent. It drops telephony out of the path and isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Synthflow Chat Agent

Chat testing covers text conversations through the chat widget, SMS, or WhatsApp Business. Upload the supporting docs the agent answers from to generate scenarios, then create the endpoint profile using the chat widget or the messaging channel. It catches reasoning and branching failures. The text channel runs shallower logic than voice on the same agent.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing

Every Synthflow run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Synthflow-Specific Considerations

A few Synthflow behaviours are worth building dedicated scenarios around:

- In-house telephony means call quality issues belong to Synthflow's stack, not a carrier's, which changes how a failure gets triaged
- Flows are modular, so a subflow edit propagates to every parent flow using it
- Feature availability varies by plan, so some flow capabilities are absent on lower tiers
- Chat and SMS do not run at parity with voice on the same agent

## Troubleshooting

Common failure modes to watch for:

- No transcript returned
- Subflow not triggered
- Plan-gated feature missing
- Messaging session expired
