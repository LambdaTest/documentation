---
id: filter-your-selenium-tests
title: How to Filter and Organize Selenium Tests on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Filter Your Tests"
description: Filter, tag, group, split, and share your Selenium test builds on TestMu AI to organize and analyze your automation results.
keywords:
  - filter selenium tests by status
  - automation dashboard test filters
  - filter tests by custom tags
  - selenium test timeline filters
  - filter automation logs by date
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/filter-your-selenium-tests/
site_name: TestMu AI
slug: filter-your-selenium-tests/
canonical: https://www.testmuai.com/support/docs/filter-your-selenium-tests/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Organizing Selenium Tests and Builds",
          "item": `${BRAND_URL}/support/docs/filter-your-selenium-tests/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/filter-your-selenium-tests/"
    },
    "headline": "How to Filter and Organize Selenium Tests on TestMu AI",
    "description": "Filter, tag, group, split, and share your Selenium test builds on TestMu AI to organize and analyze your automation results.",
    "url": "https://www.testmuai.com/support/docs/filter-your-selenium-tests/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "filter selenium tests by status",
      "automation dashboard test filters",
      "filter tests by custom tags"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Create Custom Tags on the Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// In case for just 1 tag, just add 1 element in the array\nString[] customTags = {\"Custom Tag\"};\n\n// In case for multiple tags, add them in the array separated by comma\nString[] customTags = {\"Tag 1\", \"Tag 2\", \"Tag 3\", ...};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Now add this custom tag in your Capabilities instance",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "DesiredCapabilities caps = new DesiredCapabilities();\n.\n.\n\n// To create custom tags\ncaps.setCapability(\"tags\", customTags);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create Build Tags",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// For example, when you have only 1 tag\nString[] buildTagList = {\"Build Tag\"};\n\n// For example, when you have multiple tags\nString[] buildTagList = {\"Tag 1\", \"Tag 2\", \"Tag 3\", ...};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example, while creating a sample Capabilities instance in Java, the code will be",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Creating the Build Tags\nString[] buildTagList = {\"Tag1\", \"Tag2\", \"Tag3\", \"BuildTagRishabh\"};\n\nDesiredCapabilities caps = new DesiredCapabilities();\ncaps.setCapability(\"browser\", \"Safari\");\ncaps.setCapability(\"version\", \"13\");\ncaps.setCapability(\"platform\", \"macos Catalina\");\ncaps.setCapability(\"build\", \"Build Tags Demo\");\ncaps.setCapability(\"name\", \"Sample Test\");\n\n// To create custom tags\ncaps.setCapability(\"buildTags\", buildTagList);\n\nSystem.out.println(\"Desired Caps: \" + caps);\ndriver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + authkey + hub), caps);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mark Test Status as Pass or Fail (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Mark test as passed\n((JavascriptExecutor) driver).executeScript(\"lambda-status=passed\");\n\n// Mark test as failed\n((JavascriptExecutor) driver).executeScript(\"lambda-status=failed\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename Your Test (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get the Session ID (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import org.openqa.selenium.remote.SessionId;\n\nSessionId session = ((RemoteWebDriver) driver).getSessionId();\nSystem.out.println(\"Session ID: \" + session.toString());"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# How to Filter and Organize Selenium Tests on TestMu AI

---

Once your Selenium tests are running on TestMu AI, the automation dashboard gives you several ways to keep them organized. You can filter tests, group them with custom tags, tag and split builds, edit individual test details during a run, and share results with your team. This document covers each of these.

The automation dashboard lists all your runs in the **Builds** list, where you can search, filter, and sort them directly. Opening a run gives you the Timeline, Automation Logs, and Analytics tabs, each with its own _filter toolbar_. The sections below start with the Builds list, then cover the per-tab filter toolbars, tagging, build splitting, editing test details, and sharing.

## Filter and Sort Builds

---

Filter, search, and sort your builds from the Builds list on the automation dashboard.

### Search Builds

Use the search bar above the Builds list to find a build by **Build Name** or **Build Id**. Pick the field from the dropdown next to the search box.

<img loading="lazy" src={require('../assets/images/uploads/builds-search.webp').default} alt="Builds list search bar with the Build Name and Build Id field dropdown" width="1599" height="895" className="doc_img"/>

### Sort & Filters

Click **Configure > Sort & Filters** to open the filter panel, then filter by any of the following:

- **Build Tags** and **Test Tags** - tags you set on builds or tests from your test code
- **Date** - a custom date range
- **Project** - the project a build belongs to
- **Status** - Passed, Failed, Running, Error, Skipped, or Stopped
- **Type** - the automation framework (Selenium, Cypress, Playwright, Puppeteer, Taiko, HyperExecute, and more)
- **Users** - the team member who ran the build

<img loading="lazy" src={require('../assets/images/uploads/builds-sort-filters.webp').default} alt="Configure Sort and Filters panel listing Build Tags, Date, Project, Status, Test Tags, Type, Users, and Sort By" width="1604" height="572" className="doc_img"/>

Each filter opens a picker where you select one or more values. For example, the **Status** filter narrows the list to specific run states:

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-status.webp').default} alt="Status filter showing Error, Failed, Passed, Running, Skipped, and Stopped options" width="1600" height="699" className="doc_img"/>

The **Date** filter lets you pick a preset range or a custom start and end date:

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-date.webp').default} alt="Date filter with preset ranges and a custom calendar range picker" width="1602" height="720" className="doc_img"/>

To group and filter by the tags you set in code, see [Group Tests Using Custom Tags](#group-tests-using-custom-tags) and [Group and Filter Builds Using Build Tags](#group-and-filter-builds-using-build-tags).

### Sort Builds

Use **Sort By** to order the list by **Date**, **Status**, or **User**, in **Ascending** or **Descending** order.

<img loading="lazy" src={require('../assets/images/uploads/builds-sort-by.webp').default} alt="Sort By menu with Date, Status, and User options and Ascending or Descending order" width="1600" height="713" className="doc_img"/>

## Group Tests Using Custom Tags
---
Group your automation tests with custom tags so you can view and filter them together on the dashboard.

TestMu AI lets you group automation tests with custom tags. Add a `tags` capability with your tag names to a test, run it, then view and filter tests by those tags from the Builds list on the dashboard. The examples below use a [sample TestNG script](https://github.com/LambdaTest/Java-TestNG-Selenium).

### Create Custom Tags on the Selenium Grid

---

Pass a `tags` capability with a String array of tag names inside `LT:Options`.

Add custom tags while writing your Selenium test. When you build your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `tags` capability to a String array of the tag names you want on the test:

<VerifiedTag value="Verified" />

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

---

Filter the Builds list by your custom tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Test Tags**. Choose one or more of your tags to show only the tests that carry them; selecting several combines them.

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-test-tags.webp').default} alt="Test Tags filter on the Builds list showing custom tag values to filter tests by" width="1601" height="702" className="doc_img"/>

To filter by tags applied to the build rather than the test, use the **Build Tags** filter. See [Group and Filter Builds Using Build Tags](#group-and-filter-builds-using-build-tags) and [Filter and Sort Builds](#filter-and-sort-builds).

## Group and Filter Builds Using Build Tags
---
Tag your builds so you can group and filter test builds on the automation dashboard.

With TestMu AI, you can group test builds with build tags. Add a `buildTags` capability with your tag names to a test, run it, then group and filter builds by those tags on the Automation Dashboard.

### Create Build Tags

---

Pass a `buildTags` capability with a String array of tag names inside `LT:Options`.

While building your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `buildTags` capability to a String array of the tag names you want on the build:

<VerifiedTag value="Verified" />

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

---

Follow these limits when creating build tags to avoid unexpected behavior.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

### Filter Tests Using Build Tags

---

Filter the Builds list by your build tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Build Tags**. Choose one or more of your build tags to show only the builds that carry them; selecting several combines them.

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-build-tags.webp').default} alt="Build Tags filter on the Builds list showing build tag values to filter builds by" width="1601" height="890" className="doc_img"/>

To filter by tags set on individual tests instead, use the **Test Tags** filter. See [Group Tests Using Custom Tags](#group-tests-using-custom-tags) and [Filter and Sort Builds](#filter-and-sort-builds).

## Split Builds with Build Inactivity Time
---
Build Splitting lets you organize tests by controlling how they group into builds. The **Build Active Duration** setting (previously **Build Inactivity Time**) defines how long a build stays active. Tests that share the same build name and run while the build is active are grouped into the same build. A test with that build name that runs after the active duration starts a new build.

### How It Works

---

Build Active Duration separates tests into distinct builds based on how long a build stays active.

Previously, tests that shared the same build name kept merging into a single build, making it difficult to separate runs from different sessions. Setting a Build Active Duration keeps each session's tests in its own build.

For example, if the Build Active Duration is set to 6 hours, tests with the same build name that run within that active window are grouped into the same build. Once the 6-hour window passes, the next test with that build name appears under a new build.

### Set the Build Active Duration

---

Follow these steps to configure Build Active Duration for your account.

:::info Note
1. By default, the Build Active Duration is six hours.
2. Every user within the organization can set their own Build Active Duration.
:::

1. Log in to your TestMu AI account. Don't have an account? [Sign up for free](https://www.testmuai.com/register/).

2. Open **Account Settings > Product Preferences** and select **Automation**.

3. Under **Builds**, set the **Build Active Duration** to your preferred interval.

<img loading="lazy" src={require('../assets/images/build-split/build-active-duration.webp').default} alt="TestMu AI Account Settings Product Preferences showing the Build Active Duration dropdown under Automation" className="doc_img" width="1920" height="927"/>

Once you save your preference, a confirmation notification appears: *Build Time updated successfully.*

## Edit Individual Test Details
---
Edit a test from the dashboard after a run, or mark its status and rename it during execution using JavascriptExecutor hooks.

You can modify individual test details on TestMu AI, either from the Automation Dashboard after a run or programmatically during execution. The following covers editing a test from the dashboard, marking test status, and renaming tests.

### Edit Test Details from the Dashboard

---

Rename a test, change its status, or add a remark after a run, directly from the Automation Dashboard.

1. Open the test's detail page, click the **…** (options) menu in the top-right of the test summary, and select **Edit Test**.

<img loading="lazy" src={require('../assets/images/uploads/edit-test-menu.webp').default} alt="Test detail options menu with Edit Test highlighted" width="1920" height="399" className="doc_img"/>

2. In the **Edit Test** dialog, update the **Name**, **Status**, or **Remark**, then click **Save Changes**.

<img loading="lazy" src={require('../assets/images/uploads/edit-test-modal.webp').default} alt="Edit Test dialog with Name, Status, and Remark fields and a Save Changes button" width="1920" height="819" className="doc_img"/>

To set the status or name programmatically during the run instead, use the hooks below.

### Mark Test Status as Pass or Fail

---

Use the `lambda-status` hook to explicitly set a test's status on the dashboard.

When you run Selenium tests on the TestMu AI grid, a test that your local assertions marked as failed may show as completed on the dashboard. Use the `lambda-status` hook to explicitly set the correct status.

You can set these status values: `passed`, `failed`, `skipped`, `ignored`, `unknown`, `error`.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
// Mark test as passed
((JavascriptExecutor) driver).executeScript("lambda-status=passed");

// Mark test as failed
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
// Mark test as passed
await driver.executeScript('lambda-status=passed');

// Mark test as failed
await driver.executeScript('lambda-status=failed');
```

</TabItem>

<TabItem value="python" label="Python">

```python
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
// Mark test as passed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=passed");

// Mark test as failed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=failed");
```

</TabItem>

<TabItem value="php" label="PHP">

```php
// Mark test as passed
$driver->executeScript("lambda-status=passed");

// Mark test as failed
$driver->executeScript("lambda-status=failed");
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

</TabItem>

</Tabs>

:::tip
Place the `lambda-status` call inside your test's teardown or `@AfterMethod` block so the status is set before the session ends. For the full list of Lambda Hooks, see Lambda Hooks.
:::

### Rename Your Test

---

Pass a new name through `lambda-name` in JavascriptExecutor to rename a running test.

You can rename a running test to reflect dynamic data such as iteration count or data-driven parameters. Pass the new name through JavascriptExecutor:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor) driver).executeScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
await driver.executeScript('lambda-name=Your_test_name');
```

</TabItem>

<TabItem value="python" label="Python">

```python
driver.execute_script("lambda-name=Your_test_name")
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="php" label="PHP">

```php
$driver->executeScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
driver.execute_script("lambda-name=Your_test_name")
```

</TabItem>

</Tabs>

## Share Test Results
---
Share a test directly from the dashboard, or retrieve its Session ID and build a shareable URL for its logs or execution video.

TestMu AI lets you share individual test results with team members. Share directly from the Automation Dashboard, or build a shareable URL programmatically from the Session ID.

### Share from the Dashboard

---

Send a test's results to teammates directly from the Automation Dashboard.

1. Open the test's detail page, click the **…** (options) menu in the top-right of the test summary, and select **Share**.

2. In the **Share** dialog, set the **Expiry Duration**, enter one or more recipient **email IDs**, and add an optional message. Click **Invite** to email the link, or **Copy Link** to share it yourself.

<img loading="lazy" src={require('../assets/images/uploads/share-test-modal.webp').default} alt="Share dialog with expiry duration, email recipients, message field, and Copy Link and Invite buttons" width="1920" height="924" className="doc_img"/>

To generate a shareable URL programmatically instead, use the Session ID method below.

### Get the Session ID

---

Retrieve the unique Session ID from your test script in your preferred language.

Every test session on TestMu AI has a unique Session ID. Use the code below to retrieve it in your preferred language:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
import org.openqa.selenium.remote.SessionId;

SessionId session = ((RemoteWebDriver) driver).getSessionId();
System.out.println("Session ID: " + session.toString());
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
const session = await driver.getSession();
console.log("Session ID: " + session.getId());
```

</TabItem>

<TabItem value="python" label="Python">

```python
session_id = driver.session_id
print("Session ID: " + session_id)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var sessionId = ((RemoteWebDriver)driver).SessionId;
Console.WriteLine("Session ID: " + sessionId);
```

</TabItem>

<TabItem value="php" label="PHP">

```php
$sessionId = $driver->getSessionID();
echo "Session ID: " . $sessionId;
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
session_id = driver.session_id
puts "Session ID: #{session_id}"
```

</TabItem>

</Tabs>

Once you have the Session ID, share the automation logs URL with your colleague:

```
https://automation.lambdatest.com/logs/?sessionID=YOUR_SESSION_ID
```

### Share Your Test Execution Video

---

Build a public video URL from the test's TestID/SessionID and an AUTH_TOKEN.

You can share a video recording of any test execution. Build the URL in the following format:

```
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

#### Get Your TestID or SessionID

---

If you did not capture the ID from your script as shown above, you can also read it from the dashboard. Open the test on the **Automation Dashboard**. In the test summary, click the **Test ID** button to copy the test's ID, then use it as the `testID` in the URL above.

<img loading="lazy" src={require('../assets/images/uploads/get-test-id.webp').default} alt="Test detail page with the Test ID button highlighted in the test summary" width="1597" height="892" className="doc_img"/>

For example, if your SessionID is `HJKXM-RHZL1-SVPWY-AB8X6`, the URL becomes:

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=AUTH_TOKEN
```

#### Generate the AUTH_TOKEN

---

Create the AUTH_TOKEN by computing an MD5 hash of your `username:access_key` string.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
MessageDigest m = MessageDigest.getInstance("MD5");
String s = "username:access_key";
m.update(s.getBytes(), 0, s.length());
System.out.println("MD5: " + new BigInteger(1, m.digest()).toString(16));
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
var crypto = require('crypto');
var token = crypto.createHash('md5').update("username:access_key").digest("hex");
console.log("AUTH_TOKEN: " + token);
```

</TabItem>

<TabItem value="python" label="Python">

```python
import hashlib
token = hashlib.md5("username:access_key".encode('utf-8')).hexdigest()
print("AUTH_TOKEN: " + token)
```

</TabItem>

<TabItem value="csharp" label="C#">

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

</TabItem>

<TabItem value="php" label="PHP">

```php
$token = md5("username:access_key");
echo "AUTH_TOKEN: " . $token;
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
require 'digest'
token = Digest::MD5.hexdigest("username:access_key")
puts "AUTH_TOKEN: #{token}"
```

</TabItem>

</Tabs>

For example, if the generated AUTH_TOKEN is `331k534uf3toef`, the final URL becomes:

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=331k534uf3toef
```

:::note
You must be logged into TestMu AI to access the sharing URL.
:::

* * *

## Command Annotations
---
Log custom annotations from your test script to the Automation Dashboard command logs.

Your test script holds important details about the test, like its description, when different scenarios start and finish, and other data you may want to show on the console for debugging and tracking purposes.

By using command annotations, you can integrate configurations in your tests that log this information on TestMu AI. These logs are available on the TestMu AI Automation Dashboard alongside the command logs, providing a quick way to search and navigate to a specific test section and troubleshoot any failed tests.

### Sending Logs to TestMu AI Using JavaScriptExecutor
---
Use the JavaScriptExecutor to send annotations directly from your test script to the dashboard.

You can send annotations to TestMu AI directly from your test script using the annotate action through the JavaScriptExecutor.

Here is an example written in Java:

<VerifiedTag value="Verified" />

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"stepcontext\", \"arguments\": {\"data\": \"<any string>\", \"level\": \"<info/warn/debug/error>\"}}");
```

The annotation call takes two arguments, `data` and `level`:

* **data**: Accepts a value in string data type.

* **level**: Accepts the standard log severity levels: info, debug, warn, and error. This argument is optional with the default value of info.

### Searching and Filtering
---
Locate and filter your annotated logs in the All Commands tab on the Automation Dashboard.

Once your test script has sent command annotations to TestMu AI, you can locate all the annotations pushed to the logs in the **All Commands** tab on the TestMu AI Automation Dashboard. This search feature is especially useful for long-duration test sessions. Additionally, you can filter these annotated logs based on severity levels and customize the selection according to your logging patterns.

<img loading="lazy" src={require('../assets/images/command-annotations/command-annotations.webp').default} alt="All Commands tab showing stepcontext annotations grouped as Loading the To-Do app and Marking checkboxes, with the Test Context filter" width="1445" height="773" className="doc_img"/>

## Add Custom Metadata With customData
---
Associate extra metadata such as Jira tickets, PR links, and test IDs with your test runs.

Where command annotations log messages during a run, the `customData` capability attaches structured metadata to the test itself. It allows you to associate additional metadata with test runs, enabling better traceability, debugging, and reporting. This metadata can include information like issue tracker links, test case IDs, and other critical test context. By embedding this metadata in test configurations, your team can integrate with existing tools and workflows, such as GitHub, Jira, or any test management system.

### How to Add Custom Metadata for Running Automation Tests on TestMu AI
---
Add the `customData` capability to your test script with the metadata fields you need.

To add custom metadata in your automation tests, add the capability `customData` in your test script with all the metadata information that we support:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="Java" label="Java" default>

```java title="Test.java"
ltOptions.put("customData", new HashMap<String, Object>() {{
    put("jiraTicket", "JIRA-12345");
    put("githubPR", "https://github.com/organization/repo/pull/678");
    put("testDescription", "This test validates login functionality under high load.");
}});
```

</TabItem>

<TabItem value="Node.js" label="Node.js" default>

```javascript title="Test.js"
"LT:Options": {
  "customData": {
    "jiraTicket": "JIRA-12345",
    "githubPR": "https://github.com/organization/repo/pull/678",
    "testDescription": "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="TypeScript" label="TypeScript" default>

```typescript title="Test.ts"
"LT:Options": {
  customData: {
    jiraTicket: "JIRA-12345",
    githubPR: "https://github.com/organization/repo/pull/678",
    testDescription: "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="PHP" label="PHP" default>

```php title="Test.php"
"LT:Options" => [
  "customData" => [
    "jiraTicket" => "JIRA-12345",
    "githubPR" => "https://github.com/organization/repo/pull/678",
    "testDescription" => "This test validates login functionality under high load."
  ]
]
```
</TabItem>

<TabItem value="Python" label="Python" default>

```python title="Test.py"
"LT:Options": {
  "customData": {
    "jiraTicket": "JIRA-12345",
    "githubPR": "https://github.com/organization/repo/pull/678",
    "testDescription": "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="C#" label="C#" default>

```csharp title="Test.cs"
ltOptions.Add("customData", new Dictionary<string, object>{
  { "jiraTicket", "JIRA-12345" },
  { "githubPR", "https://github.com/organization/repo/pull/678" },
  { "testDescription", "This test validates login functionality under high load." }
});
```
</TabItem>

<TabItem value="Ruby" label="Ruby" default>

```ruby title="Test.rb"
"LT:Options" => {
  customData: {
    jiraTicket: "JIRA-12345",
    githubPR: "https://github.com/organization/repo/pull/678",
    testDescription: "This test validates login functionality under high load."
  }
}
```
</TabItem>

</Tabs>

### Use Cases for `customData`
---
See how teams use the customData capability in different testing workflows.

#### 1. Enhanced Reporting With GitHub and Jira Links

---

**Scenario:** A QA team wants to include direct links to GitHub pull requests or Jira issues related to a test. This helps developers and testers quickly access related code changes or tasks when a test fails.

<VerifiedTag value="Verified" />

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

---

**Scenario:** The team uses a test management tool (e.g., TestRail, Zephyr) to manage test cases. Adding the test case ID ensures results link back to the test plan.

<VerifiedTag value="Verified" />

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

---

**Scenario:** When debugging test failures, include information about the environment or build being tested.

<VerifiedTag value="Verified" />

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

---

**Scenario:** A product manager wants test results linked to specific user stories or features for tracking progress on new functionality.

<VerifiedTag value="Verified" />

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

---

**Scenario:** A test depends on third-party APIs or integrations, and tracking the versions or configurations of these dependencies is critical.

<VerifiedTag value="Verified" />

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

---

**Scenario:** A DevOps team wants to include pipeline-specific metadata in the test report to track CI/CD execution details.

<VerifiedTag value="Verified" />

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
---
Review these constraints before using the customData capability.

- **Payload Size:** The `customData` capability is limited to 1 KB of JSON data. Larger payloads are not accepted.
  - Use concise key names and avoid unnecessary fields.
  - Prioritize critical metadata to stay within the limit.

- **Readability:** Adding too many fields may reduce the readability of the metadata. Be selective in the information you include.

### Best Practices
---
Follow these guidelines to get the most out of your custom metadata.

- **Keep Metadata Concise:** Use meaningful but short key names and values.
- **Align With Workflows:** Structure customData to integrate with tools like GitHub, Jira, and test management systems.
- **Validate Data Size:** Include a validation step in your scripts to ensure the payload is under 1 KB.
- **Automate Metadata Generation:** Use scripts or CI/CD tools to dynamically populate customData fields, reducing manual effort.

## Mark as Bug
---
Report UI observations from a test session to Jira, Azure DevOps, Airbrake, and other tools without leaving TestMu AI.

**Mark as Bug** lets you file a bug directly from an automation test session into your connected project management or issue-tracking tool (such as Jira, Azure DevOps, or Airbrake) without leaving TestMu AI. Add the details, pick the project, and the issue is created with the test context attached.

### How to Mark as Bug in Automation Testing
---
Log a bug directly from a test session to your integrated issue tracker.

1. Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), select a build, and open a test to view its detail page.

2. Click the **…** (options) menu in the top-right of the test summary and select **Create an issue**.

<img loading="lazy" src={require('../assets/images/uploads/test-options-menu.webp').default} alt="Test detail options menu showing Create an issue, Edit Test, Share, and Delete" width="1920" height="929" className="doc_img"/>

3. In the **Create an Issue** dialog, use **Switch App** to choose your connected issue tracker (for example, Jira, Airbrake, or Azure DevOps), select the **Project**, add the issue details under the **Issue Tracker** and **Other Details** tabs, then click **Create Issue**.

<img loading="lazy" src={require('../assets/images/mark-as-bug-in-automation-testing/create-issue-modal.webp').default} alt="Create an Issue dialog showing the connected issue tracker app, project selector, and Create Issue button" width="1920" height="939" className="doc_img"/>

The issue is created in the connected tool with the test details attached. The app appears here only if you have an issue-tracker integration configured for your account.

>You can now filter, tag, split, edit, annotate, log bugs, and share your Selenium tests and builds from the automation dashboard. If you have any questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

## Next Steps
---

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Inside the TestMu Platform](/support/docs/inside-testmu-platform/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Organizing Selenium Tests and Builds
      </span>
    </li>
  </ul>
</nav>
