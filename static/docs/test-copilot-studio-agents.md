# How to Test Copilot Studio Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Copilot Studio agents run over digital messaging channels and, once the telephony channel is enabled, over phone through Dynamics 365 Contact Center. Two voice flavours exist: basic IVR agents on classic orchestration, and real-time voice agents. The TestMu AI Agent Testing Platform runs your Copilot Studio agent through multi-turn conversations across personas and edge cases on whichever channel it serves and scores each run, so you can test it before customers do.

To connect one, you need a published Copilot Studio agent, the telephony channel enabled and connected to Dynamics 365 Contact Center for phone agents only, source docs for scenario generation (topic export, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## What makes testing a Copilot Studio agent's topics different?

Copilot Studio agents run over messaging channels and, once enabled, over telephony, so a few behaviours are worth building dedicated scenarios around:

- **Enable telephony before Dynamics.** The telephony channel must be enabled before connecting Dynamics, and the order matters for reconnection.
- **Two voice flavours.** Basic voice agents and real-time voice agents behave differently enough to need separate scenarios.
- **UUI transfers need direct routing.** Transfers carrying SIP UUI context require direct routing, since PSTN numbers do not support UUI header transfer.
- **Phrase-or-description triggering.** Topics trigger on either phrases or descriptions, and accuracy settings only affect the phrase path.
- **No audio outside telephony.** There is no direct audio surface outside telephony, so there is no voice section on this page.

## How do users reach a Copilot Studio agent?

Copilot Studio deploys one agent across surfaces. Generate scenarios from the topic export and knowledge sources, then follow the linked setup for the surface you test:

- **Phone** covers callers who reach the agent over PSTN or SIP on the telephony channel. It covers what telephony introduces across every topic the agent can trigger: DTMF entry, barge-in, silence detection, transfers, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Chat** covers text conversations on the agent's published web or messaging channel, against the published channel endpoint. It catches topic triggering, knowledge grounding, and tool failures before they reach the voice channel. Setup: [chat agent testing](/support/docs/chat-agent/).

## What stops a Copilot Studio test?

Common failure modes to watch for:

- Topic not triggered
- Telephony channel not connected
- UUI transfer rejected
- Agent published to the wrong environment
