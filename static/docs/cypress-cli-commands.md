# Cypress CLI Commands Supported on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When you run Cypress tests on TestMu AI, the `lambdatest-cypress` CLI is how you initialize config, start builds, check build status, and generate reports from your terminal. This page lists every supported command and flag, with its purpose and value type, so you can look up the exact syntax while scripting a run.

## General Syntax

Every TestMu AI Cypress CLI command follows the same pattern: the CLI name, a command, then optional flags. Use this basic syntax as the template for the commands documented below.

```bash
lambdatest-cypress <command> [options]
```

The table below lists the top-level commands and Visual UI arguments available across the CLI.

| Command / Arg  | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| `--help`     | To get information of all the commands that can be run |
| `init`       | To create an initial config file                       |
| `run`        | To run tests on TestMu AI                             |
| `build-info` | To get information about the build                     |
| `build-stop` | To stop all the tests in the build                     |
| `generate-report` | To generate the test session report               |
| `--vip, --vi-project` | To set the smart ui project name.  The acceptable data type is `string` |
| `--vib , --vi-build` | To set the smart ui build name.  The acceptable data type is `string` |
| `--vibase , --vi-base` | To set that build as baseline for smart ui.  The acceptable data type is `boolean` |

## `init` Command

Run the `init` command to generate an initial TestMu AI configuration file for your project. It scaffolds the config and reporter files the CLI needs before its first run.

```bash
lambdatest-cypress init
```

On running the above command, the CLI generates the `base_reporter_config.json`, `custom_support_file.js`, and `lambdatest-config.json` files.

- **`base_reporter_config.json`**: This is the configuration file for the mochawesome reporter that TestMu AI uses to generate mochawesome reports, which in turn generate the commands section on the TestMu AI dashboard. For Cypress 10, the absence of this file may lead to the commands section not being visible on the dashboard.

- **`custom_support_file.js`**: By default, Cypress automatically captures screenshots when a test fails. For Cypress 10, to make the screenshot visible with the failed tests on the TestMu AI dashboard, move and import this file as recommended.

- **`lambdatest-config.json`**: This file contains configurations like TestMu AI credentials, capabilities, and run settings that are required to run the test.

## `run` Command

The `run` command starts a Cypress test build on TestMu AI and accepts a large set of flags to control browsers, parallelism, tunneling, and reporting.

**Note**
For detailed examples of each Cypress flag, see [how to configure Cypress run settings](/support/docs/run-settings/).

To start running the test build, use the command below.

```bash
lambdatest-cypress run
```

The table below lists the additional flags available with the `run` command, along with each flag's purpose and value type.

| Flag | Purpose | Type |
|------|---------|------|
| `--version` | Show version number | Boolean |
| `--help` | Show help | Boolean |
| `--ccf, --cypress-config-file` | Path of the config file | String |
| `--user, --username` | TestMu AI username | String |
| `--ak, --access_key` | TestMu AI access key | String |
| `--lcf, --lambdatest-config-file` | Path of the TestMu AI config file | String |
| `-s, --specs` | Path of the spec file, directory, or pattern | String |
| `--env, --environment` | Specify environment name | String |
| `--bn, --build-name` | Set build name | String |
| `-t, --tags` | Run tests with specific tags | String |
| `-p, --parallels` | Number of parallel sessions | String |
| `--envs, --env-variables` | Set environment variables before test execution | String |
| `--tun, --tunnel` | Enable TestMu AI tunnel | String |
| `--tname, --tunnel_name` | Set TestMu AI tunnel name | String |
| `--brs, --browsers` | Run tests on specified browsers in format `platform:browser:version` | String |
| `--bi, --build-identifier` | Set build identifier or build counter | String |
| `--if, --ignore_files` | Files to ignore in project zip | String |
| `--sync, --sync-mode` | Enable sync mode to wait for test completion | String |
| `--autostart, --tat` | Enable tunnel auto start | String |
| `--headless, --headless-mode` | Run tests in headless mode | Boolean |
| `--net, --network` | Capture network logs | String |
| `--eof, --exit-on-failure` | Exit with code 1 on failure | String |
| `--cy, --cypress_settings` | Pass Cypress settings | String |
| `--geo, --geo_location` | Pass geo country code | String |
| `--sof, --stop_on_failure` | Stop other tests if any test in session fails | Boolean |
| `--ra, --reject_unauthorized` | Reject self-signed certificates in external requests | Boolean |
| `--bt, --build-tags` | Set build tags | String |
| `--sys-envs, --sys-env-variables` | Set system environment variables during test run | String |
| `--envfl, --env-file` | Path of `.env` file | String |
| `--npm-f, --npm-force` | Force npm install | Boolean |
| `--npm-lpd, --legacy-peer-deps` | Use legacy peer dependencies during npm install | Boolean |
| `--vip, --vi-project` | Set Visual UI project name | String |
| `--vib, --vi-build` | Set Visual UI build name | String |
| `--vibase, --vi-base` | Set Visual UI baseline build | Boolean |
| `--res, --resolution` | Set machine resolution | String |
| `--dp, --dedicated_proxy` | Enable dedicated proxy | Boolean |
| `--npm_tun, --npm_via_tunnel` | Install npm packages behind private VPN (increases build duration) | Boolean |
| `--md, --max_duration` | Stop test if running longer than specified minutes | String |
| `--cmd_log, --command_log` | Show command logs on dashboard | String |
| `--ret_fail, --retry_failed` | Retry failed tests in a new build | Boolean |
| `--net_http2, --network_http2` | Capture HTTP2 network logs | Boolean |
| `--net_ws, --network_ws` | Bypass WebSocket calls for network logs | Boolean |
| `--node18, --useNode18` | Use Node.js v18 for Cypress runtime | Boolean |
| `--nodeV, --useNodeVersion` | Specify Node.js version for Cypress runtime | String |
| `--net_sse, --network_sse` | Bypass SSE events for network logs | Boolean |
| `--cypress_accessibility, --accessibility` | Enable accessibility testing for Cypress | Boolean |
| `--tz, --timezone` | Set custom timezone in machine | String |
| `--reg, --region` | Set data center region (e.g., us, eu, ap) | String |
| `--pC, --privateCloud` | Set custom private cloud | String |

## `build-info` Command

Use the `build-info` command to fetch details about a specific build, such as its status and session breakdown, from the terminal.

```bash
lambdatest-cypress build-info
```

The table below lists the additional arguments available with the `build-info` command.

| Flag   | Purpose    | Type |
| --------| -----------| -----|
| `--id, --build-id` | Build Identifier | String, Required |
| `--user, --username` | Your TestMu AI username | String |
| `--ak, --access_key` | Your TestMu AI access key | String |

## `build-stop` Command

Use the `build-stop` command to stop all the tests in a build, either by session id or by targeting the last test session.

```bash
lambdatest-cypress build-stop
```

The table below lists the additional arguments available with the `build-stop` command.

| Flag             | Purpose   |
| -------------------- | --------- |
| `--id, --session_id` | Identifies the session |
| `--sls, --stop_last_session` | Stop the last test session |

Passing `--stop_last_session` stops the most recent test session.

Passing `--session_id` stops the specific session you identify.

## Related Cypress Guides

Continue with the guides below to run and scale your Cypress tests on TestMu AI.

- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) by cloning the sample project and running it on the cloud.
- [Generate Cypress tests with AI coding assistants](/support/docs/cypress-agent-skills/) using Cypress Agent Skills.
- [Check the supported browsers and OS](/support/docs/supported-browsers-and-os/) to see the versions and platforms you can target.
