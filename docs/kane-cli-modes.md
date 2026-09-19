---
id: kane-cli-modes
title: Modes of Operation
sidebar_label: Modes
description: "Kane CLI has three modes: Interactive TUI for development, Headless CLI for scripts and CI/CD, and Agent Mode for AI coding agent integrations."
keywords:
  - kane cli modes
  - interactive tui
  - headless cli
  - agent mode
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-modes/
site_name: TestMu AI
slug: kane-cli-modes/
canonical: https://www.testmuai.com/support/docs/kane-cli-modes/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

Kane CLI has three modes. Choose based on who (or what) is running the test.

| Mode | Command | Output | Best For |
|------|---------|--------|----------|
| **Interactive TUI** | `kane-cli --tui` | Terminal UI | Development, exploration, chained sessions |
| **Non-Interactive CLI Mode** | `kane-cli run "..." --headless` | Formatted text + JSON | CI/CD, shell scripts |
| **Agent Mode** | `kane-cli run "..." --agent` | NDJSON on stdout | AI coding agents (Claude, Codex, Gemini) |

---

## Interactive TUI

Launch the TUI:

```bash
kane-cli --tui
```

The TUI is the right surface when you are exploring objectives, debugging failures, or working through a multi-run flow that should share browser state.

### Boot and Menu

On launch, Kane CLI runs a short boot sequence (auth check, environment resolution, mascot animation), then drops into the **main menu**. The top-level entries are:

| Entry | Purpose |
|-------|---------|
| Run | Start a run or adjust per-run options |
| Auth | Login, logout, switch profile, view identity, check credit balance |
| Config | View and change settings (mode, project, folder, Chrome profile, window size) |
| Exit | Graceful shutdown (uploads the session if applicable) |

Use the arrow keys to navigate, Enter to select, and Esc to back out of a submenu.

### TUI Mode

In your terminal, type `kane-cli --tui` and this switches to TUI mode. Type your objective at the prompt and press Enter. The agent begins streaming steps into the scrollback: each step shows the action taken, a short rationale, and a status icon. When the run finishes, a result summary block appears.

Subsequent runs in the same TUI session reuse the same browser, so you can iterate on objectives without re-logging in or re-navigating.

### Slash Commands

Typing `/` in chat mode opens an autocomplete palette. Continue typing to filter, use the arrow keys to select, and press Enter to insert the command.

| Command | Args | Description |
|---------|------|-------------|
| `/run` | `"objective"` | Execute a test run |
| `/login` | `[--profile name]` | OAuth login |
| `/logout` | `[--profile name]` | Logout and revoke tokens |
| `/whoami` | `[--profile name]` | Show profile info |
| `/balance` | | Show credit balance |
| `/profiles` | `list\|switch\|delete` | Manage profiles |
| `/config` | `show\|set-window\|set-url\|set-mode\|chrome-profile\|project\|folder` | Manage configuration |
| `/mobile` | | Switch the session to an emulator or simulator |
| `/desktop` | | Switch the session back to desktop (Chrome) |
| `/doctor` | | Check mobile tooling and devices |
| `/new` | | Start a fresh session (uploads the current session first) |
| `/summary` | `[index]` | View detailed run summaries |
| `/cancel` | | Abort the current run |
| `/help` | | Show the command reference |
| `/clear` | | Clear chat history |
| `/exit` | | Quit Kane CLI |

You can also send a bare line of text without a leading `/`. It is treated as the objective for `/run`.

### History Search

Press **Ctrl+R** in the input prompt to open reverse history search across past inputs in this and previous sessions. Type to filter, use the arrow keys to move between matches, Enter to accept, and Esc to dismiss.

The prompt also offers ghost-text completion: if your current input is a prefix of a recent entry or a slash command, the rest is shown dimmed and Tab accepts it.

### Status Bar

A two-row status bar sits at the bottom of the TUI:

| Indicator | Meaning |
|-----------|---------|
| Model | The model in use (default `v16-alpha`) |
| Session | Last six characters of the current session ID |
| Auth dot | Green when authenticated, red when not logged in |
| Profile | Active profile name (or `no profile`) |
| Environment | `prod` (green) or a yellow `stage` warning |
| Runs | Number of runs completed in this session |
| Hint line | Context-aware shortcuts |

### Multi-Run Sessions

Every run launched from the same TUI invocation shares one Chrome instance and one session directory. Cookies, login state, and tabs persist across runs, so an early run can log in and a later run can land mid-application without re-authenticating. Starting a fresh session from inside the TUI is done with `/new`, which uploads the current session and then resets state.

```
> go to https://myapp.com and log in as admin
  ✓ PASSED (5 steps, 8.2s)

> navigate to User Management and create a new user "testuser@example.com"
  ✓ PASSED (7 steps, 12.1s)

> verify the new user appears in the users table
  ✓ PASSED (3 steps, 4.5s)
```

### Interactive Follow-Ups

If the agent needs information mid-run (for example, a one-time code or a clarifying choice), it pauses and asks at the input prompt. Type your answer and press Enter; the agent resumes from where it left off. Use Ctrl+C to cancel the run instead of answering.

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Submit objective |
| Ctrl+C | Cancel current run |
| Ctrl+C (twice) | Exit TUI |
| Ctrl+R | Reverse history search |
| Esc | Go back / close picker |
| Up / Down | Navigate menu or history |
| Tab | Accept autocomplete in chat mode |

### Cancelling and Exiting

| Action | Shortcut |
|--------|----------|
| Cancel the current run | `/cancel`, or **Ctrl+C** once during a run |
| Exit the TUI | `/exit`, or **Ctrl+C** twice in quick succession |
| Force exit during shutdown upload | **Ctrl+C** twice while exit is in progress |

A graceful `/exit` runs the upload pipeline (if applicable) and prints any final links to your terminal scrollback before the process ends.

---

## Non-Interactive CLI Mode

```bash
kane-cli run "Search for 'automation testing' on Google" \
  --url https://google.com \
  --headless
```

This mode is best for shell scripts, CI/CD pipelines, and any scenario where the interactive TUI is not needed.

### Run options

The customer-facing flags accepted by `kane-cli run`:

| Flag | Description | Default |
|------|-------------|---------|
| `--headless` | Run Chrome in headless mode. | Off |
| `--max-steps <n>` | Maximum agent steps. | `30` |
| `--timeout <seconds>` | Kill the run after N seconds. | None |
| `--url <url>` | Start URL for the run. Overrides the configured `default_url`; bare domains are normalized to `https://`. See [Default start URL](/support/docs/kane-cli-configuration/). | Config `default_url` |
| `--allow-missing-url` | Non-TTY only: proceed from the browser's current page instead of failing when no start URL resolves (a provided `--url` is still used). | Off |
| `--cdp-endpoint <url>` | Connect to an existing Chrome via CDP. | None |
| `--ws-endpoint <url>` | Connect to a Playwright WebSocket endpoint (e.g. TestmuAI `wss://`). | None |
| `--global-context <file>` | Override the global context Markdown file. | `~/.testmuai/kaneai/global-memory.md` |
| `--local-context <file>` | Override the local context Markdown file. | `<cwd>/.testmuai/context.md` |
| `--variables <json>` | Inline variables JSON. | None |
| `--variables-file <path>` | Load variables from a JSON file. | None |
| `--session-context <json>` | Prior runs context JSON. | None |
| `--username <user>` | Basic auth username (skip OAuth). | None |
| `--access-key <key>` | Basic auth access key (skip OAuth). | None |
| `--env <name>` | Environment (`prod`). | Active profile's env |
| `--mode <name>` | Run mode: `action` (strict) or `testing` (lenient). | Config value, otherwise `testing` |
| `--bug-detection <mode>` | Detect product bugs while authoring: `off`, `stop` (halt the run on a confirmed bug), or `continue` (record it and keep going). Overrides `config set-bug-detection`. See [Configuration](/support/docs/kane-cli-configuration/). | Config value, otherwise `off` |
| `--agent` | Plain NDJSON output, no colors or UI. | Off |
| `--code-export` | Generate code export after upload. | Off |
| `--code-language <lang>` | Code export language (currently `python`). | `python` |
| `--skip-code-validation` | Skip post-codegen worker-side validation. | On |
| `--no-skip-code-validation` | Force post-codegen worker-side validation. | Off |

For variables and context file behavior, see [Variables and context](/support/docs/kane-cli-variables-and-context/). For code export and the run mode toggle, see [Configuration](/support/docs/kane-cli-configuration/).

### Mobile runs

By default a run targets the **desktop** browser (Chrome), so every example above is unchanged. On macOS Apple Silicon you can instead point a run at a virtual mobile device: an `emulator` (a virtual Android device) or a `simulator` (a virtual iOS device). Every mobile run needs an app under test.

```bash
# desktop (default): nothing changes for web runs
kane-cli run "Search for 'noise-cancelling headphones' on amazon.com"

# emulator (Android): install an .apk build and run against it
kane-cli run "Add the first item to the cart" --target emulator --app ./builds/app-debug.apk

# simulator (iOS): install a .zip build and run against it
kane-cli run "Sign in and open the account tab" --target simulator --app ./builds/MyApp.zip
```

The mobile run flags:

- `--target desktop|emulator|simulator`: which target to run against. Defaults to the saved session target, otherwise `desktop`.
- `--device <id>`: pick a device by name, serial, `ip:port`, or udid. In the TUI/TTY, omitting it opens a one-time picker and the choice is saved; in non-interactive runs a device must already be set (via `--device` or `kane-cli config set-device`) or the run exits with the fix spelled out.
- `--app <path|APPid>`: the app under test, required for every mobile run. Pass a build (emulator: `.apk`, simulator: `.zip`) or an uploaded app id (`APP` followed by six or more digits). On the `desktop` target, `--device` and `--app` are ignored.

In the interactive TUI, a first run offers a Desktop / Emulator / Simulator chooser, and you can switch targets at any time with `/mobile` and `/desktop`. Run `/doctor` to check mobile tooling and devices.

For setup (Xcode or Android Studio, `kane-cli login`, and `kane-cli doctor --install`) and the app formats each target accepts, see [Mobile testing](/support/docs/kane-cli-mobile/).

### Output Streams

| Stream | Contents |
|--------|----------|
| stderr | Live progress (banner, step tree, result box, links, upload progress, feedback prompt) |
| stdout | The final JSON `run_end` payload, including the share URL when an upload succeeds |

This separation lets you capture each independently:

```bash
kane-cli run "..." > result.json 2> progress.log
```

In CI, redirect stdout to a file your job can parse and let stderr stream to the build log.

When stdin is not a TTY, Kane CLI automatically switches to plain NDJSON mode (the same as `--agent`). Each line on stdout is one JSON event terminated by a newline.

### Exit Codes

| Exit Code | Meaning |
|-----------|---------|
| `0` | Test passed |
| `1` | Test failed (agent reached an unrecoverable failure, or the upload failed) |
| `2` | Error (auth failure, Chrome crash) |
| `3` | Timeout or cancelled |

Use these codes to gate downstream CI steps.

### What You See at the End of a Run

When a run finishes, Kane CLI prints a result summary:

| Field | Meaning |
|-------|---------|
| Status | `PASSED` (green check) or `FAILED` (red cross) |
| Steps | Total step count, with a `(N passed, M failed)` breakdown when there were failures |
| Duration | Wall-clock time in seconds (or minutes and seconds for longer runs) |
| Credits | Credits consumed, when reported |
| Summary | Bullet-point summary of what the agent did |
| Reason | Failure reason (failed runs only) |

Below the summary, Kane CLI prints any of the following links:

| Label | Points to |
|-------|-----------|
| `ShareLink` | A shareable session URL on <BrandName /> Test Manager |
| `TestCase` | The test case detail page in <BrandName /> Test Manager |
| `CodeExport` | The local directory containing generated code (when code export is enabled) |

Modern terminals render these as clickable hyperlinks. For details on what each link leads to, see [Test Manager integration](/support/docs/kane-cli-tms-integration/).

The run is also captured as a sealed [evidence pack](/support/docs/kane-cli-evidence/) — screenshots, per-step console/network logs, and failure records. In a terminal, kane-cli offers to open it in the browser viewer; in agent or non-interactive runs it prints a one-line `evidence: view locally with …` hint to stderr instead.

### Feedback Prompt

After the result and links print, Kane CLI prompts you to rate the session with thumbs up or thumbs down. Use the left and right arrow keys to choose, Enter to submit, or Esc to skip. See [Test Manager Integration](/support/docs/kane-cli-tms-integration/) for details.

---

## Agent Mode

Add `--agent` to get structured NDJSON output designed for AI coding agents:

```bash
kane-cli run "Verify login page loads" --url https://myapp.com --agent --headless
```

With `--agent`:
- The interactive TUI is **fully suppressed**: no boot screen, no menus
- Each event is a **single JSON line** on stdout
- Progress UI renders to **stderr** (clean separation)
- Stdin is not used (no interactive prompts)

This mode is how Claude Code, Codex CLI, and Gemini CLI consume Kane CLI results. The agent reads the NDJSON stream, parses the final `run_end` event, and presents results to you.

See [Agent Mode](/support/docs/kane-cli-agent-mode/) for the full event schema and parsing guide.

:::tip
Always combine `--agent` with `--headless` in non-interactive environments to prevent display server errors.
:::
