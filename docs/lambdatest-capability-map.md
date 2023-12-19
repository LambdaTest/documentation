---
id: capability-map
title: LambdaTest Capability Map to Migrate from BrowserStack & SauceLabs
hide_title: true
sidebar_label: LambdaTest Migration Guide
description: A quick guide on LambdaTest Capability Map to Migrate from BrowserStack & SauceLabs.
keywords:
  - migrate desired capabilities from sauce labs
  - migrate desired capabilities from browserstack
  - migrate desired capabilities from sauce labs to lambdatest
  - migrate desiredcapabilities from browserstack to lambdatest
  - how to migrate desired capabilities from sauce labs to lambdatest
  - how to migrate desired capabilities from browserstack to lambdatest

url: https://www.lambdatest.com/support/docs/lambdatest-capability-map/
site_name: LambdaTest
slug: lambdatest-capability-map/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "LambdaTest Capability Map",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-capability-map/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

# LambdaTest Capability Map to Migrate from BrowserStack & SauceLabs
---

## Introduction

Besides LambdaTest, BrowserStack and SauceLabs also offer the cloud-based Selenium Grid. Migrating your BrowserStack or Sauce Labs tests to LambdaTest requires a few tweaks in your code. In this guide, we'll look at what changes that have to be made for easy migration to LambdaTest.

## Changes to be made

---

### Authentication

Firstly, you need to change the authentication in the configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid `user_name` and `access_key` to perform tests on our cloud Grid. In case you don’t have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.

The following are the changes in the parameters:

- Username
- Access Key

You can find the `Username` and `Access Key` in the **LambdaTest Automation Dashboard**.

<img loading="lazy" src={require('../assets/images/getting-started/auth.png').default} alt="Image" width="1366" height="625" className="doc_img"/>

When migrating from BrowserStack or SauceLabs to LambdaTest, you need to make the following changes in the existing code:

1. UserName
2. AccessKey
3. Hub URL
4. Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property      | Type   | LambdaTest                                    | BrowserStack                                    | SauceLabs                                     |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| **UserName**  | String | UserName to access Selenium Grid on LambdaTest  | UserName to access Selenium Grid on BrowserStack  | UserName to access Selenium Grid on Sauce Labs  |
| **AccessKey** | String | AccessKey to access Selenium Grid on LambdaTest | AccessKey to access Selenium Grid on BrowserStack | AccessKey to access Selenium Grid on Sauce Labs |
| **Hub URL**   | String | @hub.lambdatest.com/wd/hub                    | @hub-cloud.browserstack.com/wd/hub              | ondemand.us-west-1.saucelabs.com/wd/hub       |

```bash title="Authentication"
userName = "LambdaTest_UserName"
accessKey = "LambdaTest_AccessKey"
```

## Mapping of Capabilities

---

The following capabilities from the other Cloud platforms (BrowserStack and SauceLabs) will be mapped automatically in the LambdaTest platform.

| Capabilities                   | LambdaTest       | Browserstack    | SauceLabs                    |
| ------------------------------ | ---------------- | --------------- | ---------------------------- |
| **Build name**                 | build            | buildName       | build                        |
| **Project name**               | projectName      | project         | -                            |
| **Session name/Test**          | name             | sessionName     | name                         |
| **OS (Selenium 4)**            | platformName     | os              | platformName                 |
| **OS (Selenium)**              | platform         | os              | platform                     |
| **OS version**                 | -                | osVersion       | -                            |
| **Browser version (Selenium)** | version          | browserVersion  | version                      |
| **Screen Resolution**          | resolution       | resolution      | screenResolution             |
| **Selenium version**           | selenium_version | seleniumVersion | seleniumVersion              |
| **Driver version**             | driver_version   | -               | _browser_name_+driverVersion |
| **Geo Locations**              | geoLocation      | geoLocation     | -                            |
| **Local testing**              | tunnel (bool)    | local (bool)    | tunnelIdentifier (string)    |
| **Screenshot**                 | visual           | debug           | recordScreenshots            |
| **Video Recording**            | video            | video           | recordVideo                  |
| **Time zone**                  | timezone         | timezone        | timeZone                     |
| **Console**                    | console          | consoleLogs     | extendedDebugging            |
| **Network logs**               | network          | networkLogs     | extendedDebugging            |

:::tip
You can generate capabilities for your test requirements with the help of our inbuilt 🔗 [Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/).
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        LambdaTest Capability Map
      </span>
    </li>
  </ul>
</nav>
