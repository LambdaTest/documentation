# Rook Environment and Secrets

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Profiles contain references and operational descriptions. Secret values remain on the machine running Rook and are never included in project synchronization.

## Manage Local Values

```bash
rook env list
rook env set '{"API_KEY":"sk-...","BASE_URL":"https://staging.example.com"}'
rook env show API_KEY
rook env rm API_KEY
```

| Command | Behavior |
|---|---|
| `env list` | Lists configured names with masked values. It is the default subcommand. |
| `env set` | Stores one or more key-value pairs from a JSON object. |
| `env show` | Prints one value in full; take care with terminals and logs. |
| `env rm` | Removes the local value. |

Values are stored in `~/.testmuai/rook/env.json`, outside the repository. A profile refers to a value as `${API_KEY}` and `rook profile show` displays the reference instead of expanding the secret.

## Profile Declaration

```yaml
env:
- variable: API_KEY
purpose: read-only token for the staging support API
- variable: BASE_URL
purpose: environment to test
```

The `purpose` field should state the authority behind the value. A variable name alone does not tell a reviewer whether the credential can only read status or can move money.

Before spending a run, Rook checks that every value declared by the profile is available. This prevents a large suite from failing after many paid invocations because a single token was never configured.

## Global and Workspace State

| Path | Contains |
|---|---|
| `~/.testmuai/rook/` | Credentials, environment values, terminal history, logs, installed versions, and machine-specific session state. The directory uses mode `0700`. |
| `/.testmuai/rook/` | Projects, agents, features, scenarios, profiles, hook scripts, runs, and evidence intended to be reviewable and committable. |

## Shared Authentication

Authentication is global for processes using the same Rook home:

- several terminals share one sign-in;
- logout in one terminal is observed by the others;
- login restores access for all of them;
- token renewal is serialized so concurrent terminals converge on the same refreshed token;
- an interrupted run is saved where it stopped and is not automatically resumed after login.

Rook never signs in silently.

## Isolate Rook State

Set `ROOK_HOME` when a process should not share credentials or local values:

```bash
export ROOK_HOME="$RUNNER_TEMP/rook"
rook auth status
```

Common reasons include:

- a CI job with its own account;
- separate staging and production identities;
- a temporary test environment;
- troubleshooting without changing the primary workstation state.

## Hook Variables Are Supplied by Rook

Variables such as `ROOK_HOOK`, `ROOK_RUN_ID`, `ROOK_SCENARIO_ID`, `ROOK_SESSION`, `ROOK_TURN`, `ROOK_CONVERSATION`, `ROOK_STATE_DIR`, `ROOK_WORKSPACE`, `ROOK_PROJECT`, and `ROOK_AGENT` are runtime context for hook scripts. Rook's values take precedence; setting them manually does not substitute for running the hook in a real lifecycle.

## Secret Handling Checklist

- Keep values out of profile YAML and source control.
- Give profiles the least-privileged credentials needed for the scenarios.
- Do not use `env show` in shared terminals or CI logs.
- Keep `.testmuai/rook/.gitignore` entries intact for credentials and machine-only state.
- Review MCP commands and headers before approval.
- Use a dedicated `ROOK_HOME` for unattended automation.

## Related Documentation

- [Profiles and hooks](/support/docs/rook-profiles-and-hooks/)
- [Workspace files](/support/docs/rook-workspace-files/)
- [CLI variables and defaults](/support/docs/rook-cli-reference/)
