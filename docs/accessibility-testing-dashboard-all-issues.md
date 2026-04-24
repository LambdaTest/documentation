---
id: accessibility-testing-dashboard-all-issues
title: All Issues
sidebar_label: All Issues
description: Review the full list of Accessibility findings and filter the issue set for triage.
slug: accessibility-testing-dashboard-all-issues/
url: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-all-issues/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-all-issues/
---

# All Issues

The All Issues view lists every issue found in a report and helps teams move from high-level summary to detailed triage.

The rest of this page walks through using All Issues to inspect findings and interpret grouping. It also explains how to decide whether to fix, hide, or escalate each item so your triage flow stays consistent across reviewers.

## What you can do here

- inspect issue-level detail
- review needs-review findings
- understand which guideline each issue maps to
- switch grouping based on the report structure
- take actions such as hide, restore, export, or report a bug

## When to use this

Use this view when you need issue-level depth rather than summary statistics.

## How to triage in All Issues (onboarding)

1. Open a report from the dashboard, then choose **All Issues**.
2. **Sort or filter** by severity, rule, URL, or state (available controls depend on scan type).
3. Click an issue to read the **element context**, selector hints, and remediation text where the product provides it.
4. For noisy or accepted exceptions, use **[Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)** so future runs respect your decision—document the reason for auditors.
5. For engineering work, use **[Bug Report](/support/docs/accessibility-report-bug/)** or your **[Jira / Slack](/support/docs/accessibility-report-integrations/)** integration so the finding carries screenshots and deep links.
6. Re-run the same URL or flow after a fix and **compare** issue counts or use **[Passed Test Cases](/support/docs/accessibility-passed-test-cases/)** if enabled for a fuller before/after story.

## Related docs

- [Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Bug Report](/support/docs/accessibility-report-bug/)
