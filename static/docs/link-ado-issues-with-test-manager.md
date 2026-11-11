# Link Azure DevOps Issues with Test Manager

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Link Azure DevOps Issues with Test Manager

Test Manager enhances its functionality by seamlessly linking test cases with Azure DevOps Work Items. This integration ensures a reliable connection between your testing activities and Azure DevOps Work Items, optimizing project management and collaboration across teams.

### Prerequisites
- Active Microsoft Azure DevOps account
- Appropriate permissions to access Azure DevOps projects

### Initial Setup and Configuration

> **Note:** If you have already integrated Azure DevOps with your TestMu AI account, you can skip this section and proceed directly to [Linking Azure DevOps Work Items](#linking-azure-devops-work-items)

1. Navigate to the [Integration page](https://integrations.lambdatest.com/) to integrate your TestMu AI account with Azure DevOps. Click on **Connect** as shown in the image.

2. A side drawer will open to initiate Azure DevOps integration. Click on **Install** to proceed.

3. Select your Azure DevOps Organization and click **Install**. Azure DevOps is now integrated with your TestMu AI account.

### Requirements and defects

Where you link an Azure DevOps work item decides what it is in Test Manager:

| Where the work item is linked | What it becomes | What it tells you |
|---|---|---|
| Test case or test run | Requirement | What the test validates |
| Test instance or step in a test run | Defect | What testing found |

The work item type in Azure DevOps does not change this. A Bug linked on a test case is a requirement, because the test checks that bug, and a Task linked on a step is a defect. To change the role of a link, unlink the work item and link it in the right place.

Work items you linked before this change were given a role automatically, using the same rule.

Requirements and defects are currently in slow rollout. To get early access, raise a request to our support team. Until they are enabled for your organization, linked issues appear in a single list.

### Linking Azure DevOps Work Items

Once the integration is complete, follow these steps to link a requirement to your test cases or test runs:

1. Open the **Issues** tab of a test case and click **Link requirement**. On a test run, open its **Issues** tab and click **Link requirement to run**.
> Note: To link a defect on a test instance or a step, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).

2. Select **Azure DevOps**, enter the Azure DevOps Work Item ID or URL, and click **Link requirement**.

3. The Azure DevOps Work Item from your integrated Organization is linked and listed under **Requirements**. You can view the work item name, ID, type, state, priority, and creator.

4. To **unlink an issue**, hover over the work item and click **Unlink requirement** on the right side of its row.

### Issues on a test case

The **Issues** tab of a test case has two tabs, each grouped by tracker. Use the search box and the **State** and **Work Item Type** filters to narrow a long list.

- **Requirements**: the work items linked on this test case. You can link and unlink them here.
- **Defects**: the defects raised or linked on this test case's instances and steps, across its test runs. Each one shows where it was raised, and **View in run** opens that run. This list is read-only, so you add and remove defects from the test run.

A defect counts as open based on its state in Azure DevOps.
