---
id: accelq-to-kaneai-migration-guide
title: How to migrate from ACCELQ to KaneAI
hide_title: true
sidebar_label: ACCELQ To KaneAI Migration
description: Plan your ACCELQ migration to KaneAI. Export ACCELQ scenarios, import them into Test Manager with CSV import, and re-create your tests in KaneAI.
keywords:
  - accelq migration to kaneai
  - accelq to kaneai migration
  - migrate from accelq to kaneai
  - how to migrate from accelq to kaneai
  - export accelq scenarios to csv
  - export accelq test results
  - run accelq tests on testmu ai
url: https://www.testmuai.com/support/docs/accelq-to-kaneai-migration-guide/
site_name: TestMu AI
slug: accelq-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/accelq-to-kaneai-migration-guide/
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
          "name": "ACCELQ to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/accelq-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/accelq-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from ACCELQ to KaneAI",
    "description": "Plan your ACCELQ migration to KaneAI. Export ACCELQ scenarios, import them into Test Manager with CSV import, and re-create your tests in KaneAI.",
    "url": "https://www.testmuai.com/support/docs/accelq-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "accelq migration to kaneai",
      "accelq to kaneai migration",
      "migrate from accelq to kaneai"
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
        "name": "Step 3: Import Test Cases Into Test Manager (Example CSV in the single-row layout)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "CSV",
        "text": "Title,Description,Steps,Tags\nVerify Login to QBank,Log in and out of QBank,1. Login to QBank 2. Verify home page 3. Logout from QBank,regression"
      }
    ],
    "dateModified": "2026-10-19T08:00:00+05:30"
  }) }}
></script>

# Migrating From ACCELQ To KaneAI
* * *
This guide covers your ACCELQ migration to KaneAI: how to export ACCELQ scenarios, move test cases into <BrandName /> Test Manager, and re-create your tests. ACCELQ is a cloud-based continuous testing platform for functional and API testing. Its product lines are Automate Web, Automate API, Automate Mobile and ACCELQ Manual. <!-- Source: https://support.accelq.com/hc/en-us/articles/115010298928-What-is-ACCELQ, checked 2026-10-16 -->

ACCELQ and <BrandName /> already work together. You can keep running ACCELQ tests on <BrandName /> browsers and real devices while you re-create them in KaneAI.


<b>[Note: KaneAI does not import or convert ACCELQ tests. You export scenarios from ACCELQ and import them into <BrandName /> Test Manager as a CSV file. You then re-create each automated test in KaneAI in natural language.]</b>



***
## What Moves From ACCELQ and Where It Goes

| ACCELQ asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Automation Scenarios with their steps and custom fields | Test Manager test cases | Export the Scenario list with step details, then use [CSV import](/support/docs/csv-import/) |
| Manual Scenarios: steps and expected results | Test Manager test cases | Export a manual test run as a PDF with step-level detail, then use the AI Test Case Generator |
| Web and mobile Scenarios | KaneAI web and app tests | **Automate with KaneAI** on an imported test case with steps, or a new test in natural language |
| Actions that several Scenarios share | KaneAI modules | Author the shared steps once as a module |
| Test Cases (data variations) and Data Pools | KaneAI datasets | Export to Excel, save as CSV, then use **Import Data** |
| REST API calls from Automate API | API steps in KaneAI web tests | Paste each call as a curl command |
| ACCELQ tests you keep running for now | <BrandName /> browsers and real devices | The ACCELQ Agent with LambdaTest (now <BrandName />) as its external provider (Step 2) |

<!-- Sources: https://support.accelq.com/hc/en-us/articles/4422964250893-Exporting-Scenarios-and-Automation-steps-into-Excel, https://support.accelq.com/hc/en-us/articles/48504496031117-Exporting-Test-Results, https://support.accelq.com/hc/en-us/articles/360059929972-What-is-a-Scenario, https://support.accelq.com/hc/en-us/articles/360059930712-Concept-of-Parameterization-and-Test-Cases, https://support.accelq.com/hc/en-us/articles/49494174322701-Import-and-export-Data-Pool-data, https://support.accelq.com/hc/en-us/articles/115007527587-Support-for-API-testing, https://support.accelq.com/hc/en-us/articles/115010299068-Test-Suites-in-ACCELQ, https://support.accelq.com/hc/en-us/articles/6409687920525-Integration-with-LambdaTest, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your username and access key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** The **Automate with KaneAI** action requires KaneAI access.
- **ACCELQ access.** You need the Navigator **Scenarios** grid and the **Test Results** grid. ACCELQ's docs do not describe a plan or role limit for the Scenario export.
- **The ACCELQ Agent Dashboard.** You need it only for Step 2.
- **Custom fields in the target project.** Create the fields in <BrandName /> Test Manager and link them to the project first. See [System and Custom Fields](/support/docs/system-and-custom-fields/).

## Step 1: Export Your ACCELQ Scenarios and Data

ACCELQ exports entities from its Navigator grids, in Excel or CSV. <!-- Source: https://support.accelq.com/hc/en-us/articles/4422964250893-Exporting-Scenarios-and-Automation-steps-into-Excel, checked 2026-10-16 -->

### Export Automation Scenarios

1. In ACCELQ, open **Navigator** and go to the **Scenarios** grid.
2. Click the **Export** icon.
3. Choose **Scenarios list with step details**. Choose **Scenario list with steps and Test Cases** if you also want the data.
4. Select the custom fields to include for Scenarios and Test Cases.

Grouping by a field such as Status splits the output into one sheet or file per value. <!-- Source: https://support.accelq.com/hc/en-us/articles/4422964250893-Exporting-Scenarios-and-Automation-steps-into-Excel, checked 2026-10-16 -->

ACCELQ's docs do not list the column names of this export. Open the file and check them before you build the CSV.

### Export Test Case Data and Data Pools

- **Test Cases.** In ACCELQ, a Test Case is one complete set of values for a Scenario's parameters. Open the **Test Cases** tab of a Scenario and export the grid to Excel. <!-- Sources: https://support.accelq.com/hc/en-us/articles/360059930712-Concept-of-Parameterization-and-Test-Cases, https://support.accelq.com/hc/en-us/articles/41589227364237-Working-with-Test-Cases-in-ACCELQ, checked 2026-10-16 -->
- **Data Pools.** Open the pool and export it to `.xlsx`. Encrypted columns export as headers only, with no values. <!-- Source: https://support.accelq.com/hc/en-us/articles/49494174322701-Import-and-export-Data-Pool-data, checked 2026-10-16 -->

### Export Manual Test Runs

ACCELQ's UI docs describe no export of Manual Scenarios. Its Fetch Scenario details API accepts the manual Scenario type and can include step details, but ACCELQ's sample response does not show the step fields. <!-- Sources: https://support.accelq.com/hc/en-us/articles/41388256350861-Fetch-Scenario-details, https://accelq-docs.github.io/external-api-doc/api/Scenario%20API/get-scenario-step-details/, checked 2026-10-19 --> The documented way to get steps with their expected results is the test result export, which covers Scenarios that have been run. In the **Test Results** grid, select a manual run and choose **Export Results**, then **Export as PDF**. Choose **Step-level detail** to include each test case's steps with their expected results, then choose **Generate**. <!-- Source: https://support.accelq.com/hc/en-us/articles/48504496031117-Exporting-Test-Results, checked 2026-10-16 -->

## Step 2: Keep Running ACCELQ Tests on <BrandName /> While You Move

This step is optional. ACCELQ runs tests through the ACCELQ Agent, which can use LambdaTest (now <BrandName />) as an external provider. The browser runs remotely on <BrandName />. You continue to manage execution and results in ACCELQ. <!-- Source: https://support.accelq.com/hc/en-us/articles/6409687920525-Integration-with-LambdaTest, checked 2026-10-16 -->

1. Open your ACCELQ Agent Dashboard and click **Edit Configuration** on the target agent.
2. Select **Use external provider** for Web, Mobile, or both.
3. Enter your <BrandName /> username and access key, then save and restart the agent.
4. In the ACCELQ **Run** modal, select the agent under **AGENT/HOST**. Then choose the browser or device.

From the command line, set these properties in the Agent properties file with `acc properties --agent <name> --set <property>=<value>`: `web_provider_type=LAMBDATEST`, `web_provider_username`, and `web_provider_password`, which takes your access key. Mobile runs use `mobile_provider_type`, `mobile_provider_username` and `mobile_provider_password`. You can leave out `--agent` when only one agent is installed. <!-- Source: https://support.accelq.com/hc/en-us/articles/6409687920525-Integration-with-LambdaTest, checked 2026-10-16 -->

See [ACCELQ Integration](/support/docs/accelq-integration/) for the <BrandName /> side, including mobile view capture on real devices. To start an ACCELQ CI job on HyperExecute, see [ACCELQ Integration with HyperExecute](/support/docs/hyperexecute-accelq-integration/).

## Step 3: Import Test Cases Into Test Manager

CSV import in <BrandName /> Test Manager reads a valid `.csv` file of up to 10 MB, so split larger files.

### Build the CSV File

If you exported to Excel, save the file as **CSV UTF-8 (Comma delimited)**, which keeps accented and non-Latin characters intact. If the export has several sheets, save each sheet as its own CSV file. Write one row per Scenario. Number its steps from 1 in one cell, indexed like `1. Go to lambdatest.com 2. click on login button`. This is the **Test cases use a single row** layout of CSV import.

If your export lists each step in its own row, keep that shape. Select **Test cases use multiple rows** during the import instead.

The example below uses the steps of ACCELQ's own sample Scenario, "Verify Login to QBank". The description and tag are illustrative. <!-- Source: https://support.accelq.com/hc/en-us/articles/360059929972-What-is-a-Scenario, checked 2026-10-16 -->

```csv
Title,Description,Steps,Tags
Verify Login to QBank,Log in and out of QBank,1. Login to QBank 2. Verify home page 3. Logout from QBank,regression
```

### Run the Import

1. In your <BrandName /> Test Manager project, go to **Add Test Case > Import CSV**.
2. Upload the file and select the layout that matches it.
3. Map each CSV header to a field. Mapping at least one CSV header to **Title** is mandatory.
4. Map the values, review the preview, and start the import.

Use these targets for the ACCELQ columns:

| From the ACCELQ export | Map to |
|---|---|
| Scenario name | **Title** |
| Description | **Description** |
| Steps | **Steps** |
| Tags | **Tag(s)**, up to 48 characters per tag |
| Custom field values | Your matching **Custom Fields**, or **Add New Field** |
| Scenario ID and other columns | A custom field for traceability, or **Ignore Field** |

See [Import Test Cases from CSV](/support/docs/csv-import/) for every option.

### Bring In Manual Runs

On the Test Case Listing page, click **Generate With AI** and upload the PDF reports from Step 1. The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) accepts PDFs and spreadsheets, up to 10 files of 50 MB each. It writes new test cases from them, so review them before you save.

## Step 4: Re-create Your Tests in KaneAI

Each ACCELQ Scenario step is an Action, a reusable component that holds the step's logic. <!-- Source: https://support.accelq.com/hc/en-us/articles/360059929972-What-is-a-Scenario, checked 2026-10-16 --> KaneAI does not run Actions, so re-create each Scenario in natural language.

### Start From a Test Case

Open an imported test case and click [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai) in its **Automate** section. A KaneAI session opens, pre-filled with the steps and their expected results. You author and run the test there, one test case at a time. The test case must have steps.

### Start a New Test

- Click **Author Browser Test**, or **Author App Test** to add an Android or iOS app. See [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/) and [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/).
- Describe each step in natural language. [Manual Interaction](/support/docs/kaneai-manual-interaction/) also records your clicks and typing as steps in desktop browsers, Android apps, and iOS apps in portrait.
- Write each check as an instruction, because Manual Interaction does not record checks.

### Reuse Steps and Data

- **[Modules](/support/docs/kane-ai-modules/):** group a sequence of steps, such as a login flow, into a single reusable unit. Build one for each Action that many Scenarios share.
- **[Parameters](/support/docs/kane-ai-using-parameters/) and [datasets](/support/docs/kane-ai-using-datasets/):** a test that uses parameters gets a Default Dataset. Save your ACCELQ Test Case or Data Pool export as CSV and add it with **Import Data** in the dataset editor.
- **[Secrets](/support/docs/kane-ai-secrets/):** enter encrypted Data Pool values again as secrets, because the export leaves them out.

### Re-create API Steps

Automate API covers SOAP and REST services, message services, databases and enterprise message buses. <!-- Source: https://support.accelq.com/hc/en-us/articles/115007527587-Support-for-API-testing, checked 2026-10-16 --> ACCELQ's docs do not describe an export of API test logic. Write each REST call as a curl command, then paste it into an [API step](/support/docs/kane-ai-api-testing/) in a KaneAI web test. For database checks, add a [database connection](/support/docs/kaneai-database/).

### Generate Code

KaneAI generates code for a test saved as **Ready**, where every step has run and passed:

| Experience | Code you can generate |
|---|---|
| Classic | Selenium Python and Appium Python by default. Selenium Java and Playwright Python, C# and JavaScript on request. |
| New Experience | Playwright Python and Playwright JavaScript. |

Contact support to enable New Experience or an on-request option. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

## Step 5: Run Your KaneAI Tests

Run KaneAI tests through a [test run on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/):

1. In your Test Manager project, go to **Test Runs** and click **Create Test Run**. Set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Give each test case an assignee and at least one configuration, then save the run.
4. Click **Run on HyperExecute** and choose **Run Instances Now** or **Schedule Test Run**.

When you create a [configuration](/support/docs/test-runs-configurations/) with the **KaneAI** toggle on, the available platforms are **Desktop** and **Real Device**. Native app testing on Real Devices is available only for KaneAI-generated test runs. Virtual Mobile configurations are available for non-KaneAI test runs only.

In ACCELQ, a CI tool runs a CI Job through a plugin, such as the Jenkins plugin, or through ACCELQ's trigger-job REST API. <!-- Sources: https://support.accelq.com/hc/en-us/articles/360016077871-How-do-I-create-a-job-that-I-can-invoke-from-CI-tool, https://support.accelq.com/hc/en-us/articles/360061963212-CI-Test-Execution-Jenkins, https://support.accelq.com/hc/en-us/articles/360021077312-REST-API-end-point-to-trigger-test-execution-externally, checked 2026-10-16 --> To start a KaneAI run from [CI/CD](/support/docs/kaneai-ci-cd-automation/) instead, copy the Test Run ID from the test run URL. Send it as `test_run_id` in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use your <BrandName /> username and access key for Basic Authentication.

For websites hosted locally or behind a firewall, KaneAI supports [tunneling](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## What Does Not Carry Over

- **Actions, Contexts and element repositories.** They hold the logic and elements of your ACCELQ tests and stay in ACCELQ. <!-- Source: https://support.accelq.com/hc/en-us/articles/115010762348-Entities-or-Building-Blocks-in-ACCELQ, checked 2026-10-16 -->
- **Desktop, mainframe and message service tests.** Automate Web also covers desktop and mainframe automation, and Automate API covers message services. KaneAI tests web and mobile apps, so keep these tests in ACCELQ. <!-- Sources: https://support.accelq.com/hc/en-us/articles/115010298928-What-is-ACCELQ, https://support.accelq.com/hc/en-us/articles/115007527587-Support-for-API-testing, checked 2026-10-16 -->
- **Test results and screenshots.** Export runs to PDF or Excel as your record. Screenshots stay in ACCELQ. <!-- Source: https://support.accelq.com/hc/en-us/articles/48504496031117-Exporting-Test-Results, checked 2026-10-16 -->
- **Requirement links.** If they are Jira issues, add the issue keys in a column and map it to **Link Jira**. <!-- Source: https://support.accelq.com/hc/en-us/articles/115010299068-Test-Suites-in-ACCELQ, checked 2026-10-16 -->
- **Test Suites and schedules.** Rebuild them as KaneAI test runs.

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
       ACCELQ To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [ACCELQ Integration](/support/docs/accelq-integration/): run ACCELQ tests on <BrandName /> browsers and real devices.
- [ACCELQ Integration with HyperExecute](/support/docs/hyperexecute-accelq-integration/): run an ACCELQ CI job on HyperExecute.
- [Import Test Cases from CSV](/support/docs/csv-import/): every option of the CSV import.
- [Testim To KaneAI Migration](/support/docs/testim-to-kaneai-migration-guide/): move from Testim to KaneAI.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): move from testRigor to KaneAI.
