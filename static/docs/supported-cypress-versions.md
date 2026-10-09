# Supported Cypress Versions on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI supports every major, minor, and patch release of Cypress across both release lines: Cypress 10 and above, and Cypress 9 and below. With newer versions of Cypress releasing regularly, use the latest version where possible to benefit from recent fixes and improvements.

TestMu AI supports every major, minor, and patch version for:

* Cypress 10 & above
* Cypress 9 & below

## Cypress Versions Supported By TestMu AI

In the `lambdatest-config.json` file, set the Cypress version in the `run_settings` block as shown below. The keys differ between Cypress v10 and above (`cypress.config.js` config file, `.cy.js` specs) and Cypress v9 and below (`cypress.json` config file, `.spec.js` specs).

```javascript title="lambdatest-config.json"
"run_settings":{
   "cypress_config_file":"cypress.config.js",
   "reporter_config_file":"base_reporter_config.json",
   "build_name":"build-name",
   "parallels":1,
   "specs":"./*.cy.js",
   "ignore_files":"",
   "network":false,
   "headless":false,
   "npm_dependencies":{
      "cypress":"10.0.0"
   }
},
```

```javascript title="lambdatest-config.json"
"run_settings":{
   "cypress_config_file": "cypress.json",
     "reporter_config_file": "base_reporter_config.json",
     "build_name": "build-name",
     "parallels": 1,
     "specs": "./*.spec.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
        "cypress": "9.0.0"
}
```

## Setting the Cypress Version

Set the version in any of three ways (each option overrides the ones before it):

1. **`package.json`:** TestMu AI picks the Cypress version from your project's `package.json` dev dependencies.

```json
"devDependencies": {
    "@bahmutov/print-env": "1.2.0",
    "@cypress/eslint-plugin-dev": "5.0.0",
    "colon-names": "1.0.0",
    "cypress": "9.2.1",
    "eslint": "7.0.0",
```

2. **`npm_dependencies`:** set `cypress` under `run_settings.npm_dependencies` in `lambdatest-config.json`; this takes priority over `package.json`.

```json
"run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "Cypress v9 Demo",
    "parallels": 2,
    "specs": "./cypress/integration/examples/actions.spec.js",
    "downloads": "./cypress/results/",
    "ignore_files": "",
    "network": false,
    "headless": false,
    "reporter_config_file": "",
    "npm_dependencies": {
      "cypress": "10.0.0"
    },
  },
```

3. **`cypress_version`:** set `cypress_version` in `lambdatest-config.json` to override the version from `npm_dependencies` or `package.json`.

```json
"run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "Cypress v9 Demo",
    "parallels": 2,
    "specs": "./cypress/integration/examples/actions.spec.js",
    "downloads": "./cypress/results/",
    "ignore_files": "",
    "network": false,
    "headless": false,
    "reporter_config_file": "",
    "npm_dependencies": {
      "typescript": "3.7.4"
    },
    "cypress_version": "10.0.0"
  },
```
