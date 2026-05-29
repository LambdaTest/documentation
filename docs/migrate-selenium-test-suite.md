---
id: migrate-selenium-test-suite
title: Migrate Your Selenium Test Suite
sidebar_label: Migrate Your Test Suite
description: Migrate your local Selenium tests to TestMu AI's cloud grid. Change the hub URL, add capabilities, and run your existing suite on 3000+ browsers.
keywords:
  - migrate selenium tests
  - connect existing tests
  - selenium cloud migration
  - selenium remote webdriver
  - testmu ai integration
  - selenium hub url
  - move tests to cloud
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/migrate-selenium-test-suite/
site_name: TestMu AI
slug: migrate-selenium-test-suite/
canonical: https://www.testmuai.com/support/docs/migrate-selenium-test-suite/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Migrate Your Selenium Test Suite",
          "item": `${BRAND_URL}/support/docs/migrate-selenium-test-suite/`
        }]
      })
    }}
></script>

---

Already have Selenium tests running locally? You can run them on the TestMu AI cloud grid with three changes: swap the driver URL, add your credentials, and set the desired capabilities. Your test logic stays the same.

If you are moving from BrowserStack or Sauce Labs, use these dedicated migration guides with capability mapping tables.

- [Migrate from BrowserStack to TestMu AI](/support/docs/browserstack-to-testmu-migration-guide/) - hub URL, capability mapping, and feature equivalents
- [Migrate from Sauce Labs to TestMu AI](/support/docs/saucelabs-to-testmu-migration-guide/) - hub URL, capability mapping, and feature equivalents

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. An existing Selenium test suite in any supported language (Java, JavaScript, Python, C#, PHP, or Ruby).

## Step 1: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so your tests can authenticate with the grid.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 2: Replace Your Local Driver With RemoteWebDriver
---

Point your tests to the TestMu AI hub instead of launching a local browser.

Find where your test creates the WebDriver instance and replace it with a `RemoteWebDriver` pointing to the TestMu AI hub URL:

```
https://{YOUR_USERNAME}:{YOUR_ACCESS_KEY}@hub.lambdatest.com/wd/hub
```

Here is what the change looks like in each language:

<Tabs>

<TabItem value="java" label="Java" default>

**Before (local):**
```java
WebDriver driver = new ChromeDriver();
```

**After (cloud):**
```java
String username = System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY");
String hubURL = "https://" + username + ":" + accessKey + "@hub.lambdatest.com/wd/hub";

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "My First Cloud Build");
ltOptions.put("name", "Sample Test");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);

WebDriver driver = new RemoteWebDriver(new URL(hubURL), browserOptions);
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

**Before (local):**
```javascript
const driver = new Builder().forBrowser('chrome').build();
```

**After (cloud):**
```javascript
const username = process.env.LT_USERNAME;
const accessKey = process.env.LT_ACCESS_KEY;
const hubURL = `https://${username}:${accessKey}@hub.lambdatest.com/wd/hub`;

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platformName: 'Windows 10',
    build: 'My First Cloud Build',
    name: 'Sample Test',
    w3c: true,
  }
};

const driver = new Builder()
  .usingServer(hubURL)
  .withCapabilities(capabilities)
  .build();
```

</TabItem>

<TabItem value="python" label="Python">

**Before (local):**
```python
driver = webdriver.Chrome()
```

**After (cloud):**
```python
import os
from selenium import webdriver

username = os.getenv("LT_USERNAME")
access_key = os.getenv("LT_ACCESS_KEY")
hub_url = f"https://{username}:{access_key}@hub.lambdatest.com/wd/hub"

options = webdriver.ChromeOptions()
options.platform_name = "Windows 10"
options.browser_version = "latest"

lt_options = {
    "build": "My First Cloud Build",
    "name": "Sample Test",
    "w3c": True,
}
options.set_capability("LT:Options", lt_options)

driver = webdriver.Remote(command_executor=hub_url, options=options)
```

</TabItem>

<TabItem value="csharp" label="C#">

**Before (local):**
```csharp
IWebDriver driver = new ChromeDriver();
```

**After (cloud):**
```csharp
string username = Environment.GetEnvironmentVariable("LT_USERNAME");
string accessKey = Environment.GetEnvironmentVariable("LT_ACCESS_KEY");
string hubURL = $"https://{username}:{accessKey}@hub.lambdatest.com/wd/hub";

var options = new ChromeOptions();
options.PlatformName = "Windows 10";
options.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
    { "build", "My First Cloud Build" },
    { "name", "Sample Test" },
    { "w3c", true }
};
options.AddAdditionalOption("LT:Options", ltOptions);

IWebDriver driver = new RemoteWebDriver(new Uri(hubURL), options);
```

</TabItem>

<TabItem value="php" label="PHP">

**Before (local):**
```php
$driver = ChromeDriver::start();
```

**After (cloud):**
```php
$username = getenv("LT_USERNAME");
$accessKey = getenv("LT_ACCESS_KEY");
$hubURL = "https://{$username}:{$accessKey}@hub.lambdatest.com/wd/hub";

$capabilities = [
    "browserName" => "Chrome",
    "browserVersion" => "latest",
    "LT:Options" => [
        "platformName" => "Windows 10",
        "build" => "My First Cloud Build",
        "name" => "Sample Test",
        "w3c" => true,
    ]
];

$driver = RemoteWebDriver::create($hubURL, $capabilities);
```

</TabItem>

<TabItem value="ruby" label="Ruby">

**Before (local):**
```ruby
driver = Selenium::WebDriver.for :chrome
```

**After (cloud):**
```ruby
username = ENV["LT_USERNAME"]
access_key = ENV["LT_ACCESS_KEY"]
hub_url = "https://#{username}:#{access_key}@hub.lambdatest.com/wd/hub"

options = Selenium::WebDriver::Options.chrome(
  platform_name: "Windows 10",
  browser_version: "latest",
  "LT:Options": {
    build: "My First Cloud Build",
    name: "Sample Test",
    w3c: true,
  }
)

driver = Selenium::WebDriver.for :remote, url: hub_url, capabilities: options
```

</TabItem>
</Tabs>

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities code for any browser, version, and OS combination.
:::

## Step 3: Run Your Tests
---

Execute your tests the same way you normally would. The only difference is they now run on the cloud.

```bash
# Java (Maven)
mvn test

# JavaScript (npm)
npm test

# Python (pytest)
pytest

# C# (dotnet)
dotnet test

# PHP (PHPUnit)
vendor/bin/phpunit

# Ruby (RSpec)
bundle exec rspec
```

## Step 4: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your results. Each session captures video playback, screenshots, console logs, network logs, and Selenium command logs.

## What Stays the Same
---

Everything except the driver setup. Here is what does not change when you move to the cloud.

| What | Changes? |
|------|----------|
| Test logic (assertions, flows, waits) | No |
| Page Object Models | No |
| Test framework config (TestNG XML, pytest.ini, etc.) | No |
| CI/CD pipeline commands | No |
| Driver setup (URL + capabilities) | **Yes** |
| Local browser install requirement | **Removed** |




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
        Migrate Your Selenium Test Suite
      </span>
    </li>
  </ul>
</nav>
