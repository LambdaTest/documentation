# Organizing Your Selenium Tests and Builds

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

TestMu AI allows you to group your automation tests using custom tags. This section shows how to create custom tags and use them. For demonstration purposes, we use a [sample TestNG project](https://github.com/LambdaTest/Java-TestNG-Selenium) to run on the TestMu AI platform.

### Create Custom Tags on the Selenium Grid

You can create a custom tag while writing your Selenium automation tests. When you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code, add the below lines of code.

1. Create a String array that contains the names of your custom tags, separated by a comma.

```javascript
// In case for just 1 tag, just add 1 element in the array
String[] customTags = {"Custom Tag"};

// In case for multiple tags, add them in the array separated by comma
String[] customTags = {"Tag 1", "Tag 2", "Tag 3", ...};
```

2. Now add this custom tag in your Desired Capabilities instance:

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

Navigate to [Timeline](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/) view of your automation dashboard, and toggle the **Build View** to **Test View**:

You can see the applied custom tags below the tests in this Test View.

### View Custom Tags on Your Automation Logs

Navigate to [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) of your automation dashboard, and you can see the applied custom tags below the tests in the left panel.

### Filter Tests Using Custom Tags

You can filter tests on your automation dashboard with these custom tags.

Navigate to [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) of your automation dashboard, and you can see a filter by name **Tags** in the filter toolbar.

Click on it and select the Tag by which you want to filter the tests on your dashboard. For example, we have filtered the test using _Tag2_ custom tag:

You can filter tests by selecting multiple custom tags at once from the filter toolbar:

## Group and Filter Builds Using Build Tags

Tag your builds so you can group and filter test builds on the automation dashboard.

With TestMu AI, you can group your test builds with Build tags. This section shows how to create Build tags and use them to group or filter your test builds on the TestMu AI Automation Dashboard.

### Create Build Tags

While writing your automation tests, add another capability when you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code. Follow the below steps:

1. Create an array of Strings that contains your Build tags, each separated by a comma.

```java
// For example, when you have only 1 tag
String[] buildTagList = {"Build Tag"};

// For example, when you have multiple tags
String[] buildTagList = {"Tag 1", "Tag 2", "Tag 3", ...};
```

2. Now add this Build tag array in your Desired Capabilities instance. For example, while creating a sample Desired Capabilities instance in Java, the code will be:

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

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

### Filter Tests Using Build Tags

To group or filter the tests on your automation dashboard with Build tags, navigate to [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/), and you can see a filter by name **Build Tags** on the right corner of the filter toolbar.

Select the Build tag by which you want to filter your test. For example, if we choose _Tag1_, only the test builds with the tag "Tag1" appear:

You can choose multiple Build tags to filter your tests, as shown in the image below:

## Split Builds with Build Inactivity Time

Set a build inactivity time so tests that run after a defined idle period start a new build automatically.

Build Splitting (Build Inactivity Time) lets you organize tests more efficiently. Set a time interval after which the system waits for the defined time and marks the build as completed. Any new builds you run after this time period are created as a new build.

### How It Works

Previously, when you ran a build on TestMu AI, all tests merged into the same build, making it difficult to identify tests that ran at specific intervals. Build Splitting logic helps you organize your tests better.

Build Splitting requires you to set Build Inactivity Time. For instance, if the Build Inactivity Time is set to 5 minutes, the system waits 5 minutes after the last test completes before marking the build as complete. If you run a test before the inactivity time, it runs in the existing build. If you run a test (even with the same name) after the specified inactivity time (i.e., 5 minutes), it appears under a new build.

### Set the Build Inactivity Time

**Note**
1. By default, the build inactivity time is six hours.
2. Every user within the organization can set their own build inactivity time.

1. Log in to your TestMu AI account. Don't have an account? [Sign up for free](https://www.testmuai.com/register/).

2. From the top-right corner, click on the Profile avatar, and navigate to **Profile > Product Preferences**.

3. Under the **Automation Build Preference**, select the **Build Inactivity Time** to choose your preferences.

Once you set the build inactivity time, a confirmation notification appears: *Build Time updated successfully.*

## Edit Individual Test Details

Mark a test's final status or rename it during execution using JavascriptExecutor hooks.

You can modify individual test details from your automation test build while running Selenium tests on TestMu AI. This section covers marking test status and renaming tests during execution.

### Mark Test Status as Pass or Fail

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

Place the `lambda-status` call inside your test's teardown or `@AfterMethod` block so the status is set before the session ends. For the full list of Lambda Hooks, see [Lambda Hooks](/support/docs/lambda-hooks/).

### Rename Your Test

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

You can share a video recording of any test execution. Build the URL in the following format:

```
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

#### Get Your TestID or SessionID

Go to the **Automation Dashboard** and click on the test whose ID you need. Click the **"i"** button on the status bar to access the test metadata.

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

>You can now filter, tag, split, edit, and share your Selenium tests and builds from the automation dashboard. If you have any questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).
