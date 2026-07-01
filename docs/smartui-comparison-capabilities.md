---
id: smartui-comparison-capabilities
title: Set SmartUI Comparison Modes at the Session Level
sidebar_label: Comparison via Capabilities
description: Enable SmartUI comparison modes such as layout and Smart Ignore once in LT:Options and apply them to every screenshot in the session, with per-screenshot overrides.
keywords:
  - smartui comparison capabilities
  - smartUI.ignoreType layout
  - smartUI.smartIgnore
  - session level comparison mode
  - layout comparison capability
  - visual regression comparison settings
url: https://www.testmuai.com/support/docs/smartui-comparison-capabilities/
site_name: TestMu AI
slug: smartui-comparison-capabilities/
canonical: https://www.testmuai.com/support/docs/smartui-comparison-capabilities/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Set SmartUI Comparison Modes at the Session Level",
          "item": `${BRAND_URL}/support/docs/smartui-comparison-capabilities/`
        }]
      })
    }}
></script>

# Set SmartUI Comparison Modes at the Session Level

SmartUI now lets you declare a comparison mode **once at the session level** and have it apply to every screenshot in that run. Set the mode in `LT:Options` alongside your other capabilities, and SmartUI uses it as the default for each `smartui.takeScreenshot` call — no need to repeat the option on every screenshot.

This is ideal when a whole project or test suite should share the same comparison behaviour. A team can switch a project between comparison modes by changing a single capability line, while individual screenshots can still opt into a different mode when they need to.

## How it works

SmartUI resolves the comparison mode for each screenshot in two layers:

| Layer | Where you set it | Scope |
|-------|------------------|-------|
| **Session default** | A `smartUI.*` capability in `LT:Options` | Applies to every screenshot in the session. |
| **Per-screenshot override** | The options map passed to `smartui.takeScreenshot` | Applies to that one screenshot and wins over the session default. |

If a screenshot does not specify a comparison option, it inherits the session default from `LT:Options`. If it does specify one, the screenshot-level value takes precedence for that screenshot only. This means you can set a baseline behaviour for the run and still fine-tune individual screenshots.

## Supported comparison capabilities

Set any of these in the `LT:Options` block for the session:

| Capability | Type | Effect |
|------------|------|--------|
| `smartUI.ignoreType` | array | Comparison type applied to every screenshot, for example `["layout"]` for layout comparison. |
| `smartUI.smartIgnore` | boolean | Enables [Smart Ignore](/support/docs/smartui-smartignore/) for the whole session. |

:::note
Over the CDP-based drivers (Puppeteer and Playwright via CDP), `smartUI.ignoreType` is also accepted under its alias **`smartUIIgnoreType`**. Both keys are equivalent; use whichever your driver expects.
:::

:::note
Set the same comparison capabilities on both the baseline and the comparison runs so the two builds are compared in the same mode.
:::

## 1. Layout comparison for the whole session

Set `smartUI.ignoreType` to `["layout"]` in `LT:Options`. Every screenshot in the session is then compared in layout mode, the same as passing `ignoreType: ["layout"]` on each individual screenshot.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
import java.util.Arrays;
import java.util.HashMap;
import org.openqa.selenium.chrome.ChromeOptions;

ChromeOptions browserOptions = new ChromeOptions();
HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("username", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
ltOptions.put("visual", true);
ltOptions.put("smartUI.project", "Your_Project_Name");
ltOptions.put("smartUI.ignoreType", Arrays.asList("layout")); // applies to every screenshot

browserOptions.setCapability("LT:Options", ltOptions);
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
'LT:Options': {
  user: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY,
  visual: true,
  'smartUI.project': 'Your_Project_Name',
  'smartUI.ignoreType': ['layout'], // applies to every screenshot
},
```

</TabItem>
<TabItem value="python" label="Python">

```python
lt_options = {
    "username": os.getenv("LT_USERNAME"),
    "accessKey": os.getenv("LT_ACCESS_KEY"),
    "visual": True,
    "smartUI.project": "Your_Project_Name",
    "smartUI.ignoreType": ["layout"],  # applies to every screenshot
}
options.set_capability("LT:Options", lt_options)
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
capabilities.SetCapability("visual", true);
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("smartUI.ignoreType", new[] { "layout" }); // applies to every screenshot
```

</TabItem>
</Tabs>

With this set, your screenshot calls stay clean — no comparison option is needed on each one:

```java
Map<String, Object> options = new HashMap<>();
options.put("screenshotName", "home-page");
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", options);
// compared in layout mode because of the session default
```

## 2. Smart Ignore for the whole session

Set `smartUI.smartIgnore` to `true` in `LT:Options` to apply [Smart Ignore](/support/docs/smartui-smartignore/) across the session.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
ltOptions.put("smartUI.project", "Your_Project_Name");
ltOptions.put("smartUI.smartIgnore", true); // applies to every screenshot
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
'LT:Options': {
  'smartUI.project': 'Your_Project_Name',
  'smartUI.smartIgnore': true, // applies to every screenshot
},
```

</TabItem>
<TabItem value="python" label="Python">

```python
lt_options = {
    "smartUI.project": "Your_Project_Name",
    "smartUI.smartIgnore": True,  # applies to every screenshot
}
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("smartUI.smartIgnore", true); // applies to every screenshot
```

</TabItem>
</Tabs>

## 3. Ignore regions are set per screenshot, not per session

There is no session-level ignore-regions capability. Ignore regions are configured **per screenshot** through the `ignoreDOM` (and `selectDOM`) argument on each `smartui.takeScreenshot` call, where you can pass DOM selectors or pixel coordinates:

```java
HashMap<String, String[]> ignoreByCoord = new HashMap<>();
ignoreByCoord.put("coordinates", new String[]{"847,185,1571,734"});

Map<String, Object> options = new HashMap<>();
options.put("screenshotName", "home-page");
options.put("ignoreDOM", ignoreByCoord); // applies to this screenshot only
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", options);
```

For the full set of coordinate and selector options on the Web Hooks path, see [Ignore and Select Regions on Web Hooks](/support/docs/smartui-hooks-region-ignore/).

## 4. Override the session default for one screenshot

Because the screenshot-level option always wins, you can keep a session default and still change the mode for a specific screenshot. For example, with a layout default set in `LT:Options`, you can compare one screenshot in the standard pixel mode by passing a different `ignoreType` on that call:

```java
Map<String, Object> options = new HashMap<>();
options.put("screenshotName", "pricing-table");
options.put("ignoreType", Arrays.asList()); // override: compare this one in full detail
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", options);
```

## Behaviour summary

| You set | Where | Result |
|---------|-------|--------|
| `smartUI.ignoreType: ["layout"]` | `LT:Options` | Every screenshot uses layout comparison by default. |
| `smartUI.smartIgnore: true` | `LT:Options` | Smart Ignore applied across the session. |
| A comparison option on a screenshot | `smartui.takeScreenshot` | Overrides the session default for that screenshot only. |

## Baseline and comparison notes

- Use the same `smartUI.project` and screenshot names across runs.
- Apply the same comparison capabilities to both the baseline and comparison sessions.
- Changing the comparison mode generally requires a fresh baseline.

## Related Docs

- [SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore](/support/docs/smartui-hooks-layout-fullpage-smartignore/)
- [Ignore and Select Regions on Web Hooks](/support/docs/smartui-hooks-region-ignore/)
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [Handling Dynamic Data with DOM Configuration and Options](/support/docs/html-dom-smartui-options/)
- [Selenium Visual Regression](/support/docs/selenium-visual-regression/)
