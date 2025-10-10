---
id: smartui-cli-exec
title: SmartUI CLI Exec Command
sidebar_label: Exec Command
description: Learn how to use SmartUI CLI exec commands to manage snapshot servers and execute tests
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/smartui-cli-exec/
slug: smartui-cli-exec/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SmartUI CLI exec command offers you various options to manage snapshot server and execute your visual testing scripts. This guide will walk you through the available commands and their usage.

## Prerequisites

- Basic understanding of Command Line Interface
- SmartUI CLI version 4.0.21 or higher installed for the start, stop and ping commands
- A properly configured SmartUI CLI project

## Available Commands

SmartUI CLI offers the following exec commands:

- `npx smartui exec` - Execute a command with SmartUI server running
- `npx smartui exec:start` - Start the SmartUI snapshot server
- `npx smartui exec:stop` - Stop the SmartUI snapshot server
- `npx smartui exec:ping` - Check if the SmartUI server is running

## Using the Exec Command

The `npx smartui exec` command allows you to run your tests with various configuration options. Here's the basic syntax:

```bash
npx smartui exec [options] -- <command>
```

### Available Options

| Option | Description |
|--------|-------------|
| `-P, --port <number>` | Specify a custom port number for the server (default: 49152) |
| `--fetch-results [filename]` | Fetch test results and save to a JSON file (default: results.json) |
| `--buildName <string>` | Specify a custom build name for the test run |
| `--config <file>` | Specify a configuration file to use |
| `-h, --help` | Display help information |

### Examples

1. Running with a custom port:
```bash
npx smartui exec -P 5000 -- npm test
```

2. Fetching results with custom filename:
```bash
npx smartui exec --fetch-results custom-results.json -- npm test
```

3. Specifying a build name:
```bash
npx smartui exec --buildName "Release-1.0" -- npm test
```

4. Using a configuration file:
```bash
npx smartui exec --config smartui-config.json -- npm test
```

5. Combining multiple options:
```bash
npx smartui exec -P 5000 --buildName "Release-1.0" --config smartui-config.json --fetch-results -- npm test
```

## Starting the Server

To start the SmartUI snapshot server:

```bash
npx smartui exec:start
```

This will start a local server that handles snapshot requests. By default, the server runs on port 49152.

## Stopping the Server

To properly stop the SmartUI snapshot server:

```bash
npx smartui exec:stop
```

> **Important:** It's recommended to use the `exec:stop` command rather than using Ctrl+C to terminate the server. Using Ctrl+C will cause the build to stop after 12 minutes of running.

## Checking Server Status

To verify if the SmartUI server is running:

```bash
npx smartui exec:ping
```

## Running Tests with the Server

### Step 1: Configure Server Address

For most test frameworks (except Selenium SDKs), you'll need to set the server address:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export SMARTUI_SERVER_ADDRESS='http://localhost:49152'
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set SMARTUI_SERVER_ADDRESS='http://localhost:49152'
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:SMARTUI_SERVER_ADDRESS="http://localhost:49152"
```
</TabItem>


</Tabs>

### Step 2: Execute Your Tests

You can run your tests using your preferred test runner:

```bash
# Using npm
npm test

# Using Maven
mvn test

# Using other test runners
your-test-command
```

### IDE Configuration

When running tests from IDEs like IntelliJ:
1. Ensure the `SMARTUI_SERVER_ADDRESS` environment variable is set in your IDE's run configuration
2. Configure the run configuration to use the appropriate test command


## Best Practices

1. Always use `exec:stop` to properly terminate the server
2. Set appropriate timeouts for your tests
3. Use meaningful names for your snapshots
4. Configure environment variables before starting your IDE
5. Consider using configuration files for complex setups

## Troubleshooting

If you encounter issues:

1. Verify the server is running using `exec:ping`
2. Check if the server address is correctly configured
3. Ensure no other process is using the default port
4. Review the server logs for error messages

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">SmartUI CLI Exec Commands</span>
    </li>
  </ul>
</nav> 