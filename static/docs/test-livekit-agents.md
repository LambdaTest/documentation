# How to Test LiveKit Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

LiveKit is infrastructure rather than a hosted builder. The agent joins a WebRTC room as a participant, and phone calls arrive in that same room through a SIP trunk. The TestMu AI Agent Testing Platform joins the room or dials the number and runs your LiveKit agent through multi-turn conversations across personas and edge cases, scoring each run so you can test it without touching the infrastructure.

To connect one, you need a running LiveKit agent (self-hosted or on LiveKit Cloud), a SIP trunk with a provider such as Twilio or Telnyx for phone agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## Why do LiveKit failures often sit in the SIP trunk, not the agent?

LiveKit is infrastructure, so the unit under test is a room, not a hosted agent ID. That shapes how you connect and where failures sit:

- **Room, not an agent ID.** The unit under test is a room, so setup differs from every hosted platform.
- **SIP REFER for transfers.** SIP REFER must be enabled on the trunk for transfers, and Twilio additionally needs PSTN transfer switched on.
- **Connectors over WebSocket.** Connectors bridge Twilio calls over WebSocket without a SIP trunk, which is a separate connection path.
- **Trunk-level settings.** DTMF, cold transfer, and region pinning are trunk-level settings, so a failure may sit in the trunk rather than the agent.
- **No text channel.** There is no text channel to test, so this page covers phone and voice only.

## Do you reach a LiveKit agent by room or by number?

- **Phone** covers inbound and outbound callers arriving over a SIP trunk: DTMF entry, SIP REFER transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent by joining a room directly rather than over a phone number, using WebRTC against the room. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).

## What breaks in a LiveKit call?

Common failure modes to watch for:

- Agent not present in the room
- SIP REFER rejected
- DTMF not received
- Codec negotiation failure

## Related TestMu AI Guides

- [Phone agent testing](/support/docs/phone-agent/)
- [Voice agent testing](/support/docs/voice-agent/)
