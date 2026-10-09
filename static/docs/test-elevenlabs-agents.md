# How to Test ElevenLabs Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

ElevenLabs deploys one agent configuration to phone, web voice, and text, with voice conversations running over WebRTC and text-only conversations over WebSocket. You can test your ElevenLabs agent on the TestMu AI Agent Testing Platform over the same WebRTC or WebSocket surface it serves, with multi-turn conversations across personas and edge cases scored on each run.

To connect one, you need an ElevenLabs account with a published agent, a number imported under Phone Numbers for phone agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## Why do ElevenLabs voice and SIP codec settings break tests?

One agent configuration deploys to phone, web voice, and text, so a few behaviours are worth building dedicated scenarios around:

- **Fixed SIP codecs.** SIP audio runs at G711 8kHz or G722 16kHz regardless of the audio format set on the agent for WebSocket connections. Mismatches here look like quality failures but are codec failures.
- **Auth by agent visibility.** Private agents need a signed link for WebSocket or a conversation token for WebRTC. Public agents need only the agent ID.
- **Text-only depends on the response event.** Text-only mode depends on the agent response event firing, so a silent failure reads as a timeout.

## Can you test ElevenLabs across phone, voice, and text?

ElevenLabs deploys one agent configuration across surfaces. Generate scenarios from the system prompt, supporting docs, or knowledge base, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over native telephony, Twilio, or a SIP trunk: DTMF entry, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent over a direct audio stream rather than a phone number, using WebRTC or WebSocket. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text-only conversations, either configured that way or forced with a runtime override, over WebSocket. It skips every audio metric and scores logic, tool calls, grounding, and safety, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## How do you check which tools an ElevenLabs agent actually called? {#elevenlabs-integration}

A call transcript shows what the agent said, not which tools it ran. Connect your ElevenLabs agent in the **Integrations** tab of a Phone Caller agent with your **ElevenLabs API Key** and **ElevenLabs Agent ID**, and TestMu AI imports the agent's prompt and tool catalog, then marks each tool a scenario expects as **Called** or **Not Called** after every test call. The sections below cover when to use the ElevenLabs integration, the setup, the results, and troubleshooting.

### When to Use the ElevenLabs Integration

The integration is optional. Choose based on what you need to check.

- Without the integration, TestMu AI tests any agent that answers a phone number, on any platform, with no code changes, SDK, or test build. Each result includes the transcript, the call recording, pass or fail grading against your criteria, and call and audio quality metrics.
- Connect the integration when you want to import your ElevenLabs agent's prompt and tool catalog, or check which tools it invoked during each test call.

For a side-by-side comparison, see [How the ElevenLabs Integration Works](#how-the-elevenlabs-integration-works).

TestMu AI offers this integration for ElevenLabs, Retell, and Vapi. For the other two, see the [Retell integration](/support/docs/test-retell-agents/#retell-integration) and the [Vapi integration](/support/docs/test-vapi-agents/#vapi-integration).

### ElevenLabs Integration Prerequisites

- An agent in TestMu AI with the **Phone Caller** agent type.
- A voice agent hosted on **ElevenLabs**.
- The ElevenLabs API key and the ElevenLabs agent identifier for the voice agent that you want to test.

This section covers the TestMu AI workflow only. Obtain the API key and agent identifier from ElevenLabs through your organization's approved credential process.

API keys are secrets. Enter them only in the TestMu AI integration form. Do not put them in a scenario, prompt, test data file, or source code.

### Connect ElevenLabs

Connect your ElevenLabs agent from the **Integrations** tab of the Phone Caller agent that will test it.

1. In TestMu AI, open the **Phone Caller** agent that will test your ElevenLabs agent.
2. Select **Integrations** from the agent navigation.
3. Select **Connect** on the ElevenLabs provider card.
4. Enter the values for ElevenLabs. See [ElevenLabs Integration Fields](#elevenlabs-integration-fields).
5. Select **Save**.

TestMu AI encrypts the saved credentials and scopes them to this Phone Caller agent.

#### ElevenLabs Integration Fields

| Field | Required | Description |
|---|---|---|
| **ElevenLabs API Key** | Yes | Your ElevenLabs API key. |
| **ElevenLabs Agent ID** | Yes | The identifier of the ElevenLabs agent that you want to test. |

One provider can be active per agent. To test a different provider agent or use different credentials, use a separate TestMu AI agent.

#### Confirm the Connection

After you select **Save**, confirm that ElevenLabs is connected.

1. Check that the ElevenLabs provider card shows **Connected** or provides **Re-sync**.
2. If necessary, reopen the provider settings and confirm that the expected agent identifier is displayed.
3. Run a [smoke test](#run-a-smoke-test) in a small suite before you run a full regression suite.

### Sync the Prompt and Tools

Syncing imports the prompt and tool catalog of the connected ElevenLabs agent. The tool catalog lists the actions the agent can take, such as booking an appointment, looking up an order, or transferring to a human.

1. Open **Prompt**.
2. Select **Sync from ElevenLabs**.

TestMu AI imports the prompt. If the provider exposes tools, TestMu AI also refreshes the available tools. Author your scenarios against the imported prompt and tools.

Sync again after you change the agent on ElevenLabs, so that the prompt and tools in TestMu AI match the deployed agent.

### Set Expected Tool Calls for Each Scenario

Each scenario has its own list of expected tools. On every run, TestMu AI checks whether the agent invoked each selected tool.

1. Open **Scenarios**.
2. Create or edit a scenario.
3. In the scenario editor, which lists every tool from the synced catalog, select each tool that the agent is expected to invoke during the conversation.

The selected tools become the validation contract for the scenario, so select only the tools that the scenario must validate. For example:

| Example scenario | Expected tools |
|---|---|
| Booking | `check_availability`, `book_appointment` |
| Cancellation | `cancel_appointment` |

If the tool catalog changes on ElevenLabs, sync again. The scenario editor warns you when a scenario's selected tools no longer match the current catalog.

### Run a Smoke Test

Run one short scenario in a small suite to confirm that the integration works end to end before you run a full regression suite.

1. Open **Scenarios**.
2. Select or create a short scenario.
3. In the scenario, make the expected response of your ElevenLabs agent clear, starting with its first message or greeting.
4. Optionally, select one expected tool call to confirm tool call validation end to end.
5. Run the scenario in a small suite.
6. Review the result and the transcript.
7. Confirm that the intended ElevenLabs agent answered and that any selected tool shows the expected verdict.

After the smoke test passes, add coverage for the tools, transfers, long conversations, and failure paths that apply to your ElevenLabs agent.

### View Tool Call Validation Results

After a run, the suite results show tool call validation alongside the transcript and the call recording. Each test result also includes pass or fail against your validation criteria and call and audio quality metrics.

| View | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool selected for the scenario, with its verdict: **Called** or **Not Called**. |
| **AUT Tool Calls** | Every tool the agent invoked during the call, including tools you did not select, so unexpected tool calls are visible. |
| **Selected AUT Tool Calls** | **AUT Tool Calls** narrowed to the tools selected for the scenario, with a rollup of how many of the expected tools were called. |

#### Tool Call Verdicts

| Verdict | Meaning |
|---|---|
| **Called** | The agent invoked the tool during the call. |
| **Not Called** | The agent did not invoke the tool during the call. |

A scenario with no selected tools shows that no expected tools were mapped. Only black-box checks applied to that scenario.

Read the transcript and **Expected Tool Validation** together. For example, the transcript can show the agent confirming a cancellation, promising a callback, or saying it transferred the caller while the matching tool shows **Not Called**.

### How the ElevenLabs Integration Works

In a phone agent test, TestMu AI places real phone calls to your ElevenLabs agent, holds a conversation, and grades the outcome. Without the integration, this is black-box testing: TestMu AI records what the agent says on the call, but it cannot see the actions the agent takes behind the phone line. A transcript records what the agent said, such as a booking confirmation, but not whether the agent called its booking tool.

With the integration, testing is white-box: TestMu AI also reads the agent's configuration and tool catalog from ElevenLabs and checks which tools the agent invoked during each test call. It works as follows.

1. When you sync, TestMu AI imports the agent's prompt and, if the provider exposes tools, its tool catalog.
2. TestMu AI places a real phone call to the agent and holds a conversation.
3. After every test call, TestMu AI checks which tools the agent invoked and marks each tool selected for the scenario as **Called** or **Not Called**.
4. The suite results show the tool call validation alongside the transcript, the call recording, pass or fail against your validation criteria, and call and audio quality metrics.

The following table compares testing with and without the integration.

| Capability | Without the integration (black-box) | With the integration (white-box) |
|---|---|---|
| Real phone call testing, transcripts, recordings | Yes | Yes |
| Pass or fail grading against your criteria | Yes | Yes |
| Call and audio quality metrics | Yes | Yes |
| Prompt imported from your live agent | No | Yes |
| Tool catalog imported for scenario authoring | No | Yes |
| Tool call validation (tools your agent invoked) | No | Yes |

### Troubleshoot the ElevenLabs Integration

| Problem | What to do |
|---|---|
| TestMu AI rejects the API key | Create or retrieve a valid API key from ElevenLabs, then replace the saved value in TestMu AI. |
| TestMu AI cannot find the agent | Confirm that the agent identifier belongs to ElevenLabs and that it was copied in full. |
| The wrong voice agent answers | Reopen **Integrations**, check the saved agent identifier, and rerun the smoke test. |
| ElevenLabs tools are unavailable | Sync the ElevenLabs configuration again, then confirm that the tools are configured for the connected ElevenLabs agent. |
| The scenario editor warns that selected tools no longer match the catalog | The tool catalog changed on ElevenLabs. Sync again, then review the tools selected for the scenario. |
| **Expected Tool Validation** shows that no expected tools were mapped | The scenario has no selected tools, so only black-box checks applied. Select the expected tools in the scenario editor. |
| A credential may have been exposed | Revoke or rotate the key with ElevenLabs, then save the replacement key in TestMu AI. |

### Security and Credential Handling

- TestMu AI encrypts saved ElevenLabs credentials and scopes them to the Phone Caller agent where you save them.
- TestMu AI uses your ElevenLabs credentials only to read your agent's configuration and check its activity during your own test calls.
- TestMu AI never uses your ElevenLabs credentials to modify your agent.

Follow these practices for the integration:

- Use dedicated API keys for test and production environments where possible.
- Rotate keys according to your organization's security policy and after a suspected exposure.
- Update the saved agent identifier before you test a replacement ElevenLabs agent.
- Disconnect the integration or rotate its key when you no longer need it.

## What goes wrong in an ElevenLabs test?

Common failure modes to watch for:

- No transcript returned
- Codec mismatch on SIP calls
- Signed link expired
- Text-only run hangs
