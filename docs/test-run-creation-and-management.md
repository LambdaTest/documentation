---
id: test-run-creation-and-management
title: Test Run - Creation and Management
hide_title: false
sidebar_label: Create & Manage Test Run
description: Gain insights into effective Test Run Creation with TestMu AI, designed to streamline your workflow.
keywords:
  - test run
  - test run creation 
url: https://www.testmuai.com/support/docs/test-run-creation-and-management/
site_name: TestMu AI
slug: test-run-creation-and-management/
canonical: https://www.testmuai.com/support/docs/test-run-creation-and-management/
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
          "name": "Test Run Creation",
          "item": `${BRAND_URL}/support/docs/test-run-creation-and-management/`
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
      "@id": "https://www.testmuai.com/support/docs/test-run-creation-and-management/"
    },
    "headline": "Test Run - Creation and Management",
    "description": "Gain insights into effective Test Run Creation with TestMu AI, designed to streamline your workflow.",
    "url": "https://www.testmuai.com/support/docs/test-run-creation-and-management/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "test run",
      "test run creation"
    ],
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
    "dateModified": "2026-10-23T12:00:00+05:30"
  }) }}
/>
This guide outlines the steps required to create, configure, and manage test runs within <BrandName />'s Test Manager. It provides developers and testers with a clear understanding of the process, enabling efficient test execution and organization.

## 1. Creating a Test Run
### Initiate a New Test Run
- Navigate to the Test Manager and click on **Create Test Run**.
- Enter a Test Run Name and an optional Description to define the purpose of the test run.

:::tip
Use descriptive names to easily identify test runs later.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-runs-one.webp').default} alt="Real "  className="doc_img"/>

### Add Tags
- Assign relevant Tags to categorize the test run.
- Click **Create Test Run** to proceed.

<img loading="lazy" src={require('../assets/images/test-run/2.png').default} alt="Real "  className="doc_img"/>

Creating the test run takes you through three steps: **Enter Details**, **Add Test Cases**, and **Set Configurations and Assignee**. The steps are shown at the top of the page, so you can see which one you are on.

## 2. Adding and Configuring Test Cases
### Add Test Cases
In the **Add Test Cases** step, choose the test cases to include in the test run.

- Use the **Folders** tree to work folder by folder. Each folder shows how many of its test cases are selected, and selecting a folder's checkbox selects every test case in it.
- Use search and the **Status**, **Tags**, and **More** filters to narrow the list. Most filters can also exclude values: switch one to **Not Equals** to leave out test cases with the selected values, while test cases with no value for that field stay in the list. See [Include or Exclude Values](/support/docs/manual-test-case-creation/#include-or-exclude-values).
- Select test cases one by one, or use the checkbox in the list header to select every test case the list shows. With filters applied, select all picks exactly the test cases the filters show.
- The number of selected test cases is shown at the bottom of the page. Use **Clear All** to start over.
- Click **Add Test Cases** to add the selection and move to the next step.

The same picker opens when you add or remove test cases later from **Manage Test Cases**.

<img loading="lazy" src={require('../assets/images/test-run/create-flow/add-test-cases.png').default} alt="Add Test Cases step with the folder tree, filters, and every test case selected" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/test-manager/filters/manage-test-cases-status-filter.png').default} alt="Status filter set to Not Equals in Manage Test Cases" className="doc_img"/>

:::tip
Test cases shared into your project from other projects can be added to a test run too. Select them from **Shared Incoming**. See [Share Test Cases Across Projects](/support/docs/share-test-cases-across-projects/#add-shared-test-cases-to-test-runs).
:::

### Set Configurations and Assignee
In the **Set Configurations and Assignee** step, every added test case is listed along with what it still needs. A test case is flagged when it has no configuration, or when some of its test instances have no assignee. Below each test case, a summary shows how many configurations and test instances it has, and how many of those test instances are assigned. Expand a test case to see its configurations.

For each test case, you can:
- **Set Config**: choose the configurations to run it on. Each configuration creates one test instance of the test case. Once a test case has configurations, use the same action to update them.
- **Set Assignee**: assign its test instances to a team member.
- **Delete**: remove the test case from the test run.

To change many test cases at once, select them, or select all of them from the list header, and use the same actions in the header.

The summary bar at the bottom of the page shows the number of test cases added, the number of test instances, how many test cases are missing a configuration, how many test instances are missing an assignee, and the configurations in use.

To add or remove test cases without leaving this step, click **Manage Test Cases**.

<img loading="lazy" src={require('../assets/images/test-run/create-flow/set-configurations-and-assignee.png').default} alt="Set Configurations and Assignee step with every test case selected and configurations and assignees still missing" className="doc_img"/>

### Add Configurations
**Set Config** opens the **Add Configuration** panel.
- Search configurations by name, or filter them by OS, browser, and resolution.
- Select the configurations to apply. You can select several, or all of them.
- Click **Create a Configuration** to add one that does not exist yet, or **Manage configurations** to open your configuration list.
- Click **Apply**.

> Note: Configurations allow you to define environment settings, such as browser and device combinations.

:::warning
Applying configurations to several test cases at once replaces the configurations those test cases already have.
:::

<img loading="lazy" src={require('../assets/images/test-run/create-flow/add-configuration-panel.png').default} alt="Add Configuration panel with every configuration selected" className="doc_img"/>

To run a parameterized test case once for each dataset row, set a dataset on its configuration. See [Run Parameterized Manual Test Cases](/support/docs/test-manager-variables-parameters-secrets/#run-parameterized-manual-test-cases).

### Large Test Runs Are Processed in the Background
When you add a large number of test cases, or apply configurations or assignees to a large number of them, the change is applied in the background. The page stays responsive while you set up large test runs, instead of hanging or failing.

- While a change is being applied, a progress indicator is shown at the top of the step. You can wait on the page, or continue working elsewhere and come back later.
- **Save Test Run** is unavailable until the change finishes.
- When the change finishes, the list and the summary bar are updated. For example, applying 40 configurations to 91 test cases creates 3,640 test instances.

<img loading="lazy" src={require('../assets/images/test-run/create-flow/applying-changes-in-background.png').default} alt="Configurations being applied in the background, with Save Test Run unavailable" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/test-run/create-flow/configurations-applied.png').default} alt="Set Configurations and Assignee step after 40 configurations were applied to 91 test cases" className="doc_img"/>

## 3. Saving and Managing Test Runs
### Finalize the Test Run
- Click Save Test Run to finalize the setup.
- View the created test run and its associated test instances in the dashboard.

Test instances are organized using a **Folders** sidebar on the left, reflecting the folder structure of the test cases added to the test run. Only folders whose test cases are included in the test run are displayed, and each folder shows the count of test instances it contains (e.g., `3/3`, `4/4`).

- Select a folder to filter and view only its test instances. The status summary (Passed, Failed, Not Started, Skipped) is displayed in the top-right corner of the listing for the selected folder.
- Collapse or expand folders for easier navigation.
- Click the **three-dot menu** on the **Folders** header to toggle **Include Child Folders**. When enabled (default), selecting a parent folder also displays test instances from its child folders.

<img loading="lazy" src={require('../assets/images/test-run/6.png').default} alt="Real "  className="doc_img"/>

<!-- screenshot: folder sidebar with Include Child Folders option -->

### Bulk Update Options
- To update multiple test instances:
- Select multiple test instances.
- Use the Select Assignee and Select Status options to apply changes in bulk.

<img loading="lazy" src={require('../assets/images/test-run/7.png').default} alt="Real "  className="doc_img"/>

### Update Test Step Status
- Within any test instance, individually update the status of each test step.
- Add remarks or actual outcomes for manual test steps.

<img loading="lazy" src={require('../assets/images/test-run/8.png').default} alt="Real "  className="doc_img"/>

### Read the Test Case Details During Execution

A manual test instance opens on three tabs: **Test steps**, **Test case details**, and **Issues**.

The **Test case details** tab shows the content of the test case you are executing, so you do not have to leave the run to read it:

- **Description**, **Pre-conditions**, and **Attachments**, which you can preview or download.
- **Status**, **Type**, **Priority**, **Automation Status**, **Tags**, and any **Custom Fields**.

Fields that have no value are left out. The tab is read only: you cannot edit the test case or add attachments from here. To change any of it, open the test case from its ID in the instance header and edit it on the [Test Case Details](/support/docs/manual-test-case-creation/#test-case-details) page.

<img loading="lazy" src={require('../assets/images/test-run/test-case-details-tab.png').default} alt="Test case details tab on a manual test instance" className="doc_img"/>

The tab shows the test case **as of the version this instance is linked to**, the version badge next to the test case ID, which is not always the latest version of the test case. When you update the instance to a newer version, the tab reflects the new version along with the steps. See [Sync Test Instances](/support/docs/sync-test-instance/).

:::note Applies to Manual Test Runs Only
The **Test case details** tab is available on manual test instances.
:::

## 4. Filtering Test Instances

A filter bar above the test instance list lets you narrow down a test run by:

- **Test instance attributes**: Status, Assignee, Platform, OS, Browser, Resolution, Device.
- **Test case attributes**: Tags, Priority, Test Case Status.
- **Test Case Custom Fields**: available under **More Filters**.

Filters work on both Manual and Automation test runs, apply at the **All Test Instances** view as well as at any folder, and persist as you switch between folders. The active filter state is also reflected in the page URL, so you can bookmark or share a filtered view.

<img loading="lazy" src={require('../assets/images/test-run/filter-bar.png').default} alt="Filter bar in the Test Run Detail view" className="doc_img"/>

:::note Supported Custom Field types
Custom Fields can be filtered only for types: **Single Select Dropdown**, **Multi Select Dropdown**, **User**, **Boolean**, and **Date**. Of these, **Single Select Dropdown**, **Multi Select Dropdown**, and **User** can also be excluded with **Not Equals**.
:::

### Exclude Values

Each filter that lists values can either include or exclude the values you select. Switch a filter to **Not Equals** next to its search box to hide the test instances that have any of the selected values, for example every instance on **Windows**, or every instance assigned to one tester.

**Not Equals** keeps test instances that have no value for that field. Excluding an assignee keeps the unassigned instances, and excluding an OS or browser keeps the instances with no configuration. To hide the unassigned instances as well, also select **Unassigned** in the **Assignee** filter.

Filters in different fields combine, so an instance has to match all of them. When you select all instances in a filtered view, bulk updates apply only to the instances the filters show. For how exclusion works on each kind of field, see [Include or Exclude Values](/support/docs/manual-test-case-creation/#include-or-exclude-values).

## 5. Enhancing Test Runs with Test Evidences
### Adding Remarks and Attachments
- Add Remarks or actual outcomes to enhance test instance execution details.
- You can add remarks and attachments at both the individual test step level and the overall test instance level.

<img loading="lazy" src={require('../assets/images/test-run/9.png').default} alt="Real "  className="doc_img"/>

The Remark field supports **rich text formatting**, including:
- Inline image embedding: paste images directly into the field.
- Text styling such as bold, italic, bullet lists, and other standard rich text options.

:::note
Remarks have a maximum limit of **5000 characters**.
:::

- Attach supporting files or screenshots to the remarks for better context.

<img loading="lazy" src={require('../assets/images/test-run/10.png').default} alt="Real "  className="doc_img"/>

## 6. Execute Test Runs on <BrandName /> Cloud

Execute your manual test instances directly on <BrandName /> Cloud, no local setup or environment configuration required. This allows your team to run manual tests on real browsers and devices hosted on the cloud, making it one of the most efficient ways to validate your test cases.

**To execute a test run:**

1. Click the **Play** icon on any test instance to launch execution on <BrandName /> Cloud.

<img loading="lazy" src={require('../assets/images/test-run/11.png').default} alt="Real "  className="doc_img"/>

2. During execution, update the status of individual test cases and test steps in real time as you verify each one.

<img loading="lazy" src={require('../assets/images/test-run/14.png').default} alt="Real "  className="doc_img"/>

:::tip Why execute on the Cloud?
Running test instances on <BrandName /> Cloud gives you access to a wide range of real browsers, devices, and OS combinations, without maintaining local infrastructure. It ensures consistent, reliable test execution across environments.
:::

:::note Track bugs during execution
Bugs raised or linked while executing an instance are surfaced under that Test Case instance. To link Jira or Azure DevOps tickets at the instance and step level, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).
:::

## 7. Test Run Options

You can manage your test runs using the options available in the **three-dot menu** on each test run. The following actions are available:

| Action | Description |
|---|---|
| **Edit** | Modify the test run by adding or removing test cases from **Manage Test Cases**, or by changing configurations and assignees. Large changes are [processed in the background](#large-test-runs-are-processed-in-the-background). KaneAI test runs can only be edited if they have not been executed. |
| **Duplicate** | Create a copy of the test run for re-execution or variation testing. |
| **Archive** | Move completed test runs to the archive to keep your workspace clean and organized. |
| **Delete** | Permanently remove a test run that is no longer needed. |

:::note
Archiving a test run is not the same as archiving a test case. An archived test case stays in any run it was already part of and keeps its executions as history, but it is not offered when you create a new test run and is not carried across when you duplicate one. See [Archive and Restore Test Cases](/support/docs/test-case-archive/).
:::

<img loading="lazy" src={require('../assets/images/test-run/13.png').default} alt="Real "  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/test-run/12.png').default} alt="Editing an existing test run"  className="doc_img"/>

:::tip Act on many test runs at once
Select several test runs in the list to move them to another folder, copy them into fresh runs for the next cycle, or delete them in one action. You can also drag selected runs onto a folder to move or copy them. A moved run keeps its ID and execution history, and a copied run starts with every test instance at Not Started. See [Bulk Move, Copy, and Delete Test Runs](/support/docs/test-run-bulk-actions/).
:::

