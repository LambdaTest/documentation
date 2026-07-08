# Test Run - Creation and Management

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
Bugs raised or linked while executing an instance are surfaced under that Test Case instance. To link Jira or Azure DevOps tickets at the instance and step level, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).

## 7. Test Run Options

You can manage your test runs using the options available in the **three-dot menu** on each test run. The following actions are available:

| Action | Description |
|---|---|
| **Edit** | Modify the test run by adding or removing test cases. KaneAI test runs can only be edited if they have not been executed. |
| **Duplicate** | Create a copy of the test run for re-execution or variation testing. |
| **Archive** | Move completed test runs to the archive to keep your workspace clean and organized. |
| **Delete** | Permanently remove a test run that is no longer needed. |
