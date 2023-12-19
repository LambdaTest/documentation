---
id: cypress-detailed-command-logs
title: Detailed Command Logs for Cypress
hide_title: true
sidebar_label: Cypress Detailed Command Logs
description: Learn how to generate detailed command logs for the test reports of cypress framework testing on lambdatest and download the reports from the dashboard.
keywords:
    - cypress testing
    - cypress automation testing
    - hyperexecute cypress testing
    - hyperexecute automation testing
    - hyperexecute cypressv10 testing
    - hyperexecute grid cypress testing
  
url: https://www.lambdatest.com/support/docs/cypress-detailed-command-logs/
site_name: LambdaTest
slug: cypress-detailed-command-logs/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Detailed Command Logs for Cypress",
          "item": "https://www.lambdatest.com/support/docs/cypress-detailed-command-logs/"
        }]
      })
    }}
></script>

# Detailed Command Logs for Cypress

The **Detailed Command Logs** functionality can be used to generate an extensive record of all the Cypress commands and their results, both to the console and to a file. This can be very useful for debugging and troubleshooting Cypress tests as it will narrow down the logs to find specific information.

The logs are formatted in a human-readable format, making them easy to read and understand. It makes use of the **cypress-terminal-report** plugin internally.

To implement this plugin in your Cypress test, follow the below-mentioned procedure:

## For Cypress version Below 10

**Step 1:** Go to *cypress/plugins/index.js* in your repository.

**Step 2:** Add the below-mentioned code to your *index.js* file.

```java
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
> To get the detailed report in the terminal logs, simply add the **printLogsToConsole: 'always'** hook in the **installLogsPrinter** as shown in the below-mentioned code.

```java
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  installLogsPrinter(on, {
    printLogsToConsole: 'always'
    printLogsToFile: 'always',
    outputRoot: 'cypress/results/detailCommandLogs',
    outputTarget: {
      'detailCommandLogs.json': 'json',
    },
  })
}
```

**Step 3:** Go to the following file: *cypress/support/index.js*. Add the below-mentioned code.

```java
const installLogsCollector = require('cypress-terminal-report/src/installLogsCollector')

installLogsCollector()
```

## For Cypress version 10 and Above

**Step 1:** Go to *cypress.config.js* in your repository.

**Step 2:** Add the below-mentioned code to your *config.js* file.

```java
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

> To get the detailed report in the terminal logs, simply add the **printLogsToConsole: 'always'** hook in the **installLogsPrinter** as shown in the below-mentioned code.

```java
const { defineConfig } = require("cypress");
const  installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
      printLogsToConsole: 'always'
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

**Step 3:** Go to the following file: *cypress/support/e2e.js*. Add the below-mentioned code.

```java
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector'

installLogsCollector()
```

**Step 4:** If you are passing npm dependencies through package.json, then add the **"cypress-terminal-report"** dependency there, or if you are using **"lambdatest-config.json"** to pass the dependency, add it there.

- for **cypress < 10** use this version "cypress-terminal-report": "4.1.3"
- for **cypress >= 10** use "cypress-terminal-report": "^5.3.2"

- Make sure to set this key **"detailed_command_logs"** to **'true'** in  **run_settings** in *lambdatest-config.json* like below:

- You can download the logs as usual by passing **"downloads": "./cypress/results"** 

> For comprehensive details on downloading reports, please refer to the following [resource](https://www.lambdatest.com/support/docs/download-artefacts-cypress/).

```bash
"run_settings": {
    "reporter_config_file":"base_reporter_config.json",
    # highlight-next-line
    "downloads": "./cypress/results",
    "build_name": "Cypress 10",
    "parallels": 1,
    "specs": "cypress/e2e/1-getting-started/todo.cy.js",
    "ignore_files": "",
    "network": false,
    "headless": false,
    "npm_dependencies": {
        "cypress": "12.17.0",
        "mocha-junit-reporter": "latest",
        "playwright-webkit":"1.27.0",
        "cypress-terminal-report": "^5.3.2"
    },
    # highlight-next-line
    "detailed_command_logs" : true
},
```

## View Generated Logs

After running your Cypress tests with the **cypress-terminal-report** plugin, you can view the detailed command logs in the **"detailed command logs"** tab on the test details page.

Refer to the [Artefacts For A Cypress Project](https://www.lambdatest.com/support/docs/download-artefacts-cypress/) for detailed understanding in logs and accessing artefacts.

<img loading="lazy" src={require('../assets/images/cypress-doc/detailed_log.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

Now you can effectively capture and analyze detailed command logs for your Cypress tests, helping you identify and debug issues with ease.

> **NOTE:-** You will be able to see this tab only when you use this capability **detailed_command_logs** in run_settings in lambdatest-config.json