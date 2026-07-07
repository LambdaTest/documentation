# ServiceNow Integration with TestMu AI

ServiceNow is a cloud-based platform for IT service management and automating business processes. Integrating ServiceNow with TestMu AI enables you to log incidents directly from your testing sessions into ServiceNow, streamlining your workflow and enhancing team collaboration.

> ServiceNow Integration with TestMu AI is available for both freemium and premium plans.

### Create an OAuth Application for TestMu AI in ServiceNow

> Only an administrator of your ServiceNow instance can create the OAuth application required for integration.

To enable integration, you need to create an OAuth application in your ServiceNow instance for TestMu AI:

1. **Log in to your ServiceNow instance** as an administrator.
2. Go to **System OAuth > Application Registry** in the left navigation pane.

3. Click **New** and select **Create an OAuth API endpoint for external clients**.
4. Fill in the required fields:
   - **Name:** Enter a name (e.g., TestMu AI Integration).
   - **Client ID:** (Optional) Leave blank to auto-generate or specify your own.
   - **Client Secret:** (Optional) Leave blank to auto-generate or specify your own.
   - **Redirect URL:** https://integrations.lambdatest.com/servicenow/auth/callback
   - **Logo URL:** https://assets.testmuai.com/resources/images/logos/logo.svg

5. Click **Submit** to create the application.
6. After creation, copy the **Client ID** and **Client Secret**. You will need these values to complete the integration in TestMu AI.

Once the OAuth application is set up, proceed with the integration steps below.

## Integrate ServiceNow from your TestMu AI Account

**Step 1:** Log in to your [TestMu AI](https://www.testmuai.com/login/) account. Ensure you have Admin or User level access to manage integrations.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on the **Connect** button of the ServiceNow block.

**Step 4:** In the integration setup form, enter the following details:

- **ServiceNow Instance URL:** The URL of your ServiceNow instance (e.g., `https://your-instance.service-now.com`).
- **Client ID:** The Client ID from your ServiceNow OAuth application.
- **Client Secret:** The Client Secret from your ServiceNow OAuth application.

After filling in the details, click on the **Install** button to establish the integration.

## Log your First Incident

**Step 1:** Ensure you have access to the appropriate ServiceNow instance and the Incident table is available.

**Step 2:** While working on TestMu AI, if you encounter an incident, click on the **Mark as Bug** button available on different products.

**Step 3:** In the incident logging form, provide the necessary details such as:

- **User:** The user in ServiceNow to whom the incident should be assigned.
- **Short Description:** A concise summary of the incident.
- **Description:** Detailed information about the incident.
- **Urgency:** Select the urgency level for the incident.
- **Priority:** Select the priority for the incident.
- **Due Date:** The date by which the incident should be resolved.

**Step 4:** Click on the **Create Issue** button. The incident will be logged into your ServiceNow instance, and you can view it directly from your ServiceNow dashboard.

## Resync ServiceNow Integration

To ensure that the latest users from your ServiceNow system are available in TestMu AI, you can resync the integration.

**Step 1:** Navigate to `Settings` -> `Integrations` in your TestMu AI account.

**Step 2:** Locate the ServiceNow integration and click on the **Resync** button.

- This will fetch the latest users from your ServiceNow system.

- If your refresh token has expired, you will be prompted to reauthorize your ServiceNow integration.

Once resynced, the latest data will be available for use.

## Uninstall ServiceNow Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your TestMu AI account.

**Step 2:** Locate the ServiceNow integration and click on the **Remove** button to uninstall the integration.

> That was all you need to know for TestMu AI + ServiceNow Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on **chat** to help you out with any roadblock.
