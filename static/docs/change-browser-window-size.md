# Change Browser Window Size

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n\n\n\n```javascript title=\"resolution-test.js\"\nconst { Builder } = require(\"selenium-webdriver\");\nconst chrome = require(\"selenium-webdriver/chrome\");\n\n(async function resolutionTest() {\n  let options = new chrome.Options();\n  options.setPlatform(\"Windows 11\");\n  options.setBrowserVersion(\"latest\");\n\n  let ltOptions = {\n    username: process.env.LT_USERNAME,\n    accessKey: process.env.LT_ACCESS_KEY,\n    resolution: \"1920x1080\",\n    project: \"Resolution Test\",\n  };\n\n  const driver = await new Builder()\n    .usingServer(\"https://hub.lambdatest.com/wd/hub\")\n    .withCapabilities({ ...options.toJSON(), \"LT:Options\": ltOptions })\n    .build();\n\n  await driver.get(\"https://example.com\");\n  await driver.quit();\n})();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n\n\n```csharp title=\"ResolutionTest.cs\"\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing OpenQA.Selenium.Remote;\n\nChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.PlatformName = \"Windows 11\";\nbrowserOptions.BrowserVersion = \"latest\";\n\nDictionary ltOptions = new Dictionary();\nltOptions.Add(\"username\", Environment.GetEnvironmentVariable(\"LT_USERNAME\"));\nltOptions.Add(\"accessKey\", Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\"));\nltOptions.Add(\"resolution\", \"1920x1080\");\nltOptions.Add(\"project\", \"Resolution Test\");\nbrowserOptions.AddAdditionalOption(\"LT:Options\", ltOptions);\n\nIWebDriver driver = new RemoteWebDriver(\n    new Uri(\"https://hub.lambdatest.com/wd/hub\"), browserOptions);\ndriver.Navigate().GoToUrl(\"https://example.com\");\ndriver.Quit();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n\n\n```ruby title=\"resolution_test.rb\"\nrequire \"selenium-webdriver\"\n\noptions = Selenium::WebDriver::Options.chrome(\n  platform_name: \"Windows 11\",\n  browser_version: \"latest\",\n  \"LT:Options\" => {\n    username: ENV[\"LT_USERNAME\"],\n    accessKey: ENV[\"LT_ACCESS_KEY\"],\n    resolution: \"1920x1080\",\n    project: \"Resolution Test\",\n  }\n)\n\ndriver = Selenium::WebDriver.for(\n  :remote,\n  url: \"https://hub.lambdatest.com/wd/hub\",\n  capabilities: options,\n)\ndriver.navigate.to(\"https://example.com\")\ndriver.quit"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

When running Selenium tests on TestMu AI, you can control the browser window resolution to test responsive layouts, verify UI elements at specific breakpoints, and reproduce resolution-dependent bugs. Set the resolution through the `resolution` capability in `LT:Options`.

## Set Resolution Using the `resolution` Capability

Pass a resolution string in `LT:Options` to launch the browser at a specific screen size.

Add the `resolution` capability to your `LT:Options` configuration. The value is a string in the format `widthxheight`. If you do not specify a resolution, TestMu AI defaults to **1024x768**.

```java title="ResolutionTest.java"
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;
import java.util.HashMap;

public class ResolutionTest {
public static void main(String[] args) throws Exception {
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 11");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("username", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
ltOptions.put("resolution", "1920x1080");
ltOptions.put("project", "Resolution Test");
browserOptions.setCapability("LT:Options", ltOptions);

RemoteWebDriver driver = new RemoteWebDriver(
new URL("https://hub.lambdatest.com/wd/hub"), browserOptions);
driver.get("https://example.com");
driver.quit();
}
}
```

```javascript title="resolution-test.js"
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function resolutionTest() {
let options = new chrome.Options();
options.setPlatform("Windows 11");
options.setBrowserVersion("latest");

let ltOptions = {
username: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
resolution: "1920x1080",
project: "Resolution Test",
};

const driver = await new Builder()
.usingServer("https://hub.lambdatest.com/wd/hub")
.withCapabilities({ ...options.toJSON(), "LT:Options": ltOptions })
.build();

await driver.get("https://example.com");
await driver.quit();
})();
```

```python title="resolution_test.py"
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.platform_name = "Windows 11"
options.browser_version = "latest"

lt_options = {
"username": os.environ["LT_USERNAME"],
"accessKey": os.environ["LT_ACCESS_KEY"],
"resolution": "1920x1080",
"project": "Resolution Test",
}
options.set_capability("LT:Options", lt_options)

driver = webdriver.Remote(
command_executor="https://hub.lambdatest.com/wd/hub",
options=options,
)
driver.get("https://example.com")
driver.quit()
```

```csharp title="ResolutionTest.cs"
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 11";
browserOptions.BrowserVersion = "latest";

Dictionary<string, object> ltOptions = new Dictionary<string, object>();
ltOptions.Add("username", Environment.GetEnvironmentVariable("LT_USERNAME"));
ltOptions.Add("accessKey", Environment.GetEnvironmentVariable("LT_ACCESS_KEY"));
ltOptions.Add("resolution", "1920x1080");
ltOptions.Add("project", "Resolution Test");
browserOptions.AddAdditionalOption("LT:Options", ltOptions);

IWebDriver driver = new RemoteWebDriver(
new Uri("https://hub.lambdatest.com/wd/hub"), browserOptions);
driver.Navigate().GoToUrl("https://example.com");
driver.Quit();
```

```php title="ResolutionTest.php"
<?php
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;

$capabilities = DesiredCapabilities::chrome();
$capabilities->setPlatform("Windows 11");
$capabilities->setCapability("browserVersion", "latest");

$ltOptions = [
"username" => getenv("LT_USERNAME"),
"accessKey" => getenv("LT_ACCESS_KEY"),
"resolution" => "1920x1080",
"project" => "Resolution Test",
];
$capabilities->setCapability("LT:Options", $ltOptions);

$driver = RemoteWebDriver::create(
"https://hub.lambdatest.com/wd/hub", $capabilities);
$driver->get("https://example.com");
$driver->quit();
```

```ruby title="resolution_test.rb"
require "selenium-webdriver"

options = Selenium::WebDriver::Options.chrome(
platform_name: "Windows 11",
browser_version: "latest",
"LT:Options" => {
username: ENV["LT_USERNAME"],
accessKey: ENV["LT_ACCESS_KEY"],
resolution: "1920x1080",
project: "Resolution Test",
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

## Supported Resolutions

Choose from these predefined screen resolutions when setting the `resolution` capability.

| Resolution | Aspect Ratio | Common Use |
|---|---|---|
| **1024x768** (default) | 4:3 | Legacy desktops, older monitors |
| **1280x800** | 16:10 | Older laptops |
| **1280x1024** | 5:4 | Standard desktop monitors |
| **1366x768** | 16:9 | Budget laptops, common breakpoint |
| **1440x900** | 16:10 | MacBook and mid-range laptops |
| **1680x1050** | 16:10 | Large desktop monitors |
| **1600x1200** | 4:3 | Large standard monitors |
| **1920x1080** | 16:9 | Full HD monitors and laptops |
| **1920x1200** | 16:10 | Professional desktop monitors |
| **2048x1536** | 4:3 | High-resolution displays |
| **2560x1440** | 16:9 | QHD monitors |

Supported resolutions are OS-dependent. Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to verify which resolutions are available for your target OS and browser.
