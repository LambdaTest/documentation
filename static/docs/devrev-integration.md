# DevRev Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

DevRev is a customer relationship management (CRM) system that seamlessly integrates customer support conversations and tickets with developer issues and product enhancements.

With the help of TestMu AI and DevRev Integration, you can file bugs while performing live-interactive testing of your web applications from the TestMu AI platform to your DevRev instance, thus saving time and effort.

## Integrating DevRev With TestMu AI


**Note**
Before enabling TestMu AI and DevRev integration, ensure you have administrator or user level access.


1. Sign in to your TestMu AI account. Don't have an account, register for free.

2. Select **Integrations** from the left sidebar. Then choose **DevRev** from the BUG TRACKER section.



3. It will route you to the TestMu AI installing console where you need to enter DevOrg URL and DevRev Personal Access Token.



### Getting The DevOrg URL

1. Login to your DevRev account.

2. Click on the avatar icon on the top-right and select **Settings**.



3. Navigate to **General**.



4. You will notice the DevOrg URL. Copy this URL and paste it in the TestMu AI installing console.



### Getting The DevRev Personal Access Token


1. Click on the avatar icon on the top-right and select **Settings**.



2. From the Personal Access Tokens, click **New Token**.



3. Enter the token name and choose its validity. Then click **Generate**.



4. Copy the generated DevRev Personal Access Token.



5. Paste the copied API token in the TestMu AI installing console.



It will now integrate your TestMu AI account with DevRev.

## One-Click Bug Logging With DevRev


1. Once you are in the TestMu AI Dashboard, navigate to **Real Time Testing > Browser Testing** from the left sidebar menu.



2. Enter the web URL that you wish to test, select testing type (Desktop/Mobile), select the browser **VERSION**, **OS**, **RESOLUTION**, and click **START**.



A cloud-based real operating system will fire up running real browsers where you can test websites and web apps for logging bugs.

3. If you come across any issue, click the **Bug** icon from the left in-session tool bar to capture screenshot of a web page.



4. Using the in-built annotation tool bar, mark any issues, and tasks on a web page. Once you have marked the bugs, click **Mark as Bug** icon under the INTEGRATIONS section.



5. To log a bug in DevRev, fill out the required information in the DevRev ticket, such as Type, Part, Priority, Summary and Description. Click **Mark As Bug**.



It will log your bugs to the DevRev instance.

6. Navigate to the TestMu AI Dashboard and go to **Manage > Issue Tracker**.

8. In Issue Tracker, you will see the bugs that you just logged in DevRev along with their associated test environment details. To view your logged bugs, click on the **upper right arrow in the square button**.



It will redirect to the DevRev instance where you can view your filed bugs along with their test environment details such as Test ID, Reproduce on TestMu AI link, Test URL, Operating System, Browser, and Resolution.



## Uninstalling The DevRev Integration


1. Sign in to your TestMu AI account and visit **Integrations** from the left sidebar menu.

2. From **My Integrations**, click **REMOVE** under the DevRev block.
