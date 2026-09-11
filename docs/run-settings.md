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
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/run-settings/"
    },
    "headline": "Configuring Cypress Test Execution",
    "description": "Explore TestMu AI's comprehensive guide on configuring run settings for seamless cross-browser testing. Optimize your testing workflow today.",
    "url": "https://www.testmuai.com/support/docs/run-settings/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "Cypress Automation",
      "Cypress Testing Guide",
      "Cypress Test Automation"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Using lambdatest-config.json (Cypress v9)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"ios\" label=\"Cypress v10\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  // In case of Cypress 10 and above, you can specify your custom config files by using the --cy flag.\n  lambdatest-cypress-cli run --env=stage,video=true --verbose --specs \"./cypress/integration/examples/*\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"specs\": \"./cypress/integration/examples/*.spec.js\",\n    }\n  }\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Exclude Specs Files (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n          \"exclude_specs\": \"./examples/assertion.spec.js, ./examples/connectors.spec.js\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"geo_location\": \"<country_code>\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"resolution\": \"1024x768\",\n    }\n  }"
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
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"ignore_files\": \"<glob_pattern>\",\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"android\" label=\"Cypress v9\" default>\n\n  ```javascript title=\"lambdatest-config.json\"\n  {\n    \"run_settings\": {\n      \"max_duration\":2\n    }\n  }"
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
        "text": "\n## NPM Package Dependencies\nIn order to run your tests on <BrandName />, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on <BrandName />.\n\nBelow are the ways through which <BrandName /> detects the dependencies which has to be installed before running the test on <BrandName />.\n\n#### Using `npm_dependencies`\nInside `run_settings` of `lambdatest-config.json`, you can provide the list of NPM dependencies:\n\n```javascript title=\"lambdatest-config.json\"\n\"run_settings\": {\n  \"npm_dependencies\": {\n    \"cypress\": \"9.0.0\",\n  },\n},"
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
        "text": "\n## Environment Variables\nYou can set environment variables for your Cypress tests in three ways: via the Cypress config file, via `cypress.env.json`, or via the <BrandName /> Cypress CLI. If you set variables via both the CLI and `cypress.env.json`, the `cypress.env.json` file is ignored and only the CLI values are used.\n\n#### Via the config file\n**Cypress 9.** A sample `cypress.json`:\n\n```bash\n{\n......\n\t\"env\":{\n\t\t\"CYPRESS_BASE_URL\":\"https://example.cypress.io/\",\n\t\t\"ACTIONS_URL\": \"commands/actions\",\n\t\t\"WINDOW_URL\": \"commands/window\"\n\t},\n......\n}"
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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```javascript title="lambdatest-config.json"
{
  "run_settings": {
    "network": "true",
  }
}
```

## NPM Package Dependencies
In order to run your tests on <BrandName />, we refer to your `package.json` and use those dependencies and devDependencies. Since, `package.json` may contain several dependencies which may not be required to run your Cypress tests. We recommend to use `npm_dependencies` parameter to list down the required dependencies to run your test, because it will reduce your build time on <BrandName />.

Below are the ways through which <BrandName /> detects the dependencies which has to be installed before running the test on <BrandName />.

#### Using `npm_dependencies`
Inside `run_settings` of `lambdatest-config.json`, you can provide the list of NPM dependencies:

<VerifiedTag value="Verified" />

```javascript title="lambdatest-config.json"
"run_settings": {
  "npm_dependencies": {
    "cypress": "9.0.0",
  },
},
```

#### Using `package.json`
<BrandName /> will automatically detects the dependencies that has to be installed from `package.json`.

<VerifiedTag value="Verified" />

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

#### Install npm packages via a tunnel
Use the `npm_via_tunnel` flag to route npm install traffic through a tunnel. This is useful when installing packages from a private registry, or in a restricted environment where the public npm registry isn't directly reachable. Add it to `run_settings`:

<VerifiedTag value="Verified" />

```bash
"npm_via_tunnel": true
```

You must already have a tunnel configured and running. To download private dependencies, see [Include Private Dependencies](/support/docs/private-dependencies-cypress/).

## Specific Node Version
<BrandName /> allows you to specify the Node.js version for running your tests using the ``useNodeVersion`` capability in the `run_settings` section of the `lambdatest-config.json` file. This capability provides greater flexibility and ensures compatibility with your project's dependencies and environment.

> Supported Versions are 18, 20 and 22. The exact version will be used are `18.17.1`, `20.18.0`, and `22.11.0` respectively

<VerifiedTag value="Verified" />

```javascript title="lambdatest-config.json"
"run_settings": {
  "useNodeVersion":"20"
}
```

## Environment Variables
You can set environment variables for your Cypress tests in three ways: via the Cypress config file, via `cypress.env.json`, or via the <BrandName /> Cypress CLI. If you set variables via both the CLI and `cypress.env.json`, the `cypress.env.json` file is ignored and only the CLI values are used.

#### Via the config file
**Cypress 9.** A sample `cypress.json`:

<VerifiedTag value="Verified" />

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

**Cypress 10.** A sample `cypress.config.js`:

<VerifiedTag value="Verified" />

```bash
module.exports = defineConfig({
  env: {
    'CYPRESS_BASE_URL':'https://example.cypress.io/',
    'ACTIONS_URL' : 'commands/actions',
    'WINDOW_URL': 'commands/window'
  },
```

Use them in your test spec:

<VerifiedTag value="Verified" />

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

#### Via `cypress.env.json`

<VerifiedTag value="Verified" />

```bash
{
    "CYPRESS_BASE_URL":"https://example.cypress.io/",
    "ACTIONS_URL" : "commands/actions",
    "WINDOW_URL": "commands/window"
}
```

#### Via the Cypress CLI
Add variables with the `--envs` parameter:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run --envs "CYPRESS_BASE_URL=https://example.cypress.io/,ACTIONS_URL=commands/actions,WINDOW_URL=commands/window"
```
