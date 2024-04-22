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
---

This document outlines the supported versions for both Android and iOS platforms at LambdaTest, detailing the specific versions supported, the default settings, and how the latest supported version is determined based on the operating system.

>**Note**: Starting June 1st, 2024, the following versions of Appium will be retained. Make sure to review and update your scripts accordingly if necessary.

## Appium Version Configuration
---

To configure the Appium version for your tests on LambdaTest, use the `appiumVersion` capability in your test scripts. 

Below is a table of supported Appium versions for different platforms:

**Android Supported Versions Matrix**:

LambdaTest supports a range of versions for Android devices to ensure broad compatibility and performance. The supported versions are as follows:

| Supported Versions       | Default Version | Latest Version                             |
|--------------------------|-----------------|--------------------------------------------|
| 1.21.0, 1.22.0, 1.22.3  |       -          |            -                                |
| 2.0, 2.1.3, 2.2.1, 2.3.0 | 2.2.1           | 2.3.0 (Updated in sync with Appium releases) |

**iOS Supported Versions Matrix**: 

LambdaTest supports a range of versions for iOS devices to ensure broad compatibility and performance. The supported versions are as follows:

*iOS 12, 13, 14*

| Supported Versions | Default Version | Latest Version |
|--------------------|-----------------|----------------|
| 1.22.3, 2.0       |       -          |      -          |
| 2.1.3, 2.2.1       | 2.2.1           | 2.2.1          |

*iOS 15, 16, 17*

| Supported Versions | Default Version | Latest Version                             |
|--------------------|-----------------|--------------------------------------------|
| 1.22.3, 2.0, 2.1.3 |          -       |        -                                    |
| 2.2.1, 2.3.0       | 2.2.1           | 2.3.0 (Updated in sync with Appium releases) |

**iOS Compatibility Note**:

For devices running iOS 17 and newer, it is recommended to use Appium versions 2.2.1 and above to ensure the best compatibility and performance.

**Version Configuration Requirement**:

If a user does not specify any *appiumVersion*, the system will default to the pre-configured default version. To use a different supported version, users must explicitly pass the desired version in the desired capabilities.

---