# Workflows in HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Workflows give you the speed, reliability, and platform‑native orchestration of HyperExecute on a schedule. Think of Workflows as a lightweight, cloud-native alternative and companion to CI/CD, with all the functionalities of HyperExecute such as reporting, RCA etc.

## Why Workflows
- **Schedule-first orchestration:** Run regular suites by just connecting your Git repo, without wiring a CI pipeline.
- **Native to HyperExecute:** Leverage JIT infrastructure, smart test discovery/splitting, and rich artifacts in one place.
- **Chainable runs:** Trigger downstream workflows on success to form full test chains across projects.
- **Customizable:** Use Workflow Variables to reuse the same YAML across environments and scenarios.

## How Workflows are Used
Workflows are schedule and platform driven, not commit-driven yet. Workflows can be thought of as UI alternative for CLI-based executions, if your project is available on Git. They’re great for:
- Nightly smoke/regression runs across browsers/devices.
- Scheduled environment checks (staging, pre-prod) before business hours.
- Chaining suites across multiple repositories or projects.

## Prerequisites
- A [HyperExecute Project](/support/docs/hyperexecute-projects/) connected to **GitHub** or **Bitbucket**.
- A HyperExecute YAML present on the specified branch, or provide a Custom YAML during setup. New to YAML? See [Generate YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-generator-create-your-config-file) and the [Deep Dive](/support/docs/deep-dive-into-hyperexecute-yaml/).
- Note: Workflows currently work with the [remote mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).

## Create a Workflow
1) In your Project, click **Setup Workflow**.
2) Enter details:
   - **Workflow name**
   - **Branch name** (source branch containing the YAML)
   - **YAML file path** (path in repo) or add Custom YAML
3) (Optional) Configure the **schedule** or skip it if you want to run workflow manually. See [Schedule Configuration](#schedule-configuration) for details.
4) (Optional) You can **link your workflow** by selecting existing workflows to trigger automatically after this workflow completes successfully.
5) (Optional) You may also define **Workflow Variables** which can be used in the YAML to customize behavior at runtime for a specific workflow.
6) Click **Finish** and your workflow is ready. Click on Play button in the workflow list to run the job manually.

All jobs appear under the same Project. View jobs from the Project’s **Jobs** tab or by clicking the workflow name to open **Past Jobs** view.

If you don’t see a job after clicking Run or after the scheduled time, open the workflow and check **Past Occurrences**. Runs that failed to create a job (e.g., due to YAML validation, missing file path, or branch mismatch) are listed there with error details.

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

Once a workflow is created, you can manage it from the workflow list within your Project. Each workflow row displays the schedule, last execution status, and the last 5 jobs.

### Retrigger a Workflow

Click the **Play** button (▶) next to a workflow to manually trigger it. This re-runs the workflow using the same configuration (branch, YAML, and variables). You can also edit variable values at runtime before triggering.

### Workflow Actions Menu

Click the **three dots menu** (⋯) on any workflow to access the following actions:

- **Edit Workflow**: Modify the workflow name, branch, YAML path, schedule, linked workflows, or variables.
- **Clone Workflow**: Duplicate an existing workflow configuration. This creates a copy with the same settings, which you can then modify as needed.
- **Delete Workflow**: Permanently remove a workflow. This does not delete any jobs that were previously triggered by the workflow.

## Connected Workflows (Test Chains)
Use Workflow Linking to form test chains. For example, run a daily smoke suite first and trigger a broader regression only if smoke passes. You can link across projects you own to coordinate multi-repo testing.

- Learn the pattern with real examples: [Test Chains](/support/docs/hyperexecute-workflows/#hyperexecute-test-chains)

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
- **Can I trigger other workflows automatically?** Yes, via Workflow Linking to build [Test Chains](/support/docs/hyperexecute-workflows/#hyperexecute-test-chains).
- **Among runtime and workflow variables, what takes precedence?** Runtime value > Workflow‑level defaults.

## HyperExecute Test Chains

Test Chains allow you to link multiple test workflows so that one workflow triggers another based on specific conditions, such as the success or failure of a previous workflow. This feature eliminates the need for manual intervention between different stages of testing, allowing for a seamless automated testing pipeline.

The steps below create test chains using connected workflows in HyperExecute, with real-world examples and step-by-step instructions for implementing them.

### Features of HyperExecute Connected Workflows
- **Automated Workflow Chains:** Define test chains where the success of one workflow triggers subsequent workflows.
- **Flexible Scheduling:** Schedule workflows to run based on your desired frequency and conditions.
- **Conditional Triggering:** Trigger workflows based on specific outcomes, such as the passing or failing of previous tests.
- **Centralized Configuration:** Set up and manage workflows easily within the HyperExecute platform.

### Real-World Use Case Scenarios
#### Example 1: Conditional Regression Testing
Let’s consider a development scenario where:
- **Workflow A** (smoke tests) runs first. This workflow contains a set of critical tests that must pass to ensure the build is functional.
- **Workflow B** (regression tests) runs next, but only if Workflow A passes.

Our objective is to automatically trigger the regression tests after the smoke tests pass to ensure that the software does not break after critical functionalities are verified.

**Workflow Flow:**
- **Workflow A - Smoke tests (runs daily):** Executes a subset of tests (e.g., 30 high-severity or critical tests).
- **Workflow B: Regression tests (triggered after successful execution of Workflow A):** Executes a larger set of tests, ensuring that the product remains functional after code changes.

#### Example 2: Severity-based Test Execution
In this scenario, you can define tests to run based on their severity levels.
- **Workflow A:** High-severity tests (e.g., critical functionality tests) are executed every day.
- **Workflow B:** General regression tests (run only after Workflow A passes).

Our objective is to run essential tests first and trigger a broader set of tests only if the critical tests pass.

**Workflow Flow:**
- **Workflow A:** High-severity tests run daily.
- **Workflow B:** General regression tests run if Workflow A passes.

This setup ensures that resources are focused on high-priority tests while the more extensive tests are executed only when necessary.

### Steps to Set Up Connected Workflows in HyperExecute
Follow these steps to configure connected workflows in HyperExecute:

#### Prerequisite
- Setup your [Project](/support/docs/hyperexecute-projects/#setup-your-project) before setting up the Workflows.
- You must have created your required [workflows](/support/docs/hyperexecute-projects/#schedule-your-workflows) that you want to trigger.

#### Step 1: Setup Workflow
- Click on the "**Setup Workflow**" button:
- Enter Workflow Details:
    - **Workflow Name:** Give your workflow a descriptive name (e.g., "Smoke Tests" or "Regression Tests").
    - **Branch Name:** Specify the branch where your tests are stored.
    - **YAML File Path:** Provide the path to your YAML configuration file that contains the test definitions for this workflow.
- Click "Next" to proceed to the scheduling configuration.

#### Step 2: Configure the Schedule
- Configure the schedule of your workflow. Select the **days** and **time** at which you want to trigger your tests. Click on **Next**.

#### Step 3: Workflow Linking
You can link this workflow to other existing workflows within the same project or across other projects you own. Once this workflow completes successfully, it can automatically trigger the linked workflows, enabling seamless execution across stages. To set this up, simply select the projects and workflows you wish to trigger from the available list. This feature allows you to build automated, end-to-end workflow chains, ideal for orchestrating complex testing and deployment pipelines.

### Conclusion
HyperExecute’s Test Chain feature significantly enhances the automation of testing processes by creating logical dependencies between workflows. This feature allows for a more efficient, error-free testing pipeline that ensures quality software with minimal manual intervention.

By setting up workflows that automatically trigger based on the outcomes of previous ones, teams can reduce the time spent managing tests, allowing them to focus on critical tasks. Whether you are running smoke tests first, followed by full regression tests, or organizing tests based on severity, HyperExecute provides the flexibility to streamline your testing processes.
