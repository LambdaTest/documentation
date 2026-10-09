# How to Filter and Organize Selenium Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Once your Selenium tests are running on TestMu AI, the automation dashboard gives you several ways to keep them organized. You can filter tests, group them with custom tags, tag and split builds, edit individual test details during a run, and share results with your team. This document covers each of these.

The automation dashboard lists all your runs in the **Builds** list, where you can search, filter, and sort them directly. Opening a run gives you the Timeline, Automation Logs, and Analytics tabs, each with its own _filter toolbar_. The sections below start with the Builds list, then cover the per-tab filter toolbars, tagging, build splitting, editing test details, and sharing.

## Filter and Sort Builds

Filter, search, and sort your builds from the Builds list on the automation dashboard.

### Search Builds

Use the search bar above the Builds list to find a build by **Build Name** or **Build Id**. Pick the field from the dropdown next to the search box.

### Sort & Filters

Click **Configure > Sort & Filters** to open the filter panel, then filter by any of the following:

- **Build Tags** and **Test Tags** - tags you set on builds or tests from your test code
- **Date** - a custom date range
- **Project** - the project a build belongs to
- **Status** - Passed, Failed, Running, Error, Skipped, or Stopped
- **Type** - the automation framework (Selenium, Cypress, Playwright, Puppeteer, Taiko, HyperExecute, and more)
- **Users** - the team member who ran the build

Each filter opens a picker where you select one or more values. For example, the **Status** filter narrows the list to specific run states:

The **Date** filter lets you pick a preset range or a custom start and end date:

To group and filter by the tags you set in code, see [Group Tests Using Custom Tags](#group-tests-using-custom-tags) and [Group and Filter Builds Using Build Tags](#group-and-filter-builds-using-build-tags).

### Sort Builds

Use **Sort By** to order the list by **Date**, **Status**, or **User**, in **Ascending** or **Descending** order.

## Group Tests Using Custom Tags

Group your automation tests with custom tags so you can view and filter them together on the dashboard.

TestMu AI lets you group automation tests with custom tags. Add a `tags` capability with your tag names to a test, run it, then view and filter tests by those tags from the Builds list on the dashboard. The examples below use a [sample TestNG script](https://github.com/LambdaTest/Java-TestNG-Selenium).

### Create Custom Tags on the Selenium Grid

Pass a `tags` capability with a String array of tag names inside `LT:Options`.

Add custom tags while writing your Selenium test. When you build your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `tags` capability to a String array of the tag names you want on the test:

```java
// The tags you want to apply to this test
String[] customTags = { "Tag 1", "Tag 2", "Tag 3" };

// Add the tags capability inside LT:Options
MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("tags", customTags);

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("LT:Options", ltOptions);
```

Run the test with these capabilities. Once it runs on the grid, view and filter your tests by these tags on the dashboard.

### View and Filter Tests by Custom Tags

Filter the Builds list by your custom tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Test Tags**. Choose one or more of your tags to show only the tests that carry them; selecting several combines them.

To filter by tags applied to the build rather than the test, use the **Build Tags** filter. See [Group and Filter Builds Using Build Tags](#group-and-filter-builds-using-build-tags) and [Filter and Sort Builds](#filter-and-sort-builds).

## Group and Filter Builds Using Build Tags

Tag your builds so you can group and filter test builds on the automation dashboard.

With TestMu AI, you can group test builds with build tags. Add a `buildTags` capability with your tag names to a test, run it, then group and filter builds by those tags on the Automation Dashboard.

### Create Build Tags

Pass a `buildTags` capability with a String array of tag names inside `LT:Options`.

While building your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `buildTags` capability to a String array of the tag names you want on the build:

```java
// The build tags you want to apply (max 5 per build)
String[] buildTagList = { "Regression", "Sanity" };

// Add the buildTags capability inside LT:Options
MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("build", "Build Tags Demo");
ltOptions.setCapability("buildTags", buildTagList);

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("browserVersion", "latest");
browserOptions.setCapability("LT:Options", ltOptions);
```

Run the test with these capabilities. The build then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) tagged with your build tags.

### Guidelines for Creating Build Tags

Follow these limits when creating build tags to avoid unexpected behavior.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

### Filter Tests Using Build Tags

Filter the Builds list by your build tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Build Tags**. Choose one or more of your build tags to show only the builds that carry them; selecting several combines them.

To filter by tags set on individual tests instead, use the **Test Tags** filter. See [Group Tests Using Custom Tags](#group-tests-using-custom-tags) and [Filter and Sort Builds](#filter-and-sort-builds).

## Split Builds with Build Inactivity Time

Build Splitting lets you organize tests by controlling how they group into builds. The **Build Active Duration** setting (previously **Build Inactivity Time**) defines how long a build stays active. Tests that share the same build name and run while the build is active are grouped into the same build. A test with that build name that runs after the active duration starts a new build.

### How It Works

Build Active Duration separates tests into distinct builds based on how long a build stays active.

Previously, tests that shared the same build name kept merging into a single build, making it difficult to separate runs from different sessions. Setting a Build Active Duration keeps each session's tests in its own build.

For example, if the Build Active Duration is set to 6 hours, tests with the same build name that run within that active window are grouped into the same build. Once the 6-hour window passes, the next test with that build name appears under a new build.

### Set the Build Active Duration

Follow these steps to configure Build Active Duration for your account.

**Note**
1. By default, the Build Active Duration is six hours.
2. Every user within the organization can set their own Build Active Duration.

1. Log in to your TestMu AI account. Don't have an account? [Sign up for free](https://www.testmuai.com/register/).

2. Open **Account Settings > Product Preferences** and select **Automation**.

3. Under **Builds**, set the **Build Active Duration** to your preferred interval.

Once you save your preference, a confirmation notification appears: *Build Time updated successfully.*

## Edit Individual Test Details

Edit a test from the dashboard after a run, or mark its status and rename it during execution using JavascriptExecutor hooks.

You can modify individual test details on TestMu AI, either from the Automation Dashboard after a run or programmatically during execution. The following covers editing a test from the dashboard, marking test status, and renaming tests.

### Edit Test Details from the Dashboard

Rename a test, change its status, or add a remark after a run, directly from the Automation Dashboard.

1. Open the test's detail page, click the **…** (options) menu in the top-right of the test summary, and select **Edit Test**.

2. In the **Edit Test** dialog, update the **Name**, **Status**, or **Remark**, then click **Save Changes**.

To set the status or name programmatically during the run instead, use the hooks below.

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

Share a test directly from the dashboard, or retrieve its Session ID and build a shareable URL for its logs or execution video.

TestMu AI lets you share individual test results with team members. Share directly from the Automation Dashboard, or build a shareable URL programmatically from the Session ID.

### Share from the Dashboard

Send a test's results to teammates directly from the Automation Dashboard.

1. Open the test's detail page, click the **…** (options) menu in the top-right of the test summary, and select **Share**.

2. In the **Share** dialog, set the **Expiry Duration**, enter one or more recipient **email IDs**, and add an optional message. Click **Invite** to email the link, or **Copy Link** to share it yourself.

To generate a shareable URL programmatically instead, use the Session ID method below.

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

If you did not capture the ID from your script as shown above, you can also read it from the dashboard. Open the test on the **Automation Dashboard**. In the test summary, click the **Test ID** button to copy the test's ID, then use it as the `testID` in the URL above.

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

Your test script holds important details about the test, like its description, when different scenarios start and finish, and other data you may want to show on the console for debugging and tracking purposes.

By using command annotations, you can integrate configurations in your tests that log this information on TestMu AI. These logs are available on the TestMu AI Automation Dashboard alongside the command logs, providing a quick way to search and navigate to a specific test section and troubleshoot any failed tests.

### Sending Logs to TestMu AI Using JavaScriptExecutor

Use the JavaScriptExecutor to send annotations directly from your test script to the dashboard.

You can send annotations to TestMu AI directly from your test script using the annotate action through the JavaScriptExecutor.

Here is an example written in Java:

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"stepcontext\", \"arguments\": {\"data\": \"<any string>\", \"level\": \"<info/warn/debug/error>\"}}");
```

The annotation call takes two arguments, `data` and `level`:

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

Report UI observations from a test session to Jira, Azure DevOps, Airbrake, and other tools without leaving TestMu AI.

**Mark as Bug** lets you file a bug directly from an automation test session into your connected project management or issue-tracking tool (such as Jira, Azure DevOps, or Airbrake) without leaving TestMu AI. Add the details, pick the project, and the issue is created with the test context attached.

### How to Mark as Bug in Automation Testing

Log a bug directly from a test session to your integrated issue tracker.

1. Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), select a build, and open a test to view its detail page.

2. Click the **…** (options) menu in the top-right of the test summary and select **Create an issue**.

3. In the **Create an Issue** dialog, use **Switch App** to choose your connected issue tracker (for example, Jira, Airbrake, or Azure DevOps), select the **Project**, add the issue details under the **Issue Tracker** and **Other Details** tabs, then click **Create Issue**.

The issue is created in the connected tool with the test details attached. The app appears here only if you have an issue-tracker integration configured for your account.

>You can now filter, tag, split, edit, annotate, log bugs, and share your Selenium tests and builds from the automation dashboard. If you have any questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

## Next Steps

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Inside the TestMu Platform](/support/docs/inside-testmu-platform/)
