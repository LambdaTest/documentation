---
id: smartui-sdk-capabilities
title: SmartUI SDK Capabilities
sidebar_label: SmartUI SDK Capabilities
description: Learn about the various capabilities available in SmartUI SDK for configuring your visual regression tests
keywords:
  - Visual Regression
  - SmartUI SDK
  - Capabilities
  - Configuration
  - Visual Testing
url: https://www.testmu.ai/support/docs/smartui-sdk-capabilities/
slug: smartui-sdk-capabilities
canonical: https://www.testmu.ai/support/docs/smartui-sdk-capabilities/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# SmartUI SDK Capabilities

SmartUI SDK provides several capabilities that allow you to configure your visual regression tests. These capabilities can be added to your test configuration to control various aspects of the testing process.

:::warning Important
These capabilities only work when running tests on the <BrandName /> Automation Grid. For local test executions, please refer to the standard authentication methods using project token or project name in the [Running your first project](/support/docs/smartui-running-your-first-project/) documentation.
:::

## Prerequisites

Before using SmartUI SDK capabilities, ensure you have the following minimum versions installed:

- SmartUI CLI version >= 4.1.0
- For Java SDK: SmartUI SDK version >= 1.0.7
- For JavaScript: Selenium WebDriver version >= 1.0.7

## Available Capabilities

### For JavaScript

```javascript
let capabilities = {
  platform: "catalina",
  browserName: "chrome",
  version: "latest",
  "LT:Options": {
    username: USERNAME,
    accessKey: KEY,
    project: "ElementSS-MobileConfig",
    w3c: true,
    name: "Test Name", // name of the test
    build: "Automation Build Name", // name of the build
    // highlight-next-line
    "smartUI.project": "YOUR_PROJECT_NAME",
    // highlight-next-line
    "smartUI.build": "YOUR_BUILD_NAME",
    // highlight-next-line
    "smartUI.baseline": true,
  },
};
```

### For Java

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platform", "Windows 10");
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "YOUR_USERNAME");
ltOptions.put("accessKey", "YOUR_ACCESS_KEY");
ltOptions.put("w3c", true);
ltOptions.put("name", "Test Name");
ltOptions.put("build", "Automation Build Name");
// highlight-next-line
ltOptions.put("smartUI.project", "YOUR_PROJECT_NAME");
// highlight-next-line
ltOptions.put("smartUI.build", "SmartUI_BUILD_NAME");
// highlight-next-line
ltOptions.put("smartUI.baseline", true);

capabilities.setCapability("LT:Options", ltOptions);
```

## Capability Descriptions

### smartUI.project
This capability specifies the project Name where your screenshots will be stored and compared. You can add an existing project name or create a new project name.

### smartUI.build
This capability allows you to group your screenshots into specific builds. This is particularly useful when you want to organize your screenshots and compare them against specific baselines. The build name should be unique and descriptive to help identify the purpose of that particular test run.

### smartUI.baseline
This boolean capability determines whether the current build should be set as the baseline for future comparisons. When set to `true`, the build will be automatically approved and set as the baseline build. This capability works in conjunction with the [Git branching strategy](/support/docs/smartui-cli-git-branching-strategy/), meaning it will also update the baseline branch accordingly.

:::info Note
If you need capabilities' support for SDKs other than Selenium Java and JavaScript, please contact support@testmu.ai. Our team will be happy to assist you with integrating SmartUI capabilities into your preferred testing framework.
:::
