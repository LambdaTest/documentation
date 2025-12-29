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
url: https://www.testmu.ai/support/docs/run-settings
site_name: LambdaTest
slug: run-settings
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Cypress Run Settings",
          "item": "https://www.lambdatest.com/support/docs/run-settings/"
        }]
      })
    }}
></script>
You can specify Cypress CLI flags to run on LambdaTest in two ways:

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

## Capture Network Logs
You can generate Network logs with Cypress by setting the `network` key to `true`.

| Key |  Description | Type |
| -------- | ------------ | -------- |
| headless   | Record network packets while the test is running | Boolean |

**Example**:

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network": "true",
  }
}
```

## NPM Package Dependencies
In order to run your tests on LambdaTest, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on LambdaTest.

Below are the ways through which LambdaTest detects the dependencies which has to be installed before running the test on LambdaTest.

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
LambdaTest will automatically detects the dependencies that has to be installed from `package.json`.

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
LambdaTest allows you to specify the Node.js version for running your tests using the ``useNodeVersion`` capability in the `run_settings` section of the `lambdatest-config.json` file. This capability provides greater flexibility and ensures compatibility with your project's dependencies and environment.

> Supported Versions are 18, 20 and 22. The exact version will be used are `18.17.1`, `20.18.0`, and `22.11.0` respectively

```javascript title="lambdatest-config.json"
"run_settings": {
  "useNodeVersion":"20"
}
```
