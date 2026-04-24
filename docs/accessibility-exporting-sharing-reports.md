---
id: accessibility-exporting-sharing-reports
title: Exporting & Sharing Reports
sidebar_label: Exporting & Sharing Reports
description: Export, share, and distribute Accessibility results for triage, audit, and remediation workflows.
slug: accessibility-exporting-sharing-reports/
url: https://www.testmuai.com/support/docs/accessibility-exporting-sharing-reports/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-exporting-sharing-reports/
---

# Exporting & Sharing Reports

Use this page to understand how Accessibility results can be shared across stakeholders and exported for downstream workflows.

The following sections outline common reasons teams export Accessibility results and which downstream workflows those exports support. They also explain how sharing reflects the active state of the report you are viewing, including filters and visibility choices.

## Common use cases

- sharing findings with engineering or QA
- sending audit evidence to accessibility stakeholders
- reviewing results outside the dashboard
- exporting the current report state after filters or hide/restore decisions

## Important behavior

Report exports reflect the active issue state for the current report view. In scheduled aggregated reporting, historical consistency can still limit how past aggregate views are reflected.

## How to export (onboarding)

1. Open the report from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)**.
2. Apply any **filters** or **[hide/restore](/support/docs/accessibility-hide-restore-issues/)** decisions first—exports represent the **current** visible state.
3. Use the report’s **export** or **share** action (label varies by surface) and pick the format your stakeholder needs (spreadsheet, PDF, or packaged evidence where offered).
4. Store exports with **build metadata** (date, commit SHA, scan type) so audit trails stay traceable.
5. For recurring programs, pair exports with **[Integrations](/support/docs/accessibility-report-integrations/)** so issues also land in Jira or Slack automatically.

## Related docs

- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Bug Report](/support/docs/accessibility-report-bug/)
- [Integrations (JIRA / Slack / GitHub)](/support/docs/accessibility-report-integrations/)
