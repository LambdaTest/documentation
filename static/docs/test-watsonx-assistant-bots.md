# How to Test watsonx Assistant Bots With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

watsonx Assistant is built from actions and steps, reached over a web chat widget or the message API, with phone available through a telephony integration. TestMu AI connects to the assistant on whichever channel it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect a watsonx Assistant, make sure you have:

- A published assistant with an environment ID
- A telephony or SIP integration configured, for phone testing only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: action export, PRD, or knowledge base

## Test a watsonx Assistant Chat Bot



Chat testing covers text conversations through the web chat widget or a custom client. Upload the action export and supporting docs to generate scenarios, then create the endpoint profile using the message API against the assistant and environment ID. It catches step conditions, search grounding, and tool failures.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## Test a watsonx Assistant Phone Bot



Phone testing covers callers who arrive through the telephony or SIP integration. Upload the action export to generate scenarios, then add the number under Phone Numbers and pick from 100+ voices, background noise conditions, and personas. It covers what telephony introduces against the same actions the chat channel uses: DTMF entry, transfers, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## What You Get With Agent Testing



Every watsonx run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## watsonx-Specific Considerations



A few watsonx behaviours are worth building dedicated scenarios around:

- Draft and live environments are separate, so confirm which one the connection targets
- Actions and steps are the branch unit, and step conditions break on unexpected phrasing the same way pathway conditions do
- Search answers come from an external source, so a grounding failure may be a retrieval problem
- Sessions expire, which means a long scenario can fail on timeout rather than logic
- There is no direct audio surface outside telephony, so there is no voice section on this page

## Troubleshooting



Common failure modes to watch for:

- Step condition not met
- Session expired mid-scenario
- Search returns nothing
- Connected to the draft environment
