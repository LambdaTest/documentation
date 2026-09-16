# Detailed Command Logs for Cypress

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

= 10:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"cypress-terminal-report\": \"^5.3.2\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Cypress >= 10:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"run_settings\": {\n  \"detailed_command_logs\": true,\n  \"downloads\": \"./cypress/results\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Configure the Plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter')\n\nmodule.exports = (on, config) => {\n  // `on` is used to hook into various events Cypress emits\n  // `config` is the resolved Cypress config\n\n  installLogsPrinter(on, {\n    printLogsToFile: 'always',\n    outputRoot: 'cypress/results/detailCommandLogs',\n    outputTarget: {\n      'detailCommandLogs.json': 'json',\n    },\n  })\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To display detailed logs in the terminal, update the installLogsPrinter with the printLogsToConsole: 'always' code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "module.exports = (on, config) => {\n  installLogsPrinter(on, {\n    printLogsToConsole: 'always', // Enables logs in the terminal\n    printLogsToFile: 'always',\n    outputRoot: 'cypress/results/detailCommandLogs',\n    outputTarget: {\n      'detailCommandLogs.json': 'json',\n    },\n  });\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Install Logs Collector",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const installLogsCollector = require('cypress-terminal-report/src/installLogsCollector')\n\ninstallLogsCollector()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Configure the Plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { defineConfig } = require(\"cypress\");\nconst  installLogsPrinter = require(\"cypress-terminal-report/src/installLogsPrinter\");\nmodule.exports = defineConfig({\n  e2e: {\n    setupNodeEvents(on, config) {\n      // implement node event listeners here\n      installLogsPrinter(on, {\n        printLogsToFile:\"always\",\n      outputRoot: 'cypress/results/detailCommandLogs',\n      outputTarget: {\n        'detailCommandLogs.json': 'json',\n      }\n      });\n    },\n  },\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If you need logs in the terminal, update the code like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { defineConfig } = require(\"cypress\");\nconst  installLogsPrinter = require(\"cypress-terminal-report/src/installLogsPrinter\");\nmodule.exports = defineConfig({\n  e2e: {\n    setupNodeEvents(on, config) {\n      // implement node event listeners here\n      installLogsPrinter(on, {\n      printLogsToConsole: 'always'\n        printLogsToFile:\"always\",\n      outputRoot: 'cypress/results/detailCommandLogs',\n      outputTarget: {\n        'detailCommandLogs.json': 'json',\n      }\n      });\n    },\n  },\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Install Logs Collector",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector'\n\ninstallLogsCollector()"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Detailed Command Logs for Cypress
The **Detailed Command Logs** feature provides a comprehensive record of all Cypress commands and their results, both in the console and in a file. This functionality is ideal for debugging and troubleshooting, enabling you to pinpoint specific logs quickly and effectively.

The logs are presented in an easy-to-read, human-readable format using the [cypress-terminal-report](https://www.npmjs.com/package/cypress-terminal-report) plugin. Below are the steps to implement this feature for Cypress versions below and above 10.

## Prerequisite: Install Cypress and Cypress Terminal Report
Before proceeding, ensure that you have installed Cypress and the cypress-terminal-report plugin.

In your `package.json` or `lambdatest-config.json` file, add the appropriate version of [cypress-terminal-report](https://www.npmjs.com/package/cypress-terminal-report) as a dependency:

### For Cypress < 10:

```javascript
"cypress-terminal-report": "4.1.3"
```

### For Cypress >= 10:

```javascript
"cypress-terminal-report": "^5.3.2"
```

- In the `lambdatest-config.json`, enable detailed command logs by adding the following setting:
> **NOTE:-** You will be able to see this tab only when you use this capability **detailed_command_logs** in run_settings in lambdatest-config.json

```javascript
"run_settings": {
"detailed_command_logs": true,
"downloads": "./cypress/results"
}
```

## For Cypress v9 and previous versions.

### Step 1: Configure the Plugin
- Open the `cypress/plugins/index.js` file in your project.
- Add the following code to install and configure the cypress-terminal-report plugin:

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

### Step 2: Enable Logs in the Console (Optional)
To display detailed logs in the terminal, update the `installLogsPrinter` with the `printLogsToConsole: 'always'` code:

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

### Step 3: Install Logs Collector
- Navigate to `cypress/support/index.js`.
- Add the following code to install the log collector:

```javascript
const installLogsCollector = require('cypress-terminal-report/src/installLogsCollector')

installLogsCollector()
```

## For Cypress v10 and later versions.

### Step 1: Configure the Plugin
- Open `cypress.config.js` in your project.
- Add the following code to configure the plugin:

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

### Step 2: Enable Logs in the Console (Optional)
If you need logs in the terminal, update the code like this:

```javascript
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

### Step 3: Install Logs Collector
- Open `cypress/support/e2e.js`.
- Add the following code to install the log collector:

```javascript
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector'

installLogsCollector()
```

## View Generated Logs
Once the Cypress tests are executed, you can view the detailed command logs in the **"Detailed Command Logs"** tab on the test details page.

For more information, visit [Artefacts For A Cypress Project](/support/docs/download-artefacts-cypress/)
