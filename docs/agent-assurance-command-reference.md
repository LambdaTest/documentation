---
id: agent-assurance-command-reference
toc_max_heading_level: 3
title: Rook CLI Reference
hide_title: false
sidebar_label: CLI Reference
description: Use Rook 0.1.3 commands, syntax, examples, shared flags, variables, exit codes, and terminal controls in one reference.
keywords:
  - rook commands
  - rook cli reference
  - rook slash commands
  - rook command reference
url: https://www.testmuai.com/support/docs/agent-assurance-command-reference/
site_name: TestMu AI
slug: agent-assurance-command-reference/
canonical: https://www.testmuai.com/support/docs/agent-assurance-command-reference/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Rook CLI Reference",
          "item": `${BRAND_URL}/support/docs/agent-assurance-command-reference/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-command-reference/"
    },
    "headline": "Rook CLI Reference",
    "description": "Use Rook 0.1.3 commands, syntax, examples, shared flags, variables, exit codes, and terminal controls in one reference.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-command-reference/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook commands",
      "rook cli reference",
      "rook slash commands"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-11"
  }) }}
/>

# Rook CLI Reference

Use `rook` to start the interactive terminal, or `rook <command>` from your shell. This page contains the **Rook 0.1.3** command syntax, options, examples, state changes, shared flags, environment variables, and exit behavior together. Commands that invoke the target or spend credits still require appropriate approval.

<span id="command-index" />

## Find a Command

- [Terminal and Help](#terminal-and-help): `rook`, `ask`, `guide`, `help`, `docs`, `clear`, `exit`.
- [Account and Authentication](#account-and-authentication): `login`, `auth`, `whoami`, `logout`, `plan`.
- [Projects and Discovery](#projects-and-discovery): `project`, `explore`, `agent`.
- [Profiles and Scenarios](#profiles-and-scenarios): `profile`, `generate`, `scenarios`.
- [Synchronization, Runs, and Results](#synchronization-runs-and-results): `status`, `sync`, `run`, `runs`, `report`, `ui`.
- [Environment and Diagnostics](#environment-and-diagnostics): `env`, `mcp`, `doctor`, `update`.
- [Shared flags and structured output](#structured-output-and-progress), [exit codes](#exit-codes), [environment variables](#user-configured-environment-variables), and [interactive keys](#interactive-keys).

## First Journey

```text
login → project → explore → agent → profile add → generate → scenarios → sync → run → ui
```

Follow the [tested quickstart](/support/docs/agent-assurance-quickstart/) for a runnable sample. A normal timeline run needs sync first; `run --test` deliberately stays local.

## Discover Syntax From the CLI

```bash
rook --version
rook --help
rook run --help
rook profile add --help
```

Inside the terminal, use `/help run`. Do not paste slash commands into a normal shell.

## Terminal and Help {#terminal-and-help}

### rook {#rook}

Use <code>rook</code> to start the interactive terminal in the workspace whose agent material and testing state you want to use.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Current Rook terminal home and workflow" className="doc_img"/>

</details>

#### Syntax {#rook-syntax}

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

The TUI keeps the active project, agent, profile, credits, command duration, progress, and permission questions visible. Use <code>--no-animation</code> for recordings, slow terminals, or a static startup.

#### First Start {#rook-first-start}

1. Change to the workspace containing your checked-out agent, PRD, or test specification.
2. Run <code>rook</code>.
3. Use <code>/login</code> if the session is not authenticated.
4. Choose a project with <code>/project</code>.
5. Enter <code>/guide</code> for the workflow or <code>/help</code> for every command.

Run Rook from the intended workspace. The current directory selects the local <code>.testmuai/rook/</code> store; project content is kept below <code>projects/&lt;project-id&gt;/</code>. The workspace is also the base for relative source, command, certificate, and evidence paths.

### rook ask {#rook-ask}

Use <code>rook ask</code> for one natural-language orchestrator turn without opening the TUI. Inside the TUI, prose entered without a leading slash follows the same classify-and-dispatch path.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ask.png').default} alt="Current Rook ask command help showing JSON and verbose options" className="doc_img"/>

</details>

#### Syntax {#rook-ask-syntax}

```bash
rook ask <prompt...>
rook ask <prompt...> --verbose
rook ask <prompt...> --json
```

| Option | Purpose |
|---|---|
| <code>--verbose</code> | Show subagent activity, tool activity, and credits while the request runs. |
| <code>--json</code> | Return machine-readable output for this command. |

The orchestrator can answer questions from Rook workspace state or dispatch an existing command. Requests that spend credits, invoke a target, or need permission still pass through the same gates as the explicit command.

```bash
rook ask "Which agent is active and is its tree synchronized?"
rook ask "Run only the boundary scenarios with the staging profile"
rook ask "Explain the latest failures" --verbose
```

For deterministic automation, prefer the explicit command and flags. Natural language is useful for attended work and one-off requests, but it is not a stable machine interface.

### /guide {#guide}

Use <code>/guide</code> when you know you want to test an agent but do not yet know which command comes next.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-guide.png').default} alt="Current Rook guide command help" className="doc_img"/>

</details>

#### Syntax {#guide-syntax}

~~~text
/guide
~~~

The shell form is <code>rook guide</code>.

The guide covers this sequence:

~~~text
login → project → explore → agent → generate → profile → run → sync
~~~

The built-in guide presents <code>run</code> before <code>sync</code>, but a normal timeline run requires an upstream project version. In a new project, synchronize the reviewed tree before the first normal run; use <code>run --test</code> only when the draft run should stay local.

The guide also explains which operations spend credits, where local files live, why secrets never synchronize, and how to inspect status at any point. It reads command metadata and state; it does not invoke the target or spend credits.

### /help {#help}

Use <code>/help</code> to list the current command surface or inspect one command in full.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-help.png').default} alt="Current Rook help command help" className="doc_img"/>

</details>

#### Syntax {#help-syntax}

~~~text
/help
/help <command>
~~~

From a shell:

~~~bash
rook help
rook help <command>
~~~

The overview groups commands into the testing sequence, workspace operations, and session/product operations. Command-specific help lists subcommands separately from cumulative options.

Help, slash-command completion, and shell parsing are derived from the same command registry. A renamed flag therefore changes all three surfaces together.

### /docs {#docs}

Use <code>/docs</code> to print and open the public Rook repository.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-docs.png').default} alt="Rook docs command help showing the no-open option" className="doc_img"/>

</details>

#### Syntax {#docs-syntax}

~~~text
/docs
/docs --no-open
~~~

The shell form is <code>rook docs</code> with the same option.

<code>--no-open</code> prints the URL without launching a browser. The command does not require a selected project, invoke an agent, or spend credits.

### /clear {#clear}

Enter <code>/clear</code> in the TUI to clear retained command-output state and return to the prompt.

~~~text
/clear
~~~

This does not delete projects, agents, scenarios, profiles, runs, evidence, credentials, variables, permissions, or authentication. The startup context remains because it belongs to the current TUI session. Output already committed to terminal scrollback can remain visible until the terminal itself is cleared or Rook is restarted.

There is no <code>rook clear</code> shell command.

### /exit {#exit}

Enter <code>/exit</code> or <code>/quit</code> at an idle TUI prompt to close Rook.

~~~text
/exit
/quit
~~~

Rook waits for pending job-end records to settle and stops any local evidence viewer owned by the session. Exiting does not log out or delete project files.

While a command is running, press <code>Esc</code> to request an orderly interruption. Completed scenario evidence is preserved. Pressing <code>Ctrl+C</code> exits the TUI and also runs the exit bookkeeping path.

There is no <code>rook exit</code> shell command.

## Account and Authentication {#account-and-authentication}

### /login {#login}

Use <code>/login</code> when Rook has no stored credential or the existing token is invalid.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-login.png').default} alt="Rook login command help" className="doc_img"/>

</details>

#### Syntax {#login-syntax}

Interactive:

```text
/login
```

Headless launcher:

```bash
rook login
```

#### Choose the Environment {#login-choose-the-environment}

Public packages default to production. Use <code>ROOK_ENV=prod</code> with the [hosted Web UI](https://rook.lambdatest.com/projects). Browser sessions and CLI credentials are separate; use the same account and environment in both.

#### Unattended Authentication {#login-unattended-authentication}

Rook 0.1.3 accepts <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> from the shell or CI secret manager. When both are present, operations use them ahead of any stored browser login. Supplying only one is an error.

<code>rook login</code> also accepts <code>--username</code>, <code>--access-key</code>, and <code>--oauth</code>. Prefer secret-manager environment injection over literal command arguments. To use a stored OAuth account consistently, unset both LT variables in that terminal; forcing OAuth login does not stop exported credentials taking precedence in later commands.

#### Step-by-step {#login-step-by-step}

1. Run <code>/login</code> or <code>rook login</code>.
2. Complete the TestMu AI flow in the browser.
3. Return to the terminal.
4. Verify the identity with <code>/auth status</code> or <code>rook whoami</code>.

#### State and security {#login-state-and-security}

Successful login stores credentials in the global Rook home, not the project directory. Do not copy that state into a repository or share it between users.

If a browser cannot open, follow the URL or instruction printed by the command. Do not paste login callbacks or tokens into tickets or screenshots.

#### Common problems {#login-common-problems}

- Browser opens with the wrong account: sign out there or use a separate browser profile, then retry.
- Status still invalid: check <code>ROOK_ENV</code> and whether exported LT credentials override the stored login before signing in again.
- Controller unreachable: diagnose network and environment with <code>rook doctor</code>.

### /auth {#auth}

Use <code>/auth</code> to verify the effective credentials against the Rook controller.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-auth.png').default} alt="Rook auth command help showing the status subcommand" className="doc_img"/>

</details>

#### Syntax {#auth-syntax}

```text
/auth
/auth status
```

Headless:

```bash
rook auth status
rook whoami
```

<code>/auth</code> and <code>/auth status</code> perform the same status check. <code>rook whoami</code> is the convenient headless alias.

#### Step-by-step {#auth-step-by-step}

1. Run <code>/auth status</code>.
2. Confirm that the effective credentials and environment are correct.
3. If invalid, use <code>/login</code>.
4. Run the status check again.

#### State and privacy {#auth-state-and-privacy}

The status check verifies the effective authentication remotely. Exported <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> take precedence over a stored token. It does not print the token or change project data. Use <code>rook whoami</code> when you also want to see the authenticated identity.

Stored authentication is shared by sessions using the same Rook home, profile, and environment, not scoped to one agent workspace. See [login](#login) for environment selection and unattended authentication.

#### Common problems {#auth-common-problems}

- Expired or revoked token: sign in again.
- Controller unreachable: run <code>/doctor</code> and check network access.
- Wrong account: check exported LT credentials and the selected environment before changing stored login.

### rook whoami {#rook-whoami}

Use <code>rook whoami</code> outside the interactive terminal to verify which TestMu AI account is authenticated.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-whoami.png').default} alt="Rook whoami command help" className="doc_img"/>

</details>

#### Syntax {#rook-whoami-syntax}

```bash
rook whoami
```

This is an alias for:

```bash
rook auth status
```

#### Real-world uses {#rook-whoami-real-world-uses}

Verify a workstation before testing:

```bash
rook whoami
rook plan
```

Fail an automation setup step when a Rook identity is unavailable:

```bash
rook whoami
```

#### State and errors {#rook-whoami-state-and-errors}

The command verifies the effective credentials, prints the account identity, and exits. It does not change project data or invoke an agent. Its output is human-readable in the current release.

Check <code>ROOK_ENV</code> and the exported <code>LT_USERNAME</code>/<code>LT_ACCESS_KEY</code> pair first: that pair overrides stored browser authentication. Unset both if you intend to use OAuth, then run <code>rook login</code> when required. Stored credentials are shared within the same Rook home, profile, and environment.

### /logout {#logout}

Use <code>/logout</code> to revoke the current token and remove stored Rook credentials.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-logout.png').default} alt="Rook logout command help" className="doc_img"/>

</details>

#### Syntax {#logout-syntax}

Interactive:

```text
/logout
```

Headless:

```bash
rook logout
```

#### When to use it {#logout-when-to-use-it}

- Switch to another TestMu AI account.
- Remove access from a shared workstation.
- Reset a credential that is invalid or unexpectedly scoped.

#### Effect {#logout-effect}

A logout asks the server to revoke the token and then clears the locally stored credential. Local cleanup happens even when remote revocation cannot be confirmed. It does not delete agents, profiles, scenarios, run evidence, or environment variables.

If remote revocation fails—for example, while offline—the credential is still removed from this machine, but the token may remain valid elsewhere. Because the local copy is gone, retrying logout cannot revoke that token. On a shared or lost workstation, use the account's security controls to revoke active access when you are online.

Credentials are global for Rook terminals using the same Rook home. Logging out in one workspace affects other active or future Rook sessions on that machine.

#### Real-world account switch {#logout-real-world-account-switch}

```text
/logout
/login
/auth status
```

The TUI input is disabled during an active run. Press <code>Esc</code>, wait for the prompt to return, inspect the target if a write may have occurred, and then log out.

#### Common problems {#logout-common-problems}

- Offline logout still removes the local credential, but it may leave server-side revocation unconfirmed. Verify account access through the account's security controls when online.
- If another terminal still appears authenticated, refresh its status. Do not assume cached UI text reflects the current token.



Exported <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> are separate from stored login. Logging out does not remove those variables from your shell or CI secret manager; unset both when you intend to stop using them. See [login](#login).

### /plan {#plan}

Use <code>/plan</code> to check the TestMu AI account plan and credit balance before generating or executing a suite.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-plan.png').default} alt="Rook plan command help" className="doc_img"/>

</details>

#### Syntax {#plan-syntax}

~~~text
/plan
~~~

Headless:

~~~bash
rook plan
~~~

#### Real-world use {#plan-real-world-use}

Before generating 50 refund scenarios:

~~~text
/plan
/generate --total 15
~~~

The plan response is account-level information from TestMu AI. During a long operation, the TUI status bar also shows the balance and credits used by the current session.

#### What changes {#plan-what-changes}

Nothing in the project is changed. The command reads the authenticated account and credit balance.

#### Common problems {#plan-common-problems}

- If authentication is missing or expired, run <code>/login</code> and <code>/auth status</code>.
- If the controller cannot be reached, run <code>/doctor</code>.
- In automation, treat the command's exit status as the health check; <code>plan</code> currently prints human-readable output.

## Projects and Discovery {#projects-and-discovery}

### /project {#project}

Use <code>/project</code> to choose the TestMu AI project that owns discovered agents, versions, and runs in the current workspace.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-project.png').default} alt="Rook project command help showing use and create subcommands" className="doc_img"/>

</details>

#### Syntax {#project-syntax}

~~~text
/project
/project use <id>
/project create <name>
~~~

From a shell:

~~~bash
rook project
rook project use <id>
rook project create <name>
~~~

#### Behavior {#project-behavior}

| Command | Effect |
|---|---|
| <code>/project</code> | Open a TUI picker. In a shell, print available projects and mark the active one. |
| <code>/project use &lt;id&gt;</code> | Validate the project against TestMu AI and save it as the active project for this workspace. |
| <code>/project create &lt;name&gt;</code> | Create a project and select it immediately. |

The active-project pointer is stored locally, alongside a separate working tree for each selected project. TestMu AI remains the authority for the projects the account can access.

#### Why Selection Comes First {#project-why-selection-comes-first}

Rook scopes the local agent tree below the project ID. Switching projects changes which active agent, features, scenarios, profiles, and runs Rook sees; switching back restores that project's previous active agent.

If access to the active project is revoked, Rook asks you to choose another project. Signing in again does not repair a project-level permission failure.

### /explore {#explore}

Use <code>/explore</code> to tell Rook what local material describes your agent. The target can be a PRD, an office document, an image, a documentation folder, an agent source directory, or a complete local repository.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-explore.png').default} alt="Rook explore command help with force and free-text guidance" className="doc_img"/>

</details>

#### Syntax {#explore-syntax}

```text
/explore [path] [instruction...] [--force] [--allow <exact-rule>] [--json] [--verbose]
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

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-agent.png').default} alt="Current Rook agent command help showing the use subcommand" className="doc_img"/>

</details>

#### Syntax {#agent-syntax}

~~~text
/agent
/agent use <id>
~~~

From a shell:

~~~bash
rook agent
rook agent use <id>
~~~

Bare <code>/agent</code> opens a picker and marks the active agent. Bare <code>rook agent</code> prints the same inventory. There is no separate <code>list</code> subcommand.

Selecting an agent changes the active-agent pointer inside the selected project; it does not invoke the live target. The active agent determines which specification, features, scenarios, profiles, runs, reports, and sync state later commands use.

Agent removal is intentionally not a command. Rook's project data is stored as readable files; remove or edit it through the reviewed repository workflow when that is genuinely required.

#### Example {#agent-example}

~~~text
/agent
/agent use refund-agent
/generate --total 12 -- focus on eligibility and duplicate refunds
~~~

## Profiles and Scenarios {#profiles-and-scenarios}

### /profile {#profile}

A profile names the reviewable hook scripts Rook uses to invoke a live agent. Use <code>/profile</code> to generate those scripts from a prompt, repair them from a failure, verify the target, inspect lifecycle phases, or select a profile.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Current Rook profile command help showing use, show, prompt-based add, fix, and test" className="doc_img"/>

</details>

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

<code>add</code> and <code>fix</code> also accept <code>--yes</code>, repeatable <code>--allow</code>, <code>--json</code>, and <code>--verbose</code>. Use approval bypasses only for a reviewed, launch-scoped authoring task.

Profile creation writes one or more <code>.mjs</code> scripts and maps them to <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, or <code>collect</code>. <code>execute</code> is required. Rook reads credential-shaped values from local environment variables and refuses literal assignments in generated scripts.

Verification is local to this machine because endpoint reachability is local. A newly authored profile is promoted automatically only after it returns an agent answer; profiles that have not been proved from this workspace remain visibly marked <code>unverified</code>. Run <code>/profile test</code> before selecting one manually.

Rook does not provide profile edit or remove commands. Profiles are plain files so changes can be reviewed and diffed with the rest of the workspace.

### /generate {#generate}

Use <code>/generate</code> after exploration to write test scenarios for the active agent's discovered features.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-generate.png').default} alt="Current Rook generate command help with total, class, category, force, allow, JSON, and verbose options" className="doc_img"/>

</details>

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
/generate --category boundary,reliability -- emphasize retries and duplicate requests
```

Generation reads the current feature model, plans coverage, writes scenarios, and checks runnability. It does not invoke the live target. Unchanged features reuse their scenarios without a model call; <code>--force</code> intentionally bypasses that optimization.

Generated files remain editable. A scenario whose origin is human is not silently replaced during later generation.

### /scenarios {#scenarios}

Use <code>/scenarios</code> to inspect the active agent's suite and curate what runs by default.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-scenarios.png').default} alt="Current Rook scenarios command help showing list, exclude, include, and delete" className="doc_img"/>

</details>

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

Use explicit IDs. Unknown IDs are reported so a typo cannot look like a successful exclusion.

## Synchronization, Runs, and Results {#synchronization-runs-and-results}

### /status {#status}

Use <code>/status</code> to understand where the current machine stands before synchronizing or running tests.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-status.png').default} alt="Rook status command help showing agent and JSON options" className="doc_img"/>

</details>

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

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-sync.png').default} alt="Rook sync command help showing agent and JSON options" className="doc_img"/>

</details>

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

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-run.png').default} alt="Current Rook run command help with lifecycle phases, continuation, selection, profile, test, resume, and RCA options" className="doc_img"/>

</details>

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

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-runs.png').default} alt="Rook runs command help showing the sync subcommand" className="doc_img"/>

</details>

#### Syntax {#runs-syntax}

~~~text
/runs sync
/runs sync <agent-id>
~~~

From a shell:

~~~bash
rook runs sync
rook runs sync <agent-id>
~~~

The active agent is used when no ID is supplied.

#### What It Does {#runs-what-it-does}

Rook reads completed run evidence already on disk and posts only records still owed upstream. It does not invoke the target, rejudge scenarios, call a model, or spend credits.

This command repairs result synchronization. Use <code>/sync</code> for agent specifications, features, scenarios, and profile revisions.

### /report {#rook-report}

Use <code>/report</code> to read a stored run from disk. Without a run ID, Rook uses the most recent run for the active agent.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-report.png').default} alt="Current Rook report command help showing run ID, RCA, and allow options" className="doc_img"/>

</details>

#### Syntax {#rook-report-syntax}

```text
/report [run-id]
/report [run-id] --rca
/report [run-id] --rca --allow '<rule>'
```

The shell form is <code>rook report</code> with the same argument and options.

Without <code>--rca</code>, report is a free local read: it does not contact the target, create a session, or spend credits. With <code>--rca</code>, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable <code>--allow</code> rules only when an RCA verifier needs a reviewed tool operation in unattended execution.



#### Automation and Hosted Review {#rook-report-automation-and-hosted-review}

Use <code>rook report &lt;run-id&gt; --json</code> to read the structured local report. Successful command completion means the report was read, not that the agent passed. Inspect its totals and the run’s completion using the [CI checks](/support/docs/agent-assurance-ci-cd/).

Use <code>rook ui</code> to open synchronized results in the [Web UI](/support/docs/rook-web-ui/) or <code>rook ui --local</code> for the files on this machine.

### /ui {#ui}

Use <code>/ui</code> to review synchronized results in the hosted TestMu AI application. Add <code>--local</code> to serve the evidence currently on disk.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ui.png').default} alt="Current Rook UI command help showing local and no-open options" className="doc_img"/>

</details>

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

For local review, open **agent → runs → run → scenario**, then scroll through **criteria**, **sent to the agent**, **what came back**, and **files**. For hosted review, open **project → agent → Runs → run → scenario** and use **Request**, **Response**, **Verdict**, and **Artefacts**.

The [combined UI walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows both layouts, screenshots, and missing-result troubleshooting. A loopback URL is not shareable with teammates; use an authorized hosted run link or an approved evidence bundle.

#### Local UI: What --local Opens {#local-ui-example}

The local landing page lists the selected workspace project's agents. Click an agent to reach its definitions and runs. This populated sample is the result of the quickstart, not data supplied by the ui command.

<img loading="lazy" src={require('../assets/images/rook/rook-local-agents.png').default} alt="Local agents landing page opened by rook ui --local in the sample workspace" width="1440" height="400" className="doc_img"/>

#### Hosted Web UI: What the Default Opens {#hosted-ui-example}

The hosted application starts at **Projects**. Select the project and agent to review uploaded records. The screenshot shows the sample documentation project, not data created automatically by the ui command.

<img loading="lazy" src={require('../assets/images/rook/rook-web-projects.png').default} alt="Hosted Projects landing page showing the documentation sample project" width="1440" height="224" className="doc_img"/>

## Environment and Diagnostics {#environment-and-diagnostics}

### /env {#env}

Use <code>/env</code> to manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-env.png').default} alt="Rook environment command help with list set show and remove" className="doc_img"/>

</details>

#### Syntax {#env-syntax}

~~~text
/env
/env list
/env set <json>
/env show <key>
/env rm <key>
~~~

The same commands work from a shell by replacing the leading slash with <code>rook</code>, for example <code>rook env list</code> and <code>rook env set '&#123;"API_KEY":"…"&#125;'</code>.

#### Subcommands {#env-subcommands}

| Command | Effect |
|---|---|
| <code>/env list</code> | List variable names and masked values. |
| <code>/env set &#123;"KEY":"value"&#125;</code> | Set one or several string values from one JSON object. Names are normalized to uppercase. |
| <code>/env show KEY</code> | Print the complete value into terminal scrollback. |
| <code>/env rm KEY</code> | Remove the stored value. |

#### Recommended secret flow {#env-recommended-secret-flow}

~~~text
/env set {"REFUND_API_TOKEN":"paste-value-here","AGENT_BASE_URL":"https://staging.example.com"}
/env list
/profile add staging
~~~

The generated hook script reads <code>process.env.REFUND_API_TOKEN</code>, and the profile records only the variable name and its purpose.

The current command requires the value as an argument. For sensitive values, prefer an attended TUI session and clear the terminal afterward; a shell command can remain in shell history. Avoid <code>/env show</code> unless full disclosure into scrollback is intentional.

#### Storage and scope {#env-storage-and-scope}

Variables are stored with restrictive permissions in one file below the global Rook home. They are not written into the workspace's <code>.testmuai/rook/</code> profile files.

Each value is scoped to the current workspace's absolute path. Another workspace using the same Rook home does not inherit it. A variable exported by the shell shadows a different stored value with the same name.

When <code>/profile add</code> finds a credential in supplied material, the generated script must read it from an environment variable. Use the exact name shown by the authoring flow.

#### Common problems {#env-common-problems}

- Missing-variable profile error: set the exact case-sensitive key.
- Wrong endpoint or account: remove and reset the value, then rerun <code>/profile test</code>.
- Secret shown in a screenshot: rotate it immediately; masking in <code>/env list</code> does not undo earlier disclosure.

### /mcp {#mcp}

Use <code>/mcp</code> to manage MCP servers that Rook can discover or use for read-only verification and controlled tool access.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-mcp.png').default} alt="Rook MCP command help with list enable disable and approve" className="doc_img"/>

</details>

#### Interactive syntax {#mcp-interactive-syntax}

~~~text
/mcp
/mcp list
/mcp enable <name>
/mcp disable <name>
/mcp approve <name>
~~~

#### Headless syntax {#mcp-headless-syntax}

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

For stdio servers, pass the command as the positional value after the server name. Supported transports are <code>stdio</code>, <code>http</code>, <code>sse</code>, and <code>ws</code>; remote transports require <code>--url</code>.

#### Real-world verification example {#mcp-real-world-verification-example}

A refund agent says it issued a refund. Configure a separate MCP server that has a read-only <code>get_refund_status</code> tool:

~~~bash
rook mcp add refund-reader 'refund-mcp-server --read-only' --scope project
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

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-doctor.png').default} alt="Current Rook doctor command help" className="doc_img"/>

</details>

#### Syntax {#doctor-syntax}

~~~text
/doctor
~~~

From a shell:

~~~bash
rook doctor
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

### /update {#update}

Use <code>/update</code> to check for a newer public Rook release and show the appropriate upgrade command for a Homebrew, npm, or shell installation.

<details>
<summary>View the CLI screenshot</summary>

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-update.png').default} alt="Rook update command help showing auto and JSON forms" className="doc_img"/>

</details>

#### Syntax {#update-syntax}

```text
/update
/update auto
/update --json
```

The shell form is <code>rook update</code> with the same argument and option.

Public releases use semantic versions such as <code>0.1.3</code>. Shell installations keep versioned release directories side by side and record the binary directory so an update continues to use the same location.

If you previously chose “never ask again” in the TUI update notice, run <code>/update auto</code> to re-enable automatic notices.



The latest release checked on September 11, 2026 was [0.1.3](https://github.com/LambdaTest/rook/releases/tag/v0.1.3). If an npm 0.1.1 or 0.1.2 install cannot update, follow the [public-registry repair command](/support/docs/rook-installation/#repair-an-npm-011-or-012-installation).

## Export Diagnostic Logs {#export}

```bash
rook export logs --out ./rook-diagnostics.zip
```

Use `rook export logs --help` for session selection. Diagnostic bundles can contain paths, session text, and sensitive target data; review them before sharing.

## Migration From Older Examples

| Older syntax | Rook 0.1.3 |
|---|---|
| <code>--entity</code> | Select with <code>rook project use</code> and <code>rook agent use</code> before the command. |
| <code>profile list</code>, <code>agent list</code> | Use bare <code>profile</code> or <code>agent</code>. |
| <code>profile edit</code>, <code>profile curl</code>, <code>profile rm</code> | Use <code>profile fix</code>, <code>show</code>, or deliberately edit the plain files. These subcommands are absent. |
| Fixed <code>kind/invoke/result</code> profile YAML | Generate reviewable <code>hooks</code> scripts with <code>profile add</code>. |
| <code>explore --instruction</code>, <code>--all</code> | Supply guidance after <code>--</code>; use current help for unattended approvals. |
| <code>generate --no-validate</code> | Removed. Review generated scenarios and current runnability. |
| <code>run --no-narrative</code> | Removed. |
| <code>ui</code> for a local server | Use <code>ui --local</code>; bare <code>ui</code> opens the hosted app. |

### /budget {#budget}

This older command is not in 0.1.3. Use <code>/plan</code> for account credits and read cost/progress output for the active operation.

The TUI status bar shows the account balance and credits spent in the current session. Model-backed phases report their spending. Rook checks credit boundaries between calls and preserves completed local work when credits are exhausted.

### /new {#new}

This older command is not in 0.1.3. Exit and start <code>rook</code> again to begin another terminal session; project files remain on disk.

Active project and agent selections, profiles, scenarios, runs, credentials, and environment variables persist across sessions. Restarting the terminal does not reset stored state; use the relevant commands when you intend to change it.

<span id="structured-output-and-exit-codes" />

## Structured Output and Progress

| Flag | Behavior |
|---|---|
| `--json` | Writes one machine-readable object to standard output. Human explanation moves to standard error so `2>&1` still shows the reasoning. Failures emit an object shaped like `{"ok": false, "error": "..."}`. |
| `--verbose` | Writes detailed human progress to standard error, including role activity, tool calls, and credit use. |
| `--yes` | Runs the current command without interactive tool approval and writes no persistent permission. |
| `--allow <rule>` | Adds a reviewed permission rule for the current process; repeat the flag for several rules. |

Only use a flag where `rook help <command>` lists it.

## Exit Codes

In Rook 0.1.3, process success and agent quality are separate. Do not use the older 0/1/2/3/4 mapping as a release gate: the current run/report paths return success when an outcome or report was produced, even if its verdicts require attention.

Treat a non-zero exit as command failure. After a successful <code>run --json</code>, require <code>ok: true</code>, <code>halted: false</code>, a report, and the expected completed and passed counts. Reject missing, discarded, partial, or unverifiable results according to your release policy. A <code>report --json</code> success only confirms the stored report was read.

See the [tested CI gate](/support/docs/agent-assurance-ci-cd/#gate-on-completion-and-verdicts) for an example.

## User-Configured Environment Variables

| Variable | Effect |
|---|---|
| `ROOK_HOME` | Credentials, environment values, history, and local state. Default: `~/.testmuai/rook`. |
| `ROOK_ENV` | Deployment selection; public packages default to `prod`. Keep the setting consistent for login, project operations, synchronization, and hosted review. |
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
| **Ctrl-C** | Abandon the current line. |
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
