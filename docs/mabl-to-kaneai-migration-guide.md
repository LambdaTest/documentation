---
id: mabl-to-kaneai-migration-guide
title: How to migrate from mabl to KaneAI
hide_title: true
sidebar_label: mabl To KaneAI Migration
description: Plan your mabl migration to KaneAI. Export mabl tests as Playwright or Selenium IDE code, run them on TestMu AI, import a CSV and re-create flows.
keywords:
  - mabl migration to kaneai
  - mabl to kaneai migration
  - migrate from mabl to kaneai
  - how to migrate from mabl to kaneai
  - mabl tests export
  - mabl playwright export
  - mabl selenium ide export
  - mabl cli
url: https://www.testmuai.com/support/docs/mabl-to-kaneai-migration-guide/
site_name: TestMu AI
slug: mabl-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/mabl-to-kaneai-migration-guide/
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
          "name": "mabl to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/mabl-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/mabl-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from mabl to KaneAI",
    "description": "Plan your mabl migration to KaneAI. Export mabl tests as Playwright or Selenium IDE code, run them on TestMu AI, import a CSV and re-create flows.",
    "url": "https://www.testmuai.com/support/docs/mabl-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "mabl migration to kaneai",
      "mabl to kaneai migration",
      "migrate from mabl to kaneai"
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
        "name": "Install the mabl CLI, log in and list your tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "npm install -g @mablhq/mabl-cli\nmabl auth login --auto\nmabl tests list"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Export a mabl test to Playwright (TypeScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "mabl tests export {test-id} --format playwright --environment-id {environment-id}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Export a mabl test as a Selenium IDE (.side) file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "mabl tests export {test-id} --format side"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set TestMu AI credentials (macOS / Linux)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set TestMu AI credentials (Windows CMD)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Batch",
        "text": "set LT_USERNAME=YOUR_LAMBDATEST_USERNAME\nset LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY"
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
        "name": "Install the Selenium IDE command-line runner",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "npm install -g selenium-side-runner"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run an exported .side file on the TestMu AI Selenium grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "selenium-side-runner -w 4 \"<exported-test>.side\" --server https://user-name:access-key@hub.lambdatest.com/wd/hub -c \"browserName='chrome' browserVersion='latest' platformName='Windows 10'\""
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From mabl To KaneAI
* * *
This guide covers your mabl migration to KaneAI: what you can move to <BrandName />, and how.

<b>[Note: KaneAI does not import or convert mabl tests. This guide follows a manual path. Export code from mabl and run it on <BrandName />, import test cases from CSV, and re-create tests in KaneAI in natural language.]</b>

***
## What Moves From mabl and Where It Goes

| mabl asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Browser tests, as code | <BrandName /> cloud grid | Export as Playwright or Selenium IDE, then run |
| Browser tests, as KaneAI tests | KaneAI | Re-create in natural language, or automate an imported test case |
| Tests exported as CSV | Test Manager test cases | CSV import |
| Flows | KaneAI modules | Re-create the steps as a module |
| Variables | KaneAI variables | Re-create them |
| DataTables | Datasets in Test Manager | Export as CSV, then use Import Data |
| API tests | API steps in KaneAI tests | Export as Postman JSON, then paste requests as curl commands |
| Mobile tests | KaneAI app tests | Re-create them |
| Run history and artifacts | Stay in mabl | Export and keep as records |

<!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
<!-- Source: https://docs.mabl.com/docs/mabl-cli/mabl-cli-command-reference.md, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/19078220967956-Export-mabl-API-tests-as-Postman-JSON, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/23565996151188-Getting-started-with-mobile-tests, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account with KaneAI access.** The **Automate with KaneAI** action requires it. Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>.
- Your Username and Access Key, from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- Node.js for the mabl CLI. mabl requires an actively supported Node.js LTS version, currently 22 or higher. It does not support running its CLI from Windows Subsystem for Linux (WSL). <!-- Source: https://docs.mabl.com/docs/mabl-cli/installing-and-configuring-the-mabl-cli.md, checked 2026-10-16 -->

## Step 1: Export Your mabl Tests

`mabl tests export` exports a mabl test as Playwright (TypeScript), Selenium IDE, JSON, CSV or YAML. YAML is the default. The Playwright and Selenium IDE formats are only supported for browser tests. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->

Install the mabl CLI, log in, and list your tests. `mabl auth login --auto` opens the mabl login page in your browser. `mabl tests list` returns test IDs, 10 tests by default. Set `--limit` to list more.

<VerifiedTag value="Verified" />

```bash
npm install -g @mablhq/mabl-cli
mabl auth login --auto
mabl tests list
```

<!-- Source: https://docs.mabl.com/docs/mabl-cli/installing-and-configuring-the-mabl-cli.md, checked 2026-10-16 -->
<!-- Source: https://docs.mabl.com/docs/mabl-cli/using-the-mabl-cli.md, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/17782745983636-mabl-resource-IDs, checked 2026-10-16 -->
<!-- Source: https://docs.mabl.com/docs/mabl-cli/mabl-cli-command-reference.md, checked 2026-10-16 -->

Export each test in the format you plan to run:

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="mabl-export-format">

<TabItem value="playwright" label="Playwright (TypeScript)" default>

```bash
mabl tests export {test-id} --format playwright --environment-id {environment-id}
```

`--environment-id` generates selectors from the find information mabl learned in that environment. `mabl environments list` returns environment IDs.

</TabItem>

<TabItem value="side" label="Selenium IDE (.side)">

```bash
mabl tests export {test-id} --format side
```

</TabItem>

</Tabs>

<!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/17782745983636-mabl-resource-IDs, checked 2026-10-16 -->

The file goes to your present working directory, named after the test ID, unless you set `--file`. If you plan to import test cases in Step 3, also export each test with `--format csv`. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->

## Step 2: Run the Exported Tests on <BrandName />

These runs are not KaneAI tests. Their results appear on the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). Some mabl step types are not supported in these exports, as listed in [What Does Not Carry Over](#what-does-not-carry-over).

Set your credentials as environment variables:

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="mabl-export-format">

<TabItem value="playwright" label="Playwright on TestMu AI" default>

mabl's docs do not describe the structure of the Playwright export. For TypeScript tests that use the Playwright test runner, see [How to Run TypeScript Tests With Playwright](/support/docs/typescript-with-playwright/). Its `lambdatest-setup.ts` fixture makes the <BrandName /> CDP connection.

Where your test launches a local browser, connect to the <BrandName /> CDP endpoint instead. The `capabilities` object selects the browser and OS. Sample from [How to Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/):

```js
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

</TabItem>

<TabItem value="side" label="Selenium IDE on TestMu AI">

Install the SIDE Runner:

```bash
npm install -g selenium-side-runner
```

Run the exported file on the <BrandName /> Selenium grid. Replace `user-name`, `access-key` and `<exported-test>.side` with your values:

```bash
selenium-side-runner -w 4 "<exported-test>.side" --server https://user-name:access-key@hub.lambdatest.com/wd/hub -c "browserName='chrome' browserVersion='latest' platformName='Windows 10'"
```

`-w` sets the number of parallel processes. `-c` sets the browser, version and platform. See [Run Selenium IDE Tests](/support/docs/run-selenium-ide-tests-on-testmu-selenium-cloud-grid/).

</TabItem>

</Tabs>

## Step 3: Import Test Cases Into Test Manager

Test Manager has no mabl importer, so use CSV import. mabl's export docs do not list the CSV columns, so open the file and check them first. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->

1. In your Test Manager project, go to **Add Test Case > Import CSV**.
2. Choose **Test cases use a single row** or **Test cases use multiple rows**, to match how the steps are laid out.
3. Map the CSV headers to Test Manager fields. Mapping at least one CSV header to **Title** is mandatory. **Steps**, **Outcome**, **Folder**, system fields and custom fields are optional. Leave other columns as **Ignore Field**.
4. Map the values, review the preview, and start the import.

Each file can be up to 10 MB. See [Import Test Cases from CSV](/support/docs/csv-import/).

If the columns do not map well, attach the CSV or JSON export to the [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) instead. It writes new test cases from the file rather than importing the mabl tests.

## Step 4: Re-create Your Tests in KaneAI

### Start From a Test Case

Open a saved test case and click **Automate with KaneAI** in the **Automate** section. KaneAI opens a session pre-filled with the test case's steps, where you author and run the test. This works one test case at a time, and the test case must have steps or scenarios ([Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai)).

### Start a New Test

On the KaneAI homepage, click **Create a Web Test** and write each step in natural language ([Author your First Test](/support/docs/kane-ai-web-test/)). For mabl mobile tests, click **Create an App Test** and upload your Android or iOS app ([App Test](/support/docs/kane-ai-app-test/)).

[Manual Interaction](/support/docs/kaneai-manual-interaction/) records your clicks, typing and scrolling as steps. It works in desktop web browsers, Android apps and iOS apps in portrait, but not in mobile browsers. Add verify or assert steps as written instructions.

### Rebuild Flows, Variables and DataTables

- **Flows** are reusable sets of steps in mabl. <!-- Source: https://help.mabl.com/hc/en-us/articles/46647513274644-Step-groups-vs-flows, checked 2026-10-16 --> In KaneAI, select the steps in a paused session and click **Create Module**. Reuse it with **Add Module** from the slash command menu ([Modules](/support/docs/kane-ai-modules/)).
- **Variables:** use **Add a variable** from the slash command menu, or write `Set username as John` in natural language ([Variables in KaneAI](/support/docs/kane-ai-using-variables/)).
- **DataTables:** export each one with `mabl datatables export {datatable-id}` and the `--format csv` option. <!-- Source: https://docs.mabl.com/docs/mabl-cli/managing-datatables-in-the-cli.md, checked 2026-10-16 --> <!-- Source: https://docs.mabl.com/docs/mabl-cli/mabl-cli-command-reference.md, checked 2026-10-16 --> In Test Manager, open **Datasets**, use **Import Data** in the dataset editor, then verify the data and save ([Datasets](/support/docs/kane-ai-using-datasets/)).

### Re-create Unsupported Step Types

mabl's Selenium and Playwright exports do not support these step types. The KaneAI docs below cover each one:

| mabl step | KaneAI doc |
|---|---|
| Select steps | [Forms, Inputs & Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/) |
| Drag and drop steps | [Drag and Drop](/support/docs/kane-ai-drag-drop/) |
| JavaScript snippets | [JavaScript Execution](/support/docs/kane-ai-javascript-execution/) |
| API steps | [API Testing](/support/docs/kane-ai-api-testing/) |
| File uploads | [Upload and Download Files](/support/docs/kaneai-upload-and-download-files/) |
| MFA authenticator (TOTP) steps | [TOTP Authentication](/support/docs/kaneai-totp/) |
| Conditional steps (Selenium exports) | [Conditional Logic](/support/docs/kaneai-conditional-logic/) |
| Accessibility checks | **Accessibility Testing** in a Classic report test run, desktop Chrome and Edge only ([Advanced Configurations](/support/docs/kaneai-hyperexecute-test-run-execution/#advanced-configurations)) |

<!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/19078194950676-Support-for-MFA-logins, checked 2026-10-16 -->
<!-- Source: https://help.mabl.com/hc/en-us/articles/19078186418324-Interacting-with-HTML-select-dropdowns, checked 2026-10-16 -->

### Re-create API Tests

mabl exports API tests as Postman collections in JSON, from the test details page or the API test editor. <!-- Source: https://help.mabl.com/hc/en-us/articles/19078220967956-Export-mabl-API-tests-as-Postman-JSON, checked 2026-10-16 --> KaneAI documents curl input for API steps, not a Postman collection import. To move each request:

1. Import the mabl JSON file into Postman as a new collection. <!-- Source: https://help.mabl.com/hc/en-us/articles/19078220967956-Export-mabl-API-tests-as-Postman-JSON, checked 2026-10-16 -->
2. Open the request, click **Code**, and choose **cURL**. <!-- Source: https://learning.postman.com/docs/use/send-requests/create-requests/generate-code-snippets/, checked 2026-10-16 -->
3. In a KaneAI test, add an API step through the slash command and paste the curl command. You can paste several curl commands to add them all ([API Testing](/support/docs/kane-ai-api-testing/)).

### Generate Code

KaneAI generates code for tests saved as **Ready**, where every step has run and passed ([Code Generation](/support/docs/kane-ai-automation-code-generation/)):

- **Classic:** Selenium Python and Appium Python by default. Selenium Java and Playwright Python, C# and JavaScript are available on request.
- **New Experience:** Playwright Python and Playwright JavaScript. New Experience is rolling out in phases.

Contact support to enable an on-request framework or New Experience.

## Step 5: Run Your KaneAI Tests

1. In your Test Manager project, open **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign team members and update configurations as required, then save the test run.
4. Click **Run on HyperExecute**, then **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/). Device scope, per [Configurations](/support/docs/test-runs-configurations/):

- With the **KaneAI** toggle on, the available platforms are Desktop and Real Device.
- Native app testing on Real Devices is available only for KaneAI-generated test runs.
- Mobile browser testing on Real Devices is available for non-KaneAI test runs only.
- Virtual Mobile configurations are available for non-KaneAI test runs only.

For CI tools such as GitHub Actions or Jenkins, copy the Test Run ID from the test run URL. Send it as `test_run_id` in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`, with Basic Authentication ([Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/)).

## What Does Not Carry Over

- **The tests.** KaneAI does not import or convert mabl tests, and Test Manager has no mabl importer. KaneAI imports tests only from Katalon, for desktop web tests ([Migration from Katalon](/support/docs/one-click-migration-from-katalon/)). Test Manager's one-click importers cover TestRail, qTest, Xray and Zephyr Scale.
- **mabl-generated tests.** Only user-generated tests export. The visit home page, link crawler and visual smoke tests do not. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
- **Some steps.** Select steps, drag and drop steps, JavaScript snippets, API steps, cookie interactions and file uploads are not supported in Selenium or Playwright exports. The same applies to download assertions, accessibility checks, MFA authenticator steps, email testing and PDF testing. Selenium exports also do not support conditional steps. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
- **Code for other test types.** Playwright and Selenium IDE exports cover browser tests only. <!-- Source: https://docs.mabl.com/docs/mabl-cli/exporting-tests-from-the-cli.md, checked 2026-10-16 -->
- **Run history and results.** <BrandName /> documents no importer for them. Before you leave mabl, export run artifacts with `mabl test-runs export {run-id} --types all`. This works for browser tests run in the mabl cloud. **Coverage > Overview** can also download a CSV of passed and failed test totals by date. <!-- Source: https://help.mabl.com/hc/en-us/articles/17781700176532-Exporting-test-run-artifacts, checked 2026-10-16 --> <!-- Source: https://help.mabl.com/hc/en-us/articles/45825382610964-2026-02-02-Export-test-run-history-as-a-CSV, checked 2026-10-16 -->

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
       mabl To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): Katalon desktop web tests into KaneAI.
- [Import Test Cases from CSV](/support/docs/csv-import/): CSV mapping in Test Manager.
- [How to Migrate Existing Playwright Tests to <BrandName />](/support/docs/migrate-existing-playwright-tests/): the CDP endpoint.
- [Guide to Run Selenium IDE Tests Using <BrandName />](/support/docs/run-selenium-ide-tests-on-testmu-selenium-cloud-grid/): the SIDE Runner.
- [Testim To KaneAI Migration](/support/docs/testim-to-kaneai-migration-guide/): move from Testim to KaneAI.
- [Momentic To KaneAI Migration](/support/docs/momentic-to-kaneai-migration-guide/): move from Momentic to KaneAI.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): move from testRigor to KaneAI.
- [Tester Army To KaneAI Migration](/support/docs/tester-army-to-kaneai-migration-guide/): move from Tester Army to KaneAI.
- [Autosana To KaneAI Migration](/support/docs/autosana-to-kaneai-migration-guide/): move from Autosana to KaneAI.
