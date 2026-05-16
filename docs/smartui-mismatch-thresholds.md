---
id: smartui-mismatch-thresholds
title: Mismatch Thresholds for SmartUI Visual Regression Testing
sidebar_label: Mismatch Thresholds
description: Learn how to configure project-level, build-level, and screenshot-level mismatch thresholds for SmartUI Visual Regression testing to control comparison sensitivity.
keywords:
  - mismatch threshold
  - visual mismatch
  - smartui threshold
  - comparison tolerance
  - approval threshold
  - rejection threshold
  - visual regression
  - smartui visual testing

url: https://www.lambdatest.com/support/docs/smartui-mismatch-thresholds/
slug: smartui-mismatch-thresholds/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

---

# Mismatch Thresholds <NewTag value='New' color='#000' bgColor='#ffec02' />

When running visual regression tests, not every pixel-level difference is a real bug. Minor rendering variations such as font anti-aliasing, date/time stamps, or animated content can cause screenshots to fail even when the page looks correct to the human eye.

**Mismatch Thresholds** let you define how much visual difference is acceptable before a screenshot is flagged. You can configure two values:

| Parameter | Description |
|---|---|
| **Approval Threshold** | The maximum mismatch percentage at which a screenshot is **automatically approved**. If the detected difference is at or below this value, the screenshot passes without manual review. |
| **Rejection Threshold** | The minimum mismatch percentage at which a screenshot is **automatically rejected**. If the detected difference meets or exceeds this value, the screenshot is marked as failed. |

Screenshots with a mismatch percentage **between** the approval and rejection thresholds will require **manual review** by an approver.

:::info Example
If you set `approvalThreshold: 2` and `rejectionThreshold: 5`:
- A screenshot with **1.5%** mismatch is **auto-approved**.
- A screenshot with **3%** mismatch needs **manual review**.
- A screenshot with **6%** mismatch is **auto-rejected**.
:::

## Supported Frameworks & Languages

| Languages | Frameworks |
|---|---|
| Java, JavaScript, Python, C#, Ruby | Selenium, Appium |

---

## Threshold Hierarchy

You can set thresholds at three levels. When multiple levels are configured, the most specific setting takes priority:

| Priority | Level | Scope | How to Set |
|---|---|---|---|
| 1 (Highest) | **Screenshot** | Applies to a single screenshot | Pass options in the `smartuiSnapshot` call |
| 2 | **Build** | Applies to all screenshots in a build | Set in your test capabilities (`LT:Options`) |
| 3 (Lowest) | **Project** | Applies to all builds in a project | Configure in the [LambdaTest SmartUI Dashboard](https://smartui.lambdatest.com) |

:::tip Backward Compatible
If you do not configure build or screenshot-level thresholds, your existing project-level settings continue to apply. No changes are needed to your existing tests.
:::

---

## Threshold Rules

Keep the following constraints in mind when configuring thresholds:

- Both values must be a number between **0** and **100** (representing a percentage).
- The `approvalThreshold` must be **less than** the `rejectionThreshold`.
- If only one threshold is provided, the other falls back to the next level in the hierarchy (build or project).

---

## Build-Level Configuration

Set thresholds for an entire build by adding them to your test capabilities. This overrides the project-level defaults for every screenshot captured in that build.

### Capability Parameters

| Parameter | Type | Description |
|---|---|---|
| `smartUI.approvalThreshold` | Number | Mismatch percentage at or below which screenshots are auto-approved. |
| `smartUI.rejectionThreshold` | Number | Mismatch percentage at or above which screenshots are auto-rejected. |

### Examples

<Tabs className="docs__val" groupId="language">
<TabItem value="javascript" label="JavaScript" default>

```javascript title="Add thresholds to your LT:Options capabilities"
let capabilities = {
    browserName: "chrome",
    "LT:Options": {
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        // highlight-next-line
        "smartUI.approvalThreshold": 2,
        // highlight-next-line
        "smartUI.rejectionThreshold": 5
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java title="Add thresholds to your LT:Options capabilities"
HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("user", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
// highlight-next-line
ltOptions.put("smartUI.approvalThreshold", 2);
// highlight-next-line
ltOptions.put("smartUI.rejectionThreshold", 5);

capabilities.setCapability("LT:Options", ltOptions);
```

</TabItem>
<TabItem value="python" label="Python">

```python title="Add thresholds to your LT:Options capabilities"
lt_options = {
    "user": os.environ["LT_USERNAME"],
    "accessKey": os.environ["LT_ACCESS_KEY"],
    # highlight-next-line
    "smartUI.approvalThreshold": 2,
    # highlight-next-line
    "smartUI.rejectionThreshold": 5
}
capabilities["LT:Options"] = lt_options
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp title="Add thresholds to your LT:Options capabilities"
var ltOptions = new Dictionary<string, object>
{
    { "user", Environment.GetEnvironmentVariable("LT_USERNAME") },
    { "accessKey", Environment.GetEnvironmentVariable("LT_ACCESS_KEY") },
    // highlight-next-line
    { "smartUI.approvalThreshold", 2 },
    // highlight-next-line
    { "smartUI.rejectionThreshold", 5 }
};
capabilities.AddAdditionalOption("LT:Options", ltOptions);
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby title="Add thresholds to your LT:Options capabilities"
lt_options = {
  user: ENV['LT_USERNAME'],
  accessKey: ENV['LT_ACCESS_KEY'],
  # highlight-next-line
  'smartUI.approvalThreshold': 2,
  # highlight-next-line
  'smartUI.rejectionThreshold': 5
}
capabilities['LT:Options'] = lt_options
```

</TabItem>
</Tabs>

---

## Screenshot-Level Configuration

Override the build or project thresholds for individual screenshots. This is useful when specific pages contain dynamic content (e.g., live feeds, timestamps, ads) that naturally causes higher mismatch.

The `smartuiSnapshot` method accepts an optional options object with threshold parameters.

### Options Parameters

| Parameter | Type | Description |
|---|---|---|
| `approvalThreshold` | Number | Mismatch percentage at or below which this screenshot is auto-approved. |
| `rejectionThreshold` | Number | Mismatch percentage at or above which this screenshot is auto-rejected. |

### Examples

<Tabs className="docs__val" groupId="language">
<TabItem value="javascript" label="JavaScript" default>

```javascript title="Pass thresholds as the third argument to smartuiSnapshot"
// Screenshot using build/project-level thresholds (no override)
await smartuiSnapshot(driver, "Homepage");

// Screenshot with a custom threshold for a dynamic page
// highlight-start
await smartuiSnapshot(driver, "Live Dashboard", {
    approvalThreshold: 5,
    rejectionThreshold: 10
});
// highlight-end
```

</TabItem>
<TabItem value="java" label="Java">

```java title="Pass thresholds as a Map to smartuiSnapshot"
// Screenshot using build/project-level thresholds (no override)
SmartUISnapshot.smartuiSnapshot(driver, "Homepage");

// Screenshot with a custom threshold for a dynamic page
// highlight-start
Map<String, Object> options = new HashMap<>();
options.put("approvalThreshold", 5);
options.put("rejectionThreshold", 10);
SmartUISnapshot.smartuiSnapshot(driver, "Live Dashboard", options);
// highlight-end
```

</TabItem>
<TabItem value="python" label="Python">

```python title="Pass thresholds in the options dictionary"
# Screenshot using build/project-level thresholds (no override)
driver.execute_script("smartui.takeScreenshot", {"screenshotName": "Homepage"})

# Screenshot with a custom threshold for a dynamic page
# highlight-start
options = {
    "screenshotName": "Live Dashboard",
    "approvalThreshold": 5,
    "rejectionThreshold": 10
}
driver.execute_script("smartui.takeScreenshot", options)
# highlight-end
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp title="Pass thresholds in a Dictionary to smartuiSnapshot"
// Screenshot using build/project-level thresholds (no override)
SmartUISnapshot.smartuiSnapshot(driver, "Homepage");

// Screenshot with a custom threshold for a dynamic page
// highlight-start
var options = new Dictionary<string, object>
{
    { "approvalThreshold", 5 },
    { "rejectionThreshold", 10 }
};
SmartUISnapshot.smartuiSnapshot(driver, "Live Dashboard", options);
// highlight-end
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby title="Pass thresholds as a hash to smartui_snapshot"
# Screenshot using build/project-level thresholds (no override)
smartui_snapshot(driver, "Homepage")

# Screenshot with a custom threshold for a dynamic page
# highlight-start
smartui_snapshot(driver, "Live Dashboard", {
  approvalThreshold: 5,
  rejectionThreshold: 10
})
# highlight-end
```

</TabItem>
</Tabs>

---

## Combining Build and Screenshot Thresholds

You can set a strict default at the build level and relax it only for specific screenshots that need it. Here is a full JavaScript example:

```javascript title="Build-level strict + screenshot-level relaxed"
// Build-level: strict 1% approval, 3% rejection for most pages
let capabilities = {
    browserName: "chrome",
    "LT:Options": {
        "smartUI.approvalThreshold": 1,
        "smartUI.rejectionThreshold": 3
    }
};

let driver = new webdriver.Builder()
    .usingServer("https://hub.lambdatest.com/wd/hub")
    .withCapabilities(capabilities)
    .build();

// This screenshot uses the strict build-level thresholds (1% / 3%)
await driver.get("https://example.com/checkout");
await smartuiSnapshot(driver, "Checkout Page");

// This screenshot overrides with relaxed thresholds for a page with ads
await driver.get("https://example.com/homepage");
await smartuiSnapshot(driver, "Homepage with Ads", {
    approvalThreshold: 5,
    rejectionThreshold: 15
});
```

---

## Common Use Cases

| Scenario | Recommended Configuration |
|---|---|
| **Pixel-perfect pages** (login, checkout) | Set tight thresholds: `approvalThreshold: 0`, `rejectionThreshold: 1` |
| **Pages with minor dynamic content** (timestamps, counters) | Moderate thresholds: `approvalThreshold: 2`, `rejectionThreshold: 5` |
| **Highly dynamic pages** (live feeds, ad banners, dashboards) | Relaxed screenshot-level thresholds: `approvalThreshold: 10`, `rejectionThreshold: 20` |
| **Global default for all builds** | Set via the [SmartUI Dashboard](https://smartui.lambdatest.com) at the project level |
