# Rook Flags, Variables, Exit Codes, and Keys

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use this page for cross-command behavior. Run `rook help ` for command-specific options.

## Structured Output and Progress

| Flag | Behavior |
|---|---|
| `--json` | Writes one machine-readable object to standard output. Human explanation moves to standard error so `2>&1` still shows the reasoning. Failures emit an object shaped like `{"ok": false, "error": "..."}`. |
| `--verbose` | Writes detailed human progress to standard error, including role activity, tool calls, and credit use. |
| `--yes` | Runs the current command without interactive tool approval and writes no persistent permission. |
| `--allow ` | Adds a reviewed permission rule for the current process; repeat the flag for several rules. |

Only use a flag where `rook help ` lists it.

## Exit Codes

| Code | Meaning |
|---:|---|
| `0` | The operation ran and nothing was wrong. |
| `1` | Rook could not test the agent, such as an invocation error or provider refusal. |
| `2` | The tested agent failed or was compromised by an adversarial scenario. |
| `3` | The process is not signed in. |
| `4` | The account is out of budget. |

Codes `1` and `2` are deliberately distinct. Both may stop a build, but only `2` is a finding about the agent. **Unable to Verify** does not fail a build merely because the harness lacked evidence.

## User-Configured Environment Variables

| Variable | Effect |
|---|---|
| `ROOK_HOME` | Credentials, environment values, history, and installed versions. Default: `~/.testmuai/rook`. |
| `ROOK_ENV` | Deployment selection: `prod`, `stage`, or `local`. A stage-branch tarball defaults to stage. |
| `ROOK_API_URL` | Overrides the versioned Rook API base URL. |
| `ROOK_CONTROLLER_URL` | Overrides the controller base URL. |
| `ROOK_AUTH_BASE_URL` / `AUTH_URL` | Overrides the authentication base URL. |
| `ROOK_USER_AUTH_URL` / `USER_AUTH_URL` | Supplies a full user-auth endpoint rather than a base. |
| `ROOK_VERSION` | Installer only: selects a specific build. |
| `ROOK_PREFIX` | Installer only: selects the installation root. |
| `ROOK_GITHUB_TOKEN` | Installer only: authenticates private release access without `gh`. |
| `ROOK_SPRITE` | Controls boot animation; `--no-animation` disables it for one launch. |

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

## Related Documentation

- [Every command](/support/docs/agent-assurance-command-reference/)
- [CI and automation](/support/docs/agent-assurance-ci-cd/)
- [Permissions and safety](/support/docs/rook-permissions-and-safety/)
- [Troubleshooting](/support/docs/agent-assurance-troubleshooting/)
