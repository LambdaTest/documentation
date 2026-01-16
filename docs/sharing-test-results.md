---
id: sharing-test-results
title: Sharing Test Results on TestMu AI
hide_title: true
sidebar_label: Sharing Test Results on TestMu AI
description: This documentation will help you in sharing test results while performing automation testing on TestMu AI. You can share an instance of a single test result with a team member of your organization by retrieving the Session ID and appending it into the URL of automation logs.
keywords:
  - Share test results
  - test results
  - cross browser testing
  - share the bug
  - session report

url: https://www.testmu.ai/support/docs/sharing-test-results/
site_name: LambdaTest
slug: sharing-test-results
canonical: https://www.testmu.ai/support/docs/sharing-test-results/
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
          "name": "Sharing Test Result",
          "item": `${BRAND_URL}/support/docs/sharing-test-results/`
        }]
      })
    }}
></script>

# Sharing Test Results on <BrandName />

* * *

While performing automation testing with Selenium, the number of test cases that run in a queue or in parallel could be extensive. Finding a particular test case to share with your colleagues out of hundreds of automated test cases could sometimes be as challenging as finding a needle in a haystack. However, at <BrandName /> we have made it easier for you to share your test results so you could collaborate faster with convenience.

If you wish to share an instance of a single test result with a member of your organization then you can share it by retrieving the Session ID and appending it into the URL of automation logs.

To retrieve the Session ID use the below command.
```javascript
SessionId session = driver.getSessionId();
```

Share the below URL with respect to your Session ID.
```javascript
https://automation.lambdatest.com/logs/?sessionID=8d56iz056f7999990472j5b85k700b2o //this is a sample Session ID
```
## How To Share Your Test Execution Video?

Now you can also easily share a video of a specific test. To do so, you need to build a URL in the proper structure and share it. The correct syntax for the URL is:

```javascript
https://automation.lambdatest.com/public/video?testID={testid/sessionid}&auth=AUTH_TOKEN
```

In the above URL syntax, there are 2 variables to be filled:

1. TestID/SessionID: To get your TestID/SessionID, go to the Automation Dashboard, and click on the test whose TestID/SessionID is required. Once the test results are open, you can see the TestID/SessionID highlighted as shown in the image below. You can click the "i" button on the status bar to access the test metadata. 

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

After clicking on the "i" button, you will get the required test meta information. 

<img loading="lazy" src={require('../assets/images/uploads/sharing-test-results-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

So suppose your SessionID is HJKXM-RHZL1-SVPWY-AB8X6, then the updated URL will be:

```javascript
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=AUTH_TOKEN
```

2. AUTH_TOKEN: The AUTH_TOKEN or Authentication Token is created with the help of MD5, in the following format:
Java:

```javascript
MessageDigest m=MessageDigest.getInstance("MD5");
String s = "username:access_key";
m.update(s.getBytes(),0,s.length());
System.out.println("MD5: "+new BigInteger(1,m.digest()).toString(16));
```

**Node:**

```js
var crypto = require('crypto');
crypto.createHash('md5').update("username:access_key").digest("hex");
```

**Python**

```python
import hashlib
print(hashlib.md5("username:access_key".encode('utf-8')).hexdigest())
```

**Ruby**

```ruby
Digest::MD5.hexdigest("username:access_key")
```

**PHP**

```js
echo md5("username:access_key");
```

**C#**

```js
byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes("username:access_key");
byte[] hashBytes =   System.Security.Cryptography.MD5.Create().ComputeHash(inputBytes);
System.Text.StringBuilder sb = new System.Text.StringBuilder();
for (int i = 0; i < hashBytes.Length; i++)
{
    sb.Append(hashBytes[i].ToString("X2"));
}
base64 = sb.ToString();
```

So suppose the generated AUTH_TOKEN is 331k534uf3toef, then the updated URL will be:

```javascript
https://automation.lambdatest.com/public/video?testID=HJKXM-RHZL1-SVPWY-AB8X6&auth=331k534uf3toef
```

Make sure you are logged into <BrandName /> for accessing the sharing URL. Happy testing!

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

  
