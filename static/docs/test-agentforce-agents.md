# How to Test Salesforce Agentforce Voice Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Salesforce Agentforce agents are built in Agent Builder, and with Agentforce Voice they answer calls on a phone number routed to the agent. The TestMu AI Agent Testing Platform tests an Agentforce voice agent as the agent under test (AUT): TestMu AI calls the Agentforce agent from a **Phone Caller** agent, holds a conversation, and grades the result. Connect the agent's Salesforce org, and TestMu AI also imports the agent's prompt and actions and verifies which tools the agent called during each test call.

To connect one, you need an Agentforce agent with an active version, an External Client App in your Salesforce org with a user it can run as, and a TestMu AI project to hold the agent under test. To place test calls and verify tool calls, you also need Agentforce Voice with a phone number routed to the agent, and Data Cloud with Agentforce session tracing turned on. See [Prerequisites](#prerequisites).

The [Salesforce setup](#salesforce-setup) is usually done by your Salesforce admin. [Connecting the agent](#connect-the-agent) and [running the tests](#run-tests) are done in TestMu AI by whoever runs the tests. Four [example calls](#what-it-catches) show what tool call validation catches. [Troubleshooting](#troubleshooting) and a short set of [verification queries](#verification-queries) are at the end.

## What does the Agentforce integration add to your tests? {#agentforce-integration}

A call transcript shows what the agent said, not which tools it ran. Once the integration is connected, TestMu AI reads the agent's definition and its session traces from Salesforce.

| Capability | What it means for you |
|---|---|
| **Prompt sync** | The agent's topics, instructions, and agent script are pulled from Salesforce into the agent's **Prompt** page, so scenario generation knows what the agent is supposed to do. |
| **Tool catalog** | The agent's actions, for example `LookupCustomer` or `GetOrderStatus`, appear in the scenario editor, so you can state which tools a scenario expects the agent to call. |
| **Tool call validation** | After each call, TestMu AI fetches what the agent actually did from Salesforce and marks each expected tool as **Called** or **Not Called**. |

TestMu AI offers this kind of integration for ElevenLabs, Retell, Vapi, and Salesforce Agentforce. For the others, see the [ElevenLabs integration](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), the [Retell integration](/support/docs/test-retell-agents/#retell-integration), and the [Vapi integration](/support/docs/test-vapi-agents/#vapi-integration).

### Timing to Expect

| Event | When |
|---|---|
| Transcript, recording, verdict, and grading | Seconds after each call ends. |
| Tool calls | About 6 to 10 minutes after the call ends. Salesforce delivers agent traces to Data Cloud in a single batch, and this delay is on the Salesforce side, not in TestMu AI. |
| Tool call verification timeout | If no trace has appeared 35 minutes after the call ended, that call's tool calls are marked unverified. See [Troubleshooting](#troubleshooting). |

## What do you need before you start? {#prerequisites}

### In Salesforce

- An Agentforce agent built in **Agent Builder**, with an **active (published) version**.
- **Agentforce Voice** provisioned for the org, with a **phone number routed to the agent**. Call the number from your own phone first: the agent must answer and hold a conversation.
- **Data Cloud** enabled, with **Agentforce session tracing** turned on. TestMu AI reads the agent's sessions and tool calls from Data Cloud. Without it, tool call validation can never complete.
- Permission to create an **External Client App** (typically System Administrator), and a user the app can run as.

Provisioning voice, routing the number, and enabling session tracing are Salesforce-side tasks for your Salesforce admin and account team. Follow Salesforce's documentation for your release. This guide covers only what TestMu AI needs from Salesforce.

You can connect before voice is ready. Saving the credentials, the prompt sync, and the tool catalog need only the agent and the External Client App. Placing calls and verifying tool calls also need the agent to be reachable by phone, with session tracing turned on.

### In TestMu AI

- A project to hold the agent under test.

## How do you set up Salesforce for TestMu AI? {#salesforce-setup}

Your Salesforce admin usually completes these steps in Salesforce.

### Find the Agent Identifier

In **Agent Builder**, check that the agent's status is **Active**, then note one of the following:

- The agent's **API name** (developer name), for example `support_agent`. This is the recommended option.
- The agent's **record ID**, an 18-character ID that begins with `0Xx`.

Either one works as the **Agentforce Agent ID** in TestMu AI. Salesforce record IDs start with a three-character prefix that identifies the object type, and for Agentforce agents that prefix is `0Xx`. TestMu AI treats anything else you enter as an API name.

TestMu AI resolves the identifier to the agent's active version. Only that version's prompt and actions are imported.

### Create an Integration User (Recommended)

You can run the integration as an existing administrator, but a dedicated user with only the following access is safer and easier to audit.

| Access | Used for |
|---|---|
| **API Enabled** | All TestMu AI access to Salesforce is through the API. |
| **View Setup and Configuration** | Reading the agent definition (prompt and actions). |
| Read on the agent objects (`BotDefinition`, `BotVersion`) | Resolving the Agent ID to its active version. |
| Read on `VoiceCall` (Service Cloud Voice) | Tying each phone call to its agent session. |
| Query access to the Agentforce session tracing objects in Data Cloud: `ssot__AiAgentSession__dlm`, `ssot__AiAgentInteraction__dlm`, and `ssot__AiAgentInteractionStep__dlm` | Reading the agent's sessions and tool calls. |

TestMu AI only ever reads from Salesforce. It never creates, edits, or deletes records, and it does not talk to the agent through the Agent API.

To confirm that this access is in place, run the [verification queries](#verification-queries) as the integration user.

### Create the External Client App

1. In Salesforce, go to **Setup** → **Quick Find** → **External Client App Manager** → **New External Client App**.
2. Enter a name and a contact email for the app, and set **Distribution State** to **Local**.
3. Under the OAuth settings:
   - Enable OAuth. The form requires a callback URL, but this flow does not use it, so any `https://` URL works.
   - Select the scopes: at minimum **Manage user data via APIs (api)**, plus the Data Cloud query scope, **Perform ANSI SQL queries on Data Cloud data** (`cdp_query_api`).
   - Enable the **Client Credentials Flow**.
4. Save the app. Then open the app's **Policies** and, under the Client Credentials Flow, set **Run As** to the [integration user](#create-an-integration-user-recommended).
5. Open the app's **Settings** → **OAuth Settings** and reveal the **Consumer Key** and **Consumer Secret**.

Treat the consumer secret like a password. Copy it straight into TestMu AI when you [connect Agentforce](#connect-agentforce). Do not paste it into chat, tickets, or documents. If it is ever exposed, rotate it on this same screen and save the new secret in TestMu AI.

### Collect the Four Values

| Field in TestMu AI | Where it comes from | Example |
|---|---|---|
| **Your org's My Domain** | Your org's My Domain URL, without a trailing slash. For a sandbox, use the sandbox My Domain. | `https://yourorg.my.salesforce.com` or `https://yourorg--uat.sandbox.my.salesforce.com` |
| **Consumer Key** | **External Client App** → **OAuth Settings** | A long alphanumeric string |
| **Consumer Secret** | **External Client App** → **OAuth Settings** | Hidden |
| **Agentforce Agent ID** | **Agent Builder**. See [Find the Agent Identifier](#find-the-agent-identifier). | `support_agent`, or an 18-character ID that begins with `0Xx` |

Only a Salesforce My Domain (`https://…my.salesforce.com`) is accepted for **Your org's My Domain**. Login hosts, Lightning hosts, and any other URL are rejected when you save.

## How do you connect an Agentforce agent to TestMu AI? {#connect-the-agent}

Complete these steps in TestMu AI.

### Create the Phone Caller Agent

In your project, create a **Phone Caller** agent, or open an existing one, with the direction **Inbound (Bot receives calls)**. TestMu AI places the calls, and the Agentforce agent answers them.

In the agent's phone number field, enter the phone number routed to the Agentforce agent (see [Prerequisites](#prerequisites)) in international format: a `+`, then the country code and the number, for example `+14155550100`. A number in any other form cannot be dialed. TestMu AI dials this number for every scenario.

### Connect Agentforce

1. Open the agent and select **Integrations** from the agent navigation.
2. On the **Agentforce** tile, "Connect your Salesforce Agentforce agent for voice-call and tool-call testing", select **Connect** and enter the [four values](#collect-the-four-values) from Salesforce:
   - **Your org's My Domain**
   - **Consumer Key**
   - **Consumer Secret**
   - **Agentforce Agent ID**
3. Select **Save**.

When you save, TestMu AI confirms the credentials with Salesforce, resolves the Agent ID to the agent's active version, pulls that version's instructions into the **Prompt** page, and builds the tool catalog from its actions.

A message confirms the result:

| Message | What it means |
|---|---|
| **Prompt and tools imported from Agentforce** | The prompt and the tool catalog were imported. |
| **Existing project prompt kept; Agentforce tools synchronized** | The project already had a prompt, so TestMu AI kept it and synchronized the tools. |
| **Could not sync Agentforce:** followed by the reason | A step failed. See [Troubleshooting](#troubleshooting). |

TestMu AI stores the credentials encrypted. After you save, the page shows that a key and secret are saved, with the fields reading *saved — enter to replace*, but never displays them again. To change them, enter new values and select **Save**.

Once connected, the **Agentforce** tile shows **Connected** and a **Re-sync** button, which pulls the agent's active version from Salesforce again.

### Check the Synced Prompt

Open the agent's **Prompt** page. You should see the agent's topics, their instructions, and the agent script as plain text. Scenario generation uses this prompt to understand the agent.

- **Sync from Agentforce** pulls the prompt from Salesforce again, after you confirm, and refreshes the tool catalog with it. Use it after you change the agent in Agent Builder.
- **Save** keeps whatever is in the editor. It does not overwrite your edits with the Salesforce version.

### Check the Tool Catalog

Open any scenario in the agent, or create one, and look for the **Agentforce Tools (Optional)** section in the scenario editor. It lists the agent's actions as they are named in Salesforce, each with a checkbox, its type and API name, and its description.

If the section is empty, the sync found no actions on the active agent version. Confirm that the agent has actions, then sync again: select **Re-sync** on the **Agentforce** tile in **Integrations**, or **Sync from Agentforce** on the **Prompt** page.

## How do you run Agentforce tests and read the results? {#run-tests}

### Select the Expected Tools for Each Scenario

Generate scenarios from the synced prompt, or write them by hand. For each scenario where you want the agent's tool use checked:

1. Open the scenario and expand **Agentforce Tools (Optional)**.
2. Select the checkbox for each tool that the scenario expects the agent to call.

Every selected tool is expected: the scenario's tool check passes only if the agent called all of them. Scenarios with no tools selected still run normally, but they do not get a tool call check.

If the agent's actions change in Salesforce, sync again as described in [Check the Tool Catalog](#check-the-tool-catalog). Tools that you selected earlier but that no longer exist are listed in a yellow notice in this section. Clear their checkboxes.

### Run the Suite

Run the suite as you would for any other Phone Caller agent. See [inbound phone agent testing](/support/docs/inbound-phone-agent/) for scenarios, test suites, and live calls.

### When Results Appear

| In the results | Timing | Notes |
|---|---|---|
| Transcript, recording, verdict, and grading | As each call ends | Independent of Salesforce. |
| **Tool Calls** tab | About 6 to 10 minutes after the call ends | Reads *Tool calls are pending* until the Salesforce trace batch lands. The page polls for you. |

### Read the Tool Calls Tab

| Section | What it shows |
|---|---|
| **Expected Tool Validation** | Each tool you selected on the scenario, with the number of times the agent invoked it and its outcome: **Called**, **Not Called**, **Pending** (still waiting for the trace), or **Unverified** (the trace never arrived, or TestMu AI could not tell with certainty which session belonged to this call). See [Tool Call Statuses](#tool-call-statuses). |
| **AUT Correlation** | The **AUT call ID**: the Salesforce agent session that this call was matched to, in case you want to look it up in Salesforce. |
| **Selected AUT Tool Calls** | The agent's actual calls to the tools you selected. Each invocation shows the tool name, a status of **success** or **error**, its ID, timestamp, and latency in milliseconds, and its **Arguments** and **Result**. |
| **AUT Tool Calls** | Every action the agent ran during the call, exactly as Salesforce recorded it: tool name, outcome, input arguments, output, and the time it ran. |

A tool that the agent called but that returned an error still shows **Called**, so read the **Result** of each invocation. See the [example failures](#what-it-catches).

A run with zero tool calls is not necessarily an error. If the scenario never gave the agent what it needed, for example the caller refused to provide the account details the agent asked for, the agent correctly did not call its lookup tools, and **Not Called** on an expected tool is the finding you wanted.

### Tool Call Statuses

| What you see | Meaning | What to do |
|---|---|---|
| *Tool calls are pending* | TestMu AI is waiting for the Salesforce trace batch. This is normal for the first 10 minutes or so after the call ends. | Wait. |
| The tool calls are listed | The call was matched to its Salesforce session, and the trace was fetched. | Nothing. |
| *Tool calls are unverified* | Either verification timed out because no trace appeared within 35 minutes of the call ending, or TestMu AI could not tell with certainty which session belonged to this call and chose not to guess. The transcript and grading are unaffected. | See [Troubleshooting](#troubleshooting). Rerunning the scenario is usually enough. If every run ends unverified, Data Cloud tracing or the integration user's access is the cause. |

## What failures does Agentforce tool call validation catch? {#what-it-catches}

The four test calls below were placed to a demo Agentforce agent, a weather assistant with two actions:

- `FetchCityCoordinates` turns a city name into a latitude and longitude.
- `FetchCurrentWeather` turns those coordinates into a temperature and wind speed.

The agent should call both actions, in that order, and read the result back. Both actions were selected as expected tools in every scenario. Three calls used the same scenario, in which the caller asks for the current temperature and wind speed in a city. The loop came from a negative scenario that asks for a city that does not exist.

### Healthy Call: Each Expected Agentforce Action Called Once

- **What the caller heard:** "It's currently 2.3°C with a wind speed of 5.2 kilometers per hour in Denver."
- **Tool Calls tab:** Both tools **Called**, one invocation each. `FetchCityCoordinates` received `Denver` and returned latitude 39.73915 and longitude -104.9847. `FetchCurrentWeather` received those coordinates and returned a temperature of 2.3 and a wind speed of 5.2, the figures the caller heard. This call is shown in [Read the Tool Calls Tab](#read-the-tool-calls-tab).
- **Other results:** Passed, 100.0%. All four criteria passed in **Validation Results**, **Analytics** showed Task Completion 100%, and the **Call Summary** rated the call Pass.

### Wrong Input: An Agentforce Action Called With Bad Arguments

In this version of the agent, the weather action was bound to fixed coordinates instead of the coordinates that the lookup returns.

- **What the caller heard:** "I am having trouble retrieving the current weather for Portland, OR right now." The caller asked again and got the same answer in other words. The transcript does not say why.
- **Tool Calls tab:** Both tools **Called**. `FetchCityCoordinates` ran once and returned latitude 45.52345 and longitude -122.67621. `FetchCurrentWeather` ran twice, both times with latitude `999` and longitude `999`, and both invocations ended in an error. The first returned the status code `400` with the message `Bad Request` and the action execution status `failed`. **Expected Tool Validation** still shows **Called** for `FetchCurrentWeather`, because the agent did invoke it.
- **Other results:** Failed, 48.9%. **Validation Results** read 50% as expected: the criteria for reporting the temperature and wind speed and for ending the call politely failed. **Analytics** showed Task Completion 0%, and the **Call Summary** rated the call Fail, with Accuracy Poor.

### Loop: An Agentforce Lookup Action Called 33 Times

The scenario asks for the weather in New Arcadia, a city that does not exist. The agent should say that it cannot find the city.

- **What the caller heard:** "My apologies, I think I have some audio issues on my end. Could you please repeat your last statement?" The agent kept apologizing and asking the caller to repeat until the call reached its maximum duration and ended at 8 minutes 21 seconds, with the end reason `exceeded-max-duration`.
- **Tool Calls tab:** `FetchCityCoordinates` **Called**, 33 invocations. All 33 lookups succeeded and returned `"results": null`. The first two searched for `New Arcadia` and `Newark, Arcadia`. `FetchCurrentWeather` **Not Called**, 0 invocations. The agent never acted on the empty result and never told the caller. The invocation count alone points to the defect.
- **Other results:** Failed, 22.1%. **Validation Results** read 25% as expected, with 3 of 4 criteria failed, among them the criterion for the agent's standard error response. **Analytics** showed User Satisfaction Negative, Early Terminated, and Task Completion 0%. The **Call Summary** rated the call Fail.

### No Tool Call: No Expected Agentforce Action Called

In this version of the agent, the agent stopped calling its actions.

- **What the caller heard:** "I cannot provide the current weather for Denver right now." The caller asked for Seattle and heard the same.
- **Tool Calls tab:** Both tools **Not Called**, 0 invocations each, and **Selected AUT Tool Calls** reads *No tool calls found.* The caller named the city, so **Not Called** is the defect here: the decline was not a service outage, because the agent never requested anything.
- **Other results:** Failed, 44.4%. **Validation Results** read 50% as expected: the criteria for reporting the temperature and wind speed and for ending the call politely failed. **Analytics** showed Task Completion 0%, and the **Call Summary** rated the call Needs Improvement.

### Healthy and Failed Agentforce Test Calls Compared Side by Side

| Call | Verdict | What the caller heard | Tool Calls tab | Validation Results | Analytics and Call Summary |
|---|---|---|---|---|---|
| Healthy | Passed, 100.0% | The temperature and wind speed, in one answer | Both tools **Called**, one invocation each. The result matches what the caller heard. | 4 of 4 criteria passed | Task Completion 100%. Call Summary Pass. |
| Wrong input | Failed, 48.9% | "Trouble retrieving" the weather, then the same answer again | Both tools **Called**. `FetchCurrentWeather` ran twice with latitude and longitude `999`, and both invocations ended in an error. | 50% as expected | Task Completion 0%. Call Summary Fail. |
| Loop | Failed, 22.1% | The same apology until the call reached its maximum duration | `FetchCityCoordinates` **Called** 33 times, every result empty. `FetchCurrentWeather` **Not Called**. | 25% as expected | User Satisfaction Negative. Task Completion 0%. Call Summary Fail. |
| No tool call | Failed, 44.4% | "Cannot provide" the weather, for every city asked | Both tools **Not Called**. *No tool calls found.* | 50% as expected | Task Completion 0%. Call Summary Needs Improvement. |

In the three failed calls, **Validation Results**, **Analytics**, and the **Call Summary** show that the agent did not complete the task. The **Tool Calls** tab shows which actions the agent called, how many times, with what arguments, and what each one returned, or that it called none.

## How do you troubleshoot the Agentforce integration? {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| Saving fails with "Instance URL must be your org's My Domain" | The URL is a login or Lightning host, has a path, or is not `https`. | Use `https://yourorg.my.salesforce.com`, or the sandbox My Domain, with nothing after the host. |
| Saving fails with "Salesforce rejected the configured consumer key/secret" | The Client Credentials Flow is not enabled, there is no **Run As** user, the key or secret is wrong, or the My Domain is wrong: a production URL for a sandbox org, or the reverse. | Recheck [Create the External Client App](#create-the-external-client-app) and [Collect the Four Values](#collect-the-four-values). |
| Saving fails with "No Agentforce agent found for '…'" | The Agent ID is wrong. | Use the API name or the `0Xx` ID exactly. |
| Saving or syncing fails with "Could not read the agent's active version (BotVersion query failed)" | The integration user lacks read access on `BotVersion`. | Grant read on the agent objects. See [Create an Integration User](#create-an-integration-user-recommended). TestMu AI never guesses which version is live. |
| Saving or syncing fails with "Agent '…' has no active version" | No version of the agent is activated. | Activate the version you want tested in Agent Builder, then save or sync again. |
| Syncing fails with "No GenAiPlannerBundle found for the active version" | The active version's definition is missing or cannot be retrieved. | Republish the agent in Agent Builder, then sync again. |
| The prompt sync fails with `UNSUPPORTED_API_VERSION` | The org is below API version 65. | Agentforce metadata needs API version 65 or newer. Contact Salesforce if your org is older. |
| The prompt sync fails with a permission error | The integration user lacks **View Setup and Configuration**. | Grant it. See [Create an Integration User](#create-an-integration-user-recommended). |
| The **Prompt** page is empty after a sync | The active agent version has no instructions. | Check the agent in Agent Builder, publish it, and sync again. |
| *Tool calls are pending* for more than 15 minutes, then *unverified* | Data Cloud tracing is not turned on. Or the integration user cannot read the session tracing objects or `VoiceCall`. Or two calls on the same caller number started and ended within about a second of each other, which cannot be told apart in Salesforce's call records, so TestMu AI waits rather than guess. | Run the [verification queries](#verification-queries) as the integration user. If they return nothing, turn on Agentforce session tracing or grant the missing access. For near-simultaneous calls, rerun the scenario. |
| *Tool calls are unverified* within minutes of the call ending | Salesforce linked the call's record to more than one agent session, or another run already holds that session. This is rare. | Rerun the scenario. If it repeats for a single call, inspect that call's `VoiceCall` record and its sessions in Salesforce. See [Verification Queries](#verification-queries). |
| The call never connects, or the agent does not answer | The agent's number is not routed to it, or Agentforce Voice is not provisioned. | Call the number from a phone. Fix the routing in Salesforce before testing. |
| A scenario ends with `dispatch-failed` and no call | The call could not be placed. Most often, the agent's phone number is not in international format (a `+`, then the country code and the number), or there was a transient telephony error. If TestMu AI itself refused the call, for example because the integration is not active or the selected tools no longer match the connected agent, the scenario shows that message instead. | Check the number on the agent. See [Create the Phone Caller Agent](#create-the-phone-caller-agent). Then rerun the scenario. |
| The agent said something it should not have, for example it named its backend data provider | A real defect in the agent's instructions. | This is not a TestMu AI problem. Add the guardrail to every topic that can answer, not only the off-topic one. |

## How does Agentforce tool call validation work? {#how-it-works}

You do not need this section to use the integration. It explains the wait and the statuses.

**Why tool calls take minutes.** Salesforce writes an agent's trace, its turns and tool calls, to Data Cloud in a batch after the session ends, not live. On real calls, the batch lands 6 to 10 minutes after the call. TestMu AI starts looking about five minutes after each call ends and checks every minute until the trace arrives, up to 35 minutes after the call ended. Nothing in TestMu AI can speed this up.

**How a call is matched to its session.** Salesforce creates a record for every phone call the moment it arrives, and the agent's session points back at that record. After a call ends, TestMu AI finds the record for its own call, with the same caller number, the same called number, and the same start and end times, and follows Salesforce's own link from that record to the session. The match is exact however many scenarios ran at once. If two records cannot be told apart, TestMu AI waits rather than guess.

**Why a call can end up unverified.** Either the trace never arrived, because session tracing is off or the integration user cannot read it, or TestMu AI could not tell with certainty which session belonged to this call and refused to attribute another call's tool calls to it.

**Privacy and access.** TestMu AI holds the consumer key and secret encrypted, requests short-lived tokens with them, and performs read-only queries. The session and tool call data that it fetches is stored with the call result, alongside the transcript.

## How do you verify Salesforce access with queries? {#verification-queries}

Run these queries in the **Developer Console** → **Query Editor**, logged in as the integration user, after at least one test call and a 10-minute wait. Each query should return rows.

**The agent resolves and has an active version.**

```sql
SELECT Id, DeveloperName FROM BotDefinition
```

```sql
SELECT BotDefinitionId, VersionNumber, Status FROM BotVersion WHERE Status = 'Active'
```

**Phone calls are being recorded**, one row per call.

```sql
SELECT Id, CallStartDateTime, CallEndDateTime, FromPhoneNumber, ToPhoneNumber
FROM VoiceCall ORDER BY CallStartDateTime DESC LIMIT 5
```

**Agent sessions are reaching Data Cloud and are linked to their calls.**

```sql
SELECT ssot__Id__c, ssot__StartTimestamp__c, ssot__RelatedVoiceCallId__c
FROM ssot__AiAgentSession__dlm ORDER BY ssot__StartTimestamp__c DESC LIMIT 5
```

**Tool calls are being traced.**

```sql
SELECT ssot__Name__c, ssot__StartTimestamp__c, ssot__InputValueText__c,
ssot__OutputValueText__c
FROM ssot__AiAgentInteractionStep__dlm
WHERE ssot__AiAgentInteractionStepType__c = 'ACTION_STEP'
ORDER BY ssot__StartTimestamp__c DESC LIMIT 5
```

If a query fails or returns nothing, use this table to find the cause.

| Result | Cause |
|---|---|
| The `BotDefinition` or `BotVersion` query fails | The user cannot see the agent or its versions. |
| The `VoiceCall` query returns nothing after a call | The user lacks Service Cloud Voice access. |
| The session or tool call query returns nothing after 10 minutes | Data Cloud tracing is not flowing, or the user lacks access to it. |

## Related TestMu AI Guides

- See the [phone agent testing overview](/support/docs/phone-agent/) for live test calls, recording analysis, custom metrics, and performance testing.
- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) step by step.
- See how to connect [ElevenLabs](/support/docs/test-elevenlabs-agents/#elevenlabs-integration), [Retell](/support/docs/test-retell-agents/#retell-integration), or [Vapi](/support/docs/test-vapi-agents/#vapi-integration) agents for tool call validation.
