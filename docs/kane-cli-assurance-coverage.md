---
id: kane-cli-assurance-coverage
title: "Coverage: Proven vs Owed"
sidebar_label: Coverage
description: "Measure coverage on two axes with kane-cli cover — what a sealed evidence pack proved in execution, and what the design still owes — plus a ranked gaps worklist with ready-to-paste commands."
keywords:
  - kane cli cover
  - test coverage
  - coverage gaps
  - evidence pack
  - requirements coverage
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-assurance-coverage/
site_name: TestMu AI
slug: kane-cli-assurance-coverage/
canonical: https://www.testmuai.com/support/docs/kane-cli-assurance-coverage/
---

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

`kane-cli cover` measures coverage on two independent axes over the same store:

- **Depth** — what a real execution **proved**, read from an evidence pack's coverage records. Facts only: the pack was sealed with these verdicts inside it; `cover` never recomputes them.
- **Completeness** — what the design still **owes**, computed live from the `.context/` graph. A perfect pack can still ship with an unverified criterion or a happy-path-only use-case; this axis never reads packs.

A run can look green and still owe you coverage — that's exactly the situation the two axes make visible.

```bash
kane-cli cover [--from <pack>] [--json]                     # the two-axis panel
kane-cli cover gaps [--stage design|cover|all] [--top <n>] [--from <pack>]  # the ranked worklist
```

## The panel

```
coverage — 8f0e…f2.evidence

depth (proven by the pack):
  ◐ ███░░░░░░░  38%  uc-buy-as-a-guest — partial (1/4 ACs proven, 1 failed, 1 blocked)
  ✔ ██████████ 100%  uc-mobile-sign-in — covered (1/1 ACs proven)  · 1 stale

completeness (live graph):
  [high] create ac-payment-declined-message — no test verifies this AC
         → kane-cli design tests --use-case uc-buy-as-a-guest
```

The panel always shows **both** axes: the pack's proven depth, then the live-graph completeness worklist with its ready-to-paste commands (`--json` emits both as one document).

- The default pack is the newest in `<cwd>/.testmuai/evidence`; `--from` takes a pack directory, a sealed `.evidence` file, or an execution id.
- Depth is **risk-weighted and lenient**: a high-risk criterion weighs more, and a passed-but-stale criterion still counts as proven — staleness is surfaced (`· N stale`), never silently demoted. Per-use-case status is `covered` (every AC proved) · `blocked` (something couldn't run, nothing failed) · `partial` · `uncovered`.
- Coverage reflects **this run**: sealed packs cover only what the run touched. Project-wide coverage lives in the graph axis, unaffected by any single pack.
- `--json` emits the full panel as structured data.

## `cover gaps` — the worklist

One ranked list (risk first) of what to do next, each row with a ready-to-paste command:

```
gaps — stage design (5)
   1. [high] create uc-checkout-while-signed-in — use-case has no scenarios
      → kane-cli design tests --use-case uc-checkout-while-signed-in
   2. [med] create ac-the-cart-displays-an-order-subtotal — no live test verifies this acceptance criterion
      → kane-cli design tests --use-case uc-manage-the-cart
```

- `--stage design` (default, no pack needed) — criteria no test verifies, use-cases with no or only-happy scenarios, recorded gap nodes from design runs, stale designed entities.
- `--stage cover` (needs a pack) — a covered criterion whose **execution** disappointed: `failed` → re-design that slice; `blocked` or never-run → the test exists, run it.
- `--stage all` — both, one ranking. `--top <n>` trims the list.

## `cover gaps` — the coverage ribbon *(0.8.2)*

The default output is one continuous band-table over two axes, entirely graph-fed — no pack is opened or needed:

- **designed** — how much of the live requirement set has a live test verifying it (risk-weighted: high-risk criteria weigh more). Freshness never moves the number — stale criteria surface as `STALE` debt instead.
- **proven** — the store's **own execution facts** (every `testmd run` / `testrun run` records its verdicts at finalize), scored by the same formula a sealed pack uses — so the live number and a pack's number agree at the formula level. `--rollup lenient|strict` selects the formula (default `lenient`). With no recorded runs anywhere, the proven line says so in words — never a fake 0%.

The ribbon is deliberately high-level. A three-line header — the title with the rollup and how recently anything ran, then both axis bars, the proven line carrying the class census — then **one row per live use-case**, ordered by severity (failing → blocked → design debt → stale → pending-run → clean): id, title, designed and proven percent bars colored by value, and per-class debt counts (`FAILING · BLOCKED · STALE · TO DESIGN · TO RUN`). A count column renders only when some use-case carries that debt, and a narrow terminal drops the counts and keeps id, title, and bars. The last line is the drill-in hint. There are no AC rows, commands, or gap rosters at this level — detail lives in the dossier. With zero execution facts the all-clear reads `designed · nothing run yet`; the ribbon only ever says "proven" when every criterion's verifying test actually passed. Piped output keeps the same grammar; color and the width-responsive layout differ.

*(0.7.2)* A change you deferred during a [reconcile review](/support/docs/kane-cli-assurance-maintain/#reconcile) still surfaces here — in the ribbon's debt counts, and as a pending row in the dossier and the `--json` document with the reconcile command as its remedy. Deferring parks a decision, it never hides one.

### `cover gaps <uc-id>` — the dossier *(0.8.2)*

The dossier owns the detail for one use-case: its axis bars scoped to that use-case, then **every live acceptance criterion** in a full-text census table — `id · STATE · RISK · criterion`, wrapped, never truncated — proven and not-yet-run rows included. A failing row cites the test file when its id resolves to exactly one file (id-only otherwise), and a `next` actions block **leads with evidence, never a blind re-run**:

```
→ kane-cli evidence serve <pack>     (see why it failed)
```

with the run/design remediation second, carrying its own warning — a failed test re-run in authoring mode may heal itself around the failure, so fix the app first.

### Flags

- `--stage design|cover|all` (default `all`) filters the `--json` document's pending rows — it never moves a number, a row, or the table order.
- `--top <n>` bounds pending rows per use-case in the `--json` document; the table always renders one row per use-case and is never truncated.
- `--rollup lenient|strict` selects the proven-axis formula (default `lenient`).
- `--json` emits the nested machine document: the designed axis, the proven axis (absent entirely when the store has no execution facts), and the per-use-case pending rows, each carrying its `ready_command`. With a `<uc-id>` the document **closes over that use-case** — one entry, project-wide leftovers emptied. Debt that belongs to no live use-case rides only the `--json` document, never the human views.

## Agents and CI *(0.7.1)*

Both `cover` and `cover gaps` take `--mode agent|ci`: the run speaks the same NDJSON envelope as the other assurance commands — the whole `--json` payload arrives as a single `coverage` (or `gaps`) event — with a `<uc-id>`, the closed-over document *(0.8.2)* — `done` is always last, and `done`'s `next[]` carries the worklist's own ready-to-paste commands. A refusal is an `error` event plus `done` with exit `2`. See [Automation](/support/docs/kane-cli-assurance-automation/).

## The join: how a pack knows your graph

Every per-test result in an evidence pack carries a `definition_id` — a hash of the resolved test definition, identical to the one design stamps on each test it emits. The pack↔graph join is this hash equality and nothing else: no ids to sync, no registry to maintain. A hand-edited test hashes differently and simply stops joining — honest, not broken (a redesign — [`design tests --force`](/support/docs/kane-cli-assurance-design/#re-runs-and-force) or [`maintain evolve`](/support/docs/kane-cli-assurance-maintain/#evolve) — re-stamps the link).

Coverage records land in packs automatically whenever the project has a `.context/` store — the inline `run`/`testmd` path and `testrun` both write them before sealing. A project without a store gets byte-identical packs to before; a coverage-write failure never costs the seal.

## The authoring bridge

A freshly designed test has never been executed, and the tooling is honest about that:

1. `kane-cli design tests` writes `t-…_test.md` files — runnable, but with no recording yet.
2. `kane-cli testrun` preflight refuses never-authored members (`missing_meta`).
3. So the first run of each designed test is [`kane-cli testmd run <file>`](/support/docs/kane-cli-testmd/) — the agent authors it in a real browser and commits the recording.
4. From then on the test replays like any other: batch it with `testrun`, and its verdicts join the pack via `definition_id`.

Until step 3 happens, `cover` reads the test's criteria as *covered on paper, unproven in execution* (`covered_by` present, execution `not-run`). That is a deliberate reading, not a bug — a designed test is a claim until a run proves it.

## Inside the pack: `coverage/usecases.yaml`

The pack's coverage record is one YAML file you can read, diff, and archive — one row per live use-case: identity and risk, sources and provenance, scenarios, and each acceptance criterion with its verdict join (`covered_by`, `execution: passed|failed|blocked|not-run`, `fresh`, the expected answer, and what satisfied it). Diff two packs' `usecases.yaml` to see exactly what a release changed in proven coverage.

## Next steps

- [The authoring bridge in practice](/support/docs/kane-cli-assurance-design/#from-design-to-execution) — design → author → batch.
- [Maintaining the suite](/support/docs/kane-cli-assurance-maintain/) — act on what the gaps list tells you.
