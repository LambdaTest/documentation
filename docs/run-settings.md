---
id: run-settings
title: Configuring Cypress Test Execution
hide_title: false
sidebar_label: Configure Cypress Test Execution
description: Explore TestMu AI's comprehensive guide on configuring run settings for seamless cross-browser testing. Optimize your testing workflow today.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests
url: https://www.testmuai.com/support/docs/run-settings/
site_name: TestMu AI
slug: run-settings/
canonical: https://www.testmuai.com/support/docs/run-settings/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Cypress Run Settings",
          "item": `${BRAND_URL}/support/docs/run-settings/`
        }]
      })
    }}
></script>
You can specify Cypress CLI flags to run on <BrandName /> in two ways:

1. Adding the CLI flag details in `lambdatest-config.json` file
2. Using the CLI 

:::tip
If a glob pattern path is passed in the specs flag using CLI, you must enclose it within double quotes as shown:
`lambdatest-cypress-cli run --env=stage --verbose --specs "./cypress/integration/examples/*"`
:::

## Cypress Config File
#### Using `lambdatest-config.json`
You can use the `cypress_config_file` key in `run_settings` option to specify the Cypress configuration file.

> **NOTE :** Cypress 10 and above versions automatically identify the `cypress.config.js` file in the project. Therefore, you don't need to specify the `cypress_config.js` capability.

<Tabs className="docs__val">
  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "cypress_config_file": "cypress.json",
      "video": true
    }
  }
  ```
  </TabItem>

  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  // In case of Cypress 10 and above, you can specify your custom config files by using the --cy flag.
  lambdatest-cypress-cli run --env=stage,video=true --verbose --specs "./cypress/integration/examples/*"
  ```
  </TabItem>
</Tabs>

#### Using CLI
You can specify the Cypress configuration file using the below CLI flag with `run` command.

| Flag                         | Purpose                 | Type   |
| ---------------------------- | ----------------------- | ------ | 
| --ccf, --cypress-config-file | Path of the config file | String |

## Specifying Spec Files
#### Using `lambdatest-config.json`
You can use the *specs* key in *run_settings* option to specify the Spec files.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "specs": "**/*.cy.js",
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "specs": "./cypress/integration/examples/*.spec.js",
    }
  }

  ```
  </TabItem>
</Tabs>

#### Using CLI
You can specify the Spec files using the below CLI flag with `run` command.

| Flag        | Purpose                                       | Type   |
| ----------- | --------------------------------------------- | ------ | 
| -s, --specs | Path of the spec file or directory or pattern | String |

## Exclude Specs Files
You can use the *exclude_specs* key in *run_settings* option to specify the spec files that you want to exclude from the test execution.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "exclude_specs": "./examples/assertion.spec.js, ./examples/connectors.spec.js",
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
          "exclude_specs": "./examples/assertion.spec.js, ./examples/connectors.spec.js",
    }
  }
  ```
  </TabItem>
</Tabs>

#### Using CLI

| Flag                         | Purpose                                        | Type   |
| ---------------------------- | ---------------------------------------------- | ------ |
| --exclude_specs              | Spec files to exclude from test execution      | String |

## Geolocation
#### Using `lambdatest-config.json`
You can use the *geo_location* key in *run_settings* option to specify the Spec files.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "geo_location": "<country_code>",
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "geo_location": "<country_code>",
    }
  }
  ```
  </TabItem>
</Tabs>

#### Using CLI
You can specify the geolocation files using the below CLI flag with `run` command.

| Flag                  | Purpose                   | Type   |
| --------------------- | ------------------------- | ------ |
| --geo, --geo_location | Pass the Geo country code | String |

## Resolution
#### Using `lambdatest-config.json`
Use the *resolution* key in *run_settings* option to specify the resolution.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "resolution": "1024x768",
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "resolution": "1024x768",
    }
  }
  ```
  </TabItem>
</Tabs>

#### Using CLI
You can specify the system's resolution using the below CLI flag with `run` command.

| Flag   | Purpose             | Type   |
| ------ | ------------------- | ------ |
|  --res | Pass the resolution | String |

*It will change the resolution of the system but the viewport in which Cypress launches the website is controlled by Cypress.*

**Supported resolutions**: `1024x768`, `1280x960`, `1280x1024`, `1600x1200`, `1920x1080`, `2048x1536`, `2560x1440`

## Excluding Files From Test Uploads
#### Using `lambdatest-config.json`
You can use the *ignore_files* key in *run_settings* option to ignore or exclude any particular files while uploading your tests.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "ignore_files": "<glob_pattern>",
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "ignore_files": "<glob_pattern>",
    }
  }
  ```
  </TabItem>
</Tabs>

#### Using CLI
Specify the files that you want to exclude using the below CLI flag with `run` command.

| Flag                | Purpose                            | Type   |
| ------------------- | ---------------------------------- | ------ |
| --if, --ignore_files| Files to ignore in the zip project | String |

## Max Duration for Test Session Timeout
When running tests, if you encounter a situation where a particular test is running for an extended period and causing other parallel tests to be blocked, in this case, you can use the *max duration* flag to mitigate the issue. This flag allows you to specify a maximum time limit for the test to run before it is automatically stopped, thus freeing up resources for other tests to execute.

The valid input for `max_duration` must be an integer, and it can only be within the range of 2 to 240 minutes.
#### Using `lambdatest-config.json`
You can use the `max_duration` key in *run_settings* option to specify the session timeout.

<Tabs className="docs__val">
  <TabItem value="ios" label="Cypress v10" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "max_duration":2
    }
  }
  ```
  </TabItem>

  <TabItem value="android" label="Cypress v9" default>

  ```javascript title="lambdatest-config.json"
  {
    "run_settings": {
      "max_duration":2
    }
  }
  ```
  </TabItem>
</Tabs>

#### Using CLI
 You can specify the timeout using the below CLI flag with `run` command.

| Flag           | Purpose                        | Type    |
| -------------- | ------------------------------ | ------- |
| --max_duration | idle timeout of a test session | Integer |

## Organizing Tests
You can name your test cases and categorize your Cypress builds by build number, build name, test and build tags for easier analysis. Use the following keys to organize your tests.

| Key          |  Description                                  | Type   |
| ------------ | --------------------------------------------  | ------ |
| build-name   | Represent the name of the build for your test | String |
| project-name | Represents the name of your project           | String |
| tags         | Group your tests                              | String |

**Example**:

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "build-name": "Cypress 10 Demo",
    "project-name": "DemoTest",
    "tags": "Sprint1",
  }
}
```

#### Using CLI

| Flag              | Purpose                    | Type   |
| ----------------- | -------------------------- | ------ |
| --bn, --build-name | Set build name            | String |
| -t, --tags         | Run tests with specific tags | String |

## Headless Browser
You can run Headless tests with Cypress by the `headless` key to `true`.

| Key      | Description               | Type    |
| -------- | ------------------------- | ------- |
| headless | Run test in Headless mode | Boolean |

**Example**:

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "headless": "true",
  }
}
```

#### Using CLI

| Flag                        | Purpose                  | Type    |
| --------------------------- | ------------------------ | ------- |
| --headless, --headless-mode | Run tests in headless mode | Boolean |

## Capture Network Logs
You can generate Network logs with Cypress by setting the `network` key to `true`.

| Key |  Description | Type |
| -------- | ------------ | -------- |
| network   | Record network packets while the test is running | Boolean |

**Example**:

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network": "true",
  }
}
```

#### Using CLI

| Flag            | Purpose              | Type   |
| --------------- | -------------------- | ------ |
| --net, --network | Capture network logs | String |

## NPM Package Dependencies
In order to run your tests on <BrandName />, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on <BrandName />.

Below are the ways through which <BrandName /> detects the dependencies which has to be installed before running the test on <BrandName />.

#### Using `npm_dependencies`
Inside `run_settings` of `lambdatest-config.json`, you can provide the list of NPM dependencies:

```javascript title="lambdatest-config.json"
"run_settings": {
  "npm_dependencies": {
    "cypress": "9.0.0",
  },
},
```

#### Using `package.json`
<BrandName /> will automatically detects the dependencies that has to be installed from `package.json`.

```javascript title="package.json"
"devDependencies": {
    "cypress": "9.2.1",
    "eslint": "7.0.0",
    "eslint-plugin-json-format": "2.0.1",
    "eslint-plugin-mocha": "5.3.0",
  },
```

:::tip note
It's recommended to use `npm_dependencies` instead of `package.json` because `package.json` may contain the dependencies which are not actually used while running the Cypress tests and also, installing these unwanted dependencies will increase the build time.
:::

## Specific Node Version
<BrandName /> allows you to specify the Node.js version for running your tests using the ``useNodeVersion`` capability in the `run_settings` section of the `lambdatest-config.json` file. This capability provides greater flexibility and ensures compatibility with your project's dependencies and environment.

> Supported Versions are 18, 20 and 22. The exact version will be used are `18.17.1`, `20.18.0`, and `22.11.0` respectively

```javascript title="lambdatest-config.json"
"run_settings": {
  "useNodeVersion":"20"
}
```

#### Using CLI

| Flag                       | Purpose                                    | Type    |
| -------------------------- | ------------------------------------------ | ------- |
| --nodeV, --useNodeVersion  | Specify Node.js version for Cypress runtime | String  |
| --node18, --useNode18      | Use Node.js v18 for Cypress runtime (legacy) | Boolean |

## Environment Variables
#### Using `lambdatest-config.json`
You can use the `environment` key in `run_settings` option to set environment variables that will be available during test execution.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "environment": "KEY1=value1,KEY2=value2"
  }
}
```

#### Using CLI

| Flag                       | Purpose                                          | Type   |
| -------------------------- | ------------------------------------------------ | ------ |
| --envs, --env-variables    | Set environment variables before test execution  | String |

## System Environment Variables
You can use system environment variables during test execution using the `sys_env_keys` key. This allows you to pass system-level environment variable keys that will be available in the test environment.

#### Using `lambdatest-config.json`

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "sys_env_keys": "KEY1,KEY2"
  }
}
```

#### Using CLI

| Flag                              | Purpose                                              | Type   |
| --------------------------------- | ---------------------------------------------------- | ------ |
| --sys-envs, --sys-env-variables   | Set system environment variables during test run     | String |

## Environment File
You can specify a `.env` file path to load environment variables from a file.

#### Using `lambdatest-config.json`

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "env_file": ".env"
  }
}
```

#### Using CLI

| Flag               | Purpose              | Type   |
| ------------------ | -------------------- | ------ |
| --envfl, --env-file | Path of `.env` file | String |

## Tunnel
#### Using `lambdatest-config.json`
You can use the `tunnel` key in `run_settings` to enable <BrandName /> tunnel for testing locally hosted or privately hosted pages.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "tunnel": true
  }
}
```

#### Using CLI

| Flag            | Purpose                   | Type   |
| --------------- | ------------------------- | ------ |
| --tun, --tunnel | Enable LambdaTest tunnel  | String |

## Tunnel Name
#### Using `lambdatest-config.json`
You can use the `tunnel_name` key in `run_settings` to specify the tunnel name when using multiple tunnels.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "tunnel_name": "my-tunnel"
  }
}
```

#### Using CLI

| Flag                   | Purpose                     | Type   |
| ---------------------- | --------------------------- | ------ |
| --tname, --tunnel_name | Set LambdaTest tunnel name  | String |

## Tunnel Auto Start
#### Using `lambdatest-config.json`
You can use the `autostart` key in `run_settings` to automatically start a tunnel before test execution.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "autostart": true
  }
}
```

#### Using CLI

| Flag              | Purpose                   | Type   |
| ----------------- | ------------------------- | ------ |
| --autostart, --tat | Enable tunnel auto start | String |

## Build Identifier
#### Using `lambdatest-config.json`
You can use the `build_identifier` key in `run_settings` to set a build identifier or build counter for your test builds.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "build_identifier": "build-123"
  }
}
```

#### Using CLI

| Flag                      | Purpose                                 | Type   |
| ------------------------- | --------------------------------------- | ------ |
| --bi, --build-identifier  | Set build identifier or build counter   | String |

## Build Tags
#### Using `lambdatest-config.json`
You can use the `build_tags` key in `run_settings` to set build-level tags for categorizing your builds.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "build_tags": "nightly,regression"
  }
}
```

#### Using CLI

| Flag              | Purpose         | Type   |
| ----------------- | --------------- | ------ |
| --bt, --build-tags | Set build tags | String |

## Parallels
#### Using `lambdatest-config.json`
You can use the `parallels` key in `run_settings` to specify the number of parallel sessions for test execution.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "parallels": 5
  }
}
```

#### Using CLI

| Flag              | Purpose                        | Type   |
| ----------------- | ------------------------------ | ------ |
| -p, --parallels   | Number of parallel sessions    | String |

## Stop on Failure
#### Using `lambdatest-config.json`
You can use the `stop_on_failure` key in `run_settings` to stop other tests if any test in the session fails.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "stop_on_failure": true
  }
}
```

#### Using CLI

| Flag                     | Purpose                                           | Type    |
| ------------------------ | ------------------------------------------------- | ------- |
| --sof, --stop_on_failure | Stop other tests if any test in session fails     | Boolean |

## Exit on Failure
#### Using `lambdatest-config.json`
You can use the `exit_on_failure` key in `run_settings` to exit the CLI with code 1 if any test fails.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "exit_on_failure": true
  }
}
```

#### Using CLI

| Flag                     | Purpose                        | Type   |
| ------------------------ | ------------------------------ | ------ |
| --eof, --exit-on-failure | Exit with code 1 on failure    | String |

## Retry Failed Tests
#### Using `lambdatest-config.json`
You can use the `retry_failed` key in `run_settings` to retry failed tests in a new build.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "retry_failed": true
  }
}
```

#### Using CLI

| Flag                       | Purpose                             | Type    |
| -------------------------- | ----------------------------------- | ------- |
| --ret_fail, --retry_failed | Retry failed tests in a new build   | Boolean |

## Reject Unauthorized
#### Using `lambdatest-config.json`
You can use the `reject_unauthorized` key in `run_settings` to control whether self-signed SSL certificates are accepted during external requests.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "reject_unauthorized": true
  }
}
```

#### Using CLI

| Flag                        | Purpose                                                     | Type    |
| --------------------------- | ----------------------------------------------------------- | ------- |
| --ra, --reject_unauthorized | Reject self-signed certificates in external requests        | Boolean |

## Dedicated Proxy
#### Using `lambdatest-config.json`
You can use the `dedicated_proxy` key in `run_settings` to enable a dedicated proxy for your test sessions.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "dedicated_proxy": true
  }
}
```

#### Using CLI

| Flag                    | Purpose                  | Type    |
| ----------------------- | ------------------------ | ------- |
| --dp, --dedicated_proxy | Enable dedicated proxy   | Boolean |

## Cypress Settings
#### Using `lambdatest-config.json`
You can use the `cypress_settings` key in `run_settings` to pass additional Cypress settings.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "cypress_settings": "video=true,screenshotOnRunFailure=true"
  }
}
```

#### Using CLI

| Flag                      | Purpose                | Type   |
| ------------------------- | ---------------------- | ------ |
| --cy, --cypress_settings  | Pass Cypress settings  | String |

## NPM Force Install
#### Using `lambdatest-config.json`
You can use the `npm_force` key in `run_settings` to force npm install and bypass dependency conflicts.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "npm_force": true
  }
}
```

#### Using CLI

| Flag                  | Purpose            | Type    |
| --------------------- | ------------------ | ------- |
| --npm-f, --npm-force  | Force npm install  | Boolean |

## Legacy Peer Dependencies
#### Using `lambdatest-config.json`
You can use the `legacy_peer_deps` key in `run_settings` to use legacy peer dependencies during npm install.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "legacy_peer_deps": true
  }
}
```

#### Using CLI

| Flag                          | Purpose                                            | Type    |
| ----------------------------- | -------------------------------------------------- | ------- |
| --npm-lpd, --legacy-peer-deps | Use legacy peer dependencies during npm install   | Boolean |

## NPM Via Tunnel
#### Using `lambdatest-config.json`
You can use the `npm_via_tunnel` key in `run_settings` to install npm packages behind a private VPN through the tunnel. Note that this may increase build duration.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "npm_via_tunnel": true
  }
}
```

#### Using CLI

| Flag                          | Purpose                                                            | Type    |
| ----------------------------- | ------------------------------------------------------------------ | ------- |
| --npm_tun, --npm_via_tunnel   | Install npm packages behind private VPN (increases build duration) | Boolean |

## Command Logs
#### Using `lambdatest-config.json`
You can use the `command_log` key in `run_settings` to show command logs on the <BrandName /> dashboard.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "command_log": true
  }
}
```

#### Using CLI

| Flag                       | Purpose                          | Type   |
| -------------------------- | -------------------------------- | ------ |
| --cmd_log, --command_log   | Show command logs on dashboard   | String |

## Network HTTP2 Logs
#### Using `lambdatest-config.json`
You can use the `network_http2` key in `run_settings` to capture HTTP2 network logs during test execution.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network_http2": true
  }
}
```

#### Using CLI

| Flag                          | Purpose                      | Type    |
| ----------------------------- | ---------------------------- | ------- |
| --net_http2, --network_http2  | Capture HTTP2 network logs   | Boolean |

## Network WebSocket Logs
#### Using `lambdatest-config.json`
You can use the `network_ws` key in `run_settings` to bypass WebSocket calls for network logs.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network_ws": true
  }
}
```

#### Using CLI

| Flag                    | Purpose                                   | Type    |
| ----------------------- | ----------------------------------------- | ------- |
| --net_ws, --network_ws  | Bypass WebSocket calls for network logs   | Boolean |

## Network SSE Logs
#### Using `lambdatest-config.json`
You can use the `network_sse` key in `run_settings` to bypass Server-Sent Events (SSE) for network logs.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network_sse": true
  }
}
```

#### Using CLI

| Flag                      | Purpose                              | Type    |
| ------------------------- | ------------------------------------ | ------- |
| --net_sse, --network_sse  | Bypass SSE events for network logs   | Boolean |

## SmartUI - Visual UI Project
#### Using `lambdatest-config.json`
You can use the `vi_project` key in `run_settings` to set the SmartUI project name for visual regression testing.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "vi_project": "my-smartui-project"
  }
}
```

#### Using CLI

| Flag                       | Purpose                      | Type   |
| -------------------------- | ---------------------------- | ------ |
| --vip, --vi-project        | Set Visual UI project name   | String |

## SmartUI - Visual UI Build
#### Using `lambdatest-config.json`
You can use the `vi_build` key in `run_settings` to set the SmartUI build name.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "vi_build": "my-smartui-build"
  }
}
```

#### Using CLI

| Flag                  | Purpose                    | Type   |
| --------------------- | -------------------------- | ------ |
| --vib, --vi-build     | Set Visual UI build name   | String |

## SmartUI - Visual UI Baseline
#### Using `lambdatest-config.json`
You can use the `vi_base` key in `run_settings` to set the current build as the baseline for SmartUI visual comparison.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "vi_base": true
  }
}
```

#### Using CLI

| Flag                    | Purpose                           | Type    |
| ----------------------- | --------------------------------- | ------- |
| --vibase, --vi-base     | Set Visual UI baseline build      | Boolean |

## Accessibility Testing
#### Using `lambdatest-config.json`
You can use the `accessibility` key in `run_settings` to enable accessibility testing for Cypress.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "accessibility": true
  }
}
```

#### Using CLI

| Flag                                       | Purpose                                    | Type    |
| ------------------------------------------ | ------------------------------------------ | ------- |
| --cypress_accessibility, --accessibility   | Enable accessibility testing for Cypress   | Boolean |

## Timezone
#### Using `lambdatest-config.json`
You can use the `timezone` key in `run_settings` to set a custom timezone on the test machine.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "timezone": "US/Eastern"
  }
}
```

#### Using CLI

| Flag            | Purpose                          | Type   |
| --------------- | -------------------------------- | ------ |
| --tz, --timezone | Set custom timezone in machine  | String |

## Region
#### Using `lambdatest-config.json`
You can use the `region` key in `run_settings` to set the data center region for test execution.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "region": "us"
  }
}
```

Supported values: `us`, `eu`, `ap`

#### Using CLI

| Flag             | Purpose                                     | Type   |
| ---------------- | ------------------------------------------- | ------ |
| --reg, --region  | Set data center region (e.g., us, eu, ap)   | String |

## Sync Mode
#### Using `lambdatest-config.json`
You can use the `sync` key in `run_settings` to enable sync mode, which makes the CLI wait for test completion before exiting.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "sync": true
  }
}
```

#### Using CLI

| Flag              | Purpose                                       | Type   |
| ----------------- | --------------------------------------------- | ------ |
| --sync, --sync-mode | Enable sync mode to wait for test completion | String |

## Video Recording
#### Using `lambdatest-config.json`
You can use the `video` key in `run_settings` to enable or disable video recording of your test sessions. Video recording is enabled by default.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "video": true
  }
}
```

## Cypress Version
#### Using `lambdatest-config.json`
You can use the `cypress_version` key in `run_settings` to specify a particular Cypress version for test execution. If not specified, the version is auto-detected from your project dependencies.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "cypress_version": "13.6.0"
  }
}
```

## Cypress Environment File
#### Using `lambdatest-config.json`
You can use the `cypress-env-file` key in `run_settings` to load Cypress environment variables from a JSON file.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "cypress-env-file": "cypress.env.json"
  }
}
```

#### Using CLI

| Flag                          | Purpose                                | Type   |
| ----------------------------- | -------------------------------------- | ------ |
| --cypress-env-file            | Path of Cypress environment JSON file  | String |

## Private Cloud
#### Using `lambdatest-config.json`
You can use the `privateCloud` key in `run_settings` to specify a custom private cloud endpoint.

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "privateCloud": "your-private-cloud"
  }
}
```

#### Using CLI

| Flag                   | Purpose                    | Type   |
| ---------------------- | -------------------------- | ------ |
| --pC, --privateCloud   | Set custom private cloud   | String |
