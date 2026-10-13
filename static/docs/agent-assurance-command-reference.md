# List of Rook Commands

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use `rook` to start the interactive terminal, or `rook ` from your shell. This reference was checked against the **public Rook 0.1.11 CLI** on October 13, 2026. It groups command syntax, examples, RCA, state changes, diagnostics, and output handling on one page. Commands that invoke the target or spend credits still require appropriate approval.

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

Use rook to start the interactive terminal in the workspace whose agent material and testing state you want to use.

#### Syntax {#rook-syntax}

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

#### Syntax {#rook-ask-syntax}

```bash
rook ask <prompt...>
rook ask <prompt...> --verbose
rook ask <prompt...> --json
~~~

| Option | Purpose |
|---|---|
| <code>--verbose</code> | Show tool activity and credit use. |
| <code>--json</code> | Emit newline-delimited machine-readable events instead of prose. |

Use it to:

- Ask for testing guidance.
- Turn a requirement into suggested risks or test ideas.
- Get a machine-readable response for a prompt that does not depend on workspace state.

**Notes**

### /guide {#guide}

Use <code>/guide</code> when you know you want to test an agent but do not yet know which command comes next.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-guide.png').default} alt="Rook guide command help" width="2200" height="680" className="doc_img"/>

#### Syntax {#guide-syntax}

~~~text
/guide
~~~

The shell form is <code>rook guide</code>.

The guide covers this sequence:

~~~text
login → project → explore → agent → generate → profile → sync → run
~~~

A normal timeline run requires an upstream project version, so the guide puts <code>sync</code> before <code>run</code>. In a new project, synchronize the reviewed tree before the first normal run; use <code>run --test</code> only when the draft run should stay local.

The guide also lists the commands that spend credits (<code>explore</code>, <code>generate</code>, <code>profile add</code>, <code>profile fix</code>, <code>run</code>, <code>ask</code>, and <code>report --rca</code>), where local files live, what leaves the machine, and how to inspect status at any point. It reads command metadata and state; it does not invoke the target or spend credits.

### /help {#help}

Use <code>/help</code> to list the current command surface or inspect one command in full.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-help.png').default} alt="Rook help command help" width="2200" height="920" className="doc_img"/>

#### Syntax {#help-syntax}

~~~text
/help
/help <command>
~~~

From a shell:

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
rook explore [path] [--all] [--force] [--instruction <text>] \
[--allow <exact-rule>] [--json]
~~~

| Option | Purpose |
|---|---|
| <code>path</code> | Local file or directory. Interactive <code>/explore</code> defaults to the active agent's root when one exists, otherwise <code>.</code>; headless <code>rook explore</code> defaults to <code>.</code>. |
| <code>--force</code> | Re-read even when tracked files appear unchanged. |
| <code>-- &lt;text&gt;</code> | Interactive guidance about what to emphasize or ignore. |
| <code>--instruction &lt;text&gt;</code> | Headless form of the same guidance. |
| <code>--all</code> | Headless only; register every discovered candidate without a selection question. |
| <code>--allow</code> | Headless only; authorize one exact tool rule. Repeat when necessary. |

~~~text
/explore docs -- focus on PRD.md and knowledge/, and treat them as intended behavior
~~~

**Notes**

- Discovery writes agent and feature records below <code>.testmuai/rook/</code> and may read files immediately. Review any later permission request before allowing a shell command or other gated operation.
- Incremental exploration reuses unchanged material; <code>--force</code> bypasses that.
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
/agent use <id>
/agent rm <id>
~~~

~~~bash
rook agent list [--json]
rook agent use <id>
~~~

Headless mode does not provide the remove operation.

| Command | Effect |
|---|---|
| <code>/agent</code> | List agents and show the active one. |
| <code>/agent use &lt;id&gt;</code> | Make an agent active. |
| <code>/agent rm &lt;id&gt;</code> | Forget the agent and the Rook project data stored under it. |

**Notes**

- The active agent controls which feature record, scenarios, profiles, and reports later commands use, unless a headless <code>--entity</code> option selects another.
- Selecting an agent only moves the active project pointer; it does not invoke the live agent.
- **Removing** an agent deletes Rook's stored records for it, including associated test data. It does not delete the agent's source or remote service, but review the ID carefully.
- If no agents are listed, run <code>/explore</code> first.
- If a subagent is only reachable through a router, keep the router active and test the subagent through that public boundary.

### /generate {#generate}

Build scenarios from the active agent's requirements, policies, tools, features, and known data. Run it after exploration.

~~~text
/generate [--total <n>] [--class <list>] [--category <list>]
[--no-validate] [--force] [-- guidance]
~~~

~~~bash
rook generate [--entity <id>] [--class <list>] [--category <list>] \
[--total <n>] [--no-validate] [--allow <exact-rule>] [--verbose] [--json]
~~~

| Option | Purpose |
|---|---|
| <code>--total</code> | Set the total scenario count. |
| <code>--class</code> | Choose <code>functional</code>, <code>non_functional</code>, or <code>adversarial</code>; comma-separated. |
| <code>--category</code> | Limit generation to named categories; comma-separated. |
| <code>--no-validate</code> | Skip the model-based runnability preflight. |
| <code>--force</code> | Interactive only; generate even when agent evidence and scenarios appear current. |
| Text after <code>--</code> | Focus generation on a business rule, threshold, or risk. |

~~~text
/generate --total 18 --class functional,adversarial -- verify identity, policy cutoff, duplicate requests, tool confirmation, and receipt evidence
~~~

**Notes**

- Start with 10 to 20 reviewable scenarios, and supply real identifiers and thresholds in the PRD or guidance.
- Generation writes scenario files under the active agent's project data; it does not invoke the live agent.
- A scenario can be well designed but unrunnable with the active profile. For example, it may need multi-turn state, native file input, tool-call observation, or write verification the profile does not expose.
- Skipping validation saves a pass but defers those findings; it does not make unsupported inputs executable.

### /profile {#profile}

A profile is the fixed, reviewable recipe Rook uses to invoke a live agent. Use <code>/profile</code> to connect HTTP, command, asynchronous, multi-turn, and artifact-producing targets. See also [invocation profile concepts](/support/docs/agent-assurance-profiles/).

~~~text
/profile
/profile add
/profile list
/profile use <name>
/profile show <name>
/profile edit <name>
/profile test <name>
/profile curl <name>
/profile rm <name>
~~~

~~~bash
rook profile list [name] [--entity <id>] [--json]
rook profile show [name] [--entity <id>] [--json]
rook profile use [name] [--entity <id>] [--json]
rook profile rm [name] [--entity <id>] [--json]
~~~

Creation, editing, testing, and cURL export are interactive in the current release.

**Typical setup**

1. Confirm the live staging request works outside Rook.
2. Run <code>/profile add</code>.
3. Name it by environment or variant (e.g. <code>refund-staging</code>).
4. Paste the cURL request or enter the local command.
5. Confirm which field receives the scenario goal and which carries conversation state.
6. Confirm the result extraction path.
7. Let Rook make one harmless probe call.
8. Approve the extracted response only when it is the agent's answer.

When you paste a cURL request, Rook lifts the Authorization value out of it, replaces it with <code>$&#123;ROOK_AGENT_TOKEN&#125;</code>, and securely asks for the value.

**Notes**

- Use separate profiles for staging, production read-only, fast-model, careful-model, or regional endpoints. Each run records the profile it used.
- Profiles are stored with the active agent below <code>.testmuai/rook/</code>. Adding or testing a profile invokes the target once; the test call is real.
- Not executable today: native attachment input; SSE, NDJSON, and WebSocket responses (recorded only); and direct MCP profiles via <code>/profile test</code> or <code>/run</code> (use an HTTP or command adapter).
- An unverified profile cannot become active.

### /scenarios {#scenarios}

Review what Rook generated, see whether each scenario can run with the active profile, and control inclusion without executing anything.

~~~text
/scenarios list
/scenarios exclude <ids>
/scenarios include <ids>
/scenarios delete <ids>
~~~

~~~bash
rook scenarios list [--entity <id>] [--json]
rook scenarios exclude <ids...> [--entity <id>]
rook scenarios include <ids...> [--entity <id>]
rook scenarios delete <ids...> [--entity <id>]
~~~

| Subcommand | Use |
|---|---|
| <code>list</code> | Show every scenario and current runnability. |
| <code>exclude</code> | Keep a scenario on disk but omit it from normal runs. |
| <code>include</code> | Re-enable an excluded scenario. |
| <code>delete</code> | Permanently remove the live scenario definition. |

**Notes**

- A skipped or unrunnable scenario is **not** an agent failure. It means the active profile lacks a required capability: multi-turn state, a supported transport, native file or image input, observable tool calls, or a safe way to verify an external write.
- Changing profiles can change runnability, so list again after <code>/profile use</code> or <code>/profile edit</code>.
- <code>list</code> does not change state; <code>exclude</code> and <code>include</code> update metadata; <code>delete</code> removes definitions from disk. Prefer <code>exclude</code> when you may need the scenario later.
- Scenario IDs are assigned during generation. Do not assume a category is always <code>SC-001</code>.

### /run {#run}

Execute selected scenarios against the live agent and produce evidence-backed verdicts. Run it after selecting an agent, generating scenarios, and activating a verified profile. **This command makes real calls to the live target.**

~~~text
/run [--only <ids>] [--class <list>] [--category <list>]
[--tag <list>] [--concurrency <n>] [--no-narrative]
[--rca] [-- selection in words]
~~~

~~~bash
rook run [--entity <id>] [--only <ids>] [--no-narrative] \
[--allow <exact-rule>] [--verbose] [--json]
~~~

Interactive class, category, tag, concurrency, natural-language selection, and RCA options are not exposed by the current headless command.

| Option | Purpose |
|---|---|
| <code>--only</code> | Run specified scenario IDs; comma-separated. |
| <code>--class</code> | Select functional, non-functional, or adversarial scenarios. |
| <code>--category</code> | Select scenario categories. |
| <code>--tag</code> | Select scenarios carrying any listed tag. |
| <code>--concurrency</code> | Number executed at once; interactive default is 3. |
| <code>--no-narrative</code> | Skip the model-written run summary. |
| <code>--rca</code> | Cluster failures and write a proposed remedy for each cause. |

:::warning Live effects
Rook does not sandbox or roll back the target agent. Refunds, bookings, emails, tickets, and file writes are real.
:::

**Notes**

- For a safe first run, use <code>/run --only SC-001 --concurrency 1 --no-narrative</code>. Review the preflight target, profile, scenario count, estimated credits, and write warning before approving.
- RCA (<code>--rca</code>) is an evidence-grounded hypothesis. Rook writes the proposal but does not modify your agent.
- Completed results are written below <code>.testmuai/rook/</code>.
- Press <code>Esc</code> to abort. Rook cancels an in-flight HTTP request or sends <code>SIGTERM</code> to an in-flight command, then preserves already-completed results.
- An interrupted target call may already have produced an external effect even when no response or verdict was recorded. Inspect the target system before retrying a write.
- **Unable to Verify** is not a failure. Check verification coverage before relying on the pass rate.
- In CI, exit code 0 describes verdicts produced. Also confirm the run record says the requested suite completed.

### /ui {#ui}

Inspect Rook's project files through a local, read-only browser view. The viewer starts with the interactive session and stops when that session exits; <code>/ui</code> reprints its URL and optionally opens the browser. See also [results and evidence](/support/docs/agent-assurance-results-and-evidence/).

~~~text
/ui
/ui --no-open
~~~

| Form | Behavior |
|---|---|
| <code>/ui</code> | Print the existing local viewer URL and open the default browser. |
| <code>/ui --no-open</code> | Print the existing viewer URL without opening a browser. |

**Notes**

- There is no top-level headless <code>rook ui</code> command; launch it from the TUI.
- After running at least one scenario: open the active agent, select a run, and open a scenario to inspect request, response, criteria, evidence, artifacts, and verification gaps. Compare later runs to see changed verdicts and coverage.
- Do not stop at the pass-rate card. For a refund flow, a "refund issued" sentence is the agent's claim; a read-only status lookup or independently observed record is stronger evidence; if neither exists, the criterion should be **Unable to Verify**.
- The viewer reads the current workspace's <code>.testmuai/rook/</code>, is bound to a local loopback address, and does not upload results.
- Pages can contain prompts, responses, paths, and evidence. Check screenshots for customer data and tokens before sharing.

### rook report {#rook-report}

Print stored verdicts without opening the TUI or browser viewer. See also [CI/CD and automation](/support/docs/agent-assurance-ci-cd/).

~~~bash
rook report
rook report <run-id>
rook report [run-id] --entity <agent-id>
rook report [run-id] --json
~~~

| Argument or option | Purpose |
|---|---|
| <code>run-id</code> | Select a stored run. When omitted, Rook reverse-sorts run IDs and selects the first. |
| <code>--entity</code> | Select the agent whose run data should be read. |
| <code>--json</code> | Produce machine-readable output. |

**Notes**

- Run IDs contain a one-second-precision timestamp plus a random suffix. If concurrent processes can start runs for the same agent in the same second, pass the exact run ID rather than relying on default ordering.
- This command only reads stored data; it does not call the live agent or generate a new narrative.
- Read verdict counts together with verification gaps and completion state: **Unable to Verify** criteria do not become failures, and an interrupted run may still contain valid completed scenarios.
- Use <code>--json</code> for stable parsing, and <code>/ui</code> for full request, response, and evidence detail.

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

- <code>/plan</code> is account-level information from TestMu AI; <code>/budget</code> is session-level information about what this Rook session has spent and its configured phase caps.
- The command changes nothing; it reads the authenticated account and credit balance.
- If authentication is missing or expired, run <code>/login</code> then <code>/auth status</code>.
- If the controller cannot be reached, run <code>/doctor</code>.
- For automation, use <code>rook plan --json</code>.

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

- <code>/auth</code> and <code>/auth status</code> perform the same status check; <code>rook whoami</code> is the convenient headless alias.
- The check reads the stored token and verifies it remotely. It does not print the token or change project data.
- Authentication is global to the Rook home on this machine, not scoped to one agent workspace.
- Troubleshooting: expired or revoked token, sign in again; controller unreachable, run <code>/doctor</code>; wrong account, run <code>/logout</code> then <code>/login</code> with the intended account.

### rook whoami {#rook-whoami}

#### Why Selection Comes First {#project-why-selection-comes-first}

Rook scopes the local agent tree below the project ID. Switching projects changes which active agent, features, scenarios, profiles, and runs Rook sees; switching back restores that project's previous active agent.

If access to the active project is revoked, Rook asks you to choose another project. Signing in again does not repair a project-level permission failure.

### /explore {#explore}

Use <code>/explore</code> to tell Rook what local material describes your agent. The target can be a PRD, an office document, an image, a documentation folder, an agent source directory, or a complete local repository.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-explore.png').default} alt="Rook explore command help with force and free-text guidance" width="2200" height="1160" className="doc_img"/>

#### Syntax {#explore-syntax}

```text
/explore [path] [instruction...] [--force] [--allow ] [--json] [--verbose]
```

From a shell, replace the leading slash with <code>rook</code>.

| Option | Purpose |
|---|---|
| <code>path</code> | Local file or directory. Defaults to the current directory. |
| <code>--force</code> | Re-read even when tracked files appear unchanged. |
| <code>instruction...</code> | Free-text guidance about what to emphasize or ignore. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Return machine-readable output for this command. |
| <code>--verbose</code> | Include tool activity and credit-use details. |

#### Real-world examples {#explore-real-world-examples}

PRD only:

```text
/explore docs/refund-agent-prd.md
```

PRD and knowledge base:

```text
/explore docs focus on PRD.md and knowledge, and treat them as intended behavior
```

Source workspace:

```text
/explore services/travel-agent
```

Headless:

```bash
rook explore docs/refund-agent-prd.md focus on refund approval rules --json
```

#### Step-by-step {#explore-step-by-step}

1. Select or create a project with <code>/project</code>, then choose the narrowest target path that contains enough evidence.
2. Add guidance when filenames alone do not express the intended scope.
3. Start exploration. Rook scans and hashes the target, and its discovery tools may read files immediately.
4. Review any later permission request before allowing a shell command or another gated operation.
5. Review the discovered features, tools, sources, and open questions.
6. Choose the active agent with <code>/agent</code>, generate scenarios, and use <code>/sync</code> when the local tree is ready to share.

#### State and evidence {#explore-state-and-evidence}

Discovery writes agent and feature records below the selected project's directory in <code>.testmuai/rook/projects/</code>. Incremental exploration reuses unchanged material; <code>--force</code> bypasses that optimization. Exploration is local-first and does not publish a new project version until <code>/sync</code> succeeds.

A PRD or knowledge base describes what should happen. It cannot prove which tools the deployed agent implements or whether a live action succeeded.

#### Limitations and errors {#explore-limitations-and-errors}

- URLs are rejected as exploration targets. For GitHub, clone your own repository and explore the local checkout.
- Rook extracts text and structure from PDF, DOCX, and XLSX files and can inspect common image formats. Password-protected, corrupt, or unsupported files are reported instead of silently treated as text.
- There is no pre-read approval screen. For a target inside the launch workspace, the path narrows discovery but is not a filesystem access boundary: discovery tools remain rooted at the launch workspace and can inspect sibling files. If siblings are sensitive, copy the allowed materials into an isolated workspace before starting Rook, or configure explicit deny rules.
- If the result contains the wrong boundary, rerun with a narrower path and explicit guidance.

### /agent {#agent}

Use <code>/agent</code> when the selected project contains several discovered agents or when you need to confirm which agent later phases use.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-agent.png').default} alt="Rook agent command help showing the use subcommand" width="2200" height="760" className="doc_img"/>

#### Syntax {#agent-syntax}

~~~text
/agent
/agent use <id>
~~~

From a shell:

~~~bash
rook whoami
rook whoami --json
~~~

**Notes**

- Use it to verify a workstation before testing, or to fail an automation setup step when the expected identity is unavailable (parse <code>--json</code> rather than matching the human display).
- It verifies the stored token and exits without changing project data or invoking an agent.
- If it reports no or invalid authentication, run <code>rook login</code>.
- If it reports the wrong account, log out first. Credentials are shared by Rook workspaces using the same Rook home.

### /login {#login}

Sign in through the TestMu AI browser authentication flow when Rook has no stored credential or the token is invalid.

~~~text
/login
~~~

## Profiles and Scenarios {#profiles-and-scenarios}

### /profile {#profile}

A profile names the reviewable hook scripts Rook uses to invoke a live agent. Use <code>/profile</code> to generate those scripts from a prompt, repair them from a failure, verify the target, inspect lifecycle phases, or select a profile.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Rook profile command help showing use, show, prompt-based add, fix, and test" width="2200" height="1680" className="doc_img"/>

#### Syntax {#profile-syntax}

~~~text
/profile
/profile use <id>
/profile show <id>
/profile add [name]
/profile add <name> --command '<argv>'
/profile add <name> --from <material-file>
/profile fix [id] [--what <text>]
/profile test [id] [--goal <text>]
~~~

The shell form uses <code>rook profile</code> with the same subcommands and options. Pipe a cURL command, integration description, or other material to <code>rook profile add &lt;name&gt;</code> when <code>--from</code> is omitted.

#### Subcommands {#profile-subcommands}

| Command | Effect |
|---|---|
| <code>/profile</code> | Open a TUI picker. In a shell, list profiles, mark the active one, and show unverified or missing-variable state. |
| <code>/profile use &lt;id&gt;</code> | Select an existing profile by ID. Verify it before using it for a run. |
| <code>/profile show &lt;id&gt;</code> | Print each lifecycle phase and script, non-default timeouts or delays, required variables, and reported capabilities. |
| <code>/profile add [name]</code> | Ask how the agent is reached, then generate scripts, run them, and correct them from the actual response. |
| <code>/profile add &lt;name&gt; --command</code> | Generate a hook script for the supplied local command line. Rook sends the goal through the generated script rather than requiring a template token in the command. |
| <code>/profile add &lt;name&gt; --from</code> | Generate from a file containing a cURL command, specification, Postman export, notes, paths, URLs, or a combination of material. |
| <code>/profile fix [id]</code> | Run a broken profile, diagnose the response or error, and repair its scripts. Add <code>--what</code> when you already know what changed. |
| <code>/profile test [id]</code> | Invoke once without a model rewrite, show what came back, and update observed capabilities when it succeeds. |

<code>add</code>, <code>fix</code>, and <code>test</code> also accept <code>--yes</code>, repeatable <code>--allow</code>, <code>--json</code>, and <code>--verbose</code>. All three can invoke the real target. Inspect write-capable calls and use a reply-only test goal before approving them. Profile authoring/repair can spend Rook credits; a profile test can still incur target-provider costs. Use broad approval only within a reviewed, command-scoped task.

Profile creation writes one or more <code>.mjs</code> scripts and maps them to <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, or <code>collect</code>. <code>execute</code> is required. Rook reads credential-shaped values from local environment variables and refuses literal assignments in generated scripts.

Verification is local to this machine because endpoint reachability is local. A newly authored profile is promoted automatically only after it returns an agent answer; profiles that have not been proved from this workspace remain visibly marked <code>unverified</code>. Run <code>/profile test</code> before selecting one manually.

Rook does not provide profile edit or remove commands. Profiles are plain files so changes can be reviewed and diffed with the rest of the workspace.

### /generate {#generate}

Use <code>/generate</code> after exploration to write test scenarios for the active agent's discovered features.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-generate.png').default} alt="Rook generate command help with total, class, category, force, allow, JSON, and verbose options" width="2200" height="1400" className="doc_img"/>

#### Syntax {#generate-syntax}

```text
/generate [options] [-- free-text instruction]
```

The shell form is <code>rook generate</code> with the same options.

| Option | Purpose |
|---|---|
| <code>--total &lt;n&gt;</code> | Approximate target size for the complete suite. |
| <code>--class &lt;names&gt;</code> | Comma-separated classes. Default: <code>functional,adversarial</code>. |
| <code>--category &lt;names&gt;</code> | Comma-separated scenario categories. |
| <code>--force</code> | Re-derive scenarios even when feature hashes are unchanged. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Return machine-readable output for this command. |
| <code>--verbose</code> | Show subagent activity and credits as work happens. |

```text
/generate --total 20 --class functional,adversarial
/generate --category boundary,integration -- emphasize retries and duplicate requests
```

Generation reads the current feature model, plans coverage, writes scenarios, and checks runnability. It does not invoke the live target. Unchanged features reuse their scenarios without a model call; <code>--force</code> intentionally bypasses that optimization.

Generated files remain editable. A scenario whose origin is human is not silently replaced during later generation.

### /scenarios {#scenarios}

Use <code>/scenarios</code> to inspect the active agent's suite and curate what runs by default.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-scenarios.png').default} alt="Rook scenarios command help showing list, exclude, include, and delete" width="2200" height="1040" className="doc_img"/>

#### Syntax {#scenarios-syntax}

~~~text
/scenarios
/scenarios list [--json]
/scenarios exclude <ids...> [--json]
/scenarios include <ids...> [--json]
/scenarios delete <ids...> [--json]
~~~

The shell form uses <code>rook scenarios</code>. <code>list</code> is the default subcommand, so <code>/scenarios</code> and <code>/scenarios list</code> are equivalent.

| Subcommand | Effect |
|---|---|
| <code>list</code> | Show what would run, stale or blocked scenarios, and reasons a profile cannot execute a scenario. |
| <code>exclude</code> | Keep scenarios on disk and in history, but omit them from default runs. |
| <code>include</code> | Return excluded scenarios to the default run set. |
| <code>delete</code> | Permanently remove the named local scenario files. |

Pass IDs as separate arguments for include, exclude, and delete, for example <code>rook scenarios exclude SC-004 SC-009 --json</code>. This differs from <code>run --only SC-004,SC-009</code>, which takes one comma-separated argument. Inspect <code>changed</code> and <code>unknown</code>: <code>ok: true</code> alone does not prove that a requested ID changed. Deletion is permanent; prefer exclusion when you only want to skip a case.

## Synchronization, Runs, and Results {#synchronization-runs-and-results}

### /status {#status}

Use <code>/status</code> to understand where the current machine stands before synchronizing or running tests.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-status.png').default} alt="Rook status command help showing agent and JSON options" width="2200" height="800" className="doc_img"/>

#### Syntax {#status-syntax}

~~~text
/status
/status --agent <id>
/status --json
~~~

The shell form is <code>rook status</code> with the same options.

#### Tree States {#status-tree-states}

| State | Meaning | Next action |
|---|---|---|
| <code>unsynced</code> | This agent has never been recorded upstream. | Run <code>/sync</code>. |
| <code>clean</code> | Local content matches the recorded version. | No action. |
| <code>ahead</code> | Local content changed after the last sync. | Review and run <code>/sync</code>. |
| <code>behind</code> | Upstream advanced while this machine stayed on an older version. | Reconcile upstream changes before syncing. |
| <code>diverged</code> | Local and upstream histories both moved. | Reconcile the branch; Rook does not overwrite it silently. |
| <code>unknown</code> | Local state is known, but upstream could not be checked. | Restore connectivity and rerun status. |

Status returns upstream run information for <code>--agent</code>, or for the active agent when the option is omitted. It identifies unfinished local runs and completed runs whose scenario results still need reconciliation.

Status exits successfully even when the tree is not clean; the state is data, not a command failure. In automation, inspect the <code>--json</code> response.

### /sync {#sync}

Use <code>/sync</code> after exploration, generation, profile changes, or manual edits to record the local project tree upstream.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-sync.png').default} alt="Rook sync command help showing agent and JSON options" width="2200" height="1000" className="doc_img"/>

#### Syntax {#sync-syntax}

~~~text
/sync
/sync --agent <id>
/sync --json
~~~

The shell form is <code>rook sync</code> with the same options.

#### What Sync Records {#sync-what-sync-records}

By default, Rook sends every local agent in the selected project as one transaction. The payload includes each agent's specification, features, scenarios, profiles, call relationships, and content hashes. Secret values are not included; profiles record required environment-variable names while hook scripts read values from <code>process.env</code>.

An agent version pins its specification, features, and scenarios. Profile revisions are recorded separately, so changing an endpoint does not create a new agent version.

#### No-op and Conflict Behavior {#sync-no-op-and-conflict-behavior}

- If nothing changed, Rook sends nothing and does not create a duplicate version.
- If local content changed, sync advances the upstream version.
- If another machine advanced the same agent first, Rook records the local version as a branch and reports the conflict instead of overwriting upstream state.
- An agent directory with no readable specification is skipped and reported.

Use <code>/status</code> before and after synchronization to see the local/upstream relationship.

#### Run Requirement {#sync-run-requirement}

A timeline run requires the agent to have been synchronized at least once. When the tree changes later, an attended run can ask whether to sync or use test mode. In CI, choose explicitly between <code>rook sync</code> and <code>rook run --test</code>.

### /run {#run}

Use <code>/run</code> to plan a selection, execute the active profile's lifecycle hooks, collect evidence, and judge each acceptance criterion.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-run.png').default} alt="Rook run command help with lifecycle phases, continuation, selection, profile, test, resume, and RCA options" width="2200" height="1720" className="doc_img"/>

#### Syntax {#run-syntax}

```text
/run [selection options] [-- free-text instruction]
```

The shell form is <code>rook run</code> with the same options.

| Option | Purpose |
|---|---|
| <code>--only &lt;ids&gt;</code> | Run only comma-separated scenario IDs. |
| <code>--class &lt;names&gt;</code> | Filter by <code>functional</code>, <code>non_functional</code>, or <code>adversarial</code>. |
| <code>--category &lt;names&gt;</code> | Filter by comma-separated categories. |
| <code>--tag &lt;names&gt;</code> | Filter by comma-separated tags. |
| <code>--profile &lt;ref&gt;</code> | Override the active profile for this run. |
| <code>--name &lt;name&gt;</code> | Give the run a readable label. |
| <code>--phases &lt;names&gt;</code> | Run only a contiguous selection of <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, <code>collect</code>, and <code>judge</code>. |
| <code>--skip &lt;names&gt;</code> | Run everything except the named phases. Cannot be combined with <code>--phases</code>. |
| <code>--concurrency &lt;n&gt;</code> | Run 1 to 8 scenarios at once. An explicit value overrides the planner. |
| <code>--test</code> | Run the current tree without placing the result on the shared project timeline. |
| <code>--run &lt;id&gt;</code> | Continue that same run in place with the phases selected by <code>--phases</code>. |
| <code>--resume &lt;id&gt;</code> | Carry compatible completed work forward from an earlier run. |
| <code>--rca</code> | Explain failure clusters and what to change; this spends additional credits. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Return a JSON outcome on stdout; progress goes to stderr. |
| <code>--verbose</code> | Show tool activity and credits as work happens. |

#### Examples {#run-examples}

```text
/run --only SC-001,SC-004 --concurrency 1
/run --class adversarial --profile staging --name security-gate
/run --test -- investigate the current unsynchronized changes
/run --phases prepare,open,execute,close
/run --run 01JABC... --phases collect,judge
/run --resume 01JABC... --rca
```

Before target execution, Rook writes and shows a run plan. In the TUI you can proceed, discard it, or describe a change. Headless runs proceed with the written plan, so use explicit filters in version-controlled CI configuration.

A normal timeline run requires an agent that has been synchronized at least once. If the current tree changed, use <code>/sync</code> or intentionally choose <code>--test</code>.

#### Lifecycle Phase Selection {#run-lifecycle-phase-selection}

The fixed order is:

```text
prepare → open → execute → close → collect → judge
```

The first five points are profile hooks; <code>judge</code> is Rook's evaluation phase. <code>prepare</code> runs once per run, <code>execute</code> runs once per turn, and <code>open</code>, <code>close</code>, and <code>collect</code> run per scenario when the profile defines them.

Partial execution is useful when logs or traces arrive later. Run the target through <code>close</code>, keep the run ID, then use <code>--run</code> to add <code>collect</code> and <code>judge</code> to the same run. This differs from <code>--resume</code>, which starts a new run and carries compatible completed work into it.

Rook sorts selected phases into lifecycle order and refuses an invalid hole when a later phase depends on a defined phase that was skipped.

:::warning Live side effects
The target's writes are real. Rook cannot roll them back. Use staging data and start with one harmless scenario.
:::

### /runs {#runs}

Use <code>/runs sync</code> when a run completed locally but a network or service interruption prevented all verdicts from reaching upstream.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-runs.png').default} alt="Rook runs command help showing the sync subcommand" width="2200" height="800" className="doc_img"/>

#### Syntax {#runs-syntax}

~~~text
/runs sync
/runs sync <agent-id>
~~~

From a shell:

~~~bash
rook login
rook login --json
~~~

**Steps**

1. Run <code>/login</code> or <code>rook login</code>.
2. Complete the flow in the browser.
3. Return to the terminal.
4. Verify with <code>/auth status</code> or <code>rook whoami</code>.

**Notes**

- Credentials are stored in the global Rook home, not the project directory. Do not copy that state into a repository or share it between users, and do not paste login callbacks or tokens into tickets or screenshots.
- Troubleshooting: wrong account in the browser, sign out there or use a separate browser profile and retry; status still invalid, run <code>/logout</code> then a fresh login; controller unreachable, diagnose with <code>rook doctor</code>.
- See the [installation guide](/support/docs/agent-assurance-quickstart/#install-and-authenticate-the-cli).

### /logout {#logout}

Revoke the current token and remove stored Rook credentials on this machine.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-report.png').default} alt="Rook report command help showing run ID, RCA, and allow options" width="2200" height="1160" className="doc_img"/>

~~~bash
rook logout
rook logout --json
~~~

**Notes**

The shell form is <code>rook report</code> with the same argument and options.

Without <code>--rca</code>, report is a free local read: it does not contact the target, create a session, or spend credits. With <code>--rca</code>, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable <code>--allow</code> rules only when an RCA verifier needs a reviewed tool operation in unattended execution. Report also accepts <code>--json</code> and <code>--verbose</code>; check the [output caveats](#structured-output-and-progress) before parsing paid analysis output.

#### Root-Cause Analysis for an Existing Run {#root-cause-analysis}

Use this when you already have a failed run and want to understand its failure clusters. It does not require another scenario run.

**1. Read the saved report.** Select the original workspace, project, and agent. Read the exact run's saved report and criterion evidence first:

```bash
rook report  --json
```

**2. Approve and run RCA.** Review the analysis scope and approve the additional Rook credit use. RCA can inspect source and use permitted verification tools; allow only the operations you have reviewed. Then request analysis for that same run:

```bash
rook report  --rca
```

**3. Review the explanation.** Read the updated report separately. This is the structured read, not a second RCA request:

```bash
rook report  --json
```

With a coding assistant, you can send this instead:

```text
Use the rook skill to investigate saved run RUN_ID without rerunning the agent.
First explain the failures from the recorded criteria and evidence. If Rook RCA
would help, explain its scope, tool access, and credit use and ask for approval.
After approval, run RCA for that exact run and summarize the cause, remedy,
confidence, affected scenarios, and cited evidence. Do not edit the agent or retry.
```

Inspect the report's <code>clusters</code> and any files under the run's <code>remedies/</code> directory. An explained cluster can contain:

| Field | What to review |
| --- | --- |
| <code>scenarios</code>, <code>why</code>, <code>kind</code> | Which failures or verification gaps were grouped and why. |
| <code>cause</code>, <code>remedy</code> | The proposed explanation and suggested change. These are hypotheses, not a verified patch. |
| <code>confidence</code>, <code>fault</code>, <code>where</code> | Confidence, attributed source of the problem, and cited locations when supplied. Missing fields mean unknown. |

Preserve **Pass**, **Fail**, and **Unable to Verify** as recorded. RCA does not turn an unverifiable result into a pass or establish that a proposed fix works. A previously explained, matching agent version may reuse its explanation; a changed or unknown version can require fresh paid analysis. Do not repeatedly request RCA to probe compatibility.

To include RCA with a new, already approved scenario run, add <code>--rca</code> to that run's explicit selection. Unlike report-only analysis, that also invokes the target. See [run selection](#run) before approving it.

#### Automation and Hosted Review {#rook-report-automation-and-hosted-review}

Use <code>rook report &lt;run-id&gt; --json</code> to read the structured local report. Successful command completion means the report was read, not that the agent passed. Besides totals, the report can carry <code>summary_claims</code> (the computed headline statements), <code>coverage_gaps</code>, and <code>redteam_coverage</code> for adversarial scenarios. Inspect its totals and the run’s completion using the [CI checks](/support/docs/agent-assurance-ci-cd/).

Use <code>rook ui</code> to open synchronized results in the [Web UI](/support/docs/rook-web-ui/) or <code>rook ui --local</code> for the files on this machine.

### /ui {#ui}

Use <code>/ui</code> to review synchronized results in the hosted TestMu AI application. Add <code>--local</code> to serve the evidence currently on disk.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ui.png').default} alt="Rook UI command help showing local and no-open options" width="2200" height="800" className="doc_img"/>

#### Syntax {#ui-syntax}

```text
/ui
/ui --local
/ui --local --no-open
```

The shell form is <code>rook ui</code> with the same options.

| Form | Result |
|---|---|
| <code>/ui</code> | Print and open the hosted application. It displays content recorded by sync and run uploads. |
| <code>/ui --local</code> | Start a loopback server over the current workspace's files and open it. |
| <code>--no-open</code> | Print the URL without launching a browser. |

The local viewer is read-only, makes no external request for workspace data, and does not require authentication or network access. It continues serving until the command or TUI session exits.

Use the hosted view for shared project history. Use <code>--local</code> for unsynchronized work, offline investigation, or the exact evidence present on this machine.

<span id="ui-stage-and-production" />

#### Hosted Web UI Access {#ui-hosted-access}

Open [rook.lambdatest.com/projects](https://rook.lambdatest.com/projects) or use the CLI shortcut:

```bash
export ROOK_ENV=prod
rook ui
```

Use the same environment for login, project selection, sync, and runs. Sign into the browser separately if prompted. If an older CLI opens a different address, use the public Projects link above and [update Rook](/support/docs/rook-installation/#verify-the-installation).

For local review, open **agent → Runs → run → scenario**; for hosted review, start with **project → agent → Runs → run → scenario**. Read the acceptance criteria, then select **Request**, **Response**, **Verdict**, or **Artefacts** in the **Evidence** panel to open the drawer. See the [earlier local layout](/support/docs/rook-web-ui/#earlier-local-ui) if your public CLI still has scrolling evidence sections.

The [combined UI walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows both layouts, screenshots, and missing-result troubleshooting. A loopback URL is not shareable with teammates; use an authorized hosted run link or an approved evidence bundle.

#### Local UI: What --local Opens {#local-ui-example}

The local landing page lists the selected workspace project's agents. Click an agent to reach its definitions and runs. This saved CommerceCare demo is an example workspace, not data supplied by the ui command or produced by the triage quickstart.

<img loading="lazy" src={require('../assets/images/rook/rook-local-agents.png').default} alt="Local Agents landing page opened by rook ui --local in the CommerceCare demo workspace" width="1440" height="900" className="doc_img"/>

#### Hosted Web UI: What the Default Opens {#hosted-ui-example}

The hosted application starts at **Projects**. Select the project and agent to review uploaded records. The screenshot shows the sample documentation project, not data created automatically by the ui command.

<img loading="lazy" src={require('../assets/images/rook/rook-web-projects.png').default} alt="Hosted Projects entry for the documentation sample project" width="1158" height="75" className="doc_img"/>

## Environment and Diagnostics {#environment-and-diagnostics}

### /env {#env}

Manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files. See also [invocation profiles](/support/docs/agent-assurance-profiles/).

~~~text
/env
/env list
/env set <key> [value]
/env show <key>
/env rm <key>
~~~

There is no top-level headless <code>rook env</code> command in the current release.

| Command | Effect |
|---|---|
| <code>/env list</code> | List variable names and masked values. |
| <code>/env set KEY</code> | Prompt securely for a value. |
| <code>/env set KEY value</code> | Set a value typed in the command line. |
| <code>/env show KEY</code> | Print the complete value into terminal scrollback. |
| <code>/env rm KEY</code> | Remove the stored value. |

**Notes**

- Recommended flow: <code>/env set ROOK_AGENT_TOKEN</code> → <code>/env list</code> → <code>/profile add</code>. Reference the variable in the profile request instead of embedding the credential.
- Avoid <code>/env set KEY value</code> for secrets: the value is visible while typing and may remain in history.
- Avoid <code>/env show</code> unless full disclosure into scrollback is intentional.
- Variables are stored with restrictive permissions in one file below the global Rook home, not in the workspace's <code>.testmuai/rook/</code> profile files.
- Each value is scoped to the current workspace's absolute path. A shell-exported variable shadows a stored value with the same name.
- If a secret is shown in a screenshot, rotate it immediately. Masking in <code>/env list</code> does not undo earlier disclosure.

### /mcp {#mcp}

Manage MCP servers that Rook can discover or use for read-only verification and controlled tool access. See also [MCP concepts](/support/docs/agent-assurance-mcp/).

~~~text
/mcp
/mcp list
/mcp enable <name>
/mcp disable <name>
/mcp approve <name>
~~~

~~~bash
rook mcp list [--json]
rook mcp get <name> [--json]
rook mcp add <name> [command...] [--scope local|project|user] \
[--transport stdio|http|sse|ws] [--url <url>] \
[--env <KEY=VALUE>] [--header <NAME:VALUE>] [--json]
rook mcp remove <name> [--scope local|project|user] [--json]
rook mcp enable <name> [--json]
rook mcp disable <name> [--json]
rook mcp approve <name> [--origin project|discovered] [--json]
~~~

For stdio servers, pass the command after the server name, using <code>--</code> to separate its arguments from Rook's options. The registry accepts declarations for <code>stdio</code>, <code>http</code>, <code>sse</code>, and <code>ws</code>; remote declarations require <code>--url</code>. Currently, only stdio connections execute. The other transports remain listed as <code>unsupported-transport</code>; accepting a declaration is not a successful connection.

#### Real-world verification example {#mcp-real-world-verification-example}

A refund agent says it issued a refund. Configure a separate MCP server that has a read-only <code>get_refund_status</code> tool:

~~~bash
rook mcp add refund-reader --scope project -- refund-mcp-server --read-only
rook mcp approve refund-reader --origin project
rook mcp enable refund-reader
~~~

Review the server definition and every exposed tool before approval. A verifier must not call <code>issue_refund</code> to check whether a refund exists; that would create the state it claims to observe.

#### Trust and state {#mcp-trust-and-state}

Project and discovered MCP definitions require explicit approval. Enable/disable controls project usability; approval records trust in the reviewed definition. A changed definition may require review again.

Use variable references for headers and environment values. <code>rook mcp get</code> leaves references unexpanded so inspection does not reveal the secret.

#### MCP Targets and Profile Hooks {#mcp-mcp-targets-and-profile-hooks}

Rook invocation profiles are script-based. To test an agent reached through MCP, describe its client flow to <code>/profile add</code>; Rook generates the <code>execute</code> hook that performs the call.

Enabled MCP servers in this command remain Rook tools for discovery or independent read-only verification. That registry is separate from the profile hook used to invoke the agent under test.

### /doctor {#doctor}

Use <code>/doctor</code> as the first diagnostic when Rook cannot authenticate, select a project, reach a service, or start normal work.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-doctor.png').default} alt="Rook doctor command help" width="2200" height="760" className="doc_img"/>

#### Syntax {#doctor-syntax}

~~~text
/doctor
/doctor --session <session-id>
~~~

From a shell:

~~~bash
rook doctor
rook doctor --session <session-id>
~~~

Doctor is intentionally ungated. It remains available when identity, project, connectivity, update, or budget state would block another command.

#### Output {#doctor-output}

Doctor reports:

- Exact Rook and Node.js versions.
- Workspace path and configured environment.
- Controller and API URLs, each with an independent reachability probe.
- Derived identity and authentication status.
- Active project, interaction mode, and TTY state.
- Overall connectivity state derived from identity and the two service probes.

A service that returns an HTTP refusal is still reachable. Doctor distinguishes “the service answered” from “the current credential or project may use it.” It does not test the agent endpoint in an invocation profile; use <code>/profile test</code> for that.

Doctor output can contain local paths, account state, and hostnames. Review it before attaching it to a public issue.

Use <code>--session</code> with a recorded Rook session ID to locate its diagnostic files. This does not probe that session's server-side registration, and a session ID is not the same as a scenario run ID.

### /update {#update}

Use <code>/update</code> to check for a newer public Rook release. It can also perform an upgrade for a recognized global npm or recorded shell installation, so treat it as an installation-changing command, not a read-only version check.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-update.png').default} alt="Rook update command help showing auto and JSON forms" width="2200" height="920" className="doc_img"/>

#### Syntax {#update-syntax}

```text
/update
/update auto
/update --json
```

The shell form is <code>rook update</code> with the same argument and option.

Public releases use semantic versions such as <code>0.1.11</code>. A recognized npm installation is updated at its recorded prefix; a recognized shell installation uses its recorded directory. Homebrew installations print the appropriate <code>brew upgrade</code> command instead. Project-local npm copies, older shell installs without a usable record, and ambiguous installations can require manual instructions. Review the output and verify <code>rook --version</code> afterward.

If you previously chose “never ask again” in the TUI update notice, run <code>/update auto</code> to re-enable automatic notices.

The latest public release checked on October 13, 2026 is [0.1.11](https://github.com/LambdaTest/rook/releases/tag/v0.1.11). Use the installed command's help for version-specific options. If an npm 0.1.1 or 0.1.2 install cannot update, follow the [public-registry repair command](/support/docs/rook-installation/#repair-an-npm-011-or-012-installation). Windows users can follow [PowerShell setup and upgrades](/support/docs/rook-installation/#windows).

## Export Diagnostic Logs {#export}

Export a local diagnostic bundle when a support investigation needs more than the error message. The shell command is <code>rook export logs</code>; in the TUI use <code>/export logs</code>.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-export.png').default} alt="Rook 0.1.5 interactive export help with output path and session selection options" width="2200" height="1000" className="doc_img"/>

```bash
rook export logs --out ./rook-diagnostics.zip
```

| Option | Purpose |
| --- | --- |
| --out &lt;path&gt; | Destination directory, or an archive ending in .zip or .tgz. |
| --session &lt;id&gt; | Also include the selected session transcript. |
| --all-sessions | Include every recorded session for this project. |

Use rook doctor --session &lt;session-id&gt; to identify relevant paths first. Start with the smallest useful bundle. Export does not upload the files, but the bundle can contain paths, session text, and sensitive target data. A bundled session includes its transcript (transcript.jsonl): every prompt Rook sent, every tool result the conversation carried, and every answer. Tool output can quote environment values, including values stored with env set. Review and redact before sharing; do not publish home credentials or raw transcripts.

## Migration From Older Examples

| Older syntax | Current Rook |
|---|---|
| --entity | Select with rook project use and rook agent use before the command. |
| profile list, agent list | Use bare profile or agent. |
| profile edit, profile curl, profile rm | Use profile fix, show, or deliberately edit the plain files. These subcommands are absent. |
| Fixed kind/invoke/result profile YAML | Generate reviewable hooks scripts with profile add. |
| explore --instruction, --all | Supply guidance after --; use current help for unattended approvals. |
| generate --no-validate | Removed. Review generated scenarios and current runnability. |
| run --no-narrative | Removed. |
| ui for a local server | Use ui --local; bare ui opens the hosted app. |

### /budget {#budget}

This older command is no longer available. Use /plan for account credits and read cost/progress output for the active operation.

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

This older command is no longer available. Exit and start rook again to begin another terminal session; project files remain on disk.

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

The plan, status, run, and normal report commands have structured output. Commands such as explore, generate, sync, profile operations, paid report --rca, and update can emit text even when they accept --json. Check the actual stdout before parsing it, then inspect the relevant saved files or make a separate structured read.

Leave the interactive terminal cleanly. There is no headless rook exit command because headless commands exit after completing their work.

~~~text
/exit
~~~

Process success and agent quality are separate. Do not use the older 0/1/2/3/4 mapping as a release gate: the current run/report paths can return success when an outcome or report was produced, even if its verdicts require attention.

- Requests a graceful stop for an active run, cancelling an in-flight HTTP request or sending SIGTERM to an in-flight command.
- Keeps completed scenario results on disk.
- Waits briefly for the run manifest and history to finalize before forcing process exit.
- Stops the local browser viewer started by the session.
- Exits the terminal.

**Notes**

## User-Configured Environment Variables

| Variable | Effect |
|---|---|
| `ROOK_HOME` | Credentials, environment values, history, and local state. Default: `~/.testmuai/rook`. |
| `ROOK_ENV` | Deployment selection; public packages default to `prod`. An unrecognized value stops the command with an error. Keep the setting consistent for login, project operations, synchronization, and hosted review. |
| `LT_USERNAME`, `LT_ACCESS_KEY` | Account credentials for unattended authentication. Provide both; they override stored browser-login credentials. |
| `ROOK_API_URL` | Overrides the versioned Rook API base URL. |
| `ROOK_CONTROLLER_URL` | Overrides the controller base URL. |
| `ROOK_AUTH_BASE_URL` / `AUTH_URL` | Overrides the authentication base URL. |
| `ROOK_USER_AUTH_URL` / `USER_AUTH_URL` | Supplies a full user-auth endpoint rather than a base. |
| `ROOK_SPRITE` | Controls boot animation; `--no-animation` disables it for one launch. |

The public shell installer accepts `--version` and `--dir` command-line options. It does not require a GitHub token or use installer-specific `ROOK_*` variables. See [Install Rook](/support/docs/rook-installation/).

## Hook Context Variables

Rook sets these for profile hooks:

| Variable | Meaning |
|---|---|
| `ROOK_HOOK` | `prepare`, `open`, `execute`, `close`, or `collect` |
| `ROOK_RUN_ID` | Current run |
| `ROOK_SCENARIO_ID` | Current scenario |
| `ROOK_SESSION` | Stable Rook session for the scenario |
| `ROOK_TURN` | Current turn number |
| `ROOK_CONVERSATION` | Target conversation handle returned by the hook |
| `ROOK_STATE_DIR` | State directory for the scenario lifecycle |
| `ROOK_RUN_STATE_DIR` | Shared state across the whole run |
| `ROOK_WORKSPACE` | Absolute workspace path |
| `ROOK_PROJECT` | Active project ID |
| `ROOK_AGENT` | Active local agent ID |

Rook-owned values override conflicting hook configuration. See [Profiles and Hooks](/support/docs/rook-profiles-and-hooks/) for phase availability.

## Interactive Keys

| Key | Behavior |
|---|---|
| **Tab** | Accept the highlighted completion or inline suggestion. |
| **↑ / ↓** | Move through completion results, or command history when no menu is open. |
| **← / →** | Move the caret; with **Option/Alt**, move by word. |
| **Esc** | Close a menu; clear an empty line; discard queued work and then interrupt a running command; decline a prompt. |
| **Ctrl-A / Ctrl-E** | Move to the beginning or end of the line. |
| **Ctrl-B / Ctrl-F** | Move back or forward one character. |
| **Ctrl-U / Ctrl-K** | Delete before or after the caret. |
| **Ctrl-W** | Delete the previous word. |
| **Ctrl-C** | Exit the TUI; do not rely on it only clearing input. Use **Ctrl-U** to clear the line before the caret and **Esc** to request interruption. |
| **Ctrl-N** | Create a project from the project picker. |
| **j / k** | Move down or up in a choice list. |
| **Space** | Toggle an item in a multi-select list. |
| **a** | Select every item in a multi-select list. |
| `/exit` or `/quit` | Leave the interactive session. |

## Defaults

| Setting | Default |
|---|---|
| Generated classes | `functional,adversarial` |
| Scenarios per model call | 4; larger requests fan out across writers |
| Scenario concurrency | Profile value, otherwise 1; allowed range 1–8 |
| `prepare` timeout | 60 seconds |
| `open` timeout | 30 seconds |
| `execute` timeout | 300 seconds |
| `close` timeout | 30 seconds, with a 5-second floor |
| `collect` timeout | 120 seconds |
| Consecutive transport failures before halt | 3 |
| Interactive history | 100 lines |

## Headless Detection

Rook refuses uncovered prompts instead of hanging when `--yes` is present, standard input is not a TTY, or a supported runner variable exists. The presence of `CI`, even with the string value `false`, still identifies a pipeline environment.

## Next Steps

[Run tests](/support/docs/agent-assurance-run-tests/) · [Profiles, hooks, and lifecycle](/support/docs/rook-profiles-and-hooks/) · [CI completion checks](/support/docs/agent-assurance-ci-cd/) · [Troubleshooting](/support/docs/agent-assurance-troubleshooting/)
