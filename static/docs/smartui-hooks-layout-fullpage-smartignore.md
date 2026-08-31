# SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use this page when you run **SmartUI Hooks** on LambdaTest (for example Selenium `executeScript` without the `smartui exec` CLI wrapper) and need **layout** comparison, **full-page** capture, or **Smart Ignore**.

**Capability vs hook, read this first**
For **Hooks**, engineering behavior is:

| Goal | Where to configure | Notes |
|------|-------------------|--------|
| **Layout** comparison | **`smartui.takeScreenshot` hook options** (per screenshot) | Pass `ignoreType: ["layout"]` (and related layout flags) in the **Map/object** passed to `executeScript("smartui.takeScreenshot", options)`. **Layout is not enabled for Hooks by setting layout fields only in `LT:Options` capabilities**. That path is not supported the way teams often expect. |
| **Smart Ignore** | **`LT:Options`** | Set **`smartUI.smartIgnore`: `true`** on the session for baseline and comparison runs. |
| **Project** | **`LT:Options`** | Set **`smartUI.project`** (and `visual`, auth) as usual. |



| Goal | Where to configure | How |
|------|--------------------|-----|
| **Layout** comparison | `smartui.takeScreenshot` hook options | Pass `ignoreType: ["layout"]` in the options map for that screenshot. |
| **Full-page** capture | `smartui.takeScreenshot` hook options | Pass `fullPage: true` in the options map for that screenshot. |
| **Smart Ignore** | `LT:Options` | Set `smartUI.smartIgnore: true` on the session, for both baseline and comparison runs. |
| **Project** | `LT:Options` | Set `smartUI.project` (with `visual` and credentials). |



Layout and full page are enabled per screenshot through the hook options, not through `LT:Options` capabilities. When you use Smart Ignore, choose either **Ignore DOM** or **Select DOM** in the dashboard for a given flow, not both.

## 1. Session capabilities (`LT:Options`)

### Always (Hooks)

- `username`, `accessKey`, `visual: true`, **`smartUI.project`**

### Smart Ignore (Hooks)

Set on **`LT:Options`** for the whole session (baseline **and** comparison):




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

- `ltOptions.put("ignoreType", Arrays.asList("smartignore"));` without `smartUI.smartIgnore`
- `ltOptions.put("smartignore", true);` at the root of `LT:Options`

Use **`smartUI.smartIgnore`: `true`** only.

### Layout: not via standalone layout capabilities for Hooks

Do **not** expect **`ignoreType: ["layout"]`**, **`smartUI.layout`**, or nested **`smartUI.options`** layout blocks **alone** in `LT:Options` to enable layout comparison for Hooks. Validated behavior is: **pass layout in the hook** (next section).

## 2. Layout comparison: pass options to `smartui.takeScreenshot`

Pass a **single map** to `executeScript("smartui.takeScreenshot", options)` including **`screenshotName`** and **`ignoreType`**.

### Java (validated pattern)




```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import org.openqa.selenium.JavascriptExecutor;

Map<String, Object> options = new HashMap<>();
options.put("ignoreType", Arrays.asList("layout"));
options.put("screenshotName", "my-layout-screenshot-01");

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

## 3. Full-page screenshot (name-only hook)




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
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```




## 4. Baseline and comparison

1. Same **`smartUI.project`** and screenshot **names**.
2. **Smart Ignore:** same **`smartUI.smartIgnore`** on baseline and comparison sessions.
3. **Layout:** same **`ignoreType: ["layout"]`** (and other layout flags) in the **hook** for matching screenshot names on baseline and comparison runs.
4. Changing strategy or options usually requires a **new baseline**.

## 5. Strict comparison vs Smart Ignore

If the project or build is still effectively in **strict (pixel) comparison**, some Smart Ignore–specific UI flows behave differently. Align dashboard **comparison mode** with session capabilities.

## 6. Build attribution (creator name)

Runs using a **project token** may show the **project creator**. Use the intended automation **username** / **access key** / **project** where the product allows.

## 7. Troubleshooting




| Problem | What to do |
|--------|------------|
| Layout never activates; only tried `LT:Options` | Move **`ignoreType: ["layout"]`** into **`smartui.takeScreenshot`** options (§2). |
| Smart Ignore never activates | Set **`smartUI.smartIgnore`: true** in **`LT:Options`**; verify in session metadata. |
| Tried `smartUI.layout` | Not the supported Hooks switch for layout; use hook **options** instead. |
| Want to rely on dashboard toggles only | Hooks still need the correct **hook** + **capability** split per this page. |



## Related Docs

- [Layout Comparison in SmartUI SDK](/support/docs/smartui-layout-testing/) (SDK `smartuiSnapshot` path, different from Hooks).
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
