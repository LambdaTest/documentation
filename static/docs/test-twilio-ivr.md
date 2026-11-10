# How to Test Twilio IVR Flows With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A Twilio IVR is a scripted flow built in Studio or TwiML, not a conversational AI agent. It matches on keypad digits and fixed speech results rather than intent, so coverage means traversing every menu branch rather than probing free-form conversation. The TestMu AI Agent Testing Platform dials the number, walks every path a caller can take, and scores each run, so you can test the whole IVR without changing the flow.

To connect one, you need a Twilio account with a published Studio flow or TwiML application, the provisioned number running it, the flow export or menu map, and a TestMu AI workspace with agent-testing permissions.

## How do you run an IVR test in the dashboard?

Follow these six steps in the dashboard.

**Step 1: Create the IVR agent.** In the Agent Testing page, click **Create New Agent**, then fill in the form:

- **Agent Name** (required).
- **Description** (optional).
- **Agent Type** (required): select **IVR Agent**.

Click **Create New Agent** to confirm.

**Step 2: Add the IVR specification.** Open the **Prompt** tab.

- In **Agent-Under-Evaluation Prompt**, define the ideal behavior and role of your IVR to guide conversations. The example specification covers the IVR's role, DTMF conventions, and global menu commands.
- Optionally, under **Upload Files**, add PDF, MS Word, MS Excel, TXT, MD, MP3, WAV, M4A, PNG, JPG, or WEBP files. Multiple files are allowed, up to 5 MB each.
- Optionally, under **Import from Jira**, enter a Jira issue key or URL and click **Import** to load a ticket into the editor. This needs Jira to be connected first: click **Connect Jira** if it isn't.
- Click **Save Prompt**.

**Step 3: Review the IVR System Map.** Open the **IVR System Map** tab to see every menu, branch, and dead-end the platform mapped for your IVR.

- **Summary cards:** **Menus**, **Decision points**, **Deepest path (levels)**, **Reachable paths**, and **Dead-ends found**.
- **Node types:** Start, Menu, Decision, Input, Self-service, Agent transfer, End call, and Error / reprompt.
- **Edge types:** DTMF, Speech, and System.
- Use the zoom controls and the minimap to move around the diagram.

**Step 4: Create a suite.** On the **Suites** tab, click **Create New Suite**.

- Enter a **Suite Name**.
- Optionally, select an **Agent Profile**. It applies only to scenarios that don't have a profile set on the **Scenarios** page, and a scenario-level profile overrides it.
- Choose the **Region**. Inbound calls originate from that region's phone number, and the default is US.
- Use **Search scenario** and the checkboxes to select the scenarios to run.
- Check the footer, which shows the number of calls and the availability, for example **1 call · 1/1 available**, then click **Create New Suite**.

**Step 5: Run the suite.** Click **Run** next to your suite. Every call in the suite is a real call to your IVR's number, so the **Confirm Run** dialog lists each one before anything is dialed. Check that the number of calls, the **Region**, and each call's voice and background noise are what you intended, then click the trigger button, such as **Trigger 1 call**, to start.

**Step 6: Review the call results.** Open a call from the list to see whether it passed and why.

- Check how each call ended first. A call marked **dispatch-failed** never connected, so it has no score to review.
- For a connected call that failed, play it on the **Recording** tab alongside the transcript to find the menu step where it went wrong. The usual causes are a digit that didn't register, a speech fallback that never triggered, a drop on timeout, or an unreachable transfer target. See [why Twilio IVR tests fail](#why-do-twilio-ivr-tests-fail).
- On the **Validation Results** tab, check which of the scenario's success criteria the call met or missed.
- If a call failed but the flow looks right, check the **MOS** badge. A call's pass or fail can be based on the metrics, on the mean opinion score of the call audio, or on both.

## How do you test every branch of a Twilio IVR?

Because an IVR is a decision tree, coverage is measured in branches, not intents. Upload the flow export or menu map, or paste your IVR specification into the **Prompt** tab, and TestMu AI generates a scenario for each path a caller can take, then dials the provisioned number and walks them: DTMF entry, speech input fallback, timeout and retry behaviour, and transfer to a queue or a representative. See [phone agent testing](/support/docs/phone-agent/) for the full setup.

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
