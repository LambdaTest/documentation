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

You can filter, search, and sort your tests and builds directly from the **Builds** list on the automation dashboard. Use the search bar to find a build by name or ID, open **Configure > Sort & Filters** to narrow the list, and use **Sort By** to order it. This document explains each option.

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

To group and filter by the tags you set in code, see [Group Tests Using Custom Tags](/docs/group-tests-using-custom-tags/) and [Group and Filter Builds Using Build Tags](/support/docs/group-and-filter-your-test-builds-using-build-tags/).

### Sort Builds

Use **Sort By** to order the list by **Date**, **Status**, or **User**, in **Ascending** or **Descending** order.

>You can now search, filter, and sort your builds from the Builds list on your automation dashboard. If you have any questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).
