---
id: sync-test-instance
title: Sync Test Instances in Manual Test Runs
hide_title: false
sidebar_label: Sync Test Instances
description: Learn how to sync test instances in manual test runs with the latest master test case version in TestMu AI Test Manager.
keywords:
  - sync test instance
  - test instance version
  - test run sync
  - manual test run
  - test manager
url: https://www.testmuai.com/support/docs/sync-test-instance/
site_name: TestMu AI
slug: sync-test-instance/
canonical: https://www.testmuai.com/support/docs/sync-test-instance/
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
          "name": "Sync Test Instances",
          "item": `${BRAND_URL}/support/docs/sync-test-instance/`
        }]
      })
    }}
></script>

When a master test case is updated (e.g., steps are added, descriptions are modified, or modules are restructured), the test instances in your existing manual test runs do not automatically reflect these changes. The **Sync Test Instance** feature lets you manually update a test instance to the latest version of its master test case, ensuring your test runs always reflect the most current requirements.

Each test instance tracks the **version** of the master test case it was created from (e.g., v1). When the master test case is updated to a newer version (e.g., v2), <BrandName /> Test Manager detects this version mismatch and makes the **sync action** available.

:::note Applies to Manual Test Runs Only
This feature is available only for **manual test runs**. KaneAI test runs always use the latest code export during execution, so syncing is not applicable.
:::

:::info Bulk Sync Coming Soon
Currently, you can only sync one test instance at a time. Bulk sync support is planned for a future release.
:::

## Identifying Stale Test Instances

### From the Test Run Listing

Each test instance card displays its current version (e.g., **v1**). A **grey** version label indicates the instance is up to date. If a newer version is available, the version label is highlighted in colour, and a **sync icon** appears next to it. Hover over the icon to see a tooltip (e.g., *Update to v2*), and click it to initiate the sync.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/instance_listing_sync.png').default} alt="Test run listing showing update badge on a stale test instance" className="doc_img"/>

### From the Test Instance Detail

When you open a stale test instance, a banner appears at the top indicating how many versions behind the instance is. From here, you can click **View comparison** to review the changes or **Update to vN** to sync.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/instance-detail-stale.png').default} alt="Test instance detail showing version behind banner" className="doc_img"/>

## Comparing Versions

Before syncing, you can review exactly what changed. Click **View comparison** from the version banner to open a side-by-side diff view. This highlights all differences between the test case version currently linked to the test instance and the latest version of the same test case — including changes to descriptions, preconditions, and individual steps.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/version-compare.png').default} alt="Version comparison view showing differences between versions" className="doc_img"/>

## Syncing a Test Instance

When you click the sync action, a confirmation modal appears with the following details:

- The instance will be updated to the latest version.
- **All statuses will be reset to Not Started** — both the overall instance status and every individual step status.
- **Existing remarks and attachments will be preserved** for re-verification.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/update-version-modal.png').default} alt="Confirmation modal for updating test instance version" className="doc_img"/>

Click **Update to Version** to confirm, or **Cancel** to keep the current version.

### After Syncing

Once synced, the test instance is updated with the latest master test case content — including any changes to the title, step descriptions, expected outcomes, and step structure (added, removed, or reordered steps). The instance and all step statuses are reset to **Not Started**, and a success notification confirms the update.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/instance-detail-updated.png').default} alt="Test instance updated to latest version with Not Started status" className="doc_img"/>

## Audit Log

Every sync action is recorded in the test instance's [Audit Log](/support/docs/test-instance-audit-logs/). The log captures the version update (e.g., v1 → v2), the instance and step-level status resets, and any related changes — giving your team full traceability.

<img loading="lazy" src={require('../assets/images/test-manager/sync-test-instance/audit-logs.png').default} alt="Audit logs showing version sync and status reset events" className="doc_img"/>

:::tip Duplicating a Test Run
When you duplicate a test run, all test instances in the new run are automatically linked to the **latest version** of their master test cases — regardless of which version was used in the original run. All statuses are set to **Not Started**.
:::

## Limitations

- **No auto-sync** — Syncing is a manual action. Test instances do not update automatically when the master test case changes.
- **No partial status retention** — All statuses (instance and step level) are reset to **Not Started** upon sync. There is no option to selectively retain step statuses.
- **KaneAI-generated versions** — If the latest version of a master test case was generated via **Automate with KaneAI**, the sync action is disabled for that instance. A tooltip indicates the reason when you hover over the disabled action.
