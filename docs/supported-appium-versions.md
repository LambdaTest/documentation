---
id: supported-appium-versions
title: Supported Appium Versions
hide_title: true
sidebar_label: Supported Appium Versions
description: This document provides information about configuring Appium versions for tests on the LambdaTest platform and also provides list of supported versions.
keywords:
 - appium
 - appium languages
 - appium framework 
 - configuration
 - supported platforms
 - automation testing framework
 - test automation frameworks
 - app testing
 - lambdaTest 
 - appium version selection
url: https://www.lambdatest.com/support/docs/supported-appium-versions/
site_name: LambdaTest
slug: supported-appium-versions/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

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
          "name": "Languages and Frameworks Supported on HyperExecute ",
          "item": "https://www.lambdatest.com/support/docs/supported-appium-versions/"
        }]
      })
    }}
></script>

# Supported Appium Versions

Customize your testing experience on LambdaTest by selecting the appropriate Appium version for your tests on real devices. LambdaTest offers flexibility in choosing the Appium version to meet your testing requirements. By default, the suitable Appium version is selected based on the operating system (OS) when running tests. However, you can explicitly specify the  version using the `appiumVersion` capability in your test scripts.

## Appium Version Configuration

To configure the Appium version for your tests on LambdaTest, use the `appiumVersion` capability in your test scripts. Below is a table of supported Appium versions for different platforms:

| Platform Versions | Supported Versions                    | Default Version | Latest Version |
|--------------------|---------------------------------------|-----------------|----------------|
| Android (All)     | 1.21.0, 1.22.0, 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0 | 2.2.1 | 2.3.0          |
| iOS (12, 13, 14)  | 1.22.3, 2.0.0, 2.1.3, 2.2.1            | 2.2.1           | 2.2.1          |
| iOS (15, 16, 17)  | 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0     | 2.2.1           | 2.3.0          |
| fireos |  1.21.0, 1.22.0, 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0  |  2.2.1           | 2.3.0          |
| tvos  |  1.22.3     | 1.22.3         | 1.22.3        |


**Java Example:** 
```java
// Java code for configuring Appium version in tests on LambdaTest
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("appiumVersion", "2.2.1");
capabilities.setCapability("platformName", "ios");
// Add other capabilities as needed
```

**Latest Version**: We update the `latest` version for all platforms, including Android and iOS, to stay aligned with the latest stable releases of Appium. This ensures users always have access to the most current and reliable versions.

**Default Version**: A new `default` version is supported when the user does not explicitly specify a appium version or pass capability.


:::note 

- If a user passes any Appium version other than the mentioned versions, appropriate error will be thrown.
- For devices running iOS 17 and newer, it is recommended to use Appium versions `2.2.1` and `above` to ensure the best compatibility and performance.

:::


---