---
id: smartui-hooks-layout-fullpage-smartignore
title: SmartUI Hooks - Layout, Full Page, and Smart Ignore
sidebar_label: Hooks Layout + Full Page
description: Configure SmartUI Hooks for layout testing, full-page screenshots, and Smart Ignore strategy using Selenium capabilities and hook scripts.
keywords:
  - smartui hooks
  - layout testing hooks
  - full page screenshot hooks
  - smart ignore hooks
  - ignoreType
url: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
site_name: TestMu AI
slug: smartui-hooks-layout-fullpage-smartignore/
canonical: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
---

# SmartUI Hooks Flow: Layout Testing, Full-Page Screenshots, and Smart Ignore

This guide explains the recommended SmartUI Hooks setup when you want to:

- run visual checks directly from automation (without `smartui exec` wrapper),
- capture full-page screenshots,
- switch comparison strategy between Layout and Smart Ignore.

## How Hooks Strategy Works

In Hooks flow, strategy is controlled primarily by capabilities (`ignoreType`) and project settings.  
The screenshot hook script usually carries only the screenshot name (or name plus config in supported runtimes).

## 1. Capability Setup (Hooks)

Set these in your LambdaTest capability object:

```json
{
  "visual": true,
  "smartUI.project": "Your_Project_Name",
  "ignoreType": ["layout"],
  "smartUI.options": {
    "ignoreType": ["layout"],
    "layout": true,
    "captureDom": true
  }
}
```

Notes:

- Use `ignoreType: ["layout"]` for layout-only comparisons.
- For Smart Ignore, change strategy to `ignoreType: ["smartignore"]` (or `smart-ignore` if your account parser uses that token).
- Keep the same strategy in baseline and comparison runs.

## 2. Full-Page Screenshot in Hooks

### Name-only hook (widely supported)

```java
((JavascriptExecutor) driver).executeScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

### Config-based hook (runtime dependent)

```java
Map<String, Object> cfg = new HashMap<>();
cfg.put("screenshotName", "Home_Page_Desktop");
cfg.put("fullPage", true);
cfg.put("ignoreType", Arrays.asList("layout"));
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", cfg);
```

```csharp
var cfg = new Dictionary<string, object>
{
  { "screenshotName", "Home_Page_Desktop" },
  { "fullPage", true },
  { "ignoreType", new[] { "layout" } }
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", cfg);
```

## 3. Enable Smart Ignore in Hooks

Smart Ignore is a strategy, not a standalone boolean flag.

- Recommended: set capability `ignoreType` to Smart Ignore strategy.
- Do not depend on `smartignore: true` as the primary method.

### Example (C#)

```csharp
capabilities.SetCapability("visual", true);
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("ignoreType", new[] { "smartignore" });

var smartUiOptions = new Dictionary<string, object>
{
    { "ignoreType", new[] { "smartignore" } }
};
capabilities.SetCapability("smartUI.options", smartUiOptions);
```

### Example (Java)

```java
HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("visual", true);
ltOptions.put("smartUI.project", "Your_Project_Name");
ltOptions.put("ignoreType", Arrays.asList("smartignore"));
```

## 4. Baseline and Comparison Requirements

To get correct comparison results:

1. Use the same `smartUI.project`.
2. Use the same screenshot names between runs.
3. Use the same strategy (`layout` or `smartignore`) for baseline and comparison.
4. If strategy changes, recapture baseline.

## 5. Best Practices for Hooks

- Keep screenshot names deterministic, for example: `page_viewport_1366x768`.
- Use one shared build name for all viewport sessions in a single run.
- Wait for page stabilization before triggering screenshot hooks.
- Include viewport in screenshot name if running responsive coverage.
- Prefer capability-level strategy control over script-level overrides.

## 6. Troubleshooting

### Strategy not applied

- Verify `ignoreType` is present in the actual session capabilities.
- Ensure baseline was captured with the same strategy.
- Check project-level comparison settings in SmartUI dashboard.

### "Please provide screenshot name"

- Use name directly in script string for name-only hooks:
  - `smartui.takeScreenshot=MyName`
  - `smartui.takeFullPageScreenshot=MyName`

### Invalid C# dictionary initializer

- In older C# projects, use classic dictionary syntax:
  - `{ "key", value }`
- Avoid mixing index initializer with old syntax in same block.

### No comparison generated

- Confirm same screenshot name and same project on both runs.
- Confirm second run is uploaded to the intended branch/build context.

## Related Docs

- [Layout Testing](/support/docs/smartui-layout-testing/)
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
- [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/)
