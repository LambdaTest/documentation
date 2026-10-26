# Test Apps Installed via Firebase App Distribution

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI offers real device testing capabilities, enabling developers and QA teams to test on actual Android and iOS devices in the cloud. With Firebase App Distribution, you can easily configure your Firebase account within TestMu AI to seamlessly distribute apps from Firebase to TestMu AI App Live. This integration allows you to collaborate by sharing projects within your team on TestMu AI and test on real devices.

Let’s dive in to learn how to integrate Firebase App Distribution with TestMu AI and test apps installed from Firebase.

Access to the project is granted only if-
1. You are the owner.
2. You are a tester for the app.
3. The app is published.

These settings can be updated in the OAuth consent screen.

**Prerequisites:**

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/), search for **Clients**, and select **Clients** (Google Auth Platform) from the results.

2. On the **Clients** page, click **Create project**, enter your project details, click **Create**, and then click **Get started**.

3. Enter your app information, select **Internal** or **External** as per the preference, add your contact information, and click **Create**.

4. Click **Create OAuth client**.

5. Select **Web application** as the application type, and enter a name for the client (for example, `Web Client 1`). Update the following URLs, and then click **Create**:

| Input Field | URL |
|-----------------|-------------|
| Authorized JavaScript origins | https://applive.lambdatest.com |
| Authorized Redirect URIs| https://applive.lambdatest.com/app |

For more information, see [OAuth 2.0 Client IDs](https://developers.google.com/identity/protocols/oauth2).

After the OAuth client is created, click the **Download** icon to download the JSON file, and then click **OK**.

6. Search for **Firebase** in the search bar and select **Firebase** from the results.

7. Select **Firestore**, click **Get started**, and then click **Continue**.

8. Select the **Default account for Firebase**, click **Add Firebase**, and when the confirmation message appears, click **Continue** to open the Firebase console.

9. Select your project, click **Add app**, and choose your platform (for example, **Android**).

10. On the **Add Firebase to your Android app** page, register your app, download the `google-services.json` file, add the Firebase SDK, and then click **Continue to console**.

11. On the project page, go to **DevOps & Engagement** > **App Distribution**, and upload your `.apk` file by dragging and dropping it or clicking **Browse**.

12. After the upload completes, add the email addresses of your testers, click **Next**, and then click **Distribute to [n] testers**.

13. Each tester receives an invitation email from Firebase, and once they accept it, their status appears in the **Testers** list as shown below.

## Steps to Integrate with TestMu AI and test apps:

1. In the TestMu AI dashboard, go to **Real Device** > **App Testing**, select **Install from Firebase**, and click the **Add Project** icon.

2. Choose whether to connect your Firebase account by uploading a **config file** or by using **credentials**, and upload the JSON file you downloaded in step 5. In the pop-up that appears, click **Sign in with Google** and follow the prompts to select the Google account you want to use to integrate Firebase with TestMu AI.

3. After the integration is complete, your Firebase project appears in the projects list, and you can click **Share Now** to share it with the testers you added in Google Cloud.

Projects can also be shared later directly from the menu.

* The **Access Expired** behavior is expected when the Google OAuth consent screen is configured in **Testing** mode, because Google automatically expires refresh tokens after 7 days and requires users to re-authenticate periodically; this is controlled by Google's OAuth policy and cannot be modified from TestMu AI.
* The Google account used for the Firebase integration must have the `firebaseappdistro.releases.list` permission, because default project roles may not provide sufficient access to view releases even with project owner-level access. We recommend creating a custom role in Google Cloud with the following minimum required permissions and assigning it to the user, so the same role can also be shared with other members of your organization without granting broader access:

- `firebase.clients.list`
- `firebase.projects.get`
- `firebaseappdistro.releases.list`
- `resourcemanager.projects.get`

After assigning these permissions, retry the integration.

## Key Actions Overview

1. **Add new project:** Click this button to add and sync new Firebase projects to your workspace.
2. **Refresh:** This button refreshes the project list, apps, and releases to their latest state without affecting your synced releases.
3. **Project Menu:** Click here to manage your project. You can share it with team members or delete it from the list.
4. **Sync:** Sync your release. This is necessary to start any session and generates a unique app ID for the release, which will be used for automation test cases.

Please verify if your app is in testing mode.

If it is, ensure that you add your email as a test user in GCP. This option is available in the 'Audience' section of GCP.
