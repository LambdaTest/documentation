# Configuring Cypress Test Execution

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  // In case of Cypress 10 and above, you can specify your custom config files by using the --cy flag.\n  lambdatest-cypress-cli run --env=stage,video=true --verbose --specs \"./cypress/integration/examples/*\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"specs\": \"./cypress/integration/examples/*.spec.js\",\n    }\n  }\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Exclude Specs Files (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n          \"exclude_specs\": \"./examples/assertion.spec.js, ./examples/connectors.spec.js\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"geo_location\": \"\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"resolution\": \"1024x768\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the viewport globally with viewportWidth and viewportHeight in the Cypress config, or per test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "cy.viewport(550, 750) // Set viewport to 550px x 750px\ncy.viewport('iphone-6') // Set viewport to 375px x 667px"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Cypress v9 and below, use the following script in the plugin/index.js file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "module.exports = (on, config) => {\n  on('before:browser:launch', (browser = {}, launchOptions) => {\n    if (browser.family === 'chromium' && browser.name !== 'electron') {\n      launchOptions.args.push('--start-fullscreen')\n  \n      return launchOptions\n    }\n  \n    if (browser.name === 'electron') {\n      launchOptions.preferences.fullscreen = true\n  \n      return launchOptions\n    }\n  })\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Cypress v10 and above, add the below code in the cypress.config.js file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  \n  e2e: {\n    setupNodeEvents(on, config) {\n      on('before:browser:launch', (browser = {}, launchOptions) => {\n        if (browser.family === 'chromium' && browser.name !== 'electron') {\n          launchOptions.args.push('--start-fullscreen')\n      \n          return launchOptions\n        }\n      \n        if (browser.name === 'electron') {\n          launchOptions.preferences.fullscreen = true\n      \n          return launchOptions\n        }\n      })\n    }\n  }\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"ignore_files\": \"\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  \n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"max_duration\":2\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Organizing Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Headless Browser\nYou can run Headless tests with Cypress by the `headless` key to `true`.\n\n| Key      | Description               | Type    |\n| -------- | ------------------------- | ------- |\n| headless | Run test in Headless mode | Boolean |\n\n**Example**:\n\n```javascript title=\"lambdatest-config.json\"\n{\n  \"run_settings\": {\n    \"headless\": \"true\",\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Capture Network Logs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## NPM Package Dependencies\nIn order to run your tests on TestMu AI, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on TestMu AI.\n\nBelow are the ways through which TestMu AI detects the dependencies which has to be installed before running the test on TestMu AI.\n\n#### Using `npm_dependencies`\nInside `run_settings` of `lambdatest-config.json`, you can provide the list of NPM dependencies:\n\n```javascript title=\"lambdatest-config.json\"\n\"run_settings\": {\n  \"npm_dependencies\": {\n    \"cypress\": \"9.0.0\",\n  },\n},"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using package.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n:::tip note\nIt's recommended to use `npm_dependencies` instead of `package.json` because `package.json` may contain the dependencies which are not actually used while running the Cypress tests and also, installing these unwanted dependencies will increase the build time.\n:::\n\n#### Install npm packages via a tunnel\nUse the `npm_via_tunnel` flag to route npm install traffic through a tunnel. This is useful when installing packages from a private registry, or in a restricted environment where the public npm registry isn't directly reachable. Add it to `run_settings`:\n\n```bash\n\"npm_via_tunnel\": true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Specific Node Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Environment Variables\nYou can set environment variables for your Cypress tests in three ways: via the Cypress config file, via `cypress.env.json`, or via the TestMu AI Cypress CLI. If you set variables via both the CLI and `cypress.env.json`, the `cypress.env.json` file is ignored and only the CLI values are used.\n\n#### Via the config file\n**Cypress 9.** A sample `cypress.json`:\n\n```bash\n{\n......\n\t\"env\":{\n\t\t\"CYPRESS_BASE_URL\":\"https://example.cypress.io/\",\n\t\t\"ACTIONS_URL\": \"commands/actions\",\n\t\t\"WINDOW_URL\": \"commands/window\"\n\t},\n......\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress 10. A sample cypress.config.js",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "module.exports = defineConfig({\n  env: {\n    'CYPRESS_BASE_URL':'https://example.cypress.io/',\n    'ACTIONS_URL' : 'commands/actions',\n    'WINDOW_URL': 'commands/window'\n  },"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use them in your test spec",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "describe('Sample test', () => {\n    it('test case - actions', () => {\n      cy.visit(Cypress.env('CYPRESS_BASE_URL') + Cypress.env('ACTIONS_URL'))\n      cy.wait(3000)\n    })\n    it('test case - window', () => {\n        cy.visit(Cypress.env('CYPRESS_BASE_URL') + Cypress.env('WINDOW_URL'))\n        cy.wait(3000)\n    })\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Via cypress.env.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "{\n    \"CYPRESS_BASE_URL\":\"https://example.cypress.io/\",\n    \"ACTIONS_URL\" : \"commands/actions\",\n    \"WINDOW_URL\": \"commands/window\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add variables with the --envs parameter",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --envs \"CYPRESS_BASE_URL=https://example.cypress.io/,ACTIONS_URL=commands/actions,WINDOW_URL=commands/window\""
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>
You can specify Cypress CLI flags to run on TestMu AI in two ways:

1. Adding the CLI flag details in `lambdatest-config.json` file
2. Using the CLI

If a glob pattern path is passed in the specs flag using CLI, you must enclose it within double quotes as shown:
`lambdatest-cypress-cli run --env=stage --verbose --specs "./cypress/integration/examples/*"`

## Cypress Config File
#### Using `lambdatest-config.json`
You can use the `cypress_config_file` key in `run_settings` option to specify the Cypress configuration file.

> **NOTE :** Cypress 10 and above versions automatically identify the `cypress.config.js` file in the project. Therefore, you don't need to specify the `cypress_config.js` capability.

```javascript title="lambdatest-config.json"
{
"run_settings": {
"cypress_config_file": "cypress.json",
"video": true
}
}
```

```javascript title="lambdatest-config.json"
// In case of Cypress 10 and above, you can specify your custom config files by using the --cy flag.
lambdatest-cypress-cli run --env=stage,video=true --verbose --specs "./cypress/integration/examples/*"
```

#### Using CLI
You can specify the Cypress configuration file using the below CLI flag with `run` command.

| Flag                         | Purpose                 | Type   |
| ---------------------------- | ----------------------- | ------ |
| --ccf, --cypress-config-file | Path of the config file | String |

## Specifying Spec Files
#### Using `lambdatest-config.json`
You can use the *specs* key in *run_settings* option to specify the Spec files.

```javascript title="lambdatest-config.json"
{
"run_settings": {
"specs": "**/*.cy.js",
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"specs": "./cypress/integration/examples/*.spec.js",
}
}

```

#### Using CLI
You can specify the Spec files using the below CLI flag with `run` command.

| Flag        | Purpose                                       | Type   |
| ----------- | --------------------------------------------- | ------ |
| -s, --specs | Path of the spec file or directory or pattern | String |

## Exclude Specs Files
You can use the *exclude_specs* key in *run_settings* option to specify the spec files that you want to exclude from the test execution.

```javascript title="lambdatest-config.json"
{
"run_settings": {
"exclude_specs": "./examples/assertion.spec.js, ./examples/connectors.spec.js",
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"exclude_specs": "./examples/assertion.spec.js, ./examples/connectors.spec.js",
}
}
```

## Geolocation
#### Using `lambdatest-config.json`
You can use the *geo_location* key in *run_settings* option to specify the Spec files.

```javascript title="lambdatest-config.json"
{
"run_settings": {
"geo_location": "<country_code>",
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"geo_location": "<country_code>",
}
}
```

#### Using CLI
You can specify the geolocation files using the below CLI flag with `run` command.

| Flag                  | Purpose                   | Type   |
| --------------------- | ------------------------- | ------ |
| --geo, --geo_location | Pass the Geo country code | String |

## Resolution
#### Using `lambdatest-config.json`
Use the *resolution* key in *run_settings* option to specify the resolution.

```javascript title="lambdatest-config.json"
{
"run_settings": {
"resolution": "1024x768",
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"resolution": "1024x768",
}
}
```

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

```javascript title="lambdatest-config.json"
{
"run_settings": {
"ignore_files": "<glob_pattern>",
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"ignore_files": "<glob_pattern>",
}
}
```

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

```javascript title="lambdatest-config.json"
{
"run_settings": {
"max_duration":2
}
}
```

```javascript title="lambdatest-config.json"
{
"run_settings": {
"max_duration":2
}
}
```

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
In order to run your tests on TestMu AI, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on TestMu AI.

Below are the ways through which TestMu AI detects the dependencies which has to be installed before running the test on TestMu AI.

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
TestMu AI will automatically detects the dependencies that has to be installed from `package.json`.

```javascript title="package.json"
"devDependencies": {
"cypress": "9.2.1",
"eslint": "7.0.0",
"eslint-plugin-json-format": "2.0.1",
"eslint-plugin-mocha": "5.3.0",
},
```

**note**
It's recommended to use `npm_dependencies` instead of `package.json` because `package.json` may contain the dependencies which are not actually used while running the Cypress tests and also, installing these unwanted dependencies will increase the build time.

## Specific Node Version
TestMu AI allows you to specify the Node.js version for running your tests using the ``useNodeVersion`` capability in the `run_settings` section of the `lambdatest-config.json` file. This capability provides greater flexibility and ensures compatibility with your project's dependencies and environment.

> Supported Versions are 18, 20 and 22. The exact version will be used are `18.17.1`, `20.18.0`, and `22.11.0` respectively

```javascript title="lambdatest-config.json"
"run_settings": {
"useNodeVersion":"20"
}
```
