---
id: environment-variables
title: Using Environment Variables For Authentication Credentials
hide_title: true
sidebar_label: Set Up Environment Variables
description: Find out how to get access to TestMu AI authentication credentials, fetching them from the Automation tab in your TestMu AI profile, and configuring them on Mac OSX/Linux, Windows systems.
keywords:
- TestMu AI automation
- TestMu AI environment variables
- TestMu AI setup
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

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

# Using Environment Variables For Authentication Credentials
***

To provide you with a secure [cross-browser testing](https://www.lambdatest.com) environment on-cloud, we recommend integrating <BrandName /> Authentication Credentials in your test scripts. This would allow our cloud servers to establish a secure connection between your local system and our [cloud-based Selenium Grid](https://www.lambdatest.com/selenium-automation). This document will help you understand how to set up your <BrandName /> authentication credentials as environment variables for your respective operating system. This set up would also help authenticate your colleague's test cases when executed against an individual account.

## Where To Find <BrandName /> Authentication Credentials?
***

<BrandName /> Authentication Credentials consists of two fields:

1. <BrandName /> Username
2. <BrandName /> Access Key

>You can find these authentication credentials by either visiting the [Automation Dashboard](https://automation.lambdatest.com) or your [<BrandName /> Profile](https://accounts.lambdatest.com/detail/profile).

### Fetching Authentication Credential From The Automation Tab
***

**Step 1**: Visit the Automation tab from the left navigation menu.

**Step 2**: Click on the key icon from the top-right corner of your screen and copy the Access Key and Username.

<img loading="lazy" src={require('../assets/images/environment-variables/dashboard-access-key.webp').default} alt="Image" width="1919" height="878" className="doc_img"/>

### Fetching Authentication Credential From Your <BrandName /> Profile
***

**Step 1**: Visit your <BrandName /> Profile by clicking on the user icon on the top-right followed by clicking on Profile.

<img loading="lazy" src={require('../assets/images/environment-variables/environment-variable-2.webp').default} alt="Image" width="1363" height="544" className="doc_img"/>

**Step 2**: You will find your Username & Access Key.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/env-variable/environment-variables-3.webp').default} alt="Image" width="521" height="268" className="doc_img"/>

## Configuring Environment Variables On Mac OSX/Linux Systems
***

**Step 1**: Open your terminal mode, and provide the command `vi ~/.bash_profile` & hit **Enter**.

**Step 2**: To perform text-insertion into your profile, you would need to press the **i** button from your keyboard.

**Step 3**: Feed <BrandName /> Authentication credentials using the code below:

<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`$ export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$ export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>
        

**Step 4**: Hit **Esc** once you have entered the above lines into your Profile.

**Step 5**: Long-press the **Shift** button & hit **Z** twice (z z) to save your file and quit vi.

**Step 6**: Enter `source ~/.bash_profile` into the terminal.

## Configuring Environment Variables On Windows Operating Systems
***

**Step 1**: Right-click on the **Computer** icon to access your Computer **Properties**. You could also follow the path `(Control Panel\All Control Panel Items\System)` into your computer address bar.

**Step 2**: Go to **Advanced system settings** & click on **Environment Variables**.

<img loading="lazy" src={require('../assets/images/environment-variables/environment-variables-4.webp').default} alt="Image" width="1365" height="722" className="doc_img"/>

**Step 3**: You will notice a dialog would prompt open for the **Environment Variables**. Now, click on **New** under the **System variables**.

**Step 4**: Enter `LT_USERNAME` as the **Variable name** & provide your `TestMu AI Username` as the **Variable value**.

**Step 5**: Hit **Ok** & repeat the steps for adding `TestMu AI Access Key` as another **System Environment Variable**.

## Incorporating Environment Variable In Selenium Automation Scripts

Now that we have set up our <BrandName /> Authentication Credentials as System Environment Variables, we need to incorporate them in our [Selenium automation](https://www.lambdatest.com/selenium-automation) scripts for invoking your automation test suites on <BrandName /> Selenium Grid. In this section, you will learn how to reference environment variables for different programming languages with respect to <BrandName /> Selenium Grid.

### Java
***

- For **JUnit** & **TestNG**:

```
  lambdatestUserName = System.getenv("LT_USERNAME");
  lambdatestAccessKey = System.getenv("LT_ACCESS_KEY");
```

### Python
***

- For **PyTest** & **unittest**:
```
lambdatest_username = os.environ["LT_USERNAME"]
lambdatest_access_key = os.environ["LT_ACCESS_KEY"]
```

### NodeJS
***

- For **Mocha-Chai** & **Jasmine-Chai**:

```
let username = process.env.LT_USERNAME,
accessKey = process.env.LT_ACCESS_KEY,
```

- For **Protractor-Jasmine**:

```
exports.config = {
          lambdatestUser: process.env.LT_USERNAME,
          lambdatestKey: process.env.LT_ACCESS_KEY
        }
```

### Ruby
***

- For **RSpec**:

```
        username: ENV['LT_USERNAME'],
        accessKey: ENV['LT_ACCESS_KEY']
```

### C#
***

- For **NUnit**:

```
var lambdatestUserName =
    Environment.GetEnvironmentVariable("LT_USERNAME", EnvironmentVariableTarget.User);     
var lambdatestAccessKey =
    Environment.GetEnvironmentVariable("LT_ACCESS_KEY", EnvironmentVariableTarget.User);
```

### PHP
***

- For **Behat**:

```
$user = getenv('LT_USERNAME')
$accesskey = getenv('LT_ACCESS_KEY')
```

> If you come across any issues during the setup, you can let us know. Our Support team is available <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7**</span>. You can also mail us at **support@testmu.ai**.

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
