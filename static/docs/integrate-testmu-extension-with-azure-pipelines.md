# Integrate TestMu AI Extension With Azure Pipelines

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Azure Pipelines, by Microsoft, is a feature of Azure DevOps. It helps to automatically build, test, and deploy your projects, with Continuous Integration or CI, upon various production environments. So your Selenium automation test scripts can run successfully on Azure Pipeline. However, sometimes running your scripts can be a bit tedious. This is where the TestMu AI plugin can be used in the Azure Pipeline to ease the workflow and automate the tests. TestMu AI allows you to perform live interactive and automated cross-browser testing on 3000+ real browsers and operating systems online.



Check TestMu AI Extension On Azure DevOps Marketplace



## Benefits Of Using TestMu AI Plugin In Azure Pipeline



*   Setup your TestMu AI account in Azure Pipeline using your account credentials.
*   Set up, and use the [TestMu AI Tunnel](/docs/testing-locally-hosted-pages/) for testing various production environments like internal, development and staging.
*   Embed or fetch TestMu AI test results in your project's job results.
*   Witness the execution of the tests, capture screenshots, mark bugs, plot graph and much more, on your automation dashboard on TestMu AI.

## Prerequisites



*   Azure DevOps (Azure Pipelines) account
*   TestMu AI account credentials.
    1.  TestMu AI Username
    2.  TestMu AI Access KeyYou can fetch your account credentials on TestMu AI from your [profile section](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

## How To Install TestMu AI Extension



Follow the below steps to install TestMu AI Extension from Azure DevOps marketplace:

1.  Go to [Azure DevOps marketplace](https://marketplace.visualstudio.com/) and search for "TestMu AI" in the search box.



2.  In the results window, you will see an option showing the TestMu AI Extension.

3.  Open the found result and click on "Get it free", to get the TestMu AI Extension in your organization for free.



4.  Select an Azure DevOps organization and press "Install". TestMu AI Extension will be installed in this organization.



5.  Once finished, you can see "Done" at the top. It means that TestMu AI Extension has been installed successfully. You can proceed to your organization to see the extension.



## How To Integrate TestMu AI Plugin In Azure Pipelines



**Step 1:** Sign in to your Azure DevOps account to access the Azure Pipelines. Create one if you don't have any.

**Step 2:** Create a project and download the TestMu AI extension from the [Azure marketplace](https://marketplace.visualstudio.com/search?term=lambdatest&target=AzureDevOps&category=All%20categories&sortBy=Relevance) as shown above.

**Step 3:** In order to use the TestMu AI extension now, select **Pipelines** from the left side menu bar as shown below:



**Step 4:** Select **New Pipelines** from the top right corner of your screen.



**Step 5:** Switch to Class Editor from the footer.



**Step 6:** Select your choice of versioning control software you use, from the given options. For this demo, we have used "Github".



**Step 7:** Select the template as **Empty Job** to begin with. We will create the job as we go.



**Step 8:** Add a new task in the job with the help of **+** button, and fill the required details.

 For this demo purpose, we have used following tasks:

* Search *TestMu AI* in the search menu, and select **TestMu AI Configuration Setup**, **Stop Tunnel**, and **TestMu AI Results** from the available tasks.



*   Similarly, add **Command Line Script** and **Python Script** in to this job.
*   Once added, arrange the tasks in below shown order:



**Step 9:** Click on **TestMu AI Configuration Setup** and then click on **New**.



**Step 10:** Fill the required details. For this demo purpose, we have used following details:

* Select Basic Authentication mode of integration from the given authentication methods.
* Enter your TestMu AI username as "Username" and TestMu AI Access Key as "Password" and then click on     verify button.
* Enter the desired Service connection name in the Details section and then click Verify and Save button.




**Note**: You can also activate the TestMu AI Tunnel for localhost testing. Just select Service connection from the drop down list and Select TestMu AI Tunnel.

**Step 11:** Now we need to install Selenium in our job to perform the automation tests. Click on Command Line Script and enter the command `pip install selenium` to install Selenium:



**Step 12:** Select **Run a Python script** as we have selected Python in the above steps.



Select your script to execute either from your repository using the "File Path" option, or you can also write the script inline using the "Inline" option. Once the script is ready, click on "OK"

**Note**: In order to run the tests, you will need to get your build name from the environment variables. Shown below is the syntax of getting the build name from the environment variables for Python test scripts.

```py
build_name = os.getenv("LT_BUILD_NAME")
```

**Step 13:** Now we have imported everything to run our tests. Click on "Save & Queue" to run your test.



**Step 14:** Select OS from Agent Specification as shown below and click "Save and Run".



**Step 15:** The pipeline will get activated and you can see your job queued to be executed.



**Step 16:** To view the test results, click on the Return option.



**Step 17:** Click the **TestMu AI** tab.



You'll find your executed tests results.



## How To Find Test Execution Results On TestMu AI



The output of the tests executed above can be seen in your authenticated TestMu AI account as well. Follow the below steps to see your test execution result:

**Step 1:** Login into your TestMu AI account using the credentials used above in the Azure Pipelines.

**Step 2:** Go to "Automations" tab from your left menu.

**Step 3:** Here you can see the executed tests along with their builds, details and status, as shown below:



Not only this, but you can also use this automation dashboard to obtain Test logs, Analytics, Mark Bugs, Integrate apps from our diverse app store, fetch build details, and much more. TestMu AI Selenium Automation Grid enables you to perform end-to-end automation tests on a secure, reliable, and scalable Selenium infrastructure. You can perform automated cross-browser testing with Selenium scripts on 3000+ browsers and operating systems environments giving you higher test coverage and at significantly less built times. TestMu AI will help you evaluate how well your web application renders when accessed through a variety of different browsers. You can perform automated cross-browser testing of your locally hosted web pages using TestMu AI Tunnel. You could also run a single test across multiple browser/OS configurations, simultaneously.

## LocalHost Testing Using TestMu AI Extension



TestMu AI extension also allows you to perform testing of your localhost project securely with the [TestMu AI Tunnel](/docs/testing-locally-hosted-pages/) help. The below steps will help you configure the TestMu AI Tunnel using the TestMu AI extension in your Azure Pipelines:

### Starting The TestMu AI Tunnel Using TestMu AI Extension

While configuring the TestMu AI Configuration Setup job, as shown above, check the TestMu AI Tunnel checkbox to activate it.

Once you activate it, a TestMu AI Tunnel Options box will appear, which require the [modifiers/arguments](/docs/lambda-tunnel-modifiers/) to configure the tunnel as per requirement. Pass the TestMu AI Tunnel modifiers in JSON format in the options box.

> Note: Make sure to use the camel case for passing the tunnel modifiers. For example, use sharedTunnel if you want to use the modifier --shared-tunnel. For our demo purpose, we will be using simple modifiers, such as --tunnel-name and --proxy-port: &lbrace;"tunnelName":"azure tunnel", "proxyPort":8050&rbrace;

The TestMu AI Tunnel has been successfully configured now. You can test your locally hosted pages and privately hosted pages at the TestMu AI Platform using TestMu AI Tunnel.

### Stopping The TestMu AI Tunnel Using LambaTest Extension

To stop the TestMu AI Tunnel, you need to add the _TestMu AI Stop Tunnel_ task in your job. Once this task is executed, the TestMu AI Tunnel will stop successfully.



You must keep this task at the end of your all tests, to let your tests execute successfully before stopping the TestMu AI Tunnel.


To setup your azure pipeline using TestMu AI Azure Pipeline Extension, you can refer to the below example:

```
resources:
repositories:
- repository: self
type: git
ref: refs/heads/main
jobs:
- job: Job_1
displayName: Agent job 1
pool:
vmImage: windows-2019
steps:
- checkout: self
clean: true
fetchTags: false
- task: Lambdatest.lambda-azure-pipeline-extention.configuration-task.configuration@1
displayName: LambdaTest configuration setup
inputs:
connection: 'connect endpoint'  // provide your connection name
isTunnelActivate: true
isAppAutomate: false // set true if you want to run your app automate test scripts

- task: PythonScript@0
displayName: Run a Python script
inputs:
scriptSource: inline
script: >-
print('Hello world') // provide your python script or command to run your test scripts

- task: Lambdatest.lambda-azure-pipeline-extention.stopLambdaTunnel-task.stoptunnel@1
displayName: LambdaTest Stop Tunnel
- task: Lambdatest.lambda-azure-pipeline-extention.showResults-task.LambdatestResults@1
displayName: Lambdatest Results
...
```
Also you may use the YAMl assistant to add your tasks in the pipeline YAML file


Click on the ```show assistant``` button and search for lambdatest extension tasks and add them in you pipeline YAML.




> That was all you need to know for integrating TestMu AI Extension with Azure Pipelines. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always **available on chat** to help you out with any roadblock regarding our product. Happy testing! :)
