---
id: hyperexecute-rerun-rules
title: "Rerun Rules in HyperExecute: When a Job Can Be Rerun, and How Much of It"
hide_title: false
sidebar_label: Rerun Rules
description: "Reference for HyperExecute's Rerun engine: every refusal, every narrowed scope, and every warning the Rerun dialog can produce, taken from the evaluator rather than the user-facing docs, with the exact text each rule emits."
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - HyperExecute Rerun Rules
  - HyperExecute Rerun engine reference
  - rerun admission gate
  - rerun scope gate
  - rerun advice gate
url: https://www.testmuai.com/support/docs/hyperexecute-rerun-rules/
site_name: TestMu AI
slug: hyperexecute-rerun-rules/
canonical: https://www.testmuai.com/support/docs/hyperexecute-rerun-rules/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Rerun Rules in HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-rerun-rules/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-rerun-rules/"
    },
    "headline": "Rerun Rules in HyperExecute: When a Job Can Be Rerun, and How Much of It",
    "description": "Reference for HyperExecute's Rerun engine: every refusal, every narrowed scope, and every warning the Rerun dialog can produce, taken from the evaluator rather than the user-facing docs, with the exact text each rule emits.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-rerun-rules/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI HyperExecute",
      "TestMu AI HyperExecute help",
      "TestMu AI HyperExecute documentation"
    ],
    "proficiencyLevel": "Advanced",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    }
  }) }}
/>

:::info Reference page
Every refusal, every narrowed scope and every warning the Rerun dialog can produce - taken from the evaluator rather than from the user-facing docs, with the exact text each rule emits. For the step-by-step walkthrough on using the Rerun button, see [Rerun Failed Tests on HyperExecute](/support/docs/hyperexecute-rerun-failed-tests/).

Sourced from:
- `hyperexecute-logistics` → `internal/entities/rerun/{engine,emit,model}.go`
- `lt-web-platform` → `HypertestJobDetail/ReRun/{ReRunButton,ReRunScope,ReRunContent}.jsx`
:::

## 01 · The three gates

One evaluator answers both the preview and the trigger, so the dialog can never offer a scope the trigger would reject. Its output passes three independent gates, and they fail differently - which is why "rerun is not supported" is never one question.

| Gate | Outcome | What the user sees |
| :---- | :---- | :---- |
| **1 - admission** | The button disappears | No Re-Run button is rendered at all. The reason is computed but never shown: nothing the user could change in a dialog would help, so there is no dialog. |
| **2 - scope** | Only "All Scenarios" | The job is rerunnable, but the failed subset cannot be derived. That option is disabled, the selection falls back to complete, and the reason is shown. |
| **3 - advice** | Offered, with a caveat | Both scopes work. A message warns about cost or about a precondition only the user can satisfy, such as a named tunnel being up. |

A refusal at gate 2 never affects gate 1: a job that cannot be narrowed is still fully rerunnable. `Evaluate` returns admission and the two `ScopeVerdict`s in one object, so both are decided from the same inputs at the same moment.

## 02 · Before the evaluator runs

Two conditions hide the button in the browser without ever asking the backend. Both are in `ReRunButton.jsx`.

| Condition | Effect | Detail |
| :---- | :---- | :---- |
| Feature flag off | Button hidden | The org lacks `hye-enable-rerun-ui`. Defaults to false, so rerun is opt-in per organization. |
| Job has not ended | Button hidden | Status is one of `running`, `queued`, `initiated`, `in-progress`, `inProgress`, `in progress`, `created`. The preview is not even requested. |

## 03 · Gate 1 - the job is refused outright

These are properties of the job itself. Each is independently sufficient; the order below is the order `admissionRefusal` and `structuralRefusal` test them, which matters only for which message wins when several apply.

| Condition | Message the evaluator returns | Decided by |
| :---- | :---- | :---- |
| Still running | `this job is still running; rerun it once it has ended` | `admissionRefusal` |
| Past retention | `this job is older than the retention window and can no longer be rerun` | `expired` |
| Config no longer stored | `this job's configuration is no longer stored, so it can no longer be rerun` | `structuralRefusal` |
| YAML not 0.1 | `rerun supports version 0.1 jobs only` | `configVersion` |
| Mobile job | `mobile jobs cannot be rerun from here; trigger the test again from your mobile flow` | `isMobile` |
| KaneAI-triggered | `this job was triggered by KaneAI; rerun it from KaneAI` | `isKaneAI` |
| No project | `this job has no project, so no git credential can be resolved to fetch its payload` | `projectID` |
| Project deleted | `this job's project has been deleted, so it can no longer be rerun` | `structuralRefusal` |
| CLI-opened tunnel | `this job used a tunnel opened by the CLI on your machine, which a rerun cannot open; run it again from the CLI, or use a named tunnel` | `tunnelRefusal` |
| `mode: local` global step | `this job ran its global-pre / global-post on the machine that started it (mode: local), which a rerun cannot do; rerun it from the CLI` | `localGlobalStep` |
| Not from git | `this job did not run from git, so its payload cannot be fetched again` | `sourcePlatform` |
| Uncommitted changes | `this job ran with uncommitted local changes, so its payload cannot be fetched again` | `sourceDirty` |
| Hybrid reruns switched off | `reruns of hybrid jobs are switched off for this organization` | `HybridRerunOff` |
| Nothing ran | `this job ran no scenarios, so there is nothing to rerun` | `admissionRefusal` |
| Nothing failed | `no scenario failed in this job, so there is nothing to rerun` | `admissionRefusal` |

### Worth knowing about these

- **Mobile** means `ios/xcui`, `android/espresso`, `appium`, `android/appium` or `ios/appium`, matched case-insensitively on the job's test type.
- **KaneAI** is matched as a case-insensitive substring of the trigger source, so decorated values like `kaneai-scheduled` count.
- **Retention** is 60 days. A job with a stamped expiry uses it; a job with no expiry falls back to its creation date. With neither field known the job is treated as live - deliberately, so an instance that does not report `created_at` does not refuse every rerun. Such a job is refused anyway for having no outcomes.
- **No project** is about the credential, not the repo. Vault's lookups are keyed by project. A project that merely has no repo linked is not refused - the org-level `git_token` fallback covers it, and the git pre-flight owns that question.
- **Hybrid off** is the sentinel flag `hye-rerun-hybrid-disabled`, an org kill switch, not a property of the job.
- **On-prem** skips the tunnel check entirely - both the refusal and the advice return early when `global.IsOnPrem`.

## 04 · Gate 2 - the failed scope cannot be built

The job is rerunnable; only the subset is unavailable. The UI disables **Failed & Non Executed Scenarios**, switches the selection to complete, and prints the reason in a `role="status"` line.

### Ruled out before the manifest is read

| Condition | Message | Decided by |
| :---- | :---- | :---- |
| Latest commit chosen | `only the original commit can rerun just the failed scenarios — the tests may have changed since. Switch the commit back, or rerun all scenarios` | `subsetPrecondition` |
| `globalPre.yamlPath` | `this job uses globalPre.yamlPath, which can change its test list while it runs, so only All Scenarios can be rerun` | `globalPreYamlPath` |
| `dynamicAllocation` | `this job uses dynamicAllocation, so only All Scenarios can be rerun` | `dynamicAllocation` |
| `testDiscovery.mode: dynamic` | `this job uses testDiscovery.mode: dynamic, so only All Scenarios can be rerun` | `dynamicDiscovery` |
| Manifest read failed now | `we could not load this job's test details just now, so only All Scenarios can be rerun. Try again in a few minutes` | `ManifestErr` |

Only the last of these is transient. Dynamic discovery is refused because each task discovers on its own VM and the dispatcher distributes a stored result only under static or remote discovery - a reduced set would be accepted and then silently ignored.

### Ruled out by what was recorded

| Condition | Message | Decided by |
| :---- | :---- | :---- |
| Job predates manifests | `this job ran before we started tracking scenario details, so only All Scenarios can be rerun` | `computeSubset` |
| Auto-split, no stored list | `we do not have the list of scenarios this job ran, so only All Scenarios can be rerun` | `legacySubsetFromConfig` |
| Coverage gap | `we do not have the full details of what this job ran, so we cannot tell which scenarios to rerun. Rerun all scenarios instead` | `manifestUsable` |
| Shape unrecognised | `we could not work out how this job was organized, so only All Scenarios can be rerun` | `computeSubset` |
| Everything settled | `no scenarios are left to rerun on their own` | `unsettledUnits` |

A manifest that is absent, that does not cover the slices the job ran, or that omits units the outcomes name are all one condition to a reader: what was recorded cannot be trusted. All three route through the stored-config fallback before anything is refused. For an auto-split job the stored `testDiscoveryResult2D` can still answer; other shapes cannot.

### Ruled out by the job's shape

| Shape | Condition | Message |
| :---- | :---- | :---- |
| Hybrid | A unit's OS was not recorded | `we do not know which machine each scenario ran on, so only All Scenarios can be rerun` |
| Hybrid | Remote `globalPre` and failures on more than one OS | `this job's failures are on more than one machine and its scenarios cannot be split that way. Rerun all scenarios instead` |
| Hybrid | Converted hull beyond 20,000 combinations | `this job has too many configurations (N) to rerun selectively. Rerun all scenarios instead` |
| Matrix | A unit carries no combination | `we do not know which configuration each scenario ran under, so only All Scenarios can be rerun` |
| Hybrid | A non-OS matrix key cannot be pinned to one value | (from `pinNonOSKeys` - a key left with several values would put several combinations in one dispatch call) |

A single-task job with no matrix (`shape: none`) is never refused here. The failed set is the job, so both options are offered showing the same count rather than making the reader work out that they are the same thing.

## 05 · Gate 3 - offered, with a message

Advice travels beside an offered scope, never instead of it. Several pieces join with `;` onto the one line the dialog has.

| Trigger | Message | Why it is advice, not a refusal |
| :---- | :---- | :---- |
| Named tunnels on the job | `tunnel "x" needs to be running for this job to execute` | The tunnels are the user's own. Reception rejects the submission if one is not up by then, so the dialog warns rather than blocks. Skipped on-prem. |
| Subset spans > 500 combinations | `the failed scenarios spread across N combinations; a complete rerun may cost less` | A round number, deliberately - it is advice to a reader, not a limit anything enforces. The task count follows the requested concurrency, not the combination count. |

## 06 · What counts as a failure

A unit is **settled** - and so excluded from the subset - only on these five statuses:

| `settledStatuses` (5) | everything else |
| :---- | :---- |
| `completed`, `passed`, `skipped`, `ignored`, `muted` | `failed`, `aborted`, `canceled`, `timed out`, `still in progress` - and **no outcome row at all** - all rerun |

Note `muted` is **settled** here. That is the rerun's own question and is deliberately not borrowed from the runner's "positive status" list, which omits it. Three cases are worth spelling out:

- **Retries.** A scenario that failed and later passed on a retry is settled on the retry's row and stays out. But the `everFailed` flag still marks it a failure for admission - so a job aborted while a retry was running has a failure to admit on, and is rerunnable.
- **Fail fast.** When the trip is recorded, the aborted unit counts as the failure that caused it. Without that rule a job that stopped on its first failed test would have no failed unit at all and could never be rerun.
- **Dependent groups.** Selection is widened to whole discovery groups: ordered and dependent scenarios rerun together. A group is scoped to the combination it ran under, so on a hybrid job one combination failing does not drag in its siblings from another.

## 07 · The two counts, and when they are absent

The counts come from different places on purpose, and one of them is omitted rather than guessed.

| Count | Source | Omitted when |
| :---- | :---- | :---- |
| **All Scenarios** | `len(Manifest.Units)` - the intended set, never the outcomes, because a fail-fast trip leaves the remaining tasks' scenarios unrecorded. | The latest commit is selected (the head discovers its own set), or the job has no manifest. The field is omitted and the UI shows no number. |
| **Failed & Non Executed** | `len(subset.Units)` - the units actually selected for re-dispatch. | Whenever the subset is refused; the option is disabled instead. |

### Why the label changes

The option reads **Failed & Non Executed Scenarios** when the job's fail fast tripped or when the subset contains units that never reached a verdict; otherwise it reads **Only Failed Scenarios**. The breakdown beside it separates `failed`, `not run` and `dependent`, so the number adds up for the reader.

### A fail-fast job legitimately shows the same number twice

If fail fast stopped a 10-scenario job after the first failure, nothing else reached a verdict, so all 10 are unsettled: both scopes read 10. It looks like a bug and is not one - but it is also the least persuasive screenshot for the public docs.

## 08 · Concurrency

The dialog pre-fills the shape the job actually ran in - `TaskCount`, which counts work groups, not task rows. A reschedule creates a second row for the same group, and pre, post and discovery tasks are not execution tasks at all. On every shape but auto-split the job's own YAML `concurrency` describes something else entirely: a matrix job creates a task per combination whatever the number said.

The ceiling is the org's FUP limit (`maxConcurrency`) when one is configured, because a job shaped above it is refused at dispatch. Absent means no org limit, and the dialog keeps to the ceiling the licenses give it.

## 09 · Known gap, not yet filed

:::note Not applicable for enterprise customers
Enterprise orgs run with named tunnels (resolved by Reception) rather than CLI-opened tunnels, so the gap below does not affect them.
:::

### CLI `tunnel: true` jobs are offered a rerun and then fail

The refusal fires on `tunnel == true` with no tunnel names. But the CLI mints a random 16-character tunnel name, starts the tunnel locally, writes that name into the submitted config and sets `tunnel: false`. So the stored config of a real CLI tunnel job is `tunnel: false` plus a generated name - the refusal never fires, the job is admitted, and the rerun fails about three minutes later with:

```
Tunnel provisioning failed … giving up after 5 attempt(s)
```

Options raised earlier, unanswered: record a fact at dispatch (recommended), treat any tunnel name on a CLI job as ephemeral, or ask HTS at preview time. This is why the public docs page says nothing about tunnels.

## 10 · Things that are not limits

- **A project without a linked repo.** Not refused - the credential falls back to a user- or org-level `git_token`.
- **Reruns of reruns.** An ordinary job; the lineage label points at its own parent, so chains stay traceable.
- **Policies.** Applied fresh to the new job rather than carried over.
- **The 500-combination advisory.** Nothing enforces it; only 20,000 is a hard ceiling, and it exists to bound the submitted config (one exclusion entry per settled combination), not to judge the request.
- **A wide matrix on the eligibility check.** When the configured matrix is too wide to enumerate on a request that runs on every page load, it is treated as uncheckable rather than paying for the cross product.

---

*Compiled from the evaluator on the `TE-31200` branch and the stage rerun components. Message text is quoted verbatim; `N` stands in for a computed number. Behaviour on an org without `hye-enable-rerun-ui` is "no button", regardless of everything above.*

## Related

- [Rerun Failed Tests on HyperExecute](/support/docs/hyperexecute-rerun-failed-tests/) - the step-by-step user walkthrough.
- [Workflows in HyperExecute](/support/docs/hyperexecute-workflows/) - scheduling jobs on a cadence.
- [Global Policies in HyperExecute](/support/docs/hyperexecute-global-policies/) - org-level rules applied to each job.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Rerun Rules
      </span>
    </li>
  </ul>
</nav>
