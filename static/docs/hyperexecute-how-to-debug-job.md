# How to Debug a Failed Job

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

As a developer or tester, you know that running tests is an essential part of the software development process. However, there are times when your tests may fail, and you may not be sure how to debug the issue, and you find yourself scratching your head, wondering what went wrong.

The HyperExecute Dashboard provides a central view of all your test runs, including the test results, error logs, and performance metrics. By understanding how to find and interpret error logs, you can quickly identify the root cause of a failed test and take steps to fix the issue. This document will help you debug failed tests on HyperExecute by finding error logs in different stages using the HyperExecute Dashboard.

## Prerequisites

- HyperExecute Dashboard Access.
- A Job  is triggered on HyperExecute, and it has a `Failed` status.
- Identify which Task  has failed. Click on that task and check which of the Stage categories is throwing an error.

## Common CLI Errors

If you are facing any CLI issues, the following errors will help you debug your failed job.

If you are encountering any error which is properly not detailed, it is recommend to use [**`verbose`**](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--verbose) mode in HyperExecute CLI command.

### Symbolic Link Error

This error will mark your Job as a **Lambda Error**.

You can encounter this error when you try to upload the **node_modules** directory along with the payload to trigger your Job in HyperExecute. This error generally occurs with your Node.js projects. You must avoid doing this, as it will not only save storage space but also avoid potential issues with version control. The node_modules folder holds all the project dependencies, and adding it to the repository can cause unnecessary file duplication and increase the repository size.

To resolve this issue, either you remove that directory or you simply add node_modules to the **.gitignore** file. This ensures you have a smooth development process without unnecessary hiccups.

### Snooper Failed Error

It's crucial to understand a specific characteristic of Gherkin: it exclusively supports the use of **Examples** with the **Scenario Outline**. If you come across an error, it likely indicates that the **Scenario** is being employed with **Examples** instead of the intended **Scenario Outline**. To resolve this, ensure that you use the appropriate structure, employing the Scenario Outline when incorporating Examples.

### Authentication Error

There may be cases where, when trying to connect to HyperExecute services, the CLI throws the following error:

Now, to validate the connectivity and to make sure the **auth.hyperexecute.cloud** is reachable, you have to run a `scan` command in your CLI, as shown below. If the network scan fails, then you are required to whitelist the IP address.

#### IPs to be Whitelisted

| FQDN | Protocol:Port | Reason |
|------|---------------|--------|
|*.hyperexecute.cloud | Https:443 |HyperExecute’s registered wildcard domain to allow access to all HyperExecute’s services|
|*.lambdatest.com | Https:443 | TestMu AI’s registered wildcard domain to allow access to all TestMu AI’s services (like auth, plan-validation) |

## Pre Steps
You can see in the screenshot mentioned below that the Pre Step of the Task has failed. To understand the issue causing the step to fail, scroll down, go through the logs once, and you can find the **type of error** and its **location** in the code as well.

> **NOTE :** During the execution of pre-commands, you might come across different issues. To troubleshoot and resolve these issues, please refer to the relevant solutions provided below.

### How to Debug your Pre Steps Errors

If you are facing any errors in the pre-command stage, the following solutions will help you debug your failed job.

#### Lambda Error

While executing a playwright project in HyperExecute, you may encounter a Lambda Error.

To resolve this issue, you need to pass the below mentioned command in the pre step in your YAML file

```bash
pre:
- npx install playwright
```

#### .Net Build Issue in C#

If you encounter a similar error while running the command `dotnet build` in pre steps, as mentioned below, it means that you are not using a **core dotnet** version but instead a **framework** version.

```bash
error : MSB4803: The task "ResolveComReference" is not supported on the .NET Core version of MSBuild
```

We need to build it by invoking **MSBuild.exe** from the Visual Studio directory inside our VMs. Please target MSBuild.exe of Visual Studio 19. Replace dotnet build with the below command

`C:\PROGRA~2\Micros~1\2019\Community\MSBuild\Current\Bin\MSBuild.exe /p:Configuration=Release /p:TargetFramework=net481 /t:restore`

The target Framework can be replaced with dotnet version targeted in the user’s repository. **``/p:TargetFramework=net70302``**

#### SSL Certificate Error

This error is generated while installing the dependencies in your project suite.

##### Error in Python

You can encounter a similar error while installing dependencies

```bash
There was a problem confirming the ssl certificate:
HTTPSConnectionPool(host='http://pypi.org ', port=443):
Max retries exceeded with url: /simple/selenium/
(Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED]
certificate verify failed: self signed certificate in certificate chain
(_ssl.c:1131)'))) - skipping
```

To resolve the above issue, you are required to pass the following command

```bash
pip install -r requirements.txt --cache-dir
pip_cache --trusted-host http://pypi.org  --trusted-host http://pypi.python.org  --trusted-host files.pythonhosted.org
pip setuptools
```

##### Error in Maven

You can encounter a similar error while running Maven Project as well, Now to resolve this issue for **maven**, pass the following command

```bash
-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```

#### Registry Error

If you incorporate any npm registry related error in the **Pre** stage, then pass the following command in your YAML file in the pre command before npm install:

```bash
pre:
- npm config set registry <artifactory_URL>
```

#### Incompatible Node Version

If you encounter an error as mentioned below, it implies that you are using node version **below 15**, so you need to upgrade to **>=15.0** using runtime command.

```bash
SyntaxError: Unexpected token '||='
```

To resolve this, simply pass the below mentioned command in your YAML file

```bash
runtime:
language: node
version: "15"
```

#### Java version Conflict

This error incorporates that the version of Java that you are using in your local machine or in pom.xml file is not matching with the one used in the HyperExecute.

```bash
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling: invalid target release: 1.10 -> [Help 1]
org.apache.maven.lifecycle.LifecycleExecutionException: Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling
```

To rectify this, you need to simply pass the **runtime** flag with the correct java version in your YAML file.

```bash
runtime:
language: java
version: "11"
```

## Scenarios
To check the issues caused in the Scenario Step, there are multiple ways to find the issue. Let's explore each way:

### Checking the Logs
To check the logs, you need to expand the test case that has failed in the scenario. Go through the logs once until the end, and you will encounter the reason for the test failure.

In the given screenshot, we are encountering an **Exception Error** that **No Such Element Found** for the Test Case @BingSearch and it can be due to the wrong path entered in the code file or that particular Feature Case is not present in the code directory.

### Video Recordings and Command Logs

If you were unable to find the error and want a deep analysis of it, then you can click on the **Test Associated** button or the **View Test** button.

#### Video Recording

Here you can check which part of your test case is causing an error in the video format, along with the required logs to check at which timestamp you are encountering this error and what the reason behind it is.

#### Command Logs

- You can view all kinds of logs as well like [**Network Logs**](/support/docs/debugging-options/#network-logs). You can toggle between the [**Console Logs**](/support/docs/debugging-options/#console-logs), [**Terminal Logs**](/support/docs/debugging-options/#terminal-logs) and the **Test Framework Logs**.

> To enable these logs, you need to explicitly mention the required flag in your [Test Capability Configuration](/support/docs/selenium-automation-capabilities/).

> **NOTE :** During the execution of scenario, you might come across different issues. To troubleshoot and resolve these issues, please refer to the relevant solutions provided below.

### How to Debug your Scenario Steps Errors

If you are facing any errors in the Scenario stage, the following solutions will help you debug your failed job.

#### Invalid Credentials

If you're encountering an error message as shown below, it means you have entered an invalid  **Username** and **Access Key** in your test file capabilities.

```bash
OpenQA.Selenium.WebDriverException : The newSession command returned an unexpected error.
401 Unauthorized !! Please include  `user` & `accessKey` in desired capabilities.
```

To resolve this issue, you have to visit our [Automation Capability Generator](https://www.testmuai.com/capabilities-generator/) site and configure your project suite capabilities generated as per your desired language and framework.

#### Unable to create Session

When you initiate a test execution and encounter the issue that your session is not getting started,

This is possible due to the following reasons:

- If your credentials are not correct.
- If you have created local driver instead of remote webdriver connection
- If your HUB URL is incorrect.

To address this challenge, our recommended solution is to visit the [Automation Capability Generator](https://www.testmuai.com/capabilities-generator/) website. Here, you can seamlessly generate accurate and valid sets of credentials and capabilities, thereby rectifying issues associated with test failures.

#### Invalid HUB Endpoint

If you put the wrong HUB Endpoint in your test file, you will receive the following error:

To rectify this issue, you need to cross-check your HUB URL. You can also visit [this](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) website and click on **Access Key** button to get your correct HUB URL.

#### Tunnel Error

##### When Tunnel is Disconnected or Not Running

- If you have mentioned the Tunnel URL in both capabilities and the YAML file, then it is likely that your Tunnel may get disconnected or will not run. To resolve this, you need to simply remove the Tunnel URL from either of the files.

- If you are running Tunnel using Binary, then you need to ensure that your credentials for binary and capability are the same.

##### When you try to access a Private Endpoint

If you are trying to access an internal website or any other private endpoint which is behind any firewall using tunnel and you are getting the below mentioned error:

```bash
System.AggregateException: One or more errors occurred. --->
OpenQA.Selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED
```

To resolve this, you have to pass this flag in your YAML file:

```bash
tunnel: true
```

#### Stage is Stuck

When you encounter a situation where the stage appears to be stuck or unresponsive (machines are taking lot of time to allocate), then follow these measures to diagnose and address the issue.

As you can see below, stage is taking a lot of time to allocate Virtual Machines to the tests.

- **Identify the Task:** Begin by identifying the specific task or workflow where the machine appears to be stuck. This involves determining the action or process that triggered the unresponsive stage.

- **Locate the Stuck Stage:** Once the task is identified, pinpoint the exact stage that is causing the delay. This can be done by reviewing the platform's progress indicators or monitoring tools.

- **Examine Stage Logs:** Check the stage logs associated with the stuck stage. These logs provide detailed information about the stage's execution and may contain error messages or warnings that indicate the root cause of the issue.

- **Analyze Martian Logs:** If the stage logs suggest an API call is stuck, refer to the Martian logs available on the dashboard. These logs reveal whether the API call originated from the machine and capture the response received from the endpoint.

- **Review Tunnel Logs:** For users employing Tunnel with MITM mode, consult the Tunnel logs to gain deeper insights into network calls. These logs provide granular details about network interactions, potentially revealing the cause of the stuck stage.

After identifying the issue, follow these steps to resolve the situation:

**Step 1:** Go to the specific test case method or test class where the problematic REST Assured API is being called.

**Step 2:** Ensure that you have set an appropriate connection timeout and socket timeout. This ensures that the system doesn't wait indefinitely for a response.

**Step 3:** Consider printing the responses during debugging to verify whether the API is providing the expected responses.

#### Test is Stuck

When a particular test is taking longer than expected to complete, follow these measures to diagnose the issue:

- **Identify the Stuck Test:** Begin by identifying the specific test that is hanging or exceeding the average execution time. This can be done by reviewing test execution reports or monitoring tools.

- **Examine Test Code:** Locate the corresponding test case in the codebase. Analyze the test code to identify any API calls that might be causing delays in response times.

- **Check for Infinite Loops:** Inspect the test code for potential infinite loops. Infinite loops can occur when commands are repeatedly executed without proper termination conditions, leading to excessive test execution time.

- **Local Machine Testing:** Replicate the test execution on the user's local machine to determine if the issue is specific to their environment or if it's a general problem with the test itself.

- **Selenium Command Analysis:** Analyze the Selenium commands within the test case to understand their intended behavior and identify any potential irregularities or inefficiencies that could be contributing to the prolonged test execution.

After identifying the issue, follow these steps to resolve the situation:

1. **Optimize API Calls:** Refine the API calls within the test case to improve response times. This may involve optimizing query parameters, using caching mechanisms, or adopting alternative API endpoints.

2. **Eliminate Infinite Loops:** Modify the test code to eliminate any identified infinite loops. Implement proper loop termination conditions to ensure that commands are executed within the expected timeframe.

3. **Restructure Test Code:** Refactor the test code to improve its overall structure and efficiency. Consider using conditional statements, data-driven testing techniques, or parallel execution strategies to streamline test execution.

#### Test Idle Timeout

When the test encounters an idle timeout, it indicates that commands are not being executed for an extended period of time. Additionally, the quit() command fails to execute, causing the test to get stuck.

>
You can see the test has been being executed for a very long time, which is not ideal behavior.

And when you click on the View Test button, you can see that the status of your test is Idle_Timeout.

Measures to Take:

- **Identify Task and Stage:** Determine the specific task and stage associated with the idle timeout. This information can be obtained from test execution reports or monitoring tools.

- **Verify Command Execution Count:** Confirm the number of commands executed before the idle timeout occurs.

- **Check quit() Command Execution:** Ensure that the quit() command is properly included in the test code and that there are no errors preventing its execution.

- **Local Machine Testing:** Replicate the test execution on the user's local machine to rule out environment-specific factors.

- **Analyze Codebase:** Examine the codebase for potential issues between the last successfully executed command and the very last command. This may involve syntax errors, logic flaws, or unexpected interactions with external systems.

Remedy:

1. **Debug Codebase:** Insert logging statements in the test code after the last successfully executed command. This will provide insights into the execution flow and identify any unexpected behavior or errors that could be causing the idle timeout.

2. **Review Code Logic:** Carefully review the code logic between the failed commands to ensure that commands are executed in the intended sequence and that there are no infinite loops or unintended pauses.

3. **Check External Interactions:** Verify that any interactions with external systems, such as APIs or third-party services, are functioning properly and not causing delays or disruptions in test execution.

4. **Optimize Resource Usage:** Ensure that the test environment has sufficient resources, such as CPU, memory, and network bandwidth, to handle the test workload. Resource constraints can lead to performance bottlenecks and idle timeouts.

#### API Timeout

When the test encounters an API timeout, indicating that the API call did not receive a response within the specified timeout period, follow these measures to diagnose and address the issue.

- **Identify Task and Test:** Determine the specific task and test associated with the API timeout. This information can be obtained from test execution reports or monitoring tools.

- **Review Martian Logs:** Analyze the Martian logs for relevant entries related to the API call in question. Martian logs provide timestamps, request details, and response bodies, if available.

- **Verify Response Presence:** Check if the Martian logs contain a response body for the API call. If no response is present, the API is likely timed out on the server side.

- **Local Machine Testing:** Replicate the test execution on the user's local machine to rule out environment-specific factors.

- **Server-Side Logging:** If the API consistently fails to respond within the specified timeout, both locally and in the production environment, investigate server-side logging to identify potential issues on the server.

After identifying the issue, follow these steps to resolve the situation:

**Step 1:** Analyze Server-Side Logs for error messages, warnings, or exceptions related to the API call. This can pinpoint the root cause of the timeout and guide further troubleshooting.

**Step 2:** If the test code does not explicitly define **connection and socket timeouts** for the API call, incorporate these timeouts to ensure that the API call doesn't hang indefinitely.

**Step 3:** Evaluate the appropriateness of the timeout values specified in the test code and on the server-side. Adjust the timeouts if necessary to accommodate the expected response time of the API.

**Step 4:** Consider optimizing the API call itself to improve its performance and reduce the likelihood of **timeouts**. This may involve caching mechanisms, load balancing, or alternative API endpoints.

Here's an example of how you can set connection and **socket timeouts**:

```java
public static void main(String[] args) {

// Set connection and socket timeouts
int connectionTimeout = 5000; // in milliseconds
int socketTimeout = 5000; // in milliseconds

RestAssured.config = RestAssuredConfig.config().socketConfig(
SocketConfig.socketConfig().setConnectTimeout(connectionTimeout)
.setReadTimeout(socketTimeout));

// Your Rest Assured request code here
// For example:
RestAssured.given()
.baseUri("https://api.example.com")
.basePath("/some/path")
.get()
.then()
.statusCode(200);

}
```

Make sure to include the necessary dependencies in your project. If you are using Maven, you can add the following dependencies to your pom.xml file:

```bash
<dependencies>
<dependency>
<groupId>io.rest-assured</groupId>
<artifactId>rest-assured</artifactId>
<version>4.5.0</version> <!-- Use the latest version available -->
<scope>test</scope>
</dependency>
</dependencies>
```

## Root Cause Analysis Report
You can also check out our AI Native [RCA Report](/support/docs/ai-powered-test-failure-analysis/), which will help you to quickly identify various error categories and also offer a comprehensive overview of the underlying causes.

To generate the RCA, simply click on the **Errors** icon, where you can also see the **type of error**, and then click on the **See Details** button to go through the detailed logs.

Here you can check the detailed log for the cause of failure as well as the **Line number** for the particular **Code Snippet** along with its **Stack Trace**.

If you are still facing an issue, then scroll down and click on the [**Generate RCA**](/support/docs/ai-powered-test-failure-analysis/#generate-the-rca-of-your-failed-jobs) button, which will offer a structured approach to addressing each failure type. You can efficiently get to the precise corrective measures or Remedies recommended, along with Additional suggestions for the particular error.

## Post Steps

In the below screenshot, we can clearly see that there is some issue in fetching the path directory of the artifacts file and folder. And for the analysis of it, the path is also given in the logs so you can easily debug this.

> You can also check the complete [Detailed Job Report](/support/docs/hyperexecute-job-reports/) which can help you to analyze the outcome of your tests based on your framework.
