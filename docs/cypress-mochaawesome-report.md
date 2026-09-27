---
id: cypress-mochaawesome-report
title: How to Generate Cypress Mochawesome Reports on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Reporters"
description: Generate consolidated Mochawesome HTML reports and multiple report formats for Cypress tests on TestMu AI, then download them from the dashboard.
keywords:
    - cypress mochawesome report
    - cypress mochawesome html report
    - cypress multiple reporters
    - consolidated cypress test report
    - cypress reporter testmu ai
url: https://www.testmuai.com/support/docs/cypress-mochaawesome-report/
site_name: TestMu AI
slug: cypress-mochaawesome-report/
canonical: https://www.testmuai.com/support/docs/cypress-mochaawesome-report/
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
          "name": "Cypress Mochawesome Report",
          "item": `${BRAND_URL}/support/docs/cypress-mochaawesome-report/`
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
      "@id": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/"
    },
    "headline": "How to Generate Cypress Mochawesome Reports on TestMu AI",
    "description": "Generate consolidated Mochawesome HTML reports and multiple report formats for Cypress tests on TestMu AI, then download them from the dashboard.",
    "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "cypress mochawesome report",
      "cypress mochawesome html report",
      "cypress multiple reporters",
      "consolidated cypress test report",
      "cypress reporter testmu ai"
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
        "name": "Update Your Cypress Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"reporter\": \"cypress-multi-reporters\",\n  \"reporterOptions\": {\n    \"reporterEnabled\": [\n      \"mochawesome\"\n    ],\n    \"mochawesomeReporterOptions\": {\n      \"reportDir\": \"cypress/results\",\n      \"overwrite\": true,\n      \"html\": false,\n      \"json\": true\n    }\n  }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure the HyperExecute YAML File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n  frameworkName: cypress\n  location: cypress/results\n  type: html"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Generating a Consolidated HTML Report",
      "description": "The Mochawesome reporter writes per-spec JSON files that TestMu AI merges into one HTML report. Follow these steps to enable the reporter and generate that consolidated report.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Update Your Cypress Configuration",
          "text": "In your Cypress configuration file cypress.config.js, add the code to enable Mochawesome as a reporter. Set overwrite to true so the report is replaced with the latest run results, set html to false because the JSON files are merged later and the mocha-merge utility does not support HTML files, and keep reportDir set to cypress/results so the logs appear on the dashboard.",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#update-your-cypress-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Configure the HyperExecute YAML File",
          "text": "In your HyperExecute YAML configuration, define the report parameters so the run collects the Mochawesome output.",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#configure-the-hyperexecute-yaml-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Execute Your Tests",
          "text": "Run your Cypress tests on HyperExecute using the CLI. After the job completes, open the HyperExecute dashboard to download and view the consolidated Mochawesome report.",
          "url": "https://www.testmuai.com/support/docs/cypress-mochaawesome-report/#execute-your-tests"
        }
      ]
    }
  ]) }}
/>

# How to Generate Cypress Mochawesome Reports on TestMu AI
***

If you run Cypress tests on TestMu AI, you can consolidate their results into a single readable report instead of reading raw console output. The Mochawesome reporter produces standalone, interactive HTML reports with test filtering and failure stack traces. You configure a reporter in `cypress.config.js`, set the report parameters, then download the generated report from the dashboard. To send results to ReportPortal.io instead, see the [ReportPortal integration for Cypress](/support/docs/report-portal-cypress/).

## Generating a Consolidated HTML Report
***

The Mochawesome reporter writes per-spec JSON files that TestMu AI merges into one HTML report. Follow these steps to enable the reporter and generate that consolidated report.

### Update Your Cypress Configuration
***

In your Cypress configuration file `cypress.config.js`, add the following code to enable Mochawesome as a reporter.

<VerifiedTag value="Verified" />

```javascript title="cypress.config.js"
"reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": [
      "mochawesome"
    ],
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": true,
      "html": false,
      "json": true
    }
  }
```

:::note
- The `overwrite` parameter should be set to `true` to ensure the report is replaced with the latest run results.
- The `html` option should be set to `false` because the JSON files are merged later, and the mocha-merge utility does not support HTML files.
- Ensure the `reportDir` path is set to `"cypress/results"`. This path is used to generate logs that will be visible on the dashboard. **Do not change this path.**
:::

### Configure the HyperExecute YAML File
***

In your HyperExecute YAML configuration, define the [`report` parameters in the HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#report) so the run collects the Mochawesome output.

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  frameworkName: cypress
  location: cypress/results
  type: html
```

### Execute Your Tests
***

Run your Cypress tests on HyperExecute using the CLI. After the job completes, open the HyperExecute dashboard to download and view the consolidated Mochawesome report.

<video class="right-side" width="80%" controls id="vid">
<source src= {require('../assets/images/hyperexecute/knowledge-base/reports/cypress-mochawesome-report.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video>

## Generate Multiple Reports at Once
***

To emit more than one report format from a single run, use the `cypress-multi-reporters` package with several reporters enabled together. The example below generates both a **Mochawesome** and a **JUnit** report.

1. In `lambdatest-config.json`, point `reporter_config_file` at your reporter config file and set a `downloads` path for the generated artefacts:

<VerifiedTag value="Verified" />

```json title="lambdatest-config.json"
"run_settings": {
  ...
  "reporter_config_file": "reporter-config_mochawesome_junit.json",
  "downloads": "./cypress/results",
  ...
}
```

2. Create `reporter-config_mochawesome_junit.json` with both reporters enabled:

<VerifiedTag value="Verified" />

```json title="reporter-config_mochawesome_junit.json"
{
  "reporterEnabled": "mochawesome,mocha-junit-reporter",
  "mochawesomeReporterOptions": {
    "reportDir": "cypress/results/json",
    "overwrite": true,
    "html": true,
    "json": true
  },
  "mochaJunitReporterReporterOptions": {
    "mochaFile": "cypress/results/my-test-output.xml",
    "toConsole": true
  }
}
```

3. Run your tests in sync mode so the reports download automatically once the build finishes:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run --sync=true
```

A sample run produces output similar to:

```bash
Waiting for build to finish...
┌─────────┬───────────────────────────────────┬─────────────┬──────────┬──────────┬─────────┐
│ (index) │               Spec                │   Status    │ Platform │ Browser  │ Version │
├─────────┼───────────────────────────────────┼─────────────┼──────────┼──────────┼─────────┤
│    0    │ 'cypress_env_params_test_spec.js' │ 'completed' │ 'win10'  │ 'Chrome' │ '109.0' │
│    1    │ 'cypress_env_params_test_spec.js' │ 'completed' │ 'win10'  │ 'Chrome' │ '109.0' │
└─────────┴───────────────────────────────────┴─────────────┴──────────┴──────────┴─────────┘
{ completed: 2 }
Creating directories
Directory created  lambdatest-artefacts/f60aa4f9-4fca-46aa-b862-e4a0746a2eea
Extracted 14 entries for NPE6A-VMB8F-GVMDY-AG782
Extracted 14 entries for 0OETA-BPSP3-XZVX4-EAPWB
```

The reports download to `lambdatest-artefacts`, grouped by session ID with the browser name, browser version, and test ID.

:::note
The `lambdatest-artefacts` location is relative to the directory you ran the command from.
:::

<img loading="lazy" src={require('../assets/images/cypress-doc/multi.png').default} alt="Downloaded multi-reporter artefacts grouped by session ID" width="768" height="373" className="doc_img"/>

## Related Cypress Guides
***

Continue with the guides below to download and debug your Cypress runs on TestMu AI.

- [Download Cypress reports and artefacts](/support/docs/download-artefacts-cypress/) pulls reports, logs, and other build artefacts back from the dashboard.
- [View detailed Cypress command logs](/support/docs/cypress-detailed-command-logs/) helps you debug test results command by command.
- [Configure Cypress run settings](/support/docs/run-settings/) covers reporter options and every other run option.
