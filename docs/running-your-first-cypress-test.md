---
id: running-your-first-cypress-test
title: Running Your First Cypress Test On TestMu AI Platform
sidebar_label: Run Your First Test
description: TestMu AI enables you to run Cypress automated tests across multiple browser versions. This documentation will help you get started with your first test.
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

url: https://www.testmuai.com/support/docs/running-your-first-cypress-test/
site_name: TestMu AI
slug: running-your-first-cypress-test/
canonical: https://www.testmuai.com/support/docs/running-your-first-cypress-test/
---

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
          "name": "Running Your First Cypress Test On TestMu AI Platform",
          "item": `${BRAND_URL}/support/docs/running-your-first-cypress-test/`
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
      "@id": "https://www.testmuai.com/support/docs/running-your-first-cypress-test/"
    },
    "headline": "Running Your First Cypress Test On TestMu AI Platform",
    "description": "TestMu AI enables you to run Cypress automated tests across multiple browser versions. This documentation will help you get started with your first test.",
    "url": "https://www.testmuai.com/support/docs/running-your-first-cypress-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Cypress-Cloud",
        "text": "git clone https://github.com/LambdaTest/Cypress-Cloud.git\ncd Cypress-Cloud"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A file named lambdatest-config.json is generated in your project using the below command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress init"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "lambdatest-config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"lambdatest_auth\": {\n    \"username\": \"<YOUR_LAMBDATEST_USERNAME>\",\n    \"access_key\": \"<Your LambdaTest access key>\"\n  },\n  \"browsers\": [\n    {\n      \"browser\": \"Chrome\",\n      \"platform\": \"Windows 10\",\n      \"versions\": [\"86.0\"]\n    },\n    {\n      \"browser\": \"Firefox\",\n      \"platform\": \"Windows 10\",\n      \"versions\": [\"82.0\"]\n    }\n  ],\n  \"run_settings\": {\n    \"cypress_config_file\": \"cypress.json\",\n    \"build_name\": \"build-name\",\n    \"parallels\": 1,\n    \"specs\": \"./*.spec.js\",\n    \"ignore_files\": \"\",\n    \"npm_dependencies\": {\n      \"cypress\": \"6.1.0\"\n    },\n    \"feature_file_suppport\": false\n  },\n  \"tunnel_settings\": {\n    \"tunnel\": false,\n    \"tunnelName\": null\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"specs\": \"./cypress/integration/1-getting-started/todo.spec.js\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step-3: Execute your tests using the following command in the terminal",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your Cypress Tests Locally On TestMu AI Platform",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "\nYou can provide the name of the **<BrandName /> tunnel** as per your requirements.\n\n\n## Using the Cypress Agent Skill with TestMu AI\n***\n\nThe [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.\n\nThe cypress-skill package includes:\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using the Cypress Agent Skill with TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nIt provides structured guidance for:\n\n* Project structure and setup\n* Dependency configuration\n* Local execution\n* TestMu AI cloud execution\n* Debugging patterns\n* CI/CD integration\n\n\n### Installing Cypress Agent Skill\n***\n\nInstall a Cypress Agent Skill using the command below:\n"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

To demonstrate Cypress testing on the <BrandName /> platform, we will use the [Cypress Cloud repo](https://github.com/LambdaTest/Cypress-Cloud) in the demo below.

**Step-1:** Clone the [<BrandName />-Cypress Cloud](https://github.com/LambdaTest/Cypress-Cloud) GitHub repo and switch to the cloned directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

**Step-2:** Setup the **<BrandName />-Cypress CLI** and configure the configuration file, as shown in the Prerequisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using <BrandName /> credentials. You can check [here](/support/docs/authentication/) for more details about authentication.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
  <TabItem value="config" label="lambdatest-config.json" default>

```json
{
  "lambdatest_auth": {
    "username": "<YOUR_LAMBDATEST_USERNAME>",
    "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["86.0"]
    },
    {
      "browser": "Firefox",
      "platform": "Windows 10",
      "versions": ["82.0"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "build-name",
    "parallels": 1,
    "specs": "./*.spec.js",
    "ignore_files": "",
    "npm_dependencies": {
      "cypress": "6.1.0"
    },
    "feature_file_suppport": false
  },
  "tunnel_settings": {
    "tunnel": false,
    "tunnelName": null
  }
}
```

  </TabItem>
</Tabs>

:::info
Also in `run-settings` section you need to specify the path of your `spec.js` file on which you want to run the test on. Here we will pass the path of a **sample to do** spec.js file for our demo.
:::

<VerifiedTag value="Verified" />

```json
"specs": "./cypress/integration/1-getting-started/todo.spec.js"
```

:::info Note
In this demo, all occurrences of ``http://localhost:8080`` have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run locally**](/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.
:::

**Step-3:** Execute your tests using the following command in the terminal:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Results On <BrandName /> Platform

---

As soon as the tests starts executing, you can view them running. Just visit your <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/cypress/cypress1.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

:::tip info
For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **<BrandName /> platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a **"Completed"** message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a **"Failed"** message respectively.
:::

<img loading="lazy" src={require('../assets/images/cypress/cypress2.png').default} alt="Image" width="1281" height="722" className="doc_img"/>

## Running Your Cypress Tests Locally On <BrandName /> Platform

---

To run your tests locally on the <BrandName /> platform, you need to setup [<BrandName /> tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the <BrandName /> tunnel or Underpass set up and started, you can use the <BrandName /> platform to run your Cypress tests locally.

Now you need to activate the tunnel capability in the `lambdatest_config.json` file under the section "connection_settings" as shown below:

<VerifiedTag value="Verified" />

```json title="lambdatest_config.json"
  "connection_settings": {
    "tunnel": true,
    "tunnel_name": "lt-cypress-tunnel"
  },
```

You can provide the name of the **<BrandName /> tunnel** as per your requirements.


## Using the Cypress Agent Skill with TestMu AI
***

The [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cypress-skill package includes:

<VerifiedTag value="Verified" />

```
cypress-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Cypress Agent Skill
***

Install a Cypress Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cypress-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cypress-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cypress-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
