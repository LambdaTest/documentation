---
id: testim-to-kaneai-migration-guide
title: How to migrate from Testim to KaneAI
hide_title: true
sidebar_label: Testim To KaneAI Migration
description: Plan your Testim migration to KaneAI. Export Testim tests as Playwright code, run them on TestMu AI, bring test cases into Test Manager and re-create flows.
keywords:
  - testim migration to kaneai
  - testim to kaneai migration
  - migrate from testim to kaneai
  - how to migrate from testim to kaneai
  - testim playwright export
  - testim cli
url: https://www.testmuai.com/support/docs/testim-to-kaneai-migration-guide/
site_name: TestMu AI
slug: testim-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/testim-to-kaneai-migration-guide/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
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
          "name": "Testim to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/testim-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/testim-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Testim to KaneAI",
    "description": "Plan your Testim migration to KaneAI. Export Testim tests as Playwright code, run them on TestMu AI, bring test cases into Test Manager and re-create flows.",
    "url": "https://www.testmuai.com/support/docs/testim-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "testim migration to kaneai",
      "testim to kaneai migration",
      "migrate from testim to kaneai"
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
        "name": "Export a Testim test as Playwright code (Testim Editor URL suffix)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "?embedMode=true&exportPuppeteer=true&exportSelenium=true&exportPlaywright=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your TestMu AI credentials as environment variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Connect Playwright to the TestMu AI CDP endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n    }\n  }\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n  })\n\n  // Test code ...\n\n  await browser.close()\n})()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Testim tests on a named grid with the Testim CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "testim --label \"<YOUR LABEL>\" --token \"<YOUR ACCESS TOKEN>\" --project \"<YOUR PROJECT ID>\" --grid \"<Your grid name>\" --report-file test-results/testim-tests-report.xml"
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From Testim To KaneAI
* * *
This guide covers your Testim migration to KaneAI: what Testim can export, where it goes on <BrandName />, and how to re-create and run tests.

<b>[Note: KaneAI does not import or convert Testim tests. You export what Testim's docs say it can export and run the exported Playwright code on <BrandName />. You then bring test cases into Test Manager and re-create each flow in KaneAI in natural language.]</b>

***
## What Moves From Testim and Where It Goes

| Testim asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Web tests exported as Playwright code | <BrandName /> cloud grid | Export each test, then connect it to the CDP endpoint (Steps 1 and 2) |
| Web tests you keep running in Testim for now | <BrandName /> Selenium grid | Testim CLI with the `--grid` flag (Step 2) |
| Test steps in PDF run reports | Test Manager test cases | The AI Test Case Generator writes new test cases from the reports (Step 3) |
| TestRail, qTest or Xray test cases linked to Testim tests | Test Manager test cases | One-click importer for that tool (Step 3) |
| CSV export from the Test List view | Test Manager test cases | CSV import, if the file lists tests rather than runs (Step 3) |
| Web and mobile app test flows | KaneAI web and app tests | Automate with KaneAI, or author in natural language (Step 4) |
| Groups, shared steps, test data, custom code, visual and API steps | KaneAI modules, parameters, datasets, JavaScript, Visual Comparison and API steps | Re-create them in KaneAI (Step 4) |
| Run history and results | Stays in Testim | Export to CSV or PDF for your records |

<!-- Source: https://docs.tricentis.com/testim/content/administration/exporting-a-testim-test-as-code-for-playwright.htm, checked 2026-10-16 -->
<!-- Source: https://docs.tricentis.com/testim/content/results/test-run-pdf-report.htm, checked 2026-10-16 -->
<!-- Source: https://docs.tricentis.com/testim/content/results/export-test-list-and-test-results.htm, checked 2026-10-16 -->
<!-- Source: https://docs.tricentis.com/testim/content/integrations/grid-management/lambdatest-integration.htm, checked 2026-10-16 -->
<!-- Source: https://docs.tricentis.com/testim/content/integrations/test-management-integrations/testrail-integration.htm, https://docs.tricentis.com/testim/content/integrations/test-management-integrations/qtest-integration.htm and https://docs.tricentis.com/testim/content/integrations/test-management-integrations/xray-integration.htm, checked 2026-10-16 -->
<!-- Source: https://docs.tricentis.com/testim/content/overview/testim-overview/testim-automate.htm, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your Username and Access Key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI access.** **Automate with KaneAI** and **Create and Automate** both require it.
- **A Testim professional plan.** You need it for the code export, the CSV export, third-party grids or the test management integrations. Testim marks each of these as a pro feature. <!-- Source: https://www.testim.io/pricing/ ("Professional plan users can export tests to Puppeteer, Selenium, and Playwright"), https://docs.tricentis.com/testim/content/results/export-test-list-and-test-results.htm, https://docs.tricentis.com/testim/content/integrations/grid-management/index.htm and https://docs.tricentis.com/testim/content/integrations/test-management-integrations/index.htm, checked 2026-10-16 -->
- **Node.js.** You need it only if you run the Testim CLI. <!-- Source: https://docs.tricentis.com/testim/content/running-tests/the-command-line-cli/index.htm, checked 2026-10-16 -->

## Step 1: Export Your Tests From Testim

Three Testim exports can help with this move. KaneAI imports none of them as tests.

**Playwright code.** Testim can export the test that is open in its Editor as code adapted for Playwright. Add this suffix to the end of the URL in your browser, then press Enter. <!-- Source: https://docs.tricentis.com/testim/content/administration/exporting-a-testim-test-as-code-for-playwright.htm, checked 2026-10-16 -->

<VerifiedTag value="Verified" />

```text
?embedMode=true&exportPuppeteer=true&exportSelenium=true&exportPlaywright=true
```

The test's code opens in a code viewer. Select the **Playwright** tab, then click **Copy code**. Testim notes that the code may need manual adjustments, as its code comments instruct, and that some steps may not be supported. <!-- Source: https://docs.tricentis.com/testim/content/administration/exporting-a-testim-test-as-code-for-playwright.htm, checked 2026-10-16 -->

**PDF run reports.** After a run, open the three-dot menu on the test screen and select **Generate PDF run report**. Choose a screenshot option, then click **Generate** to download the report. The report lists the test steps and their results. <!-- Source: https://docs.tricentis.com/testim/content/results/test-run-pdf-report.htm, checked 2026-10-16 -->

**Test List CSV.** On the professional plan, go to **Test List > Tests** and click **Export to CSV**. Testim's doc calls this file a CSV of the execution runs and does not list its columns. Check the columns before you import the file. <!-- Source: https://docs.tricentis.com/testim/content/results/export-test-list-and-test-results.htm, checked 2026-10-16 -->

## Step 2: Run Exported Playwright Code on <BrandName />

Save the copied code in a Playwright project and make the changes its comments call for. Testim's doc does not name the language or test runner of the export, so check the code first. <!-- Source: https://docs.tricentis.com/testim/content/administration/exporting-a-testim-test-as-code-for-playwright.htm, checked 2026-10-16 -->

Set your <BrandName /> credentials as environment variables. On Linux or macOS:

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

If the script launches a local browser, replace that launch call with a connection to the <BrandName /> CDP endpoint. The `capabilities` object selects the browser and OS for the run. In JavaScript, the connection looks like this:

<VerifiedTag value="Verified" />

```javascript
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  // Test code ...

  await browser.close()
})()
```

The full walkthrough is in [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/). For Python, follow [Playwright With Python](/support/docs/python-with-playwright/). For a project that uses `playwright.config.js` and the Playwright test runner, follow [Playwright Test Runner](/support/docs/playwright-test-runner/).

### Keep Running Testim Tests During the Move

You can keep running Testim web tests on the <BrandName /> Selenium grid while you migrate. In Testim, add a grid of the LambdaTest (now <BrandName />) type. Enter a grid name, the host (for example, `hub.lambdatest.com`), the port (443 by default), and your Username and Access Key. Then pass the grid name to the Testim CLI with `--grid`. <!-- Source: https://docs.tricentis.com/testim/content/integrations/grid-management/lambdatest-integration.htm, checked 2026-10-16 -->

<VerifiedTag value="Verified" />

```bash
testim --label "<YOUR LABEL>" --token "<YOUR ACCESS TOKEN>" --project "<YOUR PROJECT ID>" --grid "<Your grid name>" --report-file test-results/testim-tests-report.xml
```

<!-- Source: https://docs.tricentis.com/testim/content/running-tests/the-command-line-cli/index.htm, checked 2026-10-16 -->

Testim's docs say this integration supports the Selenium testing option only. <!-- Source: https://docs.tricentis.com/testim/content/integrations/grid-management/lambdatest-integration.htm, checked 2026-10-16 --> For the <BrandName /> side, see [Testim Integration](/support/docs/testim-integration/).

## Step 3: Bring Test Cases Into Test Manager

Choose the source that matches how your team tracks Testim tests.

- **TestRail, qTest or Xray.** Testim can link a Testim test to a test case in these tools and send run results there. <!-- Source: https://docs.tricentis.com/testim/content/integrations/test-management-integrations/testrail-integration.htm, https://docs.tricentis.com/testim/content/integrations/test-management-integrations/qtest-integration.htm and https://docs.tricentis.com/testim/content/integrations/test-management-integrations/xray-integration.htm, checked 2026-10-16 --> If your test cases live there, use the one-click importer for [TestRail](/support/docs/one-click-migration-from-testrail/), [qTest](/support/docs/one-click-migration-from-qtest/) or [Xray (Jira Cloud)](/support/docs/one-click-migration-from-xray/). These importers bring in that tool's test cases, not the Testim tests.
- **PDF run reports.** On the Test Case Listing page of your project, click **Generate With AI** and upload the reports, up to 10 files. The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) accepts PDFs and writes new test cases from them. Click **Create** to save the ones you keep.
- **CSV file.** If the file lists tests rather than runs, import it with [CSV import](/support/docs/csv-import/) from **Add Test Case > Import CSV**. Mapping at least one CSV header to **Title** is mandatory. Each file can be up to 10 MB.

## Step 4: Re-create Your Flows in KaneAI

KaneAI does not run Testim steps, so you re-create each flow in a KaneAI session.

- **From a test case.** Open a saved test case and click **Automate with KaneAI** in its **Automate** section. A KaneAI session opens with the test case's steps filled in, where you author and run the test. [This action](/support/docs/manual-test-case-creation/#automate-with-kaneai) works on one test case at a time, and the test case must have steps or scenarios.
- **From the generator.** **Create and Automate** saves the generated test cases you select and sends them to KaneAI for automated authoring. It is an experimental feature, so review the steps afterwards.
- **From scratch.** Start a [web test](/support/docs/kane-ai-web-test/) or an [app test](/support/docs/kane-ai-app-test/) and write each step in natural language. [Manual Interaction](/support/docs/kaneai-manual-interaction/) also records your clicks, typing, scrolls and navigation as steps. It cannot record hover actions or checks, and it does not capture mobile browsers. Write those as instructions.

Re-create Testim features with their KaneAI counterparts:

- **Groups and shared steps:** build a [module](/support/docs/kane-ai-modules/) once and import it into other tests.
- **Test data and data-driven tests:** use [parameters](/support/docs/kane-ai-using-parameters/) and [datasets](/support/docs/kane-ai-using-datasets/). A dataset can import rows from a CSV file.
- **Custom JavaScript steps:** add a [JavaScript step](/support/docs/kane-ai-javascript-execution/) from the `/` menu.
- **Conditions:** add an [If / Else block](/support/docs/kaneai-conditional-logic/).
- **Visual validations:** add a [Visual Comparison](/support/docs/kaneai-smartui-visual-testing/) step. Its screenshots go to your SmartUI project.
- **API steps:** paste a curl command into an [API step](/support/docs/kane-ai-api-testing/).
- **MySQL and MongoDB validations:** add a [database connection](/support/docs/kaneai-database/) and query it from the test.

<!-- Source: https://docs.tricentis.com/testim/content/editing-tests/groups/index.htm, https://docs.tricentis.com/testim/content/editing-tests/shareable-steps.htm, https://docs.tricentis.com/testim/content/advanced-editing/reusable-test-data.htm, https://docs.tricentis.com/testim/content/advanced-editing/data-driven-testing/index.htm, https://docs.tricentis.com/testim/content/advanced-editing/validations/custom-code.htm, https://docs.tricentis.com/testim/content/editing-tests/conditions/index.htm, https://docs.tricentis.com/testim/content/advanced-editing/validations/pixel-validation-and-pixel-wait-for.htm, https://docs.tricentis.com/testim/content/advanced-editing/api-testing.htm, https://docs.tricentis.com/testim/content/advanced-editing/validations/mysql-validation.htm and https://docs.tricentis.com/testim/content/advanced-editing/validations/mongodb-validation.htm, checked 2026-10-16 -->

When a test is saved as **Ready**, meaning every step has run and passed, KaneAI generates code. In Classic, Selenium Python and Appium Python are available by default. Classic also offers Selenium Java and Playwright Python, C# and JavaScript on request. In New Experience, which is being rolled out in phases, Playwright Python and JavaScript are available. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

## Step 5: Run Your KaneAI Tests

1. In your project, open **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

With the **KaneAI** toggle on, a configuration can use Desktop or Real Device. [Configurations](/support/docs/test-runs-configurations/) set these limits:

- Native app testing on Real Devices is available only for KaneAI-generated test runs.
- Mobile browser testing on Real Devices is available for non-KaneAI test runs only.
- Virtual Mobile configurations are available for non-KaneAI test runs only.

To run from CI tools such as GitHub Actions or Jenkins, copy the Test Run ID from the test run URL. Send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`, with your <BrandName /> username and access key for Basic Authentication. The call starts HyperExecute jobs. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

## What Does Not Carry Over

- **The tests themselves.** KaneAI does not import or convert Testim tests. KaneAI imports tests only from Katalon, for desktop web tests ([Migration from Katalon](/support/docs/one-click-migration-from-katalon/)).
- **Unsupported steps.** Testim says exported Playwright code may need manual adjustments and that some steps may not be supported. <!-- Source: https://docs.tricentis.com/testim/content/administration/exporting-a-testim-test-as-code-for-playwright.htm, checked 2026-10-16 -->
- **Run history.** Results, screenshots and logs stay in Testim. CSV import in Test Manager creates or updates test cases, not runs.
- **Visual baselines.** A KaneAI Visual Comparison step captures a new baseline the first time the test runs.
- **CLI steps.** Testim CLI actions run Node.js scripts in your CLI environment. <!-- Source: https://docs.tricentis.com/testim/content/advanced-editing/validations/add-cli-validations-and-actions.htm, checked 2026-10-16 --> KaneAI runs JavaScript in the current testing environment, so re-create those checks with API, database or JavaScript steps.
- **Some mobile targets.** KaneAI test runs do not cover mobile browsers on real devices, or emulators and simulators.

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
       Testim To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web tests into KaneAI.
- [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/): connect Playwright scripts to <BrandName />.
- [One Click Migration from TestRail](/support/docs/one-click-migration-from-testrail/): import TestRail projects.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): move from mabl.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): move from testRigor.
- [UiPath Test Cloud To KaneAI Migration](/support/docs/uipath-test-cloud-to-kaneai-migration-guide/): move from UiPath Test Cloud.
