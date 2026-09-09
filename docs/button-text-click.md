---
id: button-text-click
title: Button Click By Text (OCR)
sidebar_label: Button Click By Text
description: Click a button by its visible text or icon description using OCR on LambdaTest Real Device Cloud. Works across Android & iOS real and virtual devices when native locators are unavailable.
keywords:
  - button click by text
  - OCR button click
  - app test automation
  - lambda executor
  - canvas based testing
  - dynamic UI testing
  - app testing appium
  - app testing
  - real devices
  - virtual devices
  - icon click
url: https://www.testmuai.com/support/docs/button-text-click/
site_name: LambdaTest
slug: button-text-click/
canonical: https://www.testmuai.com/support/docs/button-text-click/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Button Click By Text",
          "item": `${BRAND_URL}/support/docs/button-text-click/`
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Button Click By Text is an OCR-powered feature that allows you to click UI elements using their visible text or icon description when traditional locator strategies are not feasible.

Because the feature is powered by an LLM, you can also provide a natural language description of an icon (for example, "label": "search icon" or "label": "three-dot menu"), and the system will intelligently identify and click the matching element on the screen.

This approach is particularly useful when:

- Accessibility IDs or XPath locators are unavailable
- The UI is canvas-based or dynamically rendered
- Native locators are unstable or frequently changing

This feature is supported across both **Android** and **iOS** real and virtual devices via the `lambda_executor` command.

## Executor Contract

The feature is exposed via `driver.execute_script` using the `lambda_executor` interface:

```python
driver.execute_script('lambda_executor: {
  "action": "buttonTextClick",
  "arguments": {
    "label": "Continue"
  }
}')
```

## Arguments Specification

### Required Arguments

| Field | Type | Description |
|-------|------|-------------|
| `label` | String | Full visible text of the button to click, or a description of an icon (e.g., `"search icon"`, `"three-dot menu"`). It is recommended to use the entire string to avoid OCR misses. |

### Optional Arguments

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `timeout` | Number (seconds) | `0` | Max time to wait for text to appear (up to 30 seconds). |
| `operation` | String | `single` | Type of click operation. Supported values: `single`, `double`, `long`. |
| `matchMode` | Enum | `contain` | Text match strategy. Supported values: `exact`, `contain`. |
| `ignoreCase` | Boolean | `true` | Enable case-insensitive matching. |
| `ignoreSpaces` | Boolean | `true` | Ignore extra spaces in the text. |

### Advanced Arguments

| Field | Type | Description |
|-------|------|-------------|
| `index` | Number | Click the nth matched button (0-based index). Useful when multiple buttons share the same text. |

## Full Executor Example

```python
driver.execute_script('lambda_executor: {
  "action": "buttonTextClick",
  "arguments": {
    "label": "Pay Now",
    "timeout": 0,
    "matchMode": "contain",
    "ignoreCase": true,
    "ignoreSpaces": true,
    "index": 0
  }
}')
```

## Failure States & Errors

| Scenario | Error Code | Message |
|----------|------------|---------|
| Text not found | `ERROR_TEXT_NOT_FOUND` | Button with text not found |
