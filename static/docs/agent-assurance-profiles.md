# Configure Agent Assurance Invocation Profiles

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A profile tells Rook **how to reach your live agent and capture its evidence**. Discovery describes what the agent should do; a profile chooses the endpoint, command, environment, and session behavior you actually test.

Rook 0.1.3 uses Node.js hook scripts, not a fixed HTTP or command YAML recipe. Rook can generate those scripts from your integration notes, try them against the target, and repair them using the actual response.

## Before You Start

Select a project and agent. Make one harmless request outside Rook first, and gather:

- The working cURL request or local command, with secrets replaced by environment-variable names.
- The request field that receives the goal and the response field containing the answer.
- Session creation/resume details, if the target is genuinely multi-turn.
- Any polling needed for asynchronous results.
- Where real tool calls, usage, files, or traces can be read.
- Test fixtures and restrictions on writes.

Profile authoring and repair use credits and invoke the target. Those calls have real effects. Start with a staging endpoint and a harmless probe goal.

## Add a Profile Interactively

```text
/profile add staging
```

Describe the integration in plain language. For example:

```text
Call POST https://agent.staging.example.com/v1/chat.
Read AGENT_TOKEN from the environment and use it as a Bearer token.
Send the goal in the message field.
The answer is response.reply.text; return that as agent_reply.
This endpoint has no conversational state.
Use "show the status of test order ORD-1042" to verify it.
Do not issue refunds or change the test order during verification.
```

This is a template; replace the endpoint, fields, and fixture with a request you have verified.

## Generate From a File or Command

Put the integration material in call.txt, then run from a shell:

```bash
rook profile add staging --from call.txt
rook profile add local --command 'my-agent --test-mode'
```

The file can contain a cURL command, API notes, representative response, Postman export, or pointers to relevant files and URLs. The command example assumes my-agent is already installed.

Rook writes scripts, invokes the target, and corrects mistakes found during verification. Review the changes and permissions; do not approve unrelated installation, credential access, or server startup. In unattended authoring, supply enough material and narrowly reviewed --allow rules. See the [command options](/support/docs/rook-command-profile/).

## Inspect and Test the Result

```bash
rook profile
rook profile show staging
rook profile test staging --goal "show the status of test order ORD-1042"
rook profile use staging
```

The bare command lists profiles in a shell or opens a picker in the TUI. profile test invokes the existing hooks without asking a model to rewrite them. Check that the returned value is an agent answer, not a job ID or success status.

Generated files live below:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/
profiles/staging.yaml
scripts/staging.mjs
```

For a single-turn HTTP target, a minimal generated profile looks like:

```yaml
id: staging
name: staging
hooks:
execute: scripts/staging.mjs
env:
- variable: AGENT_TOKEN
purpose: Access to the staging agent
capabilities:
calls: false
usage: false
multi_turn: false
concurrency: 1
```

Hook paths resolve from the **active agent directory**, not the workspace root.

## Return the Answer and Evidence

During execute, Rook passes the scenario goal on stdin. Your script writes one JSON object on stdout and diagnostics on stderr:

```json
{
"agent_reply": "Order ORD-1042 is awaiting shipment.",
"calls": [
{ "name": "get_order", "arguments": { "id": "ORD-1042" } }
]
}
```

The answer key is agent_reply, even if the target API calls its field output, message, or reply. Map the real response in the script. Do not invent calls or token counts to satisfy a criterion.

See the [full hook contract](/support/docs/rook-profiles-and-hooks/) for context variables, output fields, timeouts, and error behavior.

## Add Phases Only Where Needed

| Need | Profile hook |
|---|---|
| Authenticate or prepare shared state once | prepare |
| Open a real session or reset one scenario's fixtures | open |
| Send each turn and return the answer | execute (required) |
| Close a session or release resources | close |
| Poll for delayed traces, calls, logs, or artifacts | collect |

Rook owns judge; it is not a user script. Tell the profile author how each required phase should behave. For a polling API, explain the job handle, polling request, terminal states, and timeout. For streaming or file-based integrations, the hook must implement the actual transport or upload; a capability declaration alone does not do it.

For multi-turn targets, return the real conversation handle and use ROOK_CONVERSATION on later turns. An echoed request ID is not proof of conversation state.

## Repair a Profile

```bash
rook profile fix staging --what "the response answer moved from reply.text to result.answer"
rook profile test staging --goal "show the status of test order ORD-1042"
rook sync
```

Repair can change scripts and spend credits. Inspect the diff and test it before syncing. Rook has no profile edit, profile curl, or profile rm subcommands in 0.1.3; edit the plain files deliberately when needed.

## Keep Credentials Out of the Profile

Use your shell or CI secret manager to provide target credentials. Generated hooks should read process.env.AGENT_TOKEN; the profile records the variable's name and purpose, not its value.

For local stored values, see [Environment and Secrets](/support/docs/rook-environment-and-secrets/). rook env list masks values; rook env show exposes them. Do not place real tokens in command examples, prompt files, logs, or screenshots.

## Review Profiles in the Web UI

After rook sync, the agent's **Summary** page shows its profiles and mapped phases. Use **View Full Spec** to inspect the recorded profile. A run's **Profile** link identifies the revision used for that run—not necessarily the current local file.

[Web UI walkthrough](/support/docs/rook-web-ui/) · [Lifecycle phases](/support/docs/rook-hooks-and-phases/) · [Run tests](/support/docs/agent-assurance-run-tests/)
