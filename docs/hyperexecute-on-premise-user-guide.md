---
id: hyperexecute-on-premise-user-guide
title: HyperExecute On-Premise User Guide
sidebar_label: On-Premise User Guide
description: "End-to-end guide for on-premise HyperExecute: create a Project, run jobs from the CLI, schedule and pause workflows, and troubleshoot."
keywords:
  - HyperExecute on-premise
  - HyperExecute on-prem CLI
  - HyperExecute private deployment
  - on-prem workflows
  - pause and resume workflows
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
          "name": "HyperExecute On-Premise User Guide",
          "item": `${BRAND_URL}/support/docs/hyperexecute-on-premise-user-guide/`
        }]
      })
    }}
></script>

This guide is for teams that run HyperExecute **on-premise**, inside their own network. It takes you from a fresh machine to a scheduled workflow that runs on its own, and covers what to do when something breaks.

HyperExecute on-prem works the same way as the SaaS platform for most tasks. This page focuses on the parts that are different and links to the SaaS documentation for everything else.

## What you can do by the end of this guide

- Install the HyperExecute CLI and point it at your on-prem deployment.
- Trigger a job from your machine or your CI pipeline.
- Group jobs under a Project and set up a scheduled Workflow.
- Pause a workflow during a maintenance window and resume it afterwards.
- Find results, rerun failures, and fix the most common errors on your own.

## How on-prem differs from SaaS

Read this table once before you start. Most "it works on SaaS but not here" issues come from one of these rows.

| Area | SaaS | On-prem |
|------|------|---------|
| Dashboard | Public <BrandName /> dashboard with all products | Your organization's own dashboard host. The **HyperExecute** menu has **Jobs** and **Projects** |
| CLI target | Public HyperExecute endpoints by default | Pass your deployment host with `--onprem-host`. **Help** > **Hyperexecute CLI** gives you the full command |
| Network | Public internet endpoints must be reachable | Traffic stays inside your network. Corporate proxies and internal certificates often apply |
| Operating systems | Linux, Windows and macOS | Linux and Windows. See [Private Cloud benefits](/support/docs/hyperexecute-private-cloud-benefits/) |
| Environments | Managed by <BrandName /> | Defined by your admin. Jobs with no environment fall back to the org default |
| Test discovery | `mode: local` or `mode: remote` | `mode: remote` only |
| Tunnel | Used when tests need to reach private apps | Usually not needed. Tunnel settings are ignored for jobs started from a Workflow or the Trigger API |
| Git access | Marketplace GitHub App or tokens | Your own or a dedicated GitHub App, or Bitbucket |
| Analytics | Full Intelligent Test Analytics | Not available. Use job reports, the job **Insights (Beta)** tab and the Organisation Summary |
| Access checks | Checked by <BrandName /> | RBAC and project checks run inside your deployment |

## The end-to-end journey

Eight steps, start to finish. Click any card to jump straight to the full instructions.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
  gap: '14px',
  margin: '22px 0 10px',
}}>
  {[
    { n: 1, t: 'Find your way',       s: 'Sign in and copy your creds',   h: '#step-1-find-your-way-around-the-dashboard' },
    { n: 2, t: 'Create a Project',    s: 'Connect Git, add secrets',      h: '#step-2-create-a-project' },
    { n: 3, t: 'Install the CLI',     s: 'Download the binary and config', h: '#step-3-install-and-configure-the-cli' },
    { n: 4, t: 'Write the YAML',      s: 'Describe your test matrix',     h: '#step-4-prepare-your-yaml' },
    { n: 5, t: 'Run a job',           s: 'Trigger your first CLI run',    h: '#step-5-trigger-a-job-from-the-cli' },
    { n: 6, t: 'Create a Workflow',   s: 'Schedule or chain your jobs',   h: '#step-6-configure-and-run-a-workflow' },
    { n: 7, t: 'Manage its state',    s: 'Pause, resume, extend',         h: '#step-7-manage-workflow-states' },
    { n: 8, t: 'Review and rerun',    s: 'Open reports, rerun failures',  h: '#step-8-review-results-and-rerun-failures' },
  ].map(({ n, t, s, h }) => (
    <a
      key={n}
      href={h}
      style={{
        display: 'block',
        padding: '14px 16px',
        borderRadius: '10px',
        border: '1px solid var(--ifm-color-emphasis-200)',
        background: 'var(--ifm-background-surface-color)',
        color: 'inherit',
        textDecoration: 'none',
        transition: 'border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 23, 42, 0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '26px',
        height: '26px',
        borderRadius: '999px',
        background: 'var(--ifm-color-primary)',
        color: 'var(--ifm-color-content-inverse)',
        fontSize: '13px',
        fontWeight: 700,
        marginBottom: '10px',
      }}>{n}</div>
      <div style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.3 }}>{t}</div>
      <div style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-600)', marginTop: '4px', lineHeight: 1.4 }}>{s}</div>
    </a>
  ))}
</div>

Each step below lists what to do, what is specific to on-prem, and where the full feature docs live.

## Before you start

Collect these from your admin before step 1. Missing any of them is the most common reason a first run fails.

- [ ] Your **on-prem dashboard URL**.
- [ ] Your **on-prem host** value for the CLI. You can also copy it from **Help** > **Hyperexecute CLI** once you can sign in.
- [ ] A dashboard login. Your username and access key come from the dashboard itself (step 1).
- [ ] Your **role** (Org Admin, Project Admin or member). Workflow status changes need an admin role.
- [ ] **Proxy details**, if your machine reaches the network through a corporate proxy.
- [ ] Access to the **Git repository** that holds your tests, connected to HyperExecute by your admin.
- [ ] The **environment** name your tests should run in, if it is not the org default.

## Step 1: Find your way around the dashboard

Sign in to your organization's HyperExecute dashboard. The **HyperExecute** menu on the left has two pages:

- **Projects:** your test suites, their workflows and their jobs.
- **Jobs:** every job in the organization, with filters for **Status**, **Label**, **Team**, **Users**, **Type** and **Date**.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/jobs-list.webp').default} alt="On-premise HyperExecute Jobs page with status, label, team, user, type and date filters" className="doc_img"/>

Two controls appear on every page:

- **Parallels Available** (top right) shows how many Linux, macOS and Windows sessions your organization can run at once. On-prem deployments run Linux and Windows, so macOS shows `0`.
- **Help** opens **Quick Start**, **Docs**, **Github Samples**, **Generate YAML** and **Hyperexecute CLI**. You use **Hyperexecute CLI** in step 3 and **Generate YAML** in step 4.

### Copy your username and access key

1. In the left sidebar, click **Credentials**.
2. Click the copy icon next to **Username**, then next to **Access Key**.
3. To regenerate or manage keys, click **Manage Credentials**.

Keys from the public cloud dashboard do not work on your on-prem deployment. Always copy them from your own dashboard.

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

1. In the Project, click **Secrets**, then **Add a Secret**.
2. Enter the **Key Name** and **Value**.
3. Pick an **Expiration**. The default is **30 Days**.
4. Click **Add Secret**. The secret is available only to jobs in this Project.

Learn how to use them in the YAML on [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/).

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

- New to the format? Use **Help** > **Generate YAML**, or read [Generate your YAML](/support/docs/hyperexecute-generate-sample-yaml/) and the [Deep Dive into YAML](/support/docs/deep-dive-into-hyperexecute-yaml/).
- Keep the file at the **YAML Path** you set on the Project (`.lambdatest/hyperexecute.yaml` by default). Workflows look for it there.
- For Maven projects (TestNG, JUnit 4, JUnit 5) on remote discovery, use [YAML version 0.2](/support/docs/hyperexecute-yaml-version0.2/).
- Add your Project so jobs from the CLI are grouped with workflow jobs. See [Link jobs to Projects using YAML](/support/docs/hyperexecute-projects/#link-jobs-to-projects-using-yaml).
- Reference secrets instead of writing passwords in the file. See [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/).
- Use [caching](/support/docs/hyperexecute-how-smart-caching-boosts-tests-speed/) for Maven, Gradle or npm dependencies so each run does not download them again.

**On-prem specifics:**

- Use `linux` or `win` in `runson`. macOS is not available on-prem.
- If you do not set an environment, the job uses your organization's default environment.
- Your admin may allow only some environment variables. If you set one that is not allowed, the CLI shows a warning that names it.
- Set `testDiscovery.mode: remote` in every YAML. On-prem supports remote discovery only, so `mode: local` does not work, whether you start the job from the CLI or from a Workflow. See [testDiscovery](/support/docs/deep-dive-into-hyperexecute-yaml/#mode).
- Org-wide [Global Policies](/support/docs/hyperexecute-global-policies/) can add steps to your job or reject it. Check the **Applied Policies** panel on the job page to see what changed.

Validate the file before you submit it:

```bash
./hyperexecute --config .lambdatest/hyperexecute.yaml --validate
```

## Step 5: Trigger a job from the CLI

The **Hyperexecute CLI** panel from step 3 shows a **Test execution command** with your username, access key and on-prem host already filled in. Copy it, replace `<your_yaml_file_name>` with your YAML path, and run it from your project root:

```bash
./hyperexecute --user <YOUR_USERNAME> --key <YOUR_ACCESS_KEY> --config .lambdatest/hyperexecute.yaml --onprem-host <YOUR_ONPREM_HOST>
```

`--onprem-host` takes the host name of your deployment on its own, for example `hyperexecute.example.com`, with no `https://` and no path.

The job appears on the **Jobs** page and in your Project's **Jobs** tab while it runs.

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
3. **Step 2 of 3:** leave **Triggering Schedule Details** on and pick **Once**, **Later** or **Every**. For **Every**, choose a **Run Every** unit:
   - **Minutes**, **Hours** or **Days**, with a **During time frame** start and end time.
   - **Days of week**, with a **Start at** time and the days under **When to Run**.

   Turn the toggle off to run the workflow only by hand. Set **Workflow ends on** either way, then click **Next**.
4. **Step 3 of 3 (optional):** turn on **Link Workflow** to trigger another workflow when this one ends **Completed**, and pick its project and workflow. Turn on **Workflow Variables** to add values you can change at runtime.
5. Click **Finish**. Click **Play** on the workflow row to run it straight away.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/workflow-step2-every-interval.webp').default} alt="Workflow schedule step with Every selected, Run Every 15 minutes, a time frame and the Workflow ends on date" className="doc_img"/>

Full feature reference: [Workflows](/support/docs/hyperexecute-workflows/), [Test Chains](/support/docs/hyperexecute-test-chains/).

**On-prem specifics:**

- Tunnel settings in the YAML are ignored for jobs started by a workflow, so you do not need a tunnel for these runs.
- When you link workflows, select both the target project (**Select Project**) and the target workflow (**Select Workflow**) before you click **Finish**.
- If you change only Workflow Variables while editing, confirm they show your new values after you save.

## Step 7: Manage workflow states

Every workflow is in one of three states, shown in the **Status** column.

| State | What it means | How it gets there |
|-------|---------------|-------------------|
| **Active** | Triggers jobs on its schedule. | Set by an admin |
| **Paused** | Kept as it is, but triggers no new jobs. Shows the date it was paused. | Set by an admin |
| **Expired** | The end date has passed, so it no longer runs. | Automatic |

<img loading="lazy" src={require('../assets/images/hyperexecute/features/workflows/workflow-states.webp').default} alt="Workflow list showing Active, Paused and Expired states" className="doc_img"/>

The Project's **Workflows** tab sums them up at the top: **Total Workflows**, **Active Workflows**, **Workflows Running Successfully**, **Workflows with Issues** and **Expired Workflows**. Each row shows the branch, owner, last run, schedule, end date, status and the **Last 5 Jobs**.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/project-workflows-tab.webp').default} alt="Project Workflows tab with summary tiles and a list of workflows showing schedule, end date, status and last five jobs" className="doc_img"/>

### Pause a workflow

Pause a workflow when the target environment is down for maintenance, during a code freeze, or while you investigate repeated failures.

1. Open the **Status** dropdown on the workflow row.
2. Choose **Paused**.
3. Click **Apply Status**.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/workflows/workflow-set-status.webp').default} alt="Set Status dropdown with Active and Paused options" className="doc_img"/>

While it is paused:

- No new jobs start, and the **Play** button is disabled.
- Jobs already running finish normally.
- The schedule, end date and variables stay as they were.

### Resume a workflow

Set the status back to **Active** and click **Apply Status**. The schedule continues from that point. Runs that would have happened during the pause are **not** run afterwards. If you need them, run the workflow once with **Play**.

### Bring back an expired workflow

You cannot set **Expired** by hand, and you cannot change it back from the dropdown. Click the **...** menu on the workflow row, choose **Edit Workflow**, and move **Workflow ends on** into the future. The same menu has **Clone Workflow** and **Delete Workflow**.

:::note
Only Org Admins and Project Admins can change a workflow's status. If the dropdown is disabled for you, ask your admin.
:::

## Step 8: Review results and rerun failures

Open a job from the **Jobs** page or the Project's **Jobs** tab. The job page shows the status, duration, owner and labels at the top, with **YAML**, **Artifacts** and **Report** buttons. The left panel lists each execution task and the global post task. On the right, switch between **Pre Steps**, **Scenarios** and **Post Steps** to read the logs for that task.

<img loading="lazy" src={require('../assets/images/hyperexecute/on-prem/job-detail-scenarios.webp').default} alt="On-premise job page with task list on the left and the Scenarios tab of a task on the right" className="doc_img"/>

- **Job page:** live logs, task status and the Applied Policies panel. Start with [How to debug a failed job](/support/docs/hyperexecute-how-to-debug-job/).
- **Reports:** framework reports for each job. See [Job Reports](/support/docs/hyperexecute-reports/).
- **Artifacts:** files your tests produce. See [Job Artifacts](/support/docs/hyperexecute-artifacts/).
- **Logs per scenario:** on-prem runs write a separate log file for each scenario, which makes long suites easier to read.
- **Rerun failed tests:** rerun only what failed instead of the whole job. See [Rerun failed tests](/support/docs/hyperexecute-rerun-failed-jobs/).
- **Notifications:** if your deployment sends email, send reports by [email](/support/docs/hyperexecute-email-reports/), including different recipients for passed, failed and aborted jobs.
- **Org view:** admins can click **View Summary** on the Projects page to open the [Organisation Summary](/support/docs/hyperexecute-organisation-summary-dashboard/). It shows organization totals, job and test counts, job status, and failure reasons (Test-level, Config, Infra, Access & Licensing, Unclassified), filtered by project and date, with **Download PDF**.

## Environments and queues

Admins define which environments exist and which OS queue each framework uses. As a test team member, you only need the environment name.

- Jobs that do not name an environment use the org default.
- Admins can map Linux frameworks to different queues for each environment.
- Browser versions: if you ask for an exact version or `latest-N`, you get it when it is installed. If it is not installed, you get the latest available version.

## Common scenarios

### Nightly regression

Create a workflow with an **Every** schedule on weekdays at a quiet hour. Set the end date to the end of the release cycle. If your deployment sends email, add email notifications for failed runs.

### Smoke first, then regression

Create two workflows. Schedule the smoke workflow, and link the regression workflow to it so regression starts when the smoke workflow ends with status **Completed**. See [Test Chains](/support/docs/hyperexecute-test-chains/).

### Same suite against several environments

Create one workflow with a Workflow Variable such as `TARGET_ENV` that has several values. The first value is used for scheduled runs. Pick a different value when you run it with **Play**.

### Maintenance window

Pause the affected workflows before the window starts. Resume them once the environment is back. Run each one manually once if you need the missed coverage.

### Run from your CI pipeline on every merge

Use the CLI command from [step 5](#step-5-trigger-a-job-from-the-cli) as a pipeline stage. Workflows do not run on commits yet, so use CI for commit-driven runs and workflows for scheduled runs.

## Troubleshooting

| What you see | Likely cause | What to do |
|--------------|--------------|------------|
| `ERR::HTTP::RESP` with `401` and `Invalid user/key credentials` | Wrong key, or a SaaS key used against on-prem | Copy the username and key from the **on-prem** dashboard. See [ERR::HTTP::RESP](/support/docs/hyperexecute-cli-error/#err_http_resp). |
| `ERR:HTTP:HOST`, cannot connect to the authentication host | CLI is not pointed at your deployment, or a proxy is blocking it | Check `--onprem-host`, then add `--auto-proxy`. Run `--scan` to test connections. See [ERR:HTTP:HOST](/support/docs/hyperexecute-cli-error/#err_http_host). |
| `ERR::NO::USER` or `ERR::NO::KEY` | Username or key not passed | Pass `--user` and `--key`, or set them as environment variables. See [Error codes](/support/docs/hyperexecute-cli-error/#error-codes). |
| Certificate or TLS error | Internal certificate authority not trusted by the machine | Ask your admin for the internal CA bundle and install it on the machine or CI agent. |
| YAML rejected before the job starts | A Global Policy with `error` severity, or invalid YAML | Read the message, which names the policy and the fix. Run `--validate`. See [YAML validation messages](/support/docs/hyperexecute-cli-error/#yaml-validation-messages). |
| Warning about a disallowed environment variable | Your admin has limited which variables are allowed | Remove the variable or ask your admin to allow it. |
| Workflow did not start at the scheduled time | Workflow is Paused or Expired, or the run failed to create a job | Check the **Status** column. Open the workflow and check **Past Occurrences** for errors such as a wrong branch or YAML path. |
| **Play** button is disabled | Workflow is Paused | Set the status back to **Active**. |
| Status dropdown is disabled | You are not an Org Admin or Project Admin | Ask your admin to change it. |
| Tests pass on your machine but fail on HyperExecute | Missing dependency or different environment | Check pre-steps output. See [Pre steps errors](/support/docs/hyperexecute-pre-steps-error/) and [Scenario steps errors](/support/docs/hyperexecute-scenario-steps-error/). |
| Job ends with `lambda_error` | Symbolic links or very large files in the upload | See [Symbolic link error](/support/docs/hyperexecute-cli-error/#symbolic-link-error) and use a [.hyperexecuteignore file](/support/docs/hyperexecute-gitignore/). |
| Gradle job passes with zero tests | Gradle version below 7.0 | Upgrade Gradle to 7.0 or later. |

If none of these match, collect the job ID, the CLI version (`./hyperexecute --version`) and the full error text, then contact support at [hyperexecute-privatecloudsupport@testmuai.com](mailto:hyperexecute-privatecloudsupport@testmuai.com).

## Dependencies checklist

| Dependency | Needed for | Owner |
|------------|-----------|-------|
| On-prem dashboard URL and host | Everything | Platform admin |
| User account, role and access key | CLI and dashboard | Org Admin |
| Network path from your machine or CI agent to the deployment | CLI | Network team |
| Proxy settings and internal CA certificates | CLI behind a corporate proxy | Network or security team |
| Git connection (GitHub App or Bitbucket) | Projects and Workflows | Org Admin |
| Environment and queue setup | Running jobs | Org Admin |
| YAML in the repository | Jobs and Workflows | Test team |
| Secrets created in HyperExecute | Jobs that need credentials | Test team or Org Admin |

## Feature reference

Every feature below works on-prem unless the page or this guide says otherwise. Use this list to jump to the detail.

| Area | Pages |
|------|-------|
| Getting started | [Getting started](/support/docs/getting-started-with-hyperexecute/), [Username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/), [Dashboard walkthrough](/support/docs/hyperexecute-guided-walkthrough/), [Supported languages and frameworks](/support/docs/hyperexecute-supported-languages-and-frameworks/) |
| Projects and secrets | [Projects](/support/docs/hyperexecute-projects/), [Project-level secrets](/support/docs/hyperexecute-how-to-manage-project-level-secrets/), [User-level secrets](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) |
| CLI | [HyperExecute CLI and flags](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), [Environment variables for the CLI](/support/docs/hyperexecute-environment-variable-setup/), [Ignore files in the upload](/support/docs/hyperexecute-gitignore/), [CLI FAQs](/support/docs/hyperexecute-cli-faqs/) |
| YAML | [Generate your YAML](/support/docs/hyperexecute-generate-sample-yaml/), [YAML parameters](/support/docs/hyperexecute-yaml-parameters/), [Deep Dive into YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [YAML version 0.2](/support/docs/hyperexecute-yaml-version0.2/), [Inherit YAML configurations](/support/docs/hyperexecute-inherit-config/), [OS and browser](/support/docs/hyperexecute-how-to-configure-os-and-browser/), [Capability overrides](/support/docs/hyperexecute-yaml-capability-overrides/), [YAML FAQs](/support/docs/hyperexecute-yaml-faqs/) |
| Splitting and speed | [AutoSplit](/support/docs/hyperexecute-auto-split-strategy/), [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/), [Hybrid](/support/docs/hyperexecute-hybrid-strategy/), [Find the right concurrency](/support/docs/hyperexecute-how-to-find-correct-concurrency/), [Smart caching](/support/docs/hyperexecute-how-smart-caching-boosts-tests-speed/), [Fail Fast](/support/docs/hyperexecute-failfast/), [Prioritize tests](/support/docs/hyperexecute-prioritize-tests/), [Group-based discovery in TestNG](/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/) |
| Frameworks | [TestNG](/support/docs/testng-on-hyperexecute-grid/), [Cucumber](/support/docs/cucumber-on-hyperexecute-grid/), [JUnit](/support/docs/junit-on-hyperexecute-grid/), [WebdriverIO](/support/docs/webdriverio-on-hyperexecute-grid/), [Playwright](/support/docs/playwright-integration-with-hyperexecute/) |
| Workflows | [Workflows](/support/docs/hyperexecute-workflows/), [Test Chains](/support/docs/hyperexecute-test-chains/) |
| CI/CD | [Integration with CI/CD tools](/support/docs/hyperexecute-integration-with-ci-cd-tools/), [Jenkins](/support/docs/jenkins-with-hyperexecute/), [Azure DevOps](/support/docs/azure-with-hyperexecute/), [Job status callback](/support/docs/hyperexecute-job-callback/) |
| Results | [Job Reports](/support/docs/hyperexecute-reports/), [Job Artifacts](/support/docs/hyperexecute-artifacts/), [Artifact URLs](/support/docs/hyperexecute-artifacts-url/), [Process artifacts in Global Post](/support/docs/hyperexecute-global-post-artifacts/), [Email reports](/support/docs/hyperexecute-email-reports/), [Filter jobs by label](/support/docs/hyperexecute-jobs-label-filter/), [Test muting](/support/docs/hyperexecute-test-muting/) |
| Reruns | [Rerun failed jobs](/support/docs/hyperexecute-rerun-failed-jobs/), [Rerun rules](/support/docs/hyperexecute-rerun-rules/) |
| Troubleshooting | [Debug a failed job](/support/docs/hyperexecute-how-to-debug-job/), [CLI errors](/support/docs/hyperexecute-cli-error/), [Pre steps errors](/support/docs/hyperexecute-pre-steps-error/), [Scenario steps errors](/support/docs/hyperexecute-scenario-steps-error/), [Version conflicts](/support/docs/hyperexecute-how-to-resolve-version-conflict/), [Snooper](/support/docs/hyperexecute-snooper/) |
| Network | [Tunnel configuration](/support/docs/hyperexecute-how-to-configure-tunnel/), [Background services](/support/docs/hyperexecute-background-services/), [sourcePayload](/support/docs/hyperexecute-how-to-configure-sourcePayload/) |
| Administration | [Global Policies](/support/docs/hyperexecute-global-policies/), [Org product preferences](/support/docs/hyperexecute-org-product-preferences/), [GitHub App integration](/support/docs/hyperexecute-github-app-integration/), [Organisation Summary](/support/docs/hyperexecute-organisation-summary-dashboard/) |
| Deployment | [HyperExecute Private Cloud](/support/docs/hyperexecute-private-cloud-setup/), [Private Cloud benefits](/support/docs/hyperexecute-private-cloud-benefits/), [Release notes](/support/docs/hyperexecute-release-notes/) |


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
        HyperExecute On-Premise User Guide
      </span>
    </li>
  </ul>
</nav>
