---
id: one-click-migration-from-zephyr-scale
title: One Click Migration from Zephyr Scale
hide_title: true
sidebar_label: One Click Migration from Zephyr Scale
description: Migrate your test cases, folders, embedded screenshots, and custom fields from Zephyr Scale (Jira Cloud) to TestMu AI Test Manager in a single click.
keywords:
  - zephyr scale
  - zephyr scale migration
  - import data from zephyr scale
  - import data
  - jira zephyr scale
  - test migration
url: https://www.testmuai.com/support/docs/one-click-migration-from-zephyr-scale/
site_name: LambdaTest
slug: one-click-migration-from-zephyr-scale/
canonical: https://www.testmuai.com/support/docs/one-click-migration-from-zephyr-scale/
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
          "name": "One Click Migration from Zephyr Scale",
          "item": `${BRAND_URL}/support/docs/one-click-migration-from-zephyr-scale/`
        }]
      })
    }}
></script>

# One Click Migration from Zephyr Scale

<BrandName /> Test Manager supports one-click migration from **Zephyr Scale (Jira Cloud)**, allowing you to import your entire test library — including projects, test cases, folder structures, custom fields, and linked requirements — directly into Test Manager without manual data entry.

## Key Benefits

- **Zero manual effort** — All test cases, steps, and folder structures are automatically migrated.
- **Handles both Manual and BDD tests** — Manual step definitions and Gherkin/BDD scenarios are both fully supported.
- **Custom fields carried over** — Custom fields in your Zephyr Scale tests are automatically detected and created in Test Manager.
- **Rich text content preserved** — Embedded screenshots within rich text fields (description, preconditions, step descriptions, and expected results) are migrated.
- **Real-time progress tracking** — A progress bar shows migration status so you know exactly where things stand.

:::note
This migration supports **Zephyr Scale (Jira Cloud)** only. Zephyr Enterprise and Data Center are not supported at this time.
:::

## Prerequisites

Before starting the migration, ensure you have the following ready.

#### <BrandName /> Account
- An active <BrandName /> account with access to **Test Manager**.

#### Zephyr Scale Cloud Credentials

You need your Zephyr Scale Cloud API access token. Refer to the [Zephyr Scale API Access Tokens Management](https://support.smartbear.com/zephyr/docs/en/rest-api/api-access-tokens-management.html) documentation for detailed instructions. To obtain this:

1. Log in to your Jira Cloud instance.
2. Navigate to **Zephyr Scale** settings within your Jira instance.
3. Under **API Access Tokens**, generate a new token if you do not already have one.
4. Copy the **Access Token**.

:::warning
The Access Token may be shown only once. Store it securely before proceeding.
:::

#### Jira Cloud Credentials

You also need Jira Cloud credentials to access project metadata:

| Credential | Where to Find It |
|---|---|
| **Jira Host URL** | Your Jira instance URL, e.g., `https://yourcompany.atlassian.net` |
| **Email Address** | The email associated with your Atlassian account |
| **Jira API Token** | Generate from [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens) |

#### Jira Integration in <BrandName />

To migrate linked Jira issues and requirements, you must have the corresponding Jira instance integrated with <BrandName />. Without this integration, linked issues will not be carried over during migration. Refer to the [Link Jira Issues with Test Manager](https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/) guide to set up the integration before starting the migration.

#### Permissions
- Your Jira account must have **read access** to the project you are migrating.
- Your Zephyr Scale API token must have permission to access test cases and folders in the target project.

---

## Step-by-Step Migration Guide

### Step 1: Open the Migration Tool

1. Log in to your **<BrandName />** account.
2. Navigate to **Test Manager Projects** from the left sidebar.
3. Click the **Import data** option on the Project Listing page.
4. Select **Zephyr Scale** as the migration source from the **Import from** dropdown.

<img loading="lazy" src={require('../assets/images/xray-migration/import-data-project-listing.png').default} alt="import-data-project-listing" className="doc_img" width="1366" height="629"/>

### Step 2: Enter Your Credentials

Fill in the following fields:

| Field | Description |
|---|---|
| **Jira Host** | Your Jira Cloud instance URL (e.g., `https://yourcompany.atlassian.net`) |
| **Jira Email Address** | Your Atlassian account email |
| **Jira API Token** | API token generated from Atlassian |
| **Zephyr Scale API Access Token** | API Access Token generated from Zephyr Scale settings. Refer to the [API Access Tokens Management](https://support.smartbear.com/zephyr/docs/en/rest-api/api-access-tokens-management.html) documentation. |

Click **Continue**. The system validates both your Jira and Zephyr Scale credentials in parallel. If either set is invalid, an error message indicates which credentials need to be corrected.

<img loading="lazy" src={require('../assets/images/xray-migration/zephyr-enter-credentials.png').default} alt="enter-zephyr-credentials" className="doc_img" width="1366" height="629"/>

### Step 3: Select the Jira Project

1. After successful validation, a list of your Jira projects containing Zephyr Scale test cases is displayed.
2. Select the **project** you want to migrate from. You can select multiple projects at once.
3. Click **Start Migration**.

<img loading="lazy" src={require('../assets/images/xray-migration/select-project.png').default} alt="select-jira-project" className="doc_img" width="1366" height="629"/>

### Step 4: Monitor Progress

- A **progress bar** shows real-time migration status.
- The migration processes test cases in batches. Depending on the size of your test library, the complete process may take some time.

<img loading="lazy" src={require('../assets/images/xray-migration/migration-progress.png').default} alt="migration-progress" className="doc_img" width="1366" height="629"/>

- You can navigate away from the page and continue other work — the migration continues in the background. Once the migration is complete, you will receive an email notification.

<img loading="lazy" src={require('../assets/images/xray-migration/email-completion.png').default} alt="email-completion-notification" className="doc_img" width="1366" height="629"/>

### Step 5: Review the Results

Once migration completes:

1. The migrated Zephyr Scale projects will appear on the **Projects** listing page in Test Manager.
2. Navigate to the **Test Cases** section in any of your migrated projects.
3. Verify that your test cases and folder structure have been imported correctly.
4. Check a few test cases to confirm that steps, custom fields, embedded screenshots, and linked requirements are intact.

<img loading="lazy" src={require('../assets/images/xray-migration/zephyr-test-cases.png').default} alt="migration-results" className="doc_img" width="1366" height="629"/>

---

## What Gets Migrated

The following entities and data are transferred from Zephyr Scale to Test Manager during migration:

| Entity | Details |
|---|---|
| **Test Cases** | All test cases from the selected project are imported with their complete definitions. |
| **Test Case Metadata** | Summary, description, priority, labels, and preconditions are mapped to their corresponding Test Manager fields. |
| **Manual Test Steps** | Each step's **Step Description** and **Expected Result** are migrated directly. Step ordering is preserved. |
| **BDD/Gherkin Scenarios** | Full Gherkin scenario text is extracted and stored under the BDD Scenarios template. |
| **Folders** | Zephyr Scale folder hierarchy is preserved and mapped to Test Manager folders. |
| **Rich Text Fields** | Rich text content — including embedded screenshots, tables, lists, and other supported formatting within description, preconditions, step descriptions, and expected results — is preserved. |
| **Custom Fields** | Custom fields are automatically detected in Zephyr Scale and created in Test Manager with matching names. |
| **Linked Issues / Requirements** | Jira issue links and requirement associations are preserved. Requires [Jira integration](https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/) to be configured. |
| **Zephyr Scale Test Key** | The original Zephyr Scale test key is imported within tags, enabling quick reference and filtering in Test Manager. |

:::note
Zephyr Scale fields that cannot be directly mapped to system fields in Test Manager are automatically imported as custom fields. These may include Reporter, Assignee, Environment, Fix Version, Components, etc.
:::

:::info Test Data Migration
Test Data from Zephyr Scale steps is migrated as a single textarea custom field at the test case level, with textual data consolidated together. This is because Test Manager does not currently support a step-level Test Data field.
:::

## What Does Not Get Migrated

The migration focuses exclusively on your **test library** — definitions, structure, and metadata. The following entities are not included:

| Entity | Reason |
|---|---|
| **Entity-Level Attachments** | General file attachments linked to the test case and steps are not imported via the API migration. Only inline screenshots within rich text fields descriptions, preconditions, and steps are supported. |
| **Test Case Owner** | The original "Owner" of the test case in Zephyr Scale is not imported. All migrated test cases will show the user performing the migration as the creator. |
| **Test Cycles / Test Runs** | Execution-layer entity that is not part of the test case definition. |
| **Test Execution Logs** | Execution history and pass/fail results are excluded by design. |
| **Datasets** | Datasets and their corresponding parameters are not imported. |

---

## Test Steps Handling

The migration supports all three Zephyr Scale test script types — **Step by Step**, **BDD-Gherkin**, and **Plain Text**.

### Step by Step and Plain Text
Manual test cases are migrated with their full step definitions. Each step's **Step Description** and **Expected Result** fields are mapped directly. Step ordering is preserved, and any embedded screenshots within rich text fields are carried over. All Zephyr Scale **Step by Step** and **Plain text** test scripts are mapped to the **Manual Test Steps** template in Test Steps of a Test Case.

### BDD / Gherkin
For BDD-type test cases in Zephyr Scale, the full **Gherkin scenario** text (Given/When/Then) is extracted and stored in the test case as structured BDD content under the **BDD Scenarios** template in Test Steps.


### Call to Test Case (Recursive Steps)
If your Zephyr Scale steps reference other test cases using the **"Call to Test Case"** step type, the migrator recursively fetches and includes the steps from the referenced test case. This ensures that all linked step definitions are fully resolved and available in the migrated test case.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| **Invalid Zephyr Scale credentials** | Verify your Zephyr Scale Access Token. Re-generate it from Zephyr Scale settings if needed. Ensure you are using a **Zephyr Scale Cloud** token, not a Zephyr Enterprise or Jira Data Center token. |
| **Invalid Jira credentials** | Confirm you are using a **Jira API Token** (not your Jira password). Generate one at [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens). Verify the email matches the account that owns the token. |
| **No projects found** | Verify your Jira account has access to at least one project containing Zephyr Scale test cases. Check that Zephyr Scale is installed and active on your Jira Cloud instance. |
| **Migration stalls or takes too long** | Large projects (thousands of test cases) may take few hours depending on the size of embedded screenshots. If it does not gets stuck, re-initiate the migration. |
| **Custom fields not appearing** | Custom fields are auto-created during migration. Navigate to **Project Settings > Custom Fields** to verify they exist and are enabled. |

---

## FAQ

**Can I migrate multiple Jira projects?**

Yes. Run the migration once per Jira project. Each migration imports test cases from one Zephyr Scale project into one Test Manager project. Repeat the process for additional projects.

**Will migration affect my Zephyr Scale data?**

No. The migration is **read-only** on the Zephyr Scale side. Your test cases, folders, and all other data remain untouched.

**Can I run the migration again if something goes wrong?**

Yes. You can re-run the migration for the same project(s). Review the results after each run.

**Are Gherkin/BDD scenarios preserved exactly as written?**

Yes. The full Gherkin scenario is extracted and stored in the Test Manager test case with formatting and step structure preserved.

**What if I have test cases with no steps?**

Test cases without steps are still migrated. The test case metadata (title, description, priority, labels, etc.) is imported, and the steps section will be empty.

**Are Zephyr Enterprise and Zephyr on Jira Data Center supported?**

No. This migration currently supports **Zephyr Scale** (on Jira Cloud) only. Zephyr Enterprise and Zephyr on Jira Data Center are not supported.

---

## Known Limitations

| Limitation | Details |
|---|---|
| **Zephyr Scale Cloud only** | Zephyr Enterprise and Data Center are not supported |
| **No execution data** | Test Cycles, Test Runs, and execution logs are excluded by design |
| **No incremental sync** | Migration is a one-time import, not a continuous sync |
| **Tag size** | Tags/Labels exceeding **48 characters** will be truncated |
| **Folder name length** | Folder names are limited to **100 characters**. Names exceeding this limit are automatically truncated |
| **Owner not imported** | The original test case owner in Zephyr Scale is not imported. All migrated test cases show the migration user as the creator |
| **Entity-level attachments** | General file attachments from the test case "Attachments" tab are not imported. Only inline attachments within rich text fields are supported |
| **Execution environments** | Zephyr Scale environment configurations are not migrated |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
      One Click Migration from Zephyr Scale
      </span>
    </li>
  </ul>
</nav>
