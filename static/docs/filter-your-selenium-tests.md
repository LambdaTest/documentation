# How to Filter Your Selenium Automation Tests

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

executeScript(\"lambda-status=passed\");\n\n// Mark test as failed\n$driver->executeScript(\"lambda-status=failed\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "# Mark test as passed\ndriver.execute_script(\"lambda-status=passed\")\n\n# Mark test as failed\ndriver.execute_script(\"lambda-status=failed\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass the new name through JavascriptExecutor (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename Your Test (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await driver.executeScript('lambda-name=Your_test_name');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename Your Test (Python)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "driver.execute_script(\"lambda-name=Your_test_name\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "((IJavaScriptExecutor)driver).ExecuteScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$driver->executeScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "driver.execute_script(\"lambda-name=Your_test_name\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use the code below to retrieve it in your preferred language (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import org.openqa.selenium.remote.SessionId;\n\nSessionId session = ((RemoteWebDriver) driver).getSessionId();\nSystem.out.println(\"Session ID: \" + session.toString());"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get the Session ID (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const session = await driver.getSession();\nconsole.log(\"Session ID: \" + session.getId());"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get the Session ID (Python)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "session_id = driver.session_id\nprint(\"Session ID: \" + session_id)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var sessionId = ((RemoteWebDriver)driver).SessionId;\nConsole.WriteLine(\"Session ID: \" + sessionId);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$sessionId = $driver->getSessionID();\necho \"Session ID: \" . $sessionId;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "session_id = driver.session_id\nputs \"Session ID: #{session_id}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Once you have the Session ID, share the automation logs URL with your colleague",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://automation.lambdatest.com/logs/?sessionID=YOUR_SESSION_ID"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Build the URL in the following format",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example, if your SessionID is HJKXM-RHZL1-SVPWY-AB8X6, the URL becomes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=AUTH_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate the AUTH_TOKEN (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "MessageDigest m = MessageDigest.getInstance(\"MD5\");\nString s = \"username:access_key\";\nm.update(s.getBytes(), 0, s.length());\nSystem.out.println(\"MD5: \" + new BigInteger(1, m.digest()).toString(16));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate the AUTH_TOKEN (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "var crypto = require('crypto');\nvar token = crypto.createHash('md5').update(\"username:access_key\").digest(\"hex\");\nconsole.log(\"AUTH_TOKEN: \" + token);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate the AUTH_TOKEN (Python)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import hashlib\ntoken = hashlib.md5(\"username:access_key\".encode('utf-8')).hexdigest()\nprint(\"AUTH_TOKEN: \" + token)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(\"username:access_key\");\nbyte[] hashBytes = System.Security.Cryptography.MD5.Create().ComputeHash(inputBytes);\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < hashBytes.Length; i++)\n{\n    sb.Append(hashBytes[i].ToString(\"X2\"));\n}\nConsole.WriteLine(\"AUTH_TOKEN: \" + sb.ToString());"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$token = md5(\"username:access_key\");\necho \"AUTH_TOKEN: \" . $token;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "require 'digest'\ntoken = Digest::MD5.hexdigest(\"username:access_key\")\nputs \"AUTH_TOKEN: #{token}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example, if the generated AUTH_TOKEN is 331k534uf3toef, the final URL becomes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=331k534uf3toef"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Organizing Your Selenium Tests and Builds

You can filter your tests on TestMu AI using the various filters available on the automation dashboard. On each of the tabs available on the automation dashboard (Timeline, Automation Logs, and Analytics), a _filter toolbar_ helps you filter your tests based on selected values. This document explains the filter toolbar of each tab and how you can filter your tests.

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

You can filter your Selenium tests on TestMu AI using [custom tags](/docs/group-tests-using-custom-tags/). Click on the Tags option to select the tag by which you want to filter tests. You must have used the custom tags feature earlier to use this filter.

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

>You can now filter your tests using the filter toolbar on your automation dashboard. If you have any questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).
