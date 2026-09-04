# Rook Workspace Files

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook uses plain files rather than a hidden workspace database. That makes agents, test definitions, profiles, and evidence packs available for normal review, diffing, editing, and version control.

## Repository Tree

```text
.testmuai/rook/
├── settings.json                         active project and permission rules
├── .gitignore                            machine-only and sensitive exclusions
├── cache/                                derived indexes; safe to rebuild
└── projects/
└── <project-id>/
├── project.yaml
├── active                        selected agent
├── jobs/                         in-flight upstream writes
└── agents/
└── <agent-id>/
├── agent.yaml            derived agent definition
├── state.json            machine-local server IDs
├── features/
│   ├── F-001.yaml
│   └── F-005.yaml
├── scenarios/
│   ├── SC-001.yaml
│   └── SC-011.yaml
├── profiles/
│   ├── active
│   └── staging.yaml
├── scripts/
│   └── order-desk.mjs
└── runs/
└── 01M0VPKFSDC07CWWF51FGAVCCR/
├── run.yaml
├── agent.yaml
├── features.yaml
├── profile.yaml
├── scenarios/
└── report.yaml
```

## Why Runs Copy Their Inputs

Every run directory is self-contained. It snapshots:

- the agent definition as it was;
- the feature set as it was;
- the selected profile as it was;
- the scenarios as they were;
- all per-scenario verdicts and evidence;
- the final report.

This makes a verdict readable later even after the working agent, profile, features, and scenario definitions have all changed. It also lets reports distinguish a regression from a definition change.

## Files Excluded From Git

On first use, Rook adds a `.gitignore` below `.testmuai/rook/` for data that should not travel:

```gitignore
*.log
.env
cache/
projects/*/jobs/
projects/*/agents/*/state.json
```

These entries cover logs, credentials, derived caches, in-flight jobs, and machine-specific IDs. Rook appends missing defaults rather than rewriting the file, because a repository may have intentional local policy.

## What Is Safe to Review and Commit

Project YAML, agent definitions, features, scenarios, profiles containing references, hook scripts without embedded credentials, and completed evidence packs are designed to be readable project artifacts.

Before committing:

1. Review hook scripts for accidental literal secrets.
2. Confirm profile YAML contains only references such as `${API_KEY}`.
3. Inspect run evidence for target data that should not leave the test environment.
4. Keep machine-only `.gitignore` entries intact.

## Global State Lives Elsewhere

Credentials, actual environment values, history, logs, and installed versions are stored under `~/.testmuai/rook/` by default. Set `ROOK_HOME` to isolate that state for CI or another account.

## Synchronization

`rook sync` copies a reviewed project tree upstream as one write. Run results are stored locally first; `rook runs sync` reconciles finished runs that still owe remote records. Neither operation changes the historical input snapshots inside an existing run.

## Related Documentation

- [Concepts and data model](/support/docs/rook-concepts/)
- [Architecture](/support/docs/rook-architecture/)
- [Environment and secrets](/support/docs/rook-environment-and-secrets/)
- [Verdicts and reports](/support/docs/agent-assurance-results-and-evidence/)
