---
id: playwright-sdk
title: Playwright SDK
sidebar_label: Run Test With SDK
description: A guide to getting started with the Playwright-Node.js SDK by TestMu AI.
keywords:
  - playwright
  - nodejs
  - sdk
  - testmu ai
  - automation
  - testing
slug: /playwright-sdk/
canonical: https://www.testmuai.com/support/docs//playwright-sdk/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Playwright SDK",
          "item": `${BRAND_URL}/support/docs/playwright-sdk/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-sdk/"
    },
    "headline": "Playwright SDK",
    "description": "A guide to getting started with the Playwright-Node.js SDK by TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/playwright-sdk/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "playwright",
      "nodejs",
      "sdk"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A TestMu AI account. A free account can be created from the TestMu AI website.; Your TestMu AI username and access key, which are available in your TestMu AI profile.; A local installation of Node.js and npm.; An existing Playwright project..",
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
        "name": "Installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/playwright-node-sdk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Initializing the Configuration File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx playwright-node-sdk --init [(optional: filename)]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Initializing the Configuration File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "# Access your LambdaTest credentials from https://accounts.lambdatest.com/security/username-accesskey\n# It's recommended to use environment variables for your credentials.\nuser: {YOUR_LAMBDATEST_USERNAME}\naccessKey: {YOUR_LAMBDATEST_ACCESS_KEY}\n\n# Build name for your test run\nbuild: \"Playwright Node.js SDK Build\"\n\n# Name of the test suite\nname: \"Playwright Test Suite\"\n\n# Global base configuration\nframework: \"playwright\" # Framework name\nsource: \"node-js-playwright-sample-sdk:v1\" # GitHub branch and tag\n\n# Optional: Build and project tags for organization and filtering\nbuildTags: [\"playwright\", \"nodejs\", \"typescript\"]\ntags: [\"smoke\", \"regression\"]\nprojectName: \"Playwright Node SDK Testing\"\n\n# Define the number of parallel sessions for each configuration\n# Check your parallel session limits at https://billing.lambdatest.com/billing/subscriptions\nparallelsPerPlatform: 2\n\n# Optional: Advanced settings applied to all tests\nnetwork: false # To capture network HAR logs (may impact test execution speed)\nconsole: false # To capture browser console logs (may impact test execution speed)\nvideo: true # To capture video for debugging (may impact test execution speed)\ntunnel: false # To test pages behind a VPN/private network or from a local system. Refer to https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/\ndedicatedProxy: false\nidleTimeout: 300\ntimezone: \"UTC\"\nvisual: true # To capture a screenshot for each command (may impact test execution speed)\nheadless: false # To run tests in headless mode. Note: Video will not be available for headless tests.\ncommandLog: true # To capture commands that are executed on the LambdaTest platform\nresolution: \"1280x960\" # To set the global resolution/viewport size to execute tests\n\n# Tunnel-specific tests\ntunnel_settings:\n  # tunnel: true\n  # autostart: true\n  # tunnelName: \"app-behind-firewall-localhost-test-tunnel\"\n  # localdirectory: \"./log\"\n  # verbose: true\n  # loglevel: \"debug\"\n\n# Global Playwright configuration (inherited by all platforms unless overridden)\nplaywrightConfigOptions:\n  testDir: \"tests\"\n  # use:\n  #   viewport: { width: 1280, height: 720 }\n\n# Refer to the capability generator for detailed configurations: https://www.lambdatest.com/capabilities-generator/\nplatforms:\n  - platform: \"macOS Sequoia\" # Or \"Windows 11\", \"android\", \"ios\"\n    browserName: \"chrome\" # Or pw-firefox, pw-webkit\n    # You can specify an exact browser version or use \"latest\", \"latest-1\", etc.\n    browserVersion: \"latest\"\n    # For mobile testing\n    # deviceName: \"Pixel 7\" # Or \"iPhone 14\"\n    # platformVersion: \"13\" # Or \"16\"\n    # isRealMobile: true\n    # ltOptions:\n    #   Geolocation-specific tests\n    #   geoLocation: \"GB\"\n    #   Network communication tests (enable network logging)\n    #   network: true\n    #   console: true\n    #   fullHar: true # To capture request and response body (might slow the test execution)\n    # playwrightConfigOptions:\n    #   testDir: \"additional-tests\"\n    #   testMatch: [\"**/mobile-responsive.spec.ts\"]\n    #   # For mobile testing\n    #   use:\n    #     viewport: { width: 390, height: 844 }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Playwright Project Options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "    playwrightConfigOptions:\n      testDir: './tests'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Playwright Project Options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "    playwrightConfigOptions:\n      testMatch: /.*\\.e2e\\.js/\n      testIgnore: /.*\\.spec\\.js/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Playwright Project Options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "    playwrightConfigOptions:\n      setup:\n        - name: 'setup1'\n          testMatch: '**/*.setup.ts'\n          teardown: 'teardown1'\n      teardown:\n        - name: 'teardown1'\n          testMatch: '/teardown\\.ts/'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "    playwrightConfigOptions:\n      use:\n        baseURL: 'https://www.example.com'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx playwright-node-sdk playwright test --config Optional path-of-config.yml"
      }
    ],
    "dateModified": "2026-09-10T15:46:57+05:30"
  }) }}
/>

This document guides you through setting up and using the <BrandName /> Playwright-Node.js SDK to run your Playwright tests on the <BrandName /> platform.

## Overview
The <BrandName /> Playwright Node SDK is a command-line interface (CLI) tool designed to streamline the process of running your existing Playwright tests on the <BrandName /> cloud grid. It eliminates the need for code modifications and provides a simple, configuration-driven approach to test execution.

Key benefits include:

*   **Effortless Execution**: Run your entire test suite on the <BrandName /> platform with a single, simple command. The SDK handles all the underlying complexity of connecting to the grid.
*   **Zero Code Changes**: Integrate your existing Playwright tests without modifying your test scripts. All configuration is managed externally in the lambdatest.yml file.
*   **Centralized Capabilities**: Define and manage all your test environments, including browser, platform, and resolution combinations, in a single, easy-to-read YAML file.
*   **Local & Private Testing**: Seamlessly test internal, pre-production, or locally hosted websites using the <BrandName /> Tunnel, which can be managed automatically by the SDK.
*   **CI/CD Integration**: The command-line nature of the SDK makes it trivial to integrate into any CI/CD pipeline (like Jenkins, GitHub Actions, CircleCI, etc.) for continuous testing.
*   **Rich Test Artifacts**: All test runs are automatically reported to your <BrandName /> Dashboard, complete with video recordings, step-by-step screenshots, browser logs, and network logs for easy debugging.

## Prerequisites

Before proceeding, ensure the following requirements are met:

*   A <BrandName /> account. A free account can be created from the <BrandName /> website.
*   Your <BrandName /> username and access key, which are available in your [<BrandName /> profile](https://www.testmuai.com/login/).
*   A local installation of Node.js and npm.
*   An existing Playwright project.

## Installation

To get started, install the SDK as a development dependency within your project's root directory.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/playwright-node-sdk
```

## Configuration

The SDK is configured via a `lambdatest.yml` file located in your project root. This YAML file orchestrates your test execution, defining credentials, capabilities, and other run settings.

### 1. Initializing the Configuration File

You can generate a template `lambdatest.yml` file by running the following command. You may also provide an optional filename.

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk --init [(optional: filename)]
```

Below is the structure and explanation of the configuration options available in the `lambdatest.yml` file.

<VerifiedTag value="Verified" />

```yaml
# Access your LambdaTest credentials from https://accounts.lambdatest.com/security/username-accesskey
# It's recommended to use environment variables for your credentials.
user: {YOUR_LAMBDATEST_USERNAME}
accessKey: {YOUR_LAMBDATEST_ACCESS_KEY}

# Build name for your test run
build: "Playwright Node.js SDK Build"

# Name of the test suite
name: "Playwright Test Suite"

# Global base configuration
framework: "playwright" # Framework name
source: "node-js-playwright-sample-sdk:v1" # GitHub branch and tag

# Optional: Build and project tags for organization and filtering
buildTags: ["playwright", "nodejs", "typescript"]
tags: ["smoke", "regression"]
projectName: "Playwright Node SDK Testing"

# Define the number of parallel sessions for each configuration
# Check your parallel session limits at https://billing.lambdatest.com/billing/subscriptions
parallelsPerPlatform: 2

# Optional: Advanced settings applied to all tests
network: false # To capture network HAR logs (may impact test execution speed)
console: false # To capture browser console logs (may impact test execution speed)
video: true # To capture video for debugging (may impact test execution speed)
tunnel: false # To test pages behind a VPN/private network or from a local system. Refer to https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/
dedicatedProxy: false
idleTimeout: 300
timezone: "UTC"
visual: true # To capture a screenshot for each command (may impact test execution speed)
headless: false # To run tests in headless mode. Note: Video will not be available for headless tests.
commandLog: true # To capture commands that are executed on the LambdaTest platform
resolution: "1280x960" # To set the global resolution/viewport size to execute tests

# Tunnel-specific tests
tunnel_settings:
  # tunnel: true
  # autostart: true
  # tunnelName: "app-behind-firewall-localhost-test-tunnel"
  # localdirectory: "./log"
  # verbose: true
  # loglevel: "debug"

# Global Playwright configuration (inherited by all platforms unless overridden)
playwrightConfigOptions:
  testDir: "tests"
  # use:
  #   viewport: { width: 1280, height: 720 }

# Refer to the capability generator for detailed configurations: https://www.lambdatest.com/capabilities-generator/
platforms:
  - platform: "macOS Sequoia" # Or "Windows 11", "android", "ios"
    browserName: "chrome" # Or pw-firefox, pw-webkit
    # You can specify an exact browser version or use "latest", "latest-1", etc.
    browserVersion: "latest"
    # For mobile testing
    # deviceName: "Pixel 7" # Or "iPhone 14"
    # platformVersion: "13" # Or "16"
    # isRealMobile: true
    # ltOptions:
    #   Geolocation-specific tests
    #   geoLocation: "GB"
    #   Network communication tests (enable network logging)
    #   network: true
    #   console: true
    #   fullHar: true # To capture request and response body (might slow the test execution)
    # playwrightConfigOptions:
    #   testDir: "additional-tests"
    #   testMatch: ["**/mobile-responsive.spec.ts"]
    #   # For mobile testing
    #   use:
    #     viewport: { width: 390, height: 844 }
```

### 2. Credentials Configuration

In the `lambdatest.yml` file, replace the placeholder values for `user` and `accessKey` with your <BrandName /> credentials.

### 3. Platform Configuration

The `platforms` array defines the target environments (OS/browser combinations) for your test execution. You can specify multiple platform objects. For a complete list of valid platform configurations, consult the [<BrandName /> Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

### 4. Run Settings

The `run_settings` section is not explicitly present in the provided YAML, but you can control test execution behavior by passing standard Playwright CLI arguments directly to the `playwright-node-sdk` command.

### 5. Playwright Project Options

The `playwrightConfigOptions` section provides a powerful mechanism to override your project's native Playwright configuration for the <BrandName /> run. This allows for dynamic adjustments without altering your source `playwright.config.js`.

*   **testDir**: Specifies the location of your test files.

    <VerifiedTag value="Verified" />

    ```yaml
    playwrightConfigOptions:
      testDir: './tests'
    ```

*   **testMatch** and **testIgnore**: Defines glob patterns to include or exclude specific test files from the run.

    <VerifiedTag value="Verified" />

    ```yaml
    playwrightConfigOptions:
      testMatch: /.*\.e2e\.js/
      testIgnore: /.*\.spec\.js/
    ```

*   **setup** and **teardown**: Specifies scripts to be executed before and after your test suite.

    <VerifiedTag value="Verified" />

    ```yaml
    playwrightConfigOptions:
      setup:
        - name: 'setup1'
          testMatch: '**/*.setup.ts'
          teardown: 'teardown1'
      teardown:
        - name: 'teardown1'
          testMatch: '/teardown\.ts/'
    ```

*   **use**: Sets global options that are applied to all tests within the run.

    <VerifiedTag value="Verified" />

    ```yaml
    playwrightConfigOptions:
      use:
        baseURL: 'https://www.example.com'
    ```

### 6. Tunnel Configuration

The `tunnel_settings` section is used for testing applications that are not publicly accessible (e.g., on localhost or behind a firewall).

*   **tunnel: true**: Enables the <BrandName /> Tunnel feature.
*   **autostart: true**: Instructs the SDK to automatically manage the tunnel's lifecycle (start and stop).

## Running Your Tests

To execute your tests on the <BrandName /> platform, you will use the `playwright-node-sdk` CLI wrapper followed by the standard `playwright test` command.

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk playwright test --config Optional path-of-config.yml
```

### Execution Workflow

When this command is run, the SDK performs the following steps:

1.  Reads and parses the `lambdatest.yml` configuration file.
2.  If `tunnel: true` and `autostart: true` are set, it establishes a secure connection via the <BrandName /> Tunnel.
3.  Generates a temporary, in-memory Playwright configuration that includes the necessary hooks to connect to the <BrandName /> grid.
4.  Executes your Playwright tests using this temporary configuration.
5.  Upon test completion, it terminates the <BrandName /> Tunnel (if started) and cleans up any temporary artifacts.

You can pass any standard Playwright CLI options directly to this command. For instance, to run a specific test file:

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk playwright test tests/my-test.spec.js
