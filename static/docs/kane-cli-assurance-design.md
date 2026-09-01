# Designing Tests from Use-Cases

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

`kane-cli design tests` turns **one committed use-case** into everything that proves it: acceptance criteria (ACs), scenarios, and exactly one runnable test per scenario — conversationally, on the same chat surface [`kane-cli context extract`](/support/docs/kane-cli-assurance-context/#extract) uses. Everything the engine emits is **derived** knowledge you review; approvals promote it, nothing is silently trusted.

```bash
kane-cli design tests --use-case uc-manage-the-cart      # design one use-case (chat)
kane-cli design explain t-add-first-item                 # replay WHY — zero fresh AI
```

`` is a short logical id (`uc-manage-the-cart`, `t-login-smoke`) or a full cid.

## Flags

| Flag | Meaning |
|---|---|
| `--use-case ` | The use-case to design (optional with `--resume` — the session remembers it) |
| `--max ` | Budget ceiling: max scenario+test pairs kept. **No ceiling when omitted** — the agent estimates the right size and asks you to confirm. Every eviction becomes a named `budget-evicted` gap |
| `--strength pairwise\|3-wise` | Manual covering-array strength override; absent = risk-judged (3-wise when money, auth, or data loss is involved) |
| `--mode ` | Ask policy for headless runs: `agent` \| `ci` \| `override` — bare non-TTY exits `2`. See [Automation](/support/docs/kane-cli-assurance-automation/) |
| `--force` | Redesign a use-case that already has a live design (supersedes its scenario+test pairs; equivalent ACs are reused) |
| `--resume ` | Resume a paused session ([sessions](/support/docs/kane-cli-assurance-context/#sessions)) |
| `--message ""` | With `--resume`: answer the pending questions (or steer) in plain words |
| `--plan` | Transcription only — print each finalize payload, commit nothing |

## The session — five phases

Interactive runs are a chat. The engine works phase by phase and parks between phases for your approval; you steer in plain words.

0. **Grounding** — reads the use-case and its cited criteria, follows the cites into the actual source text, and surveys what already exists for reuse.
1. **Invariant ACs** — promises that hold across every path, each with a complete, machine-checkable oracle. A promise whose expected result the source never states becomes a `missing-expected-result` gap with a recommended default rather than an invented answer.
2. **Scenarios** — technique-driven path expansion: happy, negative, boundary, edge, and — where the use-case warrants them — security, accessibility, performance, and i18n paths. Existing scenarios are linked, never duplicated; preconditions become dependencies.
3. **Path ACs + wiring** — per-scenario criteria, plus the record of which scenario exercises which invariant. An invariant nothing exercises becomes an `invariant-unexercised` gap.
4. **Tests** — exactly **one test per scenario** (strict 1:1). Pairs are scored and cut at the budget; each kept test carries a runnable body, a baseline-capture step where a check needs a before/after delta, and a written check whose expected value comes from its AC — a check that disagrees with its criterion is rejected, so a test can't quietly assert something weaker than the requirement.

Between phases you steer in plain words: `looks good` (approve) · rename or correct an item (edit) · `drop 3` (reject) · `show 2` / `hide` (drill in) — plus the local slash commands `/explain ` (why an item exists — free, replayed from the record), `/done` (end the session), and `/pause` (save + exit `3`). The chat shell — the question panel, the composer grammar, ctrl+t, ctrl+c-to-pause — is exactly the one [extract uses](/support/docs/kane-cli-assurance-context/#the-interactive-chat).

Headless modes run all phases without parking and emit one combined result; a high-risk question pauses an `agent`-mode run (resumable) and fails a `ci`-mode run closed. See [Automation](/support/docs/kane-cli-assurance-automation/).

## What you get

A design run commits to the graph **and writes files**. Each kept test lands as a normal, runnable `*_test.md` under `/.testmuai/tests/`:

```markdown
---
assurance:
id: t-add-one-in-stock-product-and-verify-minimum-valid-cart
base: sha256:00f8…
---
# Add one in-stock product and verify minimum valid cart pricing

> Prove the customer can create the minimum valid cart and see a line total and subtotal.

## Step 1

Open {{store_url}} in a fresh browser session and navigate to the product listing…

## Step 4 — assert @verifies ac-a-valid-cart-contains-at-least-1-item, ac-the-cart-displays-an-order-subtotal

Confirm count check: 1 (equals) — the stated promise: after adding one in-stock product, the cart contains exactly 1 item.
```

Three things to notice:

- **`@verifies` tags** bind each assert step to the acceptance criteria it proves. This is the link [`kane-cli cover`](/support/docs/kane-cli-assurance-coverage/) measures against — captured at authoring time, permanent, auditable.
- **`{{variables}}`** appear wherever the requirements didn't pin a value (the store URL, a known in-stock product). Each unknown is also recorded as a gap so it can't be forgotten. Supply values the normal way — see [Variables & context](/support/docs/kane-cli-variables-and-context/).
- The `assurance:` frontmatter links the file to its design entry in the graph, so coverage lookups are exact even after the file moves.

Alongside the tests, the run records the ACs and scenarios themselves, the wiring between them, **gap nodes** with full context for everything it could not resolve, and a rationale sidecar per test (under `.context/design/rationale/`) that `design explain` replays. You'll also see **warnings** at commit time — for example when a test's `@verifies` list claims more criteria than its written check actually asserts.

Design output is derived like everything else — review it with [`kane-cli context review`](/support/docs/kane-cli-assurance-context/#review), or browse it with [`kane-cli context view`](/support/docs/kane-cli-assurance-context/#inspect).

### From design to execution

A designed test is a normal test file — but it is still `derived`, and it has never been *run*. First review the design output like anything else the engine emits (approve, edit, or reject the generated ACs, scenarios, and tests with [`kane-cli context review`](/support/docs/kane-cli-assurance-context/#review) — the commit-time warnings resurface there). Then author each kept test once, and it batches like any other test:

```bash
kane-cli testmd run .testmuai/tests/t-add-one-…_test.md   # author it (first run, agent works it out)
kane-cli testrun run --match 't-'                          # from then on: batch replay
```

Until a test has been authored, `kane-cli testrun` preflight reports it as `missing_meta` and [`kane-cli cover`](/support/docs/kane-cli-assurance-coverage/) reads its criteria as covered-on-paper but unproven. That reading is deliberate — see [Coverage](/support/docs/kane-cli-assurance-coverage/#the-authoring-bridge).

## Re-runs and `--force` {#re-runs-and-force}

A use-case with a live design refuses a re-run, staleness-aware:

```
'uc-manage-the-cart' is already designed @ v1 — current; use --force to redesign
'uc-manage-the-cart' was designed @ v1 — the use-case is now @ v2 (STALE); use --force to redesign
```

`--force` regenerates the scenario+test pairs (superseding the old ones); ACs are dedup-first — an equivalent AC re-emitted by the engine reuses the existing node instead of piling up copies. When the staleness comes from a source document you just changed, [`kane-cli maintain reconcile`](/support/docs/kane-cli-assurance-maintain/) surfaces the same re-design as part of its changed-source triage; for staleness from older changes, [`kane-cli maintain evolve`](/support/docs/kane-cli-assurance-maintain/#evolve) re-designs the use-case with the blast radius stated first.

## `design explain` — replay the why

```bash
kane-cli design explain <ref>
```

Replays the recorded rationale — never a model call:

- a **test** → the technique that produced it, the boundary values considered, the covering-array strength and why, the criteria it verifies and the scenario it automates;
- a **scenario / AC / gap** → its content plus every recorded judgement and review verdict.

Ask it "why does this test exist?" six months later and the answer is the one recorded at design time, not a reconstruction.

## Extending the technique catalog

The design engine ships with an embedded catalog of test-design techniques and surface profiles. Drop replacement or additional YAML under `.context/design/` (same id overrides, new ids append) to extend it per store — no upgrade needed.

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Design complete (or `--plan` transcription complete). |
| `1` | Runtime failure. |
| `2` | Usage / refusal — unknown use-case, already-designed without `--force`, bare non-TTY without `--mode`. |
| `3` | Session paused and resumable — see [sessions](/support/docs/kane-cli-assurance-context/#sessions). |

## Next steps

- [Coverage](/support/docs/kane-cli-assurance-coverage/) — measure what the designed tests prove.
- [Maintaining the suite](/support/docs/kane-cli-assurance-maintain/) — reconcile the suite when requirements change.
- [Automation](/support/docs/kane-cli-assurance-automation/) — headless design in CI or from an agent.
