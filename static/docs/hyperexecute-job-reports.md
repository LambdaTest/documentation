# HyperExecute Job Reports

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

HyperExecute Job Reports are designed to offer deep insights into the performance of your tests. By utilizing these reports, you can identify issues, track progress, and enhance your software testing workflow. Whether you're a developer or QA engineer, understanding and leveraging the various report types is crucial to delivering high-quality software efficiently.

## Extent Report
Extent Reports is a powerful reporting library used in test automation frameworks to generate visually appealing and detailed test reports. It provides insights into the status of each test case, including whether they passed, failed, or were skipped, along with additional information such as logs, screenshots, and system/environment details. This makes it especially popular in Selenium, Appium, and API testing frameworks.

### Steps to Generate Extent Reports `(Version <= 2)` on HyperExecute
Follow these steps to enable Extent Reports for your HyperExecute job:

#### Step 1: Add Dependency
If using Maven, add the following dependency to your `pom.xml` file:

```xml title="pom.xml"
<dependency>
<groupId>com.relevantcodes</groupId>
<artifactId>extentreports</artifactId>
<version>2.41.2</version>
</dependency>
```

#### Step 2: Create an Extent Report Listener
Create a class, e.g., `ExtentReportListenerV2.java`, to initialize and flush Extent Reports during test execution. This listener will log each test case’s status to the report.

```java title="ExtentReportListenerV2.java"
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult
public class ExtentReportListenerV2 implements ITestListener {
private static ExtentReports extent;
private static ThreadLocal<ExtentTest> test = new ThreadLocal<>()
@Override
public void onStart(ITestContext context) {
// Initialize ExtentReports with the report path
extent = new ExtentReports("extent-report.html", true);
extent.addSystemInfo("Environment", "QA").addSystemInfo("User", "Tester");
}
```

### Steps to Generate Extent Reports `(Version > 2)` on HyperExecute
Follow these steps to enable Extent Reports for your HyperExecute job:

#### Step 1: Add Dependency
If using Maven, add the latest extentreports dependency to `pom.xml` file:

```xml title="pom.xml"
<dependency>
<groupId>com.aventstack</groupId>
<artifactId>extentreports</artifactId>
<version>5.0.9</version> <!-- Use latest version available -->
</dependency>
```

#### Step 2: Create an Extent Report Listener
For Extent Reports > 2, use `ExtentHtmlReporter` to generate and customize the HTML report. Create `ExtentReportListener.java`:

```java title="ExtentReportListener.java"
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult
public class ExtentReportListener implements ITestListener {
private static ExtentReports extent;
private static ThreadLocal<ExtentTest> test = new ThreadLocal<>()
@Override
public void onStart(ITestContext context) {
ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter("extent-report.html");
htmlReporter.config().setTheme(Theme.STANDARD);
htmlReporter.config().setDocumentTitle("Test Report");
htmlReporter.config().setReportName("Automation Test Results")
extent = new ExtentReports();
extent.attachReporter(htmlReporter);
}
```

### Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml
report: true
partialReports:
type: json
location: reports/json
frameworkName: extent
```

## Extent Native
The Extent Native Reports offer a standardized and easily accessible summary of information extracted from raw Extent reports per Virtual Machine (VM) at the end of a HyperExecute job.

### Prerequisites

Before implementing Extent Native Reports, ensure the following prerequisites are met:

1. Upgrade to extent reporting version 5 in the `pom.xml` file.
2. Update import statements in the codebase from `com.relevantcodes` (version 2) to `com.aventstack` (version 5).

### Implementation Steps

Follow these steps to enable Extent Native Reports for your HyperExecute job:

#### 1. Upgrade Extent Reporting Version

Update the `pom.xml` file to include the latest version of the Extent Reporting library (version 5). Ensure that the necessary dependencies are correctly configured.

```xml
<dependency>
<groupId>com.aventstack</groupId>
<artifactId>extentreports</artifactId>
<version>5.0.0</version>
</dependency>
```

#### 2. Modify Import Statements

Update import statements in your codebase to reflect the new package structure in Extent Reporting version 5. Replace `com.relevantcodes` with `com.aventstack`.

```java
// Before
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

// After
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
```

#### 3. Generate JSON Reports

Make changes in your codebase to generate individual JSON reports. These reports will serve as the source for the Extent Native Reports.

#### 4. Update HyperExecute YAML Configuration

In the HyperExecute YAML configuration, add the following section to instruct the HyperExecute systems to generate Extent Native Reports:

```yaml
report: true
partialReports:
type: json
location: reports/json
frameworkName: extent-native
```

- Set `report: true` to enable report generation.
- Specify the `type` as `json` in the `partialReports` section.
- Define the `location` where the JSON reports will be stored.
- Provide a meaningful `frameworkName` for the Extent Native Reports.

### Conclusion

By following these steps, your HyperExecute job will generate Extent Native Reports, providing a consolidated HTML report derived from individual JSON reports. This enhancement allows customers to access comprehensive and standardized reports conveniently at the conclusion of their HyperExecute jobs.

## Native TestNG Reports
The Native TestNG Reports offer a standardized and easily accessible summary of information extracted from raw Extent reports per Virtual Machine (VM) at the end of a HyperExecute job.

### Implementation Steps

Follow these steps to enable Extent Native Reports for your HyperExecute job:

#### 1. Generate JSON Reports

You need to ensure that the `emailable-report.html` file should be generated within your test-suite

#### 2. Update HyperExecute YAML Configuration

In the HyperExecute YAML configuration, add the following section to instruct the HyperExecute systems to generate Extent Native Reports:

```yaml
report: true
partialReports:
type: json
location: <location_of_the_emailable-report.html_file>
frameworkName: testng-native
```

- Set `report: true` to enable report generation.
- Specify the `type` as `json` in the `partialReports` section.
- Define the `location` where the reports will be stored.
- Provide a meaningful `frameworkName` for the Native TestNG Reports.

x

### Conclusion

By following these steps, your HyperExecute job will generate Native TestNG Reports, providing a consolidated HTML report generated by TestNG framework. This enhancement allows customers to access comprehensive and standardized reports conveniently at the conclusion of their HyperExecute jobs.

## Allure Report
Allure Framework is a versatile, lightweight, multi-language test reporting tool designed to provide a concise representation of tested functionalities in a visually appealing web report format. It facilitates easy extraction of valuable information for all stakeholders involved in the development process.

### Integration with HyperExecute

If your testing framework already generates Allure reports, you can seamlessly integrate it with HyperExecute. This integration enables the generation of a consolidated Allure report on HyperExecute for each job, accessible through the report section of the HyperExecute dashboard.

### Allure Report Configuration

**Step 1:** To configure the Allure reporter in the **WDIO framework**, update your `wdio.conf.js` file as follows:

```javascript title="wdio.conf.js"
export const config = {
reporters: [['allure', {
outputDir: 'reports/allure-results',
disableWebdriverStepsReporting: true,
disableWebdriverScreenshotsReporting: true,
}]],
}
```
- The `outputDir` parameter specifies the directory where Allure reports will be stored. In this example, it is set to **'reports/allure-results'**. This parent folder is essential for HyperExecute integration, as detailed later.

- The `disableWebdriverStepsReporting` and `disableWebdriverScreenshotsReporting` parameters allow customization of reporting options.

Alternatively this can also be done by creating an `allure.properties` file in the `src/test/resources` directory.

```yaml title="allure.properties"
allure.results.directory=reports/allure-results
```

**Step 2:** Add the following report parameters in your HyperExecute YAML file

```yaml
report: true
partialReports:
location: reports
type: html
frameworkName: allure
```

> **NOTE:** The above example is only for the WDIO framework and the baseline concept remains the same across all the frameworks that the allure-results should be saved in a parent folder and that location of the parent folder is to be provided in the location parameters of reports in the HyperExecute YAML file.

To enrich Allure reports with more specific details, we can use custom plugins. These plugins require configurations to function properly.

To achieve this, you can use `configPath` flag within HyperExecute YAML. This specifies the location of the configuration file containing the custom plugin settings, allowing Allure to generate reports with the desired level of detail and this will be passed as `allure --config `

```bash
report: true
partialReports:
location: reports
# highlight-next-line
configPath: allure-config.yml
type: html
frameworkName: allure
```

### Allure Test Insights

This helps you to get an overview of the test execution results using the Allure reports. This widget provides insights into the test execution results, test status, and test duration.

> **NOTE :** Refer to the [Allure API Test Insights with HyperExecute documentation](/support/docs/analytics-allure-api-widgets/) for a comprehensive explanation

## Cucumber Report
Cucumber reporting is a way to visualize and analyze test results when using the Cucumber testing framework. Cucumber is widely used for Behavior-Driven Development (BDD), allowing tests to be written in plain language using Gherkin syntax. The reports generated from Cucumber tests provide a readable format for stakeholders to understand the results, which helps in understanding the behavior of the system being tested without requiring technical expertise.

Cucumber itself provides basic reporting in the command line, but additional plugins and tools can enhance the reporting experience, generating rich HTML or JSON reports.

### Steps to Generate Cucumber Reports on HyperExecute

#### Step 1: Configure the TestRunner File
In your `TestRunner` file, configure `@CucumberOptions` to specify report formats and output paths. Here’s an example configuration:

```javascript title="TestRunner.java"
@CucumberOptions(
features = "src/main/java/Features",
glue = {"Steps"},
tags = {"~@Ignore"},
format = {
"pretty",
"html:target/cucumber-reports/cucumber-pretty",
"json:target/cucumber-reports/CucumberTestReport.json",
"rerun:target/cucumber-reports/rerun.txt"
},plugin = "json:target/cucumber-reports/CucumberTestReport.json")
```

Explanation of plugin Options:

- **pretty :** Outputs readable format in console.
- **html:target/cucumber-reports/cucumber-pretty :** Generates HTML report in the target directory.
- **json:target/cucumber-reports/CucumberTestReport.json :** Generates JSON report, often required for CI/CD and advanced reporting.
- **rerun:target/cucumber-reports/rerun.txt :** Logs any failed scenarios for rerun.

#### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
location: target/cucumber-reports/
frameworkName: cucumber
type: json
```

#### Step 3: Execute Your Tests
Run your tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the Cucumber report.

## Playwright HTML
Playwright offers built-in HTML reports to help visualize the results of your test runs. These reports are detailed, user-friendly, and interactive, allowing you to analyze each test's status, logs, and errors in an organized manner.

### Steps to Generate Consolidated HTML Report
Follow these steps to generate a consolidated Playwright HTML report:

#### Step 1: Update Your Playwright Configuration

In your Playwright configuration file `playwright.config.js`, add the following code to enable the reporter:

```javascript title="playwright.config.js"
import { devices } from '@playwright/test';

const config = {
...//
reporter: [['html', { open: 'never' }]],
...//
};
```

- In the case of HyperExecute, we always have to set the value of `open: never`.

- By default, the report is written into the **playwright-report folder** in the current working directory. The same location can be used in the report parameters in the YAML file.

#### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
frameworkName: playwright
location: playwright-report
type: html
```

#### Step 3: Execute Your Tests
Run your Playwright tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated Plywright HTML report.

## Specflow
SpecFlow is a free tool for automating tests using BDD. It's often used to create automation scripts for .NET projects.
This technical document provides a guide on generating SpecFlow reports after executing tests on HyperExecute.

> We also offer [Custom Specflow report](/support/docs/custom-speclow-report/).

### Steps to Generate Specflow Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```yaml
report: true
partialReports:
location: YOUR_REPORTS_LOCATION
type: html
frameworkName: specflow
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

## Cypress Mochawesome Report
[Cypress Mochawesome](/support/docs/cypress-mochaawesome-report/) is designed for Cypress and Mocha tests, this report offers:

- Test suite and case summaries.
- Test step breakdowns with logs.
- Screenshots and videos to validate test executions.

## Error Categorization Report
The Error Categorization Report is a specialized report that helps simplify the process of identifying and categorizing errors in your HyperExecute job. By organizing test failures with similar characteristics, this report provides a clear and structured overview of problematic stages and associated tests for efficient error tracking and analysis.

You can generate and download other reports as well, along with the error-report.

### Configure YAML file to Generate the Error Categorization Report

This report is generated when your job includes multiple error categories. To enable the error categorization report, simply pass the [`errorCategorizedReport`](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedreport) flag to your YAML file:

```yaml title="hyperexecute.yaml"
errorCategorizedReport:
enabled: true
```

This report does not depend on the [`report: true`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) flag. It will generate the error report even if you do not pass the `report: true` flag in your YAML file.

Now trigger your job on HyperExecute, and if your job fails (encounters any failed tests), it will generate the Error Categorization Report. This report list down all the error summaries along with the specific details. You can also check for the particular error for the specific test.

## JUnit XML Report
A JUnit XML report is an XML-based test result file format used to represent the results of test executions, particularly unit tests. The XML report provides detailed information about the tests run, including which tests passed, failed, were skipped, and any associated error messages.

### Steps to Generate Consolidated JUnit XML Report
Follow these steps to generate a consolidated JUnit XML report:

#### Step 1: Update Your Project Configuration
Configure all the necessary dependencies and configurations to your project.

#### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [report](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml
report: true
partialReports:
frameworkName: junit
location: reports/
type: xml
```

#### Step 3: Execute Your Tests
Run your tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the consolidated junit xml report.

## Karate Report
Karate framework supports generating detailed test execution reports that help visualize test results and insights. On HyperExecute, you can run your Karate tests and configure it to generate and download these reports seamlessly.

> Ensure your project is configured with the **Karate framework** and all test scripts are in place.

### Steps to Generate Karate Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```yaml
report: true
partialReports:
location: target
type: html
frameworkName: karate
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

## Robot Report
Robot Framework is a generic, open-source automation framework designed for acceptance testing, acceptance test-driven development (ATDD), and robotic process automation (RPA). It is widely used in software testing due to its simplicity, extensibility, and ease of use. The framework is keyword-driven, meaning that tests are written using predefined keywords, making it accessible even to non-programmers.

> Ensure your project is configured with the Robot framework and all test scripts are in place.

### Steps to Generate Robot Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
testRunnerCommand: YOUR_RUNNER_COMMAND --outputdir Reports

report: true
partialReports:
type: json
location: Reports
frameworkName: robot
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

## Katalon Report
HyperExecute provides seamless integration with Katalon Studio, enabling you to generate and view detailed execution reports directly from your test runs. These reports include details such as:

- Test case execution status (Pass/Fail/Skipped)
- Execution time and duration
- Environment and browser details
- Stack traces for failed tests

> Ensure your project is configured with the [Katalon framework]( https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/) and all test scripts are in place.

### Steps to Generate Katalon Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
report: true
partialReports:
type: html
location: Reports/
frameworkName: katalon
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

> This image shows consolidated report of katalon 10+ versions

## HyperExecute Status

This page provides a comprehensive overview of the various statuses available in HyperExecute, encompassing job, task, scenario, and test levels. These statuses will enable you to properly read test execution results as well as identify problems that may occur in automated testing processes.

HyperExecute categorizes test execution outcomes into distinct levels, offering a granular view of the entire testing process. Here's a breakdown of these levels and their associated statuses:

### 1. Job Level Status
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

#### Abort Job

You can abort a running job directly from the HyperExecute portal. Once a job is in **Running** state, click on the job to open the Job Details page. You will see an **Abort** option that provides the following choices:

- **Abort Current Job**: Stops only the selected running job.
- **Abort All Jobs**: Stops all currently running jobs.
- **Abort Selected Jobs**: Allows you to select specific jobs to abort.

When a job is aborted, all active test sessions within that job are terminated immediately and no residual processes remain. The remaining tests that were not yet executed will be marked as **Cancelled**.

### 2. Task Level Status

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

### 3. Stage Level Status
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

### 4. Tests Level Status

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

#### User Defined Status
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

#### Priority Scenario Mapping

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

Now that you have understood the concepts of HyperExecute, you can [get started](/support/docs/hyperexecute-running-your-first-job/#quick-run) with it quickly. Learn more about other [HyperExecute features](/support/docs/getting-started-with-hyperexecute/#key-features-of-hyperexecute).
