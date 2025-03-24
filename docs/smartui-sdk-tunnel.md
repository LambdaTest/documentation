---
id: smartui-sdk-tunnel
title: Using LambdaTest Tunnel with SmartUI SDKs
sidebar_label: Tunnel Configuration
description: Learn how to use LambdaTest Tunnel with SmartUI SDK for testing internal, development, and staging environments
keywords:
  - Visual Regression
  - SmartUI SDK
  - LambdaTest Tunnel
  - Local Testing
  - Internal Testing
url: https://www.lambdatest.com/support/docs/smartui-sdk-tunnel/
slug: smartui-sdk-tunnel/
---

# Using LambdaTest Tunnel with SmartUI SDK

LambdaTest Tunnel allows you to test your internal, development, or staging environments securely using SmartUI SDK. This guide explains how to configure and use LambdaTest Tunnel with SmartUI SDK.

:::warning Important
Tunnel configuration is only supported with the `exec` mode of SmartUI SDK. It is not compatible with `capture`, `upload`, or `figma` commands. For more information about exec mode, refer to our [SmartUI CLI Exec documentation](/support/docs/smartui-cli-exec/).
:::

## Prerequisites

1. The tunnel should be started by the same user who created the SmartUI project
2. The tunnel must remain active throughout the entire SmartUI execution steps, from authentication to build completion

## Configuration

To enable tunnel testing with SmartUI SDK, add the following configuration to your `.smartui.json` file:

```json
{
  "tunnel": true,
  "tunnelName": "my-tunnel"
}
```

### Configuration Parameters

- **tunnel**: Set to `true` to enable tunnel testing
- **tunnelName**: Specify the name of your tunnel instance (must match the name used when starting the tunnel)

## Setting Up LambdaTest Tunnel

1. Download and install LambdaTest Tunnel by following the instructions in our [Tunnel documentation](/support/docs/advanced-tunnel-features/)

2. Start the tunnel with a specific name:
```bash
./LT --user {user-name} --key {access-key} --tunnelName my-tunnel
```

3. Wait for the "Tunnel is connected" message before running your SmartUI tests

:::warning Important
- Ensure the tunnel remains active throughout your testing session
- The tunnel name in your configuration must match the `tunnelName` used when starting the tunnel
- Only the user who created the SmartUI project can start and use the tunnel for testing
:::

## Example Usage

Here's a complete example of a SmartUI configuration file using tunnel:

```json
{
  "web": {
    "browsers": ["chrome", "firefox"],
    "viewports": [
      [1920, 1080],
      [1366, 768]
    ]
  },
  "tunnel": true,
  "tunnelName": "my-tunnel",
  "waitForTimeout": 1000
}
```

For more detailed information about LambdaTest Tunnel features and configurations, please refer to our [Advanced Tunnel Features documentation](/support/docs/advanced-tunnel-features/).

:::tip
When testing with tunnel, make sure to:
1. Start the tunnel before running your tests
2. Use the correct tunnel name in your configuration
3. Keep the tunnel running until all tests are complete
4. Use the same user credentials for both tunnel and SmartUI project
::: 