---
id: smartui-sdk-tunnel
title: Using TestMu AI Tunnel with SmartUI SDK
sidebar_label: Tunnel Configuration
description: Learn how to use TestMu AI Tunnel with SmartUI SDK for testing internal, development, and staging environments
keywords:
  - Visual Regression
  - SmartUI SDK
  - TestMu AI Tunnel
  - Local Testing
  - Internal Testing
url: https://www.testmuai.com/support/docs/smartui-sdk-tunnel/
slug: smartui-sdk-tunnel/
canonical: https://www.testmu.ai/support/docs/smartui-sdk-tunnel/

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
      "@id": "https://www.testmuai.com/support/docs/smartui-sdk-tunnel/"
    },
    "headline": "Using TestMu AI Tunnel with SmartUI SDK",
    "description": "Learn how to use TestMu AI Tunnel with SmartUI SDK for testing internal, development, and staging environments",
    "url": "https://www.testmuai.com/support/docs/smartui-sdk-tunnel/",
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
      "TestMu AI Tunnel"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Working knowledge of npm CLI commands; Understanding of tunneling concepts for local testing; Valid TestMu AI credentials (username and access key); Familiarity with SmartUI CLI configuration files; SmartUI CLI installed and configured.",
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
        "name": "For automatic tunnel setup, add the following configuration to your .smartui.json file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"tunnel\": {\n    \"type\": \"auto\",\n    \"user\": \"<lambdatest-user>\",  // Optional: Overrides LT_USERNAME if present in env\n    \"key\": \"<lambdatest-accesskey>\",  // Optional: Overrides LT_ACCESS_KEY if present in env\n    \"port\": \"<port>\",  // Optional: Default port if not specified\n    \"proxyHost\": \"127.0.0.1\",  // Optional\n    \"proxyPort\": \"8000\",  // Optional\n    \"proxyUser\": \"user\",  // Optional: Proxy authentication\n    \"proxyPass\": \"password\",  // Optional: Proxy authentication\n    \"dir\": \"<path-to-local-folder>\",  // Optional: Directory to test\n    \"v\": true,  // Optional: Enable verbose logging\n    \"logFile\": \"/path/to/logs.txt\"  // Optional: Custom log file location\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For manual tunnel setup, add the following configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"tunnel\": {\n    \"type\": \"manual\",\n    \"tunnelName\": \"my-tunnel-name\"  // Required for manual mode\n    //Add user and key in case LT_USERNAME and LT_ACCESSKEY not provided in env variables\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Basic Automatic Setup",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"web\": {\n    \"browsers\": [\"chrome\", \"firefox\"],\n    \"viewports\": [[1920, 1080], [1366, 768]]\n  },\n  \"tunnel\": {\n    \"type\": \"auto\"\n      //Add user and key in case LT_USERNAME and LT_ACCESSKEY not provided in env variables\n\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Advanced Automatic Setup with Proxy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"web\": {\n    \"browsers\": [\"chrome\", \"firefox\"],\n    \"viewports\": [[1920, 1080], [1366, 768]]\n  },\n  \"tunnel\": {\n    \"type\": \"auto\",\n    \"user\": \"<lambdatest-user>\",  // Optional: Overrides LT_USERNAME if present in env\n    \"key\": \"<lambdatest-accesskey>\",  // Optional: Overrides LT_ACCESS_KEY if present in env\n    \"proxyHost\": \"127.0.0.1\",\n    \"proxyPort\": \"8000\",\n    \"dir\": \"./src\",\n    \"v\": true\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Manual Tunnel Setup",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"web\": {\n    \"browsers\": [\"chrome\", \"firefox\"],\n    \"viewports\": [[1920, 1080], [1366, 768]]\n  },\n  \"tunnel\": {\n    \"type\": \"manual\",\n    \"tunnelName\": \"my-tunnel\",\n    \"user\": \"<lambdatest-user>\",  // Optional: Overrides LT_USERNAME if present in env\n    \"key\": \"<lambdatest-accesskey>\",  // Optional: Overrides LT_ACCESS_KEY if present in env\n  }\n}"
      }
    ],
    "dateModified": "2026-02-03T20:41:06+05:30"
  }) }}
/>

# Using <BrandName /> Tunnel with SmartUI SDK

<BrandName /> Tunnel enables secure testing of your local, development, or privately hosted environments using SmartUI SDK. This guide explains how to configure and use <BrandName /> Tunnel with SmartUI SDK.

:::warning Important
Tunnel configuration is only supported with the `exec` mode of SmartUI SDK. It is not compatible with
`capture`, `upload`, or `figma` commands. For more information about exec mode, refer to our [SmartUI CLI Exec
documentation](/support/docs/smartui-cli-exec/).
:::

## Prerequisites

- Working knowledge of npm CLI commands
- Understanding of tunneling concepts for local testing
- Valid <BrandName /> credentials (username and access key)
- Familiarity with SmartUI CLI configuration files
- SmartUI CLI installed and configured

## Configuration Options

<BrandName /> Tunnel supports two configuration modes:

### 1. Automatic Tunnel Configuration

For automatic tunnel setup, add the following configuration to your `.smartui.json` file:

```json
{
  "tunnel": {
    "type": "auto",
    "user": "<lambdatest-user>",  // Optional: Overrides LT_USERNAME if present in env
    "key": "<lambdatest-accesskey>",  // Optional: Overrides LT_ACCESS_KEY if present in env
    "port": "<port>",  // Optional: Default port if not specified
    "proxyHost": "127.0.0.1",  // Optional
    "proxyPort": "8000",  // Optional
    "proxyUser": "user",  // Optional: Proxy authentication
    "proxyPass": "password",  // Optional: Proxy authentication
    "dir": "<path-to-local-folder>",  // Optional: Directory to test
    "v": true,  // Optional: Enable verbose logging
    "logFile": "/path/to/logs.txt"  // Optional: Custom log file location
  }
}
```

### 2. Manual Tunnel Configuration

For manual tunnel setup, add the following configuration:

```json
{
  "tunnel": {
    "type": "manual",
    "tunnelName": "my-tunnel-name"  // Required for manual mode
    //Add user and key in case LT_USERNAME and LT_ACCESSKEY not provided in env variables
  }
}
```

:::note
Configuration values take precedence over environment variables when both are present.
:::

## Environment Variables Support

The tunnel configuration automatically uses the following environment variables if not specified in the config:

- `LT_USERNAME`: <BrandName /> username
- `LT_ACCESS_KEY`: <BrandName /> access key

## Example Configurations

### Basic Automatic Setup
```json
{
  "web": {
    "browsers": ["chrome", "firefox"],
    "viewports": [[1920, 1080], [1366, 768]]
  },
  "tunnel": {
    "type": "auto"
      //Add user and key in case LT_USERNAME and LT_ACCESSKEY not provided in env variables

  }
}
```

### Advanced Automatic Setup with Proxy
```json
{
  "web": {
    "browsers": ["chrome", "firefox"],
    "viewports": [[1920, 1080], [1366, 768]]
  },
  "tunnel": {
    "type": "auto",
    "user": "<lambdatest-user>",  // Optional: Overrides LT_USERNAME if present in env
    "key": "<lambdatest-accesskey>",  // Optional: Overrides LT_ACCESS_KEY if present in env
    "proxyHost": "127.0.0.1",
    "proxyPort": "8000",
    "dir": "./src",
    "v": true
  }
}
```

### Manual Tunnel Setup
```json
{
  "web": {
    "browsers": ["chrome", "firefox"],
    "viewports": [[1920, 1080], [1366, 768]]
  },
  "tunnel": {
    "type": "manual",
    "tunnelName": "my-tunnel",
    "user": "<lambdatest-user>",  // Optional: Overrides LT_USERNAME if present in env
    "key": "<lambdatest-accesskey>",  // Optional: Overrides LT_ACCESS_KEY if present in env
  }
}
```

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='automatic-vs-manual-mode' label='Automatic vs Manual Mode' default>

**Automatic vs Manual Mode**

- Use automatic mode for simple setups and quick testing
   - Use manual mode when you need more control over tunnel lifecycle

</TabItem>
<TabItem value='credentials-management' label='Credentials Management' >

**Credentials Management**

- Prefer environment variables for sensitive information
   - Use config file for non-sensitive settings

</TabItem>
<TabItem value='proxy-configuration' label='Proxy Configuration' >

**Proxy Configuration**

- Specify proxy settings in config when using corporate networks
   - Test proxy settings before running full test suite

</TabItem>
<TabItem value='logging' label='Logging' >

**Logging**

- Enable verbose logging (`"v": true`) for troubleshooting
   - Specify custom log file location for persistent logs

</TabItem>
<TabItem value='directory-testing' label='Directory Testing' >

**Directory Testing**

- Always specify the directory to test when working with local files
   - Ensure the directory path is accessible and contains the necessary files

:::tip
For more detailed information about <BrandName /> Tunnel features and configurations, refer to our [Advanced Tunnel Features documentation](/support/docs/advanced-tunnel-features).
:::

</TabItem>
</Tabs>

1. **Automatic vs Manual Mode**
   - Use automatic mode for simple setups and quick testing
   - Use manual mode when you need more control over tunnel lifecycle

2. **Credentials Management**
   - Prefer environment variables for sensitive information
   - Use config file for non-sensitive settings

3. **Proxy Configuration**
   - Specify proxy settings in config when using corporate networks
   - Test proxy settings before running full test suite

4. **Logging**
   - Enable verbose logging (`"v": true`) for troubleshooting
   - Specify custom log file location for persistent logs

5. **Directory Testing**
   - Always specify the directory to test when working with local files
   - Ensure the directory path is accessible and contains the necessary files

:::tip
For more detailed information about <BrandName /> Tunnel features and configurations, refer to our [Advanced Tunnel Features documentation](/support/docs/advanced-tunnel-features).
:::
