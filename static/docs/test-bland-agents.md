# How to Test Bland AI Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Bland builds agents as node-based Conversational Pathways rather than a single prompt, and the same pathway powers phone, web, chat, and SMS. The TestMu AI Agent Testing Platform drives that pathway through multi-turn conversations across personas and edge cases on any channel it runs and scores every run, so you can test Bland without rebuilding anything.

To connect one, you need a Bland account with a published Conversational Pathway, a provisioned phone number for phone agents only, the pathway's source docs (PRD, knowledge base, or pathway export), and a TestMu AI workspace with agent-testing permissions.

## How do you test a Bland node-based Conversational Pathway?

A Bland agent is a node-based pathway that serves every channel, so a few behaviours are worth building dedicated scenarios around:

- **Pathways are graphs.** Pathways are graphs, not prompts. Unexpected phrasing breaks condition matching and strands the caller on a node.
- **Dynamic variables.** Dynamic variables use double-curly syntax, and webhook node results are referenced downstream.
- **Voicemail detection.** Voicemail detection is imperfect, so the human-speaks-first path needs its own scenario.
- **Warm transfer proxy.** Warm transfer requires the proxy on the same Twilio account.
- **Batch calling caps.** Batch calling hits concurrency and daily caps and can end partially complete.
- **Shared nodes.** Shared node edits silently affect every other pathway using that node.
- **One pathway, every channel.** One pathway serves phone, web, chat, and SMS, so a text fix can break the voice branch.

## Which channels does one Bland pathway serve?

One Bland pathway serves every channel. Import the pathway or paste the prompt to generate scenarios across every labeled branch, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over the phone network: DTMF entry, warm transfers, voicemail detection, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches web agents in the browser rather than over a phone number, with the endpoint profile created using the Web Agents API. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through the Bland web chat widget, which runs the same pathway as the phone agent, with the endpoint profile created using the widget ID or the chat API. It catches branching and reasoning failures, and because one pathway serves every channel, it also exercises the voice path. Setup: [chat agent testing](/support/docs/chat-agent/).

## Which Bland pathway steps break a test?

Common failure modes to watch for:

- No transcript returned
- Call stranded on a node
- Webhook variable missing downstream
- Batch run ends partial
