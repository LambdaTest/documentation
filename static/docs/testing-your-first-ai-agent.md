# How to Test Your First AI Agent With TestMu AI Agent Testing Platform

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

You can test an AI agent on TestMu AI entirely from the dashboard, without writing code. You create an agent, upload sources that describe it, generate test scenarios, run an evaluation against your agent's API, and read the scored results.

The whole flow takes a few minutes. This walkthrough uses a chat agent.

## What You Need Before You Start

Before you start, make sure you have the following in place.

- A TestMu AI account with access to the Agent Testing platform.
- Your agent's API request details: the endpoint URL, method, and headers, ready to enter as a cURL command. For a chat agent, the URL is the one that receives messages.
- Sources that describe your agent's requirements, such as a PDF, DOCX, or MD file, or pages from Confluence or Jira. The platform uses them to generate relevant scenarios.

## How to Run Your First Evaluation

Follow these seven steps in the dashboard. Each step builds on the previous one.

**Step 1: Create the agent.** In the Agent Testing page, click **Create New Agent**, then fill in the form:

- **Agent Name** (required).
- **Description** (optional).
- **Agent Type** (required): Chat Agent, Voice Agent, IVR Agent, Phone Caller Agent, Image Analyzer, or Video Agent. This walkthrough uses **Chat Agent**.
- **Evaluation Mode** (required for Chat Agent): select **Pre-production testing**, which uploads requirements, generates test scenarios, and simulates conversations against your agent.

Click **Create New Agent** to confirm.

**Step 2: Upload your sources.** Open the **Workflows** tab. In **Upload Sources**, add the material that describes your agent:

- **Files:** drag and drop, or browse. Supported formats are PDF, DOCX, XLSX, CSV, TXT, MD, images, audio, and video, up to 200 MB per file.
- **Confluence**, **Jira**, or **S3 Bucket:** switch to these tabs to link sources from those tools instead.

**Step 3: Configure and generate scenarios.** Once your file shows **Ready**, set the generation options:

- **Special Instructions** (optional): text that is included in every generated test scenario.
- **Languages** (optional): the languages your agent supports. English is used by default if none are selected.
- **Scenario Count** (optional): **Auto** (calculated from document complexity), 25, 50, 100, 200, or **Custom**.
- **Scenario Types** (optional): **Happy Path**, **Negative**, **Edge Case**, **Integration**, and **Red Team**. Leave all unselected to generate every type.

Click **Generate Scenarios**.

**Step 4: Review the generated scenarios.** The **Scenarios** tab lists every scenario, with a count on the tab.

- Each row shows the scenario name, its persona (such as "The Multitasker"), and its language.
- Use **Search scenario** or the **Scenario Type** dropdown to narrow the list.
- Use the pencil icon to edit a scenario, or the trash icon to delete it.
- Click **Create New Suite** to group scenarios for a run.

**Step 5: Edit a scenario if needed.** Click the pencil icon on a scenario to open **Edit Scenario**.

- Change the **Scenario Name**, **Description**, or **Validation Criteria**.
- Click **Save Scenario** to keep your changes, or **Cancel** to discard them.

**Step 6: Run the evaluation.** Run a suite to open the **Run Suite** dialog, then add your agent's API request.

1. Enter your agent's request as a cURL command.
2. Click **Parse and Evaluate**. To run it later, click **Schedule Run Evaluation** instead.
3. In the **Confirm Request Details** dialog, check the **URL**, **Method**, **Headers**, and **Body**.
4. Click **Run Evaluation**.

For the API URL format and authentication, see how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

**Step 7: Read the results.** When the run finishes, open a scenario from the list to see its score and the reasons behind it.

- Start with the scenarios that failed or scored lowest. On the **Turns** tab, read the conversation to find the point where your agent went wrong.
- Use **Areas for Improvement** and **Recommendations** to decide what to fix in your agent, and **Validation Criteria** to see which of the scenario's criteria it missed. If a criterion is wrong rather than the agent, edit the scenario as in Step 5.
- After you change your agent, click **Re-run** to run the same scenarios again. Each run is listed separately with its score and time, so you can compare before and after.

See the [chat agent metrics](/support/docs/chat-agent/#metrics) for what each score measures.

If you are testing a voice bot, the platform generates audio for each test case automatically, then evaluates the transcribed audio responses from your agent to confirm they are relevant.

## Related TestMu AI Guides

- See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/) for the API URL and authentication used in step 6.
- See how to [test agents from the terminal](/support/docs/agent-testing-cli/) with the A2A CLI.
