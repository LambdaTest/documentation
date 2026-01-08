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
url: https://www.testmu.ai/support/docs/smartui-sdk-tunnel
slug: smartui-sdk-tunnel

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
