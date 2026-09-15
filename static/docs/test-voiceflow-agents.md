# How to Test Voiceflow Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Voiceflow is chat-first. Agents are built in a visual designer and deployed to a web widget or any channel through the Dialog API, with phone available as an integration rather than a native surface. The TestMu AI Agent Testing Platform tests your Voiceflow agent wherever it is deployed, driving multi-turn conversations across personas and edge cases and scoring every run.

To connect one, you need a Voiceflow account with a published agent, a Twilio or Vonage number pointed at the agent for phone agents only, a TestMu AI workspace with agent-testing permissions, and source docs for scenario generation such as the prompt, PRD, or knowledge base.

## What makes a Voiceflow agent's split phone stack different to test?

Voiceflow brings the logic while a telephony provider brings the number and audio, so a few behaviours are worth building dedicated scenarios around:

- **Split phone stack.** Voiceflow brings the logic while the telephony provider brings the number, STT, and TTS, so phone failures split across two vendors.
- **Provider-owned audio.** Latency and audio quality on phone runs reflect the provider's stack as much as the agent.
- **No native handoff.** There is no native live-agent handoff, so escalation scenarios need a custom path to test against.
- **Dialog API needs code.** The Dialog API is the connection point for anything outside the widget, and it requires code.
- **No direct audio surface.** There is no direct audio surface, so there is no voice section on this page.

## Does Voiceflow expose chat and phone the same way?

Voiceflow is chat-first, with phone available through a telephony provider:

- **Chat** covers text conversations through the web chat widget or a custom channel, which is Voiceflow's native surface. Upload the supporting docs and knowledge base the agent answers from to generate scenarios, then create the endpoint profile using the Dialog API. It catches reasoning, tool call, and grounding failures. Setup: [chat agent testing](/support/docs/chat-agent/).
- **Phone** covers callers who arrive through a Twilio or Vonage number pointed at the agent. Paste the agent's prompt or import the flow to generate scenarios. It covers DTMF entry, transfers, and carrier latency, and the speech layer belongs to the telephony provider rather than Voiceflow. Setup: [phone agent testing](/support/docs/phone-agent/).

## Why does a Voiceflow test break?

Common failure modes to watch for:

- Dialog API auth failure
- Telephony provider misrouted
- No live-agent path to escalate to
- Session state lost

## Related TestMu AI Guides

- [Chat agent testing](/support/docs/chat-agent/)
- [Phone agent testing](/support/docs/phone-agent/)
