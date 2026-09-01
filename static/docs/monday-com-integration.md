# monday.com Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

monday.com is an online project management tool that helps your team to collaborate better by getting everyone on the same page. monday.com provides an intuitive timeline to keep all your deadlines in check. Monitor all the tasks of your colleagues and subordinates through dashboard representation to know who is working on what, and when? You find a collective space for all the communication, so you don't get stuck in finding important emails from your inbox. Develop your projects in a flexible manner using monday.com's intuitive platform and pace up your go-to-market launch with enhanced collaboration and transparency among the team members.

The TestMu AI + monday.com integration helps you in filing issues to your project in monday.com directly from the TestMu AI platform. With one-click integration, you can push annotated issues to the project board of your choice, assign it to the required teammate, and attach necessary screenshots. You can do all that while in the middle of a test session on the TestMu AI platform. The fields populated by you when marking as a bug through TestMu AI are displayed as information on the respective monday.com testing instance.

**monday.com Integration with TestMu AI, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

>
**Note:** Before proceeding with Integration, make sure your monday.com project board has a **text field** on it. If the text field is not available in your monday.com project board then the environment details that auto-populate by TestMu AI will be reflected in the title field on your monday.com project.

## How To Establish Integration With monday.com From Your TestMu AI Account?

**Step 1:** Login to your TestMu AI account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integrations'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your TestMu AI account.

**Step 3:** Click on **‘ADD’** icon under the block that says **'MONDAY'**.

>
**Note:** If you already have your TestMu AI account integrated with some other project management tool then you would receive a message asking you to uninstall your current integration. Clicking on **'OK'** would automatically uninstall your current integration to establish a new one with monday.com.

**Step 4:** Once you click on install, you will be redirected to the below screen. You will be asked to enter your **'Site Address'** and **'Personal API Token'** in the highlighted fields to establish integration with TestMu AI.

>
*   **What is the Site Address?**

When you open any web page, the URL showing in the address window of your web browser is termed as site address. The site address consists of **https://** followed by the domain name of your website.

>
*   **What is your Personal API token?**

When two different applications interact with each other, server-to-server communication is established. The API token is needed for authenticating user identity from one server to another, by fetching user-owned resources available on the server from where the communication is initiated. API token has been a necessity for maintaining the security and data integrity of any application. They are just as vital to an end-user as they are to an application. API tokens are relevant if an end-user logs in an application through a two-step verification process.

**Step 5:** You can find your API token from your respective **monday.com** instance. If you have not generated one before, you can generate an API token by going to the settings from the bottom left corner, near your **avtar image**. After you click on your avatar image, a menu would open up, navigate to **'Admin'** section.

**Step 6:** You will be directed to a Admin page where you need to click on **'API'** from the left.

**Step 7:**Now click on **'Generate'** button to generate your Personal API Token.

**Step 8:**Once your Personal API token is generated, click on **'Copy'** button to copy the same.

>
**Note:**You can keep a note of this API token with you for future authentication. Although, in case you forget to do so, or you end up neglecting it due to some reason. You can create a new token by pressing the **'Regenerate'** button.

**Step 8:** Paste the **'Site Address'** and **'Personal API Token'** into the field provided at TestMu AI & press the **'Install'** button. You are all set to experience one-click bug logging to share your issues directly from your TestMu AI account to your project board on monday.com.

That's it! Go to **'Integrations'** again and you will be able to notice a **'green tick'** indicating that monday.com is successfully installed.

## How To Log Your First Bug Through monday.com Integration?

**Step 1:** Go for any of the test from the TestMu AI’s left navigation menu. For demo, we will be taking **‘Real Time Testing’** option. After that, enter a URL of the web-app you need to test in the dialog box. Then, select any configuration for browser and operating system of your choice & click on **‘Start’** button.

**Step 2:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **'Bug icon'** from the left panel for capturing a screenshot of the same. We have highlighted that controller button in the below image.

**Step 3:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **'Mark as Bug'**.

**Step 4:** After clicking on **'Mark as Bug'** button a monday.com specific form would open up. Fill the fields as per your requirement.

>
*   You can select which **'Board'** should the task go under.
*   You can specify the sprint number for that task by filling the **'Group'** field.
*   You can choose the **‘Person’** to whom you would assign your task.
*   You can mention the **'Title'** as well to easily organize your bugs.
*   You can also select the **'Status'** of the task you log.
*   You can relate the issue's cause in the **'Text'** field.

**Step 5:** Click on **'Create Issue'** & observe it being successfully marked through a single click effort. Once you click the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **'Bug Marked Successfully'** indicating that the issue has been successfully pushed to the respective workspace.

**Step 6:** Visit your **monday.com** dashboard. You will be able to notice the logged issue right away by going to the particular project board! All the data you provided through TestMu AI would already be presented in it. TestMu AI automatically includes test environment details and related screenshots in the custom **text column** that you have on your monday.com project board. If you don't have a text column in your project board then these details would be merged with your title.

## How To Remove monday.com Integration?

>
You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your TestMu AI account.

**Step 2:** Select **‘Settings’** from the left navigation menu bar & click on **'Integrations'**. This will guide you to a screen where you will find 3rd party applications, available to integrate with your TestMu AI account.

**Step 3:** Click on **‘REMOVE’**. You can find the remove button right under the **'MONDAY'** block which would be highlighted with a green tick.

You will get a prompt message in few seconds mentioning **'You have successfully uninstalled Monday'** indicating that the monday.com has been successfully removed from your TestMu AI integrations.

>
That was all you need to know for TestMu AI + monday.com Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always **available on chat** to help you out with any roadblock regarding our product. Happy testing!
