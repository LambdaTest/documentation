---
id: sharing-test-results
title: Sharing Test Results on TestMu AI
sidebar_label: Share Test Results
description: Share individual test results and execution videos with team members using Session ID and auth tokens.
keywords:
  - share selenium test results
  - get session id selenium
  - share test execution video
  - automation test result URL
  - generate auth token MD5
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/sharing-test-results/
site_name: TestMu AI
slug: sharing-test-results/
canonical: https://www.testmu.ai/support/docs/sharing-test-results/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Sharing Test Result",
          "item": `${BRAND_URL}/support/docs/sharing-test-results/`
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
      "@id": "https://www.testmuai.com/support/docs/sharing-test-results/"
    },
    "headline": "Sharing Test Results on TestMu AI",
    "description": "Share individual test results and execution videos with team members using Session ID and auth tokens.",
    "url": "https://www.testmuai.com/support/docs/sharing-test-results/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "share selenium test results",
      "get session id selenium",
      "share test execution video"
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
        "name": "Step 2 - Generate the AUTH_TOKEN (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "MessageDigest m = MessageDigest.getInstance(\"MD5\");\nString s = \"username:access_key\";\nm.update(s.getBytes(), 0, s.length());\nSystem.out.println(\"MD5: \" + new BigInteger(1, m.digest()).toString(16));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2 - Generate the AUTH_TOKEN (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "var crypto = require('crypto');\nvar token = crypto.createHash('md5').update(\"username:access_key\").digest(\"hex\");\nconsole.log(\"AUTH_TOKEN: \" + token);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2 - Generate the AUTH_TOKEN (Python)",
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Share Your Test Execution Video",
      "description": "Build a shareable URL using the TestID/SessionID and an MD5-generated auth token. You can share a video recording of any test execution. Build the URL in the following format:",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1 - Get Your TestID or SessionID",
          "text": "Go to the Automation Dashboard and click on the test whose ID you need. Click the \"i\" button on the status bar to access the test metadata. After clicking the \"i\" button, you will see the test metadata including the SessionID. For example, if your SessionID is HJKXM-RHZL1-SVPWY-AB8X6, the URL becomes:",
          "url": "https://www.testmuai.com/support/docs/sharing-test-results/#step-1---get-your-testid-or-sessionid"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2 - Generate the AUTH_TOKEN",
          "text": "Create the AUTHTOKEN by computing an MD5 hash of your username:accesskey string. For example, if the generated AUTH_TOKEN is 331k534uf3toef, the final URL becomes: You must be logged into TestMu AI to access the sharing URL. Home Support Sharing Test Result",
          "url": "https://www.testmuai.com/support/docs/sharing-test-results/#step-2---generate-the-auth_token"
        }
      ]
    }
  ]) }}
/>

# Sharing Test Results on TestMu AI

* * *

TestMu AI lets you share individual test results with team members. Retrieve the Session ID from your test script, then build a shareable URL for automation logs or execution videos.

## Get the Session ID
---
Retrieve the Selenium Session ID programmatically so you can build shareable result URLs.

Every test session on TestMu AI has a unique Session ID. Use the code below to retrieve it in your preferred language:

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

<VerifiedTag value="Verified" />

```
https://automation.lambdatest.com/logs/?sessionID=YOUR_SESSION_ID
```

## Share Your Test Execution Video
---
Build a shareable URL using the TestID/SessionID and an MD5-generated auth token.

You can share a video recording of any test execution. Build the URL in the following format:

<VerifiedTag value="Verified" />

```
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

### Step 1 - Get Your TestID or SessionID

Go to the **Automation Dashboard** and click on the test whose ID you need. Click the **"i"** button on the status bar to access the test metadata.

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-2.webp').default} alt="Automation dashboard showing test details" width="768" height="373" className="doc_img"/>

After clicking the **"i"** button, you will see the test metadata including the SessionID.

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-1.webp').default} alt="Test metadata with SessionID" width="768" height="373" className="doc_img"/>

For example, if your SessionID is `HJKXM-RHZL1-SVPWY-AB8X6`, the URL becomes:

<VerifiedTag value="Verified" />

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=AUTH_TOKEN
```

### Step 2 - Generate the AUTH_TOKEN

Create the AUTH_TOKEN by computing an MD5 hash of your `username:access_key` string.

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

<VerifiedTag value="Verified" />

```
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=331k534uf3toef
```

:::note
You must be logged into TestMu AI to access the sharing URL.
:::

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
        Sharing Test Result
      </span>
    </li>
  </ul>
</nav>
