# How to Test Twilio IVR Flows With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A Twilio IVR is a scripted flow built in Studio or TwiML, not a conversational AI agent. It matches on keypad digits and fixed speech results rather than intent, so coverage means traversing every menu branch rather than probing free-form conversation. The TestMu AI Agent Testing Platform dials the number, walks every path a caller can take, and scores each run, so you can test the whole IVR without changing the flow.

To connect one, you need a Twilio account with a published Studio flow or TwiML application, the provisioned number running it, the flow export or menu map, and a TestMu AI workspace with agent-testing permissions.

## How do you test every branch of a Twilio IVR?

Because an IVR is a decision tree, coverage is measured in branches, not intents. Upload the flow export or menu map and TestMu AI generates a scenario for each path a caller can take, then dials the provisioned number and walks them: DTMF entry, speech input fallback, timeout and retry behaviour, and transfer to a queue or a representative. See [phone agent testing](/support/docs/phone-agent/) for the full setup.

## What makes testing a scripted IVR different?

An IVR matches on input rather than intent, so its failure modes are about input handling, not comprehension:

- **Two input paths.** Speech input and keypad input follow different branches, and both need coverage.
- **Timeout and retry is the failure surface.** Input collection fails on timing, not comprehension, so build scenarios that trigger timeout and retry.
- **Per-step barge-in.** Barge-in is configured per input step rather than globally, so test it on each step that enables it.
- **Scripted-flow metrics.** Hallucination, grounding, and safety metrics do not apply to a scripted flow. Leave them off.
- **AI voice is a different setup.** Teams running Twilio's AI voice product connect over a WebSocket to their own application, a separate path.

## Why do Twilio IVR tests fail?

- Digit not registered
- Speech fallback never triggers
- Call drops on timeout
- Transfer target unreachable
