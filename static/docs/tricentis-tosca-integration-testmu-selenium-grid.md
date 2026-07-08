# Tricentis Tosca Integration With TestMu AI’s Cloud Based Selenium Grid

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

TestMu AI provides support with Selenium WebDriver for pacing the execution of your automation test scripts. TestMu AI is a cloud-based, cross browser testing tool, providing a [Selenium Grid](https://www.testmuai.com/selenium-automation/) of 3000+ browsers and browser versions running through real operating systems to speed up automation testing of your web-app or website. This topic will help you to automate your website testing using Tricentis Tosca on TestMu AI.

This topic will be focusing on:

- Running a sample Tricentis Tosca testcases on TestMu AI Automation.

## Prerequisites For Running Tricentis Tosca Test Cases On Selenium Grid

1. Log in to TestMu AI. If you haven’t signed up yet, click here.
2. TestMu AI Authentication Credentials:
   Be aware of your TestMu AI authentication credentials i.e. your TestMu AI username, access key and HubURL.You can retrieve them from your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the key icon near the help button.
3. [Download Tosca](https://www.tricentis.com/software-testing-tool-trial-demo/) by logging in to the Tosca website.

## Sample Test Scenario

For demonstrating Tosca-TestMu AI integration, we would be considering the following test scenario:

1. Open [TestMu AI Selenium PlayGround](https://www.testmuai.com/selenium-playground/).
2. Click the "Simple Form Demo" link.
3. Enter the text "Happy Testing" in the text box.
4. Click the "Get Checked value" button.
5. Verify if the entered text is present under the "Your Message" section.

## Integrating Tricentis Tosca With TestMu AI

**Step 1:** Launch the Tosca Commander.

**Step 2:** Click **Create new** . In **Create new workspace**, select **Type of Repository** as **None** and set workspace as **Tosca_Demo**.

**Step 3:** On the successful project creation, click the **Modules** tab, right-click on the panel, then select **Scan -> Application**.

**Step 4:** Open Chrome browser and enter [test URL](https://www.testmuai.com/selenium-playground/).

**Step 5:** On the **Select Application** screen, select the Chrome browser instance that was open in the earlier step and click **Scan**

**Step 6:** Now you will be prompted to install Tosca Extension.

**Step 7:** Click on **Advanced**  in Tosca XScan Window.

**Step 8:** Click **Select on screen**.

**Step 9:** Select the **Simple Form Demo** link and Tosca XScan will capture the highlighted element.

**Step 10:** Click **Finish Screen**.

**Step 11:** In the browser click the **Simple Form Demo** link, navigate to the **Simple Form Page**. ReOpen Tosca XScan ,Click **Select on screen** and  capture required elements for test case.(input text box, "Get Checked value" button and text area to validate)

**Step 12:**  On completion click **Finish Screen**
 All the captured elements are listed under Modules are below:

**Step 13:**  Go to TESTCASES and create a folder named **TestMu AI_TestCase**.

**Step 14:**  Drag the **Modules** created in the earlier steps to the new test case **Details** tab.

**Step 15:**  To add commonly used modules in the test case, go back to the **Modules** tab. Click **HOME** in the menu bar, then click **Import Subset**.

**Step 16:**  Select **standard.tsu** file from *&lt;installation_path&gt;/Tosca_Projects/ToscaCommander* folder.

**Step 17:**  Navigate back to TestCases Details tab, update the test step names:
 - **New TestCase** to  LT_PlayGroudTest_1
 - **New TestCase_1** to LT_PlayGroudTest_2

**Step 18:**  Select the first test case and press **CTRL + T**. This will display a list of all the common modules. Type **OpenUrl** in the search box and select the **OpenUrl** module to add to the test case.

**Step 19:** Again press **CTRL + T** type **CloseBrowser** in the search box, select  **CloseBrowser** module to add to the test case.

Shown below is the final test case view.

**Step 20:** Enter relevant details in **Value** and **ActionMode** columns for every test step

**Step 21:** For adding test configuration, navigate to the  **TestCase -> Test Configuration**, right-click and click **Create Test configuration parameter** button.

**Step 22:** Add below name and values in Test Configuration:

**For Web Browser Automation**

**For Mobile Browser Automation (Emulators & Simulators)**

**For Mobile Browser Automation (Real Device)**

* Enter relevant details in **Value** and **ActionMode** columns for every test step.

* Add below name and values in Test Configuration.

*You can refer our [Desired Capability Generator](https://www.testmuai.com/capabilities-generator)
 to choose different browser combination.*

**Step 23:** Go to the **Details** tab then Right-click on the test case and select **Run in ScratchBook**. This will launch the test on TestMu AI Platform.

Once execution is completed result window populate in Tosca

Monitor and analyze your test result on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).

## How To Use TestMu AI  Custom Capabilities in Tosca
There are few custom capabilities  like network logs,console logs in TestMu AI platform to enable Logs on execution.

To use a WebDriver capability,

- Prefix the capability with "WebDriver_"*, for ex: WebDriver_console.
- If the name of the capability contains a dot (.), replace this character with double underscore (\__). If the name of the capability contains a colon (:), replace this character with triple underscore (___).

With this enabled log when you execute the test case, you can see logs in TestMu AI Plateform once execution completes.

## Geolocation Testing in Tosca with TestMu AI

Test the performance of your web-app through different geographic locations by setting LamdaTest Capability "geoLocation". Set this Capability in Tosca as "WebDriver_geoLocation"with Value of "IN"as shows below

In TestMu AI Plateform , You can see check the log to validate the Web Application is launched with given GeoLocation.

## Testing Locally Hosted or Privately Hosted Projects

To help you perform [cross browser testing](https://www.testmuai.com) of your locally stored web pages, TestMu AI provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your GitLab CI build a container to perform automated cross browser testing on browsers offered by Selenium grid on TestMu AI. So you make sure how well your changes look, even before your customers.
Curious to know more about Lambda Tunnel?

Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.

- [Documentation For Windows User](/docs/local-testing-for-windows/)
- [Documentation For Mac User](/docs/local-testing-for-macos/)
- [Documentation For Linux User](/docs/local-testing-for-linux/)

**Download the binary file of:**

- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Set the Tunnel Capability in Toasca as shown below

In TestMu AI logs you can validate whether Tunnel is enaled or not from Tosca as shown below.

In case you face any problems during the integration, or have any other questions, reach out to us on our **24/7 chat support**.

Happy testing!
