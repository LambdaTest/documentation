---
id: supported-appium-plugins
title: Supported Appium Plugins
hide_title: true
sidebar_label: Supported Appium Plugins
description: This document provides information about configuring Appium plugins for tests on the TestMu AI platform and also provides a list of supported plugins.

keywords:
 - appium
 - appium languages
 - appium framework 
 - configuration
 - plugins
 - images plugin
 - test automation frameworks
 - app testing
 - testmu ai 

url: https://www.testmuai.com/support/docs/supported-appium-plugins/
site_name: TestMu AI
slug: supported-appium-plugins/
canonical: https://www.testmuai.com/support/docs/supported-appium-plugins/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<RealDeviceTag value="Real Device" /> 

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
          "name": "Languages and Frameworks Supported on HyperExecute ",
          "item": `${BRAND_URL}/support/docs/supported-appium-plugins/`
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
      "@id": "https://www.testmuai.com/support/docs/supported-appium-plugins/"
    },
    "headline": "Supported Appium Plugins",
    "description": "This document provides information about configuring Appium plugins for tests on the TestMu AI platform and also provides a list of supported plugins.",
    "url": "https://www.testmuai.com/support/docs/supported-appium-plugins/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "appium",
      "appium languages",
      "appium framework"
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
        "name": "Below is a list of the supported Appium plugins on TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "capabilities = {\n    \"appiumVersion\": \"2.2.1\",\n    \"platformName\": \"iOS\",\n    \"appiumPlugins\": [\"images\", \"element-wait\", \"gestures\"],\n    # Add other capabilities as needed\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>


# Appium Plugins 

Enhance your testing experience on <BrandName /> by leveraging a variety of Appium plugins. Plugins offer various ways to extend or modify Appium's behavior. They are completely optional and are not needed for standard automation functionality, but you may find them useful for more specialized automation workflows.
By using these plugins, you can tailor your testing environment to better suit your project's specific needs, leading to more efficient and effective test automation.

## Supported Plugins

Below is a list of the supported Appium plugins on <BrandName />:

| Plugin Name       |  Description                                                                                  | Example                    |
|-------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| `images`          | Enables image comparison features in tests. Allows for verification of visual elements through images. | "appiumPlugins": ["images"] |
| `element-wait`    | Provides enhanced wait capabilities for elements, allowing tests to wait for elements to be in a certain state.For further details, please check [this documentation](https://github.com/AppiumTestDistribution/appium-wait-plugin). | "appiumPlugins": ["element-wait"] |
| `gestures`        | Adds support for gesture-based interactions, enabling tests to perform complex gestures like swipe, pinch, and zoom. For further details, please check [this documentation](https://github.com/AppiumTestDistribution/appium-gestures-plugin). | "appiumPlugins": ["gestures"]

**Python Example:**

```python
capabilities = {
    "appiumVersion": "2.2.1",
    "platformName": "iOS",
    "appiumPlugins": ["images", "element-wait", "gestures"],
    # Add other capabilities as needed
}
```

:::note 

- Appium plugins are only supported with version 2.0.0 and above appium versions. Please ensure that the `appiumVersion` capability is set correctly to utilize these plugins.

:::


---
