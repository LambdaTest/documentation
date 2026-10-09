# How to Test Retell Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Retell builds agents as either a single prompt or a node-based Conversation Flow, then deploys that same logic to phone, web voice, chat, and SMS. The TestMu AI Agent Testing Platform lets you test your Retell agent on whichever surface it runs, driving multi-turn conversations across personas and edge cases and scoring each run.

To connect one, you need a Retell account with a published agent, a Retell number (or a number over SIP trunking) for phone testing, the prompt, PRD, or knowledge base for scenario generation, and a TestMu AI workspace with agent-testing permissions.

## How do you test a Retell Conversation Flow agent?

How you cover a Retell agent depends on which shape it takes, plus a few Retell-specific gotchas:

- **Conversation Flow is a graph.** Flow agents are graphs, so coverage means every node rather than every intent.
- **Chat drifts from voice.** Chat agents are created by converting a voice agent, and the two drift apart after conversion. Test both.
- **Public vs private key.** The chat widget uses a public key while the API uses a private key. Confirm which one is in play.
- **Press Digit timing.** Press Digit timing decides whether external IVR navigation succeeds, so DTMF needs dedicated scenarios.

## Does one Retell agent behave the same on phone, voice, and chat?

Generate scenarios from the prompt, Conversation Flow, or supporting docs, then follow the setup for the surface you test:

- **Phone** covers inbound, outbound, and batch callers over the phone network: DTMF entry, Press Digit navigation through external IVR menus, transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent through a web call rather than a phone number, over the web call API. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through a Retell chat agent or the embedded widget over the Chat API, catching reasoning, tool call, and grounding failures, and can run on every commit. Setup: [chat agent testing](/support/docs/chat-agent/).

## How do you check which tools a Retell agent actually called? {#retell-integration}

A call transcript shows what the agent said, not which tools it ran. Connect your Retell agent in the **Integrations** tab of a Phone Caller agent with your **Retell API Key** and **Retell Agent ID**, and TestMu AI imports the agent's prompt and tool catalog, then marks each tool a scenario expects as **Called** or **Not Called** after every test call. The sections below cover when to use the Retell integration, the setup, the results, and troubleshooting.

### When to Use the Retell Integration

The integration is optional. Choose based on what you need to check.

- Without the integration, TestMu AI tests any agent that answers a phone number, on any platform, with no code changes, SDK, or test build. Each result includes the transcript, the call recording, pass or fail grading against your criteria, and call and audio quality metrics.
- Connect the integration when you want to import your Retell agent's prompt and tool catalog, or check which tools it invoked during each test call.

For a side-by-side comparison, see [How the Retell Integration Works](#how-the-retell-integration-works).

TestMu AI offers this integration for ElevenLabs, Retell, and Vapi. For the other two, see the [ElevenLabs integration](/support/docs/test-elevenlabs-agents/#elevenlabs-integration) and the [Vapi integration](/support/docs/test-vapi-agents/#vapi-integration).

### Retell Integration Prerequisites

- An agent in TestMu AI with the **Phone Caller** agent type.
- A voice agent hosted on **Retell**.
- The Retell API key and the Retell agent identifier for the voice agent that you want to test.

This section covers the TestMu AI workflow only. Obtain the API key and agent identifier from Retell through your organization's approved credential process.

API keys are secrets. Enter them only in the TestMu AI integration form. Do not put them in a scenario, prompt, test data file, or source code.

### Connect Retell

Connect your Retell agent from the **Integrations** tab of the Phone Caller agent that will test it.

1. In TestMu AI, open the **Phone Caller** agent that will test your Retell agent.
2. Select **Integrations** from the agent navigation.
3. Select **Connect** on the Retell provider card.
4. Enter the values for Retell. See [Retell Integration Fields](#retell-integration-fields).
5. Select **Save**.

TestMu AI encrypts the saved credentials and scopes them to this Phone Caller agent.

#### Retell Integration Fields

| Field | Required | Description |
|---|---|---|
| **Retell API Key** | Yes | Your Retell API key. |
| **Retell Agent ID** | Yes | The identifier of the Retell agent that you want to test. |

One provider can be active per agent. To test a different provider agent or use different credentials, use a separate TestMu AI agent.

#### Confirm the Connection

After you select **Save**, confirm that Retell is connected.

1. Check that the Retell provider card shows **Connected** or provides **Re-sync**.
2. If necessary, reopen the provider settings and confirm that the expected agent identifier is displayed.
3. Run a [smoke test](#run-a-smoke-test) in a small suite before you run a full regression suite.

### Sync the Prompt and Tools

Syncing imports the prompt and tool catalog of the connected Retell agent. The tool catalog lists the actions the agent can take, such as booking an appointment, looking up an order, or transferring to a human.

1. Open **Prompt**.
2. Select **Sync from Retell**.

TestMu AI imports the prompt. If the provider exposes tools, TestMu AI also refreshes the available tools. Author your scenarios against the imported prompt and tools.

Sync again after you change the agent on Retell, so that the prompt and tools in TestMu AI match the deployed agent.

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

If the tool catalog changes on Retell, sync again. The scenario editor warns you when a scenario's selected tools no longer match the current catalog.

### Run a Smoke Test

Run one short scenario in a small suite to confirm that the integration works end to end before you run a full regression suite.

1. Open **Scenarios**.
2. Select or create a short scenario.
3. In the scenario, make the expected response of your Retell agent clear, starting with its first message or greeting.
4. Optionally, select one expected tool call to confirm tool call validation end to end.
5. Run the scenario in a small suite.
6. Review the result and the transcript.
7. Confirm that the intended Retell agent answered and that any selected tool shows the expected verdict.

After the smoke test passes, add coverage for the tools, transfers, long conversations, and failure paths that apply to your Retell agent.

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

### How the Retell Integration Works

In a phone agent test, TestMu AI places real phone calls to your Retell agent, holds a conversation, and grades the outcome. Without the integration, this is black-box testing: TestMu AI records what the agent says on the call, but it cannot see the actions the agent takes behind the phone line. A transcript records what the agent said, such as a booking confirmation, but not whether the agent called its booking tool.

With the integration, testing is white-box: TestMu AI also reads the agent's configuration and tool catalog from Retell and checks which tools the agent invoked during each test call. It works as follows.

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

### Troubleshoot the Retell Integration

| Problem | What to do |
|---|---|
| TestMu AI rejects the API key | Create or retrieve a valid API key from Retell, then replace the saved value in TestMu AI. |
| TestMu AI cannot find the agent | Confirm that the agent identifier belongs to Retell and that it was copied in full. |
| The wrong voice agent answers | Reopen **Integrations**, check the saved agent identifier, and rerun the smoke test. |
| Retell tools are unavailable | Sync the Retell configuration again, then confirm that the tools are configured for the connected Retell agent. |
| The scenario editor warns that selected tools no longer match the catalog | The tool catalog changed on Retell. Sync again, then review the tools selected for the scenario. |
| **Expected Tool Validation** shows that no expected tools were mapped | The scenario has no selected tools, so only black-box checks applied. Select the expected tools in the scenario editor. |
| A credential may have been exposed | Revoke or rotate the key with Retell, then save the replacement key in TestMu AI. |

### Security and Credential Handling

- TestMu AI encrypts saved Retell credentials and scopes them to the Phone Caller agent where you save them.
- TestMu AI uses your Retell credentials only to read your agent's configuration and check its activity during your own test calls.
- TestMu AI never uses your Retell credentials to modify your agent.

Follow these practices for the integration:

- Use dedicated API keys for test and production environments where possible.
- Rotate keys according to your organization's security policy and after a suspected exposure.
- Update the saved agent identifier before you test a replacement Retell agent.
- Disconnect the integration or rotate its key when you no longer need it.

## What trips up a Retell test run?

- No transcript returned
- Call ends on the wrong node
- DTMF fires early
- Chat session closes on inactivity timeout
