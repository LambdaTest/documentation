# Rally Integration with TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Rally is a powerful cloud-based project management solution that streamlines project tracking, bug management, and team collaboration through its robust customization and automation capabilities.

The TestMu AI integration enables you to capture and log bugs directly from your test sessions to Rally, complete with screenshots and test environment details, making your testing workflow more efficient.

> Rally Integration with TestMu AI is available for both freemium and premium plans.

## Integrate Rally With TestMu AI

**Step 1:** Login to your TestMu AI account. You should have administrator or user level access.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on **Install** on the Rally block.

**Step 4:** Fill in the integration details:
   - **Rally API Key** - Required for authentication
   - **Host URL** - Required only for on-premises/self-hosted instances

**How to Generate API Key in Rally**

- Log in to your Rally workspace
- Go to User Settings → API Keys
- Click "Create New API Key"
- Set permissions to "Full Access"
- Copy the generated API key

> **Note**: By default, we use `https://rally1.rallydev.com` as host.

**Step 5:** Click **Install**. TestMu AI will now be integrated with Rally.

## Log your First Bug

**Step 1:** Ensure you have access to the appropriate Rally workspace and project.

**Step 2:** While testing on TestMu AI, if you encounter a bug, click on the **Mark as Bug** button available in the test session toolbar.

**Step 3:** In the bug logging form, provide the necessary details. The available fields are defined by the defect attributes in your Rally workspace:

- **Project:** Select the specific project in Rally (required)
- **Owner:** Assign the defect to a team member
- **Name:** Enter a concise summary of the bug (required)
- **Description:** Provide detailed information about the bug

- any other required fields defined in your rally attribute for defects

**Step 4:** Click on the **Create Issue** button. The bug will be logged into your Rally, and you can view it directly from your Rally dashboard or the TestMu AI Issue Tracker.

## Resync Rally Integration

To ensure that your Rally integration stays up-to-date with the latest workspaces and users:

**Step 1:** Navigate to `Settings` -> `Integrations` in your TestMu AI account.

**Step 2:** Locate the Rally integration and click on the **Resync** button.

This will:
- Fetch the latest projects and data from your Rally
- Update any changes in project configurations

If your API key has expired, you will be prompted to update your Rally integration credentials.

## Uninstall Rally Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your TestMu AI account.

**Step 2:** Locate the Rally integration and click on the **Remove** button to uninstall the integration.

> That was all you need to know for TestMu AI + Rally Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on **chat** to help you out with any roadblock.
