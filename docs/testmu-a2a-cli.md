---
id: testmu-a2a-cli
title: TestMu Agent Testing CLI Documentation - Getting Started
hide_title: false
sidebar_label: Quickstart (CLI)
description: Get started with the TestMu Agent Testing CLI to discover projects, run Chat and Phone Caller evaluations, retrieve results, and automate tests in CI/CD.
keywords:
  - testmu agent testing cli
  - agent testing cli
  - chat agent testing
  - phone caller testing
  - ci/cd agent testing
url: https://www.testmuai.com/support/docs/testmu-a2a-cli/
site_name: TestMu AI
slug: testmu-a2a-cli/
canonical: https://www.testmuai.com/support/docs/testmu-a2a-cli/
---

# TestMu Agent Testing CLI Documentation - Getting Started

> For product concepts and platform guidance, see the [TestMu Agent Testing CLI guide](https://www.testmuai.com/support/docs/testmu-a2a-cli/).

## Before You Begin

1. You need a TestMu AI account. [Sign up free](https://www.testmuai.com/) if you do not have one.
2. Follow [Get started with TestMu Agent Testing](https://agent-to-agent.lambdatest.com/agent-ui/agents) and open **Credentials** in the TestMu AI Dashboard. Copy your username and access key.
3. Set the credentials as environment variables when you use the CLI in CI/CD or other non-interactive environments.

macOS or Linux:

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

Windows PowerShell:

```powershell
$env:LT_USERNAME = "YOUR_USERNAME"
$env:LT_ACCESS_KEY = "YOUR_ACCESS_KEY"
```

**TestMu Agent Testing CLI** (`agent-testing-cli`) is a command-line tool for testing AI agents from a terminal. Use the CLI to discover projects and test resources, run Chat and Phone Caller evaluations, retrieve results, and automate tests in a continuous integration and continuous delivery (CI/CD) pipeline.

- **Run tests from a terminal or IDE:** Use the same commands on macOS, Linux, and Windows.
- **Test different agent types:** Work with Chat, Voice, and Phone Caller agents that are configured in TestMu.
- **Choose an operating mode:** Use direct commands, machine-readable output, or the interactive terminal user interface (TUI).
- **Integrate with CI/CD:** Authenticate with environment variables and run suites without an interactive prompt.

```bash
# Install
pip install agent-testing-cli

# Authenticate
# Enter your TestMu username and access key when prompted.
agent-testing-cli login

# List your projects
agent-testing-cli projects
```

## Supported Environments

The CLI runs in a system terminal or an integrated terminal in an IDE on:

- macOS
- Linux
- Windows

## Requirements

- Python 3.10 or newer
- macOS, Linux, or Windows
- A TestMu account with access to Agent-to-Agent Testing
- At least one TestMu project with an agent and a test suite

## Usage Modes

| Mode | Command | Best for |
| --- | --- | --- |
| Interactive TUI | `agent-testing-cli tui` | Local exploration and suite selection |
| Command mode | `agent-testing-cli --project PROJECT_ID run --suite SUITE_ID` | Direct execution from a terminal |
| CI/CD mode | `agent-testing-cli --project PROJECT_ID --json run ... --yes` | Pipelines and scripts |

`--yes` confirms a test run without an interactive prompt. Use it for CI/CD or after you verify the selected project, suite, workflow, or URL.

## Quick Reference

| Command | Purpose |
| --- | --- |
| `agent-testing-cli login` | Validate and save credentials. |
| `agent-testing-cli auth status` | Show the authentication status. |
| `agent-testing-cli projects` | List accessible projects. |
| `agent-testing-cli --project PROJECT_ID scenarios` | List saved scenarios for a project. |
| `agent-testing-cli --project PROJECT_ID suites` | List saved suites for a project. |
| `agent-testing-cli --project PROJECT_ID endpoint-profiles` | List Chat endpoint profiles for a project. |
| `agent-testing-cli --project PROJECT_ID run --suite SUITE_ID` | Start a Phone Caller suite. |
| `agent-testing-cli results --suite SUITE_ID` | Show suite results. |
| `agent-testing-cli call --id CALL_ID` | Show a call result. |
| `agent-testing-cli tui` | Open the interactive TUI. |
| `agent-testing-cli logout` | Delete credentials for the selected profile. |

Run the following command to see all commands:

```bash
agent-testing-cli --help
```

Run the following command to see the options for one command:

```bash
agent-testing-cli COMMAND --help
```

## Install the CLI

Install the latest published version from PyPI:

```bash
pip install agent-testing-cli
```

Verify the installation:

```bash
agent-testing-cli --help
```

## Authenticate Your Account

### Sign In Interactively

Run the login command:

```bash
agent-testing-cli login
```

The CLI prompts for your username and access key. The CLI saves credentials in the operating-system credential store.

You can also supply the username and access key as options:

```bash
agent-testing-cli login --user LT_USERNAME --key LT_ACCESS_KEY
```

Do not store the access key in source control or shell history.

### Authenticate in CI/CD

Set both environment variables in the CI/CD environment:

```bash
export LT_USERNAME="your-username"
export LT_ACCESS_KEY="your-access-key"
```

Store these values in the secret store of your CI/CD platform.

### Check Status and Sign Out

Check the authentication status:

```bash
agent-testing-cli auth status
```

Delete saved credentials for the selected profile:

```bash
agent-testing-cli logout
```

## Discover Projects and Test Resources

List accessible projects:

```bash
agent-testing-cli projects
```

Use a project ID to list its configured resources:

```bash
agent-testing-cli --project PROJECT_ID scenarios
agent-testing-cli --project PROJECT_ID suites
agent-testing-cli --project PROJECT_ID endpoint-profiles
```

Add `--json` when a script must process the output:

```bash
agent-testing-cli --json projects
```

## Test a Phone Caller Agent

For a Phone Caller run, `--project PROJECT_ID` identifies the TestMu project and `--suite SUITE_ID` identifies the suite to run.

Start one saved suite:

```bash
agent-testing-cli --project PROJECT_ID run \
  --suite SUITE_ID
```

The CLI asks for confirmation because a Phone Caller suite can create real calls. Review the selected project and suite before you confirm the run.

Start a suite without an interactive confirmation:

```bash
agent-testing-cli --project PROJECT_ID run \
  --suite SUITE_ID \
  --yes
```

Start multiple suites:

```bash
agent-testing-cli --project PROJECT_ID run \
  --suite SUITE_ID_1 \
  --suite SUITE_ID_2 \
  --yes
```

Wait for the final suite result:

```bash
agent-testing-cli --project PROJECT_ID run \
  --suite SUITE_ID \
  --yes \
  --wait \
  --poll 5 \
  --timeout 1800
```

The `--poll` and `--timeout` values are in seconds.

## Test a Chat Agent

A Chat evaluation requires a project, workflow, and suite:

```bash
agent-testing-cli --project PROJECT_ID run \
  --workflow WORKFLOW_ID \
  --suite SUITE_ID \
  --yes
```

Select a specific endpoint profile:

```bash
agent-testing-cli --project PROJECT_ID run \
  --workflow WORKFLOW_ID \
  --suite SUITE_ID \
  --endpoint-profile ENDPOINT_PROFILE_ID \
  --yes
```

Chat evaluations are asynchronous. Do not use `--wait` with a Chat evaluation.

## Run from URLs

Run a suite from a supported TestMu result URL:

```bash
agent-testing-cli run --url "SUITE URL" --yes
```

Run multiple suite URLs in one command:

```bash
agent-testing-cli run --url "SUITE_URL_1" "SUITE_URL_2" "SUITE_URL_3" --yes
```

The `--yes` flag confirms every selected run without an interactive prompt. Use it only after you verify the URLs.

## Use the Interactive TUI

Open the terminal user interface:

```bash
agent-testing-cli tui
```

| Key or action | Result |
| --- | --- |
| `Tab` | Move to the next list or control. |
| Arrow keys | Move through the active list. |
| `Space` | Select or clear a suite. |
| `Enter` or `r` | Run the selected suites. |
| `c` or `y` | Copy the visible run command. |
| `f` | Refresh project data. |
| `q` | Close the TUI. |

The TUI shows a copy-ready command for the selected project or suite. The TUI also asks for confirmation before it starts a test run.

## Global Options

The shared `--json`, `--verbose`, and `--no-tui` options can appear before or after a command. Completion options must appear before a command. Use the global form `--project PROJECT_ID` before the command for project-scoped operations. The existing command-level form remains supported for compatibility.

| Option | Purpose |
| --- | --- |
| `--project PROJECT_ID` | Select a project for a project-scoped command. |
| `--json` | Write machine-readable JSON. |
| `--verbose` | Write sanitized diagnostics to standard error. |
| `--no-tui` | Disable the interactive TUI. |
| `--install-completion` | Install completion for the current shell. |
| `--show-completion` | Show the completion script for the current shell. |
| `--help` | Show help. |

## Integrate with CI/CD

Use the sample GitHub Actions workflow: [GitHub Actions example](../examples/ci/github-actions-agent-testing-cli.yml)

Before you run the workflow, configure these GitHub Actions secrets:

| Secret | Value |
| --- | --- |
| `LT_USERNAME` | Your TestMu username |
| `LT_ACCESS_KEY` | Your TestMu access key |

Configure these GitHub Actions repository variables:

| Variable | Value |
| --- | --- |
| `TESTMU_PROJECT_ID` | Project ID that contains the suite |
| `TESTMU_SUITE_ID` | Suite ID to run |

The example uses `workflow_dispatch`. You must start it manually from the GitHub Actions page. Copy the example into `.github/workflows/` when you are ready to activate it.

For a Chat evaluation, add `TESTMU_WORKFLOW_ID` as a repository variable and use this command:

```bash
agent-testing-cli --project "$TESTMU_PROJECT_ID" --json run \
  --workflow "$TESTMU_WORKFLOW_ID" \
  --suite "$TESTMU_SUITE_ID" \
  --yes
```

Do not add `--wait` to a Chat evaluation.

## Exit Codes

| Code | Meaning |
| --- | --- |
| `0` | The command completed successfully. |
| `1` | A completed test failed. |
| `2` | The command input is invalid. |
| `3` | Authentication failed or credentials are unavailable. |
| `4` | An API or TUI dependency error occurred. |
| `5` | Result polling reached the timeout. |

Use the exit code to fail a CI/CD job when a command does not complete successfully.

## Troubleshoot Common Problems

### Credentials Are Unavailable

**What you see:** The CLI asks you to log in or reports that credentials are unavailable.

**Fix:** Run `agent-testing-cli login`. In CI/CD, set both `LT_USERNAME` and `LT_ACCESS_KEY`.

### A Project or Suite Is Not Found

**What you see:** The CLI reports that a project or suite does not exist.

**Fix:** List the available projects and suites again:

```bash
agent-testing-cli projects
agent-testing-cli --project PROJECT_ID suites
```

### A Chat Run Requires a Workflow

**What you see:** The CLI reports `Chat run requires --workflow`.

**Fix:** Add the workflow ID:

```bash
agent-testing-cli --project PROJECT_ID run \
  --workflow WORKFLOW_ID \
  --suite SUITE_ID \
  --yes
```

### JSON Output Requires Confirmation Bypass

**What you see:** The CLI reports that `--yes` is required with `--json`.

**Fix:** Add `--yes` to the run command after you verify the project and suite IDs.

### Polling Reaches the Timeout

**What you see:** A Phone Caller run exits with code `5`.

**Fix:** Increase `--timeout`, or retrieve the result later with the `results` command.

### The Credential Store Is Unavailable

**What you see:** Interactive login cannot access the operating-system credential store.

**Fix:** Configure the credential store for the operating system. For CI/CD, use `LT_USERNAME` and `LT_ACCESS_KEY` instead.

## Next Steps

- Review the [TestMu Agent Testing CLI guide](https://www.testmuai.com/support/docs/testmu-a2a-cli/).
- Learn how [Agent Testing evaluations work](https://www.testmuai.com/support/docs/architecture-and-how-evaluation-works/).
- Learn how to [connect a Chat agent](https://www.testmuai.com/support/docs/chat-agent-api-integration/).
- Open the [agent-testing-cli package on PyPI](https://pypi.org/project/agent-testing-cli/).