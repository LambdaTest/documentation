---
id: hyperexecute-on-premise-user-guide
title: HyperExecute On-Premise User Guide
sidebar_label: On-Premise User Guide
description: "End-to-end guide for on-premise HyperExecute: create a Project, run jobs from the CLI, schedule workflows, and troubleshoot."
keywords:
  - HyperExecute on-premise
  - HyperExecute on-prem CLI
  - HyperExecute private deployment
  - on-prem workflows
  - pause a HyperExecute workflow
  - HyperExecute onprem-host
url: https://www.testmuai.com/support/docs/hyperexecute-on-premise-user-guide/
site_name: TestMu AI
slug: hyperexecute-on-premise-user-guide/
canonical: https://www.testmuai.com/support/docs/hyperexecute-on-premise-user-guide/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-on-premise-user-guide/"
    },
    "headline": "HyperExecute On-Premise User Guide",
    "description": "End-to-end guide for on-premise HyperExecute: create a Project, run jobs from the CLI, schedule workflows, and troubleshoot.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-on-premise-user-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "HyperExecute on-premise",
      "HyperExecute on-prem CLI",
      "HyperExecute private deployment",
      "on-prem workflows",
      "pause a HyperExecute workflow",
      "HyperExecute onprem-host"
    ],
    "proficiencyLevel": "Beginner",
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
    "dateModified": "2026-11-11T14:00:00+05:30"
  }) }}
/>

This guide is for teams that run HyperExecute **on-premise**, inside their own network. It takes you from a fresh machine to a scheduled workflow that runs on its own, and covers what to do when something breaks.

HyperExecute on-prem works the same way as the SaaS platform for most tasks. This page focuses on the parts that are different and links to the SaaS documentation for everything else.

## What you can do by the end of this guide

- Install the HyperExecute CLI and point it at your on-prem deployment.
- Trigger a job from your machine or your CI pipeline.
- Group jobs under a Project and set up a scheduled Workflow.
- Pause a workflow during a maintenance window.
- Find results, rerun failures, and fix the most common errors on your own.

## How on-prem differs from SaaS

Read this table once before you start.

| Area | SaaS | On-prem |
|------|------|---------|
| Dashboard | Public <BrandName /> dashboard with all products | Your organization's own dashboard host. The **HyperExecute** menu has **Jobs** and **Projects** |
| CLI target | Public HyperExecute endpoints by default | Pass your deployment host with `--onprem-host`. **Help** > **Hyperexecute CLI** gives you the full command |
| Network | Public internet endpoints must be reachable | Your machine or CI agent must reach your deployment host. Corporate proxies and internal certificates may apply |
| Operating systems | Linux, Windows and macOS | Linux and Windows. See [Private Cloud benefits](/support/docs/hyperexecute-private-cloud-benefits/) |
| Environments | Managed by <BrandName /> | Defined by your admin. Jobs with no environment fall back to the org default |
| Test discovery | `mode: local` or `mode: remote` | `mode: remote` only |
| Git access | GitHub (Marketplace app or token) or Bitbucket | Depends on how your deployment is set up, for example your own or a dedicated GitHub App. Ask your admin which Git providers you can use |
| Analytics | Full Intelligent Test Analytics | Not available (see [Private Cloud benefits](/support/docs/hyperexecute-private-cloud-benefits/)). Use job reports, the job **Insights (Beta)** tab and the Organisation Summary |

## The end-to-end journey

Follow these steps in order. Click any card to jump to the full instructions.

<div className="onprem-steps">
  <a className="onprem-steps__card" href="#step-1-find-your-way-around-the-dashboard"><span className="onprem-steps__num">1</span><strong>Find your way</strong><span>Sign in and copy your keys</span></a>
  <a className="onprem-steps__card" href="#step-2-create-a-project"><span className="onprem-steps__num">2</span><strong>Create a Project</strong><span>Connect Git, add secrets</span></a>
  <a className="onprem-steps__card" href="#step-3-install-and-configure-the-cli"><span className="onprem-steps__num">3</span><strong>Install the CLI</strong><span>Download and check the binary</span></a>
  <a className="onprem-steps__card" href="#step-4-prepare-your-yaml"><span className="onprem-steps__num">4</span><strong>Write the YAML</strong><span>Set OS, discovery and secrets</span></a>
  <a className="onprem-steps__card" href="#step-5-trigger-a-job-from-the-cli"><span className="onprem-steps__num">5</span><strong>Run a job</strong><span>Trigger your first CLI run</span></a>
  <a className="onprem-steps__card" href="#step-6-configure-and-run-a-workflow"><span className="onprem-steps__num">6</span><strong>Create a Workflow</strong><span>Schedule or chain your jobs</span></a>
  <a className="onprem-steps__card" href="#step-7-manage-workflow-states"><span className="onprem-steps__num">7</span><strong>Manage its state</strong><span>Pause, check status, edit</span></a>
  <a className="onprem-steps__card" href="#step-8-review-results-and-rerun-failures"><span className="onprem-steps__num">8</span><strong>Review and rerun</strong><span>Open reports, rerun failures</span></a>
</div>

Each step below lists what to do, what is specific to on-prem, and where the full feature docs live.

## Before you start

Collect these from your admin before step 1.

- [ ] Your **on-prem dashboard URL**.
- [ ] Your **on-prem host** value for the CLI.
- [ ] A dashboard login. Your username and access key come from the dashboard itself (step 1).
- [ ] Your **role**, for example Org Admin or member.
- [ ] **Proxy details**, if your machine reaches the network through a corporate proxy.
- [ ] Access to the **Git repository** that holds your tests, connected to HyperExecute by your admin. Supported Git providers depend on your deployment, so confirm yours is connected.

## Step 1: Find your way around the dashboard

Sign in to your organization's HyperExecute dashboard. The **HyperExecute** menu on the left has:

- **Projects:** your test suites, their workflows and their jobs.
- **Jobs:** every job in the organization, with filters for **Status**, **Label**, **Team**, **Users**, **Type** and **Date**.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/jobs-list.webp').default} alt="On-premise HyperExecute Jobs page with status, label, team, user, type and date filters" className="doc_img"/>

These controls appear on every page:

- **Parallels Available** (top right) shows how many Linux, macOS and Windows sessions your organization can run at once. On-prem deployments run Linux and Windows, so macOS shows `0`.
- **Help** opens **Quick Start**, **Docs**, **Github Samples**, **Generate YAML** and **Hyperexecute CLI**. You use **Hyperexecute CLI** in step 3 and **Generate YAML** in step 4.

### Copy your username and access key

1. In the left sidebar, click **Credentials**.
2. Click the copy icon next to **Username**, then next to **Access Key**.
3. To regenerate or manage keys, click **Manage Credentials**.

Always copy your keys from your own on-prem dashboard.

## Step 2: Create a Project

:::note Not needed for everyone
Many organizations onboard Projects through their own process, so your Project may already exist. Open **HyperExecute** > **Projects** and look for it first. If it is there, skip to [Add Project secrets](#add-project-secrets) or [step 3](#step-3-install-and-configure-the-cli). If you are not sure, ask your admin how Projects are onboarded in your organization.
:::

A Project holds one test suite: its Git connection, workflows, secrets and jobs. Create one before you run anything, so every job lands in the right place.

1. Open **HyperExecute** > **Projects** and click **New Project**.
2. In **Type of Project**, select **Custom Project**. The other types (**Tosca**, **Tosca with Dex**, **TTA for SAP**, **JMeter** and **Gatling**) have their own setup guides, linked from [HyperExecute Projects](/support/docs/hyperexecute-projects/#setting-up-specialized-projects).
3. Fill in the form:

   - The URL of the Git repository that holds your tests, and a Project name. Both are required. Your jobs appear under the Project name.
   - **Branch Name**: the default branch. It defaults to `main`.
   - **YAML Path**: where the YAML lives in the repository. It defaults to `.lambdatest/hyperexecute.yaml`.
   - **PAT Token**: a Git access token with read access, unless your admin has set up a GitHub App.
   - **Teams**: the teams that should see this Project.

   Your deployment may show more fields that your organization has added. Ask your admin what to enter in them.

4. Click **Save**.

Open the new Project. It has a **Workflows** tab, a **Jobs** tab, a **Help** menu and a **Secrets** button.

### Add Project secrets

Store passwords and tokens your tests need as Project secrets, so no one puts them in the YAML.

1. In the Project, click **Secrets**.
2. Add each key and value your tests need.

The steps and how to use secrets in the YAML are on [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/).

## Step 3: Install and configure the CLI

1. Open **Help** > **Hyperexecute CLI** on any HyperExecute page.
2. Download the binary for your OS: **MacOS**, **Windows** or **Linux**. The CLI can run on a Mac even though tests on your deployment run on Linux and Windows.
3. Place the binary in your test project's root folder.
4. On Linux or macOS, make it executable:

   ```bash
   chmod u+x ./hyperexecute
   ```

5. Check that it runs:

   ```bash
   ./hyperexecute --version
   ```

6. If you are behind a corporate proxy, add `--auto-proxy` to your commands so the CLI uses the `http_proxy` and `https_proxy` values already set on your machine.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/cli-command-panel.webp').default} alt="Hyperexecute CLI panel with download buttons for macOS, Windows and Linux and a ready-to-copy test execution command that includes --onprem-host" className="doc_img"/>

## Step 4: Prepare your YAML

The YAML file tells HyperExecute what to run and how to split it. It is the same format on SaaS and on-prem.

- Start from the guide for your framework in [Frameworks you can run](#frameworks-you-can-run). It has a sample YAML you can adapt.
- New to the format? Use **Help** > **Generate YAML**, or read [Generate your YAML](/support/docs/hyperexecute-generate-sample-yaml/) and the [Deep Dive into YAML](/support/docs/deep-dive-into-hyperexecute-yaml/).
- Keep the file at the **YAML Path** you set on the Project (`.lambdatest/hyperexecute.yaml` by default). Workflows look for it there.
- YAML [version 0.2](/support/docs/hyperexecute-yaml-version0.2/) has a `framework` block for Maven projects (TestNG, JUnit 4, JUnit 5). [Rerun failed tests](/support/docs/hyperexecute-rerun-failed-jobs/) needs version 0.1, so pick the version that fits how you work.
- Add your Project so jobs from the CLI are grouped with workflow jobs. See [Link jobs to Projects using YAML](/support/docs/hyperexecute-projects/#link-jobs-to-projects-using-yaml).
- Reference secrets instead of writing passwords in the file. See [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/).
- Ask your admin whether [caching](/support/docs/hyperexecute-how-smart-caching-boosts-tests-speed/) is set up on your deployment for Maven, Gradle or npm dependencies.

**On-prem specifics:**

- Use `linux` or `win` in `runson`. macOS is not available on-prem.
- If you do not set an environment, the job uses your organization's default environment.
- Your admin can limit which environment variables jobs may use. If you set one that is not allowed, the CLI shows a warning. See [`env`](/support/docs/deep-dive-into-hyperexecute-yaml/#env).
- Set `testDiscovery.mode: remote` in every YAML. On-prem supports remote discovery only, so `mode: local` does not work, whether you start the job from the CLI or from a Workflow. See [testDiscovery](/support/docs/deep-dive-into-hyperexecute-yaml/#mode).
- Org-wide [Global Policies](/support/docs/hyperexecute-global-policies/), set by your Org Admins, can add steps to your job or reject it. You cannot change them from your YAML. Check the **Applied Policies** panel on the job page to see what changed, and ask your Org Admin if a policy blocks your job.

Validate the file before you submit it:

```bash
./hyperexecute --config .lambdatest/hyperexecute.yaml --validate
```

## Step 5: Trigger a job from the CLI

The **Hyperexecute CLI** panel from step 3 shows a **Test execution command** for your deployment. Copy it, replace any placeholder such as `<YOUR_ACCESS_KEY>` or `<your_yaml_file_name>` with your own value, and run it from your project root:

```bash
./hyperexecute --user <YOUR_USERNAME> --key <YOUR_ACCESS_KEY> --config .lambdatest/hyperexecute.yaml --onprem-host <YOUR_ONPREM_HOST>
```

`--onprem-host` takes the host name of your deployment on its own, for example `hyperexecute.example.com`, with no `https://` and no path. Use the value your admin gives you, or the one in the panel's command.

The job appears on the **Jobs** page while it runs, and in your Project's **Jobs** tab if your YAML names the Project.

Flags most on-prem teams use:

| Flag | Use it to |
|------|-----------|
| `--config` | Point to a YAML file that is not in the current folder. |
| `--validate` | Check the YAML without starting a job. |
| `--labels` | Tag the job, for example with the team or release name, so you can [filter jobs by label](/support/docs/hyperexecute-jobs-label-filter/) later. |
| `--vars` | Pass values into the YAML at runtime. |
| `--job-secret-file` | Pass secrets from a file instead of the command line. |
| `--auto-proxy` | Use the proxy settings already on your machine. |
| `--download-artifacts`, `--download-report` | Pull results back to the machine that started the job. |
| `--no-track` | Start the job and return without waiting for it to finish. |

The full list is on [HyperExecute CLI flags](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#hyperexecute-cli-supported-flags).

### Running from a CI pipeline

The CLI works the same way inside Jenkins, Azure DevOps, GitLab and other CI tools. Store the username and access key as CI secrets, then call the same command as a pipeline step.

- Set `CI=true` to turn on [quiet mode](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#running-hyperexecute-cli-in-quiet-mode) and keep pipeline logs short.
- Use the CLI exit code to pass or fail the pipeline stage. See [Handling error codes in CI](/support/docs/hyperexecute-cli-error/#handling-error-codes-in-ci).
- Tool-specific setup is on [Integration with CI/CD tools](/support/docs/hyperexecute-integration-with-ci-cd-tools/).

## Step 6: Configure and run a Workflow

A Workflow runs a Project's tests on a schedule, or on demand from the dashboard, without a CI pipeline. Use it for nightly regression, checks before business hours, and suites that chain into each other.

**Before you create one:**

- The Project's Git URL and access are set (step 2).
- The YAML is in the branch you pick, or you paste a custom YAML during setup.
- Workflows use the **remote** mode of [test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).

**Create it:**

1. Open the Project and click **Create Workflow** (or **Setup Workflow** in an empty Project).
2. **Step 1 of 3:** enter the **Workflow name** and **Branch**. Under **Type**, keep **In Repo Yaml** and check the **File Location**, or choose **Custom Yaml** and paste the file. Click **Next**.
3. **Step 2 of 3:** leave **Triggering Schedule Details** on and pick **Once**, **Later** or **Every**. For **Every**, pick a **Run Every** option:
   - **Minutes**, **Hours** or **Days**, with a **During time frame** start and end time.
   - **Days of week**, with a **Start at** time and the days under **When to Run**.

   Turn the toggle off to run the workflow only by hand. Set **Workflow ends on** either way, then click **Next**.
4. **Step 3 of 3 (optional):** turn on **Link Workflow** to trigger another workflow when this one ends **Completed**, and pick its project and workflow. Turn on **Workflow Variables** to add values you can change at runtime.
5. Click **Finish**. Click **Play** on the workflow row to run it straight away.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/workflow-step2-every-interval.webp').default} alt="Workflow schedule step with Every selected, Run Every 15 minutes, a time frame and the Workflow ends on date" className="doc_img"/>

Full feature reference: [Workflows](/support/docs/hyperexecute-workflows/), [Test Chains](/support/docs/hyperexecute-test-chains/).

## Step 7: Manage workflow states

The **Status** column shows each workflow's state.

| State | What it means |
|-------|---------------|
| **Active** | Triggers jobs on its schedule. |
| **Paused** | Kept as it is, but triggers no new jobs. |
| **Expired** | The end date has passed, so it no longer runs. Set automatically. |

The Project's **Workflows** tab sums them up at the top: **Total Workflows**, **Active Workflows**, **Workflows Running Successfully**, **Workflows with Issues** and **Expired Workflows**. Each row shows the branch, owner, last run, schedule, end date, status and the **Last 5 Jobs**.

### Pause a workflow

Pause a workflow when the target environment is down for maintenance, during a code freeze, or while you investigate repeated failures.

1. Open the Project and stay on the **Workflows** tab.
2. In the **Status** column, click **Active** on the workflow row.
3. Select **Pause Workflow**.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/workflow-pause-menu.webp').default} alt="Project Workflows tab with an Active workflow and its Status menu open, showing Pause Workflow" className="doc_img"/>

A paused workflow triggers no new jobs. To resume it, use the same **Status** menu on the workflow row.

### Expired workflows

An **Expired** workflow has passed its **Workflow ends on** date. To run that schedule again, use **Edit Workflow** or **Clone Workflow** from the **...** menu on the workflow row. The same menu has **Delete Workflow**.

## Step 8: Review results and rerun failures

Open a job from the **Jobs** page or the Project's **Jobs** tab. The job page shows the status, duration, owner and labels at the top, with **YAML**, **Artifacts** and **Report** buttons. The left panel lists each execution task and the global post task. On the right, switch between **Pre Steps**, **Scenarios** and **Post Steps** to read the logs for that task. The **Scenarios** tab lists each scenario with its own status, duration and log, so you can open just the one that failed.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/job-detail-scenarios.webp').default} alt="On-premise job page with task list on the left and the Scenarios tab of a task on the right" className="doc_img"/>

- **Job page:** live logs, task status and the Applied Policies panel. Start with [How to debug a failed job](/support/docs/hyperexecute-how-to-debug-job/).
- **Reports:** framework reports for each job. See [Job Reports](/support/docs/hyperexecute-reports/).
- **Artifacts:** files your tests produce. See [Job Artifacts](/support/docs/hyperexecute-artifacts/).
- **Rerun failed tests:** rerun only the failed scenarios, or all of them, from the job page. The job needs code from Git and YAML version 0.1. See [Rerun failed jobs](/support/docs/hyperexecute-rerun-failed-jobs/).
- **Run again after a fix:** you can also start the job again from the CLI ([step 5](#step-5-trigger-a-job-from-the-cli)), or click **Play** on the workflow row.
- **Notifications:** if your deployment sends email, send reports by [email](/support/docs/hyperexecute-email-reports/), including different recipients for passed, failed and aborted jobs.
- **Org view:** Org Admins can click **View Summary** on the Projects page to open the [Organisation Summary](/support/docs/hyperexecute-organisation-summary-dashboard/).

## Environments and queues

Admins define the environments and can map Linux frameworks to different queues for each environment.

- Jobs that do not name an environment use the org default.

## Common scenarios

### Nightly regression

Create a workflow with an **Every** schedule on weekdays at a quiet hour. Set the end date to the end of the release cycle. If your deployment sends email, add email notifications for failed runs.

### Smoke first, then regression

Create two workflows. Schedule the smoke workflow, and link the regression workflow to it so regression starts when the smoke workflow ends with status **Completed**. See [Test Chains](/support/docs/hyperexecute-test-chains/).

### Same suite against several environments

Create one workflow with a Workflow Variable such as `TARGET_ENV` that has several values. See [Workflow Variables](/support/docs/hyperexecute-workflows/#workflow-variables) for which value scheduled and manual runs use.

### Maintenance window

Before the window starts, pause the affected workflows (**Status** > **Pause Workflow**). Resume them once the environment is back.

### Run from your CI pipeline on every merge

Use the CLI command from [step 5](#step-5-trigger-a-job-from-the-cli) as a pipeline stage. Use CI for commit-driven runs and workflows for scheduled runs.

## Troubleshooting

| What you see | Likely cause | What to do |
|--------------|--------------|------------|
| `ERR::HTTP::RESP` with `401` and `Invalid user/key credentials` | Wrong key, or a key copied from a different dashboard | Copy the username and key from the **on-prem** dashboard. See [ERR::HTTP::RESP](/support/docs/hyperexecute-cli-error/#err_http_resp). |
| `ERR:HTTP:HOST` | CLI cannot reach a host it needs, often because `--onprem-host` is wrong or a proxy blocks it | The message shows the URL the CLI tried to reach. Check `--onprem-host`, then add `--auto-proxy`. Run `--scan` to see which host fails, and send that host to your network team. See [ERR:HTTP:HOST](/support/docs/hyperexecute-cli-error/#err_http_host). |
| `ERR::NO::USER` or `ERR::NO::KEY` | Username or key not passed | Pass `--user` and `--key`, or set them as environment variables. See [Error codes](/support/docs/hyperexecute-cli-error/#error-codes). |
| YAML rejected before the job starts | A Global Policy with `error` severity, or invalid YAML | Read the message, which names the policy and the fix. Run `--validate`. See [YAML validation messages](/support/docs/hyperexecute-cli-error/#yaml-validation-messages). |
| Workflow did not start at the scheduled time | Workflow is Paused or Expired, or the run failed to create a job | Check the **Status** column. Open the workflow and check **Past Occurrences** for errors such as a wrong branch or YAML path. |
| Tests pass on your machine but fail on HyperExecute | Missing dependency or different environment | Check pre-steps output. See [Pre steps errors](/support/docs/hyperexecute-pre-steps-error/) and [Scenario steps errors](/support/docs/hyperexecute-scenario-steps-error/). |
| Job ends with `lambda_error` | Symbolic links or very large files in the upload | See [Symbolic link error](/support/docs/hyperexecute-cli-error/#symbolic-link-error) and use a [.hyperexecuteignore file](/support/docs/hyperexecute-gitignore/). |
| The CLI warns about an environment variable | Your admin has limited which environment variables jobs may use | Remove the variable from your YAML, or ask your admin to allow it. |
| No rerun option on a failed job | The job did not come from Git, or it used YAML version 0.2 | Check the [rerun prerequisites](/support/docs/hyperexecute-rerun-failed-jobs/#prerequisites). Otherwise run the job again from the CLI. |
| Certificate or TLS error from the CLI | The machine or CI agent does not trust the certificate presented by your deployment or proxy | Send the full error to your network or security team. They set up trust for internal certificates on your machines. |
| A setting from your YAML is ignored or the job is changed | A Global Policy set by your Org Admins | Open the **Applied Policies** panel on the job page, then ask your Org Admin. |

## Dependencies checklist

| Dependency | Needed for | Owner |
|------------|-----------|-------|
| On-prem dashboard URL and host | Everything | Your admin |
| User account, role and access key | CLI and dashboard | Org Admin |
| Network path from your machine or CI agent to the deployment | CLI | Network team |
| Proxy settings | CLI behind a corporate proxy | Network or security team |
| Git connection for your Git provider (for example a GitHub App) | Projects and Workflows | Your admin |
| Environment and queue setup | Running jobs | Your admin |
| YAML in the repository | Jobs and Workflows | Test team |
| Secrets created in HyperExecute | Jobs that need credentials | Test team or Org Admin |

## Frameworks you can run

Each guide below shows a sample project, its YAML and its discovery and runner commands for that framework. On-prem, run them on Linux or Windows, use `testDiscovery` with `mode: remote`, and add `--onprem-host` to the CLI command. Ask your admin which frameworks your deployment supports.

| Language | Framework guides |
|----------|------------------|
| Java | [TestNG](/support/docs/testng-on-hyperexecute-grid/), [JUnit](/support/docs/junit-on-hyperexecute-grid/), [Cucumber](/support/docs/cucumber-on-hyperexecute-grid/), [REST Assured](/support/docs/hyperexecute-api-testing/), [Karate](/support/docs/hyperexecute-karate-testing/) |
| JavaScript and TypeScript | [WebdriverIO](/support/docs/webdriverio-on-hyperexecute-grid/), [Playwright](/support/docs/playwright-integration-with-hyperexecute/), [Cypress](/support/docs/cypress-integration-with-hyperexecute/), [Nightwatch](/support/docs/nightwatch-on-hyperexecute-grid/), [Jest](/support/docs/jest-on-hyperexecute/), [Mocha](/support/docs/mocha-on-hyperexecute/), [CodeceptJS](/support/docs/codecept-on-hyperexecute/), [Protractor](/support/docs/protractor-on-hyperexecute-grid/) |
| Python | [PyTest](/support/docs/pytest-on-hyperexecute-grid/), [PyUnit](/support/docs/pyunit-on-hyperexecute-grid/), [Behave](/support/docs/behave-on-hyperexecute-grid/), [Robot Framework](/support/docs/robot-on-hyperexecute-grid/) |
| C# and .NET | [NUnit](/support/docs/nunit-on-hyperexecute-grid/), [SpecFlow](/support/docs/specflow-on-hyperexecute-grid/), [Reqnroll](/support/docs/reqnroll-on-hyperexecute-grid/) |
| Ruby | [Ruby](/support/docs/ruby-on-hyperexecute-grid/), [Capybara](/support/docs/capybara-on-hyperexecute-grid/) |

For the full list, see [Languages and frameworks supported on HyperExecute](/support/docs/hyperexecute-supported-languages-and-frameworks/). Mobile frameworks are not listed here. Ask your admin whether your deployment supports them.

## Feature reference

These pages describe each feature on SaaS. Before you rely on a feature this guide does not cover, check with your admin that your deployment supports it. Use this list to jump to the detail.

| Area | Pages |
|------|-------|
| Getting started | [Getting started](/support/docs/getting-started-with-hyperexecute/), [Username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/), [Dashboard walkthrough](/support/docs/hyperexecute-guided-walkthrough/), [Supported languages and frameworks](/support/docs/hyperexecute-supported-languages-and-frameworks/) |
| Projects and secrets | [Projects](/support/docs/hyperexecute-projects/), [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/), [User-level secrets](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) |
| CLI | [HyperExecute CLI and flags](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), [Environment variables for the CLI](/support/docs/hyperexecute-environment-variable-setup/), [Ignore files in the upload](/support/docs/hyperexecute-gitignore/), [CLI FAQs](/support/docs/hyperexecute-cli-faqs/) |
| YAML | [Generate your YAML](/support/docs/hyperexecute-generate-sample-yaml/), [YAML parameters](/support/docs/hyperexecute-yaml-parameters/), [Deep Dive into YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [YAML version 0.2](/support/docs/hyperexecute-yaml-version0.2/), [Inherit YAML configurations](/support/docs/hyperexecute-inherit-config/), [OS and browser](/support/docs/hyperexecute-how-to-configure-os-and-browser/), [Capability overrides](/support/docs/hyperexecute-yaml-capability-overrides/), [YAML FAQs](/support/docs/hyperexecute-yaml-faqs/) |
| Splitting and speed | [AutoSplit](/support/docs/hyperexecute-auto-split-strategy/), [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/), [Hybrid](/support/docs/hyperexecute-hybrid-strategy/), [Find the right concurrency](/support/docs/hyperexecute-how-to-find-correct-concurrency/), [Smart caching](/support/docs/hyperexecute-how-smart-caching-boosts-tests-speed/), [Fail Fast](/support/docs/hyperexecute-failfast/), [Prioritize tests](/support/docs/hyperexecute-prioritize-tests/), [Group-based discovery in TestNG](/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/) |
| Frameworks | [Frameworks you can run](#frameworks-you-can-run): Java, JavaScript, Python, C# and Ruby |
| Workflows | [Workflows](/support/docs/hyperexecute-workflows/), [Test Chains](/support/docs/hyperexecute-test-chains/) |
| CI/CD | [Integration with CI/CD tools](/support/docs/hyperexecute-integration-with-ci-cd-tools/), [Jenkins](/support/docs/jenkins-with-hyperexecute/), [Azure DevOps](/support/docs/azure-with-hyperexecute/), [Job status callback](/support/docs/hyperexecute-job-callback/) |
| Results | [Job Reports](/support/docs/hyperexecute-reports/), [Job Artifacts](/support/docs/hyperexecute-artifacts/), [Artifact URLs](/support/docs/hyperexecute-artifacts-url/), [Process artifacts in Global Post](/support/docs/hyperexecute-global-post-artifacts/), [Email reports](/support/docs/hyperexecute-email-reports/), [Filter jobs by label](/support/docs/hyperexecute-jobs-label-filter/), [Test muting](/support/docs/hyperexecute-test-muting/) |
| Reruns | [Rerun failed jobs](/support/docs/hyperexecute-rerun-failed-jobs/), [Rerun rules](/support/docs/hyperexecute-rerun-rules/) |
| Troubleshooting | [Debug a failed job](/support/docs/hyperexecute-how-to-debug-job/), [CLI errors](/support/docs/hyperexecute-cli-error/), [Pre steps errors](/support/docs/hyperexecute-pre-steps-error/), [Scenario steps errors](/support/docs/hyperexecute-scenario-steps-error/), [Version conflicts](/support/docs/hyperexecute-how-to-resolve-version-conflict/), [Snooper](/support/docs/hyperexecute-snooper/) |
| Network | [Tunnel configuration](/support/docs/hyperexecute-how-to-configure-tunnel/), [Background services](/support/docs/hyperexecute-background-services/), [sourcePayload](/support/docs/hyperexecute-how-to-configure-sourcePayload/) |
| Administration | [Global Policies](/support/docs/hyperexecute-global-policies/), [Org product preferences](/support/docs/hyperexecute-org-product-preferences/), [GitHub App integration](/support/docs/hyperexecute-github-app-integration/), [Organisation Summary](/support/docs/hyperexecute-organisation-summary-dashboard/) |
| Deployment | [HyperExecute Private Cloud](/support/docs/hyperexecute-private-cloud-setup/), [Private Cloud benefits](/support/docs/hyperexecute-private-cloud-benefits/), [Release notes](/support/docs/hyperexecute-release-notes/) |
