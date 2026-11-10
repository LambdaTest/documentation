---
id: hyperexecute-rerun-rules
title: Rerun Rules in HyperExecute
hide_title: false
sidebar_label: Rerun Rules
description: "Deep-dive reference for HyperExecute's Rerun feature: which jobs can be rerun, when only all scenarios can be rerun, and what warnings the Rerun dialog shows."
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - HyperExecute Rerun Rules
  - HyperExecute Rerun reference
  - rerun unavailable
  - rerun all scenarios only
  - rerun dialog warnings
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
    "headline": "Rerun Rules in HyperExecute",
    "description": "Deep-dive reference for HyperExecute's Rerun feature: which jobs can be rerun, when only all scenarios can be rerun, and what warnings the Rerun dialog shows.",
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
This is the deep-dive reference for how HyperExecute decides whether a job can be rerun, how much of it can be rerun, and what warnings the Rerun dialog shows. For the step-by-step walkthrough on using the Rerun button, see [Rerun Failed Jobs on HyperExecute](/support/docs/hyperexecute-rerun-failed-jobs/).
:::

Rerun has three independent outcomes, not one. The **Re-Run** button may be hidden, the **Failed & Non Executed Scenarios** option may be disabled so only **All Scenarios** can be chosen, or the dialog may show a warning you need to act on. The same checks apply whether the dialog is just previewing or you have clicked **Rerun**, so the dialog never offers a scope that is then rejected on submit. This page documents every rule the Rerun dialog can emit.

## The three gates

Rerun passes three independent checks, and they fail differently - which is why "rerun is not supported" is never one question.

| Gate | Outcome | What the user sees |
| :---- | :---- | :---- |
| **1. Admission** | The button disappears | No **Re-Run** button is rendered. The reason is not shown in a dialog, because nothing the user could change in a dialog would help. |
| **2. Scope** | Only "All Scenarios" | The job is rerunnable, but the failed subset cannot be derived. **Failed & Non Executed Scenarios** is disabled, the selection falls back to **All Scenarios**, and the reason is shown beside the disabled option. |
| **3. Advice** | Offered, with a caveat | Both scopes work. A message warns about cost or about a precondition only the user can satisfy, such as a named tunnel being up. |

A refusal at gate 2 never affects gate 1: a job that cannot be narrowed is still fully rerunnable.

## Before the Rerun dialog opens

Two conditions hide the **Re-Run** button in the browser without ever asking the backend.

| Condition | Effect |
| :---- | :---- |
| Rerun is not enabled for your organization | Button hidden. Rerun is opt-in per organization; contact your admin or [support](mailto:support@testmuai.com) to turn it on. |
| The job has not ended yet | Button hidden. While the job is running, queued, initiated, in-progress or just created, Rerun is not offered. Wait for the job to finish. |

## Gate 1 - when Rerun is unavailable

Each row below is a property of the job itself. Any one of them is enough on its own.

| Condition | What it means / what to do |
| :---- | :---- |
| Still running | Wait for the job to finish, then try again. |
| Past retention | Jobs are retained for 60 days. Once a job is older than that, rerun is no longer available - start a fresh job from your CLI or pipeline. |
| Configuration no longer stored | The job's stored configuration has been removed. Start a fresh job. |
| YAML version other than 0.1 | Rerun supports version 0.1 jobs only. |
| Mobile job | Mobile jobs (Appium, Espresso, XCUITest) cannot be rerun from the dashboard - trigger the test again from your mobile flow. |
| Triggered by KaneAI | Rerun it from KaneAI. |
| Job ran without a project | A rerun needs the original job's project to fetch the suite from Git. Jobs that ran outside any project (for example, a CLI job that did not set a project) cannot be rerun from the dashboard. Run the suite again from within a project. |
| Project deleted | A rerun belongs to the original project; if that project is gone, start the suite in a current one. |
| Tunnel opened by the CLI on the submitting machine | A rerun cannot reopen that tunnel. Run again from the CLI, or use a [named tunnel](/support/docs/hyperexecute-how-to-configure-tunnel/). |
| `globalPre` or `globalPost` with `mode: local` | Those steps run on the machine that started the job, which a rerun cannot reach. Run again from the CLI. |
| Not from Git | Rerun fetches the suite again from Git. A job that did not run from a Git repository cannot be fetched again. |
| Uncommitted local changes at submit time | The exact code the job ran on is not reproducible. Commit or stash and run again. |
| Reruns of hybrid jobs are turned off for this organization | Contact your admin or support. |
| Nothing ran | The job produced no scenario outcomes, so there is nothing to rerun. |
| Nothing failed | Every scenario passed; there is nothing to rerun. |

### Worth knowing about these

- **Mobile** means Appium, Espresso and XCUITest flows (test type `ios/xcui`, `android/espresso`, `appium`, `android/appium` or `ios/appium`, case-insensitive).
- **KaneAI** covers any trigger whose source identifies as KaneAI, including scheduled KaneAI runs.
- **Retention** is 60 days from when the job was created (or from its expiry stamp when one is set).
- **Ran without a project** is about the job's project, not the project's Git repo. A project that has no Git repo linked is **not** refused here - a user-, project- or organization-level `git_token` can still fetch the code - that is a separate check in the Git pre-flight.
- **Hybrid reruns off** is an org-level setting your admin can toggle. It is not a per-job property.
- **On-prem** deployments skip the tunnel check altogether (both the refusal and the advice), because the on-prem environment handles its own networking.

## Gate 2 - when only "All Scenarios" can be rerun

The job is rerunnable; only the failed subset is unavailable. The dialog disables **Failed & Non Executed Scenarios**, falls back to **All Scenarios**, and prints the reason beside the disabled option.

### Ruled out before the scenario list is read

| Condition | Message shown in the dialog |
| :---- | :---- |
| Latest commit chosen | `only the original commit can rerun just the failed scenarios — the tests may have changed since. Switch the commit back, or rerun all scenarios` |
| Job uses `globalPre.yamlPath` | `this job uses globalPre.yamlPath, which can change its test list while it runs, so only All Scenarios can be rerun` |
| Job uses `dynamicAllocation` | `this job uses dynamicAllocation, so only All Scenarios can be rerun` |
| Job uses `testDiscovery.mode: dynamic` | `this job uses testDiscovery.mode: dynamic, so only All Scenarios can be rerun` |
| Scenario list could not be loaded just now | `we could not load this job's test details just now, so only All Scenarios can be rerun. Try again in a few minutes` |

Only the last of these is transient. Dynamic discovery is refused because each task discovers its own scenario list on its own VM, and a reduced set from a previous run would be accepted and then silently ignored.

### Ruled out by what was recorded for the job

| Condition | Message shown in the dialog |
| :---- | :---- |
| The job predates scenario-detail tracking | `this job ran before we started tracking scenario details, so only All Scenarios can be rerun` |
| Auto-split job with no stored scenario list | `we do not have the list of scenarios this job ran, so only All Scenarios can be rerun` |
| Scenario detail does not cover what the job ran | `we do not have the full details of what this job ran, so we cannot tell which scenarios to rerun. Rerun all scenarios instead` |
| Job shape could not be worked out | `we could not work out how this job was organized, so only All Scenarios can be rerun` |
| Every unit is already settled | `no scenarios are left to rerun on their own` |

Any of these means the recorded detail cannot be trusted to pick a subset. For an auto-split job the stored discovery result can still answer the question even without the tracked detail; other shapes cannot.

### Ruled out by the job's shape

| Shape | Condition | Message shown in the dialog |
| :---- | :---- | :---- |
| Hybrid | A unit's OS was not recorded | `we do not know which machine each scenario ran on, so only All Scenarios can be rerun` |
| Hybrid | Remote `globalPre` with failures on more than one OS | `this job's failures are on more than one machine and its scenarios cannot be split that way. Rerun all scenarios instead` |
| Hybrid | Too many configurations to narrow safely | `this job has too many configurations (N) to rerun selectively. Rerun all scenarios instead` |
| Matrix | A unit carries no configuration | `we do not know which configuration each scenario ran under, so only All Scenarios can be rerun` |

A hybrid job whose non-OS matrix keys cannot each be collapsed to a single value falls into the "shape could not be worked out" case above, with the same effect.

A single-task job with no matrix is never refused here. The failed set is the job, so both options are offered and show the same count.

## Gate 3 - when the dialog shows a warning

Advice travels beside an offered scope, never instead of it. Where more than one applies, the pieces are joined with `;` into one line.

| Trigger | Message shown in the dialog | Why it is advice, not a refusal |
| :---- | :---- | :---- |
| Named tunnels on the job | `tunnel "x" needs to be running for this job to execute` | The tunnels are the user's own. The submission is rejected later if one is not up by then, so the dialog warns rather than blocks. Skipped on-prem. |
| Failed scenarios span many configurations | `the failed scenarios spread across N combinations; a complete rerun may cost less` | This is advice to a reader when the subset would span more than 500 combinations, not a limit anything enforces. The actual task count follows the requested concurrency, not the combination count. |

## What counts as a failure

A scenario is **settled** - and so excluded from the subset - only on these five statuses:

| Settled | Everything else |
| :---- | :---- |
| `completed`, `passed`, `skipped`, `ignored`, `muted` | `failed`, `aborted`, `canceled`, `timed out`, `still in progress` - and **no outcome row at all** - all rerun |

Note `muted` is **settled** here: a muted scenario is treated as an intentional pass for the purposes of Rerun, so a job whose only "failures" were muted scenarios is not offered a rerun. Three cases are worth spelling out:

- **Retries.** A scenario that failed and later passed on a retry is treated as passed and left out of the subset. The job itself can still be rerun, though - the fact that the scenario ever failed is enough to admit the job.
- **Fail fast.** When fail fast stops a job, the scenario that caused the stop counts as a failure. Without this rule, a job that stopped on its very first failed test would appear to have no failed scenarios at all and could never be rerun.
- **Dependent groups.** When scenarios run as a dependent group, the whole group is selected together - you cannot rerun a single member on its own. On a hybrid job the group is scoped to the configuration it ran under, so a failure in one configuration does not pull in the group members from another.

## The two counts, and when they are absent

The counts come from different places on purpose, and one of them is omitted rather than guessed.

| Count | Source | Omitted when |
| :---- | :---- | :---- |
| **All Scenarios** | The intended scenario count from when the job was dispatched, never the recorded outcomes, because a fail-fast trip leaves the remaining tasks' scenarios unrecorded. | The latest commit is selected (the head discovers its own set), or the job has no stored scenario list. The field is omitted and the dialog shows no number. |
| **Failed & Non Executed** | The scenarios the dialog would re-run. | Whenever the subset is refused; the option is disabled instead. |

### Why the label changes

The option reads **Failed & Non Executed Scenarios** when the job's fail fast tripped, or when the subset contains scenarios that never reached a verdict. Otherwise it reads **Only Failed Scenarios**. The breakdown beside it separates `failed`, `not run` and `dependent`, so the number adds up for the reader.

### Why a fail-fast job can show the same count twice

If fail fast stopped a 10-scenario job after the first failure, none of the other scenarios reached a verdict - so all 10 are "unsettled" and both scopes read 10. The dialog is correct; the two counts just happen to match.

## Concurrency

The dialog pre-fills the concurrency the job actually ran at. For most shapes this is **not** the number in the YAML's `concurrency` field - a matrix job, for example, creates one task per configuration regardless of what the YAML says - so what gets filled in is the real parallelism, not the configured value. Retries, discovery tasks and the global `pre`/`post` steps are not counted.

You can raise or lower this before clicking **Rerun**. The maximum is your organization's concurrency limit when one is set; otherwise it is the limit of your plan.

## Known gap

:::note When this gap applies
This affects CLI jobs where `tunnel: true` opened an ephemeral tunnel on the machine that submitted the job. Jobs that used a [named tunnel](/support/docs/hyperexecute-how-to-configure-tunnel/), that used no tunnel at all, or that ran on-prem are not affected.
:::

The CLI generates a random tunnel name, starts the tunnel locally and submits the job with `tunnel: false` plus that name in the configuration. Because the stored configuration shows `tunnel: false`, Rerun does not catch this. The job is admitted, the rerun starts, and it then fails about three minutes later with:

```
Tunnel provisioning failed … giving up after 5 attempt(s)
```

If you hit this, run the job again from the CLI, or switch the job to a named tunnel so Rerun can resolve it against your organization's tunnels.

## Things that are not limits

- **A project without a linked repo.** Not refused - the credential falls back to a user-, project- or organization-level `git_token`.
- **Reruns of reruns.** An ordinary job; the lineage label points at its own parent, so chains stay traceable.
- **Policies.** Applied fresh to the new job rather than carried over.
- **The 500-combination advisory.** Nothing enforces it; it is a cost warning in the dialog, not a limit.
- **A very wide matrix.** When the configured matrix produces more combinations than can be enumerated quickly, Rerun does not block the job on that - the eligibility check skips the enumeration rather than slow the dialog down.

## Related

- [Rerun Failed Jobs on HyperExecute](/support/docs/hyperexecute-rerun-failed-jobs/) - the step-by-step user walkthrough.
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
