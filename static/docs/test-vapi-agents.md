# How to Test Vapi Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Vapi is a voice AI platform where a single assistant configuration carries the model, voice, transcriber, tools, and call behaviour, then ships across phone, web, and chat. TestMu AI connects to the assistant on whichever surface it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a Vapi assistant, make sure you have:

- Vapi account with a published assistant
- A provisioned phone number, for phone caller agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a Vapi Phone Agent



Phone testing covers inbound and outbound callers running over the phone network. Paste the assistant's system prompt to generate scenarios, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, voicemail handling, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Vapi Voice Agent



Voice testing applies to assistants reached over a direct audio stream rather than a phone number. Paste the system prompt to generate scenarios, then create the endpoint profile using REST API or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Vapi Chat Agent



Chat testing covers text conversations through Vapi's Chat API. Upload the supporting docs and Confluence pages the agent answers from to generate scenarios, then create the endpoint profile using REST API or WebSocket. It catches reasoning, tool call, and grounding failures, and can run on every commit.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing



Every Vapi run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Vapi-Specific Considerations



A few Vapi behaviours are worth building dedicated scenarios around:

- Default tools each need their own scenario: `transferCall`, `endCall`, `dtmf`, `sms`, `apiRequest`
- Squads hand off mid-call, so the transfer boundary needs testing
- WebSocket transport rejects phone parameters, and audio pauses trigger silence timeouts
- Chat context carries through session IDs, so multi-turn state needs its own tests

## Troubleshooting



Common failure modes to watch for:

- No transcript returned
- Call ends on the wrong turn
- Audio format mismatch
- Chat schema mismatch
