# Maintaining the Suite as Sources Change

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Products change; tests shouldn't rot. `kane-cli maintain` closes the [assurance loop](/support/docs/kane-cli-assurance/): when a requirement document changes, `maintain reconcile` turns that one changed source into an honest, row-by-row update plan for your suite, and `maintain evolve` re-designs a use-case whose design went stale. Everything works over the same `.context/` store — maintain adds no new knowledge kinds, it moves the existing ones.

```bash
kane-cli maintain reconcile --from <file> --source-id <id>          # the interactive session (TTY default)
kane-cli maintain reconcile --from <file> --source-id <id> --plan   # preview: stage + store the plan
kane-cli maintain reconcile --apply [path]                          # continue a stored plan
kane-cli maintain reconcile --from <url>                              # a Jira, Confluence, Linear or web URL
kane-cli maintain reconcile --from <file> --source-id <id> --mode agent   # headless — see Automation
kane-cli maintain evolve <ref> [--because "<reason>"]               # re-design one stale use-case (interactive)
kane-cli maintain evolve --from-stale                               # …or every use-case with stale designs
```

## `maintain reconcile` — one changed source, one triage {#reconcile}

Reconcile is the on-change front door: a requirement document changed — what should the suite do about it? It re-ingests the source, re-extracts use-cases over the new snapshot, leads with a changeset (what the change did to your knowledge), and then triages the resulting rows with you.

It takes **two explicit inputs** — reconcile never guesses which source a file belongs to:

- `--from ` — the **new** version of the document: a file path, or a remote source URL — a Jira issue, a Confluence page, a Linear issue or document, or a public web page. These are the same URLs [`context ingest`](/support/docs/kane-cli-assurance-sources/) takes. See [Remote sources](#remote-sources) below.
- `--source-id ` — the **existing** source this file succeeds; its head moves. Find ids with `kane-cli context list --type source`.

Both are required on a fresh run. `--apply ` alone is enough to continue a stored plan — the plan remembers its source.

Hand reconcile the changed file directly — don't `context ingest` the new version first. Reconcile does the re-ingest itself, and [re-running the same command](#running-again) is always safe.

### Fail-fast validations

Before anything runs — no questions asked, nothing written, identical in every mode — reconcile validates its inputs, in order:

1. both `--from` and `--source-id` are present;
2. the file exists and is a regular file;
3. it is an ingestable document type;
4. the source id names a known source;
5. that source isn't retired (restore it first with [`kane-cli context revert`](/support/docs/kane-cli-assurance-context/#housekeeping));
6. the file doesn't already back a **different** live source — the fork guard: the error suggests the `--source-id` you probably meant, so one document's history never silently forks into another's.

Any failure exits `2` with a message naming the next command to run. In `--mode agent`, validation failures ride the NDJSON stream (`error` + `done`), never stderr alone.

### The changeset — what the change did

Rendered first, before any actions:

```
changeset: 3 item(s)
[MODIFY] uc-manage-the-cart — updated: title, criteria
[ADD] uc-save-cart-for-later
[ARCHIVE] uc-legacy-flow — evidence decayed: no quote from the source relocates into the new text, no other live source, no fresh evidence this run
```

- **MODIFY** — the re-extract matched an existing use-case whose content moved. Each MODIFY knows *why*: a content change in the source, or a structural break the change caused.
- **ADD** — a use-case newly extracted from the changed source.
- **ARCHIVE** — a strict, three-part evidence decay: every quote fails to relocate into the new text, *and* no other live source evidences the node, *and* this run attached no fresh evidence. All three, or it isn't proposed for archiving.

### The session (the default in a terminal)

Interactive reconcile is a **card walk**: one ADD / MODIFY / ARCHIVE card at a time, each with its why — ARCHIVE cards carry the full evidence-decay reasoning, and MODIFY and ARCHIVE cards state their honest downstream cost up front (`impact: approving marks 14 item(s) stale`). While a card is up, every keystroke belongs to the card:

- **Arrow keys** move through the options, **Enter** takes the highlighted one, and **digits** jump straight to an option.
- **Typing anything else opens an inline editor** seeded with your words — they become the steering the re-design sees, and approving applies both in one gesture.

The verdicts per card:

- **ADD / MODIFY** — **approve** (an ADD runs a design session for the new use-case right there; a MODIFY commits the update, or re-designs via [`maintain evolve`](#evolve) when the break is structural, blast radius stated first) · **reject** (drop the staged proposal) · **defer** (park it — the stored plan keeps it and a later run re-offers it) · or type to **steer** the re-design in your own words.
- **ARCHIVE** — **retire** (the explicit verdict; reversible any time with [`kane-cli context revert`](/support/docs/kane-cli-assurance-context/#housekeeping) — nothing is ever deleted) · **skip** · **defer**.

After the last card the composer wakes: type ` ` to route one more re-design through the same session. **Nothing lands unapproved** — beyond recording the source change itself, everything a reconcile proposes is staged until you decide. Ctrl+C pauses cleanly (pending work lives in the stored plan, and the same reconcile command picks it back up), and the session ends with an honest summary of what was applied, rejected, deferred, and retired.

### `--plan` — a preview that doesn't touch the suite

`--plan` records the source change and **stages everything downstream**: the proposed rows are held in a stored plan (`plan stored: `, under `.context/reconcile/plans/`), and no tests or designs are touched. Two things do land, disclosed in the output: the head move (the change fact is true regardless of what you decide), and a matched use-case whose source content moved is updated as part of the re-extract itself. Every MODIFY and ARCHIVE row in the plan carries its impact line (`impact: approving marks N item(s) stale`), and a `skipped arms` line names every analysis this release does not run.

Walk the plan later with `--apply ` — or bare `--apply`, which picks the latest plan behind an approval prompt (headless modes accept it silently). `--apply --from  --source-id ` recomputes live instead. `--plan` and `--apply` together is a usage error (exit `2`). A repeated `--plan` re-renders the stored plan; an unchanged source is a truthful no-op (`nothing to reconcile`).

### Remote sources — `--from ` {#remote-sources}

`--from` also accepts a remote source URL: a Jira issue, a Confluence page, a Linear issue or document, or a public web page. These are the same URLs [`context ingest`](/support/docs/kane-cli-assurance-sources/) takes.

Remote sources ride the same flow as files. Reconcile fetches the latest content through the provider, the head moves if anything you would cite changed, and everything downstream — the cards, `--plan` and `--apply` — is identical.

```bash
kane-cli maintain reconcile --from https://<your-site>/browse/PROJ-123 --plan
kane-cli maintain reconcile --from https://<site>/wiki/spaces/<KEY>/pages/<id>/…
kane-cli maintain reconcile --from https://linear.app/<workspace>/issue/ENG-42
kane-cli maintain reconcile --from https://docs.example.com/guide
```

Three rules are specific to remote sources:

- **The id comes from the URL.** `proj-123` or `eng-42` for an issue, `page-` for a Confluence page, `doc-` for a Linear document, and a slug plus a short hash for a web page. That makes `--source-id` optional. Passing one that contradicts the URL's own identity refuses, because reconcile never adopts a URL under a different id. A source you ingested under a custom id with `context ingest --as` is maintained by re-running that ingest with the same `--as`.
- **Kind continuity, both ways.** A URL cannot version a file-backed source that happens to share its id, and a file cannot version a remote source. Each refuses and names the correct `--from`. The same check runs when a stored plan replays, so a stale plan can never overwrite a source whose backing changed hands.
- **Stored plans remember the URL** and recompute by re-fetching it, the same way a file plan re-reads its file.

After an upgrade, the first reconcile of a Jira issue ingested on an older release may report a head move that is not a content edit. That is the source's one-time re-version, not a change to review.

### Running again — reconcile converges {#running-again}

The same command is safe to repeat; it picks up where things stand:

| State on a re-run | What happens |
|---|---|
| the file's bytes changed again | a fresh reconcile of the new change |
| unchanged, and the stored plan has pending rows | the plan is **resumed** in your chosen mode |
| unchanged, and the plan was fully applied | `already reconciled` — clean exit |
| unchanged, no stored plan | `nothing to reconcile` |
| the graph moved since the plan was stored | `graph moved since this plan — recomputing` (pending work is re-staged, not re-billed) |

A plan stored by an earlier kane-cli version is refused with a hint to recompute — plans don't survive format changes silently.

### Headless modes

`--mode agent|ci|override` is the same ask-policy matrix extract and design use — see [Automation](/support/docs/kane-cli-assurance-automation/) for the full contract and reconcile's NDJSON stream. Two things are specific to reconcile:

- Headless runs don't stage: the re-extract commits as it goes, and rows apply per mode — `override` and `ci` auto-apply ADD and MODIFY rows; `ci` fail-closes when a run needs human judgement; `agent` streams typed events and pauses.
- **Archiving is never automatic.** No headless mode archives anything; ARCHIVE decisions wait for an interactive session.

A bare non-TTY run refuses (exit `2`) and asks for an explicit `--mode` — or `--plan` for a preview.

### The rows

| Kind | Fact behind it | Action on approve |
|---|---|---|
| `ADD` | a use-case newly extracted from the changed source, or an uncovered criterion of a touched use-case | a design run for that use-case (`kane-cli design tests --use-case `) |
| `MODIFY` | matched-but-changed content, or an entity whose pins this change broke | commit the update, or re-design via `kane-cli maintain evolve ` when the break is structural |
| `REMOVE` | a use-case now orphaned — no live source evidences it | plan-only — never executed in this release |

## `maintain evolve` — re-design a stale use-case {#evolve}

```bash
kane-cli maintain evolve <ref> [--because "<reason>"]   # any designed entity → its parent use-case
kane-cli maintain evolve --from-stale                   # every use-case with stale designed entities
```

Evolve re-designs the **parent use-case** of whatever you point it at — a test, scenario, criterion, or the use-case itself. It is interactive-only, and the blast radius is always stated before anything runs; declining is a clean exit.

- **Staleness-gated:** a fresh target refuses. `--because ""` is the sanctioned override — your reason becomes the change context the re-design sees, on the record.
- `--from-stale` collects every use-case with stale designed entities and walks them one confirm at a time.
- After a clean run, evolve reports the diff between the two design generations — what was superseded, what was minted, what was **retained** unchanged, and which criteria's verifying tests moved. A re-design doesn't break what it didn't change.
- Reconcile's MODIFY rows route here automatically — reach for evolve directly when staleness arrived outside a reconcile (an older change, a retired source). [`kane-cli cover gaps`](/support/docs/kane-cli-assurance-coverage/) lists stale designed entities in its ranked worklist.

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Session, plan, or resume complete — or a friendly no-op (unchanged source). |
| `1` | The reconcile chain failed, or another live reconcile holds the lock (a dead run's lock clears itself — never delete it by hand). |
| `2` | Usage or validation failure — nothing was mutated. |
| `3` | Paused — pending work is in the stored plan; the same command (or `--apply`) continues it. |

## Next steps

- [Requirement sources](/support/docs/kane-cli-assurance-sources/) — every file type and remote URL reconcile accepts.
- [Coverage](/support/docs/kane-cli-assurance-coverage/) — `cover gaps --stage design` is the standing worklist between reconciles.
- [Designing tests](/support/docs/kane-cli-assurance-design/) — what an approved ADD row actually runs.
- [Automation](/support/docs/kane-cli-assurance-automation/) — reconcile in CI, and its NDJSON stream.
