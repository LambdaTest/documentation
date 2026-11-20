# How to Test Twilio IVR Flows With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A Twilio IVR is a scripted flow built in Studio or TwiML, not a conversational AI agent. It matches on keypad digits and fixed speech results rather than intent, so coverage means traversing every menu branch rather than probing free-form conversation. The TestMu AI Agent Testing Platform dials the number, walks every path a caller can take, and scores each run, so you can test the whole IVR without changing the flow.

To connect one, you need a Twilio account with a published Studio flow or TwiML application, the provisioned number running it, the flow export or menu map, and a TestMu AI workspace with agent-testing permissions.

## How do you run a Twilio IVR test?

Create an **IVR Agent** and follow the steps in [Test an IVR Agent](/support/docs/ivr-agent/#test-an-ivr-agent). Two of the steps take Twilio-specific input:

- **IVR specification.** On the **Prompt** tab, add your Studio flow export or menu map, or paste your IVR specification, so the platform maps every branch of the flow.
- **Phone number.** On the **Phone Numbers** tab, register the Twilio number provisioned to the flow. The platform dials this number in every test call.

## How do you test every branch of a Twilio IVR?

Because an IVR is a decision tree, coverage is measured in branches, not intents. TestMu AI generates scenarios for the paths a caller can take, then dials the provisioned number and walks them: DTMF entry, speech input fallback, timeout and retry behaviour, and transfer to a queue or a representative. See [which paths to cover first](/support/docs/ivr-agent/#cover-every-branch).

If your IVR test cases already live in Cyara, [import a Cyara XML export](/support/docs/ivr-agent/#ivr-agent-testing-features) instead of writing a specification.

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

## Related TestMu AI Guides

- See how to [test an IVR agent](/support/docs/ivr-agent/), step by step.
- See how to [test phone agents](/support/docs/phone-agent/) for conversational AI agents on a phone line.
