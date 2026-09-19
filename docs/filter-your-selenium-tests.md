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

You can filter, search, and sort your tests and builds directly from the **Builds** list on the automation dashboard. Use the search bar to find a build by name or ID, open **Configure > Sort & Filters** to narrow the list, and use **Sort By** to order it. This document explains each option.

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

To group and filter by the tags you set in code, see [Group Tests Using Custom Tags](/docs/group-tests-using-custom-tags/) and [Group and Filter Builds Using Build Tags](/support/docs/group-and-filter-your-test-builds-using-build-tags/).

### Sort Builds

Use **Sort By** to order the list by **Date**, **Status**, or **User**, in **Ascending** or **Descending** order.

<img loading="lazy" src={require('../assets/images/uploads/builds-sort-by.webp').default} alt="Sort By menu with Date, Status, and User options and Ascending or Descending order" width="1600" height="713" className="doc_img"/>

* * *

>You can now search, filter, and sort your builds from the Builds list on your automation dashboard. If you have any questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

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
