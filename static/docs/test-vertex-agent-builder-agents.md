# How to Test Vertex AI Agent Builder Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Conversational Agents model a conversation as a state machine of flows, pages, and routes rather than a single prompt, and the same agent serves web chat, streaming audio, and telephony. TestMu AI connects to the agent on whichever surface it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a Vertex agent, make sure you have:

- A Google Cloud project with a published agent
- A Phone Gateway number or a partner telephony integration, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: flow export, PRD, or knowledge base

## Test a Vertex Phone Agent



Phone testing covers callers arriving on a Google-hosted Phone Gateway number, a CCAI telephony partner, or a SIP trunk. Import the flow export to generate scenarios across every route, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, and carrier latency, scored against the phone-call speech model the gateway enforces.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Vertex Voice Agent



Voice testing covers agents reached through streaming audio rather than a phone number. Import the flow export to generate scenarios, then create the endpoint profile using the streaming detect intent API. It isolates the speech pipeline, so recognition accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Vertex Chat Agent



Chat testing covers text conversations through the Dialogflow Messenger widget or a custom client. Upload the flow export and data store contents to generate scenarios, then create the endpoint profile using the detect intent API. It runs logic regression on every change.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing



Every Vertex run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Vertex-Specific Considerations



A few Vertex behaviours are worth building dedicated scenarios around:

- Phone Gateway forces the phone-call speech model regardless of what the agent has configured, so a voice run and a phone run can score differently on the same agent by design
- Phone Gateway supports US numbers on globally created agents only. Regional agents need a partner integration
- Routes are the branch unit, so coverage means every route rather than every intent
- Webhook fulfilment sits outside the agent, which makes a webhook timeout look like an agent failure

## Troubleshooting



Common failure modes to watch for:

- Route not matched
- Webhook timeout
- Phone gateway quota exceeded
- Regional agent rejected by the gateway
