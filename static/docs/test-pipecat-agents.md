# How to Test Pipecat Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Pipecat is an open-source Python framework where the pipeline is assembled by hand: transport, STT, LLM, TTS. It is transport-agnostic, so the connection depends entirely on what the team built. Whatever transport your team assembled, the TestMu AI Agent Testing Platform connects to it and drives your Pipecat bot through multi-turn conversations across personas and edge cases, scoring every run.

To connect one, you need a deployed Pipecat bot with a reachable transport, the provider and serializer in use for telephony deployments, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## How do you test a hand-assembled Pipecat pipeline?

Pipecat is a hand-assembled, transport-agnostic pipeline, so a few behaviours are worth building dedicated scenarios around:

- **No hosted dashboard or agent ID.** No hosted dashboard and no agent ID. Connection details come from the team's own deployment.
- **Provider-specific serializers.** Serializers are provider-specific, so a Twilio-serialized stream will not connect to a Telnyx endpoint.
- **Developer-owned audio format.** Audio normalization, codec, and sample rate are the developer's responsibility, which makes format mismatch the most common first failure.
- **In-pipeline interruption handling.** Interruption handling is built into the pipeline, so barge-in is a genuine test target rather than a vendor feature.
- **No text channel.** There is no text channel to test, so the page covers phone and voice only.

## What transport does a Pipecat bot run over?

- **Phone** covers callers arriving over Twilio, Telnyx, or Plivo media streams, bound to the telephony transport: DTMF entry, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the bot over a direct audio stream rather than a phone number, using WebRTC or WebSocket to match the transport the bot was built on. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).

## Where does a Pipecat run break down?

Common failure modes to watch for:

- Transport unreachable
- Wrong serializer
- Sample rate mismatch
- No audio returned

## Related TestMu AI Guides

- [Phone agent testing](/support/docs/phone-agent/)
- [Voice agent testing](/support/docs/voice-agent/)
