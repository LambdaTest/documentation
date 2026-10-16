---
id: uipath-test-cloud-to-kaneai-migration-guide
title: How to migrate from UiPath Test Cloud to KaneAI
hide_title: true
sidebar_label: UiPath Test Cloud To KaneAI Migration
description: Plan your UiPath Test Cloud migration to KaneAI. Export test cases from UiPath Test Manager, import them with CSV import, and re-create your tests in KaneAI.
keywords:
  - uipath test cloud migration to kaneai
  - uipath test cloud to kaneai migration
  - migrate from uipath test cloud to kaneai
  - how to migrate from uipath test cloud to kaneai
  - uipath test suite migration to kaneai
  - uipath test manager test case export
  - uipath tmh file to csv
url: https://www.testmuai.com/support/docs/uipath-test-cloud-to-kaneai-migration-guide/
site_name: TestMu AI
slug: uipath-test-cloud-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/uipath-test-cloud-to-kaneai-migration-guide/
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
          "name": "UiPath Test Cloud to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/uipath-test-cloud-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/uipath-test-cloud-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from UiPath Test Cloud to KaneAI",
    "description": "Plan your UiPath Test Cloud migration to KaneAI. Export test cases from UiPath Test Manager, import them with CSV import, and re-create your tests in KaneAI.",
    "url": "https://www.testmuai.com/support/docs/uipath-test-cloud-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "uipath test cloud migration to kaneai",
      "uipath test cloud to kaneai migration",
      "migrate from uipath test cloud to kaneai"
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
        "name": "The tabs show a test step from the UiPath TMH file format specification and the CSV row it becomes (UiPath TMH Test Step)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"testSteps\": [\n    {\n      \"id\": \"550e8400-e29b-41d4-a716-446655440010\",\n      \"testCaseId\": \"550e8400-e29b-41d4-a716-446655440001\",\n      \"orderNo\": 0,\n      \"actionType\": null,\n      \"description\": \"Navigate to the login page\",\n      \"expectedResult\": \"Login page is displayed\",\n      \"clipboardData\": \"\"\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The tabs show a test step from the UiPath TMH file format specification and the CSV row it becomes (TestMu AI Test Manager CSV)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "CSV",
        "text": "Title,Steps,Outcome,Tags\nVerify login with valid credentials,1. Navigate to the login page,1. Login page is displayed,regression"
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From UiPath Test Cloud To KaneAI
* * *
This guide covers your UiPath Test Cloud migration to KaneAI: how to move test cases into <BrandName /> Test Manager and re-create your tests. UiPath Test Suite has evolved into UiPath Test Cloud, UiPath's dedicated platform for application testing. <!-- Source: https://docs.uipath.com/test-cloud/automation-cloud/latest/admin-guide/about-test-suite, checked 2026-10-16 --> Its testing tools include Studio, Orchestrator, Robot, Test Manager, Autopilot and Agents. <!-- Source: https://docs.uipath.com/test-cloud/automation-cloud/latest/admin-guide/testing-tools, checked 2026-10-16 -->

You move the test cases you keep in UiPath Test Manager into <BrandName /> Test Manager. You then re-create your web and native mobile app tests in KaneAI and run them on <BrandName />.


<b>[Note: KaneAI does not import or convert UiPath Test Cloud tests. You export test cases from UiPath Test Manager and import them into <BrandName /> Test Manager as a CSV file. You then re-create each automated test in KaneAI in natural language.]</b>



***
## What Moves From UiPath Test Cloud and Where It Goes

| UiPath Test Cloud asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Test cases: name, description, labels, custom field values | Test Manager test cases | Build a CSV file, then use [CSV import](/support/docs/csv-import/) |
| Manual steps and expected results | Steps and outcomes | Export a TMH file and map them to **Steps** and **Outcome** |
| Studio web test cases, low-code (XAML) or coded (C#) | KaneAI web tests | **Automate with KaneAI** on an imported test case with steps, or a new test in natural language |
| Studio test cases for native mobile apps | KaneAI app tests | Re-create each test in natural language |
| Workflows that several test cases invoke | KaneAI modules | Author the shared steps once as a module |
| Excel test data for data-driven test cases | KaneAI datasets | Save it as CSV, then use **Import Data** |
| Test sets and their schedules | KaneAI test runs | Create a test run, then run or schedule it |
| Studio mobile tests that stay in UiPath | <BrandName /> real devices | A cloud device in Mobile Device Manager, per [UiPath Integration](/support/docs/uipath-integration/) |

<!-- Sources: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-data, https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-project, https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/tmh-file-format-specification, https://docs.uipath.com/studio/standalone/latest/user-guide/application-testing-test-cases, https://docs.uipath.com/studio/standalone/latest/user-guide/data-driven-testing, https://docs.uipath.com/activities/other/latest/ui-automation/understanding-the-architecture-of-mobile-device-automation, https://docs.uipath.com/activities/other/latest/ui-automation/cloud-devices, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your username and access key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** The **Automate with KaneAI** action requires KaneAI access.
- **A UiPath Test Manager license.** Users with a valid Test Manager license can export projects. Availability also depends on your UiPath cloud platform. <!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-project, checked 2026-10-16 -->
- **Custom fields in the target project.** UiPath exports custom field values but not their definitions. <!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/exporting-test-cases, checked 2026-10-16 --> Create the fields in <BrandName /> Test Manager and link them to the project first. See [System and Custom Fields](/support/docs/system-and-custom-fields/).

## Step 1: Export Test Cases From UiPath Test Manager

UiPath Test Manager has two exports for test cases:

| Export | File | What it carries |
|---|---|---|
| **Export to Excel** | XLSX | Key, name, description, labels, custom field values, manual and automated flags, and created and updated details. Test steps are not in its column list. |
| **Export** | TMH | Test cases and their custom field values. UiPath documents test steps (**Order**, **Action**, **Expected result**) for a project export. |

<!-- Sources: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-data, https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/exporting-test-cases, https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-project, checked 2026-10-16 -->

### Export the Test Case List to Excel

1. In UiPath Test Manager, open your project and go to **Test Cases**.
2. Apply filters if you want a subset. The export includes all entries from all pages.
3. Select **Export to Excel**. The XLSX file downloads to your default downloads location.

<!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-data, checked 2026-10-16 -->

### Export Test Cases as a TMH File

1. Open your project and go to **Test Cases**.
2. Select the test cases, then select **Export**.
3. Select the **Project export completed** notification to download the TMH file.

<!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/exporting-test-cases, checked 2026-10-16 -->

A project export can carry test cases with their test steps, plus labels. Select **More Options** on the project, check **Test cases**, **Object labels** and **Custom fields**, and select **Export**. Its download link expires in seven days. <!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-project, checked 2026-10-16 -->

## Step 2: Build the CSV File

CSV import in <BrandName /> Test Manager reads a valid `.csv` file of up to 10 MB, so split larger files.

### From the Excel Export

Open the XLSX file and save it as **CSV UTF-8 (Comma delimited)**, which keeps accented and non-Latin characters intact. This file has no test steps, so add them in Test Manager after the import.

### From the TMH File

A TMH file is a ZIP archive of JSON files. Extract it and use these folders under `objects/`:

- `testcases`: each test case's `id`, `name`, `description`, `preCondition` and `postCondition`.
- `teststeps`: each step's `testCaseId`, `orderNo`, `description` (the action) and `expectedResult`. The `orderNo` value starts at 0.
- `objectlabels` and `customfieldvalues`: labels and custom field values, linked to a test case by `objectId`. A `labelType` of 1 marks a system label, such as `manual`. Each custom field record holds one `fieldName` and its `fieldValue`, so give each field name its own column.

<!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/tmh-file-format-specification, checked 2026-10-16 -->

Write one row per test case. Join the steps to their test case on `testCaseId` and sort them by `orderNo`. Number them from 1 in one cell, indexed like `1. Go to lambdatest.com 2. click on login button`. Combine the expected results the same way. This is the **Test cases use a single row** layout of CSV import.

The tabs show a test step from the UiPath TMH file format specification and the CSV row it becomes. The name and label come from the same specification.

<Tabs className="docs__val">

<TabItem value="uipath-tmh-step" label="UiPath TMH Test Step" default>

```json
{
  "testSteps": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440010",
      "testCaseId": "550e8400-e29b-41d4-a716-446655440001",
      "orderNo": 0,
      "actionType": null,
      "description": "Navigate to the login page",
      "expectedResult": "Login page is displayed",
      "clipboardData": ""
    }
  ]
}
```

</TabItem>

<TabItem value="testmu-csv-row" label="TestMu AI Test Manager CSV">

```csv
Title,Steps,Outcome,Tags
Verify login with valid credentials,1. Navigate to the login page,1. Login page is displayed,regression
```

</TabItem>

</Tabs>

<!-- Source for the UiPath sample and its matching test case and label: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/tmh-file-format-specification, checked 2026-10-16 -->

## Step 3: Import the CSV File Into Test Manager

1. In your <BrandName /> Test Manager project, go to **Add Test Case > Import CSV**.
2. Upload the file and select **Test cases use a single row**.
3. Map each CSV header to a field. Mapping at least one CSV header to **Title** is mandatory.
4. Map the values, review the preview, and start the import.

Use these targets for the UiPath columns:

| From the UiPath export | Map to |
|---|---|
| Name | **Title** |
| Description | **Description** |
| Precondition | **Precondition** |
| Step actions | **Steps** |
| Expected results | **Outcome** |
| Labels | **Tag(s)**, up to 48 characters per tag. If one cell holds several labels, test the import with one row first. |
| Custom field values | Your matching **Custom Fields**, or **Add New Field** |
| Key, postcondition and other columns | A custom field for traceability, or **Ignore Field** |

See [Import Test Cases from CSV](/support/docs/csv-import/) for every option.

## Step 4: Re-create Automated Tests in KaneAI

Studio test cases are low-code XAML files or coded C# test cases, which you publish to Orchestrator as `nupkg` packages. <!-- Source: https://docs.uipath.com/studio/standalone/latest/user-guide/application-testing-test-cases, checked 2026-10-16 --> Re-create each one in KaneAI in natural language.

### Start From a Test Case

Open an imported test case and click [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai) in its **Automate** section. A KaneAI session opens, pre-filled with the steps and their expected results. You author and run the test there, one test case at a time. The test case must have steps.

### Start a New Test

- Click **Create a Web Test**, or **Create an App Test** to upload an Android or iOS app. See [web tests](/support/docs/kane-ai-web-test/) and [app tests](/support/docs/kane-ai-app-test/).
- Describe each step in natural language. [Manual Interaction](/support/docs/kaneai-manual-interaction/) also records your clicks and typing as steps in desktop browsers, Android apps, and iOS apps in portrait.
- Write each check as an instruction, because Manual Interaction does not record checks. Write a UiPath **Verify Expression** activity as a "verify" step. <!-- Source: https://docs.uipath.com/studio/standalone/latest/user-guide/creating-a-test-automation-project, checked 2026-10-16 -->

### Reuse Steps and Data

- **[Modules](/support/docs/kane-ai-modules/):** group a sequence of steps, such as a login flow, into a single reusable unit.
- **[Variables](/support/docs/kane-ai-using-variables/):** store values, such as URLs or credentials, and reuse them in a test case.
- **[Datasets](/support/docs/kane-ai-using-datasets/):** a test that uses parameters gets a Default Dataset. UiPath data-driven tests can read test data from Excel files. <!-- Source: https://docs.uipath.com/studio/standalone/latest/user-guide/data-driven-testing, checked 2026-10-16 --> Save that data as CSV and add it with **Import Data** in the dataset editor.

### Generate Test Cases From the Export

The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) accepts CSV, XLSX, JSON and XML files as requirements, up to 10 files of 50 MB each. It writes new test cases from your export, so review them. Its **Create and Automate** option is experimental.

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

When you create a [configuration](/support/docs/test-runs-configurations/) with the **KaneAI** toggle on, the available platforms are **Desktop** and **Real Device**. Native app testing on Real Devices is available only for KaneAI-generated test runs. Mobile browser testing on Real Devices and Virtual Mobile configurations are available for non-KaneAI test runs only.

To start a run from [CI/CD](/support/docs/kaneai-ci-cd-automation/), such as GitHub Actions or Jenkins, copy the Test Run ID from the test run URL. Send it as `test_run_id` in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use your <BrandName /> username and access key for Basic Authentication.

For websites hosted locally or behind a firewall, KaneAI supports [tunneling](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## What Does Not Carry Over

- **Studio test cases and packages.** They run on UiPath robots, from packages you publish to Orchestrator. Re-create them in KaneAI. <!-- Sources: https://docs.uipath.com/test-cloud/automation-cloud/latest/admin-guide/testing-tools, https://docs.uipath.com/studio/standalone/latest/user-guide/application-testing-test-cases, checked 2026-10-16 -->
- **Automation links.** A TMH export can carry links between test cases and Orchestrator automations. Those links stay in UiPath. <!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-project, checked 2026-10-16 -->
- **Test results and execution logs.** UiPath Test Manager exports all test executions to Excel, or one execution to PDF. Keep those files as your record. <!-- Source: https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/export-data, checked 2026-10-16 -->
- **Custom field definitions.** Create the fields in <BrandName /> before you import.
- **Requirements and their links.** If they are Jira issues, add the issue keys in a column and map it to **Link Jira**.
- **Attachments.** A CSV file carries text only, so upload the attachments you still need.

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
       UiPath Test Cloud To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [UiPath Integration](/support/docs/uipath-integration/): run UiPath Studio mobile tests on <BrandName /> real devices.
- [Import Test Cases from CSV](/support/docs/csv-import/): every option of the CSV import.
- [Migrating from Zephyr Enterprise to Test Manager](/support/docs/migrate-from-zephyr-enterprise/): another migration through CSV import.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web test cases into KaneAI.
- [Testim To KaneAI Migration](/support/docs/testim-to-kaneai-migration-guide/): move from Testim to KaneAI.
