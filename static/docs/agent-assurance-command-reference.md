# List of Rook Commands

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use rook to start the interactive terminal, or rook &lt;command&gt; from your shell. This index matches the published **0.1.3** CLI. Each command links to its detailed syntax and examples.

## First Journey

```text
login → project → explore → agent → profile add → generate → scenarios → sync → run → ui
```

Follow the [tested quickstart](/support/docs/agent-assurance-quickstart/) for a runnable sample. A normal timeline run needs sync first; run --test deliberately stays local.

## Discover Syntax From the CLI

```bash
rook --version
rook --help
rook run --help
rook profile add --help
```

Inside the terminal, use /help run. Do not paste slash commands into a normal shell.

## Command Index

### rook {#rook}

Start the interactive terminal. [Syntax and examples](/support/docs/rook-command-start/).

### rook ask {#rook-ask}

Describe a testing task in natural language. [Syntax and examples](/support/docs/rook-command-ask/).

### /project {#project}

List, select, or create a project. [Syntax and examples](/support/docs/rook-command-project/).

### /explore {#explore}

Discover agents and features from local code or requirements. [Syntax and examples](/support/docs/rook-command-explore/).

### /agent {#agent}

List or select the active agent. [Syntax and examples](/support/docs/rook-command-agent/).

### /generate {#generate}

Generate scenarios with classes, categories, a target count, and instructions. [Syntax and examples](/support/docs/rook-command-generate/).

### /profile {#profile}

Generate, inspect, select, test, or repair invocation hooks. [Syntax and examples](/support/docs/rook-command-profile/).

### /scenarios {#scenarios}

List, include, exclude, or delete scenario definitions. [Syntax and examples](/support/docs/rook-command-scenarios/).

### /sync {#sync}

Publish the reviewed project tree. [Syntax and examples](/support/docs/rook-command-sync/).

### /run {#run}

Run selected scenarios, choose phases, continue, resume, or request RCA. [Syntax and examples](/support/docs/rook-command-run/).

### /runs {#runs}

List local runs or reconcile outstanding uploads with runs sync. [Syntax and examples](/support/docs/rook-command-runs/).

### /report {#rook-report}

Read a stored report or request RCA. [Syntax and examples](/support/docs/rook-command-report/).

### /ui {#ui}

Open the hosted Web UI; add --local for on-disk evidence. [Syntax and examples](/support/docs/rook-command-ui/).

### /status {#status}

Inspect workspace and sync state. [Syntax and examples](/support/docs/rook-command-status/).

### /plan {#plan}

Check your account plan and credits. [Syntax and examples](/support/docs/rook-command-plan/).

### /login {#login}

Authenticate through the browser or account credentials. [Syntax and examples](/support/docs/rook-command-login/).

### /auth {#auth}

Check effective authentication. [Syntax and examples](/support/docs/rook-command-auth/).

### /whoami {#rook-whoami}

Show the authenticated identity. [Syntax and examples](/support/docs/rook-command-whoami/).

### /logout {#logout}

Clear stored authentication; exported credentials must be managed separately. [Syntax and examples](/support/docs/rook-command-logout/).

### /env {#env}

Manage workspace-scoped local variables. [Syntax and examples](/support/docs/rook-command-env/).

### /mcp {#mcp}

Configure MCP servers, approval, and connectivity. [Syntax and examples](/support/docs/rook-command-mcp/).

### /doctor {#doctor}

Diagnose installation, connectivity, account, and workspace. [Syntax and examples](/support/docs/rook-command-doctor/).

### /update {#update}

Check for and apply supported CLI updates. [Syntax and examples](/support/docs/rook-command-update/).

### /docs {#docs}

Open documentation from Rook. [Syntax and examples](/support/docs/rook-command-docs/).

### /guide {#guide}

Show the testing sequence. [Syntax and examples](/support/docs/rook-command-guide/).

### /help {#help}

Inspect commands and their current options. [Syntax and examples](/support/docs/rook-command-help/).

### /clear {#clear}

Clear visible TUI scrollback. [Syntax and examples](/support/docs/rook-command-clear/).

### /exit {#exit}

Leave the TUI without deleting test evidence. [Syntax and examples](/support/docs/rook-command-exit/).

### Export diagnostic logs {#export}

```bash
rook export logs --out ./rook-diagnostics.zip
```

Use rook export logs --help for session selection. Diagnostic bundles can contain paths, session text, and sensitive target data; review them before sharing.

## Migration From Older Examples

| Older syntax | Rook 0.1.3 |
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

This older command is not in 0.1.3. Use /plan for account credits and read cost/progress output for the active operation.

### /new {#new}

This older command is not in 0.1.3. Exit and start rook again to begin another terminal session; project files remain on disk.

## Structured Output and Exit Codes

Supported --json commands return command-specific JSON documents; do not assume a universal NDJSON event stream. Keep stderr separate when capturing stdout.

For run and report, successful process completion does not prove an agent passed or the full suite finished. Use the [CI completion and verdict gate](/support/docs/agent-assurance-ci-cd/#gate-on-completion-and-verdicts).

[Flags, variables, and keys](/support/docs/rook-cli-reference/) · [Permissions and safety](/support/docs/rook-permissions-and-safety/) · [Web UI](/support/docs/rook-web-ui/)
