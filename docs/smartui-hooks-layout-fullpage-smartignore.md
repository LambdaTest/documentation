---
id: smartui-hooks-layout-fullpage-smartignore
title: SmartUI Hooks - Layout, Full Page, and Smart Ignore
sidebar_label: Hooks Layout + Full Page
description: SmartUI Hooks on LambdaTest covering layout comparison via screenshot hook options, Smart Ignore via smartUI.smartIgnore in LT:Options, and full-page capture.
keywords:
  - smartui hooks
  - layout testing hooks
  - full page screenshot hooks
  - smart ignore hooks
  - smartUI.smartIgnore
  - ignoreType layout hooks
url: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
site_name: TestMu AI
slug: smartui-hooks-layout-fullpage-smartignore/
canonical: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore",
          "item": `${BRAND_URL}/support/docs/smartui-hooks-layout-fullpage-smartignore/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/"
    },
    "headline": "SmartUI Hooks - Layout, Full Page, and Smart Ignore",
    "description": "SmartUI Hooks on LambdaTest covering layout comparison via screenshot hook options, Smart Ignore via smartUI.smartIgnore in LT:Options, and full-page capture.",
    "url": "https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "smartui hooks",
      "layout testing hooks",
      "full page screenshot hooks"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Session capabilities (LT:Options) (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import java.util.HashMap;\nimport org.openqa.selenium.chrome.ChromeOptions;\n\nChromeOptions browserOptions = new ChromeOptions();\nHashMap<String, Object> ltOptions = new HashMap<>();\nltOptions.put(\"username\", System.getenv(\"LT_USERNAME\"));\nltOptions.put(\"accessKey\", System.getenv(\"LT_ACCESS_KEY\"));\nltOptions.put(\"visual\", true);\nltOptions.put(\"smartUI.project\", \"Your_Project_Name\");\nltOptions.put(\"smartUI.smartIgnore\", true);\n\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Session capabilities (LT:Options) (NodeJS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "'LT:Options': {\n  user: process.env.LT_USERNAME,\n  accessKey: process.env.LT_ACCESS_KEY,\n  visual: true,\n  'smartUI.project': 'Your_Project_Name',\n  'smartUI.smartIgnore': true,\n},"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "lt_options = {\n    \"username\": os.getenv(\"LT_USERNAME\"),\n    \"accessKey\": os.getenv(\"LT_ACCESS_KEY\"),\n    \"visual\": True,\n    \"smartUI.project\": \"Your_Project_Name\",\n    \"smartUI.smartIgnore\": True,\n}\noptions.set_capability(\"LT:Options\", lt_options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "capabilities.SetCapability(\"visual\", true);\ncapabilities.SetCapability(\"smartUI.project\", \"Your_Project_Name\");\ncapabilities.SetCapability(\"smartUI.smartIgnore\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Layout comparison (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import java.util.Arrays;\nimport java.util.HashMap;\nimport java.util.Map;\nimport org.openqa.selenium.JavascriptExecutor;\n\nMap<String, Object> options = new HashMap<>();\noptions.put(\"screenshotName\", \"my-layout-screenshot-01\");\noptions.put(\"ignoreType\", Arrays.asList(\"layout\"));\n\n((JavascriptExecutor) driver).executeScript(\"smartui.takeScreenshot\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Layout comparison (NodeJS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await driver.executeScript('smartui.takeScreenshot', {\n  screenshotName: 'my-layout-screenshot-01',\n  ignoreType: ['layout'],\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "driver.execute_script(\"smartui.takeScreenshot\", {\n    \"screenshotName\": \"my-layout-screenshot-01\",\n    \"ignoreType\": [\"layout\"],\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var options = new Dictionary<string, object>\n{\n    { \"screenshotName\", \"my-layout-screenshot-01\" },\n    { \"ignoreType\", new[] { \"layout\" } }\n};\n((IJavaScriptExecutor)driver).ExecuteScript(\"smartui.takeScreenshot\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Full-page screenshot (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "Map<String, Object> options = new HashMap<>();\noptions.put(\"screenshotName\", \"Home_Page_Desktop\");\noptions.put(\"fullPage\", true);\n\n((JavascriptExecutor) driver).executeScript(\"smartui.takeScreenshot\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Full-page screenshot (NodeJS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await driver.executeScript('smartui.takeScreenshot', {\n  screenshotName: 'Home_Page_Desktop',\n  fullPage: true,\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Full-page screenshot (Python)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "driver.execute_script(\"smartui.takeScreenshot\", {\n    \"screenshotName\": \"Home_Page_Desktop\",\n    \"fullPage\": True,\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var options = new Dictionary<string, object>\n{\n    { \"screenshotName\", \"Home_Page_Desktop\" },\n    { \"fullPage\", true }\n};\n((IJavaScriptExecutor)driver).ExecuteScript(\"smartui.takeScreenshot\", options);"
      }
    ],
    "dateModified": "2026-07-14T14:14:05+05:30"
  }) }}
/>

# SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore

Use this page when you run **SmartUI Hooks** on LambdaTest (for example Selenium `executeScript` without the `smartui exec` CLI wrapper) and need **layout** comparison, **full-page** capture, or **Smart Ignore**.

:::info Capability vs hook, read this first
For **Hooks**, engineering behavior is:

| Goal | Where to configure | Notes |
|------|-------------------|--------|
| **Layout** comparison | **`smartui.takeScreenshot` hook options** (per screenshot) | Pass `ignoreType: ["layout"]` (and related layout flags) in the **Map/object** passed to `executeScript("smartui.takeScreenshot", options)`. **Layout is not enabled for Hooks by setting layout fields only in `LT:Options` capabilities**. That path is not supported the way teams often expect. |
| **Smart Ignore** | **`LT:Options`** | Set **`smartUI.smartIgnore`: `true`** on the session for baseline and comparison runs. |
| **Project** | **`LT:Options`** | Set **`smartUI.project`** (and `visual`, auth) as usual. |

If you need **layout via capabilities alone** (no hook options), treat that as a feature request and raise it with your account team. This doc reflects **current** Hooks behavior.
:::

:::info Smart Ignore vs Ignore DOM / Select DOM
With **Smart Ignore**, use either **Ignore DOM** or **Select DOM** in the dashboard where applicable, not both on the same flow.
:::

## 1. Session capabilities (`LT:Options`)

### Always (Hooks)

- `username`, `accessKey`, `visual: true`, **`smartUI.project`**

### Smart Ignore (Hooks)

Set on **`LT:Options`** for the whole session (baseline **and** comparison):

<VerifiedTag value="Verified" />

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

**JavaScript / Node**

<VerifiedTag value="Verified" />

```javascript
'LT:Options': {
  user: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY,
  visual: true,
  'smartUI.project': 'Your_Project_Name',
  'smartUI.smartIgnore': true,
},
```

**C#**

<VerifiedTag value="Verified" />

```csharp
capabilities.SetCapability("visual", true);
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("smartUI.smartIgnore", true);
```

:::warning Do not use these for Smart Ignore (Hooks + Java)
These patterns **do not** turn on Smart Ignore reliably:

- `ltOptions.put("ignoreType", Arrays.asList("smartignore"));` without `smartUI.smartIgnore`
- `ltOptions.put("smartignore", true);` at the root of `LT:Options`

Use **`smartUI.smartIgnore`: `true`** only.
:::

### Layout: not via standalone layout capabilities for Hooks

Do **not** expect **`ignoreType: ["layout"]`**, **`smartUI.layout`**, or nested **`smartUI.options`** layout blocks **alone** in `LT:Options` to enable layout comparison for Hooks. Validated behavior is: **pass layout in the hook** (next section).

---

## 2. Layout comparison: pass options to `smartui.takeScreenshot`

Pass a **single map** to `executeScript("smartui.takeScreenshot", options)` including **`screenshotName`** and **`ignoreType`**.

### Java (validated pattern)

<VerifiedTag value="Verified" />

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

Session **`LT:Options`** for this flow typically needs at least **`smartUI.project`** (and `visual`, credentials), **not** a separate layout capability block for the same effect.

### JavaScript

<VerifiedTag value="Verified" />

```javascript
await driver.executeScript('smartui.takeScreenshot', {
  screenshotName: 'my-layout-screenshot-01',
  ignoreType: ['layout'],
});
```

### C#

<VerifiedTag value="Verified" />

```csharp
var options = new Dictionary<string, object>
{
    { "screenshotName", "my-layout-screenshot-01" },
    { "ignoreType", new[] { "layout" } }
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", options);
```

Add **`fullPage: true`** in the same map when you need a full-page capture for that shot.

---

## 3. Full-page screenshot (name-only hook)

<VerifiedTag value="Verified" />

```java
((JavascriptExecutor) driver).executeScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

<VerifiedTag value="Verified" />

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

For **layout + full page** in one call, prefer the **config object** form in §2 with `fullPage: true` and `ignoreType: ["layout"]`.

---

## 4. Baseline and comparison

1. Same **`smartUI.project`** and screenshot **names**.
2. **Smart Ignore:** same **`smartUI.smartIgnore`** on baseline and comparison sessions.
3. **Layout:** same **`ignoreType: ["layout"]`** (and other layout flags) in the **hook** for matching screenshot names on baseline and comparison runs.
4. Changing strategy or options usually requires a **new baseline**.

---

## 5. Strict comparison vs Smart Ignore

If the project or build is still effectively in **strict (pixel) comparison**, some Smart Ignore–specific UI flows behave differently. Align dashboard **comparison mode** with session capabilities.

---

## 6. Build attribution (creator name)

Runs using a **project token** may show the **project creator**. Use the intended automation **username** / **access key** / **project** where the product allows.

---

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
