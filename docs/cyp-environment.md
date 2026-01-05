---
id: cyp-environment
title: Environment Variables Support for Cypress Tests
sidebar_label: Environment Variables Support for Cypress Tests
description: Learn how to specify Environment variables. 
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

url: https://www.testmu.ai/support/docs/cyp-environment
site_name: LambdaTest
slug: cyp-environment
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

You can specify the environment variables that you want to use for your Cypress tests via the configuration file, via the `cypress.env.json` file, or via the <BrandName /> Cypress CLI. However, if we set environment variables via both <BrandName /> CLI and `cypress.env.json`, the `cypress.env.json` file will be ignored and only the variables set via CLI will be set into environment variables. If you want to understand these methods, go through the document below. 

### 1. Via the Configuration File

a. **Cypress 9**

A sample `cypress.json` file:

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

b. **Cypress 10**

A sample `cypress.config.js` file:

```bash
module.exports = defineConfig({
  env: {
    'CYPRESS_BASE_URL':'https://example.cypress.io/',
    'ACTIONS_URL' : 'commands/actions',
    'WINDOW_URL': 'commands/window'
  },
```

You can use both of these in your test specifications file. An example of a test specifications file is: 

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
### 2. Via the `cypress.env.json` File


```bash
{
    "CYPRESS_BASE_URL":"https://example.cypress.io/",
    "ACTIONS_URL" : "commands/actions",
    "WINDOW_URL": "commands/window"
}
```

### 3. Via the <BrandName /> Cypress CLI

You can also add your environment variables via the parameter `--envs` in the <BrandName /> Cypress CLI. 

```bash
lambdatest-cypress run --envs "CYPRESS_BASE_URL=https://example.cypress.io/,ACTIONS_URL=commands/actions,WINDOW_URL=commands/window"
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
        Environment Variables Support for Cypress Tests
      </span>
    </li>
  </ul>
</nav>
