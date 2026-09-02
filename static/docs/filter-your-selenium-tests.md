# How to Filter and Organize Selenium Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Once your Selenium tests are running on TestMu AI, the automation dashboard gives you several ways to keep them organized. You can filter tests, group them with custom tags, tag and split builds, edit individual test details during a run, and share results with your team. This document covers each of these.

On each of the tabs available on the automation dashboard (Timeline, Automation Logs, and Analytics), a _filter toolbar_ helps you filter your tests based on selected values. The sections below start with the filter toolbar of each tab, then cover tagging, build splitting, editing test details, and sharing.

## Filtering Tests on Timeline

Use the filter toolbar on the Timeline tab to narrow down tests by date, user, build, and status.

When you visit the [Timeline](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline) on your automation dashboard, you can see a **Filter** icon that allows you to use different filters.

### Understanding the Filter Toolbar

Now let us see each component of this filter toolbar one by one.

### 1. Date

This option filters automation tests on your timeline based on a range of dates. Select a start date and an end date to filter tests that ran in this period. By default, it shows the range from the beginning until the current date.

To filter tests based on custom dates, first select the starting date from the calendar window, then select the ending date. You can see a selected range after you click on the starting date.

For example, to view tests that ran between 1st Feb - 3rd Feb, click on 1st Feb first and then on 3rd Feb.

Once the ending date is selected, the tests are automatically sorted based on the selected custom dates.

### 2. Users

You might have multiple team members added to your TestMu AI account. To filter tests by the member who ran them, use this option in the filter toolbar. Click on the _Users_ option to see a list of members added to your account. Select the members whose tests you want to filter, and the tests filter automatically. You can select multiple members.

### 3. Build

Use this feature to see selected builds on your Timeline. Click on this option to see a list of all builds that have run. Select one or more as needed.

### 4. Status

This option on the filter toolbar helps you filter automation tests based on the current status of the test:

*   Running
*   Queued
*   Idle Timeout
*   Queue Timeout
*   Completed
*   Passed
*   Failed
*   Error
*   Stopped
*   Cancelled
*   Lambda Error
*   Allocating VM

Click on this option to see a list of all the above statuses. Select one or more to filter tests that have these statuses.

### 5. Clear Filters

Use this option to clear all applied filters. Clicking this option returns the Timeline to the default state with all filters removed.

## Filtering Tests on Automation Logs

Use the filter toolbar on the Automation Logs tab to filter by build, date, users, status, and tags.

When you visit the [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) on your automation dashboard, you also see a filter toolbar.

The components of this toolbar are:

1.  Build
2.  Date
3.  Users
4.  Status
5.  Tags
6.  Clear Filters

The Build, Date, Users, Status, and Clear Filters components behave the same as in the Timeline. Let us look at the Tags component in detail.

### Filter Tests Using Tags

You can filter your Selenium tests on TestMu AI using [custom tags](#group-tests-using-custom-tags). Click on the Tags option to select the tag by which you want to filter tests. You must have used the custom tags feature earlier to use this filter.

Here is an example showing tests filtered using the _Demo1_ custom tag:

You can also filter tests based on multiple tags. Select multiple custom tags at once from the filter toolbar:

## Filtering Tests on Analytics

Use the filter toolbar on the Analytics tab to filter by tags, users, environment, and date range.

When you visit the [Analytics](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/analytics) on your automation dashboard, you also see a filter toolbar.

The components of this toolbar are:

1.  Tags
2.  Users
3.  Environment
4.  Date
5.  Analytics Tab Timeline
6.  Clear Filters

The Tags, Users, Date, and Clear Filters behave the same as above. Let us look at the Environment and Analytics Tab Timeline components in detail.

### Filter Tests Using Environment

The Environment filter filters tests based on the browser and/or operating system used in the test. Refer to our [list of browsers](https://www.testmuai.com/list-of-browsers/) to understand the options available in this filter.

### Filter Tests Using Analytics Tab Timeline

The Analytics Tab Timeline option helps you quickly filter tests based on preset time periods:

*   TODAY
*   THIS WEEK
*   THIS MONTH

Select any of these, and the tests that ran in that period get filtered out.

By default, the _THIS WEEK_ filter is selected. You can use the Date filter instead to filter tests in a custom date period. If you select the Date filter, this filter is automatically removed.

## Group Tests Using Custom Tags

Group your automation tests with custom tags so you can view and filter them together on the dashboard.

Beyond filtering by the built-in fields above, you can group your automation tests using custom tags that you define in code. The following sections show how to create custom tags and then view, group, and filter tests by them. For demonstration purposes, we use a [sample TestNG project](https://github.com/LambdaTest/Java-TestNG-Selenium) to run on the TestMu AI platform.

### Create Custom Tags on the Selenium Grid

Add custom tag names to your Capabilities in code so tests carry those tags.

You can create a custom tag while writing your Selenium automation tests. When you create the [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) via code, add the below lines of code.

1. Create a String array that contains the names of your custom tags, separated by a comma.

```javascript
// In case for just 1 tag, just add 1 element in the array
String[] customTags = {"Custom Tag"};

// In case for multiple tags, add them in the array separated by comma
String[] customTags = {"Tag 1", "Tag 2", "Tag 3", ...};
```

2. Now add this custom tag in your Capabilities instance:

```javascript
DesiredCapabilities caps = new DesiredCapabilities();
.
.

// To create custom tags
caps.setCapability("tags", customTags);
```

For example:

You have successfully created the custom tags. Let us now see how to view and group tests based on custom tags.

### View Custom Tags on Your Timeline

Toggle the Timeline from Build View to Test View to see custom tags below your tests.

Navigate to [Timeline](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/) view of your automation dashboard, and toggle the **Build View** to **Test View**:

You can see the applied custom tags below the tests in this Test View.

### View Custom Tags on Your Automation Logs

See the applied custom tags below each test in the left panel of Automation Logs.

Navigate to [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) of your automation dashboard, and you can see the applied custom tags below the tests in the left panel.

### Filter Tests Using Custom Tags

Use the Tags filter in the toolbar to filter tests by one or more custom tags.

You can filter tests on your automation dashboard with these custom tags.

Navigate to [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) of your automation dashboard, and you can see a filter by name **Tags** in the filter toolbar.

Click on it and select the Tag by which you want to filter the tests on your dashboard. For example, we have filtered the test using _Tag2_ custom tag:

You can filter tests by selecting multiple custom tags at once from the filter toolbar:

## Group and Filter Builds Using Build Tags

Tag your builds so you can group and filter test builds on the automation dashboard.

Just as custom tags group individual tests, Build tags let you group whole test builds. The following sections show how to create Build tags and use them to group or filter your test builds on the TestMu AI Automation Dashboard.

### Create Build Tags

Add a `buildTags` array to your Capabilities to tag a build in code.

While writing your automation tests, add another capability when you create the Capabilities via code. Follow the below steps:

1. Create an array of Strings that contains your Build tags, each separated by a comma.

```java
// For example, when you have only 1 tag
String[] buildTagList = {"Build Tag"};

// For example, when you have multiple tags
String[] buildTagList = {"Tag 1", "Tag 2", "Tag 3", ...};
```

2. Now add this Build tag array in your Capabilities instance. For example, while creating a sample Capabilities instance in Java, the code will be:

```java
// Creating the Build Tags
String[] buildTagList = {"Tag1", "Tag2", "Tag3", "BuildTagRishabh"};

DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browser", "Safari");
caps.setCapability("version", "13");
caps.setCapability("platform", "macos Catalina");
caps.setCapability("build", "Build Tags Demo");
caps.setCapability("name", "Sample Test");

// To create custom tags
caps.setCapability("buildTags", buildTagList);

System.out.println("Desired Caps: " + caps);
driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
```

You have successfully created the Build tags. Run your test and navigate to [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/) to see the tags in that build:

### Guidelines for Creating Build Tags

Follow these constraints when adding Build tags, including the five-tag maximum.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

### Filter Tests Using Build Tags

Use the Build Tags filter in the toolbar to group or filter builds by tag.

To group or filter the tests on your automation dashboard with Build tags, navigate to [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/), and you can see a filter by name **Build Tags** on the right corner of the filter toolbar.

Select the Build tag by which you want to filter your test. For example, if we choose _Tag1_, only the test builds with the tag "Tag1" appear:

You can choose multiple Build tags to filter your tests, as shown in the image below:

## Split Builds with Build Inactivity Time

Set a build inactivity time so tests that run after a defined idle period start a new build automatically.

Along with tagging, Build Splitting (Build Inactivity Time) helps you organize tests more efficiently. Set a time interval after which the system waits for the defined time and marks the build as completed. Any new builds you run after this time period are created as a new build.

### How It Works

Tests within the inactivity window join the current build; tests after it start a new one.

Previously, when you ran a build on TestMu AI, all tests merged into the same build, making it difficult to identify tests that ran at specific intervals. Build Splitting logic helps you organize your tests better.

Build Splitting requires you to set Build Inactivity Time. For instance, if the Build Inactivity Time is set to 5 minutes, the system waits 5 minutes after the last test completes before marking the build as complete. If you run a test before the inactivity time, it runs in the existing build. If you run a test (even with the same name) after the specified inactivity time (i.e., 5 minutes), it appears under a new build.

### Set the Build Inactivity Time

Set your Build Inactivity Time under Profile > Product Preferences.

**Note**
1. By default, the build inactivity time is six hours.
2. Every user within the organization can set their own build inactivity time.

1. Log in to your TestMu AI account. Don't have an account? [Sign up for free](https://www.testmuai.com/register/).

2. From the top-right corner, click on the Profile avatar, and navigate to **Profile > Product Preferences**.

3. Under the **Automation Build Preference**, select the **Build Inactivity Time** to choose your preferences.

Once you set the build inactivity time, a confirmation notification appears: *Build Time updated successfully.*

## Edit Individual Test Details

Mark a test's final status or rename it during execution using JavascriptExecutor hooks.

Organizing builds is one part of keeping your dashboard clean; the details of each test matter too. While running Selenium tests on TestMu AI, you can modify individual test details from your automation test build. The following covers marking test status and renaming tests during execution.

### Mark Test Status as Pass or Fail

Use the `lambda-status` hook to explicitly set a test's status on the dashboard.

When you run Selenium tests on the TestMu AI grid, a test that your local assertions marked as failed may show as completed on the dashboard. Use the `lambda-status` hook to explicitly set the correct status.

You can set these status values: `passed`, `failed`, `skipped`, `ignored`, `unknown`, `error`.

```java
// Mark test as passed
((JavascriptExecutor) driver).executeScript("lambda-status=passed");

// Mark test as failed
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
```

```javascript
// Mark test as passed
await driver.executeScript('lambda-status=passed');

// Mark test as failed
await driver.executeScript('lambda-status=failed');
```

```python
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

```csharp
// Mark test as passed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=passed");

// Mark test as failed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=failed");
```

```php
// Mark test as passed
$driver->executeScript("lambda-status=passed");

// Mark test as failed
$driver->executeScript("lambda-status=failed");
```

```ruby
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

Place the `lambda-status` call inside your test's teardown or `@AfterMethod` block so the status is set before the session ends. For the full list of Lambda Hooks, see Lambda Hooks.

### Rename Your Test

Pass a new name through `lambda-name` in JavascriptExecutor to rename a running test.

You can rename a running test to reflect dynamic data such as iteration count or data-driven parameters. Pass the new name through JavascriptExecutor:

```java
((JavascriptExecutor) driver).executeScript("lambda-name=Your_test_name");
```

```javascript
await driver.executeScript('lambda-name=Your_test_name');
```

```python
driver.execute_script("lambda-name=Your_test_name")
```

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-name=Your_test_name");
```

```php
$driver->executeScript("lambda-name=Your_test_name");
```

```ruby
driver.execute_script("lambda-name=Your_test_name")
```

## Share Test Results

Retrieve a test's Session ID and build a shareable URL for its logs or execution video.

TestMu AI lets you share individual test results with team members. Retrieve the Session ID from your test script, then build a shareable URL for automation logs or execution videos.

### Get the Session ID

Retrieve the unique Session ID from your test script in your preferred language.

Every test session on TestMu AI has a unique Session ID. Use the code below to retrieve it in your preferred language:

```java
import org.openqa.selenium.remote.SessionId;

SessionId session = ((RemoteWebDriver) driver).getSessionId();
System.out.println("Session ID: " + session.toString());
```

```javascript
const session = await driver.getSession();
console.log("Session ID: " + session.getId());
```

```python
session_id = driver.session_id
print("Session ID: " + session_id)
```

```csharp
var sessionId = ((RemoteWebDriver)driver).SessionId;
Console.WriteLine("Session ID: " + sessionId);
```

```php
$sessionId = $driver->getSessionID();
echo "Session ID: " . $sessionId;
```

```ruby
session_id = driver.session_id
puts "Session ID: #{session_id}"
```

Once you have the Session ID, share the automation logs URL with your colleague:

```
https://automation.lambdatest.com/logs/?sessionID=YOUR_SESSION_ID
```

### Share Your Test Execution Video

Build a public video URL from the test's TestID/SessionID and an AUTH_TOKEN.

You can share a video recording of any test execution. Build the URL in the following format:

```
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

#### Get Your TestID or SessionID

If you did not capture the ID from your script as shown above, you can also read it from the dashboard. Go to the **Automation Dashboard** and click on the test whose ID you need. Click the **"i"** button on the status bar to access the test metadata.

After clicking the **"i"** button, you will see the test metadata including the SessionID.

For example, if your SessionID is `HJKXM-RHZL1-SVPWY-AB8X6`, the URL becomes:

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=AUTH_TOKEN
```

#### Generate the AUTH_TOKEN

Create the AUTH_TOKEN by computing an MD5 hash of your `username:access_key` string.

```java
MessageDigest m = MessageDigest.getInstance("MD5");
String s = "username:access_key";
m.update(s.getBytes(), 0, s.length());
System.out.println("MD5: " + new BigInteger(1, m.digest()).toString(16));
```

```javascript
var crypto = require('crypto');
var token = crypto.createHash('md5').update("username:access_key").digest("hex");
console.log("AUTH_TOKEN: " + token);
```

```python
import hashlib
token = hashlib.md5("username:access_key".encode('utf-8')).hexdigest()
print("AUTH_TOKEN: " + token)
```

```csharp
byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes("username:access_key");
byte[] hashBytes = System.Security.Cryptography.MD5.Create().ComputeHash(inputBytes);
StringBuilder sb = new StringBuilder();
for (int i = 0; i < hashBytes.Length; i++)
{
sb.Append(hashBytes[i].ToString("X2"));
}
Console.WriteLine("AUTH_TOKEN: " + sb.ToString());
```

```php
$token = md5("username:access_key");
echo "AUTH_TOKEN: " . $token;
```

```ruby
require 'digest'
token = Digest::MD5.hexdigest("username:access_key")
puts "AUTH_TOKEN: #{token}"
```

For example, if the generated AUTH_TOKEN is `331k534uf3toef`, the final URL becomes:

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=331k534uf3toef
```

You must be logged into TestMu AI to access the sharing URL.

## Command Annotations

Log custom annotations from your test script to the Automation Dashboard command logs.

Your test script holds important details about the test, like its description, when different scenarios start and finish, and other data you may want to show on the console for debugging and tracking purposes. Command annotations let you surface that information on the dashboard itself.

By using command annotations, you can integrate configurations in your tests that log this information on TestMu AI. These logs are available on the TestMu AI Automation Dashboard alongside the command logs, providing a quick way to search and navigate to a specific test section and troubleshoot any failed tests.

### Sending Logs to TestMu AI Using JavaScriptExecutor

Use the JavaScriptExecutor to send annotations directly from your test script to the dashboard.

You can send annotations to TestMu AI directly from your test script using the annotate action through the JavaScriptExecutor.

Here is an example written in Java:

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"stepcontext\", \"arguments\": {\"data\": \"<any string>\", \"level\": \"<info/warn/debug/error>\"}}");
```

The arguments passed in the JavaScript method for setting the status and the corresponding reason for the test are `data` and `level`.

* **data**: Accepts a value in string data type.

* **level**: Accepts the standard log severity levels: info, debug, warn, and error. This argument is optional with the default value of info.

### Searching and Filtering

Locate and filter your annotated logs in the All Commands tab on the Automation Dashboard.

Once your test script has sent command annotations to TestMu AI, you can locate all the annotations pushed to the logs in the **All Commands** tab on the TestMu AI Automation Dashboard. This search feature is especially useful for long-duration test sessions. Additionally, you can filter these annotated logs based on severity levels and customize the selection according to your logging patterns.

## Add Custom Metadata With customData

Associate extra metadata such as Jira tickets, PR links, and test IDs with your test runs.

Where command annotations log messages during a run, the `customData` capability attaches structured metadata to the test itself. It allows you to associate additional metadata with test runs, enabling better traceability, debugging, and reporting. This metadata can include information like issue tracker links, test case IDs, and other critical test context. By embedding this metadata in test configurations, your team can integrate with existing tools and workflows, such as GitHub, Jira, or any test management system.

### How to Add Custom Metadata for Running Automation Tests on TestMu AI

Add the `customData` capability to your test script with the metadata fields you need.

To add custom metadata in your automation tests, add the capability `customData` in your test script with all the metadata information that we support:

```java title="Test.java"
ltOptions.put("customData", new HashMap<String, Object>() {{
put("jiraTicket", "JIRA-12345");
put("githubPR", "https://github.com/organization/repo/pull/678");
put("testDescription", "This test validates login functionality under high load.");
}});
```

```javascript title="Test.js"
"LT:Options": {
"customData": {
"jiraTicket": "JIRA-12345",
"githubPR": "https://github.com/organization/repo/pull/678",
"testDescription": "This test validates login functionality under high load."
}
}
```

```typescript title="Test.ts"
"LT:Options": {
customData: {
jiraTicket: "JIRA-12345",
githubPR: "https://github.com/organization/repo/pull/678",
testDescription: "This test validates login functionality under high load."
}
}
```

```php title="Test.php"
"LT:Options" => [
"customData" => [
"jiraTicket" => "JIRA-12345",
"githubPR" => "https://github.com/organization/repo/pull/678",
"testDescription" => "This test validates login functionality under high load."
]
]
```

```python title="Test.py"
"LT:Options": {
"customData": {
"jiraTicket": "JIRA-12345",
"githubPR": "https://github.com/organization/repo/pull/678",
"testDescription": "This test validates login functionality under high load."
}
}
```

```csharp title="Test.cs"
ltOptions.Add("customData", new Dictionary<string, object>{
{ "jiraTicket", "JIRA-12345" },
{ "githubPR", "https://github.com/organization/repo/pull/678" },
{ "testDescription", "This test validates login functionality under high load." }
});
```

```ruby title="Test.rb"
"LT:Options" => {
customData: {
jiraTicket: "JIRA-12345",
githubPR: "https://github.com/organization/repo/pull/678",
testDescription: "This test validates login functionality under high load."
}
}
```

### Use Cases for `customData`

See how teams use the customData capability in different testing workflows.

#### 1. Enhanced Reporting With GitHub and Jira Links

**Scenario:** A QA team wants to include direct links to GitHub pull requests or Jira issues related to a test. This helps developers and testers quickly access related code changes or tasks when a test fails.

```javascript title="Test.js"
'customData': {
"jiraTicket": "JIRA-12345",
"githubPR": "https://github.com/organization/repo/pull/678",
"testDescription": "This test validates login functionality under high load."
}
```

- **`jiraTicket`:** Links the test to the corresponding Jira issue for easy navigation.
- **`githubPR`:** Links to the pull request that introduced the changes being tested.
- **`testDescription`:** Provides a brief description of the test's purpose.

#### 2. Linking Test Management Systems

**Scenario:** The team uses a test management tool (e.g., TestRail, Zephyr) to manage test cases. Adding the test case ID ensures results link back to the test plan.

```javascript title="Test.js"
'customData': {
"testCaseID": "TC-56789",
"testSuite": "Regression Suite",
"priority": "High",
"owner": "qa_team@company.com"
}
```

- **`testCaseID`:** Maps the execution to a specific test case in the test management system.
- **`testSuite`:** Specifies the test suite or category the test belongs to.
- **`priority`:** Indicates the importance or severity of the test.
- **`owner`:** Identifies the owner or responsible party for the test.

#### 3. Debugging With Environment Metadata

**Scenario:** When debugging test failures, include information about the environment or build being tested.

```javascript title="Test.js"
'customData': {
"buildNumber": "1234",
"environment": "Staging",
"apiVersion": "v1.2.3",
"releaseTag": "v1.2.3-rc1"
}
```

- **`buildNumber`:** Identifies the specific build of the application being tested.
- **`environment`:** Indicates the environment (e.g., Development, Staging, Production) the test ran in.
- **`apiVersion`:** Provides the API version being tested.
- **`releaseTag`:** Links the test to a specific release or tag in the version control system.

#### 4. Capturing User Story or Feature Metadata

**Scenario:** A product manager wants test results linked to specific user stories or features for tracking progress on new functionality.

```javascript title="Test.js"
'customData': {
"featureID": "FEAT-9876",
"userStory": "As a user, I want to reset my password securely.",
"sprint": "Sprint 45"
}
```

- **`featureID`:** Links the test to a specific feature ID in the product backlog.
- **`userStory`:** Describes the user story being validated.
- **`sprint`:** Indicates the sprint or iteration in which the feature is being developed.

#### 5. Tracking Third-Party Dependencies

**Scenario:** A test depends on third-party APIs or integrations, and tracking the versions or configurations of these dependencies is critical.

```javascript title="Test.js"
'customData': {
"thirdPartyAPI": "Stripe",
"apiVersion": "2023-01-15",
"status": "Active"
}
```

- **`thirdPartyAPI`:** Identifies the external service used.
- **`apiVersion`:** Specifies the version of the API.
- **`status`:** Indicates the status or availability of the dependency.

#### 6. Integrating Test Runs With CI/CD Pipelines

**Scenario:** A DevOps team wants to include pipeline-specific metadata in the test report to track CI/CD execution details.

```javascript title="Test.js"
'customData': {
"pipelineID": "Pipeline-001",
"jobID": "Job-456",
"triggeredBy": "GitHub Actions",
"commitHash": "a1b2c3d4e5f67890"
}
```

- **`pipelineID`:** Tracks the pipeline in which the test ran.
- **`jobID`:** Identifies the specific CI/CD job.
- **`triggeredBy`:** Indicates the trigger source (e.g., manual, GitHub Actions, Jenkins).
- **`commitHash`:** Links the test to a specific commit in the version control system.

### Limitations

Review these constraints before using the customData capability.

- **Payload Size:** The `customData` capability is limited to 1 KB of JSON data. Larger payloads are not accepted.
  - Use concise key names and avoid unnecessary fields.
  - Prioritize critical metadata to stay within the limit.

- **Readability:** Adding too many fields may reduce the readability of the metadata. Be selective in the information you include.

### Best Practices

Follow these guidelines to get the most out of your custom metadata.

- **Keep Metadata Concise:** Use meaningful but short key names and values.
- **Align With Workflows:** Structure customData to integrate with tools like GitHub, Jira, and test management systems.
- **Validate Data Size:** Include a validation step in your scripts to ensure the payload is under 1 KB.
- **Automate Metadata Generation:** Use scripts or CI/CD tools to dynamically populate customData fields, reducing manual effort.

## Mark as Bug

Report UI observations from a test session to Jira, Trello, and other tools without leaving TestMu AI.

>You can skip the steps of capturing a screenshot, annotating it, and logging onto a separate tool to create a task. TestMu AI does it all for you.
>**Mark as Bug** is a feature that lets you highlight any UI observation from your test sessions on TestMu AI and share it with your colleagues on their favorite project management or bug tracking tools such as Jira, Trello, Hive, Paymo, and more. You can choose the assignee who handles your reported task or bug. You can also mention a description to help them understand the issue. You can do all of this while testing on TestMu AI, without hopping to any other platform or tool.

### How to Mark as Bug in Automation Testing

Log a bug directly from the automation test session to your integrated project management tool.

1. Visit the **Automation** tab from the left navigation menu to go to the automation console. Go to **AUTOMATION LOGS**.

2. In the automation logs, you can access various logs of your test script execution such as network logs, command logs, and more. By default, you are routed to **SUMMARY**. In summary, you will find a button to **Create Issue**.

As you click on the **bug** icon, an integration-specific form opens up. Fill the fields as needed. For instance, if you have installed the TestMu AI + JIRA integration, you can fill the below fields:
>* Select which **project** should the bug go under.
>* Select the **assignee** for that particular task.
>* Select the **issue type** of the bug.
>* Post a **summary** to help relate the cause of the bug.

All the fields you populate reflect directly in your respective project based on the integration you have configured with your TestMu AI account. In the above case, the changes reflect on the respective JIRA instance.

Similarly, you can find the mark as bug button in **EXCEPTION** and **COMMAND** logs.
* Exception logs

* Command Logs

>You can now filter, tag, split, edit, annotate, log bugs, and share your Selenium tests and builds from the automation dashboard. If you have any questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

## Next Steps

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Inside the TestMu Platform](/support/docs/inside-testmu-platform/)
