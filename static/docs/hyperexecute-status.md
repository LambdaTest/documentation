# HyperExecute Status

This page provides a comprehensive overview of the various statuses available in HyperExecute, encompassing job, task, scenario, and test levels. These statuses will enable you to properly read test execution results as well as identify problems that may occur in automated testing processes.

HyperExecute categorizes test execution outcomes into distinct levels, offering a granular view of the entire testing process. Here's a breakdown of these levels and their associated statuses:

## 1. Job Level Status
All the tests on HyperExecute get executed as a Job. Each Job has a Status, a unique Job Number, a set of Labels, info on number of Tasks executed as part of that Job, and a Summary section followed by the details of the Job Duration and who initiated the Job.

| Icon | Status | Status Description |
|------|--------|--------------------|
||Initiated| The payload is uploading and is waiting to be assigned to an available virtual machine as per the given OS request in the YAML file. |
||Running| The job is actively executing tests across different browser and OS combinations as defined in your configuration. |
||Completed| The job has finished executing all tests, irrespective of the overall outcome (passed/failed).|
||Partially Completed| This status indicates a non-standard scenario where all steps within the job's runner command execution finished, but no test session was created.  This can occur primarily in two cases:   1. API/Desktop Tests   2. Local Web Test Execution.
||Failed| One or more test cases within the job encountered errors or failed assertions indicating an issue within the tests. |
| |Aborted| An unexpected error or issue caused the job to terminate prematurely before all tests could run. |
| |Lambda Error| An error originating from TestMu AI's side prevented the job from executing as planned. This could be a temporary glitch or require contacting TestMu AI support for further investigation. |
|  | Time Out | The job exceeded the maximum allocated execution time limit. This might occur due to complex tests, slow environments, or resource limitations. |
||Ignored| It is a user-defined status, used when a test case is intentionally not executed, such as when it is marked for future development, or a feature is not yet implemented.
||Blocked| The job is currently stuck due to an external dependency or resource constraint. This could involve waiting for another job using the same resources to finish or limitations on available browsers/devices. |

### Abort Job

You can abort a running job directly from the HyperExecute portal. Once a job is in **Running** state, click on the job to open the Job Details page. You will see an **Abort** option that provides the following choices:

- **Abort Current Job** — Stops only the selected running job.
- **Abort All Jobs** — Stops all currently running jobs.
- **Abort Selected Jobs** — Allows you to select specific jobs to abort.

When a job is aborted, all active test sessions within that job are terminated immediately and no residual processes remain. The remaining tests that were not yet executed will be marked as **Cancelled**.

## 2. Task Level Status

A Task is a further subdivision within a job, often representing the execution of tests on a specific browser and operating system combination.

| Icon | Status | Status Description |
|------|--------|--------------------|
||Initiated| The payload has been uploaded and is waiting to be assigned to an available virtual machine as per the given OS request in the YAML file.
||Running| The job is actively executing tests as defined in your YAML file configuration.
||Completed| The task has finished executing all its assigned test steps and all the test running in that tasks are passed.
||Skipped| It is a user-defined status indicates that the task was intentionally bypassed, possibly due to configuration settings, conditional execution logic, or irrelevance to the current test scenario.
||Failed| When one or more assertions within the task failed, indicating a problem with the tests themselves.
||Ignored| Similar to the job level, the task was entirely disregarded, likely due to configuration issues or specific conditions set to trigger execution.
| |Aborted| An unforeseen error or issue caused the task to terminate prematurely before all steps could run.
|  | Time Out | The task exceeded the maximum allocated execution time limit. This might occur due to complex test steps, slow environments, or resource limitations
| |Lambda Error| An error originating from TestMu AI's side prevented the task from executing as planned. This could be a temporary glitch or require contacting TestMu AI support for further investigation.
||Blocked| The task is currently stuck due to an external dependency or resource constraint. This could involve waiting for another task using the same resources to finish or limitations on available browsers/devices.

## 3. Stage Level Status
A Tasks can have multiple stages which are usually divided into 3 categories:
1. **Pre Steps** - The stages/actions that are performed before Test execution begins, like installation of dependencies etc.
2. **Scenarios** - Test execution stages.
3. **Post Steps** - The stages/actions that are performed after Test execution is completed, like creation of reports, artifacts etc.

A Stage can attain different statuses based on the completion level.

| Icon | Status | Status Description |
|------|--------|--------------------|
||Running| The stage is currently executing the defined actions or test steps. This indicates active progress within a specific stage of your test
||Completed| The stage has finished executing all its test steps successfully.
||Ignored| It is a user-defined status which indicates that the stage was entirely bypassed during execution, likely due to configuration settings or conditional logic within your test script.
||Skipped| It is a user-defined status indicates that the stage was intentionally bypassed, possibly due to configuration settings, conditional execution logic, or irrelevance to the current test scenario.
||Failed| One or more assertions within the stage failed, signifying an issue within the tests.
||Muted| This stage's results are being suppressed due to the HyperExecute [test muting](/support/docs/hyperexecute-test-muting/) functionality.
| |Aborted| An unexpected error or issue caused the stage to terminate prematurely before all actions could be completed.
| |Cancelled| If you have aborted your job in the middle of test execution, then all the left over tests will be marked as Cancelled.
| |Lambda Error| An error originating from TestMu AI's side prevented the stage from executing as planned. This could be a temporary glitch or require contacting TestMu AI support for further investigation.

## 4. Tests Level Status

The most granular level, representing an individual test case verifying a specific functionality of your application. It's like a single action you perform to test something.

| Icon | Status | Status Description |
|------|--------|--------------------|
||Created| The test has been defined in your test script but hasn't begun execution yet.
||Running| The test is actively being executed as per the configurations.
||Completed| The test has finished execution and is successfully passed.
||Queue| The test is waiting for the virtual machine to be allocated.
||Queue Timeout| The wait time exceeded the maximum limit for the virtual machine to be allocated.
||Stopped| When you abort the stage, your tests are marked as Stopped.
||Idle Timeout| It indicates that your session was inactive for the defined time.
||Lambda Error| An error originating from TestMu AI's side prevented the stage from executing as planned. This could be a temporary glitch or require contacting TestMu AI support for further investigation.

### User Defined Status
HyperExecute allows users to define the status of tests using **lambda hooks**. This can be helpful for monitoring test status and results.

HyperExecute supports the following user-defined lambda hooks status:

| Icon | Status | Status Description |
|------|--------|--------------------|
||Passed| A test case has passed when it has executed successfully, and all the assertions have been verified without any errors.  `driver.executeScript("lambda-status=passed");`|
||Failed| A test case has failed when it has not executed as expected, and one or more assertions have not been verified or have failed.  `driver.executeScript("lambda-status=failed");`|
||Skipped| A test case may be skipped if it is not relevant or cannot be executed due to some issues like environment setup, data, or configuration. This status can also be used for test cases that are marked for review or maintenance. `driver.executeScript("lambda-status=skipped");`|
||Ignored| The ignored status is used when a test case is intentionally not executed, such as when it is marked for future development, or a feature is not yet implemented.  `driver.executeScript("lambda-status=ignored");`|
||Unknown| When a user wants to mark status of their tests as undecided.  `driver.executeScript("lambda-status=unknown");`|
||Error| A test case can end in an error status when an unexpected exception is thrown during its execution. This error can be due to a coding error or a defect in the application under test.  `driver.executeScript("lambda-status=error");`|

### Priority Scenario Mapping

In a **Scenario**, there can be numerous tests running, and each test has its own status, which means the final status of the scenario is derived from its test status depending on the status of the test with the **highest priority**.

For example, if a scenario contains two tests, one with status `passed` and one with status `failed`, the scenario status will be `failed`.

Consider the following Decreasing Order of Priority among Users with marked status:

|Priority| User Marked Status| Scenario Status|
|------|------|------|
|P0|Failed|Failed|
|P1|Error|Failed|
|P2|Passed|Completed|
|P3|Ignored|Completed|
|P4|Skipped|Completed|
|P5|Unknown|Completed|

Now that you have understood the concepts of HyperExecute, you can [get started](/support/docs/hyperexecute-running-your-first-job/#quick-run) with it quickly. Learn more about other [HyperExecute features](/support/docs/key-features-of-hyperexecute/).
