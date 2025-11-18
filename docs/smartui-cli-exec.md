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
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

SmartUI CLI exec command offers you various options to manage snapshot server and execute your visual testing scripts. This guide will walk you through the available commands and their usage.

## Prerequisites

- Basic understanding of Command Line Interface
- SmartUI CLI version 4.1.43 or higher installed for the start, stop and ping commands
- A properly configured SmartUI CLI project

## Available Commands

SmartUI CLI offers the following exec commands:

- `npx smartui exec` - Execute a command with SmartUI server running
- `npx smartui exec:start` - Start the SmartUI snapshot server
- `npx smartui exec:stop` - Stop the SmartUI snapshot server
- `npx smartui exec:ping` - Check if the SmartUI server is running (uses custom HTTP client)
- `npx smartui exec:pingTest` - Check if the SmartUI server is running (uses default HTTP client)

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
| `--scheduled <string>` | Specify the schedule ID for scheduled test runs |
| `--show-render-errors` | Show render errors from SmartUI build |
| `--userName <string>` | Override LambdaTest username (overrides environment variable) |
| `--accessKey <string>` | Override LambdaTest access key (overrides environment variable) |
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

6. Running scheduled tests:
```bash
npx smartui exec --scheduled "schedule-123" -- npm test
```

7. Showing render errors:
```bash
npx smartui exec --show-render-errors -- npm test
```

8. Overriding credentials:
```bash
npx smartui exec --userName "user" --accessKey "key" -- npm test
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

To verify if the SmartUI server is running, you can use either of these commands:

**Using exec:ping (custom HTTP client):**
```bash
npx smartui exec:ping
```

**Using exec:pingTest (default HTTP client):**
```bash
npx smartui exec:pingTest
```

Both commands check if the server is running at the address specified in `SMARTUI_SERVER_ADDRESS` environment variable (default: `http://localhost:49152`).

## Running Tests with the Server

### Step 1: Configure Server Address

For most test frameworks (except Selenium SDKs), you'll need to set the server address:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export SMARTUI_SERVER_ADDRESS='http://localhost:49152'
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set SMARTUI_SERVER_ADDRESS='http://localhost:49152'
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

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

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='server-termination' label='Server Termination' default>

**Server Termination**

Always use `exec:stop` to properly terminate the server.

</TabItem>

<TabItem value='timeouts' label='Timeouts'>

**Timeouts**

Set appropriate timeouts for your tests.

</TabItem>

<TabItem value='snapshot-naming' label='Snapshot Naming'>

**Snapshot Naming**

Use meaningful names for your snapshots.

</TabItem>

<TabItem value='environment-variables' label='Environment Variables'>

**Environment Variables**

Configure environment variables before starting your IDE.

</TabItem>

<TabItem value='configuration-files' label='Configuration Files'>

**Configuration Files**

Consider using configuration files for complex setups.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='server-status' label='Server Status' default>

**Server Status**

Verify the server is running using `exec:ping`.

</TabItem>

<TabItem value='server-address' label='Server Address'>

**Server Address**

Check if the server address is correctly configured.

</TabItem>

<TabItem value='port-conflicts' label='Port Conflicts'>

**Port Conflicts**

Ensure no other process is using the default port.

</TabItem>

<TabItem value='server-logs' label='Server Logs'>

**Server Logs**

Review the server logs for error messages.

</TabItem>
</Tabs>

### Getting Help

If you encounter issues not covered here:
- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [CLI Documentation](/support/docs/smartui-cli) for general CLI usage
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [CLI Documentation](/support/docs/smartui-cli)
- [CLI Upload](/support/docs/smartui-cli-upload)
- [Environment Variables](/support/docs/smartui-cli-env-variables)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>SmartUI CLI Exec Commands</span>
    </li>
  </ul>
</nav>