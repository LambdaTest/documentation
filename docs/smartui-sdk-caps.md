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
url: https://www.testmuai.com/support/docs/smartui-sdk-capabilities/
slug: smartui-sdk-capabilities/
canonical: https://www.testmuai.com/support/docs/smartui-sdk-capabilities/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-sdk-capabilities/"
    },
    "headline": "SmartUI SDK Capabilities",
    "description": "Learn about the various capabilities available in SmartUI SDK for configuring your visual regression tests",
    "url": "https://www.testmuai.com/support/docs/smartui-sdk-capabilities/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "SmartUI SDK",
      "Capabilities"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "SmartUI CLI version >= 4.1.0; For Java SDK: SmartUI SDK version >= 1.0.7; For JavaScript: Selenium WebDriver version >= 1.0.7.",
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
        "name": "For JavaScript",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let capabilities = {\n  platform: \"catalina\",\n  browserName: \"chrome\",\n  version: \"latest\",\n  \"LT:Options\": {\n    username: USERNAME,\n    accessKey: KEY,\n    project: \"ElementSS-MobileConfig\",\n    w3c: true,\n    name: \"Test Name\", // name of the test\n    build: \"Automation Build Name\", // name of the build\n    // highlight-next-line\n    \"smartUI.project\": \"YOUR_PROJECT_NAME\",\n    // highlight-next-line\n    \"smartUI.build\": \"YOUR_BUILD_NAME\",\n    // highlight-next-line\n    \"smartUI.baseline\": true,\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Java",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"platform\", \"Windows 10\");\ncapabilities.setCapability(\"browserName\", \"chrome\");\ncapabilities.setCapability(\"version\", \"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"username\", \"YOUR_USERNAME\");\nltOptions.put(\"accessKey\", \"YOUR_ACCESS_KEY\");\nltOptions.put(\"w3c\", true);\nltOptions.put(\"name\", \"Test Name\");\nltOptions.put(\"build\", \"Automation Build Name\");\n// highlight-next-line\nltOptions.put(\"smartUI.project\", \"YOUR_PROJECT_NAME\");\n// highlight-next-line\nltOptions.put(\"smartUI.build\", \"SmartUI_BUILD_NAME\");\n// highlight-next-line\nltOptions.put(\"smartUI.baseline\", true);\n\ncapabilities.setCapability(\"LT:Options\", ltOptions);"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

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
If you need capabilities' support for SDKs other than Selenium Java and JavaScript, please contact support@testmuai.com. Our team will be happy to assist you with integrating SmartUI capabilities into your preferred testing framework.
:::
