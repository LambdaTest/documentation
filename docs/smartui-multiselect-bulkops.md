---
id: smartui-multiselect-bulkops
title: SmartUI Multiselect & Bulk Operations
description: Learn how to quickly approve, reject, or move multiple SmartUI screenshots to baseline using the multiselect workflow on the Builds dashboard.
slug: smartui-multiselect-bulkops/
keywords:
  - SmartUI multiselect
  - SmartUI bulk approval
  - SmartUI dashboard actions
  - SmartUI baseline move
  - Visual regression maintenance
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

The SmartUI dashboard supports **multiselect** across every build tab (All, Changes Found, Under Screening, Approved, Rejected, Added To Baseline). You can review screenshots faster by selecting:

- **No explicit selection** - Bulk operations apply to all screenshots in the current build (respecting active filters and tabs)
- **Multiple targeted screenshots** - Apply actions to specific screenshots you select
- **Select All** - Select all screenshots in the current tab or filter view

This guide explains the selection states, supported actions, and best practices to efficiently manage your visual regression tests.

> Need help diagnosing CLI, dashboard, or baseline issues? Jump to the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/).

---

## Where Multiselect Appears

1. Sign in to [LambdaTest SmartUI](https://smartui.lambdatest.com/).
2. Open any project → choose a build.
3. Navigate across tabs (e.g., **All**, **Changes Found**, **Under Screening**).  
4. Look for the **selection toolbar** above the screenshot grid.

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/dashboard.png').default} alt="SmartUI multiselect toolbar on Builds dashboard" />

---

## Selection States

SmartUI supports three distinct selection states, each with different behaviors for bulk operations. The table below explains each state, how it works, and when to use it.

| Selection State | Visual Indicator | How It Works | Scope of Operations | Use Case | Screenshot |
|----------------|------------------|--------------|---------------------|----------|------------|
| **None Selected** | No checkboxes checked, bulk buttons enabled | When no screenshots are explicitly selected, bulk operations apply to **all screenshots in the current build**, respecting active filters and tabs | All screenshots in current build | Quickly approve or reject all screenshots in a specific tab (e.g., all "Changes Found" screenshots) | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/noneselected.png').default} alt="None selected state - bulk operations apply to full build" /> |
| **Multiple Selected** | Individual checkboxes checked, selection count displayed (e.g., "3 selected") | When you explicitly select multiple screenshots, bulk operations apply **only to the selected screenshots**. Works with tabs and filters | Only selected screenshots in current context | Approve specific screenshots while leaving others for review | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/selectedstate.png').default} alt="Multiple screenshots selected state" /> |
| **Select All** | Toolbar checkbox checked, total count displayed (e.g., "12 selected") | Click the checkbox in the toolbar header to select all visible screenshots. You can then deselect individual screenshots if needed | All selected screenshots works with filters and tab selection | Select all screenshots in a tab, then deselect a few exceptions before bulk approving | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/allselect.png').default} alt="Select all screenshots in current view" /> |

### Visual Examples

**None Selected State:**
<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/noselectionbulkops.png').default} alt="Bulk operations available when none selected" />

**Selection with Tabs and Filters:**
<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/tabselection.png').default} alt="Selection works with tabs and filters" />

---

## Bulk Actions

The table below describes all available bulk actions, their workflows, and results. Each action works with all three selection states.

| Action | Button Location | When to Use | Workflow | Result | Screenshot |
|--------|----------------|-------------|----------|--------|------------|
| **Approve Screenshots** | Toolbar **Approve** button | When diffs are valid or when approving all screenshots in a tab | 1. Navigate to appropriate tab (e.g., **Changes Found**, **Under Screening**)<br/>2. Choose selection method (None selected / Multiple selected / Select All)<br/>3. Click **Approve** button<br/>4. Confirm in dialog | • Screenshots marked as **Approved**<br/>• Move to **Approved** tab<br/>• Audit logs preserve approver name and timestamp | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/approvebulkops.png').default} alt="Approve bulk operation dialog" /> |
| **Reject Screenshots** | Toolbar **Reject** button | When diffs are unexpected, unstable, or blocked by other issues | 1. Navigate to appropriate tab (e.g., **Changes Found**, **Under Screening**)<br/>2. Select screenshots to reject (or use none selected for all in tab)<br/>3. Click **Reject** button<br/>4. Confirm in dialog | • Screenshots marked as **Rejected**<br/>• Move to **Rejected** tab<br/>• Remain available for future comparison runs | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/rejectbulkops.png').default} alt="Reject bulk operation dialog" /> |
| **Move to Baseline** | Toolbar **Move to Baseline** button | Once approved diffs represent the new expected UI, promote them to Baseline | 1. Navigate to **Approved** tab<br/>2. Choose selection method (None selected / Multiple selected / Select All)<br/>3. Click **Move to Baseline** button<br/>4. Confirm in dialog | • Screenshots become new baseline for future comparisons<br/>• Update reference snapshot for next comparison<br/>• Move to **Added To Baseline** tab | <img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/multiselect/movebulkops.png').default} alt="Move to baseline bulk operation dialog" /> |

> **Important:** Baseline moves update the reference snapshot for the next comparison. Ensure you only promote validated UI changes to keep noise low in future runs.

---

## Selection State Comparison

<Tabs className='docs__val' groupId='selection-states'>
<TabItem value='none-selected' label='None Selected' default>

**Behavior:**
- No individual checkboxes checked
- Bulk operations apply to **all screenshots** in current build/tab/filter
- Fastest way to approve/reject entire builds or tabs

**When to use:**
- Approving all screenshots in "Changes Found" tab
- Rejecting all screenshots in "Under Screening" tab
- Moving all approved screenshots to baseline

**Example:**
1. Navigate to "Changes Found" tab
2. Ensure no screenshots are selected
3. Click **Approve** → All screenshots in that tab are approved

</TabItem>
<TabItem value='multiple-selected' label='Multiple Selected'>

**Behavior:**
- Individual checkboxes checked for specific screenshots
- Selection count displayed (e.g., "3 selected")
- Bulk operations apply **only to selected screenshots**
- Works with tabs and filters

**When to use:**
- Approving specific screenshots while leaving others for review
- Rejecting outliers in a batch of changes
- Moving specific approved screenshots to baseline

**Example:**
1. Navigate to "Changes Found" tab
2. Select 3 specific screenshots
3. Click **Approve** → Only those 3 screenshots are approved

</TabItem>
<TabItem value='select-all' label='Select All'>

**Behavior:**
- Click toolbar checkbox to select all visible screenshots
- Selection count shows total (e.g., "12 selected")
- Can deselect individual screenshots after selecting all
- Bulk operations apply to all selected screenshots

**When to use:**
- Selecting all screenshots in a tab, then deselecting exceptions
- Quick way to select many screenshots without clicking each one

**Example:**
1. Navigate to "Changes Found" tab
2. Click **Select All** checkbox → All 12 screenshots selected
3. Deselect 2 screenshots that need review
4. Click **Approve** → 10 screenshots are approved

</TabItem>
</Tabs>

---

## Multiselect Workflow Examples

<Tabs className='docs__val' groupId='workflow'>
<TabItem value='approve-all-in-tab' label='Approve All in Tab' default>

**Scenario:** All screenshots in "Changes Found" tab are valid changes.

1. Navigate to **Changes Found** tab
2. Ensure **no screenshots are selected** (none selected state)
3. Click **Approve** button
4. Confirm in the dialog: "Approve all screenshots"
5. All screenshots in the tab are approved and moved to **Approved** tab

</TabItem>
<TabItem value='approve-selected' label='Approve Selected Screenshots'>

**Scenario:** Only specific screenshots in a tab are valid.

1. Navigate to **Changes Found** tab
2. **Select multiple screenshots** by checking their individual checkboxes
3. Review selected screenshots (count displayed in toolbar)
4. Click **Approve** button
5. Confirm in the dialog: "Approve selected screenshots"
6. Only selected screenshots are approved

</TabItem>
<TabItem value='select-all-with-exceptions' label='Select All with Exceptions'>

**Scenario:** Most screenshots are valid, but a few need review.

1. Navigate to **Changes Found** tab
2. Click **Select All** checkbox in toolbar
3. **Deselect** the screenshots that need manual review
4. Click **Approve** button
5. Confirm in the dialog
6. All selected screenshots (except the deselected ones) are approved

</TabItem>
<TabItem value='reject-outliers' label='Reject Outliers'>

**Scenario:** Some screenshots show unexpected regressions.

1. Navigate to **Changes Found** tab
2. **Select** the screenshots with unexpected diffs
3. Click **Reject** button
4. Confirm in the dialog
5. Selected screenshots are rejected and moved to **Rejected** tab

</TabItem>
<TabItem value='promote-to-baseline' label='Promote to Baseline'>

**Scenario:** After QA approval, promote approved screenshots to baseline.

1. Navigate to **Approved** tab
2. Choose selection method:
   - **None selected**: Move all approved to baseline
   - **Multiple selected**: Move only selected approved screenshots
   - **Select All**: Move all visible approved screenshots
3. Click **Move to Baseline** button
4. Confirm in the dialog
5. Selected screenshots become the new baseline for future comparisons

</TabItem>
</Tabs>

---

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='understand-selection-state' label='Understand Selection State' default>

**Understand Selection State**

- **None selected**: Operations affect all screenshots in current tab/filter
- **Multiple selected**: Operations affect only selected screenshots
- **Select All**: Quick way to select all, then deselect exceptions
- Always check the selection count in the toolbar before bulk operations

</TabItem>
<TabItem value='verify-filter-context' label='Verify Filter Context'>

**Verify Filter Context**

- Apply filters (approver, status, tab) before using bulk operations
- Confirm the selected count matches expectations
- Remember that "none selected" applies to all screenshots in the current context
- Use tabs and filters to narrow down before bulk operations

</TabItem>
<TabItem value='granular-selection' label='Stay Granular'>

**Stay Granular**

- Bulk actions are powerful—always double-check each screenshot thumbnail
- Use multiple selection for high-risk diffs (checkout, payments, authentication)
- Review selected screenshots before confirming bulk operations
- Use "Select All" with caution—verify the count matches your expectations

</TabItem>
<TabItem value='post-action-review' label='Review Activity'>

**Review Activity**

- After approving or rejecting, verify the activity log for transparency
- Check the tab counts to confirm operations completed as expected
- If anything was mis-clicked, you can undo by moving screenshots back via their tab

</TabItem>
<TabItem value='baseline-discipline' label='Baseline Discipline'>

**Baseline Discipline**

- Promote to baseline only after QA sign-off
- Use "none selected" carefully when moving to baseline—it affects all approved screenshots
- Keep a release branch baseline separate using [Smart Git](/support/docs/smartui-smart-git-strategy/)
- Review baseline changes in the **Added To Baseline** tab

</TabItem>
</Tabs>

---

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='selection-disabled' label='Selection Disabled' default>

**Issue: Selection Disabled**

**Symptoms**: Checkboxes or bulk buttons stay disabled.

**Solutions**:
1. Confirm you are in the Builds view, not inside an individual screenshot diff
2. Refresh the page or clear cache if the toolbar fails to render
3. Ensure your role has approval permissions on the project
4. Check that the build is active (not archived)

</TabItem>
<TabItem value='unexpected-bulk-operation' label='Unexpected Bulk Operation'>

**Issue: Unexpected Bulk Operation**

**Symptoms**: More screenshots were affected than expected.

**Solutions**:
1. **None selected state**: Remember that no selection means all screenshots in the current tab/filter are affected
2. **Check selection count**: Always verify the count in the toolbar matches your expectations
3. **Review filters**: Ensure active filters are set correctly before bulk operations
4. **Use explicit selection**: When in doubt, explicitly select screenshots instead of using "none selected"

</TabItem>
<TabItem value='bulk-action-failed' label='Bulk Action Failed'>

**Issue: Bulk Action Failed**

**Symptoms**: Toast error when approving/rejecting.

**Solutions**:
1. Retry after verifying network connectivity
2. Confirm the build is still active (not archived)
3. Check [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for API rate limits or backend incidents
4. Verify you have permissions for the operation

</TabItem>
<TabItem value='baseline-promote-issues' label='Baseline Promotion Issues'>

**Issue: Baseline Promotion Issues**

**Symptoms**: Move to Baseline button disabled or no visible changes after promotion.

**Solutions**:
1. Only **Approved** screenshots can be promoted; re-approve if needed
2. Baseline updates can take a minute to propagate—refresh or reopen the build
3. Ensure the associated branch/build is not locked by automated workflows
4. Check the **Added To Baseline** tab to verify promotion completed

</TabItem>
</Tabs>

---

## Next Steps

- Compare multiselect approval speeds with your previous manual workflow and document the improvement
- Pair multiselect with [Smart Ignore](/support/docs/smartui-smartignore/) to reduce noise before bulk approvals
- Leverage [baseline management](/support/docs/smartui-baseline-management/) to keep production and release baselines in sync after bulk moves
- Use [Smart Git Strategy](/support/docs/smartui-smart-git-strategy/) for branch-specific baseline management
