# How to Test Amazon Connect Bots With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Amazon Connect is a contact centre rather than an agent builder. The conversational logic lives in a Lex bot invoked from a contact flow, while the flow controls routing, queueing, and escalation around it. The TestMu AI Agent Testing Platform tests both layers together with multi-turn conversations across personas and edge cases and scores each run, so you can validate the bot and the contact flow the way callers actually hit them.

To connect one, you need an Amazon Connect instance with a published contact flow, the Connect phone number for phone testing, a TestMu AI workspace with agent-testing permissions, and source docs for scenario generation such as the bot definition, contact flow export, or knowledge base.

## Why do you test the Lex bot and contact flow together in Amazon Connect?

Amazon Connect runs conversational logic in a Lex bot invoked from a contact flow, so a few behaviours drive how you write scenarios:

- **Bot or contact flow.** A failure can sit in the bot or in the contact flow, so each metric needs to name which layer it reflects.
- **Contact attributes.** Contact attributes carry state between the flow and the bot, which makes a value set in one place and read in another a real failure mode.
- **Queue, hold, and handoff.** Queue behaviour, hold, and representative handoff are part of the caller experience and belong in scenarios.
- **Bot covered separately.** The bot itself is covered on the Amazon Lex page.

## Can you test Amazon Connect by phone and by chat?

Amazon Connect tests the Lex bot and the contact flow together across surfaces. Generate scenarios from the contact flow, bot definition, and supporting docs, then follow the linked setup for the surface you test:

- **Phone** covers callers reaching your bot inbound or outbound on the Connect number. It covers what telephony introduces around the bot's conversational accuracy: DTMF entry, queue routing, hold behaviour, transfer to a representative, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Chat** covers text conversations through the Connect chat widget or a custom client, using the chat contact API with messages received over the participant WebSocket. It catches reasoning, slot filling, and routing failures. Setup: [chat agent testing](/support/docs/chat-agent/).

## Where do Amazon Connect tests drop?

Common failure modes to watch for:

- Bot not invoked from the flow
- Contact attribute missing
- Queue misrouted
- Chat session timed out
