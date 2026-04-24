---
id: accessibility-report-bug
title: Bug Report
sidebar_label: Bug Report
description: Create a bug from Accessibility report data and send it to your integrated issue workflow.
slug: accessibility-report-bug/
url: https://www.testmuai.com/support/docs/accessibility-report-bug/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-report-bug/
---

# Bug Report

Use Bug Report to convert Accessibility findings into actionable engineering work.

Bug Report turns confirmed accessibility findings into engineering work items inside the issue trackers your team already trusts. This page explains when raising a bug from a report is appropriate and how that action extends remediation beyond the dashboard into delivery rituals. Use it when you want a repeatable handoff from accessibility evidence to tracked fixes.

## Typical flow

1. Open the report.
2. Review the issue or issue group.
3. Use the report action to create a bug.
4. Route it into the team's issue-management workflow.

## Best use cases

- confirmed issues on real user flows
- high-severity findings that need engineering follow-up
- tracked remediation work tied to releases or audits

## Onboarding: file a bug from a report

1. Open **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)** and select the finding you want tracked.
2. Choose **Report bug** (or equivalent) from the row or detail actions.
3. Confirm the **title** auto-fills from the rule or element; edit so engineers recognize the user impact.
4. Attach **screenshots or HAR** if the dialog offers uploads—speeds reproduction.
5. Pick the **integration project** (Jira/Azure/etc.) if connected via **[Integrations](/support/docs/accessibility-report-integrations/)**; otherwise copy the deep link into your tracker manually.
6. After the engineering fix ships, **re-run** the scan and link the new build to the same ticket for closure.

## Related docs

- [Integrations (JIRA / Slack / GitHub)](/support/docs/accessibility-report-integrations/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
