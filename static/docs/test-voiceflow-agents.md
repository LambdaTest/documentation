# How to Test Voiceflow Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Voiceflow is chat-first. Agents are built in a visual designer and deployed to a web widget or any channel through the Dialog API, with phone available as an integration rather than a native surface. TestMu AI connects to the agent on whichever channel it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a Voiceflow agent, make sure you have:

- Voiceflow account with a published agent
- A Twilio or Vonage number pointed at the agent, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a Voiceflow Chat Agent



Chat testing covers text conversations through the web chat widget or a custom channel, which is Voiceflow's native surface. Upload the supporting docs and knowledge base the agent answers from to generate scenarios, then create the endpoint profile using the Dialog API. It catches reasoning, tool call, and grounding failures.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## Test a Voiceflow Phone Agent



Phone testing covers callers who arrive through a Twilio or Vonage number pointed at the agent. Paste the agent's prompt or import the flow to generate scenarios, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, and carrier latency. The speech layer belongs to the telephony provider rather than Voiceflow.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## What You Get With Agent Testing



Every Voiceflow run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Voiceflow-Specific Considerations



A few Voiceflow behaviours are worth building dedicated scenarios around:

- Voiceflow brings the logic while the telephony provider brings the number, STT, and TTS, so phone failures split across two vendors
- Latency and audio quality on phone runs reflect the provider's stack as much as the agent
- There is no native live-agent handoff, so escalation scenarios need a custom path to test against
- The Dialog API is the connection point for anything outside the widget, and it requires code
- There is no direct audio surface, so there is no voice section on this page

## Troubleshooting



Common failure modes to watch for:

- Dialog API auth failure
- Telephony provider misrouted
- No live-agent path to escalate to
- Session state lost
