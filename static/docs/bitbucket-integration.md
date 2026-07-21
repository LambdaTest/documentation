# Bitbucket Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Bitbucket – A web-based repository hosting service owned by Atlassian for facilitating version control in development projects. It supports the project with a revision control system based on either Git or Mercurial. It is free to use, though they also offer a commercial plan. With Bitbucket, you can perform **access control** to your source-code, **workflow control** to impose a project workflow. Easy code revaluation through pull requests offering in-line annotation & Integration with Jira for end-to-end development tracing.

The TestMu AI Bitbucket Integration allows you to create an issue directly in your repository from TestMu AI platform. Push an issue to your respective repository anytime, even in the middle of your test session. The fields populated by you when marking as a bug through TestMu AI are displayed as information on the issue in the repository for a testing instance.

**Bitbucket Integration with TestMu AI, like all of our other integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate Bitbucket With Your TestMu AI Account?

**Step 1:** Login to your TestMu AI account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your TestMu AI account.

**Step 3:** Click on **‘Add’** under the block that says ‘Bitbucket’.

**Note:** Make sure you have an account signed up with Bitbucket before you begin the integration. If you don’t have then you will be redirected to a screen where you can create one. If you already have an account setup for any of the Atlassian tools then you may use the same credentials as that one.

**Step 4.** Once you click on the sign up button, you will be asked to provide a unique username. After providing the username, you need to click **‘Continue’.**

**Step 5.** As you press "ADD" button, you will be directed to an authentication page. Here you will need to grant TestMu AI the access to your user-owned resources on Bitbucket. Hit on the blue button that says **"Grant access".**

**Why we ask for your login credentials?**

Bitbucket APIs uses OAuth 2.0’s [authorization code grant flow](https://tools.ietf.org/html/rfc6749#section-4.1) for generating access tokens on user’s behalf.

**What is an Access token?**

Access tokens are strings with authorization key required to access an API. They are issued to the client-server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

That is it, you will be notified with a prompt message on top mentioning that Bitbucket is successfully installed. If you look at your Integrations again and you will be able to notice a **green tick** indicating the same. You can now experience bug logging in a fly from any of your running test session in TestMu AI to your respective repository directly by a single click.

## Logging Your First Bug Through Bitbucket Integration?

**Note:** Enable the **Issue tracker** in your respective Bitbucket repository. For enabling the Issue tracker:

 - Visit your repository.
 - Go to **Settings.**
 - After settings, click on **Issue tracker.** You will find it under **FEATURES.**
 - Select the button for **Public issue tracker** & click **Save.**

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & click **‘Start‘.**

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for [capturing a screenshot](https://www.testmuai.com/full-page-screen-capture) of the same. We have highlighted that option with yellow in the below image.

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor.** Once you are done highlighting the bug, click on the button that says **"Mark as Bug".**

When marking as bug, make sure that you have a repository already created into your Bitbucket account. If you don’t have one then you will be encountered with an error message as displayed in the below image.

**Step 5:** If you are up and ready with a repository, then once you click on **"Mark as Bug"** button a Bitbucket specific form would open up. Fill the fields as per your requirement.

 - You can choose out of your **‘Repositories’,** for logging your UI observation.
 - You can set the appropriate **‘Label’** for the same.
 - You can assign it to a colleague by populating the field **‘Assignee’.**
 - You also get to post a **‘Description’** to help relate the cause of the issue or the task.

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **"Bug successfully marked"** indicating that the UI observation has been pushed to your Bitbucket repository.

**Step 7:** Visit your repository. You will be able to notice the logged issue right away under the Issues tab on the left.

**Step 8:** Click on the **"Issue title."** All the data you provided through TestMu AI would already be presented in it. TestMu AI automatically includes test environment details and related screenshots under your work in Bitbucket. You will also find a clickable link that will open the screenshot attachment.

## How To Remove Bitbucket Integration?

You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your TestMu AI account.

**Step 2:** Select ‘Integration’ from the left navigation menu bar. This will guide you to a screen where you will find 3rd party applications, available to integrate with your TestMu AI account.

**Step 3:** Click on ‘REMOVE’. You can find the remove button right under the **‘Bitbucket’** block which would be highlighted with a green tick.

That was all you need to know for TestMu AI + Bitbucket Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on **chat** to help you out with any roadblock regarding our product. Happy testing!
