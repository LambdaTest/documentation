---
id: cypress-detailed-command-logs
title: Detailed Command Logs for Cypress
hide_title: true
sidebar_label: Cypress Detailed Command Logs
description: Learn how to generate detailed command logs for the test reports of cypress framework testing on TestMu AI and download the reports from the dashboard.
keywords:
    - cypress testing
    - cypress automation testing
    - hyperexecute cypress testing
    - hyperexecute automation testing
    - hyperexecute cypressv10 testing
    - hyperexecute cypress testing
  
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/cypress-detailed-command-logs/"
    },
    "headline": "Detailed Command Logs for Cypress",
    "description": "Learn how to generate detailed command logs for the test reports of cypress framework testing on TestMu AI and download the reports from the dashboard.",
    "url": "https://www.testmuai.com/support/docs/cypress-detailed-command-logs/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "cypress testing",
      "cypress automation testing",
      "hyperexecute cypress testing"
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
        "name": "For Cypress < 10:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"cypress-terminal-report\": \"4.1.3\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Cypress >= 10:",
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

<img loading="lazy" src={require('../assets/images/cypress/detailed-cypress-logs.png').default} alt="Image" className="doc_img"/>
