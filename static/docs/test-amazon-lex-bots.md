# How to Test Amazon Lex Bots With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Lex handles both text and speech natively, built from intents, slots, and fulfilment Lambdas. It reaches phone callers through Amazon Connect rather than on its own. TestMu AI connects to the bot alias directly, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin



Before you connect an Amazon Lex bot, make sure you have:

- A published Lex bot with a live alias
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: bot definition, PRD, or knowledge base

## Test a Lex Voice Bot



Voice testing applies to bots reached over the speech endpoint rather than a phone number. Upload the bot definition and supporting docs to generate scenarios, then create the endpoint profile using the streaming conversation API. It isolates the speech pipeline, so recognition accuracy, slot capture from spoken input, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## Test a Lex Chat Bot



Chat testing covers text conversations against the bot alias. Upload the bot definition and supporting docs to generate scenarios, then create the endpoint profile using the text recognition API. It catches intent matching, slot filling, and fulfilment failures.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

Phone testing for Lex bots runs through Amazon Connect. See how to [test Amazon Connect bots](/support/docs/test-amazon-connect-bots/).

## What You Get With Agent Testing



Every Amazon Lex run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring

## Lex-Specific Considerations



A few Amazon Lex behaviours are worth building dedicated scenarios around:

- Slot filling is the main failure surface, so partial input, corrections, and out-of-order answers all need scenarios
- Intent confidence thresholds decide the fallback path, which makes borderline utterances worth testing deliberately
- Fulfilment Lambdas sit outside the bot, so a Lambda error surfaces as a bot failure
- Aliases and versions matter. Testing the draft version does not test what is live
- Lex has no telephony of its own, so there is no phone section on this page

## Troubleshooting



Common failure modes to watch for:

- Wrong intent matched
- Slot not captured
- Lambda timeout
- Testing the draft instead of the live alias
