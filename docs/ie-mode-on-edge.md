---
id: ie-mode-on-edge
title: Test in IE Mode on Microsoft Edge
sidebar_label: Test in IE Mode on Edge
description: Run Selenium tests in Internet Explorer compatibility mode on Microsoft Edge for legacy app testing on TestMu AI.
keywords:
  - ie mode microsoft edge
  - internet explorer mode selenium
  - ie11 edge compatibility
  - legacy browser testing selenium
  - ie mode automation
url: https://www.testmuai.com/support/docs/ie-mode-on-edge/
site_name: TestMu AI
slug: ie-mode-on-edge/
canonical: https://www.testmuai.com/support/docs/ie-mode-on-edge/
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
          "name": "IE Mode on Edge",
          "item": `${BRAND_URL}/support/docs/ie-mode-on-edge/`
        }]
      })
    }}
></script>

Microsoft retired Internet Explorer 11 in June 2022, but many enterprise applications still require IE rendering for specific workflows. Microsoft Edge includes an IE Mode that loads pages using the IE11 Trident engine inside an Edge tab. TestMu AI supports IE Mode automation on Windows 11, so you can validate legacy apps without maintaining a standalone IE browser.

## When to Use IE Mode
---
Use IE Mode to test legacy applications that depend on Internet Explorer rendering.

IE Mode is the right choice when:

- **Your application requires IE-specific rendering.** Intranet portals, older CRM systems, and government apps often depend on ActiveX controls, VBScript, or document modes that only the IE Trident engine supports.
- **You are migrating from IE11.** During the transition to modern browsers, IE Mode lets you verify that pages render identically in compatibility mode before removing IE-specific code.
- **Compliance or policy mandates IE support.** Some organizations require IE compatibility for internal tools until all systems are upgraded.

:::note
IE Mode is available only on Windows. The Edge browser version must support IE Mode, and Microsoft controls which versions include this feature through enterprise policy.
:::

## Set Up IE Mode Capabilities
---
Configure `InternetExplorerOptions` with Edge attachment to run tests in IE Mode on TestMu AI.

To run tests in IE Mode, use the `InternetExplorerOptions` class with `platformName` set to `Windows 11` and `browserVersion` set to `11.0`. TestMu AI handles the Edge attachment server-side. Pass your credentials in `LT:Options` as usual.

<Tabs className="docs__val">

<TabItem value="Java" label="Java" default>

```java title="IEModeTest.java"
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import java.util.HashMap;

public class IEModeTest {
    public static void main(String[] args) throws Exception {
        InternetExplorerOptions browserOptions = new InternetExplorerOptions();
        browserOptions.setPlatformName("Windows 11");
        browserOptions.setBrowserVersion("11.0");

        HashMap<String, Object> ltOptions = new HashMap<>();
        ltOptions.put("username", System.getenv("LT_USERNAME"));
        ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
        ltOptions.put("project", "IE Mode Test");
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);

        RemoteWebDriver driver = new RemoteWebDriver(
            new URL("https://hub.lambdatest.com/wd/hub"), browserOptions);
        driver.get("https://example.com");

        System.out.println("Page title: " + driver.getTitle());
        driver.quit();
    }
}
```

</TabItem>

<TabItem value="C#" label="C#" default>

```csharp title="IEModeTest.cs"
using OpenQA.Selenium;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Remote;

InternetExplorerOptions browserOptions = new InternetExplorerOptions();
browserOptions.PlatformName = "Windows 11";
browserOptions.BrowserVersion = "11.0";

Dictionary<string, object> ltOptions = new Dictionary<string, object>();
ltOptions.Add("username", Environment.GetEnvironmentVariable("LT_USERNAME"));
ltOptions.Add("accessKey", Environment.GetEnvironmentVariable("LT_ACCESS_KEY"));
ltOptions.Add("project", "IE Mode Test");
ltOptions.Add("w3c", true);
browserOptions.AddAdditionalOption("LT:Options", ltOptions);

IWebDriver driver = new RemoteWebDriver(
    new Uri("https://hub.lambdatest.com/wd/hub"), browserOptions);
driver.Navigate().GoToUrl("https://example.com");

Console.WriteLine("Page title: " + driver.Title);
driver.Quit();
```

</TabItem>

</Tabs>

## Key Configuration Options
---
Review the IE Mode capabilities and their expected values.

| Capability | Value | Description |
|---|---|---|
| `platformName` | `Windows 11` | IE Mode runs on Windows only. |
| `browserVersion` | `11.0` | Set to `11.0` to indicate IE11 compatibility mode. |
| `w3c` | `true` | Enables the W3C WebDriver protocol. |

## Common Issues and Solutions
---
Troubleshoot frequent problems when running IE Mode tests.

### Elements not interactable in IE Mode
IE Mode uses the Trident rendering engine, which handles focus and click events differently from modern browsers. Add explicit waits before interacting with elements. Avoid CSS selectors that rely on modern pseudo-classes not supported by IE11.

### Session timeout errors
IE Mode sessions can take longer to initialize than standard browser sessions. Increase your session timeout in `LT:Options` if you encounter timeout errors during startup.

:::warning
IE Mode does not support all Selenium features available in modern browsers. Features like shadow DOM access, modern CSS selectors, and certain JavaScript APIs are unavailable when the page renders through the Trident engine.
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
        IE Mode on Edge
      </span>
    </li>
  </ul>
</nav>
