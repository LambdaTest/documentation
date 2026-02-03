---
id: supported-cypress-versions
title: Supported Cypress Versions
sidebar_label: Supported Cypress Versions
description: This documentation will help you learn about the Cypress versions that are supported by TestMu AI.
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

url: https://www.testmuai.com/support/docs/supported-cypress-versions/
site_name: LambdaTest
slug: supported-cypress-versions/
canonical: https://www.testmuai.com/support/docs/supported-cypress-versions/
---
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With the newer versions of Cypress releasing, to gain the most from recent improvements and bug fixes, it is recommended that your test scripts use the latest version. 

<BrandName /> supports every major, minor and patch versions for:

* Cypress 10 & above
* Cypress 9 & below

## Cypress Versions Supported By <BrandName />
***
 

In *lambdatest-config.json* file, you can set the Cypress version as shown in the below code snippet.


<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```javascript 
// lambdatest-config.json

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

</TabItem>

<TabItem value="android" label="Cypress v9" default>

```javascript 
// lambdatest-config.json

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

</TabItem>

</Tabs>

## Setting Cypress Version
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Following are the different ways to set the Cypress version.

1. Using `package.json`: <BrandName /> will pick the Cypress version from `package.json`.

Example:

```json
"devDependencies": {
    "@bahmutov/print-env": "1.2.0",
    "@cypress/eslint-plugin-dev": "5.0.0",
    "colon-names": "1.0.0",
    "cypress": "9.2.1",
    "eslint": "7.0.0",
```

2. Using `npm_dependencies`: If you are passing `npm_dependencies`, <BrandName /> will pick the Cypress version from `npm_dependencies` in `lambdatest-config.json`. 

Example:

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


3. Using `cypress_version`: You can pass `cypress_version` in `lambdatest-config.json` and it will override the `cypress_version` present in `npm_dependencies` or `package.json`.

Example:

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


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Supported Cypress Versions
      </span>
    </li>
  </ul>
</nav>


