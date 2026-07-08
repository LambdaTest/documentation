# SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore

Use this page when you run **SmartUI Hooks** on LambdaTest (for example, Selenium `executeScript` without the `smartui exec` CLI wrapper) and need **layout** comparison, **full-page** capture, or **Smart Ignore**.

## How configuration is split

SmartUI Hooks split configuration between the session capabilities (`LT:Options`) and the per-screenshot hook:

| Goal | Where to configure | How |
|------|--------------------|-----|
| **Layout** comparison | `smartui.takeScreenshot` hook options | Pass `ignoreType: ["layout"]` in the options map for that screenshot. |
| **Full-page** capture | `smartui.takeScreenshot` hook options | Pass `fullPage: true` in the options map for that screenshot. |
| **Smart Ignore** | `LT:Options` | Set `smartUI.smartIgnore: true` on the session, for both baseline and comparison runs. |
| **Project** | `LT:Options` | Set `smartUI.project` (with `visual` and credentials). |

Layout and full page are enabled per screenshot through the hook options, not through `LT:Options` capabilities. When you use Smart Ignore, choose either **Ignore DOM** or **Select DOM** in the dashboard for a given flow, not both.

## 1. Session capabilities (`LT:Options`)

Every Hooks session needs `username`, `accessKey`, `visual: true`, and `smartUI.project`. For Smart Ignore, also set `smartUI.smartIgnore: true` on both the baseline and comparison sessions.

```java
import java.util.HashMap;
import org.openqa.selenium.chrome.ChromeOptions;

ChromeOptions browserOptions = new ChromeOptions();
HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("username", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
ltOptions.put("visual", true);
ltOptions.put("smartUI.project", "Your_Project_Name");
ltOptions.put("smartUI.smartIgnore", true);

browserOptions.setCapability("LT:Options", ltOptions);
```

```javascript
'LT:Options': {
user: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
visual: true,
'smartUI.project': 'Your_Project_Name',
'smartUI.smartIgnore': true,
},
```

```python
lt_options = {
"username": os.getenv("LT_USERNAME"),
"accessKey": os.getenv("LT_ACCESS_KEY"),
"visual": True,
"smartUI.project": "Your_Project_Name",
"smartUI.smartIgnore": True,
}
options.set_capability("LT:Options", lt_options)
```

```csharp
capabilities.SetCapability("visual", true);
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("smartUI.smartIgnore", true);
```

## 2. Layout comparison

Pass a single options map to `smartui.takeScreenshot` with a `screenshotName` and `ignoreType: ["layout"]`. Add `fullPage: true` to the same map for a full-page layout shot.

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import org.openqa.selenium.JavascriptExecutor;

Map<String, Object> options = new HashMap<>();
options.put("screenshotName", "my-layout-screenshot-01");
options.put("ignoreType", Arrays.asList("layout"));

((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", options);
```

```javascript
await driver.executeScript('smartui.takeScreenshot', {
screenshotName: 'my-layout-screenshot-01',
ignoreType: ['layout'],
});
```

```python
driver.execute_script("smartui.takeScreenshot", {
"screenshotName": "my-layout-screenshot-01",
"ignoreType": ["layout"],
})
```

```csharp
var options = new Dictionary<string, object>
{
{ "screenshotName", "my-layout-screenshot-01" },
{ "ignoreType", new[] { "layout" } }
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", options);
```

## 3. Full-page screenshot

Pass `fullPage: true` to `smartui.takeScreenshot` along with a `screenshotName`. For a full-page layout shot in the same call, add `ignoreType: ["layout"]` to the map.

```java
Map<String, Object> options = new HashMap<>();
options.put("screenshotName", "Home_Page_Desktop");
options.put("fullPage", true);

((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", options);
```

```javascript
await driver.executeScript('smartui.takeScreenshot', {
screenshotName: 'Home_Page_Desktop',
fullPage: true,
});
```

```python
driver.execute_script("smartui.takeScreenshot", {
"screenshotName": "Home_Page_Desktop",
"fullPage": True,
})
```

```csharp
var options = new Dictionary<string, object>
{
{ "screenshotName", "Home_Page_Desktop" },
{ "fullPage", true }
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", options);
```

## 4. Baseline and comparison

- Use the same `smartUI.project` and screenshot names on both runs.
- **Smart Ignore:** set the same `smartUI.smartIgnore` on the baseline and comparison sessions.
- **Layout:** pass the same `ignoreType: ["layout"]` in the hook for matching screenshot names.
- Changing the strategy or options usually requires a new baseline.

## 5. Build attribution

Runs that use a project token may show the project creator as the build author. Use the intended automation `username`, `accessKey`, and `project` where the product allows.

## 6. Common failures and what not to do

**Smart Ignore (Hooks + Java)**
These patterns do not turn on Smart Ignore:

- `ltOptions.put("ignoreType", Arrays.asList("smartignore"));` without `smartUI.smartIgnore`
- `ltOptions.put("smartignore", true);` at the root of `LT:Options`

Set `smartUI.smartIgnore: true` instead.

| Problem | What to do |
|---------|------------|
| Layout never activates; only set in `LT:Options` | Move `ignoreType: ["layout"]` into the `smartui.takeScreenshot` options (see §2). |
| Smart Ignore never activates | Set `smartUI.smartIgnore: true` in `LT:Options`, then confirm it in the session metadata. |
| Tried `smartUI.layout` or nested `smartUI.options` layout blocks | These are not the Hooks switch for layout; use the hook options instead. |
| Strict (pixel) comparison still applies | Align the dashboard comparison mode with the session capabilities. |
| Relying on dashboard toggles only | Hooks still need the correct hook option and capability split shown above. |

## Related Docs

- [Layout Comparison in SmartUI SDK](/support/docs/smartui-layout-testing/) (SDK `smartuiSnapshot` path, different from Hooks).
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
