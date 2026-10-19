# Self-Hosted Jira Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Many organizations consistently choose to self host their application as it gives them complete control of almost everything. If you want to place Jira behind your corporate firewall and restrict access to someone who isn't on your private network, you can do the same.

TestMu AI-Jira integration allows you to integrate your self-hosted Jira instance and create the issues directly from the TestMu AI platform. You can send annotated issues to the project of your choice, assign them to a colleague, and add a screenshot straight from the TestMu AI platform.

## How To Integrate Self-Hosted Jira With TestMu AI

You can integrate your self-hosted Jira with the TestMu AI platform. To view and install integrations, you would need to have admin or user-level access.

**Step 1**: Login to your TestMu AI account and select **'Integrations'** from the left menu bar. You will be taken to the integration page where you'll find third-party apps available to integrate. Under **'Bug Tracker'**, click **'Connect'** on the **'Jira'** card.

**Step 2**: The **'Setup Jira'** panel opens. Under **'Instance Type'**, select **'Self Hosted'**.

**Step 3**: Under **'Sign-in method'**, choose how TestMu AI signs in to your Jira:

* **Personal Access Token**: Enter your Jira URL, email and a Jira Personal Access Token, then click **'Install'**.
* **OAuth 2.0** (Jira Data Center 8.22 and later): Follow [Connect Jira Data Center with OAuth 2.0](#connect-jira-data-center-with-oauth-20) below.

**Step 4**: Visit the Integration page, you'll find the Jira integration under the category **'My Integrations'**.

TestMu AI reaches your Jira from the IP addresses listed in the **'Instructions'** panel of the setup screen. If your Jira is behind a firewall, allow these IP addresses.

## Connect Jira Data Center With OAuth 2.0

With OAuth 2.0, you sign in to Jira and allow access once. TestMu AI never stores your Jira password, and renews the access automatically.

**Before you begin**

* Jira Data Center 8.22 or later, served over `https://`.
* A Jira administrator to create the application link in Jira.

**Step 1**: In Jira, a Jira administrator goes to **Administration → Applications → Application links → Create link**, selects **External application**, and then **Incoming**.

**Step 2**: Enter a name for the link, and set:

* **Redirect URL**: `https://integrations.lambdatest.com/jira/auth/callback`. For the EU data center, use `https://eu-integrations.lambdatest.com/jira/auth/callback`. The setup screen in TestMu AI also shows the Redirect URL for your account in the **'Instructions'** panel.
* **Permission**: **Write**.

Save the link and copy the **Client ID** and **Client secret** that Jira shows.

**Step 3**: In TestMu AI, go to **'Integrations'**, click **'Jira'**, select **'Self Hosted'**, and choose **'OAuth 2.0'** as the sign-in method. Enter your Jira URL, the **Client ID** and the **Client secret**, then click **'Install'**.

The **'Allow untrusted certificate (self-signed or internal CA)'** option is off by default. Tick it only if your Jira uses a self-signed certificate or one issued by your internal certificate authority. Use it only for a Jira you trust, because certificate checks are skipped for this connection.

**Step 4**: You are redirected to Jira. Sign in if asked, review the access, and click **'Allow'**.

**Step 5**: Back in TestMu AI, select the Jira projects you want to use and click **'Integrate Projects & Install'**. Jira now appears under **'My Integrations'**.

Issues are created in Jira as the Jira user who clicked **'Allow'**, with that user's Jira permissions. If you plan to [share the connection with your organization](/support/docs/jira-integration/#share-your-jira-integration-across-your-organization), connect with a Jira account meant for the team.

### View Connection Details

On the Jira card under **'My Integrations'**, click the ellipsis (•••) and select **'Info'**. For an OAuth 2.0 connection, the drawer shows **Auth method** as **OAuth 2.0**, **Deployment** as **Jira Data Center**, the **Server certificate** setting, and the access token status with the time it was last renewed.

### Reconnect an Expired Connection

The connection stops working when the access is revoked in Jira (for example, under **Authorized Applications** in the Jira user's profile), or when it has not been used for longer than the refresh token lifetime your Jira administrator set (90 days by default). The drawer then shows **Needs attention**, the access token shows **Expired**, and the connection owner receives an email.

To fix it, open the drawer, click **'Reconnect'**, and click **'Allow'** in Jira. Your projects and organization sharing stay as they were. Only the person who installed the connection can reconnect it.

To use a different Client ID, Client secret or certificate setting, remove the integration and connect again.

## How To Mark Your Bug Through Self-Hosted Jira Integration?

Once you have established TestMu AI-Jira integration, you can directly mark and push your bugs from TestMu AI to your Jira dashboard.

**Step 1**: Select the test that you want to perform from the left menu bar. For demonstration, we will perform Real-time testing.

**Step 2**: Enter the test URL of the website/web app in the URL field. Select the browser and OS combinations that you wish to perform the test on and then click on **'Start'**.

**Step 3**: A TestMu AI virtual machine will fire up where you can perform real-time testing of your websites and web-apps to find bugs/issues. If you encounter a bug, click the Bug icon from the left panel for [capturing a screenshot](https://www.testmuai.com/full-page-screen-capture/) of the same.

**Step 4**: Once the screenshot is captured, you can annotate any bugs or a task with an in-built image editor. After highlighting the bug, click the **bug icon** beside **'Jira'**.

**Step 5**: A Jira-specific form opens. Fill in the fields as per your requirement:

*   Select the **'Project'** to which your ticket will go under, and the **'Issue Type'**.
*   Assign the bug to a teammate by populating the field **'Assignee'**.
*   Fill the **'Summary'** about the bug's details.

**Step 6**: Click **'Mark As Bug'**. In a few seconds, you'll see the message **'Your bug has been logged successfully'**.

**Step 7**: Visit the Jira dashboard and you'll find your marked bugs right away. All the data such as test environment details, screenshots that you provided through TestMu AI will be present there.

## How To Remove Self-Hosted Jira Integration?

> You can integrate one bug-tracking tool at a time. If you want to integrate to a similar third party application, then need to remove your current integration. Here is how to do that.

**Step 1:** Login to your TestMu AI account.

**Step 2:** Navigate to **'Integrations'** tab from the left menu bar.

**Step 3:** Under **'My Integrations'**, click the ellipsis (•••) on the **'Jira'** card and select **'Remove'**.

 You will receive the confirmation message upon the successful uninstallation of Jira Self Hosted integration.

> That's all you need to know for TestMu AI + Jira Self Hosted Integration. If you have any questions for us, please feel free to let us know. Our experts are always **available on chat** to help you out. Happy testing!
