# Workflows in HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Schedule Configuration

During workflow creation (Step 2 of 3), you can configure the **Triggering Schedule Details** to automate when and how often your workflow runs.

### Trigger Frequency

You can choose from three trigger options:

- **Once**: The workflow runs automatically as soon as it is created. No manual execution needed.
- **Later**: Schedule the workflow to run at a specific date and time.
- **Every**: Set up recurring execution by selecting specific days of the week (Mon–Sun) and a time. For example, you can schedule a workflow to run every Monday, Wednesday, and Friday at 9:00 AM.

The schedule is set in your **local timezone** and stored internally in UTC. This ensures workflows trigger at the correct time regardless of where team members are located.

### Workflow End Date (Expiry)

Every scheduled workflow requires a **Workflow ends on** date. After this date, the workflow will stop executing automatically. This ensures workflows do not run indefinitely and helps manage resource usage.

You can update the schedule and end date at any time by editing the workflow from the actions menu.

## Manage Workflows

Once a workflow is created, you can manage it from the workflow list within your Project. Each workflow row displays the schedule, current status, last execution status, and the last 5 jobs.

### Workflow States

Every workflow sits in one of three states, shown in the **Status** column.

| State | What it means | Set by |
|-------|---------------|--------|
| **Active** | The workflow triggers jobs on its schedule. | You |
| **Paused** | The workflow is retained but triggers no new jobs. The row also shows the date it was paused. | You |
| **Expired** | The workflow's **Workflow ends on** date has passed, so it no longer triggers jobs. | Automatically |

**Expired** is derived from the end date, so it cannot be set manually. To bring an expired workflow back, edit it and extend the **Workflow ends on** date.

### Pause and Resume a Workflow

Use **Paused** to stop a workflow temporarily without editing or deleting it, for example while you investigate repeated failures or wait out a maintenance window.

Open the **Status** dropdown on the workflow row, choose **Active** or **Paused**, then select **Apply Status**.

While a workflow is paused:

- No new jobs are triggered from it, and the **Play** button is disabled.
- Jobs already running continue to completion.
- The schedule, end date, and every other setting stay exactly as they were.

Setting it back to **Active** resumes the existing schedule from that point onward. Occurrences that fell inside the paused period are not run retrospectively.

Only Org Admins and Project Admins can change a workflow's status.

### Retrigger a Workflow

Click the **Play** button (▶) next to a workflow to manually trigger it. This re-runs the workflow using the same configuration (branch, YAML, and variables). You can also edit variable values at runtime before triggering.

### Workflow Actions Menu

Click the **three dots menu** (⋯) on any workflow to access the following actions:

- **Edit Workflow**: Modify the workflow name, branch, YAML path, schedule, linked workflows, or variables.
- **Clone Workflow**: Duplicate an existing workflow configuration. This creates a copy with the same settings, which you can then modify as needed.
- **Delete Workflow**: Permanently remove a workflow. This does not delete any jobs that were previously triggered by the workflow.

## Connected Workflows (Test Chains)
Use Workflow Linking to form test chains. For example, run a daily smoke suite first and trigger a broader regression only if smoke passes. You can link across projects you own to coordinate multi-repo testing.

- Learn the pattern with real examples: [Test Chains](/support/docs/hyperexecute-test-chains/)

## Workflow Variables
Variables let you customize job runs without the need of creating multiple workflows with different YAML configurations for the same project or editing YAML before every run. To set workflow variables for a single workflow, you need to follow the following steps:
1. Create or edit a workflow. On Step 3, turn on **Workflow Variables** and add these keys (`key_1`, `key_2` and `key_3`) in the **Key** column.
2. For the values of the corresponding keys, you can:
    - **Add single value**: This value will be considered default when workflow runs through schedule. While manually running you can edit the value at runtime too.
    - **Add multiple values**: Among these, the first value will be considered default while running the workflow through schedule. At runtime, you will be able to select any value from all these.
    - **Do not add any value**: You can keep the value of a key empty too and fill it later at runtime. The value will be passed as `null` if you do not add any value at runtime.
3. Once you have added all the keys and their values, save the workflow.
4. You have the flexibility to edit the values for specific keys at the runtime, whenever you are running the workflow manually.

> Please note that the variables added from the workflows dashboard will be automatically added to the YAML file.

**Maximum Limits:**
- Up to **100 variables per workflow**.
- Up to **25 values per variable**.
- Value length limit: **500 characters** (excluding commas/spaces).

## FAQ
- **Which repos are supported for Projects?** Currently **GitHub** and **Bitbucket**.
- **Is remote test discovery required?** Yes, Workflows currently work with the [remote mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).
- **Can I trigger other workflows automatically?** Yes, via Workflow Linking to build [Test Chains](/support/docs/hyperexecute-test-chains/).
- **Among runtime and workflow variables, what takes precedence?** Runtime value > Workflow‑level defaults.
