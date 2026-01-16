---
id: hyperexecute-build-mobile-apps-using-tools
title: Building Mobile Applications Using Tools
hide_title: false
sidebar_label: Building Mobile Applications Using Tools
description: Building Mobile Applications Using Tools
keywords:
  - TestMu AI HyperExecute
  - gradle
  - maven
  - sdk
  - mobile apps
  - tools
url: https://www.testmu.ai/support/docs/hyperexecute-build-mobile-apps-using-tools/
site_name: LambdaTest
slug: hyperexecute-build-mobile-apps-using-tools
canonical: https://www.testmu.ai/support/docs/hyperexecute-build-mobile-apps-using-tools/
--- 


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
          "name": "Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-build-mobile-apps-using-tools/`
        }]
      })
    }}
></script>

Suppose you're working on an Android app using Gradle, and all of a sudden you realize that this project requires an older Java version and a specific Android SDK. Now, setting up a whole new environment in not a very convenient option.

HyperExecute facilitate the development of mobile applications using various tools such as **Gradle**, **Maven**, etc. It provides a language and framework agnostic environment, supporting a wide range of tools and version combinations crucial for building **Android APKs** efficiently.

## Building Apps with `runtime` Flag

HyperExecute provides a [`runtime`](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) flag feature that dynamically downloads and installs required language and framework versions based on your needs. This removes the need for pre-installed environments on the execution machines.

```bash
runtime:
  language: java
  version: ${STATIC_DATA_1_JAVA_VERSION}
  addons:
    - name: "gradle"
      version: "${STATIC_DATA_1_GRADLE_VERSION}"
    - name: "android-sdk"
      version: ${STATIC_DATA_1_ANDROID_SDK_VERSION}
```

## Leveraging DataJsonPaths for Dependency Management

[`DataJsonPaths`](/support/docs/deep-dive-into-hyperexecute-yaml/#datajsonpath) helps to distribute data/configs over the VMs. In this you can create a json files and put configurations/data required for your suite as json array inside the file.

This is useful when you have the project and you have to build it across different java, gradle and android-sdk versions.

To provide multiple versions for each of these dependencies, the DataJson can be leveraged provided by HyperExecute.

```bash
[
  {
    "JAVA_VERSION": "11",
    "ANDROID_SDK_VERSION": "24",
    "GRADLE_VERSION": "7.5"
  },
  {
    "JAVA_VERSION": "178",
    "ANDROID_SDK_VERSION": "25",
    "GRADLE_VERSION": "8"
  },
  {
    "JAVA_VERSION": "20",
    "ANDROID_SDK_VERSION": "32",
    "GRADLE_VERSION": "8.4"
  }
]
```

HyperExecute empowers developers to build mobile applications effectively by providing a flexible and adaptable development environment. With features like dynamic dependency management, YAML parameter configuration, support for multiple dependency versions, and distributed configuration capabilities, HyperExecute streamlines the development process and enhances productivity.