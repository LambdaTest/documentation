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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LambdaTest Capability Map to Migrate from BrowserStack & SauceLabs
---

Switching automation platforms can seem challenging, but a clear capability comparison helps simplify the decision and migration process. Teams often explore alternative testing platforms to improve speed, scalability, test coverage, and overall efficiency in their delivery pipelines. 

LambdaTest provides a cloud-based test execution environment that supports various automation frameworks, real device testing, visual validations, debugging tools, and analytics, making it a flexible option for organizations aiming to optimize and modernize their testing workflows.


## Authentication & LambdaTest Hub Configuration

To migrate your automation tests from BrowserStack or Sauce Labs to LambdaTest, you must add LambdaTest authentication credentials and configure the execution hub endpoint.

### Add Authentication Credentials
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on LambdaTest Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on LambdaTest, visit the [LambdaTest signup page](https://accounts.lambdatest.com/register) and create a new account.



When migrating your test from BrowserStack or Sauce Labs to LambdaTest, the following updates are required in your existing code:

1.  <b>Get LambdaTest Credentials</b>: You can find these credentials under Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.



2. <b>Create .env file</b>: Securely store your LambdaTest credentials, create a .env file in the root of your project and add the following values:

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for LambdaTest execution.


### Add LambdaTest Hub URL
Next, you need to add the LambdaTest Hub URL to your test suite configuration. This endpoint defines where the tests will be executed on the LambdaTest Grid.

```js
@hub.lambdatest.com/wd/hub
```


## Migrating from BrowserStack to LambdaTest


Switching between cloud-based automation platforms may require capability evaluation, test configuration updates, and CI/CD integration mapping. A side-by-side comparison helps simplify this transition by clarifying feature coverage, execution options, testing frameworks, and platform-level differences.


LambdaTest can serve as an alternative to BrowserStack for teams seeking improved execution speed, parallel scalability, cost-efficiency, advanced debugging, and deeper analytics for test optimization. With support for a wide range of automation frameworks, device coverage, and performance-focused orchestration, LambdaTest enables smoother migration for teams modernizing their testing infrastructure.

Below are the capabilities of BrowserStack and LambdaTest to help teams map BrowserStack features to their LambdaTest equivalents.





<Tabs className="docs__val">

<TabItem value="ios" label="BrowserStack Capabilities" default>

```js
MutableCapabilities capabilities = new MutableCapabilities();
HashMap<String, Object> bstackOptions = new HashMap<String, Object>();
capabilities.setCapability("browserName", "Safari");
bstackOptions.put("os", "OS X");
bstackOptions.put("osVersion", "Tahoe");
bstackOptions.put("browserVersion", "26.0");
bstackOptions.put("userName", "YOUR_USERNAME");
bstackOptions.put("accessKey", "YOUR_ACCESS_KEY");
capabilities.setCapability("bstack:options", bstackOptions);
```

</TabItem>

<TabItem value="android" label="LambdaTest Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```
</TabItem>

</Tabs>


To migrate your test suites from BrowserStack, checkout this guide on [Migrating from BrowserStack to LambdaTest](https://www.lambdatest.com/support/docs/browserstack-to-lambdatest-migration-guide/).

## Migrating from Sauce Labs to LambdaTest

Switching between cloud-based test execution platforms can involve configuration updates, capability adjustments, and integration alignment. A capability comparison makes this transition more seamless by helping teams understand feature availability, execution models, and tooling compatibility. 

LambdaTest can be adopted as an alternative to Sauce Labs for organizations looking to enhance performance, scale automation workloads efficiently, and streamline debugging and reporting within their CI/CD pipelines.



Below are the capabilities of Sauce Labs and LambdaTest to help teams map Sauce Labs features to their LambdaTest equivalents.


<Tabs className="docs__val">

<TabItem value="ios" label="Sauce Labs Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 15");
browserOptions.setBrowserVersion("latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
```

</TabItem>

<TabItem value="android" label="LambdaTest Capabilities" default>

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```
</TabItem>

</Tabs>

To migrate your test suites from Sauce Labs, checkout this guide on [Migrating from Sauce Labs to LambdaTest](https://www.lambdatest.com/support/docs/saucelabs-to-lambdatest-migration-guide/).

:::tip 
To generate capabilities use [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.



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
