# How to Test in IE Mode on Edge With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Microsoft retired Internet Explorer 11 in June 2022, but many enterprise applications still require IE rendering for specific workflows. Microsoft Edge includes an IE Mode that loads pages using the IE11 Trident engine inside an Edge tab. TestMu AI supports IE Mode automation on Windows 11, so you can validate legacy apps without maintaining a standalone IE browser.

## When to Use IE Mode

Use IE Mode to test legacy applications that depend on Internet Explorer rendering.

IE Mode is the right choice when:

- **Your application requires IE-specific rendering.** Intranet portals, older CRM systems, and government apps often depend on ActiveX controls, VBScript, or document modes that only the IE Trident engine supports.
- **You are migrating from IE11.** During the transition to modern browsers, IE Mode lets you verify that pages render identically in compatibility mode before removing IE-specific code.
- **Compliance or policy mandates IE support.** Some organizations require IE compatibility for internal tools until all systems are upgraded.

IE Mode is available only on Windows. The Edge browser version must support IE Mode, and Microsoft controls which versions include this feature through enterprise policy.

## Set Up IE Mode Capabilities

Configure `InternetExplorerOptions` with Edge attachment to run tests in IE Mode on TestMu AI.

To run tests in IE Mode, use the `InternetExplorerOptions` class with `platformName` set to `Windows 11` and `browserVersion` set to `11.0`. TestMu AI handles the Edge attachment server-side. Pass your credentials in `LT:Options` as usual. For the complete set of options you can combine with these settings, see the supported [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/).

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

## Key Configuration Options

Review the IE Mode capabilities and their expected values.

| Capability | Value | Description |
|---|---|---|
| `platformName` | `Windows 11` | IE Mode runs on Windows only. |
| `browserVersion` | `11.0` | Set to `11.0` to indicate IE11 compatibility mode. |
| `w3c` | `true` | Enables the W3C WebDriver protocol. |

## Common Issues and Solutions

Troubleshoot frequent problems when running IE Mode tests.

### Elements Not Interactable in IE Mode

IE Mode uses the Trident rendering engine, which handles focus and click events differently from modern browsers. Add explicit waits before interacting with elements. Avoid CSS selectors that rely on modern pseudo-classes not supported by IE11. When a legacy app depends on saved logins or extensions to render correctly, you can upload a custom Chrome profile to reproduce that environment in your other browser tests.

### Session Timeout Errors

IE Mode sessions can take longer to initialize than standard browser sessions. Increase your session timeout in `LT:Options` if you encounter timeout errors during startup.

IE Mode does not support all Selenium features available in modern browsers. Features like shadow DOM access, modern CSS selectors, and certain JavaScript APIs are unavailable when the page renders through the Trident engine.

## Next Steps

Continue with these related guides:

- [Upload Custom Chrome Profile](/support/docs/upload-custom-chrome-profile/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
