---
id: cypress-detailed-command-logs
title: How to View Detailed Cypress Command Logs on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Command Logs"
description: Learn how to generate detailed Cypress command logs for test reports on TestMu AI and download the reports from the dashboard.
keywords:
    - cypress detailed command logs
    - cypress terminal report logs
    - cypress command logs testmu ai
    - debug cypress test logs
    - cypress-terminal-report plugin
url: https://www.testmuai.com/support/docs/cypress-detailed-command-logs/
site_name: TestMu AI
slug: cypress-detailed-command-logs/
canonical: https://www.testmuai.com/support/docs/cypress-detailed-command-logs/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Detailed Command Logs for Cypress",
          "item": `${BRAND_URL}/support/docs/cypress-detailed-command-logs/`
        }]
      })
    }}
></script>

# How to View Detailed Cypress Command Logs on TestMu AI
***

If you need to debug why a Cypress test failed on TestMu AI, detailed command logs give you a full record of every Cypress command and its result. The **Detailed Command Logs** feature captures this output in both the console and a file, so you can pinpoint the exact command that broke. You enable it with the [cypress-terminal-report](https://www.npmjs.com/package/cypress-terminal-report) plugin and the `detailed_command_logs` capability, then view the logs in a dedicated tab on the test details page.

## Prerequisites
***

Before you configure the plugin, install Cypress and add the cypress-terminal-report plugin as a dependency. In your `package.json` or `lambdatest-config.json` file, add the plugin version that matches your Cypress version.

Use this version if your project runs Cypress below version 10.

```javascript
"cypress-terminal-report": "4.1.3"
```

Use this version if your project runs Cypress version 10 or later.

```javascript
"cypress-terminal-report": "^5.3.2"
```

Next, enable detailed command logs in `lambdatest-config.json` by adding the following setting.

```javascript
"run_settings": {
  "detailed_command_logs": true,
  "downloads": "./cypress/results"
}
```

:::note
The **Detailed Command Logs** tab appears only when you set the `detailed_command_logs` capability in `run_settings` in `lambdatest-config.json`.
:::

## Configure Detailed Command Logs for Cypress v9 and Below
***

For Cypress v9 and earlier, configure the plugin in the legacy plugins file. Follow the steps below to register the log printer and collector.

### Configure the Plugin
***

The plugin file is where you register the log printer for older Cypress versions.

- Open the `cypress/plugins/index.js` file in your project.
- Add the following code to install and configure the cypress-terminal-report plugin.

```javascript
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  installLogsPrinter(on, {
    printLogsToFile: 'always',
    outputRoot: 'cypress/results/detailCommandLogs',
    outputTarget: {
      'detailCommandLogs.json': 'json',
    },
  })
}
```

### Enable Logs in the Console
***

To also print detailed logs in the terminal, add `printLogsToConsole: 'always'` to `installLogsPrinter`. This step is optional.

```javascript
module.exports = (on, config) => {
  installLogsPrinter(on, {
    printLogsToConsole: 'always', // Enables logs in the terminal
    printLogsToFile: 'always',
    outputRoot: 'cypress/results/detailCommandLogs',
    outputTarget: {
      'detailCommandLogs.json': 'json',
    },
  });
};
```

### Install Logs Collector
***

The collector captures command output during each test so the printer can write it out.

- Navigate to `cypress/support/index.js`.
- Add the following code to install the log collector.

```javascript
const installLogsCollector = require('cypress-terminal-report/src/installLogsCollector')

installLogsCollector()
```

## Configure Detailed Command Logs for Cypress v10 and Above
***

For Cypress v10 and later, configure the plugin inside `cypress.config.js` using `setupNodeEvents`. Follow the steps below to register the log printer and collector.

### Configure the Plugin
***

The `setupNodeEvents` block replaces the legacy plugins file in Cypress v10 and later.

- Open `cypress.config.js` in your project.
- Add the following code to configure the plugin.

```javascript
const { defineConfig } = require("cypress");
const  installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
        printLogsToFile:"always",
      outputRoot: 'cypress/results/detailCommandLogs',
      outputTarget: {
        'detailCommandLogs.json': 'json',
      }
      });
    },
  },
});
```

### Enable Logs in the Console
***

To also print logs in the terminal, add `printLogsToConsole: 'always'` to `installLogsPrinter`. This step is optional.

```javascript
const { defineConfig } = require("cypress");
const  installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
      printLogsToConsole: 'always',
        printLogsToFile:"always",
      outputRoot: 'cypress/results/detailCommandLogs',
      outputTarget: {
        'detailCommandLogs.json': 'json',
      }
      });
    },
  },
});
```

### Install Logs Collector
***

The collector captures command output during each test so the printer can write it out.

- Open `cypress/support/e2e.js`.
- Add the following code to install the log collector.

```javascript
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector'

installLogsCollector()
```

## View Generated Logs
***

After your Cypress tests run, open the test details page to inspect the captured command output. View the detailed command logs in the **Detailed Command Logs** tab on that page.

To download these logs alongside screenshots and videos, see [how to download Cypress artefacts](/support/docs/download-artefacts-cypress/).

<img loading="lazy" src={require('../assets/images/cypress/detailed-cypress-logs.png').default} alt="Detailed Command Logs tab on the Cypress test details page showing captured command output" className="doc_img"/>

## Related Cypress Guides
***

Continue with the guides below to download and report on your Cypress runs on TestMu AI.

- [Download Cypress reports and artefacts](/support/docs/download-artefacts-cypress/) retrieves command logs, screenshots, and other test artefacts from the dashboard.
- [Generate Cypress Mochawesome reports](/support/docs/cypress-mochaawesome-report/) creates consolidated HTML reports for your Cypress test runs.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents the CLI flags for running Cypress tests on TestMu AI.
