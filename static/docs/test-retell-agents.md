# How to Test Retell Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Retell builds agents as either a single prompt or a node-based Conversation Flow, then deploys that same logic to phone, web voice, chat, and SMS. The TestMu AI Agent Testing Platform lets you test your Retell agent on whichever surface it runs, driving multi-turn conversations across personas and edge cases and scoring each run.

To connect one, you need a Retell account with a published agent, a Retell number (or a number over SIP trunking) for phone testing, the prompt, PRD, or knowledge base for scenario generation, and a TestMu AI workspace with agent-testing permissions.

## How do you test a Retell Conversation Flow agent?

How you cover a Retell agent depends on which shape it takes, plus a few Retell-specific gotchas:

- **Conversation Flow is a graph.** Flow agents are graphs, so coverage means every node rather than every intent.
- **Chat drifts from voice.** Chat agents are created by converting a voice agent, and the two drift apart after conversion. Test both.
- **Public vs private key.** The chat widget uses a public key while the API uses a private key. Confirm which one is in play.
- **Press Digit timing.** Press Digit timing decides whether external IVR navigation succeeds, so DTMF needs dedicated scenarios.

## Does one Retell agent behave the same on phone, voice, and chat?

Generate scenarios from the prompt, Conversation Flow, or supporting docs, then follow the setup for the surface you test:

- **Phone** covers inbound, outbound, and batch callers over the phone network: DTMF entry, Press Digit navigation through external IVR menus, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent through a web call rather than a phone number, over the web call API. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through a Retell chat agent or the embedded widget over the Chat API, catching reasoning, tool call, and grounding failures, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## What trips up a Retell test run?

- No transcript returned
- Call ends on the wrong node
- DTMF fires early
- Chat session closes on inactivity timeout
