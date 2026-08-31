# How to Test LiveKit Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

LiveKit is infrastructure rather than a hosted builder. The agent joins a WebRTC room as a participant, and phone calls arrive in that same room through a SIP trunk. TestMu AI connects to the room or the number, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a LiveKit agent, make sure you have:

- A running LiveKit agent, self-hosted or on LiveKit Cloud
- A SIP trunk with a provider such as Twilio or Telnyx, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a LiveKit Phone Agent



Phone testing covers inbound and outbound callers arriving over a SIP trunk. Paste the agent's prompt to generate scenarios, then add the number provisioned on the trunk and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, SIP REFER transfers, voicemail handling, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a LiveKit Voice Agent



Voice testing applies to agents reached by joining a room directly rather than over a phone number. Paste the prompt to generate scenarios, then create the endpoint profile using WebRTC against the room. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## What You Get With Agent Testing



Every LiveKit run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## LiveKit-Specific Considerations



A few LiveKit behaviours are worth building dedicated scenarios around:

- The unit under test is a room, not an agent ID, so setup differs from every hosted platform
- SIP REFER must be enabled on the trunk for transfers, and Twilio additionally needs PSTN transfer switched on
- Connectors bridge Twilio calls over WebSocket without a SIP trunk, which is a separate connection path
- DTMF, cold transfer, and region pinning are trunk-level settings, so a failure may sit in the trunk rather than the agent
- There is no text channel to test, so the page covers phone and voice only

## Troubleshooting



Common failure modes to watch for:

- Agent not present in the room
- SIP REFER rejected
- DTMF not received
- Codec negotiation failure
