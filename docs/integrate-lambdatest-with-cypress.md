---
id: integrate-lambdatest-with-cypress
title: How to Integrate the Cypress Dashboard With TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Cypress Dashboard"
description: Integrate the Cypress Dashboard with TestMu AI to run Cypress tests on the cloud grid and view every session across both dashboards at once.
keywords:
  - testmu ai cypress dashboard integration
  - integrate cypress dashboard with testmu ai
  - cypress dashboard record key
  - run cypress tests on testmu ai
  - cypress cloud testing

url: https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/
site_name: TestMu AI
slug: integrate-testmu-with-cypress/
canonical: https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/"
    },
    "headline": "How to Integrate the Cypress Dashboard With TestMu AI",
    "description": "Integrate the Cypress Dashboard with TestMu AI to run Cypress tests on the cloud grid and view every session across both dashboards at once.",
    "url": "https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "testmu ai cypress dashboard integration",
      "integrate cypress dashboard with testmu ai",
      "cypress dashboard record key",
      "run cypress tests on testmu ai",
      "cypress cloud testing"
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
        "name": "Update the TestMu AI Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check the Installed CLI Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the Project ID to Your Cypress Config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  projectId: '<your-project-id>',\n  e2e: {\n    setupNodeEvents(on, config) {\n      return config\n    },\n  },\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Your Tests With the Record Flag",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --cy=\"--record;--key <key_value>\""
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Integrate the Cypress Dashboard With TestMu AI
***

If you already record Cypress runs to the Cypress Dashboard, you can run those same tests on the TestMu AI cloud grid and see every session in both places at once. This gives you the Cypress Dashboard analytics you rely on alongside real browser and OS coverage from TestMu AI. You link the two by adding your Cypress project ID and record key to the run configuration, then executing with the TestMu AI CLI.

:::note Sample repo
This guide uses the TestMu AI [sample Cypress Cloud repository](https://github.com/LambdaTest/Cypress-Cloud). Every resource shown here comes from that repo.
:::

## How to Integrate TestMu AI With the Cypress Dashboard
***

These steps assume you have already run a Cypress test on TestMu AI. If you have not, see [how to run your first Cypress test](/support/docs/getting-started-with-cypress-testing/), then return here to link the Cypress Dashboard.

### Update the TestMu AI Cypress CLI
***

Update the CLI first so the latest run and record commands are available. Install the latest version:

<VerifiedTag value="Verified" />

```bash
npm install -g lambdatest-cypress-cli
```

Confirm the CLI is on the latest version (3.0.50) by checking the installed version:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress --version
```

### Create a Project on Cypress Dashboard
***

Log in to [Cypress Cloud](https://cloud.cypress.io/), open the **Projects** page, and click **New project**. Enter a project name, choose **Private** or **Public** access, then click **Create project**.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-create-project.webp').default} alt="Cypress Cloud Create a new project form with project name, access, and team settings" width="1424" height="838" className="doc_img"/>

### Choose Your CI Provider
***

Select the CI provider you use, such as **GitHub Actions**, then click **Next**. Cypress Cloud uses this only to tailor its setup instructions - you can still record runs from your terminal.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-choose-ci-provider.webp').default} alt="Cypress Cloud project setup step to choose a CI provider such as GitHub Actions" width="1408" height="836" className="doc_img"/>

### Copy Your Record Key
***

On the project setup screen, copy the **record key** shown under **Try it first** and in the `CYPRESS_RECORD_KEY` field. You will pass this key to the run command in a later step.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-record-key.webp').default} alt="Cypress Cloud project setup screen showing the record key and the record run command" width="1398" height="840" className="doc_img"/>

:::tip
Treat the record key like a password. Set it as the `CYPRESS_RECORD_KEY` environment variable instead of hard-coding it in scripts or committing it to source control.
:::

You can find the record command for any project later from the **Projects** page in Cypress Cloud.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-projects-record-run.webp').default} alt="Cypress Cloud Projects page listing a project with its record run command" width="1423" height="840" className="doc_img"/>

### Add the Project ID to Your Cypress Config
***

When you create the project, Cypress Cloud also generates a unique `projectId`. Add it to the `cypress.config.js` file of your project so each recorded run is linked to the correct project:

<VerifiedTag value="Verified" />

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '<your-project-id>',
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
  },
})
```

:::note
Cypress 10 and later use `cypress.config.js` instead of the older `cypress.json`. You can find your `projectId` on the project's **Settings** page in Cypress Cloud.
:::

### Run Your Tests With the Record Flag
***

Start the run on the TestMu AI grid and pass Cypress's `--record` and `--key` flags through the CLI. Replace `<key_value>` with the record key you copied earlier:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run --cy="--record;--key <key_value>"
```

### View Results on Both Dashboards
***

The integration is complete. Your tests run on the TestMu AI grid, and the recorded results are sent to the Cypress Dashboard. Open the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see the run with its command logs, video, and other test artifacts. The same run is also available in Cypress Cloud under your project.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-testmu-dashboard.webp').default} alt="TestMu AI Automation Dashboard showing a passed Cypress test with command logs and video" width="1442" height="773" className="doc_img"/>

## How to Use the Cypress Agent Skill With TestMu AI
***

The [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) is part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cypress-skill package includes:

```text
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

### Install the Cypress Agent Skill
***

Clone the agent-skills repository and copy the cypress-skill into your tool's skills directory:

<VerifiedTag value="Verified" />

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cypress-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cypress-skill .cursor/skills/
```

:::note
To install all available framework skills instead of only cypress-skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).
:::

## Related Cypress Guides
***

Continue with the guides below to run, debug, and report on your Cypress tests on TestMu AI.

- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) covers the full set of commands for running and managing your Cypress tests.
- [Download artefacts from a Cypress run](/support/docs/download-artefacts-cypress/) retrieves videos, screenshots, and other files generated by your runs.
- [Generate Mochawesome reports for Cypress](/support/docs/cypress-mochaawesome-report/) produces detailed reports for your Cypress test executions.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
      Integrate TestMu AI With Cypress Dashboard
      </span>
    </li>
  </ul>
</nav>
