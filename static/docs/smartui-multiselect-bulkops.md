# Multiselect & Bulk Operations

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Managing large visual regression builds can be time-consuming. **Multiselect & Bulk Operations** allow you to perform actions on multiple screenshots at once, significantly speeding up the review process.

## Key Capabilities
- **Batch Approval**: Select multiple "mismatch" screenshots and approve them as new baselines in one click.
- **Batch Rejection**: Quickly reject multiple incorrect screenshots.
- **Bulk Status Update**: Change the status of multiple tests simultaneously.

This guide explains the end-to-end workflow, supported actions, and best practices to avoid accidental approvals or baseline edits.

For a complete understanding of approval, reject, move, and merge functions across different workflows, see our [Approval & Baseline Management Guide](/support/docs/smartui-approval-workflow-guide/).

## Where multiselect appears

1. Sign in to [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2. Open any project → choose a build.
3. Navigate across tabs (e.g., **New**, **Changes Found**).
4. Look for the **selection toolbar** above the screenshot grid.

### Selection states

| State | Description | Screenshot |
| --- | --- | --- |
| None selected | Bulk action buttons stay disabled until at least one screenshot is selected. |  |
| Single selection | Shows contextual details (name, viewport, status). Bulk buttons activate. |  |
| Multi selection | Displays count (e.g., “3 selected”) and unlocks all bulk actions. |  |

Use the checkbox beside each screenshot card or the **Select All** checkbox in the toolbar to toggle selections quickly.

## Bulk actions

### Approve screenshots

Ideal when only a subset of diffs are valid.

1. Filter to **Failed** or **Pending** tab.
2. Select the screenshots that represent expected UI updates.
3. Click **Approve**.

SmartUI will:
- Mark each screenshot as **Approved**.
- Move them to the **Approved** tab for auditing.
- Preserve audit logs with the approver name and timestamp.

### Reject screenshots

Use this when a diff is unexpected, unstable, or blocked by other issues.

1. Select the screenshots within **Failed**/**Pending**.
2. Click **Reject**.

Rejected screenshots move to the **Rejected** tab and remain available for future comparison runs.

### Move approved screenshots to Baseline

Once approved diffs represent the new expected UI, promote them to Baseline:

1. Go to the **Approved** tab.
2. Select individual screenshots, curated subsets, or **Select All**.
3. Click **Move to Baseline**.

> Baseline moves update the reference snapshot for the next comparison. Ensure you only promote validated UI changes to keep noise low in future runs.

## Multiselect workflow example

1. Filter by tab `Changes Found`.
2. Use **Select All** (only filtered screenshots are targeted).
3. Deselect any screenshot needing manual review.
4. Click **Approve** → confirm in the dialog.
5. Bulk approval completes with a toast confirmation and updated counters.

1. Sort failures by **Severity**.
2. Select the unexpected diffs (e.g., CTA color regressions).
3. Click **Reject** to block them from merging.
4. Add a note (optional) so teammates understand the rejection reason.

1. After QA approval, hop to the **Approved** tab.
2. Select only the screenshots that represent canonical UI.
3. Click **Move to Baseline**.
4. Confirm to overwrite the existing baseline for the same test name + viewport.

## Best practices

Apply filters (approver, status, tab) before using Select All.
Confirm the selected count matches expectations to avoid cross-build approvals.

Bulk actions are powerful—always double-check each screenshot thumbnail.
Use single selection for high-risk diffs (checkout, payments, authentication).

After approving or rejecting, verify the activity log for transparency.
If anything was mis-clicked, undo by moving screenshots back via their tab.

Promote to baseline only after QA sign-off.
Keep a release branch baseline separate using Smart Git.

## Troubleshooting

Symptoms: Checkboxes or bulk buttons stay disabled.
Fixes:

Confirm you are in the Builds view, not inside an individual screenshot diff.
Refresh the page or clear cache if the toolbar fails to render.
Ensure your role has approval permissions on the project.

Symptoms: Toast error when approving/rejecting.
Fixes:

Retry after verifying network connectivity.
Confirm the build is still active (not archived).
Check SmartUI Troubleshooting Guide for API rate limits or backend incidents.

Symptoms: Move to Baseline button disabled or no visible changes after promotion.
Fixes:

Only Approved screenshots can be promoted; re-approve if needed.
Baseline updates can take a minute to propagate—refresh or reopen the build.
Ensure the associated branch/build is not locked by automated workflows.

## Next steps

- Compare multiselect approval speeds with your previous manual workflow and document the improvement.
- Pair multiselect with [Smart Ignore](/support/docs/smartui-smartignore/) to reduce noise before bulk approvals.
- Leverage [baseline management](/support/docs/smartui-baseline-management/) to keep production and release baselines in sync after bulk moves.
