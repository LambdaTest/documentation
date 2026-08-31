# Validating Evidence Packs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

`kane-cli evidence validate` checks a pack's integrity and completeness:

```bash
kane-cli evidence validate <execution-id-or-path>
```

The target can be an execution id, resolved against the project store, a live pack directory, or a sealed `.evidence` file.

| Flag | Description | Default |
|---|---|---|
| `--profile ` | Validation profile, `L0` or `L1` | `L1` |
| `--json` | Machine-readable report | off |

Exit codes: `0` valid, `1` invalid, `2` not found. `--json` plus the exit code makes this easy to gate in CI or scripts.

## Gating a pipeline

```bash
kane-cli evidence validate .testmuai/evidence/<execution_id>.evidence --json > report.json || exit 1
```

## What validation checks

Validation is **status-gated**. A pack that is still `running` or was `aborted` is checked for structure only. A `finalized` pack gets the full seal checks as well.

**Structure, on every run status:**

- the manifest anchor `run.yaml` and its identity fields are present,
- each test's recorded id equals its `tests//` directory name,
- every test directory has a `result.yaml`, and where a `result.yaml` declares a definition path, the file at that path exists,
- a declared definition path is contained, with no leading `/`, no `..`, and no escape out of the pack,
- step ordinals are unique and strictly increasing, with gaps allowed.

**Full seal, added when the run is `finalized`:**

- `ended` and `totals` are present, and `ended` is at or after `started`,
- `totals` equals the rolled-up per-test verdicts, and the test count equals the sum of the verdict buckets,
- every declared definition carries a hash, and the hash matches its file.
- at `L1`, each test has a `logs/` directory whose `meta.yaml` declares at least one log, and a `steps/` directory; the pack has a global `coverage/` directory and the finalize-generated root `failure.yaml`.

A test marked `passed` that still has a `failed` or `broken` step is a **warning**, never a failure. The test verdict is authored, so the validator checks it, it does not overrule it.

## Profiles

| Profile | What it requires |
|---|---|
| `L0` | The minimal core: `run.yaml`, and for each test a `result.yaml`, plus its definition file where one is declared. |
| `L1` | Everything in L0, plus the captured artifact layer: declared logs, the `steps/` layer, a `coverage/` directory, and the run-level failure index. These need to be present only once the run is `finalized`. |

kane-cli packs carry the captured layer, so they validate at `L1`. That is the default for this command.


A missing per-step screenshot is a **warning**, not an error. Not every framework captures a frame per step, and not every step needs a folder.


## When a pack will not open

If a pack will not open in the viewer, validate it. An unsealed pack, for example from a run that was killed hard, is checked for structure only, so it can still report valid. A truncated pack cannot be read at all and fails before any verdict.

## Next steps

- [Merging packs](/support/docs/kane-cli-evidence-merge/) — combine several runs into one file.
- [The .evidence format](/support/docs/kane-cli-evidence-format/) — what the profiles mean.
