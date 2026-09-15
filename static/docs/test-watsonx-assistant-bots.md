# How to Test watsonx Assistant Bots With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

watsonx Assistant is built from actions and steps, reached over a web chat widget or the message API, with phone available through a telephony integration. You can test your watsonx Assistant on the TestMu AI Agent Testing Platform on whichever channel it runs, with its multi-turn conversations across personas and edge cases scored on each run.

To connect one, you need a published assistant with an environment ID, a telephony or SIP integration configured for phone testing only, source docs for scenario generation (action export, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## What makes testing a watsonx Assistant's actions and steps different?

watsonx Assistant is built from actions and steps across separate environments, so a few behaviours drive how you write scenarios:

- **Draft and live environments.** Draft and live environments are separate, so confirm which one the connection targets.
- **Actions and steps.** Actions and steps are the branch unit, and step conditions break on unexpected phrasing the same way pathway conditions do.
- **External search grounding.** Search answers come from an external source, so a grounding failure may be a retrieval problem.
- **Session expiry.** Sessions expire, which means a long scenario can fail on timeout rather than logic.
- **No direct audio surface.** There is no direct audio surface outside telephony, so there is no voice section on this page.

## On which channels does a watsonx Assistant respond?

watsonx Assistant is reached over a web chat widget or the message API, with phone available through a telephony integration:

- **Chat** covers text conversations through the web chat widget or a custom client. Upload the action export and supporting docs to generate scenarios, then create the endpoint profile using the message API against the assistant and environment ID. It catches step conditions, search grounding, and tool failures. Setup: [chat agent testing](/support/docs/chat-agent/).
- **Phone** covers callers who arrive through the telephony or SIP integration. Upload the action export to generate scenarios. It covers what telephony introduces against the same actions the chat channel uses: DTMF entry, transfers, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).

## What fails in a watsonx Assistant test?

Common failure modes to watch for:

- Step condition not met
- Session expired mid-scenario
- Search returns nothing
- Connected to the draft environment
