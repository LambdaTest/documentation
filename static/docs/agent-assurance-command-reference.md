# List of Rook Commands

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook has an interactive terminal for guided human testing and headless commands for shell scripts and CI. This page is the complete reference for all 24 top-level command families in the current CLI: quick-scan tables first, then full syntax, options, examples, and safety notes for each command.



## Start and Ask

| Command | Purpose | Details |
|---|---|---|
| rook | Start the interactive testing terminal. | [View](#rook) |
| rook ask | Run one natural-language orchestrator turn without the TUI. | [View](#rook-ask) |

## Autonomous Testing Sequence

| Interactive command | Headless equivalent | Purpose | Details |
|---|---|---|---|
| /explore | rook explore | Discover agents from local PRDs, knowledge bases, or source. | [View](#explore) |
| /agent | rook agent | List and select discovered agents. | [View](#agent) |
| /generate | rook generate | Generate functional, non-functional, and adversarial scenarios. | [View](#generate) |
| /profile | rook profile for read/use/remove operations | Configure and verify how Rook invokes the live target. | [View](#profile) |
| /scenarios | rook scenarios | Review runnability and curate scenarios. | [View](#scenarios) |
| /run | rook run | Execute the live agent and judge evidence. | [View](#run) |
| /ui | n/a | Open the local evidence viewer. | [View](#ui) |
| n/a | rook report | Print stored verdicts in a shell or CI. | [View](#rook-report) |

## Account and Workspace

| Interactive command | Headless equivalent | Purpose | Details |
|---|---|---|---|
| /plan | rook plan | Show the account plan and credit balance. | [View](#plan) |
| /auth | rook auth status | Verify stored authentication. | [View](#auth) |
| n/a | rook whoami | Headless alias for authentication status. | [View](#rook-whoami) |
| /login | rook login | Start browser authentication. | [View](#login) |
| /logout | rook logout | Revoke and clear credentials. | [View](#logout) |
| /env | n/a | Store variables referenced by profiles. | [View](#env) |
| /mcp | rook mcp | Manage MCP servers and trust. | [View](#mcp) |
| /budget | n/a | View session spending and phase limits. | [View](#budget) |
| /doctor | rook doctor | Diagnose installation, connection, authentication, and workspace. | [View](#doctor) |

## Interactive Session

| Command | Purpose | Details |
|---|---|---|
| /guide | Show the testing journey in order. | [View](#guide) |
| /help | List commands or explain one command. | [View](#help) |
| /clear | Clear visible TUI scrollback only. | [View](#clear) |
| /new | Start a new conversation session while keeping project data. | [View](#new) |
| /exit | Stop the Rook session and local viewer cleanly. | [View](#exit) |

## Discover Syntax from the CLI

Inside the TUI:

~~~text
/help
/help profile
/help run
~~~

From a normal shell:

~~~bash
rook --help
rook explore --help
rook mcp add --help
~~~

Human-readable text can evolve during pre-alpha. Prefer --json for automation where a headless command supports it.

## Headless Exit Codes

| Code | Meaning |
|---|---|
| 0 | No defect was recorded in the verdicts that were produced; also confirm that the requested run completed. |
| 1 | Rook could not perform the requested operation. |
| 2 | An agent defect or adversarial compromise was observed. |
| 3 | Authentication is missing or invalid. |
| 4 | Credits or a budget boundary prevented continuation. |

## Recommended First Journey

~~~text
/explore → /agent → /generate → /profile add → /scenarios list → /run → /ui
~~~

See the [end-user quickstart](/support/docs/agent-assurance-quickstart/#test-your-first-agent) or choose a setup in [real-world use cases](/support/docs/agent-assurance-overview/#real-world-use-cases).



# Command Details

## Start and ask

### rook {#rook}

Start the interactive terminal in the workspace whose agent materials and results you want to use. It keeps the current agent, profile, scenarios, spend, live subagent progress, permission questions, and next recommended command visible. It is the best starting point for a human-led run.

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

- Use --no-animation when recording a terminal, using a slower terminal, or preferring a static header.
- Typical flow: /explore → /generate → /profile add → /run → /ui. Use /login if prompted, and /guide or /help for orientation.

**Notes**

- The launch itself does not test the live agent.
- State: project data lives in .testmuai/rook/; global authentication, variables, and sessions live in ~/.testmuai/rook/.
- Run Rook from the intended workspace. Starting from an unrelated folder stores results there and changes how relative source, command, certificate, and observation paths resolve.

**Troubleshooting**

- rook: command not found: finish the PATH step in the [installation guide](/support/docs/agent-assurance-quickstart/#install-and-authenticate-the-cli).
- Controller or authentication errors: run rook doctor and rook whoami.
- Rendering problems: use rook --no-animation and confirm a TTY.

### rook ask {#rook-ask}

Run one prose-only orchestrator turn in a script or normal shell. The current headless form has no workspace tools and does not dispatch Rook commands.

~~~bash
rook ask
rook ask  --verbose
rook ask  --json
~~~

| Option | Purpose |
|---|---|
| --verbose | Show tool activity and credit use. |
| --json | Emit newline-delimited machine-readable events instead of prose. |

Use it to:

- Ask for testing guidance.
- Turn a requirement into suggested risks or test ideas.
- Get a machine-readable response for a prompt that does not depend on workspace state.

**Notes**

- It performs one orchestrator loop, prints the response, and exits.
- It does **not** open the prompt, read project files, inspect stored agents or runs, or execute a proposed slash command.
- To inspect or change stored state, use an explicit headless command (rook agent list, rook report, rook run --only SC-001) or the TUI.

~~~bash
rook ask "Suggest boundary cases for a refund policy with a 30-day cutoff."
rook ask "Explain risks in testing a booking agent against shared staging data." --json
~~~

## Autonomous testing sequence

### /explore {#explore}

Tell Rook what local material describes your agent. The target may be one PRD file, a documentation folder, an agent source directory, or a complete local repository.

~~~text
/explore [path] [--force] [-- guidance]
~~~

~~~bash
rook explore [path] [--all] [--force] [--instruction ] \
  [--allow ] [--json]
~~~

| Option | Purpose |
|---|---|
| path | Local file or directory. Interactive /explore defaults to the active agent's root when one exists, otherwise .; headless rook explore defaults to .. |
| --force | Re-read even when tracked files appear unchanged. |
| -- &lt;text&gt; | Interactive guidance about what to emphasize or ignore. |
| --instruction &lt;text&gt; | Headless form of the same guidance. |
| --all | Headless only; register every discovered candidate without a selection question. |
| --allow | Headless only; authorize one exact tool rule. Repeat when necessary. |

~~~text
/explore docs -- focus on PRD.md and knowledge/, and treat them as intended behavior
~~~

**Notes**

- Discovery writes agent and feature records below .testmuai/rook/ and may read files immediately. Review any later permission request before allowing a shell command or other gated operation.
- Incremental exploration reuses unchanged material; --force bypasses that.
- A PRD or knowledge base describes what *should* happen. It cannot prove which tools the deployed agent implements or whether a live action succeeded.

**Limits**

- URLs are rejected as targets. Clone a GitHub repo and explore the local checkout.
- Binary documents are not source material. Use readable Markdown, text, code, JSON, or YAML.
- There is no pre-read approval screen. A target path narrows discovery but is **not** a filesystem access boundary: discovery tools stay rooted at the launch workspace and can read sibling files.
- If siblings are sensitive, copy allowed materials into an isolated workspace or configure explicit deny rules.

See [real-world use cases](/support/docs/agent-assurance-overview/#real-world-use-cases).

### /agent {#agent}

List, select, or remove agents discovered in the current workspace. Use it when a workspace contains multiple agents or to confirm which agent receives generated scenarios and runs.

~~~text
/agent
/agent use
/agent rm
~~~

~~~bash
rook agent list [--json]
rook agent use
~~~

Headless mode does not provide the remove operation.

| Command | Effect |
|---|---|
| /agent | List agents and show the active one. |
| /agent use &lt;id&gt; | Make an agent active. |
| /agent rm &lt;id&gt; | Forget the agent and the Rook project data stored under it. |

**Notes**

- The active agent controls which feature record, scenarios, profiles, and reports later commands use, unless a headless --entity option selects another.
- Selecting an agent only moves the active project pointer; it does not invoke the live agent.
- **Removing** an agent deletes Rook's stored records for it, including associated test data. It does not delete the agent's source or remote service, but review the ID carefully.
- If no agents are listed, run /explore first.
- If a subagent is only reachable through a router, keep the router active and test the subagent through that public boundary.

### /generate {#generate}

Build scenarios from the active agent's requirements, policies, tools, features, and known data. Run it after exploration.

~~~text
/generate [--total ] [--class ] [--category ]
          [--no-validate] [--force] [-- guidance]
~~~

~~~bash
rook generate [--entity ] [--class ] [--category ] \
  [--total ] [--no-validate] [--allow ] [--verbose] [--json]
~~~

| Option | Purpose |
|---|---|
| --total | Set the total scenario count. |
| --class | Choose functional, non_functional, or adversarial; comma-separated. |
| --category | Limit generation to named categories; comma-separated. |
| --no-validate | Skip the model-based runnability preflight. |
| --force | Interactive only; generate even when agent evidence and scenarios appear current. |
| Text after -- | Focus generation on a business rule, threshold, or risk. |

~~~text
/generate --total 18 --class functional,adversarial -- verify identity, policy cutoff, duplicate requests, tool confirmation, and receipt evidence
~~~

**Notes**

- Start with 10 to 20 reviewable scenarios, and supply real identifiers and thresholds in the PRD or guidance.
- Generation writes scenario files under the active agent's project data; it does not invoke the live agent.
- A scenario can be well designed but unrunnable with the active profile. For example, it may need multi-turn state, native file input, tool-call observation, or write verification the profile does not expose.
- Skipping validation saves a pass but defers those findings; it does not make unsupported inputs executable.

### /profile {#profile}

A profile is the fixed, reviewable recipe Rook uses to invoke a live agent. Use /profile to connect HTTP, command, asynchronous, multi-turn, and artifact-producing targets. See also [invocation profile concepts](/support/docs/agent-assurance-profiles/).

~~~text
/profile
/profile add
/profile list
/profile use
/profile show
/profile edit
/profile test
/profile curl
/profile rm
~~~

~~~bash
rook profile list [name] [--entity ] [--json]
rook profile show [name] [--entity ] [--json]
rook profile use [name] [--entity ] [--json]
rook profile rm [name] [--entity ] [--json]
~~~

Creation, editing, testing, and cURL export are interactive in the current release.

**Typical setup**

1. Confirm the live staging request works outside Rook.
2. Run /profile add.
3. Name it by environment or variant (e.g. refund-staging).
4. Paste the cURL request or enter the local command.
5. Confirm which field receives the scenario goal and which carries conversation state.
6. Confirm the result extraction path.
7. Let Rook make one harmless probe call.
8. Approve the extracted response only when it is the agent's answer.

When you paste a cURL request, Rook lifts the Authorization value out of it, replaces it with $&#123;ROOK_AGENT_TOKEN&#125;, and securely asks for the value.

**Notes**

- Use separate profiles for staging, production read-only, fast-model, careful-model, or regional endpoints. Each run records the profile it used.
- Profiles are stored with the active agent below .testmuai/rook/. Adding or testing a profile invokes the target once; the test call is real.
- Not executable today: native attachment input; SSE, NDJSON, and WebSocket responses (recorded only); and direct MCP profiles via /profile test or /run (use an HTTP or command adapter).
- An unverified profile cannot become active.

### /scenarios {#scenarios}

Review what Rook generated, see whether each scenario can run with the active profile, and control inclusion without executing anything.

~~~text
/scenarios list
/scenarios exclude
/scenarios include
/scenarios delete
~~~

~~~bash
rook scenarios list [--entity ] [--json]
rook scenarios exclude  [--entity ]
rook scenarios include  [--entity ]
rook scenarios delete  [--entity ]
~~~

| Subcommand | Use |
|---|---|
| list | Show every scenario and current runnability. |
| exclude | Keep a scenario on disk but omit it from normal runs. |
| include | Re-enable an excluded scenario. |
| delete | Permanently remove the live scenario definition. |

**Notes**

- A skipped or unrunnable scenario is **not** an agent failure. It means the active profile lacks a required capability: multi-turn state, a supported transport, native file or image input, observable tool calls, or a safe way to verify an external write.
- Changing profiles can change runnability, so list again after /profile use or /profile edit.
- list does not change state; exclude and include update metadata; delete removes definitions from disk. Prefer exclude when you may need the scenario later.
- Scenario IDs are assigned during generation. Do not assume a category is always SC-001.

### /run {#run}

Execute selected scenarios against the live agent and produce evidence-backed verdicts. Run it after selecting an agent, generating scenarios, and activating a verified profile. **This command makes real calls to the live target.**

~~~text
/run [--only ] [--class ] [--category ]
     [--tag ] [--concurrency ] [--no-narrative]
     [--rca] [-- selection in words]
~~~

~~~bash
rook run [--entity ] [--only ] [--no-narrative] \
  [--allow ] [--verbose] [--json]
~~~

Interactive class, category, tag, concurrency, natural-language selection, and RCA options are not exposed by the current headless command.

| Option | Purpose |
|---|---|
| --only | Run specified scenario IDs; comma-separated. |
| --class | Select functional, non-functional, or adversarial scenarios. |
| --category | Select scenario categories. |
| --tag | Select scenarios carrying any listed tag. |
| --concurrency | Number executed at once; interactive default is 3. |
| --no-narrative | Skip the model-written run summary. |
| --rca | Cluster failures and write a proposed remedy for each cause. |

**Live effects**
Rook does not sandbox or roll back the target agent. Refunds, bookings, emails, tickets, and file writes are real.


**Notes**

- For a safe first run, use /run --only SC-001 --concurrency 1 --no-narrative. Review the preflight target, profile, scenario count, estimated credits, and write warning before approving.
- RCA (--rca) is an evidence-grounded hypothesis. Rook writes the proposal but does not modify your agent.
- Completed results are written below .testmuai/rook/.
- Press Esc to abort. Rook cancels an in-flight HTTP request or sends SIGTERM to an in-flight command, then preserves already-completed results.
- An interrupted target call may already have produced an external effect even when no response or verdict was recorded. Inspect the target system before retrying a write.
- **Unable to Verify** is not a failure. Check verification coverage before relying on the pass rate.
- In CI, exit code 0 describes verdicts produced. Also confirm the run record says the requested suite completed.

### /ui {#ui}

Inspect Rook's project files through a local, read-only browser view. The viewer starts with the interactive session and stops when that session exits; /ui reprints its URL and optionally opens the browser. See also [results and evidence](/support/docs/agent-assurance-results-and-evidence/).

~~~text
/ui
/ui --no-open
~~~

| Form | Behavior |
|---|---|
| /ui | Print the existing local viewer URL and open the default browser. |
| /ui --no-open | Print the existing viewer URL without opening a browser. |

**Notes**

- There is no top-level headless rook ui command; launch it from the TUI.
- After running at least one scenario: open the active agent, select a run, and open a scenario to inspect request, response, criteria, evidence, artifacts, and verification gaps. Compare later runs to see changed verdicts and coverage.
- Do not stop at the pass-rate card. For a refund flow, a "refund issued" sentence is the agent's claim; a read-only status lookup or independently observed record is stronger evidence; if neither exists, the criterion should be **Unable to Verify**.
- The viewer reads the current workspace's .testmuai/rook/, is bound to a local loopback address, and does not upload results.
- Pages can contain prompts, responses, paths, and evidence. Check screenshots for customer data and tokens before sharing.

### rook report {#rook-report}

Print stored verdicts without opening the TUI or browser viewer. See also [CI/CD and automation](/support/docs/agent-assurance-ci-cd/).

~~~bash
rook report
rook report
rook report [run-id] --entity
rook report [run-id] --json
~~~

| Argument or option | Purpose |
|---|---|
| run-id | Select a stored run. When omitted, Rook reverse-sorts run IDs and selects the first. |
| --entity | Select the agent whose run data should be read. |
| --json | Produce machine-readable output. |

**Notes**

- Run IDs contain a one-second-precision timestamp plus a random suffix. If concurrent processes can start runs for the same agent in the same second, pass the exact run ID rather than relying on default ordering.
- This command only reads stored data; it does not call the live agent or generate a new narrative.
- Read verdict counts together with verification gaps and completion state: **Unable to Verify** criteria do not become failures, and an interrupted run may still contain valid completed scenarios.
- Use --json for stable parsing, and /ui for full request, response, and evidence detail.

## Account and workspace

### /plan {#plan}

Check the signed-in TestMu AI account plan and credit balance before generating or executing a suite.

~~~text
/plan
~~~

~~~bash
rook plan
rook plan --json
~~~

**Notes**

- /plan is account-level information from TestMu AI; /budget is session-level information about what this Rook session has spent and its configured phase caps.
- The command changes nothing; it reads the authenticated account and credit balance.
- If authentication is missing or expired, run /login then /auth status.
- If the controller cannot be reached, run /doctor.
- For automation, use rook plan --json.

### /auth {#auth}

Verify stored credentials against the Rook controller.

~~~text
/auth
/auth status
~~~

~~~bash
rook auth status
rook auth status --json
rook whoami
~~~

**Notes**

- /auth and /auth status perform the same status check; rook whoami is the convenient headless alias.
- The check reads the stored token and verifies it remotely. It does not print the token or change project data.
- Authentication is global to the Rook home on this machine, not scoped to one agent workspace.
- Troubleshooting: expired or revoked token, sign in again; controller unreachable, run /doctor; wrong account, run /logout then /login with the intended account.

### rook whoami {#rook-whoami}

Verify which TestMu AI account is authenticated from a shell or automation. This is an alias for rook auth status.

~~~bash
rook whoami
rook whoami --json
~~~

**Notes**

- Use it to verify a workstation before testing, or to fail an automation setup step when the expected identity is unavailable (parse --json rather than matching the human display).
- It verifies the stored token and exits without changing project data or invoking an agent.
- If it reports no or invalid authentication, run rook login.
- If it reports the wrong account, log out first. Credentials are shared by Rook workspaces using the same Rook home.

### /login {#login}

Sign in through the TestMu AI browser authentication flow when Rook has no stored credential or the token is invalid.

~~~text
/login
~~~

~~~bash
rook login
rook login --json
~~~

**Steps**

1. Run /login or rook login.
2. Complete the flow in the browser.
3. Return to the terminal.
4. Verify with /auth status or rook whoami.

**Notes**

- Credentials are stored in the global Rook home, not the project directory. Do not copy that state into a repository or share it between users, and do not paste login callbacks or tokens into tickets or screenshots.
- Troubleshooting: wrong account in the browser, sign out there or use a separate browser profile and retry; status still invalid, run /logout then a fresh login; controller unreachable, diagnose with rook doctor.
- See the [installation guide](/support/docs/agent-assurance-quickstart/#install-and-authenticate-the-cli).

### /logout {#logout}

Revoke the current token and remove stored Rook credentials on this machine.

~~~text
/logout
~~~

~~~bash
rook logout
rook logout --json
~~~

**Notes**

- Use it to switch TestMu AI accounts, remove access from a shared workstation, or reset an invalid credential.
- Logout asks the server to revoke the token, then clears the local credential. Local cleanup happens even when remote revocation cannot be confirmed.
- It does not delete agents, profiles, scenarios, run evidence, or environment variables.
- If remote revocation fails (for example, while offline), the local copy is removed but the token may remain valid elsewhere. Retrying cannot revoke it, so use the account's security controls to revoke active access when online.
- Credentials are global for Rook terminals using the same Rook home, so logging out in one workspace affects other sessions on the machine.
- During an active run the TUI input is disabled: press Esc, wait for the prompt, inspect the target if a write may have occurred, then log out.

### /env {#env}

Manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files. See also [invocation profiles](/support/docs/agent-assurance-profiles/).

~~~text
/env
/env list
/env set  [value]
/env show
/env rm
~~~

There is no top-level headless rook env command in the current release.

| Command | Effect |
|---|---|
| /env list | List variable names and masked values. |
| /env set KEY | Prompt securely for a value. |
| /env set KEY value | Set a value typed in the command line. |
| /env show KEY | Print the complete value into terminal scrollback. |
| /env rm KEY | Remove the stored value. |

**Notes**

- Recommended flow: /env set ROOK_AGENT_TOKEN → /env list → /profile add. Reference the variable in the profile request instead of embedding the credential.
- Avoid /env set KEY value for secrets: the value is visible while typing and may remain in history.
- Avoid /env show unless full disclosure into scrollback is intentional.
- Variables are stored with restrictive permissions in one file below the global Rook home, not in the workspace's .testmuai/rook/ profile files.
- Each value is scoped to the current workspace's absolute path. A shell-exported variable shadows a stored value with the same name.
- If a secret is shown in a screenshot, rotate it immediately. Masking in /env list does not undo earlier disclosure.

### /mcp {#mcp}

Manage MCP servers that Rook can discover or use for read-only verification and controlled tool access. See also [MCP concepts](/support/docs/agent-assurance-mcp/).

~~~text
/mcp
/mcp list
/mcp enable
/mcp disable
/mcp approve
~~~

~~~bash
rook mcp list [--json]
rook mcp get  [--json]
rook mcp add  [command...] [--scope local|project|user] \
  [--transport stdio|http|sse|ws] [--url ] \
  [--env ] [--header ] [--json]
rook mcp remove  [--scope local|project|user] [--json]
rook mcp enable  [--json]
rook mcp disable  [--json]
rook mcp approve  [--origin project|discovered] [--json]
~~~

**Notes**

- For stdio servers, place the server command after -- so its flags are not parsed as Rook flags.
- Only stdio MCP servers are executable in the current release. http, sse, and ws definitions can be stored and listed but are marked unsupported-transport and are not enabled or called.
- Project and discovered definitions require explicit approval before use. Review the server definition and every exposed tool first.
- A verifier must not call a state-changing tool (for example issue_refund) to check whether state exists; that would create the state it claims to observe.
- Use variable references for headers and environment values. rook mcp get leaves references unexpanded.
- A direct MCP profile cannot currently invoke the agent under test. Use an HTTP or command adapter. Enabled stdio servers remain useful as Rook tools for discovery or independent read-only verification.

### /budget {#budget}

View what the current Rook session has spent, what remains, and the configured phase caps. There is no headless rook budget command in the current release.

~~~text
/budget
~~~

It shows:

- Session spend.
- Remaining credits available to the session.
- The current budget level.
- Limits assigned to phases such as discovery, generation, execution, and judging.

**Notes**

- Credits, not tokens, are the unit shown, because provider and model costs vary.
- The command is **display-only**. It does not change spend limits, so do not document or automate set or reset subcommands.
- It does not spend credits or modify the project. Budget exhaustion is applied at boundaries rather than interrupting a live call mid-request, and completed work is preserved.
- Use /plan for the account plan and overall balance, and /budget for this session.

### /doctor {#doctor}

The first diagnostic when Rook cannot start, authenticate, discover an agent, or reach its controller. See also [troubleshooting](/support/docs/agent-assurance-troubleshooting/) and the [installation guide](/support/docs/agent-assurance-quickstart/#install-and-authenticate-the-cli).

~~~text
/doctor
~~~

~~~bash
rook doctor
~~~

| Check | rook doctor | Interactive /doctor |
|---|---|---|
| Rook and Node.js versions | Yes | Rook version only |
| Environment and controller URL | Yes | Yes |
| Controller reachability and providers | Yes | Yes |
| Authentication | Locally cached state; not a live token verification | Cached state, plus live controller verification when signed in |
| Workspace and TTY | Both | Workspace |
| Registered project entities | No | Yes |

**Notes**

- Neither form tests the endpoint in an agent invocation profile.
- Steps: run rook doctor outside the TUI if the TUI will not start, fix the first failing check, verify authentication with rook whoami, return to the intended workspace, then retry.
- When a remote agent is unreachable, also test the profile's exported request with /profile curl. Doctor checks Rook's controller, not every target endpoint.
- Doctor output can include workspace paths, hostnames, account state, and environment names, but not stored secret values. Review it before attaching to a public issue.

## Interactive session

### /guide {#guide}

Show Rook's recommended end-to-end testing sequence and the meaning of its stages without leaving the terminal. There is no headless rook guide command.

~~~text
/guide
~~~

**Notes**

- It presents the normal sequence /explore → /agent → /generate → /profile → /scenarios → /run → /ui, and explains key ideas such as live target effects, evidence, profiles, and **Unable to Verify**.
- Use it on your first session, when returning to a partially completed workspace, when unsure whether to regenerate, configure, or run, or when demonstrating the workflow.
- It reads session context but does not invoke the target, spend credits, or modify project state.
- For exact flags, use /help &lt;command&gt;. The guide explains the journey; help explains syntax.

### /help {#help}

Command discovery inside the interactive terminal.

~~~text
/help
/help
~~~

Examples: /help explore, /help profile, /help run. The name may be entered without the leading slash.

**Notes**

- /help groups every interactive command by workflow sequence, workspace, and session.
- /help &lt;command&gt; shows purpose, subcommands, flags, argument shapes, and free-text guidance where supported.
- The input completion menu uses the same registry, so offered flags match help.
- For headless syntax, use shell help: rook --help, rook generate --help, rook mcp add --help.
- Help does not read the agent, invoke a target, spend credits, or change files.
- If a command appears in these docs but not in the installed CLI help, check rook --version and update the CLI.

### /clear {#clear}

Remove previous messages from the visible terminal when you want a clean screen. There is no headless rook clear command.

~~~text
/clear
~~~

It clears only the current TUI scrollback. It does **not**:

- Delete agents, profiles, scenarios, runs, or evidence.
- Start a new session.
- Clear authentication or environment variables.
- Remove .testmuai/rook/ project data.

Use /new for a new conversation session, and the specific agent, profile, scenario, environment, or logout commands to change stored state.

### /new {#new}

Start a fresh interactive conversation without leaving Rook or deleting the current workspace's testing data. There is no headless rook new command.

~~~text
/new
~~~

It:

- Clears the TUI content.
- Creates a new session identifier.
- Clears a process halt so work can continue.
- Keeps discovered agents, profiles, scenarios, run evidence, authentication, and environment variables.

**Notes**

- This is not a project reset. To switch agents, use /agent use; to remove stored entities, use their explicit remove or delete commands.
- During a long-running command, input is disabled: press Esc to abort, wait for the prompt, check target state before retrying any interrupted write, then enter /new.

### /exit {#exit}

Leave the interactive terminal cleanly. There is no headless rook exit command because headless commands exit after completing their work.

~~~text
/exit
~~~

On exit, Rook:

- Requests a graceful stop for an active run, cancelling an in-flight HTTP request or sending SIGTERM to an in-flight command.
- Keeps completed scenario results on disk.
- Waits briefly for the run manifest and history to finalize before forcing process exit.
- Stops the local browser viewer started by the session.
- Exits the terminal.

**Notes**

- Stop your own local agent service separately if you started one. Rook does not own or terminate the agent under test.
- A target action may have happened before cancellation even if its response was never recorded. Inspect target state before retrying a write.
- Exiting does not log out or delete project state. Use /logout only when you also intend to clear credentials.
