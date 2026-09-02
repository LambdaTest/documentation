# Test Run - Creation and Management

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide outlines the steps required to create, configure, and manage test runs within TestMu AI's Test Manager. It provides developers and testers with a clear understanding of the process, enabling efficient test execution and organization.

## 1. Creating a Test Run
### Initiate a New Test Run
- Navigate to the Test Manager and click on **Create Test Run**.
- Enter a Test Run Name and an optional Description to define the purpose of the test run.

Use descriptive names to easily identify test runs later.

### Add Tags
- Assign relevant Tags to categorize the test run.
- Click **Create Test Run** to proceed.

## 2. Adding and Configuring Test Cases
### Access the Test Cases Tab
- Upon successful creation, you will be redirected to the Test Cases tab.
- Here, you can add multiple test cases to the test run.

### Assign Test Cases
- Select the desired test cases from the list.
- Assign Assignees to each test case.
- Add test case configurations individually or in bulk.
> Note: Configurations allow you to define environment settings, such as browser and device combinations.

### Add Configurations
- Choose multiple configurations from the dropdown or create new configurations as needed.
- Apply configurations to the selected test cases.

## 3. Saving and Managing Test Runs
### Finalize the Test Run
- Click Save Test Run to finalize the setup.
- View the created test run and its associated test instances in the dashboard.

Test instances are organized using a **Folders** sidebar on the left, reflecting the folder structure of the test cases added to the test run. Only folders whose test cases are included in the test run are displayed, and each folder shows the count of test instances it contains (e.g., `3/3`, `4/4`).

- Select a folder to filter and view only its test instances. The status summary (Passed, Failed, Not Started, Skipped) is displayed in the top-right corner of the listing for the selected folder.
- Collapse or expand folders for easier navigation.
- Click the **three-dot menu** on the **Folders** header to toggle **Include Child Folders**. When enabled (default), selecting a parent folder also displays test instances from its child folders.

### Bulk Update Options
- To update multiple test instances:
- Select multiple test instances.
- Use the Select Assignee and Select Status options to apply changes in bulk.

### Update Test Step Status
- Within any test instance, individually update the status of each test step.
- Add remarks or actual outcomes for manual test steps.

## 4. Filtering Test Instances

A filter bar above the test instance list lets you narrow down a test run by:

- **Test instance attributes**: Status, Assignee, Platform, OS, Browser, Resolution, Device.
- **Test case attributes**: Tags, Priority, Test Case Status.
- **Test Case Custom Fields**: available under **More Filters**.

Filters work on both Manual and Automation test runs, apply at the **All Test Instances** view as well as at any folder, and persist as you switch between folders. The active filter state is also reflected in the page URL, so you can bookmark or share a filtered view.

**Supported Custom Field types**
Custom Fields can be filtered only for types: **Single Select Dropdown**, **Multi Select Dropdown**, **User**, **Boolean**, and **Date**.

## 5. Enhancing Test Runs with Test Evidences
### Adding Remarks and Attachments
- Add Remarks or actual outcomes to enhance test instance execution details.
- You can add remarks and attachments at both the individual test step level and the overall test instance level.

The Remark field supports **rich text formatting**, including:
- Inline image embedding: paste images directly into the field.
- Text styling such as bold, italic, bullet lists, and other standard rich text options.

Remarks have a maximum limit of **5000 characters**.

- Attach supporting files or screenshots to the remarks for better context.

## 6. Execute Test Runs on TestMu AI Cloud

Execute your manual test instances directly on TestMu AI Cloud, no local setup or environment configuration required. This allows your team to run manual tests on real browsers and devices hosted on the cloud, making it one of the most efficient ways to validate your test cases.

**To execute a test run:**

1. Click the **Play** icon on any test instance to launch execution on TestMu AI Cloud.

2. During execution, update the status of individual test cases and test steps in real time as you verify each one.

**Why execute on the Cloud?**
Running test instances on TestMu AI Cloud gives you access to a wide range of real browsers, devices, and OS combinations, without maintaining local infrastructure. It ensures consistent, reliable test execution across environments.

**Track bugs during execution**
Bugs raised or linked while executing an instance are surfaced under that Test Case instance. To link Jira or Azure DevOps tickets at the instance and step level, see [Track Bugs and Issues in Test Runs](/support/docs/test-run-creation-and-management/#track-bugs-and-issues-in-test-runs).

## 7. Test Run Options

You can manage your test runs using the options available in the **three-dot menu** on each test run. The following actions are available:

| Action | Description |
|---|---|
| **Edit** | Modify the test run by adding or removing test cases. KaneAI test runs can only be edited if they have not been executed. |
| **Duplicate** | Create a copy of the test run for re-execution or variation testing. |
| **Archive** | Move completed test runs to the archive to keep your workspace clean and organized. |
| **Delete** | Permanently remove a test run that is no longer needed. |

## Track Bugs and Issues in Test Runs

### Overview

Test Manager connects the bugs found during testing to the test instances that exposed them. Every test instance in a Test Run carries its own issues, so the run becomes a traceable map of test results and the defects behind them. You can see which tests have known bugs and open any of them in one click.

There are two ways to put a bug on a test instance:

- **Link an existing issue**: connect a Jira or Azure DevOps ticket that already exists.
- **Raise a new bug with Mark as Bug**: create a new ticket in your bug tracker while you execute the test.

This works in Manual, KaneAI, and Automation Test Runs.

### Before you begin

- To link or raise bugs that are visible inside Test Manager, integrate **Jira** or **Azure DevOps** with your TestMu AI account:
  - [Link Jira Issues with Test Manager](/support/docs/link-jira-issues-with-test-manager/)
  - [Link Azure DevOps Issues with Test Manager](/support/docs/link-ado-issues-with-test-manager/)
- Mark as Bug can also create tickets in other [bug tracking tools](/support/docs/bug-tracking-tools/). See [Supported trackers and visibility](#supported-trackers-and-visibility) for what that means inside Test Manager.

### How bug tracking works in a Test Run

A bug is always associated with a **test instance**, one test case running with one configuration inside a Test Run. Whether you link an existing issue or raise a new one, the association is the same, and the bug becomes visible in three places:

- On the test instance level.
- In the Test Run's consolidated **Issues** tab, which lists every bug in the run.
- Inside the Issues tab of the corresponding Test Case.

You can add a bug from any of these points: from the run's instance list, from inside an instance, or from a specific step of an instance. A bug added at a step is listed with its parent instance, so you always see the complete picture at the instance level.

### Link an existing issue to a test instance

Use this when the defect is already tracked in Jira or Azure DevOps and you want to connect it to the test that found it.

1. Open the Test Run and stay on the **Test Instances** tab.
2. On the test instance you want, open the bug menu on its row and select **Link Issue**.

3. In the **Link Issues** dialog, choose the tracker: **Jira** or **Azure DevOps**. Only trackers you have integrated are available.
4. Enter the issue key or paste its URL.
5. Click **Link Issue**.

The issue is now linked, and the test instance row shows a bug count. That count is your at-a-glance signal for which tests in the run have known defects.

### Raise a new bug with Mark as Bug

Use this when you find a defect while executing a test and no ticket exists yet.

1. On a test instance, or a specific step within it, choose **Mark as Bug**.
2. In the **Create an Issue** panel, confirm the bug tracker. Use **Switch App** to file the bug in a different connected tracker.
3. Fill in the issue details, such as the project, issue type, and summary. Required fields are marked. The panel already carries the test instance's context.
4. Click **Create Issue**.

Test Manager files the ticket in your bug tracker without leaving the run. When the ticket is created in Jira or Azure DevOps, it is associated with the test instance and appears in the same views as a linked issue.

Mark as Bug can file tickets in several bug trackers, but only Jira and Azure DevOps tickets are tracked back to the test instance. See [Supported trackers and visibility](#supported-trackers-and-visibility).

### Review the issues on an instance

You can review the bugs on a test instance in two ways:

- **From the run list**: open the bug menu on the instance row and select **View Issues**. A side panel lists every issue associated with that instance.
- **From the instance**: open the test instance and go to its **Issues** tab. The tab header shows how many issues the instance carries. This is only possible in Manual Test Runs.

Each issue entry shows its title, key, type, status, priority, the project it belongs to, and who created it, enough to triage without opening the tracker. Use the search box and the **Status** and **Issue Type** filters to narrow a long list.

### Add a bug while reviewing an instance or a step

You do not have to act from the run list. Inside a test instance you can link an existing issue or raise a new bug at two levels:

- **At the instance**: for a defect that affects the test case as a whole.
- **At a step**: open the **Test Steps** tab and use the bug action on the step where the failure occurred, so the defect is recorded against the exact point of failure.

A bug added at a step is listed on the instance's **Issues** tab along with every other issue for that instance, so the instance always reflects the full set of defects found.

### See every issue in the run

The Test Run's **Issues** tab is the consolidated view of every bug raised or linked across all of its test instances, useful for a defect triage or a run sign-off.

1. Open the Test Run and go to the **Issues** tab.
2. To add a bug that is not yet tied to a specific instance, use **Link Issue** on this tab.
3. To focus the list, filter by **Test Case**, for example, to see only the bugs behind one failing test case. You can also filter by **Status** and **Issue Type**, or search by keyword.

### Unlink an issue

If a bug no longer belongs on a test instance, open the instance's **Issues** tab (or the **View Issues** panel), find the issue, and use its unlink action. Unlinking removes the association in Test Manager only. The ticket itself stays in Jira or Azure DevOps.

### Supported trackers and visibility

Linking an existing issue is available for **Jira** and **Azure DevOps**.

Mark as Bug can create tickets in several bug tracking tools, but only **Jira** and **Azure DevOps** tickets are associated with, and visible in, Test Runs, Test Cases, and test instances. A bug raised in any other tracker is created successfully but does not appear in these views.

## Test Instance Audit Logs

Test Manager now provides Audit Logs for test instance execution. Audit Logs bring visibility into the **who, what, and when** for every test execution. This is critical for teams working in regulated environments, or those needing high accountability in their QA processes.

With Audit logs you can store the execution history of your tests and even run parallel execution sessions without losing the context on individual executions as every action will be logged with clear indication of time stamps & executor.

### Details captured in Audit Logs

- Test Instance & Steps `Status` changes.
- Test Instance & Steps `Remarks or attachment` changes.
- Test Instance Assignee changes.

You can view the Audit Logs by clicking on the `View Execution Log`.

For the Steps level execution logs, you can preview the step with respect to which the log was created.

 As step level Audit logs are with respect to that specific steps in case the step changes the old logs will still show the preview of the older step.

 When you delete a configuration or a test case, all associated audit logs are removed. This is because the action deletes the entire instance. If you then add the same test case and configuration again, it creates a brand new instance with no prior audit history.
