---
id: accessibility-web-rule-4-1-3-status-messages
title: Status Messages (4.1.3)
sidebar_label: Status Messages (4.1.3)
description: Rule-level Accessibility guidance for Status Messages (WCAG 4.1.3 Level AA).
slug: accessibility-web-rule-4-1-3-status-messages/
---

# Status Messages (4.1.3)

Status messages that provide information about the success or results of an action, the waiting state of an application, or the progress of a process must be programmatically determinable through role or properties so they can be presented to the user by assistive technologies without receiving focus.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
:::


## What this rule checks

The scanner verifies that dynamic status messages use ARIA live regions (`role="status"`, `role="alert"`, `aria-live`) so screen readers announce them without moving focus away from the current task.

## Why it matters

Sighted users see toast notifications, search result counts, and progress indicators update on screen. Screen-reader users miss these updates entirely unless the content is announced through a live region.

## Common failure patterns

- "3 results found" text appears on screen after a search but is not in a live region
- success/error banners injected into the DOM without `role="alert"` or `role="status"`
- loading spinners with no text announcement for screen readers
- cart item count updates that are only visual

## Remediation guidance

- use `role="status"` for non-urgent updates (result counts, save confirmations)
- use `role="alert"` for urgent messages (errors, warnings)
- ensure the live region exists in the DOM before the content is injected (add content to an existing container rather than injecting the container)
- avoid overusing alerts — frequent announcements interrupt the user's workflow

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
