---
id: filter-your-selenium-tests
title: How to Filter Your Selenium Automation Tests
sidebar_label: Filter Your Tests
description: Filter automation tests by date, user, build, status, tags, and environment on the dashboard.
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
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Filtering Selenium Tests",
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
    "headline": "How to Organize Your Selenium Tests and Builds",
    "description": "Filter, tag, and group Selenium tests and builds, split builds, edit test details, and share results from the automation dashboard.",
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
        "name": "Now add this custom tag in your Desired Capabilities instance",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "DesiredCapabilities caps = new DesiredCapabilities();\n.\n.\n\n// To create custom tags\ncaps.setCapability(\"tags\", customTags);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Follow the below steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// For example, when you have only 1 tag\nString[] buildTagList = {\"Build Tag\"};\n\n// For example, when you have multiple tags\nString[] buildTagList = {\"Tag 1\", \"Tag 2\", \"Tag 3\", ...};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example, while creating a sample Desired Capabilities instance in Java, the code will be",
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
        "name": "Mark Test Status as Pass or Fail (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// Mark test as passed\nawait driver.executeScript('lambda-status=passed');\n\n// Mark test as failed\nawait driver.executeScript('lambda-status=failed');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "# Mark test as passed\ndriver.execute_script(\"lambda-status=passed\")\n\n# Mark test as failed\ndriver.execute_script(\"lambda-status=failed\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mark test as failed (C#)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "// Mark test as passed\n((IJavaScriptExecutor)driver).ExecuteScript(\"lambda-status=passed\");\n\n// Mark test as failed\n((IJavaScriptExecutor)driver).ExecuteScript(\"lambda-status=failed\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mark test as failed (PHP)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "// Mark test as passed\n$driver->executeScript(\"lambda-status=passed\");\n\n// Mark test as failed\n$driver->executeScript(\"lambda-status=failed\");"
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

* * *

You can filter your tests on TestMu AI using the various filters available on the automation dashboard. On each of the tabs available on the automation dashboard (Timeline, Automation Logs, and Analytics), a _filter toolbar_ helps you filter your tests based on selected values. This document explains the filter toolbar of each tab and how you can filter your tests.

## Filtering Tests on Timeline
---
Use the filter toolbar on the Timeline tab to narrow down tests by date, user, build, and status.

When you visit the [Timeline](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline) on your automation dashboard, you can see a **Filter** icon that allows you to use different filters. 

<img loading="lazy" src={require('../assets/images/uploads/filter-tests-on-timeline.webp').default} alt="selenium test" width="1921" height="867" className="doc_img"/>

### Understanding the Filter Toolbar

* * *

Now let us see each component of this filter toolbar one by one.

### 1. Date

* * *

This option filters automation tests on your timeline based on a range of dates. Select a start date and an end date to filter tests that ran in this period. By default, it shows the range from the beginning until the current date.

<img loading="lazy" src={require('../assets/images/uploads/filter-date-1.webp').default} alt="automation log date" width="1024" height="416" className="doc_img"/>

To filter tests based on custom dates, first select the starting date from the calendar window, then select the ending date. You can see a selected range after you click on the starting date.

For example, to view tests that ran between 1st Feb - 3rd Feb, click on 1st Feb first and then on 3rd Feb.

<img loading="lazy" src={require('../assets/images/uploads/filter-date-2.webp').default} alt="automation log date" width="1024" height="416" className="doc_img"/>

Once the ending date is selected, the tests are automatically sorted based on the selected custom dates.

### 2. Users

* * *

You might have multiple team members added to your TestMu AI account. To filter tests by the member who ran them, use this option in the filter toolbar. Click on the _Users_ option to see a list of members added to your account. Select the members whose tests you want to filter, and the tests filter automatically. You can select multiple members.

<img loading="lazy" src={require('../assets/images/uploads/filter-users.webp').default} alt="automation users" width="1024" height="410" className="doc_img"/>

### 3. Build

* * *

Use this feature to see selected builds on your Timeline. Click on this option to see a list of all builds that have run. Select one or more as needed.

<img loading="lazy" src={require('../assets/images/uploads/filter_tests-4-1024x414.webp').default} alt="automation logs build" width="1024" height="414" className="doc_img"/>

### 4. Status

* * *

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
<img loading="lazy" src={require('../assets/images/uploads/filter-status.webp').default} alt="automation log status" width="1024" height="416" className="doc_img"/>

### 5. Clear Filters

* * *

Use this option to clear all applied filters. Clicking this option returns the Timeline to the default state with all filters removed.

## Filtering Tests on Automation Logs
---
Use the filter toolbar on the Automation Logs tab to filter by build, date, users, status, and tags.

When you visit the [Automation Logs](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/logs) on your automation dashboard, you also see a filter toolbar.

<img loading="lazy" src={require('../assets/images/uploads/filter-bar.webp').default} alt="automation test toolbar" width="1024" height="416" className="doc_img"/>

The components of this toolbar are:

1.  Build
2.  Date
3.  Users
4.  Status
5.  Tags
6.  Clear Filters

The Build, Date, Users, Status, and Clear Filters components behave the same as in the Timeline. Let us look at the Tags component in detail.

### Filter Tests Using Tags

* * *

You can filter your Selenium tests on TestMu AI using [custom tags](/docs/group-tests-using-custom-tags/). Click on the Tags option to select the tag by which you want to filter tests. You must have used the custom tags feature earlier to use this filter.

Here is an example showing tests filtered using the _Demo1_ custom tag:

<img loading="lazy" src={require('../assets/images/uploads/Filter-tests.webp').default} alt="automation test demo" width="1921" height="864" className="doc_img"/>

You can also filter tests based on multiple tags. Select multiple custom tags at once from the filter toolbar:

<img loading="lazy" src={require('../assets/images/uploads/Filter-tests-2.webp').default} alt="automation tag" width="1921" height="864" className="doc_img"/>

## Filtering Tests on Analytics
---
Use the filter toolbar on the Analytics tab to filter by tags, users, environment, and date range.

When you visit the [Analytics](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/analytics) on your automation dashboard, you also see a filter toolbar.

<img loading="lazy" src={require('../assets/images/uploads/filter-test-analytics.webp').default} alt="automation analytics" width="1024" height="415" className="doc_img"/>

The components of this toolbar are:

1.  Tags
2.  Users
3.  Environment
4.  Date
5.  Analytics Tab Timeline
6.  Clear Filters

The Tags, Users, Date, and Clear Filters behave the same as above. Let us look at the Environment and Analytics Tab Timeline components in detail.

### Filter Tests Using Environment

* * *

The Environment filter filters tests based on the browser and/or operating system used in the test. Refer to our [list of browsers](https://www.testmuai.com/list-of-browsers/) to understand the options available in this filter.

<img loading="lazy" src={require('../assets/images/uploads/filter_tests-8-1024x412.webp').default} alt="automation filter" width="1024" height="412" className="doc_img"/>

### Filter Tests Using Analytics Tab Timeline

* * *

The Analytics Tab Timeline option helps you quickly filter tests based on preset time periods:

*   TODAY
*   THIS WEEK
*   THIS MONTH

Select any of these, and the tests that ran in that period get filtered out.<img loading="lazy" src={require('../assets/images/uploads/filter_tests-9-1024x415.webp').default} alt="automation date" width="1024" height="415" className="doc_img"/>

By default, the _THIS WEEK_ filter is selected. You can use the Date filter instead to filter tests in a custom date period. If you select the Date filter, this filter is automatically removed.

* * *

>You can now filter your tests using the filter toolbar on your automation dashboard. If you have any questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

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
        Filtering Selenium Tests
      </span>
    </li>
  </ul>
</nav>
