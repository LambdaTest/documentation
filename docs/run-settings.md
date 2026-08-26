---
id: run-settings
title: How to Configure Cypress Test Execution on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Test Configuration"
description: Configure Cypress run settings on TestMu AI, including config file, spec paths, geolocation, resolution, timeouts, dependencies, and environment variables.
keywords:
  - cypress run settings testmu ai
  - cypress lambdatest-config.json run_settings
  - cypress config file capability
  - cypress geolocation and resolution settings
  - cypress npm_dependencies build time
  - cypress environment variables testmu ai
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

# How to Configure Cypress Test Execution on TestMu AI
***

When you run Cypress tests on TestMu AI, you control how each build behaves through run settings such as the config file, spec paths, geolocation, resolution, timeouts, and dependencies. Setting these correctly targets the right specs, matches your local environment, and keeps build times down. You configure them in the `run_settings` object of `lambdatest-config.json`, and most also have an equivalent Cypress CLI flag.

You can specify Cypress CLI flags to run on TestMu AI in two ways:

1. Adding the CLI flag details in the `lambdatest-config.json` file
2. Using the CLI

:::tip
If a glob pattern path is passed in the specs flag using the CLI, enclose it within double quotes as shown:
`lambdatest-cypress-cli run --env=stage --verbose --specs "./cypress/integration/examples/*"`
:::

## Set the Cypress Config File
***

Point TestMu AI at your Cypress configuration file so the run uses the settings your project expects. You can set it in `lambdatest-config.json` or pass it as a CLI flag.

**Using `lambdatest-config.json`**

Use the `cypress_config_file` key in the `run_settings` option to specify the Cypress configuration file.

:::note
Cypress 10 and above automatically identify the `cypress.config.js` file in the project, so you do not need to specify the `cypress_config.js` capability.
:::

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

**Using the CLI**

Specify the Cypress configuration file using the CLI flag below with the `run` command.

| Flag                         | Purpose                 | Type   |
| ---------------------------- | ----------------------- | ------ | 
| --ccf, --cypress-config-file | Path of the config file | String |

## Specify the Spec Files to Run
***

Choose which spec files a build executes so you run only the tests you need. Set the paths in `lambdatest-config.json` or pass them on the CLI.

**Using `lambdatest-config.json`**

Use the `specs` key in the `run_settings` option to specify the spec files.

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

**Using the CLI**

Specify the spec files using the CLI flag below with the `run` command.

| Flag        | Purpose                                       | Type   |
| ----------- | --------------------------------------------- | ------ | 
| -s, --specs | Path of the spec file or directory or pattern | String |

## Exclude Spec Files From a Run
***

Skip specific spec files without deleting them from your project. Use the `exclude_specs` key in the `run_settings` option to list the spec files you want to leave out of the test execution.

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

## Set the Test Geolocation
***

Run your tests from a specific country to check geo-targeted behavior. Set the location in `lambdatest-config.json` or pass it on the CLI.

**Using `lambdatest-config.json`**

Use the `geo_location` key in the `run_settings` option to specify the country to run from.

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

**Using the CLI**

Specify the geolocation using the CLI flag below with the `run` command.

| Flag                  | Purpose                   | Type   |
| --------------------- | ------------------------- | ------ |
| --geo, --geo_location | Pass the Geo country code | String |

## Set the Screen Resolution
***

Control the screen resolution of the machine your tests run on. Set it in `lambdatest-config.json` or pass it on the CLI.

**Using `lambdatest-config.json`**

Use the `resolution` key in the `run_settings` option to specify the resolution.

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

**Using the CLI**

Specify the system's resolution using the CLI flag below with the `run` command.

| Flag   | Purpose             | Type   |
| ------ | ------------------- | ------ |
|  --res | Pass the resolution | String |

This changes the resolution of the system, but the viewport in which Cypress launches the website is controlled by Cypress.

**Supported resolutions**: `1024x768`, `1280x960`, `1280x1024`, `1600x1200`, `1920x1080`, `2048x1536`, `2560x1440`

The `resolution` capability above sets the VM's screen resolution. To control the browser **viewport** that Cypress renders the app in (which `resolution` does not change), use Cypress's own viewport and full-screen options.

**Test on viewports**

When you define a viewport, Cypress uses the browser's scaling to size the app: a large viewport scales the app down, a small one scales it up. Set the viewport globally with `viewportWidth` and `viewportHeight` in the Cypress config, or per test:

```js
cy.viewport(550, 750) // Set viewport to 550px x 750px
cy.viewport('iphone-6') // Set viewport to 375px x 667px
```

For more details, see the [Cypress viewport command reference](https://docs.cypress.io/api/commands/viewport#Syntax).

**Test in full-screen mode**

:::tip
Full-screen mode together with viewports gives the best results for screen-resolution testing.
:::

Use the `before:browser:launch` event to change the browser options.

For **Cypress v9 and below**, use the following script in the `plugin/index.js` file:

```js
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--start-fullscreen')
  
      return launchOptions
    }
  
    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true
  
      return launchOptions
    }
  })
}
```

For **Cypress v10 and above**, add the below code in the `cypress.config.js` file:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen')
      
          return launchOptions
        }
      
        if (browser.name === 'electron') {
          launchOptions.preferences.fullscreen = true
      
          return launchOptions
        }
      })
    }
  }
})
```

## Exclude Files From Test Uploads
***

Keep files out of the project archive that gets uploaded to TestMu AI, which trims upload size and build time. Set the paths in `lambdatest-config.json` or pass them on the CLI.

**Using `lambdatest-config.json`**

Use the `ignore_files` key in the `run_settings` option to exclude particular files while uploading your tests.

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

**Using the CLI**

Specify the files you want to exclude using the CLI flag below with the `run` command.

| Flag                | Purpose                            | Type   |
| ------------------- | ---------------------------------- | ------ |
| --if, --ignore_files| Files to ignore in the zip project | String |

## Set a Max Duration for Session Timeout
***

When a single test runs for an extended period, it can block other parallel tests from executing. Use the `max_duration` flag to set a maximum time limit after which the test is automatically stopped, freeing up resources for other tests.

The valid input for `max_duration` must be an integer within the range of 2 to 240 minutes.

**Using `lambdatest-config.json`**

Use the `max_duration` key in the `run_settings` option to specify the session timeout.

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

**Using the CLI**

Specify the timeout using the CLI flag below with the `run` command.

| Flag           | Purpose                        | Type    |
| -------------- | ------------------------------ | ------- |
| --max_duration | idle timeout of a test session | Integer |

## Organize Builds With Names and Tags
***

Name your test cases and categorize your Cypress builds by build name, project name, and tags for easier analysis. Use the following keys to organize your tests.

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

## Run Tests in Headless Mode
***

Run your Cypress tests without a visible browser UI to speed up execution. Set the `headless` key to `true`.

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
***

Record the network packets exchanged during a run so you can debug requests and responses after the test. Set the `network` key to `true`.

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

## Install NPM Package Dependencies
***

To run your tests on TestMu AI, the platform reads your `package.json` and installs its dependencies and devDependencies. Because `package.json` can list several packages that your Cypress tests do not need, listing only the required packages in `npm_dependencies` reduces build time on TestMu AI.

TestMu AI detects the dependencies to install before running the test in the following ways.

**Using `npm_dependencies`**

Inside `run_settings` of `lambdatest-config.json`, provide the list of NPM dependencies:

```javascript title="lambdatest-config.json"
"run_settings": {
  "npm_dependencies": {
    "cypress": "9.0.0",
  },
},
```

**Using `package.json`**

TestMu AI automatically detects the dependencies to install from `package.json`.

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

**Install npm packages via a tunnel**

Use the `npm_via_tunnel` flag to route npm install traffic through a tunnel. This helps when installing packages from a private registry, or in a restricted environment where the public npm registry is not directly reachable. Add it to `run_settings`:

```bash
"npm_via_tunnel": true
```

You must already have a tunnel configured and running. To download private dependencies, see [how to use private dependencies in Cypress](/support/docs/private-dependencies-cypress/).

## Set a Specific Node Version
***

Pin the Node.js version your tests run on to match your project's dependencies and environment. Use the `useNodeVersion` capability in the `run_settings` section of the `lambdatest-config.json` file.

:::note
Supported versions are 18, 20, and 22. The exact versions used are `18.17.1`, `20.18.0`, and `22.11.0` respectively.
:::

```javascript title="lambdatest-config.json"
"run_settings": {
  "useNodeVersion":"20"
}
```

## Set Environment Variables
***

Pass environment variables to your Cypress tests so specs can read runtime values such as base URLs and endpoints. You can set them in three ways: via the Cypress config file, via `cypress.env.json`, or via the TestMu AI Cypress CLI. If you set variables via both the CLI and `cypress.env.json`, the `cypress.env.json` file is ignored and only the CLI values are used.

**Via the config file**

For Cypress 9, use a sample `cypress.json`:

```bash
{
......
	"env":{
		"CYPRESS_BASE_URL":"https://example.cypress.io/",
		"ACTIONS_URL": "commands/actions",
		"WINDOW_URL": "commands/window"
	},
......
}
```

For Cypress 10, use a sample `cypress.config.js`:

```bash
module.exports = defineConfig({
  env: {
    'CYPRESS_BASE_URL':'https://example.cypress.io/',
    'ACTIONS_URL' : 'commands/actions',
    'WINDOW_URL': 'commands/window'
  },
```

Use them in your test spec:

```bash
describe('Sample test', () => {
    it('test case - actions', () => {
      cy.visit(Cypress.env('CYPRESS_BASE_URL') + Cypress.env('ACTIONS_URL'))
      cy.wait(3000)
    })
    it('test case - window', () => {
        cy.visit(Cypress.env('CYPRESS_BASE_URL') + Cypress.env('WINDOW_URL'))
        cy.wait(3000)
    })
})
```

**Via `cypress.env.json`**

Define the variables in a `cypress.env.json` file in your project root:

```bash
{
    "CYPRESS_BASE_URL":"https://example.cypress.io/",
    "ACTIONS_URL" : "commands/actions",
    "WINDOW_URL": "commands/window"
}
```

**Via the Cypress CLI**

Add variables with the `--envs` parameter:

```bash
lambdatest-cypress run --envs "CYPRESS_BASE_URL=https://example.cypress.io/,ACTIONS_URL=commands/actions,WINDOW_URL=commands/window"
```

## Related Cypress Guides
***

Continue with the guides below to run and manage your Cypress tests on TestMu AI.

- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents every CLI command and flag in one place.
- [Choose supported browsers and operating systems](/support/docs/supported-browsers-and-os/) lists the browsers, versions, and platforms you can test on.
- [Use private dependencies in Cypress](/support/docs/private-dependencies-cypress/) runs tests that need packages from a private registry.
