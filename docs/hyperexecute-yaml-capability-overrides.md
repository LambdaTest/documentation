---
id: hyperexecute-yaml-capability-overrides
title: YAML-Based Capability Overrides for Selenium Tests on HyperExecute
hide_title: false
sidebar_label: Override Capabilities in YAML
description: "Easily override test capabilities using YAML in HyperExecute. No script changes needed. Flexible, scalable, and ideal for dynamic test environments."
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-yaml-capability-overrides/
site_name: LambdaTest Deep dive into hyperexecute yaml
slug: hyperexecute-yaml-capability-overrides/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "YAML Based Capability Overrides",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-yaml-capability-overrides/"
        }]
      })
    }}
></script>
In Selenium-based testing, [capabilities](/support/docs/selenium-automation-capabilities/) are key-value pairs that define how and where your tests should run—such as browser type, version, OS, console logs, video recording, and more.

Previously, these capabilities were typically defined within the test script. With this new feature, you can now override or inject these directly from your **HyperExecute YAML** file. This gives you greater flexibility and eliminates the need to modify test scripts every time you change execution parameters.

## 🚀 Why Use YAML-Based Overrides?
| Benefit                      | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| No Code Changes Required     | Easily change capabilities without modifying your test script.             |
| Reusable & Configurable      | Use a single script across different environments with varying YAML files. |
| Cleaner Test Scripts         | Keeps your scripts capability-agnostic and environment-independent.        |

## ⚙️ How It Works
- Define a new `ltOptions` section inside your HyperExecute YAML file.
- Specify any desired capabilities as key-value pairs under `ltOptions`.
- During test execution, HyperExecute automatically merges these with the final capabilities passed to the Selenium session.
> All the capabilities defined under the `ltOptions` section are fully aligned with LambdaTest's standard capability structure. You can use any capability listed in our [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).

## 🔑 Key Behavior Rules

| Case                                                | Behavior                                                   |
| --------------------------------------------------- | ---------------------------------------------------------- |
| Capability present in **both test script and YAML** | The **YAML value takes precedence**.                       |
| Capability present in **YAML but not in script**    | It is **automatically added** to the session capabilities. |
| Capability only in script                           | Used as-is unless overridden in YAML.                      |

> **📝 Note:** This feature is only supported for **Selenium**-based tests at the moment.

## Sample YAML with Capability Overrides

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/testng-selenium-hyperexecute-sample/blob/main/yaml/linux/v1/testng_hyperexecute_linux_ltoptions.yaml
```

## 💡 Common Use Cases

| Use Case                      | Example Capability           |
| ----------------------------- | ---------------------------- |
| Changing browser type/version | `browserName`, `version`     |
| Controlling visual artifacts  | `video`, `console`, `visual` |
| Defining test metadata        | `build`, `name`              |
| Network capture and debugging | `network`, `tunnel`          |
| Switching Selenium versions   | `selenium_version`           |
