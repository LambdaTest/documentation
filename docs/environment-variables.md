---
id: environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Set Environment Variables
description: Set up environment variables for your username and access key on Mac, Linux, and Windows systems.
keywords:
  - set LT_USERNAME environment variable
  - selenium authentication credentials setup
  - configure access key mac linux windows
  - environment variable selenium grid
  - LT_ACCESS_KEY setup guide
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/using-environment-variables-for-authentication-credentials/
site_name: TestMu AI
slug: using-environment-variables-for-authentication-credentials/
canonical: https://www.testmuai.com/support/docs/using-environment-variables-for-authentication-credentials/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Using Environment Variables For Authentication Credentials",
          "item": `${BRAND_URL}/support/docs/using-environment-variables-for-authentication-credentials/`
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
      "@id": "https://www.testmuai.com/support/docs/using-environment-variables-for-authentication-credentials/"
    },
    "headline": "Using Environment Variables for Authentication Credentials",
    "description": "Set up environment variables for your username and access key on Mac, Linux, and Windows systems.",
    "url": "https://www.testmuai.com/support/docs/using-environment-variables-for-authentication-credentials/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "set LT_USERNAME environment variable",
      "selenium authentication credentials setup",
      "configure access key mac linux windows"
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
        "name": "Java",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  lambdatestUserName = System.getenv(\"LT_USERNAME\");\n  lambdatestAccessKey = System.getenv(\"LT_ACCESS_KEY\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "lambdatest_username = os.environ[\"LT_USERNAME\"]\nlambdatest_access_key = os.environ[\"LT_ACCESS_KEY\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NodeJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "let username = process.env.LT_USERNAME,\naccessKey = process.env.LT_ACCESS_KEY,"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NodeJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "exports.config = {\n          lambdatestUser: process.env.LT_USERNAME,\n          lambdatestKey: process.env.LT_ACCESS_KEY\n        }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "        username: ENV['LT_USERNAME'],\n        accessKey: ENV['LT_ACCESS_KEY']"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "var lambdatestUserName =\n    Environment.GetEnvironmentVariable(\"LT_USERNAME\", EnvironmentVariableTarget.User);     \nvar lambdatestAccessKey =\n    Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\", EnvironmentVariableTarget.User);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$user = getenv('LT_USERNAME')\n$accesskey = getenv('LT_ACCESS_KEY')"
      }
    ],
    "dateModified": "2026-06-02T12:20:54+05:30"
  }) }}
/>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import VerifiedTag from '@site/src/component/verifiedTag';

# Using Environment Variables for Authentication Credentials
***

To provide a secure [cross-browser testing](https://www.testmuai.com) environment on-cloud, we recommend integrating TestMu AI Authentication Credentials in your test scripts. This allows our cloud servers to establish a secure connection between your local system and our [cloud-based Selenium Grid](https://www.testmuai.com/selenium-automation/). This document shows you how to set up your TestMu AI authentication credentials as environment variables for your respective operating system. This setup also helps authenticate your colleague's test cases when executed against an individual account.

## Where to Find Authentication Credentials
---
Get your Username and Access Key from the Automation Dashboard or your profile page.

TestMu AI Authentication Credentials consist of two fields:

1. TestMu AI Username
2. TestMu AI Access Key

>You can find these authentication credentials by visiting the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) or your [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

### Fetching Authentication Credentials from the Automation Tab
---

1. Visit the Automation tab from the left navigation menu.
2. Click on the key icon from the top-right corner of your screen and copy the Access Key and Username.

<img loading="lazy" src={require('../assets/images/environment-variables/dashboard-access-key.webp').default} alt="Image" width="1919" height="878" className="doc_img"/>

### Fetching Authentication Credentials from Your Profile
---

1. Visit your TestMu AI Profile by clicking on the user icon on the top-right followed by clicking on Profile.

<img loading="lazy" src={require('../assets/images/environment-variables/environment-variable-2.webp').default} alt="Image" width="1363" height="544" className="doc_img"/>

2. You will find your Username & Access Key.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/env-variable/environment-variables-3.webp').default} alt="Image" width="521" height="268" className="doc_img"/>

## Configuring Environment Variables on Mac OSX/Linux Systems
---
Export your credentials in the bash profile to make them available across terminal sessions.

1. Open your terminal mode, and provide the command `vi ~/.bash_profile` & hit **Enter**.
2. Press the **i** button from your keyboard to perform text-insertion into your profile.
3. Feed TestMu AI Authentication credentials using the code below:

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`$ export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$ export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>
        

4. Hit **Esc** once you have entered the above lines into your Profile.
5. Long-press the **Shift** button & hit **Z** twice (z z) to save your file and quit vi.
6. Enter `source ~/.bash_profile` into the terminal.

## Configuring Environment Variables on Windows Operating Systems
---
Add your credentials as System variables through the Windows Environment Variables dialog.

1. Right-click on the **Computer** icon to access your Computer **Properties**. You can also follow the path `(Control Panel\All Control Panel Items\System)` into your computer address bar.
2. Go to **Advanced system settings** & click on **Environment Variables**.

<img loading="lazy" src={require('../assets/images/environment-variables/environment-variables-4.webp').default} alt="Image" width="1365" height="722" className="doc_img"/>

3. You will see a dialog prompt for **Environment Variables**. Click on **New** under the **System variables**.
4. Enter `LT_USERNAME` as the **Variable name** & provide your `TestMu AI Username` as the **Variable value**.
5. Hit **Ok** & repeat the steps to add `TestMu AI Access Key` as another **System Environment Variable**.

## Incorporating Environment Variables in Selenium Automation Scripts
---
Reference your environment variables in test scripts for each programming language.

Now that we have set up our TestMu AI Authentication Credentials as System Environment Variables, we need to incorporate them in our [Selenium automation](https://www.testmuai.com/selenium-automation/) scripts for invoking your automation test suites on TestMu AI Selenium Grid. This section shows you how to reference environment variables for different programming languages.

### Java
---

- For **JUnit** & **TestNG**:

<VerifiedTag value="Verified" />

```
  lambdatestUserName = System.getenv("LT_USERNAME");
  lambdatestAccessKey = System.getenv("LT_ACCESS_KEY");
```

### Python
---

- For **PyTest** & **unittest**:

<VerifiedTag value="Verified" />

```
lambdatest_username = os.environ["LT_USERNAME"]
lambdatest_access_key = os.environ["LT_ACCESS_KEY"]
```

### NodeJS
---

- For **Mocha-Chai** & **Jasmine-Chai**:

<VerifiedTag value="Verified" />

```
let username = process.env.LT_USERNAME,
accessKey = process.env.LT_ACCESS_KEY,
```

- For **Protractor-Jasmine**:

<VerifiedTag value="Verified" />

```
exports.config = {
          lambdatestUser: process.env.LT_USERNAME,
          lambdatestKey: process.env.LT_ACCESS_KEY
        }
```

### Ruby
---

- For **RSpec**:

<VerifiedTag value="Verified" />

```
        username: ENV['LT_USERNAME'],
        accessKey: ENV['LT_ACCESS_KEY']
```

### C#
---

- For **NUnit**:

<VerifiedTag value="Verified" />

```
var lambdatestUserName =
    Environment.GetEnvironmentVariable("LT_USERNAME", EnvironmentVariableTarget.User);     
var lambdatestAccessKey =
    Environment.GetEnvironmentVariable("LT_ACCESS_KEY", EnvironmentVariableTarget.User);
```

### PHP
---

- For **Behat**:

<VerifiedTag value="Verified" />

```
$user = getenv('LT_USERNAME')
$accesskey = getenv('LT_ACCESS_KEY')
```

> If you come across any issues during the setup, let us know. Our Support team is available <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7**</span>. You can also mail us at **support@testmuai.com**.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       Using Environment Variables For Authentication Credentials
      </span>
    </li>
  </ul>
</nav>
