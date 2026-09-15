# How to Test Vapi Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Vapi is a voice AI platform where a single assistant configuration carries the model, voice, transcriber, tools, and call behaviour, then ships across phone, web, and chat. With the TestMu AI Agent Testing Platform you can put your Vapi assistant through multi-turn conversations across personas and edge cases on every surface it ships to, and score each run.

To connect one, you need a Vapi account with a published assistant, a provisioned phone number for phone caller agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## How do you test Vapi tools and Squad handoffs?

A single Vapi assistant carries its tools and transport across every surface, so a few behaviours are worth building dedicated scenarios around:

- **Default tools.** Default tools each need their own scenario: `transferCall`, `endCall`, `dtmf`, `sms`, `apiRequest`.
- **Squad handoffs.** Squads hand off mid-call, so the transfer boundary needs testing.
- **WebSocket transport.** WebSocket transport rejects phone parameters, and audio pauses trigger silence timeouts.
- **Chat session state.** Chat context carries through session IDs, so multi-turn state needs its own tests.

## How is a Vapi assistant reached on phone, voice, and chat?

A single Vapi assistant ships across surfaces. Generate scenarios from the system prompt or supporting docs, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over the phone network: DTMF entry, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the assistant over a direct audio stream rather than a phone number, with the endpoint profile created using REST API or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through Vapi's Chat API, catching reasoning, tool call, and grounding failures, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## Where do Vapi test runs go wrong?

Common failure modes to watch for:

- No transcript returned
- Call ends on the wrong turn
- Audio format mismatch
- Chat schema mismatch
