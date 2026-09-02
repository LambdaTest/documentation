# How to Test Bland AI Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Bland builds agents as node-based Conversational Pathways rather than a single prompt, and the same pathway powers phone, web, chat, and SMS. TestMu AI connects to the pathway on whichever channel it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin

Before you connect a Bland agent, make sure you have:

- Bland account with a published Conversational Pathway
- A provisioned phone number, for phone agents only
- TestMu AI workspace with agent-testing permissions
- The pathway's source docs: PRD, knowledge base, or pathway export

## Test a Bland Phone Agent

Phone testing covers inbound and outbound callers running over the phone network. Import the pathway or paste the prompt to generate scenarios across every labeled branch, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, warm transfers, voicemail detection, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Bland Voice Agent

Voice testing applies to web agents reached in the browser rather than over a phone number. Import the pathway or paste the prompt to generate scenarios, then create the endpoint profile using the Web Agents API. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Bland Chat Agent

Chat testing covers text conversations through the Bland web chat widget, which runs the same pathway as the phone agent. Upload the pathway export and supporting docs to generate scenarios, then create the endpoint profile using the widget ID or the chat API. It catches branching and reasoning failures, and because one pathway serves every channel, it also exercises the voice path.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing

Every Bland run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Bland-Specific Considerations

A few Bland behaviours are worth building dedicated scenarios around:

- Pathways are graphs, not prompts. Unexpected phrasing breaks condition matching and strands the caller on a node
- Dynamic variables use double-curly syntax, and webhook node results are referenced downstream
- Voicemail detection is imperfect, so the human-speaks-first path needs its own scenario
- Warm transfer requires the proxy on the same Twilio account
- Batch calling hits concurrency and daily caps and can end partially complete
- Shared node edits silently affect every other pathway using that node
- One pathway serves phone, web, chat, and SMS, so a text fix can break the voice branch

## Troubleshooting

Common failure modes to watch for:

- No transcript returned
- Call stranded on a node
- Webhook variable missing downstream
- Batch run ends partial
