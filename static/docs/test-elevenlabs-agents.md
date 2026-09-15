# How to Test ElevenLabs Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

ElevenLabs deploys one agent configuration to phone, web voice, and text, with voice conversations running over WebRTC and text-only conversations over WebSocket. You can test your ElevenLabs agent on the TestMu AI Agent Testing Platform over the same WebRTC or WebSocket surface it serves, with multi-turn conversations across personas and edge cases scored on each run.

To connect one, you need an ElevenLabs account with a published agent, a number imported under Phone Numbers for phone agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## Why do ElevenLabs voice and SIP codec settings break tests?

One agent configuration deploys to phone, web voice, and text, so a few behaviours are worth building dedicated scenarios around:

- **Fixed SIP codecs.** SIP audio runs at G711 8kHz or G722 16kHz regardless of the audio format set on the agent for WebSocket connections. Mismatches here look like quality failures but are codec failures.
- **Auth by agent visibility.** Private agents need a signed link for WebSocket or a conversation token for WebRTC. Public agents need only the agent ID.
- **Text-only depends on the response event.** Text-only mode depends on the agent response event firing, so a silent failure reads as a timeout.

## Can you test ElevenLabs across phone, voice, and text?

ElevenLabs deploys one agent configuration across surfaces. Generate scenarios from the system prompt, supporting docs, or knowledge base, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over native telephony, Twilio, or a SIP trunk: DTMF entry, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent over a direct audio stream rather than a phone number, using WebRTC or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text-only conversations, either configured that way or forced with a runtime override, over WebSocket. It skips every audio metric and scores logic, tool calls, grounding, and safety, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## What goes wrong in an ElevenLabs test?

Common failure modes to watch for:

- No transcript returned
- Codec mismatch on SIP calls
- Signed link expired
- Text-only run hangs
