# Tricentis Tosca Integration with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Tricentis Tosca is a tool that optimizes and accelerates end-to-end testing for your entire digital landscape. With its no-code approach and the assistance of AI, Tosca efficiently removes bottlenecks from your testing process.

HyperExecute seamlessly integrates with Tosca, providing a Just-in-Time Tosca Environment for both Tosca **Commander** and **DEX**. This ensures a smooth and efficient testing experience for users.

## Tosca Integration Using Commander

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute.

### Pre-requisite:

-  To run Tosca, ensure that you have all the required [licences](https://documentation.tricentis.com/tosca/1600/en/content/licensing/lic_administering_licenses.htm).

### Integrate Tosca with HyperExecute

To Integrate Tosca with HyperExecute, follow the below mentioned steps:

**Step 1:** Go to the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/). Click on the **Projects**.

**Step 2:** Click on the **Setup a New Project** button.



**Step 3:** Enter your **Project Name**. Click on Continue.



**Step 4:** Enter the **License Details**, i.e. Username and Password with which you want to execute your tests.



**Step 5:** Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace. For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Save** button.



**Step 6:** Please wait for the discovered execution list to get populated. Now, select the desired tests that you want to execute, and then click on the **Run** button.


**Step 7:** Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute and click on the **Run** button.


**Step 8:** Now go to the [**Jobs**](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.


> Results will get updated in the **Common Repository** once execution is completed on HyperExecute. The live video of running tests can be viewed from the [HyperExecute job-detail](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs)dashboard.


### Integrate Tosca with HyperExecute using YAML

To Integrate Tosca with HyperExecute using YAML, follow the below mentioned steps:

##### Prerequisite

-  Ensure that you have integrated Tosca with [TestMu AI's cloud-based Selenium Grid](/support/docs/tricentis-tosca-integration-testmu-selenium-grid/).

**Step 1:** Create an Execution List:

- Go to the execution tab in your Tosca commander to create an execution list.

- You can drag and drop test cases from the **Test Cases** tab to the execution list. In the example given below, the execution list is called LT.



**Step 2:** Create a **TC-Shell Script**:

- A TC-Shell script file usually has the extension _.tcs_, and it contains a sequence of [TC-Shell commands](https://support-hub.tricentis.com/open?id=kb_article_view&table=kb_knowledge&number=KB0035628&searchTerm=shell%20commands) in plain text to configure the steps to execute a Tosca test via command line. This script file is kept in the same folder where you have the actual Tosca project saved.



- **Sample TC-Shell Script:**

```bash
//script

jumptonode "/Execution/ExecutionLists/LT"

// reset actual log
task "clear log"

//start execution list
task run

//save results
save
```

- Click the arrow on the right side of the **Execution** tab to retrieve the node path used in **jumptonode** command.



- The node path is highlighted in the image below.



- Use the following command to execute this test via command line.

```bash
- TCShell.exe -workspace <Path to your tosca workspace file> -login <your email here> <your password here> "<Path to TC-Shell Script>"
```

**Step 3:** After configuring the TC-Shell Script, integrate it with HyperExecute. To do this:

- Create a HyperExecute YAML.

- Download the HyperExecute CLI Binary based on the OS you use:

| Platform | Download Link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

> The binary for Mac is unsigned. You might get a permission denied warning while executing on mac and linux machines. To allow permissions you can use the following command: `chmod u+x ./hyperexecute`.
Thus, you might see a security popup on whether to allow the execution of the tool or not. You can allow it from your **System Preferences** > **Security & Privacy** > **General** tab.

  **Sample HyperExecute YAML file for TOSCA**:
```yaml
---
version: "0.1"
matrix:
os: [win]
runson: ${matrix.os}

retryOnFailure: true
maxRetries: 2

pre:
- PATH=%TRICENTIS_LICENSING_HOME%;%PATH% && ToscaLicenseConfiguration.exe connect-cloud -u <your_email_here> -p <your_password_here>

testSuites:
- TCShell.exe -workspace D:\foreman\<Project_Folder_Name>\Demo_Sample.tws -login <your email here> <your password here> "D:\foreman\<Path to TC-Shell Script>"

post:
- cat hyex_tosca.yml

uploadArtefacts:
- name: Logs
path:
- Demo_Sample/**

```
> Each machine has a Tosca commander Client installed on HyperExecute. To successfully run your tests, your Tosca licenses must be pre-configured on the machine. To do so, we use the **ToscaLicenseConfiguration.exe** along with the **connect-cloud** parameter to validate the licenses as a **pre-step** before triggering the tests. The complete command is added under **pre** in the above sample.

- After configuring the YAML, execute it via terminal using the following command:



    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}




You have successfully integrated your Tricentis Tosca project with HyperExecute.



## Tosca Integration Using DEX

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute using DEX.

### Prerequisites

1. Ensure that you have the required Tosca DEX License.

2. A valid running Tosca DEX Server.

### Steps to Integrate Tosca

#### Step 1: Initialize the Tosca Project

- Go to the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/). Click on the **Projects**.

- Click on the **Setup a New Project** button.



- Select **Tosca with DEX** tool. Enter your **Project Name**. Click on Continue.



#### Step 2: Manage your License and Credentials

- Select the **Type** as Cloud License. Enter the **License Details**, i.e. Username and Password with which you want to execute your tests. **Cloud Server id** field is optional.



- Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace.

For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Continue** button.



#### Step 3: Configure DEX Server Details

- You need to provide the details of your DEX Server as per the **prerequisites**.

- Select the **Type** of the protocol. For the demo purpose, we are using HTTP protocol.
- Provide the **IP Address** of your DEX Server.
- Enter your required **Port** (optional).

Click on **Save** button.



#### Step 4: Execute Your Project

- Please wait for the discovered test events to get populated. Now, select the desired test events that you want to execute, and then click on the **Run** button.



- Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute, enable the [Retry on Failure](#auto-retry-for-non-assertion-errors) (optional) and click on the **Run** button.



#### Step 5: Check the Logs Status in Dashboard

- Now go to the [**Jobs**](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.

You can also download the video output.



### Auto Retry for Non-Assertion Errors

You can enhance the efficiency of Tosca test execution by automating the retry process in the event of **Non-Assertion Errors**. It usually occurs when a program encounters an unexpected conditions like runtime error, timeouts, connectivity issues etc.

To enable the **Auto Retry** on Failure of tests:

**Step 1:** After setting up your DEX Server, select the events that you want to execute. Click on the Run button.

**Step 2:** Now enable the toggle button for **Retry on Failure** and click on the Run button.



Now, once your execution is finished, the platform will automatically analyze your execution list results and logs.



If your execution lists fail due to any non-assertion error, HyperExecute will automatically trigger those specific failed lists again.



> **NOTE :** Your event name should be same with the execution list.

## Tosca Integration for SAP

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute.

### Prerequisite

-  To run Tosca, ensure that you have all the required [licences](https://documentation.tricentis.com/tosca/1600/en/content/licensing/lic_administering_licenses.htm).

### Integrate Tosca with HyperExecute

To Integrate Tosca with HyperExecute, follow the below mentioned steps:

#### Step 1: Initialize the Tosca Project

- Go to the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/). Click on the **Projects**.

- Click on the **Setup a New Project** button.



- Enter your **Project Name**. Click on Continue.



#### Step 2: Manage your License and Credentials

- Enter the **License Details**, i.e. Username and Password with which you want to execute your tests.



- Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace.

    - For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

    - Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Save** button.



#### Step 3: Execute Your Project

- Please wait for the discovered execution list to get populated. Now, select the desired tests that you want to execute, and then click on the **Run** button.


- Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute and click on the **Run** button.


#### Step 4: Check the Logs Status in Dashboard

- Now go to the [**Jobs**](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.


> Results will get updated in the **Common Repository** once execution is completed on HyperExecute. The live video of running tests can be viewed from the [HyperExecute job-detail](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs)dashboard.


> This is currently in the **Beta** version of the **Project** section in HyperExecute. To enable it for your organization, please contact our **24×7 chat support** or our [Customer Support](mailto:support@testmuai.com) team.
