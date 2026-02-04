---
id: smartui-multiselect-bulkops
title: SmartUI Multiselect & Bulk Operations
sidebar_label: Multiselect & Bulk Operations
description: Streamline your visual testing workflow with SmartUI Multiselect & Bulk Operations. Approve or reject multiple screenshots simultaneously.
keywords:
  - SmartUI Multiselect
  - Bulk Operations
  - Visual Testing Workflow
  - Batch Approval
  - TestMu AI SmartUI
url: https://www.testmuai.com/support/docs/smartui-multiselect-bulkops/
site_name: LambdaTest
slug: smartui-multiselect-bulkops/
canonical: https://www.testmu.ai/support/docs/smartui-multiselect-bulkops/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "SmartUI Multiselect & Bulk Operations",
          "item": `${BRAND_URL}/support/docs/smartui-multiselect-bulkops/`
        }]
      })
    }}
></script>

# Multiselect & Bulk Operations

Managing large visual regression builds can be time-consuming. **Multiselect & Bulk Operations** allow you to perform actions on multiple screenshots at once, significantly speeding up the review process.

## Key Capabilities
- **Batch Approval**: Select multiple "mismatch" screenshots and approve them as new baselines in one click.
- **Batch Rejection**: Quickly reject multiple incorrect screenshots.
- **Bulk Status Update**: Change the status of multiple tests simultaneously.

This guide explains the end-to-end workflow, supported actions, and best practices to avoid accidental approvals or baseline edits.

:::info
For a complete understanding of approval, reject, move, and merge functions across different workflows, see our [Approval & Baseline Management Guide](/support/docs/smartui-approval-workflow-guide/).
:::

---

## Where multiselect appears

1. Sign in to [<BrandName /> SmartUI](https://smartui.lambdatest.com/).
2. Open any project → choose a build.
3. Navigate across tabs (e.g., **New**, **Changes Found**).  
4. Look for the **selection toolbar** above the screenshot grid.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/dashboard.png').default} alt="SmartUI multiselect toolbar on Builds dashboard" />

### Selection states

| State | Description | Screenshot |
| --- | --- | --- |
| None selected | Bulk action buttons stay disabled until at least one screenshot is selected. | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/noselectionbulkops.png').default} alt="No selection state" /> |
| Single selection | Shows contextual details (name, viewport, status). Bulk buttons activate. | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/noneselected.png').default} alt="Single screenshot selected" /> |
| Multi selection | Displays count (e.g., “3 selected”) and unlocks all bulk actions. | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/selectedstate.png').default} alt="Multiple screenshots selected" /> |

Use the checkbox beside each screenshot card or the **Select All** checkbox in the toolbar to toggle selections quickly.

---

## Bulk actions

### Approve screenshots

Ideal when only a subset of diffs are valid.

1. Filter to **Failed** or **Pending** tab.
2. Select the screenshots that represent expected UI updates.
3. Click **Approve**.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/approvebulkops.png').default} alt="Approve bulk operation" />

SmartUI will:
- Mark each screenshot as **Approved**.
- Move them to the **Approved** tab for auditing.
- Preserve audit logs with the approver name and timestamp.

### Reject screenshots

Use this when a diff is unexpected, unstable, or blocked by other issues.

1. Select the screenshots within **Failed**/**Pending**.
2. Click **Reject**.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/rejectbulkops.png').default} alt="Reject bulk operation" />

Rejected screenshots move to the **Rejected** tab and remain available for future comparison runs.

### Move approved screenshots to Baseline

Once approved diffs represent the new expected UI, promote them to Baseline:

1. Go to the **Approved** tab.
2. Select individual screenshots, curated subsets, or **Select All**.
3. Click **Move to Baseline**.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/movebulkops.png').default} alt="Move to baseline bulk operation" />

> Baseline moves update the reference snapshot for the next comparison. Ensure you only promote validated UI changes to keep noise low in future runs.

---

## Multiselect workflow example

<Tabs className='docs__val' groupId='workflow'>
  <TabItem value='approve-valid' label='Approve Valid Changes' default>

1. Filter by tab `Changes Found`.
2. Use **Select All** (only filtered screenshots are targeted).
3. Deselect any screenshot needing manual review.
4. Click **Approve** → confirm in the dialog.
5. Bulk approval completes with a toast confirmation and updated counters.

  </TabItem>

  <TabItem value='reject-outliers' label='Reject Outliers'>

1. Sort failures by **Severity**.
2. Select the unexpected diffs (e.g., CTA color regressions).
3. Click **Reject** to block them from merging.
4. Add a note (optional) so teammates understand the rejection reason.

  </TabItem>

  <TabItem value='promote-baseline' label='Promote to Baseline'>

1. After QA approval, hop to the **Approved** tab.
2. Select only the screenshots that represent canonical UI.
3. Click **Move to Baseline**.
4. Confirm to overwrite the existing baseline for the same test name + viewport.

  </TabItem>
</Tabs>

---

## Best practices

<Tabs className='docs__val' groupId='best-practices'>
  <TabItem value='verify-filter' label='Verify Filter Context' default>

<ul>
<li>Apply filters (approver, status, tab) before using <strong>Select All</strong>.</li>
<li>Confirm the selected count matches expectations to avoid cross-build approvals.</li>
</ul>

  </TabItem>

  <TabItem value='granular-selection' label='Stay Granular'>

<ul>
<li>Bulk actions are powerful—always double-check each screenshot thumbnail.</li>
<li>Use single selection for high-risk diffs (checkout, payments, authentication).</li>
</ul>

  </TabItem>

  <TabItem value='post-action-review' label='Review Activity'>

<ul>
<li>After approving or rejecting, verify the activity log for transparency.</li>
<li>If anything was mis-clicked, undo by moving screenshots back via their tab.</li>
</ul>

  </TabItem>

  <TabItem value='baseline-discipline' label='Baseline Discipline'>

<ul>
<li>Promote to baseline only after QA sign-off.</li>
<li>Keep a release branch baseline separate using <a href='/support/docs/smartui-smart-git-strategy/'>Smart Git</a>.</li>
</ul>

  </TabItem>
</Tabs>

---

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
  <TabItem value='selection-disabled' label='Selection Disabled' default>

<p><strong>Symptoms</strong>: Checkboxes or bulk buttons stay disabled.</p>
<p><strong>Fixes</strong>:</p>
<ul>
<li>Confirm you are in the Builds view, not inside an individual screenshot diff.</li>
<li>Refresh the page or clear cache if the toolbar fails to render.</li>
<li>Ensure your role has approval permissions on the project.</li>
</ul>

  </TabItem>

  <TabItem value='bulk-action-failed' label='Bulk Action Failed'>

<p><strong>Symptoms</strong>: Toast error when approving/rejecting.</p>
<p><strong>Fixes</strong>:</p>
<ul>
<li>Retry after verifying network connectivity.</li>
<li>Confirm the build is still active (not archived).</li>
<li>Check <a href='/support/docs/smartui-troubleshooting-guide/#ci-cd-integration'>SmartUI Troubleshooting Guide</a> for API rate limits or backend incidents.</li>
</ul>

  </TabItem>

  <TabItem value='baseline-promote-issues' label='Baseline Promotion Issues'>

<p><strong>Symptoms</strong>: Move to Baseline button disabled or no visible changes after promotion.</p>
<p><strong>Fixes</strong>:</p>
<ul>
<li>Only <strong>Approved</strong> screenshots can be promoted; re-approve if needed.</li>
<li>Baseline updates can take a minute to propagate—refresh or reopen the build.</li>
<li>Ensure the associated branch/build is not locked by automated workflows.</li>
</ul>

  </TabItem>
</Tabs>

---

## Next steps

- Compare multiselect approval speeds with your previous manual workflow and document the improvement.
- Pair multiselect with [Smart Ignore](/support/docs/smartui-smartignore/) to reduce noise before bulk approvals.
- Leverage [baseline management](/support/docs/smartui-baseline-management/) to keep production and release baselines in sync after bulk moves.

