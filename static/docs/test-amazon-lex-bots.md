# How to Test Amazon Lex Bots With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Lex handles both text and speech natively, built from intents, slots, and fulfilment Lambdas. It reaches phone callers through Amazon Connect rather than on its own. The TestMu AI Agent Testing Platform connects straight to the bot alias and drives it through multi-turn conversations across personas and edge cases, scoring each run so you can test the bot without wiring up a caller.

To connect one, you need a published Lex bot with a live alias, source docs for scenario generation (bot definition, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## How do you test Amazon Lex intents and slot filling?

Lex handles text and speech from intents, slots, and fulfilment Lambdas, so a few behaviours drive how you write scenarios:

- **Slot filling.** Slot filling is the main failure surface, so partial input, corrections, and out-of-order answers all need scenarios.
- **Intent confidence thresholds.** Intent confidence thresholds decide the fallback path, which makes borderline utterances worth testing deliberately.
- **Fulfilment Lambdas.** Fulfilment Lambdas sit outside the bot, so a Lambda error surfaces as a bot failure.
- **Aliases and versions.** Aliases and versions matter. Testing the draft version does not test what is live.
- **No telephony of its own.** Lex has no telephony of its own, so there is no phone section on this page.

## How do phone calls reach a Lex bot for testing?

Lex handles text and speech natively, and reaches phone callers through Amazon Connect rather than on its own:

- **Voice** applies to bots reached over the speech endpoint rather than a phone number. Upload the bot definition and supporting docs to generate scenarios, then create the endpoint profile using the streaming conversation API. It isolates the speech pipeline, so recognition accuracy, slot capture from spoken input, and interruption handling get tested without telephony noise in the results. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** covers text conversations against the bot alias. Upload the bot definition and supporting docs to generate scenarios, then create the endpoint profile using the text recognition API. It catches intent matching, slot filling, and fulfilment failures. Setup: [chat agent testing](/support/docs/chat-agent/).

Phone testing for Lex bots runs through Amazon Connect. See how to [test Amazon Connect bots](/support/docs/test-amazon-connect-bots/).

## What derails a Lex bot test?

Common failure modes to watch for:

- Wrong intent matched
- Slot not captured
- Lambda timeout
- Testing the draft instead of the live alias
