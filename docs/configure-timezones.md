---
id: configure-timezones
title: Configure Timezones for Your Tests
sidebar_label: Configure Timezones
description: Set the timezone on test VMs using the timezone capability in LT:Options for accurate locale-based testing on TestMu AI.
keywords:
  - selenium timezone capability
  - configure timezone selenium
  - timezone testing automation
  - IANA timezone selenium
  - set timezone test vm
url: https://www.testmuai.com/support/docs/configure-timezones/
site_name: TestMu AI
slug: configure-timezones/
canonical: https://www.testmuai.com/support/docs/configure-timezones/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
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
          "name": "Selenium Testing",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Configure Timezones",
          "item": `${BRAND_URL}/support/docs/configure-timezones/`
        }]
      })
    }}
></script>

Many applications display dates, schedule events, or trigger time-sensitive logic based on the user's timezone. TestMu AI lets you set the timezone on the test VM using the `timezone` capability in `LT:Options`, so you can validate timezone-dependent behavior without changing your local machine settings. The capability accepts UTC offset strings (e.g., `UTC+05:30`).

## Set the Timezone Using the `timezone` Capability
---
Pass a UTC offset string in `LT:Options` to configure the test VM's system timezone.

Add the `timezone` capability to your `LT:Options` configuration. The value is a UTC offset string in the format `UTC+HH:MM` or `UTC-HH:MM` (e.g., `UTC+05:30`). The default is `UTC+00:00`.

<Tabs className="docs__val">

<TabItem value="Java" label="Java" default>

```java title="TimezoneTest.java"
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;
import java.util.HashMap;

public class TimezoneTest {
    public static void main(String[] args) throws Exception {
        ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 11");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<>();
        ltOptions.put("username", System.getenv("LT_USERNAME"));
        ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
        ltOptions.put("timezone", "UTC-05:00");
        ltOptions.put("project", "Timezone Test");
        browserOptions.setCapability("LT:Options", ltOptions);

        RemoteWebDriver driver = new RemoteWebDriver(
            new URL("https://hub.lambdatest.com/wd/hub"), browserOptions);
        driver.get("https://example.com");
        driver.quit();
    }
}
```

</TabItem>

<TabItem value="JavaScript" label="JavaScript" default>

```javascript title="timezone-test.js"
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function timezoneTest() {
  let options = new chrome.Options();
  options.setPlatform("Windows 11");
  options.setBrowserVersion("latest");

  let ltOptions = {
    username: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    timezone: "UTC-05:00",
    project: "Timezone Test",
  };

  const driver = await new Builder()
    .usingServer("https://hub.lambdatest.com/wd/hub")
    .withCapabilities({ ...options.toJSON(), "LT:Options": ltOptions })
    .build();

  await driver.get("https://example.com");
  await driver.quit();
})();
```

</TabItem>

<TabItem value="Python" label="Python" default>

```python title="timezone_test.py"
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.platform_name = "Windows 11"
options.browser_version = "latest"

lt_options = {
    "username": os.environ["LT_USERNAME"],
    "accessKey": os.environ["LT_ACCESS_KEY"],
    "timezone": "UTC-05:00",
    "project": "Timezone Test",
}
options.set_capability("LT:Options", lt_options)

driver = webdriver.Remote(
    command_executor="https://hub.lambdatest.com/wd/hub",
    options=options,
)
driver.get("https://example.com")
driver.quit()
```

</TabItem>

<TabItem value="C#" label="C#" default>

```csharp title="TimezoneTest.cs"
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 11";
browserOptions.BrowserVersion = "latest";

Dictionary<string, object> ltOptions = new Dictionary<string, object>();
ltOptions.Add("username", Environment.GetEnvironmentVariable("LT_USERNAME"));
ltOptions.Add("accessKey", Environment.GetEnvironmentVariable("LT_ACCESS_KEY"));
ltOptions.Add("timezone", "UTC-05:00");
ltOptions.Add("project", "Timezone Test");
browserOptions.AddAdditionalOption("LT:Options", ltOptions);

IWebDriver driver = new RemoteWebDriver(
    new Uri("https://hub.lambdatest.com/wd/hub"), browserOptions);
driver.Navigate().GoToUrl("https://example.com");
driver.Quit();
```

</TabItem>

<TabItem value="PHP" label="PHP" default>

```php title="TimezoneTest.php"
<?php
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;

$capabilities = DesiredCapabilities::chrome();
$capabilities->setPlatform("Windows 11");
$capabilities->setCapability("browserVersion", "latest");

$ltOptions = [
    "username" => getenv("LT_USERNAME"),
    "accessKey" => getenv("LT_ACCESS_KEY"),
    "timezone" => "UTC-05:00",
    "project" => "Timezone Test",
];
$capabilities->setCapability("LT:Options", $ltOptions);

$driver = RemoteWebDriver::create(
    "https://hub.lambdatest.com/wd/hub", $capabilities);
$driver->get("https://example.com");
$driver->quit();
```

</TabItem>

<TabItem value="Ruby" label="Ruby" default>

```ruby title="timezone_test.rb"
require "selenium-webdriver"

options = Selenium::WebDriver::Options.chrome(
  platform_name: "Windows 11",
  browser_version: "latest",
  "LT:Options" => {
    username: ENV["LT_USERNAME"],
    accessKey: ENV["LT_ACCESS_KEY"],
    timezone: "UTC-05:00",
    project: "Timezone Test",
  }
)

driver = Selenium::WebDriver.for(
  :remote,
  url: "https://hub.lambdatest.com/wd/hub",
  capabilities: options,
)
driver.navigate.to("https://example.com")
driver.quit
```

</TabItem>

</Tabs>

## Common Timezone Values
---
Use these UTC offset strings with the `timezone` capability.

| Value | Region |
|---|---|
| `UTC+00:00` | London, Coordinated Universal Time |
| `UTC-05:00` | New York, Washington D.C. (US Eastern) |
| `UTC-08:00` | Los Angeles, San Francisco (US Pacific) |
| `UTC+01:00` | Berlin, Paris, Amsterdam |
| `UTC+05:30` | Mumbai, Delhi, Bangalore |
| `UTC+09:00` | Tokyo, Osaka |
| `UTC+11:00` | Sydney, Melbourne |
| `UTC+08:00` | Singapore, Hong Kong, Perth |
| `UTC-03:00` | Sao Paulo, Buenos Aires |
| `UTC+03:00` | Moscow, Istanbul |

:::note
The timezone capability is case sensitive. Use the exact format `UTC+HH:MM` or `UTC-HH:MM`.
:::

## When to Configure Timezones
---
Set the timezone capability when your test validates time-sensitive application behavior.

Consider setting the `timezone` capability in these scenarios:

- **Scheduled events.** Verify that calendar events, reminders, or notifications fire at the correct local time.
- **Date formatting.** Confirm that dates and timestamps render in the expected format for a given locale.
- **Time-based business logic.** Test features like cutoff times, availability windows, or session expiration that depend on the user's timezone.
- **Cross-timezone consistency.** Run the same test suite across multiple timezones to catch discrepancies in time-dependent logic.

:::tip
Combine the `timezone` capability with [geolocation](/support/docs/selenium-geolocation-capabilities/) to simulate a complete locale environment for your tests.
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Selenium Testing
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Configure Timezones
      </span>
    </li>
  </ul>
</nav>
