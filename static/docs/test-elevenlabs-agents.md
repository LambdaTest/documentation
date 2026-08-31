# How to Test ElevenLabs Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

ElevenLabs deploys one agent configuration to phone, web voice, and text, with voice conversations running over WebRTC and text-only conversations over WebSocket. TestMu AI connects to the agent on whichever surface it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect an ElevenLabs agent, make sure you have:

- ElevenLabs account with a published agent
- A number imported under Phone Numbers, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test an ElevenLabs Phone Agent



Phone testing covers inbound and outbound callers over native telephony, Twilio, or a SIP trunk. Paste the agent's system prompt to generate scenarios, then add the imported number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, voicemail handling, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test an ElevenLabs Voice Agent



Voice testing applies to agents reached over a direct audio stream rather than a phone number. Paste the system prompt to generate scenarios, then create the endpoint profile using WebRTC or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test an ElevenLabs Chat Agent



Chat testing applies to agents running in text-only mode, either configured that way or forced with a runtime override. Upload the supporting docs and knowledge base the agent answers from to generate scenarios, then create the endpoint profile using WebSocket. It skips every audio metric and scores logic, tool calls, grounding, and safety, which can run on every commit.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing



Every ElevenLabs run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## ElevenLabs-Specific Considerations



A few ElevenLabs behaviours are worth building dedicated scenarios around:

- SIP audio runs at G711 8kHz or G722 16kHz regardless of the audio format set on the agent for WebSocket connections. Mismatches here look like quality failures but are codec failures
- Private agents need a signed link for WebSocket or a conversation token for WebRTC. Public agents need only the agent ID
- Text-only mode depends on the agent response event firing, so a silent failure reads as a timeout

## Troubleshooting



Common failure modes to watch for:

- No transcript returned
- Codec mismatch on SIP calls
- Signed link expired
- Text-only run hangs
