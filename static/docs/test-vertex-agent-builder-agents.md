# How to Test Vertex AI Agent Builder Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Conversational Agents model a conversation as a state machine of flows, pages, and routes rather than a single prompt, and the same agent serves web chat, streaming audio, and telephony. The TestMu AI Agent Testing Platform exercises the whole agent on whichever surface it serves, scoring its multi-turn conversations across personas and edge cases on every run.

To connect one, you need a Google Cloud project with a published agent, a Phone Gateway number or a partner telephony integration (for phone agents only), a TestMu AI workspace with agent-testing permissions, and source docs for scenario generation such as the flow export, PRD, or knowledge base.

## How do you test a Vertex flows, pages, and routes state machine?

Conversational Agents model a conversation as a state machine of flows, pages, and routes, so a few behaviours are worth building dedicated scenarios around:

- **Speech model forced on phone.** Phone Gateway forces the phone-call speech model regardless of what the agent has configured, so a voice run and a phone run can score differently on the same agent by design.
- **US numbers on global agents only.** Phone Gateway supports US numbers on globally created agents only. Regional agents need a partner integration.
- **Routes are the branch unit.** Routes are the branch unit, so coverage means every route rather than every intent.
- **Webhook fulfilment sits outside.** Webhook fulfilment sits outside the agent, which makes a webhook timeout look like an agent failure.

## Where can a Vertex agent be reached for testing?

The same agent serves every surface. Import the flow export to generate scenarios across every route, plus the data store contents for chat, then follow the linked setup for the surface you test:

- **Phone** covers callers arriving on a Google-hosted Phone Gateway number, a CCAI telephony partner, or a SIP trunk: DTMF entry, transfers, and carrier latency, scored against the phone-call speech model the gateway enforces. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent through streaming audio rather than a phone number, over the streaming detect intent API. It isolates the speech pipeline, so recognition accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through the Dialogflow Messenger widget or a custom client over the detect intent API, running logic regression on every change. Setup: [chat agent testing](/support/docs/chat-agent/).

## What causes a Vertex test to fail?

Common failure modes to watch for:

- Route not matched
- Webhook timeout
- Phone gateway quota exceeded
- Regional agent rejected by the gateway
