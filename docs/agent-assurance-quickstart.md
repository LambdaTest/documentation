---
id: agent-assurance-quickstart
toc_max_heading_level: 2
title: How to Get Started With Agent Assurance
hide_title: false
sidebar_label: Quickstart
description: Follow Rook's interactive TUI from sign-in and exploration through prompt-generated profiles, scenarios, a reviewed run, and local or hosted evidence.
keywords:
  - agent assurance getting started
  - install rook cli
  - rook authentication
  - rook quickstart
  - autonomous agent testing tutorial
  - test remote ai agent
url: https://www.testmuai.com/support/docs/agent-assurance-quickstart/
site_name: TestMu AI
slug: agent-assurance-quickstart/
canonical: https://www.testmuai.com/support/docs/agent-assurance-quickstart/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "How to Get Started With Agent Assurance",
          "item": `${BRAND_URL}/support/docs/agent-assurance-quickstart/`
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-quickstart/"
    },
    "headline": "How to Get Started With Agent Assurance",
    "description": "Follow Rook's interactive TUI from sign-in and exploration through prompt-generated profiles, scenarios, a reviewed run, and local or hosted evidence.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-quickstart/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance",
    "keywords": [
      "agent assurance getting started",
      "install rook cli",
      "rook authentication"
    ],
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
    },
    "dateModified": "2026-09-28"
  }) }}
/>

# How to Get Started With Agent Assurance

Run one small test before connecting a business-critical agent. This walkthrough uses Rook's public support-triage sample: a local HTTP service with in-memory tickets, no model key, and no external customer actions.

This is an **interactive TUI walkthrough**, not a CI pipeline. Use your normal shell only to install Rook and start the sample. Then launch `rook` without a subcommand and enter the slash commands below inside its prompt, one step at a time.

```text
Install → launch Rook → sign in → select a project
  → explore → select the agent → create and verify a profile
  → generate and review scenarios → sync → approve one run → inspect evidence
```

The interactive workflow and terminal screenshots were tested with **Rook 0.1.5** on September 28, 2026. Discovery, profile generation, scenario generation, and judging use TestMu AI credits; even a small suite can involve several model calls. Review the proposed work and credit balance before approving it. The browser examples below are separately identified saved runs.

Already have a live agent? Follow the same sequence with your own [source or requirements](/support/docs/agent-assurance-connect-and-explore-agents/) and [invocation profile](/support/docs/rook-profiles-and-hooks/#add-a-profile-interactively).

## Install Rook {#install-and-authenticate-the-cli}

Choose one public install method. On Windows, first follow [native PowerShell setup](/support/docs/rook-installation/#windows), then use the PowerShell alternatives below. Use `rook.cmd` in PowerShell and the same slash commands inside Rook's terminal.

```bash
# Homebrew
brew install lambdatest/rook/rook
```

```bash
# Shell installer
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
```

```bash
# npm (use Node.js 22 or newer)
npm install -g @testmuai/rook
```

PowerShell on Windows x64:

```powershell
npm.cmd install -g @testmuai/rook@0.1.5
```

Then check your installation:

```bash
rook --version
```

See [Install Rook](/support/docs/rook-installation/) for PATH, upgrade, and checksum help, including migration from the old Homebrew tap. The packaged CLI includes its runtime. The sample below also needs a separate Node.js installation and Git available in the same terminal.

<span id="choose-production-or-stage-before-signing-in" />

### Use the Public Service {#sign-in-to-the-public-service}

Public packages default to `ROOK_ENV=prod`, the service behind [Rook Projects](https://rook.lambdatest.com/projects). The launch commands in step 2 set it explicitly. Sign in inside the TUI with `/login`; there is no separate headless login step. This environment selects Rook's service, not your target agent's endpoint. Keep the target on a disposable or non-production environment while testing.

:::note Existing credentials
If <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> are exported, they take precedence over stored browser login. Use credentials for the selected environment, or unset both in this terminal before using browser login. In PowerShell, use `Remove-Item Env:LT_USERNAME, Env:LT_ACCESS_KEY -ErrorAction SilentlyContinue` to remove them from this session only. Never paste credentials into documentation, prompts, or screenshots.
:::

## Test Your First Agent

### 1. Start the public sample

The [triage-service sample](https://github.com/LambdaTest/rook/tree/main/samples/triage-service) is the target being tested—not Rook's backend.

In a separate terminal:

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/LambdaTest/rook.git rook-samples
cd rook-samples
git sparse-checkout set samples/triage-service
cd samples/triage-service
```

Start the sample in that terminal. On macOS/Linux:

```bash
PORT=19110 node src/server.mjs
```

On Windows PowerShell:

```powershell
$env:PORT = '19110'
node src/server.mjs
```

Leave it running. It keeps fixture changes in memory; restarting it resets them. From another terminal, verify the target:

```bash
curl -fsS http://127.0.0.1:19110/healthz
curl -fsS http://127.0.0.1:19110/v1/triage \
  -H 'content-type: application/json' \
  -d '{"input":"please look at T-1043"}'
```

In PowerShell, use `Invoke-RestMethod` instead of the Bash cURL example:

```powershell
Invoke-RestMethod -Uri 'http://127.0.0.1:19110/healthz'
$rookProbe = @{ input = 'please look at T-1043' } | ConvertTo-Json
Invoke-RestMethod -Uri 'http://127.0.0.1:19110/v1/triage' -Method Post -ContentType 'application/json' -Body $rookProbe
```

The response should say <code>T-1043 triaged as S1 and assigned to platform.</code> and include the recorded tool steps.

### 2. Open the TUI, Sign In, and Explore {#open-the-tui-and-explore}

Open the sample folder in your Rook terminal:

```bash
cd rook-samples/samples/triage-service
export ROOK_ENV=prod
rook
```

Or, in PowerShell:

```powershell
Set-Location 'rook-samples/samples/triage-service'
$env:ROOK_ENV = 'prod'
rook.cmd
```

The Rook banner, command prompt, and footer confirm that you are in interactive mode. If you are already signed in, Rook can open the project chooser automatically:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-get-started.png').default} alt="Fresh Rook interactive session showing the Explore, Generate, Run, and Report journey and project chooser before discovery" width="2200" height="1320" className="doc_img"/>

If not signed in, enter `/login`, complete the browser flow, and return to this terminal. Use `/doctor` to check readiness and `/plan` to check credits. At a chooser, use arrow keys and Enter; Esc goes back. At the prompt, Tab completes commands. The remaining commands belong **inside this TUI**, not in your shell.

```text
/project
```

Select an existing test project, or create one:

```text
/project create "Rook quickstart"
```

Run exploration only after the intended test project is selected:

```text
/explore .
```

Rook reads the sample and shows discovery progress. When it proposes an agent, review the name, source path, and purpose before choosing **yes** to register it. This is an actual exploration of the public sample:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-explore-confirm.png').default} alt="Rook exploration finding the support triage agent and asking whether to register it, with yes and no choices and a live progress footer" width="2200" height="840" className="doc_img"/>

Wait for exploration to finish, then open the agent picker:

```text
/agent
```

Select the discovered triage agent. Generated IDs can differ: use the actual ID/name shown by your session. Confirm that the discovered features describe the ticket service, not unrelated files.

### 3. Generate and verify the profile from a prompt

Enter `/profile add local-triage` in the TUI. When Rook asks how to reach the agent, paste this description:

```text
Reach the running service at http://127.0.0.1:19110/v1/triage.
For execute, POST JSON {"input": <the goal read from stdin>}.
The response's output field is the agent's answer: return it as agent_reply.
Map each response step's tool and args to calls[].name and calls[].arguments.
Use "please look at T-1043" as the harmless verification goal.
No credentials are needed. Do not start another server or install dependencies.
This fixture is single-turn. Its echoed session_id is not conversational state.
Do not report the fixture's zero usage values as measured model usage.
Use concurrency 1.
```

Rook generates the hook and verifies it against the running sample. Approve only the intended local HTTP call and script work; do not approve server startup, dependency installation, or unrelated commands. Wait for the result before continuing.

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-profile-authoring.png').default} alt="Actual TUI profile-generation conversation with the triage HTTP request description and an approval prompt for the generated hook script" width="2200" height="1680" className="doc_img"/>

This checkpoint shows authoring in progress. Read the exact requested file or command, then approve once with **yes** if it matches the sample setup; the prompt is not evidence that verification has passed.

To use a saved description instead, put the same text in `triage-profile.txt` in the sample folder and use `/profile add local-triage --from triage-profile.txt`. These are alternatives—do not create the same profile twice.

Inspect and test the generated result inside the TUI:

```text
/profile show local-triage
/profile test local-triage --goal "please look at T-1043"
/profile use local-triage
```

Review the generated <code>profiles/local-triage.yaml</code> and <code>scripts/</code> files below the active agent directory. A successful probe should return the real answer and four tool calls. Stop here if the probe fails; generation and testing will not repair a broken connection automatically.

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-profile-verified.png').default} alt="Rook completing profile authoring after a successful triage probe, reporting four mapped tool calls and selecting local-triage as the active profile" width="2200" height="920" className="doc_img"/>

This is the successful connection checkpoint: the hook answered, the generated profile was saved, and the footer now includes `local-triage`. Profile verification is not a scenario verdict.

The sample needs only an <code>execute</code> hook. Use [additional lifecycle hooks](/support/docs/rook-profiles-and-hooks/#lifecycle) for login, session setup, teardown, or delayed trace collection.

### 4. Generate a small suite and review it

```text
/generate --total 2 --class functional --category happy_path -- Create two single-turn cases for existing tickets only: T-1043 must be S1/platform and T-1041 must be S2/billing. Check the answer and recorded calls. Do not require external verification or repeated samples.
```

Before writing scenarios, Rook shows the plan and offers **proceed**, **discard**, or **change**. Check both the included cases and the features it intentionally leaves uncovered:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-generate-plan.png').default} alt="Rook's actual generation plan for two triage scenarios, with included and excluded features and proceed, discard, or change choices" width="2200" height="1120" className="doc_img"/>

Choose **proceed** only if the scope matches the two requested tickets. Wait for writing to finish, then inspect the saved suite:

```text
/scenarios list
```

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-generated-scenarios.png').default} alt="Rook listing the two generated triage scenarios, their functional happy-path classification, four criteria each, and runnability against local-triage" width="2200" height="720" className="doc_img"/>

The count is a generation target, not a guarantee. In this capture, two scenarios were written and both are runnable against `local-triage`; neither has passed yet. Review the resulting files before running them. Check that every criterion can be evaluated from the answer or the calls your hook actually returns. For example, a JSON-path check against <code>$.steps</code> cannot inspect that field if your hook returned only an answer string.

Choose the scenario for **T-1043**. Do not assume it will always be <code>SC-002</code>.

### 5. Sync, then run one scenario

```text
/sync
```

Wait for the agent to be recorded upstream before starting the run:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-sync.png').default} alt="Rook synchronizing the triage agent and confirming one agent recorded upstream" width="2200" height="600" className="doc_img"/>

```text
/run --only <your-T-1043-scenario-id> --profile local-triage --concurrency 1 --name first-triage-run
```

Replace the placeholder with the generated scenario ID. Review the selected scenario and active profile before proceeding. This plan selects only `SC-002` and explicitly skips `SC-001`:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-run-plan.png').default} alt="Interactive run plan selecting one triage scenario, skipping the other, and waiting for proceed, discard, or change" width="2200" height="920" className="doc_img"/>

Choose **proceed** to execute this reviewed scope, **discard** to run nothing, or **change** to revise it. Read any additional permission prompts before approving. The plan is not a fixed credit quote; check `/plan` before starting.

While Rook runs, the scenario row shows its current phase. This capture is in **judging**, with `0/1` completed; it is not a final verdict:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-run-progress.png').default} alt="Live Rook test run showing SC-002 in the judging phase with evidence reads and zero of one scenarios completed" width="2200" height="1160" className="doc_img"/>

Wait for completion before opening the report. Press Esc only if you intend to interrupt; stopping Rook does not undo actions already performed by the target.

A normal run needs a synchronized agent version. <code>--test</code> is for an intentionally local, unsynchronized experiment; it does not add a run to the shared timeline.

### 6. Open the results

First read the report, then choose either UI:

```text
/report
```

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-report.png').default} alt="Completed interactive report for first-triage-run showing one executed scenario, one pass, zero failures, and a warning about narrow feature coverage" width="2200" height="1520" className="doc_img"/>

The report names the saved run and its evidence directory. Check the counts, not just the percentage: this run executed one scenario and left four discovered feature areas untested. Reading `/report` does not rerun the target; do not add `--rca` unless you intend to request additional paid analysis.

| Review on this machine | Review with your team |
|---|---|
| Run `/ui --local`. | Run `/ui`. |
| Open **triage-service → runs → your run → scenario**. | Open **project → triage agent → Runs → first-triage-run → scenario** in the Web UI. |
| In the redesigned viewer, read **Acceptance criteria**, then choose **Request**, **Response**, **Verdict**, or **Artefacts** from **Evidence**. For older CLI layouts, see the note below. | Read the criteria, then open **Request**, **Response**, **Verdict**, or **Artefacts** from **Evidence**. |
| Works with on-disk evidence, including `--test` runs; keep the TUI open while reviewing. | Requires browser sign-in and uploaded results; teammates need project access. |

Both routes inspect the recorded evidence without running the agent again. The [local and hosted UI walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows the different screens and explains missing results.

In the verified smoke test, the selected scenario passed with four observed tool calls and no unverifiable criteria. That proves this one fixture path worked—not that the whole agent is reliable. Review the four other discovered features before expanding the suite.

#### Local UI: Review a Result {#local-ui-example}

The redesigned local result has **Acceptance criteria** filters and an **Evidence** drawer for request, response, verdict, and artifacts. This screenshot uses a separate saved CommerceCare demo (SC-006), not the triage execution above. It illustrates one failed requirement and two unverifiable criteria; your scenario IDs and outcomes will differ. Public CLI 0.1.5 still uses the earlier scrolling layout—see the [rollout and navigation note](/support/docs/rook-web-ui/#earlier-local-ui).

<img loading="lazy" src={require('../assets/images/rook/rook-local-result.png').default} alt="Redesigned local result for the separate CommerceCare SC-006 demo, with failed and unverifiable criteria" width="1440" height="900" className="doc_img"/>

#### Hosted Web UI: The Uploaded Result {#hosted-ui-example}

The browser capture below shows the earlier September 11 triage smoke test, not the September 28 TUI run above. Open **Evidence → Verdict** to read a saved evaluation in the drawer, then close it to return to the criterion cards. Use **Expand all** to read passing criteria, which start collapsed. Opening either UI reviews existing evidence; it does not execute the agent again.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-verdict.png').default} alt="Hosted quickstart result with verdict.yaml open in the evidence drawer" width="1440" height="900" className="doc_img"/>

### 7. Stop the sample when finished

Enter <code>/exit</code> to leave Rook. Stop the sample server with <code>Ctrl+C</code> in its terminal. Rook results stay below:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/<run-id>/
```

## Continue After Your First Test {#continue-after-your-first-test}

To repeat this workflow through your coding assistant, [choose a client-specific Rook skill guide](/support/docs/rook-coding-agents/). To automate the reviewed suite, use [GitHub Actions](/support/docs/rook-github-actions/), [Jenkins](/support/docs/rook-jenkins/), or [Argo CD](/support/docs/rook-argocd/).

Use `/status` inside the TUI to check the selected project, active agent, and local/upstream state. Bare `/project`, `/agent`, and `/profile` open pickers; select with the arrow keys and Enter. Shell equivalents are covered in the [command reference](/support/docs/agent-assurance-command-reference/); you do not need to leave the TUI to continue this walkthrough.

### Ask in Plain Language

Use `/ask` in the TUI when you know the outcome but not the command:

<VerifiedTag value="Verified" />

```text
/ask generate adversarial tests for refund-policy bypasses
```

Rook resolves the request to the appropriate operation. Any operation that spends credits or needs permission still shows its plan and asks first.

### Local Changes and Sync

Exploration, generation, profile authoring, and curation write plain files under `.testmuai/rook/`. They do not silently publish workspace state.

`/sync` records the current project tree upstream. Profile files contain environment-variable references, never their secret values. Run results are saved locally as they happen and can be reconciled upstream after connectivity returns.

### When to Repeat a Step

| Change | Repeat |
|---|---|
| Agent source, prompt, tools, or policy changed | `explore`, then regenerate affected scenarios |
| Test intent changed without an implementation change | `generate` with an instruction, then curate |
| Endpoint, authentication, or response shape changed | `profile test`, then `profile fix` if needed |
| Only the deployed target changed | `run` against the intended profile |
| Evidence arrives asynchronously | Continue the same run with `--run <id> --phases collect,judge` |
| Local project metadata needs publishing | `sync` |

## Connect Your Own Agent Next

Use staging credentials and disposable data. Tell the profile author the real request, answer field, authentication, session semantics, and evidence sources. Do not claim multi-turn state, observable calls, or measured usage unless the target actually supplies them.

[Prompt-based profiles](/support/docs/rook-profiles-and-hooks/#add-a-profile-interactively) · [Phases and hooks](/support/docs/rook-profiles-and-hooks/#lifecycle) · [Review results](/support/docs/agent-assurance-results-and-evidence/) · [CI/CD](/support/docs/agent-assurance-ci-cd/)
