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
canonical: https://www.testmuai.com/support/docs/sharing-test-results/
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

```
https://automation.lambdatest.com/logs/?sessionID=YOUR_SESSION_ID
```

## Share Your Test Execution Video
---
Build a shareable URL using the TestID/SessionID and an MD5-generated auth token.

You can share a video recording of any test execution. Build the URL in the following format:

```
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

### Step 1 - Get Your TestID or SessionID

Go to the **Automation Dashboard** and click on the test whose ID you need. Click the **"i"** button on the status bar to access the test metadata.

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-2.webp').default} alt="Automation dashboard showing test details" width="768" height="373" className="doc_img"/>

After clicking the **"i"** button, you will see the test metadata including the SessionID.

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-1.webp').default} alt="Test metadata with SessionID" width="768" height="373" className="doc_img"/>

For example, if your SessionID is `HJKXM-RHZL1-SVPWY-AB8X6`, the URL becomes:

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
