# How to Test Retell Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Retell builds agents as either a single prompt or a node-based Conversation Flow, then deploys that same logic to phone, web voice, chat, and SMS. TestMu AI connects to the agent on whichever surface it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a Retell agent, make sure you have:

- Retell account with a published agent
- A Retell number or a number connected over SIP trunking, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a Retell Phone Agent



Phone testing covers inbound, outbound, and batch callers running over the phone network. Paste the agent's prompt or import the Conversation Flow to generate scenarios, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, Press Digit navigation through external IVR menus, transfers, voicemail handling, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Retell Voice Agent



Voice testing applies to agents reached through a web call rather than a phone number. Paste the prompt or import the Conversation Flow to generate scenarios, then create the endpoint profile using the web call API. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Retell Chat Agent



Chat testing covers text conversations through a Retell chat agent or the embedded chat widget. Upload the supporting docs and knowledge base the agent answers from to generate scenarios, then create the endpoint profile using the Chat API. It catches reasoning, tool call, and grounding failures, and can run on every commit.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing



Every Retell run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Retell-Specific Considerations



A few Retell behaviours are worth building dedicated scenarios around:

- Conversation Flow agents are graphs, so coverage means every node rather than every intent
- Chat agents are created by converting a voice agent, and the two drift apart after conversion. Test both
- The chat widget uses a public key while the API uses a private key. Confirm which one is in play
- Press Digit timing decides whether external IVR navigation succeeds, so DTMF needs dedicated scenarios

## Troubleshooting



Common failure modes to watch for:

- No transcript returned
- Call ends on the wrong node
- DTMF fires early
- Chat session closes on inactivity timeout
