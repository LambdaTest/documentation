---
id: hyperexecute-how-to-configure-os-and-browser
title: How to configure Operating System and Browser in your Test Suite
hide_title: false
sidebar_label: How to Configure OS and Browser
description: Discover the correct way to configure the operating system and the browser capabilities in your codebase to execute in the HyperExecute platform.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Find the Correct Concurrency 
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/
site_name: TestMu AI
slug: hyperexecute-how-to-configure-os-and-browser/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HyperExecuteSupportedLanguageRepos from '../src/component/SupportedLanguages/HyperExecuteSupportedLanguageRepos';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "HyperExecute How to guides",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-configure-os-and-browser/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/"
    },
    "headline": "How to configure Operating System and Browser in your Test Suite",
    "description": "Discover the correct way to configure the operating system and the browser capabilities in your codebase to execute in the HyperExecute platform.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
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
        "name": "Key Attributes to Configure",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nThe above configuration ensures that your tests run on Windows OS using the latest version of Google Chrome.\n\n## Step 2: Configure your HyperExecute YAML file\nThe HyperExecute YAML configuration file is the blueprint for running your tests in the HyperExecute cloud environment. It defines the testing environment, execution strategy, and resource allocation. Properly configuring this file ensures that your tests are executed efficiently across the desired platforms and browsers.\n\n<Tabs className=\"docs__val\" queryString=\"test-method\">\n  <TabItem value=\"autosplit\" label=\"AutoSplit\" default>\n    [AutoSplit mode](/support/docs/deep-dive-into-hyperexecute-yaml/#autosplit) automatically splits your scenarios among the concurrent number of tasks and executes them parallelly. This ensures optimal utilization of resources and significantly reduces the overall execution time of your test suite.\n\n    In this method, you simply set the [`runson`](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) flag to specify the Operating System for running your tests.\n\n    ```yaml title=\"hyperexecute_autosplit.yaml\"\n    runson: linux #linux, win, win11, mac, mac13"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to configure Operating System and Browser in your Test Suite",
      "description": "Discover the correct way to configure the operating system and the browser capabilities in your codebase to execute in the HyperExecute platform.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Update TestMu AI Capabilities in your test suite",
          "text": "Configuring the capabilities is the first step to define the environment for your tests. These capabilities allow you to specify parameters such as the Operating System, Browser, and Browser Version on which your tests will run. TestMu AI capabilities serve as a bridge between your test framework and the HyperExecute cloud infrastructure. platform : Specifies the operating system (e.g., Windows, macOS, or Linux). browserName : Indicates the browser to be used (e.g., Chrome, Firefox, or Edge). version : Defines the specific version or sets it as latest to always use the most recent version. Below is a Java example using the TestNG framework: The above configuration ensures that your tests run on Windows OS using the latest version of Google Chrome.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/#step-1-update-testmu-ai-capabilities-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure your HyperExecute YAML file",
          "text": "The HyperExecute YAML configuration file is the blueprint for running your tests in the HyperExecute cloud environment. It defines the testing environment, execution strategy, and resource allocation. Properly configuring this file ensures that your tests are executed efficiently across the desired platforms and browsers. AutoSplit mode automatically splits your scenarios among the concurrent number of tasks and executes them parallelly. This ensures optimal utilization of resources and significantly reduces the overall execution time of your test suite. In this method, you simply set the runson flag to specify the Operating System for running your tests. \ud83d\udcd5 Learn more about AutoSplit Test Method Matrix mode allows you to run the same set of tests across multiple combinations of environments, configurations, or parameters. This is particularly useful for ensuring that your software works correctly under different conditions, such as various operating systems, browser versions, or dependency files. runson: ${matrix.os} : Dynamically selects the operating system from the matrix.os list (Windows, macOS, Linux) for each test job. os : Lists the operating systems for testing: win, win11, mac, mac13, and linux. \ud83d\udcd5 Learn more about Matrix Test Method",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-os-and-browser/#step-2-configure-your-hyperexecute-yaml-file"
        }
      ]
    }
  ]) }}
/>
This documentation will guide you through configuring the Operating System and Browser for your test suite on HyperExecute. We will cover the step-by-step method to implement the configuration for various test frameworks supported by HyperExecute. Each section provides practical examples to help you integrate HyperExecute with your existing automation suite.

For demonstration purposes, we use the TestNG sample repository. However, you can apply the same concepts to your preferred framework. You can access the sample repositories for your required frameworks:
<HyperExecuteSupportedLanguageRepos />

## Step 1: Update <BrandName /> Capabilities in your test suite
Configuring the capabilities is the first step to define the environment for your tests. These capabilities allow you to specify parameters such as the Operating System, Browser, and Browser Version on which your tests will run. <BrandName /> capabilities serve as a bridge between your test framework and the HyperExecute cloud infrastructure.

### Key Attributes to Configure
- **`platform` :** Specifies the operating system (e.g., Windows, macOS, or Linux).
- **`browserName` :** Indicates the browser to be used (e.g., Chrome, Firefox, or Edge).
- **`version` :** Defines the specific version or sets it as latest to always use the most recent version.

Below is a Java example using the TestNG framework:

<VerifiedTag value="Verified" />

```java title="Test.java"
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("platform", "Windows");
caps.setCapability("browserName", "Chrome");
caps.setCapability("version", "latest"); //latest, dev, beta, latest-1, latest-2, ...
```

The above configuration ensures that your tests run on Windows OS using the latest version of Google Chrome.

## Step 2: Configure your HyperExecute YAML file
The HyperExecute YAML configuration file is the blueprint for running your tests in the HyperExecute cloud environment. It defines the testing environment, execution strategy, and resource allocation. Properly configuring this file ensures that your tests are executed efficiently across the desired platforms and browsers.

<Tabs className="docs__val" queryString="test-method">
  <TabItem value="autosplit" label="AutoSplit" default>
    [AutoSplit mode](/support/docs/deep-dive-into-hyperexecute-yaml/#autosplit) automatically splits your scenarios among the concurrent number of tasks and executes them parallelly. This ensures optimal utilization of resources and significantly reduces the overall execution time of your test suite.

    In this method, you simply set the [`runson`](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) flag to specify the Operating System for running your tests.

    ```yaml title="hyperexecute_autosplit.yaml"
    runson: linux #linux, win, win11, mac, mac13
    ```
    > 📕 Learn more about [AutoSplit Test Method](/support/docs/hyperexecute-auto-split-strategy/)
  </TabItem>

  <TabItem value="matrix" label="Matrix">
    [Matrix mode](/support/docs/deep-dive-into-hyperexecute-yaml/#matrix) allows you to run the same set of tests across multiple combinations of environments, configurations, or parameters. This is particularly useful for ensuring that your software works correctly under different conditions, such as various operating systems, browser versions, or dependency files.

    - **`runson: ${matrix.os}` :** Dynamically selects the operating system from the matrix.os list (Windows, macOS, Linux) for each test job.
    - **`os` :** Lists the operating systems for testing: `win`, `win11`, `mac`, `mac13`, and `linux`.

    ```yaml title="hyperexecute_matrix.yaml"
    runson: ${matrix.os}
    
    matrix:
      os: ["win", "mac", "linux"] #linux, win, win11, mac, mac13
    ```
    > 📕 Learn more about [Matrix Test Method](/support/docs/hyperexecute-matrix-multiplexing-strategy/)
  </TabItem>
</Tabs>
